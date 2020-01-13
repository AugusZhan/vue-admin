<template>
  <div id="container">
    <el-form :model="copyDetail" label-position="right" label-width="80px">
      <el-form-item :label="$t('common.param.name')">
        <el-input v-model="copyDetail.paramName" autofocus/>
      </el-form-item>
      <el-form-item :label="$t('common.label.category')">
        <el-input v-model="copyDetail.category" :disabled="'UPDATE'==actionType"/>
      </el-form-item>
      <el-form-item :label="$t('common.param.prop')">
        <el-input v-model="copyDetail.displayProp"/>
      </el-form-item>
      <el-form-item :label="$t('common.label.description')">
        <el-input v-model="copyDetail.description"/>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col :sm='3' :md='2' :offset="2">
        <el-button type='primary' @click="operateHandler('RESET')">{{$t("common.btn.reset")}}</el-button>
      </el-col>
      <el-col :sm='3' :md='2'>
        <el-button type='primary' @click="operateHandler(actionType)">{{$t("common.btn.save")}}</el-button>
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
      console.log(this.actionType)
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