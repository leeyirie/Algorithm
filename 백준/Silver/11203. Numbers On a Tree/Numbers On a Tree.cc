#include <bits/stdc++.h>
#define fastio ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
using namespace std;

int main() {
	fastio;
	int n, x = 1; string s; cin >> n >> s;
	for (auto i : s) x = x << 1 | (i == 'R');
	cout << (1 << n + 1) - x << '\n';
}