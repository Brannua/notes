#include<iostream>
using namespace std;

int main()
{
	//��һ�����������Ԫ����ͣ����ʹ��ȫ�ֱ���sum�洢
	//���������Ԫ���е�������ͣ����ʹ�þֲ�����sum�洢��������������������
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