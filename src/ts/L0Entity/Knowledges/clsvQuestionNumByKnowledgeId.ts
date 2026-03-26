
 /**
 * 类名:clsvQuestionNumByKnowledgeId
 * 表名:vQuestionNumByKnowledgeId(01120937)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/02 15:12:37
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
 * vQuestionNumByKnowledgeId(vQuestionNumByKnowledgeId)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvQuestionNumByKnowledgeId 
{
public static _CurrTabName= "vQuestionNumByKnowledgeId"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseKnowledgeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["courseKnowledgeId", "courseId", "questionNum"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseKnowledgeId = "";    //知识点Id
public courseId = "";    //课程Id
public questionNum = 0;    //题目数

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
case clsvQuestionNumByKnowledgeId.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsvQuestionNumByKnowledgeId.con_CourseId:
return this.courseId;
case clsvQuestionNumByKnowledgeId.con_QuestionNum:
return this.questionNum;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionNumByKnowledgeId]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"QuestionNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数
}