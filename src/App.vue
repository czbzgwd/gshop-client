<template>
  <div id="app">
    <FooterGuide></FooterGuide>
    <router-view></router-view>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default{
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
