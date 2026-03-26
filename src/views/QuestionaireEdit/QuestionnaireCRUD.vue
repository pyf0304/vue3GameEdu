<template>
  <div id="divLayout0" ref="refDivLayout" class="div_layout">
    <!--标题层-->

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
    <div id="tabLayout" class="tab_layout">
      <!-- -- 标题层 -- -->
      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页Updating</a>
          <a href="">题库</a>
          <a>
            <cite>
              <span id="lbltitle">题目维护</span>
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
                  id="txtQuestionId_q"
                  placeholder="题目Id"
                  v-model="questionId_q"
                  class="layui-input"
                  style="width: 100px"
                />
              </td>
              <td class="text-left">
                <input
                  id="txtQuestionName_q"
                  placeholder="题目名称ing"
                  v-model="questionName_q"
                  class="layui-input"
                  style="width: 200px"
                />
              </td>

              <td class="text-left">
                <select
                  id="ddlCourseChapterId_q"
                  v-model="courseChapterId_q"
                  class="form-control"
                  style="width: 150px"
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
                  id="ddlQuestionTypeId_q"
                  v-model="questionTypeId_q"
                  class="form-control"
                  style="width: 70px"
                >
                  <option
                    v-for="(item, index) in arrQuestionType"
                    :key="index"
                    :value="item.questionTypeId"
                  >
                    {{ item.questionTypeName }}
                  </option></select
                >
              </td>
              <td class="text-left">
                <select
                  id="ddlDifficultyLevelId_q"
                  v-model="difficultyLevelId_q"
                  class="form-control"
                  style="width: 60px"
                >
                  <option
                    v-for="(item, index) in arrge_DifficultyLevel"
                    :key="index"
                    :value="item.difficultyLevelId"
                  >
                    {{ item.difficultyLevelName }}
                  </option></select
                >
              </td>

              <td class="text-left">
                <select
                  id="ddlLevelModeTypeId_q"
                  v-model="levelModeTypeId_q"
                  class="form-control"
                  style="width: 80px"
                >
                  <option
                    v-for="(item, index) in arrge_LevelModeType"
                    :key="index"
                    :value="item.levelModeTypeId"
                  >
                    {{ item.levelModeTypeName }}
                  </option></select
                >
              </td>
              <td class="text-left">
                <select
                  id="ddlCourseKnowledgeId_q"
                  v-model="courseKnowledgeId_q"
                  class="form-control"
                  style="width: 150px"
                >
                  <option
                    v-for="(item, index) in arrcc_CourseKnowledges"
                    :key="index"
                    :value="item.courseKnowledgeId"
                  >
                    {{ item.knowledgeName }}
                  </option></select
                >
              </td>

              <td class="text-left">
                <select
                  id="ddlIsTest_q"
                  v-model="isTest_q"
                  class="form-control"
                  style="width: 70px"
                >
                  <option value="0">选择测试?</option>
                  <option value="true">是-测试</option>
                  <option value="false">否-非测试</option></select
                >
              </td>
              <td class="text-left">
                <button
                  id="btnQuery"
                  class="btn btn-outline-warning btn-sm text-nowrap"
                  @click="btn_Click('Query', '', 0, 0)"
                  >查询
                </button>
              </td>
              <td class="text-left">
                <button
                  id="btnExportExcel"
                  class="btn btn-outline-warning btn-sm text-nowrap"
                  @click="btn_Click('ExportExcel', '', 0, 0)"
                  >导出Excel</button
                >
              </td>
              <td class="nav-item ml-2">
                <button
                  id="btnImportDataFromExcel"
                  class="btn btn-outline-warning btn-sm text-nowrap"
                  @click="btnImportDataFromExcel_Click"
                  >导入Excel</button
                >
              </td>
            </tr>
            <tr>
              <td colspan="8">
                <div v-if="isShowImportDataFromExcel">
                  <ImportDataFromExcelCom></ImportDataFromExcelCom>
                </div> </td
            ></tr>
            <tr>
              <td colspan="8">
                <div
                  id="divImportExcel"
                  class="table table-bordered table-hover"
                  style="display: none"
                >
                  <ul class="nav">
                    <li class="nav-item ml-3">
                      <input
                        type="file"
                        id="ExcelFile"
                        ref="refExcelFile"
                        style="display: none"
                        @change="file_change('')"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      />
                      <a href="javascript:none" @click="selectFile()">选择Excel</a>
                    </li>
                    <li class="nav-item ml-3">
                      <select
                        id="ddlSheetName"
                        class="form-control-sm"
                        style="width: 100px"
                      ></select>
                    </li>

                    <li class="nav-item ml-3"> 题目类型 </li>

                    <li class="nav-item ml-3">
                      <select
                        id="ddlQuestionTypeId"
                        class="form-control"
                        style="width: 150px"
                      ></select>
                    </li>

                    <li class="nav-item ml-3">
                      <button
                        id="btnImportData"
                        class="btn btn-outline-warning btn-sm text-nowrap"
                        @click="btn_Click('ImportData', '', 0, 0)"
                        >导入数据</button
                      >
                    </li>

                    <li class="nav-item ml-3">
                      <button
                        id="btnCloseExcelDiv"
                        class="btn btn-outline-warning btn-sm text-nowrap"
                        @click="btn_Click('CloseExcelDiv', '', 0, 0)"
                        >关闭</button
                      >
                    </li>
                    <li class="nav-item ml-3">
                      <button
                        id="btnDownLoadSample"
                        class="btn btn-outline-warning btn-sm text-nowrap"
                        @click="btn_Click('DownLoadSample', '', 0, 0)"
                        >下载样例</button
                      >
                    </li>
                  </ul>
                  <div id="ExcelData"></div>
                </div>
              </td>
            </tr> </tbody
        ></table>
      </div>

      <!-- -- 功能区 -- -->
      <!-- -- 列表层 -- -->
      <div id="divListQuestions" ref="refDivList" class="div_List" style="background-color: #fff">
        <div id="divPager" class="pager"> </div>
        <div id="divDataLst"> </div>
      </div>
      <!-- -- 编辑层 -- -->
      <div id="divEdit" value="1"></div>
    </div>
    <input id="hidOpType" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortQuestionnaireBy" type="hidden" value="" />

    <input id="hidCriteriaIdKeyId" type="hidden" />
    <!-- 题目Id -->
    <input id="hidQuestionId" type="hidden" />

    <input id="hidOrderNum" type="hidden" />

    <input id="hidQuestionTypeId" type="hidden" />
    <!--编辑层-->
    <Questionnaire_EditCom ref="refQuestionnaire_Edit"></Questionnaire_EditCom>
    <Answer_EditCom ref="refAnswer_Edit"></Answer_EditCom>

    <tz_ContentAttachmentListCom
      ref="reftz_ContentAttachmentList"
      :question-id="questionId"
      :question-option-id="''"
      :content-type-id="'0001'"
      :title="attachmentTitle"
    ></tz_ContentAttachmentListCom>
    <cc_KnowledgesExamLibRelaCRUDCom
      ref="refcc_KnowledgesExamLibRelaCRUD"
      :question-id="questionId"
      :courseChapterId="courseChapterId"
      :content-type-id="'0001'"
      :paras="'isDialog=true'"
    ></cc_KnowledgesExamLibRelaCRUDCom>
    <QuestionOptionsCRUDCom
      ref="refQuestionOptionsCRUD"
      :question-id="questionId"
    ></QuestionOptionsCRUDCom>

    <AnswerCRUDCom
      ref="refAnswerCRUD"
      :question-id="questionId"
      :question-type-id="questionTypeId"
    ></AnswerCRUDCom>
    <ge_InspectProcessCRUDCom
      ref="refge_InspectProcessCRUD"
      :question-id="questionId"
      :question-type-id="questionTypeId"
    ></ge_InspectProcessCRUDCom>
    <ge_ExaminationCriteriaCRUDCom
      ref="refge_ExaminationCriteriaCRUD"
      :question-id="questionId"
    ></ge_ExaminationCriteriaCRUDCom>
    <TestQuestionNameCom ref="refTestQuestionName" :question-id="questionId"></TestQuestionNameCom>
    <QuestionOptions_EditCom ref="refQuestionOptions_Edit"></QuestionOptions_EditCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';

  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'layui-src/src/css/layui.css';
  import 'layui-src/src/layui.js';
  import '@/assets//css/SimpleTree.css';
  import '@/assets//css/public.css';
  import $ from 'jquery';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import QuestionnaireCRUDEx from '@/views/QuestionaireEdit/QuestionnaireCRUDEx';
  import Questionnaire_EditCom from '@/views/QuestionaireEdit/Questionnaire_Edit.vue';
  import Answer_EditCom from '@/views/QuestionaireEdit/Answer_Edit.vue';

  import QuestionOptionsCRUDCom from '@/views/QuestionaireEdit/QuestionOptionsCRUD.vue';
  import AnswerCRUDCom from '@/views/QuestionaireEdit/AnswerCRUD.vue';
  import TestQuestionNameCom from '@/views/QuestionaireEdit/TestQuestionName.vue';
  import ImportDataFromExcelCom from '@/views/QuestionaireEdit/ImportDataFromExcel.vue';

  import ge_InspectProcessCRUDCom from '@/views/GameLearn/ge_InspectProcessCRUDDialog.vue';
  import ge_ExaminationCriteriaCRUDCom from '@/views/GameLearn/ge_ExaminationCriteriaCRUD.vue';
  import QuestionOptions_EditCom from '@/views/QuestionaireEdit/QuestionOptions_Edit.vue';
  import tz_ContentAttachmentListCom from '@/viewsShare/ResourceMan/tz_ContentAttachmentList.vue';
  import cc_KnowledgesExamLibRelaCRUDCom from '@/views/Knowledges/cc_KnowledgesExamLibRelaCRUDDialog.vue';
  import { QuestionOptionsCRUDEx } from '@/views/QuestionaireEdit/QuestionOptionsCRUDEx';
  import cc_KnowledgesExamLibRelaCRUDEx from '@/views/Knowledges/cc_KnowledgesExamLibRelaCRUDEx';
  import { tz_ContentAttachmentListEx } from '@/viewsShare/ResourceMan/tz_ContentAttachmentListEx';
  import { useQuestionnaireStore } from '@/store/modules/questionnaire';
  import {
    courseChapterId_q,
    CourseId_Session,
    difficultyLevelId_q,
    divVarSet,
    isTest_q,
    IsVisible_Giving,
    levelModeTypeId_q,
    questionName_q,
    questionTypeId_q,
    refQuestionnaire_Edit,
  } from './QuestionnaireVueShare';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/QuestionaireEdit/QuestionnaireVueShare';
  import { refAnswer_Edit } from '@/views/QuestionaireEdit/AnswerVueShare';
  import {
    courseKnowledgeId_q,
    questionId_q,
    reftz_ContentAttachmentList,
  } from '@/views/QuestionaireEdit/QuestionnaireExVueShare';
  import { refQuestionOptions_Edit } from './QuestionOptionsVueShare';
  import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { cc_CourseChapter_GetArrcc_CourseChapterByCourseId } from 'share-stu-study-base-lib';
  import { QuestionTypeEx_GetDdlDataCacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
  import { ge_DifficultyLevel_GetArrge_DifficultyLevel } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
  import { ge_LevelModeType_GetArrge_LevelModeType } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';

  // import { cc_CourseKnowledgesCRUD } from '@/viewsBase/Knowledges/cc_CourseKnowledgesCRUD';
  // import { knowledgesMap } from 'share-stu-study-base-lib';

  import { cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId } from 'share-stu-study-base-lib';

  export default defineComponent({
    name: 'QuestionnaireCRUD',
    components: {
      // 组件注册
      Questionnaire_EditCom,
      tz_ContentAttachmentListCom,
      cc_KnowledgesExamLibRelaCRUDCom,
      QuestionOptionsCRUDCom,
      AnswerCRUDCom,
      ge_InspectProcessCRUDCom,
      ge_ExaminationCriteriaCRUDCom,
      TestQuestionNameCom,
      QuestionOptions_EditCom,
      Answer_EditCom,
      ImportDataFromExcelCom,
    },
    setup() {
      const questionnaireStore = useQuestionnaireStore();
      CourseId_Session.value = clsPubLocalStorage.courseId;
      IsVisible_Giving.value = true;
      const refExcelFile = ref();
      const thisConstructorName = 'QuestionnaireCRUD';
      const isShowImportDataFromExcel = ref(false);
      const arrcc_CourseChapter = ref<clscc_CourseChapterEN_T[] | null>([]);
      const arrQuestionType = ref<clsQuestionTypeEN[] | null>([]);
      const arrge_DifficultyLevel = ref<clsge_DifficultyLevelEN[] | null>([]);
      const arrge_LevelModeType = ref<clsge_LevelModeTypeEN[] | null>([]);
      const arrcc_CourseKnowledges = ref<clscc_CourseKnowledgesEN_T[] | null>([]);
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_CourseChapter.value = await cc_CourseChapter_GetArrcc_CourseChapterByCourseId(
          strCourseId,
        ); //查询区域
        courseChapterId_q.value = '0';

        arrQuestionType.value = await QuestionTypeEx_GetDdlDataCacheEx(); //查询区域
        questionTypeId_q.value = '0';

        arrge_DifficultyLevel.value = await ge_DifficultyLevel_GetArrge_DifficultyLevel(); //查询区域
        difficultyLevelId_q.value = '0';

        arrge_LevelModeType.value = await ge_LevelModeType_GetArrge_LevelModeType(); //查询区域
        levelModeTypeId_q.value = '0';
        arrcc_CourseKnowledges.value =
          await cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId(strCourseId); //查询区域
        courseKnowledgeId_q.value = '0';

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsTest_q');
      }

      const refcc_KnowledgesExamLibRelaCRUD = ref();
      const refQuestionOptionsCRUD = ref();
      const refAnswerCRUD = ref();
      const refge_InspectProcessCRUD = ref();
      const refge_ExaminationCriteriaCRUD = ref();
      const refTestQuestionName = ref();

      const questionId = ref(0);
      const questionId4Sort = ref('');
      const attachmentTitle = ref('');
      const questionTypeId = ref('');
      const courseChapterId = ref('');
      const objWorkBook = ref();
      const strTitle = ref('题目维护');

      onMounted(() => {
        BindDdl4QryRegion();
        // 确保 Layui 已加载
        // if (typeof window.layui !== 'undefined') {
        //   window.layui.use(['element', 'layer'], function () {
        //     var element = window.layui.element;
        //     var layer = window.layui.layer;
        //     // 其他初始化代码
        //   });
        // } else {
        //   console.error('Layui is not loaded');
        // }
        QuestionnaireCRUDEx.vuebtn_Click = btn_ClickV2;
        QuestionnaireCRUDEx.GetPropValue = GetPropValue;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'questionId4Sort':
            return questionId4Sort.value;
          default:
            return '';
        }
      }

      /*
         页面导入-在导入页面后运行的函数
        (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
        */
      function window_onload() {
        const objPage = new QuestionnaireCRUDEx();
        objPage.PageLoad();

        // document.getElementById('ExcelFile').addEventListener('change', function (e) {
        //   const files = e.target.files;
        //   if (files.length == 0) return;
        //   const f = files[0];
        //   if (!/\.xlsx$/g.test(f.name)) {
        //     alert('仅支持读取xlsx格式！');
        //     return;
        //   }
        //   readWorkbookFromLocalFile(f, function (workbook) {
        //     readWorkbook(workbook);
        //   });
        // });
        // document.getElementById('ddlSheetName').addEventListener('change', function (e) {
        //   const strSheetName = $('#ddlSheetName').val();
        //   if (strSheetName.length == 0) return;

        //   readSheet(strSheetName);
        // });
      }

      //信息提示
      function layui_Alert(iconKey: string, strMsg: string) {
        // layer.msg(strMsg, {
        //     icon: iconKey,
        //     time: 1000
        // });
      }

      //刷新当前界面
      function RefreshPage() {
        const objPage = new QuestionnaireCRUDEx();
        //objPage.BindGv_Questionnaire4Func(divVarSet.refDivList);
        objPage.btnReOrder_Click();
      }
      //显示附件
      async function btnShowOpenAttachment_Click(strQuestionId: number) {
        //xadmin1_open('附件详情', '../ResourceMan/tz_ContentAttachmentList?str1QuestionId=' + strKeyId + '&strContentTypeId=0001', '', '', true);
        tz_ContentAttachmentListEx.vuebtn_Click_Parent = btn_ClickV2;
        questionId.value = strQuestionId;
        const strQuestionName = await questionnaireStore.getQuestionName(strQuestionId);
        attachmentTitle.value = `题目内容编辑:[${strQuestionName}]`;
        reftz_ContentAttachmentList.value.showDialog();
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

      //问题知识点关系
      function btnKnowledgesExamLibRela_Click(strQuestionId: number, strCourseChapterId: string) {
        // xadmin1_open(
        //   '问题知识点关系',
        //   '../Knowledges/cc_KnowledgesExamLibRelaCRUD?str1QuestionId=' + strQuestionId,
        // );
        if (strQuestionId == 0) {
          alert('strQuestionId不能为空！');
          return;
        }
        cc_KnowledgesExamLibRelaCRUDEx.vuebtn_Click_Parent = btn_ClickV2;
        questionId.value = strQuestionId;
        courseChapterId.value = strCourseChapterId;
        refcc_KnowledgesExamLibRelaCRUD.value.showDialog();
      }
      function btnImportDataFromExcel_Click() {
        isShowImportDataFromExcel.value = true;
      }
      /*
         按钮单击,用于调用Js函数中btn_Click
        (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
        */
      function btn_Click(
        strCommandName: string,
        strKeyId: string,
        OrderNum: number,
        strQuestionId: number,
      ) {
        $('#hidOrderNum').val(OrderNum);
        $('#hidQuestionTypeId').val(OrderNum);
        $('#hidQuestionId').val(strQuestionId);

        QuestionnaireCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      function btn_ClickV2(strCommandName: string, strKeyId: any) {
        const objData = strKeyId;
        switch (strCommandName) {
          case 'ShowAnswer':
            btnShowAnswer_Click(objData.questionId, objData.questionTypeId);
            return;
          case 'AddQuestionAnswer':
            break;
          case 'UpdateOptionRecord':
            strKeyId = objData.questionOptionId;
            break;
          case 'EditQuestionOptions':
            btnQuestionOptions_Click(Number(strKeyId));
            break;
          case 'KnowledgesExamLibRela':
            btnKnowledgesExamLibRela_Click(objData.questionId, objData.courseChapterId);
            return;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'GoTop':
          case 'UpMove':
          case 'DownMove':
          case 'GoBottum':
            $('#hidOrderNum').val(objData.questionIndex);
            questionId4Sort.value = objData.questionId;
            QuestionnaireCRUDEx.btn_Click(strCommandName, objData.questionId);
            return;
          case 'ShowOpenAttachment': //复制记录
            btnShowOpenAttachment_Click(Number(strKeyId));
            return;
          default:
            break;
        }
        QuestionnaireCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      //专门用于导入Excel--题目和答案

      //// 读取本地excel文件
      //function readWorkbookFromLocalFile(file, callback) {
      //    const reader = new FileReader();
      //    reader.onload = function (e) {
      //        const data = e.target.result;
      //        const workbook = XLSX.read(data, { type: 'binary' });
      //        if (callback) callback(workbook);
      //    };
      //    reader.readAsBinaryString(file);
      //}

      //// 从网络上读取某个excel文件，url必须同域，否则报错
      //function readWorkbookFromRemoteFile(url, callback) {
      //    const xhr = new XMLHttpRequest();
      //    xhr.open('get', url, true);
      //    xhr.responseType = 'arraybuffer';
      //    xhr.onload = function (e) {
      //        if (xhr.status == 200) {
      //            const data = new Uint8Array(xhr.response)
      //            const workbook = XLSX.read(data, { type: 'array' });
      //            if (callback) callback(workbook);
      //        }
      //    };
      //    xhr.send();
      //}

      // 读取 excel文件
      function outputWorkbook(workbook: any) {
        const sheetNames = workbook.SheetNames; // 工作表名称集合
        sheetNames.forEach((name: any) => {
          const worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
          for (const key in worksheet) {
            // v是读取单元格的原始值
            console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
          }
        });
      }

      // function readWorkbook(workbook) {
      //     const sheetNames = workbook.SheetNames; // 工作表名称集合
      //     const worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
      //     const csv = XLSX.utils.sheet_to_csv(worksheet);
      //     document.getElementById('result').innerHTML = csv2table(csv);
      // }

      function table2csv(table: any) {
        // const csv = [];
        // $(table)
        //   .find('tr')
        //   .each(function () {
        //     const temp = [];
        //     $(this)
        //       .find('td')
        //       .each(function () {
        //         temp.push($(this).html());
        //       });
        //     temp.shift(); // 移除第一个
        //     csv.push(temp.join(','));
        //   });
        // csv.shift();
        // return csv.join('\n');
      }

      // csv转sheet对象
      function csv2sheet(csv: any) {
        // const sheet = {}; // 将要生成的sheet
        // csv = csv.split('\n');
        // csv.forEach(function (row, i) {
        //   row = row.split(',');
        //   if (i == 0)
        //     sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
        //   row.forEach(function (col, j) {
        //     sheet[String.fromCharCode(65 + j) + (i + 1)] = { v: col };
        //   });
        // });
        // return sheet;
      }

      // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
      function sheet2blob(sheet: any, sheetName: any) {
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

      /**
       * 通用的打开下载对话框方法，没有测试过具体兼容性
       * @param url 下载地址，也可以是一个blob对象，必选
       * @param saveName 保存文件名，可选
       */
      function openDownloadDialog(url: any, saveName: any) {
        if (typeof url == 'object' && url instanceof Blob) {
          url = URL.createObjectURL(url); // 创建blob地址
        }
        const aLink = document.createElement('a');
        aLink.href = url;
        aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
        let event;
        if (window.MouseEvent) event = new MouseEvent('click');
        else {
          event = document.createEvent('MouseEvents');
          event.initMouseEvent(
            'click',
            true,
            false,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null,
          );
        }
        aLink.dispatchEvent(event);
      }

      function file_change(e: any) {
        const files = e.target.files;
        if (files.length == 0) return;
        const f = files[0];
        if (!/\.xlsx$/g.test(f.name)) {
          alert('仅支持读取xlsx格式！');
          return;
        }
        console.error('files.length:', files.length);
        readWorkbookFromLocalFile(f, function (workbook: any) {
          readWorkbook(workbook);
        });

        loadRemoteFile('./sample/test.xlsx');
      }

      function loadRemoteFile(url: string) {
        // readWorkbookFromRemoteFile(url, function (workbook) {
        //     readWorkbook(workbook);
        // });
      }

      //  //导出Excel 通过js；
      // function exportExcel() {

      //     const sheet = XLSX.utils.table_to_sheet($('#divDataLst table')[0]);
      //     openDownloadDialog(sheet2blob(sheet), '下载2.xlsx');
      // }

      function exportSpecialExcel() {
        const aoa = [
          ['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
          ['姓名', '性别', '年龄', '注册时间'],
          ['张三', '男', 18, new Date()],
          ['李四', '女', 22, new Date()],
        ];
        //   const sheet = XLSX.utils.aoa_to_sheet(aoa);
        //   sheet['!merges'] = [
        // // 设置A1-C1的单元格合并
        // { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }
        //   ];
        //   openDownloadDialog(sheet2blob(sheet), '单元格合并示例.xlsx');
      }

      function exportSpecialExcel_pyf(arrData: any, strFileName: any) {
        //const aoa = [
        //    ['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
        //    ['姓名', '性别', '年龄', '注册时间'],
        //    ['张三', '男', 18, new Date()],
        //    ['李四', '女', 22, new Date()]
        //];
        // const sheet = XLSX.utils.aoa_to_sheet(arrData);
        //sheet['!merges'] = [
        //    // 设置A1-C1的单元格合并
        //    { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }
        //];
        // openDownloadDialog(sheet2blob(sheet), strFileName);
      }

      function selectFile() {
        // const objExcelFile = document.getElementById('ExcelFile').click();
        refExcelFile.value.click();
      }
      //// 读取本地excel文件
      function readWorkbookFromLocalFile(file: any, callback: any) {
        console.error('run in readWorkbookFromLocalFile');
        const reader = new FileReader();
        // reader.onload = function (e) {
        //     const data = e.target.result;
        //     const workbook = XLSX.read(data, { type: 'binary' });
        //     if (callback) callback(workbook);
        // };
        // reader.readAsBinaryString(file);
      }
      const strCsv = '';
      function readWorkbook(workbook: any) {
        // objWorkBook = workbook;
        // const sheetNames = workbook.SheetNames; // 工作表名称集合
        // const ddlSheetName = document.getElementById('ddlSheetName');
        // ddlSheetName.options.length = 0;
        // sheetNames.forEach(x => { ddlSheetName.options.add(new Option(x, x)) });
        // const worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
        // const csv = XLSX.utils.sheet_to_csv(worksheet);
        // console.log(csv);
        // document.getElementById('ExcelData').innerHTML = csv2table(csv);
        // strCsv = csv;
      }

      function readSheet(strSheetName: any) {
        // const worksheet = objWorkBook.Sheets[strSheetName]; // 这里我们只读取第一张sheet
        // const csv = XLSX.utils.sheet_to_csv(worksheet);
        // console.log(csv);
        // document.getElementById('ExcelData').innerHTML = csv2table(csv);
        // strCsv = csv;
      }

      // 将csv转换成表格
      function csv2table(csv: any) {
        let html = '<table>';
        const rows = csv.split('\n');
        rows.pop(); // 最后一行没用的
        rows.forEach(function (row: any, idx: any) {
          const columns = row.split(',');
          columns.unshift(idx + 1); // 添加行索引

          html += '<tr>';
          columns.forEach(function (column: any) {
            html += '<td>' + column + '</td>';
          });
          html += '</tr>';
        });
        html += '</table>';
        return html;
      }
      function Refresh_Click() {
        alert(`Refresh_Click`);
      }

      function btnQuestionOptions_Click(strQuestionId: number) {
        // xadmin.open('题目选项', '../QuestionaireEdit/QuestionOptionsCRUD?strQuestionId=' + strKeyId);
        QuestionOptionsCRUDEx.vuebtn_Click_Parent = btn_ClickV2;
        questionId.value = strQuestionId;
        refQuestionOptionsCRUD.value.showDialog();
      }

      //显示答案
      function btnShowAnswer_Click(strQuestionId: number, strQuestionTypeId: string) {
        // xadmin.open(
        //   '题目答案',
        //   '../QuestionaireEdit/AnswerCRUD?strQuestionId=' +
        //     strKeyId +
        //     '&strQuestionTypeId=' +
        //     strQuestionTypeId,
        // );
        questionId.value = strQuestionId;
        questionTypeId.value = strQuestionTypeId;
        refAnswerCRUD.value.showDialog();
      }
      //检查过程
      function btnInspectProcess_Click(strQuestionId: number) {
        // xadmin.open('检查过程', '../GameLearn/ge_InspectProcessCRUD?strQuestionId=' + strQuestionId);
        questionId.value = strQuestionId;
        refge_InspectProcessCRUD.value.showDialog();
      }

      //问题检查标准
      function btnExaminationCriteria_Click(strQuestionId: number) {
        // xadmin.open(
        //   '问题检查标准',
        //   '../GameLearn/ge_ExaminationCriteriaCRUD?strQuestionId=' + strQuestionId,
        // );
        questionId.value = strQuestionId;
        refge_ExaminationCriteriaCRUD.value.showDialog();
      }

      //测试题目是否完善
      function btnTestQuestionName_Click(strQuestionId: number) {
        // xadmin.open(
        //   '测试题目是否完善',
        //   '../QuestionaireEdit/TestQuestionName?strQuestionId=' + strQuestionId,
        // );
        questionId.value = strQuestionId;
        refTestQuestionName.value.showDialog();
      }

      return {
        strTitle,
        btn_Click,
        refQuestionnaire_Edit,
        refAnswer_Edit,
        reftz_ContentAttachmentList,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        file_change,
        Refresh_Click,
        questionId,
        questionId4Sort,
        questionTypeId,
        courseChapterId,
        refcc_KnowledgesExamLibRelaCRUD,
        refQuestionOptionsCRUD,
        refAnswerCRUD,
        refge_InspectProcessCRUD,
        refge_ExaminationCriteriaCRUD,
        refTestQuestionName,
        refQuestionOptions_Edit,
        attachmentTitle,
        questionName_q,
        courseChapterId_q,
        questionTypeId_q,
        difficultyLevelId_q,
        levelModeTypeId_q,
        isTest_q,

        arrcc_CourseChapter,
        arrQuestionType,
        arrge_DifficultyLevel,
        arrge_LevelModeType,

        arrcc_CourseKnowledges,
        courseKnowledgeId_q,
        questionId_q,
        selectFile,
        refExcelFile,
        isShowImportDataFromExcel,
        btnImportDataFromExcel_Click,
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
  /* #divPager {
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
  } */

  .modal-dialog {
    /*max-width: 1500px;*/
    text-align: center;
    margin: 1.75rem auto;
  }
</style>
<!-- 
Layout = "~/Pages/Shared/_Layout_PC.cshtml";
ViewData["Title"] = "题目维护"; -->
