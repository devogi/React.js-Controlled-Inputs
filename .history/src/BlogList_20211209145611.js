#include<stdio.h>
int a,b,k;                         //variables for nested for loops
int main()
{
	int arr[2][3][2];              //array declaration
	printf("enter the values in the array: \n");
	for(a=1;a<=2;a++)              //represents block
	{
		for(b=1;b<=3;b++)          //represents rows
		{
			for(k=1;k<=2;k++)      //represents columns
			{
				printf("the value at arr[%d][%d][%d]: ",i,j,k);
				scanf("%d",&arr[i][j][k]);
			}
		}
	}
	printf("printing the values in array: \n");
	forai=1;a<=2;i++)
	{
		for(b=1;b<=3;b++)
		{
			for(k=1;k<=2;k++)
			{
				printf("%d ",arr[a][b][k]);
				if(k==2)
				{
					printf("\n");
				}
			}
		}
		printf("\n");
	}
	return 0;
}