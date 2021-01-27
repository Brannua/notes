/* 
    声明一个类complex,定义类complex的两个对象c1和c2,
    对象c1通过构造函数直接指定复数的实部和虚部( 类私有数据成员为double类型 )
    real和imag为2.5及3.7
    对象c2通过构造函数直接指定复数的实部和虚部为4.2及6.5
    定义友元运算符重载函数,它以c1,c2对象为参数,调用该函数时能返回两个复数对象相加操作
    定义成员函数print,调用该函数时,以格式"(real,imag)"输出当前对象的实部和虚部
    例如: 对象的实部和虚部分别是4.2及6.5,则调用print函数输出格式为: (4.2,6.5)
 */
#include <iostream>
using namespace std;

class Complex
{
private:
    double real;
    double imag;

public:
    Complex(double r, double i)
    {
        real = r;
        imag = i;
    }
    friend Complex operator+(Complex obj1, Complex obj2);
    void print()
    {
        cout << "(" << real << "," << imag << ")" << endl;
    }
};

Complex operator+(Complex obj1, Complex obj2)
{
    Complex oTemp(obj1.real + obj2.real, obj1.imag + obj2.imag);
    return oTemp;
}

int main()
{
    Complex c1(2.5, 3.7), c2(4.2, 6.5);
    c1.print();
    c2.print();
    (c1 + c2).print();
    return 0;
}