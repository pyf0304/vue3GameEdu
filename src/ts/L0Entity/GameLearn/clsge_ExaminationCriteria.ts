
 /**
 * 类名:clsge_ExaminationCriteria
 * 表名:ge_ExaminationCriteria(01120898)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:21
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
 * 题目检查标准表(ge_ExaminationCriteria)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_ExaminationCriteria 
{
public static _CurrTabName= "ge_ExaminationCriteria"; //当前表名,与该类相关的表名
public static _KeyFldName= "CriteriaId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["criteriaId", "questionId", "courseId", "describe", "controlTypeId", "eventTypeId", "examinationTypeId", "controlId", "controlClass", "controlValue", "controlHtml", "updDate", "updUser", "memo", "orderNum"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsge_ExaminationCriteria.con_CriteriaId:
return this.criteriaId;
case clsge_ExaminationCriteria.con_QuestionId:
return this.questionId;
case clsge_ExaminationCriteria.con_CourseId:
return this.courseId;
case clsge_ExaminationCriteria.con_Describe:
return this.describe;
case clsge_ExaminationCriteria.con_ControlTypeId:
return this.controlTypeId;
case clsge_ExaminationCriteria.con_EventTypeId:
return this.eventTypeId;
case clsge_ExaminationCriteria.con_ExaminationTypeId:
return this.examinationTypeId;
case clsge_ExaminationCriteria.con_ControlId:
return this.controlId;
case clsge_ExaminationCriteria.con_ControlClass:
return this.controlClass;
case clsge_ExaminationCriteria.con_ControlValue:
return this.controlValue;
case clsge_ExaminationCriteria.con_ControlHtml:
return this.controlHtml;
case clsge_ExaminationCriteria.con_UpdDate:
return this.updDate;
case clsge_ExaminationCriteria.con_UpdUser:
return this.updUser;
case clsge_ExaminationCriteria.con_Memo:
return this.memo;
case clsge_ExaminationCriteria.con_OrderNum:
return this.orderNum;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_ExaminationCriteria]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CriteriaId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CriteriaId(): string {return "criteriaId";}    //标准Id

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
 * 常量:"Describe"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Describe(): string {return "describe";}    //标准描述

 /**
 * 常量:"ControlTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlTypeId(): string {return "controlTypeId";}    //控件Id

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
 * 常量:"ControlId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlId(): string {return "controlId";}    //控件Id

 /**
 * 常量:"ControlClass"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlClass(): string {return "controlClass";}    //控件样式

 /**
 * 常量:"ControlValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlValue(): string {return "controlValue";}    //控件值

 /**
 * 常量:"ControlHtml"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ControlHtml(): string {return "controlHtml";}    //控件html

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号
}