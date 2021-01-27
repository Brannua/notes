/* 
    重载插入运算符"<<"举例
 */
#include <iostream>
using namespace std;
using  std::ostream;

class Coord
{
private:
    int x, y;

public:
    Coord(int i = 0, int j = 0)
    {
        x = i;
        y = j;
    }
    friend ostream& operator<<(ostream &stream, Coord &ob);
};

ostream& operator<<(ostream &stream, Coord &ob)
{
    stream << ob.x << ob.y << endl;
    return stream;
}

int main()
{
    Coord a(55, 66), b(100, 200);
    cout << a << b;
    return 0;
}