#include<stdio.h>
int a,b,c;                         //variables f
int main()
{
	int arr[2][3][2];              
	printf("enter the values in the array: \n");
	for(a=1;a<=2;a++)             
	{
		for(b=1;b<=3;b++)        
		{
			for(c=1;c<=2;c++)      /
			{
				printf("the value at arr[%d][%d][%d]: ",a,b,c);
				scanf("%d",&arr[a][b][c]);
			}
		}
	}
	printf("printing the values in array: \n");
	for(a=1;a<=2;a++)
	{
		for(b=1;b<=3;b++)
		{
			for(c=1;c<=2;c++)
			{
				printf("%d ",arr[a][b][c]);
				if(c==2)
				{
					printf("\n");
				}
			}
		}
		printf("\n");
	}
	return 0;
}