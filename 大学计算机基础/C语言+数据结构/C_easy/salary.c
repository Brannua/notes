#include <stdio.h>
int main()
{
//	定义每小时工资数
	const double RATE = 8.25;
//	定义标准工作时间
	const int STANDARD = 40;
//	初始化工资
	double pay = 0;
//	初始化小时数
	int hours;
	
	printf("请输入工作的小时数:");
	scanf("%d", &hours);
	printf("\n");
	
	if (hours > STANDARD){
		pay = STANDARD * RATE + (hours - STANDARD) * (RATE * 1.5);//加班工资是平常的1.5倍 
	} else{
		pay = hours * RATE;
	} 
	printf("应付工资: %f\n", pay);
	return 0;
}
