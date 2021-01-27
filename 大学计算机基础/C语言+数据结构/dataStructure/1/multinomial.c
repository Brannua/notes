#include <stdio.h>
#include <time.h>
#include <math.h>
int main()
{
	//	�����������ʽ�ڸ�����x����ֵ
	//f(x)=a0 + a1x + ... + a(n-1)x^(n-1) + anx^n
	double f(int n, double a[], double x)
	{
		double p = a[0];
		int i;
		for (i = 1; i <= n; i++)
		{
			p += (a[i] * pow(x, i));
		}
		//	����pow()�����Ǵη���������ִ����(1+2+3+...+n)=1/2*n*(n+1)�γ˷�
		//	ʱ�临�Ӷ�T(n)=C_1 * n^2 +C_2 * n (C_1��C_2Ϊ����)
		return p;
	}
	//����ʵ�ֹ���Ӧ���Ľ�Ϊ�ؾ����㷨��������������
	double f(int n, double a[], double x)
	{
		double p = a[n];
		int i;
		for (i = n; i > 0; i--)
		{
			p = a[i - 1] + x * p;
		}
		// ʱ�临�Ӷ� T(n) = C * n (CΪ����)
		return p;
	}
	return 0;
}
