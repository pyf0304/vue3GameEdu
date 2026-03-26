
 /**
 * 类名:clsvge_UserCreditsLog_MaxCredits
 * 表名:vge_UserCreditsLog_MaxCredits(01120939)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/06 16:39:48
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
 * v用户积分日志_最高分(vge_UserCreditsLog_MaxCredits)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvge_UserCreditsLog_MaxCredits 
{
public static _CurrTabName= "vge_UserCreditsLog_MaxCredits"; //当前表名,与该类相关的表名
public static _KeyFldName= "GameLevelId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["gameLevelId", "credits", "userId", "idCurrEduCls", "courseId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public gameLevelId = "";    //游戏关卡Id
public credits = 0;    //积分
public userId = "";    //用户ID
public idCurrEduCls = "";    //教学班流水号
public courseId = "";    //课程Id

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
case clsvge_UserCreditsLog_MaxCredits.con_GameLevelId:
return this.gameLevelId;
case clsvge_UserCreditsLog_MaxCredits.con_Credits:
return this.credits;
case clsvge_UserCreditsLog_MaxCredits.con_UserId:
return this.userId;
case clsvge_UserCreditsLog_MaxCredits.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvge_UserCreditsLog_MaxCredits.con_CourseId:
return this.courseId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vge_UserCreditsLog_MaxCredits]中不存在!`;
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
 * 常量:"Credits"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

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
}