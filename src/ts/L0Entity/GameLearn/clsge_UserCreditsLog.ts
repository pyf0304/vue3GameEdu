
 /**
 * 类名:clsge_UserCreditsLog
 * 表名:ge_UserCreditsLog(01120883)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/07 09:11:29
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 用户积分日志(ge_UserCreditsLog)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_UserCreditsLog 
{
public static _CurrTabName= "ge_UserCreditsLog"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["mId", "userId", "questionId", "examBatchNo", "credits", "creditTypeId", "badgeNum", "passed", "isSubmit", "getInstructions", "getDate", "idCurrEduCls", "gameLevelId", "courseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public userId = "";    //用户ID
public questionId = 0;    //题目Id
public examBatchNo = "";    //学生批次号
public credits = 0;    //积分
public creditTypeId = "";    //积分类型Id
public badgeNum = 0;    //徽章数量
public passed = false;    //是否合格
public isSubmit = false;    //是否提交
public getInstructions = "";    //获取说明
public getDate = "";    //获取日期
public idCurrEduCls = "";    //教学班流水号
public gameLevelId = "";    //游戏关卡Id
public courseId = "";    //课程Id
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
case clsge_UserCreditsLog.con_mId:
return this.mId;
case clsge_UserCreditsLog.con_UserId:
return this.userId;
case clsge_UserCreditsLog.con_QuestionId:
return this.questionId;
case clsge_UserCreditsLog.con_ExamBatchNo:
return this.examBatchNo;
case clsge_UserCreditsLog.con_Credits:
return this.credits;
case clsge_UserCreditsLog.con_CreditTypeId:
return this.creditTypeId;
case clsge_UserCreditsLog.con_BadgeNum:
return this.badgeNum;
case clsge_UserCreditsLog.con_Passed:
return this.passed;
case clsge_UserCreditsLog.con_IsSubmit:
return this.isSubmit;
case clsge_UserCreditsLog.con_GetInstructions:
return this.getInstructions;
case clsge_UserCreditsLog.con_GetDate:
return this.getDate;
case clsge_UserCreditsLog.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_UserCreditsLog.con_GameLevelId:
return this.gameLevelId;
case clsge_UserCreditsLog.con_CourseId:
return this.courseId;
case clsge_UserCreditsLog.con_UpdDate:
return this.updDate;
case clsge_UserCreditsLog.con_UpdUser:
return this.updUser;
case clsge_UserCreditsLog.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_UserCreditsLog]中不存在!`;
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
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"ExamBatchNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamBatchNo(): string {return "examBatchNo";}    //学生批次号

 /**
 * 常量:"Credits"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

 /**
 * 常量:"CreditTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreditTypeId(): string {return "creditTypeId";}    //积分类型Id

 /**
 * 常量:"BadgeNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeNum(): string {return "badgeNum";}    //徽章数量

 /**
 * 常量:"Passed"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Passed(): string {return "passed";}    //是否合格

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"GetInstructions"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GetInstructions(): string {return "getInstructions";}    //获取说明

 /**
 * 常量:"GetDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GetDate(): string {return "getDate";}    //获取日期

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"GameLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GameLevelId(): string {return "gameLevelId";}    //游戏关卡Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

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