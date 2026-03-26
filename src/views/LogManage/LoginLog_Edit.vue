<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trLoginIP">
            <td class="text-right">
              <label
                id="lblLoginLogNumber"
                name="lblLoginLogNumber"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginLogNumber
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginLogNumber"
                v-model="loginLogNumber"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginIP"
                name="lblLoginIP"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginIP
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginIP"
                v-model="loginIP"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trLoginResult">
            <td class="text-right">
              <label
                id="lblFailReason"
                name="lblFailReason"
                class="col-form-label text-right"
                style="width: 90px"
                >FailReason
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFailReason"
                v-model="failReason"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginResult"
                name="lblLoginResult"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginResult
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginResult"
                v-model="loginResult"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trLoginUserId">
            <td class="text-right">
              <label
                id="lblLoginTime"
                name="lblLoginTime"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginTime"
                v-model="loginTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginUserId"
                name="lblLoginUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginUserId
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginUserId"
                v-model="loginUserId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trOutTime">
            <td class="text-right">
              <label
                id="lblOnlineTime"
                name="lblOnlineTime"
                class="col-form-label text-right"
                style="width: 90px"
                >OnlineTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOnlineTime"
                v-model="onlineTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblOutTime"
                name="lblOutTime"
                class="col-form-label text-right"
                style="width: 90px"
                >OutTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOutTime"
                v-model="outTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelLoginLog" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitLoginLog"
        type="primary"
        @click="btnLoginLog_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import LoginLog_EditEx from '@/views/LogManage/LoginLog_EditEx';
  import { clsLoginLogEN } from '@/ts/L0Entity/LogManage/clsLoginLogEN';
  import { refDivEdit } from '@/views/LogManage/LoginLogVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'LoginLogEdit',
    components: {
      // 组件注册
    },
    setup() {
      const loginLogNumber = ref('');
      const loginIP = ref('');
      const failReason = ref('');
      const loginResult = ref('');
      const loginTime = ref('');
      const loginUserId = ref('');
      const onlineTime = ref('');
      const outTime = ref('');
      const memo = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjLoginLogEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataLoginLogObj() {
        const pobjLoginLogEN = new clsLoginLogEN();
        pobjLoginLogEN.SetLoginLogNumber(loginLogNumber.value); // LoginLogNumber
        pobjLoginLogEN.SetLoginIP(loginIP.value); // LoginIP
        pobjLoginLogEN.SetFailReason(failReason.value); // FailReason
        pobjLoginLogEN.SetLoginResult(loginResult.value); // LoginResult
        pobjLoginLogEN.SetLoginTime(loginTime.value); // LoginTime
        pobjLoginLogEN.SetLoginUserId(loginUserId.value); // LoginUserId
        pobjLoginLogEN.SetOnlineTime(onlineTime.value); // OnlineTime
        pobjLoginLogEN.SetOutTime(outTime.value); // OutTime
        pobjLoginLogEN.SetMemo(memo.value); // 备注
        return pobjLoginLogEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjLoginLogEN">表实体类对象</param>
       **/
      async function ShowDataFromLoginLogObj(pobjLoginLogEN: clsLoginLogEN) {
        loginLogNumber.value = pobjLoginLogEN.loginLogNumber; // LoginLogNumber
        loginIP.value = pobjLoginLogEN.loginIP; // LoginIP
        failReason.value = pobjLoginLogEN.failReason; // FailReason
        loginResult.value = pobjLoginLogEN.loginResult; // LoginResult
        loginTime.value = pobjLoginLogEN.loginTime; // LoginTime
        loginUserId.value = pobjLoginLogEN.loginUserId; // LoginUserId
        onlineTime.value = pobjLoginLogEN.onlineTime; // OnlineTime
        outTime.value = pobjLoginLogEN.outTime; // OutTime
        memo.value = pobjLoginLogEN.memo; // 备注
      }
      const strTitle = ref('登录日志编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataLoginLogObj,
        ShowDataFromLoginLogObj,
        loginLogNumber,
        loginIP,
        failReason,
        loginResult,
        loginTime,
        loginUserId,
        onlineTime,
        outTime,
        memo,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnLoginLog_Edit_Click(strCommandName: string, strKeyId: string) {
        LoginLog_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
