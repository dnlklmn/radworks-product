# Radicle Desktop App FAQ Automation

This directory contains automation scripts for updating the FAQ section of the Radicle Desktop App guide based on questions from the Radicle support channel on Zulip.

## Overview

The FAQ automation system consists of:

1. A Node.js script (`update_desktop_faq.js`) that fetches questions from the Zulip support channel
2. A GitHub Actions workflow (`.github/workflows/update-desktop-faq.yml`) that runs the script weekly
3. Example output showing how the updated FAQ will look

## How It Works

1. **Data Collection**: The script connects to the Radicle Zulip instance via API and fetches recent messages from the support channel
2. **Processing**: It extracts question-answer pairs, cleans up the content, and formats them as markdown
3. **Update**: The script updates the FAQ section in the desktop app guide with the most relevant questions
4. **Pull Request**: A GitHub Actions workflow creates a PR with the changes for review

## Setup Requirements

To run the script locally, you'll need:

1. Node.js 18 or higher
2. Zulip API credentials (stored in a `.env` file)
3. The following npm packages:
   - zulip-js
   - dotenv

## Configuration

The script includes several configurable options:

- `lookbackDays`: How far back to look for questions (default: 28 days)
- `minQuestions`: Minimum number of questions to include (default: 6)
- `maxQuestions`: Maximum number of questions to include (default: 12)

## Usage

### Running Locally

1. Set up your `.env` file with Zulip credentials:
   ```
   ZULIP_EMAIL=your-bot-email@example.com
   ZULIP_API_KEY=your-api-key
   ZULIP_REALM=https://radicle.zulipchat.com
   ```

2. Run the script:
   ```
   node update_desktop_faq.js
   ```

### Automated Updates

The GitHub Actions workflow will run automatically every Monday at 2:00 AM UTC. You can also trigger it manually from the Actions tab in GitHub.

## Files

- `update_desktop_faq.js`: Main script for updating the FAQ
- `example-updated-faq.md`: Example of how the updated FAQ will look
- `../.github/workflows/update-desktop-faq.yml`: GitHub Actions workflow file

## Future Improvements

- Add sentiment analysis to identify the most important questions
- Implement better answer selection using reaction counts
- Add support for categorizing questions by topic