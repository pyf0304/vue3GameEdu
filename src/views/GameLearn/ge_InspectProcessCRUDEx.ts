import { ge_InspectProcess_EditEx } from './ge_InspectProcess_EditEx';

import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsge_InspectProcessEN } from '@/ts/L0Entity/GameLearn/clsge_InspectProcessEN';
import { clsge_InspectProcessENEx } from '@/ts/L0Entity/GameLearn/clsge_InspectProcessENEx';
import {
  ge_InspectProcess_Delge_InspectProcesssAsync,
  ge_InspectProcess_DelRecordAsync,
  ge_InspectProcess_DownMoveAsync,
  ge_InspectProcess_GetRecCountByCondAsync,
  ge_InspectProcess_GoBottomAsync,
  ge_InspectProcess_GoTopAsync,
  ge_InspectProcess_ReOrderAsync,
  ge_InspectProcess_UpMoveAsync,
} from '@/ts/L3ForWApi/GameLearn/clsge_InspectProcessWApi';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ge_InspectProcessCRUD } from '@/viewsBase/GameLearn/ge_InspectProcessCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDiv,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindTab,
  confirm_del,
  SetCkechedItem4KeyId,
  SetCkechedItem4KeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import { ge_InspectProcessEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/GameLearn/clsge_InspectProcessExWApi';
import {
  divVarSet,
  viewVarSet,
  Combinege_InspectProcessCondition,
} from '@/views/GameLearn/ge_InspectProcessVueShare';
import { number } from 'echarts';
declare function RefreshParent(): void;

/* ge_InspectProcessCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ge_InspectProcessCRUDEx extends ge_InspectProcessCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortge_InspectProcessBy: string = "inspectId";
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
    //添加完成要调用重序；
    this.btnReOrder_Click();

    this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_InspectProcess':
        alert('该类没有绑定该函数：[this.BindGv_ge_InspectProcess4Func]！');
        //this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
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
    const objPage: ge_InspectProcessCRUDEx = new ge_InspectProcessCRUDEx();
    const objPageEdit: ge_InspectProcess_EditEx = new ge_InspectProcess_EditEx(
      'ge_InspectProcess_EditEx',
      objPage,
    );
    let arrKeyIds;
    switch (strCommandName) {
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
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
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
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
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
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
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
        const strMsg =
          '命令:' + strCommandName + '在函数(ge_InspectProcessCRUDEx.btn_Click)中没有被处理！';
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
      // CourseId_Cache.value = clsPubLocalStorage.courseId;

      // 为查询区绑定下拉框
      // const gvBindDdl = await this.BindDdl4QueryRegion();

      viewVarSet.sortge_InspectProcessBy = 'orderNum Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindGv_ge_InspectProcess4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortge_InspectProcessBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortge_InspectProcessBy)为空，请检查！(In BindGv_ge_InspectProcess_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await Combinege_InspectProcessCondition();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_InspectProcessObjLst: Array<clsge_InspectProcessEN> = [];
    const arrge_InspectProcessExObjLst: Array<clsge_InspectProcessENEx> = [];
    try {
      this.recCount = await ge_InspectProcess_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_InspectProcessBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrge_InspectProcessObjLst = await ge_InspectProcessEx_GetObjExLstByPagerAsync(objPagerPara);
      //arrge_InspectProcessExObjLst = arrge_InspectProcessObjLst.map(this.CopyToEx);
      //for (const objInFor of arrge_InspectProcessExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //if (arrge_InspectProcessObjLst.length == 0) {
    //    const strKey: string = `${clsge_InspectProcessEN._CurrTabName}_${CourseId_Cache.value}`;
    //    const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_ge_InspectProcess4Func(divList, arrge_InspectProcessExObjLst);
      console.log('完成BindGv_ge_InspectProcess4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 显示ge_InspectProcess对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrge_InspectProcessExObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_ge_InspectProcess4Func(
    divContainer: HTMLDivElement,
    arrge_InspectProcessExObjLst: Array<clsge_InspectProcessENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_InspectProcess4Func.name;
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
      {
        fldName: 'orderNum',
        sortBy: 'orderNum',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: () => {},
      },
      {
        fldName: 'operationTypeName',
        sortBy: 'operationTypeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '操作类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      //{
      //    fldName: "questionName",
      //    sortBy: "questionName",
      //    colHeader: "题目名称",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 3,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "courseName",
      //    sortBy: "courseName",
      //    colHeader: "课程名称",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 4,
      //    funcName: () => { }
      //},
      {
        fldName: 'controlId',
        sortBy: 'controlId',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'controlTypeName',
        sortBy: 'controlTypeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'controlAttributeName',
        sortBy: 'controlAttributeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '属性名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'controlValue',
        sortBy: 'controlValue',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件值',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },

      //{
      //    fldName: "controlClass",
      //    sortBy: "controlClass",
      //    colHeader: "控件样式",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 13,
      //    funcName: () => { }
      //},
      {
        fldName: 'typeDescribe',
        sortBy: 'typeDescribe',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '类型描述',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: () => {},
      },
      {
        fldName: 'eventTypeName',
        sortBy: 'eventTypeName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '事件名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: () => {},
      },

      {
        fldName: 'functionName',
        sortBy: 'functionName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '函数名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: () => {},
      },
      {
        fldName: 'checkMemo',
        sortBy: 'checkMemo',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '检查描述',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
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
    ];
    await BindTab(divDataLst, arrge_InspectProcessExObjLst, arrDataColumn, 'inspectId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   <returns>条件串(strWhereCond)</returns>
 */
  public async Combinege_InspectProcessConditionObj(): Promise<clsge_InspectProcessEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objge_InspectProcess_Cond = new clsge_InspectProcessEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.operationTypeId_q != "" && this.operationTypeId_q != "0") {
      //    strWhereCond += ` And ${clsge_InspectProcessEN.con_operationTypeId} = '${this.operationTypeId_q}'`;
      //    objge_InspectProcess_Cond.SetCondFldValue(clsge_InspectProcessEN.con_operationTypeId, this.operationTypeId_q, "=");
      //}
      //if (this.ControlId_q != "") {
      //    strWhereCond += ` And ${clsge_InspectProcessEN.con_ControlId} like '% ${this.ControlId_q}%'`;
      //    objge_InspectProcess_Cond.SetCondFldValue(clsge_InspectProcessEN.con_ControlId, this.ControlId_q, "like");
      //}
      //if (this.controlTypeId_q != "" && this.controlTypeId_q != "0") {
      //    strWhereCond += ` And ${clsge_InspectProcessEN.con_ControlTypeId} = '${this.controlTypeId_q}'`;
      //    objge_InspectProcess_Cond.SetCondFldValue(clsge_InspectProcessEN.con_ControlTypeId, this.controlTypeId_q, "=");
      //}
      //if (this.controlTypeId_q != "" && this.controlTypeId_q != "0") {
      //    strWhereCond += ` And ${clsge_InspectProcessEN.con_ControlTypeId} = '${this.controlTypeId_q}'`;
      //    objge_InspectProcess_Cond.SetCondFldValue(clsge_InspectProcessEN.con_ControlTypeId, this.controlTypeId_q, "=");
      //}
      //题目号
      if (this.questionId != 0) {
        strWhereCond += ` And ${clsge_InspectProcessEN.con_QuestionId} = '${this.questionId}'`;
        objge_InspectProcess_Cond.SetCondFldValue(
          clsge_InspectProcessEN.con_QuestionId,
          this.questionId,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_InspectProcessConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objge_InspectProcess_Cond.whereCond = strWhereCond;
    return objge_InspectProcess_Cond;
  }

  /*
 重序
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
 */
  public async btnReOrder_Click() {
    if (this.PreCheck4Order() == false) return;
    //const strQuestionId: number = ge_InspectProcessCRUD.QuestionId_OrderNum;
    const strQuestionId: number = this.questionId;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        questionId: strQuestionId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await ge_InspectProcess_ReOrderAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
  }

  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    if (this.PreCheck4Order() == false) return;
    const strQuestionId: number = this.questionId;
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
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
      const responseRederBy = await ge_InspectProcess_GoBottomAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `置底出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }

    await this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
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
      const responseRederBy = await ge_InspectProcess_DownMoveAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `下移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
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
      const responseRederBy = await ge_InspectProcess_UpMoveAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `上移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
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
      const responseRederBy = await ge_InspectProcess_GoTopAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `置顶出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecord(strInspectId: string) {
    try {
      const responseText = await ge_InspectProcess_DelRecordAsync(strInspectId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        RefreshParent();
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
  public async DelMultiRecord(arrInspectId: Array<string>) {
    try {
      const responseText = await ge_InspectProcess_Delge_InspectProcesssAsync(arrInspectId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        RefreshParent();
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

  /*
     克隆
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
    */
  public async btnCopyRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const responseText = await this.CopyRecord(arrKeyIds);
      const responseText2 = await this.btnReOrder_Click(); //重序
      await this.BindGv_ge_InspectProcess4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `复制记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
   * 存放题目ID
   */
  public get questionId() {
    const strQuestionId = ge_InspectProcessCRUDEx.GetPropValue('questionId');
    return Number(strQuestionId);
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      default:
        viewVarSet.sortge_InspectProcessBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_InspectProcess(divVarSet.refDivList);
  }
}
