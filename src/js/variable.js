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

// var timer = new Timer();

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

let arr=[1,2,3];

let add = (a,b) => {
  return a+b;
}

Array.method('yyx',function(){
  console.log(this);
})

//实现数组reduce方法
Array.method('reducers',function(f,value){
  
  for (var index = 0; index < this.length; index++) {
    value = f(this[index],value);
  }

  return value;
})


// @test
// console.log(arr.reducers(add,1));

//implements the method of Array slice


//implements the method of Array push
Array.method('y_push',function(){
  let temp = Array.prototype.slice.apply(arguments,[0]);
  return this.concat(temp);
})

// @test
console.log(arr.y_push(4))