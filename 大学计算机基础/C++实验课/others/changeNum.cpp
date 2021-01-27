#include<iostream>
using namespace std;

char changeNum(int a, int b)
{
	int max = a > b ? a : b; 
	return max;
}

int main()
{
	//任意从键盘输入两个字符，能将他们按照由大到小的顺序输出，要求程序中有一个交换两个字符的函数，其形参是变量的引用
	char a, b;
	cin>>a;
	cin>>b;
	cout<<changeNum(a, b);
	cout<<char(a+b-changeNum(a, b))<<endl;
	return 0;
}