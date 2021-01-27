/* 
    建立类cylinder,cylinder的构造函数被传递了两个double值,分别表示圆柱体的半径和高度.
    用类cylinder计算圆柱体的体积,并存储在一个double变量中.在类cylinder中包含一个成员函数vol
    用来显示每个cylinder对象的体积
 */
#include <iostream>
using namespace std;

class Cylinder
{
public:
    Cylinder(double r, double h)
    {
        radius = r;
        height = h;
        v = 3.14159 * radius * radius * height;
    }
    float vol()
    {
        cout << v << endl;
    }

private:
    double radius;
    double height;
    double v;
};

int main()
{
    Cylinder cylinder(1, 1);
    cylinder.vol();
    return 0;
}