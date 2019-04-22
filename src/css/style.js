/**
 * 获取元素的样式，非内联
 * 利用判断是否支持currentStyle（是否为ie）来通过不同方法获取style
 * @param  {[type]} dom [description]
 * @return {[type]}     [description]
 */
function getStyle(dom) {
  if (!dom) return
  let finalStyle = dom.currentStyle ? dom.currentStyle : window.getComputedStyle(dom, null)
  return finalStyle
}
