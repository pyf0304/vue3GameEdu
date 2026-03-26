/**
 * 类名:ge_KnowledgesClsMasterCRUDEx(界面:ge_KnowledgesClsMasterCRUD)
 * 表名:ge_KnowledgesClsMaster(01120962)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/12 00:50:08
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { ge_KnowledgesClsMasterCRUD } from '@/viewsBase/Knowledges/ge_KnowledgesClsMasterCRUD';
import { ge_KnowledgesClsMaster_EditEx } from '@/views/Knowledges/ge_KnowledgesClsMaster_EditEx';
import {
  GetCheckedKeyLstsInDiv,
  GetCheckedKeyLstsInDivObj,
  GetFirstCheckedKeyLstInDiv,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { ge_KnowledgesClsMaster_SplitKeyLst } from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesClsMasterWApi';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  refge_KnowledgesClsMaster_Detail,
  refge_KnowledgesClsMaster_Edit,
  divVarSet,
  viewVarSet,
} from '@/views/Knowledges/ge_KnowledgesClsMasterVueShare';
import { Format } from '@/ts/PubFun/clsString';
/** ge_KnowledgesClsMasterCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class ge_KnowledgesClsMasterCRUDEx extends ge_KnowledgesClsMasterCRUD implements IShowList {
  //public static mstrSortge_KnowledgesClsMasterBy = "IdCurrEduCls";
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
    console.log('InitVarSet in ge_KnowledgesClsMasterCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ge_KnowledgesClsMasterCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_ge_KnowledgesClsMaster4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ge_KnowledgesClsMaster':
        alert('该类没有绑定该函数：[this.BindGv_ge_KnowledgesClsMaster4Func]!');
        //this.BindGv_ge_KnowledgesClsMaster4Func(divVarSet.refDivList);
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
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: ge_KnowledgesClsMasterCRUDEx;
    let objPageEdit;
    if (ge_KnowledgesClsMasterCRUD.objPageCRUD == null) {
      ge_KnowledgesClsMasterCRUD.objPageCRUD = new ge_KnowledgesClsMasterCRUDEx();
      objPage = <ge_KnowledgesClsMasterCRUDEx>ge_KnowledgesClsMasterCRUD.objPageCRUD;
    } else {
      objPage = <ge_KnowledgesClsMasterCRUDEx>ge_KnowledgesClsMasterCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
    let objKeyLst;
    let strKeyLst = '';
    switch (strCommandName) {
      case 'CalcClsMasteryValue': //自定义功能:计算班知识点掌握度
        break;
      case 'SetMasteryValue': //自定义功能:设置掌握度
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new ge_KnowledgesClsMaster_EditEx('ge_KnowledgesClsMaster_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refge_KnowledgesClsMaster_Edit.value.btnge_KnowledgesClsMaster_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'Detail': //详细信息
        refge_KnowledgesClsMaster_Detail.value.btnge_KnowledgesClsMaster_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new ge_KnowledgesClsMaster_EditEx('ge_KnowledgesClsMaster_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        refge_KnowledgesClsMaster_Edit.value.btnge_KnowledgesClsMaster_Edit_Click(
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
        strMsg = `命令:${strCommandName}在函数(ge_KnowledgesClsMasterCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'knowledgeName|Ex':
        viewVarSet.sortge_KnowledgesClsMasterBy = `cc_CourseKnowledges|knowledgeName ${sortDirection}|ge_KnowledgesClsMaster.CourseKnowledgeId = cc_CourseKnowledges.CourseKnowledgeId`;
        break;
      case 'masterLevelName|Ex':
        viewVarSet.sortge_KnowledgesClsMasterBy = `KnowledgeMasterLevel|masterLevelName ${sortDirection}|ge_KnowledgesClsMaster.MasterLevelId = KnowledgeMasterLevel.MasterLevelId`;
        break;
      case 'dateTimeSim|Ex':
        viewVarSet.sortge_KnowledgesClsMasterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortge_KnowledgesClsMasterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_KnowledgesClsMaster4Func(this.thisDivList);
  }
}
