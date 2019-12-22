<template>
  <div class='navbar'>
    <hamburger class='hamburger-container'/>
    
  </div>
</template>
<script>
import Hamburger from '@/components/hamburger'
export default {
  name:'NavBar',
  components:{
    Hamburger
  },
  data: function() {
    return {

    }
  }
}
</script>
<style lang='scss' scoped>
  .navbar {

    .hamburger-container{
      line-height:46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;
      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }
</style>