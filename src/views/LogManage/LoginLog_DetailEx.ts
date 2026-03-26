/**
 * 类名:LoginLog_DetailEx(界面:LoginLogCRUD)
 * 表名:LoginLog(01120357)
 * 版本:2024.08.18.1(服务器:WIN-SRV103-116)
 * 日期:2024/08/22 09:21:01
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日志管理(LogManage)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { LoginLog_Detail } from '@/viewsBase/LogManage/LoginLog_Detail';
import LoginLogCRUDEx from '@/views/LogManage/LoginLogCRUDEx';
/* LoginLog_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class LoginLog_DetailEx extends LoginLog_Detail {
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
    const objLoginLogCRUD: LoginLogCRUDEx = new LoginLogCRUDEx();
    const objPage: LoginLog_DetailEx = new LoginLog_DetailEx(objLoginLogCRUD);

    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(LoginLog_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
