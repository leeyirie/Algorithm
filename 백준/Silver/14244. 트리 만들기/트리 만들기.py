n,m = map(int,input().split())

now_node=0
count = m-1
for i in range(1,n):
    if m==2:
        print(now_node,i)
        now_node+=1
    else:
        print(now_node,i)
        now_node+=1
        if count:
            now_node-=1
            count-=1