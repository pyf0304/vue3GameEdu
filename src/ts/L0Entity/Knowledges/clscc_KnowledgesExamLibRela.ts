
 /**
 * 类名:clscc_KnowledgesExamLibRela
 * 表名:cc_KnowledgesExamLibRela(01120140)
 * 版本:2025.02.18.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/24 02:44:57
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
 * 知识点习题关系(cc_KnowledgesExamLibRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_KnowledgesExamLibRela 
{
public static _CurrTabName= "cc_KnowledgesExamLibRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["mId", "questionId", "courseKnowledgeId", "courseId", "positiveCorrelation", "negativeCorrelation", "isMain", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public questionId = 0;    //题目Id
public courseKnowledgeId = "";    //知识点Id
public courseId = "";    //课程Id
public positiveCorrelation = 0;    //正相关度
public negativeCorrelation = 0;    //负相关度
public isMain = false;    //是否主资源
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
case clscc_KnowledgesExamLibRela.con_mId:
return this.mId;
case clscc_KnowledgesExamLibRela.con_QuestionId:
return this.questionId;
case clscc_KnowledgesExamLibRela.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clscc_KnowledgesExamLibRela.con_CourseId:
return this.courseId;
case clscc_KnowledgesExamLibRela.con_PositiveCorrelation:
return this.positiveCorrelation;
case clscc_KnowledgesExamLibRela.con_NegativeCorrelation:
return this.negativeCorrelation;
case clscc_KnowledgesExamLibRela.con_IsMain:
return this.isMain;
case clscc_KnowledgesExamLibRela.con_UpdDate:
return this.updDate;
case clscc_KnowledgesExamLibRela.con_UpdUserId:
return this.updUserId;
case clscc_KnowledgesExamLibRela.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_KnowledgesExamLibRela]中不存在!`;
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
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"PositiveCorrelation"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PositiveCorrelation(): string {return "positiveCorrelation";}    //正相关度

 /**
 * 常量:"NegativeCorrelation"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_NegativeCorrelation(): string {return "negativeCorrelation";}    //负相关度

 /**
 * 常量:"IsMain"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMain(): string {return "isMain";}    //是否主资源

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