#include<stdio.h>
int a,j,k;                         //variables for nested for loops
int main()
{
	int arr[2][3][2];              //array declaration
	printf("enter the values in the array: \n");
	for(a=1;a<=2;a++)              //represents block
	{
		for(j=1;j<=3;j++)          //represents rows
		{
			for(k=1;k<=2;k++)      //represents columns
			{
				printf("the value at arr[%d][%d][%d]: ",a,j,k);
				scanf("%d",&arr[a][j][k]);
			}
		}
	}
	printf("printing the values in array: \n");
	for(a=1;a<=2;a++)
	{
		for(j=1;j<=3;j++)
		{
			for(k=1;k<=2;k++)
			{
				printf("%d ",arr[a][j][k]);
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