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
              <label id="lblGameLevelName" class="col-form-label text-right" style="width: 90px">
                游戏关卡名称
              </label>
            </td>
            <td class="text-left">
              <input id="txtGameLevelName" class="form-control-sm" style="width: 150px" />
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
          </tr>
          <tr id="trQuestionTypeId">
            <td class="text-right">
              <label id="lblLevelModeTypeId" class="col-form-label text-right" style="width: 90px">
                模式
              </label>
            </td>
            <td class="text-left">
              <select id="ddlLevelModeTypeId" class="form-control-sm" style="width: 150px"></select>
            </td>
            <td class="text-right">
              <label id="lblQuestionTypeId" class="col-form-label text-right" style="width: 90px">
                题目类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionTypeId"
                name="ddlQuestionTypeId"
                class="form-control-sm"
                style="width: 150px"
              ></select>
            </td>
          </tr>
          <tr id="trQuestionNum">
            <td class="text-right">
              <label
                id="lblQuestionScore"
                name="lblQuestionScore"
                class="col-form-label text-right"
                style="width: 90px"
              >
                题目分
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtQuestionScore"
                name="txtQuestionScore"
                class="form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblQuestionNum"
                name="lblQuestionNum"
                class="col-form-label text-right"
                style="width: 90px"
              >
                题目数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtQuestionNum"
                name="txtQuestionNum"
                class="form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trEndTime">
            <td class="text-right">
              <label
                id="lblStartTime"
                name="lblStartTime"
                class="col-form-label text-right"
                style="width: 90px"
              >
                开始时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStartTime"
                name="txtStartTime"
                class="form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblEndTime"
                name="lblEndTime"
                class="col-form-label text-right"
                style="width: 90px"
              >
                结束时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtEndTime"
                name="txtEndTime"
                class="form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <!-- <tr id="trInUse">
          <td class="text-left" ColSpan="2">
            <span class="form-control-sm" style="width: 150px">
              <input type="checkbox" id="chkInUse" name="chkInUse" Text="是否在用" /><label
                for="chkInUse"
                >是否在用</label
              >
            </span>
          </td>
        </tr> -->
          <tr id="trIsRecommend">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkInUse" name="chkInUse" type="checkbox" Text="是否在用" /><label
                  for="chkInUse"
                  >是否在用</label
                ></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsRecommend"
                  name="chkIsRecommend"
                  type="checkbox"
                  Text="是否推荐"
                /><label for="chkIsRecommend">是否推荐</label></span
              >
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
              <textarea
                id="txtMemo"
                name="txtMemo"
                class="form-control-sm"
                rows="5"
                cols="50"
                style="width: 350px"
              />
            </td>
          </tr> </tbody
      ></table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelge_GameLevel" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_GameLevel"
        type="primary"
        @click="btnge_GameLevel_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ge_GameLevelCRUDEx } from '@/views/Knowledges/ge_GameLevelCRUDEx';
  import ge_GameLevel_EditEx from '@/views/Knowledges/ge_GameLevel_EditEx';
  export default defineComponent({
    name: 'GeGameLevelEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('游戏关卡表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_GameLevel':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitge_GameLevel':
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
          case 'btnCancelge_GameLevel':
            return strCancelButtonText.value;
          case 'btnSubmitge_GameLevel':
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

      // layui.use(['laydate', 'form'], function () {
      //   const laydate = layui.laydate;

      //   //日期
      //   laydate.render({
      //     elem: '#txtStartTime', //指定元素
      //     type: 'datetime',
      //     //format: 'yyyy-MM-dd HH:mm',
      //     //range: true,//或 range: '~' 来自定义分割字符
      //   });

      //   //日期
      //   laydate.render({
      //     elem: '#txtEndTime', //指定元素
      //     type: 'datetime',
      //     //format: 'yyyy-MM-dd HH:mm',
      //     //range: true,
      //   });

      //   ////时间选择器
      //   //laydate.render({
      //   //    elem: '#txtTime_q'
      //   //    , type: 'time'
      //   //});
      // });

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
        //ge_GameLevel_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnge_GameLevel_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_GameLevel_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ge_GameLevel(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ge_GameLevel_EditEx('ge_GameLevel_EditEx', new ge_GameLevelCRUDEx());
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
