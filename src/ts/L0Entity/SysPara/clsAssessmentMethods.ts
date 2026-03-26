
 /**
 * 类名:clsAssessmentMethods
 * 表名:AssessmentMethods(01120967)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:25:03
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
 * 考核方式(AssessmentMethods)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsAssessmentMethods 
{
public static _CurrTabName= "AssessmentMethods"; //当前表名,与该类相关的表名
public static _KeyFldName= "AssessmentMethodId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["assessmentMethodId", "assessmentMethodName", "assessmentMethodEnName", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public assessmentMethodId = "";    //考核方式Id
public assessmentMethodName = "";    //考核方式名
public assessmentMethodEnName = "";    //考核方式英文名
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
case clsAssessmentMethods.con_AssessmentMethodId:
return this.assessmentMethodId;
case clsAssessmentMethods.con_AssessmentMethodName:
return this.assessmentMethodName;
case clsAssessmentMethods.con_AssessmentMethodEnName:
return this.assessmentMethodEnName;
case clsAssessmentMethods.con_UpdDate:
return this.updDate;
case clsAssessmentMethods.con_UpdUser:
return this.updUser;
case clsAssessmentMethods.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[AssessmentMethods]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"AssessmentMethodId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AssessmentMethodId(): string {return "assessmentMethodId";}    //考核方式Id

 /**
 * 常量:"AssessmentMethodName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AssessmentMethodName(): string {return "assessmentMethodName";}    //考核方式名

 /**
 * 常量:"AssessmentMethodEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AssessmentMethodEnName(): string {return "assessmentMethodEnName";}    //考核方式英文名

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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumAssessmentMethods
{
 /**
 * 课堂提问
 **/
static readonly ClassroomQuestioning_01 = "01";
 /**
 * 课后练习
 **/
static readonly PostClassExercises_02 = "02";
 /**
 * 上机操作
 **/
static readonly HandsonComputerPractice_03 = "03";
}