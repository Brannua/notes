#include <stdio.h>
int main() {
//	比较两数的大小
	int a, b;
	printf("请输入两个整数:");
	scanf("%d %d", &a, &b);
//	写法一比较常规但可读性强 
//	int max = 0;
//	if(a>b) {
//		max = a;
//	} else {
//		max = b;
//	}
//	写法二比较聪明但可读性较弱 
	int max = a;
	if(b>a) {
		max = b;
	}
	printf("大的那个数是%d", max);
	return 0;
}
