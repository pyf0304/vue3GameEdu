<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">题目管理</a>
        <a>
          <cite>
            <span id="lbltitle">游戏关卡</span>
          </cite>
        </a>
        <label id="lblMsg_List"></label>
      </span>
      <a
        class="layui-btn layui-btn-small"
        style="line-height: 1.6em; margin-top: 3px; float: right"
        @click="Refresh_Click()"
        title="刷新"
      >
        <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
      </a>
    </div>
    <!-- -- 查询层 -- -->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 30%"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left">
              <input
                id="txtGameLevelName_q"
                placeholder="游戏关卡名"
                class="form-control"
                style="width: 150px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlDifficultyLevelId_q"
                placeholder="难度等级"
                class="form-control"
                style="width: 150px"
              ></select>
            </td>

            <td class="text-left">
              <select id="ddlQuestionTypeId_q" class="form-control" style="width: 150px"></select>
            </td>
            <td class="text-left">
              <button
                id="btnQuery"
                class="layui-btn"
                lay-submit=""
                lay-filter="sreach"
                @click="btn_Click('Query', '')"
              >
                <i class="layui-icon">&#xe615;</i>
              </button>
            </td>
          </tr>
        </tbody></table
      >
    </div>
    <!-- -- 功能区 -- -->

    <div id="divFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label id="lblge_GameLevelList" class="col-form-label text-info" style="width: 250px">
            游戏关卡表列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlCourseId_OrderNum"
              class="form-control-sm"
              style="width: 60px; display: none"
            ></select>
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

        <li class="nav-item ml-3">
          <button
            id="btnAddNewRecordWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddNewRecordWithMaxId', '')"
            >添加-关键字自增</button
          >
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
            id="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddChapter"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddChapter', '')"
            >添加章节关系</button
          >
        </li>
      </ul>
    </div>
    <!-- -- 列表层 -- -->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
    </div>
    <!-- -- 编辑层 -- -->
    <div id="divEdit" value="1"></div>

    <!-- - 章节列表 -- -->
    <div class="modal" :class="{ show: divChapterList }">
      <div class="modal-dialog" style="margin-left: 300px">
        <div class="modal-content" style="width: 1000px">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">章节列表</h4>
            <h4 class="modal-title" style="color: red"></h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          </div>

          <div id="divFunction" class="table table-bordered table-hover">
            <ul class="nav">
              <li class="nav-item">
                <label
                  id="lblcc_CourseChapterList"
                  class="col-form-label text-info"
                  style="width: 250px"
                >
                  课程章节列表
                </label>
              </li>

              <li class="nav-item ml-3">
                <input
                  v-model="questionNum"
                  id="txtQuestionNum"
                  placeholder="题目数量"
                  class="form-control-sm"
                  style="width: 150px"
                />
                <button
                  id="btnChapterRela"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btnChapterRela()"
                  >添加章节关系</button
                >
              </li>
            </ul>
          </div>

          <div class="modal-body">
            <div id="divChapterList" ref="refDivList_Chapter" class="div_List">
              <div id="divDataLst" class="div_List"> </div>
              <div id="divPager" class="pager" value="1"> </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              id="btnCancel"
              type="button"
              class="btn btn-default btn-sm"
              data-dismiss="modal"
              @click="closeTwo_Click()"
              >关闭</button
            >
          </div>
        </div>
      </div>
    </div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortge_GameLevelBy" type="hidden" value="" />

    <input id="hidSortcc_CourseChapterBy" type="hidden" value="" />
    <!--编辑层-->
    <ge_GameLevel_EditCom ref="refge_GameLevel_Edit"></ge_GameLevel_EditCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { ge_GameLevelCRUDEx } from '@/views/Knowledges/ge_GameLevelCRUDEx';
  import { ge_GameLevelCRUD } from '@/viewsBase/Knowledges/ge_GameLevelCRUD';
  import ge_GameLevel_EditCom from '@/views/Knowledges/ge_GameLevel_Edit.vue';
  import { ge_GameLevel_Edit } from '@/viewsBase/Knowledges/ge_GameLevel_Edit';
  import {
    refge_GameLevel_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/Knowledges/ge_GameLevelVueShare';
  export default defineComponent({
    name: 'GeGameLevelCRUD',
    components: {
      // 组件注册
      ge_GameLevel_EditCom,
    },
    setup() {
      const questionNum = ref('');
      const divChapterList = ref(false);
      const strTitle = ref('游戏关卡表维护');

      const refDivList_Chapter = ref();
      onMounted(() => {
        ge_GameLevelCRUDEx.vuebtn_Click = btn_Click;
        ge_GameLevelCRUDEx.GetPropValue = GetPropValue;
        const objPage = new ge_GameLevelCRUDEx();
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'questionNum':
            return questionNum.value;
          default:
            return '';
        }
      }
      ////////////////////////////////////////章节
      /*
      显示对话框
      (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ShowDialog)
      */
      function ShowDialogOne() {
        divChapterList.value = true;
        ge_GameLevelCRUDEx.divList_Chapter = refDivList_Chapter.value;
      }

      /*
      隐藏对话框
      (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
      */
      function HideDialogOne() {
        divChapterList.value = false;
      }

      //关闭详情
      function closeTwo_Click() {
        HideDialogOne();
      }

      /*
  确定选择知识点数据
  (AutoGCLib.WA_ViewScript_TS4CSharp:btnPaperRecordInTab_Click)
  */

      function btnSaveChapterRela_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        //ShowDialogOne();
        const objPage = new ge_GameLevelCRUDEx();
        objPage.btnSaveChapterRela_Click(strKeyId);
      }

      //添加多个章按钮
      function btnChapterRela() {
        const objPage = new ge_GameLevelCRUDEx();
        objPage.btnChapterRela();
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'SaveChapterRela':
            btnSaveChapterRela_Click(strKeyId);
            return;
          case 'ShowDialogOne':
            ShowDialogOne();
            return;
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
        ge_GameLevelCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      function Refresh_Click() {
        alert(`Refresh_Click`);
      }
      return {
        strTitle,
        btn_Click,
        refge_GameLevel_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        divChapterList,
        Refresh_Click,
        btnChapterRela,
        closeTwo_Click,
        refDivList_Chapter,
        questionNum,
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
<style scoped>
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }
</style>
