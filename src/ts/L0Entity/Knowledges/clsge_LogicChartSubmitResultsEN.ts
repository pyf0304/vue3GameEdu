
 /**
 * 类名:clsge_LogicChartSubmitResultsEN
 * 表名:ge_LogicChartSubmitResults(01120912)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:27:20
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 知识逻辑图提交结果(ge_LogicChartSubmitResults)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_LogicChartSubmitResultsEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_LogicChartSubmitResults"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["mId", "knowledgeGraphId", "courseId", "createUser", "takeUpTime", "fraction", "correctNum", "errorNum", "updDate", "updUser", "memo"];
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
private mlngmId = 0;    //mId
private mstrKnowledgeGraphId = "";    //知识点图Id
private mstrCourseId = "";    //课程Id
private mstrCreateUser = "";    //建立用户
private mstrTakeUpTime = "";    //耗时
private mintFraction = 0;    //分数
private mintCorrectNum = 0;    //正确数
private mintErrorNum = 0;    //错误数
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetmId (value: number)
{
if (value  != undefined)
{
 this.mId = value;
    this.hmProperty["mId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点图Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeGraphId (value: string)
{
if (value  != undefined)
{
 this.knowledgeGraphId = value;
    this.hmProperty["knowledgeGraphId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立用户(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateUser (value: string)
{
if (value  != undefined)
{
 this.createUser = value;
    this.hmProperty["createUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 耗时(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTakeUpTime (value: string)
{
if (value  != undefined)
{
 this.takeUpTime = value;
    this.hmProperty["takeUpTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 分数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFraction (value: number)
{
if (value  != undefined)
{
 this.fraction = value;
    this.hmProperty["fraction"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 正确数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCorrectNum (value: number)
{
if (value  != undefined)
{
 this.correctNum = value;
    this.hmProperty["correctNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 错误数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetErrorNum (value: number)
{
if (value  != undefined)
{
 this.errorNum = value;
    this.hmProperty["errorNum"] = true;
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
case clsge_LogicChartSubmitResultsEN.con_mId:
return this.mId;
case clsge_LogicChartSubmitResultsEN.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsge_LogicChartSubmitResultsEN.con_CourseId:
return this.courseId;
case clsge_LogicChartSubmitResultsEN.con_CreateUser:
return this.createUser;
case clsge_LogicChartSubmitResultsEN.con_TakeUpTime:
return this.takeUpTime;
case clsge_LogicChartSubmitResultsEN.con_Fraction:
return this.fraction;
case clsge_LogicChartSubmitResultsEN.con_CorrectNum:
return this.correctNum;
case clsge_LogicChartSubmitResultsEN.con_ErrorNum:
return this.errorNum;
case clsge_LogicChartSubmitResultsEN.con_UpdDate:
return this.updDate;
case clsge_LogicChartSubmitResultsEN.con_UpdUser:
return this.updUser;
case clsge_LogicChartSubmitResultsEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_LogicChartSubmitResults]中不存在!`;
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
case clsge_LogicChartSubmitResultsEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_KnowledgeGraphId:
this.knowledgeGraphId = strValue;
    this.hmProperty["knowledgeGraphId"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_CreateUser:
this.createUser = strValue;
    this.hmProperty["createUser"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_TakeUpTime:
this.takeUpTime = strValue;
    this.hmProperty["takeUpTime"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_Fraction:
this.fraction = Number(strValue);
    this.hmProperty["fraction"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_CorrectNum:
this.correctNum = Number(strValue);
    this.hmProperty["correctNum"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_ErrorNum:
this.errorNum = Number(strValue);
    this.hmProperty["errorNum"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_LogicChartSubmitResultsEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_LogicChartSubmitResults]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public knowledgeGraphId = "";    //知识点图Id
public courseId = "";    //课程Id
public createUser = "";    //建立用户
public takeUpTime = "";    //耗时
public fraction = 0;    //分数
public correctNum = 0;    //正确数
public errorNum = 0;    //错误数
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CreateUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreateUser(): string {return "createUser";}    //建立用户

 /**
 * 常量:"TakeUpTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TakeUpTime(): string {return "takeUpTime";}    //耗时

 /**
 * 常量:"Fraction"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Fraction(): string {return "fraction";}    //分数

 /**
 * 常量:"CorrectNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CorrectNum(): string {return "correctNum";}    //正确数

 /**
 * 常量:"ErrorNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ErrorNum(): string {return "errorNum";}    //错误数

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
const instance = new clsge_LogicChartSubmitResultsEN();
return instance.hasOwnProperty(propName);
}
}