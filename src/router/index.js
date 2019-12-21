import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

const Routes = [
  {
    path:'/login',
    component:()=>import('@/views/other/login'),
    hidden:true
  },
  {
    path:'/404',
    component:() => import('@/views/other/404'),
    hidden:true
  },
  {
    path:'/',
    component: Layout,
    redirect: '/dashboard',
    meta:{title:'Dashboard',icon:'dashboard'},
    children:[
      {
        path:'dashboard',
        name:'Dashboard',
        component: ()=>import('@/views/dashboard/index')    
      }
    ]
  },
  {
    path:'/user',
    component: Layout,
    redirect: '/user/management',
    meta:{title:'UserSetting',icon:''},
    children:[
      {
        path:'user/management',
        name:'UserManagement',
        component: ()=>import('@/views/user/management/index'),
        meta:{title:'UserManagement',icon:'user'}
      },
      {
        path:'user/authority',
        name:'UserAuthority',
        component: ()=>import('@/views/user/authority/index'),
        meta:{title:'UserAuthority',icon:'user'}
      }
    ]
  }
]

const router = new Router({
  routes: Routes
})

export default router


