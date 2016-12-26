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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _console;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	//es6函数传默认参数
	function getY(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yang";


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
	console.log(typeof vs === "undefined" ? "undefined" : _typeof(vs)); //undefined

	// vs编译后变成了var定义的？、
	var vs = 1;
	// const cs=3;
	// let const 块级作用域 而var不受块级作用域限制
	//let有变量提升
	//const 也有变量提升
	{
		console.log('cs' + cs);
		var ls = 2;
		var cs = 3;
		var ss = 4;
	}
	// console.log(ss)
	// console.log(cs)
	// console.log(ls)
	// 求数组交集
	var getArr = function getArr(arr1, arr2) {
		var arr = [];
		for (var i = 0; i < arr1.length; i++) {
			for (var j = 0; j < arr2.length; j++) {
				if (arr1[i] == arr2[j]) {
					arr.push(arr1[i]);
				}
			}
		}
		console.log(arr.sort());
		console.log(arr1.sort());
		console.log(arr.sort(function (a, b) {
			return a - b > 0 ? -1 : 1;
		}));
		return arr.sort().toString() == arr1.sort().toString() ? true : false;
	};
	//console.log(getArr([1,6,3],[1,6,3,4]));
	//变量的解构赋值
	var a = 1,
	    b = 2,
	    c = 3;

	console.log('---' + a, b, c);

	//解构赋值允许指定默认值
	var _ref = [2],
	    _ref$ = _ref[0],
	    x = _ref$ === undefined ? 1 : _ref$,
	    _ref$2 = _ref[1],
	    y = _ref$2 === undefined ? x : _ref$2;
	//console.log(x,y);//2,2

	//对象的解构赋值

	//为什么let {a}={a:1};就会报错？因为变量的声明和赋值是一体的
	//上面的==let a ;let {a}={a:1}; 重复声明就会报错
	//因为var允许重复声明，所以可以

	var _ee$ss = { ee: "aaaa", ss: "bbb" },
	    ee = _ee$ss.ee,
	    ss = _ee$ss.ss;
	//实际上是下面的形式的简写

	var _ee$ss2 = { ee: "aaaa", ss: "bbb" },
	    ee = _ee$ss2.ee,
	    ss = _ee$ss2.ss;
	//console.log(ee,ss);

	function foo(_ref2) {
		var x = _ref2.x,
		    _ref2$y = _ref2.y,
		    y = _ref2$y === undefined ? 5 : _ref2$y;

		console.log(x + "-" + y);
	}
	foo({ x: 1, y: 2 });
	//rest参数，接受函数多余参数，这样就不用arguements对象了，只能是最后一个参数
	var rest = function rest(arr) {
		for (var _len3 = arguments.length, a = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
			a[_key3 - 1] = arguments[_key3];
		}

		console.log(arr);
		console.log(a);
	};
	rest(1, 2, 2, 3);
	//...拓展运算符，rest参数的逆运算，将数组转化成逗号分隔的参数序列
	(_console = console).log.apply(_console, [1, 2, 3, 3]);
	//替代apply方法
	var ff = function ff(x, y, z) {
		console.log(x, y, z);
	};
	ff.apply(undefined, [2, 2, 2]);
	//实现了iterator接口的对象，可以用拓展运算符将其转化成数组

	//箭头函数使用注意点
	//1、函数体内的this对象，就是定义时所在的对象，(箭头函数定义时所在的对象)而不是使用时所在的对象
	//2、不可以当做构造函数，也就是说，不可以使用new命令，否则会抛出一个异常
	//3、不可以使用arguements对象，该对象在函数体内不存在，如果要用，可以用rest参数代替
	//4、不可以使用yield命令，因此箭头函数不能作为Generator函数
	function thiss() {
		var _this3 = this;

		//console.log(this.id);
		setTimeout(function () {
			console.log('this' + _this3.id);
		}, 100);
	}
	thiss.call({ id: 100 });
	var myObj = {
		f1: function f1() {
			console.log(undefined);
		}
	};
	//myObj.f1({id:1});

	function fr() {
		var _this4 = this;

		return function () {
			console.table(_this4);
		};
	}
	fr.call({ id: 2 })();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	//测试变量提升
	console.log(a);
	console.log(b);
	var a = 1;
	var b = 2;
	function Timer() {
	  var _this = this;

	  this.s1 = 0;
	  this.s2 = 0;
	  // 箭头函数
	  setInterval(function () {
	    _this.s1++;
	  }, 1000);
	  //箭头函数中的this指向函数定义时所在的对象
	  //箭头函数没有自己的this，不能用call，bind方法改变其中this的指向
	  //普通函数中this指向函数运行时所在的对象
	  // 普通函数
	  setInterval(function () {
	    console.log(this.s2); //NANthis 指向window对象
	    this.s2++;
	  }, 1000);
	}

	var timer = new Timer();

	setTimeout(function () {
	  return console.log('s1: ', timer.s1);
	}, 3100);
	setTimeout(function () {
	  return console.log('s2: ', timer.s2);
	}, 3100);

/***/ }
/******/ ]);