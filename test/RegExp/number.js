/*
 * @Author: HuYanan
 * @Date: 2021-10-21 11:33:20
 * @LastEditTime: 2021-10-21 12:32:00
 * @LastEditors: HuYanan
 * @Description: 测试正则数字
 * @Version: 0.0.1
 * @FilePath: /vue-test/Users/mac/Documents/MyProject/HynScript/test/RegExp/number.js
 * @Contributors: [HuYanan, other]
 */

var assert = require('assert');
import {
  regExpNumber10To99,
  replaceNumber10To99
} from '../../src/RegExp/number.js';
describe('RegExp number', function() {
  // describe('匹配开头不为0的，10~99的数字', function() {
  //   it('should return -1 when the value is not present', function() {
  //     let pass = false;
  //     const matched = '0'.match(regExpNumber10To99);
  //     console.log(matched);
  //     pass = true
  //     return pass;
  //   });
  // });

  describe('匹配开头不为0的，10~99的数字', function() {
    it('输入0，应返回空字符串', function() {
      assert.equal(replaceNumber10To99('0'), '');
    });
    it('输入01，应返回1', function() {
      assert.equal(replaceNumber10To99('01'), '1');
    });
    it('输入012，应返回12', function() {
      assert.equal(replaceNumber10To99('012'), '12');
    });
    it('输入0012，应返回12', function() {
      assert.equal(replaceNumber10To99('0012'), '12');
    });
    it('输入00012，应返回12', function() {
      assert.equal(replaceNumber10To99('00012'), '12');
    });
    it('输入10，应返回10', function() {
      assert.equal(replaceNumber10To99('10'), '10');
    });
    it('输入101，应返回10', function() {
      assert.equal(replaceNumber10To99('101'), '10');
    });
    it('输入12345，应返回12', function() {
      assert.equal(replaceNumber10To99('12345'), '12');
    });
    it('输入4873478780000，应返回48', function() {
      assert.equal(replaceNumber10To99('4873478780000'), '48');
    });
  });
});