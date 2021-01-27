#include<iostream>
using namespace std;

int add(int a = 10, int b = 20)
{
	return a + b;
}

//函数的重载和默认值参数的函数有可能相冲突
//int add(int c)
//{
	//return c + c;
//}

int main()
{
	//两个都默认参数
	cout<<add()<<endl;
	//改变第二个参数
	cout<<add(10, 30)<<endl;
	//改变第一个参数
	cout<<add(20)<<endl;
	//两个参数都改变
	cout<<add(20, 30)<<endl;
	return 0;
}