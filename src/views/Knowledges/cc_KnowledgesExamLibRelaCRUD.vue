<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!-- -- 标题层 -- -->
    <!-- -- 查询层 -- -->
    <!-- -- 功能区 -- -->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblcc_KnowledgesExamLibRelaList"
            name="lblcc_KnowledgesExamLibRelaList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            知识点习题关系列表
          </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnAddNewKnowledge"
            name="btnAddNewKnowledge"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnAddNewKnowledge()"
            >添加知识点</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="chkIsMain_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
            <button
              id="btnSetIsMain"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetIsMain', '')"
              >设置主知识点</button
            >
          </div>
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
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!-- -- 列表层 -- -->
    <div id="divList2" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
    </div>
    <!-- -- 知识点列表层 -- -->
    <div class="modal" :class="{ show: divKnowLedge }">
      <div class="modal-dialog" style="margin-left: 100px">
        <div class="modal-content" style="width: 1000px">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">知识点列表0</h4>
            <h4 class="modal-title" style="color: red"></h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          </div>

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
                      id="lblKnowledgeTitle_q"
                      name="lblKnowledgeTitle_q"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      知识点标题
                    </label>
                  </td>
                  <td class="text-left">
                    <input
                      id="txtKnowledgeTitle_q"
                      name="txtKnowledgeTitle_q"
                      class="form-control-sm"
                      style="width: 120px"
                    />
                  </td>

                  <td class="text-right">
                    <label
                      id="lblCourseChapterId_q"
                      name="lblCourseChapterId_q"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      课程章节
                    </label>
                  </td>
                  <td class="text-left">
                    <select
                      id="ddlCourseChapterId_q"
                      name="ddlCourseChapterId_q"
                      class="form-control-sm"
                      style="width: 120px"
                    ></select>
                  </td>
                  <td class="text-left">
                    <select
                      id="ddlKnowledgeModuleId_q"
                      v-model="knowledgeModuleId_q"
                      class="form-control form-control-sm"
                      style="width: 120px"
                    >
                      <option
                        v-for="(item, index) in arrcc_KnowledgeModules"
                        :key="index"
                        :value="item.knowledgeModuleId"
                      >
                        {{ item.knowledgeModuleName }}
                      </option></select
                    >
                  </td>
                  <td>
                    <button
                      class="layui-btn"
                      lay-submit=""
                      lay-filter="sreach"
                      @click="btn_Click('QueryKnowledge', '')"
                    >
                      查询
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="modal-body">
            <div id="divList" ref="refDivList2" class="div_List">
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
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortcc_KnowledgesExamLibRelaBy" type="hidden" value="" />
    <input id="hidSortcc_CourseKnowledgesBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import $ from 'jquery';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import cc_KnowledgesExamLibRelaCRUDEx from '@/views/Knowledges/cc_KnowledgesExamLibRelaCRUDEx';
  import { cc_KnowledgesExamLibRelaCRUD } from '@/viewsBase/Knowledges/cc_KnowledgesExamLibRelaCRUD';
  import cc_KnowledgesExamLibRela_EditCom from '@/views/Knowledges/cc_KnowledgesExamLibRela_Edit.vue';
  import { cc_KnowledgesExamLibRela_Edit } from '@/viewsBase/Knowledges/cc_KnowledgesExamLibRela_Edit';
  import { useRoute } from 'vue-router';
  import { extractValues } from '@/ts/PubFun/clsString';
  import { ShowDialog } from '@/ts/PubFun/clsCommFunc4Web';
  import { number } from 'echarts';
  import {
    refcc_KnowledgesExamLibRela_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    knowledgeModuleId_q,
    CourseId_Session,
    courseId_q,
  } from './cc_KnowledgesExamLibRelaVueShare';
  import { clscc_KnowledgeModulesEN } from 'share-stu-study-base-lib';
  import { cc_Course_GetArrcc_Course } from 'share-stu-study-base-lib';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId } from 'share-stu-study-base-lib';

  export default defineComponent({
    name: 'CcKnowledgesExamLibRelaCRUD',
    components: {
      // 组件注册
      cc_KnowledgesExamLibRela_EditCom,
    },
    props: {
      questionId: {
        type: Number,
        required: true,
        // default: '',
      },

      courseChapterId: {
        type: String,
        required: true,
        default: '',
      },
      paras: {
        type: String,
        default: false,
      },
    },
    setup(props) {
      const divKnowLedge = ref(false);
      const modalActive = ref(false);
      const thisConstructorName = 'Cc_KnowledgesExamLibRelaCRUD';

      const arrcc_Course = ref<clscc_CourseEN_T[] | null>([]);
      const arrcc_KnowledgeModules = ref<clscc_KnowledgeModulesEN_T[] | null>([]);

      const showModal = () => {
        modalActive.value = true;
        console.log('modalActive.value:', modalActive.value);
      };

      const hideModal = () => {
        modalActive.value = false;
      };

      const route = useRoute(); // 获取当前路由信息
      const strTitle = ref('知识点习题关系维护0');
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_Course.value = await cc_Course_GetArrcc_Course(); //查询区域
        courseId_q.value = '0';

        arrcc_KnowledgeModules.value =
          await cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId(strCourseId); //查询区域
        knowledgeModuleId_q.value = '0';
      }
      onMounted(async () => {
        cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click = btn_Click;
        cc_KnowledgesExamLibRelaCRUDEx.GetPropValue = GetPropValue;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'questionId':
            return props.questionId.toString();
          case 'courseChapterId':
            return props.courseChapterId;

          default:
            return '';
        }
      }

      //所有用户自定义的JS函数建议都放在这里
      //   function GetRequest() {
      //     const url = location.search; //获取url中"?"符后的字串
      //     const theRequest = new Object();
      //     if (url.indexOf('?') != -1) {
      //       const str = url.substr(1);
      //     const  strs = str.split('&');
      //       for (let i = 0; i < strs.length; i++) {
      //         theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //       }
      //     }
      //     return theRequest;
      //   }

      function GetQuestionID() {
        // const Request = new Object();
        // Request = GetRequest();
        const strQuestionId: number = props.questionId;
        const strCourseChapterId = props.courseChapterId;
        //传递的问题Id
      }

      //选择知识点添加知识点关系；
      function btnAddNewKnowledge() {
        ShowDialogOne();

        const objPage = new cc_KnowledgesExamLibRelaCRUDEx();
        objPage.btnAddNewKnowledge();
      }

      ////////////////////////////////////////知识点
      /*
          显示对话框
          (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ShowDialog)
          */
      function ShowDialogOne() {
        divKnowLedge.value = true;
      }

      /*
          隐藏对话框
          (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
          */
      function HideDialogOne() {
        divKnowLedge.value = false;
      }

      //关闭详情
      function closeTwo_Click() {
        HideDialogOne();
      }

      /*
      确定选择知识点数据
      (AutoGCLib.WA_ViewScript_TS4CSharp:btnPaperRecordInTab_Click)
      */

      function btnCurrEduClsInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        //ShowDialogOne();
        const objPage = new cc_KnowledgesExamLibRelaCRUDEx();
        objPage.btnCurrEduClsInTab_Click(strKeyId);
      }

      //刷新父节点页面
      function RefreshParent() {
        // window.parent.RefreshPage();
      }

      /*
         页面导入-在导入页面后运行的函数
        (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
        */
      function window_onload() {
        //获取题目ID
        GetQuestionID();

        const objPage = new cc_KnowledgesExamLibRelaCRUDEx();
        objPage.PageLoadCache();
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'btnCurrEduClsInTab':
            btnCurrEduClsInTab_Click(strKeyId);
            return;
          case 'ShowDialogOne':
            ShowDialogOne();
            return;
          case 'RefreshParent':
            RefreshParent();
            return;
          case 'HideDialogOne':
            HideDialogOne();
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
        cc_KnowledgesExamLibRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refcc_KnowledgesExamLibRela_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        divKnowLedge,
        btnAddNewKnowledge,
        closeTwo_Click,
        ShowDialogOne,
        HideDialogOne,
        showModal,
        modalActive,
        hideModal,
        knowledgeModuleId_q,
        arrcc_KnowledgeModules,
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
  /* Customize modal display */
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }
</style>

<!-- @page @{ Layout = "~/Pages/Shared/_Layout_PC.cshtml"; ViewData["Title"] = "知识点习题关系维护"; }

<link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
<link rel="stylesheet" href="../css/site.css" />
<link rel="shortcut icon" href="~/images/favicon.ico" type="image/x-icon" />


<script src="~/lib/xlsx.core.min.js" type="text/javascript"></script>
<script src="~/lib/xlsx.full.min.js" type="text/javascript"></script>

 -->
