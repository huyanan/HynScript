/*
 * @Author: HuYanan
 * @Date: 2022-08-26 18:23:37
 * @LastEditTime: 2022-08-29 11:14:18
 * @LastEditors: HuYanan
 * @Description: 时间处理
 * @Version: 0.0.1
 * @FilePath: /HynScript/test/time/index.js
 * @Contributors: [HuYanan, other]
 */
var assert = require('assert');
import {
  getNearTime
} from '../../src/time/index';
describe('time getNearTime', function() {
  // it('无输入，应返回00', function() {
  //   assert.equal(fillZero(0), '00');
  // });
  // it('输入undefined，应返回00', function() {
  //   assert.equal(fillZero(0), '00');
  // });
  // it('输入null，应返回00', function() {
  //   assert.equal(fillZero(0), '00');
  // });
  // it('输入\'\'，应返回00', function() {
  //   assert.equal(fillZero(0), '00');
  // });
  // it('输入0，应返回00', function() {
  //   assert.equal(fillZero(0), '00');
  // });
  // it('输入1，应返回01', function() {
  //   assert.equal(fillZero(1), '01');
  // });
  // it('输入2，应返回02', function() {
  //   assert.equal(fillZero(2), '02');
  // });
  // it('输入10，应返回10', function() {
  //   assert.equal(fillZero(10), '10');
  // });
  // 测试数据
  const asserts = [
    {
      date: new Date('2022/8/29 10:00'),
      res: '10:00'
    },
    {
      date: new Date('2022/8/29 10:01'),
      res: '10:00'
    },
    {
      date: new Date('2022/8/29 10:07'),
      res: '10:00'
    },
    {
      date: new Date('2022/8/29 10:08'),
      res: '10:15'
    },
    {
      date: new Date('2022/8/29 10:14'),
      res: '10:15'
    },
    {
      date: new Date('2022/8/29 10:15'),
      res: '10:15'
    },
    {
      date: new Date('2022/8/29 10:22'),
      res: '10:15'
    },
    {
      date: new Date('2022/8/29 10:23'),
      res: '10:30'
    },
    {
      date: new Date('2022/8/29 10:25'),
      res: '10:30'
    },
    {
      date: new Date('2022/8/29 10:29'),
      res: '10:30'
    },
  ];
  asserts.forEach((item) => {
    it(`输入${item.date.getTime()}，${item.date.toJSON()},应返回${item.res}`, function() {
      assert.equal(getNearTime(item.date.getTime()), item.res);
    });
  });
});