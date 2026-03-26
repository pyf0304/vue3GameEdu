
 /**
 * 类名:clsKcEduWay
 * 表名:KcEduWay(01120347)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:28:29
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学方式(KcEduWay)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsKcEduWay 
{
public static _CurrTabName= "KcEduWay"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduWay"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["idEduWay", "eduWayID", "eduWayName"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idEduWay = "";    //教学方式流水号
public eduWayID = "";    //教学方式代号
public eduWayName = "";    //教学方式名称

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
case clsKcEduWay.con_IdEduWay:
return this.idEduWay;
case clsKcEduWay.con_EduWayID:
return this.eduWayID;
case clsKcEduWay.con_EduWayName:
return this.eduWayName;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KcEduWay]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdEduWay"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduWay(): string {return "idEduWay";}    //教学方式流水号

 /**
 * 常量:"EduWayID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduWayID(): string {return "eduWayID";}    //教学方式代号

 /**
 * 常量:"EduWayName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduWayName(): string {return "eduWayName";}    //教学方式名称
}