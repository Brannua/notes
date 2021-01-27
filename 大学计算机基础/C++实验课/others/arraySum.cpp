#include<iostream>
using namespace std;

int main()
{
	//对一个整型数组的元素求和，结果使用全局变量sum存储
	//另外对数组元素中的奇数求和，结果使用局部变量sum存储，在主程序将两个结果输出
	int n;
	cin>>n;
	int i, a[100], sum = 0;
	for (i = 0; i < n; i ++) {
		cin>>a[i];
		sum += a[i];
	}
	
	cout<<sum;
	
	return 0;
}