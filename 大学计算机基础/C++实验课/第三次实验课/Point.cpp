#include<iostream>
using namespace std;

class Point{
	public:
		void setPoint(int a, int b);
		int getX();
		int getY();
	private:
		int x, y;
};

void Point::setPoint(int a, int b){
	x = a;
	y = b;
}

int Point::getX(){
	return x;
}

int Point::getY(){
	return y;
}

int main(){
	Point point;
	point.setPoint(1, 2);
	int x = point.getX();
	int y = point.getY();
	cout << "(" << x << ", " << y << ")" << endl;
	return 0;
}
