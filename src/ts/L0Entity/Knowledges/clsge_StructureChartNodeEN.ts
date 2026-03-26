
 /**
 * 类名:clsge_StructureChartNodeEN
 * 表名:ge_StructureChartNode(01120894)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:27:11
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
 * 知识点结构图(ge_StructureChartNode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_StructureChartNodeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "02"; //客户端缓存
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_StructureChartNode"; //当前表名,与该类相关的表名
public static _KeyFldName= "StructureNodeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["structureNodeId", "structureNodeName", "updDate", "updUser", "memo", "parentId", "isRoot", "background", "foreground", "structureGraphId", "direction", "isExpanded", "structureSectionId", "orderNum"];
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
private mstrStructureNodeId = "";    //结构Id
private mstrStructureNodeName = "";    //结构名称
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mstrParentId = "";    //父节点Id
private mbolIsRoot = false;    //IsRoot
private mstrbackground = "";    //背景色
private mstrforeground = "";    //背景字颜色
private mstrStructureGraphId = "";    //知识图谱Id
private mstrDirection = "";    //方向
private mbolIsExpanded = false;    //是否扩展
private mstrStructureSectionId = "";    //结构章节Id
private mintOrderNum = 0;    //序号

/**
 * 结构Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStructureNodeId (value: string)
{
if (value  != undefined)
{
 this.structureNodeId = value;
    this.hmProperty["structureNodeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 结构名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStructureNodeName (value: string)
{
if (value  != undefined)
{
 this.structureNodeName = value;
    this.hmProperty["structureNodeName"] = true;
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
 * 父节点Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetParentId (value: string)
{
if (value  != undefined)
{
 this.parentId = value;
    this.hmProperty["parentId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * IsRoot(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRoot (value: boolean)
{
if (value  != undefined)
{
 this.isRoot = value;
    this.hmProperty["isRoot"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 背景色(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public Setbackground (value: string)
{
if (value  != undefined)
{
 this.background = value;
    this.hmProperty["background"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 背景字颜色(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public Setforeground (value: string)
{
if (value  != undefined)
{
 this.foreground = value;
    this.hmProperty["foreground"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识图谱Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStructureGraphId (value: string)
{
if (value  != undefined)
{
 this.structureGraphId = value;
    this.hmProperty["structureGraphId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 方向(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDirection (value: string)
{
if (value  != undefined)
{
 this.direction = value;
    this.hmProperty["direction"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否扩展(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsExpanded (value: boolean)
{
if (value  != undefined)
{
 this.isExpanded = value;
    this.hmProperty["isExpanded"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 结构章节Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStructureSectionId (value: string)
{
if (value  != undefined)
{
 this.structureSectionId = value;
    this.hmProperty["structureSectionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
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
case clsge_StructureChartNodeEN.con_StructureNodeId:
return this.structureNodeId;
case clsge_StructureChartNodeEN.con_StructureNodeName:
return this.structureNodeName;
case clsge_StructureChartNodeEN.con_UpdDate:
return this.updDate;
case clsge_StructureChartNodeEN.con_UpdUser:
return this.updUser;
case clsge_StructureChartNodeEN.con_Memo:
return this.memo;
case clsge_StructureChartNodeEN.con_ParentId:
return this.parentId;
case clsge_StructureChartNodeEN.con_IsRoot:
return this.isRoot;
case clsge_StructureChartNodeEN.con_background:
return this.background;
case clsge_StructureChartNodeEN.con_foreground:
return this.foreground;
case clsge_StructureChartNodeEN.con_StructureGraphId:
return this.structureGraphId;
case clsge_StructureChartNodeEN.con_Direction:
return this.direction;
case clsge_StructureChartNodeEN.con_IsExpanded:
return this.isExpanded;
case clsge_StructureChartNodeEN.con_StructureSectionId:
return this.structureSectionId;
case clsge_StructureChartNodeEN.con_OrderNum:
return this.orderNum;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureChartNode]中不存在!`;
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
case clsge_StructureChartNodeEN.con_StructureNodeId:
this.structureNodeId = strValue;
    this.hmProperty["structureNodeId"] = true;
break;
case clsge_StructureChartNodeEN.con_StructureNodeName:
this.structureNodeName = strValue;
    this.hmProperty["structureNodeName"] = true;
break;
case clsge_StructureChartNodeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_StructureChartNodeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_StructureChartNodeEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsge_StructureChartNodeEN.con_ParentId:
this.parentId = strValue;
    this.hmProperty["parentId"] = true;
break;
case clsge_StructureChartNodeEN.con_IsRoot:
this.isRoot = Boolean(strValue);
    this.hmProperty["isRoot"] = true;
break;
case clsge_StructureChartNodeEN.con_background:
this.background = strValue;
    this.hmProperty["background"] = true;
break;
case clsge_StructureChartNodeEN.con_foreground:
this.foreground = strValue;
    this.hmProperty["foreground"] = true;
break;
case clsge_StructureChartNodeEN.con_StructureGraphId:
this.structureGraphId = strValue;
    this.hmProperty["structureGraphId"] = true;
break;
case clsge_StructureChartNodeEN.con_Direction:
this.direction = strValue;
    this.hmProperty["direction"] = true;
break;
case clsge_StructureChartNodeEN.con_IsExpanded:
this.isExpanded = Boolean(strValue);
    this.hmProperty["isExpanded"] = true;
break;
case clsge_StructureChartNodeEN.con_StructureSectionId:
this.structureSectionId = strValue;
    this.hmProperty["structureSectionId"] = true;
break;
case clsge_StructureChartNodeEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureChartNode]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public structureNodeId = "";    //结构Id
public structureNodeName = "";    //结构名称
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public parentId = "";    //父节点Id
public isRoot = false;    //IsRoot
public background = "";    //背景色
public foreground = "";    //背景字颜色
public structureGraphId = "";    //知识图谱Id
public direction = "";    //方向
public isExpanded = false;    //是否扩展
public structureSectionId = "";    //结构章节Id
public orderNum = 0;    //序号


 /**
 * 常量:"StructureNodeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StructureNodeId(): string {return "structureNodeId";}    //结构Id

 /**
 * 常量:"StructureNodeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StructureNodeName(): string {return "structureNodeName";}    //结构名称

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

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
 * 常量:"ParentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父节点Id

 /**
 * 常量:"IsRoot"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRoot(): string {return "isRoot";}    //IsRoot

 /**
 * 常量:"background"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_background(): string {return "background";}    //背景色

 /**
 * 常量:"foreground"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_foreground(): string {return "foreground";}    //背景字颜色

 /**
 * 常量:"StructureGraphId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StructureGraphId(): string {return "structureGraphId";}    //知识图谱Id

 /**
 * 常量:"Direction"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Direction(): string {return "direction";}    //方向

 /**
 * 常量:"IsExpanded"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsExpanded(): string {return "isExpanded";}    //是否扩展

 /**
 * 常量:"StructureSectionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StructureSectionId(): string {return "structureSectionId";}    //结构章节Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
const instance = new clsge_StructureChartNodeEN();
return instance.hasOwnProperty(propName);
}
}