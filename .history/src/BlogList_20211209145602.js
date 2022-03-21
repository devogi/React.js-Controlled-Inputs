#include<stdio.h>
int a,,k;                         //variables for nested for loops
int main()
{
	int arr[2][3][2];              //array declaration
	printf("enter the values in the array: \n");
	for(a=1;a<=2;i++)              //represents block
	{
		for(=1;<=3;++)          //represents rows
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
		for(=1;<=3;++)
		{
			for(k=1;k<=2;k++)
			{
				printf("%d ",arr[a][][k]);
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