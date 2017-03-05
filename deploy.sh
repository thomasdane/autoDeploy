cd ..
cd partywave
git pull origin master
forever stopall
forever start -c "npm start" ./  
cd ..
cd autoDeploy