
 /**
 * 类名:clsBadgeType
 * 表名:BadgeType(01120880)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/03 05:37:54
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
 * 徽章类型(BadgeType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsBadgeType 
{
public static _CurrTabName= "BadgeType"; //当前表名,与该类相关的表名
public static _KeyFldName= "BadgeTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["badgeTypeId", "badgeTypeName", "badgeTypeENName", "badgeCategoryId", "updDate", "imageDir", "credits", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public badgeTypeId = "";    //徽章类型Id
public badgeTypeName = "";    //徽章类型名
public badgeTypeENName = "";    //徽章类型英文名
public badgeCategoryId = "";    //徽章类别Id
public updDate = "";    //修改日期
public imageDir = "";    //图像目录
public credits = 0;    //积分
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
case clsBadgeType.con_BadgeTypeId:
return this.badgeTypeId;
case clsBadgeType.con_BadgeTypeName:
return this.badgeTypeName;
case clsBadgeType.con_BadgeTypeENName:
return this.badgeTypeENName;
case clsBadgeType.con_BadgeCategoryId:
return this.badgeCategoryId;
case clsBadgeType.con_UpdDate:
return this.updDate;
case clsBadgeType.con_ImageDir:
return this.imageDir;
case clsBadgeType.con_Credits:
return this.credits;
case clsBadgeType.con_UpdUser:
return this.updUser;
case clsBadgeType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BadgeType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"BadgeTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeTypeId(): string {return "badgeTypeId";}    //徽章类型Id

 /**
 * 常量:"BadgeTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeTypeName(): string {return "badgeTypeName";}    //徽章类型名

 /**
 * 常量:"BadgeTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeTypeENName(): string {return "badgeTypeENName";}    //徽章类型英文名

 /**
 * 常量:"BadgeCategoryId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeCategoryId(): string {return "badgeCategoryId";}    //徽章类别Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"ImageDir"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ImageDir(): string {return "imageDir";}    //图像目录

 /**
 * 常量:"Credits"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

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
 export class enumBadgeType
{
 /**
 * 积分徽章
 **/
static readonly CreditBadge_01 = "01";
 /**
 * 协作徽章
 **/
static readonly CollaborationBadge_02 = "02";
 /**
 * 进步徽章
 **/
static readonly ProgressBadge_03 = "03";
 /**
 * 反思徽章
 **/
static readonly ReflectionBadge_04 = "04";
 /**
 * 答疑徽章
 **/
static readonly QuestionAnsweringBadge_05 = "05";
 /**
 * 章节徽章
 **/
static readonly ChapterBadge_06 = "06";
 /**
 * 潮汐之星
 **/
static readonly TideStar_07 = "07";
 /**
 * 珍珠猎手
 **/
static readonly PearlHunter_08 = "08";
 /**
 * 海洋之心
 **/
static readonly OceanHeart_09 = "09";
 /**
 * 智慧海星
 **/
static readonly StarfishWisdom_10 = "10";
 /**
 * 海浪骑士
 **/
static readonly WaveKnight_11 = "11";
 /**
 * 解惑之光
 **/
static readonly LightOfAnswers_12 = "12";
 /**
 * 海上明月
 **/
static readonly MoonOverSea_13 = "13";
 /**
 * 瓶中宝藏
 **/
static readonly TreasureInBottle_14 = "14";
 /**
 * 飘流瓶友
 **/
static readonly DriftingBottleFriends_15 = "15";
 /**
 * 智慧灯塔
 **/
static readonly LighthouseOfWisdom_16 = "16";
 /**
 * 海螺之声
 **/
static readonly SoundOfSeashell_17 = "17";
 /**
 * 海洋传奇
 **/
static readonly OceanLegend_18 = "18";
}