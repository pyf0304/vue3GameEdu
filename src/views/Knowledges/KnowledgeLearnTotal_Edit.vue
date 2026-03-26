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
          <tr id="trCourseKnowledgeId">
            <td class="text-right">
              <label id="lblUserId" class="col-form-label text-right" style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input id="txtUserId" class="form-control form-control-sm" style="width: 150px" />
            </td>
            <td class="text-right">
              <label id="lblCourseKnowledgeId" class="col-form-label text-right" style="width: 90px"
                >课程知识点Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseKnowledgeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trLearnCount">
            <td class="text-right">
              <label id="lblMasterDegree" class="col-form-label text-right" style="width: 90px"
                >掌握程度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMasterDegree"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label id="lblLearnCount" class="col-form-label text-right" style="width: 90px"
                >学习次数
              </label>
            </td>
            <td class="text-left">
              <input id="txtLearnCount" class="form-control form-control-sm" style="width: 150px" />
            </td>
          </tr>
          <tr id="trFailCount">
            <td class="text-right">
              <label id="lblSuccessCount" class="col-form-label text-right" style="width: 90px"
                >成功次数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSuccessCount"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label id="lblFailCount" class="col-form-label text-right" style="width: 90px"
                >失败次数
              </label>
            </td>
            <td class="text-left">
              <input id="txtFailCount" class="form-control form-control-sm" style="width: 150px" />
            </td>
          </tr>
          <tr id="trContinuousFailCount">
            <td class="text-right">
              <label
                id="lblContinuousSuccessCount"
                class="col-form-label text-right"
                style="width: 90px"
                >连续成功次数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtContinuousSuccessCount"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblContinuousFailCount"
                class="col-form-label text-right"
                style="width: 90px"
                >连续失败次数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtContinuousFailCount"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trRecommendedNextReviewDate">
            <td class="text-right">
              <label id="lblLastLearnDate" class="col-form-label text-right" style="width: 90px"
                >最后学习日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLastLearnDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblRecommendedNextReviewDate"
                class="col-form-label text-right"
                style="width: 90px"
                >推荐下次复习日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRecommendedNextReviewDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label id="lblMemo" class="col-form-label text-right" style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input id="txtMemo" class="form-control form-control-sm" style="width: 350px" />
            </td>
          </tr> </tbody
      ></table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelKnowledgeLearnTotal" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitKnowledgeLearnTotal"
        type="primary"
        @click="btnKnowledgeLearnTotal_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { KnowledgeLearnTotalCRUDEx } from '@/views/Knowledges/KnowledgeLearnTotalCRUDEx';
  import { KnowledgeLearnTotal_EditEx } from '@/views/Knowledges/KnowledgeLearnTotal_EditEx';
  export default defineComponent({
    name: 'KnowledgeLearnTotalEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点学习汇总表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelKnowledgeLearnTotal':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitKnowledgeLearnTotal':
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
          case 'btnCancelKnowledgeLearnTotal':
            return strCancelButtonText.value;
          case 'btnSubmitKnowledgeLearnTotal':
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
        //KnowledgeLearnTotal_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnKnowledgeLearnTotal_Edit_Click(strCommandName: string, strKeyId: string) {
        KnowledgeLearnTotal_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_KnowledgeLearnTotal(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new KnowledgeLearnTotal_EditEx(
          'KnowledgeLearnTotal_EditEx',
          new KnowledgeLearnTotalCRUDEx(),
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
