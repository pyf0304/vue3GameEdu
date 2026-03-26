import { ge_UserBadgeLogCRUD } from '@/viewsBase/GameLearn/ge_UserBadgeLogCRUD';
import { ge_UserBadgeLog_EditEx } from './ge_UserBadgeLog_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { ge_UserBadgeLog_ReFreshCache } from '@/ts/L3ForWApi/GameLearn/clsge_UserBadgeLogWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { ge_UserBadgeLogEx_ImportCreditBadge } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserBadgeLogExWApi';

import { useUserStore } from '@/store/modulesShare/user';
import {
  divVarSet,
  viewVarSet,
  IdCurrEduCls_Session,
} from '@/views/GameLearn/ge_UserBadgeLogVueShare';
//import $ from "jquery";
/** ge_UserBadgeLogCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class ge_UserBadgeLogCRUDEx extends ge_UserBadgeLogCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortge_UserBadgeLogBy = "mId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
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
  BindGv(strType: string, strPara: string) {
    this.BindGv_ge_UserBadgeLog4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'ge_UserBadgeLog':
        alert('该类没有绑定该函数：[this.BindGv_ge_UserBadgeLog4Func]！');
        //this.BindGv_ge_UserBadgeLog4Func(divVarSet.refDivList);
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_UserBadgeLogCRUDEx;
    if (ge_UserBadgeLogCRUD.objPageCRUD == null) {
      ge_UserBadgeLogCRUD.objPageCRUD = new ge_UserBadgeLogCRUDEx();
      objPage = <ge_UserBadgeLogCRUDEx>ge_UserBadgeLogCRUD.objPageCRUD;
    } else {
      objPage = <ge_UserBadgeLogCRUDEx>ge_UserBadgeLogCRUD.objPageCRUD;
    }
    const objPageEdit: ge_UserBadgeLog_EditEx = new ge_UserBadgeLog_EditEx(
      'ge_UserBadgeLog_EditEx',
      objPage,
    );
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'ImportCreditBadge': //导入徽章
        objPage.btnImportCreditBadge_Click();
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
      case 'UpdateRecordInTab': //修改记录InTab
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(Number(strKeyId));
        } else {
          objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        }
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
          '命令:' + strCommandName + '在函数(ge_UserBadgeLogCRUDExEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;

      viewVarSet.sortge_UserBadgeLogBy = 'userId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_UserBadgeLog4Func(divVarSet.refDivList);
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

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnImportCreditBadge_Click() {
    const strThisFuncName = this.btnImportCreditBadge_Click.name;
    try {
      const userStore = useUserStore();
      const bolReturn = await ge_UserBadgeLogEx_ImportCreditBadge(
        clsPubLocalStorage.idCurrEduCls,
        clsPubLocalStorage.courseId,
        userStore.userId,
      );
      if (bolReturn == false) {
        alert('导入徽章不成功！');
        return '';
      } else {
        alert('导入徽章成功！');
        ge_UserBadgeLog_ReFreshCache(clsPubLocalStorage.idCurrEduCls);
      }
      await this.BindGv_ge_UserBadgeLog4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '导入徽章不成功. {0}.(in {1}.{2})',
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
      case 'userName|Ex':
        viewVarSet.sortge_UserBadgeLogBy = `vUsersSim|userName ${sortDirection}|ge_UserBadgeLog.UserId = vUsersSim.UserId`;
        break;
      case 'gameLevelName|Ex':
        viewVarSet.sortge_UserBadgeLogBy = `ge_GameLevel|gameLevelName ${sortDirection}|ge_UserBadgeLog.GameLevelId = ge_GameLevel.GameLevelId`;
        break;
      default:
        viewVarSet.sortge_UserBadgeLogBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserBadgeLog4Func(this.thisDivList);
  }
}
