/**
 * 大数组套小数组，小数组中有两个元素，第一个元素为id 第二个元素为score
 * 先按score 降序排序，其中如果score相等则按id升序排序
 */
let arr = [
  [
    1,
    1
  ],
  [
    2,2
  ],
  [
    6,3
  ],
  [
    4,4
  ],
  [
    5,3
  ],
  
]

let sortedArr = arr.sort((a,b)=>{
  // 分数较小的排后面
  if (a[1] != b[1]) {
    return b[1] - a[1]
  } else {
    // 如果分数相等，按id大的放后面
    return a[0] - b[0]
  }
})

console.log(sortedArr); 
// 输出 [ [ 4, 4 ], [ 5, 3 ], [ 6, 3 ], [ 2, 2 ], [ 1, 1 ] ]


