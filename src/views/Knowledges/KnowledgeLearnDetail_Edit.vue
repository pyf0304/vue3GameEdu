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
          <tr id="trLearnDate">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId"
                name="txtUserId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLearnDate"
                name="lblLearnDate"
                class="col-form-label text-right"
                style="width: 90px"
                >学习日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLearnDate"
                name="txtLearnDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdCase">
            <td class="text-right">
              <label
                id="lblLearnModeId"
                name="lblLearnModeId"
                class="col-form-label text-right"
                style="width: 90px"
                >学习模式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlLearnModeId"
                name="ddlLearnModeId"
                class="form-control form-control-sm"
                style="width: 150px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblIdCase"
                name="lblIdCase"
                class="col-form-label text-right"
                style="width: 90px"
                >案例流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdCase"
                name="txtIdCase"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsRight">
            <td class="text-right">
              <label
                id="lblIdCaseType"
                name="lblIdCaseType"
                class="col-form-label text-right"
                style="width: 90px"
                >案例类型流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdCaseType"
                name="txtIdCaseType"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsRight" name="chkIsRight" type="checkbox" Text="是否正确" /><label
                  for="chkIsRight"
                  >是否正确</label
                ></span
              >
            </td>
          </tr>
          <tr id="trMasterDegree">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsMaster" name="chkIsMaster" type="checkbox" Text="是否掌握" /><label
                  for="chkIsMaster"
                  >是否掌握</label
                ></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblMasterDegree"
                name="lblMasterDegree"
                class="col-form-label text-right"
                style="width: 90px"
                >掌握程度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMasterDegree"
                name="txtMasterDegree"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMarkTime">
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
                id="lblMarkTime"
                name="lblMarkTime"
                class="col-form-label text-right"
                style="width: 90px"
                >批改时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMarkTime"
                name="txtMarkTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsAnalysis"
                  name="chkIsAnalysis"
                  type="checkbox"
                  Text="是否分析"
                /><label for="chkIsAnalysis">是否分析</label></span
              >
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
      <el-button id="btnCancelKnowledgeLearnDetail" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitKnowledgeLearnDetail"
        type="primary"
        @click="btnKnowledgeLearnDetail_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { KnowledgeLearnDetailCRUDEx } from '@/views/Knowledges/KnowledgeLearnDetailCRUDEx';
  import { KnowledgeLearnDetail_EditEx } from '@/views/Knowledges/KnowledgeLearnDetail_EditEx';
  export default defineComponent({
    name: 'KnowledgeLearnDetailEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点学习情况编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelKnowledgeLearnDetail':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitKnowledgeLearnDetail':
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
          case 'btnCancelKnowledgeLearnDetail':
            return strCancelButtonText.value;
          case 'btnSubmitKnowledgeLearnDetail':
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
        //KnowledgeLearnDetail_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnKnowledgeLearnDetail_Edit_Click(strCommandName: string, strKeyId: string) {
        KnowledgeLearnDetail_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_KnowledgeLearnDetail(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new KnowledgeLearnDetail_EditEx(
          'KnowledgeLearnDetail_EditEx',
          new KnowledgeLearnDetailCRUDEx(),
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
