/* 
    例题4.14
 */
#include <iostream>
using namespace std;
class X
{
public:
    X(int sa)
    {
        a = sa;
    }
    int getX()
    {
        return a;
    }
    ~X()
    {
        cout << "X_Destructor called." << endl;
    }

private:
    int a;
};
class Y
{
private:
    int b;

public:
    Y(int sb)
    {
        b = sb;
    }
    int getY()
    {
        return b;
    }
    ~Y()
    {
        cout << "Y_Destructor called." << endl;
    }
};
class Z : public X, private Y
{
private:
    int c;

public:
    Z(int sa, int sb, int sc) : X(sa), Y(sb)
    {
        c = sc;
    }
    int getZ()
    {
        return c;
    }
    ~Z()
    {
        cout << "Z_Destructor called." << endl;
    }
    int getY()
    {
        return Y::getY();
    }
};
int main()
{
    Z obj(2, 4, 6);
    int ma = obj.getX();
    cout << "a = " << ma << endl;
    int mb = obj.getY();
    cout << "b = " << ma << endl;
    int mc = obj.getZ();
    cout << "c = " << mc << endl;
    return 0;
}