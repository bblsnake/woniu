let obj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc',
  [Symbol('d')]: 'ddd'  //Symbol不能被枚举
}
Object.defineProperty(obj, 'e', {value: 'eee', enumerable: true})
console.log(Object.keys(obj));  //[ 'a', 'b', 'c' ]
// for (let n in obj) {
//   console.log(n)  //a b c
// }