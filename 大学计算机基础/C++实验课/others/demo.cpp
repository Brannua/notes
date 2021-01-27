/* 
    有三门课程的数据,要求
    1. 以读写方式打开一个磁盘文件,并把这些数据存到磁盘文件中
    2. 将文件指针定位到第3门课程,读取第3门课程的数据并显示出来
    3. 将文件指针定位到第1门课程,读取第1门课程的数据并显示出来
    4. 将文件指针从当前位置定位到下一门课程,读取该门课程的数据并显示出来
 */
#include <iostream>
#include <fstream>
using namespace std;

struct List
{
    char course[15];
    int score;
};

int main()
{
    List list3[3] = {{'Computer', 90}, {'Mathematics', 78}, {'English', 84}};
    List st;
    // 定义类fstream的流对象ff,以读写方式打开二进制文件f6.dat
    fstream ff("f6.dat", ios::out | ios::binary);
    if (!ff)
    {
        cout << "open f6.dat error!" << endl;
        abort(); //退出程序
    }
    // 将三门课的数据写入已存在的磁盘文件f6.dat中
    for (int i = 0; i < 3; i++)
    {
        ff.write((char *)&list3[i], sizeof(List));
    }
    ff.close();
    fstream ff1("f6.dat", ios::in | ios::binary);
    if (!ff)
    {
        cout << "open f6.dat error!" << endl;
        abort(); //退出程序
    }
    ff1.seekp(sizeof(List) * 2);                   //将文件指针定位到第三门课程
    ff1.read((char *)&st, sizeof(List));           //读取第三门课程的数据
    cout << st.course << "\t" << st.score << endl; //显示第三门课程的数据
    ff1.seekp(sizeof(List) * 0);                   //将文件指针定位到第一门课程
    ff1.read((char *)&st, sizeof(List));           //读取第一门课程的数据
    cout << st.course << "\t" << st.score << endl; //显示第一门课程的数据
    ff1.seekp(sizeof(List) * 1, ios::cur);         //将文件指针从当前位置定位到下一门课程, ios::cur //当前位置 它仅仅是一个变量
    ff1.read((char *)&st, sizeof(List));           //读取该门课程的数据
    cout << st.course << "\t" << st.score << endl; //显示该门课程的数据
    ff1.close();                                   //关闭文件
    return 0;
}