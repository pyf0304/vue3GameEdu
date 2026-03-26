
 /**
 * 类名:clsvQuestionnaireByQuesType
 * 表名:vQuestionnaireByQuesType(01120982)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/13 11:31:32
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * vQuestionnaireByQuesType(vQuestionnaireByQuesType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvQuestionnaireByQuesType 
{
public static _CurrTabName= "vQuestionnaireByQuesType"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["questionTypeId", "questionTypeName", "questionNum", "courseId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public questionTypeId = "";    //题目类型Id
public questionTypeName = "";    //题目类型名
public questionNum = 0;    //题目数
public courseId = "";    //课程Id

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
case clsvQuestionnaireByQuesType.con_QuestionTypeId:
return this.questionTypeId;
case clsvQuestionnaireByQuesType.con_QuestionTypeName:
return this.questionTypeName;
case clsvQuestionnaireByQuesType.con_QuestionNum:
return this.questionNum;
case clsvQuestionnaireByQuesType.con_CourseId:
return this.courseId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaireByQuesType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"QuestionTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeName(): string {return "questionTypeName";}    //题目类型名

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id
}