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
          <tr id="trIdStudentInfo">
            <td class="text-right">
              <label
                id="lblCourseExamPaperId"
                name="lblCourseExamPaperId"
                class="col-form-label text-right"
                style="width: 90px"
                >考卷
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseExamPaperId"
                name="ddlCourseExamPaperId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblIdStudentInfo"
                name="lblIdStudentInfo"
                class="col-form-label text-right"
                style="width: 90px"
                >学生流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdStudentInfo"
                name="txtIdStudentInfo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdCurrEduCls">
            <td class="text-right">
              <label
                id="lblBatchTime"
                name="lblBatchTime"
                class="col-form-label text-right"
                style="width: 90px"
                >批次
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtBatchTime"
                name="txtBatchTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIdCurrEduCls"
                name="lblIdCurrEduCls"
                class="col-form-label text-right"
                style="width: 90px"
                >当前教学班
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdCurrEduCls"
                name="ddlIdCurrEduCls"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trIsSave">
            <td class="text-right">
              <label
                id="lblScores"
                name="lblScores"
                class="col-form-label text-right"
                style="width: 90px"
                >分值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtScores"
                name="txtScores"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsSave" name="chkIsSave" type="checkbox" Text="是否保存" /><label
                  for="chkIsSave"
                  >是否保存</label
                ></span
              >
            </td>
          </tr>
          <tr id="trTotalGetScore">
            <td class="text-right">
              <label
                id="lblTotalGetScore"
                name="lblTotalGetScore"
                class="col-form-label text-right"
                style="width: 90px"
                >考生获取总分
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTotalGetScore"
                name="txtTotalGetScore"
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
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                name="txtMemo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr> </tbody
      ></table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelcc_ExamPaperStuBatchRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_ExamPaperStuBatchRela"
        type="primary"
        @click="btncc_ExamPaperStuBatchRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { cc_ExamPaperStuBatchRelaCRUDEx } from '@/views/InteractManage/cc_ExamPaperStuBatchRelaCRUDEx';
  import { cc_ExamPaperStuBatchRela_EditEx } from '@/views/InteractManage/cc_ExamPaperStuBatchRela_EditEx';
  export default defineComponent({
    name: 'CcExamPaperStuBatchRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('考卷与学生批次关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcc_ExamPaperStuBatchRela':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitcc_ExamPaperStuBatchRela':
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
          case 'btnCancelcc_ExamPaperStuBatchRela':
            return strCancelButtonText.value;
          case 'btnSubmitcc_ExamPaperStuBatchRela':
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
        //cc_ExamPaperStuBatchRela_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btncc_ExamPaperStuBatchRela_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_ExamPaperStuBatchRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_cc_ExamPaperStuBatchRela(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new cc_ExamPaperStuBatchRela_EditEx(
          'cc_ExamPaperStuBatchRela_EditEx',
          new cc_ExamPaperStuBatchRelaCRUDEx(),
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
