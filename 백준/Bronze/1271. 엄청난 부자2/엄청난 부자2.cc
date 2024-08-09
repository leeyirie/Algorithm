#include <iostream>
#include <cstring>



char* max(char* a, char* b) {
	for (int i = 0; i < strlen(a); i++) {
		if (a[i] < b[i]) // b가 더 크면
			return b; // b다
		if (a[i] > b[i]) // a가 더 크면
			return a; // a 리턴
	}
	return a; // 같으면 a 리턴 (두 수가 같을 경우)
}

void subtract(char* a, char* b) { // 문자열 내의 숫자를 빼는 경우
	for (int i = 0; i < strlen(b); i++) { // b 길이만큼 돌려서
		a[i] = a[i] - b[i] + '0'; // a에서 b를 뺀다 (아스키코드계산)
		if (a[i] < '0') { // 만약 아스키코드가 48('0')보다 작으면
			a[i] += 10; // 10을 더한다
			a[i - 1]--; // 그리고 앞자리 수를 1 줄인다
		}
	}
	for (int i = strlen(b) - 1; i >= 0; i--) { // 이번엔 반대로
		if (a[i] < '0') { // 만약 아스키코드가 48('0')보다 작으면
			a[i] += 10; // 10을 더한다
			a[i - 1]--; // 앞자리 수를 1 줄인다
		}
	}
}


void devidesubtract(char* a, char* b, char* r, int index) { // 뺄셈으로 표현한 나눗셈
	r[index] = '0'; // 결과값의 index위치에 0넣음

	while (a[index - 1] > '0' || max(a + index, b) == a + index) { // a[index-1]이 0보다 크거나, a의 index번째부터와 b를 비교했을때 a의 index번째부터가 더 클 경우
		subtract(a + index, b); // a의 index번째에서 b를 뺀다 (나머지는 a에 남게 된다.)
		++r[index]; // r[index]를 1 더해준다
	}
}

void devide(char* a, char* b, char* r) {
	int index = 0;
	int digit = strlen(a) - strlen(b); // 자릿수는 아무리 커도 (a길이 - b길이)로 표현 가능

	while (index <= digit) // index가 digit보다 작거나 같으면
		devidesubtract(a, b, r, index++); // devidesubtract 돌리기 - index++이므로 devidesubtract가 돌아갈 때는 index가 들어간 채로 돌아감

	r[index] = '\0'; // 마지막 자리에 \0붙여서 끝 알리기
}

int main() {
	// 배열만들기
	char a[1001]; 
	char b[1001];
	char r[1001]; // 몫
	int ri = 0, ai = 0; // ri와 ai는 맨앞에 0이 오는 경우를 삭제해줌
	std::cin >> a >> b; // a와 b를 이용해 두 수를 받는다
	devide(a, b, r); // a,b,r 나누기 실행

	while (r[ri] == '0')
		ri++; // r[ri]번째에 0이 안올때까지 ri 증가시킴
	while (a[ai] == '0')
		ai++; // a[ai]번째에 0이 안올때까지 ai 증가시킴

	if (r[0] == '\0') { // 만약 안나눠지면, devide 함수에서 맨 마지막에 쓴 r[index] = '\0'만 남게 된다. 이 경우 몫을 0으로 한다.
		r[0] = '0';
		r[1] = '\0';
	}

	if (a[ai] == '\0') // 만약 위에서 쭉쭉 빼고 난 다음에 0만 남아버리면, ai는 a[ai]=='\0'인 위치에서 멈추게 된다. 이때는 ai를 1 빼줘야 한다.
		ai--;

    if (r[ri] == '\0') // 만약 r이 0만 담겨있다면 ri는 1일것이다. 이 상태로 그냥 출력하면 공백이 출력되므로, ri를 --해준다.
		ri--;

	std::cout << r + ri << std::endl; // r + ri 부터 끝까지 출력 - 포인터주소임에 유의!!
	std::cout << a + ai << std::endl; // a + ai 부터 끝까지 출력 - 포인터주소임에 유의!!
	return 0;
}