<template>
  <div class='page-container'>
    <el-row :gutter="0">
      <el-col :sm='6' :md='8'>
        {{$t("user.name")}}<el-input type='text' v-model="query.userName"></el-input>
      </el-col>
      <el-col :sm='6' :md='8'>
        {{$t("user.group")}}<el-input type='text' v-model="query.userName"></el-input>
      </el-col>
      <el-col :sm='12' :md='8'>
        <el-button type='primary'>{{$t("btn.query")}}</el-button>
      </el-col>
    </el-row>
    <el-table :data="userList">
      <el-table-column prop="userCode" :label="$t('user.code')"/>
      <el-table-column prop="userName" :label="$t('user.name')"/>
      <el-table-column prop="userGroup" :label="$t('user.group')"/>
      <el-table-column prop="comment" :label="$t('user.comment')"/>
    </el-table>
  </div>
</template>
<script>
export default {
  name:'USERMANAGEMENT',
  data:function(){
    return{
      query:{
        userName:''
      },
      userList:[]
    }
  },
  methods:{
    // t,
  }
}
</script>
<style lang="scss" scoped>
  .el-input{
    // display: inline-block;
    width:70%
  }
</style>