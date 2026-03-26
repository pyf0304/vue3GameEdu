/**
* 类名:QuestionnaireCRUD_ListEx(界面:QuestionnaireCRUD_List)
* 表名:Questionnaire(01120001)
* 生成代码版本:2022.11.19.1
* 生成日期:2022/11/23 15:00:20
* 生成者:
工程名称:问卷调查(0112)
CM工程:游戏化教育平台(变量首字母小写)-全部函数集
* 相关数据库:103.116.76.183,9433EduHigh_Jsie
* PrjDataBaseId:0170
* 模块中文名:问卷维护(QuestionaireEdit)
* 框架-层名:WA_界面后台Ex_TS(TS)(WA_ViewScriptCSEx_TS)
* 编程语言:TypeScript
**/
import { QuestionnaireCRUD_List } from '@/viewsBase/QuestionaireEdit/QuestionnaireCRUD_List';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';
import { QuestionnaireEx_DelRecordEx } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionnaireExWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetSelectObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, confirm_del, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  divVarSet,
  qryVarSet,
  CourseId_Session,
  viewVarSet,
} from '@/views/QuestionaireEdit/QuestionnaireCRUD_ListVueShare';

//import $ from "jquery";
/** QuestionnaireCRUD_ListEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class QuestionnaireCRUD_ListEx extends QuestionnaireCRUD_List implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortQuestionnaireBy = "QuestionId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
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
  BindGv(strType: string, strPara: string) {
    this.BindGv_Questionnaire4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'Questionnaire':
        alert('该类没有绑定该函数：[this.BindGv_Questionnaire4Func]！');
        //this.BindGv_Questionnaire4Func(divVarSet.refDivList);
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: QuestionnaireCRUD_ListEx;
    if (QuestionnaireCRUD_List.objPageCRUD == null) {
      QuestionnaireCRUD_List.objPageCRUD = new QuestionnaireCRUD_ListEx();
      objPage = <QuestionnaireCRUD_ListEx>QuestionnaireCRUD_List.objPageCRUD;
    } else {
      objPage = <QuestionnaireCRUD_ListEx>QuestionnaireCRUD_List.objPageCRUD;
    }
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
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
        objPage.btnGoTop_Click();
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
          '命令:' + strCommandName + '在函数(QuestionnaireCRUD_ListExEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineQuestionnaireCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " {0} = '{1}' ",
      clsQuestionnaireEN.con_CourseId,
      clsPubLocalStorage.courseId,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (qryVarSet.questionName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQuestionnaireEN.con_QuestionName,
          qryVarSet.questionName_q,
        );
      }
      if (qryVarSet.courseChapterId_q != '' && qryVarSet.courseChapterId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_CourseChapterId,
          qryVarSet.courseChapterId_q,
        );
      }
      if (qryVarSet.questionTypeId_q != '' && qryVarSet.questionTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_QuestionTypeId,
          qryVarSet.questionTypeId_q,
        );
      }
      if (qryVarSet.difficultyLevelId_q != '' && qryVarSet.difficultyLevelId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_DifficultyLevelId,
          qryVarSet.difficultyLevelId_q,
        );
      }
      if (qryVarSet.levelModeTypeId_q != '' && qryVarSet.levelModeTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQuestionnaireEN.con_LevelModeTypeId,
          qryVarSet.levelModeTypeId_q,
        );
      }
      if (GetSelectObjInDivObj(this.thisDivLayout, 'ddlIsTest_q').selectedIndex == 1) {
        strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
      } else if (GetSelectObjInDivObj(this.thisDivLayout, 'ddlIsTest_q').selectedIndex == 2) {
        strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsTest);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombineQuestionnaireCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortQuestionnaireBy = 'questionName Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_Click() {
    const strThisFuncName = this.btnDelRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(arrKeyIds.length) == false) {
        return;
      }
      for (const strKeyId of arrKeyIds) {
        await QuestionnaireEx_DelRecordEx(Number(strKeyId));
      }

      await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示Questionnaire对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrQuestionnaireExObjLst:需要绑定的对象列表
   **/
  public async BindTab_Questionnaire4Func(
    divContainer: HTMLDivElement,
    arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx>,
  ) {
    const strThisFuncName = this.BindTab_Questionnaire4Func.name;
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
      {
        fldName: clsQuestionnaireENEx.con_QuestionNo,
        sortBy: 'questionNo',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '题目Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQuestionnaireENEx.con_QuestionName,
        sortBy: 'questionName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '题目名称1',
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
        fldName: clsQuestionnaireENEx.con_KnowledgeNameLst,
        sortBy: clsQuestionnaireENEx.con_KnowledgeNameLst,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点s',
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
        fldName: clsQuestionnaireENEx.con_ChapterName,
        sortBy: 'chapterName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程章节',
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
        fldName: clsQuestionnaireENEx.con_QuestionTypeName,
        sortBy: 'questionTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '题目类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      // {
      //   fldName: clsQuestionnaireENEx.con_AnswerContent,
      //   sortBy: clsQuestionnaireENEx.con_AnswerContent,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '答案',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 7,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsQuestionnaireENEx.con_DifficultyLevelName,
        sortBy: 'difficultyLevelName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '难度等级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQuestionnaireENEx.con_LevelModeTypeName,
        sortBy: 'levelModeTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '模式名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      //{
      //    fldName: clsQuestionnaireEN.con_LevelNo,
      //    sortBy: clsQuestionnaireEN.con_LevelNo,
      //    sortFun: SortFun,
      //    getDataSource: "",
      //    colHeader: "学习关号",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 9,
      //    funcName: (strKey: string, strText: string) => { console.log(strKey, strText); return new HTMLElement(); }
      //},
      {
        fldName: clsQuestionnaireENEx.con_UpdDateSim,
        sortBy: clsQuestionnaireENEx.con_UpdDateSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      //{
      //    fldName: clsQuestionnaireENEx.con_UpdUser,
      //    sortBy: "updUser",
      //    sortFun: SortFun,
      //    getDataSource: "",
      //    colHeader: "修改人",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 11,
      //    funcName: (strKey: string, strText: string) => { console.log(strKey, strText); return new HTMLElement(); }
      //},
      {
        fldName: clsQuestionnaireEN.con_IsShow,
        sortBy: clsQuestionnaireEN.con_IsShow,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '启用?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      // {
      //   fldName: clsQuestionnaireEN.con_IsJs,
      //   sortBy: clsQuestionnaireEN.con_IsJs,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '是否是JS',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 13,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      // {
      //   fldName: clsQuestionnaireEN.con_IsTest,
      //   sortBy: clsQuestionnaireEN.con_IsTest,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '是否测试',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 14,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
    ];
    try {
      await this.ExtendFldFuncMap(arrQuestionnaireExObjLst, arrDataColumn);
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
      arrQuestionnaireExObjLst,
      arrDataColumn,
      clsQuestionnaireEN.con_QuestionId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
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
