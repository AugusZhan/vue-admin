<template>
  <div class="app-wrapper" :class='classObj'>
    <side-bar class="sidebar-container"/>
    <div class='main-container'>
      <div class='fixed-header'>
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
  computed:{
    sidebar(){
      return this.$store.state.app.sidebar
    },
    classObj(){
      return {
        hideSidebar: this.sidebar.isOpen,
        openSidebar: !this.sidebar.isOpen
      }
    }
  },
  methods:{

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
}

.hideSidebar .fixed-header {
   width: calc(100% - 54px);
}
</style>