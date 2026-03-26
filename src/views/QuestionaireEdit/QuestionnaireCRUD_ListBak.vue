<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <!-- -- 标题层 -- -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" class="h5"> 题目CRUD </label>
      <label id="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!-- -- 查询层 -- -->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label id="lblQuestionName_q" class="col-form-label text-right" style="width: 90px">
                题目名称
              </label>
            </td>
            <td class="text-left">
              <input id="txtQuestionName_q" class="form-control-sm" style="width: 120px" />
            </td>
            <td class="text-right">
              <label
                id="lblCourseChapterId_q"
                class="col-form-label text-right"
                style="width: 90px"
              >
                课程章节
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseChapterId_q"
                class="form-control-sm"
                style="width: 120px"
              ></select>
            </td>
            <td class="text-right">
              <label id="lblQuestionTypeId_q" class="col-form-label text-right" style="width: 90px">
                题目类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionTypeId_q"
                class="form-control-sm"
                style="width: 120px"
              ></select>
            </td>
            <td class="text-right">
              <label
                id="lblDifficultyLevelId_q"
                class="col-form-label text-right"
                style="width: 90px"
              >
                难度等级Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDifficultyLevelId_q"
                class="form-control-sm"
                style="width: 120px"
              ></select>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblLevelModeTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
              >
                模式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlLevelModeTypeId_q"
                class="form-control-sm"
                style="width: 120px"
              ></select>
            </td>
            <td class="text-right">
              <label id="lblIsTest_q" class="col-form-label text-right" style="width: 90px">
                是否测试
              </label>
            </td>
            <td class="text-left">
              <select id="ddlIsTest_q" class="form-control-sm" style="width: 120px"></select>
            </td>
            <td class="nav-item ml-3">
              <button
                id="btnQuery"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Query', '')"
                >查询</button
              >
            </td>
            <td class="nav-item ml-3">
              <button
                id="btnExportExcel"
                class="btn btn-outline-warning btn-sm text-nowrap"
                @click="btn_Click('ExportExcel', '')"
                >导出Excel</button
              >
            </td>
          </tr>
        </tbody></table
      >
    </div>
    <!-- -- 功能区 -- -->

    <div id="divFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label id="lblQuestionnaireList" class="col-form-label text-info" style="width: 250px">
            题目列表
          </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>

        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select id="ddlCourseId_OrderNum" class="form-control-sm" style="width: 60px"></select>
            <button
              id="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoTop', '')"
              >移顶</button
            >
            <button
              id="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('UpMove', '')"
              >上移</button
            >
            <button
              id="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('DownMove', '')"
              >下移</button
            >
            <button
              id="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoBottum', '')"
              >移底</button
            >
            <button
              id="btnReOrder"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('ReOrder', '')"
              >重序</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!-- -- 列表层 -- -->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
    </div>
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
  import { QuestionnaireCRUD_ListEx } from '@/views/QuestionaireEdit/QuestionnaireCRUD_ListEx';
  import { QuestionnaireCRUD_List } from '@/viewsBase/QuestionaireEdit/QuestionnaireCRUD_List';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/QuestionaireEdit/QuestionnaireCRUD_ListVueShare';
  export default defineComponent({
    name: 'QuestionnaireCRUDList',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('题目维护');
      const Ref = ref();

      onMounted(() => {
        QuestionnaireCRUD_ListEx.vuebtn_Click = btn_Click;
        QuestionnaireCRUD_ListEx.GetPropValue = GetPropValue;
        const objPage = new QuestionnaireCRUD_ListEx();
        objPage.PageLoad();
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
          default:
            break;
        }
        QuestionnaireCRUD_ListEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
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
<style scoped></style>
