// 计算两个坐标的距离
function getDistance (a,b) {
    let distance = 0;
    const x = a.x - b.x
    const y = a.y - b.y
    distance = Math.sqrt(x * x + y * y)
    return distance 
}
let a = {
    x: 1,
    y: 1
}
let b = {
    x: 2,
    y: 2
}
const distance = getDistance(a,b)

console.log(distance)

