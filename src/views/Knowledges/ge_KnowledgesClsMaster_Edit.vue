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
          <tr id="trIdCurrEduCls">
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
                id="lblIdCurrEduCls"
                name="lblIdCurrEduCls"
                class="col-form-label text-right"
                style="width: 90px"
                >教学班流水号
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
          <tr id="trMasterLevelId">
            <td class="text-right">
              <label
                id="lblCourseKnowledgeId"
                name="lblCourseKnowledgeId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseKnowledgeId"
                name="ddlCourseKnowledgeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblMasterLevelId"
                name="lblMasterLevelId"
                class="col-form-label text-right"
                style="width: 90px"
                >掌握度Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMasterLevelId"
                name="txtMasterLevelId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trGoalValue">
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
                style="width: 150px"
              />
            </td>
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
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblSelfPerceivedValue"
                name="lblSelfPerceivedValue"
                class="col-form-label text-right"
                style="width: 90px"
                >自我认为值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSelfPerceivedValue"
                name="txtSelfPerceivedValue"
                class="form-control form-control-sm"
                style="width: 150px"
              />
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
      <el-button id="btnCancelge_KnowledgesClsMaster" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_KnowledgesClsMaster"
        type="primary"
        @click="btnge_KnowledgesClsMaster_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { ge_KnowledgesClsMaster_EditEx } from '@/views/Knowledges/ge_KnowledgesClsMaster_EditEx';
  export default defineComponent({
    name: 'GeKnowledgesClsMasterEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点教学班掌握度编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_KnowledgesClsMaster':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitge_KnowledgesClsMaster':
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
          case 'btnCancelge_KnowledgesClsMaster':
            return strCancelButtonText.value;
          case 'btnSubmitge_KnowledgesClsMaster':
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

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnge_KnowledgesClsMaster_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_KnowledgesClsMaster_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
