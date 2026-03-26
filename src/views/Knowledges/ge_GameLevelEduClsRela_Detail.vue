<template>
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
                id="spnGameLevelId_d"
                name="spnGameLevelId_d"
                CssClass="col-form-label text-right"
                >游戏关卡Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGameLevelId_d"
                name="lblGameLevelId_d"
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
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
              </label>
            </td>
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
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnLevelModeTypeName_d"
                name="spnLevelModeTypeName_d"
                CssClass="col-form-label text-right"
                >模式名</span
              >
            </td>
            <td class="text-left">
              <label id="lblLevelModeTypeName_d" name="lblLevelModeTypeName_d" class="text-primary">
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
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnEduClsName_d" name="spnEduClsName_d" CssClass="col-form-label text-right"
                >教学班名</span
              >
            </td>
            <td class="text-left">
              <label id="lblEduClsName_d" name="lblEduClsName_d" class="text-primary"> </label>
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
                id="spnGameLevelName_d"
                name="spnGameLevelName_d"
                CssClass="col-form-label text-right"
                >游戏关卡名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblGameLevelName_d" name="lblGameLevelName_d" class="text-primary">
              </label>
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelge_GameLevelEduClsRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ge_GameLevelEduClsRela_DetailEx } from '@/views/Knowledges/ge_GameLevelEduClsRela_DetailEx';
  export default defineComponent({
    name: 'GeGameLevelEduClsRelaDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('游戏关卡教学班关系详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_GameLevelEduClsRela':
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
          case 'btnCancelge_GameLevelEduClsRela':
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
      btnge_GameLevelEduClsRela_Detail_Click(strCommandName: string, strKeyId: string) {
        // ge_GameLevelEduClsRela_DetailEx.btnDetail_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
