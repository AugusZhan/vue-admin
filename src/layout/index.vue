<template>
  <div class="app-wrapper">
    <div class="drawer-bg" @click="handleClickOutSide"/>
    <side-bar class="sidebar-container"/>
    <div class='main-container'>
      <div class="header-container">
        <nav-bar/>
      </div>
      <app-main/>
    </div>
  </div>
</template>
<script>
import SideBar from './sidebar/index'
import AppMain from './appmain'
import NavBar from './navbar'
export default {
  name:'Layout',
  components:{
    SideBar,
    AppMain,
    NavBar
  },
  data: function () {
    return {
      
    }
  },
  methods:{
    handleClickOutSide(){

    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables";
@import "~@/styles/minix";

.app-wrapper {
  @include clearfix;
  position: relative;
  height:100%;
  width:100%;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
    background-color: red
}
</style>