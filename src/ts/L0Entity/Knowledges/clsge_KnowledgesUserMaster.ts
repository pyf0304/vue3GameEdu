
 /**
 * 类名:clsge_KnowledgesUserMaster
 * 表名:ge_KnowledgesUserMaster(01120892)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:29
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
 * 知识点用户掌握(ge_KnowledgesUserMaster)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_KnowledgesUserMaster 
{
public static _CurrTabName= "ge_KnowledgesUserMaster"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["mId", "courseId", "userId", "courseKnowledgeId", "rightCount", "masterTypeId", "errorCount", "masterLevelId", "masteryValue", "updDate", "goalValue", "selfPerceivedValue", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseId = "";    //课程Id
public userId = "";    //用户ID
public courseKnowledgeId = "";    //知识点Id
public rightCount = 0;    //正确次数
public masterTypeId = "";    //掌握类型Id
public errorCount = 0;    //错误次数
public masterLevelId = "";    //掌握度Id
public masteryValue = 0;    //掌握度
public updDate = "";    //修改日期
public goalValue = 0;    //目标值
public selfPerceivedValue = 0;    //自我认为值
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
case clsge_KnowledgesUserMaster.con_mId:
return this.mId;
case clsge_KnowledgesUserMaster.con_CourseId:
return this.courseId;
case clsge_KnowledgesUserMaster.con_UserId:
return this.userId;
case clsge_KnowledgesUserMaster.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsge_KnowledgesUserMaster.con_RightCount:
return this.rightCount;
case clsge_KnowledgesUserMaster.con_MasterTypeId:
return this.masterTypeId;
case clsge_KnowledgesUserMaster.con_ErrorCount:
return this.errorCount;
case clsge_KnowledgesUserMaster.con_MasterLevelId:
return this.masterLevelId;
case clsge_KnowledgesUserMaster.con_MasteryValue:
return this.masteryValue;
case clsge_KnowledgesUserMaster.con_UpdDate:
return this.updDate;
case clsge_KnowledgesUserMaster.con_GoalValue:
return this.goalValue;
case clsge_KnowledgesUserMaster.con_SelfPerceivedValue:
return this.selfPerceivedValue;
case clsge_KnowledgesUserMaster.con_UpdUser:
return this.updUser;
case clsge_KnowledgesUserMaster.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_KnowledgesUserMaster]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"RightCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RightCount(): string {return "rightCount";}    //正确次数

 /**
 * 常量:"MasterTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterTypeId(): string {return "masterTypeId";}    //掌握类型Id

 /**
 * 常量:"ErrorCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ErrorCount(): string {return "errorCount";}    //错误次数

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
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

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