/**
 * 类名:ClassPerfAnalysisCRUDEx(界面:ClassPerfAnalysisCRUD,01120258)
 * 表名:ClassPerfAnalysis(01120977)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/08 01:57:14
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { ClassPerfAnalysisCRUD } from '@/viewsBase/QuestionnaireResult/ClassPerfAnalysisCRUD';
import {
  viewVarSet,
  divVarSet,
  refClassPerfAnalysis_Detail,
} from '@/views/QuestionnaireResult/ClassPerfAnalysisVueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** ClassPerfAnalysisCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class ClassPerfAnalysisCRUDEx extends ClassPerfAnalysisCRUD implements IShowList {
  //public static mstrSortClassPerfAnalysisBy = "IdCurrEduCls";
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
    console.log('InitVarSet in ClassPerfAnalysisCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ClassPerfAnalysisCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_ClassPerfAnalysis4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ClassPerfAnalysis':
        alert('该类没有绑定该函数：[this.BindGv_ClassPerfAnalysis4Func]!');
        //this.BindGv_ClassPerfAnalysis4Func(divVarSet.refDivList);
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
    let objPage: ClassPerfAnalysisCRUDEx;
    let objPageEdit;
    if (ClassPerfAnalysisCRUD.objPageCRUD == null) {
      ClassPerfAnalysisCRUD.objPageCRUD = new ClassPerfAnalysisCRUDEx();
      objPage = <ClassPerfAnalysisCRUDEx>ClassPerfAnalysisCRUDEx.objPageCRUD;
    } else {
      objPage = <ClassPerfAnalysisCRUDEx>ClassPerfAnalysisCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
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
        strMsg = `命令:${strCommandName}在函数(ClassPerfAnalysisCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'questionName|Ex':
        viewVarSet.sortClassPerfAnalysisBy = `vQuestionnaire_Sim|questionName ${sortDirection}|ClassPerfAnalysis.QuestionId = vQuestionnaire_Sim.QuestionId`;
        break;
      case 'knowledgeNames|Ex':
        viewVarSet.sortClassPerfAnalysisBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'questionTypeName|Ex':
        viewVarSet.sortClassPerfAnalysisBy = `vQuestionnaire_Sim|questionTypeName ${sortDirection}|ClassPerfAnalysis.QuestionId = vQuestionnaire_Sim.QuestionId,vQuestionnaire_Sim.QuestionTypeId = QuestionType.QuestionTypeId`;
        break;
      case 'difficultyLevelName|Ex':
        viewVarSet.sortClassPerfAnalysisBy = `vQuestionnaire_Sim|difficultyLevelName ${sortDirection}|ClassPerfAnalysis.QuestionId = vQuestionnaire_Sim.QuestionId,vQuestionnaire_Sim.DifficultyLevelId = ge_DifficultyLevel.DifficultyLevelId`;
        break;
      case 'eduClsName|Ex':
        viewVarSet.sortClassPerfAnalysisBy = `vCurrEduCls_Sim|eduClsName ${sortDirection}|ClassPerfAnalysis.IdCurrEduCls = vCurrEduCls_Sim.IdCurrEduCls`;
        break;
      default:
        viewVarSet.sortClassPerfAnalysisBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ClassPerfAnalysis4Func(this.thisDivList);
  }
}
