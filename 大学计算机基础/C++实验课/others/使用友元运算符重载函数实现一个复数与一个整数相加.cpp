#include <iostream>
using namespace std;

class Complex
{
private:
    int real, imag;

public:
    Complex(int real1 = 0, int imag1 = 0)
    {
        real = real1;
        imag = imag1;
    }

    void show()
    {
        cout << "real = " << real << "imag = " << imag << endl;
    }

    friend Complex operator+(int a, Complex com)
    {
        return Complex(a + com.real, com.imag);
    }
    friend Complex operator+(Complex com, int a)
    {
        return Complex(a + com.real, com.imag);
    }
};

int main()
{
    Complex com1(30, 40);
    Complex com2;
    com2 = com1 + 30;
    com2.show();
    com2 = 50 + com1;
    com2.show();
    return 0;
}