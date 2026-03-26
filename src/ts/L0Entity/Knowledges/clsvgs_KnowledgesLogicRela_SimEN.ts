
 /**
 * 类名:clsvgs_KnowledgesLogicRela_SimEN
 * 表名:vgs_KnowledgesLogicRela_Sim(01120934)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/08 01:55:55
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v知识点逻辑关系_Sim(vgs_KnowledgesLogicRela_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_KnowledgesLogicRela_SimEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_KnowledgesLogicRela_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["mId", "courseKnowledgeIdA", "courseKnowledgeIdB", "knowledgeTitleA", "knowledgeTitleB", "relaTypeId", "knowledgeGraphId", "sourceAnchor", "targetAnchor", "courseId", "relaTitle"];
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
case clsvgs_KnowledgesLogicRela_SimEN.con_mId:
return this.mId;
case clsvgs_KnowledgesLogicRela_SimEN.con_CourseKnowledgeIdA:
return this.courseKnowledgeIdA;
case clsvgs_KnowledgesLogicRela_SimEN.con_CourseKnowledgeIdB:
return this.courseKnowledgeIdB;
case clsvgs_KnowledgesLogicRela_SimEN.con_KnowledgeTitleA:
return this.knowledgeTitleA;
case clsvgs_KnowledgesLogicRela_SimEN.con_KnowledgeTitleB:
return this.knowledgeTitleB;
case clsvgs_KnowledgesLogicRela_SimEN.con_RelaTypeId:
return this.relaTypeId;
case clsvgs_KnowledgesLogicRela_SimEN.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsvgs_KnowledgesLogicRela_SimEN.con_SourceAnchor:
return this.sourceAnchor;
case clsvgs_KnowledgesLogicRela_SimEN.con_TargetAnchor:
return this.targetAnchor;
case clsvgs_KnowledgesLogicRela_SimEN.con_CourseId:
return this.courseId;
case clsvgs_KnowledgesLogicRela_SimEN.con_RelaTitle:
return this.relaTitle;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_KnowledgesLogicRela_Sim]中不存在!`;
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
case clsvgs_KnowledgesLogicRela_SimEN.con_mId:
this.mId = Number(strValue);
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_CourseKnowledgeIdA:
this.courseKnowledgeIdA = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_CourseKnowledgeIdB:
this.courseKnowledgeIdB = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_KnowledgeTitleA:
this.knowledgeTitleA = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_KnowledgeTitleB:
this.knowledgeTitleB = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_RelaTypeId:
this.relaTypeId = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_KnowledgeGraphId:
this.knowledgeGraphId = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_SourceAnchor:
this.sourceAnchor = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_TargetAnchor:
this.targetAnchor = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_CourseId:
this.courseId = strValue;
break;
case clsvgs_KnowledgesLogicRela_SimEN.con_RelaTitle:
this.relaTitle = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_KnowledgesLogicRela_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseKnowledgeIdA"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeIdA(): string {return "courseKnowledgeIdA";}    //课程知识点AId

 /**
 * 常量:"CourseKnowledgeIdB"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeIdB(): string {return "courseKnowledgeIdB";}    //课程知识点BId

 /**
 * 常量:"KnowledgeTitleA"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeTitleA(): string {return "knowledgeTitleA";}    //课程知识点标题A

 /**
 * 常量:"KnowledgeTitleB"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeTitleB(): string {return "knowledgeTitleB";}    //课程知识点标题B

 /**
 * 常量:"RelaTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RelaTypeId(): string {return "relaTypeId";}    //关系类型Id

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"SourceAnchor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SourceAnchor(): string {return "sourceAnchor";}    //源锚点

 /**
 * 常量:"TargetAnchor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TargetAnchor(): string {return "targetAnchor";}    //目标锚点

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"RelaTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RelaTitle(): string {return "relaTitle";}    //关系标题

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
//return propName in new clsvgs_KnowledgesLogicRela_SimEN();
const instance = new clsvgs_KnowledgesLogicRela_SimEN();
return instance.hasOwnProperty(propName);
}
}