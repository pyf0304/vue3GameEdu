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
          <tr id="trOptionIndex">
            <td class="text-right">
              <label
                id="lblOptionName"
                name="lblOptionName"
                class="col-form-label text-right"
                style="width: 90px"
                >选项名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOptionName"
                v-model="optionName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblOptionIndex"
                name="lblOptionIndex"
                class="col-form-label text-right"
                style="width: 90px"
                >选项序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOptionIndex"
                v-model.number="optionIndex"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trOptionTitle">
            <td class="text-right">
              <label
                id="lblOptionTitle"
                name="lblOptionTitle"
                class="col-form-label text-right"
                style="width: 90px"
                >选项标题
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtOptionTitle"
                v-model="optionTitle"
                class="form-control form-control-sm"
                style="width: 300px"
              />
            </td>
          </tr>
          <tr id="trOptionContent">
            <td class="text-right">
              <label
                id="lblOptionContent"
                name="lblOptionContent"
                class="col-form-label text-right"
                style="width: 90px"
                >选项内容
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtOptionContent"
                v-model="optionContent"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trIsShow">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsCorrect"
                  v-model="isCorrect"
                  type="checkbox"
                  Text="是否正确"
                /><label for="chkIsCorrect">是否正确</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
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
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelQuestionOptions" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQuestionOptions"
        type="primary"
        @click="btnQuestionOptions_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { QuestionOptions_EditEx } from '@/views/QuestionaireEdit/QuestionOptions_EditEx';
  import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
  import {
    refDivEdit,
    QuestionId_Static,
    CourseId_Session,
  } from '@/views/QuestionaireEdit/QuestionOptionsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { courseId_f } from './QuestionnaireVueShare';

  export default defineComponent({
    name: 'QuestionOptionsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const optionName = ref('');
      const optionIndex = ref(0);
      const optionTitle = ref('');
      const optionContent = ref('');
      const isCorrect = ref(true);
      const isShow = ref(true);
      const memo = ref('');
      const questionId = ref(0);
      const updUser = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQuestionOptionsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQuestionOptionsObj() {
        const pobjQuestionOptionsEN = new clsQuestionOptionsEN();
        pobjQuestionOptionsEN.SetOptionName(optionName.value); // 选项名称
        pobjQuestionOptionsEN.SetOptionIndex(Number(optionIndex.value)); // 选项序号
        pobjQuestionOptionsEN.SetOptionTitle(optionTitle.value); // 选项标题
        pobjQuestionOptionsEN.SetOptionContent(optionContent.value); // 选项内容
        pobjQuestionOptionsEN.SetIsCorrect(isCorrect.value); // 是否正确
        pobjQuestionOptionsEN.SetIsShow(isShow.value); // 是否启用
        pobjQuestionOptionsEN.SetMemo(memo.value); // 备注
        pobjQuestionOptionsEN.SetQuestionId(QuestionId_Static.value); // 题目ID
        pobjQuestionOptionsEN.SetCourseId(CourseId_Session.value); // 题目ID

        pobjQuestionOptionsEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjQuestionOptionsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期

        return pobjQuestionOptionsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQuestionOptionsEN">表实体类对象</param>
       **/
      async function ShowDataFromQuestionOptionsObj(pobjQuestionOptionsEN: clsQuestionOptionsEN) {
        optionName.value = pobjQuestionOptionsEN.optionName; // 选项名称
        optionIndex.value = pobjQuestionOptionsEN.optionIndex; // 选项序号
        optionTitle.value = pobjQuestionOptionsEN.optionTitle; // 选项标题
        optionContent.value = pobjQuestionOptionsEN.optionContent; // 选项内容
        isCorrect.value = pobjQuestionOptionsEN.isCorrect; // 是否正确
        isShow.value = pobjQuestionOptionsEN.isShow; // 是否启用
        memo.value = pobjQuestionOptionsEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        optionName.value = '';
        optionIndex.value = 0;
        optionTitle.value = '';
        optionContent.value = '';
        isCorrect.value = false;
        isShow.value = false;
        memo.value = '';
      }
      const strTitle = ref('题目选项编辑');
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
        GetEditDataQuestionOptionsObj,
        ShowDataFromQuestionOptionsObj,
        Clear,
        optionName,
        optionIndex,
        optionTitle,
        optionContent,
        isCorrect,
        isShow,
        memo,
        questionId,
        updUser,
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
      btnQuestionOptions_Edit_Click(strCommandName: string, strKeyId: string) {
        QuestionOptions_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
