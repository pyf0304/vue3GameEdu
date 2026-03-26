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
                id="lblIdTeachPlanKnowledge"
                name="lblIdTeachPlanKnowledge"
                class="col-form-label text-right"
                style="width: 90px"
                >教学计划知识点流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdTeachPlanKnowledge"
                name="txtIdTeachPlanKnowledge"
                class="form-control form-control-sm"
                style="width: 150px"
                v-model="idTeachPlanKnowledge"
              />
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
                name="ddlCourseKnowledgeId"
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
          <tr id="trAssessmentMethodId">
            <td class="text-right">
              <label
                id="lblTeachingMethodId"
                name="lblTeachingMethodId"
                class="col-form-label text-right"
                style="width: 90px"
                >教学方式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlTeachingMethodId"
                name="ddlTeachingMethodId"
                v-model="teachingMethodId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrTeachingMethods"
                  :key="index"
                  :value="item.teachingMethodId"
                >
                  {{ item.teachingMethodName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblAssessmentMethodId"
                name="lblAssessmentMethodId"
                class="col-form-label text-right"
                style="width: 90px"
                >考核方式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlAssessmentMethodId"
                name="ddlAssessmentMethodId"
                v-model="assessmentMethodId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrAssessmentMethods"
                  :key="index"
                  :value="item.assessmentMethodId"
                >
                  {{ item.assessmentMethodName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trMemo">
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
                v-model="updDate"
              />
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
                v-model="memo"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelJxTeachPlanKnowledge" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitJxTeachPlanKnowledge"
        type="primary"
        @click="btnJxTeachPlanKnowledge_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { JxTeachPlanKnowledge_EditEx } from '@/views/TeachingPlan/JxTeachPlanKnowledge_EditEx';
  import { clsJxTeachPlanKnowledgeEN } from '@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeEN';
  import { clsTeachingMethodsEN } from '@/ts/L0Entity/SysPara/clsTeachingMethodsEN';
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  import { clsAssessmentMethodsEN } from '@/ts/L0Entity/SysPara/clsAssessmentMethodsEN';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { TeachingMethods_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsTeachingMethodsWApi';
  import { cc_CourseKnowledges_GetObjLstCache } from 'share-stu-study-base-lib';
  import { AssessmentMethods_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsAssessmentMethodsWApi';
  import { cc_Course_GetObjLstCache } from 'share-stu-study-base-lib';
  import { useUserStore } from '@/store/modulesShare/user';
  import { useRoute } from 'vue-router';
  import { JxTeachingPlan_GetObjByIdTeachingPlanAsync } from '@/ts/L3ForWApi/TeachingPlan/clsJxTeachingPlanWApi';

  const CourseIdStatic = ref(''); //5、处理添加、修改记录时PutData所用的界面静态变量, 用于在界面编辑函数中信息交互
  const IdTeachingPlanStatic = ref(''); //5、处理添加、修改记录时PutData所用的界面静态变量, 用于在界面编辑函数中信息交互
  export default defineComponent({
    name: 'JxTeachPlanKnowledgeEditBak',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const route = useRoute(); // 获取当前路由信息
      if (typeof route.params.idTeachingPlan === 'string') {
        IdTeachingPlanStatic.value = route.params.idTeachingPlan;

        // clsPrivateSessionStorage.viewId = viewId.value;
      }
      onMounted(async () => {
        const objJxTeachingPlan = await JxTeachingPlan_GetObjByIdTeachingPlanAsync(
          IdTeachingPlanStatic.value,
        );
        if (objJxTeachingPlan != null) {
          CourseIdStatic.value = objJxTeachingPlan.courseId;
        }
      });

      const idTeachPlanKnowledge = ref('');
      const idTeachingPlan = ref('0');
      const courseKnowledgeId = ref('0');
      const teachingMethodId = ref('0');
      const assessmentMethodId = ref('0');
      const updDate = ref('');
      const memo = ref('');
      const courseId = ref('0');
      const updUser = ref('');

      const arrTeachingMethods = ref<clsTeachingMethodsEN[]>([]);
      const arrcc_CourseKnowledges = ref<clscc_CourseKnowledgesEN_T[]>([]);
      const arrAssessmentMethods = ref<clsAssessmentMethodsEN[]>([]);
      const arrcc_Course = ref<clscc_CourseEN_T[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrTeachingMethods() {
        const arrObjLstSel = await TeachingMethods_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrTeachingMethods.value.length = 0;
        const obj0 = new clsTeachingMethodsEN();
        obj0.teachingMethodId = '0';
        obj0.teachingMethodName = '请选择教学方式...';
        arrTeachingMethods.value.push(obj0);
        arrObjLstSel.forEach((x) => arrTeachingMethods.value.push(x));
        idTeachingPlan.value = '0';
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
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrAssessmentMethods() {
        const arrObjLstSel = await AssessmentMethods_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrAssessmentMethods.value.length = 0;
        const obj0 = new clsAssessmentMethodsEN();
        obj0.assessmentMethodId = '0';
        obj0.assessmentMethodName = '请选择考核方式...';
        arrAssessmentMethods.value.push(obj0);
        arrObjLstSel.forEach((x) => arrAssessmentMethods.value.push(x));
        assessmentMethodId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrcc_Course() {
        const arrObjLstSel = await cc_Course_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrcc_Course.value.length = 0;
        const obj0 = new clscc_CourseEN();
        obj0.courseId = '0';
        obj0.courseName = '请选择课程...';
        arrcc_Course.value.push(obj0);
        arrObjLstSel.forEach((x) => arrcc_Course.value.push(x));
        courseId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseIdStatic = CourseIdStatic.value; //静态变量;//静态变量

        await getArrcc_CourseKnowledges(strCourseIdStatic); //编辑区域

        await getArrTeachingMethods(); //编辑区域

        await getArrAssessmentMethods(); //编辑区域
      }

      /** 函1数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_PutDataToClass)
       * @param pobjJxTeachPlanKnowledgeEN">数据传输的目的类对象</param>
       **/
      async function PutDataToJxTeachPlanKnowledgeClass(
        pobjJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN,
      ) {
        pobjJxTeachPlanKnowledgeEN.SetIdTeachPlanKnowledge(idTeachPlanKnowledge.value); // 教学计划知识点流水号
        pobjJxTeachPlanKnowledgeEN.SetIdTeachingPlan(IdTeachingPlanStatic.value); // 教案流水号
        pobjJxTeachPlanKnowledgeEN.SetCourseKnowledgeId(courseKnowledgeId.value); // 知识点Id
        pobjJxTeachPlanKnowledgeEN.SetTeachingMethodId(teachingMethodId.value); // 教学方式Id
        pobjJxTeachPlanKnowledgeEN.SetAssessmentMethodId(assessmentMethodId.value); // 考核方式Id
        pobjJxTeachPlanKnowledgeEN.SetUpdDate(updDate.value); // 修改日期
        pobjJxTeachPlanKnowledgeEN.SetMemo(memo.value); // 备注
        pobjJxTeachPlanKnowledgeEN.SetCourseId(CourseIdStatic.value); // 课程Id
        pobjJxTeachPlanKnowledgeEN.SetUpdUser(userStore.getUserId); // 修改人
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetDataFromClass)
       * @param pobjJxTeachPlanKnowledgeEN">表实体类对象</param>
       **/
      async function GetDataFromJxTeachPlanKnowledgeClass(
        pobjJxTeachPlanKnowledgeEN: clsJxTeachPlanKnowledgeEN,
      ) {
        idTeachPlanKnowledge.value = pobjJxTeachPlanKnowledgeEN.idTeachPlanKnowledge; // 教学计划知识点流水号
        courseKnowledgeId.value = pobjJxTeachPlanKnowledgeEN.courseKnowledgeId; // 知识点Id
        teachingMethodId.value = pobjJxTeachPlanKnowledgeEN.teachingMethodId; // 教学方式Id
        assessmentMethodId.value = pobjJxTeachPlanKnowledgeEN.assessmentMethodId; // 考核方式Id
        updDate.value = pobjJxTeachPlanKnowledgeEN.updDate; // 修改日期
        memo.value = pobjJxTeachPlanKnowledgeEN.memo; // 备注
      }
      const refDivEdit = ref();
      const strTitle = ref('教学计划知识点编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelJxTeachPlanKnowledge':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitJxTeachPlanKnowledge':
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
          case 'btnCancelJxTeachPlanKnowledge':
            return strCancelButtonText.value;
          case 'btnSubmitJxTeachPlanKnowledge':
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
          setTimeout(async () => {
            console.log('对话框已经显示!');
            await BindDdl4EditRegionInDiv();
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
        refDivEdit,
        PutDataToJxTeachPlanKnowledgeClass,
        GetDataFromJxTeachPlanKnowledgeClass,
        idTeachPlanKnowledge,
        idTeachingPlan,
        courseKnowledgeId,
        teachingMethodId,
        assessmentMethodId,
        updDate,
        memo,
        courseId,
        updUser,
        arrTeachingMethods,
        arrcc_CourseKnowledges,
        arrAssessmentMethods,
        arrcc_Course,
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
      btnJxTeachPlanKnowledge_Edit_Click(strCommandName: string, strKeyId: string) {
        JxTeachPlanKnowledge_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
