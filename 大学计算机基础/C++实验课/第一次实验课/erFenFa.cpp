
//二分法求一元二次方程的实数根
#include <stdio.h>
#include <math.h>

const double eps = 1e-6;//定义计算的精度
double a, b, c;//假设计算的函数是a*x*x + b*x + c;

double f(double x)//定义一元二次函数
{
	return a * x * x + b * x + c;
}

int main()
{
	double n, m;//求根区间[n, m]
	double i, j, mid;//区间中点i,函数实数根j,区间中点函数值mid
	printf("请输入一元二次方程的系数: a, b, c.\n");
	scanf("%lf %lf %lf", &a, &b, &c);
	printf("请输入求根区间[n, m]\n");
	scanf("%lf %lf", &n, &m);

	if(f(n) * f(m) < 0){//如果区间两个端点的函数值乘积为负
		while (fabs(n - m) > eps)//当区间的长度大于计算的精度
		{
			i = (m + n) / 2.0;//计算区间中点
			mid = f(i);//区间中点的函数值
			if (fabs(mid) < eps)//如果区间中点的函数值小于计算精度 
			{
				break;
			}
			else if (mid * f(n) < 0)
			{
				m = i;//修改区间为[n, i]
			}
			else if (mid * f(m) < 0)
			{
				n = i;//修改区间为[i, m]
			}
		}
	}
	printf("%lf %lf\n", n, m);
	j = (m + n) / 2.0;
	printf("函数的实数根是%lf\n", j);
	return 0;
}