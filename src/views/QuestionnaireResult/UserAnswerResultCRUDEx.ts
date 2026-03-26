import { UserAnswerResult_EditEx } from './UserAnswerResult_EditEx';

import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
import { clsUserAnswerResultENEx } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { UserAnswerResultCRUD } from '@/viewsBase/QuestionnaireResult/UserAnswerResultCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { BindTab } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  qryVarSet,
  refUserAnswerResult_List,
  viewVarSet,
  BindTabByList,
  divVarSet,
} from '@/views/QuestionnaireResult/UserAnswerResultVueShare';

declare function ShowDialog_UserAnswerResult(strOpType: string): void;
declare function HideDialog_UserAnswerResult(): void;

/* UserAnswerResultCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class UserAnswerResultCRUDEx extends UserAnswerResultCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortUserAnswerResultBy: string = "MinID";
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
    // IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string) {
    this.BindGv_UserAnswerResult4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'UserAnswerResult':
        alert('该类没有绑定该函数：[this.BindGv_UserAnswerResult_Cache]！');
        //this.BindGv_UserAnswerResultCache();
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: UserAnswerResultCRUDEx;
    if (UserAnswerResultCRUD.objPageCRUD == null) {
      UserAnswerResultCRUD.objPageCRUD = new UserAnswerResultCRUDEx();
      objPage = <UserAnswerResultCRUDEx>UserAnswerResultCRUD.objPageCRUD;
    } else {
      objPage = <UserAnswerResultCRUDEx>UserAnswerResultCRUD.objPageCRUD;
    }
    const objPageEdit: UserAnswerResult_EditEx = new UserAnswerResult_EditEx(
      'UserAnswerResult_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(Number(strKeyId));
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
          '命令:' + strCommandName + '在函数(UserAnswerResultCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
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
      if (qryVarSet.userId_q != '') {
        strWhereCond += ` And ${clsUserAnswerResultEN.con_UserId} like '% ${qryVarSet.userId_q}%'`;
        objUserAnswerResult_Cond.SetCondFldValue(
          clsUserAnswerResultEN.con_UserId,
          qryVarSet.userId_q,
          'like',
        );
      }
      if (qryVarSet.answerText_q != '') {
        strWhereCond += ` And ${clsUserAnswerResultEN.con_AnswerText} like '% ${qryVarSet.answerText_q}%'`;
        objUserAnswerResult_Cond.SetCondFldValue(
          clsUserAnswerResultEN.con_AnswerText,
          qryVarSet.answerText_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(CombineUserAnswerResultConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objUserAnswerResult_Cond.whereCond = strWhereCond;
    return objUserAnswerResult_Cond;
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      this.InitVarSet();

      // 为查询区绑定下拉框
      const gvBindDdl = await this.BindDdl4QueryRegion();

      viewVarSet.sortUserAnswerResultBy = 'questionId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_UserAnswerResult4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /* 函数功能:为查询区绑定下拉框
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
*/
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    //  const ddlCourseId_q = await this.SetDdl_CourseId();//查询区域
    // const ddlBatchId_q = await this.SetDdl_BatchId();//查询区域
  }

  /* 显示UserAnswerResult对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
 <param name = "divContainer">显示容器</param>
 <param name = "arrUserAnswerResultExObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_UserAnswerResult4Func(
    divContainer: HTMLDivElement,
    arrUserAnswerResultExObjLst: Array<clsUserAnswerResultENEx>,
  ) {
    const strThisFuncName = this.BindTab_UserAnswerResult4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }

    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'examBatchNo',
        sortBy: 'examBatchNo',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '批次',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'userId',
        sortBy: 'userId',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '用户',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'questionName',
        sortBy: 'questionName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '题目',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'answerText',
        sortBy: 'answerText',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '回答文本',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },

      {
        fldName: 'isRight',
        sortBy: 'isRight',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '是否正确',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },

      {
        fldName: 'updDate',
        sortBy: 'updDate',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: () => {},
      },
      {
        fldName: 'updUser',
        sortBy: 'updUser',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: () => {},
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrUserAnswerResultExObjLst, arrDataColumn);
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
    if (refUserAnswerResult_List.value != null) {
      await BindTabByList(arrUserAnswerResultExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_UserAnswerResult4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrUserAnswerResultExObjLst,
        arrDataColumn,
        clsUserAnswerResultEN.con_MinId,
        this,
      );
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'examPaperName|Ex':
        viewVarSet.sortUserAnswerResultBy = `cc_CourseExamPaper|ExamPaperName ${sortDirection}|UserAnswerResult.CourseExamPaperId = cc_CourseExamPaper.CourseExamPaperId`;
        break;
      case 'questionName|Ex':
        viewVarSet.sortUserAnswerResultBy = `vQuestionnaire_Sim|QuestionName ${sortDirection}|UserAnswerResult.QuestionId = vQuestionnaire_Sim.QuestionId`;
        break;
      default:
        viewVarSet.sortUserAnswerResultBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_UserAnswerResult4Func(divVarSet.refDivList);
  }
}
