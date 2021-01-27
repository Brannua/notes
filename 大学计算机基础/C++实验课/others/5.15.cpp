#include <iostream>
#include <cstring>
using namespace std;

class Words
{
private:
    int len;
    char *str;

public:
    Words(char *s)
    {
        str = new char[strlen(s) + 1];
        strcpy(str, s);
        len = strlen(s);
    }
    void disp();
    char operator[](int n);     //定义下标运算符"[]"重载函数
};

char Words::operator[](int n)
{
    if (n < 0 || n > len - 1)       //数组的边界检查 
    {
        cout<<"数组下标超界!\n";
        return ' ';
    }
    else 
        return *(str + n);
}

void Words::disp()
{
    cout<<str<<endl;
}

int main()
{
    Words word("This is C++ book.");
    word.disp();
    cout<<"第1个字符: ";
    cout<<word[0]<<endl;        //word[0]被解释为word.operator[](0);
    cout<<"第16个字符: ";
    cout<<word[15]<<endl;
    cout<<"第26个字符: ";
    cout<<word[25]<<endl;
    return 0;
}