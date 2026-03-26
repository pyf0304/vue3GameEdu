/**
 * 类名:ge_GameLevelEduClsRelaCRUDEx(界面:ge_GameLevelEduClsRelaCRUD,01120237)
 * 表名:ge_GameLevelEduClsRela(01120938)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/25 00:16:45
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
import { ge_GameLevelEduClsRelaCRUD } from '@/viewsBase/Knowledges/ge_GameLevelEduClsRelaCRUD';
import {
  viewVarSet,
  divVarSet,
  refge_GameLevelEduClsRela_Edit,
  refge_GameLevelEduClsRela_Detail,
} from '@/views/Knowledges/ge_GameLevelEduClsRelaVueShare';
import { Format } from '@/ts/PubFun/clsString';
import { ge_GameLevelEduClsRela_EditEx } from '@/views/Knowledges/ge_GameLevelEduClsRela_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** ge_GameLevelEduClsRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class ge_GameLevelEduClsRelaCRUDEx extends ge_GameLevelEduClsRelaCRUD implements IShowList {
  //public static mstrSortge_GameLevelEduClsRelaBy = "mId";
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
    console.log('InitVarSet in ge_GameLevelEduClsRelaCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ge_GameLevelEduClsRelaCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_ge_GameLevelEduClsRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ge_GameLevelEduClsRela':
        alert('该类没有绑定该函数：[this.BindGv_ge_GameLevelEduClsRela4Func]!');
        //this.BindGv_ge_GameLevelEduClsRela4Func(divVarSet.refDivList);
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
    let objPage: ge_GameLevelEduClsRelaCRUDEx;
    let objPageEdit;
    if (ge_GameLevelEduClsRelaCRUD.objPageCRUD == null) {
      ge_GameLevelEduClsRelaCRUD.objPageCRUD = new ge_GameLevelEduClsRelaCRUDEx();
      objPage = <ge_GameLevelEduClsRelaCRUDEx>ge_GameLevelEduClsRelaCRUDEx.objPageCRUD;
    } else {
      objPage = <ge_GameLevelEduClsRelaCRUDEx>ge_GameLevelEduClsRelaCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new ge_GameLevelEduClsRela_EditEx('ge_GameLevelEduClsRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refge_GameLevelEduClsRela_Edit.value.btnge_GameLevelEduClsRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'Detail': //详细信息
        refge_GameLevelEduClsRela_Detail.value.btnge_GameLevelEduClsRela_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new ge_GameLevelEduClsRela_EditEx('ge_GameLevelEduClsRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refge_GameLevelEduClsRela_Edit.value.btnge_GameLevelEduClsRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(ge_GameLevelEduClsRelaCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'questionTypeName|Ex':
        viewVarSet.sortge_GameLevelEduClsRelaBy = `ge_GameLevel|QuestionTypeName ${sortDirection}|ge_GameLevelEduClsRela.GameLevelId = ge_GameLevel.GameLevelId,ge_GameLevel.QuestionTypeId = QuestionType.QuestionTypeId`;
        break;
      case 'difficultyLevelName|Ex':
        viewVarSet.sortge_GameLevelEduClsRelaBy = `ge_GameLevel|DifficultyLevelName ${sortDirection}|ge_GameLevelEduClsRela.GameLevelId = ge_GameLevel.GameLevelId,ge_GameLevel.DifficultyLevelId = ge_DifficultyLevel.DifficultyLevelId`;
        break;
      case 'eduClsName|Ex':
        viewVarSet.sortge_GameLevelEduClsRelaBy = `CurrEduCls|EduClsName ${sortDirection}|ge_GameLevelEduClsRela.IdCurrEduCls = CurrEduCls.IdCurrEduCls`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortge_GameLevelEduClsRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'gameLevelName|Ex':
        viewVarSet.sortge_GameLevelEduClsRelaBy = `ge_GameLevel|GameLevelName ${sortDirection}|ge_GameLevelEduClsRela.GameLevelId = ge_GameLevel.GameLevelId`;
        break;
      default:
        viewVarSet.sortge_GameLevelEduClsRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_GameLevelEduClsRela4Func(divVarSet.refDivList);
  }
}
