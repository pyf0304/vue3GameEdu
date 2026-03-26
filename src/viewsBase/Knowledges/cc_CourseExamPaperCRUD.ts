/**
 * 类名:cc_CourseExamPaperCRUD(界面:cc_CourseExamPaperCRUD,01120193)
 * 表名:cc_CourseExamPaper(01120071)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:28:37
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  CourseId_Session,
  Combinecc_CourseExamPaperConditionObj4ExportExcel,
  Combinecc_CourseExamPaperConditionObj,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refcc_CourseExamPaper_List,
} from '@/viewsShare/Knowledges/cc_CourseExamPaperVueShare';
import {
  cc_CourseExamPaper_GetRecCountByCondCache,
  cc_CourseExamPaper_GetSubObjLstCache,
  cc_CourseExamPaper_DelRecordAsync,
  cc_CourseExamPaper_ReFreshCache,
  cc_CourseExamPaper_GetObjByCourseExamPaperIdAsync,
  cc_CourseExamPaper_GetObjLstByCourseExamPaperIdLstAsync,
  cc_CourseExamPaper_GetMaxStrIdAsync,
  cc_CourseExamPaper_AddNewRecordAsync,
  cc_CourseExamPaper_Delcc_CourseExamPapersAsync,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscc_CourseExamPaperENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperENEx';
import {
  cc_CourseExamPaperEx_FuncMapByFldName,
  cc_CourseExamPaperEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiExShare/Knowledges/clscc_CourseExamPaperExWApi';
import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';
import {
  ObjectAssign,
  BindTab,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPager } from '@/ts/PubFun/clsPager';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ListPara, clsOperateList, GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
/**
 * 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData: any, strFileName: string): void;
/** cc_CourseExamPaperCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class cc_CourseExamPaperCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: cc_CourseExamPaperCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    cc_CourseExamPaperCRUD.objPageCRUD = this;
    this.objPager = new clsPager(this);
  }
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    return divVarSet.refDivList;
  }
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return divVarSet.refDivLayout;
  }
  /**
   * 获取当前界面的主表名
   **/
  public get thisTabName(): string {
    return clscc_CourseExamPaperEN._CurrTabName;
  }
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public abstract InitVarSet(): void;
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public abstract InitCtlVar(): void;

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      await this.InitVarSet();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();
      if (viewVarSet.sortcc_CourseExamPaperBy == '')
        viewVarSet.sortcc_CourseExamPaperBy = `${clscc_CourseExamPaperEN.con_CourseId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_CourseExamPaper4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_cc_CourseExamPaper4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrcc_CourseExamPaperObjLst: Array<clscc_CourseExamPaperEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrcc_CourseExamPaperObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clscc_CourseExamPaperEN = arrcc_CourseExamPaperObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('考卷({0})导出.xlsx', clscc_CourseExamPaperEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_cc_CourseExamPaperCache() {
    const strThisFuncName = this.ExportExcel_cc_CourseExamPaperCache.name;
    if (viewVarSet.sortcc_CourseExamPaperBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortcc_CourseExamPaperBy)为空,请检查!(In BindGv_cc_CourseExamPaperCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objcc_CourseExamPaperCond = await Combinecc_CourseExamPaperConditionObj4ExportExcel();
    objcc_CourseExamPaperCond.SetCondFldValue(
      clscc_CourseExamPaperEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    let arrcc_CourseExamPaperObjLst: Array<clscc_CourseExamPaperEN> = [];
    try {
      this.recCount = await cc_CourseExamPaper_GetRecCountByCondCache(
        objcc_CourseExamPaperCond,
        CourseId_Session.value,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objcc_CourseExamPaperCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrcc_CourseExamPaperObjLst = await cc_CourseExamPaper_GetSubObjLstCache(
        objcc_CourseExamPaperCond,
        CourseId_Session.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_CourseExamPaperObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clscc_CourseExamPaperEN._CurrTabName,
        CourseId_Session.value,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'courseExamPaperId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '考卷流水号',
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
          fldName: 'examPaperName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '考卷名称',
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
          fldName: 'paperIndex',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '试卷序号',
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
          fldName: 'isShow',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否启用',
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
          fldName: 'totalScore',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '总得分',
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
          fldName: 'viewCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '浏览量',
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
          fldName: 'doneNumber',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '已做人数',
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
          fldName: 'paperTime',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '考试时间（分钟）',
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
          fldName: 'downloadNumber',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '下载数目',
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
          fldName: 'collectionCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '收藏数量',
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
          fldName: 'likeCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '资源喜欢数量',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 14,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'idXzMajor',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业流水号',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 15,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'examCreateTime',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '考卷建立时间',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 17,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isOpenToAllStu',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '全校师生',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 19,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isOpenToSchool',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '全校师生公开',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 20,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isOpenToSocial',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '社会公众',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 21,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isAutoGeneQuestion',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否自动生成题目',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 23,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isCanMultiDo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否可以做多次',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 24,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 25,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 27,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrcc_CourseExamPaperObjLst = arrcc_CourseExamPaperObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrcc_CourseExamPaperObjLst, arrDataColumn);
      //console.log("完成BindGv_cc_CourseExamPaper!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCopyRecord_Click() {
    const strThisFuncName = this.btnCopyRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要克隆的${this.thisTabName}记录!`);
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_cc_CourseExamPaper4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strCourseExamPaperId": 表关键字
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
      await this.BindGv_cc_CourseExamPaper4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里选择记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   **/
  public async btnSelectRecordInTab_Click(strCourseExamPaperId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strCourseExamPaperId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strCourseExamPaperId);
    } catch (e) {
      const strMsg = `选择记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   **/
  public async DelRecord(strCourseExamPaperId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await cc_CourseExamPaper_DelRecordAsync(strCourseExamPaperId);
      if (returnInt > 0) {
        cc_CourseExamPaper_ReFreshCache(CourseId_Session.value);
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字选择相应的记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
   * @param sender:参数列表
   **/
  public async SelectRecord(strCourseExamPaperId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objcc_CourseExamPaperEN = await cc_CourseExamPaper_GetObjByCourseExamPaperIdAsync(
        strCourseExamPaperId,
      );
      console.log('完成SelectRecord!', objcc_CourseExamPaperEN);
      Redirect('/Index/Main_cc_CourseExamPaper');
    } catch (e) {
      const strMsg = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
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
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_cc_CourseExamPaper4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   **/
  public async btnExportExcel_Click() {
    await this.ExportExcel_cc_CourseExamPaperCache();
  }

  /** 显示cc_CourseExamPaper对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrcc_CourseExamPaperObjLst:需要绑定的对象列表
   **/
  public async BindTab_cc_CourseExamPaper(
    divContainer: HTMLDivElement,
    arrcc_CourseExamPaperExObjLst: Array<clscc_CourseExamPaperENEx>,
  ) {
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
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
        fldName: clscc_CourseExamPaperEN.con_PaperIndex,
        sortBy: clscc_CourseExamPaperEN.con_PaperIndex,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '试卷序号',
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
        fldName: clscc_CourseExamPaperEN.con_ExamPaperName,
        sortBy: clscc_CourseExamPaperEN.con_ExamPaperName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '考卷名称',
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
        fldName: clscc_CourseExamPaperEN.con_IsShow,
        sortBy: clscc_CourseExamPaperEN.con_IsShow,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否启用',
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
        fldName: clscc_CourseExamPaperEN.con_TotalScore,
        sortBy: clscc_CourseExamPaperEN.con_TotalScore,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '总得分',
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
        fldName: clscc_CourseExamPaperEN.con_ViewCount,
        sortBy: clscc_CourseExamPaperEN.con_ViewCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '浏览量',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_DoneNumber,
        sortBy: clscc_CourseExamPaperEN.con_DoneNumber,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '已做人数',
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
        fldName: clscc_CourseExamPaperEN.con_PaperTime,
        sortBy: clscc_CourseExamPaperEN.con_PaperTime,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '考试时间（分钟）',
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
        fldName: clscc_CourseExamPaperEN.con_DownloadNumber,
        sortBy: clscc_CourseExamPaperEN.con_DownloadNumber,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '下载数目',
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
        fldName: clscc_CourseExamPaperEN.con_CollectionCount,
        sortBy: clscc_CourseExamPaperEN.con_CollectionCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '收藏数量',
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
        fldName: clscc_CourseExamPaperEN.con_LikeCount,
        sortBy: clscc_CourseExamPaperEN.con_LikeCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '资源喜欢数量',
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
        fldName: clscc_CourseExamPaperEN.con_ExamCreateTime,
        sortBy: clscc_CourseExamPaperEN.con_ExamCreateTime,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '考卷建立时间',
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
        fldName: clscc_CourseExamPaperEN.con_IsOpenToAllStu,
        sortBy: clscc_CourseExamPaperEN.con_IsOpenToAllStu,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '全校师生',
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
        fldName: clscc_CourseExamPaperEN.con_IsOpenToSchool,
        sortBy: clscc_CourseExamPaperEN.con_IsOpenToSchool,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '全校师生公开',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_IsOpenToSocial,
        sortBy: clscc_CourseExamPaperEN.con_IsOpenToSocial,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '社会公众',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_IsAutoGeneQuestion,
        sortBy: clscc_CourseExamPaperEN.con_IsAutoGeneQuestion,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否自动生成题目',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_IsCanMultiDo,
        sortBy: clscc_CourseExamPaperEN.con_IsCanMultiDo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否可以做多次',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_IdXzMajor,
        sortBy: 'majorName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 18,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_UpdDate,
        sortBy: clscc_CourseExamPaperEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 19,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperENEx.con_CourseName,
        sortBy: 'courseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 21,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperENEx.con_ExamPaperTypeName,
        sortBy: 'examPaperTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '试卷类型名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 22,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refcc_CourseExamPaper_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrcc_CourseExamPaperExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_cc_CourseExamPaper函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrcc_CourseExamPaperExObjLst,
        arrDataColumn,
        clscc_CourseExamPaperEN.con_CourseExamPaperId,
        this,
      );
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /**
   * 是否显示所有错误
   **/
  public get dispAllErrMsg_q(): boolean {
    return true;
  }

  /** 显示cc_CourseExamPaper对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrcc_CourseExamPaperExObjLst:需要绑定的对象列表
   **/
  public async BindTab_cc_CourseExamPaper4Func(
    divContainer: HTMLDivElement,
    arrcc_CourseExamPaperExObjLst: Array<clscc_CourseExamPaperENEx>,
  ) {
    const strThisFuncName = this.BindTab_cc_CourseExamPaper4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
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
        fldName: clscc_CourseExamPaperEN.con_PaperIndex,
        sortBy: clscc_CourseExamPaperEN.con_PaperIndex,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '试卷序号',
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
        fldName: clscc_CourseExamPaperEN.con_ExamPaperName,
        sortBy: clscc_CourseExamPaperEN.con_ExamPaperName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '考卷名称',
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
        fldName: clscc_CourseExamPaperEN.con_IsShow,
        sortBy: clscc_CourseExamPaperEN.con_IsShow,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否启用',
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
        fldName: clscc_CourseExamPaperEN.con_TotalScore,
        sortBy: clscc_CourseExamPaperEN.con_TotalScore,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '总得分',
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
        fldName: clscc_CourseExamPaperEN.con_ViewCount,
        sortBy: clscc_CourseExamPaperEN.con_ViewCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '浏览量',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_DoneNumber,
        sortBy: clscc_CourseExamPaperEN.con_DoneNumber,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '已做人数',
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
        fldName: clscc_CourseExamPaperEN.con_PaperTime,
        sortBy: clscc_CourseExamPaperEN.con_PaperTime,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '考试时间（分钟）',
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
        fldName: clscc_CourseExamPaperEN.con_DownloadNumber,
        sortBy: clscc_CourseExamPaperEN.con_DownloadNumber,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '下载数目',
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
        fldName: clscc_CourseExamPaperEN.con_CollectionCount,
        sortBy: clscc_CourseExamPaperEN.con_CollectionCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '收藏数量',
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
        fldName: clscc_CourseExamPaperEN.con_LikeCount,
        sortBy: clscc_CourseExamPaperEN.con_LikeCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '资源喜欢数量',
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
        fldName: clscc_CourseExamPaperEN.con_ExamCreateTime,
        sortBy: clscc_CourseExamPaperEN.con_ExamCreateTime,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '考卷建立时间',
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
        fldName: clscc_CourseExamPaperEN.con_IsOpenToAllStu,
        sortBy: clscc_CourseExamPaperEN.con_IsOpenToAllStu,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '全校师生',
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
        fldName: clscc_CourseExamPaperEN.con_IsOpenToSchool,
        sortBy: clscc_CourseExamPaperEN.con_IsOpenToSchool,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '全校师生公开',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_IsOpenToSocial,
        sortBy: clscc_CourseExamPaperEN.con_IsOpenToSocial,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '社会公众',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_IsAutoGeneQuestion,
        sortBy: clscc_CourseExamPaperEN.con_IsAutoGeneQuestion,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否自动生成题目',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_IsCanMultiDo,
        sortBy: clscc_CourseExamPaperEN.con_IsCanMultiDo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否可以做多次',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_IdXzMajor,
        sortBy: 'majorName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 18,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperEN.con_UpdDate,
        sortBy: clscc_CourseExamPaperEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 19,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperENEx.con_CourseName,
        sortBy: 'courseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 21,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseExamPaperENEx.con_ExamPaperTypeName,
        sortBy: 'examPaperTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '试卷类型名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 22,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrcc_CourseExamPaperExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refcc_CourseExamPaper_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrcc_CourseExamPaperExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_cc_CourseExamPaper4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrcc_CourseExamPaperExObjLst,
        arrDataColumn,
        clscc_CourseExamPaperEN.con_CourseExamPaperId,
        this,
      );
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrcc_CourseExamPaperExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrcc_CourseExamPaperExObjLst: Array<clscc_CourseExamPaperENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clscc_CourseExamPaperEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrcc_CourseExamPaperExObjLst) {
        await cc_CourseExamPaperEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 函数功能:在数据 列表中跳转到某一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   * @param intPageIndex:页序号
   **/
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    //console.log("跳转到" + intPageIndex + "页");
    this.SetCurrPageIndex(intPageIndex);
    await this.BindGv_cc_CourseExamPaper4Func(this.listPara.listDiv);
  }

  /** 函数功能:在数据列表中跳转到下一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
   **/
  public async NextPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) + 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 函数功能:在数据列表中跳转到前一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
   **/
  public async PrevPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) - 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func)
   **/
  public async BindGv_cc_CourseExamPaper4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_cc_CourseExamPaper4Func.name;
    if (viewVarSet.sortcc_CourseExamPaperBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortcc_CourseExamPaperBy)为空,请检查!(In BindGv_cc_CourseExamPaperCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objcc_CourseExamPaperCond = await Combinecc_CourseExamPaperConditionObj();
    objcc_CourseExamPaperCond.SetCondFldValue(
      clscc_CourseExamPaperEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objcc_CourseExamPaperCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrcc_CourseExamPaperExObjLst: Array<clscc_CourseExamPaperENEx> = [];
    try {
      this.recCount = await cc_CourseExamPaper_GetRecCountByCondCache(
        objcc_CourseExamPaperCond,
        CourseId_Session.value,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objcc_CourseExamPaperCond.whereCond,
        );
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objcc_CourseExamPaperCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrcc_CourseExamPaperExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (cc_CourseExamPaperCRUD.sortFunStatic != undefined) {
        strSortFun = cc_CourseExamPaperCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortcc_CourseExamPaperBy,
        sortFun: strSortFun,
      };
      arrcc_CourseExamPaperExObjLst = await cc_CourseExamPaperEx_GetObjExLstByPagerCache(
        objPagerPara,
        CourseId_Session.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_CourseExamPaperExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clscc_CourseExamPaperEN._CurrTabName,
        CourseId_Session.value,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_cc_CourseExamPaper4Func(divList, arrcc_CourseExamPaperExObjLst);
      //console.log("完成BindGv_cc_CourseExamPaper4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objcc_CourseExamPaperENS:源对象
   * @returns 目标对象=>clscc_CourseExamPaperEN:objcc_CourseExamPaperENT
   **/
  public CopyToEx(objcc_CourseExamPaperENS: clscc_CourseExamPaperEN): clscc_CourseExamPaperENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objcc_CourseExamPaperENT = new clscc_CourseExamPaperENEx();
    try {
      ObjectAssign(objcc_CourseExamPaperENT, objcc_CourseExamPaperENS);
      return objcc_CourseExamPaperENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objcc_CourseExamPaperENT;
    }
  }

  /**
   * 排序函数。根据表对象中随机两个字段的值进行比较,正常使用时,需用该类的扩展类的同名函数
   * 作者:pyf
   * 日期:
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortFunExportExcel)
   * @param a:比较的第1个对象
   * @param b:比较的第1个对象
   * @returns 返回两个对象比较的结果
   **/
  public SortFunExportExcel(a: clscc_CourseExamPaperEN, b: clscc_CourseExamPaperEN): number {
    if (a.memo == b.memo) return a.memo.localeCompare(b.memo);
    else return a.updDate.localeCompare(b.updDate);
  }

  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public abstract SortColumn(sortColumnKey: string, sortDirection: string): void;
  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      viewVarSet.ascOrDesc4SortFun,
      viewVarSet.sortcc_CourseExamPaperBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (clscc_CourseExamPaperENEx.hasProperty(sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortcc_CourseExamPaperBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    cc_CourseExamPaperCRUD.sortFunStatic = sortFun;
    await this.BindGv_cc_CourseExamPaper4Func(this.listPara.listDiv);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrCourseExamPaperId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrcc_CourseExamPaperObjLst =
        await cc_CourseExamPaper_GetObjLstByCourseExamPaperIdLstAsync(arrCourseExamPaperId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrcc_CourseExamPaperObjLst) {
        const strMaxStrId = await cc_CourseExamPaper_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.courseExamPaperId = strMaxStrId;
        const returnBool = await cc_CourseExamPaper_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          cc_CourseExamPaper_ReFreshCache(CourseId_Session.value);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrCourseExamPaperId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await cc_CourseExamPaper_Delcc_CourseExamPapersAsync(arrCourseExamPaperId);
      if (returnInt > 0) {
        cc_CourseExamPaper_ReFreshCache(CourseId_Session.value);
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示{0}对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
   * @param divContainer:显示容器
   * @param objcc_CourseExamPaper:需要显示的对象
   **/
  public Showcc_CourseExamPaperObj(
    divContainer: HTMLDivElement,
    objcc_CourseExamPaper: clscc_CourseExamPaperEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objcc_CourseExamPaper);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objcc_CourseExamPaper.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjcc_CourseExamPaperEN:表实体类对象
   * @returns 列表的第一个关键字值
   **/
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字!目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /** 函数功能:预留函数,在某一个层(div)里绑定数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
   **/
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }

  /** 函数功能:设置当前页序号
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
   * @param value:页序号
   * @param strDivName4Pager:当前分页所在的层(div)
   **/
  public SetCurrPageIndex(value: number) {
    this.objPager.currPageIndex = value;
  }

  /**
   * 设置界面标题-相当使用ViewState功能
   **/
  public set ViewTitle(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivLayout, 'lblViewTitle', value);
  }
  /**
   * 设置界面标题
   **/
  public get ViewTitle(): string {
    const strValue = GetLabelHtmlInDivObj(divVarSet.refDivLayout, 'lblViewTitle');
    return strValue;
  }
}
