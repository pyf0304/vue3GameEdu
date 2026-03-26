
 /**
 * 类名:clsge_ExaminationCriteriaEN
 * 表名:ge_ExaminationCriteria(01120898)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:18
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
 * 题目检查标准表(ge_ExaminationCriteria)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_ExaminationCriteriaEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_ExaminationCriteria"; //当前表名,与该类相关的表名
public static _KeyFldName= "CriteriaId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["criteriaId", "questionId", "courseId", "describe", "controlTypeId", "eventTypeId", "examinationTypeId", "controlId", "controlClass", "controlValue", "controlHtml", "updDate", "updUser", "memo", "orderNum"];
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
private mstrCriteriaId = "";    //标准Id
private mlngQuestionId = 0;    //题目Id
private mstrCourseId = "";    //课程Id
private mstrDescribe = "";    //标准描述
private mstrControlTypeId = "";    //控件Id
private mstrEventTypeId = "";    //事件Id
private mstrExaminationTypeId = "";    //检查类型Id
private mstrControlId = "";    //控件Id
private mstrControlClass = "";    //控件样式
private mstrControlValue = "";    //控件值
private mstrControlHtml = "";    //控件html
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mintOrderNum = 0;    //序号

/**
 * 标准Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCriteriaId (value: string)
{
if (value  != undefined)
{
 this.criteriaId = value;
    this.hmProperty["criteriaId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionId (value: number)
{
if (value  != undefined)
{
 this.questionId = value;
    this.hmProperty["questionId"] = true;
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
 * 标准描述(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDescribe (value: string)
{
if (value  != undefined)
{
 this.describe = value;
    this.hmProperty["describe"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 控件Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetControlTypeId (value: string)
{
if (value  != undefined)
{
 this.controlTypeId = value;
    this.hmProperty["controlTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 事件Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEventTypeId (value: string)
{
if (value  != undefined)
{
 this.eventTypeId = value;
    this.hmProperty["eventTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 检查类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExaminationTypeId (value: string)
{
if (value  != undefined)
{
 this.examinationTypeId = value;
    this.hmProperty["examinationTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 控件Id(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetControlId (value: string)
{
if (value  != undefined)
{
 this.controlId = value;
    this.hmProperty["controlId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 控件样式(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetControlClass (value: string)
{
if (value  != undefined)
{
 this.controlClass = value;
    this.hmProperty["controlClass"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 控件值(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetControlValue (value: string)
{
if (value  != undefined)
{
 this.controlValue = value;
    this.hmProperty["controlValue"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 控件html(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetControlHtml (value: string)
{
if (value  != undefined)
{
 this.controlHtml = value;
    this.hmProperty["controlHtml"] = true;
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
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
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
case clsge_ExaminationCriteriaEN.con_CriteriaId:
return this.criteriaId;
case clsge_ExaminationCriteriaEN.con_QuestionId:
return this.questionId;
case clsge_ExaminationCriteriaEN.con_CourseId:
return this.courseId;
case clsge_ExaminationCriteriaEN.con_Describe:
return this.describe;
case clsge_ExaminationCriteriaEN.con_ControlTypeId:
return this.controlTypeId;
case clsge_ExaminationCriteriaEN.con_EventTypeId:
return this.eventTypeId;
case clsge_ExaminationCriteriaEN.con_ExaminationTypeId:
return this.examinationTypeId;
case clsge_ExaminationCriteriaEN.con_ControlId:
return this.controlId;
case clsge_ExaminationCriteriaEN.con_ControlClass:
return this.controlClass;
case clsge_ExaminationCriteriaEN.con_ControlValue:
return this.controlValue;
case clsge_ExaminationCriteriaEN.con_ControlHtml:
return this.controlHtml;
case clsge_ExaminationCriteriaEN.con_UpdDate:
return this.updDate;
case clsge_ExaminationCriteriaEN.con_UpdUser:
return this.updUser;
case clsge_ExaminationCriteriaEN.con_Memo:
return this.memo;
case clsge_ExaminationCriteriaEN.con_OrderNum:
return this.orderNum;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_ExaminationCriteria]中不存在!`;
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
case clsge_ExaminationCriteriaEN.con_CriteriaId:
this.criteriaId = strValue;
    this.hmProperty["criteriaId"] = true;
break;
case clsge_ExaminationCriteriaEN.con_QuestionId:
this.questionId = Number(strValue);
    this.hmProperty["questionId"] = true;
break;
case clsge_ExaminationCriteriaEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_ExaminationCriteriaEN.con_Describe:
this.describe = strValue;
    this.hmProperty["describe"] = true;
break;
case clsge_ExaminationCriteriaEN.con_ControlTypeId:
this.controlTypeId = strValue;
    this.hmProperty["controlTypeId"] = true;
break;
case clsge_ExaminationCriteriaEN.con_EventTypeId:
this.eventTypeId = strValue;
    this.hmProperty["eventTypeId"] = true;
break;
case clsge_ExaminationCriteriaEN.con_ExaminationTypeId:
this.examinationTypeId = strValue;
    this.hmProperty["examinationTypeId"] = true;
break;
case clsge_ExaminationCriteriaEN.con_ControlId:
this.controlId = strValue;
    this.hmProperty["controlId"] = true;
break;
case clsge_ExaminationCriteriaEN.con_ControlClass:
this.controlClass = strValue;
    this.hmProperty["controlClass"] = true;
break;
case clsge_ExaminationCriteriaEN.con_ControlValue:
this.controlValue = strValue;
    this.hmProperty["controlValue"] = true;
break;
case clsge_ExaminationCriteriaEN.con_ControlHtml:
this.controlHtml = strValue;
    this.hmProperty["controlHtml"] = true;
break;
case clsge_ExaminationCriteriaEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_ExaminationCriteriaEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_ExaminationCriteriaEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsge_ExaminationCriteriaEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_ExaminationCriteria]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public criteriaId = "";    //标准Id
public questionId = 0;    //题目Id
public courseId = "";    //课程Id
public describe = "";    //标准描述
public controlTypeId = "";    //控件Id
public eventTypeId = "";    //事件Id
public examinationTypeId = "";    //检查类型Id
public controlId = "";    //控件Id
public controlClass = "";    //控件样式
public controlValue = "";    //控件值
public controlHtml = "";    //控件html
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public orderNum = 0;    //序号


 /**
 * 常量:"CriteriaId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CriteriaId(): string {return "criteriaId";}    //标准Id

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"Describe"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Describe(): string {return "describe";}    //标准描述

 /**
 * 常量:"ControlTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlTypeId(): string {return "controlTypeId";}    //控件Id

 /**
 * 常量:"EventTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EventTypeId(): string {return "eventTypeId";}    //事件Id

 /**
 * 常量:"ExaminationTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ExaminationTypeId(): string {return "examinationTypeId";}    //检查类型Id

 /**
 * 常量:"ControlId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlId(): string {return "controlId";}    //控件Id

 /**
 * 常量:"ControlClass"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlClass(): string {return "controlClass";}    //控件样式

 /**
 * 常量:"ControlValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlValue(): string {return "controlValue";}    //控件值

 /**
 * 常量:"ControlHtml"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlHtml(): string {return "controlHtml";}    //控件html

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
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
//return propName in new clsge_ExaminationCriteriaEN();
const instance = new clsge_ExaminationCriteriaEN();
return instance.hasOwnProperty(propName);
}
}