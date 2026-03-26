
 /**
 * 类名:clscc_PapersBigTopic
 * 表名:cc_PapersBigTopic(01120077)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:25:54
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
 * 试卷大题目(cc_PapersBigTopic)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_PapersBigTopic 
{
public static _CurrTabName= "cc_PapersBigTopic"; //当前表名,与该类相关的表名
public static _KeyFldName= "PapersBigTopicId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["papersBigTopicId", "papersBigTopicName", "topicDescription", "topicScores", "courseExamPaperId", "questionTypeId", "isShow", "orderNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public papersBigTopicId = "";    //试卷大题目Id
public papersBigTopicName = "";    //试卷大题目名称
public topicDescription = "";    //标题描述
public topicScores = 0;    //大题得分
public courseExamPaperId = "";    //考卷流水号
public questionTypeId = "";    //题目类型Id
public isShow = false;    //是否启用
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
case clscc_PapersBigTopic.con_PapersBigTopicId:
return this.papersBigTopicId;
case clscc_PapersBigTopic.con_PapersBigTopicName:
return this.papersBigTopicName;
case clscc_PapersBigTopic.con_TopicDescription:
return this.topicDescription;
case clscc_PapersBigTopic.con_TopicScores:
return this.topicScores;
case clscc_PapersBigTopic.con_CourseExamPaperId:
return this.courseExamPaperId;
case clscc_PapersBigTopic.con_QuestionTypeId:
return this.questionTypeId;
case clscc_PapersBigTopic.con_IsShow:
return this.isShow;
case clscc_PapersBigTopic.con_OrderNum:
return this.orderNum;
case clscc_PapersBigTopic.con_UpdDate:
return this.updDate;
case clscc_PapersBigTopic.con_UpdUser:
return this.updUser;
case clscc_PapersBigTopic.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_PapersBigTopic]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"PapersBigTopicId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PapersBigTopicId(): string {return "papersBigTopicId";}    //试卷大题目Id

 /**
 * 常量:"PapersBigTopicName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PapersBigTopicName(): string {return "papersBigTopicName";}    //试卷大题目名称

 /**
 * 常量:"TopicDescription"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicDescription(): string {return "topicDescription";}    //标题描述

 /**
 * 常量:"TopicScores"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicScores(): string {return "topicScores";}    //大题得分

 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

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