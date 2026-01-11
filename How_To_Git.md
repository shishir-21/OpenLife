# How to Git (Quick Guide)

This guide covers the common Git and GitHub actions: setup, clone, branch, commit, push, pull, and sync.

## 1) Initial setup (one time)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 2) Clone a repo

```bash
git clone https://github.com/OWNER/REPO.git
cd REPO
```

## 3) Create a branch for your work

```bash
git checkout -b feature/short-description
```

## 4) Check status

```bash
git status
```

## 5) Stage and commit

```bash
git add .
git commit -m "Add: short description"
```

## 6) Push your branch to GitHub

```bash
git push origin feature/short-description
```

## 7) Pull latest changes from main

```bash
git checkout main
git pull origin main
```

## 8) Sync your branch with main

```bash
git checkout feature/short-description
git merge main
```

## 9) Open a pull request

Push your branch, then open GitHub and create a PR from your branch into `main`.

## 10) Common fixes

### Undo last commit (keep changes)

```bash
git reset --soft HEAD~1
```

### Unstage a file

```bash
git restore --staged path/to/file
```

### Discard local changes in a file

```bash
git restore path/to/file
```

## 11) Helpful commands

```bash
git log --oneline --graph --decorate -n 10
git branch -a
git fetch --all --prune
```
