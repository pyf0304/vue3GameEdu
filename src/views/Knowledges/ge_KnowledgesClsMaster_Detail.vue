<template>
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
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <span id="spnCourseId_d" name="spnCourseId_d" CssClass="col-form-label text-right"
                >课程Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCourseId_d"
                name="lblCourseId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIdCurrEduCls_d"
                name="spnIdCurrEduCls_d"
                CssClass="col-form-label text-right"
                >教学班流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdCurrEduCls_d"
                name="lblIdCurrEduCls_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCourseKnowledgeId_d"
                name="spnCourseKnowledgeId_d"
                CssClass="col-form-label text-right"
                >知识点Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCourseKnowledgeId_d"
                name="lblCourseKnowledgeId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnMasterLevelId_d"
                name="spnMasterLevelId_d"
                CssClass="col-form-label text-right"
                >掌握度Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMasterLevelId_d"
                name="lblMasterLevelId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnMasteryValue_d"
                name="spnMasteryValue_d"
                CssClass="col-form-label text-right"
                >掌握度</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMasteryValue_d"
                name="lblMasteryValue_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnGoalValue_d" name="spnGoalValue_d" CssClass="col-form-label text-right"
                >目标值</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGoalValue_d"
                name="lblGoalValue_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnSelfPerceivedValue_d"
                name="spnSelfPerceivedValue_d"
                CssClass="col-form-label text-right"
                >自我认为值</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSelfPerceivedValue_d"
                name="lblSelfPerceivedValue_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnKnowledgeName_d"
                name="spnKnowledgeName_d"
                CssClass="col-form-label text-right"
                >知识点名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblKnowledgeName_d" name="lblKnowledgeName_d" class="text-primary">
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnMasterLevelName_d"
                name="spnMasterLevelName_d"
                CssClass="col-form-label text-right"
                >掌握等级</span
              >
            </td>
            <td class="text-left">
              <label id="lblMasterLevelName_d" name="lblMasterLevelName_d" class="text-primary">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnCourseName_d" name="spnCourseName_d" CssClass="col-form-label text-right"
                >课程名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblCourseName_d" name="lblCourseName_d" class="text-primary"> </label>
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelge_KnowledgesClsMaster" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ge_KnowledgesClsMaster_DetailEx } from '@/views/Knowledges/ge_KnowledgesClsMaster_DetailEx';
  export default defineComponent({
    name: 'GeKnowledgesClsMasterDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点教学班掌握度详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_KnowledgesClsMaster':
            strCancelButtonText.value = strNewValue;
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
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
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
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnge_KnowledgesClsMaster_Detail_Click(strCommandName: string, strKeyId: string) {
        ge_KnowledgesClsMaster_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
