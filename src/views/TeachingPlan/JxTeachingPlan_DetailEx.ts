/**
 * 类名:JxTeachingPlan_DetailEx(界面:JxTeachingPlanCRUD)
 * 表名:JxTeachingPlan(01120968)
 * 版本:2024.04.16.1(服务器:DESKTOP-1KM2OK3)
 * 日期:2024/05/03 10:57:22
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
import { JxTeachingPlan_Detail } from '@/viewsBase/TeachingPlan/JxTeachingPlan_Detail';
import { JxTeachingPlanCRUDEx } from '@/views/TeachingPlan/JxTeachingPlanCRUDEx';
/* JxTeachingPlan_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class JxTeachingPlan_DetailEx extends JxTeachingPlan_Detail {
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
    const objJxTeachingPlanCRUD: JxTeachingPlanCRUDEx = new JxTeachingPlanCRUDEx();
    const objPage: JxTeachingPlan_DetailEx = new JxTeachingPlan_DetailEx(objJxTeachingPlanCRUD);

    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(JxTeachingPlan_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
