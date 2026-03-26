
<template>
<div id = "divLayout" ref="refDivLayout" class = "div_layout"> 
<!--标题层-->

<div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px;">
<label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }}
</label>
<label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width:250px;">
</label>
</div>
<!--查询层-->

<div id = "divQuery" ref = "refDivQuery" class = "div_query"> 
<table id="tabEdit" style="width:900px" class="table table-bordered table-hover table td table-sm">
<tr >
<td class="text-right">
<label id="lblAttributeId_q" name="lblAttributeId_q" class="col-form-label text-right" style="width:90px;">控件属性Id
</label>
</td>
<td class="text-left">
<input  id="txtAttributeId_q" v-model="attributeId_q" class="form-control form-control-sm" style="width:120px;"/>
</td>
<td class="text-right">
<label id="lblControlAttributeName_q" name="lblControlAttributeName_q" class="col-form-label text-right" style="width:90px;">属性名称
</label>
</td>
<td class="text-left">
<input  id="txtControlAttributeName_q" v-model="controlAttributeName_q" class="form-control form-control-sm" style="width:120px;"/>
</td>
</tr>
</table>
</div>
<!--功能区-->

<div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
<ul class="nav">
<li class="nav-item">
<label id="lblge_ControlAttributeList" name="lblge_ControlAttributeList" class="col-form-label text-info" style="width:250px;">属性表列表
</label>
</li>
<li class="nav-item ml-3">
<button  id="btnQuery" name="btnQuery" class="btn btn-outline-info btn-sm text-nowrap" @click="btn_Click('Query', '')">查询</button>
</li>
<li class="nav-item ml-3">
<button  id="btnCreateWithMaxId" name="btnCreateWithMaxId" class="btn btn-outline-info btn-sm text-nowrap" @click="btn_Click('CreateWithMaxId', '')">添加</button>
</li>
<li class="nav-item ml-3">
<button  id="btnUpdate" name="btnUpdate" class="btn btn-outline-info btn-sm text-nowrap" @click="btn_Click('Update', '')">修改</button>
</li>
<li class="nav-item ml-3">
<button  id="btnDelete" name="btnDelete" class="btn btn-outline-info btn-sm text-nowrap" @click="btn_Click('Delete', '')">删除</button>
</li>
<li class="nav-item ml-3">
<button  id="btnExportExcel" name="btnExportExcel" class="btn btn-outline-warning btn-sm text-nowrap" @click="btn_Click('ExportExcel', '')">导出Excel</button>
</li>
</ul>
</div>
<!--列表层-->
<div id="divList" ref="refDivList" class="div_List">
<ge_ControlAttribute_ListCom 
ref="refge_ControlAttribute_List" 
:items="dataListge_ControlAttribute"
:show-error-message="showErrorMessage"
:empty-rec-num-info="emptyRecNumInfo"
@on-edit-tab-relainfo="EditTabRelaInfo"
@on-sort-column="SortColumn">
</ge_ControlAttribute_ListCom>
<div id="divPager" class="pager">
</div>
<input  id="hidSortge_ControlAttributeBy" type = "hidden"  />
</div>
<!--编辑层-->
<ge_ControlAttribute_EditCom ref='refge_ControlAttribute_Edit'></ge_ControlAttribute_EditCom>
</div>
</template>
<script lang="ts">

//import $ from "jquery";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import { defineComponent, onMounted, ref } from 'vue';
import router from '@/router';
import { divVarSet,refDivLayout,refDivQuery,refDivFunction,refDivList,refge_ControlAttribute_Edit,refge_ControlAttribute_List,showErrorMessage,dataListge_ControlAttribute,emptyRecNumInfo,attributeId_q,controlAttributeName_q, } from "@/views/GameLearn/ge_ControlAttributeVueShare";
import { ge_ControlAttributeCRUDEx } from "@/views/GameLearn/ge_ControlAttributeCRUDEx";
import ge_ControlAttribute_EditCom from '@/views/GameLearn/ge_ControlAttribute_Edit.vue';
import ge_ControlAttribute_ListCom from '@/views/GameLearn/ge_ControlAttribute_List.vue';
      export  default defineComponent({
name: 'Ge_ControlAttributeCRUD',
        components: {
            // 组件注册
ge_ControlAttribute_EditCom,
 ge_ControlAttribute_ListCom,
        },

setup() {




 /** 函数功能:为查询区绑定下拉框
 * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
 **/
async function BindDdl4QryRegion()
{

}


 /** 函数功能:为功能区绑定下拉框
 * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
 **/
async function BindDdl4FeatureRegion()
{

}

const strTitle = ref ('属性表维护');
onMounted(() => {
BindDdl4QryRegion();
BindDdl4FeatureRegion();
ge_ControlAttributeCRUDEx.vuebtn_Click = btn_Click;
ge_ControlAttributeCRUDEx.GetPropValue = GetPropValue;
            const objPage = new ge_ControlAttributeCRUDEx();
            objPage.PageLoadCache();
         });
function GetPropValue(strPropName: string): string {
switch (strPropName)
{
case 'strTitle':
return strTitle.value;
default:
return '';
}
}
function btn_Click(strCommandName: string, strKeyId: string) {
switch (strCommandName)
{
case 'Create':
case 'AddNewRecordWithMaxId':
case 'CreateWithMaxId':
case 'Update':
case 'UpdateRecord':
case 'UpdateRecordInTab':
break;
default:
break;
}
ge_ControlAttributeCRUDEx.btn_Click(strCommandName, strKeyId);
}
return {
showErrorMessage,
dataListge_ControlAttribute,
emptyRecNumInfo,
strTitle,
btn_Click,
...divVarSet,
refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        
refge_ControlAttribute_Edit,
refge_ControlAttribute_List,
attributeId_q,
controlAttributeName_q,
};
},
        watch: {
            // 数据监听
        },
        mounted() {
        },

        methods: {

 /** 函数:编辑表的相关信息
 * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
 **/
async EditTabRelaInfo(data: any) {
console.log('data:', data);
router.push({ name: 'editge_ControlAttribute', params: { courseId: data.courseId } });
},


 /** 函数:根据表列进行排序
 * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
 **/
async SortColumn(data: any) {
console.log('data:', data);
const objPage = new ge_ControlAttributeCRUDEx();
objPage.SortColumn(data.sortColumnKey, data.sortDirection);
},

            // 方法定义
},
    });
</script>
<style scoped>
</style>