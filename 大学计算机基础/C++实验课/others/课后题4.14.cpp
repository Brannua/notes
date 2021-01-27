#include <iostream>
using namespace std;
class A
{
private:
    int a;

public:
    A()
    {
        a = 0;
    }
    A(int i)
    {
        a = i;
    }
    void print()
    {
        cout << a << ",";
    }
};

class B : public A
{
private:
    int b1, b2;

public:
    B()
    {
        b1 = 0;
        b2 = 0;
    }
    B(int i)
    {
        b1 = i;
        b2 = 0;
    }
    B(int i, int j, int k) : A(i), b1(j), b2(k)
    {
    }
    void print()
    {
        A::print();
        cout << b1 << "," << b2 << endl;
    }
};
int main()
{
    B ob1, ob2(1), ob3(3, 6, 9);
    ob1.print();
    ob2.print();
    ob3.print();
    return 0;
}