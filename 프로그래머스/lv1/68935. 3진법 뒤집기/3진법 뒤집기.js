function solution(n) {
    let toThree = [...n.toString(3)].reverse();

    return parseInt(toThree.join(''), 3);
}