<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblMasterLevelId_q"
                name="lblMasterLevelId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >掌握度
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMasterLevelId_q"
                name="ddlMasterLevelId_q"
                class="form-control form-control-sm"
                style="width: 200px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblCourseKnowledgeId_q"
                name="lblCourseKnowledgeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseKnowledgeId_q"
                name="ddlCourseKnowledgeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblMasteryValue_q"
                name="lblMasteryValue_q"
                class="col-form-label text-right"
                style="width: 90px"
                >掌握度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMasteryValue_q"
                name="txtMasteryValue_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblge_KnowledgesClsMasterList"
            name="lblge_KnowledgesClsMasterList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点教学班掌握度列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCalcClsMasteryValue"
            name="btnCalcClsMasteryValue"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CalcClsMasteryValue', '')"
            >计算班知识点掌握度</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <input
              id="txtMasteryValue_SetFldValue"
              name="txtMasteryValue_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            />
            <button
              id="btnSetMasteryValue"
              name="btnSetMasteryValue"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetMasteryValue', '')"
              >设置掌握度</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortge_KnowledgesClsMasterBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ge_KnowledgesClsMaster_EditCom
      ref="refge_KnowledgesClsMaster_Edit"
    ></ge_KnowledgesClsMaster_EditCom>
    <!--详细信息层-->
    <ge_KnowledgesClsMaster_DetailCom
      ref="refge_KnowledgesClsMaster_Detail"
    ></ge_KnowledgesClsMaster_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { ge_KnowledgesClsMasterCRUDEx } from '@/views/Knowledges/ge_KnowledgesClsMasterCRUDEx';
  import { ge_KnowledgesClsMasterCRUD } from '@/viewsBase/Knowledges/ge_KnowledgesClsMasterCRUD';
  import ge_KnowledgesClsMaster_EditCom from '@/views/Knowledges/ge_KnowledgesClsMaster_Edit.vue';
  import ge_KnowledgesClsMaster_DetailCom from '@/views/Knowledges/ge_KnowledgesClsMaster_Detail.vue';
  import { ge_KnowledgesClsMaster_Edit } from '@/viewsBase/Knowledges/ge_KnowledgesClsMaster_Edit';
  import { ge_KnowledgesClsMaster_Detail } from '@/viewsBase/Knowledges/ge_KnowledgesClsMaster_Detail';
  import {
    refge_KnowledgesClsMaster_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    IdCurrEduCls_Session,
    refge_KnowledgesClsMaster_Detail,
  } from '@/views/Knowledges/ge_KnowledgesClsMasterVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  export default defineComponent({
    name: 'GeKnowledgesClsMasterCRUD',
    components: {
      // 组件注册
      ge_KnowledgesClsMaster_EditCom,
      ge_KnowledgesClsMaster_DetailCom,
    },
    setup() {
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      const strTitle = ref('知识点教学班掌握度维护');

      onMounted(() => {
        ge_KnowledgesClsMasterCRUDEx.vuebtn_Click = btn_Click;
        ge_KnowledgesClsMasterCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ge_KnowledgesClsMasterCRUDEx();
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
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
        ge_KnowledgesClsMasterCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        refge_KnowledgesClsMaster_Edit,
        refge_KnowledgesClsMaster_Detail,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
