#include <iostream>
using namespace std;

int main()
{
    cout.setf(ios::showpos | ios::scientific);
    cout << 567 << " " << 567.89 << endl;
    return 0;
}