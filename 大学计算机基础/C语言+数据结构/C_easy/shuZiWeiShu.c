#include <stdio.h> 
int main() 
{
//	������������ֵ�λ�� 
	int count = 0;
	int num;
	printf("����������һ���Ǹ�����:\n");
	scanf("%d", &num);
	printf("���������Ϊ: %d\n", num);
//	1234 --> ����10(123)  -->  ����10(12)  --> ����10(1)  --> ����10(0)
//	�������н����0�͸�λ�������� 
//	count ++;
//	num/=10;
//	for (; num > 0 ; count ++) {
//		num = num / 10;		
//	}



//	forѭ��Ҳ������whileѭ��ʵ�� 
//	while(num > 0) {
//		num/=10;
//		count ++;
//	} 



//	�����do-whileѭ��
	do{
		count ++;
		num/=10;
	} while(num > 0);
	printf("������������ֵ�λ����: %d\n", count);
	return 0;
 } 
