---
title: "Important Git Commands"
subtitle: "Here are some important Git commands that every developer should know."
date: "2024-01-04"
color: '#fb923c'
---

1. **git init**: Initializes a new Git repository in the current directory, creating a hidden .git folder to store repository metadata.

2. **git clone [repository URL]**: Clones an existing repository from a remote server to your local machine, creating a copy of the repository along with its entire history.

3. **git add [file(s)]**: Adds file(s) to the staging area, preparing them to be included in the next commit. You can specify individual files or use wildcards to add multiple files at once.

4. **git commit -m "[commit message]"**: Commits the staged changes to the repository with a descriptive commit message. The commit message should succinctly describe the changes made in the commit.

5. **git status**: Displays the current status of the repository, including the files that have been modified, staged, or not yet tracked by Git.

6. **git log**: Shows a chronological list of commits in the repository, including commit hashes, authors, dates, and commit messages.

7. **git branch**: Lists all existing branches in the repository. Adding a branch name creates a new branch, while appending -d followed by a branch name deletes the specified branch.

8. **git checkout [branch/commit]**: Switches to the specified branch or commit, updating the working directory to reflect the state of the chosen branch or commit.

9. **git merge [branch]**: Merges the specified branch into the current branch, combining the changes from both branches. Conflicts may arise during the merge process, which must be resolved manually.

10. **git pull**: Fetches changes from the remote repository and merges them into the local branch. It is equivalent to running git fetch followed by git merge.

11. **git push**: Pushes committed changes from the local repository to the remote repository, updating the remote branch with the latest commits.

12. **git remote -v**: Lists all remote repositories associated with the local repository, along with their corresponding URLs.

13. **git fetch**: Retrieves changes from the remote repository without merging them into the local branch. It updates the remote tracking branches.

14. **git reset [file(s)]**: Unstages file(s) from the staging area, preserving the changes in the working directory. You can use git reset --hard to discard all staged and unstaged changes.

15. **git diff**: Shows the differences between the working directory and the staging area or between two commits. It helps identify changes made to files before staging them.
