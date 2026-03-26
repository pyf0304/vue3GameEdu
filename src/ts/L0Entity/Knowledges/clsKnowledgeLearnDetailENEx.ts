
 /**
 * 类名:clsKnowledgeLearnDetailENEx
 * 表名:KnowledgeLearnDetail(01120153)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/11 15:54:21
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点学习情况(KnowledgeLearnDetail)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsKnowledgeLearnDetailEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnDetailEN";

export class  clsKnowledgeLearnDetailENEx extends clsKnowledgeLearnDetailEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsKnowledgeLearnDetailENEx.con_KnowledgeName:
return this.knowledgeName;
case clsKnowledgeLearnDetailENEx.con_CaseTypeName:
return this.caseTypeName;
case clsKnowledgeLearnDetailENEx.con_LearnModeName:
return this.learnModeName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"KnowledgeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_KnowledgeName(): string {return "knowledgeName";}    //知识点名称

 /**
 * 常量:"CaseTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CaseTypeName(): string {return "caseTypeName";}    //案例类型名称

 /**
 * 常量:"LearnModeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_LearnModeName(): string {return "learnModeName";}    //学习模式名

public knowledgeName = "";    //知识点名称
public caseTypeName = "";    //案例类型名称
public learnModeName = "";    //学习模式名

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
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
case clsKnowledgeLearnDetailENEx.con_KnowledgeName:
this.knowledgeName = strValue;
    this.hmProperty["knowledgeName"] = true;
break;
case clsKnowledgeLearnDetailENEx.con_CaseTypeName:
this.caseTypeName = strValue;
    this.hmProperty["caseTypeName"] = true;
break;
case clsKnowledgeLearnDetailENEx.con_LearnModeName:
this.learnModeName = strValue;
    this.hmProperty["learnModeName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeLearnDetail]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsKnowledgeLearnDetailENEx();
const instance = new clsKnowledgeLearnDetailENEx();
return instance.hasOwnProperty(propName);
}
}