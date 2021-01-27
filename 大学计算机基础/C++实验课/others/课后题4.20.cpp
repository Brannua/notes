#include <iostream>
using namespace std;

class area_c1
{
protected:
    double height;
    double width;

public:
    area_c1(double w, double h)
    {
        width = w;
        height = h;
    }
    double area() {}
};

class rectangle : public area_c1
{
public:
    rectangle(double w, double h):area_c1(w, h){}
    double area()
    {
        cout << width * height << endl;
    }
};

class isosceles : public area_c1
{
public:
    isosceles(double w, double h):area_c1(w, h){}
    double area()
    {
        cout << width * height / 2 << endl;
    }
};

int main()
{
    isosceles isos(10.0, 5.0);
    isos.area();
    rectangle rect(4.0, 6.0);
    rect.area();
    return 0;
}