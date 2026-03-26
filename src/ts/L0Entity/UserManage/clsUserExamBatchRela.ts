
 /**
 * 类名:clsUserExamBatchRela
 * 表名:UserExamBatchRela(01120980)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/13 16:45:52
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 用户考核批次关系(UserExamBatchRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsUserExamBatchRela 
{
public static _CurrTabName= "UserExamBatchRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserId,ExamBatchNo"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["userId", "examBatchNo", "batchTypeId", "idCurrEduCls", "courseKnowledgeId", "difficultyLevelId", "batchStateId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public userId = "";    //用户ID
public examBatchNo = "";    //学生批次号
public batchTypeId = "";    //批次类型Id
public idCurrEduCls = "";    //教学班流水号
public courseKnowledgeId = "";    //知识点Id
public difficultyLevelId = "";    //难度等级Id
public batchStateId = "";    //批次状态Id
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
case clsUserExamBatchRela.con_UserId:
return this.userId;
case clsUserExamBatchRela.con_ExamBatchNo:
return this.examBatchNo;
case clsUserExamBatchRela.con_BatchTypeId:
return this.batchTypeId;
case clsUserExamBatchRela.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsUserExamBatchRela.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsUserExamBatchRela.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsUserExamBatchRela.con_BatchStateId:
return this.batchStateId;
case clsUserExamBatchRela.con_UpdDate:
return this.updDate;
case clsUserExamBatchRela.con_UpdUser:
return this.updUser;
case clsUserExamBatchRela.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[UserExamBatchRela]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"ExamBatchNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamBatchNo(): string {return "examBatchNo";}    //学生批次号

 /**
 * 常量:"BatchTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchTypeId(): string {return "batchTypeId";}    //批次类型Id

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

 /**
 * 常量:"BatchStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchStateId(): string {return "batchStateId";}    //批次状态Id

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