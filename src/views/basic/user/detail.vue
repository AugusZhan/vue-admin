<template>
  <div id="container">
    <el-row :gutter="12">
      <el-col :span="2">
        <span>{{$t('basic.paramName')}}</span>
      </el-col>
      <el-col :span="18">
        <el-input v-model="copyDetail.paramName" autofocus/><br>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="2">
        <span>{{$t('basic.displayProp')}}</span>
      </el-col>
      <el-col :span="18">
        <el-input v-model="copyDetail.displayProp"/><br>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="2">
        <span>{{$t('label.description')}}</span>
      </el-col>
      <el-col :span="18">
        <el-input type="textarea" v-model="copyDetail.description"/><br>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm='4' :md='6'>
        <el-button type='primary' @click="operateHandler('RESET')">{{$t("btn.reset")}}</el-button>
        <el-button type='primary' @click="operateHandler(actionType)">{{$t("btn.save")}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { operateBasParam } from '@/api/basic/param'
export default {
  name:'Detail',
  props:{
    detailData:{
      type:Object,
      default:()=>{}
    },
    actionType:{
      type:String,
      default:()=>''
    }
  },
  data:function(){
    return{
      copyDetail:{}
    }
  },
  created(){
    this.$nextTick().then(()=>{
      this.operateHandler('RESET')
    })
  },
  methods:{
    operateHandler(actionType){
      if("RESET" == actionType){
        this.copyDetail = Object.assign({},this.detailData)
      }else{
        let condition = {
          basParam:this.copyDetail,
          actionType:actionType
        }
        operateBasParam(condition).then(()=>{
          this.$emit('detailHandler',this.actionType,this.copyDetail)
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-input{
    width: 20%;
    display: inline-block
  }
  .el-row{
    margin-top:12px
  }
</style>