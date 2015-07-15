#Issue
When a url has www in it css-loader removes it.

##Install
```sh
$ git clone https://github.com/jspears/css-loader-minimize-issue.git
$ cd css-loader-minimize-issue
$ npm start
$ grep 'superduper' compiled.js

#note the www is stripped from the background-image property
```
