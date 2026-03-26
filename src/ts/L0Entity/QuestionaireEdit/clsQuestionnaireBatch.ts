
 /**
 * 类名:clsQuestionnaireBatch
 * 表名:QuestionnaireBatch(01120006)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:29:10
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
 * 问卷批次(QuestionnaireBatch)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQuestionnaireBatch 
{
public static _CurrTabName= "QuestionnaireBatch"; //当前表名,与该类相关的表名
public static _KeyFldName= "BatchId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["batchId", "batchName", "roleId", "questionnaireSetId", "isDefault", "isDefaultUser", "createDate", "createUser", "pageName", "isRandomSelSet", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public batchId = "";    //批次ID
public batchName = "";    //批次名称
public roleId = "";    //角色Id
public questionnaireSetId = "";    //问卷集ID
public isDefault = false;    //是否默认
public isDefaultUser = false;    //是否默认用户
public createDate = "";    //建立日期
public createUser = "";    //建立用户
public pageName = "";    //页面名称
public isRandomSelSet = false;    //是否随机选问卷集
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
case clsQuestionnaireBatch.con_BatchId:
return this.batchId;
case clsQuestionnaireBatch.con_BatchName:
return this.batchName;
case clsQuestionnaireBatch.con_RoleId:
return this.roleId;
case clsQuestionnaireBatch.con_QuestionnaireSetId:
return this.questionnaireSetId;
case clsQuestionnaireBatch.con_IsDefault:
return this.isDefault;
case clsQuestionnaireBatch.con_IsDefaultUser:
return this.isDefaultUser;
case clsQuestionnaireBatch.con_CreateDate:
return this.createDate;
case clsQuestionnaireBatch.con_CreateUser:
return this.createUser;
case clsQuestionnaireBatch.con_PageName:
return this.pageName;
case clsQuestionnaireBatch.con_IsRandomSelSet:
return this.isRandomSelSet;
case clsQuestionnaireBatch.con_UpdDate:
return this.updDate;
case clsQuestionnaireBatch.con_UpdUser:
return this.updUser;
case clsQuestionnaireBatch.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QuestionnaireBatch]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"BatchId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchId(): string {return "batchId";}    //批次ID

 /**
 * 常量:"BatchName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchName(): string {return "batchName";}    //批次名称

 /**
 * 常量:"RoleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"QuestionnaireSetId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionnaireSetId(): string {return "questionnaireSetId";}    //问卷集ID

 /**
 * 常量:"IsDefault"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDefault(): string {return "isDefault";}    //是否默认

 /**
 * 常量:"IsDefaultUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDefaultUser(): string {return "isDefaultUser";}    //是否默认用户

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"CreateUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateUser(): string {return "createUser";}    //建立用户

 /**
 * 常量:"PageName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PageName(): string {return "pageName";}    //页面名称

 /**
 * 常量:"IsRandomSelSet"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRandomSelSet(): string {return "isRandomSelSet";}    //是否随机选问卷集

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