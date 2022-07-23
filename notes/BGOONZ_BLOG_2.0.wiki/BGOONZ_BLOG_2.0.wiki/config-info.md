Build config validation --- 1 info

[ ](https://docs.travis-ci.com/user/build-config-validation/)

bgoonz/BGOONZ_BLOG_2.0:.travis.yml@0de6597

```
language: node_js

os:
  - linux
  - osx

node_js:
  - "node"
  - "lts/*"
  - "7"
  - "8"

script:
  - npm install

```

Build Config

```
{
  "language": "node_js",
  "os": [
    "linux",
    "osx"
  ],
  "dist": "xenial",
  "node_js": [
    "node",
    "lts/*",
    "7",
    "8"
  ],
  "script": [
    "npm install"
  ]
}
```
