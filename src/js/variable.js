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

// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);

//函数包装类型添加method =》给函数原型添加方法
Function.prototype.method=function(type,func){
    if(!this.prototype[type])
      this.prototype[type]=func;
    return this;
}

//Array Number Boolean 原型上的__proto__指向Object.prototype
Object.prototype.method=function(type,func){
    if(!this.prototype[type])
      this.prototype[type]=func;
    return this;
}


Array.method('yyx',function(){
  console.log(this);
})