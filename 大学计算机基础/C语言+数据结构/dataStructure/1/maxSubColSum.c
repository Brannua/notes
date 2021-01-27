#include <stdio.h>
//	������к͵����

//�㷨һ(�㷨��ʱ�临�Ӷ�T(N) = O(N^3))
int MaxSubseqSum1(int a[], int N) //���������ֱ�ָ�������������ĳ���
{
	int thisSum, MaxSum = 0; //ʹ��thisSum���յ�ǰ���е�ֵ������ʼ��������к�Ϊ0
	int i, j, k;
	for (i = 0; i < N; i++)
	{ //i��������˵�λ��
		for (j = i; j < N; j++)
		{				 //j�������Ҷ˵�λ��
			thisSum = 0; //ÿ�������к�֮ǰ����ǰ���кͳ�ʼ��Ϊ0
			for (k = i; k < j; k++)
			{
				thisSum += a[k];
			}
			if (thisSum > MaxSum)
			{					  //����յõ���������к͸���
				MaxSum = thisSum; //����½��
			}
		}
	}
	return MaxSum;
}

//�㷨��(�㷨��ʱ�临�Ӷ�T(N) = O(N^2))
int MaxSubseqSum2(int a[], int N) //���������ֱ�ָ�������������ĳ���
{
	int thisSum, MaxSum = 0; //ʹ��thisSum���յ�ǰ���е�ֵ������ʼ��������к�Ϊ0
	int i, j;
	for (i = 0; i < N; i++)
	{				 //i��������˵�λ��
		thisSum = 0; //ÿ�������к�֮ǰ����ǰ���кͳ�ʼ��Ϊ0
		for (j = i; j < N; j++)
		{					 //j�������Ҷ˵�λ��
			thisSum += a[j]; //������ͬ��i,��ͬ��j,ֻ��Ҫ��j-1�Ļ������ۼ�һ���
			if (thisSum > MaxSum)
			{					  //����յõ���������к͸���
				MaxSum = thisSum; //����½��
			}
		}
	}
	return MaxSum;
}

//�㷨�� -> �ֶ���֮(������ʱ�临�Ӷ�T(N) = O(Nlogn))
//���ȶ��������������ֵ�ĺ���max
int max(a, b, c)
{
	return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
//Ȼ����ֶ���֮����
int DivideAndConquer(int List[], int left, int right) //���Ĳ�����һ�����飬�Լ���ǰ������ͷԪ�ص��±�
{
	if (left == right)
	{ //����ֻ��һ��Ԫ��
		if (List[left] > 0)
		{
			return List[left];
		}
		else
		{
			return 0;
		}
	}

	int center = (left + right) / 2; //�ҵ��зֵ�
	//�ݹ�����������е�����
	int MaxLeftSum = DivideAndConquer(List, left, center);
	int MaxRightSum = DivideAndConquer(List, center + 1, right);

	//�������ֽ��ߵ�������к�
	int MaxLeftBorderSum = 0;
	int MaxRightBorderSum = 0;
	int LeftBorderSum, RightBorderSum;
	//���м俪ʼ����ɨ��
	int i;
	for (i = center; i >= left; i--)
	{
		LeftBorderSum += List[i];
		if (LeftBorderSum > MaxLeftBorderSum)
		{									  //�����ǰ��ֽ������ĺʹ���ǰ��ֽ������ĺ͵����ֵ
			MaxLeftBorderSum = LeftBorderSum; //�����������ֵ
		}
	}
	//���м俪ʼ����ɨ��
	for (i = center + 1; i <= right; i++)
	{
		RightBorderSum += List[i];
		if (RightBorderSum > MaxRightBorderSum)
		{										//�����ǰ��ֽ����Ҳ�ĺʹ���ǰ��ֽ����Ҳ�ĺ͵����ֵ
			MaxRightBorderSum = RightBorderSum; //�����������ֵ
		}
	}
	return max(MaxLeftBorderSum + MaxRightBorderSum, MaxLeftSum, MaxRightSum);
}
int MaxSubseqSum3(int List[], int N)
{ /* ������ǰ2���㷨��ͬ�ĺ����ӿ� */
	return DivideAndConquer(List, 0, N - 1);
}

//�㷨�� -> ���ߴ���(������ʱ�临�Ӷ�T(N) = O(N))
//���ߵ���˼��ָÿ����һ�����ݾͽ��м�ʱ���������κ�һ���ط���ֹ���룬�㷨������ȷ������ǰ�Ľ�
int MaxSubseqSum4(int List[], int N)
{
	int ThisSum = 0, MaxSum = 0;
	int i;
	for (i = 0; i < N; i++)
	{
		ThisSum += List[i]; //�����ۼ�
		if (ThisSum > MaxSum)
		{
			MaxSum = ThisSum; //���ָ�������µ�ǰ���
		}
		else if (ThisSum < 0)
		{				 //�����ǰ���к�Ϊ��
			ThisSum = 0; //�򲻿���ʹ����Ĳ�����������֮
		}
	}
	return MaxSum;
}

int main()
{
	int cnt, i, result;
	int seq[100000];
	scanf("%d", &cnt);
	for (i = 0; i < cnt; i++)
	{
		scanf("%d", &seq[i]);
	}
	//  	result = MaxSubseqSum1(seq, cnt);
	//  	result = MaxSubseqSum2(seq, cnt);
	//  	result = MaxSubseqSum3(seq, cnt);
	result = MaxSubseqSum4(seq, cnt);
	printf("%d", result);
	return 0;
}
