<template>
  <div id="container">
    <el-row :gutter="12">
      <el-col :span="2">
        <span>{{$t('basic.paramName')}}</span>
      </el-col>
      <el-col :span="18">
        <el-input v-model="copyDatail.paramName" autofocus/><br>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="2">
        <span>{{$t('basic.displayProp')}}</span>
      </el-col>
      <el-col :span="18">
        <el-input v-model="copyDatail.displayProp"/><br>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="2">
        <span>{{$t('label.description')}}</span>
      </el-col>
      <el-col :span="18">
        <el-input type="textarea" v-model="copyDatail.description"/><br>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm='4' :md='6'>
        <el-button type='primary' @click="operateHandler('RESET')">{{$t("btn.reset")}}</el-button>
        <el-button type='primary' @click="operateHandler('UPDATE')">{{$t("btn.save")}}</el-button>
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
    }
  },
  data:function(){
    return{
      copyDatail:{}
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
          basParam:this.detailData,
          actionType:actionType
        }
        operateBasParam(condition).then(res=>{
          this.copyDatail = Object.assign({},this.detailData)
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