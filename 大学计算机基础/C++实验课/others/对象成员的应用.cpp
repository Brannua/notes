#include <iostream>
using namespace std;

class Score
{
private:
    float computer;
    float english;
    float mathematics;

public:
    Score(float c, float e, float m)
    {
        computer = c;
        english = e;
        mathematics = m;
    }
    void show()
    {
        cout << "\n 计算机成绩:" << computer;
        cout << "\n 英语成绩:" << english;
        cout << "\n 数学成绩:" << mathematics;
    }
};

class Student
{
private:
    string name;
    string stu_no;
    Score score1;

public:
    Student(float c, float e, float m, string name1, string stu_no1) : score1(c, e, m)
    {
        name = name1;
        stu_no = stu_no1;
    }
    void show()
    {
        cout << "\n 姓名:" << name;
        cout << "\n 学号:" << stu_no;
        score1.show();
    }
};

int main()
{
    Student student1(90, 80, 70, "小明", "123123");
    student1.show();
    cout<<endl; 
    Student student2(80, 70, 60, "小王", "456456");
    student2.show();
    return 0;
}