---
title: "How to use Radicle with GitHub Actions"
description: "A short intro on how to test-drive Radicle without needing to ditch Github or any other CI provider"
author: "rudolfs"
authorUrl: "https://app.radicle.xyz/nodes/seed.radicle.garden/users/did:key:z6MkwPUeUS2fJMfc2HZN1RQTQcTTuhw4HhPySB8JeUg2mVvx"
date: "2025-05-30"
---

A chat with <a href="https://app.radicle.xyz/nodes/seed.radicle.garden/users/did:key:z6MkrubmdTJKR42YZd7yDYysyx4JRez1wmvxjpmhzhTMKxsr">Burrito</a> aka <a href="https://metafluff.com">metafluff.com</a> today sparked the idea to write down how we started to dogfood Radicle before we had our native Radicle CI going. He also encouraged me to just set a deadline for writing blog posts in general, so this had to all be written and published by the end of today.

We wanted to dogfood Radicle as soon as possible, but there was one caveat, we didn't have a solution for CI at the time. So what we did was just reuse our existing GitHub actions and push both to Radicle and GitHub. The code review work would happen in Radicle and GitHub would run our tests. For easy visual indication we'd use workflow status badges that get generated for each branch you push to GitHub.

The screenshot below is an example of how this looks like in the Desktop app.
![Svelte](/blog/001-screenshot.png)


The workflow was as simple as:

1. Create a branch and commit your changes
2. Push the changes to github with `git push github rudolfs/breadcrumb-tweak:rudolfs/breadcrumb-tweak`
3. Copy the build badge links to your clipboard, see script below
4. Open a patch on Radicle via `git push rad HEAD:refs/patches`, in the patch body paste the build badges and submit the patch

When we'd address changes from code review and submit a new revision, push this revision both to radicle and github to run another build, the badges will update automatically.

```sh
$ git push github rudolfs/breadcrumb-tweak:rudolfs/breadcrumb-tweak
$ git push rad
```

The `rad` remote is set up for you automatically when you initialize a project with `rad init`. The github remote can be set up manually via `git remote add github git@github.com:radicle-dev/radicle-interface.git` pointing to a copy of the project which lives on your GitHub account.

```sh
$ git remote -v

github	git@github.com:radicle-dev/radicle-interface.git (fetch)
github	git@github.com:radicle-dev/radicle-interface.git (push)
rad	rad://z4V1sjrXqjvFdnCUbxPFqd5p4DtH5 (fetch)
rad	rad://z4V1sjrXqjvFdnCUbxPFqd5p4DtH5/z6MkwPUeUS2fJMfc2HZN1RQTQcTTuhw4HhPySB8JeUg2mVvx (push)
```

Bash script that I had aliased to a single letter that automatically copies the build badge links to my clipboard.

```bash
#!/bin/bash
set -euo pipefail
branchName=$(git branch --show-current)
previewBranchName="${branchName//\//-}"
workflowBranchName="${branchName//\//%2F}"
# Use a here document to include the text and pipe it to sed
sed -e "s|<branchName>|$branchName|g" \
  -e "s|<workflowBranchName>|$workflowBranchName|g" \
  -e "s|<previewBranchName>|$previewBranchName|g" <<'EOF' | pbcopy
![check](https://github.com/radicle-dev/radicle-interface/actions/workflows/check.yml/badge.svg?branch=<branchName>) ![check-visual](https://github.com/radicle-dev/radicle-interface/actions/workflows/check-visual.yml/badge.svg?branch=<branchName>) ![check-unit-test](https://github.com/radicle-dev/radicle-interface/actions/workflows/check-unit-test.yml/badge.svg?branch=<branchName>) ![check-http-client-unit-test](https://github.com/radicle-dev/radicle-interface/actions/workflows/check-http-client-unit-test.yml/badge.svg?branch=<branchName>) ![check-radicle-httpd](https://github.com/radicle-dev/radicle-interface/actions/workflows/check-radicle-httpd.yml/badge.svg?branch=<branchName>) ![check-e2e](https://github.com/radicle-dev/radicle-interface/actions/workflows/check-e2e.yml/badge.svg?branch=<branchName>) ![check-build](https://github.com/radicle-dev/radicle-interface/actions/workflows/check-build.yml/badge.svg?branch=<branchName>) ![check-http](https://github.com/radicle-dev/radicle-interface/actions/workflows/check-radicle-httpd.yml/badge.svg?branch=<branchName>)
👉 [Preview](https://radicle-interface-git-<previewBranchName>-radicle.vercel.app)
👉 [Workflow runs](https://github.com/radicle-dev/radicle-interface/actions?query=branch%3A<workflowBranchName>)
👉 [Branch on GitHub](https://github.com/radicle-dev/radicle-interface/tree/<branchName>)
EOF
```
