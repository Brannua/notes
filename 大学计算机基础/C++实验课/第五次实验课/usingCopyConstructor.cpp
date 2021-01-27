#include<iostream>
using namespace std;

class Point{
private:
	int x, y;
public:
	//ע���Ĭ��ֵ�Ĳ����Ժͺ�������һ��ʹ��
	Point(int a0, int b = 0);//�������캯��
	Point(const Point &p);
	void print()
	{
		cout<<x<<" "<<y<<endl;
	}
};

//���幹�캯��
Point::Point(int a, int b)
{
	x = a;
	y = b;
}

//���忽�����캯��
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

	//������Ϊ������ʼ���¶�����ÿ������캯��
	Point p2(p1);
	p2.print();

	//������Ϊʵ�δ�����ͨ����
	//�β�ʵ�����ϵ��ÿ������캯��
	fun1(p1);

	//���������ֵ,���ÿ������캯��
	Point p3 = p1;
	p3.print();

	//��������ֵ�Ƕ���
	//���ú���fun2����ʱ,���ÿ������캯��
	p2 = fun2();
	p2.print();

	return 0;
}
