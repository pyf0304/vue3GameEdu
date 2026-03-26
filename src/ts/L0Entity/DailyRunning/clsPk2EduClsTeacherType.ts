
 /**
 * 类名:clsPk2EduClsTeacherType
 * 表名:Pk2EduClsTeacherType(01120133)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:28:47
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学班教师角色表2(Pk2EduClsTeacherType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsPk2EduClsTeacherType 
{
public static _CurrTabName= "Pk2EduClsTeacherType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdPk2EduClsTeacherType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["idPk2EduClsTeacherType", "eduClsTeacherTypeId", "eduClsTeacherTypeDesc"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idPk2EduClsTeacherType = "";    //教学班老师角色(主讲,辅导)流水号
public eduClsTeacherTypeId = "";    //教学班教学类型ID
public eduClsTeacherTypeDesc = "";    //教学班教师类型名

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
case clsPk2EduClsTeacherType.con_IdPk2EduClsTeacherType:
return this.idPk2EduClsTeacherType;
case clsPk2EduClsTeacherType.con_EduClsTeacherTypeId:
return this.eduClsTeacherTypeId;
case clsPk2EduClsTeacherType.con_EduClsTeacherTypeDesc:
return this.eduClsTeacherTypeDesc;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Pk2EduClsTeacherType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdPk2EduClsTeacherType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPk2EduClsTeacherType(): string {return "idPk2EduClsTeacherType";}    //教学班老师角色(主讲,辅导)流水号

 /**
 * 常量:"EduClsTeacherTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTeacherTypeId(): string {return "eduClsTeacherTypeId";}    //教学班教学类型ID

 /**
 * 常量:"EduClsTeacherTypeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTeacherTypeDesc(): string {return "eduClsTeacherTypeDesc";}    //教学班教师类型名
}