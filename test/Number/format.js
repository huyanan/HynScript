/*
 * @Author: HuYanan
 * @Date: 2022-08-26 11:02:34
 * @LastEditTime: 2022-08-26 11:09:57
 * @LastEditors: HuYanan
 * @Description: 数字格式化单元测试
 * @Version: 0.0.1
 * @FilePath: /HynScript/test/Number/format.js
 * @Contributors: [HuYanan, other]
 */
var assert = require('assert');
import {
  formatUserNum
} from '../../src/Number/format';
describe('number format user number', function() {
  it('无输入，应返回0', function() {
    assert.equal(formatUserNum(), '0');
  });
  it('输入undefined，应返回0', function() {
    assert.equal(formatUserNum(undefined), '0');
  });
  it('输入null，应返回0', function() {
    assert.equal(formatUserNum(null), '0');
  });
  it('输入\'\'，应返回0', function() {
    assert.equal(formatUserNum(''), '0');
  });
  it('输入0，应返回0', function() {
    assert.equal(formatUserNum(0), '0');
  });
  it('输入1，应返回1', function() {
    assert.equal(formatUserNum(1), '1');
  });
  it('输入9999，应返回9999', function() {
    assert.equal(formatUserNum(9999), '9999');
  });
  it('输入10000，应返回1', function() {
    assert.equal(formatUserNum(10000), '1万');
  });
  it('输入123456，应返回12.3', function() {
    assert.equal(formatUserNum(123456), '12.3万');
  });
});