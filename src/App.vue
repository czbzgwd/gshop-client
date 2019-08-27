<template>
  <div id="app">
    <router-view></router-view>
    <!--$route代表当前路由-->
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqFoodCategorys} from './api'
  import {mapActions} from 'vuex'
  export default{

   mounted(){
    // this.$store.dispatch('getAddress')
     reqFoodCategorys().then(response =>{
      // console.log(response.data)
     }).catch()
     this.getAddress()
     this.getUserInfo()
   },
    methods:{
      ...mapActions(['getAddress','getUserInfo'])
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative

</style>
