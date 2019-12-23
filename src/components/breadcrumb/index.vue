<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item to='/'>Dashboard</el-breadcrumb-item>
    <el-breadcrumb-item v-for='bread in breads' :key='bread.path' :to='bread.path'>{{bread.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name:'BreadCrumb',
  data:function(){
    return {
      breads:null
    }
  },
  watch:{
    $route(){
      this.getBreads()
    }
  },
  created(){
    this.getBreads()
  },
  methods:{
    getBreads(){
      let matches = this.$route.matched
      let isFirst = matches.some(x => x.path.includes("dashboard"))
      this.breads = isFirst ? [] : matches
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-breadcrumb{
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
  }
</style>