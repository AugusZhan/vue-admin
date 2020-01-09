<template>
  <div id="param-container">
    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane :label="$t('basic.paramList')" name="paramList">
        <el-row :gutter="12">
          <el-col :sm='3' :md='4'>
            <el-input v-model="condition.basParam.paramName" :placeholder="$t('input.userParam')"/>
          </el-col>
          <el-col :sm='4' :md='6'>
            <el-button type='primary' @click="operateHandler('INSERT')">{{$t("btn.add")}}</el-button>
            <el-button type='primary' @click="operateHandler()">{{$t("btn.query")}}</el-button>
          </el-col>
        </el-row>
        <el-table :data="paramList" stripe border>
          <el-table-column type="index" :label="$t('label.sequence')" align="center"/>
          <el-table-column :label="$t('label.detail')" align="center">
            <template slot-scope="scope">
              <el-button type='text' @click="operateHandler('DETAIL',scope.row)">{{$t('btn.watch')}}</el-button>
            </template>
          </el-table-column>
          <el-table-column :label="$t('basic.paramName')" align="center" prop="paramName"/>
          <el-table-column :label="$t('label.description')" align="center" prop="description"/>
          <el-table-column :label="$t('label.operator')" align="center">
            <template slot-scope="scope">
              <el-button type='primary' @click="handlerOperator('editor',scope.row)">{{$t('btn.editor')}}</el-button>
              <el-button type='danger' @click="handlerOperator('remove',scope.row)">{{$t('btn.remove')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination :current-page="condition.pageNo" 
                       :page-size="condition.pageSize" 
                       :page-sizes="pageSizes" 
                       layout="sizes,prev,pager,next,jumper"
                       :total="total"
                       @current-change="pageChange"
                       @size-change="sizeChange">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane :label="$t('basic.paramDetail')" name="paramDetail" :disabled="activeTab=='paramList'" :lazy='true'>
        <detail :detail-data='detailData'></detail>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { operateBasParam,getBasParamByPage } from '@/api/basic/param'
import service from '@/utils/request.js'
import Detail from './detail'
export default {
  name:'UserParam',
  components:{
    Detail
  },
  data:function(){
    return{
      activeTab:'paramList',
      paramList:[],
      paramValueList:[],
      condition:{
        basParam:{
          paramName:''
        },
        actionType:'',
        pageNo:1,
        pageSize:8
      },
      detailData:{},
      total:0,
      pageSizes:[8,10,12,15],
    }
  },
  created(){
    this.operateHandler()
  },
  watch:{
    'condition.basParam.paramName':function(val){
      if(!val){
        this.operateHandler()
      }
    }
  },
  methods:{
    operateHandler(actionType,row){
      if("DETAIL"==actionType){
        this.activeTab = 'paramDetail'
        this.detailData = row
      }else{
        if("INSERT"==actionType || "UPDATE"==actionType || "DELETE"==actionType){
          this.condition.actionType = actionType
          this.condition.basParam = row
        }else {
          getBasParamByPage(this.condition).then(res=>{
            this.total = res.total
            this.paramList = res.rows
          }).catch(res=>{
            console.log(res)
          })
        }
      }
    },
    pageChange(val){
      this.condition.pageNo = val
    },
    sizeChange(val){
      this.condition.pageSize = val
    },
    indexHandler(index){
      return (this.condition.pageNo - 1)*this.condition.pageSize + index + 1
    }
  }
}
</script>
<style lang="scss" scoped>
    .el-input{
        width: 100%
    }
    .el-table{
      margin-top:12px
    }
    .el-pagination{
      margin-top:12px;
      float:right
    }
</style>