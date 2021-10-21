/*
 * @Author: HuYanan
 * @Date: 2021-10-21 09:59:57
 * @LastEditTime: 2021-10-21 12:01:32
 * @LastEditors: HuYanan
 * @Description: 关于数字的正则
 * @Version: 0.0.1
 * @FilePath: /vue-test/Users/mac/Documents/MyProject/HynScript/src/RegExp/number.js
 * @Contributors: [HuYanan, other]
 */

// 匹配前两位不以0开头的数字
export const regExpNumber10To99 = new RegExp(/^(0*)(\d{0,2}).*/, 'g');

export const replaceNumber10To99 = function (str) {
  return str.replace(regExpNumber10To99, '$2');
}