
 /**
 * 类名:clsge_GameLevelEN
 * 表名:ge_GameLevel(01120904)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/13 11:05:14
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
 * 游戏关卡表(ge_GameLevel)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_GameLevelEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_GameLevel"; //当前表名,与该类相关的表名
public static _KeyFldName= "GameLevelId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["gameLevelId", "gameLevelName", "idCurrEduCls", "courseId", "orderNum", "difficultyLevelId", "levelModeTypeId", "questionTypeId", "questionNum", "questionScore", "isRecommend", "updDate", "updUser", "memo", "totalScore", "inUse", "endTime", "startTime"];
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
private mstrGameLevelId = "";    //游戏关卡Id
private mstrGameLevelName = "";    //游戏关卡名称
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrCourseId = "";    //课程Id
private mintOrderNum = 0;    //序号
private mstrDifficultyLevelId = "";    //难度等级Id
private mstrLevelModeTypeId = "";    //模式Id
private mstrQuestionTypeId = "";    //题目类型Id
private mintQuestionNum = 0;    //题目数
private mfltQuestionScore = 0.0;    //题目得分
private mbolIsRecommend = false;    //是否推荐
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mdblTotalScore = 0;    //总得分
private mbolInUse = false;    //是否在用
private mstrEndTime = "";    //结束时间
private mstrStartTime = "";    //开始时间(s)

/**
 * 游戏关卡Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGameLevelId (value: string)
{
if (value  != undefined)
{
 this.gameLevelId = value;
    this.hmProperty["gameLevelId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 游戏关卡名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGameLevelName (value: string)
{
if (value  != undefined)
{
 this.gameLevelName = value;
    this.hmProperty["gameLevelName"] = true;
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
 * 难度等级Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDifficultyLevelId (value: string)
{
if (value  != undefined)
{
 this.difficultyLevelId = value;
    this.hmProperty["difficultyLevelId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 题目类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionTypeId (value: string)
{
if (value  != undefined)
{
 this.questionTypeId = value;
    this.hmProperty["questionTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionNum (value: number)
{
if (value  != undefined)
{
 this.questionNum = value;
    this.hmProperty["questionNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目得分(说明:;字段类型:float;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionScore (value: number)
{
if (value  != undefined)
{
 this.questionScore = value;
    this.hmProperty["questionScore"] = true;
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
 * 总得分(说明:;字段类型:decimal;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalScore (value: number)
{
if (value  != undefined)
{
 this.totalScore = value;
    this.hmProperty["totalScore"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetInUse (value: boolean)
{
if (value  != undefined)
{
 this.inUse = value;
    this.hmProperty["inUse"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 结束时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEndTime (value: string)
{
if (value  != undefined)
{
 this.endTime = value;
    this.hmProperty["endTime"] = true;
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
case clsge_GameLevelEN.con_GameLevelId:
return this.gameLevelId;
case clsge_GameLevelEN.con_GameLevelName:
return this.gameLevelName;
case clsge_GameLevelEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_GameLevelEN.con_CourseId:
return this.courseId;
case clsge_GameLevelEN.con_OrderNum:
return this.orderNum;
case clsge_GameLevelEN.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsge_GameLevelEN.con_LevelModeTypeId:
return this.levelModeTypeId;
case clsge_GameLevelEN.con_QuestionTypeId:
return this.questionTypeId;
case clsge_GameLevelEN.con_QuestionNum:
return this.questionNum;
case clsge_GameLevelEN.con_QuestionScore:
return this.questionScore;
case clsge_GameLevelEN.con_IsRecommend:
return this.isRecommend;
case clsge_GameLevelEN.con_UpdDate:
return this.updDate;
case clsge_GameLevelEN.con_UpdUser:
return this.updUser;
case clsge_GameLevelEN.con_Memo:
return this.memo;
case clsge_GameLevelEN.con_TotalScore:
return this.totalScore;
case clsge_GameLevelEN.con_InUse:
return this.inUse;
case clsge_GameLevelEN.con_EndTime:
return this.endTime;
case clsge_GameLevelEN.con_StartTime:
return this.startTime;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_GameLevel]中不存在!`;
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
case clsge_GameLevelEN.con_GameLevelId:
this.gameLevelId = strValue;
    this.hmProperty["gameLevelId"] = true;
break;
case clsge_GameLevelEN.con_GameLevelName:
this.gameLevelName = strValue;
    this.hmProperty["gameLevelName"] = true;
break;
case clsge_GameLevelEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsge_GameLevelEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_GameLevelEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsge_GameLevelEN.con_DifficultyLevelId:
this.difficultyLevelId = strValue;
    this.hmProperty["difficultyLevelId"] = true;
break;
case clsge_GameLevelEN.con_LevelModeTypeId:
this.levelModeTypeId = strValue;
    this.hmProperty["levelModeTypeId"] = true;
break;
case clsge_GameLevelEN.con_QuestionTypeId:
this.questionTypeId = strValue;
    this.hmProperty["questionTypeId"] = true;
break;
case clsge_GameLevelEN.con_QuestionNum:
this.questionNum = Number(strValue);
    this.hmProperty["questionNum"] = true;
break;
case clsge_GameLevelEN.con_QuestionScore:
this.questionScore = Number(strValue);
    this.hmProperty["questionScore"] = true;
break;
case clsge_GameLevelEN.con_IsRecommend:
this.isRecommend = Boolean(strValue);
    this.hmProperty["isRecommend"] = true;
break;
case clsge_GameLevelEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_GameLevelEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_GameLevelEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsge_GameLevelEN.con_TotalScore:
this.totalScore = Number(strValue);
    this.hmProperty["totalScore"] = true;
break;
case clsge_GameLevelEN.con_InUse:
this.inUse = Boolean(strValue);
    this.hmProperty["inUse"] = true;
break;
case clsge_GameLevelEN.con_EndTime:
this.endTime = strValue;
    this.hmProperty["endTime"] = true;
break;
case clsge_GameLevelEN.con_StartTime:
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
strMsg = `字段名:[${strFldName}]在表对象:[ge_GameLevel]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public gameLevelId = "";    //游戏关卡Id
public gameLevelName = "";    //游戏关卡名称
public idCurrEduCls = "";    //教学班流水号
public courseId = "";    //课程Id
public orderNum = 0;    //序号
public difficultyLevelId = "";    //难度等级Id
public levelModeTypeId = "";    //模式Id
public questionTypeId = "";    //题目类型Id
public questionNum = 0;    //题目数
public questionScore = 0.0;    //题目得分
public isRecommend = false;    //是否推荐
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public totalScore = 0;    //总得分
public inUse = false;    //是否在用
public endTime = "";    //结束时间
public startTime = "";    //开始时间(s)


 /**
 * 常量:"GameLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GameLevelId(): string {return "gameLevelId";}    //游戏关卡Id

 /**
 * 常量:"GameLevelName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GameLevelName(): string {return "gameLevelName";}    //游戏关卡名称

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
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

 /**
 * 常量:"LevelModeTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelModeTypeId(): string {return "levelModeTypeId";}    //模式Id

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

 /**
 * 常量:"QuestionScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionScore(): string {return "questionScore";}    //题目得分

 /**
 * 常量:"IsRecommend"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

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
 * 常量:"TotalScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TotalScore(): string {return "totalScore";}    //总得分

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"EndTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EndTime(): string {return "endTime";}    //结束时间

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
//return propName in new clsge_GameLevelEN();
const instance = new clsge_GameLevelEN();
return instance.hasOwnProperty(propName);
}
}