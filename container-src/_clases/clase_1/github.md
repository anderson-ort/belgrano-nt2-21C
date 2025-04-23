# GIT CHEATSHEET
## For Software Engineers

### Basic Commands:
- `git init`: Initializes a new Git repository.
- `git clone <repository>`: Clones a repository.
- `git status`: Shows the status of changes in the working directory.

### Staging and Committing:
- `git add <file>`: Adds a file to the staging area.
- `git add .`: Adds all changes to the staging area.
- `git commit -m "Message"`: Commits the staged changes.

### Merging and Rebasing:
- `git merge <branch>`: Merges a branch into the current branch.
- `git rebase <branch>`: Rebases the current branch onto the tip of another branch.

### Logs and Difference:
- `git log`: Shows a log of commits.
- `git diff <file>`: Shows changes in a file compared to the last commit.

### Advanced
- `git stash`: Stashes changes in the working directory.
- `git cherry-pick <commit>`: Applies changes from a specific commit.
- `git bisect`: Helps find which commit introduced a bug.

### Branching:
- `git branch`: Lists branches.
- `git branch <name>`: Creates a new branch.
- `git checkout <branch>`: Switches to a specific branch.
- `git checkout -b <branch>`: Creates and switches to a new branch.

### Pull and Push:
- `git pull <remote> <branch>`: Pulls changes from a remote repository.
- `git push <remote> <branch>`: Pushes changes to a remote repository.

### Undoing Changes:
- `git reset --hard HEAD~1`: Resets the repository to the previous commit.
- `git revert <commit>`: Reverts a specific commit.

### Remote Repositories:
- `git remote -v`: Lists remote repositories.
- `git remote add <name> <url>`: Adds a new remote repository.
