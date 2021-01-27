let str1 = "weaqwe"
let str2 = "qweatysjkdpp"

/**
 * 获取子序列长度的表格的方法
 */
function LCS(str1, str2) {
    let rows = str1.split("")
    rows.unshift("") /* 行的第一个子序列指定为空序列 */
    let cols = str2.split("")
    cols.unshift("") /* 列的第一个子序列指定为空序列 */
    let m = rows.length
    let n = cols.length
    let i
    let j
    let dp = []
    for (i = 0; i < m; i++) {
        dp[i] = []
        for (j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
                continue
            }
            if (rows[i] === cols[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1 /* 对角加一 */
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) /* 左边或上边取最大 */
            }
        }
        console.log(dp[i].join("")) /* 打印表格每一行 */
    }
    return dp /* 返回表格 */
}

/**
 * 打印一个最长子序列
 */
function printLCS(str1, str2, dp, i, j) {
    if (i === 0 || j === 0) {
        return ""
    }

    if (str1[i - 1] === str2[j - 1]) {
        return printLCS(str1, str2, dp, i - 1, j - 1) + str1[i - 1]
    } else {
        return dp[i - 1][j] > dp[i][j - 1] ? printLCS(str1, str2, dp, i - 1, j) : printLCS(str1, str2, dp, i, j - 1)
    }
}

// console.log(printLCS(str1, str2, LCS(str1, str2), str1.length, str2.length)) /* 测试代码,打印出一个最长子序列 */

/**
 * 返回所有的最长子序列,利用ES6的set实现
 */
function getAllLCS(str1, str2, dp, i, j) {
    if (i === 0 || j === 0) {
        return new Set([""])
    }

    if (str1[i - 1] === str2[j - 1]) {
        let set = new Set()
        getAllLCS(str1, str2, dp, i - 1, j - 1).forEach((elem) => {
            set.add(elem + str1[i - 1])
        })
        return set
    } else {
        let set = new Set()
        if (dp[i - 1][j] > dp[i][j - 1]) {
            set.add(getAllLCS(str1, str2, dp, i - 1, j))
        } else {
            set.add(getAllLCS(str1, str2, dp, i, j - 1))
        }
        return set
    }
}

/* 测试代码 */
getAllLCS(str1, str2, LCS(str1, str2), str1.length, str2.length).forEach(elem=>{
    console.log(elem)
})