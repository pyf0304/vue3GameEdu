
 /**
 * 类名:clsge_GameLevel
 * 表名:ge_GameLevel(01120904)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/13 11:05:17
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
 * 游戏关卡表(ge_GameLevel)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_GameLevel 
{
public static _CurrTabName= "ge_GameLevel"; //当前表名,与该类相关的表名
public static _KeyFldName= "GameLevelId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["gameLevelId", "gameLevelName", "idCurrEduCls", "courseId", "orderNum", "difficultyLevelId", "levelModeTypeId", "questionTypeId", "questionNum", "questionScore", "isRecommend", "updDate", "updUser", "memo", "totalScore", "inUse", "endTime", "startTime"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public gameLevelId = "";    //游戏关卡Id
public gameLevelName = "";    //游戏关卡名称
public idCurrEduCls = "";    //教学班流水号
public courseId = "";    //课程Id
public orderNum = 0;    //序号
public difficultyLevelId = "";    //难度等级Id
public levelModeTypeId = "";    //模式Id
public questionTypeId = "";    //题目类型Id
public questionNum = 0;    //题目数
public questionScore = 0.0;    //题目得分
public isRecommend = false;    //是否推荐
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public totalScore = 0;    //总得分
public inUse = false;    //是否在用
public endTime = "";    //结束时间
public startTime = "";    //开始时间(s)

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
case clsge_GameLevel.con_GameLevelId:
return this.gameLevelId;
case clsge_GameLevel.con_GameLevelName:
return this.gameLevelName;
case clsge_GameLevel.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_GameLevel.con_CourseId:
return this.courseId;
case clsge_GameLevel.con_OrderNum:
return this.orderNum;
case clsge_GameLevel.con_DifficultyLevelId:
return this.difficultyLevelId;
case clsge_GameLevel.con_LevelModeTypeId:
return this.levelModeTypeId;
case clsge_GameLevel.con_QuestionTypeId:
return this.questionTypeId;
case clsge_GameLevel.con_QuestionNum:
return this.questionNum;
case clsge_GameLevel.con_QuestionScore:
return this.questionScore;
case clsge_GameLevel.con_IsRecommend:
return this.isRecommend;
case clsge_GameLevel.con_UpdDate:
return this.updDate;
case clsge_GameLevel.con_UpdUser:
return this.updUser;
case clsge_GameLevel.con_Memo:
return this.memo;
case clsge_GameLevel.con_TotalScore:
return this.totalScore;
case clsge_GameLevel.con_InUse:
return this.inUse;
case clsge_GameLevel.con_EndTime:
return this.endTime;
case clsge_GameLevel.con_StartTime:
return this.startTime;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_GameLevel]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"GameLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GameLevelId(): string {return "gameLevelId";}    //游戏关卡Id

 /**
 * 常量:"GameLevelName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GameLevelName(): string {return "gameLevelName";}    //游戏关卡名称

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"DifficultyLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DifficultyLevelId(): string {return "difficultyLevelId";}    //难度等级Id

 /**
 * 常量:"LevelModeTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelModeTypeId(): string {return "levelModeTypeId";}    //模式Id

 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

 /**
 * 常量:"QuestionScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionScore(): string {return "questionScore";}    //题目得分

 /**
 * 常量:"IsRecommend"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

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

 /**
 * 常量:"TotalScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalScore(): string {return "totalScore";}    //总得分

 /**
 * 常量:"InUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"EndTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EndTime(): string {return "endTime";}    //结束时间

 /**
 * 常量:"StartTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StartTime(): string {return "startTime";}    //开始时间(s)
}