/*
 * @Author: HuYanan
 * @Date: 2022-08-26 14:00:24
 * @LastEditTime: 2022-08-30 19:01:13
 * @LastEditors: HuYanan
 * @Description: 时间相关操作
 * @Version: 0.0.1
 * @FilePath: /HynScript/src/time/index.js
 * @Contributors: [HuYanan, other]
 */
import { fillZero } from "../String/numberFormat";
/**
 * 输入一个时间点，获取其最近15分钟的时间点
 * 例如输入 10:10分 应返回 10:15
 * @param {*} timestamp 时间戳 
 * @param {*} findNearMinute 查找最近的15分钟的倍数的分钟数
 *  例如 设置此值15
 *    则 0 -> 0, 7 -> 0, 8 -> 15, 14 -> 15, 16 -> 15, 22 -> 15, 23 -> 30
 */
export function getNearTime (timestamp, findNearMinute = 15) {
  let resTime = '';
  let resMinute = '';
  const intTimestamp = parseInt(timestamp);
  let date = '';
  let hour = 0;
  let minute = 0;
  let minuteRate = 0;
  let startTime = 0;
  let endTime = 0;
  let startTimeDistance = 0;
  let endTimeDistance = 0;
  try {
    if (!isNaN(intTimestamp)) {
      date = new Date(intTimestamp);
      // 获取分钟
      // 获取小时
      hour = date.getHours();
      minute = date.getMinutes();
      minuteRate = Math.floor(minute / findNearMinute);
      startTime = minuteRate * findNearMinute;
      endTime = (minuteRate + 1) * findNearMinute;
      startTimeDistance = minute - startTime;
      endTimeDistance = endTime - minute;
      console.log(minute, minuteRate, startTime, endTime, startTimeDistance, endTimeDistance);
      if (startTimeDistance <= endTimeDistance) {
        resMinute = startTime;
      } else if (startTimeDistance > endTimeDistance) {
        resMinute = endTime;
      }
      // 边界处理
      // 边界1 如果分钟计算为60，则小时进一位，分钟置为00
      if (resMinute === 60) {
        hour++;
        resMinute = 0;
      }
      // 边界2 如果分钟为60，小时进一位后等于24，则相当于第二天的凌晨,故应该返回00:00
      if (hour === 24) {
        hour = 0;
      }
      resTime = `${fillZero(hour)}:${fillZero(resMinute)}`;
    }
  } catch (error) {
    
  }
  if (!resTime) {
    resTime = this.getNearTime(Date.now(), findNearMinute);
  }
  return resTime;
}
const param = Date.now()+40 * 60 * 1000
const date = new Date(param);
const paramFormat = `${date.getHours()}:${date.getMinutes()}`;
console.log(paramFormat, getNearTime(param, 15))
// console.log(paramFormat, getNearTime('1661744252931', 15))