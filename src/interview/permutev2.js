/**
 * 给任意数组，和长度，返回所有组合
 */
function loop (roads = [], road = [], count, res = [], isOrder = false) {
    
  let loopNumArr = null;
  let roadClone = null;
  if (road.length === count) {
      // console.log('push', {
      //     road: [...road]
      // })
      res.push([...road]);
  } else {
      for (let i = 0; i < roads.length; i++) {
          // console.log('入参', {
          //     roads,
          //     road,
          //     count,
          //     res,
          // })
          roadClone = [...road];
          roadClone.push(roads[i]);

          if (isOrder) {
              loopNumArr = [...roads.slice(0,i), ...roads.slice(i+1)];
          } else {
              loopNumArr = [...roads.slice(i+1)];
          }

          // console.log({
          //     roadClone,
          //     roads,
          //     loopNumArr,
          //     roadClone,
          // })
          
          // if (road.length >= count) {
          //     res.push([...road])
          //     return;
          // }
          loop(loopNumArr, [...roadClone], count, res, isOrder);
  
      }
  }
  
  return res;
}

function getAssemblyArr (numArr, count) {
  let res = [];
  let arrs = null;
  if (numArr.length === count) {
      res = loop(numArr, [], count, [], true);
  } else if (numArr.length > count) {

      // for (let i = 0; i < numArr.length; i++) {
      //     arr = [...numArr.slice(0,i), ...numArr.slice(i+1)];
      //     loop(arr, [], count, res);
      // }
      // 数组中取count个数，返回所有组合，顺序不同也算同一个组合
      arrs = loop(numArr, [], count, [], false);
      console.log('数组中取count个数的所有组合,顺序不同算一个组合', arrs);
      arrs.forEach(arr => {
          let loopRes = loop([...arr], [], count, [], true);
          // console.log(loopRes);
          res.push(...loopRes);
      })
  }
  // console.log(res);
  return res;
}

const res = getAssemblyArr([1,2,3,4,5,6,7,8], 7);
console.log(res);

// const res = getAssemblyArr([1,2,3], 3);
// console.log(res);

// 检查重复
function checkRepeat (arr) {
  let isRepeat = false;
  let res = [];
  arr.forEach((item, index) => {
      if (arr.indexOf(item) !== index) {
          res.push(item);
      }
  })
  if (res.length > 0) {
      isRepeat = true;

  }
  return {
      isRepeat,
      res
  };
}
console.log(checkRepeat(res))