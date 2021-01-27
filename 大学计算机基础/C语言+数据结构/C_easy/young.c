#include <stdio.h>
int main()
{
//	定义最小年龄 
	const int MINOR = 35;
//  初始化你的年龄 
	int age = 0;
//	输入年龄 
	printf("请输入你的年龄:");
	scanf("%d", &age);
	
//	人机交互，验证读入年龄是否正确
	printf("你的年龄是%d岁\n", age);
//	如果年龄比最小年龄小 
	if (age < MINOR){
		printf("年轻是美好的\n");
	} 
//	无论多大年龄都输出	
	printf("年龄决定了你的精神世界，好好珍惜吧。\n");
	
	return 0;
}
