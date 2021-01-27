#include <stdio.h>
int main() {
//	初始化
	int price = 0;
	int bill = 0;
//	读入金额和票面
	printf("请输入金额:");
	scanf("%d", &price);
	printf("请输入票面:");
	scanf("%d", &bill);
//	判断支付金额是否足够
	if( bill >= price ) {
		//	计算找零
		printf("应该找您: %d\n", bill - price);
	} else {
		printf("您支付的金额不足");
	}

	return 0;
}
