## Getting Started

### Overview

The Radicle desktop app is a graphical interface for interacting with the Radicle network. Follow these steps to get started:
<br/>
1. **Download the app**  
   Get the desktop app for your operating system.
   [Download Desktop App](#installation)
   <br/>

2. **Create or import an identity**  
   Your Radicle identity is your passport to the network.
   <br/>

3. **Install and start your node**  
   The Radicle node runs on your computer and keeps you in sync with the network.
   [Install instructions](#cli-first-steps)

<br/>

4. **Try it out!**  
   You are now on Radicle! Initialize your first repo or clone something you like!

### Installation

Get started quickly

<!-- Download component will be inserted here -->

### Build from Source

Run the following commands to build the desktop app locally:

```bash
git clone https://seed.radicle.xyz/z4D5UCArafTzTQpDZNQRuqswh3ury.git radicle-desktop
cd radicle-desktop
npm install
npm run tauri build
```

Then run one of the builds that the script outputs at the end.

### Prerequisites

Make sure you have the following

- Recent versions of Node.js (22.11.0 or higher) and npm installed
- Requires the Rust toolchain (1.77 or higher)
- [Tauri system dependencies](https://v1.tauri.app/v1/guides/getting-started/prerequisites/)

## Desktop App

### First steps

Once the app is launched, it will pick up on your Radicle identity and automatically connect to your node, or offer to create a new identity if you don't have one.

![alt text](first-steps.png)

You'll be prompted to add an alias and a passphrase, both of which you will be able to change later.

Once you click create new identity, your identity will be created and stored on your computer in an SSH agent.

### App Header

#### Breadcrumbs 

Breadcrumbs indicate where you are and provide a way to copy IDs of current pages and to view them on a seed node.

<br/>

#### Guide

You'll always find the guide popover in the header. It will help you get set up and provide useful hints as you go.

<br/>

#### Node status indicator

Always see if your node is online or offline. 

<br/>

#### Inbox indicator

Opens inbox popover with the latest changes organized by repo. 

### Issues

Track and manage issues directly within the app. The issues are stored safely on your computer in your Radicle storage.

<br/>

#### Working with Issues

To create an issue, click on the "New issue" button in the top right corner of the issues page. You can then fill out the form to create a new issue.

![alt text](new-issue.png)

**Fuzzy Filter**

Use the fuzzy filter to find an issue by name, description, label, or author.

![alt text](fuzzy-filter.png)

**Issue Status**
Issues can be in one of the following states: open, closed as solved, and closed as other. Use the dropdown in the metadata table at the top of the page to change issue status.


![alt text](issue-status.png)

**Issue Labels**
Issues can be labeled with any number of labels. Add labels from the metadata table at the top of the page.

![alt text](issue-labels.png)

**Issue Assignees**
Issues can be assigned to any number of users. Add assignees by entering their DIDs into the assignees field.

### Patches

// To do

### Code Reviews

Collaborate on code changes with integrated review tools:

- Create and review patches
- Comment on specific lines of code
- Suggest changes
- Approve and merge contributions


## Radicle Basics

### Understanding Radicle

Radicle is a peer-to-peer code collaboration platform built on Git. Unlike centralized platforms like GitHub or GitLab, there is no central server controlling your data. Your repositories exist on your device and are shared directly with collaborators.

### Radicle Identity

Your Radicle identity is your passport to the network. It is a cryptographic key pair that uniquely identifies you. The public key is shared with others, while the private key is kept secure and used to sign your contributions.

When you first use the desktop app, it will help you create a new identity with an alias (username) and passphrase. Each device requires its own identity, so don't try to share identities between devices.

### Radicle Node

Your Radicle node is the application that runs on your computer and keeps you in sync with the network. The node:

- Stores and synchronizes repositories you're interested in
- Communicates with other peers on the network
- Allows you to work offline and sync changes when reconnected
- Hosts your repositories, making them available to others

The desktop app automatically manages your node for you.

### Repositories in Radicle

Repositories in Radicle are identified by a unique Repository ID (RID) that looks like `rad:z3gqcJUoA1n9HaHKufZs5FCSGazv5`.

When you create or clone a repository in Radicle:
- It's stored locally on your device
- It can be shared with specific collaborators or made public
- You can work on it offline and sync changes later
- Your contributions are cryptographically signed

### Collaboration Features

Radicle provides collaboration features that work without a central server:

- **Issues**: Track and manage tasks directly within the app
- **Patches**: Similar to pull requests, these are proposed changes to repositories
- **Code Reviews**: Comment on specific lines of code and suggest changes
- **Seeding**: Help distribute repositories by "seeding" them, similar to BitTorrent

### Network & Discovery

Repositories are discoverable through:
- Seed nodes: Public nodes that help distribute repositories
- Direct sharing: Sharing repository IDs with collaborators
- Following: Choosing specific repositories to replicate

All communication between nodes is encrypted and authenticated.

## Frequently Asked Questions

### Core Platform Questions

#### Radicle vs. GitHub/GitLab

How is Radicle different from GitHub or GitLab?

Radicle is fundamentally different because it's built on a peer-to-peer architecture. There is no central server or company controlling your data. Your repositories exist on your device and are shared directly with collaborators.

<br/>

#### Offline Usage

Do I need an internet connection to use Radicle?

No, you can work completely offline. When you connect to the internet, you can sync with your peers to share updates.

<br/>

#### Open Source Status

Is Radicle Desktop open source?

Yes, Radicle Desktop is entirely open source. You can find the source code on the Radicle network itself or on GitHub.

### Common Technical Issues

#### Connection Troubleshooting

How do I troubleshoot connection issues with my Radicle node?

If you're experiencing connection issues, try: (1) check the node status indicator, (2) restart the app, (3) ensure your firewall isn't blocking port 8776, and (4) verify your internet connection. Enable debug mode in settings for detailed logs.

<br/>

#### Multi-Device Identity

Can I use the same Radicle identity on multiple devices?

Currently, each device requires its own Radicle identity. The team is working on proper multi-device support. For now, create separate identities for each device.

<br/>

#### Repository Visibility

Why can't others see my repository after I've pushed it?

For others to see your repository: ensure your node is online, verify your repositories are being properly seeded, share your Repository ID (RID), and consider having your repository picked up by a seed node for better availability.

<br/>

### Platform & Usage

#### Windows Support

Does Radicle Desktop support Windows?

Currently, Radicle Desktop supports Linux and macOS. Windows support is planned for the future based on community demand.

<br/>

#### GitHub Migration

How do I migrate repositories from GitHub to Radicle?

Clone your GitHub repository locally, initialize it as a Radicle repository using the desktop app, then push it to the network. Full migration tooling for issues and pull requests is planned.
