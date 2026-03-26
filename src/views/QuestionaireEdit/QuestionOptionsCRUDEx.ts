/*-- -- -- -- -- -- -- -- -- -- --
类名:QuestionOptionsCRUDEx
表名:QuestionOptions(01120188)
生成代码版本:2021.02.03.1
生成日期:2021/02/08 19:36:04
生成者:
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:问卷维护
模块英文名:QuestionaireEdit
框架-层名:WA_界面后台Ex_TS(WA_ViewScriptCSEx_TS)
编程语言:TypeScript
== == == == == == == == == == == == 
*/

//import * as $ from "jquery";
//import * as QQ from "q";
import { QuestionOptionsCRUD } from '@/viewsBase/QuestionaireEdit/QuestionOptionsCRUD';
import { QuestionOptions_Edit } from '@/viewsBase/QuestionaireEdit/QuestionOptions_Edit';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { clsQuestionOptionsENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsENEx';
import {
  QuestionOptions_DelQuestionOptionssAsync,
  QuestionOptions_DelRecordAsync,
  QuestionOptions_GetRecCountByCondCache,
  QuestionOptions_ReFreshCache,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { QuestionOptionsEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDiv_Empty,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, confirmDel } from '@/ts/PubFun/clsCommFunc4Web';

import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { QuestionOptions_EditEx } from './QuestionOptions_EditEx';
import { tz_ContentAttachmentListEx } from '@/viewsShare/ResourceMan/tz_ContentAttachmentListEx';
import { usetz_ContentAttachmentStore } from '@/store/modulesShare/tz_ContentAttachment';
import { tz_ContentAttachmentEx_GeneDivObjByObj } from '@/ts/L3ForWApiEx/ResourceMan/clstz_ContentAttachmentExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  viewVarSet,
  divVarSet,
  CourseId_Session,
  qryVarSet,
} from '@/views/QuestionaireEdit/QuestionOptionsVueShare';

declare function ShowDialog_QuestionOptions(strOpType: string): void;
declare function HideDialog_QuestionOptions(): void;
// declare function RefreshParent(): void;

/* QuestionOptionsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class QuestionOptionsCRUDEx extends QuestionOptionsCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static vuebtn_Click_Parent: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortQuestionOptionsBy: string = "questionOptionId";
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
  BindGv(strType: string) {
    // QuestionOptionsCRUD.QuestionIDOrderNum = this.questionId;
    this.btnReOrder_Click();
    QuestionOptionsCRUDEx.vuebtn_Click_Parent('RefreshParent', '');
    //QuestionOptions_ReFreshCache(CourseId_Session.value);
    //this.BindGv_QuestionOptions4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'QuestionOptions':
        alert('该类没有绑定该函数：[this.BindGv_QuestionOptions_Cache]！');
        //this.BindGv_QuestionOptionsCache();
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: QuestionOptionsCRUDEx;
    if (QuestionOptionsCRUD.objPageCRUD == null) {
      QuestionOptionsCRUD.objPageCRUD = new QuestionOptionsCRUDEx();
      objPage = <QuestionOptionsCRUDEx>QuestionOptionsCRUD.objPageCRUD;
    } else {
      objPage = <QuestionOptionsCRUDEx>QuestionOptionsCRUD.objPageCRUD;
    }
    const objPageEdit: QuestionOptions_EditEx = new QuestionOptions_EditEx(
      'QuestionOptions_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'RefreshParent':
        alert('RefreshParent');
        await objPage.BindGv_QuestionOptions4Func(objPage.thisDivList);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        QuestionOptions_EditEx.GetPropValue = QuestionOptionsCRUDEx.GetPropValue;
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        tz_ContentAttachmentListEx.vuebtn_Click_Parent = QuestionOptionsCRUDEx.vuebtn_Click_Parent;
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update':
        //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        //objPageEdit.btnUpdateRecord_Click();
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
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
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      default:
        strMsg = '命令:' + strCommandName + '在函数(QuestionOptionsCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
*/
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortQuestionOptionsBy = 'optionIndex Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_QuestionOptions4Func(divVarSet.refDivList);
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
  public async CombineQuestionOptionsConditionObj(): Promise<clsQuestionOptionsEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objQuestionOptions_Cond = new clsQuestionOptionsEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.optionName_q != '') {
        strWhereCond += ` And ${clsQuestionOptionsEN.con_OptionName} like '% ${qryVarSet.optionName_q}%'`;
        objQuestionOptions_Cond.SetCondFldValue(
          clsQuestionOptionsEN.con_OptionName,
          qryVarSet.optionName_q,
          'like',
        );
      }
      //if (this.IsCorrect_q == true) {
      //    strWhereCond += ` And ${clsQuestionOptionsEN.con_IsCorrect} = '1'`;
      //    objQuestionOptions_Cond.SetCondFldValue(clsQuestionOptionsEN.con_IsCorrect, true, "=");
      //}
      //else {
      //    strWhereCond += ` And ${clsQuestionOptionsEN.con_IsCorrect} = '0'`;
      //    objQuestionOptions_Cond.SetCondFldValue(clsQuestionOptionsEN.con_IsCorrect, false, "=");
      //}

      //判断隐藏传递题目ID是否为空，如果不为空，那么则显示该题目相关选项ID；
      if (this.questionId != 0) {
        strWhereCond += ` And ${clsQuestionOptionsEN.con_QuestionId} = ${this.questionId}`;
        objQuestionOptions_Cond.SetCondFldValue(
          clsQuestionOptionsEN.con_QuestionId,
          this.questionId,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(CombineQuestionOptionsConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objQuestionOptions_Cond.whereCond = strWhereCond;
    return objQuestionOptions_Cond;
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
  */
  public async BindGv_QuestionOptions4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortQuestionOptionsBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortQuestionOptionsBy)为空，请检查！(In BindGv_QuestionOptions_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objQuestionOptions_Cond = await this.CombineQuestionOptionsConditionObj();
    objQuestionOptions_Cond.SetCondFldValue(
      clsQuestionOptionsEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objQuestionOptions_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    // const arrQuestionOptionsObjLst: Array<clsQuestionOptionsEN> = [];
    let arrQuestionOptionsExObjLst: Array<clsQuestionOptionsENEx> = [];
    try {
      this.recCount = await QuestionOptions_GetRecCountByCondCache(
        objQuestionOptions_Cond,
        CourseId_Session.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortQuestionOptionsBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrQuestionOptionsExObjLst = await QuestionOptionsEx_GetObjExLstByPagerCache(
        objPagerPara,
        CourseId_Session.value,
      );
      // arrQuestionOptionsExObjLst = arrQuestionOptionsObjLst.map(this.CopyToEx);
      // for (const objInFor of arrQuestionOptionsExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      // }
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //if (arrQuestionOptionsObjLst.length == 0) {
    //    const strKey: string = `${clsQuestionOptionsEN._CurrTabName}_${CourseId_Session.value}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_QuestionOptions4Func(divList, arrQuestionOptionsExObjLst);
      console.log('完成BindGv_QuestionOptions4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 显示QuestionOptions对象的所有属性值
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
    <param name = "divContainer">显示容器</param>
    <param name = "arrQuestionOptionsExObjLst">需要绑定的对象列表</param>
  */
  public async BindTab_QuestionOptions4Func(
    divContainer: HTMLDivElement,
    arrQuestionOptionsExObjLst: Array<clsQuestionOptionsENEx>,
  ) {
    const strThisFuncName = this.BindTab_QuestionOptions4Func.name;
    const tz_ContentAttachmentStore = usetz_ContentAttachmentStore();
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;

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
      //    colHeader: "题目",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 2,
      //    funcName: () => { }
      //},
      {
        fldName: 'optionIndex',
        sortBy: 'optionIndex',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '选项序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      //{
      //    fldName: "optionTitle",
      //    sortBy: "optionTitle",
      //    colHeader: "选项字母序号",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 5,
      //    funcName: () => { }
      //},
      {
        fldName: 'optionName',
        sortBy: 'optionName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '选项内容',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'attachPic',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '附件图片',
        text: '',
        tdClass: 'text-left',
        columnType: 'Picture',
        orderNum: 3,

        funcName: async (strKeyId: string, strText: string) => {
          const arrtz_ContentAttachment = await tz_ContentAttachmentStore.getObjENLst(
            '0006',
            strKeyId,
          );
          const div1 = GetDiv_Empty('');
          if (arrtz_ContentAttachment != null) {
            for (let y = 0; y < arrtz_ContentAttachment.length; y++) {
              const divSub1 = tz_ContentAttachmentEx_GeneDivObjByObj(
                arrtz_ContentAttachment[y],
                strAddressAndPort,
                '150px',
              );
              div1.appendChild(divSub1);
            }
          }

          return div1;
        },
      },

      {
        fldName: 'isCorrect',
        sortBy: 'isCorrect',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '是否正确',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      //{
      //    fldName: "score",
      //    sortBy: "score",
      //    colHeader: "得分",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 8,
      //    funcName: () => { }
      //},
      {
        fldName: 'isShow',
        sortBy: 'isShow',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '是否启用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
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
        orderNum: 10,
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
        orderNum: 11,
        funcName: () => {},
      },
    ];
    await BindTab(divDataLst, arrQuestionOptionsExObjLst, arrDataColumn, 'questionOptionId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecord(strQuestionOptionId: string) {
    try {
      const responseText = await QuestionOptions_DelRecordAsync(strQuestionOptionId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        QuestionOptions_ReFreshCache(CourseId_Session.value);
        // RefreshParent();
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
  /* 根据关键字列表删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
*/
  public async DelMultiRecord(arrQuestionOptionId: Array<string>) {
    try {
      const responseText = await QuestionOptions_DelQuestionOptionssAsync(arrQuestionOptionId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        QuestionOptions_ReFreshCache(CourseId_Session.value);
        const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        // RefreshParent();
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

  /*
    克隆
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   */
  public async btnCopyRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const responseText = await this.CopyRecord(arrKeyIds);
      const responseText2 = await this.btnReOrder_Click();
      //await this.BindGv_QuestionOptions4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `复制记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public set QuestionId_OrderNum(value: number) {
    $('#hidQuestionId').val(value);
  }
  /*
   * 存放题目ID
   */
  public get QuestionId_OrderNum(): number {
    return this.questionId;
  }
  /*
   * 存放题目ID
   */
  public get questionId(): number {
    const strQuestionId = Number(QuestionOptionsCRUDEx.GetPropValue('questionId'));
    return strQuestionId;
  }

  /**
   * 在数据表里删除记录
   * "strQuestionOptionId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      await this.DelRecord(strKeyId);
      // await this.BindGv_QuestionOptionsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      default:
        viewVarSet.sortQuestionOptionsBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_QuestionOptionsCache(this.thisDivList);
  }
}
