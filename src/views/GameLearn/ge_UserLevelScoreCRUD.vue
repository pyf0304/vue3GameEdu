<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" class="text-warning" style="width: 250px"> </label>
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
              <label id="lblGameLevelId_q" class="col-form-label text-right" style="width: 90px"
                >游戏关卡
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlGameLevelId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td>
            <td class="text-right">
              <label id="lblUserId_q" class="col-form-label text-right" style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td>
            <td class="text-right">
              <label id="lblPassed_q" class="col-form-label text-right" style="width: 90px"
                >是否合格
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbPassed_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td>
            <td class="text-right">
              <label id="lblUserId_q" class="col-form-label text-right" style="width: 90px"
                >用户名
              </label>
            </td>
            <td class="text-left">
              <input id="txtUserName_q" class="form-control form-control-sm" style="width: 120px" />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label id="lblge_UserLevelScoreList" class="col-form-label text-info" style="width: 250px"
            >用户闯关得分列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCalcUserLevelScore"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CalcUserLevelScore', '')"
            >计算用户关卡得分</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
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
      <input id="hidSortge_UserLevelScoreBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ge_UserLevelScore_EditCom ref="refge_UserLevelScore_Edit"></ge_UserLevelScore_EditCom>
    <!--详细信息层-->
    <ge_UserLevelScore_DetailCom ref="ge_UserLevelScore_Detail"></ge_UserLevelScore_DetailCom>
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
  import { ge_UserLevelScoreCRUDEx } from '@/views/GameLearn/ge_UserLevelScoreCRUDEx';
  import ge_UserLevelScore_EditCom from '@/views/GameLearn/ge_UserLevelScore_Edit.vue';
  import ge_UserLevelScore_DetailCom from '@/views/GameLearn/ge_UserLevelScore_Detail.vue';
  import {
    refge_UserLevelScore_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refge_UserLevelScore_Detail,
  } from './ge_UserLevelScoreVueShare';
  export default defineComponent({
    name: 'GeUserLevelScoreCRUD',
    components: {
      // 组件注册
      ge_UserLevelScore_EditCom,
      ge_UserLevelScore_DetailCom,
    },
    setup() {
      const strTitle = ref('用户闯关得分维护');

      onMounted(() => {
        ge_UserLevelScoreCRUDEx.vuebtn_Click = btn_Click;
        ge_UserLevelScoreCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ge_UserLevelScoreCRUDEx();
        objPage.PageLoad();
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
        ge_UserLevelScoreCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refge_UserLevelScore_Edit,
        refge_UserLevelScore_Detail,
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
