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
        style="width: 700px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trOperationTypeId">
            <td class="text-right">
              <label
                id="lblOperationTypeId"
                name="lblOperationTypeId"
                class="col-form-label text-right"
                style="width: 90px"
              >
                操作类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlOperationTypeId"
                name="ddlOperationTypeId"
                class="form-control-sm"
                style="width: 200px"
                @change="ddlOperationTypeId_Change"
              ></select>
            </td>
          </tr>
          <tr id="trControlTypeId">
            <td class="text-right">
              <label
                id="lblControlTypeId"
                name="lblControlTypeId"
                class="col-form-label text-right"
                style="width: 90px"
              >
                控件类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlControlTypeId"
                name="ddlControlTypeId"
                class="form-control-sm"
                style="width: 200px"
              ></select>
            </td>
          </tr>
          <tr id="trControlId">
            <td class="text-right">
              <label
                id="lblControlId"
                name="lblControlId"
                class="col-form-label text-right"
                style="width: 90px"
              >
                控件Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtControlId"
                name="txtControlId"
                class="form-control-sm"
                style="width: 200px"
              />
            </td>
          </tr>

          <tr id="trAttributeId">
            <td class="text-right">
              <label
                id="lblAttributeId"
                name="lblAttributeId"
                class="col-form-label text-right"
                style="width: 90px"
              >
                控件属性
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlAttributeId"
                name="ddlAttributeId"
                class="form-control-sm"
                style="width: 200px"
              ></select>
            </td>
          </tr>
          <tr id="trControlValue">
            <td class="text-right">
              <label
                id="lblControlValue"
                name="lblControlValue"
                class="col-form-label text-right"
                style="width: 90px"
              >
                控件值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtControlValue"
                name="txtControlValue"
                class="form-control-sm"
                style="width: 200px"
              />
            </td>
          </tr>
          <tr id="trEventType">
            <td class="text-right">
              <label
                id="lblEventTypeId"
                name="lblEventTypeId"
                class="col-form-label text-right"
                style="width: 90px"
              >
                事件
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlEventTypeId"
                name="ddlEventTypeId"
                class="form-control-sm"
                style="width: 200px"
              ></select>
            </td>
          </tr>
          <tr id="trFunctionName">
            <td class="text-right">
              <label
                id="lblFunctionName"
                name="lblFunctionName"
                class="col-form-label text-right"
                style="width: 90px"
              >
                函数名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFunctionName"
                name="txtFunctionName"
                class="form-control-sm"
                style="width: 200px"
              />
            </td>
          </tr>
          <tr id="trExaminationType">
            <td class="text-right">
              <label
                id="lblExaminationTypeId"
                name="lblExaminationTypeId"
                class="col-form-label text-right"
                style="width: 90px"
              >
                检查类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlExaminationTypeId"
                name="ddlExaminationTypeId"
                class="form-control-sm"
                style="width: 200px"
              ></select>
            </td>
          </tr>

          <tr id="trCheckMemo">
            <td class="text-right">
              <label
                id="lblCheckMemo"
                name="lblCheckMemo"
                class="col-form-label text-right"
                style="width: 90px"
              >
                检查描述
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtCheckMemo"
                name="txtCheckMemo"
                class="form-control-sm"
                style="width: 350px"
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
              >
                备注
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input id="txtMemo" name="txtMemo" class="form-control-sm" style="width: 350px" />
            </td>
          </tr> </tbody
      ></table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelge_InspectProcess" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_InspectProcess"
        type="primary"
        @click="btnge_InspectProcess_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ge_InspectProcessCRUDEx } from '@/views/GameLearn/ge_InspectProcessCRUDEx';
  import { ge_InspectProcess_EditEx } from '@/views/GameLearn/ge_InspectProcess_EditEx';
  export default defineComponent({
    name: 'GeInspectProcessEdit',
    components: {
      // 组件注册
    },
    setup() {
      const operationTypeId = ref('');
      const controlTypeId = ref('');
      const controlId = ref('');
      const attributeId = ref('');
      const controlValue = ref('');
      const examinationTypeId = ref('');
      const eventTypeId = ref('');
      const functionName = ref('');
      const checkMemo = ref('');
      const memo = ref('');
      const strTitle = ref('检查过程表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_InspectProcess':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitge_InspectProcess':
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
          case 'btnCancelge_InspectProcess':
            return strCancelButtonText.value;
          case 'btnSubmitge_InspectProcess':
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
        operationTypeId,
        controlTypeId,
        controlId,
        attributeId,
        controlValue,
        examinationTypeId,
        eventTypeId,
        functionName,
        checkMemo,
        memo,
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
        //ge_InspectProcess_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnge_InspectProcess_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_InspectProcess_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ge_InspectProcess(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ge_InspectProcess_EditEx(
          'ge_InspectProcess_EditEx',
          new ge_InspectProcessCRUDEx(),
        );
        objPage.btnSubmit_Click();
      },

      async IsShowInspectProcess_Edit() {
        switch (this.operationTypeId) {
          case '0001':
            $('#trControlTypeId').show(); //控件类型
            $('#trControlId').show(); //控件Id
            $('#trAttributeId').show(); //控件属性
            $('#trControlValue').show(); //控件值
            $('#trEventType').hide(); //事件
            $('#trFunctionName').hide(); //函数名
            $('#trExaminationType').hide(); //检查类型
            $('#trCheckMemo').hide(); //检查描述
            break;
          case '0002':
            $('#trControlTypeId').hide(); //控件类型
            $('#trControlId').hide(); //控件Id
            $('#trAttributeId').hide(); //控件属性
            $('#trControlValue').hide(); //控件值
            $('#trEventType').hide(); //事件
            $('#trFunctionName').show(); //函数名
            $('#trExaminationType').hide(); //检查类型
            $('#trCheckMemo').hide(); //检查描述
            break;
          case '0003':
            $('#trControlTypeId').show(); //控件类型
            $('#trControlId').show(); //控件Id
            $('#trAttributeId').hide(); //控件属性
            $('#trControlValue').hide(); //控件值
            $('#trEventType').show(); //事件
            $('#trFunctionName').show(); //函数名
            $('#trExaminationType').hide(); //检查类型
            $('#trCheckMemo').hide(); //检查描述
            break;
          case '0005':
            $('#trControlTypeId').show(); //控件类型
            $('#trControlId').show(); //控件Id
            $('#trAttributeId').show(); //控件属性
            $('#trControlValue').show(); //控件值
            $('#trEventType').hide(); //事件
            $('#trFunctionName').hide(); //函数名
            $('#trExaminationType').show(); //检查类型
            $('#trCheckMemo').show(); //检查描述
            break;
        }
      },
      /* 函数功能:系统生成的Change事件函数
      (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
    */
      async ddlOperationTypeId_Change() {
        //判断选择的类型是否是知识结构图，如果是则显示结构类型；

        this.IsShowInspectProcess_Edit();
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
