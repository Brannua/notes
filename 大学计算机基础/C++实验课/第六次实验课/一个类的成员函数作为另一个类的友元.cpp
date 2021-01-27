#include <iostream>
using namespace std;

class Date; //提前引用声明
class Time
{
public:
    Time(int h, int m, int s)
    {
        hour = h;
        minute = m;
        sec = s;
    }
    void showDate_Time(Date &d);

private:
    int hour;
    int minute;
    int sec;
};

class Date
{
public:
    Date(int y, int m, int d)
    {
        year = y;
        month = m;
        day = d;
    }
    friend void Time::showDate_Time(Date &d);

private:
    int year;
    int month;
    int day;
};

void Time::showDate_Time(Date &d)
{
    cout << d.year << "." << d.month << "." << d.day << endl;
    cout << hour << ":" << minute << ":" << sec << endl;
}

int main()
{
    Date date1(2010, 5, 1);
    Time time1(8, 48, 30);
    time1.showDate_Time(date1);
    return 0;
}