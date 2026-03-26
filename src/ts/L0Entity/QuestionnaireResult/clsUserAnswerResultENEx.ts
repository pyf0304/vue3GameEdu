
 /**
 * 类名:clsUserAnswerResultENEx
 * 表名:UserAnswerResult(01120032)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/07 08:48:53
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 用户答题结果(UserAnswerResult)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsUserAnswerResultEN } from "@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN";

export class  clsUserAnswerResultENEx extends clsUserAnswerResultEN
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
case clsUserAnswerResultENEx.con_ExamPaperName:
return this.examPaperName;
case clsUserAnswerResultENEx.con_QuestionName:
return this.questionName;
case clsUserAnswerResultENEx.con_OptionName:
return this.optionName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"ExamPaperName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ExamPaperName(): string {return "examPaperName";}    //考卷名称

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

public examPaperName = "";    //考卷名称
public questionName = "";    //题目名称
public optionName = "";    //选项名称

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
case clsUserAnswerResultENEx.con_ExamPaperName:
this.examPaperName = strValue;
    this.hmProperty["examPaperName"] = true;
break;
case clsUserAnswerResultENEx.con_QuestionName:
this.questionName = strValue;
    this.hmProperty["questionName"] = true;
break;
case clsUserAnswerResultENEx.con_OptionName:
this.optionName = strValue;
    this.hmProperty["optionName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[UserAnswerResult]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsUserAnswerResultENEx();
const instance = new clsUserAnswerResultENEx();
return instance.hasOwnProperty(propName);
}
}