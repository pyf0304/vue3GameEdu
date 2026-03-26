import $ from 'jquery';
import tz_ContentAttachment_EditEx from './tz_ContentAttachment_EditEx';

import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { clstz_ContentAttachmentENEx } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { tz_ContentAttachmentCRUD } from '@/viewsBase/ResourceMan/tz_ContentAttachmentCRUD';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  tz_ContentAttachment_DelRecordAsync,
  tz_ContentAttachment_Deltz_ContentAttachmentsAsync,
  tz_ContentAttachment_DownMoveAsync,
  tz_ContentAttachment_GetRecCountByCondAsync,
  tz_ContentAttachment_GoBottomAsync,
  tz_ContentAttachment_GoTopAsync,
  tz_ContentAttachment_ReOrderAsync,
  tz_ContentAttachment_UpMoveAsync,
} from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, confirm_del, SetCkechedItem4KeyIdInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
import { tz_ContentAttachmentEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/ResourceMan/clstz_ContentAttachmentExWApi';
import { message } from '@/utils/myMessage';
import { divVarSet, viewVarSet } from '@/viewsShare/ResourceMan/tz_ContentAttachmentVueShare';
import { divQuestionAttachmentShow } from '@/viewsShare/ResourceMan/tz_ContentAttachmentListVueShare';

// declare function RefreshParent(): void;
declare function layui_Alert(iconKey: string, strMsg: string): void;

/* tz_ContentAttachmentListEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class tz_ContentAttachmentListEx extends tz_ContentAttachmentCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static vuebtn_Click_Parent: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSorttz_ContentAttachmentBy: string = "mId";
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
    switch (strType) {
      case clstz_ContentAttachmentEN._CurrTabName:
        //添加完成要调用重序；
        this.btnReOrder_Click();
        this.BindGv_tz_ContentAttachment4Func(divVarSet.refDivList);
        tz_ContentAttachmentListEx.vuebtn_Click_Parent('RefreshParent', '');
        break;
      default:
        const strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'tz_ContentAttachment':
        alert('该类没有绑定该函数：[this.BindGv_tz_ContentAttachment4Func]！');
        //this.BindGv_tz_ContentAttachment4Func(divVarSet.refDivList);
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
    const objPage: tz_ContentAttachmentListEx = new tz_ContentAttachmentListEx();
    const objPageEdit: tz_ContentAttachment_EditEx = new tz_ContentAttachment_EditEx(
      'tz_ContentAttachment_EditEx',
      objPage,
    );
    let arrKeyIds;
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
        // objPageEdit.questionId = objPage.questionId;
        // objPageEdit.questionOptionId = objPage.questionOptionId;
        // objPageEdit.contentTypeId = objPage.contentTypeId;

        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
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
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
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
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
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
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(tz_ContentAttachmentListEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecord(lngmId: number) {
    try {
      const responseText = await tz_ContentAttachment_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        tz_ContentAttachmentListEx.vuebtn_Click_Parent('RefreshParent', '');
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
  public async DelMultiRecord(arrmId: Array<string>) {
    try {
      const returnInt = await tz_ContentAttachment_Deltz_ContentAttachmentsAsync(arrmId);
      if (returnInt > 0) {
        tz_ContentAttachmentListEx.vuebtn_Click_Parent('RefreshParent', '');
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
重序
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
*/
  public async btnReOrder_Click() {
    if (this.PreCheck4Order() == false) return;
    //获取分类字段问题Id
    const strTableNameKey: string = this.getTableNameKey();

    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        tableNameKey: strTableNameKey,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await tz_ContentAttachment_ReOrderAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已重序');
    await this.BindGv_tz_ContentAttachment4Func(divVarSet.refDivList);
  }

  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    if (this.PreCheck4Order() == false) return;
    const strTableNameKey: string = this.getTableNameKey();
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置底的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        tableNameKey: strTableNameKey,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await tz_ContentAttachment_GoBottomAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `置底出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }

    message.success('已置底');
    await this.BindGv_tz_ContentAttachment4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /*
    移动记录序号时的预检查函数
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
    */
  public PreCheck4Order(): boolean {
    const strTableNameKey: string = this.getTableNameKey();
    if (strTableNameKey == '') {
      const strMsg = `请输入tableNameKey!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    return true;
  }

  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public async btnDownMove_Click() {
    if (this.PreCheck4Order() == false) return;
    const strTableNameKey: string = this.getTableNameKey();
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        tableNameKey: strTableNameKey,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await tz_ContentAttachment_DownMoveAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `下移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }

    message.success('已下移');
    await this.BindGv_tz_ContentAttachment4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /*
    上移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    if (this.PreCheck4Order() == false) return;
    const strTableNameKey: string = this.getTableNameKey();
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        tableNameKey: strTableNameKey,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await tz_ContentAttachment_UpMoveAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `上移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }

    message.success('已上移');
    await this.BindGv_tz_ContentAttachment4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /* 置顶
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
    */
  public async btnGoTop_Click() {
    if (this.PreCheck4Order() == false) return;
    const strTableNameKey: string = this.getTableNameKey();
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置顶的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        tableNameKey: strTableNameKey,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await tz_ContentAttachment_GoTopAsync(objOrderByData);
    } catch (e) {
      const strMsg: string = `置顶出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    message.success('已置顶');
    await this.BindGv_tz_ContentAttachment4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCkechedItem4KeyIdInDivObj(divDataLst, e));
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
*/
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      viewVarSet.sorttz_ContentAttachmentBy = 'orderNum Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_tz_ContentAttachment4Func(divVarSet.refDivList);
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
  public async Combinetz_ContentAttachmentConditionObj(): Promise<clstz_ContentAttachmentEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objtz_ContentAttachment_Cond = new clstz_ContentAttachmentEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.idResourceType_q != "" && this.idResourceType_q != "0") {
      //    strWhereCond += ` And ${clstz_ContentAttachmentEN.con_IdResourceType} = '${this.idResourceType_q}'`;
      //    objtz_ContentAttachment_Cond.SetCondFldValue(clstz_ContentAttachmentEN.con_IdResourceType, this.idResourceType_q, "=");
      //}

      //判断隐藏传递题目ID是否为空，如果不为空，那么则显示该题目相关选项ID；
      if (this.questionId != 0) {
        strWhereCond += ` And ${clstz_ContentAttachmentEN.con_TableNameKey} = '${this.questionId}'`;
        objtz_ContentAttachment_Cond.SetCondFldValue(
          clstz_ContentAttachmentEN.con_TableNameKey,
          this.questionId,
          '=',
        );
      }
      //查询指定附件类型
      if (this.contentTypeId != '') {
        strWhereCond += ` And ${clstz_ContentAttachmentEN.con_ContentTypeId} = '${this.contentTypeId}'`;
        objtz_ContentAttachment_Cond.SetCondFldValue(
          clstz_ContentAttachmentEN.con_ContentTypeId,
          this.contentTypeId,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinetz_ContentAttachmentConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objtz_ContentAttachment_Cond.whereCond = strWhereCond;
    return objtz_ContentAttachment_Cond;
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async Combinetz_ContentAttachmentCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.idResourceType_q != "" && this.idResourceType_q != "0") {
      //    strWhereCond += ` And ${clstz_ContentAttachmentEN.con_IdResourceType} = '${this.idResourceType_q}'`;
      //}
      //判断隐藏传递题目ID是否为空，如果不为空，那么则显示该题目相关选项ID；
      switch (this.contentTypeId) {
        case '0001': //题目Question
          if (this.questionId != 0) {
            strWhereCond += ` And ${clstz_ContentAttachmentEN.con_TableNameKey} = '${this.questionId}'`;
            // objtz_ContentAttachment_Cond.SetCondFldValue(clstz_ContentAttachmentEN.con_TableNameKey, this.questionId, "=");
          }
          break;
        case '0006': //题目QuestionOption
          if (this.questionOptionId != '') {
            strWhereCond += ` And ${clstz_ContentAttachmentEN.con_TableNameKey} = '${this.questionOptionId}'`;
            // objtz_ContentAttachment_Cond.SetCondFldValue(clstz_ContentAttachmentEN.con_TableNameKey, this.questionId, "=");
          }
          break;
      }
      //查询指定附件类型
      if (this.contentTypeId != '') {
        strWhereCond += ` And ${clstz_ContentAttachmentEN.con_ContentTypeId} = '${this.contentTypeId}'`;
        //  objtz_ContentAttachment_Cond.SetCondFldValue(clstz_ContentAttachmentEN.con_ContentTypeId, this.contentTypeId, "=");
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0009)在组合查询条件(Combinetz_ContentAttachmentCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
*/
  public async BindGv_tz_ContentAttachment4Func(divList: HTMLDivElement) {
    if (viewVarSet.sorttz_ContentAttachmentBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSorttz_ContentAttachmentBy)为空，请检查！(In BindGv_tz_ContentAttachment_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    // const objtz_ContentAttachment_Cond = await this.Combinetz_ContentAttachmentConditionObj();
    // objtz_ContentAttachment_Cond.SetCondFldValue(
    //   clstz_ContentAttachmentEN.con_CourseId,
    //   CourseId_Cache.value,
    //   '=',
    // );
    //const strWhereCond = JSON.stringify(objtz_ContentAttachmentEN_Sim);
    const strWhereCond = await this.Combinetz_ContentAttachmentCondition();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //const arrtz_ContentAttachmentObjLst: Array<clstz_ContentAttachmentEN> = [];
    let arrtz_ContentAttachmentExObjLst: Array<clstz_ContentAttachmentENEx> = [];
    try {
      this.recCount = await tz_ContentAttachment_GetRecCountByCondAsync(strWhereCond);

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sorttz_ContentAttachmentBy,
        sortFun: (x, y) => {
          return 0;
        },
      };

      arrtz_ContentAttachmentExObjLst = await tz_ContentAttachmentEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
      //arrtz_ContentAttachmentExObjLst = arrtz_ContentAttachmentObjLst.map(this.CopyToEx);
      //for (const objInFor of arrtz_ContentAttachmentExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrtz_ContentAttachmentExObjLst.length == 0) {
      const strKey: string = `${clstz_ContentAttachmentEN._CurrTabName}_`;
      const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      //绑定列表
      this.BindTab_tz_ContentAttachment4Func(divList, arrtz_ContentAttachmentExObjLst);
      //绑定详细
      divQuestionAttachmentShow.value.innerHTML = '';
      const strHtml = await this.BindList_tz_ContentAttachmentEx(arrtz_ContentAttachmentExObjLst);
      // $('#QuestionAttachmentShow').html(strHtml);
      divQuestionAttachmentShow.value.innerHTML = strHtml;
      console.log('完成BindGv_tz_ContentAttachment4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 显示tz_ContentAttachment对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrtz_ContentAttachmentExObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_tz_ContentAttachment4Func(
    divContainer: HTMLDivElement,
    arrtz_ContentAttachmentExObjLst: Array<clstz_ContentAttachmentENEx>,
  ) {
    const strThisFuncName = this.BindTab_tz_ContentAttachment4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');

    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'orderNum',
        sortBy: 'orderNum',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: clstz_ContentAttachmentENEx.con_AttachmentTitle,
        sortBy: clstz_ContentAttachmentENEx.con_AttachmentTitle,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '附件标题',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: clstz_ContentAttachmentENEx.con_ResourceTypeName,
        sortBy: clstz_ContentAttachmentENEx.con_ResourceTypeName,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '资源类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: clstz_ContentAttachmentENEx.con_FileName,
        sortBy: clstz_ContentAttachmentENEx.con_FileName,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '文件名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clstz_ContentAttachmentEN.con_Extension,
        sortBy: clstz_ContentAttachmentEN.con_Extension,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '扩展名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'filePath',
        sortBy: 'filePath',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '文件路径',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'courseName',
        sortBy: 'courseName',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '课程名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },

      // {
      //   fldName: clstz_ContentAttachmentEN.con_UploadDate,
      //   sortBy: clstz_ContentAttachmentEN.con_UploadDate,
      //   getDataSource: '',
      //   sortFun: clsPubVar4Web.SortFun,
      //   colHeader: '上传时间',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 8,
      //   funcName: () => {},
      // },
      {
        fldName: clstz_ContentAttachmentEN.con_UploadPerson,
        sortBy: clstz_ContentAttachmentEN.con_UploadPerson,
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '上传人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: () => {},
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrtz_ContentAttachmentExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(divDataLst, arrtz_ContentAttachmentExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  //多附件展示
  private async BindList_tz_ContentAttachmentEx(
    arrtz_ContentAttachmentExObjLst: Array<clstz_ContentAttachmentENEx>,
  ): Promise<string> {
    const strAddressAndPort = `${clsSysPara4WebApi.CurrIPAddressAndPort_LocalPic}/${clsSysPara4WebApi.CurrPrx_Local}/`;

    //const strid_CurrEducls = clsPubLocalStorage.idCurrEduCls;
    const strCourseId = clsPubLocalStorage.courseId;
    //const strUserId = userStore.userId;
    //const strRoleId = userStore.getRoleId;

    //换行符
    // const strBr = '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

    let strhtml: string = '';
    let strTitle = '';

    strTitle = '附件详情';
    strhtml += '<div class="info" id="infoViewpoint">';
    strhtml += '<div class="title btn-3">';
    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="' +
      strTitle +
      '">' +
      strTitle +
      '</a></div>';
    strhtml += '<div style="float:right; margin-right:20px;"></div>';
    strhtml += '</div>';

    strhtml += '<ul class="artlist">';

    ////换行符
    const strBr =
      '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrtz_ContentAttachmentExObjLst.length; i++) {
      v++;
      //得到附件信息；
      const strFilePath = arrtz_ContentAttachmentExObjLst[i].filePath; //图片路径
      let strTextContent = arrtz_ContentAttachmentExObjLst[i].textContent; //内容
      if (strTextContent != null) {
        strTextContent = strTextContent.replace(/\r\n/g, strBr);
        strTextContent = strTextContent.replace(/\n/g, strBr);
      }
      const stridResourceType = arrtz_ContentAttachmentExObjLst[i].idResourceType; //附件类型

      //附件

      if (stridResourceType == '0004') {
        const strAddressAndPortfull = strAddressAndPort + strFilePath;
        strhtml +=
          '<li><div class="example"><img style="max-width:500px; margin-left: 10px; " src="' +
          strAddressAndPortfull +
          '"  alt="" data-action="zoom" /></div></li>';
      } else if (stridResourceType == '0010' || stridResourceType == '0011') {
        strhtml += '<li><pre><div class="example">' + strTextContent + '</div></pre></li>';
      } else if (stridResourceType == '0015') {
        //源代码

        strhtml += '<li><div class="example"><pre>';
        strhtml +=
          '<textarea id="ContentHtmlCode" rows="9" cols="100" style="background-color:lightgray;" disabled="disabled" >' +
          strTextContent +
          '</textarea></pre>';
        strhtml += '</div></li>';
      } else {
      }

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';

    return strhtml;
  }

  /*
   * 类容类型
   */

  public get contentTypeId(): string {
    const strQuestionId = tz_ContentAttachmentListEx.GetPropValue('contentTypeId');
    return strQuestionId;
  }

  /*
   * 存放题目ID
   */
  public get questionId(): number {
    const strQuestionId = Number(tz_ContentAttachmentListEx.GetPropValue('questionId'));
    return strQuestionId;
  }

  public get questionOptionId() {
    const strQuestionOptionId = tz_ContentAttachmentListEx.GetPropValue('questionOptionId');
    return strQuestionOptionId;
  }
  public getTableNameKey(): string {
    switch (this.contentTypeId) {
      case '0001': //题目Question
        return this.questionId.toString();
      case '0006': //题目QuestionOption
        return this.questionOptionId;
      default:
        const strMsg = Format(
          '内容类型(contentTypeId):{0}在btnSubmit_Click函数的switch中没有被处理！',
          this.contentTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return '';
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'resourceTypeName|Ex':
        viewVarSet.sorttz_ContentAttachmentBy = `ResourceType|resourceTypeName ${sortDirection}|tz_ContentAttachment.IdResourceType = ResourceType.IdResourceType`;
        break;
      case 'courseName|Ex':
        viewVarSet.sorttz_ContentAttachmentBy = `vcc_Course_Sim|courseName ${sortDirection}|tz_ContentAttachment.CourseId = vcc_Course_Sim.CourseId`;
        break;
      default:
        viewVarSet.sorttz_ContentAttachmentBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_tz_ContentAttachment4Func(this.thisDivList);
  }
}
