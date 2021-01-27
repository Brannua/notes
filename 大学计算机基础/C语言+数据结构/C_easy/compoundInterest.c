#include <stdio.h>

int main() {
//	假设年利率是%3.3，计算3年的复利
	printf("请输入本金\n");
	double x;
	scanf("%lf", &x);
	
	double amount = x * (1 + 0.033) * (1 + 0.033) * (1 + 0.033);
	printf("3年后的复利本息和是%f", amount);
	return 0;
}
