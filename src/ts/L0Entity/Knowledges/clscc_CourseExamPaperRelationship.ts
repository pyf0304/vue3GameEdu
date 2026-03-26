
 /**
 * 类名:clscc_CourseExamPaperRelationship
 * 表名:cc_CourseExamPaperRelationship(01120076)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/02 14:30:08
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 题目与试卷关系(cc_CourseExamPaperRelationship)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_CourseExamPaperRelationship 
{
public static _CurrTabName= "cc_CourseExamPaperRelationship"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["mId", "courseExamPaperId", "courseId", "questionId", "userId", "startTime", "papersBigTopicId", "topicOrderNum", "orderNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseExamPaperId = "";    //考卷流水号
public courseId = "";    //课程Id
public questionId = 0;    //题目Id
public userId = "";    //用户ID
public startTime = "";    //开始时间(s)
public papersBigTopicId = "";    //试卷大题目Id
public topicOrderNum = 0;    //TopicOrderNum
public orderNum = 0;    //序号
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
case clscc_CourseExamPaperRelationship.con_mId:
return this.mId;
case clscc_CourseExamPaperRelationship.con_CourseExamPaperId:
return this.courseExamPaperId;
case clscc_CourseExamPaperRelationship.con_CourseId:
return this.courseId;
case clscc_CourseExamPaperRelationship.con_QuestionId:
return this.questionId;
case clscc_CourseExamPaperRelationship.con_UserId:
return this.userId;
case clscc_CourseExamPaperRelationship.con_StartTime:
return this.startTime;
case clscc_CourseExamPaperRelationship.con_PapersBigTopicId:
return this.papersBigTopicId;
case clscc_CourseExamPaperRelationship.con_TopicOrderNum:
return this.topicOrderNum;
case clscc_CourseExamPaperRelationship.con_OrderNum:
return this.orderNum;
case clscc_CourseExamPaperRelationship.con_UpdDate:
return this.updDate;
case clscc_CourseExamPaperRelationship.con_UpdUser:
return this.updUser;
case clscc_CourseExamPaperRelationship.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseExamPaperRelationship]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

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
 * 常量:"StartTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StartTime(): string {return "startTime";}    //开始时间(s)

 /**
 * 常量:"PapersBigTopicId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PapersBigTopicId(): string {return "papersBigTopicId";}    //试卷大题目Id

 /**
 * 常量:"TopicOrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicOrderNum(): string {return "topicOrderNum";}    //TopicOrderNum

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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