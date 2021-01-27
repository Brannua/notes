/* 
    实验五: 虚函数,运算符重载,以及模板的综合练习
    
    习题5.20
    定义抽象基类Container,由它派生出三个派生类: 
    Sphere( 球体 ),Cylinder( 圆柱体 ),Cube( 正方体 )
    用虚函数分别计算几种图形的表面积和体积

    以教材258页习题5.20为基础,增加以下要求
    1. 建立模板函数,求出两个同类几何体( 体积 )最大值
    2. 重载">"运算符,用来比较自定义的几何体
 */
/* 
    定义抽象基类Container,由它派生出三个派生类: 
    Sphere( 球体 ),Cylinder( 圆柱体 ),Cube( 正方体 )
    用虚函数分别计算几种图形的表面积和体积
 */

#include <iostream>
using namespace std;

/* 
    判断两个几何体体积大小的函数模板
 */
template <class T>
T Max(T x, T y)
{
    return x > y ? x : y;
}

/* 
    所有几何体的基类
 */
class Container
{
protected:
    double width;
    double height;

public:
    // 传入参数r对应 ==> 球体的半径,正方体的边长,圆柱体的底面半径
    // 传入参数h对应 ==> 圆柱体的高
    Container(double r, double h)
    {
        width = r;
        height = h;
    }
    virtual double area() = 0; //纯虚函数,定义几何体的表面积
    virtual double size() = 0; //纯虚函数,定义几何体的体积
};

/* 
    球体
 */
class Sphere : public Container
{
public:
    Sphere(double r, double h) : Container(r, h) {}
    // 定义虚函数area
    double area()
    {
        return 4.0 * 3.14159 * width * width;
    }
    // 定义虚函数size
    double size()
    {
        return 3.0 / 4.0 * 3.14159 * width * width * width;
    }
    /* 
        运算符 > 重载,用于比较传入的两个球体
    */
    friend string operator>(Sphere s1, Sphere s2)
    {
        if (s1.size() > s2.size())
        {
            cout << "前一个球体比较大为: " << Max(s1.size(), s2.size()) << endl;
            return "ok";
        }
        else
        {
            cout << "后一个球体比较大为: " << Max(s1.size(), s2.size()) << endl;
            return "ok";
        }
    }
};
/* 
    圆柱体
 */
class Cylinder : public Container
{
public:
    Cylinder(double r, double h) : Container(r, h)
    {
    }
    // 定义虚函数area
    double area()
    {
        return 2.0 * 3.14159 * width * width + 2.0 * 3.14159 * width * height;
    }
    // 定义虚函数size
    double size()
    {
        return 3.14159 * width * width * height;
    }
    /* 
        运算符 > 重载,用于比较传入的两个圆柱体
    */
    friend string operator>(Cylinder Cy1, Cylinder Cy2)
    {
        if (Cy1.size() > Cy2.size())
        {
            cout << "前一个圆柱体比较大为: " << Max(Cy1.size(), Cy2.size()) << endl;
            return "ok";
        }
        else
        {
            cout << "后一个圆柱体比较大为: " << Max(Cy1.size(), Cy2.size()) << endl;
            return "ok";
        }
    }
};
/* 
    正方体
 */
class Cube : public Container
{
public:
    Cube(double r, double h) : Container(r, h)
    {
    }
    // 定义虚函数area
    double area()
    {
        return 6.0 * width * width;
    }
    // 定义虚函数size
    double size()
    {
        return width * width * width;
    }
    /* 
        运算符 > 重载,用于比较传入的两个正方体
    */
    friend string operator>(Cube c1, Cube c2)
    {
        if (c1.size() > c2.size())
        {
            cout << "前一个正方体比较大为: " << Max(c1.size(), c2.size()) << endl;
            return "ok";
        }
        else
        {
            cout << "后一个正方体比较大为: " << Max(c1.size(), c2.size()) << endl;
            return "ok";
        }
    }
};

int main()
{
    Sphere sp1(1, 2), sp2(2, 3);
    sp1 > sp2;
    Cylinder cy1(1, 2), cy2(0.5, 0.1);
    cy1 > cy2;
    Cube cu1(3, 3), cu2(2, 2);
    cu1 > cu2;
    return 0;
}