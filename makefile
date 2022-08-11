
git:

	git add .
	git commit -m "$m update"
	git push -u origin $(shell git rev-parse --abbrev-ref HEAD)
	

# just type make into the terminal to exicute these commands!
