/**
 * 类名:StuPerfAnalysisCRUDEx(界面:StuPerfAnalysisCRUD,01120259)
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/08 23:57:46
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
import { StuPerfAnalysisCRUD } from '@/viewsBase/QuestionnaireResult/StuPerfAnalysisCRUD';
import {
  viewVarSet,
  divVarSet,
  refStuPerfAnalysis_Detail,
} from '@/views/QuestionnaireResult/StuPerfAnalysisVueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** StuPerfAnalysisCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class StuPerfAnalysisCRUDEx extends StuPerfAnalysisCRUD implements IShowList {
  //public static mstrSortStuPerfAnalysisBy = "IdStudentInfo";
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
    console.log('InitVarSet in StuPerfAnalysisCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in StuPerfAnalysisCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_StuPerfAnalysis4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'StuPerfAnalysis':
        alert('该类没有绑定该函数：[this.BindGv_StuPerfAnalysis4Func]!');
        //this.BindGv_StuPerfAnalysis4Func(divVarSet.refDivList);
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
    let objPage: StuPerfAnalysisCRUDEx;
    let objPageEdit;
    if (StuPerfAnalysisCRUD.objPageCRUD == null) {
      StuPerfAnalysisCRUD.objPageCRUD = new StuPerfAnalysisCRUDEx();
      objPage = <StuPerfAnalysisCRUDEx>StuPerfAnalysisCRUDEx.objPageCRUD;
    } else {
      objPage = <StuPerfAnalysisCRUDEx>StuPerfAnalysisCRUDEx.objPageCRUD;
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
        strMsg = `命令:${strCommandName}在函数(StuPerfAnalysisCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'stuId|Ex':
        viewVarSet.sortStuPerfAnalysisBy = `vStudentInfo_Sim|stuId ${sortDirection}|StuPerfAnalysis.IdStudentInfo = vStudentInfo_Sim.IdStudentInfo`;
        break;
      case 'stuName|Ex':
        viewVarSet.sortStuPerfAnalysisBy = `vStudentInfo_Sim|stuName ${sortDirection}|StuPerfAnalysis.IdStudentInfo = vStudentInfo_Sim.IdStudentInfo`;
        break;
      case 'gradeName|Ex':
        viewVarSet.sortStuPerfAnalysisBy = `vStudentInfo_Sim|gradeName ${sortDirection}|StuPerfAnalysis.IdStudentInfo = vStudentInfo_Sim.IdStudentInfo,vStudentInfo_Sim.IdGrade = XzGrade.IdGrade`;
        break;
      case 'adminClsName|Ex':
        viewVarSet.sortStuPerfAnalysisBy = `vStudentInfo_Sim|adminClsName ${sortDirection}|StuPerfAnalysis.IdStudentInfo = vStudentInfo_Sim.IdStudentInfo,vStudentInfo_Sim.IdAdminCls = XzAdminCls.IdAdminCls`;
        break;
      default:
        viewVarSet.sortStuPerfAnalysisBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_StuPerfAnalysis4Func(this.thisDivList);
  }
}
