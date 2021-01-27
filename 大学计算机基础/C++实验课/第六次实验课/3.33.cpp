/* 
    构建一个类book,其中含有两个私有数据成员qu和price,将qu初始化为1~5,将price初始化为qu的10倍
    建立一个有5个元素的数组对象。显示每个对象数组元素的qu * price值
 */
#include <iostream>
using namespace std;

class Book
{
public:
    Book(int q)
    {
        qu = q;
        price = q * 10;
    }
    int show()
    {
        cout << qu * price << endl;
    }

private:
    int qu;
    int price;
};

int main()
{
    Book book[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++)
    {
        book[i].show();
    }
    return 0;
}