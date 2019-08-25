/*通过mutations间接更新state的多个方法对象*/
import {reqAddress, reqFoodCategorys, reqShops} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS,RECEIVE_USER_INFO} from './mutation-types'

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
  }
}