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
  export default{
    /*async mounted(){
        const result = await reqFoodCategorys()
          console.log(result)

    },*/
   /*
   mounted(){
       reqFoodCategorys().then(response =>{
         console.log(response.data)
       })
   },*/
   mounted(){
     this.$store.dispatch('getAddress')
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
