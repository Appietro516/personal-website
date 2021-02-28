# This script will add recent changes and deploy the website from the master branch.
#Add recent changes to last commit and push
git checkout master
rm -r public
git add -A
git commit --amend --no-edit
git push origin master -f
#Reset the deploy branch to the remote master branch
git fetch origin deploy
git checkout deploy
git fetch origin
git gc
git reset --hard origin/master
#Clear cache and folders that may cause gatsby build failures, then build the website
rm -r .cache
rm -r public
gatsby build
#Push built website to deploy
git add -A
git commit -m "build and deploy" --no-verify
git push origin deploy -f
git checkout master
