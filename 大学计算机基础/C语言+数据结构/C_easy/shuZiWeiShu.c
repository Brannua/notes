#include <stdio.h> 
int main() 
{
//	输出所输入数字的位数 
	int count = 0;
	int num;
	printf("请输入任意一个非负整数:\n");
	scanf("%d", &num);
	printf("输入的整数为: %d\n", num);
//	1234 --> 除以10(123)  -->  除以10(12)  --> 除以10(1)  --> 除以10(0)
//	以下两行解决了0和个位数的问题 
//	count ++;
//	num/=10;
//	for (; num > 0 ; count ++) {
//		num = num / 10;		
//	}



//	for循环也可以用while循环实现 
//	while(num > 0) {
//		num/=10;
//		count ++;
//	} 



//	改造成do-while循环
	do{
		count ++;
		num/=10;
	} while(num > 0);
	printf("你所输入的数字的位数是: %d\n", count);
	return 0;
 } 
