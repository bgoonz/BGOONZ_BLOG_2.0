# 1.0.1 - Improved matching logic
- Fixed an issue with global regexes not matching multiple files (closes #5)
- Added support for a callback function to test an asset for skipping (closes #6)

To use the new function matcher, add a function to either array in the options which takes an `HtmlTagObject` from html-webpack-plugin as an argument, and returns `true` to skip the file, or `false` to include it.

New mocha tests have also been added to test for both of the above fixes. The mocha test file has also been refactored to reduce duplicate testing effort and easily expand coverage.

# 1.0.0 - Webpack 5 support
- verify support for webpack5 and html-webpack-plugin 5

# 0.0.2
## Build tool and readme changes
No functional difference, just pinning dependencies and updating readme

# 0.0.1
## Initial Release
