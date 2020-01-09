<template>
  <div class='page-container'>
    <el-row :gutter="12">
      <el-col :sm='3' :md='4'>
        <el-input type='text' v-model="query.userName" :placeholder="$t('place.userName')"></el-input>
      </el-col>
      <el-col :sm='3' :md='4'>
        <el-input type='text' v-model="query.userGroup" :placeholder="$t('place.userGroup')"></el-input>
      </el-col>
      <el-col :sm='6' :md='8'>
        <el-button type='primary'>{{$t("btn.add")}}</el-button>
        <el-button type='primary'>{{$t("btn.query")}}</el-button>
      </el-col>
    </el-row>
    <el-table :data="userList" stripe border>
      <el-table-column type="index" :label="$t('label.sequence')" align="center"/>
      <el-table-column :label="$t('label.detail')" align="center">
        <template slot-scope="scope">
          <el-button type='text' @click="handlerOperator('watch',scope.row)">{{$t('btn.watch')}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="userCode" :label="$t('user.code')" align="center"/>
      <el-table-column prop="userName" :label="$t('user.name')" align="center"/>
      <el-table-column prop="comment" :label="$t('user.comment')" align="center"/>
      <el-table-column :label="$t('label.operator')" align="center">
        <template slot-scope="scope">
          <el-button type='primary' @click="handlerOperator('editor',scope.row)">{{$t('btn.editor')}}</el-button>
          <el-button type='danger' @click="handlerOperator('remove',scope.row)">{{$t('btn.remove')}}</el-button>
        </template>
      </el-table-column>
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
      userList:[{},{}]
    }
  },
  methods:{
    handlerOperator(action,row){

    }
  }
}
</script>
<style lang="scss" scoped>
  .el-input{
    width:100%
  }
  .el-table{
    margin-top:12px
  }
</style>