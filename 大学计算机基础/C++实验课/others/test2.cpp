#include <iostream>
#include <fstream>
using namespace std;

class JianCai
{
protected:
    static int countShengXiang; //静态成员统计圣象地板的数量
    static float sumPrice;      //统计地板的总价
    static float ave;           //平均价格

public:
    char proArea;  //产地
    char proBrand; //品牌
    JianCai(char area, char brand)
    {
        proArea = area;
        proBrand = brand;
    }
    // 静态成员函数格式化输出圣象地板的数量和平均价格到屏幕
    static void print()
    {
        cout << "圣象地板的数量: " << countShengXiang << endl;
        cout << "平均价格: " << ave << endl;
    }
};

class ShengXiang : public JianCai
{
public:
    ShengXiang(char area, char brand, double price) : JianCai(area, brand)
    {
        countShengXiang++;
        sumPrice += price;
        ave = sumPrice / countShengXiang;
        proPrice = price;
    }
    friend void writeFile(ShengXiang obj);

protected:
    double proPrice; //价格
};

void writeFile(ShengXiang obj)
{
    fstream ff("diban.txt", ios::out);
    if (!ff)
    {
        cout << "open diban.txt error!" << endl;
        abort(); //退出程序
    }
    ff << "地板产自: " << obj.proArea << endl;
    ff << "地板品牌: " << obj.proBrand << endl;
    ff << "地板价格: " << obj.proPrice << endl;
    ff.close();
}

int JianCai::countShengXiang = 0; //静态数据成员初始化
float JianCai::sumPrice = 0.0;    //静态数据成员初始化
float JianCai::ave = 0.0;         //静态数据成员初始化

int main()
{
    JianCai diban('c', 'A');
    ShengXiang diban2('c', 'A', 66);
    ShengXiang diban3('m', 'B', 99);

    writeFile(diban3);
    diban3.print();
    return 0;
}