<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
<script type="text/javascript">
  algoliasearchNetlify({
    appId: '949NYEDSIQ',
    apiKey: '4481f47882b21c3b05de5780fe166222',
    siteId: '865c330e-e1e9-40b8-8420-bf603640b0fe',
    branch: 'master',
    selector: 'div#search',
  });
</script>

<div id="search">search</div>
Step 1: Clone the repository or update your local repository with the latest changes.

git pull origin master

git checkout renovate/node-sass-4.x

git merge master

git push -u origin renovate/node-sass-4.x

If you want to do this and revert the master to the previous commit:

git checkout master~4a98420          # Checkout previous commit on master
git checkout -b new_master       # Create branch for new master
git branch -D master             # Delete old master
git branch -mv new_master master # Make new_master master
Alternatively:

git reset --hard master~1        # Reset current branch to one commit ago on master

4a98420
