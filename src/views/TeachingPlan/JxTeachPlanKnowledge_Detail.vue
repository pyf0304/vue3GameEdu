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
              <span
                id="spnIdTeachPlanKnowledge_d"
                name="spnIdTeachPlanKnowledge_d"
                CssClass="col-form-label text-right"
                >教学计划知识点流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdTeachPlanKnowledge_d"
                name="lblIdTeachPlanKnowledge_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIdTeachingPlan_d"
                name="spnIdTeachingPlan_d"
                CssClass="col-form-label text-right"
                >教案流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdTeachingPlan_d"
                name="lblIdTeachingPlan_d"
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
                id="spnTeachingMethodId_d"
                name="spnTeachingMethodId_d"
                CssClass="col-form-label text-right"
                >教学方式Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTeachingMethodId_d"
                name="lblTeachingMethodId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnAssessmentMethodId_d"
                name="spnAssessmentMethodId_d"
                CssClass="col-form-label text-right"
                >考核方式Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblAssessmentMethodId_d"
                name="lblAssessmentMethodId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnUpdDate_d" name="spnUpdDate_d" CssClass="col-form-label text-right"
                >修改日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUpdDate_d"
                name="lblUpdDate_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnAssessmentMethodName_d"
                name="spnAssessmentMethodName_d"
                CssClass="col-form-label text-right"
                >考核方式名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblAssessmentMethodName_d"
                name="lblAssessmentMethodName_d"
                class="text-primary"
              >
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
                id="spnTeachingMethodName_d"
                name="spnTeachingMethodName_d"
                CssClass="col-form-label text-right"
                >教学方式名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTeachingMethodName_d"
                name="lblTeachingMethodName_d"
                class="text-primary"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnTeachingPlanDesc_d"
                name="spnTeachingPlanDesc_d"
                CssClass="col-form-label text-right"
                >教学计划名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblTeachingPlanDesc_d" name="lblTeachingPlanDesc_d" class="text-primary">
              </label>
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelJxTeachPlanKnowledge" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { JxTeachPlanKnowledge_DetailEx } from '@/views/TeachingPlan/JxTeachPlanKnowledge_DetailEx';
  export default defineComponent({
    name: 'JxTeachPlanKnowledgeDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('教学计划知识点详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelJxTeachPlanKnowledge':
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
          case 'btnCancelJxTeachPlanKnowledge':
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
        refDivDetail,
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
      btnJxTeachPlanKnowledge_Detail_Click(strCommandName: string, strKeyId: string) {
        JxTeachPlanKnowledge_DetailEx.btnDetail_Click(strCommandName, strKeyId, this.refDivDetail);
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
