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
              <select
                id="ddlUserId_q"
                name="ddlUserId_q"
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
            id="lblge_UserCreditsLogList"
            name="lblge_UserCreditsLogList"
            class="col-form-label text-info"
            style="width: 250px"
            >用户积分日志列表
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
            id="btnCalcUserCreditLog"
            name="btnCalcUserCreditLog"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CalcUserCreditLog', '')"
            >计算积分日志</button
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
      <input id="hidSortge_UserCreditsLogBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ge_UserCreditsLog_EditCom ref="refge_UserCreditsLog_Edit"></ge_UserCreditsLog_EditCom>
    <!--详细信息层-->
    <ge_UserCreditsLog_DetailCom ref="ge_UserCreditsLog_Detail"></ge_UserCreditsLog_DetailCom>
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
  import { ge_UserCreditsLogCRUDEx } from '@/views/GameLearn/ge_UserCreditsLogCRUDEx';
  import { ge_UserCreditsLogCRUD } from '@/viewsBase/GameLearn/ge_UserCreditsLogCRUD';
  import ge_UserCreditsLog_EditCom from '@/views/GameLearn/ge_UserCreditsLog_Edit.vue';
  import ge_UserCreditsLog_DetailCom from '@/views/GameLearn/ge_UserCreditsLog_Detail.vue';
  import { ge_UserCreditsLog_Edit } from '@/viewsBase/GameLearn/ge_UserCreditsLog_Edit';
  import { ge_UserCreditsLog_Detail } from '@/viewsBase/GameLearn/ge_UserCreditsLog_Detail';
  import {
    IdCurrEduCls_Session,
    CourseId_Session,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refge_UserCreditsLog_Edit,
    refge_UserCreditsLog_Detail,
  } from '@/views/GameLearn/ge_UserCreditsLogVueShare';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

  export default defineComponent({
    name: 'GeUserCreditsLogCRUD',
    components: {
      // 组件注册
      ge_UserCreditsLog_EditCom,
      ge_UserCreditsLog_DetailCom,
    },
    setup() {
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const strTitle = ref('用户积分日志维护');

      onMounted(() => {
        ge_UserCreditsLogCRUDEx.vuebtn_Click = btn_Click;
        ge_UserCreditsLogCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ge_UserCreditsLogCRUDEx();
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
        ge_UserCreditsLogCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refge_UserCreditsLog_Edit,
        refge_UserCreditsLog_Detail,
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
