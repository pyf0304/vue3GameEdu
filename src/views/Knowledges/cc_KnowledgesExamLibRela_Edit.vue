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
          <tr id="trCourseKnowledgeId">
            <td class="text-right">
              <label
                id="lblQuestionId"
                name="lblQuestionId"
                class="col-form-label text-right"
                style="width: 90px"
                >题目
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionId"
                v-model.number="questionId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQuestionnaire"
                  :key="index"
                  :value="item.questionId"
                >
                  {{ item.questionName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblCourseKnowledgeId"
                name="lblCourseKnowledgeId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseKnowledgeId"
                v-model="courseKnowledgeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrcc_CourseKnowledges"
                  :key="index"
                  :value="item.courseKnowledgeId"
                >
                  {{ item.knowledgeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trNegativeCorrelation">
            <td class="text-right">
              <label
                id="lblPositiveCorrelation"
                name="lblPositiveCorrelation"
                class="col-form-label text-right"
                style="width: 90px"
                >正相关度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPositiveCorrelation"
                v-model.number="positiveCorrelation"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblNegativeCorrelation"
                name="lblNegativeCorrelation"
                class="col-form-label text-right"
                style="width: 90px"
                >负相关度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtNegativeCorrelation"
                v-model.number="negativeCorrelation"
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
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelcc_KnowledgesExamLibRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_KnowledgesExamLibRela"
        type="primary"
        @click="btncc_KnowledgesExamLibRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import cc_KnowledgesExamLibRela_EditEx from '@/views/Knowledges/cc_KnowledgesExamLibRela_EditEx';
  import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
  import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  import { Questionnaire_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
  import { cc_CourseKnowledges_GetObjLstCache } from 'share-stu-study-base-lib';
  import {
    refDivEdit,
    CourseId_Session,
  } from '@/views/Knowledges/cc_KnowledgesExamLibRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'CcKnowledgesExamLibRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const courseId = ref('');
      const questionId = ref(0);
      const courseKnowledgeId = ref('');
      const positiveCorrelation = ref(0);
      const negativeCorrelation = ref(0);
      const memo = ref('');
      const updDate = ref('');
      const updUserId = ref('');

      const arrQuestionnaire = ref<clsQuestionnaireEN[]>([]);
      const arrcc_CourseKnowledges = ref<clscc_CourseKnowledgesEN_T[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strCourseId:
  */
      async function getArrQuestionnaire(strCourseId: string) {
        const strCondition = `courseId = '${strCourseId}'`;
        const arrObjLstSel = await Questionnaire_GetObjLstAsync(strCondition);
        if (arrObjLstSel == null) return;
        arrQuestionnaire.value.length = 0;
        const obj0 = new clsQuestionnaireEN();
        obj0.questionId = 0;
        obj0.questionName = '请选择题目...';
        arrQuestionnaire.value.push(obj0);
        arrObjLstSel.forEach((x) => arrQuestionnaire.value.push(x));
        questionId.value = 0;
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strCourseId:
  */
      async function getArrcc_CourseKnowledges(strCourseId: string) {
        let arrObjLstSel = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
        if (arrObjLstSel == null) return;
        arrcc_CourseKnowledges.value.length = 0;
        const obj0 = new clscc_CourseKnowledgesEN();
        obj0.courseKnowledgeId = '0';
        obj0.knowledgeName = '请选择知识点...';
        arrcc_CourseKnowledges.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.courseId == strCourseId);
        arrObjLstSel.forEach((x) => arrcc_CourseKnowledges.value.push(x));
        courseKnowledgeId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //缓存分类变量;//在switch中未找到相关类型: tsCache(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)

        await getArrQuestionnaire(strCourseId); //编辑区域

        await getArrcc_CourseKnowledges(strCourseId); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_KnowledgesExamLibRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_KnowledgesExamLibRelaObj() {
        const pobjcc_KnowledgesExamLibRelaEN = new clscc_KnowledgesExamLibRelaEN();
        pobjcc_KnowledgesExamLibRelaEN.SetCourseId(CourseId_Session.value); // 课程
        pobjcc_KnowledgesExamLibRelaEN.SetQuestionId(questionId.value); // 题目
        pobjcc_KnowledgesExamLibRelaEN.SetCourseKnowledgeId(courseKnowledgeId.value); // 知识点Id
        pobjcc_KnowledgesExamLibRelaEN.SetPositiveCorrelation(Number(positiveCorrelation.value)); // 正相关度
        pobjcc_KnowledgesExamLibRelaEN.SetNegativeCorrelation(Number(negativeCorrelation.value)); // 负相关度
        pobjcc_KnowledgesExamLibRelaEN.SetMemo(memo.value); // 备注
        pobjcc_KnowledgesExamLibRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_KnowledgesExamLibRelaEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjcc_KnowledgesExamLibRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_KnowledgesExamLibRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_KnowledgesExamLibRelaObj(
        pobjcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN,
      ) {
        questionId.value = pobjcc_KnowledgesExamLibRelaEN.questionId; // 题目
        courseKnowledgeId.value = pobjcc_KnowledgesExamLibRelaEN.courseKnowledgeId; // 知识点Id
        positiveCorrelation.value = pobjcc_KnowledgesExamLibRelaEN.positiveCorrelation; // 正相关度
        negativeCorrelation.value = pobjcc_KnowledgesExamLibRelaEN.negativeCorrelation; // 负相关度
        memo.value = pobjcc_KnowledgesExamLibRelaEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        questionId.value = 0;
        courseKnowledgeId.value = '0';
        positiveCorrelation.value = 0;
        negativeCorrelation.value = 0;
        memo.value = '';
      }
      const strTitle = ref('知识点习题关系编辑');
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
        GetEditDatacc_KnowledgesExamLibRelaObj,
        ShowDataFromcc_KnowledgesExamLibRelaObj,
        Clear,
        courseId,
        questionId,
        courseKnowledgeId,
        positiveCorrelation,
        negativeCorrelation,
        memo,
        updDate,
        updUserId,
        arrQuestionnaire,
        arrcc_CourseKnowledges,
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
      btncc_KnowledgesExamLibRela_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_KnowledgesExamLibRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
