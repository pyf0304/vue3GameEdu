
 /**
 * 类名:clsTeachingCaseResCaseType
 * 表名:TeachingCaseResCaseType(01120514)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:50
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学案例资源案例类型(TeachingCaseResCaseType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsTeachingCaseResCaseType 
{
public static _CurrTabName= "TeachingCaseResCaseType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeachingCaseResCaseType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["idTeachingCaseResCaseType", "teachingCaseResCaseTypeId", "teachingCaseResCaseTypeName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idTeachingCaseResCaseType = "";    //教学案例资源类型流水号
public teachingCaseResCaseTypeId = "";    //教学案例资源案例类型Id
public teachingCaseResCaseTypeName = "";    //教学案例资源案例类型名称
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
case clsTeachingCaseResCaseType.con_IdTeachingCaseResCaseType:
return this.idTeachingCaseResCaseType;
case clsTeachingCaseResCaseType.con_TeachingCaseResCaseTypeId:
return this.teachingCaseResCaseTypeId;
case clsTeachingCaseResCaseType.con_TeachingCaseResCaseTypeName:
return this.teachingCaseResCaseTypeName;
case clsTeachingCaseResCaseType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TeachingCaseResCaseType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdTeachingCaseResCaseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachingCaseResCaseType(): string {return "idTeachingCaseResCaseType";}    //教学案例资源类型流水号

 /**
 * 常量:"TeachingCaseResCaseTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseTypeId(): string {return "teachingCaseResCaseTypeId";}    //教学案例资源案例类型Id

 /**
 * 常量:"TeachingCaseResCaseTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseTypeName(): string {return "teachingCaseResCaseTypeName";}    //教学案例资源案例类型名称

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}