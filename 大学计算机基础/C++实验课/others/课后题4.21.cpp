#include <iostream>
using namespace std;

class Time
{
protected:
    int hours, minutes, seconds;

public:
    Time(int h, int m, int s)
    {
        hours = h;
        minutes = m;
        seconds = s;
    }
    void display()
    {
        cout << "出生时间: " << hours << "时" << minutes << "分" << seconds << "秒" << endl;
    }
};

class Date
{
protected:
    int month, day, year;

public:
    Date(int m, int d, int y)
    {
        month = m;
        day = d;
        year = y;
    }
    void display()
    {
        cout << "出生年月: " << year << "年" << month << "月" << day << "日" << endl;
    }
};

class Birthtime : private Date, private Time
{
private:
    string Childname;

public:
    Birthtime(int m, int d, int y, int h, int mon, int s, string name) : Date(m, d, y), Time(h, mon, s)
    {
        Childname = name;
    }
    void display()
    {
        cout << Childname << endl;
        Date::display();
        Time::display();
    }
};

int main()
{
    Birthtime obj(11, 8, 1998, 6, 6, 6, "小刘");
    obj.display();
    return 0;
}