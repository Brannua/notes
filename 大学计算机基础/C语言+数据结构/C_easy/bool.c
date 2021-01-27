#include <stdio.h> 
#include <stdbool.h>

int main() 
{
	bool a = 6 < 5;
	bool t = true;
//	实际上没有布尔类型的变量,这里的变量t实际上是整数类型

// 	我们也没有办法输出true或者false 
	t = 2;
	printf("%d\n", t);
}
