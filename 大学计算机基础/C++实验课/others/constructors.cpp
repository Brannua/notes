#include<iostream>
using namespace std;

class Point {

private:
	int x, y;

public:
	//��ͨ���캯��
	Point(int a, int b)
	{
		x = a;
		y = b;
	}

	//�Զ���Ŀ������캯��
	Point(const Point &p)
	{
		//�������캯����xy����ͨ���캯������������xy�Ķ���
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
	//�������p1,��������ͨ�Ĺ��캯��
	Point p1(30, 40);
	//���ù��캯������ʹ��p1��ʼ��p2
	Point p2(p1);
	p1.print();
	p2.print();
	return 0;
}