
 /**
 * 类名:clsJxTeachingPlanEN
 * 表名:JxTeachingPlan(01120968)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:55
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 教学计划(JxTeachingPlan)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsJxTeachingPlanEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "JxTeachingPlan"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeachingPlan"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 16;
public static AttributeName = ["idTeachingPlan", "teachingPlanId", "teachingPlanDesc", "idGrade", "schoolTerm", "courseId", "isClgCheck", "clgNote", "clgCheckerId", "clgCheckDate", "isSchCheck", "schNote", "schCheckerId", "schCheckDate", "idSubmitStatus", "memo"];
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
private mstrIdTeachingPlan = "";    //教案流水号
private mstrTeachingPlanId = "";    //教学计划编号
private mstrTeachingPlanDesc = "";    //教学计划名称
private mstrIdGrade = "";    //年级流水号
private mstrSchoolTerm = "";    //学期
private mstrCourseId = "";    //课程Id
private mbolIsClgCheck = false;    //是否学院审批
private mstrClgNote = "";    //学院审批意见
private mstrClgCheckerId = "";    //学院审批人id
private mstrClgCheckDate = "";    //学院审批日期
private mbolIsSchCheck = false;    //是否学校审批
private mstrSchNote = "";    //学校审批意见
private mstrSchCheckerId = "";    //学校审批人Id
private mstrSchCheckDate = "";    //学校审批日期
private mstrIdSubmitStatus = "";    //送审状态流水号
private mstrMemo = "";    //备注

/**
 * 教案流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdTeachingPlan (value: string)
{
if (value  != undefined)
{
 this.idTeachingPlan = value;
    this.hmProperty["idTeachingPlan"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学计划编号(说明:;字段类型:char;字段长度:12;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingPlanId (value: string)
{
if (value  != undefined)
{
 this.teachingPlanId = value;
    this.hmProperty["teachingPlanId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学计划名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingPlanDesc (value: string)
{
if (value  != undefined)
{
 this.teachingPlanDesc = value;
    this.hmProperty["teachingPlanDesc"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 年级流水号(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdGrade (value: string)
{
if (value  != undefined)
{
 this.idGrade = value;
    this.hmProperty["idGrade"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学期(说明:;字段类型:char;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolTerm (value: string)
{
if (value  != undefined)
{
 this.schoolTerm = value;
    this.hmProperty["schoolTerm"] = true;
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
 * 是否学院审批(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsClgCheck (value: boolean)
{
if (value  != undefined)
{
 this.isClgCheck = value;
    this.hmProperty["isClgCheck"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院审批意见(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClgNote (value: string)
{
if (value  != undefined)
{
 this.clgNote = value;
    this.hmProperty["clgNote"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院审批人id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClgCheckerId (value: string)
{
if (value  != undefined)
{
 this.clgCheckerId = value;
    this.hmProperty["clgCheckerId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院审批日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClgCheckDate (value: string)
{
if (value  != undefined)
{
 this.clgCheckDate = value;
    this.hmProperty["clgCheckDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否学校审批(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSchCheck (value: boolean)
{
if (value  != undefined)
{
 this.isSchCheck = value;
    this.hmProperty["isSchCheck"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校审批意见(说明:;字段类型:text;字段长度:16;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchNote (value: string)
{
if (value  != undefined)
{
 this.schNote = value;
    this.hmProperty["schNote"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校审批人Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchCheckerId (value: string)
{
if (value  != undefined)
{
 this.schCheckerId = value;
    this.hmProperty["schCheckerId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校审批日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchCheckDate (value: string)
{
if (value  != undefined)
{
 this.schCheckDate = value;
    this.hmProperty["schCheckDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 送审状态流水号(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSubmitStatus (value: string)
{
if (value  != undefined)
{
 this.idSubmitStatus = value;
    this.hmProperty["idSubmitStatus"] = true;
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
case clsJxTeachingPlanEN.con_IdTeachingPlan:
return this.idTeachingPlan;
case clsJxTeachingPlanEN.con_TeachingPlanId:
return this.teachingPlanId;
case clsJxTeachingPlanEN.con_TeachingPlanDesc:
return this.teachingPlanDesc;
case clsJxTeachingPlanEN.con_IdGrade:
return this.idGrade;
case clsJxTeachingPlanEN.con_SchoolTerm:
return this.schoolTerm;
case clsJxTeachingPlanEN.con_CourseId:
return this.courseId;
case clsJxTeachingPlanEN.con_IsClgCheck:
return this.isClgCheck;
case clsJxTeachingPlanEN.con_ClgNote:
return this.clgNote;
case clsJxTeachingPlanEN.con_ClgCheckerId:
return this.clgCheckerId;
case clsJxTeachingPlanEN.con_ClgCheckDate:
return this.clgCheckDate;
case clsJxTeachingPlanEN.con_IsSchCheck:
return this.isSchCheck;
case clsJxTeachingPlanEN.con_SchNote:
return this.schNote;
case clsJxTeachingPlanEN.con_SchCheckerId:
return this.schCheckerId;
case clsJxTeachingPlanEN.con_SchCheckDate:
return this.schCheckDate;
case clsJxTeachingPlanEN.con_IdSubmitStatus:
return this.idSubmitStatus;
case clsJxTeachingPlanEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[JxTeachingPlan]中不存在!`;
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
case clsJxTeachingPlanEN.con_IdTeachingPlan:
this.idTeachingPlan = strValue;
    this.hmProperty["idTeachingPlan"] = true;
break;
case clsJxTeachingPlanEN.con_TeachingPlanId:
this.teachingPlanId = strValue;
    this.hmProperty["teachingPlanId"] = true;
break;
case clsJxTeachingPlanEN.con_TeachingPlanDesc:
this.teachingPlanDesc = strValue;
    this.hmProperty["teachingPlanDesc"] = true;
break;
case clsJxTeachingPlanEN.con_IdGrade:
this.idGrade = strValue;
    this.hmProperty["idGrade"] = true;
break;
case clsJxTeachingPlanEN.con_SchoolTerm:
this.schoolTerm = strValue;
    this.hmProperty["schoolTerm"] = true;
break;
case clsJxTeachingPlanEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsJxTeachingPlanEN.con_IsClgCheck:
this.isClgCheck = Boolean(strValue);
    this.hmProperty["isClgCheck"] = true;
break;
case clsJxTeachingPlanEN.con_ClgNote:
this.clgNote = strValue;
    this.hmProperty["clgNote"] = true;
break;
case clsJxTeachingPlanEN.con_ClgCheckerId:
this.clgCheckerId = strValue;
    this.hmProperty["clgCheckerId"] = true;
break;
case clsJxTeachingPlanEN.con_ClgCheckDate:
this.clgCheckDate = strValue;
    this.hmProperty["clgCheckDate"] = true;
break;
case clsJxTeachingPlanEN.con_IsSchCheck:
this.isSchCheck = Boolean(strValue);
    this.hmProperty["isSchCheck"] = true;
break;
case clsJxTeachingPlanEN.con_SchNote:
this.schNote = strValue;
    this.hmProperty["schNote"] = true;
break;
case clsJxTeachingPlanEN.con_SchCheckerId:
this.schCheckerId = strValue;
    this.hmProperty["schCheckerId"] = true;
break;
case clsJxTeachingPlanEN.con_SchCheckDate:
this.schCheckDate = strValue;
    this.hmProperty["schCheckDate"] = true;
break;
case clsJxTeachingPlanEN.con_IdSubmitStatus:
this.idSubmitStatus = strValue;
    this.hmProperty["idSubmitStatus"] = true;
break;
case clsJxTeachingPlanEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[JxTeachingPlan]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idTeachingPlan = "";    //教案流水号
public teachingPlanId = "";    //教学计划编号
public teachingPlanDesc = "";    //教学计划名称
public idGrade = "";    //年级流水号
public schoolTerm = "";    //学期
public courseId = "";    //课程Id
public isClgCheck = false;    //是否学院审批
public clgNote = "";    //学院审批意见
public clgCheckerId = "";    //学院审批人id
public clgCheckDate = "";    //学院审批日期
public isSchCheck = false;    //是否学校审批
public schNote = "";    //学校审批意见
public schCheckerId = "";    //学校审批人Id
public schCheckDate = "";    //学校审批日期
public idSubmitStatus = "";    //送审状态流水号
public memo = "";    //备注


 /**
 * 常量:"IdTeachingPlan"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachingPlan(): string {return "idTeachingPlan";}    //教案流水号

 /**
 * 常量:"TeachingPlanId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingPlanId(): string {return "teachingPlanId";}    //教学计划编号

 /**
 * 常量:"TeachingPlanDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingPlanDesc(): string {return "teachingPlanDesc";}    //教学计划名称

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IsClgCheck"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsClgCheck(): string {return "isClgCheck";}    //是否学院审批

 /**
 * 常量:"ClgNote"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClgNote(): string {return "clgNote";}    //学院审批意见

 /**
 * 常量:"ClgCheckerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClgCheckerId(): string {return "clgCheckerId";}    //学院审批人id

 /**
 * 常量:"ClgCheckDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClgCheckDate(): string {return "clgCheckDate";}    //学院审批日期

 /**
 * 常量:"IsSchCheck"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSchCheck(): string {return "isSchCheck";}    //是否学校审批

 /**
 * 常量:"SchNote"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchNote(): string {return "schNote";}    //学校审批意见

 /**
 * 常量:"SchCheckerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchCheckerId(): string {return "schCheckerId";}    //学校审批人Id

 /**
 * 常量:"SchCheckDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchCheckDate(): string {return "schCheckDate";}    //学校审批日期

 /**
 * 常量:"IdSubmitStatus"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSubmitStatus(): string {return "idSubmitStatus";}    //送审状态流水号

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
//return propName in new clsJxTeachingPlanEN();
const instance = new clsJxTeachingPlanEN();
return instance.hasOwnProperty(propName);
}
}