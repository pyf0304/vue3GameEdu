import { ge_StuBatchQuesRela_EditEx } from './ge_StuBatchQuesRela_EditEx';

import { ge_StuBatchQuesRelaCRUD } from '@/viewsBase/InteractManage/ge_StuBatchQuesRelaCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsge_StuBatchQuesRelaEN } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN';
import { GetCurrPageIndex, ShowEmptyRecNumInfo } from '@/ts/PubFun/clsOperateList';
import { clsge_StuBatchQuesRelaENEx } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaENEx';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { ge_StuBatchQuesRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsge_StuBatchQuesRelaWApi';
import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  qryVarSet,
  IdCurrEduCls_Session,
} from '@/views/InteractManage/ge_StuBatchQuesRelaVueShare';
import { ge_StuBatchQuesRelaEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';

/* ge_StuBatchQuesRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ge_StuBatchQuesRelaCRUDEx extends ge_StuBatchQuesRelaCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortge_StuBatchQuesRelaBy: string = "Id_StuBatchQuesRela";
  public static arrConditionFldName = [
    clsge_StuBatchQuesRelaENEx.con_QuestionTypeId,
    clsge_StuBatchQuesRelaENEx.con_CourseChapterId,
  ];
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
    this.BindGv_ge_StuBatchQuesRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_StuBatchQuesRela':
        alert('该类没有绑定该函数：[this.BindGv_ge_StuBatchQuesRela4Func]！');
        //this.BindGv_ge_StuBatchQuesRela4Func(divVarSet.refDivList);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_StuBatchQuesRelaCRUDEx;
    if (ge_StuBatchQuesRelaCRUD.objPageCRUD == null) {
      ge_StuBatchQuesRelaCRUD.objPageCRUD = new ge_StuBatchQuesRelaCRUDEx();
      objPage = <ge_StuBatchQuesRelaCRUDEx>ge_StuBatchQuesRelaCRUD.objPageCRUD;
    } else {
      objPage = <ge_StuBatchQuesRelaCRUDEx>ge_StuBatchQuesRelaCRUD.objPageCRUD;
    }
    const objPageEdit: ge_StuBatchQuesRela_EditEx = new ge_StuBatchQuesRela_EditEx(
      'ge_UserLevelScore_EditEx',
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
          '命令:' + strCommandName + '在函数(ge_StuBatchQuesRelaCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load_Cache)
   **/

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      // IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      CourseId_Session.value = clsPubLocalStorage.courseId;

      // 为查询区绑定下拉框
      const gvBindDdl = await this.BindDdl4QueryRegion();

      qryVarSet.isHasAnswer_q = 'true';
      viewVarSet.sortge_StuBatchQuesRelaBy = 'examBatchNo Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_StuBatchQuesRela4Func(divVarSet.refDivList);
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
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const CourseIdStatic = CourseId_Session.value; //静态变量;//静态变量

    // await this.SetDdl_QuestionTypeIdInDiv(); //查询区域

    // await this.SetDdl_CourseChapterIdInDiv(CourseIdStatic); //查询区域

    // await this.SetDdl_GameLevelIdInDiv(CourseIdStatic); //查询区域

    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsSubmit_q');

    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsMarking_q');

    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsHasAnswer_q');
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinege_StuBatchQuesRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " {0} = '{1}' ",
      clsge_StuBatchQuesRelaEN.con_IdCurrEduCls,
      IdCurrEduCls_Session.value,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (qryVarSet.userId_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsge_StuBatchQuesRelaEN.con_UpdUserId,
          qryVarSet.userId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(Combinege_StuBatchQuesRelaCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_ge_StuBatchQuesRela4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ge_StuBatchQuesRela4Func.name;
    if (viewVarSet.sortge_StuBatchQuesRelaBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortge_StuBatchQuesRelaBy)为空，请检查！(In BindGv_ge_StuBatchQuesRela_Cache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv = this.divName4DataList;
    const strWhereCond = await this.Combinege_StuBatchQuesRelaCondition();
    // objge_StuBatchQuesRela_Cond.SetCondFldValue(
    //   clsge_StuBatchQuesRelaEN.con_IdCurrEduCls,
    //   IdCurrEduCls_Session.value,
    //   '=',
    // );

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    //const arrQuestionId_Include = await this.GetCondition_QuestionIdLst_In();
    //console.error(arrQuestionId_Include);
    let arrge_StuBatchQuesRelaExObjLst: Array<clsge_StuBatchQuesRelaENEx> = [];
    try {
      this.recCount = await ge_StuBatchQuesRela_GetRecCountByCondAsync(strWhereCond);
      let strSortFun = (x: any, y: any) => {
        return 0;
      };
      if (ge_StuBatchQuesRelaCRUD.sortFunStatic != undefined) {
        strSortFun = ge_StuBatchQuesRelaCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortge_StuBatchQuesRelaBy,
        sortFun: strSortFun,
      };
      arrge_StuBatchQuesRelaExObjLst = await ge_StuBatchQuesRelaEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrge_StuBatchQuesRelaExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsge_StuBatchQuesRelaEN._CurrTabName,
        IdCurrEduCls_Session.value,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfo(strListDiv, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ge_StuBatchQuesRela4Func(divList, arrge_StuBatchQuesRelaExObjLst);
      //console.log("完成BindGv_ge_StuBatchQuesRela4Func!");
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'gameLevelName|Ex':
        viewVarSet.sortge_StuBatchQuesRelaBy = `ge_GameLevel|gameLevelName ${sortDirection}|ge_StuBatchQuesRela.GameLevelId = ge_GameLevel.GameLevelId`;
        break;
      case 'questionTypeName|Ex':
        viewVarSet.sortge_StuBatchQuesRelaBy = `vQuestionnaire_Sim|questionTypeName ${sortDirection}|ge_StuBatchQuesRela.QuestionId = vQuestionnaire_Sim.QuestionId,vQuestionnaire_Sim.QuestionTypeId = QuestionType.QuestionTypeId`;
        break;
      case 'chapterNameSim|Ex':
        viewVarSet.sortge_StuBatchQuesRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'userName|Ex':
        viewVarSet.sortge_StuBatchQuesRelaBy = `vUsersSim|userName ${sortDirection}|ge_StuBatchQuesRela.UserId = vUsersSim.UserId`;
        break;
      default:
        viewVarSet.sortge_StuBatchQuesRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_StuBatchQuesRela4Func(this.thisDivList);
  }
}
