
 /**
 * 类名:clsge_StuErrorLibEN
 * 表名:ge_StuErrorLib(01120887)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:44
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 学生错误作业集(ge_StuErrorLib)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_StuErrorLibEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_StuErrorLib"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["mId", "courseId", "idStudentInfo", "questionId", "creator", "createDate", "sourceTypeId", "isRedo", "redoDate", "isPassed", "updDate", "updUser", "memo"];
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
private mstrCourseId = "";    //课程Id
private mstrIdStudentInfo = "";    //学生流水号
private mlngQuestionId = 0;    //题目Id
private mstrCreator = "";    //创建者
private mstrCreateDate = "";    //建立日期
private mstrSourceTypeId = "";    //来源类型Id
private mbolIsRedo = false;    //是否重做
private mstrRedoDate = "";    //重做日期
private mbolIsPassed = false;    //是否通过
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
 * 学生流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStudentInfo (value: string)
{
if (value  != undefined)
{
 this.idStudentInfo = value;
    this.hmProperty["idStudentInfo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionId (value: number)
{
if (value  != undefined)
{
 this.questionId = value;
    this.hmProperty["questionId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 创建者(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreator (value: string)
{
if (value  != undefined)
{
 this.creator = value;
    this.hmProperty["creator"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateDate (value: string)
{
if (value  != undefined)
{
 this.createDate = value;
    this.hmProperty["createDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 来源类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSourceTypeId (value: string)
{
if (value  != undefined)
{
 this.sourceTypeId = value;
    this.hmProperty["sourceTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否重做(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRedo (value: boolean)
{
if (value  != undefined)
{
 this.isRedo = value;
    this.hmProperty["isRedo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 重做日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRedoDate (value: string)
{
if (value  != undefined)
{
 this.redoDate = value;
    this.hmProperty["redoDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否通过(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsPassed (value: boolean)
{
if (value  != undefined)
{
 this.isPassed = value;
    this.hmProperty["isPassed"] = true;
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
case clsge_StuErrorLibEN.con_mId:
return this.mId;
case clsge_StuErrorLibEN.con_CourseId:
return this.courseId;
case clsge_StuErrorLibEN.con_IdStudentInfo:
return this.idStudentInfo;
case clsge_StuErrorLibEN.con_QuestionId:
return this.questionId;
case clsge_StuErrorLibEN.con_Creator:
return this.creator;
case clsge_StuErrorLibEN.con_CreateDate:
return this.createDate;
case clsge_StuErrorLibEN.con_SourceTypeId:
return this.sourceTypeId;
case clsge_StuErrorLibEN.con_IsRedo:
return this.isRedo;
case clsge_StuErrorLibEN.con_RedoDate:
return this.redoDate;
case clsge_StuErrorLibEN.con_IsPassed:
return this.isPassed;
case clsge_StuErrorLibEN.con_UpdDate:
return this.updDate;
case clsge_StuErrorLibEN.con_UpdUser:
return this.updUser;
case clsge_StuErrorLibEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StuErrorLib]中不存在!`;
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
case clsge_StuErrorLibEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsge_StuErrorLibEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_StuErrorLibEN.con_IdStudentInfo:
this.idStudentInfo = strValue;
    this.hmProperty["idStudentInfo"] = true;
break;
case clsge_StuErrorLibEN.con_QuestionId:
this.questionId = Number(strValue);
    this.hmProperty["questionId"] = true;
break;
case clsge_StuErrorLibEN.con_Creator:
this.creator = strValue;
    this.hmProperty["creator"] = true;
break;
case clsge_StuErrorLibEN.con_CreateDate:
this.createDate = strValue;
    this.hmProperty["createDate"] = true;
break;
case clsge_StuErrorLibEN.con_SourceTypeId:
this.sourceTypeId = strValue;
    this.hmProperty["sourceTypeId"] = true;
break;
case clsge_StuErrorLibEN.con_IsRedo:
this.isRedo = Boolean(strValue);
    this.hmProperty["isRedo"] = true;
break;
case clsge_StuErrorLibEN.con_RedoDate:
this.redoDate = strValue;
    this.hmProperty["redoDate"] = true;
break;
case clsge_StuErrorLibEN.con_IsPassed:
this.isPassed = Boolean(strValue);
    this.hmProperty["isPassed"] = true;
break;
case clsge_StuErrorLibEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_StuErrorLibEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_StuErrorLibEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_StuErrorLib]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseId = "";    //课程Id
public idStudentInfo = "";    //学生流水号
public questionId = 0;    //题目Id
public creator = "";    //创建者
public createDate = "";    //建立日期
public sourceTypeId = "";    //来源类型Id
public isRedo = false;    //是否重做
public redoDate = "";    //重做日期
public isPassed = false;    //是否通过
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"Creator"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Creator(): string {return "creator";}    //创建者

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"SourceTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SourceTypeId(): string {return "sourceTypeId";}    //来源类型Id

 /**
 * 常量:"IsRedo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRedo(): string {return "isRedo";}    //是否重做

 /**
 * 常量:"RedoDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RedoDate(): string {return "redoDate";}    //重做日期

 /**
 * 常量:"IsPassed"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsPassed(): string {return "isPassed";}    //是否通过

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
//return propName in new clsge_StuErrorLibEN();
const instance = new clsge_StuErrorLibEN();
return instance.hasOwnProperty(propName);
}
}