/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nfunction Timer() {\n  var _this = this;\n\n  this.s1 = 0;\n  this.s2 = 0;\n  // 箭头函数\n  setInterval(function () {\n    _this.s1++;\n  }, 1000);\n  //箭头函数中的this指向函数定义时所在的对象\n  //箭头函数没有自己的this，不能用call，bind方法改变其中this的指向\n  //普通函数中this指向函数运行时所在的对象\n  // 普通函数\n  setInterval(function () {\n    console.log(this.s2); //NANthis 指向window对象\n    this.s2++;\n  }, 1000);\n}\n\n// var timer = new Timer();\n\n// setTimeout(() => console.log('s1: ', timer.s1), 3100);\n// setTimeout(() => console.log('s2: ', timer.s2), 3100);\n\n//函数包装类型添加method =》给函数原型添加方法\nFunction.prototype.method = function (type, func) {\n  if (!this.prototype[type]) this.prototype[type] = func;\n  return this;\n};\n\n//Array Number Boolean 原型上的__proto__指向Object.prototype\nObject.prototype.method = function (type, func) {\n  if (!this.prototype[type]) this.prototype[type] = func;\n  return this;\n};\n\nvar arr = [1, 2, 3];\n\nvar add = function add(a, b) {\n  return a + b;\n};\n\nArray.method('yyx', function () {\n  console.log(this);\n});\n\n//实现数组reduce方法\nArray.method('reducers', function (f, value) {\n\n  for (var index = 0; index < this.length; index++) {\n    value = f(this[index], value);\n  }\n\n  return value;\n});\n\n// @test\n// console.log(arr.reducers(add,1));\n\n//implements the method of Array slice\n\n\n//implements the method of Array push\nArray.method('y_push', function () {\n  var temp = Array.prototype.slice.apply(arguments, [0]);\n  return this.concat(temp);\n});\n\n// @test\nconsole.log(arr.y_push(4));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdmFyaWFibGUuanM/MDhkNyJdLCJuYW1lcyI6WyJUaW1lciIsInMxIiwiczIiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsIm1ldGhvZCIsInR5cGUiLCJmdW5jIiwiT2JqZWN0IiwiYXJyIiwiYWRkIiwiYSIsImIiLCJBcnJheSIsImYiLCJ2YWx1ZSIsImluZGV4IiwibGVuZ3RoIiwidGVtcCIsInNsaWNlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjb25jYXQiLCJ5X3B1c2giXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUNmLE9BQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsT0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDQTtBQUNBQyxjQUFZLFlBQU07QUFBQyxVQUFLRixFQUFMO0FBQVcsR0FBOUIsRUFBZ0MsSUFBaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRSxjQUFZLFlBQVk7QUFDdEJDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLSCxFQUFqQixFQURzQixDQUNGO0FBQ3BCLFNBQUtBLEVBQUw7QUFDRCxHQUhELEVBR0csSUFISDtBQUlEOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQUksU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsR0FBMEIsVUFBU0MsSUFBVCxFQUFjQyxJQUFkLEVBQW1CO0FBQ3pDLE1BQUcsQ0FBQyxLQUFLSCxTQUFMLENBQWVFLElBQWYsQ0FBSixFQUNFLEtBQUtGLFNBQUwsQ0FBZUUsSUFBZixJQUFxQkMsSUFBckI7QUFDRixTQUFPLElBQVA7QUFDSCxDQUpEOztBQU1BO0FBQ0FDLE9BQU9KLFNBQVAsQ0FBaUJDLE1BQWpCLEdBQXdCLFVBQVNDLElBQVQsRUFBY0MsSUFBZCxFQUFtQjtBQUN2QyxNQUFHLENBQUMsS0FBS0gsU0FBTCxDQUFlRSxJQUFmLENBQUosRUFDRSxLQUFLRixTQUFMLENBQWVFLElBQWYsSUFBcUJDLElBQXJCO0FBQ0YsU0FBTyxJQUFQO0FBQ0gsQ0FKRDs7QUFNQSxJQUFJRSxNQUFJLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQVI7O0FBRUEsSUFBSUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFTO0FBQ2pCLFNBQU9ELElBQUVDLENBQVQ7QUFDRCxDQUZEOztBQUlBQyxNQUFNUixNQUFOLENBQWEsS0FBYixFQUFtQixZQUFVO0FBQzNCSixVQUFRQyxHQUFSLENBQVksSUFBWjtBQUNELENBRkQ7O0FBSUE7QUFDQVcsTUFBTVIsTUFBTixDQUFhLFVBQWIsRUFBd0IsVUFBU1MsQ0FBVCxFQUFXQyxLQUFYLEVBQWlCOztBQUV2QyxPQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVEsS0FBS0MsTUFBakMsRUFBeUNELE9BQXpDLEVBQWtEO0FBQ2hERCxZQUFRRCxFQUFFLEtBQUtFLEtBQUwsQ0FBRixFQUFjRCxLQUFkLENBQVI7QUFDRDs7QUFFRCxTQUFPQSxLQUFQO0FBQ0QsQ0FQRDs7QUFVQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBRixNQUFNUixNQUFOLENBQWEsUUFBYixFQUFzQixZQUFVO0FBQzlCLE1BQUlhLE9BQU9MLE1BQU1ULFNBQU4sQ0FBZ0JlLEtBQWhCLENBQXNCQyxLQUF0QixDQUE0QkMsU0FBNUIsRUFBc0MsQ0FBQyxDQUFELENBQXRDLENBQVg7QUFDQSxTQUFPLEtBQUtDLE1BQUwsQ0FBWUosSUFBWixDQUFQO0FBQ0QsQ0FIRDs7QUFLQTtBQUNBakIsUUFBUUMsR0FBUixDQUFZTyxJQUFJYyxNQUFKLENBQVcsQ0FBWCxDQUFaIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBUaW1lcigpIHtcclxuICB0aGlzLnMxID0gMDtcclxuICB0aGlzLnMyID0gMDtcclxuICAvLyDnrq3lpLTlh73mlbBcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5zMSsrO30sIDEwMDApO1xyXG4gIC8v566t5aS05Ye95pWw5Lit55qEdGhpc+aMh+WQkeWHveaVsOWumuS5ieaXtuaJgOWcqOeahOWvueixoVxyXG4gIC8v566t5aS05Ye95pWw5rKh5pyJ6Ieq5bex55qEdGhpc++8jOS4jeiDveeUqGNhbGzvvIxiaW5k5pa55rOV5pS55Y+Y5YW25LitdGhpc+eahOaMh+WQkVxyXG4gIC8v5pmu6YCa5Ye95pWw5LitdGhpc+aMh+WQkeWHveaVsOi/kOihjOaXtuaJgOWcqOeahOWvueixoVxyXG4gIC8vIOaZrumAmuWHveaVsFxyXG4gIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuczIpLy9OQU50aGlzIOaMh+WQkXdpbmRvd+WvueixoVxyXG4gICAgdGhpcy5zMisrO1xyXG4gIH0sIDEwMDApO1xyXG59XHJcblxyXG4vLyB2YXIgdGltZXIgPSBuZXcgVGltZXIoKTtcclxuXHJcbi8vIHNldFRpbWVvdXQoKCkgPT4gY29uc29sZS5sb2coJ3MxOiAnLCB0aW1lci5zMSksIDMxMDApO1xyXG4vLyBzZXRUaW1lb3V0KCgpID0+IGNvbnNvbGUubG9nKCdzMjogJywgdGltZXIuczIpLCAzMTAwKTtcclxuXHJcbi8v5Ye95pWw5YyF6KOF57G75Z6L5re75YqgbWV0aG9kID3jgIvnu5nlh73mlbDljp/lnovmt7vliqDmlrnms5VcclxuRnVuY3Rpb24ucHJvdG90eXBlLm1ldGhvZD1mdW5jdGlvbih0eXBlLGZ1bmMpe1xyXG4gICAgaWYoIXRoaXMucHJvdG90eXBlW3R5cGVdKVxyXG4gICAgICB0aGlzLnByb3RvdHlwZVt0eXBlXT1mdW5jO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8vQXJyYXkgTnVtYmVyIEJvb2xlYW4g5Y6f5Z6L5LiK55qEX19wcm90b19f5oyH5ZCRT2JqZWN0LnByb3RvdHlwZVxyXG5PYmplY3QucHJvdG90eXBlLm1ldGhvZD1mdW5jdGlvbih0eXBlLGZ1bmMpe1xyXG4gICAgaWYoIXRoaXMucHJvdG90eXBlW3R5cGVdKVxyXG4gICAgICB0aGlzLnByb3RvdHlwZVt0eXBlXT1mdW5jO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbmxldCBhcnI9WzEsMiwzXTtcclxuXHJcbmxldCBhZGQgPSAoYSxiKSA9PiB7XHJcbiAgcmV0dXJuIGErYjtcclxufVxyXG5cclxuQXJyYXkubWV0aG9kKCd5eXgnLGZ1bmN0aW9uKCl7XHJcbiAgY29uc29sZS5sb2codGhpcyk7XHJcbn0pXHJcblxyXG4vL+WunueOsOaVsOe7hHJlZHVjZeaWueazlVxyXG5BcnJheS5tZXRob2QoJ3JlZHVjZXJzJyxmdW5jdGlvbihmLHZhbHVlKXtcclxuICBcclxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIHZhbHVlID0gZih0aGlzW2luZGV4XSx2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWU7XHJcbn0pXHJcblxyXG5cclxuLy8gQHRlc3RcclxuLy8gY29uc29sZS5sb2coYXJyLnJlZHVjZXJzKGFkZCwxKSk7XHJcblxyXG4vL2ltcGxlbWVudHMgdGhlIG1ldGhvZCBvZiBBcnJheSBzbGljZVxyXG5cclxuXHJcbi8vaW1wbGVtZW50cyB0aGUgbWV0aG9kIG9mIEFycmF5IHB1c2hcclxuQXJyYXkubWV0aG9kKCd5X3B1c2gnLGZ1bmN0aW9uKCl7XHJcbiAgbGV0IHRlbXAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzLFswXSk7XHJcbiAgcmV0dXJuIHRoaXMuY29uY2F0KHRlbXApO1xyXG59KVxyXG5cclxuLy8gQHRlc3RcclxuY29uc29sZS5sb2coYXJyLnlfcHVzaCg0KSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy92YXJpYWJsZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);