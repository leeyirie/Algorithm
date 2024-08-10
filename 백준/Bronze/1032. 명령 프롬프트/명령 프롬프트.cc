#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;  // 첫 번째 줄: 파일 개수
    // C++에서 표준 입력(사용자가 입력한 값)을 받아오는 방법 중 하나가 cin을 사용하는 것
    
    vector<string> items(n);
    // vector<string>는 C++에서 문자열의 동적 배열을 나타낸다. 
    // C++에서 배열의 크기는 고정되어 있지만, vector는 크기를 동적으로 조절할 수 있는 배열이다.
    // 즉, 여러 개의 문자열을 저장하기 위해 사용된다. 예를 들어, 파일 이름 리스트를 저장할 때 유용하다.
   
    for (int i = 0; i < n; ++i) {
        cin >> items[i];
    }

    string pattern = items[0];  

    for (int i = 1; i < n; ++i) {
        for (int j = 0; j < pattern.size(); ++j) {
            if (pattern[j] != items[i][j]) {
                pattern[j] = '?';  // 다른 문자가 있는 위치에는 '?'를 넣음
            }
        }
    }

    cout << pattern << endl;
    
    // cout: C++에서 표준 출력을 처리하는 객체. 콘솔에 데이터를 출력할 때 사용.
    // cout은 "character output"의 약자이다.
    
    // endl: 줄바꿈(newline)을 의미하며, C++에서 출력 후 줄을 바꾸고 싶을 때 사용한다.
    // \n과 같은 역할을 하지만, endl은 줄바꿈을 수행하고 출력 버퍼를 비우는 효과도 있다.

    return 0;
}
