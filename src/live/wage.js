/**
 * [getWage description]
 * @param  {[type]} likeNum [用户对主播的喜爱值]
 * @return {[type]}         [返回最后实际发给主播的工资]
 * 提成 喜爱值的16%
 * 激励 提成的12%
 * 底薪 550
 * 工会抽成 工资的15%
 * 实际工资=(提成 + 激励 + 底薪) - 抽成
 */
function getWage(likeNum) {
  let wage = 0

  let wage1 = likeNum * 10 / 100
  let wage2 = wage1 * 12 / 100
  let wage3 = 550
  wage = wage1 + wage2 + wage3
  wage = wage - (wage * 16 / 100)

  return wage
}
