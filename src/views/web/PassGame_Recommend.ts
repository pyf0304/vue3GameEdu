import $ from 'jquery';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetA_Empty,
  GetBr_Empty,
  GetButtonObjInDiv,
  GetButton_Empty,
  GetDivObjInDivObj,
  GetDiv_Empty,
  GetLabel_Empty,
  GetLiObjInDivObj,
  GetLi_Empty,
  GetSpan_Empty,
  GetTextAreaEmpty,
  GetUlObjInDivObj,
  HideDivInDivObj,
  SetSpanHtmlInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { useUserStore } from '@/store/modulesShare/user';
import {
  ge_StuBatchQuesRelaEx_GetLastExamBatchNo,
  ge_StuBatchQuesRelaEx_Getge_StuBatchQuesRelaListExV2,
} from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';
import { ge_UserCreditsLogEx_Addge_UserCreditsLog } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsLogExWApi';
import { ge_UserCreditsLogCRUD } from '@/viewsBase/GameLearn/ge_UserCreditsLogCRUD';
import { enumChallengeMode } from '@/ts/FunClass/enumChallengeMode';
import {
  QuestionType_GetObjByQuestionTypeIdCache,
  QuestionType_func,
} from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import {
  QuestionOptions_GetObjLstAsync,
  QuestionOptions_GetObjLstCache,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { clsQuestionTypeEN, enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import {
  Answer_GetObjLstAsync,
  Answer_GetObjLstCache,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import {
  UserAnswerResult_GetFirstObjAsync,
  UserAnswerResult_GetObjLstAsync,
} from '@/ts/L3ForWApi/QuestionnaireResult/clsUserAnswerResultWApi';

import { UserAnswerResultEx_AddOrUpdateRecord } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsUserAnswerResultExWApi';
import clsCheck, { getCheckValueInDivObj } from '@/ts/FunClass/clsCheck';

import { clsge_StuBatchQuesRelaEN } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
import {
  ge_StuBatchQuesRela_GetFirstObjAsync,
  ge_StuBatchQuesRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/InteractManage/clsge_StuBatchQuesRelaWApi';
import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
import {
  QuestionOptionsEx_GetLiCheckItemQuestionOptions,
  QuestionOptionsEx_GetLiRadioItemQuestionOptions,
} from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
import { menu_SetActiveItemLi } from '@/ts/FunClass/clsPubFun4Menu';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { usetz_ContentAttachmentStore } from '@/store/modulesShare/tz_ContentAttachment';
import { tz_ContentAttachmentEx_GeneLiObjByObj } from '@/ts/L3ForWApiEx/ResourceMan/clstz_ContentAttachmentExWApi';
import { TzMsgBoxEx } from '@/views/CommPage/TzMsgBoxEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { ge_UserCreditsTtl_ListEx } from '@/views/GameLearn/ge_UserCreditsTtl_ListEx';
import {
  ge_GameLevel_CopyObjTo,
  ge_GameLevel_GetObjLstAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { ge_UserLevelScore_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsge_UserLevelScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN';
import { clsge_GameLevelENEx } from '@/ts/L0Entity/Knowledges/clsge_GameLevelENEx';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
import { ge_LevelModeType_func } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { ge_DifficultyLevel_func } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { ge_ExaminationCriteriaEx_GetChapterNameByGameLevelIdEx } from '@/ts/L3ForWApiEx/GameLearn/clsge_ExaminationCriteriaExWApi';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { divVarSet, viewVarSet } from '@/views/GameLearn/ge_UserCreditsLogVueShare';
import { Questionnaire_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PassGame_Recommend extends ge_UserCreditsLogCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static arrCheckQues: Array<clsCheck> = []; //已做答的题的集合
  public static gameLevelId_Static = '';

  public static intQuestion = 0;
  public static arrQuestions_Curr: Array<clsQuestionnaireEN> = [];
  public static objQuestions_Curr: clsQuestionnaireEN;
  public static intActiveQuestion = 0; //当前操作的考题编号
  public divQuestionShow = 'divQuestionShow';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public get examBatchNo() {
    const strExamBatchNo = PassGame_Recommend.GetPropValue('examBatchNo');
    return strExamBatchNo;
  }
  public set examBatchNo(value) {
    PassGame_Recommend.vuebtn_Click('SetExamBatchNo', value);
  }
  BindGv(strType: string, strPara: string) {
    //this.BindGv_vXzMajor();
    console.log('strType', strType);
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'default':
        //alert('该类没有绑定该函数：[this.BindGv_vXzMajor_Cache]！');
        //this.BindGv_vXzMajorCache();
        // router.push('/PassGame');
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vXzMajor':
        alert('该类没有绑定该函数：[this.BindGv_vXzMajor_Cache]！');
        //this.BindGv_vXzMajorCache();
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
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
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    try {
      //关卡数量
      const gvResultOne = await this.Show_GameChallenge();
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: PassGame_Recommend = new PassGame_Recommend();
    console.log(strKeyId);

    switch (strCommandName) {
      case 'UpQuestion': //重序记录
        objPage.btnUpQuestion_Click();
        break;
      case 'nextQuestion': //重序记录
        objPage.btnNextQuestion_Click();
        break;
      case 'clickTrim': //重序记录
        objPage.clickTrim(strKeyId);
        break;
      case 'submitQuestions': //重序记录
        objPage.btnSubmitQuestions_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PassGame_Recommend.btn_Click');

        break;
    }
  }

  //7答题展示
  public async ChallengeQuestionClick(
    strUserId: string,
    strid_CurrEducls: string,
    strDifficultyLevelId: string,
    strQuestionTypeId: string,
    intQuestionNum: number,
    strGameLevelId: string,
    strChallengeMode: string,
    strExamBatchNo: string,
  ) {
    const strThisFuncName = this.ChallengeQuestionClick.name;
    PassGame_Recommend.gameLevelId_Static = strGameLevelId;
    this.examBatchNo = strExamBatchNo;
    // const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
    // const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;

    //判断是否有题目可选
    const arrQuestionnaire = await Questionnaire_GetObjLstAsync(
      `courseId='${clsPubLocalStorage.courseId}'`,
    );

    let intQuestionNum_CanSel = intQuestionNum;
    if (intQuestionNum_CanSel == 0) {
      const strMsg = `当前该关可选的题目为0，请联系教师或管理员！`;
      alert(strMsg);
      return;
    }

    //获取当前登录用户的闯关分数；
    const strWhereCond = " idCurrEduCls='" + strid_CurrEducls + "'";

    //获取存放闯关关卡题目
    let arrge_StuBatchQuesRelaObjLst: Array<clsge_StuBatchQuesRelaEN> = [];

    //获取题目库
    let arrQuestionnaireObjLst: Array<clsQuestionnaireEN> = [];
    //获取题目选项
    let arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];
    //获取题目正确答案 用于一个填空题多个答案情况，根据答案多少动态生成对应数量文本框；

    let arrAnswerObjLst: Array<clsAnswerEN> = [];

    //
    // 在此处放置用户代码以初始化页面
    let strQuestionId: number = 0;
    const strQuestionJsonData: string[] = [','];
    //拼接json字符串开始
    let JSONstring: string = '['; //这里是开始位置
    try {
      //查看上一次，或者继续答题；

      if (
        strChallengeMode == enumChallengeMode.ViewLast_01 ||
        strChallengeMode == enumChallengeMode.ContinuePass_03
      ) {
        //以前关卡；
        //获取学生题目批次表；
        const strWhereExam = Format(
          " gameLevelId='{0}' And examBatchNo='{1}' And UserId='{2}' And isRecommend = '1' ",
          strGameLevelId,
          strExamBatchNo,
          strUserId,
        );
        arrge_StuBatchQuesRelaObjLst = await ge_StuBatchQuesRela_GetObjLstAsync(strWhereExam);
        if (arrge_StuBatchQuesRelaObjLst.length == 0) {
          arrge_StuBatchQuesRelaObjLst = await ge_StuBatchQuesRelaEx_Getge_StuBatchQuesRelaListExV2(
            strUserId,
            strid_CurrEducls,
            strDifficultyLevelId,
            strQuestionTypeId,
            intQuestionNum,
            strGameLevelId,
          );
        }
      } else {
        //开始新的关卡
        //重新闯关

        //获取学生题目批次表；
        arrge_StuBatchQuesRelaObjLst = await ge_StuBatchQuesRelaEx_Getge_StuBatchQuesRelaListExV2(
          strUserId,
          strid_CurrEducls,
          strDifficultyLevelId,
          strQuestionTypeId,
          intQuestionNum,
          strGameLevelId,
        );
      }

      arrge_StuBatchQuesRelaObjLst = arrge_StuBatchQuesRelaObjLst.sort(
        (x, y) => x.questionId - y.questionId,
      );
      //获取获取题目库
      arrQuestionnaireObjLst = await Questionnaire_GetObjLstAsync(`courseId='${strCourseId}'`);

      //获取获取题目选项库
      arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstCache(strCourseId);

      //获取获取题目正确答案
      arrAnswerObjLst = await Answer_GetObjLstCache(strCourseId);
      let arrQuestions_Curr: Array<clsQuestionnaireEN> = new Array<clsQuestionnaireEN>();
      //循环作业关系表数据
      //循环作业题目关系
      for (let i = 0; i < arrge_StuBatchQuesRelaObjLst.length; i++) {
        strQuestionId = arrge_StuBatchQuesRelaObjLst[i].questionId;
        //将批次号存入隐藏控件，
        if (this.examBatchNo != arrge_StuBatchQuesRelaObjLst[i].examBatchNo) {
          this.examBatchNo = arrge_StuBatchQuesRelaObjLst[i].examBatchNo;
        }
        let strMsg = '';
        let objQuestionnaire_Curr = null;
        //let objQuestionCheck;
        //let objQuestionPanduanti;
        //let objQuestionData_01;
        //let objQuestionData_10;
        switch (strQuestionTypeId) {
          case enumQuestionType.SingleChoice_02:
            //通过问题ID比对获取问题库问题相关数据；//单选题02//多选03//判断11
            objQuestionnaire_Curr = arrQuestionnaireObjLst.find(
              (x) => x.questionId == strQuestionId && x.questionTypeId == '02',
            );
            if (objQuestionnaire_Curr != null) {
              const strQuestionTypeName = '单选题';
              JSONstring += '{';
              JSONstring += '"' + 'questionId' + '":"' + strQuestionId + '",';
              JSONstring +=
                '"' + 'questionName' + '":"' + objQuestionnaire_Curr.questionName + '",';
              JSONstring +=
                '"' + 'questionTypeId' + '":"' + objQuestionnaire_Curr.questionTypeId + '",';
              JSONstring += '"' + 'questionTypeName' + '":"' + strQuestionTypeName + '",';
              JSONstring += '"' + 'answerOption' + '"';
              JSONstring += ':';
              JSONstring += '[';

              //过滤选项；
              let arrQuestionOptionsObjLst1 = arrQuestionOptionsObjLst.filter(
                (x) => x.questionId == strQuestionId,
              );
              //排序
              arrQuestionOptionsObjLst1 = arrQuestionOptionsObjLst1.sort((x) =>
                x.GetFldValue(clsQuestionOptionsEN.con_OptionIndex),
              );
              let jIndex = 0;
              //循环题目答案
              for (let j = 0; j < arrQuestionOptionsObjLst1.length; j++) {
                jIndex++;
                //如果获取的序号为0 ，那么则使用jIndex变量；

                JSONstring += '{';
                JSONstring +=
                  '"' +
                  'questionOptionId' +
                  '":"' +
                  arrQuestionOptionsObjLst1[j].questionOptionId +
                  '",';
                if (arrQuestionOptionsObjLst1[j].optionIndex == 0) {
                  JSONstring += '"' + 'optionTitle' + '":"' + jIndex + '",';
                } else {
                  JSONstring +=
                    '"' + 'optionTitle' + '":"' + arrQuestionOptionsObjLst1[j].optionIndex + '",';
                }

                JSONstring +=
                  '"' + 'optionName' + '":"' + arrQuestionOptionsObjLst1[j].optionName + '",';
                JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
                JSONstring += '},';

                //JSONstring += "]},";
              }
              JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
              //JSONstring += "}],";
              JSONstring += ']},';
            }
            break;
          case enumQuestionType.MultipleChoice_03:
            //如果是多选题；
            objQuestionnaire_Curr = arrQuestionnaireObjLst.find(
              (x) => x.questionId == strQuestionId && x.questionTypeId == '03',
            );
            if (objQuestionnaire_Curr != null) {
              const strQuestionTypeName = '多选题';

              JSONstring += '{';
              JSONstring += '"' + 'questionId' + '":"' + strQuestionId + '",';
              JSONstring +=
                '"' + 'questionName' + '":"' + objQuestionnaire_Curr.questionName + '",';
              JSONstring +=
                '"' + 'questionTypeId' + '":"' + objQuestionnaire_Curr.questionTypeId + '",';
              JSONstring += '"' + 'questionTypeName' + '":"' + strQuestionTypeName + '",';
              JSONstring += '"' + 'answerOption' + '"';
              JSONstring += ':';
              JSONstring += '[';

              //过滤选项；
              let arrQuestionOptionsObjLst1 = arrQuestionOptionsObjLst.filter(
                (x) => x.questionId == strQuestionId,
              );
              //排序
              arrQuestionOptionsObjLst1 = arrQuestionOptionsObjLst1.sort((x) =>
                x.GetFldValue(clsQuestionOptionsEN.con_OptionIndex),
              );
              let jIndex = 0;
              //循环题目答案
              for (let j = 0; j < arrQuestionOptionsObjLst1.length; j++) {
                jIndex++;
                //如果获取的序号为0 ，那么则使用jIndex变量；

                JSONstring += '{';
                JSONstring +=
                  '"' +
                  'questionOptionId' +
                  '":"' +
                  arrQuestionOptionsObjLst1[j].questionOptionId +
                  '",';
                if (arrQuestionOptionsObjLst1[j].optionIndex == 0) {
                  JSONstring += '"' + 'optionTitle' + '":"' + jIndex + '",';
                } else {
                  JSONstring +=
                    '"' + 'optionTitle' + '":"' + arrQuestionOptionsObjLst1[j].optionIndex + '",';
                }

                JSONstring +=
                  '"' + 'optionName' + '":"' + arrQuestionOptionsObjLst1[j].optionName + '",';
                JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
                JSONstring += '},';

                //JSONstring += "]},";
              }
              JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
              //JSONstring += "}],";
              JSONstring += ']},';
            }
            break;
          case enumQuestionType.TrueorFalse_11:
            //如果是判断题
            objQuestionnaire_Curr = arrQuestionnaireObjLst.find(
              (x) => x.questionId == strQuestionId && x.questionTypeId == '11',
            );
            if (objQuestionnaire_Curr != null) {
              const strQuestionTypeName = '判断题';

              JSONstring += '{';
              JSONstring += '"' + 'questionId' + '":"' + strQuestionId + '",';
              JSONstring +=
                '"' + 'questionName' + '":"' + objQuestionnaire_Curr.questionName + '",';
              JSONstring +=
                '"' + 'questionTypeId' + '":"' + objQuestionnaire_Curr.questionTypeId + '",';
              JSONstring += '"' + 'questionTypeName' + '":"' + strQuestionTypeName + '",';
              JSONstring += '"' + 'answerOption' + '"';
              JSONstring += ':';
              JSONstring += '[';

              //过滤选项；
              let arrQuestionOptionsObjLst1 = arrQuestionOptionsObjLst.filter(
                (x) => x.questionId == strQuestionId,
              );
              //排序
              arrQuestionOptionsObjLst1 = arrQuestionOptionsObjLst1.sort((x) =>
                x.GetFldValue(clsQuestionOptionsEN.con_OptionIndex),
              );
              let jIndex = 0;
              //循环题目答案
              for (let j = 0; j < arrQuestionOptionsObjLst1.length; j++) {
                jIndex++;
                //如果获取的序号为0 ，那么则使用jIndex变量；

                JSONstring += '{';
                JSONstring +=
                  '"' +
                  'questionOptionId' +
                  '":"' +
                  arrQuestionOptionsObjLst1[j].questionOptionId +
                  '",';
                if (arrQuestionOptionsObjLst1[j].optionIndex == 0) {
                  JSONstring += '"' + 'optionTitle' + '":"' + jIndex + '",';
                } else {
                  JSONstring +=
                    '"' + 'optionTitle' + '":"' + arrQuestionOptionsObjLst1[j].optionIndex + '",';
                }

                JSONstring +=
                  '"' + 'optionName' + '":"' + arrQuestionOptionsObjLst1[j].optionName + '",';
                JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
                JSONstring += '},';

                //JSONstring += "]},";
              }
              JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
              //JSONstring += "}],";
              JSONstring += ']},';
            }
            break;
          case enumQuestionType.FillInBlank_01:
            //如果为空，那么则判断是否是填空题；
            objQuestionnaire_Curr = arrQuestionnaireObjLst.find(
              (x) => x.questionId == strQuestionId && x.questionTypeId == '01',
            );
            if (objQuestionnaire_Curr != null) {
              //answerFillInBlank	填空题答案

              const strQuestionTypeName = '填空题';

              JSONstring += '{';
              JSONstring += '"' + 'questionId' + '":"' + strQuestionId + '",';
              JSONstring +=
                '"' + 'questionName' + '":"' + objQuestionnaire_Curr.questionName + '",';
              JSONstring +=
                '"' + 'questionTypeId' + '":"' + objQuestionnaire_Curr.questionTypeId + '",';
              JSONstring += '"' + 'questionTypeName' + '":"' + strQuestionTypeName + '",';
              JSONstring += '"' + 'answerOption' + '"';
              JSONstring += ':';
              JSONstring += '[';

              //过滤选项；
              const arrAnswerObjLst1 = arrAnswerObjLst.filter((x) => x.questionId == strQuestionId);
              //循环填空题答案
              for (let j = 0; j < arrAnswerObjLst1.length; j++) {
                const optionTitle = ''; //等于空，因为填空题没有标题；
                JSONstring += '{';
                JSONstring +=
                  '"' + 'questionOptionId' + '":"' + arrAnswerObjLst1[j].answerId + '",';
                JSONstring += '"' + 'optionTitle' + '":"' + optionTitle + '",';
                JSONstring +=
                  '"' + 'optionName' + '":"' + arrAnswerObjLst1[j].answerFillInBlank + '",';
                JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
                JSONstring += '},';

                //JSONstring += "]},";
              }
              JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
              //JSONstring += "}],";
              JSONstring += ']},';
            }
            break;
          case enumQuestionType.ShortAnswer_10:
            //如果为空，那么则判断是否是简答题；
            objQuestionnaire_Curr = arrQuestionnaireObjLst.find(
              (x) => x.questionId == strQuestionId && x.questionTypeId == '10',
            );
            if (objQuestionnaire_Curr != null) {
              //answerFillInBlank	简答题答案
              const strQuestionTypeName = '简答题';
              JSONstring += '{';
              JSONstring += '"' + 'questionId' + '":"' + strQuestionId + '",';
              JSONstring +=
                '"' + 'questionName' + '":"' + objQuestionnaire_Curr.questionName + '",';
              JSONstring +=
                '"' + 'questionTypeId' + '":"' + objQuestionnaire_Curr.questionTypeId + '",';
              JSONstring += '"' + 'questionTypeName' + '":"' + strQuestionTypeName + '",';
              JSONstring += '"' + 'answerOption' + '"';
              JSONstring += ':';
              JSONstring += '[';
              //过滤选项；
              const arrAnswerObjLst1 = arrAnswerObjLst.filter((x) => x.questionId == strQuestionId);
              //循环填空题答案
              for (let j = 0; j < arrAnswerObjLst1.length; j++) {
                const optionTitle = ''; //等于空，因为填空题没有标题；
                JSONstring += '{';
                JSONstring +=
                  '"' + 'questionOptionId' + '":"' + arrAnswerObjLst1[j].answerId + '",';
                JSONstring += '"' + 'optionTitle' + '":"' + optionTitle + '",';
                JSONstring +=
                  '"' + 'optionName' + '":"' + arrAnswerObjLst1[j].answerFillInBlank + '",';
                JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
                JSONstring += '},';
                //JSONstring += "]},";
              }
              JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
              //JSONstring += "}],";
              JSONstring += ']},';
            }
            break;
          default:
            const objQuestionType = await QuestionType_GetObjByQuestionTypeIdCache(
              strQuestionTypeId,
            );
            if (objQuestionType == null) {
              strMsg = Format(
                '根据问题类型Id获取相应的记录的对象为空.(in {0}.{1})',
                this.constructor.name,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            strMsg = Format(
              '问题类型:{0}({1})在Switch中没有被处理.(in {2}.{3})',
              objQuestionType.questionTypeName,
              strQuestionTypeId,
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            break;
        }
        if (objQuestionnaire_Curr == null) return;
        PassGame_Recommend.objQuestions_Curr = objQuestionnaire_Curr;
        arrQuestions_Curr.push(objQuestionnaire_Curr);
      }
      PassGame_Recommend.arrQuestions_Curr = arrQuestions_Curr;
      JSONstring = JSONstring.substring(0, JSONstring.length - 1); //去掉最后一个逗号问题；
      JSONstring += ']';

      console.log('完成ChallengeQuestionClick!');
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }

    //this.strJsonData = JSONstring;
    //questions = JSONstring;
    PassGame_Recommend.intActiveQuestion = 0;
    switch (strChallengeMode) {
      case enumChallengeMode.ViewLast_01:
        this.showQuestion_ViewLast(0, strExamBatchNo, PassGame_Recommend.arrQuestions_Curr);
        break;
      case enumChallengeMode.StartGame_02:
        this.showQuestion_StartGame(0, strExamBatchNo, PassGame_Recommend.arrQuestions_Curr);
        break;
      case enumChallengeMode.ContinuePass_03:
        this.showQuestion_ContinuePass(0, strExamBatchNo, PassGame_Recommend.arrQuestions_Curr);
        break;
      default:
        const strMsg = Format(
          '挑战模式：{0}没有被处理！(in {1}.{2})',
          strChallengeMode,
          this.constructor.name,
          strThisFuncName,
        );
        alert(strMsg);
        return;
        break;
    }
    this.answerCard(PassGame_Recommend.arrQuestions_Curr);
  }

  public async showQuestion_ViewLast(
    id: number,
    strExamBatchNo: string,
    arrQuestions: Array<clsQuestionnaireEN>,
  ) {
    const strThisFuncName = this.showQuestion_ViewLast.name;
    const strChallengeMode = this.challengeMode;
    const userStore = useUserStore();
    //questions = questions;
    ////去掉前后双引号
    //questions = eval(questions)
    //questions = questions.substring(1, questions.length - 1);
    const strCourseId = clsPubLocalStorage.courseId;
    const strUserId = userStore.userId;
    //上一次闯关结果
    let arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    SetSpanHtmlInDivObj(this.thisDivLayout, 'spnQuestioned', (id + 1).toString());
    let questioned = (id + 1) / arrQuestions.length;
    if (PassGame_Recommend.intActiveQuestion != undefined) {
      $('#ques' + PassGame_Recommend.intActiveQuestion)
        .removeClass('question_id')
        .addClass('active_question_id');
    }
    if (strChallengeMode == enumChallengeMode.ViewLast_01) {
      const submitQuestions = GetButtonObjInDiv(this.divQuestionShow, 'submitQuestions');
      if (submitQuestions != null) {
        submitQuestions.disabled = true;
      }
    }

    PassGame_Recommend.intActiveQuestion = id;
    const ulQuestions = document.getElementsByClassName('question');
    if (ulQuestions.length == 0) {
      const strMsg = `class = 'question'的ul控件不存在`;
      return;
    }
    const ulQuestion = ulQuestions[0] as HTMLUListElement;
    ulQuestion.innerHTML = '';
    console.log(ulQuestion, ulQuestion.className);
    $('.question').find('.question_info').remove();
    $('.question').find('.question_infos').remove();
    const objQuestion = arrQuestions[id];
    const strQuestionId = objQuestion.questionId;
    const strQuestionTypeId = objQuestion.questionTypeId;
    const arrAnswerObjLst = await Answer_GetObjLstCache(strCourseId);
    //获取获取题目选项库
    const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstCache(strCourseId);
    const arrQuestionOptions_Curr = arrQuestionOptionsObjLst.filter(
      (x) => x.questionId == strQuestionId,
    );

    //查询不是推荐的批次；
    const strWhereStuExam = Format(
      "gameLevelId='{0}' And UserId='{1}' and ExamBatchNo='{2}' And isRecommend = '1' order by updDate desc",
      PassGame_Recommend.gameLevelId_Static,
      strUserId,
      strExamBatchNo,
    );
    const strLastExamBatchNo = await ge_StuBatchQuesRelaEx_GetLastExamBatchNo(
      PassGame_Recommend.gameLevelId_Static,
      strUserId,
      false,
    );
    if (strLastExamBatchNo.length == 0) {
      const strMsg = Format(
        '当前用户的关卡:[{0}], 批次:[{1}]的相关随机题目没有生成.(in {2}.{3})',
        PassGame_Recommend.gameLevelId_Static,
        strExamBatchNo,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //this.examBatchNo = objge_StuBatchQuesRela.examBatchNo;
    //console.error("strExamBatchNo:", this.examBatchNo);
    //strDateTime = objge_StuBatchQuesRela.updDate;

    //通过批次号+用户 课程得到 做题结果表数据

    const strWhereResult = "	examBatchNo='" + strExamBatchNo + "' And userId='" + strUserId + "'";

    //获取获取题目库
    arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(strWhereResult);
    if (arrUserAnswerResultObjLst == null) {
      const strMsg = Format(
        '当前用户:{0}, 批次:[{1}]的做题结果为空，请检查.(in {2}.{3})',
        strUserId,
        strExamBatchNo,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    let objUserAnswerResult: clsUserAnswerResultEN = new clsUserAnswerResultEN();

    const objUserAnswerResult_Const = arrUserAnswerResultObjLst.find(
      (x) => x.questionId == strQuestionId,
    );
    if (objUserAnswerResult_Const != null) objUserAnswerResult = objUserAnswerResult_Const;

    let bolIsAnswer = false;
    let intQuestionOptionNum = 0;
    // 遍历单条信息
    let strQuestionTitle = '';
    const liQutionTitle = GetLi_Empty('liQuestion_title');
    switch (strQuestionTypeId) {
      case '02':
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(单选题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );

        liQutionTitle.innerHTML = strQuestionTitle;
        ulQuestion.appendChild(liQutionTitle);

        let item = '';
        let k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          //$.each(dataObj, function (k1, obj) {
          intQuestionOptionNum++;

          if (
            objUserAnswerResult != null &&
            objUserAnswerResult.answerOptionId == objQuestionOption.questionOptionId
          ) {
            bolIsAnswer = true;
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );

          ulQuestion.appendChild(liItem);

          k1++;
        }
        break;
      case '03':
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(多选题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );

        liQutionTitle.innerHTML = strQuestionTitle;
        ulQuestion.appendChild(liQutionTitle);

        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          intQuestionOptionNum++;

          const strAnswerMultiOption = objUserAnswerResult.answerMultiOption;
          if (IsNullOrEmpty(strAnswerMultiOption) == false) {
            const arr = strAnswerMultiOption.split('|');
            if (arr.indexOf(objQuestionOption.questionOptionId) > -1) {
              bolIsAnswer = true;
            }
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );
          ulQuestion.appendChild(liItem);
          k1++;
        }
        break;
      case '11': //判断题
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(判断题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );

        liQutionTitle.innerHTML = strQuestionTitle;
        ulQuestion.appendChild(liQutionTitle);

        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          //计算有几个选项；
          intQuestionOptionNum++;
          if (
            objUserAnswerResult != null &&
            objUserAnswerResult.answerOptionId == objQuestionOption.questionOptionId
          ) {
            bolIsAnswer = true;
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );
          ulQuestion.appendChild(liItem);
        }
        break;
      case '01': //填空题型
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(填空题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );

        liQutionTitle.innerHTML = strQuestionTitle;
        ulQuestion.appendChild(liQutionTitle);

        item = "<li class='question_infos' id='item" + objQuestion.questionId + "'>";
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          intQuestionOptionNum++;
          //有几个答案就生成几个文本框；
          item +=
            intQuestionOptionNum +
            ".<input type = 'text' name = 'item'  id = '" +
            objQuestionOption.questionOptionId +
            "' style='background:lightblue;line-height:30px;' /><br>";
        }
        item += '</li>';
        $('.question').append(item);
        break;
      case '10': //简答题型
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(简答题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );

        liQutionTitle.innerHTML = strQuestionTitle;
        ulQuestion.appendChild(liQutionTitle);

        const liQuestion = GetLi_Empty('question_infos');
        liQuestion.id = Format('item{0}', objQuestion.questionId);
        const txtAnswer_User = GetTextAreaEmpty('');
        txtAnswer_User.id = Format('Answer_User{0}', objQuestion.questionId);
        txtAnswer_User.rows = 8;
        txtAnswer_User.cols = 80;
        txtAnswer_User.style.background = 'lightblue';
        txtAnswer_User.style.lineHeight = '22px';
        if (objUserAnswerResult != null) {
          txtAnswer_User.innerHTML = objUserAnswerResult.answerText;
        }
        liQuestion.appendChild(txtAnswer_User);
        //item = "<li class='question_infos' id='item" + objQuestion.questionId + "'>";
        //item += "<textarea name = 'item'  id = 'question" + objQuestion.questionId + "' rows=8 cols=80 style='background:lightblue;line-height:22px;' />";
        //item += "</li>";
        $('.question').append(liQuestion.outerHTML);

        break;
      default:
        const strMsg = '问题类型Id：' + strQuestionTypeId + '没有被处理！';
        alert(strMsg);
        break;
    }
    //为点击后的标签添加背景样式；
    //});
    $('.question').attr('questionId', 'question' + id);
    //$(".question").attr("id", question.questionId);
    $('#ques' + id)
      .removeClass('active_question_id')
      .addClass('question_id');
    for (let i = 0; i < PassGame_Recommend.arrCheckQues.length; i++) {
      if (PassGame_Recommend.arrCheckQues[i].id == id) {
        $('#' + PassGame_Recommend.arrCheckQues[i].item)
          .find('input')
          .prop('checked', 'checked');
        $('#' + PassGame_Recommend.arrCheckQues[i].item).addClass('clickTrim');
        $('#ques' + PassGame_Recommend.intActiveQuestion)
          .removeClass('question_id')
          .addClass('clickQue');
      }
    }

    //题目ID， 题目类型；答案选项数
    this.SearchUserResultAnswer(strQuestionId, strQuestionTypeId, intQuestionOptionNum);
  }

  public async showQuestion_StartGame(
    id: number,
    strExamBatchNo: string,
    arrQuestions: Array<clsQuestionnaireEN>,
  ) {
    const strThisFuncName = this.showQuestion_StartGame.name;
    const tz_ContentAttachmentStore = usetz_ContentAttachmentStore();
    const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;
    const userStore = useUserStore();
    const strChallengeMode = this.challengeMode;
    //questions = questions;
    ////去掉前后双引号
    //questions = eval(questions)
    //questions = questions.substring(1, questions.length - 1);
    const strCourseId = clsPubLocalStorage.courseId;
    const strUserId = userStore.userId;
    //上一次闯关结果
    let arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    SetSpanHtmlInDivObj(this.thisDivLayout, 'spnQuestioned', (id + 1).toString());
    let questioned = (id + 1) / arrQuestions.length;
    if (PassGame_Recommend.intActiveQuestion != undefined) {
      $('#ques' + PassGame_Recommend.intActiveQuestion)
        .removeClass('question_id')
        .addClass('active_question_id');
    }
    if (strChallengeMode == enumChallengeMode.StartGame_02) {
      const submitQuestions = GetButtonObjInDiv(this.divQuestionShow, 'submitQuestions');
      if (submitQuestions != null) {
        //submitQuestions.disabled = false;
      }
    }

    PassGame_Recommend.intActiveQuestion = id;
    const ulQuestions = document.getElementsByClassName('question');
    if (ulQuestions.length == 0) {
      const strMsg = `class = 'question'的ul控件不存在`;
      return;
    }
    const ulQuestion = ulQuestions[0] as HTMLUListElement;
    ulQuestion.innerHTML = '';
    console.log(ulQuestion, ulQuestion.className);
    $('.question').find('.question_info').remove();
    $('.question').find('.question_infos').remove();
    const objQuestion = arrQuestions[id];
    const strQuestionId = objQuestion.questionId;
    const strQuestionTypeId = objQuestion.questionTypeId;
    const arrAnswerObjLst = await Answer_GetObjLstCache(strCourseId);
    //获取获取题目选项库
    const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstCache(strCourseId);
    const arrQuestionOptions_Curr = arrQuestionOptionsObjLst.filter(
      (x) => x.questionId == strQuestionId,
    );

    //查询不是推荐的批次；
    const strWhereStuExam = Format(
      "gameLevelId='{0}' And UserId='{1}' And isRecommend = '1' order by updDate desc",
      PassGame_Recommend.gameLevelId_Static,
      strUserId,
      strCourseId,
    );
    const strLastExamBatchNo = await ge_StuBatchQuesRelaEx_GetLastExamBatchNo(
      PassGame_Recommend.gameLevelId_Static,
      strUserId,
      false,
    );
    if (strLastExamBatchNo.length == 0) {
      const strMsg = Format('根据条件获取用户批次题目时，为空，请检查！(In showQuestionBak)');
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    this.examBatchNo = strLastExamBatchNo;
    console.error('strExamBatchNo:', this.examBatchNo);
    //strDateTime = objge_StuBatchQuesRela.updDate;

    //通过批次号+用户 课程得到 做题结果表数据
    const strWhereResult = "	examBatchNo='" + strExamBatchNo + "' And userId='" + strUserId + "'";
    //获取获取题目库
    arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(strWhereResult);
    let objUserAnswerResult: clsUserAnswerResultEN = new clsUserAnswerResultEN();
    if (arrUserAnswerResultObjLst != null) {
      const objUserAnswerResult_Const = arrUserAnswerResultObjLst.find(
        (x) => x.questionId == strQuestionId,
      );
      if (objUserAnswerResult_Const != null) objUserAnswerResult = objUserAnswerResult_Const;
    }
    //循环json数组数据
    //$.each(question, function (k, v) {
    const danxuanti = '';
    const duoxuanti = '';
    const panduanti = '';
    const wendati = '';
    let bolIsAnswer = false;
    let intQuestionOptionNum = 0;
    //// 遍历单条信息
    //$.each(questions[k], function (k, v) {
    const liQutionTitle = GetLi_Empty('liQuestion_title');
    switch (strQuestionTypeId) {
      case '02':
        //单选题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(单选题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);
        const arrtz_ContentAttachment_Question = await tz_ContentAttachmentStore.getObjENLst(
          '0001',
          objQuestion.questionId.toString(),
        );
        if (arrtz_ContentAttachment_Question != null) {
          for (let y = 0; y < arrtz_ContentAttachment_Question.length; y++) {
            const liSub1 = tz_ContentAttachmentEx_GeneLiObjByObj(
              arrtz_ContentAttachment_Question[y],
              strAddressAndPort,
              '200px',
            );
            ulQuestion.appendChild(liSub1);
          }
        }

        let item = '';
        let k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          //$.each(dataObj, function (k1, obj) {
          intQuestionOptionNum++;

          if (
            objUserAnswerResult != null &&
            objUserAnswerResult.answerOptionId == objQuestionOption.questionOptionId
          ) {
            bolIsAnswer = true;
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );
          ulQuestion.appendChild(liItem);
          const arrtz_ContentAttachment = await tz_ContentAttachmentStore.getObjENLst(
            '0006',
            objQuestionOption.questionOptionId,
          );
          if (arrtz_ContentAttachment != null) {
            for (let y = 0; y < arrtz_ContentAttachment.length; y++) {
              const liSubOption1 = tz_ContentAttachmentEx_GeneLiObjByObj(
                arrtz_ContentAttachment[y],
                strAddressAndPort,
                '150px',
              );
              ulQuestion.appendChild(liSubOption1);
            }
          }

          k1++;
        }
        break;
      case '03':
        //多选题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(多选题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          intQuestionOptionNum++;

          const strAnswerMultiOption = objUserAnswerResult.answerMultiOption;
          if (IsNullOrEmpty(strAnswerMultiOption) == false) {
            const arr = strAnswerMultiOption.split('|');
            if (arr.indexOf(objQuestionOption.questionOptionId) > -1) {
              bolIsAnswer = true;
            }
          }
          if (bolIsAnswer == true) {
            item =
              "<li class='question_info' onclick='clickTrim(this)' id='item" +
              k1 +
              "'><input type='checkbox' checked = 'checked' name='item' value='" +
              objQuestionOption.questionOptionId +
              "' id = '" +
              objQuestion.questionId +
              "'>&nbsp;" +
              objQuestionOption.optionName +
              '</li>';
            $('.question').append(item);
          } else {
            item =
              "<li class='question_info' onclick='clickTrim(this)' id='item" +
              k1 +
              "'><input type='checkbox' name='item' value='" +
              objQuestionOption.questionOptionId +
              "' id = '" +
              objQuestion.questionId +
              "'>&nbsp;" +
              objQuestionOption.optionName +
              '</li>';
            $('.question').append(item);
          }
          k1++;
        }
        break;
      case '11': //判断题
        //判断题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(判断题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          //计算有几个选项；
          intQuestionOptionNum++;
          if (
            objUserAnswerResult != null &&
            objUserAnswerResult.answerOptionId == objQuestionOption.questionOptionId
          ) {
            bolIsAnswer = true;
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );
          ulQuestion.appendChild(liItem);
        }
        break;
      case '01': //填空题型
        //填空题型

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(填空题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        //const dataObj = objQuestion.answerOption;
        item = "<li class='question_infos' id='item" + objQuestion.questionId + "'>";
        /*$.each(dataObj, function (k1, obj) {*/
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          intQuestionOptionNum++;
          //有几个答案就生成几个文本框；
          item +=
            intQuestionOptionNum +
            ".<input type = 'text' name = 'item'  id = '" +
            objQuestionOption.questionOptionId +
            "' style='background:lightblue;line-height:30px;' /><br>";
          //item = "<li class='question_infos' onclick='clickTrim(this)' id='item"
          //       + k1 + "'>" + intQuestionOptionNum + ".<input type = 'text' name = 'item'  id = '" + obj.questionOptionId + "' style='width:98%' style='background:lightblue;line-height:30px;' /></li><br>";
          //$(".question").append(item);
        }
        item += '</li>';
        $('.question').append(item);
        break;
      case '10': //简答题型
        //简答题型

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(简答题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        const liQuestion = GetLi_Empty('question_infos');
        liQuestion.id = Format('item{0}', objQuestion.questionId);
        const txtAnswer_User = GetTextAreaEmpty('');
        txtAnswer_User.id = Format('Answer_User{0}', objQuestion.questionId);
        txtAnswer_User.rows = 8;
        txtAnswer_User.cols = 80;
        txtAnswer_User.style.background = 'lightblue';
        txtAnswer_User.style.lineHeight = '22px';
        if (objUserAnswerResult != null) {
          txtAnswer_User.innerHTML = objUserAnswerResult.answerText;
        }
        liQuestion.appendChild(txtAnswer_User);
        //item = "<li class='question_infos' id='item" + objQuestion.questionId + "'>";
        //item += "<textarea name = 'item'  id = 'question" + objQuestion.questionId + "' rows=8 cols=80 style='background:lightblue;line-height:22px;' />";
        //item += "</li>";
        $('.question').append(liQuestion.outerHTML);
        break;
      default:
        const strMsg = '问题类型Id：' + strQuestionTypeId + '没有被处理！';
        alert(strMsg);
        break;
    }
    //为点击后的标签添加背景样式；
    //});
    $('.question').attr('questionId', 'question' + id);
    //$(".question").attr("id", question.questionId);
    $('#ques' + id)
      .removeClass('active_question_id')
      .addClass('question_id');
    for (let i = 0; i < PassGame_Recommend.arrCheckQues.length; i++) {
      if (PassGame_Recommend.arrCheckQues[i].id == id) {
        $('#' + PassGame_Recommend.arrCheckQues[i].item)
          .find('input')
          .prop('checked', 'checked');
        $('#' + PassGame_Recommend.arrCheckQues[i].item).addClass('clickTrim');
        $('#ques' + PassGame_Recommend.intActiveQuestion)
          .removeClass('question_id')
          .addClass('clickQue');
      }
    }
    //1.判断是不是不是首次加载第一题，如果是，则往下走，看是否是查看上次 还是继续做题，调取已做题答案数据；
    const vQuestionId = objQuestion.questionId; //获取当前题目ID；
    console.log('vQuestionId, strQuestionId:', vQuestionId, strQuestionId);

    /*  const objPage = new PassGame_Recommend();*/
    //题目ID， 题目类型；答案选项数
    this.SearchUserResultAnswer(strQuestionId, strQuestionTypeId, intQuestionOptionNum);
    //});
  }

  public async showQuestion_ContinuePass(
    id: number,
    strExamBatchNo: string,
    arrQuestions: Array<clsQuestionnaireEN>,
  ) {
    const strThisFuncName = this.showQuestion_ContinuePass.name;
    const strChallengeMode = this.challengeMode;
    const userStore = useUserStore();
    //questions = questions;
    ////去掉前后双引号
    //questions = eval(questions)
    //questions = questions.substring(1, questions.length - 1);
    const strCourseId = clsPubLocalStorage.courseId;
    const strUserId = userStore.userId;
    //上一次闯关结果
    let arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    SetSpanHtmlInDivObj(this.thisDivLayout, 'spnQuestioned', (id + 1).toString());
    let questioned = (id + 1) / arrQuestions.length;
    if (PassGame_Recommend.intActiveQuestion != undefined) {
      $('#ques' + PassGame_Recommend.intActiveQuestion)
        .removeClass('question_id')
        .addClass('active_question_id');
    }
    if (strChallengeMode == enumChallengeMode.ContinuePass_03) {
      const submitQuestions = GetButtonObjInDiv(this.divQuestionShow, 'submitQuestions');
      if (submitQuestions != null) {
        //submitQuestions.disabled = false;
      }
    }

    PassGame_Recommend.intActiveQuestion = id;
    const ulQuestions = document.getElementsByClassName('question');
    if (ulQuestions.length == 0) {
      const strMsg = `class = 'question'的ul控件不存在`;
      return;
    }
    const ulQuestion = ulQuestions[0] as HTMLUListElement;
    ulQuestion.innerHTML = '';
    console.log(ulQuestion, ulQuestion.className);
    $('.question').find('.question_info').remove();
    $('.question').find('.question_infos').remove();
    const objQuestion = arrQuestions[id];
    const strQuestionId = objQuestion.questionId;
    const strQuestionTypeId = objQuestion.questionTypeId;
    const arrAnswerObjLst = await Answer_GetObjLstCache(strCourseId);
    //获取获取题目选项库
    const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstCache(strCourseId);
    const arrQuestionOptions_Curr = arrQuestionOptionsObjLst.filter(
      (x) => x.questionId == strQuestionId,
    );

    //查询不是推荐的批次；
    const strWhereStuExam = Format(
      "gameLevelId='{0}' And UserId='{1}' And isRecommend = '1' order by updDate desc",
      PassGame_Recommend.gameLevelId_Static,
      strUserId,
      strCourseId,
    );
    const strLastExamBatchNo = await ge_StuBatchQuesRelaEx_GetLastExamBatchNo(
      PassGame_Recommend.gameLevelId_Static,
      strUserId,
      true,
    );
    if (strLastExamBatchNo == '') {
      const strMsg = Format('根据条件获取用户批次题目时，为空，请检查！(In showQuestionBak)');
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    this.examBatchNo = strLastExamBatchNo;
    console.error('strExamBatchNo:', this.examBatchNo);
    //strDateTime = objge_StuBatchQuesRela.updDate;

    //通过批次号+用户 课程得到 做题结果表数据

    const strWhereResult = "	examBatchNo='" + strExamBatchNo + "' And userId='" + strUserId + "'";

    //获取获取题目库
    arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(strWhereResult);

    let objUserAnswerResult: clsUserAnswerResultEN = new clsUserAnswerResultEN();
    if (arrUserAnswerResultObjLst != null) {
      const objUserAnswerResult_Const = arrUserAnswerResultObjLst.find(
        (x) => x.questionId == strQuestionId,
      );
      if (objUserAnswerResult_Const != null) objUserAnswerResult = objUserAnswerResult_Const;
    }
    //循环json数组数据
    //$.each(question, function (k, v) {

    let bolIsAnswer = false;
    let intQuestionOptionNum = 0;
    //// 遍历单条信息
    //$.each(questions[k], function (k, v) {
    const liQutionTitle = GetLi_Empty('liQuestion_title');
    switch (strQuestionTypeId) {
      case '02':
        //单选题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(单选题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        let item = '';
        let k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          //$.each(dataObj, function (k1, obj) {
          intQuestionOptionNum++;

          if (
            objUserAnswerResult != null &&
            objUserAnswerResult.answerOptionId == objQuestionOption.questionOptionId
          ) {
            bolIsAnswer = true;
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );
          ulQuestion.appendChild(liItem);

          k1++;
        }
        break;
      case '03':
        //多选题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(多选题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          intQuestionOptionNum++;

          const strAnswerMultiOption = objUserAnswerResult.answerMultiOption;
          if (IsNullOrEmpty(strAnswerMultiOption) == false) {
            const arr = strAnswerMultiOption.split('|');
            if (arr.indexOf(objQuestionOption.questionOptionId) > -1) {
              bolIsAnswer = true;
            }
          }
          const liItem = await QuestionOptionsEx_GetLiCheckItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );
          ulQuestion.appendChild(liItem);

          k1++;
        }
        break;
      case '11': //判断题
        //判断题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(判断题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          //计算有几个选项；
          intQuestionOptionNum++;
          if (
            objUserAnswerResult != null &&
            objUserAnswerResult.answerOptionId == objQuestionOption.questionOptionId
          ) {
            bolIsAnswer = true;
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );
          ulQuestion.appendChild(liItem);
        }
        break;
      case '01': //填空题型
        //填空题型

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(填空题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        //const dataObj = objQuestion.answerOption;
        item = "<li class='question_infos' id='item" + objQuestion.questionId + "'>";
        /*$.each(dataObj, function (k1, obj) {*/
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          intQuestionOptionNum++;
          //有几个答案就生成几个文本框；
          item +=
            intQuestionOptionNum +
            ".<input type = 'text' name = 'item'  id = '" +
            objQuestionOption.questionOptionId +
            "' style='background:lightblue;line-height:30px;' /><br>";
        }
        item += '</li>';
        $('.question').append(item);
        break;
      case '10': //简答题型
        //简答题型

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(简答题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        const liQuestion = GetLi_Empty('question_infos');
        liQuestion.id = Format('item{0}', objQuestion.questionId);
        const txtAnswer_User = GetTextAreaEmpty('');
        txtAnswer_User.id = Format('Answer_User{0}', objQuestion.questionId);
        txtAnswer_User.rows = 8;
        txtAnswer_User.cols = 80;
        txtAnswer_User.style.background = 'lightblue';
        txtAnswer_User.style.lineHeight = '22px';
        if (objUserAnswerResult != null) {
          txtAnswer_User.innerHTML = objUserAnswerResult.answerText;
        }
        liQuestion.appendChild(txtAnswer_User);
        //item = "<li class='question_infos' id='item" + objQuestion.questionId + "'>";
        //item += "<textarea name = 'item'  id = 'question" + objQuestion.questionId + "' rows=8 cols=80 style='background:lightblue;line-height:22px;' />";
        //item += "</li>";
        $('.question').append(liQuestion.outerHTML);
        break;
      default:
        const strMsg = '问题类型Id：' + strQuestionTypeId + '没有被处理！';
        alert(strMsg);
        break;
    }
    //为点击后的标签添加背景样式；
    //});
    $('.question').attr('questionId', 'question' + id);
    //$(".question").attr("id", question.questionId);
    $('#ques' + id)
      .removeClass('active_question_id')
      .addClass('question_id');
    for (let i = 0; i < PassGame_Recommend.arrCheckQues.length; i++) {
      if (PassGame_Recommend.arrCheckQues[i].id == id) {
        $('#' + PassGame_Recommend.arrCheckQues[i].item)
          .find('input')
          .prop('checked', 'checked');
        $('#' + PassGame_Recommend.arrCheckQues[i].item).addClass('clickTrim');
        $('#ques' + PassGame_Recommend.intActiveQuestion)
          .removeClass('question_id')
          .addClass('clickQue');
      }
    }
    //1.判断是不是不是首次加载第一题，如果是，则往下走，看是否是查看上次 还是继续做题，调取已做题答案数据；
    const vQuestionId = objQuestion.questionId; //获取当前题目ID；
    console.log('vQuestionId,strQuestionId:', vQuestionId, strQuestionId);

    /*  const objPage = new PassGame_Recommend();*/
    //题目ID， 题目类型；答案选项数
    this.SearchUserResultAnswer(strQuestionId, strQuestionTypeId, intQuestionOptionNum);
    //});
  }
  //判断如果是查看上次、继续做题、首次加载时 把用户答题答案默认显示；参数 问题ID，问题类型v，答案选项数量；
  public async SearchUserResultAnswer(
    strQuestionId: number,
    strQuestionTypeId: string,
    intQuestionOptionNum: number,
  ) {
    const strThisFuncName = this.SearchUserResultAnswer.name;
    try {
      const userStore = useUserStore();
      // const strQuestionId: number = objge_StuBatchQuesRela0.questionId;
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const userId = userStore.userId;
      const examBatchNo = this.examBatchNo;

      //声明参数数组接收值；
      const strcheckboxAnser: string = ''; //得到多选答案组合

      const strAnswer: string = ''; //其他问题类型答案；

      //先判断是否作答
      const strWhereStuExam =
        "examBatchNo='" +
        examBatchNo +
        "' And questionId='" +
        strQuestionId +
        "' And userId='" +
        userId +
        "'";
      const objUserAnswerResult = await UserAnswerResult_GetFirstObjAsync(strWhereStuExam);
      if (objUserAnswerResult == null) {
        const strMsg = Format(
          '当前题目没有相应的用户答案.(条件:{0})(in {1}.{2})',
          strWhereStuExam,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        //alert(strMsg);
        return;
      }
      let arrAnswerObjLst;
      let strWhereAnswer;
      let strAnswerText;
      let strMsg;
      switch (strQuestionTypeId) {
        case enumQuestionType.FillInBlank_01:
          //填空题
          //查找答案表获取答案数 得到ID ；

          strWhereAnswer = "questionId='" + strQuestionId + "' order by answerIndex asc";
          arrAnswerObjLst = await Answer_GetObjLstAsync(strWhereAnswer);

          strAnswerText = objUserAnswerResult.answerText;
          //需要拆分获取；
          let strs = new Array(); //定义一数组
          strs = strAnswerText.split('|'); //字符分割
          let k = 0;
          for (let i = 0; i < strs.length; i++) {
            k++;
            //分割后的字符输出
            const strText = strs[i];
            //查找对应的选项；
            //循环答案选项 得到界面对应的控件ID 然后把值赋给该控件；
            let k1 = 0;
            for (let j = 0; j < arrAnswerObjLst.length; j++) {
              k1++;
              if (k == k1) {
                //得到ID；
                const strAnswerId = arrAnswerObjLst[j].answerId;
                //给文本框赋值；
                $('#' + strAnswerId).val(strText);
              }
            }
          }

          break;
        case enumQuestionType.MultipleChoice_03:
          //多选型
          const answerMultiOption = objUserAnswerResult.answerMultiOption;

          if (intQuestionOptionNum != 0) {
            //需要拆分获取；
            let strs = new Array(); //定义一数组
            strs = answerMultiOption.split('|'); //字符分割
            let k = 0;
            for (let i = 0; i < strs.length; i++) {
              k++;
              //分割后的字符输出
              const strAnswerMultiOption = strs[i];
              //查找对应的选项；
              //循环答案选项 得到界面对应的控件ID 然后把值赋给该控件；
              //循环有几个选项；
              for (let i = 0; i < intQuestionOptionNum; i++) {
                //获取checkvalue值；指定指定ID属性查询得到
                const CheckValue = $('#item' + i)
                  .find('input')
                  .val();
                //如果答案 和界面values 相同，那么则选中；
                if (CheckValue == strAnswerMultiOption) {
                  $('#item' + i)
                    .find('input')
                    .prop('checked', 'checked');
                }
              }
            }
          } else {
            let arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];

            const strWhereAnswer = "questionId='" + strQuestionId + "' order by optionIndex asc";
            //获取获取题目选项库
            arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstAsync(strWhereAnswer);
            //排序
            const arrQuestionOptionsObjLst1 = arrQuestionOptionsObjLst.sort((x) =>
              x.GetFldValue(clsQuestionOptionsEN.con_OptionIndex),
            );

            //需要拆分获取；
            let strs = new Array(); //定义一数组
            strs = answerMultiOption.split('|'); //字符分割
            let k = 0;
            for (let i = 0; i < strs.length; i++) {
              k++;
              //分割后的字符输出
              const strAnswerMultiOption = strs[i];
              //查找对应的选项；
              //循环答案选项 得到界面对应的控件ID 然后把值赋给该控件；
              //循环有几个选项；
              for (let i = 0; i < arrQuestionOptionsObjLst1.length; i++) {
                //获取checkvalue值；指定指定ID属性查询得到
                const CheckValue = $('#item' + i)
                  .find('input')
                  .val();
                //如果答案 和界面values 相同，那么则选中；
                if (CheckValue == strAnswerMultiOption) {
                  $('#item' + i)
                    .find('input')
                    .prop('checked', 'checked');
                }
              }
            }
          }
          break;
        case enumQuestionType.ShortAnswer_10: //简答题
          //查找答案表获取答案数 得到ID ；
          strWhereAnswer = "questionId='" + strQuestionId + "' order by answerIndex asc";
          arrAnswerObjLst = await Answer_GetObjLstAsync(strWhereAnswer);
          strAnswerText = objUserAnswerResult.answerText;
          const strCtrlId = Format('Answer_User{0}', strQuestionId);
          const txtAnswer_User = <HTMLTextAreaElement>document.getElementById(strCtrlId);
          if (txtAnswer_User == null) {
            strMsg = Format(
              '根据CtrlId:[{0}]问题文本框(txtAnswer_User)为空.(in {1}.{2})',
              strCtrlId,
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          //const strCtrlId_Scores = Format("Answer_Scores{0}", strQuestionId);
          //const spnAnswer_Scores = <HTMLSpanElement>document.getElementById(strCtrlId);
          //if (spnAnswer_Scores != null) {
          //    spnAnswer_Scores.innerHTML = Format("({0}分)", objge_StuBatchQuesRela.scores);
          //}
          txtAnswer_User.value = strAnswerText; //其他类型问题答案；
          //if (arrAnswerObjLst.length > 0) {
          //    const strCtrlId_Right = Format("Answer_Right{0}", strQuestionId);
          //    const txtAnswer_Right = <HTMLTextAreaElement>document.getElementById(strCtrlId);
          //    if (txtAnswer_Right == null) {
          //        strMsg = Format("根据CtrlId:[{0}]问题文本框(txtAnswer_Right)为空.(in {1}.{2})",
          //            strCtrlId, this.constructor.name, strThisFuncName);
          //        console.error(strMsg);
          //        alert(strMsg);
          //        return;
          //    }
          //    txtAnswer_Right.value = arrAnswerObjLst[0].answerContent;//其他类型问题答案；
          //}
          //需要拆分获取；
          break;

        case enumQuestionType.SingleChoice_02:
          //其他题型
          const strAnswerOptionId = objUserAnswerResult.answerOptionId;

          //答案选项不等于0个；
          if (intQuestionOptionNum != 0) {
            //循环有几个选项；
            for (let i = 0; i < intQuestionOptionNum; i++) {
              //获取checkvalue值；指定指定ID属性查询得到
              const CheckValue = $('#item' + i)
                .find('input')
                .val();
              //如果答案 和界面values 相同，那么则选中；
              if (CheckValue == strAnswerOptionId) {
                $('#item' + i)
                  .find('input')
                  .prop('checked', 'checked');
              }
            }
          } else {
            const strWhereAnswer = "questionId='" + strQuestionId + "' order by optionIndex asc";
            //获取获取题目选项库
            const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstAsync(strWhereAnswer);

            //排序
            const arrQuestionOptionsObjLst1 = arrQuestionOptionsObjLst.sort((x) =>
              x.GetFldValue(clsQuestionOptionsEN.con_OptionIndex),
            );

            //循环有几个选项；
            for (let i = 0; i < arrQuestionOptionsObjLst1.length; i++) {
              //获取checkvalue值；指定指定ID属性查询得到
              const CheckValue = $('#item' + i)
                .find('input')
                .val();
              //如果答案 和界面values 相同，那么则选中；
              if (CheckValue == strAnswerOptionId) {
                $('#item' + i)
                  .find('input')
                  .prop('checked', 'checked');
              }
            }
          }

          break;
        default:
          const objQuestionType = await QuestionType_GetObjByQuestionTypeIdCache(strQuestionTypeId);
          if (objQuestionType == null) {
            strMsg = Format(
              '根据问题类型Id获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          strMsg = Format(
            '问题类型:{0}({1})在Switch中没有被处理.(in {2}.{3})',
            objQuestionType.questionTypeName,
            strQuestionTypeId,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          break;
      }
      //这里显示判断如果是查看上次，那么则判断答案表结果是否正确，；显示提示label标签；
      const strHistory = this.challengeMode;
      if (strHistory == '1') {
        //查看上次才显示题目回答正确错误；
        if (objUserAnswerResult.isRight == true) {
          $('#isCorrect' + strQuestionId).show();
          $('#isCorrect' + strQuestionId).html('【正确】');
        } else {
          $('#isCorrect' + strQuestionId).show();
          $('#isCorrect' + strQuestionId).html('【错误】');
        }
      }
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //点击题目下一题切换时 调用扩展函数；
  //public async AddOrUpdUserAnswerResult(QuestionId: number, questionOptionId: string, MarkType: string) {
  public async AddOrUpdUserAnswerResult(
    QuestionId: number,

    strQuestionTypeId: string,
  ): Promise<boolean> {
    const strThisFuncName = this.AddOrUpdUserAnswerResult.name;
    const strChallengeMode = this.challengeMode;
    try {
      const userStore = useUserStore();
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const userId = userStore.userId;
      const examBatchNo = this.examBatchNo;

      //声明参数数组接收值；
      let strcheckboxAnser: string = ''; //得到多选答案组合
      let strQuestionId: number = 0; //得到题目id
      let strAnswer: string = ''; //其他问题类型答案；
      // 转化去掉首尾字符；
      const ArrayAnswer = PassGame_Recommend.arrCheckQues;
      //声明类型变量参数，用来判断题型；
      let strType: string = '';
      switch (strQuestionTypeId) {
        case enumQuestionType.FillInBlank_01: //填空题
        case enumQuestionType.SingleChoice_02: //单选题
        case enumQuestionType.MultipleChoice_03: //多选题
        case enumQuestionType.OperationQuestions_09: //操作题
        case enumQuestionType.TrueorFalse_11: //判别题
          if (ArrayAnswer.length > 0) {
            for (let i = 0; i < ArrayAnswer.length; i++) {
              strType = '';
              strQuestionId = ArrayAnswer[i].examId; //题目Id
              if (strQuestionId != QuestionId) continue;
              strType = ArrayAnswer[i].type; //获取类型
              strAnswer = ArrayAnswer[i].answer; //其他类型问题答案；
              //判断type类型、多选、问答对应不同的数据库字段信息
              if (strType == 'checkbox' || strType == 'text') {
                strcheckboxAnser = '';
                //当如果是checkbox时候 一个题目可能出现多个选项问题；所以需要把所有答案组合；
                for (let j = 0; j < ArrayAnswer.length; j++) {
                  //如果存在相同的ID，那么把多选答案组合；
                  if (strQuestionId == ArrayAnswer[j].examId) {
                    strcheckboxAnser += ArrayAnswer[j].answer + '|';
                  }
                }
                //MarkType是用来区分是点击提交按钮，或是其他按钮点击区别：提交按钮（值:2）提交 会进行总分核算；其他按钮传入（值：1）
                const returnDbl = await UserAnswerResultEx_AddOrUpdateRecord(
                  userId,
                  examBatchNo,
                  QuestionId,
                  idCurrEduCls,
                  strcheckboxAnser,
                );
                if (returnDbl >= 0.0) {
                  console.log('完成答案存放成功');
                } else {
                  console.log('答案存放失败-10!');
                }
              } else {
                //MarkType是用来区分是点击提交按钮，或是其他按钮点击区别：提交按钮（值:2）提交 会进行总分核算；其他按钮传入（值：1）
                let returnDbl = await UserAnswerResultEx_AddOrUpdateRecord(
                  userId,
                  examBatchNo,
                  QuestionId,
                  idCurrEduCls,
                  strAnswer,
                );
                if (returnDbl >= 0.0) {
                  console.log('完成答案存放成功');
                } else {
                  console.log('答案存放失败-11!');
                }
              }
            }
          }
          break;
        case enumQuestionType.ShortAnswer_10: //简答题
          const strCtrlId = Format('Answer_User{0}', QuestionId);
          const txtAnswer_User = <HTMLTextAreaElement>document.getElementById(strCtrlId);
          if (txtAnswer_User == null) {
            const strMsg = Format(
              '根据CtrlId:[{0}]问题文本框(txtQuestion)为空.(in {1}.{2})',
              strCtrlId,
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return false;
          }
          strAnswer = txtAnswer_User.value; //其他类型问题答案；

          //MarkType是用来区分是点击提交按钮，或是其他按钮点击区别：提交按钮（值:2）提交 会进行总分核算；其他按钮传入（值：1）
          const returnDbl = await UserAnswerResultEx_AddOrUpdateRecord(
            userId,
            examBatchNo,
            QuestionId,
            idCurrEduCls,
            strAnswer,
          );
          if (returnDbl >= 0.0) {
            console.log('完成答案存放成功');
          } else {
            console.log('答案存放失败-12!');
          }

          // const responseText1 = await this.SeachUserResultAnswer(QuestionId, vType,0);

          break;
        default:
          const objQuestionType = await QuestionType_GetObjByQuestionTypeIdCache(strQuestionTypeId);
          if (objQuestionType == null) {
            const strMsg = Format(
              '根据问题类型Id获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return false;
          }
          const strMsg = Format(
            '问题类型:{0}({1})在Switch中没有被处理.(in {2}.{3})',
            objQuestionType.questionTypeName,
            strQuestionTypeId,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          break;
      }
      //循环数组数据
      //判断数据是否大于0
      return true;
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
      return false;
    }
  }

  /*答题卡*/
  public answerCard(arrQuestions: Array<clsQuestionnaireEN>) {
    //questions = questions;
    //questions = eval(questions)
    $('.question_sum').text(arrQuestions.length);
    for (let i = 0; i < arrQuestions.length; i++) {
      const questionId =
        "<li id='ques" +
        i +
        "'onclick='saveQuestionState(" +
        i +
        ")' class='questionId'>" +
        (i + 1) +
        '</li>';
      $('#answerCard ul').append(questionId);
    }
  }
  //public clickTrim(source) {
  public clickTrim(strCtrlId: string) {
    //const id = source.id;
    const divQuestionContent = <HTMLDivElement>document.getElementById('divQuestionContent');
    const examId = Number(
      $('#' + strCtrlId)
        .find('input[name=item]')
        .attr('id'),
    );
    let ques = 0;

    //const type = $(this).attr("data-type");

    //如果是checkbox那么就不用限定单选规则；
    const type = $('#' + strCtrlId)
      .find('input[name=item]')
      .attr('type');
    switch (type) {
      case 'checkbox':
        //先判断通过id获取到checkbox状态是否勾选；
        if (
          $('#' + strCtrlId)
            .find('input[name=item]:checked')
            .is(':checked')
        ) {
          $('#' + strCtrlId)
            .find('input')
            .prop('checked', false);
          //去掉答题卡颜色
          $('#ques' + PassGame_Recommend.intActiveQuestion)
            .removeClass('question_id')
            .addClass('clickQue'); //答题卡
          $('#' + strCtrlId).removeClass('clickTrim');
          //判断是否还有勾选的checkbox，如果没有那么去掉答题卡的颜色
          // if ($("#" + id).find("input[name=item]:checked").length > 0) {
          if ($('input[type=checkbox]:checked').length > 0) {
            // $("#ques" + PassGame_Recommend.intActiveQuestion).removeClass("question_id").addClass("clickQue");//答题卡
          } else {
            $('#ques' + PassGame_Recommend.intActiveQuestion)
              .removeClass('question_id')
              .removeClass('clickQue'); //答题卡
            // $("#" + id).removeClass("clickTrim");
          }
          //去掉勾选复选框后，同时需要去掉二维数组中 该答案的值；
          for (let i = 0; i < PassGame_Recommend.arrCheckQues.length; i++) {
            //循环当前数组答案
            //判断如果Id相同时候
            //                        if (PassGame_Recommend.arrCheckQues[i].id == PassGame_Recommend.intActiveQuestion && PassGame_Recommend.arrCheckQues[i].item == strCtrlId) {
            if (
              i == PassGame_Recommend.intActiveQuestion &&
              PassGame_Recommend.arrCheckQues[i].item == strCtrlId
            ) {
              //const strItem = "ItemNo";
              PassGame_Recommend.arrCheckQues.splice(i, 1);
            }
          }
        } else {
          ////判断是否还有勾选的checkbox，如果没有那么去掉答题卡的颜色
          //if ($("#" + id).find("input[name=item]:checked“).length > 0) {
          //没有勾选时候，变成勾选状态，同时判断该答案是否已经存在数组中，如果
          $('#' + strCtrlId)
            .find('input')
            .prop('checked', 'checked');
          $('#' + strCtrlId).addClass('clickTrim');
          $('#ques' + PassGame_Recommend.intActiveQuestion)
            .removeClass('question_id')
            .addClass('clickQue'); //答题卡
          if (
            PassGame_Recommend.arrCheckQues.length == 0 ||
            (PassGame_Recommend.intQuestion != PassGame_Recommend.intActiveQuestion &&
              PassGame_Recommend.intActiveQuestion != ques)
          ) {
            const check = new clsCheck();
            check.examId = examId ?? ''; //获取当前题目ID；
            check.id = PassGame_Recommend.intActiveQuestion; //获取当前考题的编号
            check.item = strCtrlId; //获取当前考题的选项ID
            // check.answer =
            //   $('#' + strCtrlId)
            //     .find('input[name=item]:checked')
            //     .val() ?? ''; //获取当前考题的选项值
            check.answer = getCheckValueInDivObj(this.thisDivLayout, strCtrlId).toString();
            check.type = type; //存放类型；
            PassGame_Recommend.arrCheckQues.push(check);
          } else {
            //点击勾选checkbox 时候需要判断是否存在此值，不存在则需要插入；
            const arrCheckId = PassGame_Recommend.arrCheckQues.map((x) => x.id);

            if (PassGame_Recommend.arrCheckQues.indexOf(new clsCheck()) > -1) {
              //则包含该元素
            } else {
              let check = new clsCheck();
              check.examId = examId ?? ''; //获取当前题目ID；
              check.id = PassGame_Recommend.intActiveQuestion; //获取当前考题顺序的编号
              check.item = strCtrlId; //获取当前考题的选项ID
              // check.answer =
              //   $('#' + strCtrlId)
              //     .find('input[name=item]:checked')
              //     .val() ?? ''; //获取当前考题的选项值
              check.answer = getCheckValueInDivObj(this.thisDivLayout, strCtrlId).toString();
              check.type = type; //存放类型；
              PassGame_Recommend.arrCheckQues.push(check);
            }
          }
        }
        break;
      case 'radio':
        $('#' + strCtrlId)
          .find('input')
          .prop('checked', 'checked');
        $('#' + strCtrlId).addClass('clickTrim');
        $('#ques' + PassGame_Recommend.intActiveQuestion)
          .removeClass('question_id')
          .addClass('clickQue'); //答题卡
        for (let i = 0; i < PassGame_Recommend.arrCheckQues.length; i++) {
          if (
            PassGame_Recommend.arrCheckQues[i].id == PassGame_Recommend.intActiveQuestion &&
            PassGame_Recommend.arrCheckQues[i].item != strCtrlId
          ) {
            ques = PassGame_Recommend.arrCheckQues[i].id;
            PassGame_Recommend.arrCheckQues[i].item = strCtrlId; //获取当前考题的选项ID

            PassGame_Recommend.arrCheckQues[i].answer = getCheckValueInDivObj(
              this.thisDivLayout,
              strCtrlId,
            ).toString();
          }
        }
        if (
          PassGame_Recommend.arrCheckQues.length == 0 ||
          (PassGame_Recommend.intQuestion != PassGame_Recommend.intActiveQuestion &&
            PassGame_Recommend.intActiveQuestion != ques)
        ) {
          let check = new clsCheck();
          check.examId = examId ?? ''; //获取当前题目ID；
          check.id = PassGame_Recommend.intActiveQuestion; //获取当前考题的顺序编号
          check.item = strCtrlId; //获取当前考题的选项ID

          const objCurrLi = GetLiObjInDivObj(this.thisDivLayout, strCtrlId);
          const objInput = objCurrLi.firstChild as HTMLInputElement;
          check.answer = objInput.value;
          check.type = type; //存放类型；
          PassGame_Recommend.arrCheckQues.push(check);
        }
        const arrQuestionOptions = divQuestionContent.getElementsByClassName('question_infos');
        let intLength = arrQuestionOptions.length;
        for (let i = 0; i < intLength; i++) {
          const objQuestionOption = arrQuestionOptions[i];
          const otherId = objQuestionOption.id;
          if (otherId != strCtrlId) {
            $('#' + otherId)
              .find('input')
              .prop('checked', false);
            $('#' + otherId).removeClass('clickTrim');
          }
        }

        PassGame_Recommend.intQuestion = PassGame_Recommend.intActiveQuestion;
        break;
      default:
        const strMsg = '类型(type)：' + type + '没有被处理！';
        alert(strMsg);
        break;
    }
  }
  //获取input为文本时候的值 并保存
  public getInputTextValue() {
    //获取该类控件下指定Id 这里指题目ID组合item+题目号
    const divQuestionContent = <HTMLDivElement>document.getElementById('divQuestionContent');
    let examId = Number($('.question_infos').attr('id'));
    let id;
    if (examId != undefined) {
      //因为是文本框值，所以需要截取题目ID；
      // examId = examId.substring(4);

      //获取该类控件下指定类型
      //const type = $(".question_infos").find("input[name=item]").attr("type");
      const type = 'text';
      //获取指定样式下的类型是Text的所有文本框
      const InputsWrapper = $('.question_infos').find('input[type=text]');
      const y = InputsWrapper.length;

      //$("#textbox input[type='text']").each(function () {
      //    alert($(this).val())
      //});
      let strText = '';
      if (y > 0) {
        const arrQuestionOptions = divQuestionContent.getElementsByClassName('question_infos');
        let arrInput: Array<HTMLInputElement> = [];
        let intLength = arrQuestionOptions.length;
        for (let i = 0; i < intLength; i++) {
          const objQuestionOption = arrQuestionOptions[i];
          const arrInput_In = objQuestionOption.getElementsByTagName('input');
          if (arrInput_In != null) {
            for (let ii = 0; ii < arrInput_In.length; ii++) {
              arrInput.push(arrInput_In[ii]);
            }
          }
        }
        for (const objInput of arrInput) {
          //alert($(this).val())
          id = objInput.id; //获取当前文本框ID
          // const examId = $(".question_infos").find("input[name=item]").attr("id");
          strText = objInput.value; //获取文本值；
          // strText = y[i].text;

          let resultAnswer = '';
          $('#ques' + PassGame_Recommend.intActiveQuestion)
            .removeClass('question_id')
            .addClass('clickQue'); //答题卡样式

          //则包含该元素 循环数组
          for (let i = 0; i < PassGame_Recommend.arrCheckQues.length; i++) {
            //resultAnswer = "";
            if (
              PassGame_Recommend.arrCheckQues[i].id == PassGame_Recommend.intActiveQuestion &&
              PassGame_Recommend.arrCheckQues[i].item == id
            ) {
              resultAnswer = 'yes'; //存在此问题的答案

              PassGame_Recommend.arrCheckQues[i].answer = strText; //把当前答案赋值给数组；
            }
          }
          if (resultAnswer == '') {
            let check = new clsCheck();
            check.examId = examId; //获取当前题目ID；
            check.id = PassGame_Recommend.intActiveQuestion; //获取当前考题的编号
            check.item = id; //获取当前考题的选项ID
            check.answer = strText; //获取文本框的值；
            check.type = type; //存放类型；
            PassGame_Recommend.arrCheckQues.push(check);
          }
          //去掉文本框的样式
        }
      }
    }
  }
  public async btnSubmitQuestions_Click() {
    //调用判断文本框类型题目答案
    this.getInputTextValue();

    //进行下一题操作前，把当前数据存放到数据库；
    //去掉前后双引号
    //const newquestions = eval(questions)
    const objQuestion = PassGame_Recommend.arrQuestions_Curr[PassGame_Recommend.intActiveQuestion];
    const strQuestionId = objQuestion.questionId; //当前题目号；
    const strQuestionTypeId = objQuestion.questionTypeId;
    const userStore = useUserStore();
    //数组要大于0
    if (
      strQuestionTypeId == enumQuestionType.ShortAnswer_10 ||
      PassGame_Recommend.arrCheckQues.length > 0
    ) {
      let returnBool = await this.AddOrUpdUserAnswerResult(strQuestionId, strQuestionTypeId);

      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const strExamBatchNo = this.examBatchNo;
      const userId = userStore.userId;
      const objPageGame = new PassGame_Recommend();

      if (returnBool == true) {
        const returnInt = await ge_UserCreditsLogEx_Addge_UserCreditsLog(
          PassGame_Recommend.gameLevelId_Static,
          strExamBatchNo,
          true,
          userId,
          idCurrEduCls,
        );

        if (returnInt >= 0) {
          console.error('添加用户闯关日志出错!');
          alert('添加用户闯关日志出错!');
          return;
        }
      }
      const objPage_MsgBox: TzMsgBoxEx = new TzMsgBoxEx(objPageGame);
      const strKeyId = PassGame_Recommend.gameLevelId_Static;
      objPage_MsgBox.btnShowMsgBox_Click(strKeyId, strExamBatchNo);
      //});
    } else {
      alert('请作答再提交');
    }
  }
  public async btnNextQuestion_Click() {
    const strThisFuncName = this.btnNextQuestion_Click.name;
    const strChallengeMode = this.challengeMode;
    //调用判断文本框类型题目答案
    this.getInputTextValue();

    //进行下一题操作前，把当前数据存放到数据库；
    //去掉前后双引号
    //questions = eval(questions)
    const objQuestion = PassGame_Recommend.arrQuestions_Curr[PassGame_Recommend.intActiveQuestion];
    const strQuestionId = objQuestion.questionId; //当前题目号；
    const strQuestionTypeId = objQuestion.questionTypeId; //题目类型；
    ////获得题目选项；
    let strMsg = '';
    let strAnswer = '';
    switch (strQuestionTypeId) {
      case enumQuestionType.FillInBlank_01: //填空题

      case enumQuestionType.SingleChoice_02: //单选题
      case enumQuestionType.MultipleChoice_03: //多选题

      case enumQuestionType.OperationQuestions_09: //操作题

      case enumQuestionType.ShortAnswer_10: //简答题
      case enumQuestionType.TrueorFalse_11: //判别题
        break;

      default:
        const objQuestionType = await QuestionType_GetObjByQuestionTypeIdCache(strQuestionTypeId);
        if (objQuestionType == null) {
          strMsg = Format(
            '根据问题类型Id获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strMsg = Format(
          '问题类型:{0}({1})在Switch中没有被处理.(in {2}.{3})',
          objQuestionType.questionTypeName,
          strQuestionTypeId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }

    //下一题 值为1；

    if (strChallengeMode != enumChallengeMode.ViewLast_01) {
      await this.AddOrUpdUserAnswerResult(strQuestionId, strQuestionTypeId);
    }
    //当前操作的题号
    if (PassGame_Recommend.intActiveQuestion + 1 != PassGame_Recommend.arrQuestions_Curr.length) {
      PassGame_Recommend.intActiveQuestion = PassGame_Recommend.intActiveQuestion + 1;
      switch (strChallengeMode) {
        case enumChallengeMode.ViewLast_01:
          await this.showQuestion_ViewLast(
            PassGame_Recommend.intActiveQuestion,
            this.examBatchNo,
            PassGame_Recommend.arrQuestions_Curr,
          );
          break;
        case enumChallengeMode.StartGame_02:
          await this.showQuestion_StartGame(
            PassGame_Recommend.intActiveQuestion,
            this.examBatchNo,
            PassGame_Recommend.arrQuestions_Curr,
          );
          break;
        case enumChallengeMode.ContinuePass_03:
          await this.showQuestion_ContinuePass(
            PassGame_Recommend.intActiveQuestion,
            this.examBatchNo,
            PassGame_Recommend.arrQuestions_Curr,
          );
          break;
        default:
          strMsg = Format(
            '挑战模式：{0}没有被处理！(in {1}.{2})',
            strChallengeMode,
            this.constructor.name,
            strThisFuncName,
          );
          alert(strMsg);
          return;
          break;
      }
    } else {
      alert('已经是最后一题');
      //showQuestion(PassGame_Recommend.intActiveQuestion, questions)
    }
    //去掉填空题文本框样式
    $(".question_infos input[type='text']").removeClass('clickTrim');
  }

  public async btnUpQuestion_Click() {
    const strThisFuncName = this.btnUpQuestion_Click.name;
    const strChallengeMode = this.challengeMode;
    //调用判断文本框类型题目答案
    this.getInputTextValue();
    //进行下一题操作前，把当前数据存放到数据库；
    //去掉前后双引号
    //questions = eval(questions)
    const objQuestion = PassGame_Recommend.arrQuestions_Curr[PassGame_Recommend.intActiveQuestion];
    const vQuestionId = objQuestion.questionId; //当前题目号；
    const strQuestionTypeId = objQuestion.questionTypeId; //题目类型；

    if (PassGame_Recommend.arrCheckQues.length > 0) {
      //require(["../js/Web/PassGame_Recommend.js"], function (index) {
      //上一题 值为1；
      const markType = '1';

      //const objPage = new PassGame_Recommend();
      if (strChallengeMode == enumChallengeMode.ViewLast_01) {
        this.AddOrUpdUserAnswerResult(vQuestionId, strQuestionTypeId);
      }
      //});
    }

    //当前操作题号，如果为0，则提示
    if (PassGame_Recommend.intActiveQuestion == 0) {
      alert('已经是第一题');
    } else {
      switch (strChallengeMode) {
        case enumChallengeMode.ViewLast_01:
          this.showQuestion_ViewLast(
            PassGame_Recommend.intActiveQuestion - 1,
            this.examBatchNo,
            PassGame_Recommend.arrQuestions_Curr,
          );
          break;
        case enumChallengeMode.StartGame_02:
          this.showQuestion_StartGame(
            PassGame_Recommend.intActiveQuestion - 1,
            this.examBatchNo,
            PassGame_Recommend.arrQuestions_Curr,
          );
          break;
        case enumChallengeMode.ContinuePass_03:
          this.showQuestion_ContinuePass(
            PassGame_Recommend.intActiveQuestion - 1,
            this.examBatchNo,
            PassGame_Recommend.arrQuestions_Curr,
          );
          break;
        default:
          const strMsg = Format(
            '挑战模式：{0}没有被处理！(in {1}.{2})',
            strChallengeMode,
            this.constructor.name,
            strThisFuncName,
          );
          alert(strMsg);
          return;
          break;
      }
    }
    //去掉填空题文本框样式
    $(".question_infos input[type='text']").removeClass('clickTrim');
  }

  public async Getge_UserCreditsOrderByEduCls() {
    const strThisFuncName = this.Getge_UserCreditsOrderByEduCls.name;
    const userStore = useUserStore();
    const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
    const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;

    //获取当前登录用户的闯关分数；
    let strWhereCond = " idCurrEduCls='" + strid_CurrEducls + "'";
    const ulPaperReportTreeBind = GetUlObjInDivObj(this.thisDivLayout, 'PaperReportTreeBind');

    //闯关纪录分数
    let arrge_UserLevelScoreObjLst: Array<clsge_UserLevelScoreEN> = [];
    //关卡数量
    let arrge_GameLevelObjLst: Array<clsge_GameLevelEN> = [];

    try {
      //获取当前教学班 每个人 、各个关卡 最佳纪录；
      //arrge_UserCreditsLogObjLst = await ge_UserCreditsLogEx_Getge_UserCreditsRankLstEx(strWhereCond);
      arrge_UserLevelScoreObjLst = await ge_UserLevelScore_GetObjLstAsync(strWhereCond);

      ////获取总关卡数；
      //const responseText2 = await ge_StuBatchQuesRelaEx_GetLevelNoByCourseIdEx(strCourseId);
      //const strGuanqia: number = Number(responseText2);

      strWhereCond = " idCurrEduCls='" + strid_CurrEducls + "' And inUse='true'";
      //获取当前教学班 关卡
      arrge_GameLevelObjLst = await ge_GameLevel_GetObjLstAsync(strWhereCond);

      let k = 0;
      //循环关卡数
      for (let i = 0; i < arrge_GameLevelObjLst.length; i++) {
        k++;
        const objge_GameLevel = arrge_GameLevelObjLst[i];
        const strGameLevelId = arrge_GameLevelObjLst[i].gameLevelId;
        const strGameLevelName = arrge_GameLevelObjLst[i].gameLevelName;
        //接收过滤得到的当前用户的闯关分数
        const arrge_UserLevelScoreObjLst1 = arrge_UserLevelScoreObjLst.filter(
          (x) => x.userId == strUserId && x.gameLevelId == strGameLevelId,
        );

        if (arrge_UserLevelScoreObjLst1.length != 0) {
          //通过当前用户数据，比对其他人分数和关卡 进行排名
          for (let j = 0; j < arrge_UserLevelScoreObjLst1.length; j++) {
            const objge_UserLevelScore = arrge_UserLevelScoreObjLst1[j];
            const strGameLevelId = arrge_UserLevelScoreObjLst1[j].gameLevelId;
            const Credits1 = arrge_UserLevelScoreObjLst1[j].credits;
            //得到等级、得到分数；
            //排名
            let IndexNumber = 0;
            const arrSysScoreSummaryObjLst2 = arrge_UserLevelScoreObjLst.filter(
              (x) => x.gameLevelId == strGameLevelId && x.credits > Credits1,
            );
            //大于0 ，说明有高于当前用户的分数记录
            if (arrSysScoreSummaryObjLst2.length > 0) {
              IndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表自己当前排名
            } else {
              IndexNumber = 1; //1代表当前排名，数据没大于0 ，那么说明当前用户就是第一名；
            }
            const liItem = GetLi_Empty('nav-item');
            liItem.id = `li${objge_UserLevelScore.gameLevelId}_${objge_UserLevelScore.userId}`;

            (function (strGameLevelId) {
              liItem.onclick = function () {
                btnChallengeClick(strGameLevelId, liItem);
              };
            })(strGameLevelId);
            // '<a class="nav-link active" data-toggle="pill" style="float:left;" href = "#" title = "12" >';
            const objA = GetA_Empty('nav-link');

            objA.setAttribute('data-toggle', 'pill');
            objA.style.float = 'left';
            objA.href = 'javascript:void(0)';
            objA.title = '12';
            objA.innerHTML = `${strGameLevelName} 排名：${IndexNumber}`;

            liItem.appendChild(objA);
            if (k == 1) objA.classList.add('active');
            ulPaperReportTreeBind.appendChild(liItem);
            // if (k == 1) {
            //   strhtml +=
            //     '<li id="" class="nav-item" onclick = btnChallengeClick("' +
            //     strGameLevelId +
            //     '") >';

            //   strhtml +=
            //     '<a class="nav-link active" data-toggle="pill" style="float:left;" href = "#" title = "12" >';
            //   strhtml += strGameLevelName + '  排名：' + IndexNumber + ' </a>';
            //   strhtml += ' </li>';
            // } else {
            //   strhtml +=
            //     '<li id="" class="nav-item" onclick = btnChallengeClick("' +
            //     strGameLevelId +
            //     '") >';

            //   strhtml +=
            //     '<a class="nav-link" data-toggle="pill" style="float:left;" href = "#" title = "12" >';
            //   strhtml += strGameLevelName + '  排名：' + IndexNumber + ' </a>';
            //   strhtml += ' </li>';
            // }
          }
        } else {
          const liItem = GetLi_Empty('nav-item');
          liItem.id = `li${objge_GameLevel.gameLevelId}`;

          (function (strGameLevelId) {
            liItem.onclick = function () {
              btnChallengeClick(strGameLevelId, liItem);
            };
          })(strGameLevelId);
          // '<a class="nav-link active" data-toggle="pill" style="float:left;" href = "#" title = "12" >';
          const objA = GetA_Empty('nav-link');

          objA.setAttribute('data-toggle', 'pill');
          objA.style.float = 'left';
          objA.href = 'javascript:void(0)';
          objA.title = '12';
          objA.innerHTML = `${strGameLevelName} 排名：排名：未闯关`;

          liItem.appendChild(objA);
          if (k == 1) objA.classList.add('active');
          ulPaperReportTreeBind.appendChild(liItem);
          // if (k == 1) {
          //   //还没闯关；
          //   strhtml +=
          //     '<li id="" class="nav-item" onclick = btnChallengeClick("' + strGameLevelId + '") >';

          //   strhtml +=
          //     '<a class="nav-link active" data-toggle="pill" style="float:left;" href = "#" title = "12" >';
          //   strhtml += strGameLevelName + '  排名：未闯关 </a>';
          //   strhtml += ' </li>';
          // } else {
          //   //还没闯关；
          //   strhtml +=
          //     '<li id="" class="nav-item" onclick = btnChallengeClick("' + strGameLevelId + '") >';

          //   strhtml +=
          //     '<a class="nav-link" data-toggle="pill" style="float:left;" href = "#" title = "12" >';
          //   strhtml += strGameLevelName + '  排名：未闯关 </a>';
          //   strhtml += ' </li>';
          // }
        }
      }

      //拼接；
      // $('#PaperReportTreeBind').html(strhtml);

      //调用班级总分
      const objge_UserCreditsTtl_ListEx = new ge_UserCreditsTtl_ListEx();
      await objge_UserCreditsTtl_ListEx.PageLoad();
      await objge_UserCreditsTtl_ListEx.BindGv_ge_UserCreditsTtl4Func(this.thisDivList);

      console.log('完成Getge_UserCreditsOrderByEduCls!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }
  //6游戏闯关关卡展示
  public async Show_GameChallenge() {
    const strThisFuncName = this.Show_GameChallenge.name;
    const userStore = useUserStore();
    const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
    const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;

    //获取当前登录用户的闯关分数；
    //只查询使用中的关卡

    const strWhereCond = " idCurrEduCls='" + strid_CurrEducls + "' And inUse='true'";

    //关卡数
    let arrge_GameLevelObjLst: Array<clsge_GameLevelEN> = [];
    let arrge_GameLevelExObjLst: Array<clsge_GameLevelENEx> = [];
    //上一次闯关结果
    let arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    const divGameLevelLst = GetDivObjInDivObj(divVarSet.refDivLayout, 'divGameLevelLst');
    try {
      let strWhere_StuBatchQues = `${clsge_StuBatchQuesRelaEN.con_UserId}='${strUserId}'`;
      strWhere_StuBatchQues += ` and ${clsge_StuBatchQuesRelaEN.con_IsRecommend}='1'`;
      strWhere_StuBatchQues += ` and ${clsge_StuBatchQuesRelaEN.con_IsSubmit}='0'`;
      const arrge_StuBatchQuesRela = await ge_StuBatchQuesRela_GetObjLstAsync(
        strWhere_StuBatchQues,
      );
      if (arrge_StuBatchQuesRela.length == 0) {
        const strMsg = `用户:${strUserId}当前没有推荐的题目！`;
        alert(strMsg);
        return;
      }
      //获取当前教学班 关卡
      arrge_GameLevelObjLst = await ge_GameLevel_GetObjLstAsync(strWhereCond);
      arrge_GameLevelObjLst = arrge_GameLevelObjLst.sort((x, y) => x.orderNum - y.orderNum);
      arrge_GameLevelExObjLst = arrge_GameLevelObjLst.map(this.CopyToExge_GameLevel);
      for (const objInFor of arrge_GameLevelExObjLst) {
        await this.FuncMapge_GameLevel(objInFor);
      }

      const arrQuestionnaire = await Questionnaire_GetObjLstAsync(
        `courseId='${clsPubLocalStorage.courseId}'`,
      );

      let strChallengeMode = '';
      for (let i = 0; i < arrge_GameLevelExObjLst.length; i++) {
        const objge_GameLevelEx = arrge_GameLevelExObjLst[i];
        if (objge_GameLevelEx.isRecommend == false) continue;
        const arrge_StuBatchQuesRela_Sel = arrge_StuBatchQuesRela.filter(
          (x) => x.gameLevelId == objge_GameLevelEx.gameLevelId,
        );
        const intQuestionNum = arrge_StuBatchQuesRela_Sel.length;
        if (intQuestionNum == 0) continue;
        //    //参数、用户、教学班、关卡号；
        //difficultyLevelId 等级难度,questionTypeId	题目类型,questionNum,题目数
        const strDifficultyLevelId = objge_GameLevelEx.difficultyLevelId;
        const strQuestionTypeId = objge_GameLevelEx.questionTypeId;
        const strQuestionNum = intQuestionNum;
        const strGameLevelName = objge_GameLevelEx.gameLevelName; //关卡名称
        const strGameLevelId = objge_GameLevelEx.gameLevelId;
        const strLevelModeTypeId = objge_GameLevelEx.levelModeTypeId;

        const strCurrDateTime = clsPubFun4Web.getNowDate();

        const strStartTime = objge_GameLevelEx.startTime;
        const strEndTime = objge_GameLevelEx.endTime;

        if (strStartTime != '' && strEndTime != '') {
          if (strStartTime < strCurrDateTime && strEndTime > strCurrDateTime) {
            //如果是当前时间段内的关卡就不处理
          } else {
            continue;
            //如果不在当前这个时间段内的就跳出当前循环，继续下一个循环
          }
        }
        const strChapterName = await ge_ExaminationCriteriaEx_GetChapterNameByGameLevelIdEx(
          strGameLevelId,
        );

        let intQuestionNum_CanSel = intQuestionNum;
        //strhtml += '<li class="icon-1">';
        // const objLi = GetLi_Empty('icon-1');
        const divSub = GetDiv_Empty('subDiv');
        const div4Li = GetDiv_Empty('icon-1');
        div4Li.style.width = '100%';
        // div4Li.style.minHeight = '120px';
        const divGameLevelName = GetDiv_Empty('');
        divGameLevelName.style.width = '100%';
        const lblGameLevelName = GetLabel_Empty('');
        lblGameLevelName.innerText = strGameLevelName;

        //strhtml += '<div><label>' + strGameLevelName + ' </label></div>';
        divGameLevelName.appendChild(lblGameLevelName);

        const objDiv_GameLevel = GetDiv_Empty('');
        objDiv_GameLevel.style.float = 'left';
        objDiv_GameLevel.style.textAlign = 'left';
        objDiv_GameLevel.style.width = '100%';
        // objDiv_GameLevel.style.minHeight = '70px';
        //        objDiv_GameLevel.style.marginTop = '-40px';
        objDiv_GameLevel.style.marginTop = '10px';

        //strhtml += '<div style="float:left;text-align:left;width:100%;margin-top:-40px;" >';
        const divDifficultyLevel = GetDiv_Empty('');
        divDifficultyLevel.style.float = 'left';
        divDifficultyLevel.style.width = '50%';
        const spnDifficultyLevel0 = GetSpan_Empty('myTitle');
        spnDifficultyLevel0.style.display = 'inline';
        spnDifficultyLevel0.innerHTML = '等级：';
        const spnDifficultyLevel1 = GetSpan_Empty('');
        spnDifficultyLevel1.style.display = 'inline';
        spnDifficultyLevel1.style.color = 'blue';
        spnDifficultyLevel1.innerHTML = objge_GameLevelEx.difficultyLevelName;
        divDifficultyLevel.appendChild(spnDifficultyLevel0);
        divDifficultyLevel.appendChild(spnDifficultyLevel1);
        objDiv_GameLevel.appendChild(divDifficultyLevel);
        //strhtml += '<div style="float:left;width:50%;" >';
        //strhtml += '<span style="display: inline;">等级：</span><span style="color:blue;display: inline;">'
        //    + objge_GameLevelEx.difficultyLevelName + '</span></div>';

        const divQuestionType = GetDiv_Empty('');
        divQuestionType.style.float = 'right';
        divQuestionType.style.width = '50%';
        const spnQuestionType0 = GetSpan_Empty('myTitle');
        spnQuestionType0.style.display = 'inline';
        spnQuestionType0.innerHTML = '类型：';
        const spnQuestionType1 = GetSpan_Empty('myContent');
        spnQuestionType1.style.display = 'inline';
        spnQuestionType1.style.color = 'blue';
        spnQuestionType1.innerHTML = objge_GameLevelEx.questionTypeName;
        divQuestionType.appendChild(spnQuestionType0);
        divQuestionType.appendChild(spnQuestionType1);
        objDiv_GameLevel.appendChild(divQuestionType);
        //strhtml += '<div style = "float:right;width:50%;" >';
        //strhtml += '<span style="display: inline;">类型：</span><span style="color:blue;display: inline;">' + objge_GameLevelEx.questionTypeName + ' </span></div>';

        const divLevelModeType = GetDiv_Empty('');
        divLevelModeType.style.float = 'left';
        divLevelModeType.style.width = '50%';
        const spnLevelModeType0 = GetSpan_Empty('myTitle');
        spnLevelModeType0.style.display = 'inline';
        spnLevelModeType0.innerHTML = '等级：';
        const spnLevelModeType1 = GetSpan_Empty('myContent');
        spnLevelModeType1.style.display = 'inline';
        spnLevelModeType1.style.color = 'blue';
        spnLevelModeType1.innerHTML = objge_GameLevelEx.levelModeTypeName;
        divLevelModeType.appendChild(spnLevelModeType0);
        divLevelModeType.appendChild(spnLevelModeType1);
        objDiv_GameLevel.appendChild(divLevelModeType);
        //strhtml += '<div style = "float:left;width:50%;" >';
        //strhtml += '<span style="display: inline;">模式：</span><span style="color:blue;display: inline;">'
        //    + objge_GameLevelEx.levelModeTypeName + ' </span></div>';
        const divQuestionNum = GetDiv_Empty('');
        divQuestionNum.style.float = 'right';
        divQuestionNum.style.width = '50%';
        const spnQuestionNum0 = GetSpan_Empty('myTitle');
        spnQuestionNum0.style.display = 'inline';
        spnQuestionNum0.innerHTML = '题数：';
        const spnQuestionNum1 = GetSpan_Empty('myContent');
        spnQuestionNum1.style.display = 'inline';
        spnQuestionNum1.style.color = 'blue';
        spnQuestionNum1.innerHTML = strQuestionNum.toString();
        const spnQuestionNum_CanSel0 = GetSpan_Empty('myTitle');
        spnQuestionNum_CanSel0.style.display = 'inline';
        spnQuestionNum_CanSel0.innerHTML = '可选题数：';
        const spnQuestionNum_CanSel1 = GetSpan_Empty('myContent');
        spnQuestionNum_CanSel1.style.display = 'inline';
        spnQuestionNum_CanSel1.style.color = 'red';
        spnQuestionNum_CanSel1.innerHTML = intQuestionNum_CanSel.toString();

        divQuestionNum.appendChild(spnQuestionNum0);
        divQuestionNum.appendChild(spnQuestionNum1);
        divQuestionNum.appendChild(spnQuestionNum_CanSel0);
        divQuestionNum.appendChild(spnQuestionNum_CanSel1);
        objDiv_GameLevel.appendChild(divQuestionNum);
        //strhtml += '<div style = "float:right;width:50%;" >';
        //strhtml += '<span style="display: inline;">题数：</span><span style="color:blue;display: inline;">'
        //    + strQuestionNum + ' </span><span style="display: inline;"> 可选题数：</span><span style="color:red;display: inline;">'
        //    + intQuestionNum_CanSel + '</span ></div>';

        ////章节
        ////相关章节
        //const strWhere = "gameLevelId='" + strGameLevelId + "'";

        ////获取问题检查的对象列表数据源
        ////获取标准表的数据源
        //const strCourseId = clsPubLocalStorage.courseId;
        //const strChapterName = "";

        //const strWhere = "gameLevelId='" + strGameLevelId + "' And  courseId='" + strCourseId + "'";

        ////获取当得课程下，当前关卡 当前用户最后一次闯关
        //const strGameLeveWhere = "gameLevelId='" + strGameLevelId + "' And updUserId='" + strUserId + "' And courseId='" + strCourseId + "' order by updDate desc";
        ////是否提交，提交了则继续闯关，否则就继续闯关；
        const divRightNum = GetDiv_Empty('');
        divRightNum.style.float = 'left';
        divRightNum.style.width = '50%';
        const spnRightNum0 = GetSpan_Empty('myTitle');
        spnRightNum0.style.display = 'inline';
        spnRightNum0.innerHTML = '正确：';
        const spnRightNum1 = GetSpan_Empty('myContent');
        spnRightNum1.style.display = 'inline';
        spnRightNum1.style.color = 'blue';

        const divErrorNum = GetDiv_Empty('');
        divErrorNum.style.float = 'right';
        divErrorNum.style.width = '50%';
        const spnErrorNum0 = GetSpan_Empty('myTitle');
        spnErrorNum0.style.display = 'inline';
        spnErrorNum0.innerHTML = '错误：';
        const spnErrorNum1 = GetSpan_Empty('myContent');
        spnErrorNum1.style.display = 'inline';
        spnErrorNum1.style.color = 'blue';

        const divChapterNameSim = GetDiv_Empty('');
        divChapterNameSim.style.float = 'left';
        divChapterNameSim.style.width = '100%';
        const spnChapterNameSim0 = GetSpan_Empty('myTitle');
        spnChapterNameSim0.style.display = 'inline';
        spnChapterNameSim0.innerHTML = '章节：';
        const spnChapterNameSim1 = GetSpan_Empty('myContent');
        spnChapterNameSim1.style.display = 'inline';
        spnChapterNameSim1.style.color = 'blue';

        const divExamBatchNo = GetDiv_Empty('');
        divExamBatchNo.style.float = 'left';
        divExamBatchNo.style.width = '50%';
        const spnExamBatchNo0 = GetSpan_Empty('myTitle');
        spnExamBatchNo0.style.display = 'inline';
        spnExamBatchNo0.innerHTML = '批次：';
        const spnExamBatchNo1 = GetSpan_Empty('myContent');
        spnExamBatchNo1.style.display = 'inline';
        spnExamBatchNo1.style.color = 'blue';

        const divDateTimeSim = GetDiv_Empty('');
        divDateTimeSim.style.float = 'right';
        divDateTimeSim.style.width = '50%';
        const spnDateTimeSim0 = GetSpan_Empty('myTitle');
        spnDateTimeSim0.style.display = 'inline';
        spnDateTimeSim0.innerHTML = '时间：';
        const spnDateTimeSim1 = GetSpan_Empty('myContent');
        spnDateTimeSim1.style.display = 'inline';
        spnDateTimeSim1.style.color = 'blue';

        const divButton = GetDiv_Empty('mt-2');
        divButton.style.width = '100%';
        divButton.style.marginTop = '10px';
        const btnStartGame = GetButton_Empty('');
        btnStartGame.className = 'btn btn-primary';
        btnStartGame.innerHTML = '开始闯关';
        btnStartGame.style.float = 'right';
        strChallengeMode = enumChallengeMode.StartGame_02; //开始闯关

        //查询批次表得到题目
        let strExamBatchNo = '';
        let strDateTime = '';
        //查询不是推荐的批次；
        const strWhereStuExam = Format(
          "gameLevelId='{0}' And UserId='{1}' And isRecommend = '1' order by updDate desc",
          strGameLevelId,
          strUserId,
          strCourseId,
        );
        const objge_StuBatchQuesRela = await ge_StuBatchQuesRela_GetFirstObjAsync(strWhereStuExam);
        //已经做过
        if (objge_StuBatchQuesRela != null) {
          strExamBatchNo = objge_StuBatchQuesRela.examBatchNo;
          console.error('strExamBatchNo:', strExamBatchNo);
          strDateTime = objge_StuBatchQuesRela.updDate;

          //通过批次号+用户 课程得到 做题结果表数据
          const strCourseId = clsPubLocalStorage.courseId;
          const strWhereResult = `	examBatchNo='" + strExamBatchNo + "' And userId='${strUserId}'`;

          //获取获取题目库
          arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(strWhereResult);

          //得到正确数
          const arrUserAnswerResult_Right = arrUserAnswerResultObjLst.filter(
            (x) => x.isRight == true,
          );
          //总数-正确数等于错误数；
          const strErrorNum = strQuestionNum - arrUserAnswerResult_Right.length;

          spnRightNum1.innerHTML = arrUserAnswerResult_Right.length.toString();
          divRightNum.appendChild(spnRightNum0);
          divRightNum.appendChild(spnRightNum1);
          objDiv_GameLevel.appendChild(divRightNum);

          //strhtml += '<div style = "float:left;width:50%;" >';
          //strhtml += '<span style="display: inline;">正确：</span><span style="color:blue;display: inline;">'
          //    + arrUserAnswerResult_Right.length + ' </span></div>';

          spnErrorNum1.innerHTML = strErrorNum.toString();
          divErrorNum.appendChild(spnErrorNum0);
          divErrorNum.appendChild(spnErrorNum1);
          objDiv_GameLevel.appendChild(divErrorNum);

          //strhtml += '<div style = "float:right;width:50%;" >';
          //strhtml += '<span style="display: inline;">错误：</span><span style="color:blue;display: inline;">' + strErrorNum + ' </span></div>';

          spnExamBatchNo1.innerHTML = strExamBatchNo;
          divExamBatchNo.appendChild(spnExamBatchNo0);
          divExamBatchNo.appendChild(spnExamBatchNo1);
          objDiv_GameLevel.appendChild(divExamBatchNo);

          //strhtml += '<div style = "float:left;width:50%;" >';
          //strhtml += '<span style="display: inline;">批次：</span><span style="color:blue;display: inline;">' + strExamBatchNo + ' </span></div>';

          //截取时间
          const strDateTimeSim = strDateTime.substr(0, 16);

          spnDateTimeSim1.innerHTML = strDateTimeSim;
          divDateTimeSim.appendChild(spnDateTimeSim0);
          divDateTimeSim.appendChild(spnDateTimeSim1);
          objDiv_GameLevel.appendChild(divDateTimeSim);

          //strhtml += '<div style = "float:right;width:50%;" >';
          //strhtml += '<span style="display: inline;">时间：</span><span style="color:blue;display: inline;">' + strDateTimeSim + ' </span></div>';
          let strChapterNameSim = strChapterName;
          //截取章节
          if (strChapterName != null && strChapterName.length > 20) {
            strChapterNameSim = strChapterName.substr(0, 20);
          }

          spnChapterNameSim1.innerHTML = strChapterNameSim;
          divChapterNameSim.appendChild(spnChapterNameSim0);
          divChapterNameSim.appendChild(spnChapterNameSim1);
          objDiv_GameLevel.appendChild(divChapterNameSim);
          //strhtml += '<div style = "float:left;width:100%;"  >';
          ////strhtml += '<span style="display: inline;font-size:10px;">章节：</span><span style="color:blue;display: inline;font-size:10px;">' + strChapterName + '</span></div>';
          //strhtml += '<span style="display: inline;">章节：</span><span style="color:blue;display: inline;" title=' + strChapterName + '>' + strChapterNameSim + '</span></div>';
          //=========END--主体：关卡信息区==========

          //strhtml += '<div>';
          //填空、单选、多选、判断、操作；

          if (
            strQuestionTypeId == enumQuestionType.OperationQuestions_09 || //操作
            strQuestionTypeId == enumQuestionType.FillInBlank_01 || //填空
            strQuestionTypeId == enumQuestionType.SingleChoice_02 || //单选
            strQuestionTypeId == enumQuestionType.MultipleChoice_03 || //多选
            strQuestionTypeId == enumQuestionType.ShortAnswer_10 || //简答题
            strQuestionTypeId == enumQuestionType.TrueorFalse_11 //判断
          ) {
            //查询当前课程下当前用户是否有提交的批次数据；有则显示查看上次
            const strWhereUpStuExam = Format(
              "gameLevelId='{0}' And UserId='{1}' And isSubmit = '1' And isRecommend = '1' order by updDate desc",
              strGameLevelId,
              strUserId,
            );
            const strLastExamBatchNo = await ge_StuBatchQuesRelaEx_GetLastExamBatchNo(
              strGameLevelId,
              strUserId,
              true,
            );
            if (strLastExamBatchNo.length > 0) {
              const strExamBatchNo = strLastExamBatchNo;
              //查看看上次
              const btnViewLast = GetButton_Empty('');
              btnViewLast.className = 'btn btn-primary';
              btnViewLast.innerHTML = '查看上次';
              btnViewLast.style.float = 'left';
              strChallengeMode = enumChallengeMode.ViewLast_01; //查看上次
              // const strOnClick = Format(
              //   "C1hallengeQuestionClick('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}')",
              //   strUserId,
              //   strid_CurrEducls,
              //   strDifficultyLevelId,
              //   strQuestionTypeId,
              //   strGameLevelId,
              //   strLevelModeTypeId,
              //   strGameLevelName,
              //   strQuestionNum,
              //   strChallengeMode,
              //   strExamBatchNo,
              // );
              (function (
                strUserId,
                strid_CurrEducls,
                strDifficultyLevelId,
                strQuestionTypeId,
                strGameLevelId,
                strLevelModeTypeId,
                strGameLevelName,
                strQuestionNum,
                strChallengeMode,
                strExamBatchNo,
              ) {
                btnViewLast.onclick = function () {
                  ChallengeQuestionClick(
                    strUserId,
                    strid_CurrEducls,
                    strDifficultyLevelId,
                    strQuestionTypeId,
                    strGameLevelId,
                    strLevelModeTypeId,
                    strGameLevelName,
                    strQuestionNum,
                    strChallengeMode,
                    strExamBatchNo,
                  );
                };
              })(
                strUserId,
                strid_CurrEducls,
                strDifficultyLevelId,
                strQuestionTypeId,
                strGameLevelId,
                strLevelModeTypeId,
                strGameLevelName,
                strQuestionNum,
                strChallengeMode,
                strExamBatchNo,
              );
              // btnViewLast.setAttribute('onclick', strOnClick);
              divButton.appendChild(btnViewLast);

              //strhtml += '<input class="btn btn-primary" type = "button" value = "查看上次" style = "float:left;" onclick=ChallengeQuestionClick("' + strUserId + '","' + strid_CurrEducls + '","' + strDifficultyLevelId + '","' + strQuestionTypeId + '","' + strGameLevelId + '","' + strLevelModeTypeId + '","' + strGameLevelName + '",' + strQuestionNum + ',"1","' + strExamBatchNo + '")>';
            }
          }
          if (objge_StuBatchQuesRela.isSubmit == true) {
            //开始闯关
            strChallengeMode = enumChallengeMode.StartGame_02;
            // const strOnClick = Format(
            //   "C1hallengeQuestionClick('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}')",
            //   strUserId,
            //   strid_CurrEducls,
            //   strDifficultyLevelId,
            //   strQuestionTypeId,
            //   strGameLevelId,
            //   +strLevelModeTypeId,
            //   strGameLevelName,
            //   strQuestionNum,
            //   strChallengeMode,
            //   strExamBatchNo,
            // );
            (function (
              strUserId,
              strid_CurrEducls,
              strDifficultyLevelId,
              strQuestionTypeId,
              strGameLevelId,
              strLevelModeTypeId,
              strGameLevelName,
              strQuestionNum,
              strChallengeMode,
              strExamBatchNo,
            ) {
              btnStartGame.onclick = function () {
                ChallengeQuestionClick(
                  strUserId,
                  strid_CurrEducls,
                  strDifficultyLevelId,
                  strQuestionTypeId,
                  strGameLevelId,
                  strLevelModeTypeId,
                  strGameLevelName,
                  strQuestionNum,
                  strChallengeMode,
                  strExamBatchNo,
                );
              };
            })(
              strUserId,
              strid_CurrEducls,
              strDifficultyLevelId,
              strQuestionTypeId,
              strGameLevelId,
              strLevelModeTypeId,
              strGameLevelName,
              strQuestionNum,
              strChallengeMode,
              strExamBatchNo,
            );
            // btnStartGame.setAttribute('onclick', strOnClick);
            divButton.appendChild(btnStartGame);

            //strhtml += '<input class="btn btn-primary" type = "button" value = "开始闯关" style = "float:right;" onclick=ChallengeQuestionClick("' + strUserId + '","' + strid_CurrEducls + '","' + strDifficultyLevelId + '","' + strQuestionTypeId + '","' + strGameLevelId + '","' + strLevelModeTypeId + '","' + strGameLevelName + '",' + strQuestionNum + ',"2","' + strExamBatchNo + '")>';
          } else {
            strExamBatchNo = objge_StuBatchQuesRela.examBatchNo;
            //没有提交，继续闯关
            const btnContinuePass = GetButton_Empty('');
            btnContinuePass.className = 'btn btn-primary';
            btnContinuePass.innerHTML = '继续闯关';
            btnContinuePass.style.float = 'right';
            strChallengeMode = enumChallengeMode.ContinuePass_03; //继续闯关
            // const strOnClick = Format(
            //   "C1hallengeQuestionClick('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}')",
            //   strUserId,
            //   strid_CurrEducls,
            //   strDifficultyLevelId,
            //   strQuestionTypeId,
            //   strGameLevelId,
            //   +strLevelModeTypeId,
            //   strGameLevelName,
            //   strQuestionNum,
            //   strChallengeMode,
            //   strExamBatchNo,
            // );
            // btnContinuePass.setAttribute('onclick', strOnClick);
            (function (
              strUserId,
              strid_CurrEducls,
              strDifficultyLevelId,
              strQuestionTypeId,
              strGameLevelId,
              strLevelModeTypeId,
              strGameLevelName,
              strQuestionNum,
              strChallengeMode,
              strExamBatchNo,
            ) {
              btnContinuePass.onclick = function () {
                ChallengeQuestionClick(
                  strUserId,
                  strid_CurrEducls,
                  strDifficultyLevelId,
                  strQuestionTypeId,
                  strGameLevelId,
                  strLevelModeTypeId,
                  strGameLevelName,
                  strQuestionNum,
                  strChallengeMode,
                  strExamBatchNo,
                );
              };
            })(
              strUserId,
              strid_CurrEducls,
              strDifficultyLevelId,
              strQuestionTypeId,
              strGameLevelId,
              strLevelModeTypeId,
              strGameLevelName,
              strQuestionNum,
              strChallengeMode,
              strExamBatchNo,
            );
            divButton.appendChild(btnContinuePass);

            //strhtml += '<input class="btn btn-primary" type = "button" value = "继续闯关" style = "float:right;" onclick=ChallengeQuestionClick("' + strUserId + '","' + strid_CurrEducls + '","' + strDifficultyLevelId + '","' + strQuestionTypeId + '","' + strGameLevelId + '","' + strLevelModeTypeId + '","' + strGameLevelName + '",' + strQuestionNum + ',"3","' + strExamBatchNo + '")>';
          }
        } else {
          //没有做过if (objge_StuBatchQuesRela != null)

          spnRightNum1.innerHTML = '0';
          divRightNum.appendChild(spnRightNum0);
          divRightNum.appendChild(spnRightNum1);
          objDiv_GameLevel.appendChild(divRightNum);

          //strhtml += '<div style = "float:left;width:50%;" >';
          //strhtml += '<span style="display: inline;">正确：</span><span style="color:blue;display: inline;">0</span></div>';
          spnErrorNum1.innerHTML = '0';
          divErrorNum.appendChild(spnErrorNum0);
          divErrorNum.appendChild(spnErrorNum1);
          objDiv_GameLevel.appendChild(divErrorNum);

          //strhtml += '<div style = "float:right;width:50%;" >';
          //strhtml += '<span style="display: inline;">错误：</span><span style="color:blue;display: inline;">0</span></div>';

          //截取章节

          let strChapterNameSim = strChapterName;
          if (strChapterName != null && strChapterName.length > 20) {
            strChapterNameSim = strChapterName.substr(0, 20);
          }
          spnChapterNameSim1.innerHTML = strChapterNameSim;
          divChapterNameSim.appendChild(spnChapterNameSim0);
          divChapterNameSim.appendChild(spnChapterNameSim1);
          objDiv_GameLevel.appendChild(divChapterNameSim);
          //strhtml += '<div style = "float:left;width:100%;"  >';
          //strhtml += '<span style="display: inline;">章节：</span><span style="color:blue;display: inline;" title=' + strChapterName + '>' + strChapterNameSim + '</span></div>';

          spnExamBatchNo0.innerHTML = '';
          spnExamBatchNo1.innerHTML = strExamBatchNo;
          divExamBatchNo.appendChild(spnExamBatchNo0);
          divExamBatchNo.appendChild(spnExamBatchNo1);
          objDiv_GameLevel.appendChild(divExamBatchNo);

          //为空 所以放最后；
          //strhtml += '<div style = "float:left;width:50%;" >';
          //strhtml += '<span style="display: inline;"></span><span style="color:blue;display: inline;">' + strExamBatchNo + ' </span></div>';
          spnDateTimeSim0.innerHTML = '';
          spnDateTimeSim1.innerHTML = strDateTime;
          divDateTimeSim.appendChild(spnDateTimeSim0);
          divDateTimeSim.appendChild(spnDateTimeSim1);
          objDiv_GameLevel.appendChild(divDateTimeSim);

          //strhtml += '<div style = "float:right;width:50%;" >';
          //strhtml += '<span style="display: inline;"></span><span style="color:blue;display: inline;">' + strDateTime + ' </span></div>';
          // const strOnClick = Format(
          //   "C1hallengeQuestionClick('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}')",
          //   strUserId,
          //   strid_CurrEducls,
          //   strDifficultyLevelId,
          //   strQuestionTypeId,
          //   strGameLevelId,
          //   +strLevelModeTypeId,
          //   strGameLevelName,
          //   strQuestionNum,
          //   strChallengeMode,
          //   strExamBatchNo,
          // );
          // btnStartGame.setAttribute('onclick', strOnClick);
          (function (
            strUserId,
            strid_CurrEducls,
            strDifficultyLevelId,
            strQuestionTypeId,
            strGameLevelId,
            strLevelModeTypeId,
            strGameLevelName,
            strQuestionNum,
            strChallengeMode,
            strExamBatchNo,
          ) {
            btnStartGame.onclick = function () {
              ChallengeQuestionClick(
                strUserId,
                strid_CurrEducls,
                strDifficultyLevelId,
                strQuestionTypeId,
                strGameLevelId,
                strLevelModeTypeId,
                strGameLevelName,
                strQuestionNum,
                strChallengeMode,
                strExamBatchNo,
              );
            };
          })(
            strUserId,
            strid_CurrEducls,
            strDifficultyLevelId,
            strQuestionTypeId,
            strGameLevelId,
            strLevelModeTypeId,
            strGameLevelName,
            strQuestionNum,
            strChallengeMode,
            strExamBatchNo,
          );
          divButton.appendChild(btnStartGame);

          //strhtml += '<div><input class="btn btn-primary" type = "button" value = "开始闯关" style = "float:right;" onclick=ChallengeQuestionClick("' + strUserId + '","' + strid_CurrEducls + '","' + strDifficultyLevelId + '","' + strQuestionTypeId + '","' + strGameLevelId + '","' + strLevelModeTypeId + '","' + strGameLevelName + '",' + strQuestionNum + ',"2","' + strExamBatchNo + '")>';
        }
        //strhtml += '<div>';
        //if (strQuestionTypeId == "09" || strQuestionTypeId == "16") {

        //    //操作运算题才能看上次
        //    strhtml += '<input class="btn btn-outline-primary" type = "button" value = "查看上次" style = "float:left;" onclick=ChallengeQuestionClick("' + strUserId + '","' + strid_CurrEducls + '","' + strDifficultyLevelId + '","' + strQuestionTypeId + '","' + strGameLevelId + '","' + strLevelModeTypeId + '","' + strGameLevelName + '",' + strQuestionNum + ',"1","' + strExamBatchNo+'")>';

        //}
        //strhtml += '<input class="btn btn-primary" type = "button" value = "开始闯关" style = "float:right;" onclick=ChallengeQuestionClick("' + strUserId + '","' + strid_CurrEducls + '","' + strDifficultyLevelId + '","' + strQuestionTypeId + '","' + strGameLevelId + '","' + strLevelModeTypeId + '","' + strGameLevelName + '",' + strQuestionNum + ',"2","' + strExamBatchNo +'")>';

        //strhtml += '</div>';

        //strhtml += '</a></li>';

        const objBr0 = GetBr_Empty();

        const objBrDiv = GetDiv_Empty('float: left');
        objBrDiv.style.height = '12px';
        const objSpan = GetSpan_Empty('');
        objSpan.innerHTML = 'AA';
        objBrDiv.appendChild(objSpan);
        objBrDiv.appendChild(objBr0);
        // objDiv_GameLevel.appendChild(objBrDiv);
        div4Li.appendChild(divGameLevelName);
        div4Li.appendChild(objDiv_GameLevel);

        // div4Li.appendChild(objBrDiv);
        div4Li.appendChild(divButton);
        const objBr = GetBr_Empty();
        divSub.appendChild(div4Li);

        divGameLevelLst.appendChild(divSub);
        divGameLevelLst.appendChild(objBr);
      }

      console.log('完成Show_GameChallenge!');
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objge_GameLevelS">源对象</param>
  public async FuncMapge_GameLevel(objge_GameLevel: clsge_GameLevelENEx) {
    try {
      {
        const ge_DifficultyLevel_DifficultyLevelId = objge_GameLevel.difficultyLevelId;
        const ge_DifficultyLevel_DifficultyLevelName = await ge_DifficultyLevel_func(
          clsge_DifficultyLevelEN.con_DifficultyLevelId,
          clsge_DifficultyLevelEN.con_DifficultyLevelName,
          ge_DifficultyLevel_DifficultyLevelId,
        );
        objge_GameLevel.difficultyLevelName = ge_DifficultyLevel_DifficultyLevelName;
      }
      {
        const QuestionType_QuestionTypeId = objge_GameLevel.questionTypeId;
        const QuestionType_QuestionTypeName = await QuestionType_func(
          clsQuestionTypeEN.con_QuestionTypeId,
          clsQuestionTypeEN.con_QuestionTypeName,
          QuestionType_QuestionTypeId,
        );
        objge_GameLevel.questionTypeName = QuestionType_QuestionTypeName;
      }
      {
        const ge_LevelModeType_LevelModeTypeId = objge_GameLevel.levelModeTypeId;
        const ge_LevelModeType_LevelModeTypeName = await ge_LevelModeType_func(
          clsge_LevelModeTypeEN.con_LevelModeTypeId,
          clsge_LevelModeTypeEN.con_LevelModeTypeName,
          ge_LevelModeType_LevelModeTypeId,
        );
        objge_GameLevel.levelModeTypeName = ge_LevelModeType_LevelModeTypeName;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objge_GameLevelENS">源对象</param>
  /// <returns>目标对象=>clsge_GameLevelEN:objge_GameLevelENT</returns>
  public CopyToExge_GameLevel(objge_GameLevelENS: clsge_GameLevelEN): clsge_GameLevelENEx {
    const objge_GameLevelENT = new clsge_GameLevelENEx();
    try {
      ge_GameLevel_CopyObjTo(objge_GameLevelENS, objge_GameLevelENT);
      return objge_GameLevelENT;
    } catch (e) {
      const strMsg: string = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objge_GameLevelENT;
    }
  }

  //展示习题信息
  public async showQuestionBak(
    id: number,
    strExamBatchNo: string,
    arrQuestions: Array<clsQuestionnaireEN>,
  ) {
    const strChallengeMode = this.challengeMode;
    const userStore = useUserStore();
    //questions = questions;
    ////去掉前后双引号
    //questions = eval(questions)
    //questions = questions.substring(1, questions.length - 1);
    const strCourseId = clsPubLocalStorage.courseId;
    const strUserId = userStore.userId;
    //上一次闯关结果
    let arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    SetSpanHtmlInDivObj(this.thisDivLayout, 'spnQuestioned', (id + 1).toString());
    let questioned = (id + 1) / arrQuestions.length;
    if (PassGame_Recommend.intActiveQuestion != undefined) {
      $('#ques' + PassGame_Recommend.intActiveQuestion)
        .removeClass('question_id')
        .addClass('active_question_id');
    }
    if (strChallengeMode == enumChallengeMode.ViewLast_01) {
      const submitQuestions = GetButtonObjInDiv(this.divQuestionShow, 'submitQuestions');
      if (submitQuestions != null) {
        submitQuestions.disabled = true;
      }
    }

    PassGame_Recommend.intActiveQuestion = id;
    const ulQuestions = document.getElementsByClassName('question');
    if (ulQuestions.length == 0) {
      const strMsg = `class = 'question'的ul控件不存在`;
      return;
    }
    const ulQuestion = ulQuestions[0] as HTMLUListElement;
    ulQuestion.innerHTML = '';
    console.log(ulQuestion, ulQuestion.className);
    $('.question').find('.question_info').remove();
    $('.question').find('.question_infos').remove();
    const objQuestion = arrQuestions[id];
    const strQuestionId = objQuestion.questionId;
    const strQuestionTypeId = objQuestion.questionTypeId;
    const arrAnswerObjLst = await Answer_GetObjLstCache(strCourseId);
    //获取获取题目选项库
    const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstCache(strCourseId);
    const arrQuestionOptions_Curr = arrQuestionOptionsObjLst.filter(
      (x) => x.questionId == strQuestionId,
    );

    //查询不是推荐的批次；
    const strWhereStuExam = Format(
      "gameLevelId='{0}' And UserId='{1}' And isRecommend = '1' order by updDate desc",
      PassGame_Recommend.gameLevelId_Static,
      strUserId,
      strCourseId,
    );
    const strLastExamBatchNo = await ge_StuBatchQuesRelaEx_GetLastExamBatchNo(
      PassGame_Recommend.gameLevelId_Static,
      strUserId,
      false,
    );
    if (strLastExamBatchNo.length == 0) {
      const strMsg = Format('根据条件获取用户批次题目时，为空，请检查！(In showQuestionBak)');
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.examBatchNo = strLastExamBatchNo;
    console.error('strExamBatchNo:', this.examBatchNo);
    //strDateTime = objge_StuBatchQuesRela.updDate;

    //通过批次号+用户 课程得到 做题结果表数据

    const strWhereResult = "	examBatchNo='" + strExamBatchNo + "' And userId='" + strUserId + "'";

    //获取获取题目库
    arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(strWhereResult);

    let objUserAnswerResult: clsUserAnswerResultEN = new clsUserAnswerResultEN();
    if (arrUserAnswerResultObjLst != null) {
      const objUserAnswerResult_Const = arrUserAnswerResultObjLst.find(
        (x) => x.questionId == strQuestionId,
      );
      if (objUserAnswerResult_Const != null) objUserAnswerResult = objUserAnswerResult_Const;
    }
    //循环json数组数据
    //$.each(question, function (k, v) {
    //const danxuanti = '';
    //const duoxuanti = '';
    //const panduanti = '';
    //const wendati = '';
    let bolIsAnswer = false;
    let intQuestionOptionNum = 0;
    //// 遍历单条信息
    //$.each(questions[k], function (k, v) {
    const liQutionTitle = GetLi_Empty('liQuestion_title');
    switch (strQuestionTypeId) {
      case '02':
        //const strAddressAndPortfull = strAddressAndPort + question.FilePath;
        ////如果获取地址内容为空则不调取图片显示
        //if (question.FilePath == "") {
        //    //单选题
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(单选题)");
        //}
        //else {
        //    //单选题
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(单选题)" + "<br/><img src='" + strAddressAndPortfull + "' style='width:280px; height:150px; margin-left:10px;' alt='' id='txtImgPath'/>");
        //}
        //  const strAddressAndPortfull = strAddressAndPort + question.FilePath;
        //如果获取地址内容为空则不调取图片显示
        //  if (question.FilePath == "") {
        //单选题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(单选题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        //   }
        //   else {
        //        //单选题
        //        $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(单选题)" + "<br/><img src='" + strAddressAndPortfull + "' style='width:280px; height:150px; margin-left:10px;' alt='' id='txtImgPath'/>");
        //   }
        //const dataObj = objQuestion.answerOption;
        let item = '';
        let k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          //$.each(dataObj, function (k1, obj) {
          intQuestionOptionNum++;

          if (
            objUserAnswerResult != null &&
            objUserAnswerResult.answerOptionId == objQuestionOption.questionOptionId
          ) {
            bolIsAnswer = true;
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );

          ulQuestion.appendChild(liItem);

          k1++;
        }
        break;
      case '03':
        //const strAddressAndPortfull = strAddressAndPort + question.FilePath;
        ////如果获取地址内容为空则不调取图片显示
        //if (question.FilePath == "") {
        //    //多选题
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(多选题)");
        //}
        //else {
        //    //多选题
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(多选题)" + "<br/><img src='" + strAddressAndPortfull + "' style='width:280px; height:150px; margin-left:10px;' alt='' id='txtImgPath'/>");
        //}
        //多选题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(多选题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        //const dataObj = objQuestion.answerOption;
        //$.each(dataObj, function (k1, obj) {
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          intQuestionOptionNum++;

          const strAnswerMultiOption = objUserAnswerResult.answerMultiOption;
          if (IsNullOrEmpty(strAnswerMultiOption) == false) {
            const arr = strAnswerMultiOption.split('|');
            if (arr.indexOf(objQuestionOption.questionOptionId) > -1) {
              bolIsAnswer = true;
            }
          }
          const liItem = await QuestionOptionsEx_GetLiCheckItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );

          ulQuestion.appendChild(liItem);

          k1++;
        }
        break;
      case '11': //判断题
        //如果获取地址内容为空则不调取图片显示
        //if (question.FilePath == "") {
        //判断题
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(判断题)");
        //}
        //else {
        //    //判断题
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(判断题)" + "<br/><img src='" + strAddressAndPortfull + "' style='width:280px; height:150px; margin-left:10px;' alt='' id='txtImgPath'/>");
        //}
        //判断题

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(判断题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        //const dataObj = objQuestion.answerOption;
        //$.each(dataObj, function (k1, obj) {
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          //计算有几个选项；
          intQuestionOptionNum++;
          if (
            objUserAnswerResult != null &&
            objUserAnswerResult.answerOptionId == objQuestionOption.questionOptionId
          ) {
            bolIsAnswer = true;
          }
          const liItem = await QuestionOptionsEx_GetLiRadioItemQuestionOptions(
            objQuestionOption,
            k1,
            bolIsAnswer,
            clickTrim,
          );

          ulQuestion.appendChild(liItem);
          k1++;
        }
        break;
      case '01': //填空题型
        ////如果获取地址内容为空则不调取图片显示
        //if (question.FilePath == "") {
        //    //填空题型
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(操作问答题)");
        //}
        //else {
        //    //问答、操作、解答、开放、填空题型
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(操作问答题)" + "<br/><img src='" + strAddressAndPortfull + "' style='width:280px; height:150px; margin-left:10px;' alt='' id='txtImgPath'/>");
        //}
        //填空题型

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(填空题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        //const dataObj = objQuestion.answerOption;
        item = "<li class='question_infos' id='item" + objQuestion.questionId + "'>";
        /*$.each(dataObj, function (k1, obj) {*/
        k1 = 0;
        for (const objQuestionOption of arrQuestionOptions_Curr) {
          intQuestionOptionNum++;
          //有几个答案就生成几个文本框；
          item +=
            intQuestionOptionNum +
            ".<input type = 'text' name = 'item'  id = '" +
            objQuestionOption.questionOptionId +
            "' style='background:lightblue;line-height:30px;' /><br>";
        }
        item += '</li>';
        $('.question').append(item);
        break;
      case '10': //简答题型
        ////如果获取地址内容为空则不调取图片显示
        //if (question.FilePath == "") {
        //    //填空题型
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(操作问答题)");
        //}
        //else {
        //    //问答、操作、解答、开放、填空题型
        //    $(".liQuestion_title").html("<strong>第 " + (id + 1) + " 题 、</strong>" + question.questionName + "(操作问答题)" + "<br/><img src='" + strAddressAndPortfull + "' style='width:280px; height:150px; margin-left:10px;' alt='' id='txtImgPath'/>");
        //}
        //填空题型

        liQutionTitle.innerHTML = `<strong>第 ${id + 1} 题 、</strong> ${
          objQuestion.questionName
        }(简答题)<label id='IsCorrect${
          objQuestion.questionId
        }' style='display:none;color:red;'></label>`;
        ulQuestion.appendChild(liQutionTitle);

        //const dataObj = objQuestion.answerOption;
        item = "<li class='question_infos' id='item" + objQuestion.questionId + "'>";
        //有几个答案就生成几个文本框；
        item +=
          "<textarea name = 'item'  id = 'question" +
          objQuestion.questionId +
          "' rows=8 cols=80 style='background:lightblue;line-height:22px;' />";

        item += '</li>';
        $('.question').append(item);
        break;
      default:
        const strMsg = '问题类型Id：' + strQuestionTypeId + '没有被处理！';
        alert(strMsg);
        break;
    }
    //为点击后的标签添加背景样式；
    //});
    $('.question').attr('questionId', 'question' + id);
    //$(".question").attr("id", question.questionId);
    $('#ques' + id)
      .removeClass('active_question_id')
      .addClass('question_id');
    for (let i = 0; i < PassGame_Recommend.arrCheckQues.length; i++) {
      if (PassGame_Recommend.arrCheckQues[i].id == id) {
        $('#' + PassGame_Recommend.arrCheckQues[i].item)
          .find('input')
          .prop('checked', 'checked');
        $('#' + PassGame_Recommend.arrCheckQues[i].item).addClass('clickTrim');
        $('#ques' + PassGame_Recommend.intActiveQuestion)
          .removeClass('question_id')
          .addClass('clickQue');
      }
    }
    //1.判断是不是不是首次加载第一题，如果是，则往下走，看是否是查看上次 还是继续做题，调取已做题答案数据；
    const vQuestionId = objQuestion.questionId; //获取当前题目ID；

    /*  const objPage = new PassGame_Recommend();*/
    //题目ID， 题目类型；答案选项数
    this.SearchUserResultAnswer(strQuestionId, strQuestionTypeId, intQuestionOptionNum);
    //});
  }
  public get challengeMode() {
    const strQuestionId = PassGame_Recommend.GetPropValue('challengeMode');
    return strQuestionId;
  }
  public set challengeMode(strValue: string) {
    PassGame_Recommend.vuebtn_Click('SetChallengeMode', strValue);
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'userNameEx|Ex':
        viewVarSet.sortge_UserCreditsLogBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'gameLevelName|Ex':
        viewVarSet.sortge_UserCreditsLogBy = `ge_GameLevel|gameLevelName ${sortDirection}|ge_UserCreditsLog.GameLevelId = ge_GameLevel.GameLevelId`;
        break;
      default:
        viewVarSet.sortge_UserCreditsLogBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserCreditsLog4Func(this.thisDivList);
  }
}

function ChallengeQuestionClick(
  strUserId: string,
  strid_CurrEducls: string,
  strDifficultyLevelId: string,
  strQuestionTypeId: string,
  strGameLevelId: string,
  strLevelModeTypeId: string,
  strGameLevelName: string,
  strQuestionNum: number,
  strChallengeMode: string,
  strExamBatchNo: string,
) {
  //把查看、继续做题、重新闯关参数，存入
  PassGame_Recommend.vuebtn_Click('SetChallengeMode', strChallengeMode);

  if (strQuestionNum == 0) {
    alert('请为关卡设置题目数');
  } else {
    let objPage;
    switch (strQuestionTypeId) {
      case '02':
        //单选题
        ShowDivInDivObj(divVarSet.refDivLayout, 'divQuestionShow');
        HideDivInDivObj(divVarSet.refDivLayout, 'divGameLevelLst');
        HideDivInDivObj(divVarSet.refDivLayout, 'divCaozuoQuestionList');

        objPage = new PassGame_Recommend();
        objPage.ChallengeQuestionClick(
          strUserId,
          strid_CurrEducls,
          strDifficultyLevelId,
          strQuestionTypeId,
          strQuestionNum,
          strGameLevelId,
          strChallengeMode,
          strExamBatchNo,
        );

        break;
      case '01':
        //填空题
        ShowDivInDivObj(divVarSet.refDivLayout, 'divQuestionShow');
        HideDivInDivObj(divVarSet.refDivLayout, 'divGameLevelLst');
        HideDivInDivObj(divVarSet.refDivLayout, 'divCaozuoQuestionList');

        objPage = new PassGame_Recommend();
        objPage.ChallengeQuestionClick(
          strUserId,
          strid_CurrEducls,
          strDifficultyLevelId,
          strQuestionTypeId,
          strQuestionNum,
          strGameLevelId,
          strChallengeMode,
          strExamBatchNo,
        );

        break;
      case '10':
        //简答题
        ShowDivInDivObj(divVarSet.refDivLayout, 'divQuestionShow');
        HideDivInDivObj(divVarSet.refDivLayout, 'divGameLevelLst');
        HideDivInDivObj(divVarSet.refDivLayout, 'divCaozuoQuestionList');

        objPage = new PassGame_Recommend();
        objPage.ChallengeQuestionClick(
          strUserId,
          strid_CurrEducls,
          strDifficultyLevelId,
          strQuestionTypeId,
          strQuestionNum,
          strGameLevelId,
          strChallengeMode,
          strExamBatchNo,
        );

        break;
      case '11':
        //判断题
        ShowDivInDivObj(divVarSet.refDivLayout, 'divQuestionShow');
        HideDivInDivObj(divVarSet.refDivLayout, 'divGameLevelLst');
        HideDivInDivObj(divVarSet.refDivLayout, 'divCaozuoQuestionList');

        objPage = new PassGame_Recommend();
        objPage.ChallengeQuestionClick(
          strUserId,
          strid_CurrEducls,
          strDifficultyLevelId,
          strQuestionTypeId,
          strQuestionNum,
          strGameLevelId,
          strChallengeMode,
          strExamBatchNo,
        );

        break;

      case '03':
        //多选题
        ShowDivInDivObj(divVarSet.refDivLayout, 'divQuestionShow');
        HideDivInDivObj(divVarSet.refDivLayout, 'divGameLevelLst');
        HideDivInDivObj(divVarSet.refDivLayout, 'divCaozuoQuestionList');
        objPage = new PassGame_Recommend();
        objPage.ChallengeQuestionClick(
          strUserId,
          strid_CurrEducls,
          strDifficultyLevelId,
          strQuestionTypeId,
          strQuestionNum,
          strGameLevelId,
          strChallengeMode,
          strExamBatchNo,
        );

        break;

      case '17':
        //连连看多选题
        xadmin_open(
          '连连看多选题',
          '../Web/StructureChartQuestion?strDifficultyLevelId=' +
            strDifficultyLevelId +
            '&strQuestionTypeId=' +
            strQuestionTypeId +
            '&strGameLevelId=' +
            strGameLevelId +
            '&strLevelModeTypeId=' +
            strLevelModeTypeId +
            '&strGameLevelName=' +
            strGameLevelName +
            '&strQuestionNum=' +
            strQuestionNum +
            '',
          400,
          400,
          true,
        );

        break;
      case '09':
        //操作题
        HideDivInDivObj(divVarSet.refDivLayout, 'divGameLevelLst');

        HideDivInDivObj(divVarSet.refDivLayout, 'divQuestionShow');
        ShowDivInDivObj(divVarSet.refDivLayout, 'divCaozuoQuestionList');

        //require(["../js/Web/PassGame_Recommend.js"], function (index) {

        //    const objPage = new PassGame_Recommend();
        //    objPage.CaozuoQuestionClick(strUserId, strid_CurrEducls, strDifficultyLevelId, strQuestionTypeId, strQuestionNum);
        //});
        //if (strChallengeMode == "01") {
        //    //查看上一次
        //    window.location.href = '../Web/OperationQuestionHistory?strGameLevelId=' + strGameLevelId + '&strExamBatchNo=' + strExamBatchNo + '';
        //}
        //else {
        //    window.location.href = '../Web/CheckOperationQuestionNew?strGameLevelId=' + strGameLevelId + '';
        //}
        if (strChallengeMode == enumChallengeMode.ViewLast_01) {
          //查看上一次
          window.location.href =
            '../Web/OperationQuestionHistory?strGameLevelId=' +
            strGameLevelId +
            '&strChallengeMode=1&strExamBatchNo=' +
            strExamBatchNo +
            '';
        } else if (strChallengeMode == enumChallengeMode.StartGame_02) {
          window.location.href =
            '../Web/CheckOperationQuestionNew?strGameLevelId=' + strGameLevelId + '';
        } else {
          //继续闯关3
          window.location.href =
            '../Web/OperationQuestionHistory?strGameLevelId=' +
            strGameLevelId +
            '&strChallengeMode=3&strExamBatchNo=' +
            strExamBatchNo +
            '';
        }
        break;
      case '16':
        //算法

        HideDivInDivObj(divVarSet.refDivLayout, 'divGameLevelLst');
        HideDivInDivObj(divVarSet.refDivLayout, 'divQuestionShow');
        ShowDivInDivObj(divVarSet.refDivLayout, 'divCaozuoQuestionList');

        //require(["../js/Web/PassGame_Recommend.js"], function (index) {

        //    const objPage = new PassGame_Recommend();
        //    objPage.CaozuoQuestionClick(strUserId, strid_CurrEducls, strDifficultyLevelId, strQuestionTypeId, strQuestionNum);
        //});

        if (strChallengeMode == enumChallengeMode.ViewLast_01) {
          //查看上一次
          window.location.href =
            '../Web/OperationQuestionHistory?strGameLevelId=' +
            strGameLevelId +
            '&strChallengeMode=1&strExamBatchNo=' +
            strExamBatchNo +
            '';
        } else if (strChallengeMode == enumChallengeMode.StartGame_02) {
          window.location.href =
            '../Web/CheckOperationQuestionNew?strGameLevelId=' + strGameLevelId + '';
        } else {
          //继续闯关3
          window.location.href =
            '../Web/OperationQuestionHistory?strGameLevelId=' +
            strGameLevelId +
            '&strChallengeMode=3&strExamBatchNo=' +
            strExamBatchNo +
            '';
        }

        break;

      case '14':
        //操作题
        xadmin_open(
          '知识结构图题目',
          '../Web/StructureChartQuestion?strDifficultyLevelId=' +
            strDifficultyLevelId +
            '&strQuestionTypeId=' +
            strQuestionTypeId +
            '&strGameLevelId=' +
            strGameLevelId +
            '&strLevelModeTypeId=' +
            strLevelModeTypeId +
            '&strGameLevelName=' +
            strGameLevelName +
            '&strQuestionNum=' +
            strQuestionNum +
            '',
          400,
          400,
          true,
        );

        break;
      case '15':
        //操作题
        xadmin_open(
          '知识结构图题目',
          '../Web/StructureChartQuestion?strDifficultyLevelId=' +
            strDifficultyLevelId +
            '&strQuestionTypeId=' +
            strQuestionTypeId +
            '&strGameLevelId=' +
            strGameLevelId +
            '&strLevelModeTypeId=' +
            strLevelModeTypeId +
            '&strGameLevelName=' +
            strGameLevelName +
            '&strQuestionNum=' +
            strQuestionNum +
            '',
          400,
          400,
          true,
        );

        break;
    }
  }
}

function xadmin_open(para1: string, para2: string, para3: number, para4: number, para5: boolean) {
  console.log(para1, para2, para3, para4, para5);
}

function clickTrim(liItem: HTMLLIElement) {
  console.log('liItem:', liItem);
  const objPage: PassGame_Recommend = new PassGame_Recommend();
  objPage.clickTrim(liItem.id);
}

function btnChallengeClick(k: string, liItem: HTMLLIElement) {
  menu_SetActiveItemLi(liItem);
  const objPage = new PassGame_Recommend();
  // objPage.Getge_UserCreditsRank(k);
}
