/*
 * @Author: HuYanan
 * @Date: 2022-08-11 13:54:22
 * @LastEditTime: 2022-08-11 14:14:25
 * @LastEditors: HuYanan
 * @Description: url.js单元测试
 * @Version: 0.0.1
 * @FilePath: /HynScript/test/String/url.js
 * @Contributors: [HuYanan, other]
 */
var assert = require('assert');
import {
  updateParams
} from '../../src/String/url.js';
describe('RegExp number', function() {
  const url = 'https://www.abc.com/home';
  const params = {
    foo: 'bar',
    name: 'Brand'
  };
  describe('更新url参数', function() {
    it('无参数传入，应返回空字符串', function() {
      assert.equal(updateParams(), '');
    });
    it(`传递${url}，但无参数更新，应返回原${url}`, function() {
      assert.equal(updateParams(url), url);
    });
    it('url不传，传递更新参数，应返回空字符串', function() {
      assert.equal(updateParams(undefined,params), '');
    });
    it(`输入${url}和${JSON.stringify(params)}}，应返回'https://www.abc.com/home?foo=bar&name=Brand'`, function() {
      assert.equal(updateParams(url, params), 'https://www.abc.com/home?foo=bar&name=Brand');
    });
    it(`输入${url}?和${JSON.stringify(params)}}，应返回'https://www.abc.com/home?foo=bar&name=Brand'`, function() {
      assert.equal(updateParams(`${url}?`, params), 'https://www.abc.com/home?foo=bar&name=Brand');
    });
    it(`输入${url}?foo=dj和${JSON.stringify(params)}},应返回'https://www.abc.com/home?foo=bar&name=Brand'`, function() {
      assert.equal(updateParams(`${url}?`, params), 'https://www.abc.com/home?foo=bar&name=Brand');
    });
    it(`输入${url}?gender=1和${JSON.stringify(params)}},应返回'https://www.abc.com/home?gender=1&foo=bar&name=Brand’`, function() {
      assert.equal(updateParams(`${url}?gender=1`, params), 'https://www.abc.com/home?gender=1&foo=bar&name=Brand');
    });
    it(`输入${url}?gender=1&和${JSON.stringify(params)}},应返回'https://www.abc.com/home?gender=1&foo=bar&name=Brand’`, function() {
      assert.equal(updateParams(`${url}?gender=1&`, params), 'https://www.abc.com/home?gender=1&foo=bar&name=Brand');
    });
  });
});