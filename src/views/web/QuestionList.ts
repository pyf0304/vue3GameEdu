/*-- -- -- -- -- -- -- -- -- -- --
类名:QuestionnaireCRUDEx
表名:Questionnaire(01120001)
生成代码版本:2021.02.03.1
生成日期:2021/02/08 19:36:05
生成者:
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:问卷维护
模块英文名:QuestionaireEdit
框架-层名:WA_界面后台Ex_TS(WA_ViewScriptCSEx_TS)
编程语言:TypeScript
== == == == == == == == == == == == */

import $ from 'jquery';
import { QuestionnaireCRUD } from '@/viewsBase/QuestionaireEdit/QuestionnaireCRUD';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { ge_DifficultyLevel_func } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { cc_CourseChapter_func } from 'share-stu-study-base-lib';
import { cc_CourseKnowledges_GetObjLstAsync } from 'share-stu-study-base-lib';
import { cc_KnowledgesExamLibRela_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import { ge_LevelModeType_func } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { Answer_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import {
  Questionnaire_CopyObjTo,
  Questionnaire_GetObjLstByPagerAsync,
  Questionnaire_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
import { QuestionOptions_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { tz_ContentAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { QuestionType_func } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import {
  CheckControlExist,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { useUserStore } from '@/store/modulesShare/user';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { QuestionnaireEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionnaireExWApi';
import { fa } from 'element-plus/es/locale';

import { usetz_ContentAttachmentStore } from '@/store/modulesShare/tz_ContentAttachment';
import { tz_ContentAttachmentEx_GeneLiHtmlByObj } from '@/ts/L3ForWApiEx/ResourceMan/clstz_ContentAttachmentExWApi';
import {
  divVarSet,
  refDivList,
  refDivLayout,
  viewVarSet,
} from '@/views/QuestionaireEdit/QuestionnaireVueShare';

declare const window: any;
/* QuestionnaireCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class QuestionList extends QuestionnaireCRUD {
  //public static divName4List: string = "divQuestionDataLst";
  //public static mstrSortQuestionnaireBy: string = "questionId";
  public static divQuestionList: HTMLDivElement; //列表区的层对象
  public static objPageCRUD: QuestionList;
  public divName4Query: string = 'divQuestionQuery'; //查询区的层Id
  public divName4List: string = 'divQuestionList'; //列表区的层Id
  public divName4DataList: string = 'divQuestionDataLst'; //列表中数据区的层Id
  public divName4Pager: string = 'divPager'; //列表中的分页区的层Id
  public strCourseIdCache: string = clsPubLocalStorage.courseId; //缓存分类字段

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
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
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      if (userStore.userId != '') {
        // 为查询区绑定下拉框

        //2、显示无条件的表内容在GridView中
        await this.BindGv_Questionnaire4Func(divVarSet.refDivList);

        // HideDivInDivObj(this.thisDivLayout, 'divLoading');
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
  /// 设置绑定下拉框，针对字段:[courseChapterId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_CourseChapterId(strCourseId: string) {
    //定义条件字段
    //const strCourseId = "";//定义条件字段
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[questionTypeId](扩展方法)
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_QuestionTypeId() {
    const objQuestionType_Cond = new clsQuestionTypeEN(); //查询区域
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[difficultyLevelId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_DifficultyLevelId() {}

  /* 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    ShowDivInDivObj(this.thisDivLayout, 'divLoading');
    this.SetCurrPageIndex(1);
    await this.BindGv_Questionnaire4Func(this.thisDivList); //绑定数据列表

    HideDivInDivObj(this.thisDivLayout, 'divLoading');
  }

  public async CombineQuestionnaireCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      strWhereCond += ` And ${clsQuestionnaireEN.con_CourseId} = '${clsPubLocalStorage.courseId}'`;

      if (this.QuestionName_q != '') {
        strWhereCond += ` And ${clsQuestionnaireEN.con_QuestionName} like '% ${this.QuestionName_q}%'`;
      }
      if (this.courseChapterId_q != '' && this.courseChapterId_q != '0') {
        strWhereCond += ` And ${clsQuestionnaireEN.con_CourseChapterId} = '${this.courseChapterId_q}'`;
      }
      if (this.questionTypeId_q != '' && this.questionTypeId_q != '0') {
        strWhereCond += ` And ${clsQuestionnaireEN.con_QuestionTypeId} = '${this.questionTypeId_q}'`;
      }
      if (this.difficultyLevelId_q != '' && this.difficultyLevelId_q != '0') {
        strWhereCond += ` And ${clsQuestionnaireEN.con_DifficultyLevelId} = '${this.difficultyLevelId_q}'`;
      }

      strWhereCond += ` And ${clsQuestionnaireEN.con_LevelModeTypeId} <> '02'`;
      strWhereCond += ` And ${clsQuestionnaireEN.con_IsShow} = 1`;
      //strWhereCond += ` And ${clsQuestionnaireEN.con_IsTest} = 1`;

      //if ($("#ddlIsTest_q").prop("selectedIndex") == 1) {
      //    strWhereCond += ` And ${clsQuestionnaireEN.con_IsTest} = '1'`;
      //}
      //else if ($("#ddlIsTest_q").prop("selectedIndex") == 2) {
      //    strWhereCond += ` And ${clsQuestionnaireEN.con_IsTest} = '0'`;
      //}
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0009)在组合查询条件(CombineQuestionnaireCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 函数功能:在数据 列表中跳转到某一页
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
     <param name = "intPageIndex">页序号</param>
   */
  //public async IndexPage(intPageIndex) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.PageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    await this.BindGv_Questionnaire4Func(this.thisDivList);
  //}

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
*/
  public async BindGv_Questionnaire4Func(divList: HTMLDivElement) {
    //if (this.hidSortQuestionnaireBy == null) {
    //    const strMsg = `在显示列表时，排序字段(hidSortQuestionnaireBy)为空，请检查！(In BindGv_Questionnaire_Cache)`;
    //    console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    // const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineQuestionnaireCondition();

    //const objQuestionnaire_Cond = this.CombineQuestionnaireConditionObj();
    //objQuestionnaire_Cond.SetCondFldValue(clsQuestionnaireEN.con_CourseId, QuestionnaireCRUDEx.strCourseIdCache, "=");
    //const objQuestionnaireEN_Sim = Questionnaire_GetSimObjFromObj(objQuestionnaire_Cond);
    //console.log(objQuestionnaireEN_Sim);
    //const strWhereCond = JSON.stringify(objQuestionnaireEN_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQuestionnaireObjLst: Array<clsQuestionnaireEN> = [];
    let arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx> = [];
    try {
      //this.recCount = await Questionnaire_GetRecCountByCondAsync(objQuestionnaire_Cond);
      this.recCount = await Questionnaire_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: 'questionIndex Asc',
        sortFun: () => {
          return 0;
        },
      };
      arrQuestionnaireObjLst = await Questionnaire_GetObjLstByPagerAsync(objPagerPara);
      arrQuestionnaireExObjLst = arrQuestionnaireObjLst.map(this.CopyToEx);
      for (const objInFor of arrQuestionnaireExObjLst) {
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

      $('#divQuestionDataLst').html(strHtml);
      this.objPager.isShowInputPage = false;
      if (this.objPager.IsInit(divList, this.divName4Pager) == false)
        this.objPager.InitShow(divList, this.divName4Pager);
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(divList, this, this.divName4Pager);

      console.log('完成BindGv_Questionnaire4Func!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objQuestionnaireENS">源对象</param>
  /// <returns>目标对象=>clsQuestionnaireEN:objQuestionnaireENT</returns>
  public CopyToEx(objQuestionnaireENS: clsQuestionnaireEN): clsQuestionnaireENEx {
    const objQuestionnaireENT = new clsQuestionnaireENEx();
    try {
      Questionnaire_CopyObjTo(objQuestionnaireENS, objQuestionnaireENT);
      return objQuestionnaireENT;
    } catch (e) {
      const strMsg: string = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
      console.error(strMsg);
      alert(strMsg);
      return objQuestionnaireENT;
    }
  }

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objQuestionnaireS">源对象</param>
  public async FuncMap(objQuestionnaire: clsQuestionnaireENEx) {
    try {
      //{
      //    const cc_Course_CourseId = objQuestionnaire.courseId;
      //    const cc_Course_CourseName = await cc_Course_func(clscc_CourseEN.con_CourseId, clscc_CourseEN.con_CourseName, cc_Course_CourseId);
      //    objQuestionnaire.courseName = cc_Course_CourseName;
      //};
      {
        const cc_CourseChapter_CourseChapterId = objQuestionnaire.courseChapterId;
        const cc_CourseChapter_ChapterName = await cc_CourseChapter_func(
          clscc_CourseChapterEN.con_CourseChapterId,
          clscc_CourseChapterEN.con_ChapterName,
          cc_CourseChapter_CourseChapterId,
          objQuestionnaire.courseId,
        );
        objQuestionnaire.chapterName = cc_CourseChapter_ChapterName;
      }
      {
        const QuestionType_QuestionTypeId = objQuestionnaire.questionTypeId;
        const QuestionType_QuestionTypeName = await QuestionType_func(
          clsQuestionTypeEN.con_QuestionTypeId,
          clsQuestionTypeEN.con_QuestionTypeName,
          QuestionType_QuestionTypeId,
        );
        objQuestionnaire.questionTypeName = QuestionType_QuestionTypeName;
      }
      {
        const ge_DifficultyLevel_DifficultyLevelId = objQuestionnaire.difficultyLevelId;
        const ge_DifficultyLevel_DifficultyLevelName = await ge_DifficultyLevel_func(
          clsge_DifficultyLevelEN.con_DifficultyLevelId,
          clsge_DifficultyLevelEN.con_DifficultyLevelName,
          ge_DifficultyLevel_DifficultyLevelId,
        );
        objQuestionnaire.difficultyLevelName = ge_DifficultyLevel_DifficultyLevelName;
      }
      {
        const ge_LevelModeType_LevelModeTypeId = objQuestionnaire.levelModeTypeId;
        const ge_LevelModeType_LevelModeTypeName = await ge_LevelModeType_func(
          clsge_LevelModeTypeEN.con_LevelModeTypeId,
          clsge_LevelModeTypeEN.con_LevelModeTypeName,
          ge_LevelModeType_LevelModeTypeId,
        );
        objQuestionnaire.levelModeTypeName = ge_LevelModeType_LevelModeTypeName;
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async Bind_ShowPager(divContainer: HTMLDivElement) {
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  private async BindList_QuestionnaireEx(
    arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx>,
  ): Promise<string> {
    const strThisFuncName = this.BindList_QuestionnaireEx.name;
    const tz_ContentAttachmentStore = usetz_ContentAttachmentStore();
    const vQxUsersSimStore = usevQxUsersSimStore();
    try {
      for (const objInFor of arrQuestionnaireExObjLst) {
        await QuestionnaireEx_FuncMapByFldName(clsQuestionnaireENEx.con_QuestionTypeName, objInFor);
        await QuestionnaireEx_FuncMapByFldName(
          clsQuestionnaireENEx.con_DifficultyLevelName,
          objInFor,
        );
        await QuestionnaireEx_FuncMapByFldName(
          clsQuestionnaireENEx.con_LevelModeTypeName,
          objInFor,
        );
        await QuestionnaireEx_FuncMapByFldName(clsQuestionnaireENEx.con_ChapterName, objInFor);
      }
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return '';
    }
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

    const arrQuestionOptionsObjLst2 = await QuestionOptions_GetObjLstAsync(strWhereQuestionOptions);

    //正确答案
    const strWhereAnswer = "1=1 and courseId='" + strCourseId + "' order by answerIndex Asc ";

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

    //获取用户缓存数据

    ////操作类型
    //const arrge_OperationType: Array<clsge_OperationTypeEN> = await clsge_OperationType_GetObjLstCache();
    ////控件类型
    //const arrge_ControlType: Array<ge_ControlTypeEN> = await clsge_ControlType_GetObjLstCache();
    ////事件类型
    //const arrge_EventType: Array<ge_EventTypeEN> = await clsge_EventType_GetObjLstCache();
    ////检查类型
    //const arrge_ExaminationType: Array<ge_ExaminationTypeEN> = await clsge_ExaminationType_GetObjLstCache();

    ////控件属性
    //const arrge_ControlAttribute: Array<ge_ControlAttributeEN> = await clsge_ControlAttribute_GetObjLstCache();

    let strhtml: string = '';
    let strTitle = '';

    strTitle = '题目列表';

    strhtml += '<div class="info" id="infoViewpoint">';

    strhtml += '<div class="title btn-3">';

    strhtml += '<a href="javascript:void(0)" title="' + strTitle + '">' + strTitle + '</a>';

    //strhtml += '<div style="float:right; margin-right:20px;">';
    //strhtml += '<button title="添加题目" class="layui-btn layui-btn-radius" onclick=btn_Click("AddNewRecordWithMaxId")> <i class="layui-icon" >&#xe608;</i>添加题目</button>';
    //strhtml += '<button id="btnReOrderByCource" title="重序" class="layui-btn layui-btn-danger layui-btn-radius" onclick=btn_Click("ReOrder")> <i class="layui-icon" >&#xe9aa;</i>重序</button>';
    //strhtml += '</div>';

    strhtml += '</div>';

    strhtml += '<ul class="artlist">';

    let v = 0; //给内容加个序号
    for (let i = 0; i < arrQuestionnaireExObjLst.length; i++) {
      const objQuestionnaireEx = arrQuestionnaireExObjLst[i];
      v++;
      //得到questionID；
      const strQuestionId = objQuestionnaireEx.questionId;
      const strQuestionName = objQuestionnaireEx.questionName; //题目名称
      const strQuestionTypeId = objQuestionnaireEx.questionTypeId; //题目类型ID
      const strQuestionTypeName = objQuestionnaireEx.questionTypeName; //题目类型
      const strDifficultyLevelName = objQuestionnaireEx.difficultyLevelName; //难度等级
      //const strCourseName = objQuestionnaireEx.courseName;//课程名称
      const strChapterName = objQuestionnaireEx.chapterName; //章节名称
      const intQuestionIndex = objQuestionnaireEx.questionIndex; //序号
      const strLevelModeTypeName = objQuestionnaireEx.levelModeTypeName; //题目操作模式

      //strhtml += '</li>';
      strhtml +=
        '<li><span class="rowtit color1">' +
        intQuestionIndex +
        '.[' +
        strQuestionTypeName +
        ']：</span><span class="abstract-text">' +
        strQuestionName +
        '</span>&nbsp;&nbsp;<span style="color:#17a2b8;">(' +
        strDifficultyLevelName +
        ')</span>&nbsp;&nbsp;<span style="color:#436EEE;">(操作模式:' +
        strLevelModeTypeName +
        ')</span></li>';

      //strhtml += '<div style="float:right; margin-right:20px;">';
      ////strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[题目操作]：</span>';
      ////修改
      //strhtml += '&nbsp;&nbsp;<button title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btn_Click("UpdateRecord","' + strQuestionId + '")> <i class="layui-icon" >&#xe642;</i>修改</button>';
      ////删除
      //strhtml += '&nbsp;&nbsp;<button title="删除" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btn_Click("DelRecord","' + strQuestionId + '")> <i class="layui-icon" >&#xe640;</i>删除</button>';
      ////克隆
      //strhtml += '&nbsp;&nbsp;<button title="克隆" class="layui-btn layui-btn layui-btn-xs" onclick=btn_Click("Clone","' + strQuestionId + '")> <i class="layui-icon" >&#xe630;</i>克隆</button>';
      ////移顶
      //strhtml += '&nbsp;&nbsp;<button title="移顶" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("GoTop","' + strQuestionId + '",' + intQuestionIndex + ')><i class="layui-icon">&#xe604;</i></button>';
      ////上移
      //strhtml += '<button title="上移" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("UpMove","' + strQuestionId + '",' + intQuestionIndex + ')><i class="iconfont">&#xe6a5;</i></button>';
      ////下移
      //strhtml += '<button title="下移" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("DownMove","' + strQuestionId + '",' + intQuestionIndex + ')><i class="iconfont">&#xe6a6;</i></button>';
      ////移底
      //strhtml += '<button title="移底" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("GoBottum","' + strQuestionId + '",' + intQuestionIndex + ')><i class="layui-icon">&#xe625;</i></button>';
      //strhtml += '</div>'

      //strhtml += '</li>'

      //附件
      //strhtml += '<li><span class="rowtit color3">[题目内容]：</span>&nbsp;&nbsp;<button title="维护题目内容" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnShowOpenAttachment_Click("' + strQuestionId + '")> <i class="layui-icon" >&#xe608;</i>维护题目内容</button></li>';
      strhtml += '<li><span class="rowtit color3">[题目内容]：</span></li>';
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
        //strhtml += '&nbsp;&nbsp;<button title="维护答案选项" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btn_Click("QuestionAnswer","' + strQuestionId + '")> <i class="layui-icon" >&#xe608;</i>维护答案选项</button>';
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
            //strhtml += '&nbsp;&nbsp;<button title="撤销正确选项" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btn_Click("RevokeCorrect","' + strQuestionId + '")> <i class="layui-icon" >&#xe605;</i></button>';

            //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">正确答案</span>';
          } else {
            strhtml +=
              '<span class="abstract-text">' + arrQuestionOptionsObjLst[y].optionName + '</span>';
            //修改
            //strhtml += '&nbsp;&nbsp;<button title="设置正确选项" class="layui-btn layui-btn layui-btn-xs" onclick=btn_Click("SetCorrect","' + strQuestionId + '")> <i class="layui-icon" >&#x1006;</i></button>';
          }
          //strhtml += '&nbsp;&nbsp;<button title="删除选项" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("DelOptionRecord","' + strQuestionId + '")> <i class="layui-icon" >&#xe640;</i></button>';

          strhtml += '</li>';
        }
      }

      //答案
      //答案数据
      const objAnswer = arrAnswerObjLst2.find((x) => x.questionId == strQuestionId);
      strhtml += '<li><span class="rowtit color3">[正确答案]：</span>';
      //strhtml += '&nbsp;&nbsp;<button title="添加答案" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btn_Click("QuestionAnswer","' + strQuestionId + '")> <i class="layui-icon">&#xe608;</i>添加答案</button>';
      //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<button title="维护答案" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnShowAnswer_Click("' + strQuestionId + '")> <i class="layui-icon">&#xe642;</i>维护答案</button>';
      if (objAnswer != null) {
        if (
          strQuestionTypeId == '05' ||
          strQuestionTypeId == '09' ||
          strQuestionTypeId == '10' ||
          strQuestionTypeId == '16'
        ) {
          //解答题.操作、简答、运算
          strhtml += '</li>';
          strhtml +=
            '<li><textarea id="txtCode" name = "txtCode" class="form-control" disabled="true" style = "width:100%; height:150px;" >' +
            objAnswer.answerContent +
            '</textarea></li>';
        } else {
          //strhtml += '&nbsp;&nbsp;<button title="维护答案" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnShowAnswer_Click("' + strQuestionId + '")> <i class="layui-icon">&#xe642;</i>维护答案</button>';
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
          } else {
            strhtml += objAnswer.answerContent + '</li>';
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
      //strhtml += '&nbsp;&nbsp;<button title="添加知识点关系" class="layui-btn layui-btn-normal layui-btn-xs" onclick=btnKnowledgesExamLibRela_Click("' + strQuestionId + '")> <i class="layui-icon">&#xe608;</i>添加知识点关系</button>';
      strhtml += '</li>';

      strhtml += '<li><span class="rowtit color3">[其他]：</span>';
      const strUserName = await vQxUsersSimStore.getUserName(objQuestionnaireEx.updUser);
      if (strUserName != '') {
        //strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑用户：</span>' + objUser.userName;
        strhtml += '&nbsp;&nbsp;编辑用户：' + strUserName + '&nbsp;&nbsp';
      }
      //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑时间：</span>' + this.substrDate(arrvViewpointExObjLst[i].updDate);
      strhtml += '&nbsp;&nbsp;编辑时间：' + objQuestionnaireEx.updDate;
      strhtml += '&nbsp;&nbsp;章节：' + strChapterName + '&nbsp;&nbsp;';
      //if (objQuestionnaireEx.isShow == true) {
      //    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已启用</span>';
      //}
      //else {
      //    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未启用</span>';
      //}
      strhtml += '</li>';
      strhtml += '</br><div style="border-bottom: 2px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';

    return strhtml;
  }

  /*
   * 题目名称 (Used In CombineCondition())
   */
  public get QuestionName_q(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtQuestionName_q');
  }
  /*
   * 题目名称 (Used In CombineCondition())
   */
  public set QuestionName_q(value: string) {
    SetInputValueInDivObj(this.thisDivLayout, 'txtQuestionName_q', value);
  }
  /*
   * 题目类型Id (Used In CombineCondition())
   */
  public get questionTypeId_q(): string {
    return GetSelectValueInDivObj(this.thisDivLayout, 'ddlQuestionTypeId_q');
  }
  /*
   * 题目类型Id (Used In CombineCondition())
   */
  public set questionTypeId_q(value: string) {
    const objDiv = $(`#${this.divName4Query}`);
    CheckControlExist(this.divName4Query, 'select', 'ddlQuestionTypeId_q');
    const strId = `select[id ^= "ddlQuestionTypeId_q"]`;
    objDiv.find(strId).val(value);
  }
  /*
   * 课程章节ID (Used In CombineCondition())
   */
  public get courseChapterId_q(): string {
    return GetSelectValueInDivObj(this.thisDivLayout, 'ddlCourseChapterId_q');
  }
  /*
   * 课程章节ID (Used In CombineCondition())
   */
  public set courseChapterId_q(value: string) {
    const objDiv = $(`#${this.divName4Query}`);
    CheckControlExist(this.divName4Query, 'select', 'ddlCourseChapterId_q');
    const strId = `select[id ^= "ddlCourseChapterId_q"]`;
    objDiv.find(strId).val(value);
  }
  /*
   * 难度等级Id (Used In CombineCondition())
   */
  public get difficultyLevelId_q(): string {
    return GetSelectValueInDivObj(this.thisDivLayout, 'ddlDifficultyLevelId_q');
  }
  /*
   * 难度等级Id (Used In CombineCondition())
   */
  public set difficultyLevelId_q(value: string) {
    const objDiv = $(`#${this.divName4Query}`);
    CheckControlExist(this.divName4Query, 'select', 'ddlDifficultyLevelId_q');
    const strId = `select[id ^= "ddlDifficultyLevelId_q"]`;
    objDiv.find(strId).val(value);
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
