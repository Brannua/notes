#include<iostream>
using namespace std;

char changeNum(int a, int b)
{
	int max = a > b ? a : b; 
	return max;
}

int main()
{
	//����Ӽ������������ַ����ܽ����ǰ����ɴ�С��˳�������Ҫ���������һ�����������ַ��ĺ��������β��Ǳ���������
	char a, b;
	cin>>a;
	cin>>b;
	cout<<changeNum(a, b);
	cout<<char(a+b-changeNum(a, b))<<endl;
	return 0;
}