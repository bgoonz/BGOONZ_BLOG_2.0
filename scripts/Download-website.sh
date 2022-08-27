wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off <url>



## OR--------------------------------------------------------------------------------

sudo apt install httrack
httrack --ext-depth=2 <url>


