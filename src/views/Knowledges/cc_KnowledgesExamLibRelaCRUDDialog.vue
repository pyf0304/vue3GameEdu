<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>

    <div id="divLayout" ref="refDivLayout" class="div_layout">
      <!-- -- 标题层 -- -->
      <!-- -- 查询层 -- -->
      <!-- -- 功能区 -- -->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblcc_KnowledgesExamLibRelaList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              知识点习题关系列表
            </label>
          </li>

          <li class="nav-item ml-3">
            <button
              id="btnShowKnowledgeSel"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="showKnowledgeSel()"
              >添加知识点A</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewKnowledge"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnAddNewKnowledge()"
              >添加知识点B</button
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
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </li>
          <!-- <li class="nav-item ml-3">
            <button
              id="btnExportExcel"
              
              class="btn btn-outline-warning btn-sm text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </li> -->
        </ul>
      </div>
      <!-- -- 列表层 -- -->
      <div id="divList1" ref="refDivList" class="div_List">
        <div id="divDataLst" class="div_List"> </div>
        <div id="divPager" class="pager"> </div>
      </div>

      <!-- 知识点前测弹出窗 -->
      <div v-if="showKnowledgeSelModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2>知识点选择</h2>
            <span class="close" @click="closeKnowledgeSelModal">&times;</span>
          </div>
          <div class="modal-body">
            <cc_CourseKnowledges_DialogSelCom
              @close="closeKnowledgeSelModal"
              @on-submit-sel="SubmitSelectKnowledge"
              :showTitle="false"
              :addi-condition="addiCondition"
            />
          </div>
        </div>
      </div>
      <!-- -- 知识点列表层 -- -->
      <!-- <div class="modal" :class="{ show: divKnowLedge }">
        <div class="modal-dialog" style="margin-left: 100px">
          <div class="modal-content" style="width: 1000px">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">知识点列表Dialog</h4>
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
                    <td class="text-left">
                      <input
                        id="txtKnowledgeTitle_q"
                        title="知识点标题"
                        placeholder="请输入知识点标题"
                        class="form-control-sm"
                        style="width: 120px"
                      />
                    </td>

                    <td class="text-left">
                      <select
                        id="ddlCourseChapterId_q"
                        v-model="courseChapterId_q"
                        class="form-control form-control-sm"
                        style="width: 120px"
                      >
                        <option
                          v-for="(item, index) in arrcc_CourseChapter"
                          :key="index"
                          :value="item.courseChapterId"
                        >
                          {{ item.courseChapterName }}
                        </option></select
                      >
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
                        查询-Knowledge
                      </button>
                    </td>
                  </tr>
                </tbody></table
              >
            </div>

            <div class="modal-body">
              <div id="divListDialog" ref="refDivListDialog" class="div_List">
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
      </div> -->
      <input id="hidOpType" type="hidden" />
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortcc_KnowledgesExamLibRelaBy" type="hidden" value="" />
      <input id="hidSortcc_CourseKnowledgesBy" type="hidden" value="" />
    </div>
  </el-dialog>
  <!-- 如果不作为对话框使用，则直接渲染内容 -->
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import cc_KnowledgesExamLibRelaCRUDEx from '@/views/Knowledges/cc_KnowledgesExamLibRelaCRUDEx';
  import cc_KnowledgesExamLibRela_EditCom from '@/views/Knowledges/cc_KnowledgesExamLibRela_Edit.vue';
  import { useRoute } from 'vue-router';
  import {
    refcc_KnowledgesExamLibRela_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    QuestionId_Static,
    courseId_q,
    questionId_q,
    knowledgeModuleId_q,
    courseChapterId_q,
    isMain_f,
    CourseId_Session,
  } from '@/views/Knowledges/cc_KnowledgesExamLibRelaVueShare';
  import {
    addiCondition,
    refDivListDialog,
  } from '@/views/Knowledges/cc_KnowledgesExamLibRelaExVueShare';
  import { clscc_CourseEN } from 'share-stu-study-base-lib';
  import { clscc_KnowledgeModulesEN } from 'share-stu-study-base-lib';
  import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
  import { cc_Course_GetArrcc_Course } from 'share-stu-study-base-lib';
  import { cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId } from 'share-stu-study-base-lib';
  import { cc_CourseChapterEx_GetArrCourseChapterByParentIdCourseIdInDiv } from 'share-stu-study-base-lib';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  // import cc_CourseKnowledges_DialogSelCom from '@/viewsShare/Knowledges/cc_CourseKnowledges_DialogSel.vue';
  import { knowledgesMap } from 'share-stu-study-base-lib';

  import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
  export default defineComponent({
    name: 'CcKnowledgesExamLibRelaCRUD',
    components: {
      // 组件注册
      cc_KnowledgesExamLibRela_EditCom,
      cc_CourseKnowledges_DialogSelCom: (knowledgesMap as GlobalComponentMap)[
        'cc_CourseKnowledges_DialogSel'
      ],
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
    emits: ['on-finish-set-knowledge'],
    setup(props, { emit }) {
      CourseId_Session.value = clsPubLocalStorage.courseId;

      const objPage = ref<cc_KnowledgesExamLibRelaCRUDEx>();
      const thisConstructorName = 'Cc_KnowledgesExamLibRelaCRUD';

      const arrcc_Course = ref<clscc_CourseEN_T[] | null>([]);
      const arrcc_KnowledgeModules = ref<clscc_KnowledgeModulesEN_T[] | null>([]);
      const arrcc_CourseChapter = ref<clscc_CourseChapterEN_T[] | null>([]);
      const showKnowledgeSelModal = ref(false);
      async function showKnowledgeSel() {
        console.log('props.questionId (in showKnowledgeSel)', props.questionId);
        addiCondition.value = `${clscc_CourseKnowledgesEN.con_CourseKnowledgeId} not in (select ${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} from ${clscc_KnowledgesExamLibRelaEN._CurrTabName} where questionId = '${props.questionId}')`;
        showKnowledgeSelModal.value = true;
      }
      function closeKnowledgeSelModal() {
        showKnowledgeSelModal.value = false;
        console.log('closeKnowledgeSelModal:', showKnowledgeSelModal.value);
      }
      const isDialog = ref(false);
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
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

        arrcc_CourseChapter.value =
          await cc_CourseChapterEx_GetArrCourseChapterByParentIdCourseIdInDiv(strCourseId); //查询区域
        courseChapterId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivFunction, 'ddlbIsMain');
        isMain_f.value = '0';
      }
      onMounted(async () => {
        console.log('props.questionId (in onMounted)', props.questionId);
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        objPage.value = new cc_KnowledgesExamLibRelaCRUDEx();
      });

      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');

            cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click = btn_Click;
            cc_KnowledgesExamLibRelaCRUDEx.GetPropValue = GetPropValue;
            window_onload();
          }, 1000);
        });
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_cc_KnowledgesExamLibRela4Func(refDivList.value);
      };

      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      const divKnowLedge = ref(false);
      const modalActive = ref(false);

      const showModal = () => {
        modalActive.value = true;
        console.log('modalActive.value:', modalActive.value);
      };

      const hideModal = () => {
        modalActive.value = false;
      };

      const route = useRoute(); // 获取当前路由信息
      const strTitle = ref('知识点习题关系维护Dialog');

      onMounted(async () => {
        QuestionId_Static.value = props.questionId;
        // const bolIsDialog = extractValues(props.paras, 'isDialog');

        // console.error('isDialog:', bolIsDialog);
        // if (bolIsDialog == 'true') {
        //   // await showDialog();
        //   isDialog.value = true;
        // } else {
        //   isDialog.value = false;
        // }

        cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click = btn_Click;
        cc_KnowledgesExamLibRelaCRUDEx.GetPropValue = GetPropValue;
        // window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'questionId':
            QuestionId_Static.value = props.questionId;
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
        QuestionId_Static.value = strQuestionId;
        const strCourseChapterId = props.courseChapterId;
        //传递的问题Id
      }

      //选择知识点添加知识点关系；
      function btnAddNewKnowledge() {
        ShowDialogOne();
        cc_KnowledgesExamLibRelaCRUDEx.divListDialog = refDivListDialog.value;
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

      async function btnCurrEduClsInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        //ShowDialogOne();
        const objPage = new cc_KnowledgesExamLibRelaCRUDEx();
        const response = await objPage.btnCurrEduClsInTab_Click(strKeyId);
        if (response == true) {
          emit('on-finish-set-knowledge', {
            content: '完成了设置知识点',
          });
        }
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
        objPage.PageLoad_Dialog();
      }
      function SubmitSelectKnowledge(data: any) {
        console.log('data:', data);
        // alert('选择知识点成功' + data.knowledgeId);
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.AddNewRecordSaveKnowledgeRela(data.knowledgeId);
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
        refDivListDialog,
        divKnowLedge,
        btnAddNewKnowledge,
        closeTwo_Click,
        ShowDialogOne,
        HideDialogOne,
        showModal,
        modalActive,
        hideModal,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        isDialog,
        courseId_q,
        questionId_q,
        knowledgeModuleId_q,
        courseChapterId_q,
        isMain_f,
        arrcc_Course,
        arrcc_KnowledgeModules,
        arrcc_CourseChapter,
        showKnowledgeSelModal,
        closeKnowledgeSelModal,
        showKnowledgeSel,
        SubmitSelectKnowledge,
        addiCondition,
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
  /* .modal {
    display: none;
  } */

  .modal.show {
    display: block;
  }
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #c8e8f5; /* 更明显的弹出窗背景色 */
    padding: 20px;
    border-radius: 5px;
    width: 1100px; /* 弹出窗宽度 */
    height: 730px; /* 弹出窗高度 */
    overflow-y: auto;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-header {
    border-bottom: 1px solid #ccc;
  }

  .modal-footer {
    border-top: 1px solid #ccc;
    justify-content: flex-end; /* 将按钮放在右下角 */
  }

  .close {
    cursor: pointer;
    font-size: 24px;
  }
</style>

<!-- @page @{ Layout = "~/Pages/Shared/_Layout_PC.cshtml"; ViewData["Title"] = "知识点习题关系维护"; }

<link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
<link rel="stylesheet" href="../css/site.css" />
<link rel="shortcut icon" href="~/images/favicon.ico" type="image/x-icon" />


<script src="~/lib/xlsx.core.min.js" type="text/javascript"></script>
<script src="~/lib/xlsx.full.min.js" type="text/javascript"></script>

 -->
