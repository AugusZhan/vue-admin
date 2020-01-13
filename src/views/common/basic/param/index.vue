<template>
  <div id="param-container">
    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane :label="$t('common.param.list')" name="paramList">
        <el-row :gutter="12">
          <el-col :sm='3' :md='4'>
            <el-input v-model="paramName" :placeholder="$t('common.input.paramName')"/>
          </el-col>
          <el-col :sm='3' :md='4'>
            <el-input v-model="category" :placeholder="$t('common.input.category')"/>
          </el-col>
          <el-col :sm='4' :md='6'>
            <el-button type='primary' @click="operateHandler('INSERT')">{{$t("common.btn.add")}}</el-button>
            <el-button type='primary' @click="operateHandler('SELECT')">{{$t("common.btn.query")}}</el-button>
          </el-col>
        </el-row>
        <el-table :data="paramList" stripe border>
          <el-table-column type="index" :label="$t('common.label.sequence')" align="center" :index="indexHandler"/>
          <el-table-column :label="$t('common.param.detail')" align="center">
            <template slot-scope="scope">
              <el-button type='text' @click="operateHandler('VIEW',scope.row)">{{$t('common.btn.view')}}</el-button>
            </template>
          </el-table-column>
          <el-table-column :label="$t('common.param.name')" align="center" prop="paramName"/>
          <el-table-column :label="$t('common.label.description')" align="center" prop="description"/>
          <el-table-column :label="$t('common.label.operate')" align="center">
            <template slot-scope="scope">
              <el-button type='primary' @click="operateHandler('UPDATE',scope.row)">{{$t('common.btn.editor')}}</el-button>
              <el-button type='danger' @click="operateHandler('DELETE',scope.row)">{{$t('common.btn.remove')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination :current-page="condition.pageNo" 
                       :page-size="condition.pageSize" 
                       :page-sizes="pageSizes" 
                       layout="total,sizes,prev,pager,next,jumper"
                       :total="total"
                       @current-change="pageChange"
                       @size-change="sizeChange">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane :label="$t('common.param.detail')" name="paramDetail" :disabled="activeTab!='paramDetail'" :lazy='true'>
        <detail :detail-data='detailData' :actionType="condition.actionType" @detailHandler='detailHandler' :key="detailData.objectId"/>
      </el-tab-pane>
      <el-tab-pane :label="$t('common.param.valueList')" name="paramValueList" :disabled="activeTab!='paramValueList'" :lazy='true'>
        <param-list/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { operateBasParam,getBasParamByPage } from '@/api/basic/param'
import service from '@/utils/request.js'
import Detail from './detail'
import ParamList from './value'
export default {
  name:'UserParam',
  components:{
    Detail,
    ParamList
  },
  data:function(){
    return{
      activeTab:'paramList',
      paramList:[],
      paramValueList:[],
      paramName:'',
      category:'',
      condition:{
        basParam:{},
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
    this.$nextTick().then(()=>{
      this.operateHandler('SELECT')
    })   
  },
  watch:{
    'condition.basParam.paramName':function(val){
      if(!val){
        this.operateHandler('SELECT')
      }
    }
  },
  methods:{
    calCondition(actionType,row){
      this.condition.actionType = actionType
      if(actionType=="DELETE"){
        this.condition.basParam = {objectId:row.objectId}
      }else if(actionType=="SELECT"){
        let basParam = {
          paramName:this.paramName,
          category:this.category
        }
        this.condition.basParam = basParam 
      }else{
        this.activeTab = 'paramDetail'
        this.detailData = "UPDATE"==actionType ? row : {}
      }
    },
    operateHandler(actionType,row){
      if("VIEW"==actionType){
        this.activeTab = 'paramValueList'
      }else{
        this.calCondition(actionType,row)
        if(actionType=="DELETE"){
          console.log(this.condition)
          operateBasParam(this.condition).then(()=>{
            this.calCondition("SELECT")
            getBasParamByPage(this.condition).then(res=>{
              this.total = res.total
              this.paramList = res.rows
            })
          })
        }else{
          getBasParamByPage(this.condition).then(res=>{
              this.total = res.total
              this.paramList = res.rows
          })
        }
      }
      
    },
    detailHandler(actionType,copyDetail){
      this.detailData = copyDetail
      this.operateHandler('SELECT')
    },
    pageChange(val){
      this.condition.pageNo = val
      this.operateHandler('SELECT')
    },
    sizeChange(val){
      this.condition.pageSize = val
      this.operateHandler('SELECT')
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