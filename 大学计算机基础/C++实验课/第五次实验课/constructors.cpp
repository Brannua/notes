#include<iostream>
using namespace std;

class Point {

private:
	int x, y;

public:
	//普通构造函数
	Point(int a, int b)
	{
		x = a;
		y = b;
	}

	//自定义的拷贝构造函数
	Point(const Point &p)
	{
		//拷贝构造函数的xy是普通构造函数构造出对象的xy的二倍
		x = 2 * p.x;
		y = 2 * p.y;
	}

	void print()
	{
		cout<<x<<" "<<y<<endl;
	}

};

int main() 
{
	//定义对象p1,调用了普通的构造函数
	Point p1(30, 40);
	//调用构造函数并且使用p1初始化p2
	Point p2(p1);
	p1.print();
	p2.print();
	return 0;
}