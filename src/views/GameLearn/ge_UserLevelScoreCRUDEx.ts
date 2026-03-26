/**
* 类名:ge_UserLevelScoreCRUDEx(界面:ge_UserLevelScoreCRUD)
* 表名:ge_UserLevelScore(01120942)
* 版本:2022.12.23.1(服务器:WIN-SRV103-116)
* 日期:2022/12/30 17:21:26
* 生成者:
工程名称:问卷调查(0112)
CM工程:游戏化教育平台(变量首字母小写)-全部函数集
* 相关数据库:103.116.76.183,9433EduHigh_Jsie
* PrjDataBaseId:0170
* 模块中文名:游戏化学习(GameLearn)
* 框架-层名:WA_界面后台Ex_TS(TS)(WA_ViewScriptCSEx_TS)
* 编程语言:TypeScript
**/
import { ge_UserLevelScoreCRUD } from '@/viewsBase/GameLearn/ge_UserLevelScoreCRUD';
import { ge_UserLevelScore_EditEx } from './ge_UserLevelScore_EditEx';
import {
  GetCheckedKeyLstsInDiv,
  GetFirstCheckedKeyLstInDiv,
  GetFirstCheckedKeyLstInDivObj,
  GetSelectObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  ge_UserLevelScore_ReFreshCache,
  ge_UserLevelScore_SplitKeyLst,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  BindDdl_TrueAndFalseInDiv,
  BindDdl_TrueAndFalseInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { ge_UserLevelScore_Edit } from '@/viewsBase/GameLearn/ge_UserLevelScore_Edit';
import { clsge_UserLevelScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN';
import { ge_UserCreditsTtlEx_CalcCreditTtl } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsTtlExWApi';

import { useUserStore } from '@/store/modulesShare/user';
import { CurrEduClsStuEx_BindDdl_IdStuByIdCurrEduClsInDivExCache } from 'share-stu-study-base-lib';
import { ge_UserLevelScoreEx_CalcUserLevelScore } from '@/ts/L3ForWApiEx/GameLearn/clsge_UserLevelScoreExWApi';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  IdCurrEduCls_Session,
  qryVarSet,
} from '@/views/GameLearn/ge_UserLevelScoreVueShare';
//import $ from "jquery";
/** ge_UserLevelScoreCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class ge_UserLevelScoreCRUDEx extends ge_UserLevelScoreCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortge_UserLevelScoreBy = "GameLevelId";
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
    IdCurrEduCls_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    this.BindGv_ge_UserLevelScore4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'ge_UserLevelScore':
        alert('该类没有绑定该函数：[this.BindGv_ge_UserLevelScore4Func]！');
        //this.BindGv_ge_UserLevelScore4Func(divVarSet.refDivList);
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
    let objPage: ge_UserLevelScoreCRUDEx;
    if (ge_UserLevelScoreCRUD.objPageCRUD == null) {
      ge_UserLevelScoreCRUD.objPageCRUD = new ge_UserLevelScoreCRUDEx();
      objPage = <ge_UserLevelScoreCRUDEx>ge_UserLevelScoreCRUD.objPageCRUD;
    } else {
      objPage = <ge_UserLevelScoreCRUDEx>ge_UserLevelScoreCRUD.objPageCRUD;
    }
    const objPageEdit: ge_UserLevelScore_EditEx = new ge_UserLevelScore_EditEx(
      'ge_UserLevelScore_EditEx',
      objPage,
    );
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDiv(objPage.divName4DataList);
    let objKeyLst;
    let strKeyLst = '';
    switch (strCommandName) {
      case 'CalcUserLevelScore': //查询记录
        objPage.btnCalcUserLevelScore_Click();
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
        strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        objKeyLst = ge_UserLevelScore_SplitKeyLst(strKeyLst);
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(
            objKeyLst.idCurrEduCls,
            objKeyLst.gameLevelId,
            objKeyLst.userId,
          );
        } else {
          objPageEdit.btnUpdateRecord_Click(
            objKeyLst.idCurrEduCls,
            objKeyLst.gameLevelId,
            objKeyLst.userId,
          );
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyLsts.length == 0) {
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
        if (arrKeyLsts.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objKeyLst = ge_UserLevelScore_SplitKeyLst(strKeyId);
        objPage.btnDelRecordInTab_Click(
          objKeyLst.idCurrEduCls,
          objKeyLst.gameLevelId,
          objKeyLst.userId,
        );
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyLsts.length == 0) {
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
          '命令:' + strCommandName + '在函数(ge_UserLevelScoreCRUDExEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const strThisFuncName = this.BindDdl4QueryRegion.name;
    // 在此处放置用户代码以初始化页面
    const strCourseId = CourseId_Session.value;
    const strid_CurrEduCls = clsPubLocalStorage.idCurrEduCls;

    // await this.SetDdl_GameLevelIdInDiv(strCourseId); //查询区域

    await this.SetDdl_UserIdInDivEx(strid_CurrEduCls); //查询区域

    BindDdl_TrueAndFalseInDivObj(this.thisDivLayout, 'ddlbPassed_q');
  }
  public async SetDdl_UserIdInDivEx(strid_CurrEduCls: string) {
    await CurrEduClsStuEx_BindDdl_IdStuByIdCurrEduClsInDivExCache(
      divVarSet.refDivQuery,
      'ddlUserId_q',
      strid_CurrEduCls,
    ); //
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      this.InitVarSet();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      // 为查询区绑定下拉框
      const gvBindDdl = await this.BindDdl4QueryRegion();

      viewVarSet.sortge_UserLevelScoreBy = 'userId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_UserLevelScore4Func(divVarSet.refDivList);
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

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinege_UserLevelScoreCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " 1 = 1 and {0}='{1}'",
      clsge_UserLevelScoreEN.con_IdCurrEduCls,
      clsPubLocalStorage.idCurrEduCls,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (qryVarSet.gameLevelId_q != '' && qryVarSet.gameLevelId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_UserLevelScoreEN.con_GameLevelId,
          qryVarSet.gameLevelId_q,
        );
      }
      if (qryVarSet.userId_q != '' && qryVarSet.userId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsge_UserLevelScoreEN.con_UserId,
          qryVarSet.userId_q,
        );
      }
      if (GetSelectObjInDivObj(this.thisDivLayout, 'ddlbPassed_q').selectedIndex == 1) {
        strWhereCond += Format(" And {0} = '1'", clsge_UserLevelScoreEN.con_Passed);
      } else if (GetSelectObjInDivObj(this.thisDivLayout, 'ddlbPassed_q').selectedIndex == 2) {
        strWhereCond += Format(" And {0} = '0'", clsge_UserLevelScoreEN.con_Passed);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(Combinege_UserLevelScoreCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnCalcUserLevelScore_Click() {
    const strThisFuncName = this.btnCalcUserLevelScore_Click.name;
    try {
      const userStore = useUserStore();
      const bolReturn = await ge_UserLevelScoreEx_CalcUserLevelScore(
        clsPubLocalStorage.idCurrEduCls,
        userStore.userId,
      );
      if (bolReturn == false) {
        alert('计算用户关卡积分不成功！');
        return '';
      } else {
        alert('计算用户关卡积分成功！');
        ge_UserLevelScore_ReFreshCache(clsPubLocalStorage.idCurrEduCls);
      }
      await this.BindGv_ge_UserLevelScore4Func(divVarSet.refDivList);
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
      case 'gameLevelName|Ex':
        viewVarSet.sortge_UserLevelScoreBy = `ge_GameLevel|gameLevelName ${sortDirection}|ge_UserLevelScore.GameLevelId = ge_GameLevel.GameLevelId`;
        break;
      case 'userName|Ex':
        viewVarSet.sortge_UserLevelScoreBy = `vUsersSim|userName ${sortDirection}|ge_UserLevelScore.UserId = vUsersSim.UserId`;
        break;
      default:
        viewVarSet.sortge_UserLevelScoreBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserLevelScore4Func(this.thisDivList);
  }
}
