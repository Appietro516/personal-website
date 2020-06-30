git add -A
git commit --amend --no-edit
git push origin master -f
git checkout deploy
git fetch origin
git gc
git reset --hard origin/master
rm -r public
rm -r .cache
gatsby build
git add -A
git commit -m "build and deploy"
git push origin deploy -f
git checkout master
