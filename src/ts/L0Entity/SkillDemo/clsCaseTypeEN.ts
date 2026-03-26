
 /**
 * 类名:clsCaseTypeEN
 * 表名:CaseType(01120310)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:59
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:技能示范(SkillDemo)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 案例类型(CaseType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsCaseTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "CaseType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCaseType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idCaseType", "caseTypeID", "caseTypeName", "caseTypeEnName", "memo"];
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
private mstrIdCaseType = "";    //案例类型流水号
private mstrCaseTypeID = "";    //案例类型ID
private mstrCaseTypeName = "";    //案例类型名称
private mstrCaseTypeEnName = "";    //案例类型英文名
private mstrMemo = "";    //备注

/**
 * 案例类型流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCaseType (value: string)
{
if (value  != undefined)
{
 this.idCaseType = value;
    this.hmProperty["idCaseType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例类型ID(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCaseTypeID (value: string)
{
if (value  != undefined)
{
 this.caseTypeID = value;
    this.hmProperty["caseTypeID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例类型名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCaseTypeName (value: string)
{
if (value  != undefined)
{
 this.caseTypeName = value;
    this.hmProperty["caseTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCaseTypeEnName (value: string)
{
if (value  != undefined)
{
 this.caseTypeEnName = value;
    this.hmProperty["caseTypeEnName"] = true;
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
case clsCaseTypeEN.con_IdCaseType:
return this.idCaseType;
case clsCaseTypeEN.con_CaseTypeID:
return this.caseTypeID;
case clsCaseTypeEN.con_CaseTypeName:
return this.caseTypeName;
case clsCaseTypeEN.con_CaseTypeEnName:
return this.caseTypeEnName;
case clsCaseTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CaseType]中不存在!`;
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
case clsCaseTypeEN.con_IdCaseType:
this.idCaseType = strValue;
    this.hmProperty["idCaseType"] = true;
break;
case clsCaseTypeEN.con_CaseTypeID:
this.caseTypeID = strValue;
    this.hmProperty["caseTypeID"] = true;
break;
case clsCaseTypeEN.con_CaseTypeName:
this.caseTypeName = strValue;
    this.hmProperty["caseTypeName"] = true;
break;
case clsCaseTypeEN.con_CaseTypeEnName:
this.caseTypeEnName = strValue;
    this.hmProperty["caseTypeEnName"] = true;
break;
case clsCaseTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[CaseType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idCaseType = "";    //案例类型流水号
public caseTypeID = "";    //案例类型ID
public caseTypeName = "";    //案例类型名称
public caseTypeEnName = "";    //案例类型英文名
public memo = "";    //备注


 /**
 * 常量:"IdCaseType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCaseType(): string {return "idCaseType";}    //案例类型流水号

 /**
 * 常量:"CaseTypeID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CaseTypeID(): string {return "caseTypeID";}    //案例类型ID

 /**
 * 常量:"CaseTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CaseTypeName(): string {return "caseTypeName";}    //案例类型名称

 /**
 * 常量:"CaseTypeEnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CaseTypeEnName(): string {return "caseTypeEnName";}    //案例类型英文名

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
const instance = new clsCaseTypeEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumCaseType
{
 /**
 * 其他
 **/
static readonly Others_0000 = "0000";
 /**
 * 文本
 **/
static readonly Text_0001 = "0001";
 /**
 * 图片
 **/
static readonly Image_0002 = "0002";
 /**
 * 视频
 **/
static readonly Video_0003 = "0003";
 /**
 * 习题
 **/
static readonly Questionnaire_0004 = "0004";
}