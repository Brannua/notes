//����һ���࣬���ж��庯��ʵ�ֻ�ȡ�����ľ���ֵ
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
	cout<<"�����ľ���ֵ��:"<<A.abscomplex()<<endl;
	return 0;
}