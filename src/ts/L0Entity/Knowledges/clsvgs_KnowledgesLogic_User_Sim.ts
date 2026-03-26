
 /**
 * 类名:clsvgs_KnowledgesLogic_User_Sim
 * 表名:vgs_KnowledgesLogic_User_Sim(01120933)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:50:44
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
 * v知识点逻辑用户关系_Sim(vgs_KnowledgesLogic_User_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvgs_KnowledgesLogic_User_Sim 
{
public static _CurrTabName= "vgs_KnowledgesLogic_User_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["mId", "courseKnowledgeId", "knowledgeGraphId", "className", "courseId", "idCurrEduCls", "userId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseKnowledgeId = "";    //知识点Id
public knowledgeGraphId = "";    //知识点图Id
public className = "";    //样式名称
public courseId = "";    //课程Id
public idCurrEduCls = "";    //教学班流水号
public userId = "";    //用户ID

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
case clsvgs_KnowledgesLogic_User_Sim.con_mId:
return this.mId;
case clsvgs_KnowledgesLogic_User_Sim.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsvgs_KnowledgesLogic_User_Sim.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsvgs_KnowledgesLogic_User_Sim.con_ClassName:
return this.className;
case clsvgs_KnowledgesLogic_User_Sim.con_CourseId:
return this.courseId;
case clsvgs_KnowledgesLogic_User_Sim.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_KnowledgesLogic_User_Sim.con_UserId:
return this.userId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_KnowledgesLogic_User_Sim]中不存在!`;
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
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"ClassName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassName(): string {return "className";}    //样式名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID
}