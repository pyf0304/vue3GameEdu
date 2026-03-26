
 /**
 * 类名:clsge_StructureGraphEN
 * 表名:ge_StructureGraph(01120895)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:23:05
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
 * 结构图谱表(ge_StructureGraph)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_StructureGraphEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_StructureGraph"; //当前表名,与该类相关的表名
public static _KeyFldName= "StructureGraphId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["structureGraphId", "structureGraphName", "idCurrEduCls", "courseId", "createUser", "updDate", "updUser", "memo", "graphTypeId", "isDisplay", "isExtend", "isRecommend", "theme", "isSubmit", "sectionTypeId", "takeUpTime", "submitTime", "startTime"];
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
private mstrStructureGraphId = "";    //知识图谱Id
private mstrStructureGraphName = "";    //结构图谱名称
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrCourseId = "";    //课程Id
private mstrCreateUser = "";    //建立用户
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mstrGraphTypeId = "";    //图谱类型Id
private mbolIsDisplay = false;    //是否显示
private mbolIsExtend = false;    //是否扩展
private mbolIsRecommend = false;    //是否推荐
private mstrTheme = "";    //主题
private mbolIsSubmit = false;    //是否提交
private mstrSectionTypeId = "";    //节点类型Id
private mstrTakeUpTime = "";    //耗时
private mstrSubmitTime = "";    //提交时间
private mstrStartTime = "";    //开始时间(s)

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
 * 结构图谱名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStructureGraphName (value: string)
{
if (value  != undefined)
{
 this.structureGraphName = value;
    this.hmProperty["structureGraphName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立用户(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateUser (value: string)
{
if (value  != undefined)
{
 this.createUser = value;
    this.hmProperty["createUser"] = true;
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
 * 图谱类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGraphTypeId (value: string)
{
if (value  != undefined)
{
 this.graphTypeId = value;
    this.hmProperty["graphTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDisplay (value: boolean)
{
if (value  != undefined)
{
 this.isDisplay = value;
    this.hmProperty["isDisplay"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否扩展(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsExtend (value: boolean)
{
if (value  != undefined)
{
 this.isExtend = value;
    this.hmProperty["isExtend"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否推荐(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRecommend (value: boolean)
{
if (value  != undefined)
{
 this.isRecommend = value;
    this.hmProperty["isRecommend"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主题(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTheme (value: string)
{
if (value  != undefined)
{
 this.theme = value;
    this.hmProperty["theme"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否提交(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSubmit (value: boolean)
{
if (value  != undefined)
{
 this.isSubmit = value;
    this.hmProperty["isSubmit"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节点类型Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSectionTypeId (value: string)
{
if (value  != undefined)
{
 this.sectionTypeId = value;
    this.hmProperty["sectionTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 耗时(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTakeUpTime (value: string)
{
if (value  != undefined)
{
 this.takeUpTime = value;
    this.hmProperty["takeUpTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 提交时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSubmitTime (value: string)
{
if (value  != undefined)
{
 this.submitTime = value;
    this.hmProperty["submitTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 开始时间(s)(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStartTime (value: string)
{
if (value  != undefined)
{
 this.startTime = value;
    this.hmProperty["startTime"] = true;
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
case clsge_StructureGraphEN.con_StructureGraphId:
return this.structureGraphId;
case clsge_StructureGraphEN.con_StructureGraphName:
return this.structureGraphName;
case clsge_StructureGraphEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_StructureGraphEN.con_CourseId:
return this.courseId;
case clsge_StructureGraphEN.con_CreateUser:
return this.createUser;
case clsge_StructureGraphEN.con_UpdDate:
return this.updDate;
case clsge_StructureGraphEN.con_UpdUser:
return this.updUser;
case clsge_StructureGraphEN.con_Memo:
return this.memo;
case clsge_StructureGraphEN.con_GraphTypeId:
return this.graphTypeId;
case clsge_StructureGraphEN.con_IsDisplay:
return this.isDisplay;
case clsge_StructureGraphEN.con_IsExtend:
return this.isExtend;
case clsge_StructureGraphEN.con_IsRecommend:
return this.isRecommend;
case clsge_StructureGraphEN.con_Theme:
return this.theme;
case clsge_StructureGraphEN.con_IsSubmit:
return this.isSubmit;
case clsge_StructureGraphEN.con_SectionTypeId:
return this.sectionTypeId;
case clsge_StructureGraphEN.con_TakeUpTime:
return this.takeUpTime;
case clsge_StructureGraphEN.con_SubmitTime:
return this.submitTime;
case clsge_StructureGraphEN.con_StartTime:
return this.startTime;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureGraph]中不存在!`;
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
case clsge_StructureGraphEN.con_StructureGraphId:
this.structureGraphId = strValue;
    this.hmProperty["structureGraphId"] = true;
break;
case clsge_StructureGraphEN.con_StructureGraphName:
this.structureGraphName = strValue;
    this.hmProperty["structureGraphName"] = true;
break;
case clsge_StructureGraphEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsge_StructureGraphEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_StructureGraphEN.con_CreateUser:
this.createUser = strValue;
    this.hmProperty["createUser"] = true;
break;
case clsge_StructureGraphEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_StructureGraphEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_StructureGraphEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsge_StructureGraphEN.con_GraphTypeId:
this.graphTypeId = strValue;
    this.hmProperty["graphTypeId"] = true;
break;
case clsge_StructureGraphEN.con_IsDisplay:
this.isDisplay = Boolean(strValue);
    this.hmProperty["isDisplay"] = true;
break;
case clsge_StructureGraphEN.con_IsExtend:
this.isExtend = Boolean(strValue);
    this.hmProperty["isExtend"] = true;
break;
case clsge_StructureGraphEN.con_IsRecommend:
this.isRecommend = Boolean(strValue);
    this.hmProperty["isRecommend"] = true;
break;
case clsge_StructureGraphEN.con_Theme:
this.theme = strValue;
    this.hmProperty["theme"] = true;
break;
case clsge_StructureGraphEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clsge_StructureGraphEN.con_SectionTypeId:
this.sectionTypeId = strValue;
    this.hmProperty["sectionTypeId"] = true;
break;
case clsge_StructureGraphEN.con_TakeUpTime:
this.takeUpTime = strValue;
    this.hmProperty["takeUpTime"] = true;
break;
case clsge_StructureGraphEN.con_SubmitTime:
this.submitTime = strValue;
    this.hmProperty["submitTime"] = true;
break;
case clsge_StructureGraphEN.con_StartTime:
this.startTime = strValue;
    this.hmProperty["startTime"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureGraph]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public structureGraphId = "";    //知识图谱Id
public structureGraphName = "";    //结构图谱名称
public idCurrEduCls = "";    //教学班流水号
public courseId = "";    //课程Id
public createUser = "";    //建立用户
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public graphTypeId = "";    //图谱类型Id
public isDisplay = false;    //是否显示
public isExtend = false;    //是否扩展
public isRecommend = false;    //是否推荐
public theme = "";    //主题
public isSubmit = false;    //是否提交
public sectionTypeId = "";    //节点类型Id
public takeUpTime = "";    //耗时
public submitTime = "";    //提交时间
public startTime = "";    //开始时间(s)


 /**
 * 常量:"StructureGraphId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StructureGraphId(): string {return "structureGraphId";}    //知识图谱Id

 /**
 * 常量:"StructureGraphName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StructureGraphName(): string {return "structureGraphName";}    //结构图谱名称

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CreateUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreateUser(): string {return "createUser";}    //建立用户

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
 * 常量:"GraphTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GraphTypeId(): string {return "graphTypeId";}    //图谱类型Id

 /**
 * 常量:"IsDisplay"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDisplay(): string {return "isDisplay";}    //是否显示

 /**
 * 常量:"IsExtend"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsExtend(): string {return "isExtend";}    //是否扩展

 /**
 * 常量:"IsRecommend"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

 /**
 * 常量:"Theme"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Theme(): string {return "theme";}    //主题

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"TakeUpTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TakeUpTime(): string {return "takeUpTime";}    //耗时

 /**
 * 常量:"SubmitTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubmitTime(): string {return "submitTime";}    //提交时间

 /**
 * 常量:"StartTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StartTime(): string {return "startTime";}    //开始时间(s)

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
//return propName in new clsge_StructureGraphEN();
const instance = new clsge_StructureGraphEN();
return instance.hasOwnProperty(propName);
}
}