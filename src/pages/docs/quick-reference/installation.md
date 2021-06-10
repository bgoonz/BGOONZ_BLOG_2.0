---
title: Installation
weight: 1
seo:
  title: Installation
  description: This is the installation page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Installation
      keyName: property
    - name: 'og:description'
      value: This is the installation page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Installation
    - name: 'twitter:description'
      value: This is the installation page
template: docs
---
# Basic Web Development Environment Setup

> Windows Subsystem for Linux (WSL) and Ubuntu

Windows Subsystem for Linux (WSL) and Ubuntu
--------------------------------------------

[![Bryan Guner](https://miro.medium.com/fit/c/96/96/1*ao1cHo7EQ4faDV8YNJwh_Q.png)](https://bryanguner.medium.com/?source=post_page-----9f36c3f15afe--------------------------------)

‌

![](https://miro.medium.com/max/60/0*aqKP1drNHmNm34zz.jpg?q=20)

![](https://miro.medium.com/max/1600/0*aqKP1drNHmNm34zz.jpg)

Test if you have Ubuntu installed by typing “Ubuntu” in the search box in the bottom app bar that reads “Type here to search”. If you see a search result that reads **“Ubuntu 20.04 LTS”** with “App” under it, then you have it installed.

‌

1.  In the application search box in the bottom bar, type “PowerShell” to find the application named “Windows PowerShell”
2.  Right-click on “Windows PowerShell” and choose “Run as administrator” from the popup menu
3.  In the blue PowerShell window, type the following: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`
4.  Restart your computer
5.  In the application search box in the bottom bar, type “Store” to find the application named “Microsoft Store”
6.  Click “Microsoft Store”
7.  Click the “Search” button in the upper-right corner of the window
8.  Type in “Ubuntu”
9.  Click “Run Linux on Windows (Get the apps)”
10.  Click the orange tile labeled **“Ubuntu”** Note that there are 3 versions in the Microsoft Store… you want the one just entitled ‘Ubuntu’
11.  Click “Install”
12.  After it downloads, click “Launch”
13.  If you get the option, pin the application to the task bar. Otherwise, right-click on the orange Ubuntu icon in the task bar and choose “Pin to taskbar”
14.  When prompted to “Enter new UNIX username”, type your first name with no spaces
15.  When prompted, enter and retype a password for this UNIX user (it can be the same as your Windows password)
16.  Confirm your installation by typing the command `whoami ‘as in who-am-i'`followed by Enter at the prompt (it should print your first name)
17.  You need to update your packages, so type `sudo apt update` (if prompted for your password, enter it)
18.  You need to upgrade your packages, so type `sudo apt upgrade` (if prompted for your password, enter it)

Git comes with Ubuntu, so there’s nothing to install. However, you should configure it using the following instructions.

‌Open an Ubuntu terminal if you don’t have one open already.

1.  You need to configure Git, so type `git config --global user.name "Your Name"` with replacing "Your Name" with your real name.
2.  You need to configure Git, so type `git config --global user.email your@email.com` with replacing "[your@email.com](mailto:your@email.com)" with your real email.

**Note: if you want git to remember your login credentials type:**

$ git config --global credential.helper store

‌

Test if you have Chrome installed by typing “Chrome” in the search box in the bottom app bar that reads “Type here to search”. If you see a search result that reads “Chrome” with “App” under it, then you have it installed. Otherwise, follow these instructions to install Google Chrome.

‌

1.  Open Microsoft Edge, the blue “e” in the task bar, and type in [http://chrome.google.com](http://chrome.google.com/). Click the “Download Chrome” button. Click the “Accept and Install” button after reading the terms of service. Click “Save” in the “What do you want to do with ChromeSetup.exe” dialog at the bottom of the window. When you have the option to “Run” it, do so. Answer the questions as you’d like. Set it as the default browser.
2.  Right-click on the Chrome icon in the task bar and choose “Pin to taskbar”.

Test if you have Node.js installed by opening an Ubuntu terminal and typing `node --version`. If it reports "Command 'node' not found", then you need to follow these directions.

1.  In the Ubuntu terminal, type `sudo apt update` and press Enter
2.  In the Ubuntu terminal, type `sudo apt install build-essential` and press Enter
3.  In the Ubuntu terminal, type `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash` and press Enter
4.  In the Ubuntu terminal, type `. ./.bashrc` and press Enter
5.  In the Ubuntu terminal, type `nvm install --lts` and press Enter
6.  Confirm that **node** is installed by typing `node --version` and seeing it print something that is not "Command not found"!

You will often have to download a zip file and unzip it. It is easier to do this from the command line. So we need to install a linux unzip utility.

‌In the Ubuntu terminal type: `sudo apt install unzip` and press Enter

‌Mocha.js

Test if you have Mocha.js installed by opening an Ubuntu terminal and typing `which mocha`. If it prints a path, then you're good. Otherwise, if it prints nothing, install Mocha.js by typing `npm install -g mocha`.

‌

Ubuntu does not come with Python 3. Install it using the command `sudo apt install python3`. Test it by typing `python3 --version` and seeing it print a number.

‌

‌

As of the time of writing of this document, WSL has an issue renaming or deleting files if Visual Studio Code is open. So before doing any linux commands which manipulate files, make sure you **close** Visual Studio Code before running those commands in the Ubuntu terminal.

‌

\# Installing build essentials  
sudo apt-get install -y build-essential libssl-dev  
\# Nodejs and NVM  
curl -o- [https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh](https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh) | bash  
source ~/.profile  
sudo nvm install 7.10.0  
sudo nvm use 7.10.0  
node -v  
#nodemon  
sudo npm install -g nodemon  
sudo npm install -g loopback-cli  
\# Forever to run nodejs scripts forever  
sudo npm install forever -g  
\# Git - a version control system  
sudo apt-get update  
sudo apt-get install -y git xclip  
\# Grunt - an automated task runner  
sudo npm install -g grunt-cli  
\# Bower - a dependency manager  
sudo npm install -g bower  
\# Yeoman - for generators  
sudo npm install -g yo  
\# maven  
sudo apt-get install maven -y  
\# Gulp - an automated task runner  
sudo npm install -g gulp-cli  
\# Angular FullStack - My favorite MEAN boilerplate (MEAN = MongoDB, Express, Angularjs, Nodejs)  
sudo npm install -g generator-angular-fullstack  
\# Vim, Curl, Python - Some random useful stuff  
sudo apt-get install -y vim curl python-software-properties  
sudo apt-get install -y python-dev, python-pip  
sudo apt-get install -y libkrb5-dev  
\# Installing JDK and JRE  
sudo apt-get install -y default-jre  
sudo apt-get install -y default-jdk  
\# Archive Extractors  
sudo apt-get install -y unace unrar zip unzip p7zip-full p7zip-rar sharutils rar uudeview mpack arj cabextract file-roller  
\# FileZilla - a FTP client  
sudo apt-get install -y filezilla

If you found this guide helpful feel free to checkout my github/gists where I host similar content:
---------------------------------------------------------------------------------------------------

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

Or Checkout my personal Resource Site:


[Source](https://levelup.gitconnected.com/basic-web-development-environment-setup-9f36c3f15afe)
