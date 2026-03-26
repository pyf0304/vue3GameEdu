
 /**
 * 类名:clsge_LevelModeTypeEN
 * 表名:ge_LevelModeType(01120907)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:41
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 关卡模式类型(ge_LevelModeType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_LevelModeTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_LevelModeType"; //当前表名,与该类相关的表名
public static _KeyFldName= "LevelModeTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["levelModeTypeId", "levelModeTypeName", "levelModeTypeENName", "updUser", "updDate", "memo"];
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
private mstrLevelModeTypeId = "";    //模式Id
private mstrLevelModeTypeName = "";    //模式名
private mstrLevelModeTypeENName = "";    //模式英文名
private mstrUpdUser = "";    //修改人
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注

/**
 * 模式Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelModeTypeId (value: string)
{
if (value  != undefined)
{
 this.levelModeTypeId = value;
    this.hmProperty["levelModeTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 模式名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelModeTypeName (value: string)
{
if (value  != undefined)
{
 this.levelModeTypeName = value;
    this.hmProperty["levelModeTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 模式英文名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelModeTypeENName (value: string)
{
if (value  != undefined)
{
 this.levelModeTypeENName = value;
    this.hmProperty["levelModeTypeENName"] = true;
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
case clsge_LevelModeTypeEN.con_LevelModeTypeId:
return this.levelModeTypeId;
case clsge_LevelModeTypeEN.con_LevelModeTypeName:
return this.levelModeTypeName;
case clsge_LevelModeTypeEN.con_LevelModeTypeENName:
return this.levelModeTypeENName;
case clsge_LevelModeTypeEN.con_UpdUser:
return this.updUser;
case clsge_LevelModeTypeEN.con_UpdDate:
return this.updDate;
case clsge_LevelModeTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_LevelModeType]中不存在!`;
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
case clsge_LevelModeTypeEN.con_LevelModeTypeId:
this.levelModeTypeId = strValue;
    this.hmProperty["levelModeTypeId"] = true;
break;
case clsge_LevelModeTypeEN.con_LevelModeTypeName:
this.levelModeTypeName = strValue;
    this.hmProperty["levelModeTypeName"] = true;
break;
case clsge_LevelModeTypeEN.con_LevelModeTypeENName:
this.levelModeTypeENName = strValue;
    this.hmProperty["levelModeTypeENName"] = true;
break;
case clsge_LevelModeTypeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_LevelModeTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_LevelModeTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_LevelModeType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public levelModeTypeId = "";    //模式Id
public levelModeTypeName = "";    //模式名
public levelModeTypeENName = "";    //模式英文名
public updUser = "";    //修改人
public updDate = "";    //修改日期
public memo = "";    //备注


 /**
 * 常量:"LevelModeTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelModeTypeId(): string {return "levelModeTypeId";}    //模式Id

 /**
 * 常量:"LevelModeTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelModeTypeName(): string {return "levelModeTypeName";}    //模式名

 /**
 * 常量:"LevelModeTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelModeTypeENName(): string {return "levelModeTypeENName";}    //模式英文名

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

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
//return propName in new clsge_LevelModeTypeEN();
const instance = new clsge_LevelModeTypeEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
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