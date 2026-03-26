
 /**
 * 类名:clscc_ExamPaperStuBatchRelaEN
 * 表名:cc_ExamPaperStuBatchRela(01120239)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:45
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
 * 考卷与学生批次关系(cc_ExamPaperStuBatchRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clscc_ExamPaperStuBatchRelaEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "cc_ExamPaperStuBatchRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdPaperStuBatch"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["idPaperStuBatch", "courseExamPaperId", "idStudentInfo", "batchTime", "idCurrEduCls", "scores", "isSave", "isSubmit", "realFinishDate", "operateTime", "isMarking", "markerId", "markDate", "answerIP", "answerDate", "answerTime", "totalGetScore", "updDate", "updUserId", "memo"];
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
private mstrIdPaperStuBatch = "";    //学生试卷批次流水号
private mstrCourseExamPaperId = "";    //考卷流水号
private mstrIdStudentInfo = "";    //学生流水号
private mstrBatchTime = "";    //批次
private mstrIdCurrEduCls = "";    //教学班流水号
private mdblScores = 0;    //分值
private mbolIsSave = false;    //是否保存
private mbolIsSubmit = false;    //是否提交
private mstrRealFinishDate = "";    //实际完成日期
private mstrOperateTime = "";    //操作时间
private mbolIsMarking = false;    //是否批阅
private mstrMarkerId = "";    //打分者
private mstrMarkDate = "";    //打分日期
private mstrAnswerIP = "";    //回答IP
private mstrAnswerDate = "";    //回答日期
private mstrAnswerTime = "";    //回答时间
private mdblTotalGetScore = 0;    //考生获取总分
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 学生试卷批次流水号(说明:;字段类型:char;字段长度:10;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdPaperStuBatch (value: string)
{
if (value  != undefined)
{
 this.idPaperStuBatch = value;
    this.hmProperty["idPaperStuBatch"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考卷流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseExamPaperId (value: string)
{
if (value  != undefined)
{
 this.courseExamPaperId = value;
    this.hmProperty["courseExamPaperId"] = true;
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
 * 批次(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBatchTime (value: string)
{
if (value  != undefined)
{
 this.batchTime = value;
    this.hmProperty["batchTime"] = true;
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
 * 分值(说明:;字段类型:decimal;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetScores (value: number)
{
if (value  != undefined)
{
 this.scores = value;
    this.hmProperty["scores"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否保存(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSave (value: boolean)
{
if (value  != undefined)
{
 this.isSave = value;
    this.hmProperty["isSave"] = true;
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
 * 实际完成日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRealFinishDate (value: string)
{
if (value  != undefined)
{
 this.realFinishDate = value;
    this.hmProperty["realFinishDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 操作时间(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOperateTime (value: string)
{
if (value  != undefined)
{
 this.operateTime = value;
    this.hmProperty["operateTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否批阅(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsMarking (value: boolean)
{
if (value  != undefined)
{
 this.isMarking = value;
    this.hmProperty["isMarking"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 打分者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMarkerId (value: string)
{
if (value  != undefined)
{
 this.markerId = value;
    this.hmProperty["markerId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 打分日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMarkDate (value: string)
{
if (value  != undefined)
{
 this.markDate = value;
    this.hmProperty["markDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答IP(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerIP (value: string)
{
if (value  != undefined)
{
 this.answerIP = value;
    this.hmProperty["answerIP"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerDate (value: string)
{
if (value  != undefined)
{
 this.answerDate = value;
    this.hmProperty["answerDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 回答时间(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAnswerTime (value: string)
{
if (value  != undefined)
{
 this.answerTime = value;
    this.hmProperty["answerTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 考生获取总分(说明:;字段类型:decimal;字段长度:12;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTotalGetScore (value: number)
{
if (value  != undefined)
{
 this.totalGetScore = value;
    this.hmProperty["totalGetScore"] = true;
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
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
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
case clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch:
return this.idPaperStuBatch;
case clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId:
return this.courseExamPaperId;
case clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo:
return this.idStudentInfo;
case clscc_ExamPaperStuBatchRelaEN.con_BatchTime:
return this.batchTime;
case clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clscc_ExamPaperStuBatchRelaEN.con_Scores:
return this.scores;
case clscc_ExamPaperStuBatchRelaEN.con_IsSave:
return this.isSave;
case clscc_ExamPaperStuBatchRelaEN.con_IsSubmit:
return this.isSubmit;
case clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate:
return this.realFinishDate;
case clscc_ExamPaperStuBatchRelaEN.con_OperateTime:
return this.operateTime;
case clscc_ExamPaperStuBatchRelaEN.con_IsMarking:
return this.isMarking;
case clscc_ExamPaperStuBatchRelaEN.con_MarkerId:
return this.markerId;
case clscc_ExamPaperStuBatchRelaEN.con_MarkDate:
return this.markDate;
case clscc_ExamPaperStuBatchRelaEN.con_AnswerIP:
return this.answerIP;
case clscc_ExamPaperStuBatchRelaEN.con_AnswerDate:
return this.answerDate;
case clscc_ExamPaperStuBatchRelaEN.con_AnswerTime:
return this.answerTime;
case clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore:
return this.totalGetScore;
case clscc_ExamPaperStuBatchRelaEN.con_UpdDate:
return this.updDate;
case clscc_ExamPaperStuBatchRelaEN.con_UpdUserId:
return this.updUserId;
case clscc_ExamPaperStuBatchRelaEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_ExamPaperStuBatchRela]中不存在!`;
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
case clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch:
this.idPaperStuBatch = strValue;
    this.hmProperty["idPaperStuBatch"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId:
this.courseExamPaperId = strValue;
    this.hmProperty["courseExamPaperId"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo:
this.idStudentInfo = strValue;
    this.hmProperty["idStudentInfo"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_BatchTime:
this.batchTime = strValue;
    this.hmProperty["batchTime"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_Scores:
this.scores = Number(strValue);
    this.hmProperty["scores"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_IsSave:
this.isSave = Boolean(strValue);
    this.hmProperty["isSave"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate:
this.realFinishDate = strValue;
    this.hmProperty["realFinishDate"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_OperateTime:
this.operateTime = strValue;
    this.hmProperty["operateTime"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_IsMarking:
this.isMarking = Boolean(strValue);
    this.hmProperty["isMarking"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_MarkerId:
this.markerId = strValue;
    this.hmProperty["markerId"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_MarkDate:
this.markDate = strValue;
    this.hmProperty["markDate"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_AnswerIP:
this.answerIP = strValue;
    this.hmProperty["answerIP"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_AnswerDate:
this.answerDate = strValue;
    this.hmProperty["answerDate"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_AnswerTime:
this.answerTime = strValue;
    this.hmProperty["answerTime"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore:
this.totalGetScore = Number(strValue);
    this.hmProperty["totalGetScore"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clscc_ExamPaperStuBatchRelaEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[cc_ExamPaperStuBatchRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idPaperStuBatch = "";    //学生试卷批次流水号
public courseExamPaperId = "";    //考卷流水号
public idStudentInfo = "";    //学生流水号
public batchTime = "";    //批次
public idCurrEduCls = "";    //教学班流水号
public scores = 0;    //分值
public isSave = false;    //是否保存
public isSubmit = false;    //是否提交
public realFinishDate = "";    //实际完成日期
public operateTime = "";    //操作时间
public isMarking = false;    //是否批阅
public markerId = "";    //打分者
public markDate = "";    //打分日期
public answerIP = "";    //回答IP
public answerDate = "";    //回答日期
public answerTime = "";    //回答时间
public totalGetScore = 0;    //考生获取总分
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"IdPaperStuBatch"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdPaperStuBatch(): string {return "idPaperStuBatch";}    //学生试卷批次流水号

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"BatchTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BatchTime(): string {return "batchTime";}    //批次

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"Scores"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Scores(): string {return "scores";}    //分值

 /**
 * 常量:"IsSave"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSave(): string {return "isSave";}    //是否保存

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"RealFinishDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RealFinishDate(): string {return "realFinishDate";}    //实际完成日期

 /**
 * 常量:"OperateTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OperateTime(): string {return "operateTime";}    //操作时间

 /**
 * 常量:"IsMarking"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMarking(): string {return "isMarking";}    //是否批阅

 /**
 * 常量:"MarkerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkerId(): string {return "markerId";}    //打分者

 /**
 * 常量:"MarkDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MarkDate(): string {return "markDate";}    //打分日期

 /**
 * 常量:"AnswerIP"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerIP(): string {return "answerIP";}    //回答IP

 /**
 * 常量:"AnswerDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerDate(): string {return "answerDate";}    //回答日期

 /**
 * 常量:"AnswerTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AnswerTime(): string {return "answerTime";}    //回答时间

 /**
 * 常量:"TotalGetScore"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TotalGetScore(): string {return "totalGetScore";}    //考生获取总分

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

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
//return propName in new clscc_ExamPaperStuBatchRelaEN();
const instance = new clscc_ExamPaperStuBatchRelaEN();
return instance.hasOwnProperty(propName);
}
}