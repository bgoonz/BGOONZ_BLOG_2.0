
format:
	prettier --write .
git:
	git add .
	git commit -m "$m-update"
	git push -u origin preview
# just type make into the terminal to exicute these commands!
node_modules: package.json
	npm install
	npm audit fix -fix
	npm update
	