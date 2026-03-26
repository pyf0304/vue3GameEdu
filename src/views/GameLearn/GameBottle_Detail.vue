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
            <td class="text-right">
              <span
                id="spnUserId_Throw_d"
                name="spnUserId_Throw_d"
                CssClass="col-form-label text-right"
                >用户ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUserId_Throw_d"
                name="lblUserId_Throw_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnThrowTime_d" name="spnThrowTime_d" CssClass="col-form-label text-right"
                >扔的时间</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblThrowTime_d"
                name="lblThrowTime_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnUserId_PickUp_d"
                name="spnUserId_PickUp_d"
                CssClass="col-form-label text-right"
                >用户ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUserId_PickUp_d"
                name="lblUserId_PickUp_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnPickUpTime_d" name="spnPickUpTime_d" CssClass="col-form-label text-right"
                >捞的时间</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPickUpTime_d"
                name="lblPickUpTime_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFinishedTime_d"
                name="spnFinishedTime_d"
                CssClass="col-form-label text-right"
                >完成时间</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFinishedTime_d"
                name="lblFinishedTime_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnBottleStateId_d"
                name="spnBottleStateId_d"
                CssClass="col-form-label text-right"
                >操作方式Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblBottleStateId_d"
                name="lblBottleStateId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
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
          </tr>
          <tr>
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
                id="spnQuestionName_d"
                name="spnQuestionName_d"
                CssClass="col-form-label text-right"
                >题目名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblQuestionName_d" name="lblQuestionName_d" class="text-primary"> </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnQuestionTypeId_d"
                name="spnQuestionTypeId_d"
                CssClass="col-form-label text-right"
                >题目类型Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblQuestionTypeId_d" name="lblQuestionTypeId_d" class="text-primary">
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnUserName_Throw_d"
                name="spnUserName_Throw_d"
                CssClass="col-form-label text-right"
                >用户名_扔</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserName_Throw_d" name="lblUserName_Throw_d" class="text-primary">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnUserName_PickUp_d"
                name="spnUserName_PickUp_d"
                CssClass="col-form-label text-right"
                >用户名_捞</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserName_PickUp_d" name="lblUserName_PickUp_d" class="text-primary">
              </label>
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelGameBottle" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { GameBottle_DetailEx } from '@/views/GameLearn/GameBottle_DetailEx';
  export default defineComponent({
    name: 'GameBottle_Detail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('游戏瓶详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelGameBottle':
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
          case 'btnCancelGameBottle':
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
      btnGameBottle_Detail_Click(strCommandName: string, strKeyId: string) {
        GameBottle_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
