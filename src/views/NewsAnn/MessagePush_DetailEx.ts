
 /**
 * 类名:MessagePush_DetailEx(界面:MessagePushCRUD,01120240)
 * 表名:MessagePush(01120280)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/12 13:50:20
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { MessagePush_Detail } from "@/viewsBase/NewsAnn/MessagePush_Detail";
import MessagePushCRUDEx from "@/views/NewsAnn/MessagePushCRUDEx";
 /* MessagePush_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class  MessagePush_DetailEx extends MessagePush_Detail
{


 /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
public static btnDetail_Click(strCommandName: string, strKeyId: string) {
const strThisFuncName = this.btnDetail_Click.name;
const objMessagePushCRUD:MessagePushCRUDEx = new MessagePushCRUDEx();
const objPage:MessagePush_DetailEx = new MessagePush_DetailEx(objMessagePushCRUD);
console.log(strKeyId, strThisFuncName, objPage);
let strMsg;
switch (strCommandName)
{
case "Detail":    //详细信息
objPage.btnDetailRecord_Click(strKeyId);
break;
default:
strMsg = `命令:${strCommandName} 在函数(MessagePush_Detail.btnClick)中没有被处理!`;
console.error(strMsg)
alert(strMsg);
break;
}
}



}