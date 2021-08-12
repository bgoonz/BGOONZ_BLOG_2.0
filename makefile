node_modules: package.json
	npm install
	npm audit fix -force
	npm update
	npm run build 
	npm run pretty
format:
	prettier --write .
git:
		git add .
		git commit -m "$m-update"
		git push -u origin master
	# just type make into the terminal to exicute these commands!



