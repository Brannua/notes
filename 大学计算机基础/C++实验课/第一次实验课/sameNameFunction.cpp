//º¯ÊıÖØÔØ
#include <stdio.h>

int sum(int a, int b)
{
	return a + b;
}

int sum(int a, int b, int c)
{
	return a + b + c;
}

int main() {
	int a, b, c;
	scanf("%d %d", &a, &b, &c);
	printf("%d\n", sum(a, b, c));
	return 0;
}