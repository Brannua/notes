#include <iostream>
#include <string>
using namespace std;

class Student
{
public:
    Student(int number1, string name1, float score1)
    {
        number = number1;
        name = name1;
        score = score1;
    }
    void print()
    {
        cout << "学号: " << number << endl;
        cout << "姓名: " << name << endl;
        cout << "成绩: " << score << endl;
    }

protected:
    int number;
    string name;
    float score;
};

class UStudent : public Student
{ //声明共有派生类UStudent
public:
    UStudent(int number1, string name1, float score1, int number2, string name2, float score2, int number3, string name3, float score3, string major1) : Student(number1, name1, score1), auditor2(number3, name3, score3), auditor1(number2, name2, score2)
    {
        major = major1;
    }
    void print()
    {
        cout << "正式生是: " << endl;
        Student::print();
        cout << "专业: " << major << endl;
    }
    void print_auditor1()
    {
        cout << "旁听生是: " << endl;
        auditor1.print();
    }
    void print_auditor2()
    {
        cout << "旁听生是: " << endl;
        auditor2.print();
    }

private:
    string major;
    Student auditor1;
    Student auditor2;
};

int main()
{
    UStudent stu(2001, "张志", 95, 3001, "王大宾", 66, 3002, "李倩倩", 50, "信息安全");
    stu.print();
    stu.print_auditor1();
    stu.print_auditor2();
    return 0;
}