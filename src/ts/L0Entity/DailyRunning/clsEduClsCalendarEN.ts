
 /**
 * 类名:clsEduClsCalendarEN
 * 表名:EduClsCalendar(01120988)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/07 08:48:59
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 教学班学历(EduClsCalendar)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsEduClsCalendarEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "EduClsCalendar"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsCalendar"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["idEduClsCalendar", "idCurrEduCls", "startDate", "endDate", "weekIndex", "updDate", "updUser", "memo"];
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
private mlngIdEduClsCalendar = 0;    //教学班学历流水号
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrStartDate = "";    //开始日期
private mstrEndDate = "";    //截止日期
private mintWeekIndex = 0;    //周序号
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 教学班学历流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdEduClsCalendar (value: number)
{
if (value  != undefined)
{
 this.idEduClsCalendar = value;
    this.hmProperty["idEduClsCalendar"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 开始日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStartDate (value: string)
{
if (value  != undefined)
{
 this.startDate = value;
    this.hmProperty["startDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 截止日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEndDate (value: string)
{
if (value  != undefined)
{
 this.endDate = value;
    this.hmProperty["endDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 周序号(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeekIndex (value: number)
{
if (value  != undefined)
{
 this.weekIndex = value;
    this.hmProperty["weekIndex"] = true;
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
case clsEduClsCalendarEN.con_IdEduClsCalendar:
return this.idEduClsCalendar;
case clsEduClsCalendarEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsEduClsCalendarEN.con_StartDate:
return this.startDate;
case clsEduClsCalendarEN.con_EndDate:
return this.endDate;
case clsEduClsCalendarEN.con_WeekIndex:
return this.weekIndex;
case clsEduClsCalendarEN.con_UpdDate:
return this.updDate;
case clsEduClsCalendarEN.con_UpdUser:
return this.updUser;
case clsEduClsCalendarEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[EduClsCalendar]中不存在!`;
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
case clsEduClsCalendarEN.con_IdEduClsCalendar:
this.idEduClsCalendar = Number(strValue);
    this.hmProperty["idEduClsCalendar"] = true;
break;
case clsEduClsCalendarEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsEduClsCalendarEN.con_StartDate:
this.startDate = strValue;
    this.hmProperty["startDate"] = true;
break;
case clsEduClsCalendarEN.con_EndDate:
this.endDate = strValue;
    this.hmProperty["endDate"] = true;
break;
case clsEduClsCalendarEN.con_WeekIndex:
this.weekIndex = Number(strValue);
    this.hmProperty["weekIndex"] = true;
break;
case clsEduClsCalendarEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsEduClsCalendarEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsEduClsCalendarEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[EduClsCalendar]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idEduClsCalendar = 0;    //教学班学历流水号
public idCurrEduCls = "";    //教学班流水号
public startDate = "";    //开始日期
public endDate = "";    //截止日期
public weekIndex = 0;    //周序号
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"IdEduClsCalendar"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEduClsCalendar(): string {return "idEduClsCalendar";}    //教学班学历流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"StartDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StartDate(): string {return "startDate";}    //开始日期

 /**
 * 常量:"EndDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EndDate(): string {return "endDate";}    //截止日期

 /**
 * 常量:"WeekIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WeekIndex(): string {return "weekIndex";}    //周序号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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
//return propName in new clsEduClsCalendarEN();
const instance = new clsEduClsCalendarEN();
return instance.hasOwnProperty(propName);
}
}