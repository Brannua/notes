#include <stdio.h>

int main()
{
	// ֧��һ���������Ʒ�۸��������
	int amount = 100, price = 0;
	printf("������Ʊ��(Ԫ):");
	scanf("%d", &amount);
	
	printf("��������Ʒ�۸�(Ԫ):");
	scanf("%d", &price);
	
	int change = amount - price;
	printf("����%dԪ��\n", change);
	
	return 0;
}

