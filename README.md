# AutoDeploy
Enable automatic deployment on EC2 when merge to master on GitHub.

## Getting Started

- SSH into your EC2 instance and install node and git.
- Clone this repo into a directory at the same level as your app. 
- Run app.js as a background process (or use tmux to keep it alive).
- Now go to your repo on github and add a webhook that points to <yourInstance>:9000/deploy.
- Profit.

