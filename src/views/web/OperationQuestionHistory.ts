import { clsge_ControlTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlTypeEN';
import { clsge_InspectionResultsENEx } from '@/ts/L0Entity/GameLearn/clsge_InspectionResultsENEx';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { ge_ControlType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ControlTypeWApi';
import { ge_ExaminationCriteria_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import {
  Questionnaire_GetObjLstAsync,
  Questionnaire_GetObjLstByPagerAsync,
  Questionnaire_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { ge_InspectionResults_GetFirstObjAsync } from '@/ts/L3ForWApi/GameLearn/clsge_InspectionResultsWApi';
import { ge_InspectProcess_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_InspectProcessWApi';
import {
  ge_StuBatchQuesRela_GetFirstObjAsync,
  ge_StuBatchQuesRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/InteractManage/clsge_StuBatchQuesRelaWApi';
import { Answer_GetFirstObjAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import { UserAnswerResult_GetFirstObjAsync } from '@/ts/L3ForWApi/QuestionnaireResult/clsUserAnswerResultWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { tz_ContentAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { QuestionnaireCRUD } from '@/viewsBase/QuestionaireEdit/QuestionnaireCRUD';
import {
  ge_ExaminationCriteriaEx_Getge_InspectionResultsByExamTypeEx,
  ge_ExaminationCriteriaEx_SubmitAllQuestionEx,
  ge_ExaminationCriteriaEx_SubmitQuestionEx,
} from '@/ts/L3ForWApiEx/GameLearn/clsge_ExaminationCriteriaExWApi';
import { useUserStore } from '@/store/modulesShare/user';
import { GetInputValueInDivObj, GetTextAreaValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { usege_GameLevelStore } from '@/store/modules/ge_GameLevel';
import { Format } from '@/ts/PubFun/clsString';
import { viewVarSet } from '@/views/QuestionaireEdit/QuestionnaireVueShare';

//declare function Preview(): void;
declare function ShowHtmlcode(): void;

// declare function Page_Load1(): void;

declare function ShowPageList(): void;

declare function BtnFuncton(Func: string): void;
declare function rgb2hex(rgb: string): void;

const i = 0;
let strquestions: string;
declare function showQuestion(i: string, strquestions: string): void;
//答题卡
declare function answerCard(strquestions: string): void;

declare const window: any;

export class OperationQuestionHistory extends QuestionnaireCRUD {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => string;
  public static GetPropValue: (strPropName: string) => string;
  public static objPageCRUD: OperationQuestionHistory;
  constructor() {
    super();
    OperationQuestionHistory.objPageCRUD = this;
  }

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 1;
  }

  public recCount = 0;

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
    const strThisFuncName = this.PageLoad.name;
    const userStore = useUserStore();
    try {
      this.hidSortQuestionnaireBy = ' questionId Asc';
      if (userStore.userId != '') {
        //获取关卡名称等信息显示
        await this.GetGameLevelMsg();
        // 获取题目批次示
        const arrQuestionId = await this.GetQuestionList();

        await this.ShowStructureChartQuestion(arrQuestionId);

        //导出题目信息展示
        await this.btnExportQuestion(arrQuestionId);

        ShowPageList();
      } else {
        window.top.location.href = '../Web/Index';
      }
    } catch (e) {
      console.log(this.constructor.name);
      // console.log(Page_Load.name);

      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //获取关卡的相关信息
  public async GetGameLevelMsg() {
    // new clsge_GameLevelEN();
    const strThisFuncName = this.GetGameLevelMsg.name;
    const ge_GameLevelStore = usege_GameLevelStore();
    const strGameLevelId = this.strGameLevelId;

    try {
      const strWhere = ' ';
      //获取当前教学班 关卡
      const objge_GameLevel = await ge_GameLevelStore.getObj(strGameLevelId);
      if (objge_GameLevel != null) {
        //  $('#hidDifficultyLevelId').val(objge_GameLevel.difficultyLevelId);
        $('#hidQuestionTypeId').val(objge_GameLevel.questionTypeId);
        $('#hidQuestionNum').val(objge_GameLevel.questionNum);
        this.strLevelModeTypeId = objge_GameLevel.levelModeTypeId;

        //const strLevelName = "当前关卡名：" + objge_GameLevel.gameLevelName;
        const strLevelName = objge_GameLevel.gameLevelName;
        $('#LevelName').text(strLevelName);
      }
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
  }

  //获取题目批次列表
  public async GetQuestionList(): Promise<Array<number>> {
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    const strid_CurrEduCls = clsPubLocalStorage.idCurrEduCls;
    // const strDifficultyLevelId = GetInputValueInDivObj(this.thisDivLayout, 'hidDifficultyLevelId');
    const strQuestionTypeId = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionTypeId');
    const strQuestionNum = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionNum');
    const strGameLevelId = this.strGameLevelId;

    //上一次闯关结果
    const arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    //批次

    //查询批次表得到题目
    const strWhereStuExam =
      "examBatchNo='" + this.strExamBatchNo + "' And updUserId='" + strUserId + "'";
    const arrge_StuBatchQuesRelaObjLst = await ge_StuBatchQuesRela_GetObjLstAsync(strWhereStuExam);

    const arrQuestionId: Array<number> = [];
    for (let i = 0; i < arrge_StuBatchQuesRelaObjLst.length; i++) {
      arrQuestionId.push(arrge_StuBatchQuesRelaObjLst[i].questionId);
    }
    return arrQuestionId;
  }
  //获取操作题目
  public async ShowStructureChartQuestion(arrQuestionId: Array<number>) {
    const strThisFuncName = this.ShowStructureChartQuestion.name;

    const arrQuestionIdStr = arrQuestionId.join(',');

    const strWhereCond: string = ' questionId in(' + arrQuestionIdStr + ')';

    const intCurrPageIndex = 1; // this.getCurrPageIndex(this.divName4Pager);//获取当前页
    let arrQuestionnaireObjLst: Array<clsQuestionnaireEN> = [];
    const arrtz_ContentAttachmentObjLst: Array<clstz_ContentAttachmentEN> = [];
    //检查标准数据源
    //const arrge_ExaminationCriteriaObjLst: Array<clsge_ExaminationCriteriaEN> = [];
    //用户回答结果表
    const arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    //const arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx> = [];
    try {
      this.recCount = await Questionnaire_GetRecCountByCondAsync(strWhereCond);
      $('#hidRecCount').val(this.recCount);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortQuestionnaireBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrQuestionnaireObjLst = await Questionnaire_GetObjLstByPagerAsync(objPagerPara);
      //arrQuestionnaireExObjLst = arrQuestionnaireObjLst.map(this.CopyToEx);
      //for (const objInFor of arrQuestionnaireExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const userStore = useUserStore();
    try {
      const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;
      let strhtml: string = '';
      let strUserId;
      let objUserAnswerResult;
      if (arrQuestionnaireObjLst.length != 0) {
        // $("#QuestionTitle").html(arrQuestionnaireObjLst[0].questionName)

        const strQuestionId = arrQuestionnaireObjLst[0].questionId;

        const strWhereAttachment = "tableNameKey='" + strQuestionId + "' And  contentTypeId='0001'";
        //const strCourseId = clsPubLocalStorage.courseId;
        const arrtz_ContentAttachmentObjLst = await tz_ContentAttachment_GetObjLstAsync(
          strWhereAttachment,
        );

        //获取标准表的数据源
        const strCourseId = clsPubLocalStorage.courseId;

        //根据批次、题目ID 和用户得到 答案
        strUserId = userStore.userId;
        const strWhereStuExam =
          "examBatchNo='" +
          this.strExamBatchNo +
          "' And questionId='" +
          strQuestionId +
          "' And userId='" +
          strUserId +
          "'";
        objUserAnswerResult = await UserAnswerResult_GetFirstObjAsync(strWhereStuExam);
        if (objUserAnswerResult != null) {
          $('#textareaCode').val(objUserAnswerResult.answerText);
        }

        //获取传递过来的ID值进行展示；
        const strWhereCond = " questionId='" + strQuestionId + "'";

        //获取问题ID，存放隐藏控件；
        this.strQuestionId = strQuestionId;
        //存放检测类型
        // this.strExaminationTypeId = objge_Exam.examinationTypeId;

        //根据题目号 和内容类型查询题目附件表 得到想关信息；
        const arrList = arrtz_ContentAttachmentObjLst.filter(
          (x) => x.tableNameKey == strQuestionId.toString() && x.contentTypeId == '0001',
        );
        if (arrList.length > 0) {
          strhtml += '1.' + arrQuestionnaireObjLst[0].questionName;
          ////换行符
          const strBr = '<br/>&nbsp;&nbsp;&nbsp;&nbsp;';
          for (let i = 0; i < arrList.length; i++) {
            //判断附件资源类型
            const strResourceType = arrList[i].idResourceType;
            const strTextContent = arrList[i].textContent;
            //  strTextContent = strTextContent.replace(/\r\n/g, strBr);
            //  strTextContent = strTextContent.replace(/\n/g, strBr);

            if (strResourceType == '0004') {
              const strAddressAndPortfull = strAddressAndPort + arrList[i].filePath;
              strhtml +=
                '<br><div class="example"><img style="max-width:400px; margin-left: 10px; " src="' +
                strAddressAndPortfull +
                '"  alt="" data-action="zoom" /></div>';
            } else if (strResourceType == '0010' || strResourceType == '0011') {
              strhtml += '<br><pre><div class="example">' + strTextContent + '</div></pre>';
            } else if (strResourceType == '0015') {
              //源代码
              //判断如果questioncode字段代码不为空，那么则需要把内容填充到指定的文本域
              if (arrList[i].textContent != '') {
                $('#Oldcode').show(); //显示div
                // 把questioncode 存放右上角；
                $('#ContentHtmlCode').val(arrList[i].textContent);

                //运行事件；
                ShowHtmlcode();
              } else {
                //如果源代码字段值为空，则隐藏
                $('#Oldcode').hide(); //隐藏div
              }
            }
          }
        } else {
          strhtml += '1.' + arrQuestionnaireObjLst[0].questionName + '<br>';
        }

        //拼接；
        $('#ContentHtmlText').html(strhtml);

        strUserId = userStore.userId;
        //判断题目有没有提交，如果提交了则不可以编辑
        const strWhereResultCond =
          " questionId='" +
          strQuestionId +
          "' And examBatchNo='" +
          this.strExamBatchNo +
          "' And userId='" +
          strUserId +
          "'";
        //调用操作题目类型表； 获取题目要求
        objUserAnswerResult = await UserAnswerResult_GetFirstObjAsync(strWhereResultCond);
        if (objUserAnswerResult != null) {
          //如果不等于说明已经把数据存入了数据库；

          //提交事件完成后，运行、检查、提交 按钮置灰
          $('#submitBTN').attr('disabled', 'true');
          $('#Checkrundata').attr('disabled', 'true');
          $('#QuestionSubmit').attr('disabled', 'true');

          //显示提示；
          $('#btnMsg').attr('disabled', 'true');

          //把用户当前所做题目内容显示到编辑框；
          $('#textareaCode').val(objUserAnswerResult.answerText);
        } else {
          //提交事件完成后，运行、检查、提交 按钮置灰
          $('#submitBTN').attr('disabled', 'false');
          $('#Checkrundata').attr('disabled', 'true');
          $('#QuestionSubmit').attr('disabled', 'true');

          //显示提示；
          $('#btnMsg').attr('disabled', 'true');
        }
      }
      //this.BindTab_Questionnaire4Func(divList, arrQuestionnaireExObjLst);
      //console.log("完成BindGv_Questionnaire4Func!");
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  ////获取用户从操作题目要求；
  //public async GetQuestionClick() {
  //    const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
  //    const strUserId = userStore.userId;
  //    const strhtml: string = "";
  //    try {

  //        const responseText = await ge_InspectionResultsEx_GetObjByParaEx(strUserId, strid_CurrEducls);
  //        const objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN = <clsge_StuBatchQuesRelaEN>responseText;
  //        if (objge_StuBatchQuesRelaEN != null) {

  //            const strQuestionId = objge_StuBatchQuesRelaEN.questionId;
  //            this.strExamBatchNo = objge_StuBatchQuesRelaEN.examBatchNo;

  //            //获取当前登录用户的闯关分数；
  //            const strWhereCond = " questionId='" + strQuestionId + "'";
  //            ////调用操作题目类型表； 获取题目要求
  //            //const objQuestionnaire: QuestionnaireEN = await clsQuestionnaire_GetFirstObjAsync(strWhereCond);
  //            //if (objQuestionnaire != null) {

  //            //    strhtml += objQuestionnaire.describe;
  //            //    //拼接；
  //            //    $("#ContentHtmlText").html(strhtml);
  //            //}
  //            //调用题目标准表数据，如果不存在则直接获取其中一条已有标准答案的数据数据 ，然后根据题目号获取题目名称内容；
  //            const objge_ExaminationCriteria: ge_ExaminationCriteriaEN = await clsge_ExaminationCriteria_GetFirstObjAsync(strWhereCond);
  //            if (objge_ExaminationCriteria != null) {

  //                this.strQuestionId = objge_ExaminationCriteria.questionId;
  //                this.strExaminationTypeId = objge_ExaminationCriteria.examinationTypeId;

  //                const objQuestionnaire: QuestionnaireEN = await clsQuestionnaire_GetFirstObjAsync(strWhereCond);
  //                if (objQuestionnaire != null) {

  //                   // strhtml += objQuestionnaire.questionName + "<br>" + objQuestionnaire.questionContent;

  //                    strhtml += "1." + objQuestionnaire.questionName + "<br>" + objQuestionnaire.questionContent;
  //                    strhtml += "<br>要求：";
  //                    if (objge_ExaminationCriteria.controlId != "") {
  //                        strhtml += "<br>1.把控件id设置为：" + objge_ExaminationCriteria.controlId;
  //                        this.strControlID = objge_ExaminationCriteria.controlId;
  //                        this.strControlTypeID = objge_ExaminationCriteria.controlTypeId;//设置需要创建控件的类型；
  //                    }
  //                    if (objge_ExaminationCriteria.controlClass != "") {
  //                        strhtml += "<br>2.把控件class设置为：" + objge_ExaminationCriteria.controlClass;
  //                    }
  //                    if (objge_ExaminationCriteria.controlValue != "") {
  //                        strhtml += "<br>3.把控件值设置为：" + objge_ExaminationCriteria.controlValue;
  //                    }

  //                    //拼接；
  //                    $("#ContentHtmlText").html(strhtml);
  //                }
  //            }
  //            else {

  //                //获取传递过来的ID值进行展示；
  //                const strWhereCond = " questionId='" + this.strQuestionId + "'";
  //                const objge_Exam: ge_ExaminationCriteriaEN = await clsge_ExaminationCriteria_GetFirstObjAsync(strWhereCond);
  //                if (objge_Exam != null) {
  //                    //获取问题ID，存放隐藏控件；
  //                    this.strQuestionId = objge_Exam.questionId;
  //                    //存放检测类型
  //                    this.strExaminationTypeId = objge_Exam.examinationTypeId;

  //                    //获取当前登录用户的闯关分数；
  //                    const strWherege_Exam = " questionId='" + objge_Exam.questionId + "'";
  //                    const objQuestionnaire: QuestionnaireEN = await clsQuestionnaire_GetFirstObjAsync(strWherege_Exam);
  //                    if (objQuestionnaire != null) {

  //                        strhtml += "1." + objQuestionnaire.questionName + "<br>" + objQuestionnaire.questionContent;
  //                        strhtml += "<br>要求：";
  //                        if (objge_Exam.controlId != "") {
  //                            strhtml += "<br>1.把控件id设置为：" + objge_Exam.controlId;
  //                            this.strControlID = objge_Exam.controlId;
  //                            this.strControlTypeID = objge_Exam.controlTypeId;//设置需要创建控件的类型；
  //                        }
  //                        if (objge_Exam.controlClass != "") {
  //                            strhtml += "<br>2.把控件class设置为："+objge_Exam.controlClass;
  //                        }
  //                        if (objge_Exam.controlValue != "") {
  //                            strhtml += "<br>3.把控件值设置为："+objge_Exam.controlValue;
  //                        }
  //                        //判断如果questioncode字段代码不为空，那么则需要把内容填充到指定的文本域
  //                        if (objQuestionnaire.questionCode != "") {
  //                            ////把值存入到文本域；同时设置文本域不可编辑；执行运行html事件；
  //                            //$("#htmlcode").val(objQuestionnaire.questionCode);
  //                            ////置灰
  //                            //$('#htmlcode').attr("disabled", "disabled");

  //                            //显示；
  //                            $("#Oldcode").show();//显示div
  //                            // 把questioncode 存放右上角；
  //                            $("#ContentHtmlCode").val(objQuestionnaire.questionCode)
  //                            // $("#htmlcode").val(objQuestionnaire.questionCode);
  //                            //置灰
  //                            // $('#htmlcode').attr("disabled", "disabled");

  //                            //运行事件；
  //                            ShowHtmlcode();
  //                            //  Preview();

  //                        }
  //                        else {
  //                            //如果源代码字段值为空，则隐藏
  //                            $("#Oldcode").hide();//隐藏div

  //                        }

  //                        //拼接；
  //                        $("#ContentHtmlText").html(strhtml);
  //                    }
  //                }

  //            }

  //        }

  //    }
  //    catch (e) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
  //        alert(strMsg);
  //    }
  //}

  //检查事件得到子iframe框架控件属性值；
  public async Checkrundata() {
    //检查标准数据源

    //获取问题检查的对象列表数据源
    //获取标准表的数据源
    const strCourseId = clsPubLocalStorage.courseId;
    const strWherege_Examination =
      "questionId='" + this.strQuestionId + "' And  courseId='" + strCourseId + "'";
    const arrge_ExaminationCriteriaObjLst = await ge_ExaminationCriteria_GetObjLstAsync(
      strWherege_Examination,
    );

    //判断如果获取的指定控件下的值长度小于o说明没有作答；
    //$("#" + id).find("input[name=item]").attr("id");
    //if ($("#iframeResult").contents().find("input").length < 0) {
    //if ($("#iframeResult").contents().find("body").html.length < 0) {

    //    alert("请先点击运行窗口按钮");
    //}
    //else {

    //判断题目类型
    const strQuestionTypeId = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionTypeId');

    //调用检查过程表数据；
    const responseObjLst6 = await this.AlgorithmQuestionCheck();

    //}
  }

  //算法题检测
  public async AlgorithmQuestionCheck() {
    const strThisFuncName = this.AlgorithmQuestionCheck.name;
    const userStore = useUserStore();
    //获取检查过程

    const strWhereCond = " questionId='" + this.strQuestionId + "' order by orderNum Asc";
    //得到检查过程

    const arrge_InspectProcessObjLst = await ge_InspectProcess_GetObjLstAsync(strWhereCond);
    let strhtml: string = '';
    try {
      //0001	赋值
      //0002	运算符
      //0003	单击事件
      //0004	运算结果
      let strRun: string = ''; //定义中间变量，用来记录是否执行了函数验证，默认为空，如果有值说明已经执行了函数验证；
      this.CheckIsRight = true; //默认是true；
      let j = 0;
      for (let i = 0; i < arrge_InspectProcessObjLst.length; i++) {
        const stroperationTypeId = arrge_InspectProcessObjLst[i].operationTypeId;
        //得到控件ID
        const strControlId = arrge_InspectProcessObjLst[i].controlId;
        //得到值
        const strControlValue = arrge_InspectProcessObjLst[i].controlValue;
        //得到描述；
        const strCheckMemo = arrge_InspectProcessObjLst[i].checkMemo;
        //得到属性ID
        const strAttributeId = arrge_InspectProcessObjLst[i].attributeId;
        //检查表主键
        const criteriaId = arrge_InspectProcessObjLst[i].inspectId;
        //控件类型
        const controlTypeId = arrge_InspectProcessObjLst[i].controlTypeId;
        //操作类型；
        const strExaminationTypeId = arrge_InspectProcessObjLst[i].examinationTypeId;
        const strEventTypeId = arrge_InspectProcessObjLst[i].eventTypeId;
        const strFunctionName = arrge_InspectProcessObjLst[i].functionName; //函数名；

        if (stroperationTypeId == '0001') {
          $('#iframeResult')
            .contents()
            .find('#' + strControlId)
            .val(strControlValue);
        } else if (stroperationTypeId == '0002') {
          //验证函数；
          const str = strFunctionName;
          //获取用户编辑的文本域类容；
          const strTextAreacode = GetTextAreaValueInDivObj(this.thisDivLayout, 'textareaCode');
          if (strTextAreacode.indexOf(str) != -1) {
            // true
          } else {
            //不存在
            $('#lblmsgtext').html('提示：请正确使用函数名！');
          }
        } else if (stroperationTypeId == '0003') {
          //得到Id onclick;
          //按钮事件
          // strCalc = $("#iframeResult").contents().find("#" + strControlId).attr("onclick");

          ////截取后2位之前数据
          //strCalc = strCalc.substr(0, strCalc.length - 2);

          //if (typeof strCalc != 'undefined' && strCalc instanceof Function) {
          // $("#iframeResult").contents().find("#" + strControlId).click();
          //这里需要读取属性值
          let strCalc;
          switch (strEventTypeId) {
            case '0001':
              //0001	 0001	鼠标点击事件
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onclick');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .click();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0002':
              //0002	0002	鼠标按下事件
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmousedown');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mousedown();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0003':
              //0003	onmouseup
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmouseup');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mouseup();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0004':
              // 0004	onmouseover	鼠标移入事件
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmouseover');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mouseover();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0005':
              //0005	鼠标移出事件	onmouseout

              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmouseout');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mouseout();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0006':
              // 0006	鼠标移动事件	onmousemove
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onmousemove');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .mousemove();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0007':
              //0007	键盘按下松开事件	onkeyup
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onkeyup');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .keyup();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0008':
              // 0008	键盘按下触发事件	onkeydown
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onkeydown');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .keydown();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0009':
              //0009	失去焦点修改事件	onchange
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onchange');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .change();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;
            case '0010':
              // 0010	style.获得焦点事件	onfocus
              //获取style中font-size
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onfocus');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .focus();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;

            case '0011':
              // 0011	style.失去焦点事件	onblur
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onblur');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .blur();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }
              break;

            case '0012':
              //选择文本事件	onselect
              strCalc = $('#iframeResult')
                .contents()
                .find('#' + strControlId)
                .attr('onselect');

              if (strCalc != 'undefined') {
                try {
                  $('#iframeResult')
                    .contents()
                    .find('#' + strControlId)
                    .select();
                } catch (e) {
                  //$("#lblmsgtext").html("提示：请正确使用函数名和控件Id！");
                  const strMsg: string = `${e}.(in ${this.constructor.name}.${strThisFuncName})`;
                  console.error(strMsg);
                  console.error('请正确使用函数名和控件Id');
                  //隐藏置灰检查按钮；
                  $('#Checkrundata').attr('disabled', 'true');
                  //有一次失败则false；
                  this.CheckIsRight = false;
                  return;
                }
              } else {
                $('#lblmsgtext').html('触发按钮ID和检查过程设定按钮ID值不一致！请联系管理');
                console.error('触发按钮ID和检查过程设定ID值不一致,请联系管理');
                //隐藏置灰检查按钮；
                $('#Checkrundata').attr('disabled', 'true');
                //有一次失败则false；
                this.CheckIsRight = false;
                return;
              }

              break;
          }

          //}
          //else {

          //    alert("请设置按钮触发正确事件的函数！");
          //    break;
          //}
        } else if (stroperationTypeId == '0004') {
          j++;
          //判断运行结果是否和页面结果一致；
          strhtml += '<tr>';
          strhtml += '<td class="NameTD" style="width: 50 %;" >';

          // const PageControlvalue = $('#iframeResult')
          //   .contents()
          //   .find('#' + strControlId)
          //   .html();
          const PageControlvalue = OperationQuestionHistory.vuebtn_Click(
            'getControlHtml',
            strControlId,
          );
          if (strControlValue == PageControlvalue) {
            strhtml += strCheckMemo + '-----成功';
            //检测是否把所有过程都成功通过；
          } else {
            strhtml += strCheckMemo + '-----失败';
            //有一次失败则false；
            this.CheckIsRight = false;
          }
          strhtml += '</td></tr>';
        } else if (stroperationTypeId == '0005') {
          //控件属性检查
          //strControlValue 控件值；
          const responseObjLst1 = await this.GetCheckAttribute(
            strAttributeId,
            criteriaId,
            controlTypeId,
            strExaminationTypeId,
            strControlId,
            strControlValue,
          );
          strRun = '1';
        } else {
          //其他类型；
        }
      }

      //拼接；因为执行多次 所以用append
      //$("#tabwucScore").html(strhtml);
      $('#tabwucScore').append(strhtml);

      //for循环结束后  判断题目如果出错，那么则不需要显示此数据；
      //  if (this.CheckIsRight == true) {
      //保证没有异常；
      if (strRun == '1') {
        //保证已经执行了 函数验证；
        //检测完成之后 提示该题目汇总信息红色字体标识；
        //该题出错（红色）
        //如果前面都正确，就再添加一行：该题正确，恭喜您！（红色）
        const strUserId = userStore.userId;
        const strWhereResultCond =
          " questionId='" +
          this.strQuestionId +
          "' And isRight='false' And userId='" +
          strUserId +
          "'";
        //调用操作题目类型表； 获取题目要求
        const objge_InspectionResults = await ge_InspectionResults_GetFirstObjAsync(
          strWhereResultCond,
        );
        if (objge_InspectionResults != null) {
          //说明有检查错误，那么该题目就没通过
          $('#lblmsgResult').html('该题出错');
        } else {
          $('#lblmsgResult').html('该题正确，恭喜您！');
        }
      }
      //}
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //获取的检查属性
  public async GetCheckAttribute(
    strAttributeId: string,
    criteriaId: string,
    controlTypeId: string,
    strExaminationTypeId: string,
    controlId: string,
    strControlValue: string,
  ) {
    const strThisFuncName = this.GetCheckAttribute.name;

    try {
      const strid = OperationQuestionHistory.vuebtn_Click('getElementId', controlId) ?? '';

      //const strclass = $("#iframeResult").contents().find("#" + controlId).attr("class");
      ////const strvalue = $("#iframeResult").contents().find("#" + controlId).val();
      //const strvalue = $("#iframeResult").contents().find("#" + controlId).text();

      let strControlName = '';

      //这里需要判断指定的控件、指定的ID是否存在，存在则调用扩展函数去比对属性；如果不存在，则无需比对属性，说明控件创建错误；直接把数据插入到相关表；
      const arrge_ControlTypeObjLst = await ge_ControlType_GetObjLstCache();
      const objge_ControlType = arrge_ControlTypeObjLst.find(
        (x) => x.controlTypeId == controlTypeId,
      );
      if (objge_ControlType != null) {
        strControlName = objge_ControlType.controlTypeEnName; //获取控件英文名称;
      }

      // const controlId = controlId; //此ID是数据库中需要操作的标准ID

      //查询指定控件对应的ID是否存在；
      // const ResultControlId = $('#iframeResult')
      //   .contents()
      //   .find(strControlName + "[id='" + controlId + "']")
      //   .attr('id');
      const ResultControlId =
        OperationQuestionHistory.vuebtn_Click('getElementId', controlId) ?? '';

      //参数用来区别比后的结果值；
      let strResultType = '';
      let strValue = '';
      if (strExaminationTypeId != '') {
        switch (strExaminationTypeId) {
          case '0001':
            //显示控件 strResultType=1 主要是用户0002 0003来区分控件是否成功；等于2则不成功

            if (ResultControlId == undefined) {
              strResultType = '2';
            } else {
              strResultType = '1';

              //这里需要读取属性值
              switch (strAttributeId) {
                case '0001':
                  //0001	value

                  // const strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .val();
                  strValue = OperationQuestionHistory.vuebtn_Click('getControlValue', controlId);
                  break;
                case '0002':
                  //0002	html
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .html();
                  strValue = OperationQuestionHistory.vuebtn_Click('getControlHtml', controlId);
                  break;
                case '0003':
                  //0003	text
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('text');
                  strValue = OperationQuestionHistory.vuebtn_Click('getControlText', controlId);
                  break;
                case '0004':
                  // 0004	class
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('class');
                  strValue = OperationQuestionHistory.vuebtn_Click('getElementClass', controlId);
                  break;
                case '0005':
                  //0005	name
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('name');

                  strValue = OperationQuestionHistory.vuebtn_Click('getElementName', controlId);
                  break;
                case '0006':
                  // 0006	type

                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('type');

                  strValue = OperationQuestionHistory.vuebtn_Click('getElementType', controlId);

                  break;
                case '0007':
                  //0007	alt
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('alt');
                  strValue = OperationQuestionHistory.vuebtn_Click('getElementAlt', controlId);

                  break;
                case '0008':
                  // 0008	src
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('src');
                  strValue = OperationQuestionHistory.vuebtn_Click('getElementArc', controlId);

                  break;
                case '0009':
                  //0009	checked
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('checked');
                  strValue = OperationQuestionHistory.vuebtn_Click('getElementChecked', controlId);

                  break;
                case '0010':
                  // 0010	style.fontSize
                  //获取style中font-size
                  // const strtt = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .attr('style');
                  // strvalue = strtt
                  //   .match(/(?:font-size:)s*(\d+.{0,2}\d*)/)[0]
                  //   .replace(/font-size:/, '');
                  strValue = OperationQuestionHistory.vuebtn_Click('getFontSize', controlId);

                  break;

                case '0011':
                  // 0011	style.color
                  // strvalue = document.getElementById("iframeResult").contentWindow.document.getElementById("" + controlId).style.color;
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .css('color');

                  // strvalue = rgb2hex(strvalue);
                  strValue = OperationQuestionHistory.vuebtn_Click('getFontColor', controlId);

                  break;

                case '0012':
                  // 0012	style.display
                  //strvalue = document.getElementById("iframeResult").contentWindow.document.getElementById("" + controlId).style.display;
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .css('display');
                  strValue = OperationQuestionHistory.vuebtn_Click('getDisplay', controlId);

                  break;

                case '0013':
                  // 0013	style.backgroundColor
                  // strvalue = document.getElementById("iframeResult").contentWindow.document.getElementById("" + controlId).style.background;
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .css('background-color');

                  // strvalue = rgb2hex(strvalue);

                  strValue = OperationQuestionHistory.vuebtn_Click('getFontColor', controlId);

                  break;

                case '0014':
                  //0014	style.height
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .height();
                  strValue = OperationQuestionHistory.vuebtn_Click('getControlHeight', controlId);
                  strValue = strValue + 'px';

                  break;
                case '0015':
                  //0015	style.width
                  // strvalue = $('#iframeResult')
                  //   .contents()
                  //   .find('#' + controlId)
                  //   .width();
                  // strvalue = strvalue + 'px';
                  strValue = OperationQuestionHistory.vuebtn_Click('getControlWidth', controlId);
                  strValue = strValue + 'px';

                  break;
              }
            }

            break;
          case '0002':
            //隐藏控件
            if (
              $('#iframeResult')
                .contents()
                .find('#' + controlId)
                .is(':hidden')
            ) {
              strResultType = '1';
            } else {
              strResultType = '2';
            }
            break;
          case '0003':
            //删除控件
            //判断删除；0003
            strValue = OperationQuestionHistory.vuebtn_Click('getControlSize', controlId);
            // $('#iframeResult')
            // .contents()
            // .find('#' + controlId)
            // .size()
            if (Number(strValue) > 0) {
              //说明存在 ，没有删除
              strResultType = '2';
            } else {
              strResultType = '1';
            }
            break;
          case '0004':
            //获取下拉框子项数量
            //0004 获取子项值，所以strvalue 需要重新赋值；
            // strvalue = $('#iframeResult')
            //   .contents()
            //   .find('#' + controlId + ' option').length;
            strValue = OperationQuestionHistory.vuebtn_Click('getOptionCount', controlId);
            //判断获取的界面值 和检查过程标准值是否对应
            if (strValue == strControlValue && ResultControlId != undefined) {
              strResultType = '1';
            } else {
              strResultType = '2';
            }

            break;

          default:
            strResultType = '';
            break;
        }
      } else {
        const strMsg: string = `检查类型 strExaminationTypeId变量值为空`;
        console.error(strMsg);
      }

      const strclass = '';
      //根据当前参数执行检查操作；
      const responseObjLst1 = await this.CheckAttributeSubmitClick(
        strid,
        strclass,
        strValue,
        controlId,
        criteriaId,
        controlTypeId,
        strResultType,
      );
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `获取属性函数不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //Id: string, Css: string, value: string,界面获取的控件参数
  //ExaminationControlId: string, criteriaId: string,数据源中 检查类型和主键类型；
  //controlTypeId: string,控件类型 ResultType: string判断控件类型值是否存在
  public async CheckAttributeSubmitClick(
    Id: string,
    Css: string,
    value: string,
    ExaminationControlId: string,
    criteriaId: string,
    controlTypeId: string,
    ResultType: string,
  ) {
    const strThisFuncName = this.CheckAttributeSubmitClick.name;
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    //const strQuestionId = "00003038";//这里先默认；
    const strQuestionId = this.strQuestionId;
    const strExamBatchNo = this.strExamBatchNo; //批次；
    const strCourseId = clsPubLocalStorage.courseId;
    //获取文本域内容；
    const strHmtlcode = GetTextAreaValueInDivObj(this.thisDivLayout, 'textareaCode');
    //const strHmtlcode = "";

    //把对应的参数存入实体对象；
    const objge_InspectionResultsENEx: clsge_InspectionResultsENEx =
      new clsge_InspectionResultsENEx();
    //主键；criteriaId
    objge_InspectionResultsENEx.criteriaId = criteriaId;
    objge_InspectionResultsENEx.userId = strUserId;
    objge_InspectionResultsENEx.examBatchNo = strExamBatchNo;
    objge_InspectionResultsENEx.courseId = strCourseId;
    objge_InspectionResultsENEx.controlHtml = strHmtlcode;
    if (Id == undefined) {
      Id = '';
    }
    if (Css == undefined) {
      Css = '';
    }
    if (value == undefined) {
      value = '';
    }
    objge_InspectionResultsENEx.controlId = Id;
    objge_InspectionResultsENEx.controlClass = Css;
    objge_InspectionResultsENEx.controlValue = value;
    objge_InspectionResultsENEx.result = ResultType;
    objge_InspectionResultsENEx.questionId = strQuestionId;

    const arrge_ControlTypeObjLst: Array<clsge_ControlTypeEN> = []; //控件类型

    let strhtml: string = '';
    const strControlName = '';
    try {
      //调用合并的扩展函数，验证控件、和控件相关属性；
      const arrge_InspectionResultsObjLst =
        await ge_ExaminationCriteriaEx_Getge_InspectionResultsByExamTypeEx(
          objge_InspectionResultsENEx,
        );

      let k = 0;
      if (arrge_InspectionResultsObjLst.length > 0) {
        for (let i = 0; i < arrge_InspectionResultsObjLst.length; i++) {
          k++;
          strhtml += '<tr>';
          strhtml += '<td class="NameTD" style="width: 50 %;" >';
          const inspectionName = arrge_InspectionResultsObjLst[i].inspectionName;

          strhtml += k + '.' + inspectionName;
          strhtml += '</td></tr>';
        }
      } else {
        //这里没有得到比对返回数据，说明数据库真确题目表，没有该题目数据；所以需要提示 该题目还没有设置正确答案；
        const strMsg: string = `请按要求设置控件和控件Id`;
        console.log(strMsg);
      }

      //拼接；
      //$("#tabwucScore").html(strhtml);
      $('#tabwucScore').append(strhtml);

      //这里需要判断如果该批次题目已经全部提交，那么则不可以提交当前批次的任何题目；
      //判断题目有没有提交，如果提交了则不可以编辑
      const strWhereResultCond =
        " questionId='" +
        strQuestionId +
        "' And examBatchNo='" +
        strExamBatchNo +
        "' And updUserId='" +
        strUserId +
        "'";
      //调用操作题目类型表； 获取题目要求
      const objge_StuBatchQuesRela = await ge_StuBatchQuesRela_GetFirstObjAsync(strWhereResultCond);
      if (objge_StuBatchQuesRela != null) {
        if (objge_StuBatchQuesRela.isSubmit == true) {
          $('#QuestionSubmit').hide();
        } else {
          $('#QuestionSubmit').attr('disabled', 'false');
        }
      }

      console.log('完成CheckAttributeSubmitClick!');
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //操作题提交函数；
  public async SubmitClick() {
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    //const strQuestionId = "00003038";//这里先默认；
    const strQuestionId = this.strQuestionId;
    const strExamBatchNo = this.strExamBatchNo; //批次；
    const strCourseId = clsPubLocalStorage.courseId;
    //获取文本域内容；
    const strHmtlcode = GetTextAreaValueInDivObj(this.thisDivLayout, 'textareaCode');
    //const strHmtlcode = "";

    //把对应的参数存入实体对象；
    const objge_InspectionResultsENEx: clsge_InspectionResultsENEx =
      new clsge_InspectionResultsENEx();

    objge_InspectionResultsENEx.criteriaId = '';
    objge_InspectionResultsENEx.userId = strUserId;
    objge_InspectionResultsENEx.examBatchNo = strExamBatchNo;
    objge_InspectionResultsENEx.courseId = strCourseId;
    objge_InspectionResultsENEx.controlHtml = strHmtlcode;
    //因为参数已经提交检查，所以借用扩展实体 进行提交操作；
    objge_InspectionResultsENEx.controlId = '';
    objge_InspectionResultsENEx.controlClass = '';
    objge_InspectionResultsENEx.controlValue = '';
    objge_InspectionResultsENEx.result = '';
    objge_InspectionResultsENEx.questionId = strQuestionId;

    const responseText3 = await ge_ExaminationCriteriaEx_SubmitQuestionEx(
      objge_InspectionResultsENEx,
    );
    const returnBool: boolean = !!responseText3;
    if (returnBool == true) {
      const strMsg: string = `提交成功`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //提交所有题目
  //操作题提交函数；
  public async SubmitAllClick() {
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    //const strQuestionId = "00003038";//这里先默认；
    const strQuestionId = this.strQuestionId;
    const strExamBatchNo = this.strExamBatchNo; //批次；
    const strCourseId = clsPubLocalStorage.courseId;
    //获取文本域内容；
    const strHmtlcode = GetTextAreaValueInDivObj(this.thisDivLayout, 'textareaCode');
    //const strHmtlcode = "";

    // const strMsg = Format("你确定要提交吗?,提交后不可作答未答题目！");

    //const gnl = confirm(strMsg);
    //if (gnl == true) {

    //先判断是否就提交过，提交了不可再提交
    const strWhereResultCond =
      " questionId='" +
      strQuestionId +
      "' And examBatchNo='" +
      strExamBatchNo +
      "' And updUserId='" +
      strUserId +
      "'";
    //调用操作题目类型表； 获取题目要求
    const objge_StuBatchQuesRela = await ge_StuBatchQuesRela_GetFirstObjAsync(strWhereResultCond);
    if (objge_StuBatchQuesRela != null) {
      if (objge_StuBatchQuesRela.isSubmit == true) {
        alert('该闯关批次已经提交过，不可重复提交');
      } else {
        //把对应的参数存入实体对象；
        const objge_InspectionResultsENEx: clsge_InspectionResultsENEx =
          new clsge_InspectionResultsENEx();

        objge_InspectionResultsENEx.criteriaId = '';
        objge_InspectionResultsENEx.userId = strUserId;
        objge_InspectionResultsENEx.examBatchNo = strExamBatchNo;
        objge_InspectionResultsENEx.courseId = strCourseId;
        objge_InspectionResultsENEx.controlHtml = strHmtlcode;
        //因为参数已经提交检查，所以借用扩展实体 进行提交操作；
        objge_InspectionResultsENEx.controlId = '';
        objge_InspectionResultsENEx.controlClass = '';
        objge_InspectionResultsENEx.controlValue = '';
        if (this.CheckIsRight == true) {
          //没有值如果是计算算法结果，那么则为true  赋值空；
          objge_InspectionResultsENEx.result = '';
        } else {
          //有值说明出错；赋值1
          objge_InspectionResultsENEx.result = '1';
        }
        objge_InspectionResultsENEx.questionId = strQuestionId;
        objge_InspectionResultsENEx.idCurrEduCls = clsPubLocalStorage.idCurrEduCls;

        const responseText3 = await ge_ExaminationCriteriaEx_SubmitAllQuestionEx(
          objge_InspectionResultsENEx,
        );
        const returnBool: boolean = !!responseText3;
        if (returnBool == true) {
          const strMsg: string = `提交成功`;
          console.error(strMsg);
          alert(strMsg);
        }
      }
    }

    // }
  }

  //算法题提交函数；
  public async SuanfaSubmitClick() {
    const userStore = useUserStore();
    const strUserId = userStore.userId;

    const strQuestionId = this.strQuestionId;
    const strExamBatchNo = this.strExamBatchNo; //批次；
    const strCourseId = clsPubLocalStorage.courseId;
    //获取文本域内容；
    const strHmtlcode = GetTextAreaValueInDivObj(this.thisDivLayout, 'textareaCode');
    //const strHmtlcode = "";

    //把对应的参数存入实体对象；
    const objge_InspectionResultsENEx: clsge_InspectionResultsENEx =
      new clsge_InspectionResultsENEx();

    objge_InspectionResultsENEx.criteriaId = '';
    objge_InspectionResultsENEx.userId = strUserId;
    objge_InspectionResultsENEx.examBatchNo = strExamBatchNo;
    objge_InspectionResultsENEx.courseId = strCourseId;
    objge_InspectionResultsENEx.controlHtml = strHmtlcode;
    //因为参数已经提交检查，所以借用扩展实体 进行提交操作；
    objge_InspectionResultsENEx.controlId = '';
    objge_InspectionResultsENEx.controlClass = '';
    objge_InspectionResultsENEx.controlValue = '';
    objge_InspectionResultsENEx.result = '';
    objge_InspectionResultsENEx.questionId = strQuestionId;

    const responseText3 = await ge_ExaminationCriteriaEx_SubmitQuestionEx(
      objge_InspectionResultsENEx,
    );
    const returnBool: boolean = !!responseText3;
    if (returnBool == true) {
      const strMsg: string = `提交成功`;
      console.error(strMsg);
      alert(strMsg);
    }

    ////把对应的参数存入实体对象；
    //const objUserAnswerResult: clsUserAnswerResultEN = new clsUserAnswerResultEN();
    //objUserAnswerResult.userId = strUserId;
    //objUserAnswerResult.examBatchNo = strExamBatchNo;
    //objUserAnswerResult.courseId = strCourseId;
    //objUserAnswerResult.answerText = strHmtlcode;
    ////因为参数已经提交检查，所以借用扩展实体 进行提交操作；
    //objUserAnswerResult.updDate = clsPubFun4Web.getNowDate();
    //objUserAnswerResult.updUser = strUserId;

    //objUserAnswerResult.isRight = this.CheckIsRight;
    ////objUserAnswerResult.result = "";
    //objUserAnswerResult.questionId = strQuestionId;

    //const responseText3 = await UserAnswerResult_AddNewRecordAsync(objUserAnswerResult);
    //const returnBool: boolean = !!responseText3;
    //if (returnBool == true) {
    //    const strMsg: string = `提交成功`;
    //    console.error(strMsg);
    //    alert(strMsg);
    //}
  }

  //帮助提示
  public async ShowMsgClick() {
    const strThisFuncName = this.ShowMsgClick.name;

    //得到当前题目Id
    const QuestionId = this.strQuestionId;
    try {
      const strWhere = "questionId = '" + QuestionId + "'";
      const objAnswer = await Answer_GetFirstObjAsync(strWhere);
      if (objAnswer != null) {
        //获取提示代码存放到隐藏层控件
        $('#DivMsg').val(objAnswer.answerContent); //显示div
      }
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `获取帮助数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //获取需要导出的题目信息
  //获取操作题目
  public async btnExportQuestion(arrQuestionId0: Array<number>) {
    const strThisFuncName = this.btnExportQuestion.name;

    const arrQuestionIdStr = arrQuestionId0.join(',');

    const strWhereCond: string = ' questionId in(' + arrQuestionIdStr + ')';

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQuestionnaireObjLst: Array<clsQuestionnaireEN> = [];
    const arrtz_ContentAttachmentObjLst: Array<clstz_ContentAttachmentEN> = [];
    //检查标准数据源
    //const arrge_ExaminationCriteriaObjLst: Array<clsge_ExaminationCriteriaEN> = [];
    //用户回答结果表
    const arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    try {
      //this.recCount = await Questionnaire_GetRecCountByCondAsync(strWhereCond);
      //$('#hidRecCount').val(this.recCount);
      //const objPagerPara: stuPagerPara = {
      //    pageIndex: intCurrPageIndex,
      //    pageSize: this.pageSize,
      //    whereCond: strWhereCond,
      //    orderBy: this.hidSortQuestionnaireBy,
      //    sortFun: (x, y) => { return 0; }
      //};
      //arrQuestionnaireObjLst = await Questionnaire_GetObjLstByPagerAsync(objPagerPara);

      arrQuestionnaireObjLst = await Questionnaire_GetObjLstAsync(strWhereCond);
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const userStore = useUserStore();
    try {
      const strExamBatchNo = this.strExamBatchNo; //批次；
      const strUserId = userStore.userId;
      const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;
      let strhtml: string = '';
      if (arrQuestionnaireObjLst.length != 0) {
        let strDateTime = '';
        const strWhereResultCond =
          " examBatchNo='" + strExamBatchNo + "' And updUserId='" + strUserId + "'";
        //调用操作题目类型表； 获取题目要求
        const objge_StuBatchQuesRela = await ge_StuBatchQuesRela_GetFirstObjAsync(
          strWhereResultCond,
        );
        if (objge_StuBatchQuesRela != null) {
          strDateTime = objge_StuBatchQuesRela.updDate;
          const strGameLevelName = $('#LevelName').text();
          const strUserName = userStore.getUserName;
          strhtml += '<div><span class="color3">关卡：' + strGameLevelName + '</span>';
          strhtml +=
            ' <br><span class="color4">学号：</span><span class="abstract-text">' +
            strUserId +
            '</span> ';
          strhtml +=
            ' &nbsp;&nbsp;<span class="color4">姓名：</span><span class="abstract-text">' +
            strUserName +
            '</span> ';
          strhtml +=
            '&nbsp;&nbsp;<span class="color4">日期：</span><span class="abstract-text">' +
            strDateTime +
            '</span> </div></br > ';
        }

        let v = 0;
        //for循环题目
        for (let j = 0; j < arrQuestionnaireObjLst.length; j++) {
          v++;
          //得到单个题目Id
          const strQuestionId = arrQuestionnaireObjLst[j].questionId;
          const strQuestionName = arrQuestionnaireObjLst[j].questionName;

          const strWhereAttachment =
            "tableNameKey='" + strQuestionId + "' And  contentTypeId='0001'";
          //const strCourseId = clsPubLocalStorage.courseId;
          const arrtz_ContentAttachmentObjLst = await tz_ContentAttachment_GetObjLstAsync(
            strWhereAttachment,
          );

          const strCourseId = clsPubLocalStorage.courseId;

          //获取传递过来的ID值进行展示；
          const strWhereCond = " questionId='" + strQuestionId + "'";

          //获取问题ID，存放隐藏控件；
          this.strQuestionId = strQuestionId;

          //根据题目号 和内容类型查询题目附件表 得到想关信息；
          const arrList = arrtz_ContentAttachmentObjLst.filter(
            (x) => x.tableNameKey == strQuestionId.toString() && x.contentTypeId == '0001',
          );
          if (arrList.length > 0) {
            // strhtml += v + "." + strQuestionName;
            strhtml += '<div class="color2">' + v + '.' + strQuestionName + '</div>';
            ////换行符
            const strBr = '<br/>&nbsp;&nbsp;&nbsp;&nbsp;';
            for (let i = 0; i < arrList.length; i++) {
              //判断附件资源类型
              const strResourceType = arrList[i].idResourceType;
              const strTextContent = arrList[i].textContent;
              //  strTextContent = strTextContent.replace(/\r\n/g, strBr);
              //  strTextContent = strTextContent.replace(/\n/g, strBr);

              if (strResourceType == '0004') {
                const strAddressAndPortfull = strAddressAndPort + arrList[i].filePath;
                strhtml +=
                  '<br><div class="example"><img style="max-width:400px; margin-left: 10px; " src="' +
                  strAddressAndPortfull +
                  '"  alt="" data-action="zoom" /></div>';
              } else if (strResourceType == '0010' || strResourceType == '0011') {
                strhtml += '<br><pre><div class="color6">' + strTextContent + '</div></pre>';
              } else if (strResourceType == '0015') {
                //源代码
                //判断如果questioncode字段代码不为空，那么则需要把内容填充到指定的文本域
                if (arrList[i].textContent != '') {
                  strhtml += '<br><div class="color5">提供源代码：</div>';
                  strhtml +=
                    '<br><div class="example"><pre><textarea rows="10" cols="500">' +
                    arrList[i].textContent +
                    '</textarea></pre></div>';
                } else {
                }
              }
            }
          } else {
            strhtml += '<div class="color2">' + v + '.' + strQuestionName + '</div>';
          }

          const strUserId = userStore.userId;
          //判断题目有没有提交，如果提交了则不可以编辑
          const strWhereResultCond =
            " questionId='" +
            strQuestionId +
            "' And examBatchNo='" +
            this.strExamBatchNo +
            "' And userId='" +
            strUserId +
            "'";
          //调用操作题目类型表； 获取题目要求
          const objUserAnswerResult = await UserAnswerResult_GetFirstObjAsync(strWhereResultCond);
          if (objUserAnswerResult != null) {
            //如果不等于说明已经把数据存入了数据库；
            strhtml += '<br><div class="color5">题目回答结果：</div>';
            //把用户当前所做题目内容显示；
            strhtml +=
              '<br><div class="example"><pre><textarea rows="10" cols="500">' +
              objUserAnswerResult.answerText +
              '</textarea></pre></div><br>';
          } else {
          }

          strhtml += '<br><hr/>';
        }

        //拼接；
        $('#QuestionDetail').html(strhtml);
      }
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public set strCriteriaId(value: string) {
    $('#hidCriteriaId').val(value);
  }
  /*
   * 存放标准表主键id
   */
  public get strCriteriaId(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidCriteriaId');
  }

  public set strExaminationTypeId(value: string) {
    $('#hidExaminationTypeId').val(value);
  }
  /*
   * 存放标准检查类型id
   */
  public get strExaminationTypeId(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidExaminationTypeId');
  }

  /*
   * 存放关卡题目类型
   */
  public set strGameLevelId(value: string) {
    $('#hidGameLevelId').val(value);
  }
  /*
   * 存放关卡题目类型
   */
  public get strGameLevelId(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidGameLevelId');
  }

  /*
   * 存放控件类型id ，用于提交验证时，检测用户是否正确创建；
   */
  public set strControlTypeID(value: string) {
    $('#hidControlTypeID').val(value);
  }

  public get strControlTypeID(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidControlTypeID');
  }

  public set strControlID(value: string) {
    $('#hidControlID').val(value);
  }
  /*
   * 存放控件id
   */
  public get strControlID(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidControlID');
  }

  public set strExamBatchNo(value: string) {
    $('#hidExamBatchNo').val(value);
  }

  /*
   * 存放闯关批次
   */
  public get strExamBatchNo(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidExamBatchNo');
  }

  public set strQuestionId(value: number) {
    $('#hidQuestionId').val(value);
  }
  /*
   * 存放题目ID
   */
  public get strQuestionId(): number {
    return Number(GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionId'));
  }

  // 关卡模式
  public set strLevelModeTypeId(value: string) {
    $('#hidLevelModeTypeId').val(value);
  }
  // 关卡模式
  public get strLevelModeTypeId(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidLevelModeTypeId');
  }

  /*
   * 获取当前页序号(Used In BindGv_Cache)
   */
  public get CurrPageIndex(): number {
    const strCurrPageIndex = GetInputValueInDivObj(this.thisDivLayout, 'hidCurrPageIndex');
    return Number(strCurrPageIndex);
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    $('#hidCurrPageIndex').val(value);
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortQuestionnaireBy(value: string) {
    $('#hidSortQuestionnaireBy').val(value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortQuestionnaireBy(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidSortQuestionnaireBy');
  }

  /*
   * 是否启用 (Used In Clear())
   */
  public set CheckIsRight(value: boolean) {
    $('#hidCheckIsRight').val(value.toString());
  }
  /*
   * 是否启用 (Used In PutDataToClass())
   */
  public get CheckIsRight(): boolean {
    return Boolean(GetInputValueInDivObj(this.thisDivLayout, 'hidCheckIsRight'));
  }
  /*
   * 存放题目ID
   */
  public get questionId() {
    const strQuestionId = OperationQuestionHistory.GetPropValue('questionId');
    return strQuestionId;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'courseName|Ex':
        viewVarSet.sortQuestionnaireBy = `vcc_Course_Sim|courseName ${sortDirection}|Questionnaire.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'chapterName|Ex':
        viewVarSet.sortQuestionnaireBy = `cc_CourseChapter|chapterName ${sortDirection}|Questionnaire.CourseChapterId = cc_CourseChapter.CourseChapterId`;
        break;
      case 'questionTypeName|Ex':
        viewVarSet.sortQuestionnaireBy = `QuestionType|questionTypeName ${sortDirection}|Questionnaire.QuestionTypeId = QuestionType.QuestionTypeId`;
        break;
      case 'difficultyLevelName|Ex':
        viewVarSet.sortQuestionnaireBy = `ge_DifficultyLevel|difficultyLevelName ${sortDirection}|Questionnaire.DifficultyLevelId = ge_DifficultyLevel.DifficultyLevelId`;
        break;
      case 'levelModeTypeName|Ex':
        viewVarSet.sortQuestionnaireBy = `ge_LevelModeType|levelModeTypeName ${sortDirection}|Questionnaire.LevelModeTypeId = ge_LevelModeType.LevelModeTypeId`;
        break;
      default:
        viewVarSet.sortQuestionnaireBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_Questionnaire4Func(this.thisDivList);
  }
}
