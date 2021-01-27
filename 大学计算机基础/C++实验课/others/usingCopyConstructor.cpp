#include<iostream>
using namespace std;

class Point{
private:
	int x, y;
public:
	//注意带默认值的不可以和函数重载一起使用
	Point(int a0, int b = 0);//声明构造函数
	Point(const Point &p);
	void print()
	{
		cout<<x<<" "<<y<<endl;
	}
};

//定义构造函数
Point::Point(int a, int b)
{
	x = a;
	y = b;
}

//定义拷贝构造函数
Point::Point(const Point &p)
{
	x = 2 * p.x;
	y = 2 * p.y;
}

void fun1(Point p)
{
	p.print();
}

Point fun2()
{
	Point p4(10, 30);
	return p4;
}

int main()
{
	Point p1(30, 40);
	p1.print();

	//对象作为参数初始化新对象调用拷贝构造函数
	Point p2(p1);
	p2.print();

	//对象作为实参传入普通函数
	//形参实参相结合调用拷贝构造函数
	fun1(p1);

	//对象给对象赋值,调用拷贝构造函数
	Point p3 = p1;
	p3.print();

	//函数返回值是对象
	//调用函数fun2结束时,调用拷贝构造函数
	p2 = fun2();
	p2.print();

	return 0;
}
