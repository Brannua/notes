//ͨ��ʱ�Ӵ��ķ�ʽ����������е�����
#include <stdio.h>
#include <time.h>

clock_t start, stop;//clock_t��clock()�������صı�������
//��¼���⺯������ʱ�䣬����Ϊ��λ 
double duration;

int main()
{
	/*���ڲ��Է�Χ�ڵ�׼������д��clock()����֮ǰ*/
	start = clock();//��ʼ��ʱ
	
	/*�ѱ��⺯����������*/ 
	
	stop = clock();//ֹͣ��ʱ
	
	duration = ((double)(stop - start))/CLK_TCK;
	
	//�������ڲ��Է�Χ�ڵĴ���д�ں��棬�������duration��ֵ 
	printf("���Զγ�������ʱ���� %d s", duration);
	return 0;
 } 
