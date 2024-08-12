#include <iostream>   // 표준 입출력 라이브러리를 포함합니다. 이를 통해 std::cin, std::cout 등을 사용함.
#include <vector>     // 동적 배열인 std::vector를 사용하기 위해 포함.
#include <algorithm>  // 정렬 등 알고리즘 함수를 사용하기 위해 포함.

using namespace std;  // std::를 생략하고 표준 라이브러리의 요소를 직접 사용할 수 있게 해줌.

int main() {
    int n;
    cin >> n;  // 표준 입력에서 정수 n을 입력받는다.

    vector<int> list(n);  // 크기가 n인 정수형 벡터(list)를 선언.
    for (int i = 0; i < n; ++i) {
        cin >> list[i];  // 약수를 벡터에 입력 받음.
    }

    sort(list.begin(), list.end());  // 벡터를 오름차순으로 정렬.

    int result = list[0] * list[n - 1];  // 벡터의 최소값과 최대값을 곱하여 N을 계산.
    cout << result << endl;  

    return 0; 
}
