/**
 * 类名:JxTeachPlanKnowledge_DetailEx(界面:JxTeachPlanKnowledgeCRUD)
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2024.05.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/05/05 10:35:31
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { JxTeachPlanKnowledge_Detail } from '@/viewsBase/TeachingPlan/JxTeachPlanKnowledge_Detail';
import { JxTeachPlanKnowledgeCRUDEx } from '@/views/TeachingPlan/JxTeachPlanKnowledgeCRUDEx';
/* JxTeachPlanKnowledge_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class JxTeachPlanKnowledge_DetailEx extends JxTeachPlanKnowledge_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(
    strCommandName: string,
    strKeyId: string,
    divDetail: HTMLDivElement,
  ) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objJxTeachPlanKnowledgeCRUD: JxTeachPlanKnowledgeCRUDEx =
      new JxTeachPlanKnowledgeCRUDEx();
    const objPage: JxTeachPlanKnowledge_DetailEx = new JxTeachPlanKnowledge_DetailEx(
      objJxTeachPlanKnowledgeCRUD,
    );

    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(JxTeachPlanKnowledge_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
