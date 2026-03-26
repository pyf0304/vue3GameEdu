<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblTeachingPlanId_q"
                name="lblTeachingPlanId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >教学计划编号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTeachingPlanId_q"
                v-model="teachingPlanId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblTeachingPlanDesc_q"
                name="lblTeachingPlanDesc_q"
                class="col-form-label text-right"
                style="width: 90px"
                >教学计划名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTeachingPlanDesc_q"
                v-model="teachingPlanDesc_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIdGrade_q"
                name="lblIdGrade_q"
                class="col-form-label text-right"
                style="width: 90px"
                >年级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdGrade_q"
                v-model="idGrade_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                  {{ item.gradeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblSchoolTerm_q"
                name="lblSchoolTerm_q"
                class="col-form-label text-right"
                style="width: 90px"
                >学期
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSchoolTerm_q"
                v-model="schoolTerm_q"
                class="form-control form-control-sm"
                style="width: 120px"
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
          <tr>
            <td class="text-right">
              <label
                id="lblCourseId_q"
                name="lblCourseId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >课程
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseId_q"
                v-model="courseId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrcc_Course" :key="index" :value="item.courseId">
                  {{ item.courseName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdSubmitStatus_q"
                name="lblIdSubmitStatus_q"
                class="col-form-label text-right"
                style="width: 90px"
                >送审状态
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdSubmitStatus_q"
                v-model="idSubmitStatus_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrSubmitStatus"
                  :key="index"
                  :value="item.idSubmitStatus"
                >
                  {{ item.submitStatusDesc }}
                </option></select
              >
            </td>
          </tr>
        </tbody></table
      >
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblJxTeachingPlanList"
            name="lblJxTeachingPlanList"
            class="col-form-label text-info"
            style="width: 250px"
            >教学计划列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
            >添加</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <JxTeachingPlan_ListCom
        ref="refJxTeachingPlan_List"
        :items="dataListJxTeachingPlan"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </JxTeachingPlan_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortJxTeachingPlanBy" type="hidden" />
    </div>
    <!--编辑层-->
    <JxTeachingPlan_EditCom ref="refJxTeachingPlan_Edit"></JxTeachingPlan_EditCom>
    <!--详细信息层-->
    <JxTeachingPlan_DetailCom ref="refJxTeachingPlan_Detail"></JxTeachingPlan_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refJxTeachingPlan_Edit,
    refJxTeachingPlan_Detail,
    showErrorMessage,
    dataListJxTeachingPlan,
    emptyRecNumInfo,
    teachingPlanId_q,
    teachingPlanDesc_q,
    idGrade_q,
    schoolTerm_q,
    courseId_q,
    idSubmitStatus_q,
    refJxTeachingPlan_List,
  } from '@/views/TeachingPlan/JxTeachingPlanVueShare';
  import { JxTeachingPlanCRUDEx } from '@/views/TeachingPlan/JxTeachingPlanCRUDEx';
  import { JxTeachingPlanCRUD } from '@/viewsBase/TeachingPlan/JxTeachingPlanCRUD';
  import JxTeachingPlan_EditCom from '@/views/TeachingPlan/JxTeachingPlan_Edit.vue';
  import JxTeachingPlan_DetailCom from '@/views/TeachingPlan/JxTeachingPlan_Detail.vue';
  import JxTeachingPlan_ListCom from '@/views/TeachingPlan/JxTeachingPlan_List.vue';
  import { JxTeachingPlan_Edit } from '@/viewsBase/TeachingPlan/JxTeachingPlan_Edit';
  import { JxTeachingPlan_Detail } from '@/viewsBase/TeachingPlan/JxTeachingPlan_Detail';
  import { clsXzGradeEN } from 'share-stu-study-base-lib';
  import { clsSchoolTermEN } from 'share-stu-study-base-lib';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { clsSubmitStatusEN } from '@/ts/L0Entity/BaseTab/clsSubmitStatusEN';
  import { XzGrade_GetObjLstCache } from 'share-stu-study-base-lib';
  import { SchoolTerm_GetObjLstCache } from 'share-stu-study-base-lib';
  import { cc_Course_GetObjLstCache } from 'share-stu-study-base-lib';
  import { SubmitStatus_GetObjLstCache } from '@/ts/L3ForWApi/BaseTab/clsSubmitStatusWApi';
  export default defineComponent({
    name: 'JxTeachingPlanCRUD',
    components: {
      // 组件注册
      JxTeachingPlan_EditCom,
      JxTeachingPlan_DetailCom,
      JxTeachingPlan_ListCom,
    },

    setup() {
      const arrXzGrade = ref<clsXzGradeEN_T[]>([]);
      const arrSchoolTerm = ref<clsSchoolTermEN_T[]>([]);
      const arrcc_Course = ref<clscc_CourseEN_T[]>([]);
      const arrSubmitStatus = ref<clsSubmitStatusEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
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
        idGrade_q.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
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
        schoolTerm_q.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
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
        courseId_q.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrSubmitStatus() {
        const arrObjLstSel = await SubmitStatus_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrSubmitStatus.value.length = 0;
        const obj0 = new clsSubmitStatusEN();
        obj0.idSubmitStatus = '0';
        obj0.submitStatusDesc = '请选择送审状态...';
        arrSubmitStatus.value.push(obj0);
        arrObjLstSel.forEach((x) => arrSubmitStatus.value.push(x));
        idSubmitStatus_q.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        await getArrXzGrade(); //查询区域

        await getArrSchoolTerm(); //查询区域

        await getArrcc_Course(); //查询区域

        await getArrSubmitStatus(); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('教学计划维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        JxTeachingPlanCRUDEx.vuebtn_Click = btn_Click;
        JxTeachingPlanCRUDEx.GetPropValue = GetPropValue;
        const objPage = new JxTeachingPlanCRUDEx();
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        JxTeachingPlanCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListJxTeachingPlan,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refJxTeachingPlan_Edit,
        refJxTeachingPlan_Detail,
        teachingPlanId_q,
        teachingPlanDesc_q,
        idGrade_q,
        schoolTerm_q,
        courseId_q,
        idSubmitStatus_q,
        arrXzGrade,
        arrSchoolTerm,
        arrcc_Course,
        arrSubmitStatus,
        refJxTeachingPlan_List,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editJxTeachingPlan', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new JxTeachingPlanCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
