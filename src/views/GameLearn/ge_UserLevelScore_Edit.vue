<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
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
          <tr id="trGameLevelId">
            <td class="text-right">
              <label
                id="lblGameLevelId"
                name="lblGameLevelId"
                class="col-form-label text-right"
                style="width: 90px"
                >游戏关卡
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlGameLevelId"
                name="ddlGameLevelId"
                class="form-control form-control-sm"
                style="width: 400px"
              ></select>
            </td>
          </tr>
          <tr id="trUserId">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserId"
                name="ddlUserId"
                class="form-control form-control-sm"
                style="width: 400px"
              ></select>
            </td>
          </tr>
          <tr id="trCredits">
            <td class="text-right">
              <label
                id="lblCredits"
                name="lblCredits"
                class="col-form-label text-right"
                style="width: 90px"
                >积分
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCredits"
                name="txtCredits"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trPassed">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 400px">
                <input id="chkPassed" name="chkPassed" type="checkbox" Text="是否合格" /><label
                  for="chkPassed"
                  >是否合格</label
                ></span
              >
            </td>
          </tr>
          <tr id="trGetDate">
            <td class="text-right">
              <label
                id="lblGetDate"
                name="lblGetDate"
                class="col-form-label text-right"
                style="width: 90px"
                >获取日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtGetDate"
                name="txtGetDate"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trGetInstructions">
            <td class="text-right">
              <label
                id="lblGetInstructions"
                name="lblGetInstructions"
                class="col-form-label text-right"
                style="width: 90px"
                >获取说明
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtGetInstructions"
                name="txtGetInstructions"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trBadgeNum">
            <td class="text-right">
              <label
                id="lblBadgeNum"
                name="lblBadgeNum"
                class="col-form-label text-right"
                style="width: 90px"
                >徽章数量
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtBadgeNum"
                name="txtBadgeNum"
                class="form-control form-control-sm"
                style="width: 400px"
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
                name="txtMemo"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr> </tbody
      ></table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelge_UserLevelScore" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_UserLevelScore"
        type="primary"
        @click="btnge_UserLevelScore_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ge_UserLevelScoreCRUDEx } from '@/views/GameLearn/ge_UserLevelScoreCRUDEx';
  import { ge_UserLevelScore_EditEx } from '@/views/GameLearn/ge_UserLevelScore_EditEx';
  export default defineComponent({
    name: 'GeUserLevelScoreEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('用户闯关得分编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_UserLevelScore':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitge_UserLevelScore':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_UserLevelScore':
            return strCancelButtonText.value;
          case 'btnSubmitge_UserLevelScore':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //ge_UserLevelScore_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnge_UserLevelScore_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_UserLevelScore_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ge_UserLevelScore(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ge_UserLevelScore_EditEx(
          'ge_UserLevelScore_EditEx',
          new ge_UserLevelScoreCRUDEx(),
        );
        objPage.btnSubmit_Click();
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
