//import * as QQ from "q";
import { ge_KMLearningGoalsCRUD } from '@/viewsBase/Knowledges/ge_KMLearningGoalsCRUD';
import { ge_KMLearningGoals_EditEx } from '@/views/Knowledges/ge_KMLearningGoals_EditEx';
import {
  GetCheckedKeyLstsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyLstInDivObj,
  GetInputObjInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsge_KMLearningGoalsEN } from '@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsEN';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsge_KMLearningGoalsENEx } from '@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsENEx';
import {
  ge_KMLearningGoals_GetObjByKeyLstAsync,
  ge_KMLearningGoals_GetRecCountByCondAsync,
  ge_KMLearningGoals_SplitKeyLst,
  ge_KMLearningGoals_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_KMLearningGoalsWApi';
import {
  ge_KMLearningGoalsEx_CalcUserMasteryValue,
  ge_KMLearningGoalsEx_GetObjExLstByPagerAsync,
  ge_KMLearningGoalsEx_InitUserKnowledge,
} from '@/ts/L3ForWApiEx/Knowledges/clsge_KMLearningGoalsExWApi';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { BindTab_KeyLst, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { useUserStore } from '@/store/modulesShare/user';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

import { enumQxRoles } from 'share-gen-plat-base/src/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls } from 'share-stu-study-base-lib';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  qryVarSet,
  refge_KMLearningGoals_Edit,
  Combinege_KMLearningGoalsCondition,
} from '@/views/Knowledges/ge_KMLearningGoalsVueShare';

import {
  divVarSet as divVarSet_SelfPerceived,
  viewVarSet as viewVarSet_SelfPerceived,
  CourseId_Session as CourseId_Session_SelfPerceived,
  qryVarSet as qryVarSet_SelfPerceived,
  refge_KMLearningGoals_Edit as refge_KMLearningGoals_Edit_SelfPerceived,
  Combinege_KMLearningGoalsCondition as Combinege_KMLearningGoalsCondition_SelfPerceived,
} from '@/views/Knowledges/ge_KMLearningGoalsCRUD_SelfPerceivedVueShare';
import {
  divVarSet as divVarSet_Edit,
  viewVarSet as viewVarSet_Edit,
  CourseId_Session as CourseId_Session_Edit,
  qryVarSet as qryVarSet_Edit,
  refge_KMLearningGoals_Edit as refge_KMLearningGoals_Edit_Edit,
  Combinege_KMLearningGoalsCondition as Combinege_KMLearningGoalsCondition_Edit,
} from '@/views/Knowledges/ge_KMLearningGoalsCRUD_EditVueShare';

/** ge_KMLearningGoalsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class ge_KMLearningGoalsCRUDEx extends ge_KMLearningGoalsCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortge_KMLearningGoalsBy = "KnowledgeModuleId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in ge_KMLearningGoalsCRUDEx');
    CourseId_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ge_KMLearningGoalsCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_ge_KMLearningGoals4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ge_KMLearningGoals':
        alert('该类没有绑定该函数：[this.BindGv_ge_KMLearningGoals4Func]!');
        //this.BindGv_ge_KMLearningGoals4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_KMLearningGoalsCRUDEx;
    let objPageEdit;
    if (ge_KMLearningGoalsCRUD.objPageCRUD == null) {
      ge_KMLearningGoalsCRUD.objPageCRUD = new ge_KMLearningGoalsCRUDEx();
      objPage = <ge_KMLearningGoalsCRUDEx>ge_KMLearningGoalsCRUD.objPageCRUD;
    } else {
      objPage = <ge_KMLearningGoalsCRUDEx>ge_KMLearningGoalsCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
    let objKeyLst;
    let strKeyLst = '';
    strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);

    switch (strCommandName) {
      case 'CalcMasteryValue':
        objPage.btnCalcMasteryValue_Click();
        break;
      case 'SetGoal':
        objPage.btnSetGoal_Click(strKeyId);
        break;
      case 'SetSelfPerceived':
        objPage.btnSetSelfPerceived_Click(strKeyId);
        break;

      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new ge_KMLearningGoals_EditEx('ge_KMLearningGoals_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refge_KMLearningGoals_Edit.value.btnge_KMLearningGoals_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new ge_KMLearningGoals_EditEx('ge_KMLearningGoals_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refge_KMLearningGoals_Edit.value.btnge_KMLearningGoals_Edit_Click(
          strCommandName,
          strKeyLst,
        );
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyLsts.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(ge_KMLearningGoalsCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache_Edit() {
    const strThisFuncName = this.PageLoadCache_Edit.name;
    const userStore = useUserStore();
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      const intCount = await ge_KMLearningGoalsEx_InitUserKnowledge(
        clsPubLocalStorage.courseId,
        userStore.getUserId,
      );
      console.log(`用户知识点模块共初始化了${intCount}记录！`);
      HideDivInDivObj(divVarSet_Edit.refDivLayout, 'divQuery');

      await this.InitVarSet();
      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();

      if (viewVarSet.sortge_KMLearningGoalsBy == '')
        viewVarSet.sortge_KMLearningGoalsBy = 'userId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_KMLearningGoals4Func_Edit(divVarSet_Edit.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public async PageLoadCache_Goal() {
    const strThisFuncName = this.PageLoadCache.name;
    const userStore = useUserStore();
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      const intCount = await ge_KMLearningGoalsEx_InitUserKnowledge(
        clsPubLocalStorage.courseId,
        userStore.getUserId,
      );
      HideDivInDivObj(this.thisDivLayout, 'divQuery');
      console.log(`用户知识点模块共初始化了${intCount}记录！`);
      await this.InitVarSet();
      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();

      if (viewVarSet.sortge_KMLearningGoalsBy == '')
        viewVarSet.sortge_KMLearningGoalsBy = 'userId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_KMLearningGoals4Func_Goal(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public async PageLoadCache_SelfPerceived() {
    const strThisFuncName = this.PageLoadCache.name;
    const userStore = useUserStore();
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      const intCount = await ge_KMLearningGoalsEx_InitUserKnowledge(
        clsPubLocalStorage.courseId,
        userStore.getUserId,
      );
      HideDivInDivObj(divVarSet_SelfPerceived.refDivLayout, 'divQuery');
      console.log(`用户知识点模块共初始化了${intCount}记录！`);
      await this.InitVarSet();
      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();

      if (viewVarSet.sortge_KMLearningGoalsBy == '')
        viewVarSet.sortge_KMLearningGoalsBy = 'userId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_KMLearningGoals4Func_SelfPerceived(divVarSet_SelfPerceived.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_ge_KMLearningGoals4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_KMLearningGoals4Func.name;
    if (viewVarSet.sortge_KMLearningGoalsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortge_KMLearningGoalsBy)为空,请检查!(In BindGv_ge_KMLearningGoalsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await Combinege_KMLearningGoalsCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KMLearningGoalsExObjLst: Array<clsge_KMLearningGoalsENEx> = [];
    try {
      this.recCount = await ge_KMLearningGoals_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KMLearningGoalsBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrge_KMLearningGoalsExObjLst = await ge_KMLearningGoalsEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_KMLearningGoalsExObjLst.length == 0) {
      const strKey = Format('{0}', clsge_KMLearningGoalsEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_KMLearningGoals4Func_Edit(divList, arrge_KMLearningGoalsExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindGv_ge_KMLearningGoals4Func_Edit(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_KMLearningGoals4Func.name;
    if (viewVarSet_Edit.sortge_KMLearningGoalsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortge_KMLearningGoalsBy)为空,请检查!(In BindGv_ge_KMLearningGoalsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.Combinege_KMLearningGoalsCondition_Edit();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KMLearningGoalsExObjLst: Array<clsge_KMLearningGoalsENEx> = [];
    try {
      this.recCount = await ge_KMLearningGoals_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet_Edit.sortge_KMLearningGoalsBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrge_KMLearningGoalsExObjLst = await ge_KMLearningGoalsEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_KMLearningGoalsExObjLst.length == 0) {
      const strKey = Format('{0}', clsge_KMLearningGoalsEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_KMLearningGoals4Func_Edit(divList, arrge_KMLearningGoalsExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindGv_ge_KMLearningGoals4Func_Goal(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_KMLearningGoals4Func.name;
    if (viewVarSet.sortge_KMLearningGoalsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortge_KMLearningGoalsBy)为空,请检查!(In BindGv_ge_KMLearningGoalsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.Combinege_KMLearningGoalsCondition_Goal();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KMLearningGoalsExObjLst: Array<clsge_KMLearningGoalsENEx> = [];
    try {
      this.recCount = await ge_KMLearningGoals_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KMLearningGoalsBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrge_KMLearningGoalsExObjLst = await ge_KMLearningGoalsEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_KMLearningGoalsExObjLst.length == 0) {
      const strKey = Format('{0}', clsge_KMLearningGoalsEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_KMLearningGoals4Func_Goal(divList, arrge_KMLearningGoalsExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindGv_ge_KMLearningGoals4Func_SelfPerceived(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_KMLearningGoals4Func.name;
    if (viewVarSet_SelfPerceived.sortge_KMLearningGoalsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortge_KMLearningGoalsBy)为空,请检查!(In BindGv_ge_KMLearningGoalsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.Combinege_KMLearningGoalsCondition_Goal();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KMLearningGoalsExObjLst: Array<clsge_KMLearningGoalsENEx> = [];
    try {
      this.recCount = await ge_KMLearningGoals_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KMLearningGoalsBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrge_KMLearningGoalsExObjLst = await ge_KMLearningGoalsEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_KMLearningGoalsExObjLst.length == 0) {
      const strKey = Format('{0}', clsge_KMLearningGoalsEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_KMLearningGoals4Func_SelfPerceived(
        divList,
        arrge_KMLearningGoalsExObjLst,
      );
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async Combinege_KMLearningGoalsCondition_Edit(): Promise<string> {
    const userStore = useUserStore();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
    strWhereCond += Format(" and UserId ='{0}'", userStore.userId);
    try {
      // if (this.userId_q != '' && this.userId_q != '0') {
      //   strWhereCond += Format(
      //     " And {0} = '{1}'",
      //     clsge_KMLearningGoalsEN.con_UserId,
      //     this.userId_q,
      //   );
      // }
      if (qryVarSet.knowledgeModuleId_q != '' && qryVarSet.knowledgeModuleId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_KMLearningGoalsEN.con_KnowledgeModuleId,
          qryVarSet.knowledgeModuleId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(Combinege_KMLearningGoalsCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  public async Combinege_KMLearningGoalsCondition_Goal(): Promise<string> {
    const userStore = useUserStore();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
    strWhereCond += Format(" and UserId ='{0}'", userStore.userId);
    try {
      // if (this.userId_q != '' && this.userId_q != '0') {
      //   strWhereCond += Format(
      //     " And {0} = '{1}'",
      //     clsge_KMLearningGoalsEN.con_UserId,
      //     this.userId_q,
      //   );
      // }
      if (qryVarSet.knowledgeModuleId_q != '' && qryVarSet.knowledgeModuleId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_KMLearningGoalsEN.con_KnowledgeModuleId,
          qryVarSet.knowledgeModuleId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(Combinege_KMLearningGoalsCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  /** 显示ge_KMLearningGoals对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrge_KMLearningGoalsExObjLst:需要绑定的对象列表
   **/
  public async BindTab_ge_KMLearningGoals4Func_Edit(
    divContainer: HTMLDivElement,
    arrge_KMLearningGoalsExObjLst: Array<clsge_KMLearningGoalsENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_KMLearningGoals4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
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
        fldName: clsge_KMLearningGoalsENEx.con_UserName,
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户',
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
        fldName: clsge_KMLearningGoalsENEx.con_KnowledgeModuleName,
        sortBy: clsge_KMLearningGoalsENEx.con_KnowledgeModuleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点模块名称',
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
        fldName: clsge_KMLearningGoalsEN.con_MasteryValue,
        sortBy: clsge_KMLearningGoalsEN.con_MasteryValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '当前掌握度',
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
        fldName: clsge_KMLearningGoalsEN.con_SelfPerceivedValue,
        sortBy: clsge_KMLearningGoalsEN.con_SelfPerceivedValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '自认值',
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
        fldName: clsge_KMLearningGoalsEN.con_GoalValue,
        sortBy: clsge_KMLearningGoalsEN.con_GoalValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '目标值',
        text: '',
        tdClass: 'text-left',
        columnType: 'Text',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },

      {
        fldName: '',
        colHeader: '确定',
        text: '确定',
        tdClass: 'text-left',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          // btn1.onclick = .setAttribute('onclick', `btnCurrEduClsInTab_Click('${strKeyId}');`);
          (function (strKeyId: string) {
            btn1.onclick = function () {
              ge_KMLearningGoalsCRUDEx.vuebtn_Click('SetGoal', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
      // {
      //   fldName: clsge_KMLearningGoalsENEx.con_CourseName,
      //   sortBy: clsge_KMLearningGoalsENEx.con_CourseName,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '课程名称',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 6,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsge_KMLearningGoalsENEx.con_DateTimeSim,
        sortBy: clsge_KMLearningGoalsENEx.con_DateTimeSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsge_KMLearningGoalsEN.con_UpdUser,
        sortBy: clsge_KMLearningGoalsEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clsge_KMLearningGoalsEN.con_Memo,
        sortBy: clsge_KMLearningGoalsEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrge_KMLearningGoalsExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const arrKeyLst = [
      clsge_KMLearningGoalsEN.con_UserId,
      clsge_KMLearningGoalsEN.con_KnowledgeModuleId,
    ];
    await BindTab_KeyLst(divDataLst, arrge_KMLearningGoalsExObjLst, arrDataColumn, arrKeyLst, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async BindTab_ge_KMLearningGoals4Func_Goal(
    divContainer: HTMLDivElement,
    arrge_KMLearningGoalsExObjLst: Array<clsge_KMLearningGoalsENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_KMLearningGoals4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
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
        fldName: clsge_KMLearningGoalsENEx.con_UserName,
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户',
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
        fldName: clsge_KMLearningGoalsENEx.con_KnowledgeModuleName,
        sortBy: clsge_KMLearningGoalsENEx.con_KnowledgeModuleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点模块名称',
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
        fldName: clsge_KMLearningGoalsEN.con_MasteryValue,
        sortBy: clsge_KMLearningGoalsEN.con_MasteryValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '当前掌握度',
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
        fldName: clsge_KMLearningGoalsEN.con_SelfPerceivedValue,
        sortBy: clsge_KMLearningGoalsEN.con_SelfPerceivedValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '自认值',
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
        fldName: clsge_KMLearningGoalsEN.con_GoalValue,
        sortBy: clsge_KMLearningGoalsEN.con_GoalValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '目标值',
        text: '',
        tdClass: 'text-left',
        columnType: 'Text',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },

      {
        fldName: '',
        colHeader: '确定',
        text: '确定',
        tdClass: 'text-left',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          // btn1.onclick = .setAttribute('onclick', `btnCurrEduClsInTab_Click('${strKeyId}');`);
          (function (strKeyId: string) {
            btn1.onclick = function () {
              ge_KMLearningGoalsCRUDEx.vuebtn_Click('SetGoal', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
      // {
      //   fldName: clsge_KMLearningGoalsENEx.con_CourseName,
      //   sortBy: clsge_KMLearningGoalsENEx.con_CourseName,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '课程名称',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 6,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsge_KMLearningGoalsENEx.con_DateTimeSim,
        sortBy: clsge_KMLearningGoalsENEx.con_DateTimeSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsge_KMLearningGoalsEN.con_UpdUser,
        sortBy: clsge_KMLearningGoalsEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clsge_KMLearningGoalsEN.con_Memo,
        sortBy: clsge_KMLearningGoalsEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrge_KMLearningGoalsExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const arrKeyLst = [
      clsge_KMLearningGoalsEN.con_UserId,
      clsge_KMLearningGoalsEN.con_KnowledgeModuleId,
    ];
    await BindTab_KeyLst(divDataLst, arrge_KMLearningGoalsExObjLst, arrDataColumn, arrKeyLst, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async BindTab_ge_KMLearningGoals4Func_SelfPerceived(
    divContainer: HTMLDivElement,
    arrge_KMLearningGoalsExObjLst: Array<clsge_KMLearningGoalsENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_KMLearningGoals4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
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
        fldName: clsge_KMLearningGoalsENEx.con_UserName,
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户',
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
        fldName: clsge_KMLearningGoalsENEx.con_KnowledgeModuleName,
        sortBy: clsge_KMLearningGoalsENEx.con_KnowledgeModuleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点模块名称',
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
        fldName: clsge_KMLearningGoalsEN.con_MasteryValue,
        sortBy: clsge_KMLearningGoalsEN.con_MasteryValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '当前掌握度',
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
        fldName: clsge_KMLearningGoalsEN.con_GoalValue,
        sortBy: clsge_KMLearningGoalsEN.con_GoalValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '目标值',
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
        fldName: clsge_KMLearningGoalsEN.con_SelfPerceivedValue,
        sortBy: clsge_KMLearningGoalsEN.con_SelfPerceivedValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '自认值',
        text: '',
        tdClass: 'text-left',
        columnType: 'Text',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },

      {
        fldName: '',
        colHeader: '确定',
        text: '确定',
        tdClass: 'text-left',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          (function (strKeyId: string) {
            btn1.onclick = function () {
              ge_KMLearningGoalsCRUDEx.vuebtn_Click('SetSelfPerceived', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
      // {
      //   fldName: clsge_KMLearningGoalsENEx.con_CourseName,
      //   sortBy: clsge_KMLearningGoalsENEx.con_CourseName,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '课程名称',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 6,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsge_KMLearningGoalsENEx.con_DateTimeSim,
        sortBy: clsge_KMLearningGoalsENEx.con_DateTimeSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsge_KMLearningGoalsEN.con_UpdUser,
        sortBy: clsge_KMLearningGoalsEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clsge_KMLearningGoalsEN.con_Memo,
        sortBy: clsge_KMLearningGoalsEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrge_KMLearningGoalsExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const arrKeyLst = [
      clsge_KMLearningGoalsEN.con_UserId,
      clsge_KMLearningGoalsEN.con_KnowledgeModuleId,
    ];
    await BindTab_KeyLst(divDataLst, arrge_KMLearningGoalsExObjLst, arrDataColumn, arrKeyLst, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 设置字段值-IsMain
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnCalcMasteryValue_Click() {
    const strThisFuncName = this.btnCalcMasteryValue_Click.name;
    const userStore = useUserStore();
    try {
      const strUserId = userStore.userId;
      const strRoleId = userStore.roleId;
      if (
        strRoleId == enumQxRoles.Regular_Student_00620003 ||
        strRoleId == enumQxRoles.High_School_Student_00620017
      ) {
        const intRecNum = await ge_KMLearningGoalsEx_CalcUserMasteryValue(
          clsPubLocalStorage.courseId,
          strUserId,
        );
        alert(`计算知识点模块掌握度成功！共计算了${intRecNum}的模块!`);
      } else {
        const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
        const arrStuId = await CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls(strIdCurrEduCls);
        let intTotalRec = 0;
        for (const strStuId of arrStuId) {
          const intRecNum = await ge_KMLearningGoalsEx_CalcUserMasteryValue(
            clsPubLocalStorage.courseId,
            strStuId,
          );
          intTotalRec += intRecNum;
        }
        alert(`计算知识点模块掌握度成功！共计算了${intTotalRec}的模块!`);
      }

      await this.BindGv_ge_KMLearningGoals4Func_SelfPerceived(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `计算知识点模块掌握度不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async btnSetGoal_Click(strKeyId: string) {
    const strThisFuncName = this.btnSetGoal_Click.name;
    try {
      const txtId = `txt${strKeyId.replace('|', '_')}_${clsge_KMLearningGoalsEN.con_GoalValue}`;
      const text1 = GetInputObjInDivObj(divVarSet.refDivList, txtId);
      if (text1 == null) {
        alert(`id=${txtId}的文本框不存在!`);
        return '';
      }
      // const bolIsMain: boolean = $('#chkIsMain_SetFldValue').prop('checked');

      //console.log('bolIsMain=' + bolIsMain);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetGoal(strKeyId, Number(text1.value));
      await this.BindGv_ge_KMLearningGoals4Func_Goal(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-IsMain
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetGoal(strKeyId: string, dblgoalValue: number) {
    const strThisFuncName = this.SetGoal.name;
    if (strKeyId == '') {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const objKeyLst = ge_KMLearningGoals_SplitKeyLst(strKeyId);
      const objge_KMLearningGoals = await ge_KMLearningGoals_GetObjByKeyLstAsync(
        objKeyLst.userId,
        objKeyLst.knowledgeModuleId,
      );

      if (objge_KMLearningGoals == null) return;
      objge_KMLearningGoals.SetUserId(objKeyLst.userId);
      objge_KMLearningGoals.SetKnowledgeModuleId(objKeyLst.knowledgeModuleId);
      objge_KMLearningGoals.SetGoalValue(dblgoalValue);
      objge_KMLearningGoals.SetUpdDate(clsDateTime.getTodayStr(0));

      const bolResult = await ge_KMLearningGoals_UpdateRecordAsync(objge_KMLearningGoals);

      if (bolResult == true) {
        // ge_KMLearningGoals_ReFreshCache(CourseId_Session.value);
        const strInfo = Format('共设置目标成功!');
        alert(strInfo);
      } else {
        const strInfo = Format('共设置目标不成功!');
        alert(strInfo);
      }

      //console.log('完成!');
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async btnSetSelfPerceived_Click(strKeyId: string) {
    const strThisFuncName = this.btnSetGoal_Click.name;
    try {
      // alert(strKeyId);
      const txtId = `txt${strKeyId.replace('|', '_')}_${
        clsge_KMLearningGoalsEN.con_SelfPerceivedValue
      }`;
      const text1 = GetInputObjInDivObj(divVarSet.refDivList, txtId);
      if (text1 == null) {
        alert(`id=${txtId}的文本框不存在!`);
        return '';
      }
      // const bolIsMain: boolean = $('#chkIsMain_SetFldValue').prop('checked');

      //console.log('bolIsMain=' + bolIsMain);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetSelfPerceived(strKeyId, Number(text1.value));
      await this.BindGv_ge_KMLearningGoals4Func_SelfPerceived(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SetSelfPerceived(strKeyId: string, dblSelfPerceivedValue: number) {
    const strThisFuncName = this.SetGoal.name;
    if (strKeyId == '') {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const objKeyLst = ge_KMLearningGoals_SplitKeyLst(strKeyId);
      const objge_KMLearningGoals = await ge_KMLearningGoals_GetObjByKeyLstAsync(
        objKeyLst.userId,
        objKeyLst.knowledgeModuleId,
      );

      if (objge_KMLearningGoals == null) return;
      objge_KMLearningGoals.SetUserId(objKeyLst.userId);
      objge_KMLearningGoals.SetKnowledgeModuleId(objKeyLst.knowledgeModuleId);
      objge_KMLearningGoals.SetSelfPerceivedValue(dblSelfPerceivedValue);
      objge_KMLearningGoals.SetUpdDate(clsDateTime.getTodayStr(0));

      const bolResult = await ge_KMLearningGoals_UpdateRecordAsync(objge_KMLearningGoals);

      if (bolResult == true) {
        // ge_KMLearningGoals_ReFreshCache(CourseId_Session.value);
        const strInfo = Format('共设置目标成功!');
        alert(strInfo);
      } else {
        const strInfo = Format('共设置目标不成功!');
        alert(strInfo);
      }

      //console.log('完成!');
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /*
   * 存放编辑字段：GoalValue, SelfPerceivedValue
   */
  public get editFldName() {
    const strEditFldName = ge_KMLearningGoalsCRUDEx.GetPropValue('editFldName');
    return strEditFldName;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'userName|Ex':
        viewVarSet.sortge_KMLearningGoalsBy = `vQxUsersSim|userName ${sortDirection}|ge_KMLearningGoals.UserId = vQxUsersSim.UserId`;
        break;
      case 'knowledgeModuleName|Ex':
        viewVarSet.sortge_KMLearningGoalsBy = `cc_KnowledgeModules|knowledgeModuleName ${sortDirection}|ge_KMLearningGoals.KnowledgeModuleId = cc_KnowledgeModules.KnowledgeModuleId`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortge_KMLearningGoalsBy = `vcc_Course_Sim|courseName ${sortDirection}|ge_KMLearningGoals.CourseId = vcc_Course_Sim.CourseId`;
        break;
      default:
        viewVarSet.sortge_KMLearningGoalsBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_KMLearningGoals4Func(this.thisDivList);
  }
}
