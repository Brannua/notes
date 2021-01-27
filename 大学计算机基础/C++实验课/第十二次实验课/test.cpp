/* 
    构建食用油类,豆油类( 继承 ),自拟若干数据成员( 不少于三个 )以及成员函数
    要求: 至少设计两个以上的构造函数,对象不少于三个,
    通过友元函数输出豆油的基本信息到文件

    通过静态成员函数格式化输出豆油的种类和非转基因豆油的占比到屏幕
 */
#include <iostream>
#include <fstream>
using namespace std;

class ShiYongYou
{
protected:
    static int countNoZhuanJiYin; //非转基因豆油的数量
    static float sum;             //豆油的总数
    static float ave;             //非转基因豆油的占比

public:
    char proArea;
    int proType;
    char proBrand;
    // area => 豆油产地 => c是china && a是america
    // type=0 => 非转基因
    // type=1 => 转基因
    // brand => 豆油品牌用A,B,C...代替
    ShiYongYou(char area, int type, char brand)
    {
        ++sum;
        if (type == 0)
        {
            ++countNoZhuanJiYin;
        }
        ave = countNoZhuanJiYin / sum;


        proArea = area;
        proType = type;
        proBrand = brand;
    }
    /* show函数仅供测试使用 */
    void show()
    {
        cout << "豆油产自: " << proArea << endl;
        cout << "豆油是否转基因: " << proType << endl;
        cout << "豆油品牌: " << proBrand << endl;
    }
    // 静态成员函数格式化输出豆油的种类和非转基因豆油的占比到屏幕
    static void print()
    {
        cout << "非转基因豆油的占比: " << ave << endl;
    }
};

class DouYou : public ShiYongYou
{
public:
    DouYou(char area, int type, char brand, double price) : ShiYongYou(area, type, brand)
    {
        proPrice = price;
    }
    void show()
    {
        ShiYongYou::show();
        cout << "豆油价格: " << proPrice << endl;
    }
    friend void writeFile(DouYou obj);

protected:
    double proPrice;
};

void writeFile(DouYou obj)
{
    fstream ff("you.txt", ios::out);
    if (!ff)
    {
        cout << "open you.txt error!" << endl;
        abort(); //退出程序
    }
    ff << "豆油产自: " << obj.proArea << endl;
    ff << "豆油是否转基因: " << obj.proType << endl;
    ff << "豆油品牌: " << obj.proBrand << endl;
    ff << "豆油价格: " << obj.proPrice << endl;
    ff.close();
}

int ShiYongYou::countNoZhuanJiYin = 0; //静态数据成员count初始化
float ShiYongYou::sum = 0.0;           //静态数据成员sum初始化
float ShiYongYou::ave = 0.0;           //静态数据成员ave初始化

int main()
{
    ShiYongYou you('c', 0, 'A');
    you.show();
    DouYou you2('c', 0, 'A', 66);
    you2.show();
    DouYou you3('m', 1, 'B', 99);
    you3.show();
    writeFile(you3);
    you3.print();
    return 0;
}