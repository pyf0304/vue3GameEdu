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
                name="ddlCourseId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblExamPaperName_q"
                name="lblExamPaperName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >考卷名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtExamPaperName_q"
                name="txtExamPaperName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblExamPaperTypeId_q"
                name="lblExamPaperTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >试卷类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlExamPaperTypeId_q"
                name="ddlExamPaperTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td>
          </tr> </tbody
      ></table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblcc_CourseExamPaperList"
            name="lblcc_CourseExamPaperList"
            class="col-form-label text-info"
            style="width: 250px"
            >考卷列表
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
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcc_CourseExamPaperBy" type="hidden" />
    </div>
    <!--编辑层-->
    <cc_CourseExamPaper_EditCom ref="refcc_CourseExamPaper_Edit"></cc_CourseExamPaper_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { cc_CourseExamPaperCRUDEx } from '@/viewsShare/Knowledges/cc_CourseExamPaperCRUDEx';
  import { cc_CourseExamPaperCRUD } from '@/viewsBase/Knowledges/cc_CourseExamPaperCRUD';
  import cc_CourseExamPaper_EditCom from '@/viewsShare/Knowledges/cc_CourseExamPaper_Edit.vue';
  import { cc_CourseExamPaper_Edit } from '@/viewsBase/Knowledges/cc_CourseExamPaper_Edit';
  import {
    refcc_CourseExamPaper_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/viewsShare/Knowledges/cc_CourseExamPaperVueShare';
  export default defineComponent({
    name: 'CcCourseExamPaperCRUD',
    components: {
      // 组件注册
      cc_CourseExamPaper_EditCom,
    },
    setup() {
      const strTitle = ref('考卷维护');

      onMounted(() => {
        cc_CourseExamPaperCRUDEx.vuebtn_Click = btn_Click;
        cc_CourseExamPaperCRUDEx.GetPropValue = GetPropValue;
        const objPage = new cc_CourseExamPaperCRUDEx();
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
        cc_CourseExamPaperCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refcc_CourseExamPaper_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>@/viewsShare/Knowledges/cc_CourseExamPaperCRUDEx
