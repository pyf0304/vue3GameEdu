import { ge_UserCreditsTtl_EditEx } from './ge_UserCreditsTtl_EditEx';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { ge_UserCreditsTtlCRUD } from '@/viewsBase/GameLearn/ge_UserCreditsTtlCRUD';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsge_UserCreditsTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlEN';
import { clsge_UserCreditsTtlENEx } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlENEx';

import { ge_UserCreditsTtlEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsTtlExWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  divVarSet,
  viewVarSet,
  IdCurrEduCls_Session,
  qryVarSet,
} from '@/views/GameLearn/ge_UserCreditsTtlVueShare';
import { ge_UserCreditsTtl_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GameLearn/clsge_UserCreditsTtlWApi';

/* ge_UserCreditsTtl_ListEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ge_UserCreditsTtl_ListEx extends ge_UserCreditsTtlCRUD implements IShowList {
  //public static divName4List: string = "divDataLst";
  //public static mstrSortge_UserCreditsTtlBy: string = "mId";
  public mstrCreditsTtlListDiv: string = 'divCreditsTtlDataLst'; //班级用户总分区域id；

  public divName4PagerTtl: string = 'divPagerTtlDataLst'; //列表中的分页区的总排名分页
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 20;
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
    this.BindGv_ge_UserCreditsTtl4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_UserCreditsTtl':
        alert('该类没有绑定该函数：[this.BindGv_ge_UserCreditsTtl4Func]！');
        //this.BindGv_ge_UserCreditsTtl4Func(divVarSet.refDivList);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_UserCreditsTtl_ListEx;
    if (ge_UserCreditsTtlCRUD.objPageCRUD == null) {
      ge_UserCreditsTtlCRUD.objPageCRUD = new ge_UserCreditsTtl_ListEx();
      objPage = <ge_UserCreditsTtl_ListEx>ge_UserCreditsTtlCRUD.objPageCRUD;
    } else {
      objPage = <ge_UserCreditsTtl_ListEx>ge_UserCreditsTtlCRUD.objPageCRUD;
    }
    const objPageEdit: ge_UserCreditsTtl_EditEx = new ge_UserCreditsTtl_EditEx(
      'ge_UserCreditsTtl_EditEx',
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
          '命令:' + strCommandName + '在函数(ge_UserCreditsTtl_ListEx.btn_Click)中没有被处理！';
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
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;

      // 为查询区绑定下拉框

      viewVarSet.sortge_UserCreditsTtlBy = 'userId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_UserCreditsTtl4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 显示ge_UserCreditsTtl对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrge_UserCreditsTtlExObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_ge_UserCreditsTtl4FuncBak(
    divContainer: HTMLDivElement,
    arrge_UserCreditsTtlExObjLst: Array<clsge_UserCreditsTtlENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_UserCreditsTtl4Func.name;

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
        fldName: 'userId',
        sortBy: 'userId',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '用户ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: clsge_UserCreditsTtlEN.con_CreditsNum,
        sortBy: clsge_UserCreditsTtlEN.con_CreditsNum,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '练习积分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clsge_UserCreditsTtlEN.con_ExamTotal,
        sortBy: clsge_UserCreditsTtlEN.con_ExamTotal,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '考试积分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'eduClsName',
        sortBy: 'eduClsName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '教学班名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
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

    try {
      await this.ExtendFldFuncMap(arrge_UserCreditsTtlExObjLst, arrDataColumn);
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
    await BindTab(divDataLst, arrge_UserCreditsTtlExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinege_UserCreditsTtlCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " {0} = '{1}' ",
      clsge_UserCreditsTtlENEx.con_IdCurrEduCls,
      clsPubLocalStorage.idCurrEduCls,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (qryVarSet.userId_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsge_UserCreditsTtlEN.con_UserId,
          qryVarSet.userId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(Combinege_UserCreditsTtlCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  //5班级总分排名；
  public async BindGv_ge_UserCreditsTtl4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortge_UserCreditsTtlBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortge_UserCreditsTtlBy)为空，请检查！(In BindGv_ge_UserCreditsTtl_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv: string = this.mstrCreditsTtlListDiv;
    const strWhereCond = await this.Combinege_UserCreditsTtlCondition();

    //const intCurrPageIndex = GetCurrPageIndex(this.divName4PagerTtl);//获取当前页
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    const arrge_UserCreditsTtlObjLst: Array<clsge_UserCreditsTtlEN> = [];
    let arrge_UserCreditsTtlExObjLst: Array<clsge_UserCreditsTtlENEx> = [];
    try {
      this.recCount = await ge_UserCreditsTtl_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_UserCreditsTtlBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrge_UserCreditsTtlExObjLst = await ge_UserCreditsTtlEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
      //arrge_UserCreditsTtlExObjLst = arrge_UserCreditsTtlObjLst.map(ge_UserCreditsTtlEx_CopyToEx);
      //for (const objInFor of arrge_UserCreditsTtlExObjLst) {
      //    const conFuncMap = await this.FuncMapCreditsTtl(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_ge_UserCreditsTtl4Func(divList, arrge_UserCreditsTtlExObjLst);
      console.log('完成BindGv_ge_UserCreditsTtl4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 显示ge_UserCreditsTtl对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   <param name = "divContainer">显示容器</param>
   <param name = "arrge_UserCreditsTtlExObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_ge_UserCreditsTtl4Func(
    divContainer: HTMLDivElement,
    arrge_UserCreditsTtlExObjLst: Array<clsge_UserCreditsTtlENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_UserCreditsTtl4Func.name;

    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');

    const arrDataColumn: Array<clsDataColumn> = [
      //{
      //    fldName: "",
      //    sortBy: "", getDataSource: "", sortFun: clsPubVar4Web.SortFun,
      //    colHeader: "",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "CheckBox",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'userId',
        sortBy: 'userId',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '用户ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'userName',
        sortBy: 'userName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '用户名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: clsge_UserCreditsTtlENEx.con_GameNum,
        sortBy: clsge_UserCreditsTtlENEx.con_GameNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '闯关数',
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
        fldName: clsge_UserCreditsTtlEN.con_CreditsNum,
        sortBy: clsge_UserCreditsTtlEN.con_CreditsNum,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '练习积分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },

      {
        fldName: clsge_UserCreditsTtlEN.con_ExamTotal,
        sortBy: clsge_UserCreditsTtlEN.con_ExamTotal,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '考试积分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      //{
      //    fldName: "eduClsName",
      //    sortBy: "eduClsName",
      //    colHeader: "教学班名称",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 4,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updDate",
      //    sortBy: "updDate",
      //    colHeader: "修改日期",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 5,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updUser",
      //    sortBy: "updUser",
      //    colHeader: "修改人",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 6,
      //    funcName: () => { }
      //},
    ];
    try {
      await this.ExtendFldFuncMap(arrge_UserCreditsTtlExObjLst, arrDataColumn);
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
    await BindTab(divDataLst, arrge_UserCreditsTtlExObjLst, arrDataColumn, 'mId', this);
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
  public async Combinege_UserCreditsTtlConditionObj(): Promise<clsge_UserCreditsTtlEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond: string = ' 1 = 1 ';
    const objge_UserCreditsTtl_Cond = new clsge_UserCreditsTtlEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.userId_q != "") {
      //    strWhereCond += ` And ${clsge_UserCreditsTtlEN.con_UserId} like '% ${this.userId_q}%'`;
      //    objge_UserCreditsTtl_Cond.SetCondFldValue(clsge_UserCreditsTtlEN.con_UserId, this.userId_q, "like");
      //}
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_UserCreditsTtlConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objge_UserCreditsTtl_Cond.whereCond = strWhereCond;
    return objge_UserCreditsTtl_Cond;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'userName|Ex':
        viewVarSet.sortge_UserCreditsTtlBy = `vUsersSim|userName ${sortDirection}|ge_UserCreditsTtl.UserId = vUsersSim.UserId`;
        break;
      case 'eduClsName|Ex':
        viewVarSet.sortge_UserCreditsTtlBy = `CurrEduCls|eduClsName ${sortDirection}|ge_UserCreditsTtl.IdCurrEduCls = CurrEduCls.IdCurrEduCls`;
        break;
      default:
        viewVarSet.sortge_UserCreditsTtlBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserCreditsTtl4Func(this.thisDivList);
  }
}
