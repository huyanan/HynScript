/*
 * @Author: HuYanan
 * @Date: 2022-08-26 10:59:27
 * @LastEditTime: 2022-08-26 11:12:00
 * @LastEditors: HuYanan
 * @Description: 数字格式化相关
 * @Version: 0.0.1
 * @FilePath: /HynScript/src/Number/format.js
 * @Contributors: [HuYanan, other]
 */
// 格式化人数 10000及以上展示 n.n万人，例如：13456人展示为1.3万人，向下取整
export const formatUserNum = (n) => {
  let res = '0';
  const intN = parseFloat(n);
  if (!isNaN(intN)) {
    if (intN >= 10000) {
      res = `${Math.round(intN/1000)/10}万`;
    } else {
      res = `${intN}`;
    }
  }
  return res;
}

console.log(formatUserNum(10000));