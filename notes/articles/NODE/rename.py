# Moving all files in a directory to a subdirectory with the same name as the file.
#!/usr/bin/env python3
import shutil
import os
import sys

dr = sys.argv[1]

for root, dirs, files in os.walk('./'):
    for f in files:
        shutil.move(root+"/"+f, root+"/"+root.split("/")[-1]+f)
