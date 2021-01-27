#include <iostream>
using namespace std;
class Base
{
private:
    int a;

public:
    Base(int sa)
    {
        a = sa;
        cout << "Constructing Base" << endl;
    }
};
class Base1 : virtual public Base
{
private:
    int b;

public:
    Base1(int sa, int sb) : Base(sa)
    {
        b = sb;
        cout << "Constructing base1" << endl;
    }
};
class Base2 : virtual public Base
{
private:
    int c;

public:
    Base2(int sa, int sc) : Base(sa)
    {
        c = sc;
        cout << "Constructing base2" << endl;
    }
};
class Derived : public Base1, public Base2
{
private:
    int d;
public:
    Derived(int sa, int sb, int sc, int sd):Base(sa), Base1(sa, sb), Base2(sa, sc)
    {
        d = sd;
        cout<<"Constructing Derived"<<endl;
    }
};
int main()
{
    Derived obj(2, 4, 6, 8);
    return 0;
}