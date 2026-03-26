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
                id="lblUserId_q"
                name="lblUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId_q"
                name="txtUserId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLearnModeId_q"
                name="lblLearnModeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >学习模式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlLearnModeId_q"
                name="ddlLearnModeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td>
          </tr> </tbody
      ></table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblKnowledgeLearnDetailList"
            name="lblKnowledgeLearnDetailList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点学习情况列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortKnowledgeLearnDetailBy" type="hidden" />
    </div>
    <!--编辑层-->
    ref<KnowledgeLearnDetail_EditCom
      ref="refKnowledgeLearnDetail_Edit"
    ></KnowledgeLearnDetail_EditCom>
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
  import { KnowledgeLearnDetailCRUDEx } from '@/views/Knowledges/KnowledgeLearnDetailCRUDEx';
  import { KnowledgeLearnDetailCRUD } from '@/viewsBase/Knowledges/KnowledgeLearnDetailCRUD';
  import KnowledgeLearnDetail_EditCom from '@/views/Knowledges/KnowledgeLearnDetail_Edit.vue';
  import { KnowledgeLearnDetail_Edit } from '@/viewsBase/Knowledges/KnowledgeLearnDetail_Edit';
  import {
    refKnowledgeLearnDetail_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/Knowledges/KnowledgeLearnDetailVueShare';
  export default defineComponent({
    name: 'KnowledgeLearnDetailCRUD',
    components: {
      // 组件注册
      KnowledgeLearnDetail_EditCom,
    },
    setup() {
      const strTitle = ref('知识点学习情况维护');

      onMounted(() => {
        KnowledgeLearnDetailCRUDEx.vuebtn_Click = btn_Click;
        KnowledgeLearnDetailCRUDEx.GetPropValue = GetPropValue;
        const objPage = new KnowledgeLearnDetailCRUDEx();
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
        KnowledgeLearnDetailCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refKnowledgeLearnDetail_Edit,
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
