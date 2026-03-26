
 /**
 * 类名:clsvgs_KnowledgesLogicRela_Sim
 * 表名:vgs_KnowledgesLogicRela_Sim(01120934)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/08 01:55:58
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
 * v知识点逻辑关系_Sim(vgs_KnowledgesLogicRela_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvgs_KnowledgesLogicRela_Sim 
{
public static _CurrTabName= "vgs_KnowledgesLogicRela_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["mId", "courseKnowledgeIdA", "courseKnowledgeIdB", "knowledgeTitleA", "knowledgeTitleB", "relaTypeId", "knowledgeGraphId", "sourceAnchor", "targetAnchor", "courseId", "relaTitle"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseKnowledgeIdA = "";    //课程知识点AId
public courseKnowledgeIdB = "";    //课程知识点BId
public knowledgeTitleA = "";    //课程知识点标题A
public knowledgeTitleB = "";    //课程知识点标题B
public relaTypeId = "";    //关系类型Id
public knowledgeGraphId = "";    //知识点图Id
public sourceAnchor = "";    //源锚点
public targetAnchor = "";    //目标锚点
public courseId = "";    //课程Id
public relaTitle = "";    //关系标题

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
case clsvgs_KnowledgesLogicRela_Sim.con_mId:
return this.mId;
case clsvgs_KnowledgesLogicRela_Sim.con_CourseKnowledgeIdA:
return this.courseKnowledgeIdA;
case clsvgs_KnowledgesLogicRela_Sim.con_CourseKnowledgeIdB:
return this.courseKnowledgeIdB;
case clsvgs_KnowledgesLogicRela_Sim.con_KnowledgeTitleA:
return this.knowledgeTitleA;
case clsvgs_KnowledgesLogicRela_Sim.con_KnowledgeTitleB:
return this.knowledgeTitleB;
case clsvgs_KnowledgesLogicRela_Sim.con_RelaTypeId:
return this.relaTypeId;
case clsvgs_KnowledgesLogicRela_Sim.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsvgs_KnowledgesLogicRela_Sim.con_SourceAnchor:
return this.sourceAnchor;
case clsvgs_KnowledgesLogicRela_Sim.con_TargetAnchor:
return this.targetAnchor;
case clsvgs_KnowledgesLogicRela_Sim.con_CourseId:
return this.courseId;
case clsvgs_KnowledgesLogicRela_Sim.con_RelaTitle:
return this.relaTitle;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_KnowledgesLogicRela_Sim]中不存在!`;
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
 * 常量:"CourseKnowledgeIdA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeIdA(): string {return "courseKnowledgeIdA";}    //课程知识点AId

 /**
 * 常量:"CourseKnowledgeIdB"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeIdB(): string {return "courseKnowledgeIdB";}    //课程知识点BId

 /**
 * 常量:"KnowledgeTitleA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTitleA(): string {return "knowledgeTitleA";}    //课程知识点标题A

 /**
 * 常量:"KnowledgeTitleB"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTitleB(): string {return "knowledgeTitleB";}    //课程知识点标题B

 /**
 * 常量:"RelaTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaTypeId(): string {return "relaTypeId";}    //关系类型Id

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"SourceAnchor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SourceAnchor(): string {return "sourceAnchor";}    //源锚点

 /**
 * 常量:"TargetAnchor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TargetAnchor(): string {return "targetAnchor";}    //目标锚点

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"RelaTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaTitle(): string {return "relaTitle";}    //关系标题
}