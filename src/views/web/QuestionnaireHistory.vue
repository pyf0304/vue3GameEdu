<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button class="close-button" @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
      <!--  -->
    </template>
    <div id="tabLayout0" ref="refDivLayout" class="tab_layout">
      <div id="divLoading" class="loading">
        <img src="@/assets/images/CirclePoint.gif" />
      </div>
      <a
        id="backtop"
        class="back-top"
        href="javascript:scroll(0,0);"
        target="_self"
        title="返回顶部"
        style="display: block"
      >
        <i class="icon-backtop"></i>
      </a>
      <div id="tabLayout1" class="tab_layout">
        <!-- -- 标题层 -- -->
        <div class="x-nav">
          <span class="layui-breadcrumb">
            <a href="">首页</a>
            <a href="">题库</a>
            <a>
              <cite>
                <span id="lbltitle" name="lbltitle">题目维护</span>
              </cite>
            </a>
            <label id="lblMsg_List" name="lblMsg_List"></label>
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
        <!-- - 查询层 -- -->

        <div id="divQuery" ref="refDivQuery" class="div_query"></div>
        <!-- - 功能区 -- -->

        <!-- -- 列表层 -- -->
        <div id="divList" ref="refDivList" class="div_List" style="background-color: #fff">
          <div id="divDataLst"> </div>
          <div id="divPager" class="pager"> </div>
        </div>
        <!-- -- 编辑层 -- -->
        <div id="divEdit" value="1"></div>
      </div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortQuestionnaireBy" type="hidden" value="" />

      <input id="hidCriteriaIdKeyId" type="hidden" />
      <!-- 题目Id -->
      <input id="hidQuestionId" type="hidden" />

      <input id="hidOrderNum" type="hidden" />
      <!-- 用户答题结果Id -->
      <input id="hidSortUserAnswerResultBy" type="hidden" value="" />
    </div>
    <template #footer>
      <el-button id="btnCancelQuestionOptions" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
  <QuestionOptionsCRUDCom
    ref="refQuestionOptionsCRUD"
    :question-id="questionId"
    :content-type-id="'0001'"
  ></QuestionOptionsCRUDCom>
  <tz_ContentAttachmentListCom
    ref="reftz_ContentAttachmentList"
    :question-id="questionId"
    :content-type-id="'0001'"
    :question-option-id="questionOptionId"
    :title="attachmentTitle"
  ></tz_ContentAttachmentListCom>
  <AnswerCRUDCom
    ref="refAnswerCRUD"
    :question-id="questionId"
    :content-type-id="'0001'"
    :question-type-id="questionTypeId"
  ></AnswerCRUDCom>
  <ge_InspectProcessCRUDCom
    ref="refge_InspectProcessCRUD"
    :question-id="questionId"
    :content-type-id="'0001'"
    :question-type-id="questionTypeId"
  ></ge_InspectProcessCRUDCom>

  <cc_KnowledgesExamLibRelaCRUDCom
    ref="refcc_KnowledgesExamLibRelaCRUD"
    :question-id="questionId"
    :content-type-id="'0001'"
    :course-chapter-id="courseChapterId"
    :paras="''"
  ></cc_KnowledgesExamLibRelaCRUDCom>

  <ge_ExaminationCriteriaCRUDCom
    ref="refge_ExaminationCriteriaCRUD"
    :question-id="questionId"
    :content-type-id="'0001'"
  ></ge_ExaminationCriteriaCRUDCom>

  <TestQuestionNameCom
    ref="refTestQuestionName"
    :question-id="questionId"
    :content-type-id="'0001'"
  ></TestQuestionNameCom>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/index/css/index.css';
  import '@/assets/lib/Xadmin/css/font.css';
  // import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/comment.css';
  import '@/assets/css/indexQuestion.css';
  import '@/assets/css/public.css';
  import '@/assets/css/SimpleTree.css';
  import $ from 'jquery';
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { QuestionnaireHistory } from '@/views/web/QuestionnaireHistory';
  import QuestionOptionsCRUDCom from '@/views/QuestionaireEdit/QuestionOptionsCRUD.vue';
  import AnswerCRUDCom from '@/views/QuestionaireEdit/AnswerCRUD.vue';
  import ge_InspectProcessCRUDCom from '@/views/GameLearn/ge_InspectProcessCRUDDialog.vue';
  import cc_KnowledgesExamLibRelaCRUDCom from '@/views/Knowledges/cc_KnowledgesExamLibRelaCRUDDialog.vue';
  import ge_ExaminationCriteriaCRUDCom from '@/views/GameLearn/ge_ExaminationCriteriaCRUD.vue';
  import TestQuestionNameCom from '@/views/QuestionaireEdit/TestQuestionName.vue';

  import tz_ContentAttachmentListCom from '@/viewsShare/ResourceMan/tz_ContentAttachmentList.vue';

  import { message } from '@/utils/myMessage';
  import { UserAnswerResultCRUD } from '@/viewsBase/QuestionnaireResult/UserAnswerResultCRUD';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './QuestionnaireHistoryVueShare';
  export default defineComponent({
    name: 'QuestionnaireHistory',
    components: {
      // 组件注册
      QuestionOptionsCRUDCom,
      tz_ContentAttachmentListCom,
      AnswerCRUDCom,
      ge_InspectProcessCRUDCom,
      cc_KnowledgesExamLibRelaCRUDCom,
      ge_ExaminationCriteriaCRUDCom,
      TestQuestionNameCom,
    },
    setup() {
      const attachmentTitle = ref('');
      const questionOptionId = ref('');
      const questionTypeId = ref('');
      const courseChapterId = ref('');
      const questionId = ref(0);
      const refQuestionOptionsCRUD = ref();
      const reftz_ContentAttachmentList = ref();
      const refAnswerCRUD = ref();
      const refge_InspectProcessCRUD = ref();
      const refcc_KnowledgesExamLibRelaCRUD = ref();
      const refge_ExaminationCriteriaCRUD = ref();
      const refTestQuestionName = ref();
      const strTitle = ref('冲关历史题目维护');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQuestionOptions':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQuestionOptions':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQuestionOptions':
            return strCancelButtonText.value;
          case 'btnSubmitQuestionOptions':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');

            jQuery_ready();
            window_onload();
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      onMounted(() => {
        // jQuery_ready();
        // window_onload();
      });

      //所有用户自定义的JS函数建议都放在这里
      function ShowNewOpen(strQuestionId: number) {
        //xadmin1_open('题目选项', '../QuestionaireEdit/QuestionOptionsCRUD?str1QuestionId=' + strKeyId, '', '', true);

        questionId.value = strQuestionId;
        refQuestionOptionsCRUD.value.showDialog();
      }
      //显示附件
      function btnShowOpenAttachment_Click(strQuestionId: number) {
        //xadmin1_open('附件详情', '../ResourceMan/tz_ContentAttachmentList?str1QuestionId=' + strQuestionId + '&strContentTypeId=0001', '', '', true);

        questionId.value = strQuestionId;
        reftz_ContentAttachmentList.value.showDialog();
      }
      //显示答案
      function btnShowAnswer_Click(strQuestionId: number) {
        // xadmin1_open('题目答案', '../QuestionaireEdit/AnswerCRUD?str1QuestionId=' + strQuestionId);
        questionId.value = strQuestionId;
        questionTypeId.value = '';
        refAnswerCRUD.value.showDialog();
      }
      //检查过程
      function btnInspectProcess_Click(strQuestionId: number) {
        // xadmin1_open('检查过程', '../GameLearn/ge_InspectProcessCRUD?str1QuestionId=' + strQuestionId);
        questionId.value = strQuestionId;
        refge_InspectProcessCRUD.value.showDialog();
      }

      //问题知识点关系
      function btnKnowledgesExamLibRela_Click(strQuestionId: number) {
        // xadmin1_open(
        //   '问题知识点关系',
        //   '../Knowledges/cc_KnowledgesExamLibRelaCRUD?str1QuestionId=' + strQuestionId,
        // );
        questionId.value = strQuestionId;
        courseChapterId.value = '';
        refcc_KnowledgesExamLibRelaCRUD.value.showDialog();
      }

      //问题检查标准
      function btnExaminationCriteria_Click(strQuestionId: number) {
        // xadmin1_open(
        //   '问题检查标准',
        //   '../GameLearn/ge_ExaminationCriteriaCRUD?str1QuestionId=' + strQuestionId,
        // );
        questionId.value = strQuestionId;
        refge_ExaminationCriteriaCRUD.value.showDialog();
      }

      //测试题目是否完善
      function btnTestQuestionName_Click(strQuestionId: number) {
        // xadmin_open(
        //   '测试题目是否完善',
        //   '../QuestionaireEdit/TestQuestionName?str1QuestionId=' + strKeyId,
        // );
        questionId.value = strQuestionId;
        refTestQuestionName.value.showDialog();
      }
      function xadmin_open(
        para1: string,
        para2: string,
        para3: string = '',
        para4: string = '',
        para5: boolean = true,
      ) {
        console.log(para1, para2, para3, para4, para5);
      }
      function jQuery_ready() {
        const btn = document.getElementById('btn');
        const Preview = $('#divDataLst').attr('id');
        // if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        //   $('#btnExportWord').onclick = function () {
        //     const Preview = $('#divDataLst').attr('id');
        //     //AllAreaWordTwo(document.getElementById('test'), '^')
        //     AllAreaWordTwo(Preview, '^');
        //   };
        // } else {
        //   $('#btnExportWord').click(function () {
        //     $('#divDataLst').wordExport('题目信息');
        //   });
        // }
      }

      //  {Object} cont  要导出的html元素内容的id,注意不要加双引号@param {Object} key   分页关键字
      function AllAreaWordTwo(cont: string, key: string) {
        // const oWD = new ActiveXObject("Word.Application");
        // //默认为页面视图
        // const oDC = oWD.Documents.Add("", 0, 0);
        // const oRange = oDC.Range(0, 1);
        // //const oRange1 = oDC.Range(0,2);
        // const sel = document.body.createTextRange();
        // //参数为html元素id
        // sel.moveToElementText(cont);
        // sel.select();
        // sel.execCommand("Copy");
        // oRange.Paste();
        // oWD.Application.Visible = true;
        // //得到打开后word的selection对象
        // const selection = oWD.Selection;
        // //设置字体大小
        // selection.Font.Size = 10;
        // //ctrl+A 全选操作
        // selection.WholeStory();
        // //清除格式
        // selection.Find.ClearFormatting();
        // //指定查找关键字
        // selection.Find.Text = key;
        // //^m为手动分页符标记
        // //向下查找
        // selection.Find.Forward = true;
        // selection.Find.Wrap = 1;
        // //不区分大小写
        // selection.Find.MatchCase = false;
        // //不匹配整个单词
        // selection.Find.MatchWholeWord = false;
        // //如果找到指定字符串返回真,否则返回false
        // while (selection.Find.Execute()) {
        //     //插入分页符,分页符常量为7,具体可查word api
        //     selection.InsertBreak(7);
        // }
      }

      /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    */
      // function btn_Click(strCommandName, strKeyId, OrderNum) {
      //     $("#hidOrderNum").val(OrderNum);

      //         questionnaire.QuestionnaireHistory.btn_Click(strCommandName, strKeyId);

      // }

      /*
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    */
      function window_onload() {
        const objPage = new QuestionnaireHistory();
        objPage.PageLoad();
      }

      //信息提示
      function layui_Alert(iconKey: string, strMsg: string) {
        message.success(strMsg);
      }

      //刷新当前界面
      function RefreshPage() {
        const objPage = new QuestionnaireHistory();
        objPage.BindGv_Questionnaire4Func(refDivList.value);
      }

      //  将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
      function sheet2blob(sheet: string, sheetName: string) {
        // sheetName = sheetName || 'sheet1';
        // const workbook = {
        //   SheetNames: [sheetName],
        //   Sheets: {},
        // };
        // workbook.Sheets[sheetName] = sheet;
        // // 生成excel的配置项
        // const wopts = {
        //   bookType: 'xlsx', // 要生成的文件类型
        //   bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        //   type: 'binary',
        // };
        // const wbout = XLSX.write(workbook, wopts);
        // const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        // // 字符串转ArrayBuffer
        // function s2ab(s) {
        //   const buf = new ArrayBuffer(s.length);
        //   const view = new Uint8Array(buf);
        //   for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        //   return buf;
        // }
        // return blob;
      }

      // function openDownloadDialog(url: string, saveName: string) {
      //   if (typeof url == 'object' && url instanceof Blob) {
      //     url = URL.createObjectURL(url); // 创建blob地址
      //   }
      //   const aLink = document.createElement('a');
      //   aLink.href = url;
      //   aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
      //   const event;
      //   if (window.MouseEvent) event = new MouseEvent('click');
      //   else {
      //     event = document.createEvent('MouseEvents');
      //     event.initMouseEvent(
      //       'click',
      //       true,
      //       false,
      //       window,
      //       0,
      //       0,
      //       0,
      //       0,
      //       0,
      //       false,
      //       false,
      //       false,
      //       false,
      //       0,
      //       null,
      //     );
      //   }
      //   aLink.dispatchEvent(event);
      // }
      //所有用户自定义的JS函数建议都放在这里
      function exportSpecialExcel_pyf(arrData: any, strFileName: string) {
        // const sheet = XLSX.utils.aoa_to_sheet(arrData);
        // openDownloadDialog(sheet2blob(sheet), strFileName);
      }
      function Refresh_Click() {}
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        Refresh_Click,
        questionId,
        refQuestionOptionsCRUD,
        reftz_ContentAttachmentList,
        refAnswerCRUD,
        refge_InspectProcessCRUD,
        refcc_KnowledgesExamLibRelaCRUD,
        refge_ExaminationCriteriaCRUD,
        refTestQuestionName,
        courseChapterId,
        questionTypeId,
        questionOptionId,
        attachmentTitle,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //QuestionOptions_Edit.btnClick(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  #divPager {
    position: fixed;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #ddd;
    padding-left: 10px;
  }

  .modal-dialog {
    /*max-width: 1500px;*/
    text-align: center;
    margin: 1.75rem auto;
  }
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<!-- Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "冲关历史题目维护"; -->

<!-- <script type="text/javascript" src="../lib/jquery-1.6.min.js"></script>
    <link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />

    <link rel="shortcut icon" href="~/images/favicon.ico" type="image/x-icon" />

    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">

    <link rel="stylesheet" type="text/css" href="../css/SimpleTree.css">
    <link rel="stylesheet" type="text/css" href="../css/public.css">


    
    <script src="~/lib/xlsx.core.min.js" type="text/javascript"></script>
    <script src="~/lib/xlsx.full.min.js" type="text/javascript"></script>


    -- 导出wordjs--
    <script src="~/lib/FileSaver.js"></script>
    <script src="~/lib/jquery.wordexport.js"></script>

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script>
    <script src="../lib/bootstrap/dist/js/bootstrap.js"></script>


 -->
