<template>
  <div>
    <el-submenu v-if="!isOnlyHasOneChild(item.children) && !item.hidden" :index="item.path">
      <template slot='title'>
        <i class="el-icon-location"></i>
        <span slot='title'>{{item.meta.title}}</span>
      </template>
      <side-Item v-for="subItem in item.children" :key="subItem.path" :item='subItem'/>
    </el-submenu>
    <el-menu-item v-else-if='isOnlyHasOneChild(item.children) && !item.hidden' :index="item.path">
      <i class="el-icon-location"></i>
      <span slot='title'>{{item.meta.title}}</span>
    </el-menu-item>
  </div>
</template>
<script>
export default {
  name:'SideItem',
  props:{
    item:{
      type:Object,
      default:{}
    }
  },
  data:function(){
    return{

    }
  },
  methods:{
    isOnlyHasOneChild(childs) {
      if(childs && childs.length === 1){
        return true
      }else {
        return false
      }
    }
  }
}
</script>