
 /**
 * 类名:clsge_KnowledgesClsMaster
 * 表名:ge_KnowledgesClsMaster(01120962)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:34
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点教学班掌握度(ge_KnowledgesClsMaster)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_KnowledgesClsMaster 
{
public static _CurrTabName= "ge_KnowledgesClsMaster"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls,CourseKnowledgeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["idCurrEduCls", "courseKnowledgeId", "courseId", "masterLevelId", "masteryValue", "goalValue", "selfPerceivedValue", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsge_KnowledgesClsMaster.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_KnowledgesClsMaster.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsge_KnowledgesClsMaster.con_CourseId:
return this.courseId;
case clsge_KnowledgesClsMaster.con_MasterLevelId:
return this.masterLevelId;
case clsge_KnowledgesClsMaster.con_MasteryValue:
return this.masteryValue;
case clsge_KnowledgesClsMaster.con_GoalValue:
return this.goalValue;
case clsge_KnowledgesClsMaster.con_SelfPerceivedValue:
return this.selfPerceivedValue;
case clsge_KnowledgesClsMaster.con_UpdDate:
return this.updDate;
case clsge_KnowledgesClsMaster.con_UpdUser:
return this.updUser;
case clsge_KnowledgesClsMaster.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_KnowledgesClsMaster]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

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
 * 常量:"MasterLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterLevelId(): string {return "masterLevelId";}    //掌握度Id

 /**
 * 常量:"MasteryValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasteryValue(): string {return "masteryValue";}    //掌握度

 /**
 * 常量:"GoalValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GoalValue(): string {return "goalValue";}    //目标值

 /**
 * 常量:"SelfPerceivedValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SelfPerceivedValue(): string {return "selfPerceivedValue";}    //自我认为值

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