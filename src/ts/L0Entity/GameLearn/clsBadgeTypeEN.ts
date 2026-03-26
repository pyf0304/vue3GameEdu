
 /**
 * 类名:clsBadgeTypeEN
 * 表名:BadgeType(01120880)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/03 05:37:53
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 徽章类型(BadgeType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsBadgeTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "BadgeType"; //当前表名,与该类相关的表名
public static _KeyFldName= "BadgeTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["badgeTypeId", "badgeTypeName", "badgeTypeENName", "badgeCategoryId", "updDate", "imageDir", "credits", "updUser", "memo"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrBadgeTypeId = "";    //徽章类型Id
private mstrBadgeTypeName = "";    //徽章类型名
private mstrBadgeTypeENName = "";    //徽章类型英文名
private mstrBadgeCategoryId = "";    //徽章类别Id
private mstrUpdDate = "";    //修改日期
private mstrImageDir = "";    //图像目录
private mintCredits = 0;    //积分
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 徽章类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBadgeTypeId (value: string)
{
if (value  != undefined)
{
 this.badgeTypeId = value;
    this.hmProperty["badgeTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 徽章类型名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBadgeTypeName (value: string)
{
if (value  != undefined)
{
 this.badgeTypeName = value;
    this.hmProperty["badgeTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 徽章类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBadgeTypeENName (value: string)
{
if (value  != undefined)
{
 this.badgeTypeENName = value;
    this.hmProperty["badgeTypeENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 徽章类别Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBadgeCategoryId (value: string)
{
if (value  != undefined)
{
 this.badgeCategoryId = value;
    this.hmProperty["badgeCategoryId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 图像目录(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetImageDir (value: string)
{
if (value  != undefined)
{
 this.imageDir = value;
    this.hmProperty["imageDir"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 积分(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCredits (value: number)
{
if (value  != undefined)
{
 this.credits = value;
    this.hmProperty["credits"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsBadgeTypeEN.con_BadgeTypeId:
return this.badgeTypeId;
case clsBadgeTypeEN.con_BadgeTypeName:
return this.badgeTypeName;
case clsBadgeTypeEN.con_BadgeTypeENName:
return this.badgeTypeENName;
case clsBadgeTypeEN.con_BadgeCategoryId:
return this.badgeCategoryId;
case clsBadgeTypeEN.con_UpdDate:
return this.updDate;
case clsBadgeTypeEN.con_ImageDir:
return this.imageDir;
case clsBadgeTypeEN.con_Credits:
return this.credits;
case clsBadgeTypeEN.con_UpdUser:
return this.updUser;
case clsBadgeTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BadgeType]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsBadgeTypeEN.con_BadgeTypeId:
this.badgeTypeId = strValue;
    this.hmProperty["badgeTypeId"] = true;
break;
case clsBadgeTypeEN.con_BadgeTypeName:
this.badgeTypeName = strValue;
    this.hmProperty["badgeTypeName"] = true;
break;
case clsBadgeTypeEN.con_BadgeTypeENName:
this.badgeTypeENName = strValue;
    this.hmProperty["badgeTypeENName"] = true;
break;
case clsBadgeTypeEN.con_BadgeCategoryId:
this.badgeCategoryId = strValue;
    this.hmProperty["badgeCategoryId"] = true;
break;
case clsBadgeTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsBadgeTypeEN.con_ImageDir:
this.imageDir = strValue;
    this.hmProperty["imageDir"] = true;
break;
case clsBadgeTypeEN.con_Credits:
this.credits = Number(strValue);
    this.hmProperty["credits"] = true;
break;
case clsBadgeTypeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsBadgeTypeEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BadgeType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"BadgeTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BadgeTypeId(): string {return "badgeTypeId";}    //徽章类型Id

 /**
 * 常量:"BadgeTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BadgeTypeName(): string {return "badgeTypeName";}    //徽章类型名

 /**
 * 常量:"BadgeTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BadgeTypeENName(): string {return "badgeTypeENName";}    //徽章类型英文名

 /**
 * 常量:"BadgeCategoryId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BadgeCategoryId(): string {return "badgeCategoryId";}    //徽章类别Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"ImageDir"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ImageDir(): string {return "imageDir";}    //图像目录

 /**
 * 常量:"Credits"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsBadgeTypeEN();
const instance = new clsBadgeTypeEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
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