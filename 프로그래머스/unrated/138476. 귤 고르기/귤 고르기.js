function solution(k, tangerine) {
    const obj = {}
    // 귤 크기별 개수를 구하기 위해 객체에 { 크기: 개수 }의 형태로 담는다
    tangerine.forEach((el) => {
        obj[el] =  ++obj[el] || 1
    })
    
    // 귤 크기별 개수를 담은 객체에서 개수(Object.values)를 오름차순으로 정렬하여
    // 개수의 크기가 큰 것부터 정렬한다
    const values = Object.values(obj).sort((a, b) => b - a)
      
    // 귤이 박스에 담기는 변수 count를 선언
    let count = 0
    for (let i=0; i<values.length; i++) {
        // 개수의 배열을 선회하면서 count에 개수를 추가하고
        count += values[i]
        // 담으려는 귤의 개수와 같거나 커졌을때 루프를 멈추고
        if (count >= k) {
            // i=0일때가 있어서 삼항연산자로 결과값 리턴
            return i ? i + 1 : 1     
        }
    }   
}