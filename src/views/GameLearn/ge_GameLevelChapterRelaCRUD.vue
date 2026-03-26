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
                id="lblCourseChapterId_q"
                name="lblCourseChapterId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >课程章节
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseChapterId_q"
                name="ddlCourseChapterId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblge_GameLevelChapterRelaList"
            name="lblge_GameLevelChapterRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >游戏关卡章节关系表列表
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
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortge_GameLevelChapterRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    ref<ge_GameLevelChapterRela_EditCom
      ref="refge_GameLevelChapterRela_Edit"
    ></ge_GameLevelChapterRela_EditCom>
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
  import { ge_GameLevelChapterRelaCRUDEx } from '@/views/GameLearn/ge_GameLevelChapterRelaCRUDEx';
  import { ge_GameLevelChapterRelaCRUD } from '@/viewsBase/GameLearn/ge_GameLevelChapterRelaCRUD';
  import ge_GameLevelChapterRela_EditCom from '@/views/GameLearn/ge_GameLevelChapterRela_Edit.vue';
  import { ge_GameLevelChapterRela_Edit } from '@/viewsBase/GameLearn/ge_GameLevelChapterRela_Edit';
  import {
    refge_GameLevelChapterRela_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './ge_GameLevelChapterRelaVueShare';
  export default defineComponent({
    name: 'GeGameLevelChapterRelaCRUD',
    components: {
      // 组件注册
      ge_GameLevelChapterRela_EditCom,
    },
    setup() {
      const strTitle = ref('游戏关卡章节关系表维护');

      onMounted(() => {
        ge_GameLevelChapterRelaCRUDEx.vuebtn_Click = btn_Click;
        ge_GameLevelChapterRelaCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ge_GameLevelChapterRelaCRUDEx();
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
        ge_GameLevelChapterRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refge_GameLevelChapterRela_Edit,
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
