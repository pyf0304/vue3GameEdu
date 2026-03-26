
 /**
 * 类名:clsge_UserScoreCurrWeek
 * 表名:ge_UserScoreCurrWeek(01120989)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 11:10:37
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
 * 用户当前周得分(ge_UserScoreCurrWeek)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_UserScoreCurrWeek 
{
public static _CurrTabName= "ge_UserScoreCurrWeek"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls,UserId,IdEduClsCalendar"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["idCurrEduCls", "userId", "idEduClsCalendar", "courseId", "passed", "credits", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idCurrEduCls = "";    //教学班流水号
public userId = "";    //用户ID
public idEduClsCalendar = 0;    //教学班学历流水号
public courseId = "";    //课程Id
public passed = false;    //是否合格
public credits = 0;    //积分
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
case clsge_UserScoreCurrWeek.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_UserScoreCurrWeek.con_UserId:
return this.userId;
case clsge_UserScoreCurrWeek.con_IdEduClsCalendar:
return this.idEduClsCalendar;
case clsge_UserScoreCurrWeek.con_CourseId:
return this.courseId;
case clsge_UserScoreCurrWeek.con_Passed:
return this.passed;
case clsge_UserScoreCurrWeek.con_Credits:
return this.credits;
case clsge_UserScoreCurrWeek.con_UpdDate:
return this.updDate;
case clsge_UserScoreCurrWeek.con_UpdUser:
return this.updUser;
case clsge_UserScoreCurrWeek.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_UserScoreCurrWeek]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"IdEduClsCalendar"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduClsCalendar(): string {return "idEduClsCalendar";}    //教学班学历流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"Passed"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Passed(): string {return "passed";}    //是否合格

 /**
 * 常量:"Credits"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

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