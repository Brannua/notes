#include <stdio.h>

int main()
{
	// 支付一定数额，按商品价格，输出找零
	int amount = 100, price = 0;
	printf("请输入票面(元):");
	scanf("%d", &amount);
	
	printf("请输入商品价格(元):");
	scanf("%d", &price);
	
	int change = amount - price;
	printf("找您%d元。\n", change);
	
	return 0;
}

