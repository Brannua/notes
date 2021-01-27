/* 
    例题 3.29 <静态数据成员的使用>
 */
#include <iostream>
#include <string>
using namespace std;

class Student
{
public:
    Student(string name1, string stu_no1, float score1); //声明构造函数
    ~Student();                                          //声明析构函数
    void show();                                         //输出姓名学号和成绩
    void show_count_sum_ave();                           //输出学生人数和平均成绩
private:
    string name;      //普通数据成员,用于表示学生姓名
    string stu_no;    //普通数据成员,用于表示学生学号
    float score;      //普通数据成员,用于表示学生成绩
    static int count; //静态数据成员,用于统计学生人数
    static float sum; //静态数据成员,用于统计累加成绩
    static float ave; //静态数据成员,用于统计平均成绩
};

Student::Student(string name1, string stu_no1, float score1)
{
    name = name1;
    stu_no = stu_no1;
    score = score1;
    ++count;           //累加学生人数
    sum += score;      //累加成绩
    ave = sum / count; //计算平均成绩
}

Student::~Student() //定义析构函数
{
    --count;
    sum -= score;
}

void Student::show()
{
    cout << "\n姓名:" << name;
    cout << "\n学号:" << stu_no;
    cout << "\n成绩:" << score;
}

void Student::show_count_sum_ave()
{
    cout << "\n学生人数:" << count;
    cout << "\n平均成绩:" << ave << endl;
}

int Student::count = 0;   //静态数据成员count初始化
float Student::sum = 0.0; //静态数据成员sum初始化
float Student::ave = 0.0; //静态数据成员ave初始化

int main()
{
    Student stu1("李明", "08150201", 90); //建立第一个学生对象stu1
    stu1.show();
    stu1.show_count_sum_ave();
    cout << "\n-----------------\n";
    Student stu2("张大伟", "08150202", 80); //建立第二个学生对象stu2
    stu2.show();
    stu2.show_count_sum_ave();
    return 0;
}