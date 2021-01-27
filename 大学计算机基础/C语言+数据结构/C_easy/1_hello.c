#include <stdio.h>

int main()
{
	printf("Hello world.\n");
	printf("你好!\n");
	printf("23+46=%d\n", 23+46);
	
//	支付一百元，按商品价格，输出找零 
	const int AMOUNT = 100;//C99写法，定义整形常量 
	
	int price = 0;
	printf("请输入商品价格(元):");
	scanf("%d", &price);
	
	int change = AMOUNT - price;
	
	printf("找您%d元。\n", change); 
	
	return 0;
}
