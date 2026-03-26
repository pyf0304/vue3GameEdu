
 /**
 * 类名:clsXzMajorShoolType
 * 表名:XzMajorShoolType(01120632)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:58
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 专业学校类型(XzMajorShoolType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzMajorShoolType 
{
public static _CurrTabName= "XzMajorShoolType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdXzMajorShoolType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idXzMajorShoolType", "typeName", "updUserId", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idXzMajorShoolType = "";    //专业学校类型流水号
public typeName = "";    //类型名称
public updUserId = "";    //修改用户Id
public updDate = "";    //修改日期
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
case clsXzMajorShoolType.con_IdXzMajorShoolType:
return this.idXzMajorShoolType;
case clsXzMajorShoolType.con_TypeName:
return this.typeName;
case clsXzMajorShoolType.con_UpdUserId:
return this.updUserId;
case clsXzMajorShoolType.con_UpdDate:
return this.updDate;
case clsXzMajorShoolType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzMajorShoolType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdXzMajorShoolType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajorShoolType(): string {return "idXzMajorShoolType";}    //专业学校类型流水号

 /**
 * 常量:"TypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TypeName(): string {return "typeName";}    //类型名称

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}