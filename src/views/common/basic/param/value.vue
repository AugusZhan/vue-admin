<template>
  <div id="container">
    <el-table :data="paramValueList" stripe border @selection-change='selectChange'>
      <el-table-column type="selection" align="center"/>
      <el-table-column type="index" :label="$t('common.label.sequence')" align="center"/>
      <el-table-column :label="$t('common.param.value')" align="center" prop="paramValue">
        <template slot-scope="scope" v-if='isEditor&&selections.inculdes(scope.row)'>
          <el-input v-model="row.paramValue"/>
        </template>
      </el-table-column>
      <el-table-column :label="$t('common.param.showValue')" align="center" prop="showValue"/>
      <el-table-column :label="$t('common.label.description')" align="center" prop="description"/>
    </el-table>
    <el-row :gutter="12">
      <el-col :span="1" :offset="19">
        <el-button type='primary' @click="operateHandler('ADD')">{{$t("common.btn.add")}}</el-button>
      </el-col>
      <el-col :span="1">
        <el-button type='primary' @click="operateHandler('EDITOR')">{{$t("common.btn.editor")}}</el-button>
      </el-col>
      <el-col :span="1">
        <el-button type='primary' @click="operateHandler('DELETE')">{{$t("common.btn.remove")}}</el-button>
      </el-col>
      <el-col :span="1">
        <el-button type='primary' @click="operateHandler('SAVE')">{{$t("common.btn.save")}}</el-button>
      </el-col>
      <el-col :span="1">
        <el-button type='primary' @click="operateHandler('IMPORT')">{{$t("common.btn.import")}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'ParamList',
  data:function(){
    return {
      paramValueList:[{paramValue:'tets'},{}],
      selections:[],
      isEditor:false,
      condition:{
        basParamValue:{}
      }
    }
  },
  methods:{
    operateHandler(actionType){
      if("ADD"==actionType){
        this.paramValueList.unshift({})
      }else if("EDITOR"==actionType){
        if(!this.selections.length){
          this.$box.infoBox(this.$t('notice.info.selectElement'))
        }else{

        }
      }
    },
    selectChange(selections){
      if(Array.isArray(selections) && selections.length){
        this.selections = selections
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-table{
    margin-bottom:12px
  }
  .el-pagination{
    margin-top:12px;
    float:right
  }
</style>