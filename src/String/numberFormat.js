/*
 * @Author: HuYanan
 * @Date: 2022-08-22 11:39:48
 * @LastEditTime: 2022-08-22 11:49:48
 * @LastEditors: HuYanan
 * @Description: 数字格式化
 * @Version: 0.0.1
 * @FilePath: /HynScript/src/String/numberFormat.js
 * @Contributors: [HuYanan, other]
 */
// 个位补零
export function fillZero (num) {
  let res = '00';
  const intNum = parseInt(num);
  if (!isNaN(intNum)) {
    if (intNum < 10) {
      res = `0${intNum}`;
    } else {
      res = `${intNum}`;
    }
  }
  return res;
}