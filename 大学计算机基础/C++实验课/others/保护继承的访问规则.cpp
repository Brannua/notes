/* 

    例4.4 ==> 保护继承的访问规则举例

 */

#include <iostream>
using namespace std;

class Base
{ //声明基类Base
public:
    int z;
    void setx(int i)
    {
        x = i;
    }
    int getx()
    {
        return x;
    }

private:
    int x;

protected:
    int y;
};

class Derived : protected Base
{
public:
    int p;
    void setAll(int a, int b, int c, int d, int e, int f);
    void show();

private:
    int m;

protected:
    int n;
};

void Derived::setAll(int a, int b, int c, int d, int e, int f)
{
    setx(a);
    y = b;
    z = c;
    m = d;
    n = e;
    p = f;
}

void Derived::show()
{
    cout << "x = " << getx() << endl;
    cout << "y = " << y << endl;
    cout << "z = " << z << endl;
    cout << "m = " << m << endl;
    cout << "n = " << n << endl;
}

int main()
{
    Derived obj;
    obj.setAll(1, 2, 3, 4, 5, 6);
    obj.show();
    cout << "p = " << obj.p << endl;
    return 0;
}