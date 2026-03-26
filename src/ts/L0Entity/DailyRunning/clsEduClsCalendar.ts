
 /**
 * 类名:clsEduClsCalendar
 * 表名:EduClsCalendar(01120988)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/07 08:49:00
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学班学历(EduClsCalendar)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsEduClsCalendar 
{
public static _CurrTabName= "EduClsCalendar"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsCalendar"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["idEduClsCalendar", "idCurrEduCls", "startDate", "endDate", "weekIndex", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idEduClsCalendar = 0;    //教学班学历流水号
public idCurrEduCls = "";    //教学班流水号
public startDate = "";    //开始日期
public endDate = "";    //截止日期
public weekIndex = 0;    //周序号
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
case clsEduClsCalendar.con_IdEduClsCalendar:
return this.idEduClsCalendar;
case clsEduClsCalendar.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsEduClsCalendar.con_StartDate:
return this.startDate;
case clsEduClsCalendar.con_EndDate:
return this.endDate;
case clsEduClsCalendar.con_WeekIndex:
return this.weekIndex;
case clsEduClsCalendar.con_UpdDate:
return this.updDate;
case clsEduClsCalendar.con_UpdUser:
return this.updUser;
case clsEduClsCalendar.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[EduClsCalendar]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdEduClsCalendar"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduClsCalendar(): string {return "idEduClsCalendar";}    //教学班学历流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"StartDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StartDate(): string {return "startDate";}    //开始日期

 /**
 * 常量:"EndDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EndDate(): string {return "endDate";}    //截止日期

 /**
 * 常量:"WeekIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekIndex(): string {return "weekIndex";}    //周序号

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