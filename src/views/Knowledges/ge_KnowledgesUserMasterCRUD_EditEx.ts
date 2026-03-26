import ge_KnowledgesUserMaster_EditEx from './ge_KnowledgesUserMaster_EditEx';

import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { ge_KnowledgesUserMasterCRUD } from '@/viewsBase/Knowledges/ge_KnowledgesUserMasterCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  ge_KnowledgesUserMaster_GetObjBymIdAsync,
  ge_KnowledgesUserMaster_GetRecCountByCondAsync,
  ge_KnowledgesUserMaster_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsge_KnowledgesUserMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterEN';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsge_KnowledgesUserMasterENEx } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterENEx';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  ge_KnowledgesUserMasterEx_GetObjExLstByPagerAsync,
  ge_KnowledgesUserMasterEx_InitUserKnowledge,
} from '@/ts/L3ForWApiEx/Knowledges/clsge_KnowledgesUserMasterExWApi';
import { useUserStore } from '@/store/modulesShare/user';
import { cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache } from 'share-stu-study-base-lib';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import {
  viewVarSet,
  CourseId_Session,
  qryVarSet,
  Combinege_KnowledgesUserMasterCondition,
  divVarSet,
} from '@/views/Knowledges/ge_KnowledgesUserMasterVueShare';

/* ge_KnowledgesUserMasterCRUD_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ge_KnowledgesUserMasterCRUD_EditEx
  extends ge_KnowledgesUserMasterCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divList_Goal: HTMLDivElement; //列表区的层对象
  public get thisDivList(): HTMLDivElement {
    return ge_KnowledgesUserMasterCRUD_EditEx.divList_Goal;
  }
  public static objPageCRUDEx: ge_KnowledgesUserMasterCRUD_EditEx;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortge_KnowledgesUserMasterBy: string = "mId";
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
    this.BindGv_ge_KnowledgesUserMaster4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_KnowledgesUserMaster':
        alert('该类没有绑定该函数：[this.BindGv_ge_KnowledgesUserMaster4Func]！');
        //this.BindGv_ge_KnowledgesUserMaster4Func(divVarSet.refDivList);
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
    let objPage: ge_KnowledgesUserMasterCRUD_EditEx;
    if (ge_KnowledgesUserMasterCRUD_EditEx.objPageCRUDEx == null) {
      ge_KnowledgesUserMasterCRUD_EditEx.objPageCRUDEx = new ge_KnowledgesUserMasterCRUD_EditEx();
      objPage = <ge_KnowledgesUserMasterCRUD_EditEx>(
        ge_KnowledgesUserMasterCRUD_EditEx.objPageCRUDEx
      );
    } else {
      objPage = <ge_KnowledgesUserMasterCRUD_EditEx>(
        ge_KnowledgesUserMasterCRUD_EditEx.objPageCRUDEx
      );
    }
    const objPageEdit: ge_KnowledgesUserMaster_EditEx = new ge_KnowledgesUserMaster_EditEx(
      'ge_KnowledgesUserMaster_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(ge_KnowledgesUserMasterCRUD_EditEx.divList_Goal);
    let strMsg = '';
    switch (strCommandName) {
      case 'SetGoal':
        objPage.btnSetGoal_Click(strKeyId);
        break;
      case 'SetSelfPerceived':
        objPage.btnSetSelfPerceived_Click(strKeyId);
        break;

      case 'Query_Weight': //查询记录
        objPage.btnQuery_Weight_Click();
      case 'Query_Goal': //查询记录
        objPage.btnQuery_Goal_Click();
        break;
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
        strKeyId = GetFirstCheckedKeyIdInDivObj(ge_KnowledgesUserMasterCRUD_EditEx.divList_Goal);
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
          '命令:' +
          strCommandName +
          '在函数(ge_KnowledgesUserMasterCRUD_EditEx.btn_Click)中没有被处理！';
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

      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();

      viewVarSet.sortge_KnowledgesUserMasterBy = 'courseId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_KnowledgesUserMaster4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public async PageLoad_Edit() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      CourseId_Session.value = clsPubLocalStorage.courseId;
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const intCount = await ge_KnowledgesUserMasterEx_InitUserKnowledge(
        clsPubLocalStorage.courseId,
        userStore.getUserId,
      );
      if (intCount > 0) {
      }
      console.log(`用户知识点共初始化了${intCount}记录！`);

      // 为查询区绑定下拉框
      //  await this.BindDdl4QueryRegion();

      viewVarSet.sortge_KnowledgesUserMasterBy = 'courseId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_KnowledgesUserMaster4Func_Edit(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public async PageLoad_Goal() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      CourseId_Session.value = clsPubLocalStorage.courseId;
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const intCount = await ge_KnowledgesUserMasterEx_InitUserKnowledge(
        clsPubLocalStorage.courseId,
        userStore.getUserId,
      );
      if (intCount > 0) {
      }
      console.log(`用户知识点共初始化了${intCount}记录！`);

      // 为查询区绑定下拉框
      //  await this.BindDdl4QueryRegion();

      viewVarSet.sortge_KnowledgesUserMasterBy = 'courseId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_KnowledgesUserMaster4Func_Goal(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async PageLoad_SelfPerceived() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();

      CourseId_Session.value = clsPubLocalStorage.courseId;
      const intCount = await ge_KnowledgesUserMasterEx_InitUserKnowledge(
        clsPubLocalStorage.courseId,
        userStore.getUserId,
      );
      if (intCount > 0) {
      }
      console.log(`用户知识点共初始化了${intCount}记录！`);

      // 为查询区绑定下拉框
      //  await this.BindDdl4QueryRegion();

      viewVarSet.sortge_KnowledgesUserMasterBy = 'courseId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_KnowledgesUserMaster4Func_SelfPerceived(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_ge_KnowledgesUserMaster4Func_Edit(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_KnowledgesUserMaster4Func.name;
    if (viewVarSet.sortge_KnowledgesUserMasterBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortge_KnowledgesUserMasterBy)为空,请检查!(In BindGv_ge_KnowledgesUserMasterCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await Combinege_KnowledgesUserMasterCondition();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx> = [];
    try {
      this.recCount = await ge_KnowledgesUserMaster_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          strWhereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (ge_KnowledgesUserMasterCRUD.sortFunStatic != undefined) {
        strSortFun = ge_KnowledgesUserMasterCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KnowledgesUserMasterBy,
        sortFun: strSortFun,
      };
      arrge_KnowledgesUserMasterExObjLst = await ge_KnowledgesUserMasterEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_KnowledgesUserMasterExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsge_KnowledgesUserMasterEN._CurrTabName,
        CourseId_Session.value,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_KnowledgesUserMaster4Func_Edit(
        divList,
        arrge_KnowledgesUserMasterExObjLst,
      );
      //console.log("完成BindGv_ge_KnowledgesUserMaster4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindGv_ge_KnowledgesUserMaster4Func_Goal(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_KnowledgesUserMaster4Func.name;
    if (viewVarSet.sortge_KnowledgesUserMasterBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortge_KnowledgesUserMasterBy)为空,请检查!(In BindGv_ge_KnowledgesUserMasterCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.Combinege_KnowledgesUserMasterCondition_Goal(); //Obj_Goal();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx> = [];
    try {
      this.recCount = await ge_KnowledgesUserMaster_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          strWhereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (ge_KnowledgesUserMasterCRUD.sortFunStatic != undefined) {
        strSortFun = ge_KnowledgesUserMasterCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KnowledgesUserMasterBy,
        sortFun: strSortFun,
      };
      arrge_KnowledgesUserMasterExObjLst = await ge_KnowledgesUserMasterEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_KnowledgesUserMasterExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsge_KnowledgesUserMasterEN._CurrTabName,
        CourseId_Session.value,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_KnowledgesUserMaster4Func_Goal(
        divList,
        arrge_KnowledgesUserMasterExObjLst,
      );
      //console.log("完成BindGv_ge_KnowledgesUserMaster4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async BindGv_ge_KnowledgesUserMaster4Func_SelfPerceived(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_KnowledgesUserMaster4Func.name;
    if (viewVarSet.sortge_KnowledgesUserMasterBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortge_KnowledgesUserMasterBy)为空,请检查!(In BindGv_ge_KnowledgesUserMasterCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.Combinege_KnowledgesUserMasterCondition_SelfPerceived();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx> = [];
    try {
      this.recCount = await ge_KnowledgesUserMaster_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          strWhereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (ge_KnowledgesUserMasterCRUD.sortFunStatic != undefined) {
        strSortFun = ge_KnowledgesUserMasterCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_KnowledgesUserMasterBy,
        sortFun: strSortFun,
      };
      arrge_KnowledgesUserMasterExObjLst = await ge_KnowledgesUserMasterEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_KnowledgesUserMasterExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsge_KnowledgesUserMasterEN._CurrTabName,
        CourseId_Session.value,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_KnowledgesUserMaster4Func_SelfPerceived(
        divList,
        arrge_KnowledgesUserMasterExObjLst,
      );
      //console.log("完成BindGv_ge_KnowledgesUserMaster4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinege_KnowledgesUserMasterConditionObj_Edit(): Promise<clsge_KnowledgesUserMasterEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strWhereCond = ' 1 = 1 ';
    const objge_KnowledgesUserMasterCond = new clsge_KnowledgesUserMasterEN();
    objge_KnowledgesUserMasterCond.SetCondFldValue(
      clsge_KnowledgesUserMasterEN.con_UserId,
      strUserId,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeModuleId != '') {
        // strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_KnowledgeModuleId} = '${this.knowledgeModuleId}'`;
        const arrCourseKnowledgeId =
          await cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache(
            this.knowledgeModuleId,
            clsPubLocalStorage.courseId,
          );
        objge_KnowledgesUserMasterCond.SetCondFldValue(
          clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId,
          arrCourseKnowledgeId.join(','),
          'in',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objge_KnowledgesUserMasterCond.whereCond = strWhereCond;
    return objge_KnowledgesUserMasterCond;
  }

  public async Combinege_KnowledgesUserMasterCondition_Edit(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += ` and ${clsge_KnowledgesUserMasterEN.con_UserId} = '${strUserId}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeModuleId != '') {
        // strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_KnowledgeModuleId} = '${this.knowledgeModuleId}'`;
        const arrCourseKnowledgeId =
          await cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache(
            this.knowledgeModuleId,
            clsPubLocalStorage.courseId,
          );
        strWhereCond += ` and ${
          clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId
        } in (${arrCourseKnowledgeId.join(',')})`;
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }

    return strWhereCond;
  }

  public async Combinege_KnowledgesUserMasterConditionObj_Goal(): Promise<clsge_KnowledgesUserMasterEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strWhereCond = ' 1 = 1 ';
    const objge_KnowledgesUserMasterCond = new clsge_KnowledgesUserMasterEN();
    objge_KnowledgesUserMasterCond.SetCondFldValue(
      clsge_KnowledgesUserMasterEN.con_UserId,
      strUserId,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeModuleId != '') {
        // strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_KnowledgeModuleId} = '${this.knowledgeModuleId}'`;
        const arrCourseKnowledgeId =
          await cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache(
            this.knowledgeModuleId,
            clsPubLocalStorage.courseId,
          );
        objge_KnowledgesUserMasterCond.SetCondFldValue(
          clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId,
          arrCourseKnowledgeId.join(','),
          'in',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objge_KnowledgesUserMasterCond.whereCond = strWhereCond;
    return objge_KnowledgesUserMasterCond;
  }

  public async Combinege_KnowledgesUserMasterCondition_Goal(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strWhereCond = ' 1 = 1 ';

    strWhereCond += ` and ${clsge_KnowledgesUserMasterEN.con_UserId} = '${strUserId}'`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeModuleId != '') {
        // strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_KnowledgeModuleId} = '${this.knowledgeModuleId}'`;
        const arrCourseKnowledgeId =
          await cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache(
            this.knowledgeModuleId,
            clsPubLocalStorage.courseId,
          );
        strWhereCond += ` and ${
          clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId
        } in (${arrCourseKnowledgeId.join(',')})`;
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }

    return strWhereCond;
  }

  public async Combinege_KnowledgesUserMasterConditionObj_SelfPerceived(): Promise<clsge_KnowledgesUserMasterEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strWhereCond = ' 1 = 1 ';
    const objge_KnowledgesUserMasterCond = new clsge_KnowledgesUserMasterEN();
    objge_KnowledgesUserMasterCond.SetCondFldValue(
      clsge_KnowledgesUserMasterEN.con_UserId,
      strUserId,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeModuleId != '') {
        // strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_KnowledgeModuleId} = '${this.knowledgeModuleId}'`;
        const arrCourseKnowledgeId =
          await cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache(
            this.knowledgeModuleId,
            clsPubLocalStorage.courseId,
          );
        objge_KnowledgesUserMasterCond.SetCondFldValue(
          clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId,
          arrCourseKnowledgeId.join(','),
          'in',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objge_KnowledgesUserMasterCond.whereCond = strWhereCond;
    return objge_KnowledgesUserMasterCond;
  }

  public async Combinege_KnowledgesUserMasterCondition_SelfPerceived(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += ` and ${clsge_KnowledgesUserMasterEN.con_UserId} = '${strUserId}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeModuleId != '') {
        // strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_KnowledgeModuleId} = '${this.knowledgeModuleId}'`;
        const arrCourseKnowledgeId =
          await cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache(
            this.knowledgeModuleId,
            clsPubLocalStorage.courseId,
          );
        strWhereCond += ` and ${
          clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId
        } in (${arrCourseKnowledgeId.join(',')}`;
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }

    return strWhereCond;
  }

  public async btnQuery_Weight_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_ge_KnowledgesUserMaster4Func_Edit(divVarSet.refDivList);
  }
  public async btnQuery_Goal_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_ge_KnowledgesUserMaster4Func_Goal(divVarSet.refDivList);
  }

  public get knowledgeModuleId() {
    const strKnowledgeModuleId =
      ge_KnowledgesUserMasterCRUD_EditEx.GetPropValue('knowledgeModuleId');
    return strKnowledgeModuleId;
  }

  /** 显示ge_KnowledgesUserMaster对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrge_KnowledgesUserMasterExObjLst:需要绑定的对象列表
   **/
  public async BindTab_ge_KnowledgesUserMaster4Func_Edit(
    divContainer: HTMLDivElement,
    arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_KnowledgesUserMaster4Func.name;
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
        fldName: clsge_KnowledgesUserMasterENEx.con_KnowledgeName,
        sortBy: 'knowledgeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点名称',
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
        fldName: clsge_KnowledgesUserMasterEN.con_GoalValue,
        sortBy: clsge_KnowledgesUserMasterEN.con_GoalValue,
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
              ge_KnowledgesUserMasterCRUD_EditEx.vuebtn_Click('SetGoal', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
      // {
      //   fldName: clsge_KnowledgesUserMasterEN.con_UserId,
      //   sortBy: clsge_KnowledgesUserMasterEN.con_UserId,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '用户ID',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 3,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },

      {
        fldName: clsge_KnowledgesUserMasterENEx.con_MasterLevelName,
        sortBy: 'masterLevelName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握等级',
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
        fldName: clsge_KnowledgesUserMasterENEx.con_MasterTypeName,
        sortBy: 'masterTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握类型名',
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
        fldName: clsge_KnowledgesUserMasterEN.con_RightCount,
        sortBy: clsge_KnowledgesUserMasterEN.con_RightCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '正确次数',
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
        fldName: clsge_KnowledgesUserMasterEN.con_ErrorCount,
        sortBy: clsge_KnowledgesUserMasterEN.con_ErrorCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '错误次数',
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
        fldName: clsge_KnowledgesUserMasterEN.con_MasteryValue,
        sortBy: clsge_KnowledgesUserMasterEN.con_MasteryValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握度',
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
        fldName: clsge_KnowledgesUserMasterENEx.con_DateTimeSim,
        sortBy: clsge_KnowledgesUserMasterENEx.con_DateTimeSim,
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
      // {
      //   fldName: clsge_KnowledgesUserMasterEN.con_UpdUser,
      //   sortBy: clsge_KnowledgesUserMasterEN.con_UpdUser,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '修改人',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 11,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
    ];
    try {
      await this.ExtendFldFuncMap(arrge_KnowledgesUserMasterExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrge_KnowledgesUserMasterExObjLst,
      arrDataColumn,
      clsge_KnowledgesUserMasterEN.con_mId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async BindTab_ge_KnowledgesUserMaster4Func_Goal(
    divContainer: HTMLDivElement,
    arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_KnowledgesUserMaster4Func.name;
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
        fldName: clsge_KnowledgesUserMasterENEx.con_KnowledgeName,
        sortBy: 'knowledgeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点名称',
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
        fldName: clsge_KnowledgesUserMasterEN.con_GoalValue,
        sortBy: clsge_KnowledgesUserMasterEN.con_GoalValue,
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
              ge_KnowledgesUserMasterCRUD_EditEx.vuebtn_Click('SetGoal', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
      // {
      //   fldName: clsge_KnowledgesUserMasterEN.con_UserId,
      //   sortBy: clsge_KnowledgesUserMasterEN.con_UserId,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '用户ID',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 3,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },

      {
        fldName: clsge_KnowledgesUserMasterENEx.con_MasterLevelName,
        sortBy: 'masterLevelName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握等级',
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
        fldName: clsge_KnowledgesUserMasterENEx.con_MasterTypeName,
        sortBy: 'masterTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握类型名',
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
        fldName: clsge_KnowledgesUserMasterEN.con_RightCount,
        sortBy: clsge_KnowledgesUserMasterEN.con_RightCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '正确次数',
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
        fldName: clsge_KnowledgesUserMasterEN.con_ErrorCount,
        sortBy: clsge_KnowledgesUserMasterEN.con_ErrorCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '错误次数',
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
        fldName: clsge_KnowledgesUserMasterEN.con_MasteryValue,
        sortBy: clsge_KnowledgesUserMasterEN.con_MasteryValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握度',
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
        fldName: clsge_KnowledgesUserMasterENEx.con_DateTimeSim,
        sortBy: clsge_KnowledgesUserMasterENEx.con_DateTimeSim,
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
      // {
      //   fldName: clsge_KnowledgesUserMasterEN.con_UpdUser,
      //   sortBy: clsge_KnowledgesUserMasterEN.con_UpdUser,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '修改人',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 11,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
    ];
    try {
      await this.ExtendFldFuncMap(arrge_KnowledgesUserMasterExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrge_KnowledgesUserMasterExObjLst,
      arrDataColumn,
      clsge_KnowledgesUserMasterEN.con_mId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async BindTab_ge_KnowledgesUserMaster4Func_SelfPerceived(
    divContainer: HTMLDivElement,
    arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx>,
  ) {
    const strThisFuncName = this.BindTab_ge_KnowledgesUserMaster4Func.name;
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
        fldName: clsge_KnowledgesUserMasterENEx.con_KnowledgeName,
        sortBy: 'knowledgeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },

      // {
      //   fldName: clsge_KnowledgesUserMasterEN.con_UserId,
      //   sortBy: clsge_KnowledgesUserMasterEN.con_UserId,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '用户ID',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 3,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },

      {
        fldName: clsge_KnowledgesUserMasterENEx.con_MasterLevelName,
        sortBy: 'masterLevelName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握等级',
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
        fldName: clsge_KnowledgesUserMasterENEx.con_MasterTypeName,
        sortBy: 'masterTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握类型名',
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
        fldName: clsge_KnowledgesUserMasterEN.con_RightCount,
        sortBy: clsge_KnowledgesUserMasterEN.con_RightCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '正确次数',
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
        fldName: clsge_KnowledgesUserMasterEN.con_ErrorCount,
        sortBy: clsge_KnowledgesUserMasterEN.con_ErrorCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '错误次数',
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
        fldName: clsge_KnowledgesUserMasterEN.con_MasteryValue,
        sortBy: clsge_KnowledgesUserMasterEN.con_MasteryValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '掌握度',
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
        fldName: clsge_KnowledgesUserMasterEN.con_SelfPerceivedValue,
        sortBy: clsge_KnowledgesUserMasterEN.con_SelfPerceivedValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '自评值',
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
              ge_KnowledgesUserMasterCRUD_EditEx.vuebtn_Click('SetSelfPerceived', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
      {
        fldName: clsge_KnowledgesUserMasterENEx.con_DateTimeSim,
        sortBy: clsge_KnowledgesUserMasterENEx.con_DateTimeSim,
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
      // {
      //   fldName: clsge_KnowledgesUserMasterEN.con_UpdUser,
      //   sortBy: clsge_KnowledgesUserMasterEN.con_UpdUser,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '修改人',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 11,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
    ];
    try {
      await this.ExtendFldFuncMap(arrge_KnowledgesUserMasterExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrge_KnowledgesUserMasterExObjLst,
      arrDataColumn,
      clsge_KnowledgesUserMasterEN.con_mId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 设置字段值-IsMain
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetGoal_Click(strKeyId: string) {
    const strThisFuncName = this.btnSetGoal_Click.name;
    try {
      // alert(strKeyId);
      const txtId = `txt${strKeyId}_${clsge_KnowledgesUserMasterEN.con_GoalValue}`;
      const text1 = GetInputObjInDivObj(divVarSet.refDivList, txtId);
      if (text1 == null) {
        alert(`id=${txtId}的文本框不存在!`);
        return '';
      }
      // const bolIsMain: boolean = $('#chkIsMain_SetFldValue').prop('checked');

      //console.log('bolIsMain=' + bolIsMain);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetGoal(Number(strKeyId), Number(text1.value));
      await this.BindGv_ge_KnowledgesUserMaster4Func_Edit(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-IsMain
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetGoal(strKeyId: number, dblgoalValue: number) {
    const strThisFuncName = this.SetGoal.name;
    if (strKeyId == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      // const objKeyLst = ge_KnowledgesUserMaster_SplitKeyLst(strKeyId);
      const objge_KnowledgesUserMaster = await ge_KnowledgesUserMaster_GetObjBymIdAsync(strKeyId);

      if (objge_KnowledgesUserMaster == null) return;
      objge_KnowledgesUserMaster.SetmId(strKeyId);
      objge_KnowledgesUserMaster.SetGoalValue(dblgoalValue);
      objge_KnowledgesUserMaster.SetUpdDate(clsDateTime.getTodayStr(0));

      const bolResult = await ge_KnowledgesUserMaster_UpdateRecordAsync(objge_KnowledgesUserMaster);

      if (bolResult == true) {
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
    const strThisFuncName = this.btnSetSelfPerceived_Click.name;
    try {
      // alert(strKeyId);
      const txtId = `txt${strKeyId}_${clsge_KnowledgesUserMasterEN.con_SelfPerceivedValue}`;
      const text1 = GetInputObjInDivObj(divVarSet.refDivList, txtId);
      if (text1 == null) {
        alert(`id=${txtId}的文本框不存在!`);
        return '';
      }
      // const bolIsMain: boolean = $('#chkIsMain_SetFldValue').prop('checked');

      //console.log('bolIsMain=' + bolIsMain);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetSelfPerceived(Number(strKeyId), Number(text1.value));
      await this.BindGv_ge_KnowledgesUserMaster4Func_SelfPerceived(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-IsMain
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetSelfPerceived(strKeyId: number, dblSelfPerceivedValue: number) {
    const strThisFuncName = this.SetGoal.name;
    if (strKeyId == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      // const objKeyLst = ge_KnowledgesUserMaster_SplitKeyLst(strKeyId);
      const objge_KnowledgesUserMaster = await ge_KnowledgesUserMaster_GetObjBymIdAsync(strKeyId);

      if (objge_KnowledgesUserMaster == null) return;
      objge_KnowledgesUserMaster.SetmId(strKeyId);
      objge_KnowledgesUserMaster.SetSelfPerceivedValue(dblSelfPerceivedValue);
      objge_KnowledgesUserMaster.SetUpdDate(clsDateTime.getTodayStr(0));

      const bolResult = await ge_KnowledgesUserMaster_UpdateRecordAsync(objge_KnowledgesUserMaster);

      if (bolResult == true) {
        const strInfo = Format('共设置自评值成功!');
        alert(strInfo);
      } else {
        const strInfo = Format('共设置自评值不成功!');
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

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinege_KnowledgesUserMasterConditionObj(): Promise<clsge_KnowledgesUserMasterEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objge_KnowledgesUserMasterCond = new clsge_KnowledgesUserMasterEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeModuleId != '') {
        // strWhereCond += ` And ${clsge_KnowledgesUserMasterEN.con_KnowledgeModuleId} = '${this.knowledgeModuleId}'`;
        const arrCourseKnowledgeId =
          await cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache(
            this.knowledgeModuleId,
            clsPubLocalStorage.courseId,
          );
        objge_KnowledgesUserMasterCond.SetCondFldValue(
          clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId,
          arrCourseKnowledgeId.join(','),
          'in',
        );
      }
      if (qryVarSet.masterTypeId_q != '' && qryVarSet.masterTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_KnowledgesUserMasterEN.con_MasterTypeId,
          qryVarSet.masterTypeId_q,
        );
        objge_KnowledgesUserMasterCond.SetCondFldValue(
          clsge_KnowledgesUserMasterEN.con_MasterTypeId,
          qryVarSet.masterTypeId_q,
          '=',
        );
      }
      if (qryVarSet.masterLevelId_q != '' && qryVarSet.masterLevelId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_KnowledgesUserMasterEN.con_MasterLevelId,
          qryVarSet.masterLevelId_q,
        );
        objge_KnowledgesUserMasterCond.SetCondFldValue(
          clsge_KnowledgesUserMasterEN.con_MasterLevelId,
          qryVarSet.masterLevelId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinege_KnowledgesUserMasterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objge_KnowledgesUserMasterCond.whereCond = strWhereCond;
    return objge_KnowledgesUserMasterCond;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'knowledgeName|Ex':
        viewVarSet.sortge_KnowledgesUserMasterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'courseName|Ex':
        viewVarSet.sortge_KnowledgesUserMasterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'masterLevelName|Ex':
        viewVarSet.sortge_KnowledgesUserMasterBy = `KnowledgeMasterLevel|masterLevelName ${sortDirection}|ge_KnowledgesUserMaster.MasterLevelId = KnowledgeMasterLevel.MasterLevelId`;
        break;
      case 'masterTypeName|Ex':
        viewVarSet.sortge_KnowledgesUserMasterBy = `KnowledgeMasterType|masterTypeName ${sortDirection}|ge_KnowledgesUserMaster.MasterTypeId = KnowledgeMasterType.MasterTypeId`;
        break;
      default:
        viewVarSet.sortge_KnowledgesUserMasterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_KnowledgesUserMaster4Func(this.thisDivList);
  }
}
