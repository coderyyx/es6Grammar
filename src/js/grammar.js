//es6函数传默认参数
function getY(x,y="yang"){

	return x+"-"+y;
}
// getY(1)
document.write(getY(1,undefined));

//rest参数，用来获取函数多余的参数,items中存储一个数组...items只是一种写法
function rests(a,...items){
	
	console.log(items)

}
rests(1,2,3,4)

//拓展运算符，把数组转化为参数列...[1,2,3]
//
//、、箭头函数
const f=n=> n+2;
console.log(f(2))

const f1=(x,...y)=> {return [x,y];}
console.log(f1(1,2,3))

//箭头函数没有自己的this，他的this是指外部代码块的this
function ClearThis(){
	this.a='yyyy';
	setInterval(()=>{console.log(this.a)})
}
// var c=new ClearThis();

function calls(){
	return ()=>{console.log(this.id)}
}
calls.call({id:2})()

function getN(){
	const index=1;
	var arr=[];
	//let 定义局部变量，变量不可提升，出了for循环就undefined
	for(let i=1;i<10;i++){
		arr[i]=function(){
			console.log(i)
		};
		arr[i]();
	}
	arr[6]()
	console.log('const-'+index);
	// console.log('let-'+i);//not defined
}
getN()

// console.log(ls)
// console.log(vs)
// console.log(cs)
// let ls=2;
console.log(typeof vs)//undefined

// vs编译后变成了var定义的？、
let vs=1;
// const cs=3;
// let const 块级作用域 而var不受块级作用域限制
//let有变量提升
//const 也有变量提升
{
	console.log('cs'+cs)
	let ls=2;
	const cs=3;
	var ss=4;
}
// console.log(ss)
// console.log(cs)
// console.log(ls)
// 求数组交集
const getArr=(arr1,arr2)=>{
	const arr=[];
	for(let i=0;i<arr1.length;i++){
		for(let j=0;j<arr2.length;j++){
			if(arr1[i]==arr2[j]){
				arr.push(arr1[i]);
			}		
		}
	}
	console.log(arr.sort());
	console.log(arr1.sort());
	console.log(arr.sort(function(a,b){
		return a-b>0?-1:1;
	}))
	return arr.sort().toString()==arr1.sort().toString()?true:false;
	
}
//console.log(getArr([1,6,3],[1,6,3,4]));
//变量的解构赋值
var [a,b,c]=[1,2,3];
console.log('---'+a,b,c);

//解构赋值允许指定默认值
let [x=1,y=x]=[2];
console.log(x,y);//2,2

//对象的解构赋值

//为什么let {a}={a:1};就会报错？因为变量的声明和赋值是一体的
//上面的==let a ;let {a}={a:1}; 重复声明就会报错
//因为var允许重复声明，所以可以
var {ee,ss}={ee:"aaaa",ss:"bbb"};
//实际上是下面的形式的简写
var {ee:ee,ss:ss}={ee:"aaaa",ss:"bbb"};
console.log(ee,ss);