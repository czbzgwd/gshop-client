<template>
  <!--<div class="star star-24" :class="'star-' + size">-->
  <div class="star star-24" :class="'star-${size}'">
    <span class="star-item " v-for="(sc,index) in scoreClasses" :class="sc" :key = "index"></span>
    <!--<span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>-->
  </div>
</template>
<script>
  //类名常量
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
  export default {
    props:{
      score:Number,
      size:Number
    },
    computed:{
      scoreClasses(){
        const {score} = this
        const scs = []
        /*
        * 分析:一共是5颗星,即scs的长度为5.小数部分大于等于0.5就会出现半星
        * 如:评分4.4:4个CLASS_ON + 0个CLASS_HALF + 1个CLASS_OFF
        * 评分3.6:3个CLASS_ON + 1个CLASS_HALF + 1个CLASS_OFF
        * */
       //向scs中添加n个(n>=0) CLASS_ON
        const scoreInt = Math.floor(score)//scoreInt意义是取score的整数部分
        for(let i = 0;i<scoreInt;i++){
          scs.push(CLASS_ON)
        }
       //向scs中添加0/1 CLASS_HALF
        if(score*10 - scoreInt*10 >= 5){
          scs.push(CLASS_HALF)
        }
       //向scs中添加n个(n>=0) CLASS_OFF
        while(scs.length < 5){//这段代码比较巧妙
          scs.push(CLASS_OFF)
        }
        return scs
      }
    }

  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
