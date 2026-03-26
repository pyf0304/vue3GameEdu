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
              <span id="spnUserId_d" name="spnUserId_d" CssClass="col-form-label text-right"
                >用户ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserId_d" name="lblUserId_d" class="text-primary" style="width: 150px">
              </label>
            </td>
            <td class="text-right">
              <span id="spnCredits_d" name="spnCredits_d" CssClass="col-form-label text-right"
                >积分</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCredits_d"
                name="lblCredits_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnGetInstructions_d"
                name="spnGetInstructions_d"
                CssClass="col-form-label text-right"
                >获取说明</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGetInstructions_d"
                name="lblGetInstructions_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnGetDate_d" name="spnGetDate_d" CssClass="col-form-label text-right"
                >获取日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGetDate_d"
                name="lblGetDate_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnUpdUser_d" name="spnUpdUser_d" CssClass="col-form-label text-right"
                >修改人</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUpdUser_d"
                name="lblUpdUser_d"
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
              <span id="spnEduClsName_d" name="spnEduClsName_d" CssClass="col-form-label text-right"
                >教学班名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblEduClsName_d"
                name="lblEduClsName_d"
                class="text-primary"
                style="width: 100px"
              >
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnGameLevelName_d"
                name="spnGameLevelName_d"
                CssClass="col-form-label text-right"
                >游戏关卡名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGameLevelName_d"
                name="lblGameLevelName_d"
                class="text-primary"
                style="width: 100px"
              >
              </label>
            </td>
          </tr>
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
              <span id="spnPassed_d" name="spnPassed_d" CssClass="col-form-label text-right"
                >是否合格</span
              >
            </td>
            <td class="text-left">
              <label id="lblPassed_d" name="lblPassed_d" class="text-primary" style="width: 150px">
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
      <el-button id="btnCancelge_UserCreditsLog" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ge_UserCreditsLog_DetailEx } from '@/views/GameLearn/ge_UserCreditsLog_DetailEx';
  export default defineComponent({
    name: 'GeUserCreditsLogDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('用户积分日志详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelge_UserCreditsLog':
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
          case 'btnCancelge_UserCreditsLog':
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
      btnge_UserCreditsLog_Detail_Click(strCommandName: string, strKeyId: string) {
        // ge_UserCreditsLog_DetailEx.btnDetail_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
