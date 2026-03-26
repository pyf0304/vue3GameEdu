
 /**
 * 类名:clsFeedBack
 * 表名:FeedBack(01120279)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:26:29
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 反馈意见(FeedBack)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsFeedBack 
{
public static _CurrTabName= "FeedBack"; //当前表名,与该类相关的表名
public static _KeyFldName= "FeedBackId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["feedBackId", "nickName", "feedBackNumber", "feedBackContent", "email", "telephone", "updDate", "memo", "updUser"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public feedBackId = 0;    //FeedBackId
public nickName = "";    //昵称
public feedBackNumber = "";    //FeedBackNumber
public feedBackContent = "";    //FeedBackContent
public email = "";    //电子邮箱
public telephone = "";    //Telephone
public updDate = "";    //修改日期
public memo = "";    //备注
public updUser = "";    //修改人

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
case clsFeedBack.con_FeedBackId:
return this.feedBackId;
case clsFeedBack.con_NickName:
return this.nickName;
case clsFeedBack.con_FeedBackNumber:
return this.feedBackNumber;
case clsFeedBack.con_FeedBackContent:
return this.feedBackContent;
case clsFeedBack.con_Email:
return this.email;
case clsFeedBack.con_Telephone:
return this.telephone;
case clsFeedBack.con_UpdDate:
return this.updDate;
case clsFeedBack.con_Memo:
return this.memo;
case clsFeedBack.con_UpdUser:
return this.updUser;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FeedBack]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"FeedBackId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FeedBackId(): string {return "feedBackId";}    //FeedBackId

 /**
 * 常量:"NickName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_NickName(): string {return "nickName";}    //昵称

 /**
 * 常量:"FeedBackNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FeedBackNumber(): string {return "feedBackNumber";}    //FeedBackNumber

 /**
 * 常量:"FeedBackContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FeedBackContent(): string {return "feedBackContent";}    //FeedBackContent

 /**
 * 常量:"Email"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

 /**
 * 常量:"Telephone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Telephone(): string {return "telephone";}    //Telephone

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
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人
}