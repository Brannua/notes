#include<iostream>
using namespace std;

int add(int a = 10, int b = 20)
{
	return a + b;
}

//���������غ�Ĭ��ֵ�����ĺ����п������ͻ
//int add(int c)
//{
	//return c + c;
//}

int main()
{
	//������Ĭ�ϲ���
	cout<<add()<<endl;
	//�ı�ڶ�������
	cout<<add(10, 30)<<endl;
	//�ı��һ������
	cout<<add(20)<<endl;
	//�����������ı�
	cout<<add(20, 30)<<endl;
	return 0;
}