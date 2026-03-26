
 /**
 * 类名:clsgs_StructureChartNodeEN
 * 表名:gs_StructureChartNode(01120877)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:28:18
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
 * 结构图节点(gs_StructureChartNode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_StructureChartNodeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_StructureChartNode"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["mId", "structureChartId", "nodeId", "nodeTitle", "parentId", "isRoot", "expanded", "direction", "bgColor", "updDate", "updUser", "memo"];
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
private mlngmId = 0;    //mId
private mstrStructureChartId = "";    //结构图Id
private mstrNodeId = "";    //节点Id
private mstrNodeTitle = "";    //节点标题
private mstrParentId = "";    //父Id
private mbolIsRoot = false;    //IsRoot
private mbolExpanded = false;    //扩大
private mstrDirection = "";    //方向
private mstrBgColor = "";    //背景色
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * mId(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetmId (value: number)
{
if (value  != undefined)
{
 this.mId = value;
    this.hmProperty["mId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 结构图Id(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStructureChartId (value: string)
{
if (value  != undefined)
{
 this.structureChartId = value;
    this.hmProperty["structureChartId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节点Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetNodeId (value: string)
{
if (value  != undefined)
{
 this.nodeId = value;
    this.hmProperty["nodeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节点标题(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetNodeTitle (value: string)
{
if (value  != undefined)
{
 this.nodeTitle = value;
    this.hmProperty["nodeTitle"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 父Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
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
 * 扩大(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetExpanded (value: boolean)
{
if (value  != undefined)
{
 this.expanded = value;
    this.hmProperty["expanded"] = true;
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
 * 背景色(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBgColor (value: string)
{
if (value  != undefined)
{
 this.bgColor = value;
    this.hmProperty["bgColor"] = true;
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
case clsgs_StructureChartNodeEN.con_mId:
return this.mId;
case clsgs_StructureChartNodeEN.con_StructureChartId:
return this.structureChartId;
case clsgs_StructureChartNodeEN.con_NodeId:
return this.nodeId;
case clsgs_StructureChartNodeEN.con_NodeTitle:
return this.nodeTitle;
case clsgs_StructureChartNodeEN.con_ParentId:
return this.parentId;
case clsgs_StructureChartNodeEN.con_IsRoot:
return this.isRoot;
case clsgs_StructureChartNodeEN.con_Expanded:
return this.expanded;
case clsgs_StructureChartNodeEN.con_Direction:
return this.direction;
case clsgs_StructureChartNodeEN.con_BgColor:
return this.bgColor;
case clsgs_StructureChartNodeEN.con_UpdDate:
return this.updDate;
case clsgs_StructureChartNodeEN.con_UpdUser:
return this.updUser;
case clsgs_StructureChartNodeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_StructureChartNode]中不存在!`;
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
case clsgs_StructureChartNodeEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsgs_StructureChartNodeEN.con_StructureChartId:
this.structureChartId = strValue;
    this.hmProperty["structureChartId"] = true;
break;
case clsgs_StructureChartNodeEN.con_NodeId:
this.nodeId = strValue;
    this.hmProperty["nodeId"] = true;
break;
case clsgs_StructureChartNodeEN.con_NodeTitle:
this.nodeTitle = strValue;
    this.hmProperty["nodeTitle"] = true;
break;
case clsgs_StructureChartNodeEN.con_ParentId:
this.parentId = strValue;
    this.hmProperty["parentId"] = true;
break;
case clsgs_StructureChartNodeEN.con_IsRoot:
this.isRoot = Boolean(strValue);
    this.hmProperty["isRoot"] = true;
break;
case clsgs_StructureChartNodeEN.con_Expanded:
this.expanded = Boolean(strValue);
    this.hmProperty["expanded"] = true;
break;
case clsgs_StructureChartNodeEN.con_Direction:
this.direction = strValue;
    this.hmProperty["direction"] = true;
break;
case clsgs_StructureChartNodeEN.con_BgColor:
this.bgColor = strValue;
    this.hmProperty["bgColor"] = true;
break;
case clsgs_StructureChartNodeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_StructureChartNodeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_StructureChartNodeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[gs_StructureChartNode]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public structureChartId = "";    //结构图Id
public nodeId = "";    //节点Id
public nodeTitle = "";    //节点标题
public parentId = "";    //父Id
public isRoot = false;    //IsRoot
public expanded = false;    //扩大
public direction = "";    //方向
public bgColor = "";    //背景色
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"StructureChartId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StructureChartId(): string {return "structureChartId";}    //结构图Id

 /**
 * 常量:"NodeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_NodeId(): string {return "nodeId";}    //节点Id

 /**
 * 常量:"NodeTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_NodeTitle(): string {return "nodeTitle";}    //节点标题

 /**
 * 常量:"ParentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父Id

 /**
 * 常量:"IsRoot"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRoot(): string {return "isRoot";}    //IsRoot

 /**
 * 常量:"Expanded"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Expanded(): string {return "expanded";}    //扩大

 /**
 * 常量:"Direction"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Direction(): string {return "direction";}    //方向

 /**
 * 常量:"BgColor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BgColor(): string {return "bgColor";}    //背景色

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
const instance = new clsgs_StructureChartNodeEN();
return instance.hasOwnProperty(propName);
}
}