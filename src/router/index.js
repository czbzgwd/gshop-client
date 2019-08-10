/**
 * Created by Administrator on 2019/8/10.
 */
import Vue from 'vue'
import VueRouter from 'vue-Router'

/*引入组件*/
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

Vue.use(VueRouter)

export  default new VueRouter ({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/search',
      component:Search,
    },
    {
      path:'/order',
      component:Order,
    },
    {
      path:'/profile',
      component:Profile,
    }
  ]
})