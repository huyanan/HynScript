/*
 * @Author: HuYanan
 * @Date: 2022-08-22 11:43:41
 * @LastEditTime: 2022-08-22 11:48:40
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /HynScript/test/String/numberFormat.js
 * @Contributors: [HuYanan, other]
 */
var assert = require('assert');
import {
  fillZero
} from '../../src/String/numberFormat';
describe('number format fill zero', function() {
  it('无输入，应返回00', function() {
    assert.equal(fillZero(0), '00');
  });
  it('输入undefined，应返回00', function() {
    assert.equal(fillZero(0), '00');
  });
  it('输入null，应返回00', function() {
    assert.equal(fillZero(0), '00');
  });
  it('输入\'\'，应返回00', function() {
    assert.equal(fillZero(0), '00');
  });
  it('输入0，应返回00', function() {
    assert.equal(fillZero(0), '00');
  });
  it('输入1，应返回01', function() {
    assert.equal(fillZero(1), '01');
  });
  it('输入2，应返回02', function() {
    assert.equal(fillZero(2), '02');
  });
  it('输入10，应返回10', function() {
    assert.equal(fillZero(10), '10');
  });
  it('输入100，应返回10', function() {
    assert.equal(fillZero(100), '100');
  });
});