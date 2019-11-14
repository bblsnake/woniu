<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld />
    <!-- <router-view/> -->
    <ElButton type="primary">确定</ElButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Avue from '@/Avue.js'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    console.log('2');

    this.$message('请确定支付，有风险')
    // const av = new Avue({
    //   methods: {
    //     say () {
    //       this.$alert();
    //     }
    //   },
    // })
    // av.say();
    console.log(this.$alert());
  },
  created() {
    console.log('1');
    class SingleDog {
      show () {
        console.log('我是一个单例对象');
      }
      static getInstance() {
        if (!SingleDog.instance) {
          SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance
      }
    }
    // 实例化两次
    const s1 = SingleDog.getInstance();
    const s2 = SingleDog.getInstance();
    console.log(s1 == s2);
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
