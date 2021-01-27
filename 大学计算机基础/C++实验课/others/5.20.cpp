/* 
    定义抽象基类Container,由它派生出三个派生类: 
    Sphere( 球体 ),Cylinder( 圆柱体 ),Cube( 正方体 )
    用虚函数分别计算几种图形的表面积和体积
 */

#include <iostream>
using namespace std;

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
    virtual void area() = 0; //纯虚函数,定义几何体的表面积
    virtual void size() = 0; //纯虚函数,定义几何体的体积
};

// 球体
class Sphere : public Container
{
public:
    Sphere(double r, double h) : Container(r, h)
    {
    }
    // 定义虚函数area
    void area()
    {
        cout << "这个球体的表面积是: " << 4.0 * 3.14159 * width * width << endl;
    }
    // 定义虚函数size
    void size()
    {
        cout << "这个球体的体积是: " << 3.0 / 4.0 * 3.14159 * width * width * width << endl;
    }
};
// 圆柱体
class Cylinder : public Container
{
public:
    Cylinder(double r, double h) : Container(r, h)
    {
    }
    // 定义虚函数area
    void area()
    {
        cout << "这个圆柱体的表面积是: " << 2.0 * 3.14159 * width * width + 2.0 * 3.14159 * width * height << endl;
    }
    // 定义虚函数size
    void size()
    {
        cout << "这个圆柱体的体积是: " << 3.14159 * width * width * height << endl;
    }
};
// 正方体
class Cube : public Container
{
public:
    Cube(double r, double h) : Container(r, h)
    {
    }
    // 定义虚函数area
    void area()
    {
        cout << "这个正方体的表面积是: " << 6.0 * width * width << endl;
    }
    // 定义虚函数size
    void size()
    {
        cout << "这个正方体的体积是: " << width * width * width << endl;
    }
};

int main()
{
    Container *ptr; //定义抽象类Container的对象指针ptr
    Sphere sp(1, 2);
    Cylinder cy(1, 2);
    Cube cu(1, 2);
    ptr = &sp;
    ptr->area();
    ptr->size();
    ptr = &cy;
    ptr->area();
    ptr->size();
    ptr = &cu;
    ptr->area();
    ptr->size();
    return 0;
}