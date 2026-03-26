
 /**
 * 类名:clsgs_KnowledgeType
 * 表名:gs_KnowledgeType(01120954)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:23:34
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培参数(RT_Params)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 知识类型(gs_KnowledgeType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_KnowledgeType 
{
public static _CurrTabName= "gs_KnowledgeType"; //当前表名,与该类相关的表名
public static _KeyFldName= "gsKnowledgeTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["gsKnowledgeTypeId", "gsKnowledgeTypeName", "knowledgeTypeENName", "orderNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public gsKnowledgeTypeId = "";    //知识类型Id
public gsKnowledgeTypeName = "";    //知识类型名
public knowledgeTypeENName = "";    //知识类型英文名
public orderNum = 0;    //序号
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
case clsgs_KnowledgeType.con_gsKnowledgeTypeId:
return this.gsKnowledgeTypeId;
case clsgs_KnowledgeType.con_gsKnowledgeTypeName:
return this.gsKnowledgeTypeName;
case clsgs_KnowledgeType.con_KnowledgeTypeENName:
return this.knowledgeTypeENName;
case clsgs_KnowledgeType.con_OrderNum:
return this.orderNum;
case clsgs_KnowledgeType.con_UpdDate:
return this.updDate;
case clsgs_KnowledgeType.con_UpdUser:
return this.updUser;
case clsgs_KnowledgeType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgeType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"gsKnowledgeTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_gsKnowledgeTypeId(): string {return "gsKnowledgeTypeId";}    //知识类型Id

 /**
 * 常量:"gsKnowledgeTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_gsKnowledgeTypeName(): string {return "gsKnowledgeTypeName";}    //知识类型名

 /**
 * 常量:"KnowledgeTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTypeENName(): string {return "knowledgeTypeENName";}    //知识类型英文名

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumgs_KnowledgeType
{
 /**
 * 未知
 **/
static readonly Unknown_00 = "00";
 /**
 * 个人观点
 **/
static readonly PersonalOpinion_01 = "01";
 /**
 * 专家观点
 **/
static readonly ExpertOpinion_02 = "02";
 /**
 * 概念
 **/
static readonly Concept_03 = "03";
 /**
 * 客观事实
 **/
static readonly ObjectiveFact_04 = "04";
 /**
 * 客观数据
 **/
static readonly ObjectiveData_05 = "05";
 /**
 * 技能
 **/
static readonly Skill_06 = "06";
 /**
 * 社会关系
 **/
static readonly SocialRelationships_07 = "07";
}