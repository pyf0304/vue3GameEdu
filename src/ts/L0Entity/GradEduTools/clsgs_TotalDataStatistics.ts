
 /**
 * 类名:clsgs_TotalDataStatistics
 * 表名:gs_TotalDataStatistics(01120683)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:00
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 总数据统计(gs_TotalDataStatistics)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_TotalDataStatistics 
{
public static _CurrTabName= "gs_TotalDataStatistics"; //当前表名,与该类相关的表名
public static _KeyFldName= "TotalDataId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["totalDataId", "idCurrEduCls", "totalDataTypeId", "tableKey", "dataUser", "dataAddDate", "month", "week", "updDate", "updUser", "memo", "score", "teaScore", "weekTimeRange", "stuScore"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public totalDataId = "";    //TotalDataId
public idCurrEduCls = "";    //教学班流水号
public totalDataTypeId = "";    //总数据类型Id
public tableKey = "";    //表主键
public dataUser = "";    //数据用户
public dataAddDate = "";    //数据添加日期
public month = 0;    //月
public week = 0;    //周
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public score = 0.0;    //评分
public teaScore = 0.0;    //教师评分
public weekTimeRange = "";    //WeekTimeRange
public stuScore = 0.0;    //学生平均分

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
case clsgs_TotalDataStatistics.con_TotalDataId:
return this.totalDataId;
case clsgs_TotalDataStatistics.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsgs_TotalDataStatistics.con_TotalDataTypeId:
return this.totalDataTypeId;
case clsgs_TotalDataStatistics.con_TableKey:
return this.tableKey;
case clsgs_TotalDataStatistics.con_DataUser:
return this.dataUser;
case clsgs_TotalDataStatistics.con_DataAddDate:
return this.dataAddDate;
case clsgs_TotalDataStatistics.con_Month:
return this.month;
case clsgs_TotalDataStatistics.con_Week:
return this.week;
case clsgs_TotalDataStatistics.con_UpdDate:
return this.updDate;
case clsgs_TotalDataStatistics.con_UpdUser:
return this.updUser;
case clsgs_TotalDataStatistics.con_Memo:
return this.memo;
case clsgs_TotalDataStatistics.con_Score:
return this.score;
case clsgs_TotalDataStatistics.con_TeaScore:
return this.teaScore;
case clsgs_TotalDataStatistics.con_WeekTimeRange:
return this.weekTimeRange;
case clsgs_TotalDataStatistics.con_StuScore:
return this.stuScore;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_TotalDataStatistics]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"TotalDataId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalDataId(): string {return "totalDataId";}    //TotalDataId

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"TotalDataTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalDataTypeId(): string {return "totalDataTypeId";}    //总数据类型Id

 /**
 * 常量:"TableKey"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

 /**
 * 常量:"DataUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DataUser(): string {return "dataUser";}    //数据用户

 /**
 * 常量:"DataAddDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DataAddDate(): string {return "dataAddDate";}    //数据添加日期

 /**
 * 常量:"Month"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Month(): string {return "month";}    //月

 /**
 * 常量:"Week"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Week(): string {return "week";}    //周

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
 * 常量:"Score"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"TeaScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeaScore(): string {return "teaScore";}    //教师评分

 /**
 * 常量:"WeekTimeRange"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekTimeRange(): string {return "weekTimeRange";}    //WeekTimeRange

 /**
 * 常量:"StuScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuScore(): string {return "stuScore";}    //学生平均分
}