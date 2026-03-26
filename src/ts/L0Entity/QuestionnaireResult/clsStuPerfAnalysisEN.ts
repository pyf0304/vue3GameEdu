
 /**
 * 类名:clsStuPerfAnalysisEN
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:01
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 学生问题分析(StuPerfAnalysis)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsStuPerfAnalysisEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "07"; //复合主键
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "StuPerfAnalysis"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudentInfo,IdCurrEduCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 16;
public static AttributeName = ["idStudentInfo", "idCurrEduCls", "courseId", "questionCount", "commentCount", "likeCount", "askedCount", "rightCount", "errorCount", "totalPoints", "markCount", "idSchool", "comment", "updDate", "updUser", "memo"];
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
private mstrIdStudentInfo = "";    //学生流水号
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrCourseId = "";    //课程Id
private mintQuestionCount = 0;    //问题数
private mintCommentCount = 0;    //评论数
private mlngLikeCount = 0;    //资源喜欢数量
private mintAskedCount = 0;    //提问数
private mintRightCount = 0;    //正确次数
private mintErrorCount = 0;    //错误次数
private mintTotalPoints = 0;    //总积分
private mintMarkCount = 0;    //打分数
private mstrIdSchool = "";    //学校流水号
private mstrComment = "";    //批注
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

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
 * 问题数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionCount (value: number)
{
if (value  != undefined)
{
 this.questionCount = value;
    this.hmProperty["questionCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评论数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCommentCount (value: number)
{
if (value  != undefined)
{
 this.commentCount = value;
    this.hmProperty["commentCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源喜欢数量(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLikeCount (value: number)
{
if (value  != undefined)
{
 this.likeCount = value;
    this.hmProperty["likeCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 提问数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAskedCount (value: number)
{
if (value  != undefined)
{
 this.askedCount = value;
    this.hmProperty["askedCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 正确次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRightCount (value: number)
{
if (value  != undefined)
{
 this.rightCount = value;
    this.hmProperty["rightCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 错误次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetErrorCount (value: number)
{
if (value  != undefined)
{
 this.errorCount = value;
    this.hmProperty["errorCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 总积分(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalPoints (value: number)
{
if (value  != undefined)
{
 this.totalPoints = value;
    this.hmProperty["totalPoints"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 打分数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMarkCount (value: number)
{
if (value  != undefined)
{
 this.markCount = value;
    this.hmProperty["markCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSchool (value: string)
{
if (value  != undefined)
{
 this.idSchool = value;
    this.hmProperty["idSchool"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 批注(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetComment (value: string)
{
if (value  != undefined)
{
 this.comment = value;
    this.hmProperty["comment"] = true;
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
case clsStuPerfAnalysisEN.con_IdStudentInfo:
return this.idStudentInfo;
case clsStuPerfAnalysisEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsStuPerfAnalysisEN.con_CourseId:
return this.courseId;
case clsStuPerfAnalysisEN.con_QuestionCount:
return this.questionCount;
case clsStuPerfAnalysisEN.con_CommentCount:
return this.commentCount;
case clsStuPerfAnalysisEN.con_LikeCount:
return this.likeCount;
case clsStuPerfAnalysisEN.con_AskedCount:
return this.askedCount;
case clsStuPerfAnalysisEN.con_RightCount:
return this.rightCount;
case clsStuPerfAnalysisEN.con_ErrorCount:
return this.errorCount;
case clsStuPerfAnalysisEN.con_TotalPoints:
return this.totalPoints;
case clsStuPerfAnalysisEN.con_MarkCount:
return this.markCount;
case clsStuPerfAnalysisEN.con_IdSchool:
return this.idSchool;
case clsStuPerfAnalysisEN.con_Comment:
return this.comment;
case clsStuPerfAnalysisEN.con_UpdDate:
return this.updDate;
case clsStuPerfAnalysisEN.con_UpdUser:
return this.updUser;
case clsStuPerfAnalysisEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[StuPerfAnalysis]中不存在!`;
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
case clsStuPerfAnalysisEN.con_IdStudentInfo:
this.idStudentInfo = strValue;
    this.hmProperty["idStudentInfo"] = true;
break;
case clsStuPerfAnalysisEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsStuPerfAnalysisEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsStuPerfAnalysisEN.con_QuestionCount:
this.questionCount = Number(strValue);
    this.hmProperty["questionCount"] = true;
break;
case clsStuPerfAnalysisEN.con_CommentCount:
this.commentCount = Number(strValue);
    this.hmProperty["commentCount"] = true;
break;
case clsStuPerfAnalysisEN.con_LikeCount:
this.likeCount = Number(strValue);
    this.hmProperty["likeCount"] = true;
break;
case clsStuPerfAnalysisEN.con_AskedCount:
this.askedCount = Number(strValue);
    this.hmProperty["askedCount"] = true;
break;
case clsStuPerfAnalysisEN.con_RightCount:
this.rightCount = Number(strValue);
    this.hmProperty["rightCount"] = true;
break;
case clsStuPerfAnalysisEN.con_ErrorCount:
this.errorCount = Number(strValue);
    this.hmProperty["errorCount"] = true;
break;
case clsStuPerfAnalysisEN.con_TotalPoints:
this.totalPoints = Number(strValue);
    this.hmProperty["totalPoints"] = true;
break;
case clsStuPerfAnalysisEN.con_MarkCount:
this.markCount = Number(strValue);
    this.hmProperty["markCount"] = true;
break;
case clsStuPerfAnalysisEN.con_IdSchool:
this.idSchool = strValue;
    this.hmProperty["idSchool"] = true;
break;
case clsStuPerfAnalysisEN.con_Comment:
this.comment = strValue;
    this.hmProperty["comment"] = true;
break;
case clsStuPerfAnalysisEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsStuPerfAnalysisEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsStuPerfAnalysisEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[StuPerfAnalysis]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idStudentInfo = "";    //学生流水号
public idCurrEduCls = "";    //教学班流水号
public courseId = "";    //课程Id
public questionCount = 0;    //问题数
public commentCount = 0;    //评论数
public likeCount = 0;    //资源喜欢数量
public askedCount = 0;    //提问数
public rightCount = 0;    //正确次数
public errorCount = 0;    //错误次数
public totalPoints = 0;    //总积分
public markCount = 0;    //打分数
public idSchool = "";    //学校流水号
public comment = "";    //批注
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

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
 * 常量:"QuestionCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionCount(): string {return "questionCount";}    //问题数

 /**
 * 常量:"CommentCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CommentCount(): string {return "commentCount";}    //评论数

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"AskedCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AskedCount(): string {return "askedCount";}    //提问数

 /**
 * 常量:"RightCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RightCount(): string {return "rightCount";}    //正确次数

 /**
 * 常量:"ErrorCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ErrorCount(): string {return "errorCount";}    //错误次数

 /**
 * 常量:"TotalPoints"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TotalPoints(): string {return "totalPoints";}    //总积分

 /**
 * 常量:"MarkCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkCount(): string {return "markCount";}    //打分数

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"Comment"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //批注

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
//return propName in new clsStuPerfAnalysisEN();
const instance = new clsStuPerfAnalysisEN();
return instance.hasOwnProperty(propName);
}
}