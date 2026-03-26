
 /**
 * 类名:clsBadgeCategory
 * 表名:BadgeCategory(01120986)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/02 10:32:44
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 徽章种类(BadgeCategory)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsBadgeCategory 
{
public static _CurrTabName= "BadgeCategory"; //当前表名,与该类相关的表名
public static _KeyFldName= "BadgeCategoryId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["badgeCategoryId", "badgeCategoryName", "badgeCategoryENName", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public badgeCategoryId = "";    //徽章类别Id
public badgeCategoryName = "";    //徽章类别名
public badgeCategoryENName = "";    //徽章类别英文名
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
case clsBadgeCategory.con_BadgeCategoryId:
return this.badgeCategoryId;
case clsBadgeCategory.con_BadgeCategoryName:
return this.badgeCategoryName;
case clsBadgeCategory.con_BadgeCategoryENName:
return this.badgeCategoryENName;
case clsBadgeCategory.con_UpdDate:
return this.updDate;
case clsBadgeCategory.con_UpdUser:
return this.updUser;
case clsBadgeCategory.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BadgeCategory]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"BadgeCategoryId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeCategoryId(): string {return "badgeCategoryId";}    //徽章类别Id

 /**
 * 常量:"BadgeCategoryName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeCategoryName(): string {return "badgeCategoryName";}    //徽章类别名

 /**
 * 常量:"BadgeCategoryENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeCategoryENName(): string {return "badgeCategoryENName";}    //徽章类别英文名

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
 export class enumBadgeCategory
{
 /**
 * 成就类
 **/
static readonly Achievement_01 = "01";
 /**
 * 等级类
 **/
static readonly Level_02 = "02";
 /**
 * 经验类
 **/
static readonly Experience_03 = "03";
}