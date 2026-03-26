
 /**
 * 类名:clsge_StuBatchQuesRelaENEx
 * 表名:ge_StuBatchQuesRela(01120885)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:11
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 学生批次题目关系(ge_StuBatchQuesRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsge_StuBatchQuesRelaEN } from "@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN";

export class  clsge_StuBatchQuesRelaENEx extends clsge_StuBatchQuesRelaEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsge_StuBatchQuesRelaENEx.con_AnswerModeName:
return this.answerModeName;
case clsge_StuBatchQuesRelaENEx.con_QuestionTypeName:
return this.questionTypeName;
case clsge_StuBatchQuesRelaENEx.con_QuestionName:
return this.questionName;
case clsge_StuBatchQuesRelaENEx.con_OptionName:
return this.optionName;
case clsge_StuBatchQuesRelaENEx.con_CourseChapterId:
return this.courseChapterId;
case clsge_StuBatchQuesRelaENEx.con_CourseChapterName:
return this.courseChapterName;
case clsge_StuBatchQuesRelaENEx.con_UserName:
return this.userName;
case clsge_StuBatchQuesRelaENEx.con_ChapterNameSim:
return this.chapterNameSim;
case clsge_StuBatchQuesRelaENEx.con_QuestionTypeId:
return this.questionTypeId;
case clsge_StuBatchQuesRelaENEx.con_GameLevelName:
return this.gameLevelName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"AnswerModeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_AnswerModeName(): string {return "answerModeName";}    //答案模式名称

 /**
 * 常量:"QuestionTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionTypeName(): string {return "questionTypeName";}    //题目类型名

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"OptionName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_OptionName(): string {return "optionName";}    //选项名称

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"CourseChapterName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseChapterName(): string {return "courseChapterName";}    //课程章节名称

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"GameLevelName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GameLevelName(): string {return "gameLevelName";}    //游戏关卡名称

public answerModeName = "";    //答案模式名称
public questionTypeName = "";    //题目类型名
public questionName = "";    //题目名称
public optionName = "";    //选项名称
public courseChapterId = "";    //课程章节ID
public courseChapterName = "";    //课程章节名称
public userName = "";    //用户名
public chapterNameSim = "";    //章名简称
public questionTypeId = "";    //题目类型Id
public gameLevelName = "";    //游戏关卡名称

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsge_StuBatchQuesRelaENEx.con_AnswerModeName:
this.answerModeName = strValue;
    this.hmProperty["answerModeName"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_QuestionTypeName:
this.questionTypeName = strValue;
    this.hmProperty["questionTypeName"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_OptionName:
this.optionName = strValue;
    this.hmProperty["optionName"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_CourseChapterId:
this.courseChapterId = strValue;
    this.hmProperty["courseChapterId"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_CourseChapterName:
this.courseChapterName = strValue;
    this.hmProperty["courseChapterName"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_ChapterNameSim:
this.chapterNameSim = strValue;
    this.hmProperty["chapterNameSim"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_QuestionTypeId:
this.questionTypeId = strValue;
    this.hmProperty["questionTypeId"] = true;
break;
case clsge_StuBatchQuesRelaENEx.con_GameLevelName:
this.gameLevelName = strValue;
    this.hmProperty["gameLevelName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StuBatchQuesRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsge_StuBatchQuesRelaENEx();
const instance = new clsge_StuBatchQuesRelaENEx();
return instance.hasOwnProperty(propName);
}
}