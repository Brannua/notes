#include <stdio.h>

int main() {
//	��������ʱ�䣬����ʱ���
	int hour1, minute1;
	int hour2, minute2;

	printf("������ʱ�䣬��һ��ʮ��������1 10\n");
	scanf("%d %d", &hour1, &minute1);
	scanf("%d %d", &hour2, &minute2);

	int t1 = hour1 * 60 + minute1;
	int t2 = hour2 * 60 + minute2;

	int interval = t2 - t1;

	printf("ʱ�����%dСʱ%d����", interval/60, interval%60);

	return 0;
}
