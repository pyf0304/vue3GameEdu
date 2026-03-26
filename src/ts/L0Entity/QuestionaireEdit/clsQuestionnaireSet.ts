
 /**
 * 类名:clsQuestionnaireSet
 * 表名:QuestionnaireSet(01120007)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 17:12:38
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
 * 问卷集(QuestionnaireSet)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQuestionnaireSet 
{
public static _CurrTabName= "QuestionnaireSet"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionnaireSetId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["questionnaireSetId", "questionnaireSetName", "orderFieldInExport", "classNo", "classNo2", "isShowQuestionNo", "logoFileName", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public questionnaireSetId = "";    //问卷集ID
public questionnaireSetName = "";    //问卷集名
public orderFieldInExport = "";    //导出排序字段
public classNo = 0;    //分类号1
public classNo2 = 0;    //分类号2
public isShowQuestionNo = false;    //是否显示问题编号
public logoFileName = "";    //Logo文件名
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
case clsQuestionnaireSet.con_QuestionnaireSetId:
return this.questionnaireSetId;
case clsQuestionnaireSet.con_QuestionnaireSetName:
return this.questionnaireSetName;
case clsQuestionnaireSet.con_OrderFieldInExport:
return this.orderFieldInExport;
case clsQuestionnaireSet.con_ClassNo:
return this.classNo;
case clsQuestionnaireSet.con_ClassNo2:
return this.classNo2;
case clsQuestionnaireSet.con_IsShowQuestionNo:
return this.isShowQuestionNo;
case clsQuestionnaireSet.con_LogoFileName:
return this.logoFileName;
case clsQuestionnaireSet.con_UpdDate:
return this.updDate;
case clsQuestionnaireSet.con_UpdUser:
return this.updUser;
case clsQuestionnaireSet.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionnaireSet]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"QuestionnaireSetId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionnaireSetId(): string {return "questionnaireSetId";}    //问卷集ID

 /**
 * 常量:"QuestionnaireSetName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionnaireSetName(): string {return "questionnaireSetName";}    //问卷集名

 /**
 * 常量:"OrderFieldInExport"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderFieldInExport(): string {return "orderFieldInExport";}    //导出排序字段

 /**
 * 常量:"ClassNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassNo(): string {return "classNo";}    //分类号1

 /**
 * 常量:"ClassNo2"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassNo2(): string {return "classNo2";}    //分类号2

 /**
 * 常量:"IsShowQuestionNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShowQuestionNo(): string {return "isShowQuestionNo";}    //是否显示问题编号

 /**
 * 常量:"LogoFileName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LogoFileName(): string {return "logoFileName";}    //Logo文件名

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