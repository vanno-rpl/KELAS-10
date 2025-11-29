#include "iostream"

using namespace std;

int main() {
    int nilai, standar = 75;
    cin >> nilai;
    if (nilai >= standar) {
        cout << "Lulus!";
    } else {
        cout << "Tidak Lulus!";
    }

    return 0;
}