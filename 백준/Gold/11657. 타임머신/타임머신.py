import sys
input = sys.stdin.readline
INF = int(1e9)


def bellman_ford(start):
    dist[start] = 0

    # n번의 라운드를 반복
    for i in range(1, n + 1):
        # 매 라운드마다 모든 간선을 확인
        for j in range(m):
            now, next, cost = edges[j][0], edges[j][1], edges[j][2]
            # 현재 간선을 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
            # 즉, 현재 (next) 의 최단 거리가 다른 노드(now)를 거치고 + cost(추가 거리)를 했을때 보다 크면 갱신
            if dist[now] != INF and dist[next] > dist[now] + cost:
                dist[next] = dist[now] + cost
                # n번째 라운드에서도 값이 갱신된다면 음수 순환 존재
                if i == n:
                    return True

    return False


n, m = map(int, input().split())
edges = []
dist = [INF] * (n + 1)

for _ in range(m):
    a, b, c = map(int, input().split())
    edges.append((a, b, c))

negative_cycle = bellman_ford(1)

# 벨만포드 돌면서 음수 사이클 있으면 true 반환
if negative_cycle:
    print(-1)
else:
    for i in range(2, n + 1):
        # 경로 없는 경우 
        if dist[i] == INF:
            print(-1)
        else:
            print(dist[i])