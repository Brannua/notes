#include<iostream>
using namespace std;

class Point {

	public:
		void setPoint(int a, int b);
		int getX();
		int getY();

	private:
		int x, y;

};

void Point::setPoint(int a, int b) 
{
	x = a;
	y = b;
}

int Point::getX() 
{
	return x;
}

int Point::getY() 
{
	return y;
}

int main() 
{
	
	Point A[10];

	for (int i = 0; i < 10; i ++) {
		A[i].setPoint(2, 3);
		
	}

	for(int j = 0; j < 10; j ++){
		cout<<A[j].getX()<<endl;
		cout<<A[j].getY()<<endl;
	}

	return 0;

}