# AutoDeploy
Enable automatic deployment on EC2 when merge to master on GitHub.

## Getting Started

- SSH into your EC2 instance and install node and git
- Clone this repo into a directory at the same level as your app 
- Run app.js as a background process (or use tmux to keep it alive)
- Now go to your repo on github and add a webhook that points to https://yourInstanceUrl.com:9000/deploy
- Open port 9000 on the security group
- Profit

## How does it work?

- When you merge to master, GitHub will send JSON request to `https://yourInstance.com:9000/deploy/`
- That runs app.js, which calls deploy.sh
- That cds into your application directory, and does a `git pull origin master`

## Things to note

- It depends on your application loading source code changes automatically
- That is, it won't work for an app that requires re-compilation

