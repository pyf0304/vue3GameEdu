
 /**
 * 类名:clsge_LogicChartSubmitResults
 * 表名:ge_LogicChartSubmitResults(01120912)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:27:22
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
 * 知识逻辑图提交结果(ge_LogicChartSubmitResults)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_LogicChartSubmitResults 
{
public static _CurrTabName= "ge_LogicChartSubmitResults"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["mId", "knowledgeGraphId", "courseId", "createUser", "takeUpTime", "fraction", "correctNum", "errorNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public knowledgeGraphId = "";    //知识点图Id
public courseId = "";    //课程Id
public createUser = "";    //建立用户
public takeUpTime = "";    //耗时
public fraction = 0;    //分数
public correctNum = 0;    //正确数
public errorNum = 0;    //错误数
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
case clsge_LogicChartSubmitResults.con_mId:
return this.mId;
case clsge_LogicChartSubmitResults.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsge_LogicChartSubmitResults.con_CourseId:
return this.courseId;
case clsge_LogicChartSubmitResults.con_CreateUser:
return this.createUser;
case clsge_LogicChartSubmitResults.con_TakeUpTime:
return this.takeUpTime;
case clsge_LogicChartSubmitResults.con_Fraction:
return this.fraction;
case clsge_LogicChartSubmitResults.con_CorrectNum:
return this.correctNum;
case clsge_LogicChartSubmitResults.con_ErrorNum:
return this.errorNum;
case clsge_LogicChartSubmitResults.con_UpdDate:
return this.updDate;
case clsge_LogicChartSubmitResults.con_UpdUser:
return this.updUser;
case clsge_LogicChartSubmitResults.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_LogicChartSubmitResults]中不存在!`;
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
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CreateUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateUser(): string {return "createUser";}    //建立用户

 /**
 * 常量:"TakeUpTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TakeUpTime(): string {return "takeUpTime";}    //耗时

 /**
 * 常量:"Fraction"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Fraction(): string {return "fraction";}    //分数

 /**
 * 常量:"CorrectNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CorrectNum(): string {return "correctNum";}    //正确数

 /**
 * 常量:"ErrorNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ErrorNum(): string {return "errorNum";}    //错误数

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