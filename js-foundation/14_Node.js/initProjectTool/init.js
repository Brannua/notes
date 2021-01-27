/* 
    实现初始化工作
*/

const path = require('path');
const fs = require('fs');
const cfg = require("./config.json");

let rootName = cfg.rootName;

let init = () => {
    fs.mkdir(path.join('./', rootName), (err) => {
        if (err) {
            console.log("创建根目录失败");
            return;
        } else {
            console.log("创建根目录成功");
            cfg.data.forEach((e) => {
                if (e.type === 'dir') {
                    fs.mkdir(path.join('./', rootName, e.name), (err) => {
                        if (err) {
                            console.log(`创建子目录${e.name}失败`);
                            return;
                        }
                        console.log(`创建子目录${e.name}成功`);
                    })
                } else if (e.type === 'file') {
                    fs.readFile(path.join(__dirname, e.name), (err, data) => {
                        if (err) {
                            console.log(`读取文件${e.name}失败`);
                            return;
                        } else {
                            console.log(`读取文件${e.name}成功`);
                            fs.writeFile(path.join('./', rootName, e.name), data, (err) => {
                                if (err) {
                                    console.log(`写入子文件${e.name}失败`);
                                    return;
                                } else {
                                    console.log(`写入子文件成功`);
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

exports.init = init;