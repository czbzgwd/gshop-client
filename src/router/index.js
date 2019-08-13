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
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export  default new VueRouter ({
  routes:[
    {
      path:'/',
      redirect:'/msite',
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Login',
      component:Login,
     /* meta默认为空
     meta:{
        showFooter:false
      }*/
    }
  ]
})