import $ from 'jquery';

import { ge_ExaminationCriteria_EditEx } from '../GameLearn/ge_ExaminationCriteria_EditEx';
import { ge_InspectProcess_EditEx } from '../GameLearn/ge_InspectProcess_EditEx';
import { clsge_InspectProcessEN } from '@/ts/L0Entity/GameLearn/clsge_InspectProcessEN';
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import {
  Questionnaire_AddNewRecordAsync,
  Questionnaire_DelQuestionnairesAsync,
  Questionnaire_DelRecordAsync,
  Questionnaire_GetObjLstByQuestionIdLstAsync,
  Questionnaire_GetRecCountByCondAsync,
  Questionnaire_GoBottomAsync,
  Questionnaire_GoTopAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';

import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';

import { QuestionnaireCRUD } from '@/viewsBase/QuestionaireEdit/QuestionnaireCRUD';

import { clsge_ControlAttributeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlAttributeEN';
import { clsge_ControlTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlTypeEN';
import { clsge_EventTypeEN } from '@/ts/L0Entity/GameLearn/clsge_EventTypeEN';
import { clsge_ExaminationTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationTypeEN';
import { clsge_OperationTypeEN } from '@/ts/L0Entity/GameLearn/clsge_OperationTypeEN';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { ge_ControlAttribute_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ControlAttributeWApi';
import { ge_ControlType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ControlTypeWApi';
import { ge_EventType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_EventTypeWApi';
import {
  ge_ExaminationCriteria_AddNewRecordAsync,
  ge_ExaminationCriteria_GetMaxStrIdAsync,
  ge_ExaminationCriteria_GetObjLstAsync,
} from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import { ge_ExaminationType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationTypeWApi';
import {
  ge_InspectProcess_AddNewRecordAsync,
  ge_InspectProcess_Delge_InspectProcesssByCondAsync,
  ge_InspectProcess_GetMaxStrIdAsync,
  ge_InspectProcess_GetObjLstAsync,
} from '@/ts/L3ForWApi/GameLearn/clsge_InspectProcessWApi';
import { ge_OperationType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_OperationTypeWApi';
import {
  cc_CourseKnowledges_BindDdl_CourseKnowledgeIdByCourseIdInDivCache,
  cc_CourseKnowledges_GetObjLstAsync,
} from 'share-stu-study-base-lib';
import {
  cc_KnowledgesExamLibRela_AddNewRecordAsync,
  cc_KnowledgesExamLibRela_Delcc_KnowledgesExamLibRelasByCondAsync,
  cc_KnowledgesExamLibRela_DelRecordAsync,
  cc_KnowledgesExamLibRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import {
  Answer_AddNewRecordAsync,
  Answer_DelAnswersByCondAsync,
  Answer_GetObjLstAsync,
  Answer_ReFreshCache,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import {
  QuestionOptions_AddNewRecordAsync,
  QuestionOptions_CheckProperty4Update,
  QuestionOptions_DelQuestionOptionssByCondAsync,
  QuestionOptions_GetMaxStrIdAsync,
  QuestionOptions_GetObjLstAsync,
  QuestionOptions_ReFreshCache,
  QuestionOptions_UpdateRecordAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import {
  tz_ContentAttachment_AddNewRecordAsync,
  tz_ContentAttachment_Deltz_ContentAttachmentsByCondAsync,
  tz_ContentAttachment_GetObjLstAsync,
} from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import {
  QuestionnaireEx_FuncMapByFldName,
  QuestionnaireEx_GetObjExLstByPagerAsync,
  QuestionnaireEx_ImportDataFromCsv,
  QuestionnaireEx_ReOrderByCource,
} from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionnaireExWApi';
import { QuestionTypeEx_BindDdl_QuestionTypeIdInDiv_CacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
import {
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObjN,
  GetSelectSelectedIndexInDivObj,
  GetSelectValueInDivObj,
  GetSpan_Empty,
  HideDivInDivObj,
  SetSelectValueByIdInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_TrueAndFalseInDivObj, confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Answer_EditEx } from './Answer_EditEx';
import Questionnaire_EditEx from './Questionnaire_EditEx';
import { QuestionOptionsCRUDEx } from './QuestionOptionsCRUDEx';
import { QuestionOptions_EditEx } from './QuestionOptions_EditEx';
import { stuExcelData } from '@/ts/FunClass/stuExcelData';
import { QuestionType_GetObjByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import {
  QuestionOptionsEx_GetSpanForOptionPreEmpty,
  QuestionOptionsEx_GetSpanForOptionTitle,
} from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
import {
  Button_GetDelete_i,
  Button_GetUpdate_i,
  Button_RevokeCorrect_i,
  Button_SetCorrect_i,
} from '@/ts/FunClass/clsButton';
import { useUserStore } from '@/store/modulesShare/user';
import { message } from '@/utils/myMessage';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usetz_ContentAttachmentStore } from '@/store/modulesShare/tz_ContentAttachment';
import { tz_ContentAttachmentEx_GeneLiHtmlByObj } from '@/ts/L3ForWApiEx/ResourceMan/clstz_ContentAttachmentExWApi';
import { usecc_KnowledgesExamLibRelaStore } from '@/store/modules/cc_KnowledgesExamLibRela';
import { AnswerEx_SetQuestionAnswer } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsAnswerExWApi';
import {
  viewVarSet,
  CourseId_Session,
  divVarSet,
  qryVarSet,
} from '@/views/QuestionaireEdit/QuestionnaireVueShare';
import { CombineQuestionnaireConditionEx } from '@/views/QuestionaireEdit/QuestionnaireExVueShare';

//declare function ShowOpenAttachment(strKeyId): void;
//declare function ShowAnswer(strKeyId): void;
declare const strCsv: string;
declare const window: any;

/* QuestionnaireCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class QuestionnaireCRUDEx extends QuestionnaireCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortQuestionnaireBy: string = "questionId";

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
  BindGv(strType: string) {
    //
    switch (strType) {
      case 'Questionnaire':
        this.btnReOrder_Click();
        break;
      case clsQuestionOptionsEN._CurrTabName:
        this.BindGv_Questionnaire4Func(divVarSet.refDivList);

        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
    //this.BindGv_Questionnaire4Func(divVarSet.refDivList);// BindGv_Questionnaire();
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'Questionnaire':
        // alert('该类没有绑定该函数：[this.BindGv_Questionnaire_Cache]！');
        this.BindGv_Questionnaire4Func(divVarSet.refDivList);

        break;
      case clsQuestionOptionsEN._CurrTabName:
        this.BindGv_Questionnaire4Func(divVarSet.refDivList);

        break;
      default:
        AccessBindGvDefault(strType);
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
        // await this.BindDdl4QueryRegion();
        await this.SetDdl_QuestionTypeIdInDiv_Export();

        viewVarSet.sortQuestionnaireBy = 'questionIndex Asc';

        //2、显示无条件的表内容在GridView中
        await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
        //const responseBindPaper = await this.Bind_ShowPager();
        HideDivInDivObj(this.thisDivLayout, 'divLoading');
      } else {
        window.top.location.href = '../Web/Login';
      }
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[questionTypeId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_QuestionTypeId() {
    const objQuestionType_Cond = new clsQuestionTypeEN(); //查询区域
  }

  /* 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    ShowDivInDivObj(this.thisDivLayout, 'divLoading');
    this.SetCurrPageIndex(1);
    await this.BindGv_Questionnaire4Func(divVarSet.refDivList); //绑定数据列表
    //const responseBindPaper = await this.Bind_ShowPager();//绑定分页
    HideDivInDivObj(this.thisDivLayout, 'divLoading');
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static async btn_Click(strCommandName: string, strKeyId: any) {
    let objPage: QuestionnaireCRUDEx;
    if (QuestionnaireCRUD.objPageCRUD == null) {
      QuestionnaireCRUD.objPageCRUD = new QuestionnaireCRUDEx();
      objPage = <QuestionnaireCRUDEx>QuestionnaireCRUD.objPageCRUD;
    } else {
      objPage = <QuestionnaireCRUDEx>QuestionnaireCRUD.objPageCRUD;
    }
    const objPageEdit: Questionnaire_EditEx = new Questionnaire_EditEx(
      'Questionnaire_EditEx',
      objPage,
    );
    let objAnswerPage_Edit: Answer_EditEx;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    const objData = strKeyId;
    let strKeyId_Curr;
    let strMsg = '';

    switch (strCommandName) {
      case 'ReOrderByCource':
        await objPage.btnReOrderByCource();
        break;
      case 'RefreshParent':
        await objPage.BindGv_Questionnaire4Func(objPage.thisDivList);
        break;
      case 'EditQuestionOptions':
        console.log('EditQuestionOptions strKeyId:', strKeyId);
        // objPage.btnQuestionOptions_Clcik();
        break;
      case 'ImportData': //查询记录
        objPage.btnImportData_Click();
        break;
      case 'CloseExcelDiv': //查询记录
        objPage.btnCloseExcelDiv_Click();
        break;
      case 'ImportDataFromExcel': //查询记录
        objPage.btnImportDataFromExcel_Click();
        break;
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
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'Update':
        //修改记录

        strKeyId_Curr = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_Curr) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(Number(strKeyId_Curr));
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        strKeyId_Curr = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_Curr) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecordInTab_Click(Number(strKeyId));
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        //if (arrKeyIds.length == 0) {
        //    alert("请选择需要复制的记录！");
        //    return;
        //}
        /*objPage.btnCopyRecord_Click();*/
        objPage.btnCopy_Click();
        break;

      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        //if (arrKeyIds.length == 0) {
        //    alert("请选择需要置顶的记录！");
        //    return;
        //}
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        //if (arrKeyIds.length == 0) {
        //    alert("请选择需要移底的记录！");
        //    return;
        //}
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        //if (arrKeyIds.length == 0) {
        //    alert("请选择需要上移的记录！");
        //    return;
        //}
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        //if (arrKeyIds.length == 0) {
        //    alert("请选择需要下移的记录！");
        //    return;
        //}
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      case 'AddKnowType':
        strKeyId_Curr = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_Curr) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        //增加操作题标准
        objPage.btnAddQuestionCriteria_Click(strKeyId_Curr);
        break;
      case 'AddQuestionAnswer':
        objPage = new QuestionnaireCRUDEx();
        objAnswerPage_Edit = new Answer_EditEx('Answer_EditEx', objPage);
        $('#hidQuestionId').val(strKeyId);
        objAnswerPage_Edit.questionId0 = objData.questionId;
        objAnswerPage_Edit.questionTypeId = objData.questionTypeId;

        objAnswerPage_Edit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'UpdateQuestionAnswer':
        objPage = new QuestionnaireCRUDEx();
        objAnswerPage_Edit = new Answer_EditEx('Answer_EditEx', objPage);
        objAnswerPage_Edit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'QuestionAttachment':
        // 添加附件
        //objPage.btnAddContentAttachment_Click(strKeyId);
        break;
      case 'SetCorrect':
        // 设置正确答案
        objPage.btnIsCorrectAnswer_Click(
          objData.questionOptionId,
          objData.questionTypeId,
          objData.questionId,
          '1',
        );
        break;

      case 'RevokeCorrect':
        // 撤销答案
        objPage.btnIsCorrectAnswer_Click(
          objData.questionOptionId,
          objData.questionTypeId,
          objData.questionId,
          '0',
        );
        break;
      case 'UpdateOptionRecord':
        objPage = new QuestionnaireCRUDEx();

        const objOptionsPage_Edit: QuestionOptions_EditEx = new QuestionOptions_EditEx(
          'QuestionOptions_EditEx',
          objPage,
        );
        objOptionsPage_Edit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'DelOptionRecord':
        const objPage_Options: QuestionOptionsCRUDEx = new QuestionOptionsCRUDEx();
        // 删除问题选项

        objPage_Options.btnDelRecordInTab_Click(strKeyId);
        objPage = new QuestionnaireCRUDEx();
        await objPage.BindGv_Questionnaire4Func(objPage.thisDivList);
        break;

      //case "CreateAnswer":            //添加答案记录
      //    const objPageEdit: Answer_EditEx = new Answer_EditEx('Answer_EditEx', objPage);
      //    objPageEdit.btnAddNewRecord_Click();
      //    break;
      case 'DelKnowledgesExamLibRelaRecord':
        // 删除知识点题目关系
        objPage.btnDelKnowledgesExamLibRelaRecordInTab_Click(strKeyId);
        break;

      case 'UpdateInspectRecord':
        objPage = new QuestionnaireCRUDEx();
        const objInspectPage_Edit: ge_InspectProcess_EditEx = new ge_InspectProcess_EditEx(
          'ge_InspectProcess_EditEx',
          objPage,
        );
        objInspectPage_Edit.btnUpdateRecord_Click(strKeyId);
        break;
      default:
        strMsg = '命令:' + strCommandName + '在函数(QuestionnaireCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 根据关键字列表删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
  */
  public async btnReOrderByCource() {
    try {
      const responseBool = await QuestionnaireEx_ReOrderByCource(CourseId_Session.value);
      if (responseBool == true) {
        const strInfo: string = `重序QuestionNo成功!`;
        //显示信息框
        alert(strInfo);
        await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
      } else {
        const strInfo: string = `重序QuestionNo不成功!`;
        //显示信息框
        alert(strInfo);
      }
    } catch (e) {
      const strMsg: string = `重序QuestionNo不成功! ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnImportData_Click() {
    const strThisFuncName = 'btnImportData_Click';
    //$("#divImportExcel").css("display", "block");
    //$("#divImportExcel").css("display", "none");
    const strQuestionTypeId = this.questionTypeId;
    if (IsNullOrEmpty(strQuestionTypeId) == true) {
      const strMsg = Format(
        '导入数据时需要提供题目类型.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objQuestionType = await QuestionType_GetObjByQuestionTypeIdCache(strQuestionTypeId);
    if (objQuestionType == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //teacherinfo.clsExamBatchExWApi.ImportDataFromCsv(csv, strUserId);
    console.log('btnImportData_Click');
    const strCsv1 = strCsv;
    if (IsNullOrEmpty(strCsv1)) {
      const strMsg: string = `Excel数据为空，请选择一个Excel文件！`;
      console.error('Error: ', strMsg);
      alert(strMsg);
      return;
    }
    const userStore = useUserStore();
    const strUserId = userStore.userId;

    try {
      const objExcelData: stuExcelData = {
        Csv: strCsv1,
        userId: strUserId,
        QuestionTypeName: objQuestionType.questionTypeName,
        bolRound: false,
      };
      const responseText = await QuestionnaireEx_ImportDataFromCsv(objExcelData);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        QuestionOptions_ReFreshCache(CourseId_Session.value);
        Answer_ReFreshCache(CourseId_Session.value);
        await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
        const strMsg: string = `已导入了:[${returnInt}]条记录.`;
        alert(strMsg);
      }
      return returnInt;
    } catch (e) {
      const strMsg: string = `导入Excel不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
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

  //设置添加知识点类型；
  public async btnAddQuestionCriteria_Click(strKeyId: string) {
    const objPage: QuestionnaireCRUDEx = new QuestionnaireCRUDEx();
    const objPageEdit: ge_ExaminationCriteria_EditEx = new ge_ExaminationCriteria_EditEx(
      'ge_ExaminationCriteria_EditEx',
      objPage,
    );

    objPageEdit.btnAddNewQuestionCriteria_Click(Number(strKeyId));
  }

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
*/
  public async BindGv_Questionnaire4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortQuestionnaireBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortQuestionnaireBy)为空，请检查！(In BindGv_Questionnaire_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strWhereCond = await CombineQuestionnaireConditionEx();
    console.log('strWhereCond:', strWhereCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx> = [];
    try {
      this.recCount = await Questionnaire_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortQuestionnaireBy,
        sortFun: () => {
          return 0;
        },
      };

      arrQuestionnaireExObjLst = await QuestionnaireEx_GetObjExLstByPagerAsync(objPagerPara);
      //arrQuestionnaireExObjLst = arrQuestionnaireObjLst.map(this.CopyToEx);
      for (const objInFor of arrQuestionnaireExObjLst) {
        await QuestionnaireEx_FuncMapByFldName(clsQuestionnaireENEx.con_QuestionTypeName, objInFor);
        await QuestionnaireEx_FuncMapByFldName(clsQuestionnaireENEx.con_ChapterName, objInFor);
        await QuestionnaireEx_FuncMapByFldName(clsQuestionnaireENEx.con_CourseName, objInFor);
        await QuestionnaireEx_FuncMapByFldName(
          clsQuestionnaireENEx.con_LevelModeTypeName,
          objInFor,
        );
        await QuestionnaireEx_FuncMapByFldName(
          clsQuestionnaireENEx.con_DifficultyLevelName,
          objInFor,
        );
      }
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    //if (arrQuestionnaireObjLst.length == 0) {
    //    const strKey: string = `${clsQuestionnaireEN._CurrTabName}_${QuestionnaireCRUDEx.strCourseIdCache}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    //alert(strMsg);
    //    return;
    //}
    try {
      //this.BindTab_Questionnaire4Func(divList, arrQuestionnaireExObjLst);
      const strHtml = await this.BindList_QuestionnaireEx(arrQuestionnaireExObjLst);
      // $('#divDataLst').html(strHtml);
      const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
      divDataLst.innerHTML = strHtml;

      //if (this.recCount > 10) {
      //    $("#divPager").show();

      //} else {
      //    $("#divPager").hide();
      //}
      this.SetEventForQuestionnaire();
      await this.Bind_ShowPager(divVarSet.refDivList);

      console.log('完成BindGv_Questionnaire4Func!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public SetEventForQuestionnaire() {
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnAddNewRecordWithMaxId');
      for (const btnAddNewRecordWithMaxId of arrLiLst) {
        if (btnAddNewRecordWithMaxId != null) {
          const strKeyId = btnAddNewRecordWithMaxId.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function () {
            btnAddNewRecordWithMaxId.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('AddNewRecordWithMaxId', '');
            };
          })();
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnUpdateRecord');
      for (const btnUpdateRecord of arrLiLst) {
        if (btnUpdateRecord != null) {
          const strKeyId = btnUpdateRecord.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function () {
            btnUpdateRecord.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('UpdateRecord', strKeyId);
            };
          })();
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnDelRecord');
      for (const btnDelRecord of arrLiLst) {
        if (btnDelRecord != null) {
          const strKeyId = btnDelRecord.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function () {
            btnDelRecord.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('DelRecord', strKeyId);
            };
          })();
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnClone');
      for (const btnClone of arrLiLst) {
        if (btnClone != null) {
          const strKeyId = btnClone.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function () {
            btnClone.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('Clone', strKeyId);
            };
          })();
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnShowOpenAttachment');
      for (const btnShowOpenAttachment of arrLiLst) {
        if (btnShowOpenAttachment != null) {
          const strKeyId = btnShowOpenAttachment.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function () {
            btnShowOpenAttachment.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('ShowOpenAttachment', strKeyId);
            };
          })();
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnReOrderByCource');
      for (const btnReOrderByCource of arrLiLst) {
        if (btnReOrderByCource != null) {
          const strKeyId = btnReOrderByCource.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function () {
            btnReOrderByCource.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('ReOrderByCource', strKeyId);
            };
          })();
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnInspectProcess');
      for (const btnInspectProcess of arrLiLst) {
        if (btnInspectProcess != null) {
          const strKeyId = btnInspectProcess.getAttribute('keyId');
          if (strKeyId == null) continue;

          (function () {
            btnInspectProcess.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('InspectProcess', strKeyId);
            };
          })();
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnTestQuestionName');
      for (const btnTestQuestionName of arrLiLst) {
        if (btnTestQuestionName != null) {
          const strKeyId = btnTestQuestionName.getAttribute('keyId');
          if (strKeyId == null) continue;

          (function () {
            btnTestQuestionName.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('TestQuestionName', strKeyId);
            };
          })();
        }
      }
    }

    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnUpdateInspectRecord');
      for (const btnUpdateInspectRecord of arrLiLst) {
        if (btnUpdateInspectRecord != null) {
          const strKeyId = btnUpdateInspectRecord.getAttribute('keyId');
          if (strKeyId == null) continue;

          (function () {
            btnUpdateInspectRecord.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('UpdateInspectRecord', strKeyId);
            };
          })();
        }
      }
    }

    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnGoTop');
      for (const btnGoTop of arrLiLst) {
        if (btnGoTop != null) {
          const strKeyId = btnGoTop.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            questionId: arr[0],
            questionIndex: arr[1],
          };

          (function (objData: any) {
            btnGoTop.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('GoTop', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnUpMove');
      for (const btnUpMove of arrLiLst) {
        if (btnUpMove != null) {
          const strKeyId = btnUpMove.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            questionId: arr[0],
            questionIndex: arr[1],
          };

          (function (objData: any) {
            btnUpMove.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('UpMove', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnDownMove');
      for (const btnDownMove of arrLiLst) {
        if (btnDownMove != null) {
          const strKeyId = btnDownMove.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            questionId: arr[0],
            questionIndex: arr[1],
          };

          (function (objData: any) {
            btnDownMove.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('DownMove', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnGoBottum');
      for (const btnGoBottum of arrLiLst) {
        if (btnGoBottum != null) {
          const strKeyId = btnGoBottum.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            questionId: arr[0],
            questionIndex: arr[1],
          };

          (function (objData: any) {
            btnGoBottum.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('GoBottum', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnKnowledgesExamLibRela');
      for (const btnKnowledgesExamLibRela of arrLiLst) {
        if (btnKnowledgesExamLibRela != null) {
          const strKeyId = btnKnowledgesExamLibRela.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            questionId: Number(arr[0]),
            courseChapterId: arr[1],
          };

          (function (objData: any) {
            btnKnowledgesExamLibRela.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('KnowledgesExamLibRela', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnUpdateQuestionAnswer');
      for (const btnUpdateQuestionAnswer of arrLiLst) {
        if (btnUpdateQuestionAnswer != null) {
          const strKeyId = btnUpdateQuestionAnswer.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            answerId: arr[0],
            questionTypeId: arr[1],
          };

          (function (objData: any) {
            btnUpdateQuestionAnswer.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('UpdateQuestionAnswer', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnUpdateOptionRecord');
      for (const btnUpdateOptionRecord of arrLiLst) {
        if (btnUpdateOptionRecord != null) {
          const strKeyId = btnUpdateOptionRecord.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            questionOptionId: arr[0],
            questionTypeId: arr[1],
          };

          (function (objData: any) {
            btnUpdateOptionRecord.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('UpdateOptionRecord', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnRevokeCorrect');
      for (const btnRevokeCorrect of arrLiLst) {
        if (btnRevokeCorrect != null) {
          const strKeyId = btnRevokeCorrect.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 3) continue;
          const objData = {
            questionOptionId: arr[0],
            questionTypeId: arr[1],
            questionId: arr[2],
          };

          (function (objData: any) {
            btnRevokeCorrect.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('RevokeCorrect', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnSetCorrect');
      for (const btnSetCorrect of arrLiLst) {
        if (btnSetCorrect != null) {
          const strKeyId = btnSetCorrect.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 3) continue;
          const objData = {
            questionOptionId: arr[0],
            questionTypeId: arr[1],
            questionId: arr[2],
          };

          (function (objData: any) {
            btnSetCorrect.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('SetCorrect', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnAddQuestionAnswer');
      for (const btnAddQuestionAnswer of arrLiLst) {
        if (btnAddQuestionAnswer != null) {
          const strKeyId = btnAddQuestionAnswer.getAttribute('keyId');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            questionId: arr[0],
            questionTypeId: arr[1],
          };

          (function (objData: any) {
            btnAddQuestionAnswer.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('AddQuestionAnswer', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnShowAnswer');
      for (const btnShowAnswer of arrLiLst) {
        if (btnShowAnswer != null) {
          const strKeyId = btnShowAnswer.getAttribute('keyId');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            questionId: arr[0],
            questionTypeId: arr[1],
          };

          (function (objData: any) {
            btnShowAnswer.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('ShowAnswer', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrLiLst = GetButtonObjLstInDivObjN(
        this.thisDivLayout,
        'btnDelKnowledgesExamLibRelaRecord',
      );
      for (const btnDelKnowledgesExamLibRelaRecord of arrLiLst) {
        if (btnDelKnowledgesExamLibRelaRecord != null) {
          const strKeyId = btnDelKnowledgesExamLibRelaRecord.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;

          (function (strKeyId: string) {
            btnDelKnowledgesExamLibRelaRecord.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('DelKnowledgesExamLibRelaRecord', strKeyId);
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnQuestionOptions');
      for (const btnQuestionOptions of arrLiLst) {
        if (btnQuestionOptions != null) {
          const strKeyId = btnQuestionOptions.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;

          (function (strKeyId: string) {
            btnQuestionOptions.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('EditQuestionOptions', Number(strKeyId));
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrLiLst = GetButtonObjLstInDivObjN(this.thisDivLayout, 'btnDelOptionRecord');
      for (const btnDelOptionRecord of arrLiLst) {
        if (btnDelOptionRecord != null) {
          const strKeyId = btnDelOptionRecord.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;

          (function (strKeyId: string) {
            btnDelOptionRecord.onclick = function () {
              QuestionnaireCRUDEx.vuebtn_Click('DelOptionRecord', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  public async Bind_ShowPager(divContainer: HTMLDivElement) {
    //if (intPaperNum != intCurrPageIndex) {

    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
    clsPubSessionStorage.PaperNum = GetCurrPageIndex(this.objPager.currPageIndex).toString();

    //}
  }

  private async BindList_QuestionnaireEx(
    arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx>,
  ): Promise<string> {
    const vQxUsersSimStore = usevQxUsersSimStore();
    const tz_ContentAttachmentStore = usetz_ContentAttachmentStore();
    const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;

    const strCourseId = CourseId_Session.value;

    //换行符
    //const strBr = '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

    //获取问题选项
    const strWhereQuestionOptions =
      "1=1 and courseId='" + strCourseId + "' order by optionIndex Asc ";
    let arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];
    let arrQuestionOptionsObjLst2: Array<clsQuestionOptionsEN> = [];

    arrQuestionOptionsObjLst2 = await QuestionOptions_GetObjLstAsync(strWhereQuestionOptions);

    //检查过程
    const strWhereInspectProcess = "1=1 and courseId='" + strCourseId + "' order by orderNum Asc ";
    let arrge_InspectProcessObjLst: Array<clsge_InspectProcessEN> = [];

    const arrge_InspectProcessObjLst2 = await ge_InspectProcess_GetObjLstAsync(
      strWhereInspectProcess,
    );

    //正确答案
    const strWhereAnswer = "1=1 and courseId='" + strCourseId + "' order by answerIndex Asc ";
    let arrAnswerObjLst: Array<clsAnswerEN> = [];

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
    // o1nclick=btn_Click("AddNewRecordWithMaxId")
    strhtml +=
      '<button id="btnAddNewRecordWithMaxId" title="添加题目0" class="layui-btn layui-btn-radius" keyId="AddNewRecordWithMaxId" > <i class="layui-icon" >&#xe608;</i>添加题目</button>';
    // o1nclick=btn_Click("ReOrder")
    strhtml += `<button id="btnReOrderByCource" keyId="${CourseId_Session.value}" title="重序" class="layui-btn layui-btn-danger layui-btn-radius" > <i class="layui-icon" >&#xe9aa;</i>重序</button>`;
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
      const strLevelModeTypeName = arrQuestionnaireExObjLst[i].levelModeTypeName; //题目操作模式

      const strCourseChapterId = arrQuestionnaireExObjLst[i].courseChapterId; //课程章节Id

      //strhtml += '</li>';
      strhtml +=
        '<li><div style="float:left;font-weight:700;font-size:16px;"><span class="rowtit color1">' +
        intQuestionIndex +
        '.[' +
        strQuestionTypeName;
      if (strQuestionTypeId == '01') {
        if (arrQuestionnaireExObjLst[i].isRandom == true) {
          strhtml += '(随机)';
        }
      }
      strhtml +=
        ']：</span><span class="abstract-text">' +
        strQuestionName +
        '</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(' +
        strDifficultyLevelName +
        ')</span>&nbsp;&nbsp;<span style="color:#436EEE;">(操作模式:' +
        strLevelModeTypeName +
        ')</span><span style="color:#17a2b8;">(题目Id:' +
        strQuestionId +
        ')</span></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

      strhtml += '<div style="float:right; margin-right:20px;">';
      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[题目操作]：</span>';
      //修改
      // o1nclick=btn_Click("UpdateRecord","' +strQuestionId         +        '"
      strhtml += `&nbsp;&nbsp;<button id="btnUpdateRecord" title="修改" class="layui-btn layui-btn layui-btn-xs" keyId="${strQuestionId}" )> <i class="layui-icon" >&#xe642;</i>修改</button>`;
      //删除
      // o1nclick=btn_Click("DelRecord","' +        strQuestionId +        '"
      strhtml += `&nbsp;&nbsp;<button id="btnDelRecord" title="删除" class="layui-btn layui-btn-danger layui-btn-xs" keyId="${strQuestionId}" )> <i class="layui-icon" >&#xe640;</i>删除</button>`;
      //克隆
      // o1nclick=btn_Click("Clone","' +        strQuestionId +        '"
      strhtml += `&nbsp;&nbsp;<button id="btnClone" title="克隆" class="layui-btn layui-btn layui-btn-xs" keyId="${strQuestionId}" )> <i class="layui-icon" >&#xe630;</i>克隆</button>`;
      //移顶
      // o1nclick=btn_Click("GoTop","' +        strQuestionId +        '",' +        intQuestionIndex +        '
      strhtml += `&nbsp;&nbsp;<button id="btnGoTop" title="移顶" class="layui-btn layui-btn-warm layui-btn-xs" keyId="${strQuestionId}|${intQuestionIndex}")><i class="layui-icon">&#xe604;</i></button>`;
      //上移
      // o1nclick=btn_Click("UpMove","' +        strQuestionId +        '",' +        intQuestionIndex +        '
      strhtml += `<button id="btnUpMove" title="上移" class="layui-btn layui-btn-warm layui-btn-xs" keyId="${strQuestionId}|${intQuestionIndex}")><i class="iconfont">&#xe6a5;</i></button>`;
      //下移
      // o1nclick=btn_Click("DownMove","' +        strQuestionId +        '",' +        intQuestionIndex +        '
      strhtml += `<button id="btnDownMove" title="下移" class="layui-btn layui-btn-warm layui-btn-xs" keyId="${strQuestionId}|${intQuestionIndex}")><i class="iconfont">&#xe6a6;</i></button>`;
      //移底
      // o1nclick=btn_Click("GoBottum","' +        strQuestionId +        '",' +        intQuestionIndex +        '
      strhtml += `<button id="btnGoBottum" title="移底" class="layui-btn layui-btn-warm layui-btn-xs" keyId="${strQuestionId}|${intQuestionIndex}" )><i class="layui-icon">&#xe625;</i></button>`;

      strhtml += '</div></li>';

      //附件
      // o1nclick=btnShowOpenAttachment_Click("' +      strQuestionId +      '"
      strhtml += `<li><span class="rowtit color3">[题目内容]：</span>&nbsp;&nbsp;<button id="btnShowOpenAttachment" keyId="${strQuestionId}" title="维护题目内容" class="layui-btn layui-btn-normal layui-btn-xs" )> <i class="layui-icon" >&#xe608;</i>维护题目内容</button></li>`;
      const arrtz_ContentAttachment = await tz_ContentAttachmentStore.getObjENLst(
        '0001',
        strQuestionId.toString(),
      );
      if (arrtz_ContentAttachment != null) {
        for (let y = 0; y < arrtz_ContentAttachment.length; y++) {
          const strHtml_Li = tz_ContentAttachmentEx_GeneLiHtmlByObj(
            arrtz_ContentAttachment[y],
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
        // o1nclick=btnQuestionOptions_Click("' +          strQuestionId +          '"
        strhtml += `&nbsp;&nbsp;<button id="btnQuestionOptions" keyId="${strQuestionId}" title="维护答案选项" class="layui-btn layui-btn-normal layui-btn-xs" )> <i class="layui-icon" >&#xe608;</i>维护答案选项</button>`;
        strhtml += '</li>';
      }
      //选项
      arrQuestionOptionsObjLst = arrQuestionOptionsObjLst2.filter(
        (x) => x.questionId == strQuestionId,
      );
      if (arrQuestionOptionsObjLst.length > 0) {
        let intIndex = 0;
        for (let y = 0; y < arrQuestionOptionsObjLst.length; y++) {
          const objQuestionOptions = arrQuestionOptionsObjLst[y];
          const strQuestionOptionId = objQuestionOptions.questionOptionId;
          const objLi = document.createElement('li');
          const txtOptionPreEmpty = QuestionOptionsEx_GetSpanForOptionPreEmpty();
          const spnOptionTitle = QuestionOptionsEx_GetSpanForOptionTitle(intIndex++);

          //strhtml += '<span class="rowtit color3">[' + objQuestionOptions.questionOptionId + ']：</span>';

          const spnOptionName = <HTMLSpanElement>document.createElement('span');

          spnOptionName.innerText = objQuestionOptions.optionName;
          let btnSetCorrect;
          let strOnclick;
          if (objQuestionOptions.isCorrect == true) {
            spnOptionName.className = 'abstract-text color3';
            strOnclick = Format(
              'btn_Click("RevokeCorrect", "{0}", "{1}", "{2}")',
              strQuestionOptionId,
              strQuestionTypeId,
              strQuestionId,
            );

            btnSetCorrect = Button_RevokeCorrect_i(strOnclick);
            btnSetCorrect.id = 'btnRevokeCorrect';
            btnSetCorrect.setAttribute(
              'keyId',
              `${strQuestionOptionId}|${strQuestionTypeId}|${strQuestionId}`,
            );
          } else {
            spnOptionName.className = 'abstract-text';
            strOnclick = Format(
              'btn_Click("SetCorrect", "{0}", "{1}", "{2}")',
              strQuestionOptionId,
              strQuestionTypeId,
              strQuestionId,
            );
            btnSetCorrect = Button_SetCorrect_i(strOnclick);
            btnSetCorrect.id = 'btnSetCorrect';
            btnSetCorrect.setAttribute(
              'keyId',
              `${strQuestionOptionId}|${strQuestionTypeId}|${strQuestionId}`,
            );
          }
          strOnclick = Format(
            ' btn_Click("UpdateOptionRecord", "{0}", "{1}")',
            strQuestionOptionId,
            strQuestionTypeId,
          );
          const btnUpdate_i = Button_GetUpdate_i(strOnclick);
          btnUpdate_i.id = 'btnUpdateOptionRecord';
          // const strKeyId = {
          //   questionOptionId: strQuestionOptionId,
          //   questionTypeId: strQuestionTypeId,
          // };
          btnUpdate_i.setAttribute('keyId', `${strQuestionOptionId}|${strQuestionTypeId}`);
          strOnclick = Format(' btn_Click("DelOptionRecord", "{0}")', strQuestionOptionId);
          const btnDelete_i = Button_GetDelete_i(strOnclick);
          btnDelete_i.id = 'btnDelOptionRecord';
          btnDelete_i.setAttribute('keyId', strQuestionOptionId);
          btnSetCorrect.style.marginLeft = '5px';
          btnUpdate_i.style.marginLeft = '5px';
          btnDelete_i.style.marginLeft = '5px';
          objLi.appendChild(txtOptionPreEmpty);
          objLi.appendChild(spnOptionTitle);
          objLi.appendChild(spnOptionName);
          objLi.appendChild(btnSetCorrect);
          objLi.appendChild(btnUpdate_i);
          objLi.appendChild(btnDelete_i);
          strhtml += objLi.outerHTML;
          //if (objQuestionOptions.isCorrect == true) {
          //    strhtml += '<span class="abstract-text color3">' + objQuestionOptions.optionName + '</span>';
          //    //撤销正确选项
          //    strhtml += '&nbsp;&nbsp;<button title="撤销正确选项" class="layui-btn layui-btn-normal layui-btn-xs" o1nclick=btn_Click("RevokeCorrect","' + strQuestionOptionId + '","' + strQuestionTypeId + '","' + strQuestionId + '")> <i class="layui-icon" >&#xe605;</i></button>';
          //    //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">正确答案</span>';
          //} else {
          //    strhtml += '<span class="abstract-text">' + objQuestionOptions.optionName + '</span>';
          //    //设置正确选项
          //    strhtml += '&nbsp;&nbsp;<button title="设置正确选项" class="layui-btn layui-btn layui-btn-xs" o1nclick=btn_Click("SetCorrect","' + strQuestionOptionId + '","' + strQuestionTypeId + '","' + strQuestionId + '")> <i class="layui-icon" >&#x1006;</i></button>';
          //}
          //strhtml += '&nbsp;&nbsp;<button title="修改选项" class="layui-btn layui-btn layui-btn-xs" o1nclick=btn_Click("UpdateOptionRecord","' + strQuestionOptionId + '","' + strQuestionTypeId + '")> <i class="layui-icon" >&#xe642;</i></button>';
          //strhtml += '&nbsp;&nbsp;<button title="删除选项" class="layui-btn layui-btn-warm layui-btn-xs" o1nclick=btn_Click("DelOptionRecord","' + strQuestionOptionId + '")> <i class="layui-icon" >&#xe640;</i></button>';

          //strhtml += '</li>';

          const arrtz_ContentAttachment = await tz_ContentAttachmentStore.getObjENLst(
            '0006',
            strQuestionOptionId,
          );
          if (arrtz_ContentAttachment != null) {
            for (let y = 0; y < arrtz_ContentAttachment.length; y++) {
              const strHtml_Li = tz_ContentAttachmentEx_GeneLiHtmlByObj(
                arrtz_ContentAttachment[y],
                strAddressAndPort,
              );
              strhtml += strHtml_Li;
            }
          }
        }
      }

      //检查过程（运算题）
      arrge_InspectProcessObjLst = arrge_InspectProcessObjLst2.filter(
        (x) => x.questionId == strQuestionId,
      );
      //答案数据
      //const objAnswer = arrAnswerObjLst2.find(x => x.questionId == strQuestionId);
      arrAnswerObjLst = arrAnswerObjLst2.filter((x) => x.questionId == strQuestionId);
      if (strQuestionTypeId == '09') {
        //操作题
        strhtml += '<li><span class="rowtit color3">[检查过程]：</span>';
        // o1nclick=btnInspectProcess_Click("' +          strQuestionId +          '"
        strhtml += `&nbsp;&nbsp;<button id="btnInspectProcess" keyId="${strQuestionId}" title="维护代码检查过程" class="layui-btn layui-btn-normal layui-btn-xs" )> <i class="layui-icon">&#xe608;</i>维护代码检查过程</button>`;
        if (arrge_InspectProcessObjLst.length > 0 && arrAnswerObjLst.length > 0 != null) {
          // o1nclick=btnTestQuestionName_Click("' +            strQuestionId +            '"
          strhtml += `&nbsp;&nbsp;<button id="btnTestQuestionName" keyId="${strQuestionId}" title="测试题目是否完善" class="layui-btn layui-btn layui-btn-xs" )> <i class="layui-icon">&#xe64e;</i>测试题目是否完善</button>`;
          if (arrQuestionnaireExObjLst[i].isTest == true) {
            strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">已测试通过</span>';
          } else {
            strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未测试通过</span>';
          }
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
          '<tr class="row-height"><td class="text-left">序号</td><td class="text-left">操作类型</td><td class="text-left">控件Id</td><td class="text-left">控件名称</td><td class="text-left">控件属性</td><td class="text-left">控件值</td><td class="text-left">事件</td><td class="text-left">函数</td><td class="text-left">控件显示状态</td><td class="text-left">检查描述</td><td class="text-left">修改人</td><td class="text-left">修改日期</td><td>操作</td></tr>';
        for (let y = 0; y < arrge_InspectProcessObjLst.length; y++) {
          const objge_InspectProcess = arrge_InspectProcessObjLst[y];
          const intOrderNum = objge_InspectProcess.orderNum;

          const objOperationType = arrge_OperationType.find(
            (x) => x.operationTypeId == objge_InspectProcess.operationTypeId,
          );
          let strOperationTypeName = '';
          if (objOperationType != null) {
            strOperationTypeName = objOperationType.operationTypeName;
          }

          const objControlType = arrge_ControlType.find(
            (x) => x.controlTypeId == objge_InspectProcess.controlTypeId,
          );
          let strControlTypeName = '';
          if (objControlType != null) {
            strControlTypeName = objControlType.controlTypeName;
          }

          const objEventType = arrge_EventType.find(
            (x) => x.eventTypeId == objge_InspectProcess.eventTypeId,
          );
          let strEventTypeName = '';
          if (objEventType != null) {
            strEventTypeName = objEventType.eventTypeName;
          }

          const objExaminationType = arrge_ExaminationType.find(
            (x) => x.examinationTypeId == objge_InspectProcess.examinationTypeId,
          );
          let strTypeDescribe = '';
          if (objExaminationType != null) {
            strTypeDescribe = objExaminationType.typeDescribe;
          }

          //属性
          const objControlAttribute = arrge_ControlAttribute.find(
            (x) => x.attributeId == objge_InspectProcess.attributeId,
          );
          let strControlAttributeName = '';
          if (objControlAttribute != null) {
            strControlAttributeName = objControlAttribute.controlAttributeName;
          }

          const strControlId = objge_InspectProcess.controlId;
          const strControlValue = objge_InspectProcess.controlValue;

          const strFunctionName = objge_InspectProcess.functionName;

          const strCheckMemo = objge_InspectProcess.checkMemo;

          const strUserName = await vQxUsersSimStore.getUserName(objge_InspectProcess.updUser);

          const strUpdDate = objge_InspectProcess.updDate;

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
          // o1nclick=btn_Click("UpdateInspectRecord","' +            objge_InspectProcess.inspectId +            '"
          strhtml += `<td class="text-left"><button id="btnUpdateInspectRecord" keyId="${objge_InspectProcess.inspectId}" title="修改检查过程" class="layui-btn layui-btn layui-btn-xs" )> <i class="layui-icon" >&#xe642;</i></button></td></tr>`;
        }
        strhtml += '</tbody></table></li>';
      }

      //答案
      if (strQuestionTypeId != '02' && strQuestionTypeId != '03' && strQuestionTypeId != '11') {
        strhtml += '<li><span class="rowtit color3">[标准答案]：</span>';

        if (strQuestionTypeId == '01') {
          //填空题
          if (arrAnswerObjLst.length > 0) {
            if (arrAnswerObjLst.length > 1) {
              for (let j = 0; j < arrAnswerObjLst.length; j++) {
                strhtml +=
                  arrAnswerObjLst[j].answerIndex + '、' + arrAnswerObjLst[j].answerFillInBlank;
                // o1nclick=btn_Click("UpdateQuestionAnswer","' +                  arrAnswerObjLst[j].answerId +                  '","' +                  strQuestionTypeId +                  '"
                const strKeyId = `${arrAnswerObjLst[j].answerId}|${strQuestionTypeId}`;
                strhtml += `<button id="btnUpdateQuestionAnswer" keyId="${strKeyId}" title="修改答案" class="layui-btn layui-btn layui-btn-xs" )> <i class="layui-icon" >&#xe642;</i></button>&nbsp;&nbsp;&nbsp;&nbsp;`;
              }
              //strhtml += '</li>';
            } else {
              strhtml += arrAnswerObjLst[0].answerFillInBlank;
              // o1nclick=btn_Click("UpdateQuestionAnswer","' +                arrAnswerObjLst[0].answerId +                '","' +                strQuestionTypeId +                '"
              const strKeyId = `${arrAnswerObjLst[0].answerId}|${strQuestionTypeId}`;
              strhtml += `<button id="btnUpdateQuestionAnswer" keyId="${strKeyId}" title="修改答案" class="layui-btn layui-btn layui-btn-xs" )> <i class="layui-icon" >&#xe642;</i></button>&nbsp;&nbsp;&nbsp;&nbsp;`;
            }
          }
        }
        // o1nclick=btn_Click("AddQuestionAnswer","' +        strQuestionId +        '","' +        strQuestionTypeId +        '"
        const strKeyId = `${strQuestionId}|${strQuestionTypeId}`;
        strhtml += `&nbsp;&nbsp;<button id="btnAddQuestionAnswer" keyId="${strKeyId}" title="添加答案" class="layui-btn layui-btn-normal layui-btn-xs" )> <i class="layui-icon">&#xe608;</i>添加答案</button>`;
        // o1nclick=btnShowAnswer_Click("' +          strQuestionId +          '","' +          strQuestionTypeId +          '"
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnShowAnswer" keyId="${strKeyId}" title="维护答案" class="layui-btn layui-btn-normal layui-btn-xs" )> <i class="layui-icon">&#xe642;</i>维护答案</button>`;
        strhtml += '</li>';
        if (arrAnswerObjLst.length > 0) {
          if (
            strQuestionTypeId == '05' ||
            strQuestionTypeId == '09' ||
            strQuestionTypeId == '10' ||
            strQuestionTypeId == '16'
          ) {
            //解答题.操作、简答、运算
            strhtml +=
              '<li><textarea id="txtCode" name = "txtCode" class="form-control" disabled="true" style = "width:100%; height:150px;" >' +
              arrAnswerObjLst[0].answerContent +
              '</textarea></li>';
          }
          //else {
          //strhtml += '&nbsp;&nbsp;<button title="维护答案" class="layui-btn layui-btn-normal layui-btn-xs" o1nclick=btnShowAnswer_Click("' + strQuestionId + '")> <i class="layui-icon">&#xe642;</i>维护答案</button>';

          //else if (strQuestionTypeId == "02")//单选题
          //{
          //    strhtml += arrAnswerObjLst[0].answerOptionId + '</li>';
          //}
          //else if (strQuestionTypeId == "03")//多选题
          //{
          //    strhtml += arrAnswerObjLst[0].answerMultiOptions + '</li>';
          //}
          //else if (strQuestionTypeId == "11")//判断题
          //{
          //    strhtml += arrAnswerObjLst[0].answerTrueOrFalse + '</li>';
          //}

          //    strhtml += arrAnswerObjLst[0].answerContent + '</li>';
          //}
          //}
        }
      }

      //strhtml += '<li><span class="rowtit color5">[资源操作]：</span>';

      //else if (strQuestionTypeId == "01" || strQuestionTypeId == "05" || strQuestionTypeId == "10" || strQuestionTypeId == "16")//填空题、解答题、操作题、简答题、
      //{

      //}

      //else if (strQuestionTypeId == "16")//运算题
      //{
      //    strhtml += '&nbsp;&nbsp;<button title="维护代码检查过程" class="layui-btn layui-btn-normal layui-btn-xs" o1nclick=btnInspectProcess_Click("' + strQuestionId + '")> <i class="layui-icon">&#xe608;</i>维护代码检查过程</button>';
      //}

      //else if (strQuestionTypeId == "09") {
      //    strhtml += '&nbsp;&nbsp;<button title="维护问题检查标准" class="layui-btn layui-btn-normal layui-btn-xs" o1nclick=btnExaminationCriteria_Click("' + strQuestionId + '")> <i class="layui-icon">&#xe608;</i>维护问题检查标准</button>';
      //}

      //strhtml += '</li>';

      strhtml += '<li><span class="rowtit color5">[相关知识点]：</span>';
      arrcc_KnowledgesExamLibRelaObjLst = arrcc_KnowledgesExamLibRelaObjLst2.filter(
        (x) => x.questionId == strQuestionId,
      );
      if (arrcc_KnowledgesExamLibRelaObjLst.length > 0) {
        for (let y = 0; y < arrcc_KnowledgesExamLibRelaObjLst.length; y++) {
          const objcc_KnowledgesExamLibRela = arrcc_KnowledgesExamLibRelaObjLst[y];
          const strKeyId = objcc_KnowledgesExamLibRela.mId;
          const strCourseKnowledgeId = objcc_KnowledgesExamLibRela.courseKnowledgeId;

          const objCourseKnowledges = arrcc_CourseKnowledges.find(
            (x) => x.courseKnowledgeId == strCourseKnowledgeId,
          );
          let strKnowledgeName = '';
          if (objCourseKnowledges != null) {
            strKnowledgeName = objCourseKnowledges.knowledgeName;
            const intOrderNum = y + 1;
            //strhtml += intOrderNum + '、' + strKnowledgeName + '；&nbsp;&nbsp;';
            const spnKnowledgeName = GetSpan_Empty('text-primary');
            if (objcc_KnowledgesExamLibRela.isMain == true) {
              spnKnowledgeName.className = 'text-warning';
            }
            spnKnowledgeName.innerHTML = intOrderNum + '、' + strKnowledgeName;
            strhtml += spnKnowledgeName.outerHTML;
            // o1nclick=btn_Click("DelKnowledgesExamLibRelaRecord","' +            strKeyId +            '"
            strhtml += `<button id="btnDelKnowledgesExamLibRelaRecord" keyId="${strKeyId}" title="删除关系" class="layui-btn layui-btn-danger layui-btn-xs" )> <i class="layui-icon" >&#xe640;</i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
          }
        }
      }
      // o1nclick=btnKnowledgesExamLibRela_Click("' +        strQuestionId +        '","' +        strCourseChapterId +        '"
      strhtml += `&nbsp;&nbsp;<button id="btnKnowledgesExamLibRela" keyId="${strQuestionId}|${strCourseChapterId}" title="添加知识点关系" class="layui-btn layui-btn-normal layui-btn-xs" )> <i class="layui-icon">&#xe608;</i>添加知识点关系</button>`;
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
  //        //    const Questionnaire_QuestionName = await questionnaireStore.getQuestionName(Questionnaire_QuestionId);
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
    const strCourseId: string = CourseId_Session.value;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        courseId: strCourseId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      console.log('已重序');
    } catch (e) {
      const strMsg: string = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    //message.success( "已重序");
    await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
  }

  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    if (GetInputValueInDivObjN(this.thisDivLayout, 'hidOrderNum') == 0) {
    }
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    const arrKeyIds = [this.questionId4Sort];
    if (this.questionId4Sort == '') {
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
      await Questionnaire_GoBottomAsync(objOrderByData);
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
    const strCourseId: string = CourseId_Session.value;
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
    if (GetInputValueInDivObjN(this.thisDivLayout, 'hidOrderNum') == 0) {
    }
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    const arrKeyIds = [this.questionId4Sort];
    if (this.questionId4Sort == '') {
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
    if (GetInputValueInDivObjN(this.thisDivLayout, 'hidOrderNum') == 0) {
    }
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    const arrKeyIds = [this.questionId4Sort];
    if (this.questionId4Sort == '') {
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
    if (GetInputValueInDivObjN(this.thisDivLayout, 'hidOrderNum') == 0) {
      await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strCourseId: string = CourseId_Session.value;
    const arrKeyIds = [this.questionId4Sort];
    if (this.questionId4Sort == '') {
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
      await Questionnaire_GoTopAsync(objOrderByData);
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
      //if (arrKeyIds.length == 0) {
      //    alert("请选择需要克隆的记录！");
      //    return "";
      //}

      const arrKeyIds = [this.questionId4Sort];
      if (this.questionId4Sort == '') {
        alert('请选择需要复制的记录！');
        return '';
      }
      await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `复制记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //是否标准答案
  public async btnIsCorrectAnswer_Click(
    strQuestionOptionId: string,
    strQuestionTypeId: string,
    strQuestionId: number,
    strIsAnswer: string,
  ) {
    //const strKeyId = GetFirstCheckedKeyIdInDiv("divList");
    //if (strKeyId == "") {
    //    alert("请选择需要推荐的记录！");
    //    return;
    //}
    const userStore = useUserStore();
    if (strQuestionTypeId == '02' || strQuestionTypeId == '11') {
      if (strIsAnswer == '1') {
        const strWhere = " questionId='" + strQuestionId + "' and isCorrect=1";
        let arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];
        arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstAsync(strWhere);
        if (arrQuestionOptionsObjLst.length > 0) {
          for (let i = 0; i < arrQuestionOptionsObjLst.length; i++) {
            const strQuestionOptionId0 = arrQuestionOptionsObjLst[i].questionOptionId;
            await this.UpdateIsAnswerRecordSave(strQuestionOptionId0, '0', CourseId_Session.value);
          }
        }

        await this.UpdateIsAnswerRecordSave(
          strQuestionOptionId,
          strIsAnswer,
          CourseId_Session.value,
        );
        AnswerEx_SetQuestionAnswer(
          strQuestionId,
          strQuestionOptionId,
          CourseId_Session.value,
          userStore.userId,
        );
      } else {
        message.info('当前选项必须有一个正确答案！');
      }
    } else {
      await this.UpdateIsAnswerRecordSave(strQuestionOptionId, strIsAnswer, CourseId_Session.value);
    }
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateIsAnswerRecordSave(
    strQuestionOptionId: string,
    strIsAnswer: string,
    strCourseId: string,
  ) {
    const objQuestionOptionsEN: clsQuestionOptionsEN = new clsQuestionOptionsEN();
    objQuestionOptionsEN.SetQuestionOptionId(strQuestionOptionId);
    objQuestionOptionsEN.SetCourseId(strCourseId);

    //this.PutDataToQuestionOptionsClass(objQuestionOptionsEN);
    if (strIsAnswer == '1') {
      objQuestionOptionsEN.SetIsCorrect(true);
    } else {
      objQuestionOptionsEN.SetIsCorrect(false);
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

          if (
            strQuestionTypeId == '02' ||
            strQuestionTypeId == '03' ||
            strQuestionTypeId == '11' ||
            strQuestionTypeId == '17'
          ) {
            //单选、多选、判断、连连看多选
          }
          //else if (strQuestionTypeId == "09") {
          //    const responseText3_3 = await this.CopyExaminationCriteriaRecord(strQuestionId);
          //}
          else if (strQuestionTypeId == '09' || strQuestionTypeId == '16') {
            //运算题
          }

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
      const strOld_QuestionId = this.questionId;
      const arrtz_ContentAttachmentObjLst = await tz_ContentAttachment_GetObjLstAsync(
        " tableNameKey='" + strOld_QuestionId + "' and contentTypeId='0001'",
      );

      let intCount: number = 0;

      for (let objInFor of arrtz_ContentAttachmentObjLst) {
        objInFor.tableNameKey = strQuestionId.toString();
        const responseText2 = await tz_ContentAttachment_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          //
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
      const strOld_QuestionId = this.questionId;
      const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstAsync(
        " questionId='" + strOld_QuestionId + "'",
      );

      let intCount: number = 0;

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
      const strOld_QuestionId = this.questionId;
      const arrge_ExaminationCriteriaObjLst = await ge_ExaminationCriteria_GetObjLstAsync(
        " questionId='" + strOld_QuestionId + "'",
      );

      let intCount: number = 0;

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
      const strOld_QuestionId = this.questionId;
      const arrge_InspectProcessObjLst = await ge_InspectProcess_GetObjLstAsync(
        " questionId='" + strOld_QuestionId + "'",
      );

      let intCount: number = 0;

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
      const strOld_QuestionId = this.questionId;
      const arrAnswerObjLst = await Answer_GetObjLstAsync(
        " questionId='" + strOld_QuestionId + "'",
      );

      let intCount: number = 0;

      for (let objInFor of arrAnswerObjLst) {
        objInFor.questionId = strQuestionId;
        const responseText2 = await Answer_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          //Answer_ReFreshCache(CourseId_Session.value);
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

  /* 复制问题答案记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
  */
  public async Copycc_KnowledgesExamLibRelaRecord(strQuestionId: number) {
    try {
      const strOld_QuestionId = this.questionId;
      const arrcc_KnowledgesExamLibRelaObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(
        " questionId='" + strOld_QuestionId + "'",
      );

      let intCount: number = 0;

      for (let objInFor of arrcc_KnowledgesExamLibRelaObjLst) {
        objInFor.questionId = strQuestionId;
        const responseText2 = await cc_KnowledgesExamLibRela_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool: boolean = !!responseText2;
        if (returnBool == true) {
          //Answer_ReFreshCache(CourseId_Session.value);
          intCount++;
        } else {
          const strInfo: string = `克隆知识点关系记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo: string = `共克隆知识点关系${intCount}条记录!`;
      //alert(strInfo);
      console.log(strInfo);
    } catch (e) {
      const strMsg: string = `复制知识点关系记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      //const responseText3_4 = await this.DelExaminationCriteriaRecord(strKeyId);//检查标准表

      await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 
  根据关键字删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
 */
  public async DelRecord(strQuestionId: number) {
    try {
      const responseText = await Questionnaire_DelRecordAsync(strQuestionId);
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
      console.log('完成DelRecord!');
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
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
  //public async DelExaminationCriteriaRecord(strQuestionId: number) {
  //    try {
  //        const strWhere = " questionId='" + strQuestionId + "'";
  //        const responseText = await ge_ExaminationCriteria_Delge_ExaminationCriteriasByCondAsync(strWhere);
  //        const returnInt: number = responseText;
  //        if (returnInt > 0) {
  //            ge_ExaminationCriteria_ReFreshCache(CourseId_Session.value);
  //            const strInfo: string = `删除题目检查标准记录成功,共删除${returnInt}条记录!`;
  //            //显示信息框
  //            console.log(strInfo);
  //        }
  //        else {
  //            const strInfo: string = `删除题目检查标准记录为0!`;
  //            //显示信息框
  //            console.log(strInfo);
  //        }

  //    }
  //    catch (e) {
  //        const strMsg: string = `删除题目检查标准记录不成功. ${e}.`;
  //        console.error(strMsg);
  //        alert(strMsg);
  //    }
  //}

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

  //删除知识点关系
  public async DelKnowledgesRelaRecord(strQuestionId: number) {
    try {
      const strWhere = " questionId='" + strQuestionId + "'";
      const responseText = await cc_KnowledgesExamLibRela_Delcc_KnowledgesExamLibRelasByCondAsync(
        strWhere,
      );
      //const responseText = await cc_KnowledgesExamLibRela_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //cc_KnowledgesExamLibRela_ReFreshCache();
        const strInfo: string = `删除知识点关系记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        console.log(strInfo);
      } else {
        const strInfo: string = `删除知识点关系记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除知识点关系记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelKnowledgesExamLibRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert('请选择需要删除的记录！');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await cc_KnowledgesExamLibRela_DelRecordAsync(lngKeyId);
      await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除知识点关系记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelKnowledgesExamLibRelaRecord(lngmId: number) {
    try {
      const responseText = await cc_KnowledgesExamLibRela_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //cc_KnowledgesExamLibRela_ReFreshCache();
        //const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
        message.success('删除知识点关系成功！');
      } else {
        const strInfo: string = `删除知识点关系记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除知识点关系记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async btnCloseExcelDiv_Click() {
    //$("#divImportExcel").css("display", "block");
    $('#divImportExcel').css('display', 'none');
  }
  public async btnImportDataFromExcel_Click() {
    $('#divImportExcel').css('display', 'block');
    //$("#divImportExcel").css("display", "none");
  }

  public async SetDdl_QuestionTypeIdInDiv_Export() {
    await QuestionTypeEx_BindDdl_QuestionTypeIdInDiv_CacheEx(
      this.thisDivLayout,
      'ddlQuestionTypeId',
    ); //查询区域
  }
  /**
   * 题目类型Id (Used In CombineCondition())
   **/
  public get questionTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.thisDivLayout, 'ddlQuestionTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 题目类型Id (Used In CombineCondition())
   **/
  public set questionTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.thisDivLayout, 'ddlQuestionTypeId', value);
  }

  /*
   * 存放题目ID
   */
  public get questionId() {
    const strQuestionId = QuestionnaireCRUDEx.GetPropValue('questionId');
    return strQuestionId;
  }
  public get questionId4Sort() {
    const strQuestionId = QuestionnaireCRUDEx.GetPropValue('questionId4Sort');
    return strQuestionId;
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineQuestionnaireConditionObj(): Promise<clsQuestionnaireEN> {
    const cc_KnowledgesExamLibRelaStore = usecc_KnowledgesExamLibRelaStore();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objQuestionnaireCond = new clsQuestionnaireEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.questionName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQuestionnaireEN.con_QuestionName,
          qryVarSet.questionName_q,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_QuestionName,
          qryVarSet.questionName_q,
          'like',
        );
      }
      if (qryVarSet.courseChapterId_q != '' && qryVarSet.courseChapterId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_CourseChapterId,
          qryVarSet.courseChapterId_q,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_CourseChapterId,
          qryVarSet.courseChapterId_q,
          '=',
        );
      }
      if (qryVarSet.questionTypeId_q != '' && qryVarSet.questionTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_QuestionTypeId,
          qryVarSet.questionTypeId_q,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_QuestionTypeId,
          qryVarSet.questionTypeId_q,
          '=',
        );
      }
      if (qryVarSet.difficultyLevelId_q != '' && qryVarSet.difficultyLevelId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_DifficultyLevelId,
          qryVarSet.difficultyLevelId_q,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_DifficultyLevelId,
          qryVarSet.difficultyLevelId_q,
          '=',
        );
      }
      if (qryVarSet.levelModeTypeId_q != '' && qryVarSet.levelModeTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_LevelModeTypeId,
          qryVarSet.levelModeTypeId_q,
        );
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_LevelModeTypeId,
          qryVarSet.levelModeTypeId_q,
          '=',
        );
      }

      if (this.courseKnowledgeId_q != '' && this.courseKnowledgeId_q != '0') {
        strWhereCond += ` And ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} in (select ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} from ${clscc_KnowledgesExamLibRelaEN._CurrTabName} where ${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId}= '${this.courseKnowledgeId_q}')`;
        const arrQuestionIds =
          await cc_KnowledgesExamLibRelaStore.getQuestionIdsByCourseKnowledgeId(
            this.courseKnowledgeId_q,
          );
        const strQuestionIds = arrQuestionIds.join(',');
        objQuestionnaireCond.SetCondFldValue(
          clsQuestionnaireEN.con_QuestionId,
          strQuestionIds,
          'in',
        );
      }
      if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsTest_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
        objQuestionnaireCond.SetCondFldValue(clsQuestionnaireEN.con_IsTest, true, '=');
      } else if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsTest_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsTest);
        objQuestionnaireCond.SetCondFldValue(clsQuestionnaireEN.con_IsTest, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineQuestionnaireConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objQuestionnaireCond.whereCond = strWhereCond;
    return objQuestionnaireCond;
  }
  public async BindDdl4QueryRegionBak() {
    const CourseIdCache = CourseId_Session.value; //缓存分类变量;//在switch中未找到相关类型: tsCache(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)

    // await this.SetDdl_CourseChapterIdInDiv(CourseIdCache); //查询区域

    // await this.SetDdl_QuestionTypeIdInDiv(); //查询区域

    // await this.SetDdl_DifficultyLevelIdInDiv(); //查询区域

    // await this.SetDdl_LevelModeTypeIdInDiv(); //查询区域
    await this.SetDdl_CourseKnowledgeIdInDiv(); //查询区域

    // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsTest_q');
  }
  public async SetDdl_CourseKnowledgeIdInDiv() {
    await cc_CourseKnowledges_BindDdl_CourseKnowledgeIdByCourseIdInDivCache(
      divVarSet.refDivQuery,
      'ddlCourseKnowledgeId_q',
      CourseId_Session.value,
    ); //
  }
  /**
   * 模式Id (Used In CombineCondition())
   **/
  public get courseKnowledgeId_q(): string {
    return GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlCourseKnowledgeId_q');
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
