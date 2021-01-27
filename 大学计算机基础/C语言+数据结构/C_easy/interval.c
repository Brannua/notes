#include <stdio.h>

int main() {
//	输入两个时间，计算时间差
	int hour1, minute1;
	int hour2, minute2;

	printf("请输入时间，如一点十分则输入1 10\n");
	scanf("%d %d", &hour1, &minute1);
	scanf("%d %d", &hour2, &minute2);

	int t1 = hour1 * 60 + minute1;
	int t2 = hour2 * 60 + minute2;

	int interval = t2 - t1;

	printf("时间差是%d小时%d分钟", interval/60, interval%60);

	return 0;
}
