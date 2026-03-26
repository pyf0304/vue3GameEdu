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
          <tr id="trDifficultyLevelId">
            <td class="text-right">
              <label id="lblQuestionName" class="col-form-label text-right" style="width: 90px">
                题目名称
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input id="txtQuestionName" class="form-control-sm" style="width: 450px" />
            </td>
          </tr>
          <tr id="trQuestionContent" style="display: none">
            <td class="text-right">
              <label id="lblQuestionContent" class="col-form-label text-right" style="width: 90px">
                题目内容
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input id="txtQuestionContent" class="form-control-sm" style="width: 350px" />
            </td>
          </tr>
          <tr id="trQuestionCode" style="display: none">
            <td class="text-right">
              <label id="lblQuestionCode" class="col-form-label text-right" style="width: 90px">
                源代码
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input id="txtQuestionCode" class="form-control-sm" style="width: 350px" />
            </td>
          </tr>
          <tr id="trCourseChapterId">
            <td class="text-right">
              <label id="lblAnswerTypeId" class="col-form-label text-right" style="width: 90px">
                答案类型
              </label>
            </td>
            <td class="text-left">
              <select id="ddlAnswerTypeId" class="form-control-sm" style="width: 150px"></select>
            </td>
            <td class="text-right">
              <label id="lblCourseChapterId" class="col-form-label text-right" style="width: 90px">
                课程章节
              </label>
            </td>
            <td class="text-left">
              <select id="ddlCourseChapterId" class="form-control-sm" style="width: 200px"></select>
            </td>
          </tr>
          <tr id="trAnswerTypeId">
            <td class="text-right">
              <label id="lblQuestionTypeId" class="col-form-label text-right" style="width: 90px">
                题目类型
              </label>
            </td>
            <td class="text-left">
              <select id="ddlQuestionTypeId" class="form-control-sm" style="width: 150px"></select>
            </td>
            <td class="text-right">
              <label
                id="lblDifficultyLevelId"
                class="col-form-label text-right"
                style="width: 90px"
              >
                难度等级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDifficultyLevelId"
                class="form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr> </tbody

        ><tbody id="borrowAccountDiv_CJ" style="display: none" mce_style="display:none;">
          <tr id="trEventTypeId">
            <td class="text-right">
              <label id="lblControlTypeId" class="col-form-label text-right" style="width: 90px">
                控件
              </label>
            </td>
            <td class="text-left">
              <select id="ddlControlTypeId" class="form-control-sm" style="width: 150px"></select>
            </td>
            <td class="text-right">
              <label id="lblEventTypeId" class="col-form-label text-right" style="width: 90px">
                事件
              </label>
            </td>
            <td class="text-left">
              <select id="ddlEventTypeId" class="form-control-sm" style="width: 150px"></select>
            </td>
          </tr>
          <tr id="trControlClass">
            <td class="text-right">
              <label id="lblControlId" class="col-form-label text-right" style="width: 90px">
                控件Id
              </label>
            </td>
            <td class="text-left">
              <input id="txtControlId" class="form-control-sm" style="width: 150px" />
            </td>
            <td class="text-right">
              <label id="lblControlClass" class="col-form-label text-right" style="width: 90px">
                控件样式
              </label>
            </td>
            <td class="text-left">
              <input id="txtControlClass" class="form-control-sm" style="width: 150px" />
            </td>
          </tr>
          <tr id="trControlHtml">
            <td class="text-right">
              <label id="lblControlValue" class="col-form-label text-right" style="width: 90px">
                控件值
              </label>
            </td>
            <td class="text-left">
              <input id="txtControlValue" class="form-control-sm" style="width: 150px" />
            </td>
            <td class="text-right">
              <label id="lblControlHtml" class="col-form-label text-right" style="width: 90px">
                控件html
              </label>
            </td>
            <td class="text-left">
              <input id="txtControlHtml" class="form-control-sm" style="width: 150px" />
            </td>
          </tr>
          <tr id="trExaminationTypeId">
            <td class="text-right">
              <label
                id="lblExaminationTypeId"
                class="col-form-label text-right"
                style="width: 90px"
              >
                检查类型
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlExaminationTypeId"
                class="form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trDescribe">
            <td class="text-right">
              <label id="lblDescribe" class="col-form-label text-right" style="width: 90px">
                标准描述
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input id="txtDescribe" class="form-control-sm" style="width: 350px" />
            </td>
          </tr>
        </tbody>

        <tr id="trIsHaveAdditionalMemo" style="display: none">
          <td class="text-right">
            <label id="lblSectionTypeId" class="col-form-label text-right" style="width: 90px">
              节点类型
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <select id="ddlSectionTypeId" class="form-control-sm" style="width: 150px"></select>
          </td>
        </tr>

        <tr id="trKnowledgeGraph" style="display: none">
          <td class="text-right">
            <label id="lblKnowledgeGraphId" class="col-form-label text-right" style="width: 90px">
              知识逻辑图谱
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <select id="ddlKnowledgeGraphId" class="form-control-sm" style="width: 150px"></select>
          </td>
        </tr>

        <tr id="trIsEffective">
          <td class="text-right">
            <label id="lblLevelModeTypeId" class="col-form-label text-right" style="width: 90px">
              操作模式
            </label>
          </td>
          <td class="text-left">
            <select id="ddlLevelModeTypeId" class="form-control-sm" style="width: 150px"></select>
          </td>
          <td class="text-left">
            <span id="tdIsRandom" class="form-control-sm" style="width: 150px; display: none">
              <input type="checkbox" id="chkIsRandom" Text="是否随机" checked="true" /><label
                for="chkIsRandom"
                >是否随机</label
              >
            </span>
          </td>
          <td class="text-left">
            <span class="form-control-sm" style="width: 150px">
              <input type="checkbox" id="chkIsShow" Text="是否启用" checked="true" /><label
                for="chkIsShow"
                >是否启用</label
              >
            </span>
            <span class="form-control-sm" style="width: 150px">
              <input type="checkbox" id="chkIsEffective" Text="是否有效" checked="true" /><label
                for="chkIsEffective"
                >是否有效</label
              >
            </span>
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" class="col-form-label text-right" style="width: 90px"> 备注 </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input id="txtMemo" class="form-control-sm" style="width: 450px" />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelQuestionnaire" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQuestionnaire"
        type="primary"
        @click="btnQuestionnaire_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QuestionnaireCRUDEx from '@/views/QuestionaireEdit/QuestionnaireCRUDEx';
  import Questionnaire_EditEx from '@/views/QuestionaireEdit/Questionnaire_EditEx';
  export default defineComponent({
    name: 'QuestionnaireEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('题目编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQuestionnaire':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQuestionnaire':
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
          case 'btnCancelQuestionnaire':
            return strCancelButtonText.value;
          case 'btnSubmitQuestionnaire':
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
        //Questionnaire_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQuestionnaire_Edit_Click(strCommandName: string, strKeyId: string) {
        Questionnaire_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_Questionnaire(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new Questionnaire_EditEx('Questionnaire_EditEx', new QuestionnaireCRUDEx());
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
