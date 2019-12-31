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
    meta:{title:'dashboard',icon:'dashboard'},
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
    meta:{title:'safeSetting',icon:''},
    children:[
      {
        path:'/user/management',
        component: ()=>import('@/views/user/management/index'),
        meta:{title:'userManagement',icon:'user'}
      },
      {
        path:'/user/group',
        component: ()=>import('@/views/user/authority/index'),
        meta:{title:'userGroup',icon:'user'} 
      },
    ]
  },
  {
    path:'/basic',
    component: Layout,
    redirect: '/user/param',
    meta:{title:'basicSetting',icon:''},
    children:[
      {
        path:'/user/param',
        component: ()=>import('@/views/basic/user/param'),
        meta:{title:'userParam',icon:'user'}
      },
      {
        path:'/user/value',
        component: ()=>import('@/views/basic/user/value'),
        meta:{title:'userParamValue',icon:'user'} 
      },
      {
        path:'/sys/param',
        component: ()=>import('@/views/basic/sys/param'),
        meta:{title:'sysParam',icon:'user'}
      },
      {
        path:'/sys/value',
        component: ()=>import('@/views/basic/sys/value'),
        meta:{title:'sysParamValue',icon:'user'} 
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


