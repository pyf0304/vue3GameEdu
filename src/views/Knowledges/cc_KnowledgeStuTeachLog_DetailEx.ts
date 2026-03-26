/**
 * 类名:cc_KnowledgeStuTeachLog_DetailEx(界面:cc_KnowledgeStuTeachLogCRUD,01120255)
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2024.11.10.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/11 00:09:19
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { cc_KnowledgeStuTeachLog_Detail } from '@/viewsBase/Knowledges/cc_KnowledgeStuTeachLog_Detail';
import { cc_KnowledgeStuTeachLogCRUDEx } from '@/views/Knowledges/cc_KnowledgeStuTeachLogCRUDEx';
/* cc_KnowledgeStuTeachLog_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class cc_KnowledgeStuTeachLog_DetailEx extends cc_KnowledgeStuTeachLog_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objcc_KnowledgeStuTeachLogCRUD: cc_KnowledgeStuTeachLogCRUDEx =
      new cc_KnowledgeStuTeachLogCRUDEx();
    const objPage: cc_KnowledgeStuTeachLog_DetailEx = new cc_KnowledgeStuTeachLog_DetailEx(
      objcc_KnowledgeStuTeachLogCRUD,
    );
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(0, strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(cc_KnowledgeStuTeachLog_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
