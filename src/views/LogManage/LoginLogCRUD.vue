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
                id="lblLoginLogNumber_q"
                name="lblLoginLogNumber_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginLogNumber
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginLogNumber_q"
                v-model="loginLogNumber_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginIP_q"
                name="lblLoginIP_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginIP
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginIP_q"
                v-model="loginIP_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFailReason_q"
                name="lblFailReason_q"
                class="col-form-label text-right"
                style="width: 90px"
                >FailReason
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFailReason_q"
                v-model="failReason_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginResult_q"
                name="lblLoginResult_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginResult
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginResult_q"
                v-model="loginResult_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblLoginTime_q"
                name="lblLoginTime_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginTime_q"
                v-model="loginTime_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginUserId_q"
                name="lblLoginUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginUserId
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginUserId_q"
                v-model="loginUserId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblOnlineTime_q"
                name="lblOnlineTime_q"
                class="col-form-label text-right"
                style="width: 90px"
                >OnlineTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOnlineTime_q"
                v-model="onlineTime_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblOutTime_q"
                name="lblOutTime_q"
                class="col-form-label text-right"
                style="width: 90px"
                >OutTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOutTime_q"
                v-model="outTime_q"
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
            id="lblLoginLogList"
            name="lblLoginLogList"
            class="col-form-label text-info"
            style="width: 250px"
            >登录日志列表
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
      <LoginLog_ListCom
        :items="dataListLoginLog"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </LoginLog_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortLoginLogBy" type="hidden" />
    </div>
    <!--编辑层-->
    <LoginLog_EditCom ref="refLoginLog_Edit"></LoginLog_EditCom>
    <!--详细信息层-->
    <LoginLog_DetailCom ref="refLoginLog_Detail"></LoginLog_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refLoginLog_Edit,
    refLoginLog_Detail,
    showErrorMessage,
    dataListLoginLog,
    emptyRecNumInfo,
    loginLogNumber_q,
    loginIP_q,
    failReason_q,
    loginResult_q,
    loginTime_q,
    loginUserId_q,
    onlineTime_q,
    outTime_q,
  } from '@/views/LogManage/LoginLogVueShare';
  import LoginLogCRUDEx from '@/views/LogManage/LoginLogCRUDEx';
  import { LoginLogCRUD } from '@/viewsBase/LogManage/LoginLogCRUD';
  import LoginLog_EditCom from '@/views/LogManage/LoginLog_Edit.vue';
  import LoginLog_DetailCom from '@/views/LogManage/LoginLog_Detail.vue';
  import LoginLog_ListCom from '@/views/LogManage/LoginLog_List.vue';
  import { LoginLog_Edit } from '@/viewsBase/LogManage/LoginLog_Edit';
  import { LoginLog_Detail } from '@/viewsBase/LogManage/LoginLog_Detail';
  export default defineComponent({
    name: 'LoginLogCRUD',
    components: {
      // 组件注册
      LoginLog_EditCom,
      LoginLog_DetailCom,
      LoginLog_ListCom,
    },

    setup() {
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('登录日志维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        LoginLogCRUDEx.vuebtn_Click = btn_Click;
        LoginLogCRUDEx.GetPropValue = GetPropValue;
        const objPage = new LoginLogCRUDEx();
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
        LoginLogCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListLoginLog,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refLoginLog_Edit,
        refLoginLog_Detail,
        loginLogNumber_q,
        loginIP_q,
        failReason_q,
        loginResult_q,
        loginTime_q,
        loginUserId_q,
        onlineTime_q,
        outTime_q,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editLoginLog', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new LoginLogCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
