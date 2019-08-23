
// // function speak(){
// //     var greeting = "Hello,I'm"+identify.call(this)
// //     console.log(greeting);
// // }
// var me = {
//     name:'wn',
// }
// var you = {
//     name:'mg'
// }
// // console.log(identify.call(me));
// // console.log(identify.call(you));

// // console.log(speak.call(me));
// // console.log(speak.call(you));
// function identify(context){
//     return context.name.toUpperCase();
// }
// console.log(identify(me));
// //this提供一种更优雅的方式来隐式“传递”一个对象
// function identify(){
//     return this.name.toUpperCase()//小写转成大写
// }
// console.log(identify.call(me));




// function speak(){
//     var greeting = "Hello,I'm"+identify.call(context)
//     console.log(greeting);
// }


// //-------------------------------
// function foo(num){
//     console.log("foo"+num);
//     data.count++;
// }
// var data ={
//     count:0
// }
// for(var i=0;i<10;i++){
//     if(i>5){
//         foo(i);
//     }
// }
// console.log(data.count);



// ---------------------------------
// function foo(){
//     var a=2
//     bar()
// }

// function bar(){
//     console.log(this.a)
// }
// foo()
//不能使用this来引用一个词法作用域内部的东西

// -------------------------------------
// function baz(){
//     //当前调用栈是baz
//     //因此，当前调用位置是全局作用域
//     console.log('baz')
//     bar()
// }
// function bar(){
//     //当前调用栈是baz ->bar
//     //因此，当前调用位置是baz
//     console.log('bar')
//     foo()
// }
// function foo(){
//     console.log('foo')
// }
// baz()



//---------------------------------------
// function foo(){
//     "use strict"
//     console.log(this.a)
// }
// var a=2
// foo()

//-----------------------------------
function foo(){
    console.log(this.a)
}
var obj1 ={
    a:2,
    obj2:obj2
}
var obj2 ={
    a:42,
    foo:foo
}
obj1.obj2.foo()
