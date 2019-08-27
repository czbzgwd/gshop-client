<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
            <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ?'/userInfo':'/login'">
            <span class="header_login_text" v-if="!userInfo._id">
              登录|注册
            </span>
            <span class="header_login_text" v-else>
              <i class="iconfont icon-person"></i>
            </span>

          </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categoryArr.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categoryArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="imgBaseUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>

          </div>
          <!--<div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>-->
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="images/msite_back.svg" alt="加载中" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>
<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop";
  import ShopList from "../../components/ShopList/ShopList";
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')

    },
    computed: {
      ...mapState(['address','categorys','userInfo']),

      //根据categorys一维数组生成一个二维数组,小数组中最大的个数为8
      categoryArr(){
        const {categorys} = this
        const arr = []//空的二维数组
        let minArr = []
        categorys.forEach(c =>{
          if(minArr.length === 8){
            minArr = []
          }
          if(minArr.length === 0){
            //console.log(minArr.length)//0
           // console.log(minArr)
            /*0: {…}
            1: {…}
            2: {…}
            3: {…}
            4: {…}
            5: {…}
            6: {…}
            7: {…}*/
            arr.push(minArr)
          }
          minArr.push(c)
          //这种方式仅适用于categorys中元素的个数是8的倍数的情况
          /*minArr.push(c)
          if(minArr.length === 8){
            arr.push(minArr)
            minArr = []
          }*/
        })
       // console.log(arr)
        return arr
      }

    },
    watch:{
      categorys(value){
       //界面更新就立即创建Swiper对象.此条语句要写在数据更新之后
        this.$nextTick(() =>{
          //创建一个Swiper对象,实现轮播
          new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })

      }
    },
    components: {
      HeaderTop,
      ShopList
    }
  }
</script>
<style>

</style>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774

    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff

      .shop_header
        padding 10px 10px 0

        .shop_icon
          margin-left 5px
          color #999

        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
