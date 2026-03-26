
 /**
 * 类名:clsge_KnowledgesClsMasterEN
 * 表名:ge_KnowledgesClsMaster(01120962)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:32
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
 * 知识点教学班掌握度(ge_KnowledgesClsMaster)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_KnowledgesClsMasterEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "07"; //复合主键
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_KnowledgesClsMaster"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls,CourseKnowledgeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["idCurrEduCls", "courseKnowledgeId", "courseId", "masterLevelId", "masteryValue", "goalValue", "selfPerceivedValue", "updDate", "updUser", "memo"];
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
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrCourseKnowledgeId = "";    //知识点Id
private mstrCourseId = "";    //课程Id
private mstrMasterLevelId = "";    //掌握度Id
private mdblMasteryValue = 0;    //掌握度
private mdblGoalValue = 0;    //目标值
private mdblSelfPerceivedValue = 0;    //自我认为值
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

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
 * 知识点Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseKnowledgeId (value: string)
{
if (value  != undefined)
{
 this.courseKnowledgeId = value;
    this.hmProperty["courseKnowledgeId"] = true;
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
 * 掌握度Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterLevelId (value: string)
{
if (value  != undefined)
{
 this.masterLevelId = value;
    this.hmProperty["masterLevelId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 掌握度(说明:;字段类型:numeric;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasteryValue (value: number)
{
if (value  != undefined)
{
 this.masteryValue = value;
    this.hmProperty["masteryValue"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 目标值(说明:;字段类型:numeric;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGoalValue (value: number)
{
if (value  != undefined)
{
 this.goalValue = value;
    this.hmProperty["goalValue"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 自我认为值(说明:;字段类型:numeric;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSelfPerceivedValue (value: number)
{
if (value  != undefined)
{
 this.selfPerceivedValue = value;
    this.hmProperty["selfPerceivedValue"] = true;
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
case clsge_KnowledgesClsMasterEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_KnowledgesClsMasterEN.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsge_KnowledgesClsMasterEN.con_CourseId:
return this.courseId;
case clsge_KnowledgesClsMasterEN.con_MasterLevelId:
return this.masterLevelId;
case clsge_KnowledgesClsMasterEN.con_MasteryValue:
return this.masteryValue;
case clsge_KnowledgesClsMasterEN.con_GoalValue:
return this.goalValue;
case clsge_KnowledgesClsMasterEN.con_SelfPerceivedValue:
return this.selfPerceivedValue;
case clsge_KnowledgesClsMasterEN.con_UpdDate:
return this.updDate;
case clsge_KnowledgesClsMasterEN.con_UpdUser:
return this.updUser;
case clsge_KnowledgesClsMasterEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_KnowledgesClsMaster]中不存在!`;
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
case clsge_KnowledgesClsMasterEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_CourseKnowledgeId:
this.courseKnowledgeId = strValue;
    this.hmProperty["courseKnowledgeId"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_MasterLevelId:
this.masterLevelId = strValue;
    this.hmProperty["masterLevelId"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_MasteryValue:
this.masteryValue = Number(strValue);
    this.hmProperty["masteryValue"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_GoalValue:
this.goalValue = Number(strValue);
    this.hmProperty["goalValue"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_SelfPerceivedValue:
this.selfPerceivedValue = Number(strValue);
    this.hmProperty["selfPerceivedValue"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_KnowledgesClsMasterEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_KnowledgesClsMaster]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idCurrEduCls = "";    //教学班流水号
public courseKnowledgeId = "";    //知识点Id
public courseId = "";    //课程Id
public masterLevelId = "";    //掌握度Id
public masteryValue = 0;    //掌握度
public goalValue = 0;    //目标值
public selfPerceivedValue = 0;    //自我认为值
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"MasterLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterLevelId(): string {return "masterLevelId";}    //掌握度Id

 /**
 * 常量:"MasteryValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasteryValue(): string {return "masteryValue";}    //掌握度

 /**
 * 常量:"GoalValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GoalValue(): string {return "goalValue";}    //目标值

 /**
 * 常量:"SelfPerceivedValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SelfPerceivedValue(): string {return "selfPerceivedValue";}    //自我认为值

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
//return propName in new clsge_KnowledgesClsMasterEN();
const instance = new clsge_KnowledgesClsMasterEN();
return instance.hasOwnProperty(propName);
}
}