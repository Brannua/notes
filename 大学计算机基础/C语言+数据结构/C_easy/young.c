#include <stdio.h>
int main()
{
//	������С���� 
	const int MINOR = 35;
//  ��ʼ��������� 
	int age = 0;
//	�������� 
	printf("�������������:");
	scanf("%d", &age);
	
//	�˻���������֤���������Ƿ���ȷ
	printf("���������%d��\n", age);
//	����������С����С 
	if (age < MINOR){
		printf("���������õ�\n");
	} 
//	���۶�����䶼���	
	printf("�����������ľ������磬�ú���ϧ�ɡ�\n");
	
	return 0;
}
