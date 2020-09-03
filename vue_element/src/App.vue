<template>
  <div id="app">
    <button @click="fn3">开始</button>
    <button @click="qx">取消</button>
    <el-menu :default-active="activeIndex">
      <el-menu-item index="1">处理中心</el-menu-item>
       <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>

// var CancelToken = this.axios.CancelToken;
// var source = CancelToken.source();
export default {
  name: 'app',
  data(){
    return{
      activeIndex:'1',
      source:this.axios.CancelToken.source()
    }
  },
  components: {
  },
  methods:{
    qx(){
      this.source.cancel();
    },
    fn3(){
      this.axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php',{
        cancelToken:this.source.token
      })
      .then(data=>{
        console.log(data)
      })
    }
  },
  mounted(){
    let that = this;
    function fn1(){
      return that.axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
    }
   
   function fn2(){
     return that.axios.get('http://localhost:5000/list',{params:{page:2}})
   }

    // post请求
   


    function fn4(){
      return that.axios('http://localhost:5000/product',{
        method:'post',
        headers:{
          Accept: "application/json, text/plain, */*",
          'Content-Type': "application/x-www-form-urlencoded"
        },
        data:"id=2309435"
      })
    }

    // function t(r1,r2,r3,r4){
    //   console.log(r1,r2,r3,r4)
    // }
    // 并发
    // that.axios.all([fn1(),fn2(),fn3(),fn4()])
    // // .then(data=>{
    // //   console.log(data)
    // //   t.apply(null,data)
    // // })
    // .then(that.axios.spread((...data)=>{
    //   console.log(...data)
    // }))


    }
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
