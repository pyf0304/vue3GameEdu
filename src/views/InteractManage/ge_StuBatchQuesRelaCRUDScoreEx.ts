import { ge_StuBatchQuesRela_EditEx } from './ge_StuBatchQuesRela_EditEx';

import { enumChallengeMode } from '@/ts/FunClass/enumChallengeMode';
import { clsge_StuBatchQuesRelaEN } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN';
import { clsge_StuBatchQuesRelaENEx } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaENEx';
import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';

import {
  ge_StuBatchQuesRela_GetObjLstByIdStuBatchQuesRelaLstAsync,
  ge_StuBatchQuesRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsge_StuBatchQuesRelaWApi';
import {
  Answer_GetObjLstAsync,
  Answer_GetObjLstCache,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';

import {
  QuestionOptions_GetObjLstAsync,
  QuestionOptions_GetObjLstCache,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { QuestionType_GetObjByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import {
  ge_StuBatchQuesRelaEx_GetObjExLstByPagerAsync,
  ge_StuBatchQuesRelaEx_SetIsHasAnswer,
} from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';
import {
  UserAnswerResultEx_GetObjByge_StuBatchQuesRela,
  UserAnswerResultEx_Score_UserAnswer,
} from '@/ts/L3ForWApiEx/QuestionnaireResult/clsUserAnswerResultExWApi';
import {
  GetBr_Empty,
  GetButtonObjInDiv,
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetDiv_Empty,
  GetDivObjInDivObj,
  GetFirstCheckedKeyLstInDivObj,
  GetInputValueInDivObj,
  GetLi_Empty,
  GetSpan_Empty,
  GetTextAreaEmpty,
  GetTextBox_Empty,
  HideDivInDiv,
  ShowDivInDiv,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex, ShowEmptyRecNumInfo } from '@/ts/PubFun/clsOperateList';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ge_StuBatchQuesRelaCRUD } from '@/viewsBase/InteractManage/ge_StuBatchQuesRelaCRUD';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { useUserStore } from '@/store/modulesShare/user';
import clsCheck, { getCheckValueInDivObj } from '@/ts/FunClass/clsCheck';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  IdCurrEduCls_Session,
  qryVarSet,
} from '@/views/InteractManage/ge_StuBatchQuesRelaVueShare';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';

/* ge_StuBatchQuesRelaCRUDScoreEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ge_StuBatchQuesRelaCRUDScoreEx
  extends ge_StuBatchQuesRelaCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static intActiveQuestion = 0; //当前操作的考题编号
  public divQuestionShow = 'divQuestionShow';
  public static arrge_StuBatchQuesRela_Curr: Array<clsge_StuBatchQuesRelaEN> = [];
  public static arrCheckQues: Array<clsCheck> = []; //已做答的题的集合
  public static intQuestion = 0;
  public static gameLevelId_Static = '';
  public static challengeMode_Static = '';

  //public static divName4List: string = "divDataLst";
  //public static mstrSortge_StuBatchQuesRelaBy: string = "Id_StuBatchQuesRela";
  public static arrConditionFldName = [
    clsge_StuBatchQuesRelaENEx.con_QuestionTypeId,
    clsge_StuBatchQuesRelaENEx.con_CourseChapterId,
  ];
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 15;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
    CourseId_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string) {
    this.BindGv_ge_StuBatchQuesRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_StuBatchQuesRela':
        alert('该类没有绑定该函数：[this.BindGv_ge_StuBatchQuesRela4Func]！');
        //this.BindGv_ge_StuBatchQuesRela4Func(divVarSet.refDivList);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_StuBatchQuesRelaCRUDScoreEx;
    if (ge_StuBatchQuesRelaCRUD.objPageCRUD == null) {
      ge_StuBatchQuesRelaCRUD.objPageCRUD = new ge_StuBatchQuesRelaCRUDScoreEx();
      objPage = <ge_StuBatchQuesRelaCRUDScoreEx>ge_StuBatchQuesRelaCRUD.objPageCRUD;
    } else {
      objPage = <ge_StuBatchQuesRelaCRUDScoreEx>ge_StuBatchQuesRelaCRUD.objPageCRUD;
    }
    const objPage_Edit: ge_StuBatchQuesRela_EditEx = new ge_StuBatchQuesRela_EditEx(
      'ge_StuBatchQuesRela_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4DataList);
    let strMsg = '';
    switch (strCommandName) {
      case 'SetIsHasAnswer': //查询记录
        objPage.btnSetIsHasAnswer_Click();
        break;
      case 'ScoreByUserQuestion': //查询记录
        objPage.btnScoreByUserQuestion_Click();
        break;
      case 'ScoreByQuestionUser': //查询记录
        objPage.btnScoreByQuestionUser_Click();
        break;
      case 'clickTrim': //重序记录
        objPage.clickTrim(strKeyId);
        break;
      case 'MarkQuestions': //重序记录
        objPage.btnMarkQuestions_Click();
        break;
      case 'UpQuestion': //重序记录
        objPage.btnUpQuestion_Click();
        break;
      case 'nextQuestion': //重序记录
        objPage.btnNextQuestion_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage_Edit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage_Edit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage_Edit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage_Edit.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPage_Edit.btnUpdateRecordInTab_Click(Number(strKeyId));
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
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
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        strMsg =
          '命令:' +
          strCommandName +
          '在函数(ge_StuBatchQuesRelaCRUDScoreEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load_Cache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      this.InitVarSet();
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      CourseId_Session.value = clsPubLocalStorage.courseId;

      qryVarSet.isHasAnswer_q = 'true';

      viewVarSet.sortge_StuBatchQuesRelaBy = 'examBatchNo Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_StuBatchQuesRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinege_StuBatchQuesRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " {0} = '{1}' ",
      clsge_StuBatchQuesRelaEN.con_IdCurrEduCls,
      IdCurrEduCls_Session.value,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (qryVarSet.userId_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsge_StuBatchQuesRelaEN.con_UpdUserId,
          qryVarSet.userId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(Combinege_StuBatchQuesRelaCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_ge_StuBatchQuesRela4FuncBak(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_StuBatchQuesRela4Func.name;
    if (viewVarSet.sortge_StuBatchQuesRelaBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortge_StuBatchQuesRelaBy)为空，请检查！(In BindGv_ge_StuBatchQuesRela_Cache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv = this.divName4DataList;
    const strWhereCond = await this.Combinege_StuBatchQuesRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_StuBatchQuesRelaExObjLst: Array<clsge_StuBatchQuesRelaENEx> = [];
    try {
      this.recCount = await ge_StuBatchQuesRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_StuBatchQuesRelaBy,
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrge_StuBatchQuesRelaExObjLst = await ge_StuBatchQuesRelaEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_StuBatchQuesRelaExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsge_StuBatchQuesRelaEN._CurrTabName,
        IdCurrEduCls_Session.value,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfo(strListDiv, strMsg);

      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_StuBatchQuesRela4Func(divList, arrge_StuBatchQuesRelaExObjLst);
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_ge_StuBatchQuesRela4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_StuBatchQuesRela4Func.name;
    if (viewVarSet.sortge_StuBatchQuesRelaBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortge_StuBatchQuesRelaBy)为空，请检查！(In BindGv_ge_StuBatchQuesRela_Cache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv = this.divName4DataList;
    const strWhereCond = await this.Combinege_StuBatchQuesRelaCondition();
    // objge_StuBatchQuesRela_Cond.SetCondFldValue(
    //   clsge_StuBatchQuesRelaEN.con_IdCurrEduCls,
    //   IdCurrEduCls_Session.value,
    //   '=',
    // );
    // const strWhereCond = JSON.stringify(objge_StuBatchQuesRela_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    //const arrQuestionId_Include = await this.GetCondition_QuestionIdLst_In();
    //console.error(arrQuestionId_Include);
    let arrge_StuBatchQuesRelaExObjLst: Array<clsge_StuBatchQuesRelaENEx> = [];
    try {
      this.recCount = await ge_StuBatchQuesRela_GetRecCountByCondAsync(strWhereCond);
      let strSortFun = (x: any, y: any) => {
        return 0;
      };
      if (ge_StuBatchQuesRelaCRUD.sortFunStatic != undefined) {
        strSortFun = ge_StuBatchQuesRelaCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_StuBatchQuesRelaBy,
        sortFun: strSortFun,
      };
      arrge_StuBatchQuesRelaExObjLst = await ge_StuBatchQuesRelaEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_StuBatchQuesRelaExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsge_StuBatchQuesRelaEN._CurrTabName,
        IdCurrEduCls_Session.value,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfo(strListDiv, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_StuBatchQuesRela4Func(divList, arrge_StuBatchQuesRelaExObjLst);
      //console.log("完成BindGv_ge_StuBatchQuesRela4Func!");
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async showQuestion_Mark(
    id: number,
    arrge_StuBatchQuesRela: Array<clsge_StuBatchQuesRelaEN>,
  ) {
    const strThisFuncName = this.showQuestion_Mark.name;
    const questionnaireStore = useQuestionnaireStore();
    const userStore = useUserStore();
    const strChallengeMode = this.challengeMode;
    //questions = questions;
    ////去掉前后双引号
    //questions = questions.substring(1, questions.length - 1);
    const strCourseId = clsPubLocalStorage.courseId;
    const strUserId = userStore.userId;
    //上一次闯关结果
    const arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];
    $('.questioned').text(id + 1);

    const intQuestioned = (id + 1) / arrge_StuBatchQuesRela.length;
    ge_StuBatchQuesRelaCRUDScoreEx.vuebtn_Click('setQuestioned', intQuestioned.toString());
    if (ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion != undefined) {
      $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
        .removeClass('question_id')
        .addClass('active_question_id');
    }
    if (strChallengeMode == enumChallengeMode.StartGame_02) {
      const submitQuestions = GetButtonObjInDiv(this.divQuestionShow, 'submitQuestions');
      if (submitQuestions != null) {
        //submitQuestions.disabled = false;
      }
    }

    ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion = id;
    $('.question').find('.question_info').remove();
    $('.question').find('.question_infos').remove();
    const objge_StuBatchQuesRela = arrge_StuBatchQuesRela[id];
    const strQuestionId = arrge_StuBatchQuesRela[id].questionId;
    const objQuestion = await questionnaireStore.getObj(strQuestionId);
    if (objQuestion == null) {
      const strMsg = Format(
        '根据问题Id:[{0}]获取相应的记录的对象为空.(in {1}.{2})',
        strQuestionId,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strQuestionTypeId = objQuestion.questionTypeId;
    const arrAnswerObjLst = await Answer_GetObjLstCache(strCourseId);
    //获取获取题目选项库
    const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstCache(strCourseId);
    const arrQuestionOptions_Curr = arrQuestionOptionsObjLst.filter(
      (x) => x.questionId == strQuestionId,
    );

    //查询不是推荐的批次；

    let objUserAnswerResult;
    try {
      objUserAnswerResult = await UserAnswerResultEx_GetObjByge_StuBatchQuesRela(
        objge_StuBatchQuesRela,
      );
    } catch (e) {
      const strMsg: string = `根据学生批次问题表获取用户答案表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    let bolIsAnswer = false;
    let intQuestionOptionNum = 0;
    //// 遍历单条信息
    //$.each(questions[k], function (k, v) {
    switch (strQuestionTypeId) {
      case '02':
        //单选题
        $('.question_title').html(
          '<strong>第 ' +
            (id + 1) +
            ' 题 、</strong>' +
            objQuestion.questionName +
            "(单选题)<label id='IsCorrect" +
            objQuestion.questionId +
            "' style='display:none;color:red;'></label>",
        );
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
          if (bolIsAnswer == true) {
            item =
              "<li class='question_info' @click='clickTrim(this)' id='item" +
              k1 +
              "'><input  checked = 'checked' type='radio' name='item' value='" +
              objQuestionOption.questionOptionId +
              "' id = '" +
              objQuestion.questionId +
              "'>&nbsp;" +
              objQuestionOption.optionName +
              '</li>';
            $('.question').append(item);
          } else {
            item =
              "<li class='question_info' @click='clickTrim(this)' id='item" +
              k1 +
              "'><input type='radio' name='item' value='" +
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
      case '03':
        //多选题
        $('.question_title').html(
          '<strong>第 ' +
            (id + 1) +
            ' 题 、</strong>' +
            objQuestion.questionName +
            "(多选题)<label id='IsCorrect" +
            objQuestion.questionId +
            "' style='display:none;color:red;'></label>",
        );
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
              "<li class='question_info' @click='clickTrim(this)' id='item" +
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
        $('.question_title').html(
          '<strong>第 ' +
            (id + 1) +
            ' 题 、</strong>' +
            objQuestion.questionName +
            "(判断题)<label id='IsCorrect" +
            objQuestion.questionId +
            "' style='display:none;color:red;'></label>",
        );
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
          if (bolIsAnswer == true) {
            item =
              "<li class='question_info' onclick='clickTrim(this)' id='item" +
              k1 +
              "'><input checked='checked' type='radio' name='item' value='" +
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
              "'><input type='radio' name='item' value='" +
              objQuestionOption.questionOptionId +
              "' id = '" +
              objQuestion.questionId +
              "'>&nbsp;" +
              objQuestionOption.optionName +
              '</li>';
            $('.question').append(item);
          }
        }
        break;
      case '01': //填空题型
        //填空题型
        $('.question_title').html(
          '<strong>第 ' +
            (id + 1) +
            ' 题 、</strong>' +
            objQuestion.questionName +
            "(填空题)<label id='IsCorrect" +
            objQuestion.questionId +
            "' style='display:none;color:red;'></label>",
        );
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
          //       + k1 + "'>" + kIndex + ".<input type = 'text' name = 'item'  id = '" + obj.questionOptionId + "' style='width:98%' style='background:lightblue;line-height:30px;' /></li><br>";
          //$(".question").append(item);
        }
        item += '</li>';
        $('.question').append(item);
        break;
      case '10': //简答题型
        //简答题型
        $('.question_title').html(
          '<strong>第 ' +
            (id + 1) +
            ' 题 、</strong>' +
            objQuestion.questionName +
            "(简答题)<label id='IsCorrect" +
            objQuestion.questionId +
            "' style='display:none;color:red;'></label>",
        );
        const liQuestion = GetLi_Empty('question_infos');
        liQuestion.id = Format('item{0}', objQuestion.questionId);
        const divAnswer = GetDiv_Empty('');
        const divAnswer_Right = GetDiv_Empty('');
        const divAnswer_User = GetDiv_Empty('');
        divAnswer_Right.style.float = 'left';
        divAnswer_User.style.float = 'right';
        divAnswer_Right.style.width = '49%';
        divAnswer_User.style.width = '49%';

        const spnAnswer_Right = GetSpan_Empty('text-primary');
        spnAnswer_Right.innerHTML = '正确答案:';
        //该题分值
        const spnAnswer_Scores = GetSpan_Empty('text-primary');
        spnAnswer_Scores.innerHTML = Format('({0}分)', objge_StuBatchQuesRela.scores);
        spnAnswer_Scores.id = Format('Answer_Scores{0}', objQuestion.questionId);
        spnAnswer_Scores.style.marginLeft = '2px';

        const spnAnswer_User = GetSpan_Empty('text-primary');
        spnAnswer_User.innerHTML = '用户答案:';
        const brAnswer_Right = GetBr_Empty();
        const brAnswer_User = GetBr_Empty();

        const spnScore_User = GetSpan_Empty('text-secondary');
        spnScore_User.innerHTML = '得分:';
        spnScore_User.style.marginLeft = '100px';
        const txtScore_User = GetTextBox_Empty('form-control-sm');
        txtScore_User.style.width = '60px';
        txtScore_User.id = Format('Score_User{0}', objQuestion.questionId);

        const txtAnswer_Right = GetTextAreaEmpty('');
        txtAnswer_Right.id = Format('Answer_Right{0}', objQuestion.questionId);
        txtAnswer_Right.rows = 8;
        txtAnswer_Right.cols = 80;
        txtAnswer_Right.style.background = 'lightblue';
        txtAnswer_Right.style.lineHeight = '22px';

        const txtAnswer_User = GetTextAreaEmpty('');
        txtAnswer_User.id = Format('Answer_User{0}', objQuestion.questionId);
        txtAnswer_User.rows = 8;
        txtAnswer_User.cols = 80;
        txtAnswer_User.style.background = 'lightblue';
        txtAnswer_User.style.lineHeight = '22px';
        //标题
        divAnswer_Right.appendChild(spnAnswer_Right);
        divAnswer_Right.appendChild(brAnswer_Right);

        divAnswer_User.appendChild(spnAnswer_User);
        divAnswer_User.appendChild(spnScore_User);
        divAnswer_User.appendChild(txtScore_User);
        divAnswer_User.appendChild(spnAnswer_Scores);

        divAnswer_User.appendChild(brAnswer_User);

        divAnswer_Right.appendChild(txtAnswer_Right);
        divAnswer_User.appendChild(txtAnswer_User);
        divAnswer.appendChild(divAnswer_Right);
        divAnswer.appendChild(divAnswer_User);

        if (objUserAnswerResult != null) {
          txtAnswer_Right.innerHTML = objUserAnswerResult.answerText;
        }
        liQuestion.appendChild(divAnswer);
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
    $('.question').attr('id', 'question' + id);
    //$(".question").attr("id", question.questionId);
    $('#ques' + id)
      .removeClass('active_question_id')
      .addClass('question_id');
    for (let i = 0; i < ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.length; i++) {
      if (ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].id == id) {
        $('#' + ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].item)
          .find('input')
          .prop('checked', 'checked');
        $('#' + ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].item).addClass('clickTrim');
        $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
          .removeClass('question_id')
          .addClass('clickQue');
      }
    }
    //1.判断是不是不是首次加载第一题，如果是，则往下走，看是否是查看上次 还是继续做题，调取已做题答案数据；
    //题目ID， 题目类型；答案选项数
    this.SearchUserResultAnswer(objge_StuBatchQuesRela, strQuestionTypeId, intQuestionOptionNum);
  }
  //判断如果是查看上次、继续做题、首次加载时 把用户答题答案默认显示；参数 问题ID，问题类型v，答案选项数量；
  public async SearchUserResultAnswer(
    objge_StuBatchQuesRela: clsge_StuBatchQuesRelaEN,
    strQuestionTypeId: string,
    intQuestionOptionNum: number,
  ) {
    const strThisFuncName = this.SearchUserResultAnswer.name;
    let objUserAnswerResult;
    try {
      objUserAnswerResult = await UserAnswerResultEx_GetObjByge_StuBatchQuesRela(
        objge_StuBatchQuesRela,
      );
    } catch (e) {
      const strMsg: string = `根据学生批次问题表获取用户答案表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      const strQuestionId: number = objge_StuBatchQuesRela.questionId;
      //先判断是否作答
      let arrAnswerObjLst: Array<clsAnswerEN> = [];
      let arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];
      let strMsg;
      let strWhereAnswer;
      switch (strQuestionTypeId) {
        case enumQuestionType.FillInBlank_01:
          //填空题
          //查找答案表获取答案数 得到ID ；

          strWhereAnswer = "questionId='" + strQuestionId + "' order by answerIndex asc";
          arrAnswerObjLst = await Answer_GetObjLstAsync(strWhereAnswer);

          const strAnswerText = objUserAnswerResult.answerText;
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
            strWhereAnswer = "questionId='" + strQuestionId + "' order by optionIndex asc";
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
          //用户答案
          {
            const strAnswer_User = objUserAnswerResult.answerText;
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
            txtAnswer_User.value = strAnswer_User; //其他类型问题答案；
          }
          //分值
          {
            const strCtrlId_Scores = Format('Answer_Scores{0}', strQuestionId);
            const spnAnswer_Scores = <HTMLSpanElement>document.getElementById(strCtrlId_Scores);
            if (spnAnswer_Scores != null) {
              spnAnswer_Scores.innerHTML = Format('({0}分)', objge_StuBatchQuesRela.scores);
            }
          }
          //用户得分
          {
            const strCtrlId_UserScore = Format('Score_User{0}', strQuestionId);
            const txtScore_User = <HTMLInputElement>document.getElementById(strCtrlId_UserScore);
            if (txtScore_User != null) {
              txtScore_User.value = objUserAnswerResult.score.toString();
            }
          }
          //正确答案
          {
            if (arrAnswerObjLst.length > 0) {
              const strCtrlId_Right = Format('Answer_Right{0}', strQuestionId);
              const txtAnswer_Right = <HTMLTextAreaElement>document.getElementById(strCtrlId_Right);
              if (txtAnswer_Right == null) {
                strMsg = Format(
                  '根据CtrlId:[{0}]问题文本框(txtAnswer_Right)为空.(in {1}.{2})',
                  strCtrlId_Right,
                  this.constructor.name,
                  strThisFuncName,
                );
                console.error(strMsg);
                alert(strMsg);
                return;
              }
              txtAnswer_Right.value = arrAnswerObjLst[0].answerContent; //其他类型问题答案；
            }
          }
          //需要拆分获取；
          break;
        case enumQuestionType.SingleChoice_02: //单选题
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
            let arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];

            strWhereAnswer = "questionId='" + strQuestionId + "' order by optionIndex asc";
            //获取获取题目选项库
            arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstAsync(strWhereAnswer);

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
      } //switch(strQuestionTypeId)

      //这里显示判断如果是查看上次，那么则判断答案表结果是否正确，；显示提示label标签；
      const strHistory = this.challengeMode;
      if (strHistory == enumChallengeMode.ViewLast_01) {
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

  public async btnScoreByUserQuestion_Click() {
    const strThisFuncName = this.btnScoreByUserQuestion_Click.name;
    const arrKeyId = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyId.length == 0) {
      const strMsg = '请选择需要批改的记录！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const arrge_StuBatchQuesRela = await ge_StuBatchQuesRela_GetObjLstByIdStuBatchQuesRelaLstAsync(
      arrKeyId,
    );
    //const lngId_StuBatchQuesRela = Number(strKeyId);
    const objge_StuBatchQuesRela = arrge_StuBatchQuesRela[0];
    if (objge_StuBatchQuesRela == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    //const arrQuestionId = arrge_StuBatchQuesRela.map(x => x.questionId);
    //const arrQuestionnaire = await Questionnaire_GetObjLstByQuestionIdLstCache(arrQuestionId, clsPubLocalStorage.courseId);
    ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr = arrge_StuBatchQuesRela;
    this.challengeMode = enumChallengeMode.Score_04;
    this.answerCard(ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr);
    this.showQuestion_Mark(0, ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr);

    ShowDivInDiv('divLayout', 'divQuestionShow');

    HideDivInDiv('divLayout', 'divList');
  }

  public async btnScoreByQuestionUser_Click() {}

  public async btnNextQuestion_Click() {
    const strThisFuncName = this.btnNextQuestion_Click.name;
    const strChallengeMode = this.challengeMode;
    const questionnaireStore = useQuestionnaireStore();
    //调用判断文本框类型题目答案
    this.getInputTextValue();

    //进行下一题操作前，把当前数据存放到数据库；
    //去掉前后双引号
    const objge_StuBatchQuesRela =
      ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr[
        ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion
      ];
    const strQuestionId =
      ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr[
        ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion
      ].questionId;
    const objQuestion = await questionnaireStore.getObj(strQuestionId);
    if (objQuestion == null) {
      const strMsg = Format(
        '根据问题Id:[{0}]获取相应的记录的对象为空.(in {1}.{2})',
        strQuestionId,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

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

    $('#hidArrayAnswer').val(JSON.stringify(ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues));

    if (strChallengeMode != enumChallengeMode.ViewLast_01) {
      this.Score_UserAnswer(objge_StuBatchQuesRela, strQuestionTypeId);
    }
    //当前操作的题号
    if (
      ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion + 1 !=
      ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr.length
    ) {
      ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion =
        ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion + 1;
      switch (strChallengeMode) {
        case enumChallengeMode.ViewLast_01:
          this.showQuestion_ViewLast(
            ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion,
            ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr,
          );
          break;
        case enumChallengeMode.StartGame_02:
        case enumChallengeMode.Score_04:
          this.showQuestion_Mark(
            ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion,
            ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr,
          );
          break;
        case enumChallengeMode.ContinuePass_03:
          //this.showQuestion_ContinuePass(ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion, this.examBatchNo, ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr);
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
      //showQuestion(PassGameEx.intActiveQuestion, questions)
    }
    //去掉填空题文本框样式
    $(".question_infos input[type='text']").removeClass('clickTrim');
  }

  public async btnUpQuestion_Click() {
    const strThisFuncName = this.btnUpQuestion_Click.name;
    const strChallengeMode = this.challengeMode;
    const questionnaireStore = useQuestionnaireStore();
    //调用判断文本框类型题目答案
    this.getInputTextValue();
    //进行下一题操作前，把当前数据存放到数据库；
    //去掉前后双引号

    const objge_StuBatchQuesRela =
      ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr[
        ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion
      ];
    const strQuestionId =
      ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr[
        ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion
      ].questionId;
    const objQuestion = await questionnaireStore.getObj(strQuestionId);
    if (objQuestion == null) {
      const strMsg = Format(
        '根据问题Id:[{0}]获取相应的记录的对象为空.(in {1}.{2})',
        strQuestionId,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strQuestionTypeId = objQuestion.questionTypeId; //题目类型；

    $('#hidArrayAnswer').val(JSON.stringify(ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues));
    //if ($("#hidArrayAnswer").val().length > 0) {
    if (ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.length > 0) {
      //require(["../js/Web/PassGameEx.js"], function (index) {

      //const objPage = new index.PassGameEx();
      if (strChallengeMode == enumChallengeMode.ViewLast_01) {
        this.Score_UserAnswer(objge_StuBatchQuesRela, strQuestionTypeId);
      }
      //});
    }

    //当前操作题号，如果为0，则提示
    if (ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion == 0) {
      alert('已经是第一题');
    } else {
      switch (strChallengeMode) {
        case enumChallengeMode.ViewLast_01:
          this.showQuestion_ViewLast(
            ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion - 1,
            ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr,
          );
          break;
        case enumChallengeMode.StartGame_02:
        case enumChallengeMode.Score_04:
          this.showQuestion_Mark(
            ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion - 1,
            ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr,
          );
          break;
        case enumChallengeMode.ContinuePass_03:
          //this.showQuestion_ContinuePass(ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion - 1, this.examBatchNo, ge_StuBatchQuesRelaCRUDScoreEx.arrge_StuBatchQuesRela_Curr);
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
  public async showQuestion_ViewLast(
    id: number,
    arrge_StuBatchQuesRela: Array<clsge_StuBatchQuesRelaEN>,
  ) {
    const strThisFuncName = this.showQuestion_ViewLast.name;
    const strChallengeMode = this.challengeMode;
    const questionnaireStore = useQuestionnaireStore();
    const userStore = useUserStore();
    //questions = questions;
    ////去掉前后双引号
    //questions = questions.substring(1, questions.length - 1);
    const strCourseId = clsPubLocalStorage.courseId;
    const strUserId = userStore.userId;
    //上一次闯关结果
    const arrUserAnswerResultObjLst: Array<clsUserAnswerResultEN> = [];

    $('.questioned').text(id + 1);

    const intQuestioned = (id + 1) / arrge_StuBatchQuesRela.length;
    ge_StuBatchQuesRelaCRUDScoreEx.vuebtn_Click('setQuestioned', intQuestioned.toString());
    if (ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion != undefined) {
      $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
        .removeClass('question_id')
        .addClass('active_question_id');
    }
    if (strChallengeMode == enumChallengeMode.ViewLast_01) {
      const submitQuestions = GetButtonObjInDiv(this.divQuestionShow, 'submitQuestions');
      if (submitQuestions != null) {
        submitQuestions.disabled = true;
      }
    }

    ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion = id;
    $('.question').find('.question_info').remove();
    $('.question').find('.question_infos').remove();
    const objge_StuBatchQuesRela = arrge_StuBatchQuesRela[id];
    const strQuestionId = arrge_StuBatchQuesRela[id].questionId;
    const objQuestion = await questionnaireStore.getObj(arrge_StuBatchQuesRela[id].questionId);
    if (objQuestion == null) {
      const strMsg = Format(
        '根据问题Id:[{0}]获取相应的记录的对象为空.(in {1}.{2})',
        arrge_StuBatchQuesRela[id].questionId,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    let objUserAnswerResult;
    try {
      objUserAnswerResult = await UserAnswerResultEx_GetObjByge_StuBatchQuesRela(
        objge_StuBatchQuesRela,
      );
    } catch (e) {
      const strMsg: string = `根据学生批次问题表获取用户答案表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strQuestionTypeId = objQuestion.questionTypeId;
    const arrAnswerObjLst = await Answer_GetObjLstCache(strCourseId);
    //获取获取题目选项库
    const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstCache(strCourseId);
    const arrQuestionOptions_Curr = arrQuestionOptionsObjLst.filter(
      (x) => x.questionId == strQuestionId,
    );

    let bolIsAnswer = false;
    let intQuestionOptionNum = 0;
    // 遍历单条信息
    let strQuestionTitle = '';
    switch (strQuestionTypeId) {
      case '02':
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(单选题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );
        $('.question_title').html(strQuestionTitle);

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
          if (bolIsAnswer == true) {
            item =
              "<li class='question_info' onclick='clickTrim(this)' id='item" +
              k1 +
              "'><input  checked = 'checked' type='radio' name='item' value='" +
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
              "'><input type='radio' name='item' value='" +
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
      case '03':
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(多选题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );

        $('.question_title').html(strQuestionTitle);
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
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(判断题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );
        $('.question_title').html(strQuestionTitle);
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
          if (bolIsAnswer == true) {
            item =
              "<li class='question_info' onclick='clickTrim(this)' id='item" +
              k1 +
              "'><input checked='checked' type='radio' name='item' value='" +
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
              "'><input type='radio' name='item' value='" +
              objQuestionOption.questionOptionId +
              "' id = '" +
              objQuestion.questionId +
              "'>&nbsp;" +
              objQuestionOption.optionName +
              '</li>';
            $('.question').append(item);
          }
        }
        break;
      case '01': //填空题型
        strQuestionTitle = Format(
          "<strong>第{0}题 、</strong>{1}(填空题)<label id='IsCorrect{2} style='display:none;color:red;'></label>",
          id + 1,
          objQuestion.questionName,
          objQuestion.questionId,
        );
        $('.question_title').html(strQuestionTitle);

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
        $('.question_title').html(strQuestionTitle);

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
    $('.question').attr('id', 'question' + id);
    //$(".question").attr("id", question.questionId);
    $('#ques' + id)
      .removeClass('active_question_id')
      .addClass('question_id');
    for (let i = 0; i < ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.length; i++) {
      if (ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].id == id) {
        $('#' + ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].item)
          .find('input')
          .prop('checked', 'checked');
        $('#' + ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].item).addClass('clickTrim');
        $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
          .removeClass('question_id')
          .addClass('clickQue');
      }
    }

    //获取题目号；已经提交答案选项号；
    const markType = '1';
    //题目ID， 题目类型；答案选项数
    this.SearchUserResultAnswer(objge_StuBatchQuesRela, strQuestionTypeId, intQuestionOptionNum);
  }

  //获取input为文本时候的值 并保存
  public getInputTextValue() {
    //获取该类控件下指定Id 这里指题目ID组合item+题目号
    const divQuestionContent = <HTMLDivElement>document.getElementById('divQuestionContent');
    let examId = $('.question_infos').attr('id');
    let id;
    if (examId != undefined) {
      //因为是文本框值，所以需要截取题目ID；
      examId = examId.substring(4);

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
          $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
            .removeClass('question_id')
            .addClass('clickQue'); //答题卡样式
          //存答案；如果已经作答
          //需要判断是否存在此值，不存在则需要插入；
          //if (PassGameEx.arrCheckQues.indexOf(id) > -1 && PassGameEx.arrCheckQues.indexOf($(this).item) > -1) {
          //if (PassGameEx.arrCheckQues.indexOf(examId) > -1) {
          //则包含该元素 循环数组
          for (let i = 0; i < ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.length; i++) {
            //resultAnswer = "";
            if (
              ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].id ==
                ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion &&
              ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].item == id
            ) {
              resultAnswer = 'yes'; //存在此问题的答案
              //ques = PassGameEx.arrCheckQues[i].id;
              //PassGameEx.arrCheckQues[i].item = id;//获取当前考题的选项ID
              ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].answer = strText; //把当前答案赋值给数组；
            }
          }
          if (resultAnswer == '') {
            let check = new clsCheck();
            check.examId = Number(examId); //获取当前题目ID；
            check.id = ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion; //获取当前考题的编号
            check.item = id; //获取当前考题的选项ID
            check.answer = strText; //获取文本框的值；
            check.type = type; //存放类型；
            ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.push(check);
          }
          //去掉文本框的样式
        }
      }
    }
  }

  //点击题目下一题切换时 调用扩展函数；
  //public async AddOrUpdUserAnswerResult(QuestionId: number, questionOptionId: string, MarkType: string) {
  public async Score_UserAnswer(
    objge_StuBatchQuesRela: clsge_StuBatchQuesRelaEN,
    strQuestionTypeId: string,
  ) {
    const strThisFuncName = this.Score_UserAnswer.name;
    const userStore = useUserStore();
    const strChallengeMode = this.challengeMode;
    const QuestionId = objge_StuBatchQuesRela.questionId;
    const strExamBatchNo: string = objge_StuBatchQuesRela.examBatchNo;
    const strUserId: string = objge_StuBatchQuesRela.userId;
    let fltScore = 0.0;
    let bolPassed = false;

    try {
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const strMarkerId = userStore.userId;

      //声明参数数组接收值；
      let strcheckboxAnser: string = ''; //得到多选答案组合
      let strQuestionId: number = 0; //得到题目id
      let strAnswer: string = ''; //其他问题类型答案；
      // 转化去掉首尾字符；
      const ArrayAnswer = eval(GetInputValueInDivObj(this.thisDivLayout, 'hidArrayAnswer'));
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
                const returnBool = await UserAnswerResultEx_Score_UserAnswer(
                  strMarkerId,
                  strUserId,
                  strExamBatchNo,
                  QuestionId,
                  idCurrEduCls,
                  fltScore,
                  bolPassed,
                );
                if (returnBool == true) {
                  console.log('完成答案存放成功');
                } else {
                  console.log('答案存放失败-5!');
                }
              } else {
                const returnBool = await UserAnswerResultEx_Score_UserAnswer(
                  strMarkerId,
                  strUserId,
                  strExamBatchNo,
                  QuestionId,
                  idCurrEduCls,
                  fltScore,
                  bolPassed,
                );
                if (returnBool == true) {
                  console.log('完成答案存放成功');
                } else {
                  console.log('答案存放失败-6!');
                }
              }
            }

            // const responseText1 = await this.SeachUserResultAnswer(QuestionId, vType,0);
          } else {
          }
          break;
        case enumQuestionType.ShortAnswer_10: //简答题
          const strCtrlId = Format('Answer_User{0}', QuestionId);
          const txtAnswer_User = <HTMLTextAreaElement>document.getElementById(strCtrlId);
          if (txtAnswer_User == null) {
            const strMsg = Format(
              '根据CtrlId:[{0}]问题文本框(txtAnswer_User)为空.(in {1}.{2})',
              strCtrlId,
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          strAnswer = txtAnswer_User.value; //其他类型问题答案；
          const strCtrlId_Score = Format('Score_User{0}', QuestionId);
          const txtScore_User = <HTMLInputElement>document.getElementById(strCtrlId_Score);
          if (txtScore_User == null) {
            const strMsg = Format(
              '根据CtrlId:[{0}]问题文本框(txtScore_User)为空.(in {1}.{2})',
              strCtrlId_Score,
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }

          const strScore_User = txtScore_User.value; //其他类型问题答案；
          fltScore = Number(strScore_User);

          if (fltScore / objge_StuBatchQuesRela.scores >= 0.6) bolPassed = true;

          const returnBool = await UserAnswerResultEx_Score_UserAnswer(
            strMarkerId,
            strUserId,
            strExamBatchNo,
            QuestionId,
            idCurrEduCls,
            fltScore,
            bolPassed,
          );
          if (returnBool == true) {
            console.log('完成答案存放成功');
          } else {
            console.log('答案存放失败-6!');
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
            return;
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
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  public async btnMarkQuestions_Click() {
    const strThisFuncName = this.btnMarkQuestions_Click.name;
    //调用判断文本框类型题目答案
    try {
      HideDivInDiv('divLayout', 'divQuestionShow');

      ShowDivInDiv('divLayout', 'divList');

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_StuBatchQuesRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public clickTrim(strCtrlId: string) {
    //const id = source.id;
    const divQuestionContent = <HTMLDivElement>document.getElementById('divQuestionContent');
    const examId = $('#' + strCtrlId)
      .find('input[name=item]')
      .attr('id');
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
          $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
            .removeClass('question_id')
            .addClass('clickQue'); //答题卡
          $('#' + strCtrlId).removeClass('clickTrim');
          //判断是否还有勾选的checkbox，如果没有那么去掉答题卡的颜色
          // if ($("#" + id).find("input[name=item]:checked").length > 0) {
          if ($('input[type=checkbox]:checked').length > 0) {
            // $("#ques" + PassGameEx.intActiveQuestion).removeClass("question_id").addClass("clickQue");//答题卡
          } else {
            $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
              .removeClass('question_id')
              .removeClass('clickQue'); //答题卡
            // $("#" + id).removeClass("clickTrim");
          }
          //去掉勾选复选框后，同时需要去掉二维数组中 该答案的值；
          for (let i = 0; i < ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.length; i++) {
            //循环当前数组答案
            //判断如果Id相同时候
            //                        if (PassGameEx.arrCheckQues[i].id == PassGameEx.intActiveQuestion && PassGameEx.arrCheckQues[i].item == strCtrlId) {
            if (
              i == ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion &&
              ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].item == strCtrlId
            ) {
              //const strItem = "ItemNo";
              ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.splice(i, 1);
              //const newData = PassGameEx.arrCheckQues[i].filter(function (item) {
              //    delete item[PassGameEx.arrCheckQues[i]]
              //    return item;
              //});
              //PassGameEx.arrCheckQues = newData;
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
          $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
            .removeClass('question_id')
            .addClass('clickQue'); //答题卡
          if (
            ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.length == 0 ||
            (ge_StuBatchQuesRelaCRUDScoreEx.intQuestion !=
              ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion &&
              ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion != ques)
          ) {
            let check = new clsCheck();
            check.examId = Number(examId); //获取当前题目ID；
            check.id = ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion; //获取当前考题的编号
            check.item = strCtrlId; //获取当前考题的选项ID
            // check.answer = $('#' + strCtrlId)
            //   .find('input[name=item]:checked')
            //   .val(); //获取当前考题的选项值
            check.answer = getCheckValueInDivObj(this.thisDivLayout, strCtrlId).toString();
            check.type = type; //存放类型；
            ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.push(check);
          } else {
            //点击勾选checkbox 时候需要判断是否存在此值，不存在则需要插入；
            const arrCheckId = ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.map((x) => x.id);
            //    if (arrCheckId.indexOf(strCtrlId) > -1 && PassGameEx.arrCheckQues.indexOf($(this).item) > -1) {
            const chkItemValue = new clsCheck(); //$(this).item;//这里需要修改
            if (ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.indexOf(chkItemValue) > -1) {
              //则包含该元素
            } else {
              let check = new clsCheck();
              check.examId = Number(examId); //获取当前题目ID；
              check.id = ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion; //获取当前考题顺序的编号
              check.item = strCtrlId; //获取当前考题的选项ID
              // check.answer = $('#' + strCtrlId)
              //   .find('input[name=item]:checked')
              //   .val(); //获取当前考题的选项值
              check.answer = getCheckValueInDivObj(this.thisDivLayout, strCtrlId).toString();
              check.type = type; //存放类型；
              ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.push(check);
            }
          }
        }
        break;
      case 'radio':
        $('#' + strCtrlId)
          .find('input')
          .prop('checked', 'checked');
        $('#' + strCtrlId).addClass('clickTrim');
        $('#ques' + ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion)
          .removeClass('question_id')
          .addClass('clickQue'); //答题卡
        for (let i = 0; i < ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.length; i++) {
          if (
            ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].id ==
              ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion &&
            ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].item != strCtrlId
          ) {
            ques = ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].id;
            ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].item = strCtrlId; //获取当前考题的选项ID
            // ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].answer = $('#' + strCtrlId)
            //   .find('input[name=item]:checked')
            //   .val(); //获取当前考题的选项值
            ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues[i].answer = getCheckValueInDivObj(
              this.thisDivLayout,
              strCtrlId,
            ).toString();
          }
        }
        if (
          ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.length == 0 ||
          (ge_StuBatchQuesRelaCRUDScoreEx.intQuestion !=
            ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion &&
            ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion != ques)
        ) {
          let check = new clsCheck();
          check.examId = Number(examId); //获取当前题目ID；
          check.id = ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion; //获取当前考题的顺序编号
          check.item = strCtrlId; //获取当前考题的选项ID
          // check.answer = $('#' + strCtrlId)
          //   .find('input[name=item]:checked')
          //   .val(); //获取当前考题的选项值
          check.answer = getCheckValueInDivObj(this.thisDivLayout, strCtrlId).toString();
          check.type = type; //存放类型；
          ge_StuBatchQuesRelaCRUDScoreEx.arrCheckQues.push(check);
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
        //$(".question_info").each(function () {
        //    const otherId = $(this).attr("id");
        //    if (otherId != strCtrlId) {
        //        $("#" + otherId).find("input").prop("checked", false);
        //        $("#" + otherId).removeClass("clickTrim");
        //    }
        //})
        ge_StuBatchQuesRelaCRUDScoreEx.intQuestion =
          ge_StuBatchQuesRelaCRUDScoreEx.intActiveQuestion;
        break;
      default:
        const strMsg = '类型(type)：' + type + '没有被处理！';
        alert(strMsg);
        break;
    }
  }

  public set challengeMode(value: string) {
    ge_StuBatchQuesRelaCRUDScoreEx.challengeMode_Static = value;
    console.error('Set ChallengeMode:', value);
  }
  /*
   * 存放闯关批次
   */
  public get challengeMode(): string {
    const strValue = ge_StuBatchQuesRelaCRUDScoreEx.challengeMode_Static;
    console.error('Get ChallengeMode:', strValue);
    return strValue;
    //return $("#hidChallengeMode").val();
  }

  // public set examBatchNo(value: string) {
  //     $("#hidExamBatchNo").val(value);
  //     SetInputValueByIdInDiv("hidRegion", "hidExamBatchNo", value);
  //     console.error("Set examBatchNo:", value);
  // }
  // /*
  // * 存放闯关批次
  //*/
  // public get examBatchNo(): string {
  //     const strValue = GetInputValueInDiv("hidRegion", "hidExamBatchNo");
  //     console.error("Get examBatchNo:", strValue);
  //     return strValue;
  //     //return $("#hidExamBatchNo").val();
  // }
  /** 显示ge_StuBatchQuesRela对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrge_StuBatchQuesRelaExObjLst:需要绑定的对象列表
   **/
  public async BindTab_ge_StuBatchQuesRela4Func(
    divContainer: HTMLDivElement,
    arrge_StuBatchQuesRelaExObjLst: Array<clsge_StuBatchQuesRelaENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_StuBatchQuesRela4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      //{
      //    fldName: clsge_StuBatchQuesRelaEN.con_ExamBatchNo,
      //    sortBy: clsge_StuBatchQuesRelaEN.con_ExamBatchNo,
      //    sortFun: SortFun,
      //    getDataSource: "",
      //    colHeader: "学生批次号",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 2,
      //    funcName: (strKey: string, strText: string) => { console.log(strKey, strText); return new HTMLElement(); }
      //},
      {
        fldName: clsge_StuBatchQuesRelaENEx.con_GameLevelName,
        sortBy: 'gameLevelName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '关卡',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaENEx.con_QuestionTypeName,
        sortBy: 'questionTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '题型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaENEx.con_QuestionName,
        sortBy: 'questionName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '题目名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaENEx.con_ChapterNameSim,
        sortBy: clsge_StuBatchQuesRelaENEx.con_ChapterNameSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '章名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      //{
      //    fldName: clsge_StuBatchQuesRelaENEx.con_AnswerModeName,
      //    sortBy: "answerModeName",
      //    sortFun: SortFun,
      //    getDataSource: "",
      //    colHeader: "答案模式",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 7,
      //    funcName: (strKey: string, strText: string) => { console.log(strKey, strText); return new HTMLElement(); }
      //},
      {
        fldName: clsge_StuBatchQuesRelaENEx.con_UserId,
        sortBy: 'userId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaENEx.con_UserName,
        sortBy: clsge_StuBatchQuesRelaENEx.con_UserName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaEN.con_IsSubmit,
        sortBy: clsge_StuBatchQuesRelaEN.con_IsSubmit,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '提交?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaEN.con_IsHasAnswer,
        sortBy: clsge_StuBatchQuesRelaEN.con_IsHasAnswer,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '有答案?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaEN.con_RealFinishDate,
        sortBy: clsge_StuBatchQuesRelaEN.con_RealFinishDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '实际完成',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaEN.con_IsMarking,
        sortBy: clsge_StuBatchQuesRelaEN.con_IsMarking,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '批阅?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaEN.con_Score,
        sortBy: clsge_StuBatchQuesRelaEN.con_Score,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '分数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaEN.con_MarkDate,
        sortBy: clsge_StuBatchQuesRelaEN.con_MarkDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '打分日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsge_StuBatchQuesRelaEN.con_OperateTime,
        sortBy: clsge_StuBatchQuesRelaEN.con_OperateTime,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '操作时间',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      //{
      //    fldName: clsge_StuBatchQuesRelaEN.con_UpdDate,
      //    sortBy: clsge_StuBatchQuesRelaEN.con_UpdDate,
      //    sortFun: SortFun,
      //    getDataSource: "",
      //    colHeader: "修改日期",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 15,
      //    funcName: (strKey: string, strText: string) => { console.log(strKey, strText); return new HTMLElement(); }
      //},
      //{
      //    fldName: clsge_StuBatchQuesRelaENEx.con_OptionName,
      //    sortBy: "optionName",
      //    sortFun: SortFun,
      //    getDataSource: "",
      //    colHeader: "选项名称",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 16,
      //    funcName: (strKey: string, strText: string) => { console.log(strKey, strText); return new HTMLElement(); }
      //},
    ];
    try {
      await this.ExtendFldFuncMap(arrge_StuBatchQuesRelaExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrge_StuBatchQuesRelaExObjLst,
      arrDataColumn,
      clsge_StuBatchQuesRelaEN.con_IdStuBatchQuesRela,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async btnSetIsHasAnswer_Click() {
    const strThisFuncName = this.btnSetIsHasAnswer_Click.name;

    try {
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      CourseId_Session.value = clsPubLocalStorage.courseId;

      //2、显示无条件的表内容在GridView中
      await ge_StuBatchQuesRelaEx_SetIsHasAnswer(IdCurrEduCls_Session.value);
      await this.BindGv_ge_StuBatchQuesRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /*答题卡*/
  public answerCard(arrge_StuBatchQuesRela: Array<clsge_StuBatchQuesRelaEN>) {
    //questions = questions;
    $('.question_sum').text(arrge_StuBatchQuesRela.length);
    $('#answerCard ul').html(' ');
    for (let i = 0; i < arrge_StuBatchQuesRela.length; i++) {
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
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'gameLevelName|Ex':
        viewVarSet.sortge_StuBatchQuesRelaBy = `ge_GameLevel|gameLevelName ${sortDirection}|ge_StuBatchQuesRela.GameLevelId = ge_GameLevel.GameLevelId`;
        break;
      case 'questionTypeName|Ex':
        viewVarSet.sortge_StuBatchQuesRelaBy = `vQuestionnaire_Sim|questionTypeName ${sortDirection}|ge_StuBatchQuesRela.QuestionId = vQuestionnaire_Sim.QuestionId,vQuestionnaire_Sim.QuestionTypeId = QuestionType.QuestionTypeId`;
        break;
      case 'chapterNameSim|Ex':
        viewVarSet.sortge_StuBatchQuesRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'userName|Ex':
        viewVarSet.sortge_StuBatchQuesRelaBy = `vUsersSim|userName ${sortDirection}|ge_StuBatchQuesRela.UserId = vUsersSim.UserId`;
        break;
      default:
        viewVarSet.sortge_StuBatchQuesRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_StuBatchQuesRela4Func(this.thisDivList);
  }
}
