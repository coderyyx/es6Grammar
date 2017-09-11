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
//console.log(x,y);//2,2

//对象的解构赋值

//为什么let {a}={a:1};就会报错？因为变量的声明和赋值是一体的
//上面的==let a ;let {a}={a:1}; 重复声明就会报错
//因为var允许重复声明，所以可以
var {ee,ss}={ee:"aaaa",ss:"bbb"};
//实际上是下面的形式的简写
var {ee:ee,ss:ss}={ee:"aaaa",ss:"bbb"};
//console.log(ee,ss);
function foo({x,y=5}){
    console.log(x+"-"+y);
}
foo({x:1,y:2});
//rest参数，接受函数多余参数，这样就不用arguements对象了，只能是最后一个参数
var rest=(arr,...a)=>{
    console.log(arr);
    console.log(a);
}
rest(1,2,2,3);
//...拓展运算符，rest参数的逆运算，将数组转化成逗号分隔的参数序列
console.log(...[1,2,3,3]);
//替代apply方法
var ff=(x,y,z)=>{
    console.log(x,y,z);
}
ff(...[2,2,2]);
//实现了iterator接口的对象，可以用拓展运算符将其转化成数组

//箭头函数使用注意点
//1、函数体内的this对象，就是定义时所在的对象，(箭头函数、、定义时所在的对象)而不是使用时所在的对象
//2、不可以当做构造函数，也就是说，不可以使用new命令，否则会抛出一个异常
//3、不可以使用arguements对象，该对象在函数体内不存在，如果要用，可以用rest参数代替
//4、不可以使用yield命令，因此箭头函数不能作为Generator函数
function thiss(){
    //console.log(this.id);
    setTimeout(()=>{
        console.log('this'+this.id);
    },100)
}
thiss.call({id:100});
var myObj={
    f1:()=>{
        console.log(this);
    }
}
//myObj.f1({id:1});

function fr(){
    return ()=>{
        console.table(this);
    }
}
fr.call({id:2})();

function sortArr(params) {
	console.log(params?params:"");
}
/*
	交换排序

*/
function sort(a){
	let length=a.length;
	for(var i=0; i<length-1; i++){
		for(var j=i+1; j<length; j++){
			if(a[i]>a[j]){
			var temp=a[i];
			a[i]=a[j];
			a[j]=temp;
			}
		}
		console.log(a);
  }

	return a;
}

/*
	插入排序
*/
function sort1 (unsorted)
{
	for (var i = 1; i < unsorted.Length; i++)
		{
			if (unsorted[i - 1] > unsorted[i])
			{
				var temp = unsorted[i];
				var j = i;
				while (j > 0 && unsorted[j - 1] > temp)
				{
					unsorted[j] = unsorted[j - 1];
					j--;
				}
				unsorted[j] = temp;
			}
		}
}

sort([1,4,3,2,5])