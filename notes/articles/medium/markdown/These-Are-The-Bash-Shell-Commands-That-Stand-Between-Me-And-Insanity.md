These Are The Bash Shell Commands That Stand Between Me And Insanity
====================================================================

I will not profess to be a bash shell wizard… but I have managed to scour some pretty helpful little scripts from Stack Overflow and modify…

------------------------------------------------------------------------

### These Are The Bash Shell Commands That Stand Between Me And Insanity

#### I will not profess to be a bash shell wizard… but I have managed to scour some pretty helpful little scripts from Stack Overflow and modify them to suit my needs.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*R_oz3NR6AD6EIp5d" alt="Photo by George Girnas on Unsplash" class="graf-image" /><figcaption>Photo by <a href="https://unsplash.com/@amfiloxia_68?utm_source=medium&amp;utm_medium=referral" class="markup--anchor markup--figure-anchor">George Girnas</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" class="markup--anchor markup--figure-anchor">Unsplash</a></figcaption></figure>All of these commands are for Ubuntu/WSL … some may work in other scenarios but I can’t guarantee it.

> *As of this writing I have about 120 more bash snippets I regularly use… I am not writing the whole article right now but I wanted to get it started so I feel obligated to finish it!*

### Recursive Unzip followed by recursive delete zip:

### Remove spaces from file and folder names

### Find and replace in string/folder names

    find . -type f -exec rename ‘s/string1/string2/g’ {} +

### Remove numbers from file names

    find $dir -type f | sed ‘s|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \”&\” \”\1\2\”|’ | sh

### Delete files within size range ( for when GitHub cries about file size):

    find . -size +386b -a -size -390b -exec rm -f {} \;

### Create symbolic link to working directory

    ln -s “$(pwd)” ~/mylink

### **Remove any traces of a git repository:**

    find . \( -name “.git” -o -name “.gitignore” -o -name “.gitmodules” -o -name “.gitattributes” \) -exec rm -rf — {} +

### Replace spaces in filenames with underscores

    for file in *; do mv “$file” `echo $file | tr ‘ ‘ ‘_’` ; done

### Remove Empty Files and Folders:

    find . -empty -type f -print -delete
    find . -empty -type d -print -delete 

***or***

    find . -depth -exec rmdir {} \;

### Autogenerate a navigable HTML directory for all the files in the current working directory you exicute the script in:

### For more content… go to :

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer https://bryanguner.medium.com/ https://portfolio42.netlify.app/…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 15, 2021](https://medium.com/p/984865ba5d1b).

<a href="https://medium.com/@bryanguner/these-are-the-bash-shell-commands-that-stand-between-me-and-insanity-984865ba5d1b" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
