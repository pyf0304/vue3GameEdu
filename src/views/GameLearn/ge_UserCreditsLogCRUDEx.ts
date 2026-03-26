import { ge_UserCreditsLog_EditEx } from './ge_UserCreditsLog_EditEx';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ge_UserCreditsLogCRUD } from '@/viewsBase/GameLearn/ge_UserCreditsLogCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDiv,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsge_UserCreditsLogEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN';
import {
  ge_UserCreditsLogEx_BindDdl_UserIdByIdCurrEduClsInDivExCache,
  ge_UserCreditsLogEx_CalcCreditLog,
} from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsLogExWApi';

import { useUserStore } from '@/store/modulesShare/user';
import {
  divVarSet,
  viewVarSet,
  IdCurrEduCls_Session,
  qryVarSet,
} from '@/views/GameLearn/ge_UserCreditsLogVueShare';

/* ge_UserCreditsLogCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ge_UserCreditsLogCRUDEx extends ge_UserCreditsLogCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortge_UserCreditsLogBy: string = "mId";
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
    this.BindGv_ge_UserCreditsLog4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_UserCreditsLog':
        alert('该类没有绑定该函数：[this.BindGv_ge_UserCreditsLog4Func]！');
        //this.BindGv_ge_UserCreditsLog4Func(divVarSet.refDivList);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_UserCreditsLogCRUDEx;
    if (ge_UserCreditsLogCRUD.objPageCRUD == null) {
      ge_UserCreditsLogCRUD.objPageCRUD = new ge_UserCreditsLogCRUDEx();
      objPage = <ge_UserCreditsLogCRUDEx>ge_UserCreditsLogCRUD.objPageCRUD;
    } else {
      objPage = <ge_UserCreditsLogCRUDEx>ge_UserCreditsLogCRUD.objPageCRUD;
    }
    const objPageEdit: ge_UserCreditsLog_EditEx = new ge_UserCreditsLog_EditEx(
      'ge_UserCreditsLog_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'CalcUserCreditLog': //查询记录
        objPage.btnCalcUserCreditLog_Click();
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
          '命令:' + strCommandName + '在函数(ge_UserCreditsLogCRUDEx.btn_Click)中没有被处理！';
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

      viewVarSet.sortge_UserCreditsLogBy = 'userId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_UserCreditsLog4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinege_UserCreditsLogCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " {0} = '{1}' ",
      clsge_UserCreditsLogEN.con_IdCurrEduCls,
      clsPubLocalStorage.idCurrEduCls,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (qryVarSet.userId_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsge_UserCreditsLogEN.con_UserId,
          qryVarSet.userId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(Combinege_UserCreditsLogCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /**
   * 设置绑定下拉框，针对字段:[UserId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_UserIdInDiv(Id_CurrEduCls: string) {
    await ge_UserCreditsLogEx_BindDdl_UserIdByIdCurrEduClsInDivExCache(
      this.thisDivLayout,
      'ddlUserId_q',
      Id_CurrEduCls,
    ); //
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnCalcUserCreditLog_Click() {
    const strThisFuncName = this.btnCalcUserCreditLog_Click.name;
    const userStore = useUserStore();
    try {
      const bolReturn = await ge_UserCreditsLogEx_CalcCreditLog(
        clsPubLocalStorage.idCurrEduCls,
        userStore.userId,
      );
      if (bolReturn == false) {
        alert('计算用户关卡积分不成功！');
        return '';
      } else {
        alert('计算用户关卡积分成功！');
      }
      await this.BindGv_ge_UserCreditsLog4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '汇总用户积分不成功. {0}.(in {1}.{2})',
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
      case 'userNameEx|Ex':
        viewVarSet.sortge_UserCreditsLogBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'gameLevelName|Ex':
        viewVarSet.sortge_UserCreditsLogBy = `ge_GameLevel|gameLevelName ${sortDirection}|ge_UserCreditsLog.GameLevelId = ge_GameLevel.GameLevelId`;
        break;
      default:
        viewVarSet.sortge_UserCreditsLogBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserCreditsLog4Func(this.thisDivList);
  }
}
