
 /**
 * 类名:clsStuPerfAnalysis
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:04
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学生问题分析(StuPerfAnalysis)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsStuPerfAnalysis 
{
public static _CurrTabName= "StuPerfAnalysis"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudentInfo,IdCurrEduCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 16;
public static AttributeName = ["idStudentInfo", "idCurrEduCls", "courseId", "questionCount", "commentCount", "likeCount", "askedCount", "rightCount", "errorCount", "totalPoints", "markCount", "idSchool", "comment", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsStuPerfAnalysis.con_IdStudentInfo:
return this.idStudentInfo;
case clsStuPerfAnalysis.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsStuPerfAnalysis.con_CourseId:
return this.courseId;
case clsStuPerfAnalysis.con_QuestionCount:
return this.questionCount;
case clsStuPerfAnalysis.con_CommentCount:
return this.commentCount;
case clsStuPerfAnalysis.con_LikeCount:
return this.likeCount;
case clsStuPerfAnalysis.con_AskedCount:
return this.askedCount;
case clsStuPerfAnalysis.con_RightCount:
return this.rightCount;
case clsStuPerfAnalysis.con_ErrorCount:
return this.errorCount;
case clsStuPerfAnalysis.con_TotalPoints:
return this.totalPoints;
case clsStuPerfAnalysis.con_MarkCount:
return this.markCount;
case clsStuPerfAnalysis.con_IdSchool:
return this.idSchool;
case clsStuPerfAnalysis.con_Comment:
return this.comment;
case clsStuPerfAnalysis.con_UpdDate:
return this.updDate;
case clsStuPerfAnalysis.con_UpdUser:
return this.updUser;
case clsStuPerfAnalysis.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[StuPerfAnalysis]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"QuestionCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionCount(): string {return "questionCount";}    //问题数

 /**
 * 常量:"CommentCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CommentCount(): string {return "commentCount";}    //评论数

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"AskedCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AskedCount(): string {return "askedCount";}    //提问数

 /**
 * 常量:"RightCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RightCount(): string {return "rightCount";}    //正确次数

 /**
 * 常量:"ErrorCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ErrorCount(): string {return "errorCount";}    //错误次数

 /**
 * 常量:"TotalPoints"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalPoints(): string {return "totalPoints";}    //总积分

 /**
 * 常量:"MarkCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkCount(): string {return "markCount";}    //打分数

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"Comment"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //批注

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}