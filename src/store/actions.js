/*通过mutations间接更新state的多个方法对象*/
import {reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'
import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'

export default {
//异步获取地址
  async getAddress({commit, state}) {
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude//注意经纬度的顺序
    const result = await reqAddress(geohash)
    //提交一个mutation
    if(result.code === 0){
      /*
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})*/
      commit(RECEIVE_ADDRESS, {address: result.data})
    }
  },
//异步获取分类列表
  async getCategorys({commit}){
    const result = await reqFoodCategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShops(longitude,latitude)
    if(result.code === 0){
      commit(RECEIVE_SHOPS,{shops:result.data})
    }
  },
  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code == 0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  //请求退出
  async logout({commit}){
    const result = await reqLogout()
    if(result.code == 0){
      commit(RESET_USER_INFO)
    }
  },
  //异步获取商品信息
  async getShopGoods({commit},callback){
    const result = await reqShopGoods()
    if(result.code == 0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      //数据更新了，通知组件 54_尚硅谷_Vue项目_使用better-scroll实现回弹滑动16'50"
      callback && callback() //添加callback &&是因为callback可能存在不传的情况
    }
  },
  //异步获取商家评价信息
  async getShopRatings({commit}){
    const result = await reqShopRatings()
    if(result.code == 0){
      const ratings = result.ratings
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  //异步获取商品信息
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code == 0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  // 同步更新food中的count值
  updateFoodCount({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  }
}
