#include <stdio.h>
int main()
{
	printf("������һ��������");
	int max;
	scanf("%d", &max);
	//	ʵ��һ������PrintN��ʹ�ô���һ��������ΪN�Ĳ�����ʹ��forѭ��ʵ����˳���ӡ��1��N������������

	//��һ��ʵ�ַ���
	void PrintN(int N)
	{
		int i;
		for (i = 1; i <= N; i++)
		{
			printf("%d\n", i);
		}
	}

	//�ڶ���ʵ�ַ���(�ݹ���ú���->ջ�Ĵ洢�ṹ->����ȳ�)
	//������ǲ���Ը�ܵݹ����ģ���Ϊ�Ƚ�ռ�ڴ棬����ڴ治���ͷ�������ֹ������
	//	void PrintN (int N) {
	//		if(N){
	//			PrintN(N-1);
	//			printf("%d\n", N);
	//		}
	//	}

	PrintN(max);
	return 0;
}
