

// 全排列
function permute(nums) {
  const result = [];
  backtrack(nums, null, result);
  return result;
}
function backtrack(nums, path, result) {
let rest = [];
let tmp = []
// console.log(nums, path, result)
nums.forEach((num, index) => {
  if (path) {
    tmp = [...path]
  } else {
    tmp = []
  }
  tmp.push(num)
  rest = [...nums.slice(0, index), ...nums.slice(index + 1)]
  if (rest.length === 0) {
    // console.log(tmp)
    result.push(tmp)
  } else {
    backtrack(rest, tmp, result)
  }
});
}

// 计算有多少排列组合
function permuteTotalNum(nums) {
let total = 1;
for (let i = 1; i <= nums.length; i++) {
  total *= i
}
return total;
}

// 测试
const arr = [1,2,3,4,5]

let res = permute(arr)
console.log(res)

let total = permuteTotalNum(arr)
console.log(total)