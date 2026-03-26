
 /**
 * 类名:clsGameBottle_PickUpEN
 * 表名:GameBottle_PickUp(01120983)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 11:10:27
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 捞游戏瓶(GameBottle_PickUp)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsGameBottle_PickUpEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "07"; //复合主键
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "GameBottle_PickUp"; //当前表名,与该类相关的表名
public static _KeyFldName= "BottleId,UserId_PickUp"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["bottleId", "userId_PickUp", "pickUpTime", "finishedTime", "bottleStateId", "credits", "updUser", "updDate", "memo"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mlngBottleId = 0;    //瓶子Id
private mstrUserId_PickUp = "";    //用户ID
private mstrPickUpTime = "";    //捞的时间
private mstrFinishedTime = "";    //完成时间
private mstrBottleStateId = "";    //瓶子状态Id
private mintCredits = 0;    //积分
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注

/**
 * 瓶子Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBottleId (value: number)
{
if (value  != undefined)
{
 this.bottleId = value;
    this.hmProperty["bottleId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserId_PickUp (value: string)
{
if (value  != undefined)
{
 this.userId_PickUp = value;
    this.hmProperty["userId_PickUp"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 捞的时间(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPickUpTime (value: string)
{
if (value  != undefined)
{
 this.pickUpTime = value;
    this.hmProperty["pickUpTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 完成时间(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFinishedTime (value: string)
{
if (value  != undefined)
{
 this.finishedTime = value;
    this.hmProperty["finishedTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 瓶子状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBottleStateId (value: string)
{
if (value  != undefined)
{
 this.bottleStateId = value;
    this.hmProperty["bottleStateId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 积分(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCredits (value: number)
{
if (value  != undefined)
{
 this.credits = value;
    this.hmProperty["credits"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsGameBottle_PickUpEN.con_BottleId:
return this.bottleId;
case clsGameBottle_PickUpEN.con_UserId_PickUp:
return this.userId_PickUp;
case clsGameBottle_PickUpEN.con_PickUpTime:
return this.pickUpTime;
case clsGameBottle_PickUpEN.con_FinishedTime:
return this.finishedTime;
case clsGameBottle_PickUpEN.con_BottleStateId:
return this.bottleStateId;
case clsGameBottle_PickUpEN.con_Credits:
return this.credits;
case clsGameBottle_PickUpEN.con_UpdUser:
return this.updUser;
case clsGameBottle_PickUpEN.con_UpdDate:
return this.updDate;
case clsGameBottle_PickUpEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[GameBottle_PickUp]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsGameBottle_PickUpEN.con_BottleId:
this.bottleId = Number(strValue);
    this.hmProperty["bottleId"] = true;
break;
case clsGameBottle_PickUpEN.con_UserId_PickUp:
this.userId_PickUp = strValue;
    this.hmProperty["userId_PickUp"] = true;
break;
case clsGameBottle_PickUpEN.con_PickUpTime:
this.pickUpTime = strValue;
    this.hmProperty["pickUpTime"] = true;
break;
case clsGameBottle_PickUpEN.con_FinishedTime:
this.finishedTime = strValue;
    this.hmProperty["finishedTime"] = true;
break;
case clsGameBottle_PickUpEN.con_BottleStateId:
this.bottleStateId = strValue;
    this.hmProperty["bottleStateId"] = true;
break;
case clsGameBottle_PickUpEN.con_Credits:
this.credits = Number(strValue);
    this.hmProperty["credits"] = true;
break;
case clsGameBottle_PickUpEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsGameBottle_PickUpEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsGameBottle_PickUpEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[GameBottle_PickUp]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"BottleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BottleId(): string {return "bottleId";}    //瓶子Id

 /**
 * 常量:"UserId_PickUp"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId_PickUp(): string {return "userId_PickUp";}    //用户ID

 /**
 * 常量:"PickUpTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PickUpTime(): string {return "pickUpTime";}    //捞的时间

 /**
 * 常量:"FinishedTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FinishedTime(): string {return "finishedTime";}    //完成时间

 /**
 * 常量:"BottleStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BottleStateId(): string {return "bottleStateId";}    //瓶子状态Id

 /**
 * 常量:"Credits"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsGameBottle_PickUpEN();
const instance = new clsGameBottle_PickUpEN();
return instance.hasOwnProperty(propName);
}
}