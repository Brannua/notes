#include<iostream>
using namespace std;
/*void f(int &m, int &n)
{
	int temp;
	temp = m;
	m = n;
	n = temp;
}
int main() 
{
	int a = 5, b = 10;
	f(a, b);
	cout<<a<<" "<<b<<endl;
	return 0;
}*/



int &f(int &i)
{
	i += 10;
	return i;
}
int main() 
{
	int k = 0;
	int &m = f(k);
	cout<<k<<endl;
	m = 20;
	cout<<k<<endl;
	return 0;
}