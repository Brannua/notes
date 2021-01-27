#include <stdio.h>
float main()
{
  float i, j, waterflow, sum, average, number;
  for (i = 1; i <= 96; i++)
  {
    number = i;
    for (j = 1; j <= 59; j++)
    {
      scanf("%f", &waterflow);
      sum += waterflow;
    }
    average = sum / 59;
    printf("ÿһ��ĵ�%f�����ݵ�ƽ��ֵ��:", number);
    printf(" monthlyaverage=%f", average);
    printf("\n");
  }
}
