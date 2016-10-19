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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	//es6函数传默认参数
	function getY(x) {
		var y = arguments.length <= 1 || arguments[1] === undefined ? "yang" : arguments[1];


		return x + "-" + y;
	}
	// getY(1)
	document.write(getY(1, undefined));

	//rest参数，用来获取函数多余的参数,items中存储一个数组...items只是一种写法
	function rests(a) {
		for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			items[_key - 1] = arguments[_key];
		}

		console.log(items);
	}
	rests(1, 2, 3, 4);

	//拓展运算符，把数组转化为参数列...[1,2,3]
	//
	//、、箭头函数
	var f = function f(n) {
		return n + 2;
	};
	console.log(f(2));

	var f1 = function f1(x) {
		for (var _len2 = arguments.length, y = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			y[_key2 - 1] = arguments[_key2];
		}

		return [x, y];
	};
	console.log(f1(1, 2, 3));

	//箭头函数没有自己的this，他的this是指外部代码块的this
	function ClearThis() {
		var _this = this;

		this.a = 'yyyy';
		setInterval(function () {
			console.log(_this.a);
		});
	}
	// var c=new ClearThis();

	function calls() {
		var _this2 = this;

		return function () {
			console.log(_this2.id);
		};
	}
	calls.call({ id: 2 })();

	function getN() {
		var index = 1;
		var arr = [];
		//let 定义局部变量，变量不可提升，出了for循环就undefined

		var _loop = function _loop(i) {
			arr[i] = function () {
				console.log(i);
			};
			arr[i]();
		};

		for (var i = 1; i < 10; i++) {
			_loop(i);
		}
		arr[6]();
		console.log('const-' + index);
		// console.log('let-'+i);//not defined
	}
	getN();

	// console.log(ls)
	// console.log(vs)
	// console.log(cs)
	// let ls=2;
	var vs = 1;
	// const cs=3;
	// let const 块级作用域 而var不受块级作用域限制
	{
		var _ls = 2;
		var _cs = 3;
		var ss = 4;
	}
	console.log(ss);
	console.log(cs);
	console.log(ls);

/***/ }
/******/ ]);