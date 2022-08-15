function RecurseDirs ()
{
    oldIFS=$IFS
    IFS=$'\n'
    for f in "$@"
    do
  
  # YOUR CODE HERE!
find . -type f -exec sed -n -e '/```javascript/,/```/p' *.html >out.js ./* {} \;
  
  
        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS
}
RecurseDirs "./"