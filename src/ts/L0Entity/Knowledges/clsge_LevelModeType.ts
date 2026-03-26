
 /**
 * 类名:clsge_LevelModeType
 * 表名:ge_LevelModeType(01120907)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:42
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 关卡模式类型(ge_LevelModeType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_LevelModeType 
{
public static _CurrTabName= "ge_LevelModeType"; //当前表名,与该类相关的表名
public static _KeyFldName= "LevelModeTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["levelModeTypeId", "levelModeTypeName", "levelModeTypeENName", "updUser", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public levelModeTypeId = "";    //模式Id
public levelModeTypeName = "";    //模式名
public levelModeTypeENName = "";    //模式英文名
public updUser = "";    //修改人
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
case clsge_LevelModeType.con_LevelModeTypeId:
return this.levelModeTypeId;
case clsge_LevelModeType.con_LevelModeTypeName:
return this.levelModeTypeName;
case clsge_LevelModeType.con_LevelModeTypeENName:
return this.levelModeTypeENName;
case clsge_LevelModeType.con_UpdUser:
return this.updUser;
case clsge_LevelModeType.con_UpdDate:
return this.updDate;
case clsge_LevelModeType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_LevelModeType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"LevelModeTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelModeTypeId(): string {return "levelModeTypeId";}    //模式Id

 /**
 * 常量:"LevelModeTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelModeTypeName(): string {return "levelModeTypeName";}    //模式名

 /**
 * 常量:"LevelModeTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelModeTypeENName(): string {return "levelModeTypeENName";}    //模式英文名

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumge_LevelModeType
{
 /**
 * 练习
 **/
static readonly Practice_01 = "01";
 /**
 * 考试
 **/
static readonly Examination_02 = "02";
 /**
 * 所有
 **/
static readonly All_03 = "03";
}