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
                id="lblBatchId_q"
                name="lblBatchId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >批次
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlBatchId_q"
                v-model="batchId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrQuestionnaireBatch"
                  :key="index"
                  :value="item.batchId"
                >
                  {{ item.batchName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblUserId_q"
                name="lblUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId_q"
                v-model="userId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblAnswerText_q"
                name="lblAnswerText_q"
                class="col-form-label text-right"
                style="width: 90px"
                >回答文本
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAnswerText_q"
                v-model="answerText_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblUserAnswerResultList"
            name="lblUserAnswerResultList"
            class="col-form-label text-info"
            style="width: 250px"
            >用户答题结果列表
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
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <UserAnswerResult_ListCom
        ref="refUserAnswerResult_List"
        :items="dataListUserAnswerResult"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </UserAnswerResult_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortUserAnswerResultBy" type="hidden" />
    </div>
    <!--编辑层-->
    <UserAnswerResult_EditCom ref="refUserAnswerResult_Edit"></UserAnswerResult_EditCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refUserAnswerResult_Edit,
    refUserAnswerResult_List,
    showErrorMessage,
    dataListUserAnswerResult,
    emptyRecNumInfo,
    CourseId_Session,
    IdCurrEduCls_Session,
    courseId_q,
    batchId_q,
    userId_q,
    answerText_q,
  } from '@/views/QuestionnaireResult/UserAnswerResultVueShare';
  import { UserAnswerResultCRUDEx } from '@/views/QuestionnaireResult/UserAnswerResultCRUDEx';
  import UserAnswerResult_EditCom from '@/views/QuestionnaireResult/UserAnswerResult_Edit.vue';
  import UserAnswerResult_ListCom from '@/views/QuestionnaireResult/UserAnswerResult_List.vue';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { clsQuestionnaireBatchEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireBatchEN';
  import { cc_Course_GetObjLstCache } from 'share-stu-study-base-lib';
  import { QuestionnaireBatch_GetObjLstCache } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireBatchWApi';
  export default defineComponent({
    name: 'UserAnswerResultCRUD',
    components: {
      // 组件注册
      UserAnswerResult_EditCom,
      UserAnswerResult_ListCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;

      const arrcc_Course = ref<clscc_CourseEN_T[]>([]);
      const arrQuestionnaireBatch = ref<clsQuestionnaireBatchEN[]>([]);
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
      async function getArrQuestionnaireBatch() {
        const arrObjLstSel = await QuestionnaireBatch_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrQuestionnaireBatch.value.length = 0;
        const obj0 = new clsQuestionnaireBatchEN();
        obj0.batchId = '0';
        obj0.batchName = '请选择问卷批次...';
        arrQuestionnaireBatch.value.push(obj0);
        arrObjLstSel.forEach((x) => arrQuestionnaireBatch.value.push(x));
        batchId_q.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        await getArrcc_Course(); //查询区域

        await getArrQuestionnaireBatch(); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('用户答题结果维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        UserAnswerResultCRUDEx.vuebtn_Click = btn_Click;
        UserAnswerResultCRUDEx.GetPropValue = GetPropValue;
        const objPage = new UserAnswerResultCRUDEx();
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
        UserAnswerResultCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListUserAnswerResult,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refUserAnswerResult_Edit,
        refUserAnswerResult_List,
        courseId_q,
        batchId_q,
        userId_q,
        answerText_q,
        arrcc_Course,
        arrQuestionnaireBatch,
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
        router.push({ name: 'editUserAnswerResult', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new UserAnswerResultCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
