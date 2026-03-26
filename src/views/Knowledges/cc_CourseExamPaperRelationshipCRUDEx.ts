import { cc_CourseExamPaperRelationship_EditEx } from './cc_CourseExamPaperRelationship_EditEx';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { cc_CourseExamPaperRelationshipCRUD } from '@/viewsBase/Knowledges/cc_CourseExamPaperRelationshipCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  cc_CourseExamPaperRelationship_Delcc_CourseExamPaperRelationshipsAsync,
  cc_CourseExamPaperRelationship_DelRecordAsync,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperRelationshipWApi';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDiv,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clscc_CourseExamPaperRelationshipEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperRelationshipEN';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  qryVarSet,
} from '@/views/Knowledges/cc_CourseExamPaperRelationshipVueShare';
declare function ShowDialog_cc_CourseExamPaperRelationship(strOpType: string): void;
declare function HideDialog_cc_CourseExamPaperRelationship(): void;

/* cc_CourseExamPaperRelationshipCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class cc_CourseExamPaperRelationshipCRUDEx
  extends cc_CourseExamPaperRelationshipCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortcc_CourseExamPaperRelationshipBy: string = "mId";
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
    this.BindGv_cc_CourseExamPaperRelationship4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'cc_CourseExamPaperRelationship':
        alert('该类没有绑定该函数：[this.BindGv_cc_CourseExamPaperRelationship_Cache]！');
        //this.BindGv_cc_CourseExamPaperRelationshipCache();
        break;
    }
  }
  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecord(lngmId: number) {
    try {
      const responseText = await cc_CourseExamPaperRelationship_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
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
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据关键字列表删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
*/
  public async DelMultiRecord(arrmId: Array<string>) {
    try {
      const responseText =
        await cc_CourseExamPaperRelationship_Delcc_CourseExamPaperRelationshipsAsync(arrmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
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
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: cc_CourseExamPaperRelationshipCRUDEx;
    if (cc_CourseExamPaperRelationshipCRUD.objPageCRUD == null) {
      cc_CourseExamPaperRelationshipCRUD.objPageCRUD = new cc_CourseExamPaperRelationshipCRUDEx();
      objPage = <cc_CourseExamPaperRelationshipCRUDEx>(
        cc_CourseExamPaperRelationshipCRUD.objPageCRUD
      );
    } else {
      objPage = <cc_CourseExamPaperRelationshipCRUDEx>(
        cc_CourseExamPaperRelationshipCRUD.objPageCRUD
      );
    }
    const objPageEdit: cc_CourseExamPaperRelationship_EditEx =
      new cc_CourseExamPaperRelationship_EditEx('cc_CourseExamPaperRelationship_EditEx', objPage);
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
          '命令:' +
          strCommandName +
          '在函数(cc_CourseExamPaperRelationshipCRUDEx.btn_Click)中没有被处理！';
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
      this.InitVarSet();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortcc_CourseExamPaperRelationshipBy = 'courseExamPaperId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_CourseExamPaperRelationship4Func(divVarSet.refDivList);
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
  public async Combinecc_CourseExamPaperRelationshipCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = Format(
      " {0} = '{1}' ",
      clscc_CourseExamPaperRelationshipEN.con_CourseId,
      clsPubLocalStorage.courseId,
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      // if (this.courseId_q != '' && this.courseId_q != '0') {
      //   strWhereCond += Format(
      //     " And {0} = '{1}'",
      //     clscc_CourseExamPaperRelationshipEN.con_CourseId,
      //     this.courseId_q,
      //   );
      // }
      if (qryVarSet.userId_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clscc_CourseExamPaperRelationshipEN.con_UserId,
          qryVarSet.userId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(Combinecc_CourseExamPaperRelationshipCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'examPaperName|Ex':
        viewVarSet.sortcc_CourseExamPaperRelationshipBy = `cc_CourseExamPaper|examPaperName ${sortDirection}|cc_CourseExamPaperRelationship.CourseExamPaperId = cc_CourseExamPaper.CourseExamPaperId`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortcc_CourseExamPaperRelationshipBy = `vcc_Course_Sim|courseName ${sortDirection}|cc_CourseExamPaperRelationship.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'questionName|Ex':
        viewVarSet.sortcc_CourseExamPaperRelationshipBy = `vQuestionnaire_Sim|questionName ${sortDirection}|cc_CourseExamPaperRelationship.QuestionId = vQuestionnaire_Sim.QuestionId`;
        break;
      default:
        viewVarSet.sortcc_CourseExamPaperRelationshipBy = Format(
          '{0} {1}',
          sortColumnKey,
          sortDirection,
        );
        break;
    }
    await this.BindGv_cc_CourseExamPaperRelationship4Func(this.thisDivList);
  }
}
