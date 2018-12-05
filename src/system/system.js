// 十进制转二进制
function tenTo2(num){
  var shang = num
  var yu = []
  while(shang>=1){
    yu.push(shang%2)
    shang = parseInt(shang/2)
  }
  return yu.reverse()
}
