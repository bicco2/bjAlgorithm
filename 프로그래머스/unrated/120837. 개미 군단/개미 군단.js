function solution(hp) {
    const g_ant = parseInt(hp/5)
    const s_ant = parseInt( ( hp % 5 ) / 3)
    const o_ant = ( hp % 5 ) % 3
    return g_ant + s_ant + o_ant
}
