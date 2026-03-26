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
                id="lblMessagePushId_q"
                name="lblMessagePushId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >消息Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessagePushId_q"
                v-model="messagePushId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMessagePushNumber_q"
                name="lblMessagePushNumber_q"
                class="col-form-label text-right"
                style="width: 90px"
                >消息编号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessagePushNumber_q"
                v-model="messagePushNumber_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMessageTitle_q"
                name="lblMessageTitle_q"
                class="col-form-label text-right"
                style="width: 90px"
                >消息标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessageTitle_q"
                v-model="messageTitle_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMessageContent_q"
                name="lblMessageContent_q"
                class="col-form-label text-right"
                style="width: 90px"
                >消息内容
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessageContent_q"
                v-model="messageContent_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblReceivePeople_q"
                name="lblReceivePeople_q"
                class="col-form-label text-right"
                style="width: 90px"
                >接收人员
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtReceivePeople_q"
                v-model="receivePeople_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMessageTypeId_q"
                name="lblMessageTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >消息类型Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessageTypeId_q"
                v-model="messageTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 120px">
                <input
                  id="chkIsAllpush_q"
                  v-model="isAllpush_q"
                  type="checkbox"
                  Text="是否全体推送"
                /><label for="chkIsAllpush_q">是否全体推送</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 120px">
                <input
                  id="chkIsReceive_q"
                  v-model="isReceive_q"
                  type="checkbox"
                  Text="是否接收"
                /><label for="chkIsReceive_q">是否接收</label></span
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblClientVersionTypeId_q"
                name="lblClientVersionTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >客户端版本类型Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtClientVersionTypeId_q"
                v-model="clientVersionTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-left">
              <button
                id="btnQuery"
                name="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnQuery_Click"
                >查询</button
              >
            </td>
            <td class="text-left">
              <button
                id="btnExportExcel"
                name="btnExportExcel"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnExportExcel_Click"
                >导出Excel</button
              >
            </td>
          </tr>
        </tbody></table
      >
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblMessagePushList"
            name="lblMessagePushList"
            class="col-form-label text-info"
            style="width: 250px"
            >消息推送列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnCreate_Click"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdate_Click"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDelete_Click"
            >删除</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <MessagePush_ListCom
        ref="refMessagePush_List"
        :items="dataListMessagePush"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </MessagePush_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortMessagePushBy" type="hidden" />
    </div>
    <!--编辑层-->
    <MessagePush_EditCom ref="refMessagePush_Edit"></MessagePush_EditCom>
    <!--详细信息层-->
    <MessagePush_DetailCom ref="refMessagePush_Detail"></MessagePush_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refMessagePush_Edit,
    refMessagePush_Detail,
    refMessagePush_List,
    showErrorMessage,
    dataListMessagePush,
    emptyRecNumInfo,
    messagePushId_q,
    messagePushNumber_q,
    messageTitle_q,
    messageContent_q,
    receivePeople_q,
    messageTypeId_q,
    isAllpush_q,
    isReceive_q,
    clientVersionTypeId_q,
  } from '@/views/NewsAnn/MessagePushVueShare';
  import { clsMessagePushEN } from '@/ts/L0Entity/NewsAnn/clsMessagePushEN';
  import MessagePush_EditEx from '@/views/NewsAnn/MessagePush_EditEx';
  import MessagePush_DetailEx from '@/views/NewsAnn/MessagePush_DetailEx';
  import MessagePushCRUDEx from '@/views/NewsAnn/MessagePushCRUDEx';
  import MessagePush_EditCom from '@/views/NewsAnn/MessagePush_Edit.vue';
  import MessagePush_DetailCom from '@/views/NewsAnn/MessagePush_Detail.vue';
  import MessagePush_ListCom from '@/views/NewsAnn/MessagePush_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  export default defineComponent({
    name: 'MessagePushCRUD',
    components: {
      // 组件注册
      MessagePush_EditCom,
      MessagePush_DetailCom,
      MessagePush_ListCom,
    },

    setup() {
      const objPage = ref<MessagePushCRUDEx>();
      const objPage_Edit = ref<MessagePush_EditEx>();
      const objPage_Detail = ref<MessagePush_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'MessagePushCRUD';

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_MessagePush(refDivList.value);
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new MessagePush_EditEx('MessagePush_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_MessagePush(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsMessagePushEN.PrimaryTypeId) > -1) {
            await objPage_Edit.value.AddNewRecordWithMaxId();
          } else {
            await objPage_Edit.value.AddNewRecord();
          }
        } catch (e) {
          const strMsg = Format(
            '添加新记录初始化不成功,{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new MessagePush_EditEx('MessagePush_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strMessagePushId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strMessagePushId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_MessagePush(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strMessagePushId);
          if (update == false) {
            const strMsg = Format('在修改记录时,显示记录数据不成功!');
            console.error(strMsg);
            alert(strMsg);
            return;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsMessagePushEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDelete_Click)
       **/
      const btnDelete_Click = async () => {
        const strThisFuncName = btnDelete_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyIds.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord(arrKeyIds);
          await objPage.value.BindGv_MessagePush(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        await objPage.value.ExportExcel_MessagePush();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('消息推送维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        MessagePushCRUDEx.vuebtn_Click = btn_Click;
        MessagePushCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new MessagePushCRUDEx();
        objPage.value.PageLoadCache();
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
        MessagePushCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListMessagePush,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refMessagePush_Edit,
        refMessagePush_Detail,
        refMessagePush_List,
        messagePushId_q,
        messagePushNumber_q,
        messageTitle_q,
        messageContent_q,
        receivePeople_q,
        messageTypeId_q,
        isAllpush_q,
        isReceive_q,
        clientVersionTypeId_q,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
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
        router.push({ name: 'editMessagePush', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new MessagePushCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
