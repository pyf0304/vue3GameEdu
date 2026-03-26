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
          <tr id="trTeachingPlanId">
            <td class="text-right">
              <label
                id="lblTeachingPlanId"
                name="lblTeachingPlanId"
                class="col-form-label text-right"
                style="width: 90px"
                >教学计划编号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTeachingPlanId"
                v-model="teachingPlanId"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trTeachingPlanDesc">
            <td class="text-right">
              <label
                id="lblTeachingPlanDesc"
                name="lblTeachingPlanDesc"
                class="col-form-label text-right"
                style="width: 90px"
                >教学计划名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTeachingPlanDesc"
                v-model="teachingPlanDesc"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trIdGrade">
            <td class="text-right">
              <label
                id="lblIdGrade"
                name="lblIdGrade"
                class="col-form-label text-right"
                style="width: 90px"
                >年级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdGrade"
                v-model="idGrade"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                  {{ item.gradeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trSchoolTerm">
            <td class="text-right">
              <label
                id="lblSchoolTerm"
                name="lblSchoolTerm"
                class="col-form-label text-right"
                style="width: 90px"
                >学期
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSchoolTerm"
                v-model="schoolTerm"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrSchoolTerm"
                  :key="index"
                  :value="item.schoolTerm"
                >
                  {{ item.schoolTermName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trCourseId">
            <td class="text-right">
              <label
                id="lblCourseId"
                name="lblCourseId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseId"
                v-model="courseId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrcc_Course" :key="index" :value="item.courseId">
                  {{ item.courseName }}
                </option></select
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
                style="width: 400px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelJxTeachingPlan" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitJxTeachingPlan"
        type="primary"
        @click="btnJxTeachingPlan_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { JxTeachingPlan_EditEx } from '@/views/TeachingPlan/JxTeachingPlan_EditEx';
  import { clsJxTeachingPlanEN } from '@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN';
  import { clsXzGradeEN } from 'share-stu-study-base-lib';
  import { clsSchoolTermEN } from 'share-stu-study-base-lib';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { XzGrade_GetObjLstCache } from 'share-stu-study-base-lib';
  import { SchoolTerm_GetObjLstCache } from 'share-stu-study-base-lib';
  import { cc_Course_GetObjLstCache } from 'share-stu-study-base-lib';
  import { refDivEdit } from '@/views/TeachingPlan/JxTeachingPlanVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'JxTeachingPlanEdit',
    components: {
      // 组件注册
    },
    setup() {
      const teachingPlanId = ref('');
      const teachingPlanDesc = ref('');
      const idGrade = ref('0');
      const schoolTerm = ref('0');
      const courseId = ref('0');
      const memo = ref('');

      const arrXzGrade = ref<clsXzGradeEN_T[]>([]);
      const arrSchoolTerm = ref<clsSchoolTermEN_T[]>([]);
      const arrcc_Course = ref<clscc_CourseEN_T[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrXzGrade() {
        let arrObjLstSel = await XzGrade_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrXzGrade.value.length = 0;
        const obj0 = new clsXzGradeEN();
        obj0.idGrade = '0';
        obj0.gradeName = '请选择年级...';
        arrXzGrade.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.gradeIndex - y.gradeIndex);
        arrObjLstSel.forEach((x) => arrXzGrade.value.push(x));
        idGrade.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrSchoolTerm() {
        const arrObjLstSel = await SchoolTerm_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrSchoolTerm.value.length = 0;
        const obj0 = new clsSchoolTermEN();
        obj0.schoolTerm = '0';
        obj0.schoolTermName = '请选择学期...';
        arrSchoolTerm.value.push(obj0);
        arrObjLstSel.forEach((x: any) => arrSchoolTerm.value.push(x));
        schoolTerm.value = '0';
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
        await getArrXzGrade(); //编辑区域

        await getArrSchoolTerm(); //编辑区域

        await getArrcc_Course(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjJxTeachingPlanEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataJxTeachingPlanObj() {
        const pobjJxTeachingPlanEN = new clsJxTeachingPlanEN();
        pobjJxTeachingPlanEN.SetTeachingPlanId(teachingPlanId.value); // 教学计划编号
        pobjJxTeachingPlanEN.SetTeachingPlanDesc(teachingPlanDesc.value); // 教学计划名称
        pobjJxTeachingPlanEN.SetIdGrade(idGrade.value); // 年级
        pobjJxTeachingPlanEN.SetSchoolTerm(schoolTerm.value); // 学期
        pobjJxTeachingPlanEN.SetCourseId(courseId.value); // 课程
        pobjJxTeachingPlanEN.SetMemo(memo.value); // 备注
        return pobjJxTeachingPlanEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjJxTeachingPlanEN">表实体类对象</param>
       **/
      async function ShowDataFromJxTeachingPlanObj(pobjJxTeachingPlanEN: clsJxTeachingPlanEN) {
        teachingPlanId.value = pobjJxTeachingPlanEN.teachingPlanId; // 教学计划编号
        teachingPlanDesc.value = pobjJxTeachingPlanEN.teachingPlanDesc; // 教学计划名称
        idGrade.value = pobjJxTeachingPlanEN.idGrade; // 年级
        schoolTerm.value = pobjJxTeachingPlanEN.schoolTerm; // 学期
        courseId.value = pobjJxTeachingPlanEN.courseId; // 课程
        memo.value = pobjJxTeachingPlanEN.memo; // 备注
      }
      const strTitle = ref('教学计划编辑');
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
        GetEditDataJxTeachingPlanObj,
        ShowDataFromJxTeachingPlanObj,
        teachingPlanId,
        teachingPlanDesc,
        idGrade,
        schoolTerm,
        courseId,
        memo,
        arrXzGrade,
        arrSchoolTerm,
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
      btnJxTeachingPlan_Edit_Click(strCommandName: string, strKeyId: string) {
        JxTeachingPlan_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
