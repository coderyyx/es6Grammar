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
var c=new ClearThis();

function calls(){
	return ()=>{console.log(this.id)}
}
calls.call({id:2})()