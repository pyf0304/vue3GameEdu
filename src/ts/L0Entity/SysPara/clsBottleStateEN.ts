
 /**
 * 类名:clsBottleStateEN
 * 表名:BottleState(01120975)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/10 23:08:05
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 瓶子状态(BottleState)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsBottleStateEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "BottleState"; //当前表名,与该类相关的表名
public static _KeyFldName= "BottleStateId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["bottleStateId", "bottleStateName", "bottleStateEnName", "memo"];
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
private mstrBottleStateId = "";    //瓶子状态Id
private mstrBottleStateName = "";    //瓶子状态名
private mstrBottleStateEnName = "";    //瓶子状态名
private mstrMemo = "";    //备注

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
 * 瓶子状态名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBottleStateName (value: string)
{
if (value  != undefined)
{
 this.bottleStateName = value;
    this.hmProperty["bottleStateName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 瓶子状态名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBottleStateEnName (value: string)
{
if (value  != undefined)
{
 this.bottleStateEnName = value;
    this.hmProperty["bottleStateEnName"] = true;
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
case clsBottleStateEN.con_BottleStateId:
return this.bottleStateId;
case clsBottleStateEN.con_BottleStateName:
return this.bottleStateName;
case clsBottleStateEN.con_BottleStateEnName:
return this.bottleStateEnName;
case clsBottleStateEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BottleState]中不存在!`;
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
case clsBottleStateEN.con_BottleStateId:
this.bottleStateId = strValue;
    this.hmProperty["bottleStateId"] = true;
break;
case clsBottleStateEN.con_BottleStateName:
this.bottleStateName = strValue;
    this.hmProperty["bottleStateName"] = true;
break;
case clsBottleStateEN.con_BottleStateEnName:
this.bottleStateEnName = strValue;
    this.hmProperty["bottleStateEnName"] = true;
break;
case clsBottleStateEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[BottleState]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public bottleStateId = "";    //瓶子状态Id
public bottleStateName = "";    //瓶子状态名
public bottleStateEnName = "";    //瓶子状态名
public memo = "";    //备注


 /**
 * 常量:"BottleStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BottleStateId(): string {return "bottleStateId";}    //瓶子状态Id

 /**
 * 常量:"BottleStateName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BottleStateName(): string {return "bottleStateName";}    //瓶子状态名

 /**
 * 常量:"BottleStateEnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BottleStateEnName(): string {return "bottleStateEnName";}    //瓶子状态名

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
//return propName in new clsBottleStateEN();
const instance = new clsBottleStateEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumBottleState
{
 /**
 * 扔瓶子
 **/
static readonly ThrowBottle_01 = "01";
 /**
 * 捞瓶子
 **/
static readonly PickUpBottle_02 = "02";
 /**
 * 答题中
 **/
static readonly InProgress_03 = "03";
 /**
 * 完成
 **/
static readonly Finished_04 = "04";
}