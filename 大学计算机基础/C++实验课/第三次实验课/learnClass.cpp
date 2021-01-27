//创建一个类，类中定义函数实现获取复数的绝对值
#include<iostream>
#include<cmath>
using namespace std;

class Complex {

	private:
		double real;
		double image;

	public:
		void init(double r, double i)
		{
		
			real = r;
			image = i;

		}
		double abscomplex()
		{
		
			double t;
			t = real * real + image * image;
			return sqrt(t);
		
		}

};

int main() 
{
	Complex A;
	A.init(1.1, 2.2);
	cout<<"复数的绝对值是:"<<A.abscomplex()<<endl;
	return 0;
}