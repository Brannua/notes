// 文件操作模块
const path = require('path');
const fs = require('fs');
// markdow转html模块加载返回对象的实例化
const md = require('markdown-it')();
// 监控文件变化模块
const chokidar = require('chokidar');

let templatePath = path.join(__dirname, './template.html');
let mdPath = path.join(__dirname, './sample.md');
let targetPath = path.join(__dirname, './sample.html');

// 监控.md文件的变化
chokidar.watch(mdPath).on('change', (event, path) => {
    // 一旦.md文件发生变化,即刻读取
    setTimeout(() => {
    fs.readFile(mdPath, 'utf8', (err, mdData) => {
            if (err) {
                console.log("读取markdown文件变化失败");
                return;
            } else {
                console.log("读取markdown文件变化成功");
                // 一旦读取markdown文件变化成功就将其转化为html片段
                let newHtmlPara = md.render(mdData);
                console.log("转化为html片段成功");
                // 开始读取模板html文件
                fs.readFile(templatePath, 'utf8', (err, templateHtml) => {
                    if (err) {
                        console.log("读取模板html文件失败");
                        return;
                    } else {
                        console.log("读取模板html文件成功");
                        console.log("开始更新最新html页面...");
                        // 替换模板中的占位符为新生成的html片段
                        let newResult = templateHtml.replace('<%content%>', newHtmlPara);
                        // 如果没有targetPath,会新建一个
                        // 新生成的html片段写入新文件中
                        fs.writeFile(targetPath, newResult, (err) => {
                            if (err) {
                                console.log("最新html页面更新失败");
                                return;
                            } else {
                                console.log("最新html页面更新成功");
                                console.log("最新html页面为:");
                                console.log("-------------------------------------------------");
                                console.log(newResult);
                            }
                        });
                    }
                });
            }
        });
    }, 10);

});