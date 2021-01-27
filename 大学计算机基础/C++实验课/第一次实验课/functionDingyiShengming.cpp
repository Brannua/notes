//函数声明定义相分离
#include <stdio.h>

int sum(int a, int b);

int main() {
	int a, b;
	scanf("%d %d", &a, &b);
	printf("%d\n", sum(a, b));
	return 0;
}

int sum(int a, int b)
{
	return a + b;
}