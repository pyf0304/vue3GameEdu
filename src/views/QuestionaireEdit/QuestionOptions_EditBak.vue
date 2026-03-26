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
          <tr id="trOptionTitle">
            <td class="text-left">
              <textarea
                id="txtOptionName"
                name="txtOptionName"
                placeholder="选项内容"
                rows="5"
                class="form-control-sm"
                style="width: 500px"
              />
            </td>
          </tr>

          <tr id="trIsShow">
            <td class="text-left">
              <span class="form-control-sm" style="width: 150px">
                <input
                  type="checkbox"
                  id="chkIsCorrect"
                  name="chkIsCorrect"
                  Text="是否正确"
                /><label for="chkIsCorrect">是否正确</label>
              </span>
              <span class="form-control-sm" style="width: 150px">
                <input type="checkbox" id="chkIsShow" name="chkIsShow" Text="是否启用" /><label
                  for="chkIsShow"
                  >是否启用</label
                >
              </span>
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-left">
              <textarea
                id="txtMemo"
                name="txtMemo"
                placeholder="备注"
                class="form-control-sm"
                style="width: 350px; height: 80px"
              ></textarea>
            </td>
          </tr> </tbody
      ></table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelQuestionOptions" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQuestionOptions"
        type="primary"
        @click="btnQuestionOptions_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { QuestionOptionsCRUDEx } from '@/views/QuestionaireEdit/QuestionOptionsCRUDEx';
  import { QuestionOptions_EditEx } from '@/views/QuestionaireEdit/QuestionOptions_EditEx';
  export default defineComponent({
    name: 'QuestionOptionsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('题目选项编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQuestionOptions':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQuestionOptions':
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
          case 'btnCancelQuestionOptions':
            return strCancelButtonText.value;
          case 'btnSubmitQuestionOptions':
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
        //QuestionOptions_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQuestionOptions_Edit_Click(strCommandName: string, strKeyId: string) {
        QuestionOptions_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_QuestionOptions(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new QuestionOptions_EditEx(
          'QuestionOptions_EditEx',
          new QuestionOptionsCRUDEx(),
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
