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
                id="lblStuId_q"
                name="lblStuId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >学号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuId_q"
                v-model="stuId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblStuName_q"
                name="lblStuName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >姓名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuName_q"
                v-model="stuName_q"
                class="form-control form-control-sm"
                style="width: 200px"
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
            id="lblcc_KnowledgeStuTeachLogList"
            name="lblcc_KnowledgeStuTeachLogList"
            class="col-form-label text-info"
            style="width: 250px"
            >学生知识点教学日志列表
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
      <cc_KnowledgeStuTeachLog_ListCom
        ref="refcc_KnowledgeStuTeachLog_List"
        :items="dataListcc_KnowledgeStuTeachLog"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </cc_KnowledgeStuTeachLog_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcc_KnowledgeStuTeachLogBy" type="hidden" />
    </div>
    <!--编辑层-->
    <cc_KnowledgeStuTeachLog_EditCom
      ref="refcc_KnowledgeStuTeachLog_Edit"
    ></cc_KnowledgeStuTeachLog_EditCom>
    <!--详细信息层-->
    <cc_KnowledgeStuTeachLog_DetailCom
      ref="refcc_KnowledgeStuTeachLog_Detail"
    ></cc_KnowledgeStuTeachLog_DetailCom>
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
    refcc_KnowledgeStuTeachLog_Edit,
    refcc_KnowledgeStuTeachLog_Detail,
    refcc_KnowledgeStuTeachLog_List,
    showErrorMessage,
    dataListcc_KnowledgeStuTeachLog,
    emptyRecNumInfo,
    CourseId_Session,
    courseId_q,
    stuId_q,
    stuName_q,
  } from '@/views/Knowledges/cc_KnowledgeStuTeachLogVueShare';
  import { cc_KnowledgeStuTeachLogCRUDEx } from '@/views/Knowledges/cc_KnowledgeStuTeachLogCRUDEx';
  import cc_KnowledgeStuTeachLog_EditCom from '@/views/Knowledges/cc_KnowledgeStuTeachLog_Edit.vue';
  import cc_KnowledgeStuTeachLog_DetailCom from '@/views/Knowledges/cc_KnowledgeStuTeachLog_Detail.vue';
  import cc_KnowledgeStuTeachLog_ListCom from '@/views/Knowledges/cc_KnowledgeStuTeachLog_List.vue';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { cc_Course_GetObjLstCache } from 'share-stu-study-base-lib';
  export default defineComponent({
    name: 'Cc_KnowledgeStuTeachLogCRUD',
    components: {
      // 组件注册
      cc_KnowledgeStuTeachLog_EditCom,
      cc_KnowledgeStuTeachLog_DetailCom,
      cc_KnowledgeStuTeachLog_ListCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;

      const arrcc_Course = ref<clscc_CourseEN_T[]>([]);
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

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('学生知识点教学日志维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        cc_KnowledgeStuTeachLogCRUDEx.vuebtn_Click = btn_Click;
        cc_KnowledgeStuTeachLogCRUDEx.GetPropValue = GetPropValue;
        const objPage = new cc_KnowledgeStuTeachLogCRUDEx();
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
        cc_KnowledgeStuTeachLogCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListcc_KnowledgeStuTeachLog,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refcc_KnowledgeStuTeachLog_Edit,
        refcc_KnowledgeStuTeachLog_Detail,
        refcc_KnowledgeStuTeachLog_List,
        courseId_q,
        stuId_q,
        stuName_q,
        arrcc_Course,
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
        router.push({ name: 'editcc_KnowledgeStuTeachLog', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new cc_KnowledgeStuTeachLogCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
