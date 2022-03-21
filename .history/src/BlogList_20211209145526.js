#include<stdio.h>
int ,j,k;                         //variables for nested for loops
int main()
{
	int arr[2][3][2];              //array declaration
	printf("enter the values in the array: \n");
	for(=1;<=2;i++)              //represents block
	{
		for(j=1;j<=3;j++)          //represents rows
		{
			for(k=1;k<=2;k++)      //represents columns
			{
				printf("the value at arr[%d][%d][%d]: ",i,j,k);
				scanf("%d",&arr[i][j][k]);
			}
		}
	}
	printf("printing the values in array: \n");
	fori=1;<=2;i++)
	{
		for(j=1;j<=3;j++)
		{
			for(k=1;k<=2;k++)
			{
				printf("%d ",arr[][j][k]);
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