/* global require, process, __dirname */
'use strict';
var path = require('path');
var fs = require('fs');

var app = require('connect')();
var connect_livereload = require('connect-livereload');
var serve_static = require('serve-static');
var parseurl = require('parseurl');

var JSDELIVR = /https:\/\/cdn.jsdelivr.net\/npm\/ghost-theme-utils@latest/g;

function docs(req, res) {
    var pathname = parseurl(req).pathname;
    if (pathname.substr(-1) === '/') {
        pathname += 'index.html';
    }
    var fullPath = path.join(__dirname, 'docs', pathname);
    if (!fullPath.endsWith('.html')) {
        res.statusCode = 404;
        return res.end();
    }

    var contents = fs.readFileSync(fullPath, 'utf8');
    contents = contents.replace(JSDELIVR, '');
    contents = contents.replace('style.min.css', 'style.css');
    contents = contents.replace('ghost-theme-utils.min.js', 'ghost-theme-utils.js');

    res.setHeader('Content-Type', 'text/html');
    res.end(contents);
}

app.use(connect_livereload());
app.use('/dist', serve_static(path.join(process.cwd(), 'dist')));
app.use(docs);

var PORT = 8080;
app.listen(PORT, function () {
    console.log('Serving at http://localhost:%d', PORT);
});
