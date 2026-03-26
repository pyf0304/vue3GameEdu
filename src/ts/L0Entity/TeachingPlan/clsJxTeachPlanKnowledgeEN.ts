
 /**
 * 类名:clsJxTeachPlanKnowledgeEN
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:13
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
 * 教学计划知识点(JxTeachPlanKnowledge)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsJxTeachPlanKnowledgeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "JxTeachPlanKnowledge"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeachPlanKnowledge"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["idTeachPlanKnowledge", "idTeachingPlan", "courseKnowledgeId", "courseId", "teachingMethodId", "assessmentMethodId", "updDate", "updUser", "memo"];
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
private mstrIdTeachPlanKnowledge = "";    //教学计划知识点流水号
private mstrIdTeachingPlan = "";    //教案流水号
private mstrCourseKnowledgeId = "";    //知识点Id
private mstrCourseId = "";    //课程Id
private mstrTeachingMethodId = "";    //教学方式Id
private mstrAssessmentMethodId = "";    //考核方式Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 教学计划知识点流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdTeachPlanKnowledge (value: string)
{
if (value  != undefined)
{
 this.idTeachPlanKnowledge = value;
    this.hmProperty["idTeachPlanKnowledge"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 教学方式Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingMethodId (value: string)
{
if (value  != undefined)
{
 this.teachingMethodId = value;
    this.hmProperty["teachingMethodId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考核方式Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAssessmentMethodId (value: string)
{
if (value  != undefined)
{
 this.assessmentMethodId = value;
    this.hmProperty["assessmentMethodId"] = true;
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
case clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge:
return this.idTeachPlanKnowledge;
case clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan:
return this.idTeachingPlan;
case clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsJxTeachPlanKnowledgeEN.con_CourseId:
return this.courseId;
case clsJxTeachPlanKnowledgeEN.con_TeachingMethodId:
return this.teachingMethodId;
case clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId:
return this.assessmentMethodId;
case clsJxTeachPlanKnowledgeEN.con_UpdDate:
return this.updDate;
case clsJxTeachPlanKnowledgeEN.con_UpdUser:
return this.updUser;
case clsJxTeachPlanKnowledgeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[JxTeachPlanKnowledge]中不存在!`;
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
case clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge:
this.idTeachPlanKnowledge = strValue;
    this.hmProperty["idTeachPlanKnowledge"] = true;
break;
case clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan:
this.idTeachingPlan = strValue;
    this.hmProperty["idTeachingPlan"] = true;
break;
case clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId:
this.courseKnowledgeId = strValue;
    this.hmProperty["courseKnowledgeId"] = true;
break;
case clsJxTeachPlanKnowledgeEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsJxTeachPlanKnowledgeEN.con_TeachingMethodId:
this.teachingMethodId = strValue;
    this.hmProperty["teachingMethodId"] = true;
break;
case clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId:
this.assessmentMethodId = strValue;
    this.hmProperty["assessmentMethodId"] = true;
break;
case clsJxTeachPlanKnowledgeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsJxTeachPlanKnowledgeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsJxTeachPlanKnowledgeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[JxTeachPlanKnowledge]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idTeachPlanKnowledge = "";    //教学计划知识点流水号
public idTeachingPlan = "";    //教案流水号
public courseKnowledgeId = "";    //知识点Id
public courseId = "";    //课程Id
public teachingMethodId = "";    //教学方式Id
public assessmentMethodId = "";    //考核方式Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"IdTeachPlanKnowledge"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachPlanKnowledge(): string {return "idTeachPlanKnowledge";}    //教学计划知识点流水号

 /**
 * 常量:"IdTeachingPlan"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachingPlan(): string {return "idTeachingPlan";}    //教案流水号

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
 * 常量:"TeachingMethodId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingMethodId(): string {return "teachingMethodId";}    //教学方式Id

 /**
 * 常量:"AssessmentMethodId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AssessmentMethodId(): string {return "assessmentMethodId";}    //考核方式Id

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
//return propName in new clsJxTeachPlanKnowledgeEN();
const instance = new clsJxTeachPlanKnowledgeEN();
return instance.hasOwnProperty(propName);
}
}