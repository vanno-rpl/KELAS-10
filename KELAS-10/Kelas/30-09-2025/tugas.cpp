#include <iostream>
using namespace std;

int main() {
int n;
cout << "Masukkan Nilai Anda : ";
cin >> n;
if (n > 0 && n < 100) {
    if (n>= 90) {
        cout << "Predikat anda A dengan nilai : " << n << "Tuan" << endl;
    }else if (n>= 80) {
        cout << "Predikat anda B dengan nilai:" << n << "Tuan" << endl;
    }else if (n>= 70) {
        cout << "Predikat anda C dengan nilai:" << n << "Tuan" << endl;
    }else if (n>= 60) {
        cout << "Predikat anda D dengan nilai:" << n << "Tuan" << endl;
    }
}else{
    cout << "Nilai yang anda masukkan tidak valid /n"<< endl;
    cout << "Masukkan Nilai Anda : ";
    cin >> n;
}
return 0;
}