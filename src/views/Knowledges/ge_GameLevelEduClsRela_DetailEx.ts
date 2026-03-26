
 /**
 * 类名:ge_GameLevelEduClsRela_DetailEx(界面:ge_GameLevelEduClsRelaCRUD,01120237)
 * 表名:ge_GameLevelEduClsRela(01120938)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/25 00:16:53
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
import { ge_GameLevelEduClsRela_Detail } from "@/viewsBase/Knowledges/ge_GameLevelEduClsRela_Detail";
import { ge_GameLevelEduClsRelaCRUDEx } from "@/views/Knowledges/ge_GameLevelEduClsRelaCRUDEx";
 /* ge_GameLevelEduClsRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class  ge_GameLevelEduClsRela_DetailEx extends ge_GameLevelEduClsRela_Detail
{


 /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
public static btnDetail_Click(strCommandName: string, strKeyId: string) {
const strThisFuncName = this.btnDetail_Click.name;
const objge_GameLevelEduClsRelaCRUD:ge_GameLevelEduClsRelaCRUDEx = new ge_GameLevelEduClsRelaCRUDEx();
const objPage:ge_GameLevelEduClsRela_DetailEx = new ge_GameLevelEduClsRela_DetailEx(objge_GameLevelEduClsRelaCRUD);
console.log(strKeyId, strThisFuncName, objPage);
let strMsg;
switch (strCommandName)
{
case "Detail":    //详细信息
objPage.btnDetailRecord_Click(strKeyId);
break;
default:
strMsg = `命令:${strCommandName} 在函数(ge_GameLevelEduClsRela_Detail.btnClick)中没有被处理!`;
console.error(strMsg)
alert(strMsg);
break;
}
}



}