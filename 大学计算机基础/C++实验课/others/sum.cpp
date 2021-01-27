//函数调用输出两个数的和
#include <stdio.h>
int sum(int a, int b) {
	return a + b;
}
int main() {
	int a, b;
	scanf("%d %d", &a, &b);
	printf("%d\n", sum(a, b));
	return 0;
}

