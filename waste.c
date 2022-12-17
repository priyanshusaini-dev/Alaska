#include <stdio.h>

int main()

{
//   int x=5;
//   printf("%d,%d,%d \n",x++,--x,x++);
// printf ("%d %d %d", a++, a++, ++a);
// printf ("%d %d %d", a+=1, a+=1, a+=1);
// x=++x+x++;
int i=0;
while (i!=10){
int x=10;   x += (x++) + (++x) + x;
  printf("%d",x);
++i;
}
//   printf(" %d ,%d ,%d, %d, %d,%d" , x++,++x, --x,x++,--x, x++);
                            // 6     6  6
  return 0;
}