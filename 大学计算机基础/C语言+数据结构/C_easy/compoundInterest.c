#include <stdio.h>

int main() {
//	������������%3.3������3��ĸ���
	printf("�����뱾��\n");
	double x;
	scanf("%lf", &x);
	
	double amount = x * (1 + 0.033) * (1 + 0.033) * (1 + 0.033);
	printf("3���ĸ�����Ϣ����%f", amount);
	return 0;
}
