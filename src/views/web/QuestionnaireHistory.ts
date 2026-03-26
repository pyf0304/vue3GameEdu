import $ from 'jquery';
import { ge_ExaminationCriteria_EditEx } from '../GameLearn/ge_ExaminationCriteria_EditEx';
import { clsge_ExaminationCriteriaEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN';
import { clsge_InspectProcessEN } from '@/ts/L0Entity/GameLearn/clsge_InspectProcessEN';
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import {
  ge_ExaminationCriteria_AddNewRecordAsync,
  ge_ExaminationCriteria_Delge_ExaminationCriteriasByCondAsync,
  ge_ExaminationCriteria_GetMaxStrIdAsync,
  ge_ExaminationCriteria_GetObjLstAsync,
  ge_ExaminationCriteria_ReFreshCache,
} from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import {
  ge_InspectProcess_AddNewRecordAsync,
  ge_InspectProcess_Delge_InspectProcesssByCondAsync,
  ge_InspectProcess_GetMaxStrIdAsync,
  ge_InspectProcess_GetObjLstAsync,
} from '@/ts/L3ForWApi/GameLearn/clsge_InspectProcessWApi';
import {
  Answer_AddNewRecordAsync,
  Answer_DelAnswersByCondAsync,
  Answer_GetObjLstAsync,
  Answer_ReFreshCache,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import {
  Questionnaire_AddNewRecordAsync,
  Questionnaire_DelQuestionnairesAsync,
  Questionnaire_DownMoveAsync,
  Questionnaire_GetObjByQuestionIdAsync,
  Questionnaire_GetObjLstByQuestionIdLstAsync,
  Questionnaire_GoBottomAsync,
  Questionnaire_GoTopAsync,
  Questionnaire_ReOrderAsync,
  Questionnaire_UpMoveAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
import {
  QuestionOptions_AddNewRecordAsync,
  QuestionOptions_CheckProperty4Update,
  QuestionOptions_DelQuestionOptionssByCondAsync,
  QuestionOptions_GetMaxStrIdAsync,
  QuestionOptions_GetObjLstAsync,
  QuestionOptions_ReFreshCache,
  QuestionOptions_UpdateRecordAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';

import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { Answer_EditEx } from '../QuestionaireEdit/Answer_EditEx';

import { QuestionnaireCRUD } from '@/viewsBase/QuestionaireEdit/QuestionnaireCRUD';
import { UserAnswerResultCRUD } from '@/viewsBase/QuestionnaireResult/UserAnswerResultCRUD';
import Questionnaire_EditEx from '../QuestionaireEdit/Questionnaire_EditEx';
import { QuestionOptionsCRUDEx } from '../QuestionaireEdit/QuestionOptionsCRUDEx';
import { clsge_ControlAttributeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlAttributeEN';
import { clsge_ControlTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlTypeEN';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { clsge_EventTypeEN } from '@/ts/L0Entity/GameLearn/clsge_EventTypeEN';
import { clsge_ExaminationTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationTypeEN';
import { clsge_OperationTypeEN } from '@/ts/L0Entity/GameLearn/clsge_OperationTypeEN';
import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsAnswerENEx } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerENEx';
import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
import { clsUserAnswerResultENEx } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultENEx';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { ge_ControlAttribute_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ControlAttributeWApi';
import { ge_ControlType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ControlTypeWApi';
import { ge_DifficultyLevel_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { ge_EventType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_EventTypeWApi';
import { ge_ExaminationType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationTypeWApi';
import { ge_OperationType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_OperationTypeWApi';
import { ge_StuBatchQuesRela_GetFirstObjAsync } from '@/ts/L3ForWApi/InteractManage/clsge_StuBatchQuesRelaWApi';
import { cc_CourseChapter_GetObjLstCache } from 'share-stu-study-base-lib';
import { cc_CourseExamPaper_func } from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperWApi';
import { cc_CourseKnowledges_GetObjLstAsync } from 'share-stu-study-base-lib';
import { cc_KnowledgesExamLibRela_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import { ge_GameLevel_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import {
  UserAnswerResult_CopyObjTo,
  UserAnswerResult_GetObjLstByPagerAsync,
  UserAnswerResult_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/QuestionnaireResult/clsUserAnswerResultWApi';
import {
  tz_ContentAttachment_AddNewRecordAsync,
  tz_ContentAttachment_Deltz_ContentAttachmentsByCondAsync,
  tz_ContentAttachment_GetObjLstAsync,
} from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { QuestionType_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import {
  AnswerEx_CopyToEx,
  AnswerEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/QuestionaireEdit/clsAnswerExWApi';
import {
  QuestionOptionsEx_GetSpanForOptionTitle,
  QuestionOptionsEx_GetSpanForOptionPreEmpty,
} from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
import { UserAnswerResultEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsUserAnswerResultExWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputArrayValueInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { useUserStore } from '@/store/modulesShare/user';
import { message } from '@/utils/myMessage';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { tz_ContentAttachmentEx_GeneLiHtmlByObj } from '@/ts/L3ForWApiEx/ResourceMan/clstz_ContentAttachmentExWApi';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';
import { divVarSet, CourseId_Session, viewVarSet } from '@/views/web/QuestionnaireHistoryVueShare';
import {
  CombineUserAnswerResultCondition,
  viewVarSet as viewVarSet_UserAnswer,
} from '@/views/QuestionnaireResult/UserAnswerResultVueShare';

declare function ShowDialog_Questionnaire(strOpType: string): void;
declare function HideDialog_Questionnaire(): void;
declare function layui_Alert(iconKey: string, strMsg: string): void;

declare function ShowNewOpen(strKeyId: string): void;
declare function btnShowAnswer_Click(strKeyId: string): void;

//declare function ShowOpenAttachment(strKeyId): void;
//declare function ShowAnswer(strKeyId): void;

/* QuestionnaireHistory 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class QuestionnaireHistory extends UserAnswerResultCRUD implements IShowList {
  //public static divName4List: string = "divDataLst";
  //public static mstrSortQuestionnaireBy: string = "questionId";

  public static strCourseIdCache: string = clsPubLocalStorage.courseId; //缓存分类字段

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }

  //  public static objPageCRUD: UserAnswerResultCRUD;
  public divName4Query: string = 'divQuery'; //查询区的层Id
  public divName4Function: string = 'divFunction'; //功能区的层Id

  public recCount = 0;

  BindGv(strType: string) {
    //this.btnReOrder_Click();
    //this.BindGv_Questionnaire4Func(divVarSet.refDivList);// BindGv_Questionnaire();
    this.BindGv_UserAnswerResult4Func(divVarSet.refDivList); //绑定数据列表
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'Questionnaire':
        alert('该类没有绑定该函数：[this.BindGv_Questionnaire_Cache]！');
        //this.BindGv_QuestionnaireCache();
        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      if (userStore.userId != '') {
        CourseId_Session.value = clsPubLocalStorage.courseId;

        //     this.SetEventFunc();
        // 为查询区绑定下拉框
        //   const gvBindDdl = await this.BindDdl4QueryRegion();

        viewVarSet.sortQuestionnaireBy = 'questionId Asc';

        //2、显示无条件的表内容在GridView中
        //await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
        await this.BindGv_UserAnswerResult4Func(divVarSet.refDivList); //绑定数据列表
        await this.Bind_ShowPager(divVarSet.refDivList);

        HideDivInDivObj(divVarSet.refDivLayout, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    ShowDivInDivObj(divVarSet.refDivLayout, 'divLoading');
    this.SetCurrPageIndex(1);
    //await this.BindGv_Questionnaire4Func(divVarSet.refDivList);//绑定数据列表
    await this.BindGv_UserAnswerResult4Func(divVarSet.refDivList); //绑定数据列表

    await this.Bind_ShowPager(divVarSet.refDivList); //绑定分页
    HideDivInDivObj(divVarSet.refDivLayout, 'divLoading');
  }
  /*
   * 获取当前页序号(Used In BindGv_Cache)
   */
  public get CurrPageIndex(): number {
    const strCurrPageIndex = GetInputValueInDivObj(divVarSet.refDivLayout, 'hidCurrPageIndex');
    if (IsNullOrEmpty(strCurrPageIndex)) return 0;
    return Number(strCurrPageIndex);
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    $('#hidCurrPageIndex').val(value);
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: QuestionnaireHistory = new QuestionnaireHistory();
    const objPageEdit: Questionnaire_EditEx = new Questionnaire_EditEx(
      'Questionnaire_EditEx',
      objPage,
    );
    $('#hidKeyId').val(strKeyId);
    let arrKeyIds;
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
        objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'Update':
        //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecordInTab_Click(Number(strKeyId));
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        //const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        //if (arrKeyIds.length == 0) {
        //    alert("请选择需要复制的记录！");
        //    return;
        //}
        /*objPage.btnCopyRecord_Click();*/
        //objPage.btnCopy_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'Delete': //删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        //  objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'AddKnowType':
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        //增加操作题标准
        objPage.btnAddQuestionCriteria_Click(strKeyId);
        break;
      case 'QuestionAnswer':
        //const strKeyId =  GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        //if (IsNullOrEmpty(strKeyId) == true) {
        //    const strMsg = "请选择需要修改的记录！";
        //    console.error(strMsg);
        //    alert(strMsg);
        //    return;
        //}
        //题目答案 选项
        objPage.btnQuestionAnswer_Click(strKeyId);
        break;
      case 'QuestionAttachment':
        // 添加附件
        //objPage.btnAddContentAttachment_Click(strKeyId);
        break;
      case 'DelOptionRecord':
        const objPage_Options: QuestionOptionsCRUDEx = new QuestionOptionsCRUDEx();
        // 删除问题选项
        objPage_Options.btnDelRecordInTab_Click(strKeyId);
        break;

      //case "CreateAnswer":            //添加答案记录
      //    const objPageEdit: Answer_EditEx = new Answer_EditEx('Answer_EditEx', objPage);
      //    objPageEdit.btnAddNewRecord_Click();
      //    break;

      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(QuestionnaireHistoryEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 根据关键字列表删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
  */
  public async DelMultiRecord(arrQuestionId: Array<string>) {
    try {
      const responseText = await Questionnaire_DelQuestionnairesAsync(arrQuestionId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //设置题目答案选项；
  public async btnQuestionAnswer_Click(strKeyId: string) {
    //根据题目ID得到题目类型、判断后调取不同数据源
    //获取传递过来的ID值进行展示；
    //const strWhereCond = " questionId='" + strQuestionId + "'";
    const objQuestionnaire = await Questionnaire_GetObjByQuestionIdAsync(Number(strKeyId));
    if (objQuestionnaire != null) {
      const strTypeId = objQuestionnaire.questionTypeId;
      //单选多选、连连看多选
      if (strTypeId == '03' || strTypeId == '02' || strTypeId == '17') {
        //页面跳转
        //ShowNewOpen(strKeyId);
        btnShowAnswer_Click(strKeyId);
      } else if (strTypeId == '05' || strTypeId == '09' || strTypeId == '10' || strTypeId == '16') {
        //操作、算法题；
        const objPage: QuestionnaireHistory = new QuestionnaireHistory();
        const objPageEdit: Answer_EditEx = new Answer_EditEx('Answer_EditEx', objPage);
        $('#hidQuestionId').val(strKeyId);
        //objPageEdit.btnAddNewQuestionAnswer_Click(strKeyId);
        objPageEdit.btnAddNewRecordWithMaxId_Click();
      } else {
        const strMsg = '该题型无需设置!';
        alert(strMsg);
      }
    }
  }

  //设置添加知识点类型；
  public async btnAddQuestionCriteria_Click(strKeyId: string) {
    const objPage: QuestionnaireHistory = new QuestionnaireHistory();
    const objPageEdit: ge_ExaminationCriteria_EditEx = new ge_ExaminationCriteria_EditEx(
      'ge_ExaminationCriteria_EditEx',
      objPage,
    );

    objPageEdit.btnAddNewQuestionCriteria_Click(Number(strKeyId));
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombineUserAnswerResultConditionObj(): Promise<clsUserAnswerResultEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objUserAnswerResult_Cond = new clsUserAnswerResultEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.CourseId_q != "" && this.CourseId_q != "0") {
      //    strWhereCond += ` And ${clsUserAnswerResultEN.con_CourseId} = '${this.CourseId_q}'`;
      //    objUserAnswerResult_Cond.SetCondFldValue(clsUserAnswerResultEN.con_CourseId, this.CourseId_q, "=");
      //}
      //if (this.BatchId_q != "" && this.BatchId_q != "0") {
      //    strWhereCond += ` And ${clsUserAnswerResultEN.con_BatchId} = '${this.BatchId_q}'`;
      //    objUserAnswerResult_Cond.SetCondFldValue(clsUserAnswerResultEN.con_BatchId, this.BatchId_q, "=");
      //}
      //if (this.userId_q != "") {
      //    strWhereCond += ` And ${clsUserAnswerResultEN.con_UserId} like '% ${this.userId_q}%'`;
      //    objUserAnswerResult_Cond.SetCondFldValue(clsUserAnswerResultEN.con_UserId, this.userId_q, "like");
      //}
      //if (this.answerText_q != "") {
      //    strWhereCond += ` And ${clsUserAnswerResultEN.con_AnswerText} like '% ${this.answerText_q}%'`;
      //    objUserAnswerResult_Cond.SetCondFldValue(clsUserAnswerResultEN.con_AnswerText, this.answerText_q, "like");
      //}
      const userStore = useUserStore();
      //根据课程 和当前用户查询 结果；
      const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const strUserId = userStore.userId;

      strWhereCond += ` And ${clsUserAnswerResultEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
      objUserAnswerResult_Cond.SetCondFldValue(
        clsUserAnswerResultEN.con_IdCurrEduCls,
        strIdCurrEduCls,
        '=',
      );

      strWhereCond += ` And ${clsUserAnswerResultEN.con_UserId} like '%${strUserId}%'`;
      objUserAnswerResult_Cond.SetCondFldValue(clsUserAnswerResultEN.con_UserId, strUserId, 'like');
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(CombineUserAnswerResultConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objUserAnswerResult_Cond.whereCond = strWhereCond;
    return objUserAnswerResult_Cond;
  }

  //用户答题记录
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
*/
  public async BindGv_UserAnswerResult4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortQuestionnaireBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortUserAnswerResultBy)为空，请检查！(In BindGv_UserAnswerResult_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await CombineUserAnswerResultCondition();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];
    let arrUserAnswerResultExObjLst: Array<clsUserAnswerResultENEx> = [];
    try {
      this.recCount = await UserAnswerResult_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet_UserAnswer.sortUserAnswerResultBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstByPagerAsync(objPagerPara);
      arrUserAnswerResultExObjLst = arrUserAnswerResultObjLst.map(this.CopyToExUserAnswerResult);
      for (const objInFor of arrUserAnswerResultExObjLst) {
        const conFuncMap = await this.FuncMapUserAnswerResult(objInFor);
      }
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }

    try {
      //this.BindTab_UserAnswerResult4Func(divList, arrUserAnswerResultExObjLst);

      const strHtml = await this.BindTab_UserAnswerResultEx(arrUserAnswerResultExObjLst);
      $('#divDataLst').html(strHtml);
      if (this.recCount > 10) {
        $('#divPager').show();
      } else {
        $('#divPager').hide();
      }

      console.log('完成BindGv_UserAnswerResult!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  //用户结果列表
  private async BindTab_UserAnswerResultEx(
    arrUserAnswerResultExObjLst: Array<clsUserAnswerResultENEx>,
  ): Promise<string> {
    const userStore = useUserStore();
    const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;

    const strCourseId = clsPubLocalStorage.courseId;

    //获取内容附件
    const strWhereCondAttachment =
      "1=1 and courseId='" + strCourseId + "' and contentTypeId='0001' order by orderNum Asc ";
    let arrtz_ContentAttachmentObjLst: Array<clstz_ContentAttachmentEN> = [];

    const arrtz_ContentAttachmentObjLst2 = await tz_ContentAttachment_GetObjLstAsync(
      strWhereCondAttachment,
    );

    //获取问题选项
    const strWhereQuestionOptions =
      "1=1 and courseId='" + strCourseId + "' order by questionOptionId Asc ";
    let arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];
    let arrQuestionOptionsObjLst2: Array<clsQuestionOptionsEN> = [];
    arrQuestionOptionsObjLst2 = await QuestionOptions_GetObjLstAsync(strWhereQuestionOptions);

    //正确答案
    const strWhereAnswer = "1=1 and courseId='" + strCourseId + "' order by answerIndex Asc ";

    const arrAnswerObjLst2 = await Answer_GetObjLstAsync(strWhereAnswer);
    const arrAnswerExObjLst2 = arrAnswerObjLst2.map(AnswerEx_CopyToEx);
    for (const objInFor of arrAnswerExObjLst2) {
      await AnswerEx_FuncMapByFldName(clsAnswerENEx.con_OptionName, objInFor);
    }
    //问题知识点关系
    const strWhereKnowledgesExamLibRela =
      "1=1 and courseId='" + strCourseId + "' order by mId Asc ";
    let arrcc_KnowledgesExamLibRelaObjLst: Array<clscc_KnowledgesExamLibRelaEN> = [];
    let arrcc_KnowledgesExamLibRelaObjLst2: Array<clscc_KnowledgesExamLibRelaEN> = [];
    arrcc_KnowledgesExamLibRelaObjLst2 = await cc_KnowledgesExamLibRela_GetObjLstAsync(
      strWhereKnowledgesExamLibRela,
    );

    //知识点
    const arrcc_CourseKnowledges: Array<clscc_CourseKnowledgesEN_T> =
      await cc_CourseKnowledges_GetObjLstAsync("courseId='" + strCourseId + "'");

    //题目类型；
    const arrQuestionType: Array<clsQuestionTypeEN> = await QuestionType_GetObjLstCache();
    //题目等级；
    const arrge_DifficultyLevel: Array<clsge_DifficultyLevelEN> =
      await ge_DifficultyLevel_GetObjLstCache();

    //章节；
    const arrcc_CourseChapter: Array<clscc_CourseChapterEN_T> =
      await cc_CourseChapter_GetObjLstCache(strCourseId);

    //关卡；
    const arrge_GameLevel: Array<clsge_GameLevelEN> = await ge_GameLevel_GetObjLstCache(
      strCourseId,
    );
    //const arrUserAnswerResult = await UserAnswerResult_GetObjLstCache(strCourseId);
    //const arrUserAnswerResultEx = arrUserAnswerResult.map(UserAnswerResultEx_CopyToEx);

    let strhtml: string = '';
    let strTitle = '';

    strTitle = '题目列表';

    strhtml += '<div class="info" id="infoViewpoint">';

    strhtml += '<div class="title btn-3">';

    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="' +
      strTitle +
      '">' +
      strTitle +
      '</a></div>';
    //strhtml += '<div style="float:right; margin-right:20px;">';
    //strhtml += '<button title="添加题目" class="layui-btn layui-btn-radius" onclick=btn_Click("AddNewRecordWithMaxId")> <i class="layui-icon" >&#xe608;</i>添加题目</button>';
    //strhtml += '<button id="btnReOrderByCource" title="重序" class="layui-btn layui-btn-danger layui-btn-radius" onclick=btn_Click("ReOrder")> <i class="layui-icon" >&#xe9aa;</i>重序</button>';
    //strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '<ul class="artlist">';
    let v = 0; //给内容加个序号
    //循环用户回答结果 数据；
    for (let i = 0; i < arrUserAnswerResultExObjLst.length; i++) {
      v++;
      const objUserAnswerResultEx = arrUserAnswerResultExObjLst[i];
      const strExamBatchNo = arrUserAnswerResultExObjLst[i].examBatchNo; //批次号
      const strQuestionId = arrUserAnswerResultExObjLst[i].questionId;
      const strUpdDate = arrUserAnswerResultExObjLst[i].updDate;
      const strAnswerText = arrUserAnswerResultExObjLst[i].answerText;

      //得到题目信息根据题目ID
      const objQuestionnaire = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      if (objQuestionnaire != null) {
        const strQuestionName = objQuestionnaire.questionName; //题目名称
        const strQuestionTypeId = objQuestionnaire.questionTypeId; //题目类型ID
        const strDifficultyLevelId = objQuestionnaire.difficultyLevelId; //难度等级
        const strCourseChapterId = objQuestionnaire.courseChapterId; //章节id
        const intQuestionIndex = objQuestionnaire.questionIndex; //序号

        let strQuestionTypeName = ''; //题目类型

        const objQuestionType = arrQuestionType.find((x) => x.questionTypeId == strQuestionTypeId);
        if (objQuestionType != null) {
          strQuestionTypeName = objQuestionType.questionTypeName;
        }

        let strDifficultyLevelName = '';
        const objge_DifficultyLevel = arrge_DifficultyLevel.find(
          (x) => x.difficultyLevelId == strDifficultyLevelId,
        );
        if (objge_DifficultyLevel != null) {
          strDifficultyLevelName = objge_DifficultyLevel.difficultyLevelName;
        }

        // const strCourseName = objQuestionnaire.courseName;//课程名称
        let strChapterName = ''; //章节名称
        const objcc_CourseChapter = arrcc_CourseChapter.find(
          (x) => x.courseChapterId == strCourseChapterId,
        );
        if (objcc_CourseChapter != null) {
          strChapterName = objcc_CourseChapter.courseChapterName;
        }

        //strhtml += '</li>';
        strhtml +=
          '<li><div style="float:left;"><span class="rowtit color1">' +
          intQuestionIndex +
          '.[' +
          strQuestionTypeName +
          ']：</span><span class="abstract-text">' +
          strQuestionName +
          '</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(' +
          strDifficultyLevelName +
          ')</span></div>';

        strhtml += '</li>';

        //附件
        strhtml += '<li><span class="rowtit color3">[题目内容]：</span>&nbsp;&nbsp;</li>';
        arrtz_ContentAttachmentObjLst = arrtz_ContentAttachmentObjLst2.filter(
          (x) => x.tableNameKey == strQuestionId.toString(),
        );
        if (arrtz_ContentAttachmentObjLst.length > 0) {
          for (let y = 0; y < arrtz_ContentAttachmentObjLst.length; y++) {
            const strHtml_Li = tz_ContentAttachmentEx_GeneLiHtmlByObj(
              arrtz_ContentAttachmentObjLst[y],
              strAddressAndPort,
            );
            strhtml += strHtml_Li;
          }
        }

        if (
          strQuestionTypeId == '02' ||
          strQuestionTypeId == '03' ||
          strQuestionTypeId == '11' ||
          strQuestionTypeId == '17'
        ) {
          //单选、多选、判断、连连看多选
          //strhtml += '<li><span class="rowtit color3">[问题选项]：</span>';
          //strhtml += '&nbsp;&nbsp;';
          //strhtml += '</li>';
        }
        //选项
        //const strOptionTitle = "ABCDEFGH";
        arrQuestionOptionsObjLst = arrQuestionOptionsObjLst2.filter(
          (x) => x.questionId == strQuestionId,
        );
        let intIndex = 0;
        if (arrQuestionOptionsObjLst.length > 0) {
          for (let y = 0; y < arrQuestionOptionsObjLst.length; y++) {
            const objLi = document.createElement('li');
            const txtOptionPreEmpty = QuestionOptionsEx_GetSpanForOptionPreEmpty();
            const spnOptionTitle = QuestionOptionsEx_GetSpanForOptionTitle(intIndex++);
            const spnQuestionOptionId = <HTMLSpanElement>document.createElement('span');
            spnQuestionOptionId.className = 'rowtit color3';
            spnQuestionOptionId.innerText = Format(
              '[{0}]',
              arrQuestionOptionsObjLst[y].questionOptionId,
            );

            const spnOptionName = <HTMLSpanElement>document.createElement('span');

            spnOptionName.innerText = arrQuestionOptionsObjLst[y].optionName;
            if (arrQuestionOptionsObjLst[y].isCorrect == true) {
              spnOptionName.className = 'abstract-text color3';
            } else {
              spnOptionName.className = 'abstract-text';
            }
            objLi.appendChild(txtOptionPreEmpty);
            objLi.appendChild(spnOptionTitle);
            objLi.appendChild(spnQuestionOptionId);
            objLi.appendChild(spnOptionName);
            strhtml += objLi.outerHTML;
            //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color2">[' + arrQuestionOptionsObjLst[y].optionIndex + ']、</span>';
            //strhtml += '<span class="rowtit color3">[' + arrQuestionOptionsObjLst[y].questionOptionId + ']：</span>';
            //if (arrQuestionOptionsObjLst[y].isCorrect == true) {
            //    strhtml += '<span class="abstract-text color3">' + arrQuestionOptionsObjLst[y].optionName + '</span>';
            //    //删除
            //    strhtml += '&nbsp;&nbsp;';
            //} else {
            //    strhtml += '<span class="abstract-text">' + arrQuestionOptionsObjLst[y].optionName + '</span>';
            //    //修改
            //    strhtml += '&nbsp;&nbsp;';
            //}
            //strhtml += '&nbsp;&nbsp;';
            //strhtml += '</li>';
          }
        }

        //答案数据
        const objAnswer = arrAnswerExObjLst2.find((x) => x.questionId == strQuestionId);

        //答案
        strhtml += '<li><span class="rowtit color3">[正确答案]：</span>';
        strhtml += '&nbsp;&nbsp;';
        if (objAnswer != null) {
          if (
            strQuestionTypeId == '05' ||
            strQuestionTypeId == '09' ||
            strQuestionTypeId == '10' ||
            strQuestionTypeId == '16'
          ) {
            //解答题.操作、简答、运算
            strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
            strhtml += '</li>';
            strhtml +=
              '<li><textarea id="txtCode" name = "txtCode" class="form-control" disabled="true" style = "width:100%; height:150px;" >' +
              objAnswer.answerContent +
              '</textarea></li>';
          } else {
            strhtml += '&nbsp;&nbsp;';
            if (strQuestionTypeId == '01') {
              //填空题
              strhtml += objAnswer.answerFillInBlank + '</li>';
            } else if (strQuestionTypeId == '02') {
              //单选题
              strhtml += objAnswer.optionName + '</li>';
            } else if (strQuestionTypeId == '03') {
              //多选题
              strhtml += objAnswer.answerMultiOptions + '</li>';
            } else if (strQuestionTypeId == '11') {
              //判断题
              strhtml += objAnswer.answerTrueOrFalse + '</li>';
            }
          }
        }

        //回答答案
        strhtml += '<li><span class="rowtit color3">[作答答案]：</span>';
        strhtml += '&nbsp;&nbsp;';

        if (objUserAnswerResultEx != null) {
          await UserAnswerResultEx_FuncMapByFldName(
            clsUserAnswerResultENEx.con_OptionName,
            objUserAnswerResultEx,
          );
          let objHtml4IsRight = document.createElement('i');
          objHtml4IsRight.className = 'layui-icon';
          if (objUserAnswerResultEx.isRight == true) {
            objHtml4IsRight.innerHTML = '&#xe605;';
            objHtml4IsRight.classList.add('color3');
          } else {
            objHtml4IsRight.innerHTML = '&#x1006;';
            objHtml4IsRight.classList.add('color2');
          }
          if (
            strQuestionTypeId == '05' ||
            strQuestionTypeId == '09' ||
            strQuestionTypeId == '10' ||
            strQuestionTypeId == '16'
          ) {
            //解答题.操作、简答、运算
            let objTxtCode = document.createElement('textarea');
            objTxtCode.id = 'txtCode';
            objTxtCode.name = 'txtCode';
            objTxtCode.className = 'form-control';
            objTxtCode.disabled = true;
            objTxtCode.style.width = '100%';
            objTxtCode.style.height = '150px;';
            objTxtCode.textContent = objUserAnswerResultEx.answerText;
            const objLi = document.createElement('li');
            objLi.appendChild(objHtml4IsRight);
            objLi.appendChild(objTxtCode);

            strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;';
            strhtml += '</li>';
            //    strhtml += '<li><textarea id="txtCode" name = "txtCode" class="form-control" disabled="true" style = "width:100%; height:150px;" >' + objUserAnswerResultEx.answerText + '</textarea></li>'
            strhtml += objLi.outerHTML;
          } else {
            strhtml += '&nbsp;&nbsp;' + objHtml4IsRight.outerHTML;
            if (strQuestionTypeId == '01') {
              //填空题
              strhtml += objUserAnswerResultEx.answerText + '</li>';
            } else if (strQuestionTypeId == '02') {
              //单选题
              strhtml += objUserAnswerResultEx.optionName + '</li>';
            } else if (strQuestionTypeId == '03') {
              //多选题
              strhtml += objUserAnswerResultEx.answerMultiOption + '</li>';
            } else if (strQuestionTypeId == '11') {
              //判断题
              strhtml += objUserAnswerResultEx.answerText + '</li>';
            }
          }
        }

        strhtml += '<li><span class="rowtit color5">[相关知识点]：</span>';
        arrcc_KnowledgesExamLibRelaObjLst = arrcc_KnowledgesExamLibRelaObjLst2.filter(
          (x) => x.questionId == strQuestionId,
        );
        if (arrcc_KnowledgesExamLibRelaObjLst.length > 0) {
          for (let y = 0; y < arrcc_KnowledgesExamLibRelaObjLst.length; y++) {
            const objcc_KnowledgesExamLibRela = arrcc_KnowledgesExamLibRelaObjLst[y];
            const strCourseKnowledgeId = objcc_KnowledgesExamLibRela.courseKnowledgeId;

            const objCourseKnowledges = arrcc_CourseKnowledges.find(
              (x) => x.courseKnowledgeId == strCourseKnowledgeId,
            );
            let strKnowledgeName = '';
            if (objCourseKnowledges != null) {
              strKnowledgeName = objCourseKnowledges.knowledgeName;
              const intOrderNum = y + 1;
              strhtml += intOrderNum + '、' + strKnowledgeName + '；&nbsp;&nbsp;';
            }
          }
        }
        strhtml += '&nbsp;&nbsp;';
        strhtml += '</li>';

        //得到批次数据 从而得到关卡
        strhtml += '<li><span class="rowtit color3">[其他]：</span>';

        const strUserId = userStore.userId;
        const strWhereStuExam =
          "examBatchNo='" +
          strExamBatchNo +
          "' And updUserId='" +
          strUserId +
          "'  And questionId ='" +
          strQuestionId +
          "'";
        const objge_StuBatchQuesRela = await ge_StuBatchQuesRela_GetFirstObjAsync(strWhereStuExam);
        if (objge_StuBatchQuesRela != null) {
          const strGameLevelId = objge_StuBatchQuesRela.gameLevelId;
          let strGameLevelName = '';

          const objge_GameLevel = arrge_GameLevel.find((x) => x.gameLevelId == strGameLevelId);
          if (objge_GameLevel != null) {
            strGameLevelName = objge_GameLevel.gameLevelName;
          }

          strhtml += '&nbsp;&nbsp;关卡：' + strGameLevelName + '&nbsp;&nbsp';
        }

        //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑时间：</span>' + this.substrDate(arrvViewpointExObjLst[i].updDate);
        strhtml += '&nbsp;&nbsp;提交时间：' + strUpdDate;
        strhtml += '&nbsp;&nbsp;批次号：' + strExamBatchNo;
        strhtml += '&nbsp;&nbsp;章节：' + strChapterName + '&nbsp;&nbsp;';
        //if (arrQuestionnaireExObjLst[i].isShow == true) {
        //    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已启用</span>';
        //}
        //else {
        //    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未启用</span>';
        //}
        strhtml += '</li>';
        strhtml += '</br><div style="border-bottom: 2px solid #eee;"></div></br>';
      }
    }

    strhtml += '</ul></div>';

    return strhtml;
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objUserAnswerResultENS">源对象</param>
  /// <returns>目标对象=>clsUserAnswerResultEN:objUserAnswerResultENT</returns>
  public CopyToExUserAnswerResult(
    objUserAnswerResultENS: clsUserAnswerResultEN,
  ): clsUserAnswerResultENEx {
    const objUserAnswerResultENT = new clsUserAnswerResultENEx();
    try {
      UserAnswerResult_CopyObjTo(objUserAnswerResultENS, objUserAnswerResultENT);
      return objUserAnswerResultENT;
    } catch (e) {
      const strMsg: string = Format(
        '(errid:WiTsCs0011)Copy表对象数据出错,${e}.({0})',
        clsStackTrace.GetCurrClassFunction(),
      );
      alert(strMsg);
      return objUserAnswerResultENT;
    }
  }

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objUserAnswerResultS">源对象</param>
  public async FuncMapUserAnswerResult(objUserAnswerResult: clsUserAnswerResultENEx) {
    const questionnaireStore = useQuestionnaireStore();
    try {
      {
        const Questionnaire_QuestionId = objUserAnswerResult.questionId;
        const Questionnaire_QuestionName = await questionnaireStore.getQuestionName(
          Questionnaire_QuestionId,
        );
        objUserAnswerResult.questionName = Questionnaire_QuestionName;
      }
      {
        const cc_CourseExamPaper_CourseExamPaperId = objUserAnswerResult.courseExamPaperId;
        const cc_CourseExamPaper_ExamPaperName = await cc_CourseExamPaper_func(
          clscc_CourseExamPaperEN.con_CourseExamPaperId,
          clscc_CourseExamPaperEN.con_ExamPaperName,
          cc_CourseExamPaper_CourseExamPaperId,
          clsPubLocalStorage.courseId,
        );
        objUserAnswerResult.examPaperName = cc_CourseExamPaper_ExamPaperName;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
    }
  }

  //    /* 根据条件获取相应的对象列表
  // (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
  //*/
  public async BindGv_Questionnaire4Func(divList: HTMLDivElement) {
    //if (this.hidSortQuestionnaireBy == null) {
    //    const strMsg = `在显示列表时，排序字段(hidSortQuestionnaireBy)为空，请检查！(In BindGv_Questionnaire_Cache)`;
    //    console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    // const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    //const objQuestionnaire_Cond = this.CombineQuestionnaireConditionObj();
    //objQuestionnaire_Cond.SetCondFldValue(clsQuestionnaireEN.con_CourseId, QuestionnaireHistory.strCourseIdCache, "=");
    //const objQuestionnaireEN_Sim = Questionnaire_GetSimObjFromObj(objQuestionnaire_Cond);
    //console.log(objQuestionnaireEN_Sim);
    //const strWhereCond = JSON.stringify(objQuestionnaireEN_Sim);
    //const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
    //const arrQuestionnaireObjLst: Array<clsQuestionnaireEN> = [];
    //const arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx> = [];
    //try {
    //    this.recCount = await Questionnaire_GetRecCountByCondCache(objQuestionnaire_Cond, QuestionnaireHistory.strCourseIdCache);
    //    const objPagerPara: stuPagerPara = {
    //        pageIndex: intCurrPageIndex,
    //        pageSize: this.pageSize,
    //        whereCond: strWhereCond,
    //        orderBy: this.hidSortQuestionnaireBy,
    //        sortFun: (x, y) => { return 0; }
    //    };
    //    arrQuestionnaireObjLst = await Questionnaire_GetObjLstByPagerCache(objPagerPara, QuestionnaireHistory.strCourseIdCache);
    //    arrQuestionnaireExObjLst = arrQuestionnaireObjLst.map(this.CopyToEx);
    //    for (const objInFor of arrQuestionnaireExObjLst) {
    //        const conFuncMap = await this.FuncMap(objInFor);
    //    }
    //}
    //catch (e) {
    //    console.log('catch(e)=');
    //    console.error(e);
    //    const strMsg: string = `绑定GridView不成功,${e}.`;
    //    alert(strMsg);
    //    return;
    //}
    ////if (arrQuestionnaireObjLst.length == 0) {
    ////    const strKey: string = `${clsQuestionnaireEN._CurrTabName}_${QuestionnaireHistory.strCourseIdCache}`;
    ////    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    ////    console.error("Error: ", strMsg);
    ////    //console.trace();
    ////    //alert(strMsg);
    ////    return;
    ////}
    //try {
    //    //this.BindTab_Questionnaire4Func(divList, arrQuestionnaireExObjLst);
    //    const strHtml = await this.BindList_QuestionnaireEx(arrQuestionnaireExObjLst);
    //    $("#divDataLst").html(strHtml);
    //    if (this.recCount > 10) {
    //        $("#divPager").show();
    //    } else {
    //        $("#divPager").hide();
    //    }
    //    console.log("完成BindGv_Questionnaire4Func!");
    //}
    //catch (e) {
    //    console.log('catch(e)=');
    //    console.error(e);
    //    const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
    //    alert(strMsg);
    //}
  }

  public async Bind_ShowPager(divContainer: HTMLDivElement) {
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  private async BindList_QuestionnaireEx(
    arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx>,
  ): Promise<string> {
    const vQxUsersSimStore = usevQxUsersSimStore();
    const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;

    const strCourseId = clsPubLocalStorage.courseId;

    //换行符
    //const strBr = '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

    //const strWhereCondAttachment = "1=1 and contentTypeId='0001' order by orderNum Asc ";

    //const objtz_ContentAttachment_Cond = new clstz_ContentAttachmentEN();
    //objtz_ContentAttachment_Cond.SetCondFldValue(clstz_ContentAttachmentEN.con_ContentTypeId, "0001", "=");

    //获取内容附件
    const strWhereCondAttachment =
      "1=1 and courseId='" + strCourseId + "' and contentTypeId='0001' order by orderNum Asc ";
    let arrtz_ContentAttachmentObjLst: Array<clstz_ContentAttachmentEN> = [];

    const arrtz_ContentAttachmentObjLst2 = await tz_ContentAttachment_GetObjLstAsync(
      strWhereCondAttachment,
    );

    //获取问题选项
    const strWhereQuestionOptions =
      "1=1 and courseId='" + strCourseId + "' order by questionOptionId Asc ";
    let arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];

    const arrQuestionOptionsObjLst2 = await QuestionOptions_GetObjLstAsync(strWhereQuestionOptions);

    //检查过程
    const strWhereInspectProcess = "1=1 and courseId='" + strCourseId + "' order by orderNum Asc ";
    let arrge_InspectProcessObjLst: Array<clsge_InspectProcessEN> = [];

    const arrge_InspectProcessObjLst2 = await ge_InspectProcess_GetObjLstAsync(
      strWhereInspectProcess,
    );

    //正确答案
    const strWhereAnswer = "1=1 and courseId='" + strCourseId + "' order by answerIndex Asc ";
    const arrAnswerObjLst: Array<clsAnswerEN> = [];

    const arrAnswerObjLst2 = await Answer_GetObjLstAsync(strWhereAnswer);

    //问题知识点关系
    const strWhereKnowledgesExamLibRela =
      "1=1 and courseId='" + strCourseId + "' order by mId Asc ";
    let arrcc_KnowledgesExamLibRelaObjLst: Array<clscc_KnowledgesExamLibRelaEN> = [];

    const arrcc_KnowledgesExamLibRelaObjLst2 = await cc_KnowledgesExamLibRela_GetObjLstAsync(
      strWhereKnowledgesExamLibRela,
    );

    //知识点
    const arrcc_CourseKnowledges: Array<clscc_CourseKnowledgesEN_T> =
      await cc_CourseKnowledges_GetObjLstAsync("courseId='" + strCourseId + "'");

    //操作类型
    const arrge_OperationType: Array<clsge_OperationTypeEN> =
      await ge_OperationType_GetObjLstCache();
    //控件类型
    const arrge_ControlType: Array<clsge_ControlTypeEN> = await ge_ControlType_GetObjLstCache();
    //事件类型
    const arrge_EventType: Array<clsge_EventTypeEN> = await ge_EventType_GetObjLstCache();
    //检查类型
    const arrge_ExaminationType: Array<clsge_ExaminationTypeEN> =
      await ge_ExaminationType_GetObjLstCache();

    //控件属性
    const arrge_ControlAttribute: Array<clsge_ControlAttributeEN> =
      await ge_ControlAttribute_GetObjLstCache();

    let strhtml: string = '';
    let strTitle = '';

    strTitle = '题目列表';

    strhtml += '<div class="info" id="infoViewpoint">';

    strhtml += '<div class="title btn-3">';

    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="' +
      strTitle +
      '">' +
      strTitle +
      '</a></div>';

    strhtml += '<div style="float:right; margin-right:20px;">';
    strhtml +=
      '<button title="添加题目" class="layui-btn layui-btn-radius" onclick=btn_Click("AddNewRecordWithMaxId")> <i class="layui-icon" >&#xe608;</i>添加题目</button>';
    strhtml +=
      '<button id="btnReOrderByCource" title="重序" class="layui-btn layui-btn-danger layui-btn-radius" onclick=btn_Click("ReOrder")> <i class="layui-icon" >&#xe9aa;</i>重序</button>';
    strhtml += '</div>';

    strhtml += '</div>';

    strhtml += '<ul class="artlist">';

    let v = 0; //给内容加个序号
    for (let i = 0; i < arrQuestionnaireExObjLst.length; i++) {
      v++;
      //得到questionID；
      const strQuestionId = arrQuestionnaireExObjLst[i].questionId;
      const strQuestionName = arrQuestionnaireExObjLst[i].questionName; //题目名称
      const strQuestionTypeId = arrQuestionnaireExObjLst[i].questionTypeId; //题目类型ID
      const strQuestionTypeName = arrQuestionnaireExObjLst[i].questionTypeName; //题目类型
      const strDifficultyLevelName = arrQuestionnaireExObjLst[i].difficultyLevelName; //难度等级
      const strCourseName = arrQuestionnaireExObjLst[i].courseName; //课程名称
      const strChapterName = arrQuestionnaireExObjLst[i].chapterName; //章节名称
      const intQuestionIndex = arrQuestionnaireExObjLst[i].questionIndex; //序号

      //strhtml += '</li>';
      strhtml +=
        '<li><div style="float:left;"><span class="rowtit color1">' +
        intQuestionIndex +
        '.[' +
        strQuestionTypeName +
        ']：</span><span class="abstract-text">' +
        strQuestionName +
        '</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(' +
        strDifficultyLevelName +
        ')</span></div>';

      strhtml += '<div style="float:right; margin-right:20px;">';
      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[题目操作]：</span>';
      //修改
      strhtml +=
        '&nbsp;&nbsp;<button title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btn_Click("UpdateRecord","' +
        strQuestionId +
        '")> <i class="layui-icon" >&#xe642;</i>修改</button>';
      //删除
      strhtml +=
        '&nbsp;&nbsp;<button title="删除" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btn_Click("DelRecord","' +
        strQuestionId +
        '")> <i class="layui-icon" >&#xe640;</i>删除</button>';
      //克隆
      strhtml +=
        '&nbsp;&nbsp;<button title="克隆" class="layui-btn layui-btn layui-btn-xs" onclick=btn_Click("Clone","' +
        strQuestionId +
        '")> <i class="layui-icon" >&#xe630;</i>克隆</button>';
      //移顶
      strhtml +=
        '&nbsp;&nbsp;<button title="移顶" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("GoTop","' +
        strQuestionId +
        '",' +
        intQuestionIndex +
        ')><i class="layui-icon">&#xe604;</i></button>';
      //上移
      strhtml +=
        '<button title="上移" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("UpMove","' +
        strQuestionId +
        '",' +
        intQuestionIndex +
        ')><i class="iconfont">&#xe6a5;</i></button>';
      //下移
      strhtml +=
        '<button title="下移" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("DownMove","' +
        strQuestionId +
        '",' +
        intQuestionIndex +
        ')><i class="iconfont">&#xe6a6;</i></button>';
      //移底
      strhtml +=
        '<button title="移底" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("GoBottum","' +
        strQuestionId +
        '",' +
        intQuestionIndex +
        ')><i class="layui-icon">&#xe625;</i></button>';

      strhtml += '</div></li>';

      //附件
      strhtml +=
        '<li><span class="rowtit color3">[题目内容]：</span>&nbsp;&nbsp;<button title="维护题目内容" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnShowOpenAttachment_Click("' +
        strQuestionId +
        '")> <i class="layui-icon" >&#xe608;</i>维护题目内容</button></li>';
      arrtz_ContentAttachmentObjLst = arrtz_ContentAttachmentObjLst2.filter(
        (x) => x.tableNameKey == strQuestionId.toString(),
      );
      if (arrtz_ContentAttachmentObjLst.length > 0) {
        for (let y = 0; y < arrtz_ContentAttachmentObjLst.length; y++) {
          const strHtml_Li = tz_ContentAttachmentEx_GeneLiHtmlByObj(
            arrtz_ContentAttachmentObjLst[y],
            strAddressAndPort,
          );
          strhtml += strHtml_Li;
        }
      }

      if (
        strQuestionTypeId == '02' ||
        strQuestionTypeId == '03' ||
        strQuestionTypeId == '11' ||
        strQuestionTypeId == '17'
      ) {
        //单选、多选、判断、连连看多选
        strhtml += '<li><span class="rowtit color3">[问题选项]：</span>';
        strhtml +=
          '&nbsp;&nbsp;<button title="维护答案选项" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btn_Click("QuestionAnswer","' +
          strQuestionId +
          '")> <i class="layui-icon" >&#xe608;</i>维护答案选项</button>';
        strhtml += '</li>';
      }
      //选项
      arrQuestionOptionsObjLst = arrQuestionOptionsObjLst2.filter(
        (x) => x.questionId == strQuestionId,
      );
      if (arrQuestionOptionsObjLst.length > 0) {
        for (let y = 0; y < arrQuestionOptionsObjLst.length; y++) {
          strhtml +=
            '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color2">[' +
            arrQuestionOptionsObjLst[y].optionIndex +
            ']、</span>';
          strhtml +=
            '<span class="rowtit color3">[' +
            arrQuestionOptionsObjLst[y].questionOptionId +
            ']：</span>';

          if (arrQuestionOptionsObjLst[y].isCorrect == true) {
            strhtml +=
              '<span class="abstract-text color3">' +
              arrQuestionOptionsObjLst[y].optionName +
              '</span>';

            //删除
            strhtml +=
              '&nbsp;&nbsp;<button title="撤销正确选项" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btn_Click("RevokeCorrect","' +
              strQuestionId +
              '")> <i class="layui-icon" >&#xe605;</i></button>';

            //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">正确答案</span>';
          } else {
            strhtml +=
              '<span class="abstract-text">' + arrQuestionOptionsObjLst[y].optionName + '</span>';
            //修改
            strhtml +=
              '&nbsp;&nbsp;<button title="设置正确选项" class="layui-btn layui-btn layui-btn-xs" onclick=btn_Click("SetCorrect","' +
              strQuestionId +
              '")> <i class="layui-icon" >&#x1006;</i></button>';
          }
          strhtml +=
            '&nbsp;&nbsp;<button title="删除选项" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("DelOptionRecord","' +
            strQuestionId +
            '")> <i class="layui-icon" >&#xe640;</i></button>';

          strhtml += '</li>';
        }
      }

      //检查过程（运算题）
      arrge_InspectProcessObjLst = arrge_InspectProcessObjLst2.filter(
        (x) => x.questionId == strQuestionId,
      );
      //答案数据
      const objAnswer = arrAnswerObjLst2.find((x) => x.questionId == strQuestionId);

      if (strQuestionTypeId == '09' || strQuestionTypeId == '16') {
        strhtml += '<li><span class="rowtit color3">[检查过程]：</span>';
        strhtml +=
          '&nbsp;&nbsp;<button title="维护代码检查过程" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnInspectProcess_Click("' +
          strQuestionId +
          '")> <i class="layui-icon">&#xe608;</i>维护代码检查过程</button>';
        if (arrge_InspectProcessObjLst.length > 0 && objAnswer != null) {
          strhtml +=
            '&nbsp;&nbsp;<button title="测试题目是否完善" class="layui-btn layui-btn layui-btn-xs" onclick=btnTestQuestionName_Click("' +
            strQuestionId +
            '")> <i class="layui-icon">&#xe64e;</i>测试题目是否完善</button>';
        }
        strhtml += '</li>';
      }

      //const arrge_InspectProcessExObjLst: Array<clsge_InspectProcessENEx> = [];
      //arrge_InspectProcessExObjLst = arrge_InspectProcessObjLst.map(this.CopyToEx_2);
      //for (const objInFor of arrge_InspectProcessExObjLst) {
      //    const conFuncMap = await this.FuncMapEx(objInFor);
      //}

      if (arrge_InspectProcessObjLst.length > 0) {
        strhtml +=
          '<li><table class="table table-striped table-condensed table-hover table-bordered table td table-sm" border="1"><tbody>';

        strhtml +=
          '<tr class="row-height"><td class="text-left">序号</td><td class="text-left">操作类型</td><td class="text-left">控件Id</td><td class="text-left">控件名称</td><td class="text-left">控件属性</td><td class="text-left">控件值</td><td class="text-left">事件</td><td class="text-left">函数</td><td class="text-left">控件显示状态</td><td class="text-left">检查描述</td><td class="text-left">修改人</td><td class="text-left">修改日期</td></tr>';
        for (let y = 0; y < arrge_InspectProcessObjLst.length; y++) {
          const intOrderNum = arrge_InspectProcessObjLst[y].orderNum;

          const objOperationType = arrge_OperationType.find(
            (x) => x.operationTypeId == arrge_InspectProcessObjLst[y].operationTypeId,
          );
          let strOperationTypeName = '';
          if (objOperationType != null) {
            strOperationTypeName = objOperationType.operationTypeName;
          }

          const objControlType = arrge_ControlType.find(
            (x) => x.controlTypeId == arrge_InspectProcessObjLst[y].controlTypeId,
          );
          let strControlTypeName = '';
          if (objControlType != null) {
            strControlTypeName = objControlType.controlTypeName;
          }

          const objEventType = arrge_EventType.find(
            (x) => x.eventTypeId == arrge_InspectProcessObjLst[y].eventTypeId,
          );
          let strEventTypeName = '';
          if (objEventType != null) {
            strEventTypeName = objEventType.eventTypeName;
          }

          const objExaminationType = arrge_ExaminationType.find(
            (x) => x.examinationTypeId == arrge_InspectProcessObjLst[y].examinationTypeId,
          );
          let strTypeDescribe = '';
          if (objExaminationType != null) {
            strTypeDescribe = objExaminationType.typeDescribe;
          }

          //属性
          const objControlAttribute = arrge_ControlAttribute.find(
            (x) => x.attributeId == arrge_InspectProcessObjLst[y].attributeId,
          );
          let strControlAttributeName = '';
          if (objControlAttribute != null) {
            strControlAttributeName = objControlAttribute.controlAttributeName;
          }

          const strControlId = arrge_InspectProcessObjLst[y].controlId;
          const strControlProp = arrge_InspectProcessObjLst[y].controlProp;
          const strControlValue = arrge_InspectProcessObjLst[y].controlValue;

          const strFunctionName = arrge_InspectProcessObjLst[y].functionName;

          const strCheckMemo = arrge_InspectProcessObjLst[y].checkMemo;

          const strUserName = await vQxUsersSimStore.getUserName(
            arrge_InspectProcessObjLst[y].updUser,
          );

          const strUpdDate = arrge_InspectProcessObjLst[y].updDate;

          strhtml += '<tr class="row-height"><td class="text-left">' + intOrderNum + '</td>';
          strhtml += '<td class="text-left">' + strOperationTypeName + '</td>';
          strhtml += '<td class="text-left">' + strControlId + '</td>';
          strhtml += '<td class="text-left">' + strControlTypeName + '</td>';
          strhtml += '<td class="text-left">' + strControlAttributeName + '</td>';
          strhtml += '<td class="text-left">' + strControlValue + '</td>';

          strhtml += '<td class="text-left">' + strEventTypeName + '</td>';
          strhtml += '<td class="text-left">' + strFunctionName + '</td>';
          strhtml += '<td class="text-left">' + strTypeDescribe + '</td>';
          strhtml += '<td class="text-left">' + strCheckMemo + '</td>';
          strhtml += '<td class="text-left">' + strUserName + '</td>';
          strhtml += '<td class="text-left">' + strUpdDate + '</td></tr>';
        }
        strhtml += '</tbody></table></li>';
      }

      //答案
      strhtml += '<li><span class="rowtit color3">[正确答案]：</span>';
      strhtml +=
        '&nbsp;&nbsp;<button title="添加答案" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btn_Click("QuestionAnswer","' +
        strQuestionId +
        '")> <i class="layui-icon">&#xe608;</i>添加答案</button>';
      if (objAnswer != null) {
        if (
          strQuestionTypeId == '05' ||
          strQuestionTypeId == '09' ||
          strQuestionTypeId == '10' ||
          strQuestionTypeId == '16'
        ) {
          //解答题.操作、简答、运算
          strhtml +=
            '&nbsp;&nbsp;&nbsp;&nbsp;<button title="维护答案" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnShowAnswer_Click("' +
            strQuestionId +
            '")> <i class="layui-icon">&#xe642;</i>维护答案</button>';
          strhtml += '</li>';
          strhtml +=
            '<li><textarea id="txtCode" name = "txtCode" class="form-control" disabled="true" style = "width:100%; height:150px;" >' +
            objAnswer.answerContent +
            '</textarea></li>';
        } else {
          strhtml +=
            '&nbsp;&nbsp;<button title="维护答案" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnShowAnswer_Click("' +
            strQuestionId +
            '")> <i class="layui-icon">&#xe642;</i>维护答案</button>';
          if (strQuestionTypeId == '01') {
            //填空题
            strhtml += objAnswer.answerFillInBlank + '</li>';
          } else if (strQuestionTypeId == '02') {
            //单选题
            strhtml += objAnswer.answerOptionId + '</li>';
          } else if (strQuestionTypeId == '03') {
            //多选题
            strhtml += objAnswer.answerMultiOptions + '</li>';
          } else if (strQuestionTypeId == '11') {
            //判断题
            strhtml += objAnswer.answerTrueOrFalse + '</li>';
          }
        }
      }

      //strhtml += '<li><span class="rowtit color5">[资源操作]：</span>';

      //else if (strQuestionTypeId == "01" || strQuestionTypeId == "05" || strQuestionTypeId == "10" || strQuestionTypeId == "16")//填空题、解答题、操作题、简答题、
      //{

      //}

      //else if (strQuestionTypeId == "16")//运算题
      //{
      //    strhtml += '&nbsp;&nbsp;<button title="维护代码检查过程" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnInspectProcess_Click("' + strQuestionId + '")> <i class="layui-icon">&#xe608;</i>维护代码检查过程</button>';
      //}

      //else if (strQuestionTypeId == "09") {
      //    strhtml += '&nbsp;&nbsp;<button title="维护问题检查标准" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnExaminationCriteria_Click("' + strQuestionId + '")> <i class="layui-icon">&#xe608;</i>维护问题检查标准</button>';
      //}

      //strhtml += '</li>';

      strhtml += '<li><span class="rowtit color5">[相关知识点]：</span>';
      arrcc_KnowledgesExamLibRelaObjLst = arrcc_KnowledgesExamLibRelaObjLst2.filter(
        (x) => x.questionId == strQuestionId,
      );
      if (arrcc_KnowledgesExamLibRelaObjLst.length > 0) {
        for (let y = 0; y < arrcc_KnowledgesExamLibRelaObjLst.length; y++) {
          const objcc_KnowledgesExamLibRela = arrcc_KnowledgesExamLibRelaObjLst[y];
          const strCourseKnowledgeId = objcc_KnowledgesExamLibRela.courseKnowledgeId;

          const objCourseKnowledges = arrcc_CourseKnowledges.find(
            (x) => x.courseKnowledgeId == strCourseKnowledgeId,
          );
          let strKnowledgeName = '';
          if (objCourseKnowledges != null) {
            strKnowledgeName = objCourseKnowledges.knowledgeName;
            const intOrderNum = y + 1;
            strhtml += intOrderNum + '、' + strKnowledgeName + '；&nbsp;&nbsp;';
          }
        }
      }
      strhtml +=
        '&nbsp;&nbsp;<button title="添加知识点关系" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnKnowledgesExamLibRela_Click("' +
        strQuestionId +
        '")> <i class="layui-icon">&#xe608;</i>添加知识点关系</button>';
      strhtml += '</li>';

      strhtml += '<li><span class="rowtit color3">[其他]：</span>';

      const strUserName = await vQxUsersSimStore.getUserName(arrQuestionnaireExObjLst[i].updUser);
      if (strUserName != '') {
        //strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑用户：</span>' + objUser.userName;
        strhtml += '&nbsp;&nbsp;编辑用户：' + strUserName + '&nbsp;&nbsp';
      }
      //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑时间：</span>' + this.substrDate(arrvViewpointExObjLst[i].updDate);
      strhtml += '&nbsp;&nbsp;编辑时间：' + arrQuestionnaireExObjLst[i].updDate;
      strhtml += '&nbsp;&nbsp;课程：' + strCourseName;
      strhtml += '&nbsp;&nbsp;章节：' + strChapterName + '&nbsp;&nbsp;';
      if (arrQuestionnaireExObjLst[i].isShow == true) {
        strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已启用</span>';
      } else {
        strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未启用</span>';
      }
      strhtml += '</li>';
      strhtml += '</br><div style="border-bottom: 2px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';

    return strhtml;
  }

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objge_InspectProcessS">源对象</param>
  //public async FuncMapEx(objge_InspectProcess: clsge_InspectProcessENEx) {
  //    try {
  //        {
  //            const ge_OperationType_operationTypeId = objge_InspectProcess.operationTypeId;
  //            const ge_OperationType_OperationTypeName = await ge_OperationType_func(clsge_OperationTypeEN.con_operationTypeId, clsge_OperationTypeEN.con_OperationTypeName, ge_OperationType_operationTypeId);
  //            objge_InspectProcess.operationTypeName = ge_OperationType_OperationTypeName;
  //        };
  //        //{
  //        //    const Questionnaire_QuestionId = objge_InspectProcess.questionId;
  //        //    const Questionnaire_QuestionName = await questionnaireStore.getQuestionName( Questionnaire_QuestionId);
  //        //    objge_InspectProcess.questionName = Questionnaire_QuestionName;
  //        //};
  //        //{
  //        //    const cc_Course_CourseId = objge_InspectProcess.courseId;
  //        //    const cc_Course_CourseName = await cc_Course_func(clscc_CourseEN.con_CourseId, clscc_CourseEN.con_CourseName, cc_Course_CourseId);
  //        //    objge_InspectProcess.courseName = cc_Course_CourseName;
  //        //};
  //        {
  //            const ge_ControlType_ControlTypeId = objge_InspectProcess.controlTypeId;
  //            const ge_ControlType_ControlTypeName = await ge_ControlType_func(clsge_ControlTypeEN.con_ControlTypeId, clsge_ControlTypeEN.con_ControlTypeName, ge_ControlType_ControlTypeId);
  //            objge_InspectProcess.controlTypeName = ge_ControlType_ControlTypeName;
  //        };
  //        {
  //            const ge_EventType_EventTypeId = objge_InspectProcess.eventTypeId;
  //            const ge_EventType_EventTypeName = await ge_EventType_func(clsge_EventTypeEN.con_EventTypeId, clsge_EventTypeEN.con_EventTypeName, ge_EventType_EventTypeId);
  //            objge_InspectProcess.eventTypeName = ge_EventType_EventTypeName;
  //        };
  //        {
  //            const ge_ExaminationType_ExaminationTypeId = objge_InspectProcess.examinationTypeId;
  //            const ge_ExaminationType_TypeDescribe = await ge_ExaminationType_func(clsge_ExaminationTypeEN.con_ExaminationTypeId, clsge_ExaminationTypeEN.con_TypeDescribe, ge_ExaminationType_ExaminationTypeId);
  //            objge_InspectProcess.typeDescribe = ge_ExaminationType_TypeDescribe;
  //        };
  //    }
  //    catch (e) {
  //        const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
  //        console.error(strMsg);
  //        alert(strMsg);
  //    }
  //}

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objge_InspectProcessENS">源对象</param>
  /// <returns>目标对象=>clsge_InspectProcessEN:objge_InspectProcessENT</returns>
  //public CopyToEx_2(objge_InspectProcessENS: clsge_InspectProcessEN): clsge_InspectProcessENEx {
  //    const objge_InspectProcessENT = new clsge_InspectProcessENEx();
  //    try {
  //        ge_InspectProcess_CopyObjTo(objge_InspectProcessENS, objge_InspectProcessENT);
  //        return objge_InspectProcessENT;
  //    }
  //    catch (e) {
  //        const strMsg: string = Format("(errid:WiTsCs0011)Copy表对象数据出错,${e}.");
  //        console.error(strMsg);
  //        alert(strMsg);
  //        return objge_InspectProcessENT;
  //    }
  //}
  /*
    重序
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
    */
  public async btnReOrder_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = clsPubLocalStorage.courseId;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Questionnaire_ReOrderAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已重序');
    await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
  }

  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    if (GetInputValueInDivObjN(divVarSet.refDivLayout, 'hidOrderNum') == 0) {
      const responseOrder = await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = clsPubLocalStorage.courseId;
    const arrKeyIds = GetInputArrayValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
    if (arrKeyIds.length == 0) {
      alert('请选择需要置底的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Questionnaire_GoBottomAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `置底出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已置底');
    await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    // const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    //arrKeyIds.forEach((e) => SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
    移动记录序号时的预检查函数
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
    */
  public PreCheck4Order(): boolean {
    const strCourseId: string = clsPubLocalStorage.courseId;
    if (strCourseId == '') {
      const strMsg = `请输入courseId!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    return true;
  }

  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public async btnDownMove_Click() {
    if (GetInputValueInDivObjN(divVarSet.refDivLayout, 'hidOrderNum') == 0) {
      const responseOrder = await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = clsPubLocalStorage.courseId;
    const arrKeyIds = GetInputArrayValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Questionnaire_DownMoveAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `下移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已下移');
    await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    // const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    //arrKeyIds.forEach((e) => SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
    上移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    if (GetInputValueInDivObjN(divVarSet.refDivLayout, 'hidOrderNum') == 0) {
      const responseOrder = await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = clsPubLocalStorage.courseId;
    const arrKeyIds = GetInputArrayValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Questionnaire_UpMoveAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `上移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已上移');
    await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    // const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    //arrKeyIds.forEach((e) => SetCkechedItem4KeyId(strListDiv, e));
  }

  /* 置顶
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
    */
  public async btnGoTop_Click() {
    if (GetInputValueInDivObjN(divVarSet.refDivLayout, 'hidOrderNum') == 0) {
      const responseOrder = await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = clsPubLocalStorage.courseId;
    const arrKeyIds = GetInputArrayValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
    if (arrKeyIds.length == 0) {
      alert('请选择需要置顶的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Questionnaire_GoTopAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `置顶出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已置顶');
    await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    // const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    //arrKeyIds.forEach((e) => SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
     复制克隆
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
    */
  public async btnCopy_Click() {
    try {
      //const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      //if (arrKeyIds.length == 0) {
      //    alert("请选择需要克隆的记录！");
      //    return "";
      //}
      const arrKeyIds = GetInputArrayValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
      const responseText = await this.CopyRecord(arrKeyIds);
      const responseOrder = await this.btnReOrder_Click(); //重序
      await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `复制记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //是否标准答案
  public async btnIsCorrectAnswer_Click(strKeyId: string, strIsAnswer: string) {
    //const strKeyId = GetFirstCheckedKeyIdInDiv("divList");
    //if (strKeyId == "") {
    //    alert("请选择需要推荐的记录！");
    //    return;
    //}

    this.UpdateIsAnswerRecordSave(strKeyId, strIsAnswer);
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateIsAnswerRecordSave(strKey: string, strIsAnswer: string) {
    const objQuestionOptionsEN: clsQuestionOptionsEN = new clsQuestionOptionsEN();
    objQuestionOptionsEN.questionOptionId = strKey;

    //this.PutDataToQuestionOptionsClass(objQuestionOptionsEN);
    if (strIsAnswer == '1') {
      objQuestionOptionsEN.isCorrect = true;
    } else {
      objQuestionOptionsEN.isCorrect = false;
    }
    objQuestionOptionsEN.sfUpdFldSetStr = objQuestionOptionsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objQuestionOptionsEN.questionOptionId == '' ||
      objQuestionOptionsEN.questionOptionId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      QuestionOptions_CheckProperty4Update(objQuestionOptionsEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseText = await QuestionOptions_UpdateRecordAsync(objQuestionOptionsEN);
      const returnBool: boolean = !!responseText;
      if (returnBool == true) {
        message.success('设置成功');
        //                    //刷新缓存
        this.BindGv_Questionnaire4Func(divVarSet.refDivList);
        QuestionOptions_ReFreshCache(CourseId_Session.value);
      } else {
        message.warning('设置不成功');
      }
      return returnBool;
    } catch (e) {
      const strMsg: string = `修改记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /* 复制问题表记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
  */
  public async CopyRecord(arrQuestionId: Array<string>) {
    try {
      const responseText = await Questionnaire_GetObjLstByQuestionIdLstAsync(arrQuestionId);
      console.log('responseText=');
      console.log(responseText);
      let intCount: number = 0;
      const arrQuestionnaireObjLst: Array<clsQuestionnaireEN> = <Array<clsQuestionnaireEN>>(
        responseText
      );
      for (let objInFor of arrQuestionnaireObjLst) {
        // const strMaxStrId = await Questionnaire_GetMaxStrIdAsync();
        // console.log('strMaxStrId=' + strMaxStrId);
        // objInFor.questionId = strMaxStrId;
        objInFor.questionName = objInFor.questionName + '_Copy';
        const responseText2 = await Questionnaire_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          const strQuestionId = objInFor.questionId;
          const strQuestionTypeId = objInFor.questionTypeId;
          const responseText3_1 = await this.CopyContentAttachmentRecord(strQuestionId);

          if (
            strQuestionTypeId == '02' ||
            strQuestionTypeId == '03' ||
            strQuestionTypeId == '11' ||
            strQuestionTypeId == '17'
          ) {
            //单选、多选、判断、连连看多选
            const responseText3_2 = await this.CopyQuestionOptionRecord(strQuestionId);
          }
          //else if (strQuestionTypeId == "09") {
          //    const responseText3_3 = await this.CopyExaminationCriteriaRecord(strQuestionId);
          //}
          else if (strQuestionTypeId == '09' || strQuestionTypeId == '16') {
            //运算题
            const responseText3_4 = await this.CopyInspectProcessRecord(strQuestionId);
          }
          const responseText3_5 = await this.CopyAnswerRecord(strQuestionId);

          const strInfo: string = `克隆记录成功!`;
          intCount++;
        } else {
          const strInfo: string = `克隆记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo: string = `共克隆了${intCount}条记录!`;
      alert(strInfo);
      console.log(strInfo);
    } catch (e) {
      const strMsg: string = `复制记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 复制问题内容（资源附件）记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
*/
  public async CopyContentAttachmentRecord(strQuestionId: number) {
    try {
      const strOld_QuestionId = GetInputValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
      const responseText = await tz_ContentAttachment_GetObjLstAsync(
        " tableNameKey='" + strOld_QuestionId + "' and contentTypeId='0001'",
      );
      console.log('responseText=');
      console.log(responseText);
      let intCount: number = 0;
      const arrtz_ContentAttachmentObjLst: Array<clstz_ContentAttachmentEN> = <
        Array<clstz_ContentAttachmentEN>
      >responseText;
      for (let objInFor of arrtz_ContentAttachmentObjLst) {
        objInFor.tableNameKey = strQuestionId.toString();
        const responseText2 = await tz_ContentAttachment_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          const strInfo: string = `克隆记录成功!`;
          intCount++;
        } else {
          const strInfo: string = `克隆问题内容（资源附件）记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo: string = `共克隆问题内容（资源附件）${intCount}条记录!`;
      //alert(strInfo);
      console.log(strInfo);
    } catch (e) {
      const strMsg: string = `复制问题内容（资源附件）记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 复制问题选项记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
  */
  public async CopyQuestionOptionRecord(strQuestionId: number) {
    try {
      const strOld_QuestionId = GetInputValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
      const responseText = await QuestionOptions_GetObjLstAsync(
        " questionId='" + strOld_QuestionId + "'",
      );
      console.log('responseText=');
      console.log(responseText);
      let intCount: number = 0;
      const arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = <Array<clsQuestionOptionsEN>>(
        responseText
      );
      for (let objInFor of arrQuestionOptionsObjLst) {
        const strMaxStrId = await QuestionOptions_GetMaxStrIdAsync();
        console.log('strMaxStrId=' + strMaxStrId);
        objInFor.questionOptionId = strMaxStrId;
        objInFor.questionId = strQuestionId;
        const responseText2 = await QuestionOptions_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          //QuestionOptions_ReFreshCache(CourseId_Session.value);
          const strInfo: string = `克隆问题选项记录成功!`;
          intCount++;
        } else {
          const strInfo: string = `克隆问题选项记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo: string = `共克隆问题选项${intCount}条记录!`;
      alert(strInfo);
      console.log(strInfo);
    } catch (e) {
      const strMsg: string = `复制问题选项记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 复制检查标准记录
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
     */
  public async CopyExaminationCriteriaRecord(strQuestionId: number) {
    try {
      const strOld_QuestionId = GetInputValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
      const responseText = await ge_ExaminationCriteria_GetObjLstAsync(
        " questionId='" + strOld_QuestionId + "'",
      );
      console.log('responseText=');
      console.log(responseText);
      let intCount: number = 0;
      const arrge_ExaminationCriteriaObjLst: Array<clsge_ExaminationCriteriaEN> = <
        Array<clsge_ExaminationCriteriaEN>
      >responseText;
      for (let objInFor of arrge_ExaminationCriteriaObjLst) {
        const strMaxStrId = await ge_ExaminationCriteria_GetMaxStrIdAsync();
        console.log('strMaxStrId=' + strMaxStrId);
        objInFor.criteriaId = strMaxStrId;
        objInFor.questionId = strQuestionId;
        const responseText2 = await ge_ExaminationCriteria_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          //ge_ExaminationCriteria_ReFreshCache();
          const strInfo: string = `克隆检查标准记录成功!`;
          intCount++;
        } else {
          const strInfo: string = `克隆检查标准记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo: string = `共克隆检查标准${intCount}条记录!`;
      //alert(strInfo);
      console.log(strInfo);
    } catch (e) {
      const strMsg: string = `复制检查标准记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 复制检查过程记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyInspectProcessRecord(strQuestionId: number) {
    try {
      const strOld_QuestionId = GetInputValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
      const responseText = await ge_InspectProcess_GetObjLstAsync(
        " questionId='" + strOld_QuestionId + "'",
      );
      console.log('responseText=');
      console.log(responseText);
      let intCount: number = 0;
      const arrge_InspectProcessObjLst: Array<clsge_InspectProcessEN> = <
        Array<clsge_InspectProcessEN>
      >responseText;
      for (let objInFor of arrge_InspectProcessObjLst) {
        const strMaxStrId = await ge_InspectProcess_GetMaxStrIdAsync();
        console.log('strMaxStrId=' + strMaxStrId);
        objInFor.inspectId = strMaxStrId;
        objInFor.questionId = strQuestionId;
        const responseText2 = await ge_InspectProcess_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          //ge_InspectProcess_ReFreshCache(CourseId_Session.value);
          const strInfo: string = `克隆检查过程记录成功!`;
          intCount++;
        } else {
          const strInfo: string = `克隆检查过程记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo: string = `共克隆检查过程${intCount}条记录!`;
      //alert(strInfo);
      console.log(strInfo);
    } catch (e) {
      const strMsg: string = `复制检查过程记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 复制问题答案记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyAnswerRecord(strQuestionId: number) {
    try {
      const strOld_QuestionId = GetInputValueInDivObj(divVarSet.refDivLayout, 'hidKeyId');
      const responseText = await Answer_GetObjLstAsync(" questionId='" + strOld_QuestionId + "'");
      console.log('responseText=');
      console.log(responseText);
      let intCount: number = 0;
      const arrAnswerObjLst: Array<clsAnswerEN> = <Array<clsAnswerEN>>responseText;
      for (let objInFor of arrAnswerObjLst) {
        objInFor.questionId = strQuestionId;
        const responseText2 = await Answer_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          //Answer_ReFreshCache(CourseId_Session.value);
          const strInfo: string = `克隆问题答案记录成功!`;
          intCount++;
        } else {
          const strInfo: string = `克隆问题答案记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo: string = `共克隆问题答案${intCount}条记录!`;
      //alert(strInfo);
      console.log(strInfo);
    } catch (e) {
      const strMsg: string = `复制问题答案记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  //删除题目内容表数据
  public async DelContentAttachmentRecord(strQuestionId: number) {
    try {
      const strWhere = " tableNameKey='" + strQuestionId + "' and contentTypeId='0001'";
      const responseText = await tz_ContentAttachment_Deltz_ContentAttachmentsByCondAsync(strWhere);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        const strInfo: string = `删除题目内容记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        console.log(strInfo);
      } else {
        const strInfo: string = `删除题目内容记录为0!`;
        //显示信息框
        console.log(strInfo);
      }
    } catch (e) {
      const strMsg: string = `删除题目内容记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //删除题目选项
  public async DelQuestionOptionRecord(strQuestionId: number) {
    try {
      const strWhere = " questionId='" + strQuestionId + "'";
      const responseText = await QuestionOptions_DelQuestionOptionssByCondAsync(strWhere);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        QuestionOptions_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `删除题目选项记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        console.log(strInfo);
      } else {
        const strInfo: string = `删除题目选项记录为0!`;
        //显示信息框
        console.log(strInfo);
      }
    } catch (e) {
      const strMsg: string = `删除题目选项记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //删除题目检查过程
  public async DelInspectProcessRecord(strQuestionId: number) {
    try {
      const strWhere = " questionId='" + strQuestionId + "'";
      const responseText = await ge_InspectProcess_Delge_InspectProcesssByCondAsync(strWhere);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        const strInfo: string = `删除题目检查过程记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        console.log(strInfo);
      } else {
        const strInfo: string = `删除题目检查过程记录为0!`;
        //显示信息框
        console.log(strInfo);
      }
    } catch (e) {
      const strMsg: string = `删除题目检查过程记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //删除题目检查标准
  public async DelExaminationCriteriaRecord(strQuestionId: number) {
    try {
      const strWhere = " questionId='" + strQuestionId + "'";
      const responseText = await ge_ExaminationCriteria_Delge_ExaminationCriteriasByCondAsync(
        strWhere,
      );
      const returnInt: number = responseText;
      if (returnInt > 0) {
        ge_ExaminationCriteria_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `删除题目检查标准记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        console.log(strInfo);
      } else {
        const strInfo: string = `删除题目检查标准记录为0!`;
        //显示信息框
        console.log(strInfo);
      }
    } catch (e) {
      const strMsg: string = `删除题目检查标准记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //删除题目答案
  public async DelAnswerRecord(strQuestionId: number) {
    try {
      const strWhere = " questionId='" + strQuestionId + "'";
      const responseText = await Answer_DelAnswersByCondAsync(strWhere);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        Answer_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `删除题目答案记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        console.log(strInfo);
      } else {
        const strInfo: string = `删除题目答案记录为0!`;
        //显示信息框
        console.log(strInfo);
      }
    } catch (e) {
      const strMsg: string = `删除题目答案记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortUserAnswerResultBy(value: string) {
    $('#hidSortUserAnswerResultBy').val(value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortUserAnswerResultBy(): string {
    return GetInputValueInDivObj(divVarSet.refDivLayout, 'hidSortUserAnswerResultBy');
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'courseName|Ex':
        viewVarSet.sortQuestionnaireBy = `vcc_Course_Sim|CourseName ${sortDirection}|Questionnaire.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'chapterName|Ex':
        viewVarSet.sortQuestionnaireBy = `cc_CourseChapter|ChapterName ${sortDirection}|Questionnaire.CourseChapterId = cc_CourseChapter.CourseChapterId`;
        break;
      case 'questionTypeName|Ex':
        viewVarSet.sortQuestionnaireBy = `QuestionType|QuestionTypeName ${sortDirection}|Questionnaire.QuestionTypeId = QuestionType.QuestionTypeId`;
        break;
      case 'difficultyLevelName|Ex':
        viewVarSet.sortQuestionnaireBy = `ge_DifficultyLevel|DifficultyLevelName ${sortDirection}|Questionnaire.DifficultyLevelId = ge_DifficultyLevel.DifficultyLevelId`;
        break;
      case 'levelModeTypeName|Ex':
        viewVarSet.sortQuestionnaireBy = `ge_LevelModeType|LevelModeTypeName ${sortDirection}|Questionnaire.LevelModeTypeId = ge_LevelModeType.LevelModeTypeId`;
        break;
      default:
        viewVarSet.sortQuestionnaireBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
  }
}
