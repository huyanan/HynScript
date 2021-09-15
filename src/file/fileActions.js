/*
 * @Author: HuYanan
 * @Date: 2021-09-15 16:14:49
 * @LastEditTime: 2021-09-15 16:27:10
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /HynScript/src/file/fileActions.js
 * @Contributors: [HuYanan, other]
 */

/**
 * 文件名自增操作
 * 文件名 -> 文件名_1
 * 文件名_1 -> 文件名_2
 * @param {*} name 文件名
 * @returns 
 */
export function incrementName (name) {
  let incrementName = '';
  // 首先判断名称是否已经是复制的名字
  const suffixRegex = new RegExp(/(\_)(\d+)?$/, 'g');
  const MAX_SAFE_SMALL_INTEGER = 1 << 30

  if (suffixRegex.test(name)) {
    incrementName = name.replace(suffixRegex, (match, g1, g2) => {
      let number = g2 ? parseInt(g2) : 0;
      return (number < MAX_SAFE_SMALL_INTEGER
						? `${g1}${number + 1}`
						: `${g1}${g2} copy`);
    });
  } else {
    incrementName = `${name}_1`;
  }

  return incrementName;
}

export default {
  incrementName
};