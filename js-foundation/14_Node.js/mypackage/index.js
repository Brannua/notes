var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# 一级标题');
console.log(result);