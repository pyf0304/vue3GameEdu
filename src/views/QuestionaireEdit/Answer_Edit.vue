<template>
  <!-- 编辑层 -->

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
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trAnswerContent">
            <td class="text-right">
              <label
                id="lblAnswerContent"
                name="lblAnswerContent"
                class="col-form-label text-right"
                style="width: 90px"
                >答案内容
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtAnswerContent"
                v-model="answerContent"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trIsShow">
            <td class="text-left" ColSpan="5">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsShow" v-model="isShow" type="checkbox" Text="是否启用" /><label
                  for="chkIsShow"
                  >是否启用</label
                ></span
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
                >备注
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trAnswerFillInBlank">
            <td class="text-right">
              <label
                id="lblAnswerFillInBlank"
                name="lblAnswerFillInBlank"
                class="col-form-label text-right"
                style="width: 90px"
                >填空题答案
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAnswerFillInBlank"
                v-model="answerFillInBlank"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelAnswer" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitAnswer" type="primary" @click="btnAnswer_Edit_Click('Submit', '')">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { Answer_EditEx } from '@/views/QuestionaireEdit/Answer_EditEx';
  import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
  import { refDivEdit, CourseId_Session } from '@/views/QuestionaireEdit/AnswerVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'AnswerEdit',
    components: {
      // 组件注册
    },
    setup() {
      const answerContent = ref('');
      const isShow = ref(true);
      const memo = ref('');
      const answerFillInBlank = ref('');
      const courseId = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjAnswerEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataAnswerObj() {
        const pobjAnswerEN = new clsAnswerEN();
        pobjAnswerEN.SetAnswerContent(answerContent.value); // 答案内容
        pobjAnswerEN.SetIsShow(isShow.value); // 是否启用
        pobjAnswerEN.SetMemo(memo.value); // 备注
        pobjAnswerEN.SetAnswerFillInBlank(answerFillInBlank.value); // 填空题答案
        pobjAnswerEN.SetCourseId(CourseId_Session.value); // 课程Id
        return pobjAnswerEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjAnswerEN">表实体类对象</param>
       **/
      async function ShowDataFromAnswerObj(pobjAnswerEN: clsAnswerEN) {
        answerContent.value = pobjAnswerEN.answerContent; // 答案内容
        isShow.value = pobjAnswerEN.isShow; // 是否启用
        memo.value = pobjAnswerEN.memo; // 备注
        answerFillInBlank.value = pobjAnswerEN.answerFillInBlank; // 填空题答案
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        answerContent.value = '';
        isShow.value = false;
        memo.value = '';
        answerFillInBlank.value = '';
      }
      const strTitle = ref('答案编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataAnswerObj,
        ShowDataFromAnswerObj,
        Clear,
        answerContent,
        isShow,
        memo,
        answerFillInBlank,
        courseId,
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

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnAnswer_Edit_Click(strCommandName: string, strKeyId: string) {
        Answer_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
