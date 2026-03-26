
 /**
 * 类名:clsge_InspectProcessEN
 * 表名:ge_InspectProcess(01120910)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:22
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
 * 检查过程表(ge_InspectProcess)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_InspectProcessEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_InspectProcess"; //当前表名,与该类相关的表名
public static _KeyFldName= "InspectId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["inspectId", "operationTypeId", "questionId", "courseId", "controlId", "controlTypeId", "checkMemo", "controlProp", "attributeId", "controlValue", "orderNum", "updUser", "updDate", "memo", "controlClass", "eventTypeId", "examinationTypeId", "functionName"];
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
private mstrInspectId = "";    //检查Id
private mstrOperationTypeId = "";    //操作类型ID
private mlngQuestionId = 0;    //题目Id
private mstrCourseId = "";    //课程Id
private mstrControlId = "";    //控件Id
private mstrControlTypeId = "";    //控件Id
private mstrCheckMemo = "";    //检查描述
private mstrControlProp = "";    //控件属性
private mstrAttributeId = "";    //控件属性Id
private mstrControlValue = "";    //控件值
private mintOrderNum = 0;    //序号
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注
private mstrControlClass = "";    //控件样式
private mstrEventTypeId = "";    //事件Id
private mstrExaminationTypeId = "";    //检查类型Id
private mstrFunctionName = "";    //函数名

/**
 * 检查Id(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetInspectId (value: string)
{
if (value  != undefined)
{
 this.inspectId = value;
    this.hmProperty["inspectId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 操作类型ID(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOperationTypeId (value: string)
{
if (value  != undefined)
{
 this.operationTypeId = value;
    this.hmProperty["operationTypeId"] = true;
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
 * 检查描述(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCheckMemo (value: string)
{
if (value  != undefined)
{
 this.checkMemo = value;
    this.hmProperty["checkMemo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 控件属性(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetControlProp (value: string)
{
if (value  != undefined)
{
 this.controlProp = value;
    this.hmProperty["controlProp"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 控件属性Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAttributeId (value: string)
{
if (value  != undefined)
{
 this.attributeId = value;
    this.hmProperty["attributeId"] = true;
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
 * 函数名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFunctionName (value: string)
{
if (value  != undefined)
{
 this.functionName = value;
    this.hmProperty["functionName"] = true;
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
case clsge_InspectProcessEN.con_InspectId:
return this.inspectId;
case clsge_InspectProcessEN.con_OperationTypeId:
return this.operationTypeId;
case clsge_InspectProcessEN.con_QuestionId:
return this.questionId;
case clsge_InspectProcessEN.con_CourseId:
return this.courseId;
case clsge_InspectProcessEN.con_ControlId:
return this.controlId;
case clsge_InspectProcessEN.con_ControlTypeId:
return this.controlTypeId;
case clsge_InspectProcessEN.con_CheckMemo:
return this.checkMemo;
case clsge_InspectProcessEN.con_ControlProp:
return this.controlProp;
case clsge_InspectProcessEN.con_AttributeId:
return this.attributeId;
case clsge_InspectProcessEN.con_ControlValue:
return this.controlValue;
case clsge_InspectProcessEN.con_OrderNum:
return this.orderNum;
case clsge_InspectProcessEN.con_UpdUser:
return this.updUser;
case clsge_InspectProcessEN.con_UpdDate:
return this.updDate;
case clsge_InspectProcessEN.con_Memo:
return this.memo;
case clsge_InspectProcessEN.con_ControlClass:
return this.controlClass;
case clsge_InspectProcessEN.con_EventTypeId:
return this.eventTypeId;
case clsge_InspectProcessEN.con_ExaminationTypeId:
return this.examinationTypeId;
case clsge_InspectProcessEN.con_FunctionName:
return this.functionName;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_InspectProcess]中不存在!`;
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
case clsge_InspectProcessEN.con_InspectId:
this.inspectId = strValue;
    this.hmProperty["inspectId"] = true;
break;
case clsge_InspectProcessEN.con_OperationTypeId:
this.operationTypeId = strValue;
    this.hmProperty["operationTypeId"] = true;
break;
case clsge_InspectProcessEN.con_QuestionId:
this.questionId = Number(strValue);
    this.hmProperty["questionId"] = true;
break;
case clsge_InspectProcessEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_InspectProcessEN.con_ControlId:
this.controlId = strValue;
    this.hmProperty["controlId"] = true;
break;
case clsge_InspectProcessEN.con_ControlTypeId:
this.controlTypeId = strValue;
    this.hmProperty["controlTypeId"] = true;
break;
case clsge_InspectProcessEN.con_CheckMemo:
this.checkMemo = strValue;
    this.hmProperty["checkMemo"] = true;
break;
case clsge_InspectProcessEN.con_ControlProp:
this.controlProp = strValue;
    this.hmProperty["controlProp"] = true;
break;
case clsge_InspectProcessEN.con_AttributeId:
this.attributeId = strValue;
    this.hmProperty["attributeId"] = true;
break;
case clsge_InspectProcessEN.con_ControlValue:
this.controlValue = strValue;
    this.hmProperty["controlValue"] = true;
break;
case clsge_InspectProcessEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsge_InspectProcessEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_InspectProcessEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_InspectProcessEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsge_InspectProcessEN.con_ControlClass:
this.controlClass = strValue;
    this.hmProperty["controlClass"] = true;
break;
case clsge_InspectProcessEN.con_EventTypeId:
this.eventTypeId = strValue;
    this.hmProperty["eventTypeId"] = true;
break;
case clsge_InspectProcessEN.con_ExaminationTypeId:
this.examinationTypeId = strValue;
    this.hmProperty["examinationTypeId"] = true;
break;
case clsge_InspectProcessEN.con_FunctionName:
this.functionName = strValue;
    this.hmProperty["functionName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_InspectProcess]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public inspectId = "";    //检查Id
public operationTypeId = "";    //操作类型ID
public questionId = 0;    //题目Id
public courseId = "";    //课程Id
public controlId = "";    //控件Id
public controlTypeId = "";    //控件Id
public checkMemo = "";    //检查描述
public controlProp = "";    //控件属性
public attributeId = "";    //控件属性Id
public controlValue = "";    //控件值
public orderNum = 0;    //序号
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注
public controlClass = "";    //控件样式
public eventTypeId = "";    //事件Id
public examinationTypeId = "";    //检查类型Id
public functionName = "";    //函数名


 /**
 * 常量:"InspectId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InspectId(): string {return "inspectId";}    //检查Id

 /**
 * 常量:"OperationTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OperationTypeId(): string {return "operationTypeId";}    //操作类型ID

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
 * 常量:"ControlId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlId(): string {return "controlId";}    //控件Id

 /**
 * 常量:"ControlTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlTypeId(): string {return "controlTypeId";}    //控件Id

 /**
 * 常量:"CheckMemo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CheckMemo(): string {return "checkMemo";}    //检查描述

 /**
 * 常量:"ControlProp"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlProp(): string {return "controlProp";}    //控件属性

 /**
 * 常量:"AttributeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AttributeId(): string {return "attributeId";}    //控件属性Id

 /**
 * 常量:"ControlValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlValue(): string {return "controlValue";}    //控件值

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
 * 常量:"ControlClass"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ControlClass(): string {return "controlClass";}    //控件样式

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
 * 常量:"FunctionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FunctionName(): string {return "functionName";}    //函数名

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
//return propName in new clsge_InspectProcessEN();
const instance = new clsge_InspectProcessEN();
return instance.hasOwnProperty(propName);
}
}