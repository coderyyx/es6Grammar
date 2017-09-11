//测试变量提升
// console.log(a)
// console.log(b)
// let a=1;
// var b=2;
var Emitters=require('events');
var emitter=new Emitters();
function onchange(data){
	console.log(data);
}
document.getElementById("add").onclick=add;
document.getElementById("emit").onclick=emit;
document.getElementById("remove").onclick=remove;
function add(){
	emitter.addListener('add',onchange);
}
function remove(){
	emitter.removeListener('add',onchange);
}
function emit(){
	emitter.emit("add","yyx")
}
