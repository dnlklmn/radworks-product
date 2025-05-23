# Radicle Desktop App FAQ Automation

## Overview

This solution implements an automated system to update the FAQ section of the Radicle Desktop App Guide based on real questions from the Radicle Zulip support channel. The FAQ section will be updated weekly to ensure it contains the most relevant and frequently asked questions. Each FAQ item includes a concise title and uses the original question as an introduction.

## Implementation

The implementation consists of the following components:

1. **Node.js Script (`scripts/update_desktop_faq.js`)**:

   - Connects to the Radicle Zulip instance via API
   - Fetches recent messages from the support channel
   - Extracts question-answer pairs
   - Generates short, descriptive titles for each question
   - Formats them as markdown with title, original question, and answer
   - Updates the FAQ section in the desktop app guide

2. **GitHub Actions Workflow (`.github/workflows/update-desktop-faq.yml`)**:

   - Runs the script weekly (every Monday at 2:00 AM UTC)
   - Creates a Pull Request with the changes for review

3. **Example Output (`example-updated-faq.md`)**:
   - Demonstrates how the updated FAQ will look

## How to Use

### Setup

1. **Create a Zulip Bot**:

   - Go to Zulip and create a bot account with access to the support channel
   - Note the bot email and API key

2. **Add GitHub Secrets**:

   - Add the following secrets to your GitHub repository:
     - `ZULIP_EMAIL`: The email of your Zulip bot
     - `ZULIP_API_KEY`: The API key for your Zulip bot

3. **Review the Script Configuration**:
   - Adjust the `CONFIG` object in `update_desktop_faq.js` if needed
   - You can customize:
     - `lookbackDays`: How far back to look for questions
     - `minQuestions`: Minimum number of questions to include
     - `maxQuestions`: Maximum number of questions to include

### Workflow

1. **Automated Updates**:

   - The GitHub Actions workflow will run automatically every Monday
   - It will create a PR with the updated FAQ section

2. **Manual Updates**:

   - You can trigger the workflow manually from the Actions tab in GitHub
   - Alternatively, run the script locally by following the instructions in `scripts/README.md`

3. **Review Process**:
   - Review the generated PR
   - Make any necessary edits
   - Approve and merge the PR

## Benefits

- **Always Up-to-Date**: The FAQ is constantly updated with real user questions
- **Community-Driven**: Content comes directly from the community support channel
- **Time-Saving**: Eliminates the need for manual FAQ updates
- **Consistent Format**: Maintains a consistent style across FAQ entries
- **Improved Readability**: Short titles make it easier to scan the FAQ section
- **Better Organization**: Questions are categorized into logical sections
- **Condensed Content**: Answers are focused and concise

## Example

The updated FAQ section will be organized by categories and look like this:

```markdown
## Frequently Asked Questions

### Core Platform Questions

#### Radicle vs. GitHub/GitLab

How is Radicle different from GitHub or GitLab?

Radicle is fundamentally different because it's built on a peer-to-peer architecture. There is no central server or company controlling your data. Your repositories exist on your device and are shared directly with collaborators.

### Common Technical Issues

#### Connection Troubleshooting

How do I troubleshoot connection issues with my Radicle node?

If you're experiencing connection issues, try: (1) check the node status indicator, (2) restart the app, (3) ensure your firewall isn't blocking port 8776, and (4) verify your internet connection...
```

## Future Improvements

- Add sentiment analysis to identify the most important questions
- Implement better answer selection using reaction counts
- Add support for categorizing questions by topic
- Include analytics to track which FAQ items are most viewed
