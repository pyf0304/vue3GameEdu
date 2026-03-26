
 /**
 * 类名:clsXzAdminClsTypeEN
 * 表名:XzAdminClsType(01120195)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:21
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:人员管理(PeopleManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 行政班类型(XzAdminClsType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsXzAdminClsTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "XzAdminClsType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdAdminClsType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idAdminClsType", "adminClsTypeId", "adminClsTypeName", "adminClsTypeENName", "memo"];
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
private mstrIdAdminClsType = "";    //行政班级类型流水号
private mstrAdminClsTypeId = "";    //行政班级类型ID
private mstrAdminClsTypeName = "";    //行政班级类型名称
private mstrAdminClsTypeENName = "";    //行政班级类型英文名
private mstrMemo = "";    //备注

/**
 * 行政班级类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdAdminClsType (value: string)
{
if (value  != undefined)
{
 this.idAdminClsType = value;
    this.hmProperty["idAdminClsType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 行政班级类型ID(说明:;字段类型:varchar;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAdminClsTypeId (value: string)
{
if (value  != undefined)
{
 this.adminClsTypeId = value;
    this.hmProperty["adminClsTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 行政班级类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAdminClsTypeName (value: string)
{
if (value  != undefined)
{
 this.adminClsTypeName = value;
    this.hmProperty["adminClsTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 行政班级类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAdminClsTypeENName (value: string)
{
if (value  != undefined)
{
 this.adminClsTypeENName = value;
    this.hmProperty["adminClsTypeENName"] = true;
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
case clsXzAdminClsTypeEN.con_IdAdminClsType:
return this.idAdminClsType;
case clsXzAdminClsTypeEN.con_AdminClsTypeId:
return this.adminClsTypeId;
case clsXzAdminClsTypeEN.con_AdminClsTypeName:
return this.adminClsTypeName;
case clsXzAdminClsTypeEN.con_AdminClsTypeENName:
return this.adminClsTypeENName;
case clsXzAdminClsTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzAdminClsType]中不存在!`;
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
case clsXzAdminClsTypeEN.con_IdAdminClsType:
this.idAdminClsType = strValue;
    this.hmProperty["idAdminClsType"] = true;
break;
case clsXzAdminClsTypeEN.con_AdminClsTypeId:
this.adminClsTypeId = strValue;
    this.hmProperty["adminClsTypeId"] = true;
break;
case clsXzAdminClsTypeEN.con_AdminClsTypeName:
this.adminClsTypeName = strValue;
    this.hmProperty["adminClsTypeName"] = true;
break;
case clsXzAdminClsTypeEN.con_AdminClsTypeENName:
this.adminClsTypeENName = strValue;
    this.hmProperty["adminClsTypeENName"] = true;
break;
case clsXzAdminClsTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[XzAdminClsType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idAdminClsType = "";    //行政班级类型流水号
public adminClsTypeId = "";    //行政班级类型ID
public adminClsTypeName = "";    //行政班级类型名称
public adminClsTypeENName = "";    //行政班级类型英文名
public memo = "";    //备注


 /**
 * 常量:"IdAdminClsType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdAdminClsType(): string {return "idAdminClsType";}    //行政班级类型流水号

 /**
 * 常量:"AdminClsTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AdminClsTypeId(): string {return "adminClsTypeId";}    //行政班级类型ID

 /**
 * 常量:"AdminClsTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AdminClsTypeName(): string {return "adminClsTypeName";}    //行政班级类型名称

 /**
 * 常量:"AdminClsTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AdminClsTypeENName(): string {return "adminClsTypeENName";}    //行政班级类型英文名

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
const instance = new clsXzAdminClsTypeEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumXzAdminClsType
{
 /**
 * 普通班
 **/
static readonly RegularClass_0001 = "0001";
 /**
 * 成人班
 **/
static readonly AdultClass_0002 = "0002";
 /**
 * 中小学
 **/
static readonly PrimaryandSecondarySchool_0003 = "0003";
 /**
 * 特殊班
 **/
static readonly SpecialClass_0004 = "0004";
}