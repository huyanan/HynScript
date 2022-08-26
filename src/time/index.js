/*
 * @Author: HuYanan
 * @Date: 2022-08-26 14:00:24
 * @LastEditTime: 2022-08-26 20:09:34
 * @LastEditors: HuYanan
 * @Description: 时间相关操作
 * @Version: 0.0.1
 * @FilePath: /HynScript/src/time/index.js
 * @Contributors: [HuYanan, other]
 */
/**
 * 输入一个时间点，获取其最近15分钟的时间点
 * 例如输入 10:10分 应返回 10:15
 * 输入 
 * 
 * 
 */
/**
 * 
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
      date = new Date(timestamp);
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
      resTime = `${hour}:${resMinute}`;
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