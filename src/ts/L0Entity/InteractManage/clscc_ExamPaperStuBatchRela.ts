
 /**
 * 类名:clscc_ExamPaperStuBatchRela
 * 表名:cc_ExamPaperStuBatchRela(01120239)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:47
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 考卷与学生批次关系(cc_ExamPaperStuBatchRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_ExamPaperStuBatchRela 
{
public static _CurrTabName= "cc_ExamPaperStuBatchRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdPaperStuBatch"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["idPaperStuBatch", "courseExamPaperId", "idStudentInfo", "batchTime", "idCurrEduCls", "scores", "isSave", "isSubmit", "realFinishDate", "operateTime", "isMarking", "markerId", "markDate", "answerIP", "answerDate", "answerTime", "totalGetScore", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clscc_ExamPaperStuBatchRela.con_IdPaperStuBatch:
return this.idPaperStuBatch;
case clscc_ExamPaperStuBatchRela.con_CourseExamPaperId:
return this.courseExamPaperId;
case clscc_ExamPaperStuBatchRela.con_IdStudentInfo:
return this.idStudentInfo;
case clscc_ExamPaperStuBatchRela.con_BatchTime:
return this.batchTime;
case clscc_ExamPaperStuBatchRela.con_IdCurrEduCls:
return this.idCurrEduCls;
case clscc_ExamPaperStuBatchRela.con_Scores:
return this.scores;
case clscc_ExamPaperStuBatchRela.con_IsSave:
return this.isSave;
case clscc_ExamPaperStuBatchRela.con_IsSubmit:
return this.isSubmit;
case clscc_ExamPaperStuBatchRela.con_RealFinishDate:
return this.realFinishDate;
case clscc_ExamPaperStuBatchRela.con_OperateTime:
return this.operateTime;
case clscc_ExamPaperStuBatchRela.con_IsMarking:
return this.isMarking;
case clscc_ExamPaperStuBatchRela.con_MarkerId:
return this.markerId;
case clscc_ExamPaperStuBatchRela.con_MarkDate:
return this.markDate;
case clscc_ExamPaperStuBatchRela.con_AnswerIP:
return this.answerIP;
case clscc_ExamPaperStuBatchRela.con_AnswerDate:
return this.answerDate;
case clscc_ExamPaperStuBatchRela.con_AnswerTime:
return this.answerTime;
case clscc_ExamPaperStuBatchRela.con_TotalGetScore:
return this.totalGetScore;
case clscc_ExamPaperStuBatchRela.con_UpdDate:
return this.updDate;
case clscc_ExamPaperStuBatchRela.con_UpdUserId:
return this.updUserId;
case clscc_ExamPaperStuBatchRela.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_ExamPaperStuBatchRela]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdPaperStuBatch"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPaperStuBatch(): string {return "idPaperStuBatch";}    //学生试卷批次流水号

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"BatchTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchTime(): string {return "batchTime";}    //批次

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"Scores"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Scores(): string {return "scores";}    //分值

 /**
 * 常量:"IsSave"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSave(): string {return "isSave";}    //是否保存

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"RealFinishDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RealFinishDate(): string {return "realFinishDate";}    //实际完成日期

 /**
 * 常量:"OperateTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OperateTime(): string {return "operateTime";}    //操作时间

 /**
 * 常量:"IsMarking"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMarking(): string {return "isMarking";}    //是否批阅

 /**
 * 常量:"MarkerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkerId(): string {return "markerId";}    //打分者

 /**
 * 常量:"MarkDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkDate(): string {return "markDate";}    //打分日期

 /**
 * 常量:"AnswerIP"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerIP(): string {return "answerIP";}    //回答IP

 /**
 * 常量:"AnswerDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerDate(): string {return "answerDate";}    //回答日期

 /**
 * 常量:"AnswerTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTime(): string {return "answerTime";}    //回答时间

 /**
 * 常量:"TotalGetScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalGetScore(): string {return "totalGetScore";}    //考生获取总分

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}