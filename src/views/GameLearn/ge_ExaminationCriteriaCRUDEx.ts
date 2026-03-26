import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { IShowList } from '@/ts/PubFun/IShowList';
import {
  ge_ExaminationCriteria_Delge_ExaminationCriteriasAsync,
  ge_ExaminationCriteria_DelRecordAsync,
  ge_ExaminationCriteria_ReFreshCache,
} from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDiv,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
import { ge_ExaminationCriteriaCRUD } from '@/viewsBase/GameLearn/ge_ExaminationCriteriaCRUD';
import { clsge_ExaminationCriteriaEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN';
import { ge_ExaminationCriteria_EditEx } from '@/views/GameLearn/ge_ExaminationCriteria_EditEx';
import { divVarSet, viewVarSet, qryVarSet } from '@/views/GameLearn/ge_ExaminationCriteriaVueShare';

/* ge_ExaminationCriteriaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ge_ExaminationCriteriaCRUDEx extends ge_ExaminationCriteriaCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortge_ExaminationCriteriaBy: string = "criteriaId";
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
    ge_ExaminationCriteria_ReFreshCache(clsPubLocalStorage.courseId);
    this.BindGv_ge_ExaminationCriteria4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_ExaminationCriteria':
        alert('该类没有绑定该函数：[this.BindGv_ge_ExaminationCriteria4Func]！');
        //this.BindGv_ge_ExaminationCriteria4Func(divVarSet.refDivList);
        break;
      default:
        const strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /* 
  根据关键字删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
 */
  public async DelRecord(strCriteriaId: string) {
    try {
      const responseText = await ge_ExaminationCriteria_DelRecordAsync(strCriteriaId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        ge_ExaminationCriteria_ReFreshCache(clsPubLocalStorage.courseId);
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
  public async DelMultiRecord(arrCriteriaId: Array<string>) {
    try {
      const responseText = await ge_ExaminationCriteria_Delge_ExaminationCriteriasAsync(
        arrCriteriaId,
      );
      const returnInt: number = responseText;
      if (returnInt > 0) {
        ge_ExaminationCriteria_ReFreshCache(clsPubLocalStorage.courseId);
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
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_ExaminationCriteriaCRUDEx;
    if (ge_ExaminationCriteriaCRUD.objPageCRUD == null) {
      ge_ExaminationCriteriaCRUD.objPageCRUD = new ge_ExaminationCriteriaCRUDEx();
      objPage = <ge_ExaminationCriteriaCRUDEx>ge_ExaminationCriteriaCRUD.objPageCRUD;
    } else {
      objPage = <ge_ExaminationCriteriaCRUDEx>ge_ExaminationCriteriaCRUD.objPageCRUD;
    }
    const objPageEdit: ge_ExaminationCriteria_EditEx = new ge_ExaminationCriteria_EditEx(
      'ge_ExaminationCriteria_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecordWithMaxId_Click();
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
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
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
          '命令:' + strCommandName + '在函数(ge_ExaminationCriteriaCRUDEx.btn_Click)中没有被处理！';
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
      // 为查询区绑定下拉框

      viewVarSet.sortge_ExaminationCriteriaBy = 'questionId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_ExaminationCriteria4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
 <returns>条件串(strWhereCond)</returns>
*/
  public async Combinege_ExaminationCriteriaConditionObj(): Promise<clsge_ExaminationCriteriaEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objge_ExaminationCriteria_Cond: clsge_ExaminationCriteriaEN =
      new clsge_ExaminationCriteriaEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.controlTypeId_q != '' && qryVarSet.controlTypeId_q != '0') {
        strWhereCond += ` And ${clsge_ExaminationCriteriaEN.con_ControlTypeId} = '${qryVarSet.controlTypeId_q}'`;
        objge_ExaminationCriteria_Cond.SetCondFldValue(
          clsge_ExaminationCriteriaEN.con_ControlTypeId,
          qryVarSet.controlTypeId_q,
          '=',
        );
      }
      if (qryVarSet.eventTypeId_q != '' && qryVarSet.eventTypeId_q != '0') {
        strWhereCond += ` And ${clsge_ExaminationCriteriaEN.con_EventTypeId} = '${qryVarSet.eventTypeId_q}'`;
        objge_ExaminationCriteria_Cond.SetCondFldValue(
          clsge_ExaminationCriteriaEN.con_EventTypeId,
          qryVarSet.eventTypeId_q,
          '=',
        );
      }
      //查询当前题目
      //判断隐藏传递题目ID是否为空，如果不为空，那么则显示该题目相关选项ID；
      if (this.strQuestionId != '') {
        strWhereCond += ` And ${clsge_ExaminationCriteriaEN.con_QuestionId} = '${this.strQuestionId}'`;
        objge_ExaminationCriteria_Cond.SetCondFldValue(
          clsge_ExaminationCriteriaEN.con_QuestionId,
          this.strQuestionId,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinege_ExaminationCriteriaConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objge_ExaminationCriteria_Cond.whereCond = strWhereCond;
    return objge_ExaminationCriteria_Cond;
  }

  public set strQuestionId(value: string) {
    $('#hidQuestionId').val(value);
  }
  /*
   * 存放题目ID
   */
  public get strQuestionId(): string {
    return GetInputValueInDivObj(divVarSet.refDivLayout, 'hidQuestionId');
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'questionName|Ex':
        viewVarSet.sortge_ExaminationCriteriaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'courseName|Ex':
        viewVarSet.sortge_ExaminationCriteriaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'controlTypeName|Ex':
        viewVarSet.sortge_ExaminationCriteriaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'eventTypeName|Ex':
        viewVarSet.sortge_ExaminationCriteriaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'typeDescribe|Ex':
        viewVarSet.sortge_ExaminationCriteriaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortge_ExaminationCriteriaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_ExaminationCriteria4Func(this.thisDivList);
  }
}
