// /* 
//     使用第三方包chokidar对fs.watchFile/fs.watch进行了封装,解决了一些问题,详见github
// */
// const chokidar = require('chokidar');

// // One-liner for current directory, ignores .dotfiles
// chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
//   console.log(event, path);
// });



// node.js, "classic" way:
/* 
  // let MarkdownIt = require('markdown-it');
  // md = new MarkdownIt() || window.markdownit();
*/

let md = require('markdown-it')(),
    result = md.render('# markdown-it rulezz!');
console.log(result);