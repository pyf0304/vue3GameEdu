
 /**
 * 类名:clsAnswerType
 * 表名:AnswerType(01120004)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:50
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 答案类型(AnswerType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsAnswerType 
{
public static _CurrTabName= "AnswerType"; //当前表名,与该类相关的表名
public static _KeyFldName= "AnswerTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["answerTypeId", "answerTypeName", "answerTypeENName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public answerTypeId = "";    //答案类型ID
public answerTypeName = "";    //答案类型名
public answerTypeENName = "";    //答案类型英文名
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
case clsAnswerType.con_AnswerTypeId:
return this.answerTypeId;
case clsAnswerType.con_AnswerTypeName:
return this.answerTypeName;
case clsAnswerType.con_AnswerTypeENName:
return this.answerTypeENName;
case clsAnswerType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[AnswerType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"AnswerTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTypeId(): string {return "answerTypeId";}    //答案类型ID

 /**
 * 常量:"AnswerTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTypeName(): string {return "answerTypeName";}    //答案类型名

 /**
 * 常量:"AnswerTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AnswerTypeENName(): string {return "answerTypeENName";}    //答案类型英文名

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumAnswerType
{
 /**
 * 复选框
 **/
static readonly CheckBox_01 = "01";
 /**
 * 单选框
 **/
static readonly Radio_02 = "02";
 /**
 * 文本框
 **/
static readonly TextBox_03 = "03";
 /**
 * 无答案
 **/
static readonly NoAnswer_04 = "04";
 /**
 * 下拉框
 **/
static readonly DropDownBox_05 = "05";
 /**
 * 通行文本框
 **/
static readonly PassageTextBox_06 = "06";
 /**
 * 录音器
 **/
static readonly Recorder_07 = "07";
}