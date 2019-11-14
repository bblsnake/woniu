import Vue from 'vue'

function Avue ({methods}) {
  for (let key in methods) {
    this[key] = methods[key];
  }
}

Avue.prototype.$alert = () => {
  document.write('我是个赝品');
}
Object.defineProperty(Vue.prototype, '$alert', {writable: true, value() {
    console.log('我是干货');
  }
})
export default Avue