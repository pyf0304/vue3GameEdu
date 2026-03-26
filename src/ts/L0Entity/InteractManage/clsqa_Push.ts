
 /**
 * 类名:clsqa_Push
 * 表名:qa_Push(01120640)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:07
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 答疑推送(qa_Push)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsqa_Push 
{
public static _CurrTabName= "qa_Push"; //当前表名,与该类相关的表名
public static _KeyFldName= "PushId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["pushId", "questionsId", "receiveUser", "receiveDate", "isReceive", "updDate", "memo", "idCurrEduCls", "isReply", "isRequestReply", "replyDate"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public pushId = 0;    //推送d
public questionsId = "";    //提问Id
public receiveUser = "";    //接收用户
public receiveDate = "";    //接收日期
public isReceive = false;    //是否接收
public updDate = "";    //修改日期
public memo = "";    //备注
public idCurrEduCls = "";    //教学班流水号
public isReply = false;    //是否回复
public isRequestReply = false;    //是否要求回复
public replyDate = "";    //回复日期

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsqa_Push.con_PushId:
return this.pushId;
case clsqa_Push.con_QuestionsId:
return this.questionsId;
case clsqa_Push.con_ReceiveUser:
return this.receiveUser;
case clsqa_Push.con_ReceiveDate:
return this.receiveDate;
case clsqa_Push.con_IsReceive:
return this.isReceive;
case clsqa_Push.con_UpdDate:
return this.updDate;
case clsqa_Push.con_Memo:
return this.memo;
case clsqa_Push.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsqa_Push.con_IsReply:
return this.isReply;
case clsqa_Push.con_IsRequestReply:
return this.isRequestReply;
case clsqa_Push.con_ReplyDate:
return this.replyDate;
default:
strMsg = `字段名:[${strFldName}]在表对象:[qa_Push]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"PushId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PushId(): string {return "pushId";}    //推送d

 /**
 * 常量:"QuestionsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionsId(): string {return "questionsId";}    //提问Id

 /**
 * 常量:"ReceiveUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReceiveUser(): string {return "receiveUser";}    //接收用户

 /**
 * 常量:"ReceiveDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReceiveDate(): string {return "receiveDate";}    //接收日期

 /**
 * 常量:"IsReceive"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsReceive(): string {return "isReceive";}    //是否接收

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IsReply"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsReply(): string {return "isReply";}    //是否回复

 /**
 * 常量:"IsRequestReply"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRequestReply(): string {return "isRequestReply";}    //是否要求回复

 /**
 * 常量:"ReplyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReplyDate(): string {return "replyDate";}    //回复日期
}