#include <stdio.h>
int main() {
//	�Ƚ������Ĵ�С
	int a, b;
	printf("��������������:");
	scanf("%d %d", &a, &b);
//	д��һ�Ƚϳ��浫�ɶ���ǿ 
//	int max = 0;
//	if(a>b) {
//		max = a;
//	} else {
//		max = b;
//	}
//	д�����Ƚϴ������ɶ��Խ��� 
	int max = a;
	if(b>a) {
		max = b;
	}
	printf("����Ǹ�����%d", max);
	return 0;
}
