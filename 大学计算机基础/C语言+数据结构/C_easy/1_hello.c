#include <stdio.h>

int main()
{
	printf("Hello world.\n");
	printf("���!\n");
	printf("23+46=%d\n", 23+46);
	
//	֧��һ��Ԫ������Ʒ�۸�������� 
	const int AMOUNT = 100;//C99д�����������γ��� 
	
	int price = 0;
	printf("��������Ʒ�۸�(Ԫ):");
	scanf("%d", &price);
	
	int change = AMOUNT - price;
	
	printf("����%dԪ��\n", change); 
	
	return 0;
}
