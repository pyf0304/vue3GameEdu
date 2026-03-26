
 /**
 * 类名:clsge_InspectProcess
 * 表名:ge_InspectProcess(01120910)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:24
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
 * 检查过程表(ge_InspectProcess)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_InspectProcess 
{
public static _CurrTabName= "ge_InspectProcess"; //当前表名,与该类相关的表名
public static _KeyFldName= "InspectId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["inspectId", "operationTypeId", "questionId", "courseId", "controlId", "controlTypeId", "checkMemo", "controlProp", "attributeId", "controlValue", "orderNum", "updUser", "updDate", "memo", "controlClass", "eventTypeId", "examinationTypeId", "functionName"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsge_InspectProcess.con_InspectId:
return this.inspectId;
case clsge_InspectProcess.con_OperationTypeId:
return this.operationTypeId;
case clsge_InspectProcess.con_QuestionId:
return this.questionId;
case clsge_InspectProcess.con_CourseId:
return this.courseId;
case clsge_InspectProcess.con_ControlId:
return this.controlId;
case clsge_InspectProcess.con_ControlTypeId:
return this.controlTypeId;
case clsge_InspectProcess.con_CheckMemo:
return this.checkMemo;
case clsge_InspectProcess.con_ControlProp:
return this.controlProp;
case clsge_InspectProcess.con_AttributeId:
return this.attributeId;
case clsge_InspectProcess.con_ControlValue:
return this.controlValue;
case clsge_InspectProcess.con_OrderNum:
return this.orderNum;
case clsge_InspectProcess.con_UpdUser:
return this.updUser;
case clsge_InspectProcess.con_UpdDate:
return this.updDate;
case clsge_InspectProcess.con_Memo:
return this.memo;
case clsge_InspectProcess.con_ControlClass:
return this.controlClass;
case clsge_InspectProcess.con_EventTypeId:
return this.eventTypeId;
case clsge_InspectProcess.con_ExaminationTypeId:
return this.examinationTypeId;
case clsge_InspectProcess.con_FunctionName:
return this.functionName;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_InspectProcess]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"InspectId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_InspectId(): string {return "inspectId";}    //检查Id

 /**
 * 常量:"OperationTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OperationTypeId(): string {return "operationTypeId";}    //操作类型ID

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"ControlId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlId(): string {return "controlId";}    //控件Id

 /**
 * 常量:"ControlTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlTypeId(): string {return "controlTypeId";}    //控件Id

 /**
 * 常量:"CheckMemo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CheckMemo(): string {return "checkMemo";}    //检查描述

 /**
 * 常量:"ControlProp"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlProp(): string {return "controlProp";}    //控件属性

 /**
 * 常量:"AttributeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AttributeId(): string {return "attributeId";}    //控件属性Id

 /**
 * 常量:"ControlValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlValue(): string {return "controlValue";}    //控件值

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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

 /**
 * 常量:"ControlClass"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlClass(): string {return "controlClass";}    //控件样式

 /**
 * 常量:"EventTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EventTypeId(): string {return "eventTypeId";}    //事件Id

 /**
 * 常量:"ExaminationTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExaminationTypeId(): string {return "examinationTypeId";}    //检查类型Id

 /**
 * 常量:"FunctionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FunctionName(): string {return "functionName";}    //函数名
}