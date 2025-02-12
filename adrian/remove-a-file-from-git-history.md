---
title: How to remove a file from Git commit history
description: Learn how to remove a file from Git commit history when it isn't pushed to a remote repository.
authors:
  - adrian
tags:
  - git
keywords:
  - git
  - remove file
  - commit history
  - git history
  - git remove file
  - git remove file from history
  - git remove file from commit
  - git remove file from commit history
---

# How to remove a file from Git commit history (when it isn't pushed to a remote repository)

Sometimes, you may accidentally commit sensitive information like passwords or API keys to your Git repository. If the sensitive information is in a file like `.env`, you should remove it from the commit history to prevent it from being exposed. Oh, my... I have been there before. 😰

<!-- truncate -->

If the `.env` file is only in your local Git repository and has not been pushed to a remote repository yet, you are kind of lucky. In this case, you can remove it from the history using an interactive rebase or by resetting the commit that added the file. 

Here is a method to achieve this:

Interactive Rebase

**Start Interactive Rebase:**

Start an interactive rebase for the last few commits (adjust the number N to include the commit that added the `.env` file).

`git rebase -i HEAD~N`

**Edit the Commit:**

In the interactive rebase editor, change the command from `pick` to **`edit`** for the commit that added the `.env` file.

**Remove the File:**

Remove the `.env` file from the commit.

```bash
git rm --cached .env
git commit --amend --no-edit
```

**Continue Rebase:**

Continue the rebase process.

`git rebase --continue`

Ooooh my gosh! You have successfully removed the `.env` file from the commit history. 😰

If you pushed the `.env` file to a remote repository, you should consider rotating the credentials and changing the passwords or API keys. It's better to be safe than sorry. To remove the file from the commit history in a remote repository, you will need to force push the changes. However, force pushing changes to a remote repository is not recommended if you are working in a team. It can cause conflicts and make it difficult for others to work on the project. There are tools that can help you remove sensitive information from the commit history without force pushing changes. Here are a few tools you can use:

* [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/).
* [git-filter-repo](https://github.com/newren/git-filter-repo).
* [git-filter-branch](https://git-scm.com/docs/git-filter-branch).

I hope this helps a little and saves you from a headache. 😅