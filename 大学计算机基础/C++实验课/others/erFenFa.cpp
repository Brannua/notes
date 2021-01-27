
//���ַ���һԪ���η��̵�ʵ����
#include <stdio.h>
#include <math.h>

const double eps = 1e-6;//�������ľ���
double a, b, c;//�������ĺ�����a*x*x + b*x + c;

double f(double x)//����һԪ���κ���
{
	return a * x * x + b * x + c;
}

int main()
{
	double n, m;//�������[n, m]
	double i, j, mid;//�����е�i,����ʵ����j,�����е㺯��ֵmid
	printf("������һԪ���η��̵�ϵ��: a, b, c.\n");
	scanf("%lf %lf %lf", &a, &b, &c);
	printf("�������������[n, m]\n");
	scanf("%lf %lf", &n, &m);

	if(f(n) * f(m) < 0){//������������˵�ĺ���ֵ�˻�Ϊ��
		while (fabs(n - m) > eps)//������ĳ��ȴ��ڼ���ľ���
		{
			i = (m + n) / 2.0;//���������е�
			mid = f(i);//�����е�ĺ���ֵ
			if (fabs(mid) < eps)//��������е�ĺ���ֵС�ڼ��㾫�� 
			{
				break;
			}
			else if (mid * f(n) < 0)
			{
				m = i;//�޸�����Ϊ[n, i]
			}
			else if (mid * f(m) < 0)
			{
				n = i;//�޸�����Ϊ[i, m]
			}
		}
	}
	printf("%lf %lf\n", n, m);
	j = (m + n) / 2.0;
	printf("������ʵ������%lf\n", j);
	return 0;
}