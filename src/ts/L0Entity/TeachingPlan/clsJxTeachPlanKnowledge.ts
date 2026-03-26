
 /**
 * 类名:clsJxTeachPlanKnowledge
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:15
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学计划知识点(JxTeachPlanKnowledge)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsJxTeachPlanKnowledge 
{
public static _CurrTabName= "JxTeachPlanKnowledge"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeachPlanKnowledge"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["idTeachPlanKnowledge", "idTeachingPlan", "courseKnowledgeId", "courseId", "teachingMethodId", "assessmentMethodId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsJxTeachPlanKnowledge.con_IdTeachPlanKnowledge:
return this.idTeachPlanKnowledge;
case clsJxTeachPlanKnowledge.con_IdTeachingPlan:
return this.idTeachingPlan;
case clsJxTeachPlanKnowledge.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsJxTeachPlanKnowledge.con_CourseId:
return this.courseId;
case clsJxTeachPlanKnowledge.con_TeachingMethodId:
return this.teachingMethodId;
case clsJxTeachPlanKnowledge.con_AssessmentMethodId:
return this.assessmentMethodId;
case clsJxTeachPlanKnowledge.con_UpdDate:
return this.updDate;
case clsJxTeachPlanKnowledge.con_UpdUser:
return this.updUser;
case clsJxTeachPlanKnowledge.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[JxTeachPlanKnowledge]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdTeachPlanKnowledge"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachPlanKnowledge(): string {return "idTeachPlanKnowledge";}    //教学计划知识点流水号

 /**
 * 常量:"IdTeachingPlan"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachingPlan(): string {return "idTeachingPlan";}    //教案流水号

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"TeachingMethodId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingMethodId(): string {return "teachingMethodId";}    //教学方式Id

 /**
 * 常量:"AssessmentMethodId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AssessmentMethodId(): string {return "assessmentMethodId";}    //考核方式Id

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
}