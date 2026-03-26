/**
 * 类名:StuPerfAnalysis_DetailEx(界面:StuPerfAnalysisCRUD,01120259)
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/08 23:57:51
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { StuPerfAnalysis_Detail } from '@/viewsBase/QuestionnaireResult/StuPerfAnalysis_Detail';
import StuPerfAnalysisCRUDEx from '@/views/QuestionnaireResult/StuPerfAnalysisCRUDEx';
/* StuPerfAnalysis_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class StuPerfAnalysis_DetailEx extends StuPerfAnalysis_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objStuPerfAnalysisCRUD: StuPerfAnalysisCRUDEx = new StuPerfAnalysisCRUDEx();
    const objPage: StuPerfAnalysis_DetailEx = new StuPerfAnalysis_DetailEx(objStuPerfAnalysisCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId, '');
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(StuPerfAnalysis_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
