import { ge_StuErrorLib_EditEx } from './ge_StuErrorLib_EditEx';

import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDiv,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ge_StuErrorLibCRUD } from '@/viewsBase/InteractManage/ge_StuErrorLibCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  IdStudentInfo_Static,
} from '@/views/InteractManage/ge_StuErrorLibVueShare';

/* ge_StuErrorLibCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ge_StuErrorLibCRUDEx extends ge_StuErrorLibCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortge_StuErrorLibBy: string = "mId";
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
    this.BindGv_ge_StuErrorLib4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_StuErrorLib':
        alert('该类没有绑定该函数：[this.BindGv_ge_StuErrorLib4Func]！');
        //this.BindGv_ge_StuErrorLib4Func(divVarSet.refDivList);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ge_StuErrorLibCRUDEx;
    if (ge_StuErrorLibCRUD.objPageCRUD == null) {
      ge_StuErrorLibCRUD.objPageCRUD = new ge_StuErrorLibCRUDEx();
      objPage = <ge_StuErrorLibCRUDEx>ge_StuErrorLibCRUD.objPageCRUD;
    } else {
      objPage = <ge_StuErrorLibCRUDEx>ge_StuErrorLibCRUD.objPageCRUD;
    }
    const objPageEdit: ge_StuErrorLib_EditEx = new ge_StuErrorLib_EditEx(
      'ge_StuErrorLib_EditEx',
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
        strMsg = '命令:' + strCommandName + '在函数(ge_StuErrorLibCRUDEx.btn_Click)中没有被处理！';
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
      IdStudentInfo_Static.value = clsPubLocalStorage.idStu;
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortge_StuErrorLibBy = 'courseId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_ge_StuErrorLib4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'questionName|Ex':
        viewVarSet.sortge_StuErrorLibBy = `vQuestionnaire_Sim|questionName ${sortDirection}|ge_StuErrorLib.QuestionId = vQuestionnaire_Sim.QuestionId`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortge_StuErrorLibBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'stuName|Ex':
        viewVarSet.sortge_StuErrorLibBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'sourceTypeName|Ex':
        viewVarSet.sortge_StuErrorLibBy = `SourceType|sourceTypeName ${sortDirection}|ge_StuErrorLib.SourceTypeId = SourceType.SourceTypeId`;
        break;
      default:
        viewVarSet.sortge_StuErrorLibBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_StuErrorLib4Func(this.thisDivList);
  }
}
