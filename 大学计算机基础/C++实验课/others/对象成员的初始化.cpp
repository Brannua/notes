#include <iostream>
using namespace std;

class A
{
private:
    int x;
    float y;

public:
    A(int x1, float y1)
    {
        x = x1;
        y = y1;
    }
    void show()
    {
        cout << "\n x=" << x << "y=" << y;
    }
};

class B
{
private:
    int z;
    A a; //类A的对象a是类B的对象成员
public:
    B(int x1, float y1, int z1) : a(x1, y1)
    {
        z = z1;
    }
    void show()
    {
        a.show();
        cout<<"z="<<z;
    }
};

int main()
{
    B b(11, 22, 33);
    b.show();
    return 0;
}