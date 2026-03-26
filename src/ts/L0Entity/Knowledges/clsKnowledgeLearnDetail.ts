
 /**
 * 类名:clsKnowledgeLearnDetail
 * 表名:KnowledgeLearnDetail(01120153)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/11 15:54:21
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
 * 知识点学习情况(KnowledgeLearnDetail)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsKnowledgeLearnDetail 
{
public static _CurrTabName= "KnowledgeLearnDetail"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["mId", "userId", "learnDate", "learnModeId", "courseKnowledgeId", "idCase", "idCaseType", "isRight", "isMaster", "masterDegree", "markerId", "markTime", "isAnalysis", "courseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public userId = "";    //用户ID
public learnDate = "";    //学习日期
public learnModeId = "";    //学习模式Id
public courseKnowledgeId = "";    //知识点Id
public idCase = "";    //案例流水号
public idCaseType = "";    //案例类型流水号
public isRight = false;    //是否正确
public isMaster = false;    //是否掌握
public masterDegree = 0;    //掌握程度
public markerId = "";    //打分者
public markTime = "";    //批改时间
public isAnalysis = false;    //是否分析
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
case clsKnowledgeLearnDetail.con_mId:
return this.mId;
case clsKnowledgeLearnDetail.con_UserId:
return this.userId;
case clsKnowledgeLearnDetail.con_LearnDate:
return this.learnDate;
case clsKnowledgeLearnDetail.con_LearnModeId:
return this.learnModeId;
case clsKnowledgeLearnDetail.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsKnowledgeLearnDetail.con_IdCase:
return this.idCase;
case clsKnowledgeLearnDetail.con_IdCaseType:
return this.idCaseType;
case clsKnowledgeLearnDetail.con_IsRight:
return this.isRight;
case clsKnowledgeLearnDetail.con_IsMaster:
return this.isMaster;
case clsKnowledgeLearnDetail.con_MasterDegree:
return this.masterDegree;
case clsKnowledgeLearnDetail.con_MarkerId:
return this.markerId;
case clsKnowledgeLearnDetail.con_MarkTime:
return this.markTime;
case clsKnowledgeLearnDetail.con_IsAnalysis:
return this.isAnalysis;
case clsKnowledgeLearnDetail.con_CourseId:
return this.courseId;
case clsKnowledgeLearnDetail.con_UpdDate:
return this.updDate;
case clsKnowledgeLearnDetail.con_UpdUser:
return this.updUser;
case clsKnowledgeLearnDetail.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeLearnDetail]中不存在!`;
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
 * 常量:"LearnDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LearnDate(): string {return "learnDate";}    //学习日期

 /**
 * 常量:"LearnModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LearnModeId(): string {return "learnModeId";}    //学习模式Id

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"IdCase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCase(): string {return "idCase";}    //案例流水号

 /**
 * 常量:"IdCaseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCaseType(): string {return "idCaseType";}    //案例类型流水号

 /**
 * 常量:"IsRight"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRight(): string {return "isRight";}    //是否正确

 /**
 * 常量:"IsMaster"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMaster(): string {return "isMaster";}    //是否掌握

 /**
 * 常量:"MasterDegree"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterDegree(): string {return "masterDegree";}    //掌握程度

 /**
 * 常量:"MarkerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkerId(): string {return "markerId";}    //打分者

 /**
 * 常量:"MarkTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MarkTime(): string {return "markTime";}    //批改时间

 /**
 * 常量:"IsAnalysis"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAnalysis(): string {return "isAnalysis";}    //是否分析

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