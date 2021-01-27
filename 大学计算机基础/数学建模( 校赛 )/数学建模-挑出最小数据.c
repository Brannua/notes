#include <stdio.h>
float main()
{
  int i;
  float a[96], min = 1000;
  for (i = 0; i < 96; i++)
  {
    scanf("%f", &a[i]);
    if (a[i] < min)
      min = a[i];
    else
      continue;
  }
  printf("��96����������С��������%f", min);
  return 0;
}
