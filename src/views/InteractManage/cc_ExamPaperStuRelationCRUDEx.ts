import { cc_ExamPaperStuRelation_EditEx } from './cc_ExamPaperStuRelation_EditEx';

import { GetCheckedKeyIdsInDiv, GetCheckedKeyIdsInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { cc_ExamPaperStuRelationCRUD } from '@/viewsBase/InteractManage/cc_ExamPaperStuRelationCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clscc_ExamPaperStuRelationEN } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { cc_ExamPaperStuRelation_Edit } from '@/viewsBase/InteractManage/cc_ExamPaperStuRelation_Edit';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  IdCurrEduCls_Session,
  qryVarSet,
} from '@/views/InteractManage/cc_ExamPaperStuRelationVueShare';

declare function ShowDialog_cc_ExamPaperStuRelation(strOpType: string): void;
declare function HideDialog_cc_ExamPaperStuRelation(): void;

/* cc_ExamPaperStuRelationCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class cc_ExamPaperStuRelationCRUDEx
  extends cc_ExamPaperStuRelationCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortcc_ExamPaperStuRelationBy: string = "Id_ExamPaperStuRelation";
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
    IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string) {
    this.BindGv_cc_ExamPaperStuRelation4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'cc_ExamPaperStuRelation':
        alert('该类没有绑定该函数：[this.BindGv_cc_ExamPaperStuRelation_Cache]！');
        //this.BindGv_cc_ExamPaperStuRelationCache();
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: cc_ExamPaperStuRelationCRUDEx;
    if (cc_ExamPaperStuRelationCRUD.objPageCRUD == null) {
      cc_ExamPaperStuRelationCRUD.objPageCRUD = new cc_ExamPaperStuRelationCRUDEx();
      objPage = <cc_ExamPaperStuRelationCRUDEx>cc_ExamPaperStuRelationCRUD.objPageCRUD;
    } else {
      objPage = <cc_ExamPaperStuRelationCRUDEx>cc_ExamPaperStuRelationCRUD.objPageCRUD;
    }
    const objPageEdit: cc_ExamPaperStuRelation_EditEx = new cc_ExamPaperStuRelation_EditEx(
      'cc_ExamPaperStuRelation_EditEx',
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
        //objPageEdit.btnUpdateRecord_Click();
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
          '在函数(cc_ExamPaperStuRelationCRUDEx.btn_Click)中没有被处理！';
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
      this.InitVarSet();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortcc_ExamPaperStuRelationBy = 'courseExamPaperId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_ExamPaperStuRelation4Func(divVarSet.refDivList);
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
  public async Combinecc_ExamPaperStuRelationCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " {0} = '{1}' ",
      clscc_ExamPaperStuRelationEN.con_IdCurrEduCls,
      clsPubLocalStorage.idCurrEduCls,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (qryVarSet.idCurrEduCls_q != '' && qryVarSet.idCurrEduCls_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_ExamPaperStuRelationEN.con_IdCurrEduCls,
          qryVarSet.idCurrEduCls_q,
        );
      }
      if (qryVarSet.schoolYear_q != '' && qryVarSet.schoolYear_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_ExamPaperStuRelationEN.con_SchoolYear,
          qryVarSet.schoolYear_q,
        );
      }
      if (qryVarSet.schoolTerm_q != '' && qryVarSet.schoolTerm_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_ExamPaperStuRelationEN.con_SchoolTerm,
          qryVarSet.schoolTerm_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(Combinecc_ExamPaperStuRelationCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'eduClsName|Ex':
        viewVarSet.sortcc_ExamPaperStuRelationBy = `CurrEduCls|eduClsName ${sortDirection}|cc_ExamPaperStuRelation.IdCurrEduCls = CurrEduCls.IdCurrEduCls`;
        break;
      default:
        viewVarSet.sortcc_ExamPaperStuRelationBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_cc_ExamPaperStuRelation4Func(this.thisDivList);
  }
}
