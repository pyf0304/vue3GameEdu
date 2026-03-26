
 /**
 * 类名:clsGameBottle_PickUp
 * 表名:GameBottle_PickUp(01120983)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 11:10:31
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 捞游戏瓶(GameBottle_PickUp)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsGameBottle_PickUp 
{
public static _CurrTabName= "GameBottle_PickUp"; //当前表名,与该类相关的表名
public static _KeyFldName= "BottleId,UserId_PickUp"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["bottleId", "userId_PickUp", "pickUpTime", "finishedTime", "bottleStateId", "credits", "updUser", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public bottleId = 0;    //瓶子Id
public userId_PickUp = "";    //用户ID
public pickUpTime = "";    //捞的时间
public finishedTime = "";    //完成时间
public bottleStateId = "";    //瓶子状态Id
public credits = 0;    //积分
public updUser = "";    //修改人
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
case clsGameBottle_PickUp.con_BottleId:
return this.bottleId;
case clsGameBottle_PickUp.con_UserId_PickUp:
return this.userId_PickUp;
case clsGameBottle_PickUp.con_PickUpTime:
return this.pickUpTime;
case clsGameBottle_PickUp.con_FinishedTime:
return this.finishedTime;
case clsGameBottle_PickUp.con_BottleStateId:
return this.bottleStateId;
case clsGameBottle_PickUp.con_Credits:
return this.credits;
case clsGameBottle_PickUp.con_UpdUser:
return this.updUser;
case clsGameBottle_PickUp.con_UpdDate:
return this.updDate;
case clsGameBottle_PickUp.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[GameBottle_PickUp]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"BottleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleId(): string {return "bottleId";}    //瓶子Id

 /**
 * 常量:"UserId_PickUp"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId_PickUp(): string {return "userId_PickUp";}    //用户ID

 /**
 * 常量:"PickUpTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PickUpTime(): string {return "pickUpTime";}    //捞的时间

 /**
 * 常量:"FinishedTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FinishedTime(): string {return "finishedTime";}    //完成时间

 /**
 * 常量:"BottleStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleStateId(): string {return "bottleStateId";}    //瓶子状态Id

 /**
 * 常量:"Credits"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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