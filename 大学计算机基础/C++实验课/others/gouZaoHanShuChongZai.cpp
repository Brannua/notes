#include <iostream>
using namespace std;

class Complex{
	private:
		int real;
		int imag;
	public:
		Complex(int r, int i);
		Complex(int r);
		Complex();
		void showComplex()
		{cout<<real<<" "<<imag<<endl;}
};

Complex::Complex(int r, int i)
{real = r;imag = i;}
Complex::Complex(int r)
{real = r;imag = r;}
Complex::Complex()
{real = 111;imag = 222;}

int main()
{
	Complex A(1, 2);
	A.showComplex();
	Complex B(3);
	B.showComplex();
	Complex C;
	C.showComplex();
	return 0;
}
