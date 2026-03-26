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
            <td class="text-right">
              <span id="spnQuestionId_d" name="spnQuestionId_d" CssClass="col-form-label text-right"
                >题目Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblQuestionId_d"
                name="lblQuestionId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
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
                id="spnQuestionCount_d"
                name="spnQuestionCount_d"
                CssClass="col-form-label text-right"
                >问题数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblQuestionCount_d"
                name="lblQuestionCount_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnRightCount_d" name="spnRightCount_d" CssClass="col-form-label text-right"
                >正确次数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRightCount_d"
                name="lblRightCount_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnErrorCount_d" name="spnErrorCount_d" CssClass="col-form-label text-right"
                >错误次数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblErrorCount_d"
                name="lblErrorCount_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMarkCount_d" name="spnMarkCount_d" CssClass="col-form-label text-right"
                >打分数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMarkCount_d"
                name="lblMarkCount_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnIdSchool_d" name="spnIdSchool_d" CssClass="col-form-label text-right"
                >学校流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdSchool_d"
                name="lblIdSchool_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnComment_d" name="spnComment_d" CssClass="col-form-label text-right"
                >批注</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblComment_d"
                name="lblComment_d"
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
                id="spnQuestionName_d"
                name="spnQuestionName_d"
                CssClass="col-form-label text-right"
                >题目名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblQuestionName_d" name="lblQuestionName_d" class="text-primary"> </label>
            </td>
            <td class="text-right">
              <span id="spnCourseName_d" name="spnCourseName_d" CssClass="col-form-label text-right"
                >课程名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblCourseName_d" name="lblCourseName_d" class="text-primary"> </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnQuestionTypeName_d"
                name="spnQuestionTypeName_d"
                CssClass="col-form-label text-right"
                >题目类型名</span
              >
            </td>
            <td class="text-left">
              <label id="lblQuestionTypeName_d" name="lblQuestionTypeName_d" class="text-primary">
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnDifficultyLevelName_d"
                name="spnDifficultyLevelName_d"
                CssClass="col-form-label text-right"
                >难度等级名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDifficultyLevelName_d"
                name="lblDifficultyLevelName_d"
                class="text-primary"
              >
              </label>
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelClassPerfAnalysis" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import ClassPerfAnalysis_DetailEx from '@/views/QuestionnaireResult/ClassPerfAnalysis_DetailEx';
  export default defineComponent({
    name: 'ClassPerfAnalysis_Detail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('班级问题分析详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelClassPerfAnalysis':
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
          case 'btnCancelClassPerfAnalysis':
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
      btnClassPerfAnalysis_Detail_Click(strCommandName: string, strKeyId: string) {
        ClassPerfAnalysis_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
