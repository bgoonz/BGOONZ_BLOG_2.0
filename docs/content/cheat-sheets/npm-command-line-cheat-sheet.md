# NPM Command Line Cheat Sheet

```
# NPM CheatSheet.
# Super easy intall: npm comes with node now.
# To create your own npm package: https://www.npmjs.org/doc/misc/npm-developers.html
# More: https://www.npmjs.org/doc/

# 1. NPM Command Lines.
# Local mode is the default.
# Use --global or -g on any command to operate in global mode instead.

# As of version 0.3, it is recommended to run npm as root.
# This allows npm to change the user identifier to the `nobody` user
# prior to running any package build or test commands.

npm <cmd> -h                                            # quick help on <cmd>
npm -l                                                  # display full usage info
npm adduser                                             # add a registry user account
npm bin                                                 # display npm bin folder
npm bugs <pkgname>                                      # bugs for a package in a web browser maybe
npm build <package-folder>                              # build a package (should not be called directly)
npm cache [add|ls|clean] <tarball|folder>               # manipulates packages cache
npm config [set|get|delete|list|edit] <key> <value>     # manage the npm configuration files
npm dedupe [package names...]  --tag                    # reduce duplication
npm decrecate <name>[@<version>] <message>              # deprecate a version of a package (must be the package owner)
npm docs [<pkg-name> [<pkg-name> ...]]                  # docs for a package in a web browser maybe
npm edit <name>[@<version>]                             # edit an installed package (default EDITOR set to "vi")
npm explore <name>[@<version>] [ -- <cmd>]              # browse an installed package
npm faq                                                 # commonly asked questions
npm help-search <some search terms>                     # search npm help documentation (rarely necessary to call directly)
npm help <topic> <some search terms>                    # get help on npm
npm init                                                # interactively create a package.json file
npm install <folder|name@<tag|version>|tarball>         # install a package (optional flags: --save, --save-dev, --save-optional, --save-exact)
npm link <pkgname>                                      # symlink a package folder
npm ls <pkg>                                            # list installed packages (as well as their dependencies)
npm outdated [<name> [<name> ...]]                      # check for outdated packages
npm owner [ls|add|rm] <pkg-name> <user>                 # manage package owners
npm pack [<pkg> [<pkg> ...]]                            # create a tarball from a package
npm prefix                                              # display prefix
npm prune [<name> [<name ...]] --production             # remove extraneous packages
npm publish <tarball|folder> [--tag <tag>]              # publish a package
npm rebuild [<name > [<name> ...]]                      # rebuild a package
npm repo <pkgname>                                      # open package repository in the browser
npm restart <name>                                      # start a package
npm rm <name>                                           # remove a package
npm root                                                # display npm root
npm run [<pkg>] [command]                               # run arbitrary package scripts
npm search [search terms ...] [--long]                  # search for packages
npm shrinkwrap                                          # lock down dependency versions
npm star <pkgname> [<pkg>, ...]                         # mark your favorite packages
npm stars [username]                                    # view packages marked as favorites
npm start <name>                                        # start a package
npm stop <name>                                         # stop a package
npm submodule <pkg>                                     # add a package as a git submodule
npm tag <name>@<version>                                # tag a published version
npm test <name>                                         # test a package
npm unpublish <name>[@<version>]                        # remove a package from the registry
npm unstar <pkgname> [<pkg>, ...]                       # Unfavorite specified p
npm update [-g] [<name> [<name> ...]]                   # update a package
npm version [<newversion> | major | minor | patch]      # bump a package version
npm view <name>[@<version>] [<field<[.<subfield>] ...]  # view registry info
npm whoami                                              # display npm username
```
