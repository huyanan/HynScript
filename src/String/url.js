/*
 * @Author: HuYanan
 * @Date: 2022-08-11 11:12:08
 * @LastEditTime: 2022-08-11 14:10:24
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /HynScript/src/String/url.js
 * @Contributors: [HuYanan, other]
 */
export function updateParams (url='', updateParams) {
  let resUrl = url;
  if (url && typeof updateParams === 'object') {
  let splitUrls = url.split('?');
  let search = splitUrls[1];
  let params = {};
  if (typeof search !== 'undefined') {
    search.split('&').forEach((param) => {
    if (!param.split('=')[0]) {
      return;
    }
    params[param.split('=')[0]] = param.split('=')[1];
    });
  }
  
  Object.keys(updateParams).forEach((key) => {
    params[key] = updateParams[key];
  })
  search = Object.keys(params).reduce((prev, key, index) => {
    return prev += `${index!==0?'&':''}${key}=${params[key]}`;
  }, '')
  resUrl = `${splitUrls[0]}${search?'?':''}${search}`;
  }
  return resUrl;
}

// test
console.log(updateParams());