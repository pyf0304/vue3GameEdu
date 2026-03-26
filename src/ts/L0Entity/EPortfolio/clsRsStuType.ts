
 /**
 * 类名:clsRsStuType
 * 表名:RsStuType(01120162)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:31:10
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:成长档案(EPortfolio)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学生类别(RsStuType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsRsStuType 
{
public static _CurrTabName= "RsStuType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStuType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["idStuType", "stuTypeID", "stuTypeDesc", "modifyDate", "modifyUserId", "specUniLenDesc", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idStuType = "";    //学生类别流水号
public stuTypeID = "";    //学生类别ID
public stuTypeDesc = "";    //学生类别名称
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public specUniLenDesc = "";    //SpecUniLenDesc
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
case clsRsStuType.con_IdStuType:
return this.idStuType;
case clsRsStuType.con_StuTypeID:
return this.stuTypeID;
case clsRsStuType.con_StuTypeDesc:
return this.stuTypeDesc;
case clsRsStuType.con_ModifyDate:
return this.modifyDate;
case clsRsStuType.con_ModifyUserId:
return this.modifyUserId;
case clsRsStuType.con_SpecUniLenDesc:
return this.specUniLenDesc;
case clsRsStuType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[RsStuType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdStuType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStuType(): string {return "idStuType";}    //学生类别流水号

 /**
 * 常量:"StuTypeID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuTypeID(): string {return "stuTypeID";}    //学生类别ID

 /**
 * 常量:"StuTypeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuTypeDesc(): string {return "stuTypeDesc";}    //学生类别名称

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"SpecUniLenDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SpecUniLenDesc(): string {return "specUniLenDesc";}    //SpecUniLenDesc

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}