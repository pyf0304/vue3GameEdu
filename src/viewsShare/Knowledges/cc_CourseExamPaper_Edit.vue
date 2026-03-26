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
          <tr id="trIsShow">
            <td class="text-right">
              <label
                id="lblExamPaperName"
                name="lblExamPaperName"
                class="col-form-label text-right"
                style="width: 90px"
                >考卷名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtExamPaperName"
                name="txtExamPaperName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsShow" name="chkIsShow" type="checkbox" Text="是否启用" /><label
                  for="chkIsShow"
                  >是否启用</label
                ></span
              >
            </td>
          </tr>
          <tr id="trCourseChapterId">
            <td class="text-right">
              <label
                id="lblCourseId"
                name="lblCourseId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseId"
                name="ddlCourseId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblCourseChapterId"
                name="lblCourseChapterId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程章节
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseChapterId"
                name="ddlCourseChapterId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trExamPaperTypeId">
            <td class="text-right">
              <label
                id="lblPaperIndex"
                name="lblPaperIndex"
                class="col-form-label text-right"
                style="width: 90px"
                >试卷序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPaperIndex"
                name="txtPaperIndex"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblExamPaperTypeId"
                name="lblExamPaperTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >试卷类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlExamPaperTypeId"
                name="ddlExamPaperTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trIdXzMajor">
            <td class="text-right">
              <label
                id="lblPaperTime"
                name="lblPaperTime"
                class="col-form-label text-right"
                style="width: 90px"
                >考试时间（分钟）
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPaperTime"
                name="txtPaperTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIdXzMajor"
                name="lblIdXzMajor"
                class="col-form-label text-right"
                style="width: 90px"
                >专业
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzMajor"
                name="ddlIdXzMajor"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trExamCreateTime">
            <td class="text-right">
              <label
                id="lblPaperDispModeId"
                name="lblPaperDispModeId"
                class="col-form-label text-right"
                style="width: 90px"
                >试卷显示模式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlPaperDispModeId"
                name="ddlPaperDispModeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblExamCreateTime"
                name="lblExamCreateTime"
                class="col-form-label text-right"
                style="width: 90px"
                >考卷建立时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtExamCreateTime"
                name="txtExamCreateTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsOpenToAllStu">
            <td class="text-right">
              <label
                id="lblCreateUserID"
                name="lblCreateUserID"
                class="col-form-label text-right"
                style="width: 90px"
                >建立用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCreateUserID"
                name="txtCreateUserID"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsOpenToAllStu"
                  name="chkIsOpenToAllStu"
                  type="checkbox"
                  Text="全校师生"
                /><label for="chkIsOpenToAllStu">全校师生</label></span
              >
            </td>
          </tr>
          <tr id="trIsOpenToSocial">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsOpenToSchool"
                  name="chkIsOpenToSchool"
                  type="checkbox"
                  Text="全校师生公开"
                /><label for="chkIsOpenToSchool">全校师生公开</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsOpenToSocial"
                  name="chkIsOpenToSocial"
                  type="checkbox"
                  Text="社会公众"
                /><label for="chkIsOpenToSocial">社会公众</label></span
              >
            </td>
          </tr>
          <tr id="trIsCanMultiDo">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsAutoGeneQuestion"
                  name="chkIsAutoGeneQuestion"
                  type="checkbox"
                  Text="是否自动生成题目"
                /><label for="chkIsAutoGeneQuestion">是否自动生成题目</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsCanMultiDo"
                  name="chkIsCanMultiDo"
                  type="checkbox"
                  Text="是否可以做多次"
                /><label for="chkIsCanMultiDo">是否可以做多次</label></span
              >
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
      <el-button id="btnCancelcc_CourseExamPaper" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_CourseExamPaper"
        type="primary"
        @click="btncc_CourseExamPaper_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { cc_CourseExamPaperCRUDEx } from '@/viewsShare/Knowledges/cc_CourseExamPaperCRUDEx';
  import { cc_CourseExamPaper_EditEx } from '@/viewsShare/Knowledges/cc_CourseExamPaper_EditEx';
  export default defineComponent({
    name: 'CcCourseExamPaperEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('考卷编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcc_CourseExamPaper':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitcc_CourseExamPaper':
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
          case 'btnCancelcc_CourseExamPaper':
            return strCancelButtonText.value;
          case 'btnSubmitcc_CourseExamPaper':
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
        //cc_CourseExamPaper_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btncc_CourseExamPaper_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_CourseExamPaper_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_cc_CourseExamPaper(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new cc_CourseExamPaper_EditEx(
          'cc_CourseExamPaper_EditEx',
          new cc_CourseExamPaperCRUDEx(),
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
