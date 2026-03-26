/**
 * 类名:cc_KnowledgeStuTeachLogCRUDEx(界面:cc_KnowledgeStuTeachLogCRUD,01120255)
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2024.11.10.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/11 00:08:59
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { cc_KnowledgeStuTeachLogCRUD } from '@/viewsBase/Knowledges/cc_KnowledgeStuTeachLogCRUD';
import {
  viewVarSet,
  divVarSet,
  refcc_KnowledgeStuTeachLog_Edit,
  refcc_KnowledgeStuTeachLog_Detail,
} from '@/views/Knowledges/cc_KnowledgeStuTeachLogVueShare';
import { Format } from '@/ts/PubFun/clsString';
import { cc_KnowledgeStuTeachLog_EditEx } from '@/views/Knowledges/cc_KnowledgeStuTeachLog_EditEx';
import {
  GetCheckedKeyLstsInDivObj,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** cc_KnowledgeStuTeachLogCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class cc_KnowledgeStuTeachLogCRUDEx
  extends cc_KnowledgeStuTeachLogCRUD
  implements IShowList
{
  //public static mstrSortcc_KnowledgeStuTeachLogBy = "IdStudentInfo";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in cc_KnowledgeStuTeachLogCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in cc_KnowledgeStuTeachLogCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_cc_KnowledgeStuTeachLog4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'cc_KnowledgeStuTeachLog':
        alert('该类没有绑定该函数：[this.BindGv_cc_KnowledgeStuTeachLog4Func]!');
        //this.BindGv_cc_KnowledgeStuTeachLog4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: cc_KnowledgeStuTeachLogCRUDEx;
    let objPageEdit;
    if (cc_KnowledgeStuTeachLogCRUD.objPageCRUD == null) {
      cc_KnowledgeStuTeachLogCRUD.objPageCRUD = new cc_KnowledgeStuTeachLogCRUDEx();
      objPage = <cc_KnowledgeStuTeachLogCRUDEx>cc_KnowledgeStuTeachLogCRUDEx.objPageCRUD;
    } else {
      objPage = <cc_KnowledgeStuTeachLogCRUDEx>cc_KnowledgeStuTeachLogCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
    let strKeyLst = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new cc_KnowledgeStuTeachLog_EditEx('cc_KnowledgeStuTeachLog_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refcc_KnowledgeStuTeachLog_Edit.value.btncc_KnowledgeStuTeachLog_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'Detail': //详细信息
        refcc_KnowledgeStuTeachLog_Detail.value.btncc_KnowledgeStuTeachLog_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new cc_KnowledgeStuTeachLog_EditEx('cc_KnowledgeStuTeachLog_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        if (strKeyLst == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyLst},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refcc_KnowledgeStuTeachLog_Edit.value.btncc_KnowledgeStuTeachLog_Edit_Click(
          strCommandName,
          strKeyLst,
        );
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyLsts.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(cc_KnowledgeStuTeachLogCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'questionName|Ex':
        viewVarSet.sortcc_KnowledgeStuTeachLogBy = `vQuestionnaire_Sim|QuestionName ${sortDirection}|cc_KnowledgeStuTeachLog.QuestionId = vQuestionnaire_Sim.QuestionId`;
        break;
      case 'stuId|Ex':
        viewVarSet.sortcc_KnowledgeStuTeachLogBy = `vStudentInfo_Sim|StuId ${sortDirection}|cc_KnowledgeStuTeachLog.IdStudentInfo = vStudentInfo_Sim.IdStudentInfo`;
        break;
      case 'stuName|Ex':
        viewVarSet.sortcc_KnowledgeStuTeachLogBy = `vStudentInfo_Sim|StuName ${sortDirection}|cc_KnowledgeStuTeachLog.IdStudentInfo = vStudentInfo_Sim.IdStudentInfo`;
        break;
      default:
        viewVarSet.sortcc_KnowledgeStuTeachLogBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_cc_KnowledgeStuTeachLog4Func(divVarSet.refDivList);
  }
}
