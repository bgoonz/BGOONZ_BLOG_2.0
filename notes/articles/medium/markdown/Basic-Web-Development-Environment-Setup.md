Basic Web Development Environment Setup
=======================================

Windows Subsystem for Linux (WSL) and Ubuntu

------------------------------------------------------------------------

### Basic Web Development Environment Setup

#### Windows Subsystem for Linux (WSL) and Ubuntu

‌

<figure><img src="https://cdn-images-1.medium.com/max/800/0*aqKP1drNHmNm34zz.jpg" class="graf-image" /></figure>Test if you have Ubuntu installed by typing “Ubuntu” in the search box in the bottom app bar that reads “Type here to search”. If you see a search result that reads **“Ubuntu 20.04 LTS”** with “App” under it, then you have it installed.

‌

1.  <span id="110a">In the application search box in the bottom bar, type “PowerShell” to find the application named “Windows PowerShell”</span>
2.  <span id="54fd">Right-click on “Windows PowerShell” and choose “Run as administrator” from the popup menu</span>
3.  <span id="a018">In the blue PowerShell window, type the following: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`</span>
4.  <span id="6269">Restart your computer</span>
5.  <span id="6dd9">In the application search box in the bottom bar, type “Store” to find the application named “Microsoft Store”</span>
6.  <span id="eb4e">Click “Microsoft Store”</span>
7.  <span id="74c1">Click the “Search” button in the upper-right corner of the window</span>
8.  <span id="9d35">Type in “Ubuntu”</span>
9.  <span id="4205">Click “Run Linux on Windows (Get the apps)”</span>
10. <span id="1799">Click the orange tile labeled **“Ubuntu”** Note that there are 3 versions in the Microsoft Store… you want the one just entitled ‘Ubuntu’</span>
11. <span id="edec">Click “Install”</span>
12. <span id="2935">After it downloads, click “Launch”</span>
13. <span id="a859">If you get the option, pin the application to the task bar. Otherwise, right-click on the orange Ubuntu icon in the task bar and choose “Pin to taskbar”</span>
14. <span id="669c">When prompted to “Enter new UNIX username”, type your first name with no spaces</span>
15. <span id="e9c1">When prompted, enter and retype a password for this UNIX user (it can be the same as your Windows password)</span>
16. <span id="4217">Confirm your installation by typing the command `whoami ‘as in who-am-i'`followed by Enter at the prompt (it should print your first name)</span>
17. <span id="48fe">You need to update your packages, so type `sudo apt update` (if prompted for your password, enter it)</span>
18. <span id="d12f">You need to upgrade your packages, so type `sudo apt upgrade` (if prompted for your password, enter it)</span>

### Git

Git comes with Ubuntu, so there’s nothing to install. However, you should configure it using the following instructions.

‌Open an Ubuntu terminal if you don’t have one open already.

1.  <span id="8cfe">You need to configure Git, so type `git config --global user.name "Your Name"` with replacing "Your Name" with your real name.</span>
2.  <span id="0e0d">You need to configure Git, so type `git config --global user.email your@email.com` with replacing "<a href="mailto:your@email.com" class="markup--anchor markup--li-anchor">your@email.com</a>" with your real email.</span>

**Note: if you want git to remember your login credentials type:**

    $ git config --global credential.helper store

‌

### Google Chrome

Test if you have Chrome installed by typing “Chrome” in the search box in the bottom app bar that reads “Type here to search”. If you see a search result that reads “Chrome” with “App” under it, then you have it installed. Otherwise, follow these instructions to install Google Chrome.

‌

1.  <span id="578c">Open Microsoft Edge, the blue “e” in the task bar, and type in <a href="http://chrome.google.com/" class="markup--anchor markup--li-anchor">http://chrome.google.com</a>. Click the “Download Chrome” button. Click the “Accept and Install” button after reading the terms of service. Click “Save” in the “What do you want to do with ChromeSetup.exe” dialog at the bottom of the window. When you have the option to “Run” it, do so. Answer the questions as you’d like. Set it as the default browser.</span>
2.  <span id="40db">Right-click on the Chrome icon in the task bar and choose “Pin to taskbar”.</span>

### Node.js

Test if you have Node.js installed by opening an Ubuntu terminal and typing `node --version`. If it reports "Command 'node' not found", then you need to follow these directions.

1.  <span id="9098">In the Ubuntu terminal, type `sudo apt update` and press Enter</span>
2.  <span id="806b">In the Ubuntu terminal, type `sudo apt install build-essential` and press Enter</span>
3.  <span id="5f3a">In the Ubuntu terminal, type `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash` and press Enter</span>
4.  <span id="2abd">In the Ubuntu terminal, type `. ./.bashrc` and press Enter</span>
5.  <span id="3c16">In the Ubuntu terminal, type `nvm install --lts` and press Enter</span>
6.  <span id="d567">Confirm that **node** is installed by typing `node --version` and seeing it print something that is not "Command not found"!</span>

### Unzip

You will often have to download a zip file and unzip it. It is easier to do this from the command line. So we need to install a linux unzip utility.

‌In the Ubuntu terminal type: `sudo apt install unzip` and press Enter

‌Mocha.js

Test if you have Mocha.js installed by opening an Ubuntu terminal and typing `which mocha`. If it prints a path, then you're good. Otherwise, if it prints nothing, install Mocha.js by typing `npm install -g mocha`.

‌

### Python 3

Ubuntu does not come with Python 3. Install it using the command `sudo apt install python3`. Test it by typing `python3 --version` and seeing it print a number.

‌

### Note about WSL

‌

As of the time of writing of this document, WSL has an issue renaming or deleting files if Visual Studio Code is open. So before doing any linux commands which manipulate files, make sure you **close** Visual Studio Code before running those commands in the Ubuntu terminal.

‌

### Some other common instillations

    # Installing build essentials
    sudo apt-get install -y build-essential libssl-dev
    # Nodejs and NVM
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
    source ~/.profile
    sudo nvm install 7.10.0
    sudo nvm use 7.10.0
    node -v
    #nodemon
    sudo npm install -g nodemon
    sudo npm install -g loopback-cli
    # Forever to run nodejs scripts forever
    sudo npm install forever -g
    # Git - a version control system
    sudo apt-get update
    sudo apt-get install -y git xclip
    # Grunt - an automated task runner
    sudo npm install -g grunt-cli
    # Bower - a dependency manager
    sudo npm install -g bower
    # Yeoman - for generators
    sudo npm install -g yo
    # maven
    sudo apt-get install maven -y
    # Gulp - an automated task runner
    sudo npm install -g gulp-cli
    # Angular FullStack - My favorite MEAN boilerplate (MEAN = MongoDB, Express, Angularjs, Nodejs)
    sudo npm install -g generator-angular-fullstack
    # Vim, Curl, Python - Some random useful stuff
    sudo apt-get install -y vim curl python-software-properties
    sudo apt-get install -y python-dev, python-pip
    sudo apt-get install -y libkrb5-dev
    # Installing JDK and JRE
    sudo apt-get install -y default-jre
    sudo apt-get install -y default-jdk
    # Archive Extractors
    sudo apt-get install -y unace unrar zip unzip p7zip-full p7zip-rar sharutils rar uudeview mpack arj cabextract file-roller
    # FileZilla - a FTP client
    sudo apt-get install -y filezilla

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [February 27, 2021](https://medium.com/p/9f36c3f15afe).

<a href="https://medium.com/@bryanguner/basic-web-development-environment-setup-9f36c3f15afe" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
