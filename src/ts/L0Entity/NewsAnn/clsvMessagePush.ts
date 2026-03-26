
 /**
 * 类名:clsvMessagePush
 * 表名:vMessagePush(01120282)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/01 11:07:44
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 消息推送视图(vMessagePush)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvMessagePush 
{
public static _CurrTabName= "vMessagePush"; //当前表名,与该类相关的表名
public static _KeyFldName= "MessagePushId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["messagePushId", "messagePushNumber", "messageTitle", "messageContent", "receivePeople", "messageTypeId", "messageTypeName", "isAllpush", "isReceive", "clientVersionTypeId", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public messagePushId = "";    //消息Id
public messagePushNumber = "";    //消息编号
public messageTitle = "";    //消息标题
public messageContent = "";    //消息内容
public receivePeople = "";    //接收人员
public messageTypeId = "";    //消息类型Id
public messageTypeName = "";    //消息类型名称
public isAllpush = false;    //是否全体推送
public isReceive = false;    //是否接收
public clientVersionTypeId = "";    //客户端版本类型Id
public updDate = "";    //修改日期
public memo = "";    //备注

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
case clsvMessagePush.con_MessagePushId:
return this.messagePushId;
case clsvMessagePush.con_MessagePushNumber:
return this.messagePushNumber;
case clsvMessagePush.con_MessageTitle:
return this.messageTitle;
case clsvMessagePush.con_MessageContent:
return this.messageContent;
case clsvMessagePush.con_ReceivePeople:
return this.receivePeople;
case clsvMessagePush.con_MessageTypeId:
return this.messageTypeId;
case clsvMessagePush.con_MessageTypeName:
return this.messageTypeName;
case clsvMessagePush.con_IsAllpush:
return this.isAllpush;
case clsvMessagePush.con_IsReceive:
return this.isReceive;
case clsvMessagePush.con_ClientVersionTypeId:
return this.clientVersionTypeId;
case clsvMessagePush.con_UpdDate:
return this.updDate;
case clsvMessagePush.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vMessagePush]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"MessagePushId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessagePushId(): string {return "messagePushId";}    //消息Id

 /**
 * 常量:"MessagePushNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessagePushNumber(): string {return "messagePushNumber";}    //消息编号

 /**
 * 常量:"MessageTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessageTitle(): string {return "messageTitle";}    //消息标题

 /**
 * 常量:"MessageContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessageContent(): string {return "messageContent";}    //消息内容

 /**
 * 常量:"ReceivePeople"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReceivePeople(): string {return "receivePeople";}    //接收人员

 /**
 * 常量:"MessageTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessageTypeId(): string {return "messageTypeId";}    //消息类型Id

 /**
 * 常量:"MessageTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessageTypeName(): string {return "messageTypeName";}    //消息类型名称

 /**
 * 常量:"IsAllpush"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAllpush(): string {return "isAllpush";}    //是否全体推送

 /**
 * 常量:"IsReceive"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsReceive(): string {return "isReceive";}    //是否接收

 /**
 * 常量:"ClientVersionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClientVersionTypeId(): string {return "clientVersionTypeId";}    //客户端版本类型Id

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
}