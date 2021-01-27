//通过时钟打点的方式计算程序运行的秒数
#include <stdio.h>
#include <time.h>

clock_t start, stop;//clock_t是clock()函数返回的变量类型
//记录被测函数运行时间，以秒为单位 
double duration;

int main()
{
	/*不在测试范围内的准备工作写在clock()调用之前*/
	start = clock();//开始计时
	
	/*把被测函数加在这里*/ 
	
	stop = clock();//停止计时
	
	duration = ((double)(stop - start))/CLK_TCK;
	
	//其他不在测试范围内的处理写在后面，例如输出duration的值 
	printf("测试段程序运行时间是 %d s", duration);
	return 0;
 } 
