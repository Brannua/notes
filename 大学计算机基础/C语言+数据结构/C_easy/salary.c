#include <stdio.h>
int main()
{
//	����ÿСʱ������
	const double RATE = 8.25;
//	�����׼����ʱ��
	const int STANDARD = 40;
//	��ʼ������
	double pay = 0;
//	��ʼ��Сʱ��
	int hours;
	
	printf("�����빤����Сʱ��:");
	scanf("%d", &hours);
	printf("\n");
	
	if (hours > STANDARD){
		pay = STANDARD * RATE + (hours - STANDARD) * (RATE * 1.5);//�Ӱ๤����ƽ����1.5�� 
	} else{
		pay = hours * RATE;
	} 
	printf("Ӧ������: %f\n", pay);
	return 0;
}
