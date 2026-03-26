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
          <tr id="trIdCurrEduCls">
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
          <tr id="trSpecifyCompletionDate">
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
            <td class="text-right">
              <label
                id="lblSpecifyCompletionDate"
                name="lblSpecifyCompletionDate"
                class="col-form-label text-right"
                style="width: 90px"
                >指定完成日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSpecifyCompletionDate"
                name="txtSpecifyCompletionDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trAnswerModeId">
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
            <td class="text-right">
              <label
                id="lblAnswerModeId"
                name="lblAnswerModeId"
                class="col-form-label text-right"
                style="width: 90px"
                >答案模式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlAnswerModeId"
                name="ddlAnswerModeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trAnswerMultiOptions">
            <td class="text-right">
              <label
                id="lblAnswerOptionId"
                name="lblAnswerOptionId"
                class="col-form-label text-right"
                style="width: 90px"
                >回答选项Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAnswerOptionId"
                name="txtAnswerOptionId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblAnswerMultiOptions"
                name="lblAnswerMultiOptions"
                class="col-form-label text-right"
                style="width: 90px"
                >多选项答案
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAnswerMultiOptions"
                name="txtAnswerMultiOptions"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsPublish">
            <td class="text-right">
              <label
                id="lblStuAnswerText"
                name="lblStuAnswerText"
                class="col-form-label text-right"
                style="width: 90px"
                >学生回答文本
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuAnswerText"
                name="txtStuAnswerText"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsPublish"
                  name="chkIsPublish"
                  type="checkbox"
                  Text="是否发布"
                /><label for="chkIsPublish">是否发布</label></span
              >
            </td>
          </tr>
          <tr id="trIsSave">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsLook" name="chkIsLook" type="checkbox" Text="是否查看" /><label
                  for="chkIsLook"
                  >是否查看</label
                ></span
              >
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
          <tr id="trApplySendBackDate">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsSubmit" name="chkIsSubmit" type="checkbox" Text="是否提交" /><label
                  for="chkIsSubmit"
                  >是否提交</label
                ></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblApplySendBackDate"
                name="lblApplySendBackDate"
                class="col-form-label text-right"
                style="width: 90px"
                >申请退回日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtApplySendBackDate"
                name="txtApplySendBackDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trRealFinishDate">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsApplySendBack"
                  name="chkIsApplySendBack"
                  type="checkbox"
                  Text="是否申请退回"
                /><label for="chkIsApplySendBack">是否申请退回</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblRealFinishDate"
                name="lblRealFinishDate"
                class="col-form-label text-right"
                style="width: 90px"
                >实际完成日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRealFinishDate"
                name="txtRealFinishDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trScore">
            <td class="text-right">
              <label
                id="lblOperateTime"
                name="lblOperateTime"
                class="col-form-label text-right"
                style="width: 90px"
                >操作时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOperateTime"
                name="txtOperateTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblScore"
                name="lblScore"
                class="col-form-label text-right"
                style="width: 90px"
                >得分
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtScore"
                name="txtScore"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsMarking">
            <td class="text-right">
              <label
                id="lblComment"
                name="lblComment"
                class="col-form-label text-right"
                style="width: 90px"
                >批注
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtComment"
                name="txtComment"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsMarking"
                  name="chkIsMarking"
                  type="checkbox"
                  Text="是否批阅"
                /><label for="chkIsMarking">是否批阅</label></span
              >
            </td>
          </tr>
          <tr id="trMarkDate">
            <td class="text-right">
              <label
                id="lblMarkerId"
                name="lblMarkerId"
                class="col-form-label text-right"
                style="width: 90px"
                >打分者
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMarkerId"
                name="txtMarkerId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMarkDate"
                name="lblMarkDate"
                class="col-form-label text-right"
                style="width: 90px"
                >打分日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMarkDate"
                name="txtMarkDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsInErrorQuestion">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsSendBack"
                  name="chkIsSendBack"
                  type="checkbox"
                  Text="是否退回"
                /><label for="chkIsSendBack">是否退回</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsInErrorQuestion"
                  name="chkIsInErrorQuestion"
                  type="checkbox"
                  Text="是否进入错题"
                /><label for="chkIsInErrorQuestion">是否进入错题</label></span
              >
            </td>
          </tr>
          <tr id="trAnswerIP">
            <td class="text-right">
              <label
                id="lblWorkTypeId"
                name="lblWorkTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >作业类型Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtWorkTypeId"
                name="txtWorkTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblAnswerIP"
                name="lblAnswerIP"
                class="col-form-label text-right"
                style="width: 90px"
                >回答IP
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAnswerIP"
                name="txtAnswerIP"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trAnswerTime">
            <td class="text-right">
              <label
                id="lblAnswerDate"
                name="lblAnswerDate"
                class="col-form-label text-right"
                style="width: 90px"
                >回答日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAnswerDate"
                name="txtAnswerDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblAnswerTime"
                name="lblAnswerTime"
                class="col-form-label text-right"
                style="width: 90px"
                >回答时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAnswerTime"
                name="txtAnswerTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsAccessKnowledge">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsRight" name="chkIsRight" type="checkbox" Text="是否正确" /><label
                  for="chkIsRight"
                  >是否正确</label
                ></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsAccessKnowledge"
                  name="chkIsAccessKnowledge"
                  type="checkbox"
                  Text="是否处理知识点"
                /><label for="chkIsAccessKnowledge">是否处理知识点</label></span
              >
            </td>
          </tr>
          <tr id="trSchoolYear">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsNotProcessTimeout"
                  name="chkIsNotProcessTimeout"
                  type="checkbox"
                  Text="是否不处理超时"
                /><label for="chkIsNotProcessTimeout">是否不处理超时</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblSchoolYear"
                name="lblSchoolYear"
                class="col-form-label text-right"
                style="width: 90px"
                >学年
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSchoolYear"
                name="ddlSchoolYear"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblSchoolTerm"
                name="lblSchoolTerm"
                class="col-form-label text-right"
                style="width: 90px"
                >学期
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSchoolTerm"
                name="ddlSchoolTerm"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
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
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelcc_ExamPaperStuRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_ExamPaperStuRelation"
        type="primary"
        @click="btncc_ExamPaperStuRelation_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { cc_ExamPaperStuRelationCRUDEx } from '@/views/InteractManage/cc_ExamPaperStuRelationCRUDEx';
  import { cc_ExamPaperStuRelation_EditEx } from '@/views/InteractManage/cc_ExamPaperStuRelation_EditEx';
  export default defineComponent({
    name: 'CcExamPaperStuRelationEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('考卷与学生关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcc_ExamPaperStuRelation':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitcc_ExamPaperStuRelation':
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
          case 'btnCancelcc_ExamPaperStuRelation':
            return strCancelButtonText.value;
          case 'btnSubmitcc_ExamPaperStuRelation':
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
        //cc_ExamPaperStuRelation_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btncc_ExamPaperStuRelation_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_ExamPaperStuRelation_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_cc_ExamPaperStuRelation(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new cc_ExamPaperStuRelation_EditEx(
          'cc_ExamPaperStuRelation_EditEx',
          new cc_ExamPaperStuRelationCRUDEx(),
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
