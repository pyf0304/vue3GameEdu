<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <!-- -- 标题层 -- -->
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">题目</a>
        <a>
          <cite>
            <span id="lbltitle" name="lbltitle">题目检查过程</span>
          </cite>
        </a>
        <label id="lblMsg_List" name="lblMsg_List"></label>
      </span>
      <a
        class="layui-btn layui-btn-small"
        style="line-height: 1.6em; margin-top: 3px; float: right"
        @click="Refresh_Click()"
        title="刷新"
      >
        <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
      </a>
    </div>

    <!-- -- 功能区 -- -->

    <div id="divFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item"> </li>
        <li class="nav-item ml-3">
          <button
            id="btnCopyRecord"
            name="btnCopyRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制记录</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlQuestionID_OrderNum"
              name="ddlQuestionID_OrderNum"
              class="form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnGoTop"
              name="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoTop', '')"
              >移顶</button
            >
            <button
              id="btnUpMove"
              name="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('UpMove', '')"
              >上移</button
            >
            <button
              id="btnDownMove"
              name="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('DownMove', '')"
              >下移</button
            >
            <button
              id="btnGoBottum"
              name="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoBottum', '')"
              >移底</button
            >
            <button
              id="btnReOrder"
              name="btnReOrder"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('ReOrder', '')"
              >重序</button
            >
          </div>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnAddNewRecordWithMaxId"
            name="btnAddNewRecordWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddNewRecordWithMaxId', '')"
            >添加-关键字自增</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
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
    <!-- -- 列表层 -- -->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
    </div>
    <!-- -- 编辑层 -- -->
    <div id="divEdit" value="1"></div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortge_InspectProcessBy" type="hidden" value="" />

    <!--编辑层-->
    <ge_InspectProcess_EditCom ref="refge_InspectProcess_Edit"></ge_InspectProcess_EditCom>
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
  import { ge_InspectProcessCRUDEx } from '@/views/GameLearn/ge_InspectProcessCRUDEx';
  import { ge_InspectProcessCRUD } from '@/viewsBase/GameLearn/ge_InspectProcessCRUD';
  import ge_InspectProcess_EditCom from '@/views/GameLearn/ge_InspectProcess_EditBak.vue';
  import { ge_InspectProcess_Edit } from '@/viewsBase/GameLearn/ge_InspectProcess_Edit';
  import {
    refge_InspectProcess_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './ge_InspectProcessVueShare';
  export default defineComponent({
    name: 'GeInspectProcessCRUD',
    components: {
      // 组件注册
      ge_InspectProcess_EditCom,
    },
    props: {
      questionId: {
        type: Number,
        required: true,
        // default: '',
      },

      questionTypeId: {
        type: String,
        required: true,
        default: '',
      },
    },
    setup(props) {
      const strTitle = ref('检查过程表维护');

      onMounted(() => {
        ge_InspectProcessCRUDEx.vuebtn_Click = btn_Click;
        ge_InspectProcessCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ge_InspectProcessCRUDEx();
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'questionId':
            return props.questionId.toString();
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
        ge_InspectProcessCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      function Refresh_Click() {
        alert(`Refresh_Click`);
      }
      return {
        strTitle,
        btn_Click,
        refge_InspectProcess_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        Refresh_Click,
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
