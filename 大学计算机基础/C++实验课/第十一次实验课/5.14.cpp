#include <iostream>
using namespace std;

class A
{
private:
    int x;

public:
    A(int i) : x(i){}
    A()
    {
        x = 0;
    }
    friend A operator++ (A a);
    friend A operator--(A &a);
    void print();
};

A operator++(A a)
{
    ++a.x;
    return a;
}

A operator--(A &a)
{
    --a.x;
    return a;
}

void A::print()
{
    cout<<x<<endl;
}

int main()
{
    A a(7);
    // 值的传递是一个副本,不会影响原有的值
    ++a;
    a.print();//7
    // 地址的传递是直接在原有值上进行操作
    --a;
    a.print();//6
    return 0;
}