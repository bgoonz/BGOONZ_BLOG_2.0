
git:

	git add .
	git commit -m "$m update"
<<<<<<< HEAD
	git push -u origin master
=======
	git push -u origin $(shell git rev-parse --abbrev-ref HEAD)
	

>>>>>>> master
# just type make into the terminal to exicute these commands!
