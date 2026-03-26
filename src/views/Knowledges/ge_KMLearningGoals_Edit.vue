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
          <tr id="trUserId">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户
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
          <tr id="trKnowledgeModuleId">
            <td class="text-right">
              <label
                id="lblKnowledgeModuleId"
                name="lblKnowledgeModuleId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点模块
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlKnowledgeModuleId"
                name="ddlKnowledgeModuleId"
                class="form-control form-control-sm"
                style="width: 400px"
              ></select>
            </td>
          </tr>
          <tr id="trGoalValue">
            <td class="text-right">
              <label
                id="lblGoalValue"
                name="lblGoalValue"
                class="col-form-label text-right"
                style="width: 90px"
                >目标值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtGoalValue"
                name="txtGoalValue"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trMasteryValue">
            <td class="text-right">
              <label
                id="lblMasteryValue"
                name="lblMasteryValue"
                class="col-form-label text-right"
                style="width: 90px"
                >掌握度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMasteryValue"
                name="txtMasteryValue"
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
      <el-button id="btnCancelge_KMLearningGoals" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_KMLearningGoals"
        type="primary"
        @click="btnge_KMLearningGoals_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ge_KMLearningGoalsCRUDEx } from '@/views/Knowledges/ge_KMLearningGoalsCRUDEx';
  import { ge_KMLearningGoals_EditEx } from '@/views/Knowledges/ge_KMLearningGoals_EditEx';
  export default defineComponent({
    name: 'GeKMLearningGoalsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点模块学习目标编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_KMLearningGoals':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitge_KMLearningGoals':
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
          case 'btnCancelge_KMLearningGoals':
            return strCancelButtonText.value;
          case 'btnSubmitge_KMLearningGoals':
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
        //ge_KMLearningGoals_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnge_KMLearningGoals_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_KMLearningGoals_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ge_KMLearningGoals(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ge_KMLearningGoals_EditEx(
          'ge_KMLearningGoals_EditEx',
          new ge_KMLearningGoalsCRUDEx(),
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
