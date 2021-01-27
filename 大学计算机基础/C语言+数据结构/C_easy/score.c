#include <stdio.h>
int main()
{
//	定义及格线
	const int PASS = 60;
//	定义分数
	int score;
	
	printf("请输入成绩:");
	scanf("%d", &score);
//	人机交互，验证计算机读入的成绩是否正确
	printf("你的成绩是%d.\n", score); 
	
//	判断是否及格
	if(score < PASS){
		printf("很遗憾,这个成绩没有及格\n");
	}else{
		printf("祝贺你,这个成绩及格了\n");
		printf("再见\n"); 
	}
	return 0;
}
