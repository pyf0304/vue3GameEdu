
 /**
 * 类名:clsCaseType
 * 表名:CaseType(01120310)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:25:00
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:技能示范(SkillDemo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 案例类型(CaseType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsCaseType 
{
public static _CurrTabName= "CaseType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCaseType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idCaseType", "caseTypeID", "caseTypeName", "caseTypeEnName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idCaseType = "";    //案例类型流水号
public caseTypeID = "";    //案例类型ID
public caseTypeName = "";    //案例类型名称
public caseTypeEnName = "";    //案例类型英文名
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
case clsCaseType.con_IdCaseType:
return this.idCaseType;
case clsCaseType.con_CaseTypeID:
return this.caseTypeID;
case clsCaseType.con_CaseTypeName:
return this.caseTypeName;
case clsCaseType.con_CaseTypeEnName:
return this.caseTypeEnName;
case clsCaseType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CaseType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdCaseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCaseType(): string {return "idCaseType";}    //案例类型流水号

 /**
 * 常量:"CaseTypeID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CaseTypeID(): string {return "caseTypeID";}    //案例类型ID

 /**
 * 常量:"CaseTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CaseTypeName(): string {return "caseTypeName";}    //案例类型名称

 /**
 * 常量:"CaseTypeEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CaseTypeEnName(): string {return "caseTypeEnName";}    //案例类型英文名

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
 export class enumCaseType
{
 /**
 * 其他
 **/
static readonly Others_0000 = "0000";
 /**
 * 文本
 **/
static readonly Text_0001 = "0001";
 /**
 * 图片
 **/
static readonly Image_0002 = "0002";
 /**
 * 视频
 **/
static readonly Video_0003 = "0003";
 /**
 * 习题
 **/
static readonly Questionnaire_0004 = "0004";
}