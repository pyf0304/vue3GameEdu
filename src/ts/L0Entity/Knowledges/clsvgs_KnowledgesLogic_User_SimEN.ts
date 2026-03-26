
 /**
 * 类名:clsvgs_KnowledgesLogic_User_SimEN
 * 表名:vgs_KnowledgesLogic_User_Sim(01120933)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:50:42
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
 * v知识点逻辑用户关系_Sim(vgs_KnowledgesLogic_User_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvgs_KnowledgesLogic_User_SimEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vgs_KnowledgesLogic_User_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["mId", "courseKnowledgeId", "knowledgeGraphId", "className", "courseId", "idCurrEduCls", "userId"];
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
case clsvgs_KnowledgesLogic_User_SimEN.con_mId:
return this.mId;
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsvgs_KnowledgesLogic_User_SimEN.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsvgs_KnowledgesLogic_User_SimEN.con_ClassName:
return this.className;
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseId:
return this.courseId;
case clsvgs_KnowledgesLogic_User_SimEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_KnowledgesLogic_User_SimEN.con_UserId:
return this.userId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_KnowledgesLogic_User_Sim]中不存在!`;
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
case clsvgs_KnowledgesLogic_User_SimEN.con_mId:
this.mId = Number(strValue);
break;
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseKnowledgeId:
this.courseKnowledgeId = strValue;
break;
case clsvgs_KnowledgesLogic_User_SimEN.con_KnowledgeGraphId:
this.knowledgeGraphId = strValue;
break;
case clsvgs_KnowledgesLogic_User_SimEN.con_ClassName:
this.className = strValue;
break;
case clsvgs_KnowledgesLogic_User_SimEN.con_CourseId:
this.courseId = strValue;
break;
case clsvgs_KnowledgesLogic_User_SimEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvgs_KnowledgesLogic_User_SimEN.con_UserId:
this.userId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_KnowledgesLogic_User_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseKnowledgeId = "";    //知识点Id
public knowledgeGraphId = "";    //知识点图Id
public className = "";    //样式名称
public courseId = "";    //课程Id
public idCurrEduCls = "";    //教学班流水号
public userId = "";    //用户ID


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"ClassName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClassName(): string {return "className";}    //样式名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

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
//return propName in new clsvgs_KnowledgesLogic_User_SimEN();
const instance = new clsvgs_KnowledgesLogic_User_SimEN();
return instance.hasOwnProperty(propName);
}
}