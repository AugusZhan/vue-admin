import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

const Routes = [
  {
    path:'/',
    component: Layout,
    redirect: '/dashboard',
    meta:{title:'dashboard',icon:'dashboard'},
    children:[
      {
        path:'dashboard',
        name:'Dashboard',
        component: ()=>import('@/views/common/dashboard')   
      }
    ]
  },
  {
    path:'/security',
    component: Layout,
    redirect: '/security/user',
    meta:{title:'securitySetting',icon:''},
    children:[
      {
        path:'/security/user',
        component: ()=>import('@/views/common/security/user'),
        meta:{title:'userSetting',icon:'user'}
      },
      {
        path:'/user/group',
        component: ()=>import('@/views/common/security/usergroup'),
        meta:{title:'groupSetting',icon:'user'} 
      },
    ]
  },
  {
    path:'/basic',
    component: Layout,
    redirect: '/basic/param',
    meta:{title:'basicSetting',icon:''},
    children:[
      {
        path:'/basic/param',
        component: ()=>import('@/views/common/basic/param'),
        meta:{title:'paramSetting',icon:'user'}
      },
      {
        path:'/basic/rule',
        component: ()=>import('@/views/common/basic/rule'),
        meta:{title:'ruleSetting',icon:'user'}
      }
    ]
  }
]

const router = new Router({
  routes: Routes
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router


