#include <stdio.h>
int main()
{
//	���弰����
	const int PASS = 60;
//	�������
	int score;
	
	printf("������ɼ�:");
	scanf("%d", &score);
//	�˻���������֤���������ĳɼ��Ƿ���ȷ
	printf("��ĳɼ���%d.\n", score); 
	
//	�ж��Ƿ񼰸�
	if(score < PASS){
		printf("���ź�,����ɼ�û�м���\n");
	}else{
		printf("ף����,����ɼ�������\n");
		printf("�ټ�\n"); 
	}
	return 0;
}
