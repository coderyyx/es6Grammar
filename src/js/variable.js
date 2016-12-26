//测试变量提升
console.log(a)
console.log(b)
let a=1;
var b=2;
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => {this.s1++;}, 1000);
  //箭头函数中的this指向函数定义时所在的对象
  //箭头函数没有自己的this，不能用call，bind方法改变其中this的指向
  //普通函数中this指向函数运行时所在的对象
  // 普通函数
  setInterval(function () {
    console.log(this.s2)//NANthis 指向window对象
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);