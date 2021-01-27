/* 
    在习题7.13的基础上
    以ASCII码的形式格式化输出file1.txt的文件内容
    每行10列,每列5个字符宽,左对齐
    输出file2.txt文件内容
 */
#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main()
{
    fstream in("file.txt", ios::out); //定义in为fstream的对象
    // 判断是否成功打开文件
    if (!in)
    {
        cout << "open file.txt error!" << endl;
        // 打开失败则终止
        abort();
    }
    // 如果打开成功则继续执行以下代码
    // 向文件输入小写字母
    in << "abcdef" << endl;
    in << "ghijklmn" << endl;
    // 文件关闭
    in.close();

    fstream out("file2.txt", ios::out); //定义out为fstream的对象
    fstream ino("file.txt", ios::in);   //定义ino为fstream的对象
    // 判断是否成功打开文件
    if (!ino || !out)
    {
        cout << "open file.txt error!" << endl;
        abort();
    }
    // 用变量接受file.txt的每一个小写字母
    char a;
    while (ino.get(a))
    {
        // 转换大写
        if (a >= 'a' && a <= 'z')
        {
            a -= 32;
        }
        // 将大写输入file2.txt
        out << a;
    }
    // 文件关闭
    ino.close();
    out.close();

    fstream in2("file.txt", ios::in); //定义in2为fstream的对象
    int i = 0;
    while (in2.get(a))
    {
        ++i;
        cout << setw(5) << setiosflags(ios::left) << int(a);
        if (i == 10)
        {
            cout << endl;
        }
    }
    cout<<endl;
    in2.close();

    fstream in3("file2.txt", ios::in); //定义in3为fstream的对象
    while (in3.get(a))
    {
        cout << a;
    }
    in3.close();
    
    return 0;
}