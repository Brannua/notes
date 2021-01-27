/* 
    设计一个程序,使得大学生类和教师类都继承人类,
    再设计课程类和成绩类,让成绩类嵌入大学生类,课程类嵌入教师类,
    每个类自拟合适的数据成员和成员函数,完成以下要求
    
    1. 每个类必须至少设计一个构造函数
    2. 学生信息里面除基本特征外,还应该包含成绩,班级,辅导员等信息
    3. 教师信息里面除基本信息外,还应该包含所授课程,部门,工资等信息
    4. 综合运用所学过的知识点,即静态成员,友元函数,类的组合和继承等,实现以下功能
        1. 输出每个学生的完整信息
        2. 输出每个教师的完整信息
        3. 统计每个班级的学生人数和总学生人数
        4. 可以发班级浏览学生信息
 */
/* 
    人类
 */
class Human
{
public:
    Human() {}

private:
};
/* 
    大学生类
 */
class Student : public Human
{
public:
    Student() : Human() {}
    /* 
        成绩类
    */
    class Score
    {
    public:
        Score() {}

    private:
    };

private:
    /* 基本信息 */
    string name;
    int age;
    string sex;
    /* 补充信息 */
    double score;
    string clas;
    string headTeacher
};
/* 
    教师类
 */
class Teacher : public Human
{
public:
    Teacher() : Human() {}
    /* 
        课程类
    */
    class Classes
    {
    public:
        Classes() {}

    private:
        /* 基本信息 */
        string name;
        int age;
        string sex;
        /* 补充信息 */
        string clas;
        string room;
        string salary;
    };

private:
};

#include <iostream>
using namespace std;

int main()
{

    return 0;
}