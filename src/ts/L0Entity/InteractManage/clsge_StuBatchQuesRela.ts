
 /**
 * 类名:clsge_StuBatchQuesRela
 * 表名:ge_StuBatchQuesRela(01120885)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:11
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
 * 学生批次题目关系(ge_StuBatchQuesRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_StuBatchQuesRela 
{
public static _CurrTabName= "ge_StuBatchQuesRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStuBatchQuesRela"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 44;
public static AttributeName = ["idStuBatchQuesRela", "examBatchNo", "levelNo", "questionId", "userId", "idCurrEduCls", "questionIndex4Batch", "gameLevelId", "scores", "score", "stuAnswerText", "answerDate", "answerIP", "answerModeId", "answerMultiOptions", "answerOptionId", "answerTime", "applySendBackDate", "comment", "isAccessKnowledge", "isApplySendBack", "isInErrorQuestion", "isLook", "isMarking", "isNotProcessTimeout", "isHasAnswer", "isPublish", "isRight", "isSave", "isSendBack", "isSubmit", "markDate", "markerId", "operateTime", "realFinishDate", "workTypeId", "schoolYear", "schoolTerm", "errMsg", "isRecommend", "courseId", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idStuBatchQuesRela = 0;    //学生批次题目关系流水号
public examBatchNo = "";    //学生批次号
public levelNo = 0;    //学习关号2
public questionId = 0;    //题目Id
public userId = "";    //用户ID
public idCurrEduCls = "";    //教学班流水号
public questionIndex4Batch = 0;    //题序号4批次
public gameLevelId = "";    //游戏关卡Id
public scores = 0;    //分值
public score = 0;    //得分
public stuAnswerText = "";    //学生回答文本
public answerDate = "";    //回答日期
public answerIP = "";    //回答IP
public answerModeId = "";    //答案模式Id
public answerMultiOptions = "";    //多选项答案
public answerOptionId = "";    //回答选项Id
public answerTime = "";    //回答时间
public applySendBackDate = "";    //申请退回日期
public comment = "";    //批注
public isAccessKnowledge = false;    //是否处理知识点
public isApplySendBack = false;    //是否申请退回
public isInErrorQuestion = false;    //是否进入错题
public isLook = false;    //是否查看
public isMarking = false;    //是否批阅
public isNotProcessTimeout = false;    //是否不处理超时
public isHasAnswer = false;    //是否有答案
public isPublish = false;    //是否发布
public isRight = false;    //是否正确
public isSave = false;    //是否保存
public isSendBack = false;    //是否退回
public isSubmit = false;    //是否提交
public markDate = "";    //打分日期
public markerId = "";    //打分者
public operateTime = "";    //操作时间
public realFinishDate = "";    //实际完成日期
public workTypeId = "";    //作业类型Id
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public errMsg = "";    //错误信息
public isRecommend = false;    //是否推荐
public courseId = "";    //课程Id
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
case clsge_StuBatchQuesRela.con_IdStuBatchQuesRela:
return this.idStuBatchQuesRela;
case clsge_StuBatchQuesRela.con_ExamBatchNo:
return this.examBatchNo;
case clsge_StuBatchQuesRela.con_LevelNo:
return this.levelNo;
case clsge_StuBatchQuesRela.con_QuestionId:
return this.questionId;
case clsge_StuBatchQuesRela.con_UserId:
return this.userId;
case clsge_StuBatchQuesRela.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_StuBatchQuesRela.con_QuestionIndex4Batch:
return this.questionIndex4Batch;
case clsge_StuBatchQuesRela.con_GameLevelId:
return this.gameLevelId;
case clsge_StuBatchQuesRela.con_Scores:
return this.scores;
case clsge_StuBatchQuesRela.con_Score:
return this.score;
case clsge_StuBatchQuesRela.con_StuAnswerText:
return this.stuAnswerText;
case clsge_StuBatchQuesRela.con_AnswerDate:
return this.answerDate;
case clsge_StuBatchQuesRela.con_AnswerIP:
return this.answerIP;
case clsge_StuBatchQuesRela.con_AnswerModeId:
return this.answerModeId;
case clsge_StuBatchQuesRela.con_AnswerMultiOptions:
return this.answerMultiOptions;
case clsge_StuBatchQuesRela.con_AnswerOptionId:
return this.answerOptionId;
case clsge_StuBatchQuesRela.con_AnswerTime:
return this.answerTime;
case clsge_StuBatchQuesRela.con_ApplySendBackDate:
return this.applySendBackDate;
case clsge_StuBatchQuesRela.con_Comment:
return this.comment;
case clsge_StuBatchQuesRela.con_IsAccessKnowledge:
return this.isAccessKnowledge;
case clsge_StuBatchQuesRela.con_IsApplySendBack:
return this.isApplySendBack;
case clsge_StuBatchQuesRela.con_IsInErrorQuestion:
return this.isInErrorQuestion;
case clsge_StuBatchQuesRela.con_IsLook:
return this.isLook;
case clsge_StuBatchQuesRela.con_IsMarking:
return this.isMarking;
case clsge_StuBatchQuesRela.con_IsNotProcessTimeout:
return this.isNotProcessTimeout;
case clsge_StuBatchQuesRela.con_IsHasAnswer:
return this.isHasAnswer;
case clsge_StuBatchQuesRela.con_IsPublish:
return this.isPublish;
case clsge_StuBatchQuesRela.con_IsRight:
return this.isRight;
case clsge_StuBatchQuesRela.con_IsSave:
return this.isSave;
case clsge_StuBatchQuesRela.con_IsSendBack:
return this.isSendBack;
case clsge_StuBatchQuesRela.con_IsSubmit:
return this.isSubmit;
case clsge_StuBatchQuesRela.con_MarkDate:
return this.markDate;
case clsge_StuBatchQuesRela.con_MarkerId:
return this.markerId;
case clsge_StuBatchQuesRela.con_OperateTime:
return this.operateTime;
case clsge_StuBatchQuesRela.con_RealFinishDate:
return this.realFinishDate;
case clsge_StuBatchQuesRela.con_WorkTypeId:
return this.workTypeId;
case clsge_StuBatchQuesRela.con_SchoolYear:
return this.schoolYear;
case clsge_StuBatchQuesRela.con_SchoolTerm:
return this.schoolTerm;
case clsge_StuBatchQuesRela.con_ErrMsg:
return this.errMsg;
case clsge_StuBatchQuesRela.con_IsRecommend:
return this.isRecommend;
case clsge_StuBatchQuesRela.con_CourseId:
return this.courseId;
case clsge_StuBatchQuesRela.con_UpdDate:
return this.updDate;
case clsge_StuBatchQuesRela.con_UpdUserId:
return this.updUserId;
case clsge_StuBatchQuesRela.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StuBatchQuesRela]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdStuBatchQuesRela"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStuBatchQuesRela(): string {return "idStuBatchQuesRela";}    //学生批次题目关系流水号

 /**
 * 常量:"ExamBatchNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamBatchNo(): string {return "examBatchNo";}    //学生批次号

 /**
 * 常量:"LevelNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelNo(): string {return "levelNo";}    //学习关号2

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"QuestionIndex4Batch"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionIndex4Batch(): string {return "questionIndex4Batch";}    //题序号4批次

 /**
 * 常量:"GameLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GameLevelId(): string {return "gameLevelId";}    //游戏关卡Id

 /**
 * 常量:"Scores"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Scores(): string {return "scores";}    //分值

 /**
 * 常量:"Score"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"StuAnswerText"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuAnswerText(): string {return "stuAnswerText";}    //学生回答文本

 /**
 * 常量:"AnswerDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerDate(): string {return "answerDate";}    //回答日期

 /**
 * 常量:"AnswerIP"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerIP(): string {return "answerIP";}    //回答IP

 /**
 * 常量:"AnswerModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerModeId(): string {return "answerModeId";}    //答案模式Id

 /**
 * 常量:"AnswerMultiOptions"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerMultiOptions(): string {return "answerMultiOptions";}    //多选项答案

 /**
 * 常量:"AnswerOptionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerOptionId(): string {return "answerOptionId";}    //回答选项Id

 /**
 * 常量:"AnswerTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTime(): string {return "answerTime";}    //回答时间

 /**
 * 常量:"ApplySendBackDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ApplySendBackDate(): string {return "applySendBackDate";}    //申请退回日期

 /**
 * 常量:"Comment"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //批注

 /**
 * 常量:"IsAccessKnowledge"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAccessKnowledge(): string {return "isAccessKnowledge";}    //是否处理知识点

 /**
 * 常量:"IsApplySendBack"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsApplySendBack(): string {return "isApplySendBack";}    //是否申请退回

 /**
 * 常量:"IsInErrorQuestion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsInErrorQuestion(): string {return "isInErrorQuestion";}    //是否进入错题

 /**
 * 常量:"IsLook"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsLook(): string {return "isLook";}    //是否查看

 /**
 * 常量:"IsMarking"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMarking(): string {return "isMarking";}    //是否批阅

 /**
 * 常量:"IsNotProcessTimeout"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsNotProcessTimeout(): string {return "isNotProcessTimeout";}    //是否不处理超时

 /**
 * 常量:"IsHasAnswer"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsHasAnswer(): string {return "isHasAnswer";}    //是否有答案

 /**
 * 常量:"IsPublish"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsPublish(): string {return "isPublish";}    //是否发布

 /**
 * 常量:"IsRight"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRight(): string {return "isRight";}    //是否正确

 /**
 * 常量:"IsSave"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSave(): string {return "isSave";}    //是否保存

 /**
 * 常量:"IsSendBack"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSendBack(): string {return "isSendBack";}    //是否退回

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"MarkDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkDate(): string {return "markDate";}    //打分日期

 /**
 * 常量:"MarkerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkerId(): string {return "markerId";}    //打分者

 /**
 * 常量:"OperateTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OperateTime(): string {return "operateTime";}    //操作时间

 /**
 * 常量:"RealFinishDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RealFinishDate(): string {return "realFinishDate";}    //实际完成日期

 /**
 * 常量:"WorkTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WorkTypeId(): string {return "workTypeId";}    //作业类型Id

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"ErrMsg"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ErrMsg(): string {return "errMsg";}    //错误信息

 /**
 * 常量:"IsRecommend"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

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