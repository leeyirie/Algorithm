# 세미나별 교실 정보
classrooms = {
    "Algorithm": "204",
    "DataAnalysis": "207",
    "ArtificialIntelligence": "302",
    "CyberSecurity": "B101",
    "Network": "303",
    "Startup": "501",
    "TestStrategy": "105"
}

# 세미나의 수
N = int(input())

# 진흥이가 신청한 세미나 목록 입력받고 교실 출력
for _ in range(N):
    seminar = input().strip()
    print(classrooms.get(seminar, "Unknown"))
