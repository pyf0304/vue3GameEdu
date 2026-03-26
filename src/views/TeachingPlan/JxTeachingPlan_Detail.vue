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
                id="spnTeachingPlanId_d"
                name="spnTeachingPlanId_d"
                CssClass="col-form-label text-right"
                >教学计划编号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTeachingPlanId_d"
                name="lblTeachingPlanId_d"
                class="text-primary"
                style="width: 150px"
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
              <label
                id="lblTeachingPlanDesc_d"
                name="lblTeachingPlanDesc_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIdGrade_d" name="spnIdGrade_d" CssClass="col-form-label text-right"
                >年级流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdGrade_d"
                name="lblIdGrade_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnSchoolTerm_d" name="spnSchoolTerm_d" CssClass="col-form-label text-right"
                >学期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSchoolTerm_d"
                name="lblSchoolTerm_d"
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
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsClgCheck_d" name="spnIsClgCheck_d" CssClass="col-form-label text-right"
                >是否学院审批</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsClgCheck_d"
                name="lblIsClgCheck_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnClgNote_d" name="spnClgNote_d" CssClass="col-form-label text-right"
                >学院审批意见</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblClgNote_d"
                name="lblClgNote_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnClgCheckerId_d"
                name="spnClgCheckerId_d"
                CssClass="col-form-label text-right"
                >学院审批人id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblClgCheckerId_d"
                name="lblClgCheckerId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnClgCheckDate_d"
                name="spnClgCheckDate_d"
                CssClass="col-form-label text-right"
                >学院审批日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblClgCheckDate_d"
                name="lblClgCheckDate_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsSchCheck_d" name="spnIsSchCheck_d" CssClass="col-form-label text-right"
                >是否学校审批</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsSchCheck_d"
                name="lblIsSchCheck_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnSchNote_d" name="spnSchNote_d" CssClass="col-form-label text-right"
                >学校审批意见</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSchNote_d"
                name="lblSchNote_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnSchCheckerId_d"
                name="spnSchCheckerId_d"
                CssClass="col-form-label text-right"
                >学校审批人Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSchCheckerId_d"
                name="lblSchCheckerId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnSchCheckDate_d"
                name="spnSchCheckDate_d"
                CssClass="col-form-label text-right"
                >学校审批日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSchCheckDate_d"
                name="lblSchCheckDate_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIdSubmitStatus_d"
                name="spnIdSubmitStatus_d"
                CssClass="col-form-label text-right"
                >送审状态流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdSubmitStatus_d"
                name="lblIdSubmitStatus_d"
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
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelJxTeachingPlan" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { JxTeachingPlan_DetailEx } from '@/views/TeachingPlan/JxTeachingPlan_DetailEx';
  export default defineComponent({
    name: 'JxTeachingPlanDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('教学计划详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelJxTeachingPlan':
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
          case 'btnCancelJxTeachingPlan':
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
      btnJxTeachingPlan_Detail_Click(strCommandName: string, strKeyId: string) {
        JxTeachingPlan_DetailEx.btnDetail_Click(strCommandName, strKeyId, this.refDivDetail);
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
