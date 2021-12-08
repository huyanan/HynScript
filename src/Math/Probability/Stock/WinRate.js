/*
 * @Author: HuYanan
 * @Date: 2021-12-08 11:18:06
 * @LastEditTime: 2021-12-08 16:01:01
 * @LastEditors: HuYanan
 * @Description: 计算胜率
 * @Version: 0.0.1
 * @FilePath: /HynScript/src/Math/Probability/Stock/WinRate.js
 * @Contributors: [HuYanan, other]
 */

import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, add, multiply, mod, subtract, divide, factorial, combinations
} from 'mathjs';

// const res = chain(').add(3);
// console.log(res);

// 条件如下
// 每笔胜率51%
// 交易笔数 N
// 盈亏比为 1

// 当天盈利概率 99.99%
// 盈利概率为 = 盈利的所有次数/总交易场次x100% =a (1>=a>=0)

// 盈利的所有次数 = N * 51%

// 假设共玩2局
// 赢 赢
// 赢 输
// 输 赢
// 输 输
// 两局都赢 51% * 51%
console.log(0.51 * 0.51);
// 一输一赢 51% + 49%
console.log(0.51 * 0.49);
// 两局都输 49% + 49%
console.log(0.49 * 0.49);

// 盈利的概率
console.log(0.26);
// 0.9999 = 0.51 * ((N/2)+1)

// 玩三次
// 赢 赢 赢 盈利
console.log(0.51 * 0.51 * 0.51);
// 赢 赢 输 盈利
console.log(0.51 * 0.51 * 0.49);
// 赢 输 赢 盈利
console.log(0.51 * 0.49 * 0.51);
// 赢 输 输
console.log(0.51 * 0.49 * 0.49);
// 输 赢 赢 盈利
console.log(0.49 * 0.51 * 0.51);
// 输 赢 输
console.log(0.49 * 0.51 * 0.49);
// 输 输 赢
console.log(0.49 * 0.49 * 0.51);
// 输 输 输
console.log(0.49 * 0.49 * 0.49);

// 所有可能性
console.log(pow(2, 3));
// 有两次赢的情况
console.log(pow(2, 2));
// 三次赢的情况
console.log(pow(1, 3));

// console.log(0.51 * 0.51 * 0.51 + (0.51 * 0.51 * 0.49) * CMN({
//   M: 2,
//   N: 3
// }));
// console.log(pow(0.51, 3) * CMN({
//   M: 3,
//   N: 3
// }));
// // 盈利的概率
// // 3次赢的次数 * 概率 + 2次赢的次数 * 概率
// console.log(pow(0.51, 2) * pow(0.49, 1) * CMN({
//   M: 2,
//   N: 3
// }) + pow(0.51, 3) * CMN({
//   M: 3,
//   N: 3
// }));

// 盈利的概率计算
// 通过上面的例子可以看出，当赢的场数大于输的场数才算赢，这种情况
// 全赢的概率 = 0.51的N次方 * 0.49的0次方
// 输一局剩下全赢的概率 = 0.51的(N-1)次方 * 0.49的1次方
// 输两局剩下全赢的概率 = 0.51的(N-2)次方 * 0.49的2次方
// 输三局局剩下全赢的概率 = 0.51 * (N-3)
// 输四局剩下全赢的概率 = 0.51 * (N-4)
// 输
// 可以算出上面两局和三局的胜率为
// 两局的胜率
// console.log(pow(0.51, );

// 玩四局
// 四局都输
console.log(pow(0.49, 4));
// 三局都输
console.log(pow(0.49, 3));

// 玩四局的胜率
console.log(add(multiply(pow(0.51, 3), pow(0.49, 1), (pow(2, 3) - 1)), pow(0.51, 4)));

// 当玩了N次，能盈利的概率为
// 盈利概率 = (1-0.49的N
function computedProbabilityByVictoryNum({
  N,
  V
}) {
  console.log({
    n1: pow(0.51, V),
    n2: subtract(N, V),
    n3: pow(0.49, subtract(N, V)),
    V,
    N,
    n4: CMN({
      M: V,
      N
    })
  });
  const res = multiply(pow(0.51, V), pow(0.49, subtract(N, V)), CMN({
    M: V,
    N
  }));
  console.log({
    N,
    V,
    res,
    n1: multiply(pow(0.51, V), pow(0.49, N - V))
  });
  return res;
}

// 计算N次，出现V次的次数
function CMN({
  M,
  N
}) {
  return combinations(N, M);
}
// 阶乘
// function factorial (n) {
//   // a代表结果 [0]是个位依次类推
//   var a = [1];
//   for (var i = 1; i <= n; i++) {
//     // 判断条件可以理解为为 在j大于当前被乘数的位数的时候，存在进位则强制将a扩增一个位数
//     for (var j = 0, c = 0; j < a.length || c !== 0; j++) {
//       // 每次执行这一此循环时
//       // 将进位数归0,当前位数归0,然后从当前位数开始与阶乘数i相乘
//       // 用m保存相乘的结果（阶乘数*当前位数+上一位的进位数）
//       // 把当前位数设置为m对10取模
//       // 把c设置为进位数也就是减去当前位数再除10
//       var m = (j < a.length) ? add(multiply(i, a[j]), c) : c;
//       a[j] = mod(m, 10);
//       c = divide(subtract(m, a[j]), 10);
//     }
//   }
//   return a.reverse().join('');
// };
// 计算玩N次的盈利概率 = 赢数过半的所有情况的概率之和
function playNVictory ({
  N,
  simpleV = 0.51
}) {
  let res = 0;
  // 从全赢到赢一半的所有概率相加
  for (let i = N; N / 2 < i; i--) {
    // res += computedProbabilityByVictoryNum({
    //   N,
    //   V: i
    // });
    res = add(res, computedProbabilityByVictoryNum({
      N,
      V: i
    }));
  }
  return res;
};
// console.log(CMN({
//   N: 1000,
//   M: 501
// }));
// console.log(computedProbabilityByVictoryNum({
//   N: 3,
//   V: 2
// }));

// console.log(pow(2, 3));

// console.log(playNVictory({
//   N: 260
// }));


/**
 * // 计算收益率
 * WinRate 平均胜率
 * ReturnRate 平均盈利率
 * OddsRate 平均赔率
 * LossRate 平均亏损率
 * N 为交易次数
 * 总收益率与平均胜率以及每次交易的平均收益率之间存在这样的关系:

    ΣP=[(WinRate x ReturnRate)-(OddsRate x LossRate)] x N
 */


function totalWinRate ({ WinRate, ReturnRate, OddsRate, LossRate, N}) {
  return (WinRate * ReturnRate - OddsRate * LossRate) * N;
}

/**
 * 期望总胜率为P，算出要交易的次数
 */
function getTradingNum ({ WinRate, ReturnRate, OddsRate, LossRate, TotalWinRate}) {
  return TotalWinRate / (WinRate * ReturnRate - OddsRate * LossRate);
}

console.log(totalWinRate({
  WinRate: 0.51,
  ReturnRate: 0.01,
  OddsRate: 0.49,
  LossRate: 0.01,
  N: 10000
}));

console.log(getTradingNum({
  WinRate: 0.51,
  ReturnRate: 0.01,
  OddsRate: 0.49,
  LossRate: 0.01,
  TotalWinRate: 0.9999
}));