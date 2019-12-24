<template>
  <el-scrollbar wrap-class='scrollbar-wraprer'>
    <el-menu
      :collapse="isCollapse"
      :background-color="menuBg"
      :text-color="menuText"
      :active-text-color="menuActiveText"
      :collapse-transition="false"
      :router="true"
      mode="vertical">
      <side-item v-for="route in routes" :key="route.path" :item="route"/>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import variables from '@/styles/variables.scss'
import SideItem from './components/sideItem'
import { mapGetters } from 'vuex'
export default {
  name:'SideBar',
  components:{
    SideItem
  },
  data:function(){
    return {
      menuBg: variables.menuBg,
      menuText: variables.menuText,
      menuActiveText: variables.menuActiveText
    }
  },
  computed :{
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return this.sidebar.isOpen
    }
  }
}
</script>