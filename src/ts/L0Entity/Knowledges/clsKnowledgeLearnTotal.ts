
 /**
 * 类名:clsKnowledgeLearnTotal
 * 表名:KnowledgeLearnTotal(01120155)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:43
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
 * 知识点学习汇总表(KnowledgeLearnTotal)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsKnowledgeLearnTotal 
{
public static _CurrTabName= "KnowledgeLearnTotal"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["mId", "userId", "masterDegree", "learnCount", "courseKnowledgeId", "successCount", "failCount", "continuousSuccessCount", "continuousFailCount", "lastLearnDate", "recommendedNextReviewDate", "courseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public userId = "";    //用户ID
public masterDegree = 0;    //掌握程度
public learnCount = 0;    //学习次数
public courseKnowledgeId = "";    //知识点Id
public successCount = 0;    //成功次数
public failCount = 0;    //失败次数
public continuousSuccessCount = 0;    //连续成功次数
public continuousFailCount = 0;    //连续失败次数
public lastLearnDate = "";    //最后学习日期
public recommendedNextReviewDate = "";    //推荐下次复习日期
public courseId = "";    //课程Id
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
case clsKnowledgeLearnTotal.con_mId:
return this.mId;
case clsKnowledgeLearnTotal.con_UserId:
return this.userId;
case clsKnowledgeLearnTotal.con_MasterDegree:
return this.masterDegree;
case clsKnowledgeLearnTotal.con_LearnCount:
return this.learnCount;
case clsKnowledgeLearnTotal.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsKnowledgeLearnTotal.con_SuccessCount:
return this.successCount;
case clsKnowledgeLearnTotal.con_FailCount:
return this.failCount;
case clsKnowledgeLearnTotal.con_ContinuousSuccessCount:
return this.continuousSuccessCount;
case clsKnowledgeLearnTotal.con_ContinuousFailCount:
return this.continuousFailCount;
case clsKnowledgeLearnTotal.con_LastLearnDate:
return this.lastLearnDate;
case clsKnowledgeLearnTotal.con_RecommendedNextReviewDate:
return this.recommendedNextReviewDate;
case clsKnowledgeLearnTotal.con_CourseId:
return this.courseId;
case clsKnowledgeLearnTotal.con_UpdDate:
return this.updDate;
case clsKnowledgeLearnTotal.con_UpdUser:
return this.updUser;
case clsKnowledgeLearnTotal.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeLearnTotal]中不存在!`;
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
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"MasterDegree"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterDegree(): string {return "masterDegree";}    //掌握程度

 /**
 * 常量:"LearnCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LearnCount(): string {return "learnCount";}    //学习次数

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"SuccessCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SuccessCount(): string {return "successCount";}    //成功次数

 /**
 * 常量:"FailCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FailCount(): string {return "failCount";}    //失败次数

 /**
 * 常量:"ContinuousSuccessCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ContinuousSuccessCount(): string {return "continuousSuccessCount";}    //连续成功次数

 /**
 * 常量:"ContinuousFailCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ContinuousFailCount(): string {return "continuousFailCount";}    //连续失败次数

 /**
 * 常量:"LastLearnDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LastLearnDate(): string {return "lastLearnDate";}    //最后学习日期

 /**
 * 常量:"RecommendedNextReviewDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RecommendedNextReviewDate(): string {return "recommendedNextReviewDate";}    //推荐下次复习日期

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