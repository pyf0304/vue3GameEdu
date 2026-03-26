import { Answer_EditEx } from './Answer_EditEx';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  Answer_GetRecCountByCondCache,
  Answer_ReFreshCache,
  Answer_ReOrderAsync,
  Answer_UpMoveAsync,
  Answer_GoBottomAsync,
  Answer_GoTopAsync,
  Answer_DownMoveAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsAnswerENEx } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerENEx';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { AnswerCRUD } from '@/viewsBase/QuestionaireEdit/AnswerCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { BindTab, confirm_del, SetCkechedItem4KeyIdInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
import { AnswerEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsAnswerExWApi';
import { Answer_Edit } from '@/viewsBase/QuestionaireEdit/Answer_Edit';
import {
  viewVarSet,
  divVarSet,
  CourseId_Session,
  qryVarSet,
} from '@/views/QuestionaireEdit/AnswerVueShare';

declare function RefreshParent(): void;

/* AnswerCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class AnswerCRUDEx extends AnswerCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortAnswerBy: string = "answerId";
  //public static QuestionId: number = "";
  public static strCourseIdCache: string = clsPubLocalStorage.courseId;
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
    CourseId_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string) {
    //this.btnReOrder_Click();
    //Answer_ReFreshCache(CourseId_Session.value);
    this.BindGv_Answer4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'Answer':
        alert('该类没有绑定该函数：[this.BindGv_Answer_Cache]！');
        //this.BindGv_AnswerCache();
        break;
      default:
        const strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: AnswerCRUDEx;
    if (AnswerCRUD.objPageCRUD == null) {
      AnswerCRUD.objPageCRUD = new AnswerCRUDEx();
      objPage = <AnswerCRUDEx>AnswerCRUD.objPageCRUD;
    } else {
      objPage = <AnswerCRUDEx>AnswerCRUD.objPageCRUD;
    }
    const objPageEdit: Answer_EditEx = new Answer_EditEx('Answer_EditEx', objPage);
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
        if (confirm_del(arrKeyIds.length) == false) {
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
        strMsg = '命令:' + strCommandName + '在函数(AnswerCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
  */
  public async BindGv_Answer4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortAnswerBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortAnswerBy)为空，请检查！(In BindGv_Answer_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objAnswer_Cond = await this.CombineAnswerConditionObj();
    objAnswer_Cond.SetCondFldValue(clsAnswerEN.con_CourseId, CourseId_Session.value, '=');
    const strWhereCond = JSON.stringify(objAnswer_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrAnswerExObjLst: Array<clsAnswerENEx> = [];
    try {
      this.recCount = await Answer_GetRecCountByCondCache(objAnswer_Cond, CourseId_Session.value);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortAnswerBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrAnswerExObjLst = await AnswerEx_GetObjExLstByPagerCache(
        objPagerPara,
        CourseId_Session.value,
      );
      //    arrAnswerExObjLst = arrAnswerObjLst.map(this.CopyToEx);
      //    for (const objInFor of arrAnswerExObjLst) {
      //        const conFuncMap = await this.FuncMap(objInFor);
      //    }
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //if (arrAnswerObjLst.length == 0) {
    //    const strKey: string = `${clsAnswerEN._CurrTabName}_${CourseId_Session.value}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_Answer4Func(divList, arrAnswerExObjLst);
      console.log('完成BindGv_Answer4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 显示Answer对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrAnswerExObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_Answer4Func(
    divContainer: HTMLDivElement,
    arrAnswerExObjLst: Array<clsAnswerENEx>,
  ) {
    const strThisFuncName = this.BindTab_Answer4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');

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
      //{
      //    fldName: "questionName",
      //    sortBy: "questionName",
      //    colHeader: "题目名称",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 2,
      //    funcName: () => { }
      //},
      {
        fldName: 'answerIndex',
        sortBy: 'answerIndex',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '问答序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'answerFillInBlank',
        sortBy: 'answerFillInBlank',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '填空答案',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'answerContent',
        sortBy: 'answerContent',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '内容',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      //{
      //    fldName: "provider",
      //    sortBy: "provider",
      //    colHeader: "提供者",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 4,
      //    funcName: () => { }
      //},
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
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
        orderNum: 6,
        funcName: () => {},
      },
    ];
    await BindTab(divDataLst, arrAnswerExObjLst, arrDataColumn, 'answerId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
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
      const lngKeyId = Number(strKeyId);
      const responseText = await this.DelRecord(lngKeyId);
      await this.BindGv_Answer4Func(divVarSet.refDivList);
      RefreshParent();
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
*/
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      this.InitVarSet();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortAnswerBy = 'answerIndex Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_Answer4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombineAnswerConditionObj(): Promise<clsAnswerEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';

    const objAnswer_Cond = new clsAnswerEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.answerContent_q != '') {
        strWhereCond += ` And ${clsAnswerEN.con_AnswerContent} like '% ${qryVarSet.answerContent_q}%'`;
        objAnswer_Cond.SetCondFldValue(
          clsAnswerEN.con_AnswerContent,
          qryVarSet.answerContent_q,
          'like',
        );
      }
      if (this.questionId != 0) {
        strWhereCond += ` And ${clsAnswerEN.con_QuestionId} = '${this.questionId}'`;
        objAnswer_Cond.SetCondFldValue(clsAnswerEN.con_QuestionId, this.questionId, '=');
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(CombineAnswerConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objAnswer_Cond.whereCond = strWhereCond;
    return objAnswer_Cond;
  }

  /*
    重序
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
    */
  public async btnReOrder_Click() {
    if (this.PreCheck4Order() == false) return;
    const strQuestionId: number = this.questionId;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        questionId: strQuestionId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Answer_ReOrderAsync(objOrderByData);
      Answer_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_Answer4Func(divVarSet.refDivList);
  }

  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    if (this.PreCheck4Order() == false) return;
    const strQuestionId: number = this.questionId;
    let objPage: AnswerCRUDEx;
    if (AnswerCRUD.objPageCRUD == null) {
      AnswerCRUD.objPageCRUD = new AnswerCRUDEx();
      objPage = <AnswerCRUDEx>AnswerCRUD.objPageCRUD;
    } else {
      objPage = <AnswerCRUDEx>AnswerCRUD.objPageCRUD;
    }
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置底的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        questionId: strQuestionId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Answer_GoBottomAsync(objOrderByData);
      Answer_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `置底出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_Answer4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /*
    移动记录序号时的预检查函数
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
    */
  public PreCheck4Order(): boolean {
    const strQuestionId: number = this.questionId;
    if (strQuestionId == 0) {
      const strMsg = `请输入questionID!`;
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
    if (this.PreCheck4Order() == false) return;
    const strQuestionId: number = this.questionId;
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        questionId: strQuestionId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Answer_DownMoveAsync(objOrderByData);
      Answer_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `下移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_Answer4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /*
    上移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    if (this.PreCheck4Order() == false) return;
    const strQuestionId: number = this.questionId;
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        questionId: strQuestionId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Answer_UpMoveAsync(objOrderByData);
      Answer_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `上移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_Answer4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /* 置顶
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
    */
  public async btnGoTop_Click() {
    if (this.PreCheck4Order() == false) return;
    const strQuestionId: number = this.questionId;
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置顶的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        questionId: strQuestionId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await Answer_GoTopAsync(objOrderByData);
      Answer_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `置顶出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_Answer4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /*
   * 类容类型
   */

  public get questionTypeId(): string {
    const strQuestionId = AnswerCRUDEx.GetPropValue('questionTypeId');
    return strQuestionId;
  }

  /*
   * 存放题目ID
   */
  public get questionId() {
    const strQuestionId = AnswerCRUDEx.GetPropValue('questionId');
    return Number(strQuestionId);
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      default:
        viewVarSet.sortAnswerBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_AnswerCache(this.thisDivList);
  }
}
