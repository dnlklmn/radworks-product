#!/usr/bin/env node

/**
 * Radicle Desktop App FAQ Generator
 * 
 * This script fetches common questions from the Radicle Zulip support channel,
 * processes them, and updates the FAQ section in the desktop app guide markdown file.
 * 
 * It is designed to be run weekly to keep the FAQ section up to date.
 * 
 * Usage: node update_desktop_faq.js
 * 
 * Requirements:
 * - Node.js 18+
 * - zulip-js package
 * - dotenv package
 * 
 * Setup:
 * 1. Create a .env file with your Zulip credentials:
 *    ZULIP_EMAIL=your-bot-email@example.com
 *    ZULIP_API_KEY=your-api-key
 *    ZULIP_REALM=https://radicle.zulipchat.com
 * 
 * 2. Create a Zulip bot account to access the API:
 *    https://zulipchat.com/help/add-a-bot-or-integration
 */

const fs = require('fs');
const path = require('path');
const zulip = require('zulip-js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Configuration
const CONFIG = {
  // Zulip channel ID for support
  supportChannelId: '369873',
  // Path to the desktop app guide markdown file
  guideFilePath: path.join(__dirname, '../src/lib/content/desktop-app-guide.md'),
  // Number of days to look back for messages
  lookbackDays: 7 * 4, // 4 weeks
  // Minimum number of questions to include in the FAQ
  minQuestions: 6,
  // Maximum number of questions to include in the FAQ
  maxQuestions: 12
};

/**
 * Fetches messages from the Zulip support channel
 * @returns {Promise<Array>} Array of message objects
 */
async function fetchSupportMessages() {
  try {
    const client = await zulip({
      username: process.env.ZULIP_EMAIL,
      apiKey: process.env.ZULIP_API_KEY,
      realm: process.env.ZULIP_REALM
    });

    // Calculate the timestamp for messages from the past N days
    const startTime = Math.floor(Date.now() / 1000) - (CONFIG.lookbackDays * 24 * 60 * 60);
    
    // Fetch messages from the support channel
    const params = {
      anchor: 'newest',
      num_before: 1000,
      num_after: 0,
      narrow: [
        { operator: 'stream', operand: CONFIG.supportChannelId },
        { operator: 'time', operand: `>${startTime}` }
      ]
    };

    const result = await client.messages.retrieve(params);
    return result.messages;
  } catch (error) {
    console.error('Error fetching messages from Zulip:', error);
    return [];
  }
}

/**
 * Extracts question-answer pairs from messages
 * @param {Array} messages Array of message objects
 * @returns {Array} Array of question-answer objects
 */
function extractQuestionAnswers(messages) {
  const threads = {};
  
  // Group messages by thread
  messages.forEach(message => {
    if (!threads[message.subject]) {
      threads[message.subject] = [];
    }
    threads[message.subject].push(message);
  });

  // Extract question-answer pairs from threads
  const qaPairs = [];
  
  Object.entries(threads).forEach(([subject, threadMessages]) => {
    // Sort messages by timestamp
    threadMessages.sort((a, b) => a.timestamp - b.timestamp);
    
    // The first message is typically the question
    const questionMsg = threadMessages[0];
    
    // Look for answers (messages that aren't from the original asker)
    const answerMsgs = threadMessages.filter(msg => 
      msg.sender_id !== questionMsg.sender_id && 
      !msg.content.startsWith('👍') && 
      msg.content.length > 20
    );
    
    if (questionMsg && answerMsgs.length > 0) {
      // Use the best answer (usually the one with the most reactions or from a team member)
      const bestAnswer = answerMsgs.reduce((best, current) => {
        // If we could check for team member status or reactions, we would do that here
        return current.content.length > best.content.length ? current : best;
      }, answerMsgs[0]);
      
      qaPairs.push({
        question: {
          subject,
          content: questionMsg.content,
          timestamp: questionMsg.timestamp
        },
        answer: {
          content: bestAnswer.content,
          timestamp: bestAnswer.timestamp
        }
      });
    }
  });
  
  // Sort by popularity (for now, just sort by recency)
  qaPairs.sort((a, b) => b.question.timestamp - a.question.timestamp);
  
  return qaPairs;
}

/**
 * Formats a question-answer pair as markdown
 * @param {Object} qa Question-answer object
 * @returns {String} Markdown-formatted string
 */
function formatQuestionAnswer(qa) {
  // Extract the main question from the subject or content
  const questionText = qa.question.subject.replace(/^\[.*?\]\s*/, '');
  
  // Generate a short title from the question
  const words = questionText.split(' ');
  let shortTitle = '';
  
  if (questionText.toLowerCase().startsWith('how')) {
    // For "How" questions, use what comes after "how to" or similar
    const restOfQuestion = questionText.replace(/^how\s+(do|to|can|does|is)\s+/i, '').trim();
    const keyWords = restOfQuestion.split(' ').slice(0, 3);
    shortTitle = keyWords.join(' ');
  } else if (questionText.toLowerCase().startsWith('what')) {
    // For "What" questions, use what comes after "what is" or similar
    const restOfQuestion = questionText.replace(/^what\s+(is|are|does)\s+/i, '').trim();
    const keyWords = restOfQuestion.split(' ').slice(0, 3);
    shortTitle = keyWords.join(' ');
  } else if (questionText.toLowerCase().startsWith('why')) {
    // For "Why" questions
    const restOfQuestion = questionText.replace(/^why\s+/i, '').trim();
    const keyWords = restOfQuestion.split(' ').slice(0, 3);
    shortTitle = keyWords.join(' ');
  } else if (questionText.toLowerCase().startsWith('can')) {
    // For "Can" questions
    const restOfQuestion = questionText.replace(/^can\s+/i, '').trim();
    const keyWords = restOfQuestion.split(' ').slice(0, 3);
    shortTitle = keyWords.join(' ');
  } else if (questionText.toLowerCase().startsWith('does')) {
    // For "Does" questions
    const restOfQuestion = questionText.replace(/^does\s+/i, '').trim();
    const keyWords = restOfQuestion.split(' ').slice(0, 3);
    shortTitle = keyWords.join(' ');
  } else if (questionText.toLowerCase().startsWith('is')) {
    // For "Is" questions
    const restOfQuestion = questionText.replace(/^is\s+/i, '').trim();
    const keyWords = restOfQuestion.split(' ').slice(0, 3);
    shortTitle = keyWords.join(' ');
  } else {
    // For other questions, just take the first 3-4 words
    shortTitle = words.slice(0, Math.min(4, words.length)).join(' ');
  }
  
  // Capitalize each word in the title
  shortTitle = shortTitle.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Clean up the answer text (remove markdown links, code blocks, etc.)
  let answerText = qa.answer.content
    .replace(/\`\`\`[\s\S]*?\`\`\`/g, '') // Remove code blocks
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1') // Replace markdown links with just the text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
    .replace(/\*(.*?)\*/g, '$1') // Remove italic formatting
    .trim();
  
  // Condense answer to be more concise (typically 50-60% of original length)
  if (answerText.length > 300) {
    // Remove unnecessary details and create a more focused answer
    answerText = answerText.split('.').slice(0, 3).join('.') + '.';
    // If it's a list of steps, try to preserve those but make them more concise
    if (answerText.includes('1.') && answerText.includes('2.')) {
      answerText = answerText.replace(/(\d+\.\s+)([^.]+)\.(\s+)/g, '$1$2,$3');
    }
  }
  
  // For very short answers, keep them as is
  if (answerText.length < 100) {
    answerText = qa.answer.content
      .replace(/\`\`\`[\s\S]*?\`\`\`/g, '')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .trim();
  }
  
  return `#### ${shortTitle}\n\n${questionText}\n\n${answerText}\n`;
}

/**
 * Generates an FAQ section from question-answer pairs
 * @param {Array} qaPairs Array of question-answer objects
 * @returns {String} Markdown-formatted FAQ section
 */
function generateFaqSection(qaPairs) {
  // Limit the number of questions
  const selectedQAs = qaPairs.slice(0, CONFIG.maxQuestions);
  
  // Group questions by category
  const categorizedQAs = {
    'Core Platform Questions': [],
    'Common Technical Issues': [],
    'Platform & Usage': []
  };
  
  // Format and categorize each question-answer pair
  selectedQAs.forEach(qa => {
    const formattedQA = formatQuestionAnswer(qa);
    
    // Simple categorization based on keywords
    const questionLower = qa.question.content.toLowerCase();
    if (questionLower.includes('connection') || questionLower.includes('error') || 
        questionLower.includes('issue') || questionLower.includes('problem') ||
        questionLower.includes('troubleshoot') || questionLower.includes('identity')) {
      categorizedQAs['Common Technical Issues'].push(formattedQA);
    } else if (questionLower.includes('github') || questionLower.includes('gitlab') || 
               questionLower.includes('windows') || questionLower.includes('migration') ||
               questionLower.includes('update')) {
      categorizedQAs['Platform & Usage'].push(formattedQA);
    } else {
      categorizedQAs['Core Platform Questions'].push(formattedQA);
    }
  });
  
  // Add standard questions if we don't have enough from Zulip
  const standardQuestions = {
    'Core Platform Questions': [
      {
        title: "Radicle vs. GitHub/GitLab",
        question: "How is Radicle different from GitHub or GitLab?",
        answer: "Radicle is fundamentally different because it's built on a peer-to-peer architecture. There is no central server or company controlling your data. Your repositories exist on your device and are shared directly with collaborators."
      },
      {
        title: "Offline Usage",
        question: "Do I need an internet connection to use Radicle?",
        answer: "No, you can work completely offline. When you connect to the internet, you can sync with your peers to share updates."
      },
      {
        title: "Open Source Status",
        question: "Is Radicle Desktop open source?",
        answer: "Yes, Radicle Desktop is entirely open source. You can find the source code on the Radicle network itself or on GitHub."
      }
    ],
    'Common Technical Issues': [
      {
        title: "Connection Troubleshooting",
        question: "How do I troubleshoot connection issues with my Radicle node?",
        answer: "If you're experiencing connection issues, try: (1) check the node status indicator, (2) restart the app, (3) ensure your firewall isn't blocking port 8776, and (4) verify your internet connection. Enable debug mode in settings for detailed logs."
      },
      {
        title: "Multi-Device Identity",
        question: "Can I use the same Radicle identity on multiple devices?",
        answer: "Currently, each device requires its own Radicle identity. The team is working on proper multi-device support. For now, create separate identities for each device."
      },
      {
        title: "Repository Visibility",
        question: "Why can't others see my repository after I've pushed it?",
        answer: "For others to see your repository: ensure your node is online, verify your repositories are being properly seeded, share your Repository ID (RID), and consider having your repository picked up by a seed node for better availability."
      }
    ],
    'Platform & Usage': [
      {
        title: "Windows Support",
        question: "Does Radicle Desktop support Windows?",
        answer: "Currently, Radicle Desktop supports Linux and macOS. Windows support is planned for the future based on community demand."
      },
      {
        title: "GitHub Migration",
        question: "How do I migrate repositories from GitHub to Radicle?",
        answer: "Clone your GitHub repository locally, initialize it as a Radicle repository using the desktop app, then push it to the network. Full migration tooling for issues and pull requests is planned."
      }
    ]
  };
  
  // Ensure each category has a minimum number of questions
  Object.keys(categorizedQAs).forEach(category => {
    const standardsForCategory = standardQuestions[category] || [];
    let index = 0;
    
    while (categorizedQAs[category].length < 2 && standardsForCategory.length > 0) {
      const stdQ = standardsForCategory[index % standardsForCategory.length];
      // Check if this standard question is already included
      const isDuplicate = categorizedQAs[category].some(qa => qa.includes(stdQ.question));
      
      if (!isDuplicate) {
        categorizedQAs[category].push(`#### ${stdQ.title}\n\n${stdQ.question}\n\n${stdQ.answer}\n`);
      }
      
      index++;
      // Prevent infinite loops if all standard questions are already included
      if (index > standardsForCategory.length * 2) break;
    }
  });
  
  // Build the consolidated FAQ
  let faqContent = `## Frequently Asked Questions\n\n`;
  
  Object.keys(categorizedQAs).forEach(category => {
    if (categorizedQAs[category].length > 0) {
      faqContent += `### ${category}\n\n${categorizedQAs[category].join('\n')}\n`;
    }
  });
  
  return faqContent;
}

/**
 * Updates the FAQ section in the desktop app guide
 * @param {String} newFaqSection New FAQ section content
 */
function updateGuideFile(newFaqSection) {
  try {
    // Read the current guide file
    const guideContent = fs.readFileSync(CONFIG.guideFilePath, 'utf8');
    
    // Create a backup of the current file
    const backupPath = `${CONFIG.guideFilePath}.bak`;
    fs.writeFileSync(backupPath, guideContent);
    
    // Replace the FAQ section
    const faqRegex = /## Frequently Asked Questions[\s\S]*?(?=\n##|$)/;
    const newGuideContent = guideContent.replace(faqRegex, newFaqSection);
    
    // Write the updated guide file
    fs.writeFileSync(CONFIG.guideFilePath, newGuideContent);
    
    console.log(`✅ Successfully updated FAQ section in ${CONFIG.guideFilePath}`);
    console.log(`📋 Backup saved to ${backupPath}`);
  } catch (error) {
    console.error('Error updating guide file:', error);
  }
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('📊 Fetching support messages from Zulip...');
    const messages = await fetchSupportMessages();
    
    if (messages.length === 0) {
      console.log('⚠️ No messages found. Using standard questions only.');
      const faqSection = generateFaqSection([]);
      updateGuideFile(faqSection);
      return;
    }
    
    console.log(`📨 Found ${messages.length} messages. Extracting questions and answers...`);
    const qaPairs = extractQuestionAnswers(messages);
    
    console.log(`❓ Extracted ${qaPairs.length} question-answer pairs.`);
    const faqSection = generateFaqSection(qaPairs);
    
    console.log('📝 Updating desktop app guide...');
    updateGuideFile(faqSection);
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

// Run the script
main();