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
          <tr id="trEventTypeId">
            <td class="text-right">
              <label
                id="lblControlTypeId"
                name="lblControlTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >控件
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlControlTypeId"
                name="ddlControlTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblEventTypeId"
                name="lblEventTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >事件
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlEventTypeId"
                name="ddlEventTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trControlId">
            <td class="text-right">
              <label
                id="lblExaminationTypeId"
                name="lblExaminationTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >检查类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlExaminationTypeId"
                name="ddlExaminationTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblControlId"
                name="lblControlId"
                class="col-form-label text-right"
                style="width: 90px"
                >控件Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtControlId"
                name="txtControlId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trControlValue">
            <td class="text-right">
              <label
                id="lblControlClass"
                name="lblControlClass"
                class="col-form-label text-right"
                style="width: 90px"
                >控件样式
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtControlClass"
                name="txtControlClass"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblControlValue"
                name="lblControlValue"
                class="col-form-label text-right"
                style="width: 90px"
                >控件值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtControlValue"
                name="txtControlValue"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trDescribe">
            <td class="text-right">
              <label
                id="lblDescribe"
                name="lblDescribe"
                class="col-form-label text-right"
                style="width: 90px"
                >标准描述
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtDescribe"
                name="txtDescribe"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trUpdUser">
            <td class="text-right">
              <label
                id="lblUpdDate"
                name="lblUpdDate"
                class="col-form-label text-right"
                style="width: 90px"
                >修改日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUpdDate"
                name="txtUpdDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUpdUser"
                name="lblUpdUser"
                class="col-form-label text-right"
                style="width: 90px"
                >修改人
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUpdUser"
                name="txtUpdUser"
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
          </tr>
        </tbody>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelge_ExaminationCriteria" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_ExaminationCriteria"
        type="primary"
        @click="btnge_ExaminationCriteria_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ge_ExaminationCriteriaCRUDEx } from '@/views/GameLearn/ge_ExaminationCriteriaCRUDEx';
  import { ge_ExaminationCriteria_EditEx } from '@/views/GameLearn/ge_ExaminationCriteria_EditEx';
  export default defineComponent({
    name: 'GeExaminationCriteriaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('题目检查标准表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_ExaminationCriteria':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitge_ExaminationCriteria':
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
          case 'btnCancelge_ExaminationCriteria':
            return strCancelButtonText.value;
          case 'btnSubmitge_ExaminationCriteria':
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
        //ge_ExaminationCriteria_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnge_ExaminationCriteria_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_ExaminationCriteria_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ge_ExaminationCriteria(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ge_ExaminationCriteria_EditEx(
          'ge_ExaminationCriteria_EditEx',
          new ge_ExaminationCriteriaCRUDEx(),
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
