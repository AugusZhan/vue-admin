<template>
  <div id="container">
    <el-table :data="paramValueList" stripe border>
      <el-table-column type="index" :label="$t('label.sequence')" align="center" :index="indexHandler"/>
      <el-table-column :label="$t('basic.paramValue')" align="center" prop="paramValue"/>
      <el-table-column :label="$t('label.showValue')" align="center" prop="showValue"/>
      <el-table-column :label="$t('label.description')" align="center" prop="description"/>
      <el-table-column :label="$t('label.operator')" align="center">
        <template slot-scope="scope">
          <el-button type='primary' @click="operateHandler('UPDATE',scope.row)">{{$t('btn.editor')}}</el-button>
          <el-button type='danger' @click="operateHandler('DELETE',scope.row)">{{$t('btn.remove')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination  :current-page="condition.pageNo" 
                    :page-size="condition.pageSize" 
                    :page-sizes="pageSizes" 
                    layout="total,sizes,prev,pager,next,jumper"
                    :total="total"
                    @current-change="pageChange"
                    @size-change="sizeChange">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name:'ParamList',
  data:function(){
    return {
      paramValueList:[],
      condition:{
        basParamValue:{},
        pageNo:1,
        pageSize:8,
      },
      total:20,
      pageSizes:[8,10,12,15],
    }
  },
  methods:{
    pageChange(val){
      this.condition.pageNo = val
    },
    sizeChange(val){
      this.condition.pageSize = val
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-table{
    margin-top:12px
  }
  .el-pagination{
    margin-top:12px;
    float:right
  }
</style>