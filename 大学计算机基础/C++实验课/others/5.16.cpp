#include <iostream>
using namespace std;

class Length{
    int meter;//默认private
public:
    Length(int m)
    {
        meter = m;
    }
    operator double()
    {
        return (1.0*meter/1000);
    }
};

int main()
{
    Length a(1500);
    double m = float(a);
    cout<<"m="<<m<<"千米"<<endl;
    return 0;
}