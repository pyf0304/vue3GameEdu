
 /**
 * 类名:clsge_DifficultyLevel
 * 表名:ge_DifficultyLevel(01120905)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:43
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 难度等级表(ge_DifficultyLevel)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_DifficultyLevel 
{
public static _CurrTabName= "ge_DifficultyLevel"; //当前表名,与该类相关的表名
public static _KeyFldName= "DifficultyLevelId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["difficultyLevelId", "difficultyLevelName", "difficultyLevelENName", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public difficultyLevelId = "";    //难度等级Id
public difficultyLevelName = "";    //难度等级名称
public difficultyLevelENName = "";    //难度等级英文名
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
case clsge_DifficultyLevel.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsge_DifficultyLevel.con_DifficultyLevelName:
return this.difficultyLevelName;
case clsge_DifficultyLevel.con_DifficultyLevelENName:
return this.difficultyLevelENName;
case clsge_DifficultyLevel.con_UpdDate:
return this.updDate;
case clsge_DifficultyLevel.con_UpdUser:
return this.updUser;
case clsge_DifficultyLevel.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_DifficultyLevel]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

 /**
 * 常量:"DifficultyLevelName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DifficultyLevelName(): string {return "difficultyLevelName";}    //难度等级名称

 /**
 * 常量:"DifficultyLevelENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DifficultyLevelENName(): string {return "difficultyLevelENName";}    //难度等级英文名

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
 export class enumge_DifficultyLevel
{
 /**
 * 简单
 **/
static readonly Easy_01 = "01";
 /**
 * 中等
 **/
static readonly Middle_02 = "02";
 /**
 * 困难
 **/
static readonly Difficulty_03 = "03";
}