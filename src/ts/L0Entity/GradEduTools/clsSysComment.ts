
 /**
 * 类名:clsSysComment
 * 表名:SysComment(01120622)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:27
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
 * 系统评论表(SysComment)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSysComment 
{
public static _CurrTabName= "SysComment"; //当前表名,与该类相关的表名
public static _KeyFldName= "CommentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["commentId", "comment", "score", "commentTypeId", "scoreType", "parentId", "tableKey", "okCount", "pubParentId", "idCurrEduCls", "userId", "month", "week", "weekTimeRange", "updUser", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public commentId = "";    //评论Id
public comment = "";    //评论
public score = 0.0;    //评分
public commentTypeId = "";    //评论类型Id
public scoreType = "";    //评分类型
public parentId = "";    //父Id
public tableKey = "";    //表主键
public okCount = 0;    //点赞统计
public pubParentId = "";    //公共父Id
public idCurrEduCls = "";    //教学班流水号
public userId = "";    //用户ID
public month = 0;    //月
public week = 0;    //周
public weekTimeRange = "";    //WeekTimeRange
public updUser = "";    //修改人
public updDate = "";    //修改日期
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
case clsSysComment.con_CommentId:
return this.commentId;
case clsSysComment.con_Comment:
return this.comment;
case clsSysComment.con_Score:
return this.score;
case clsSysComment.con_CommentTypeId:
return this.commentTypeId;
case clsSysComment.con_ScoreType:
return this.scoreType;
case clsSysComment.con_ParentId:
return this.parentId;
case clsSysComment.con_TableKey:
return this.tableKey;
case clsSysComment.con_OkCount:
return this.okCount;
case clsSysComment.con_PubParentId:
return this.pubParentId;
case clsSysComment.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsSysComment.con_UserId:
return this.userId;
case clsSysComment.con_Month:
return this.month;
case clsSysComment.con_Week:
return this.week;
case clsSysComment.con_WeekTimeRange:
return this.weekTimeRange;
case clsSysComment.con_UpdUser:
return this.updUser;
case clsSysComment.con_UpdDate:
return this.updDate;
case clsSysComment.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysComment]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CommentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CommentId(): string {return "commentId";}    //评论Id

 /**
 * 常量:"Comment"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Comment(): string {return "comment";}    //评论

 /**
 * 常量:"Score"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //评分

 /**
 * 常量:"CommentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CommentTypeId(): string {return "commentTypeId";}    //评论类型Id

 /**
 * 常量:"ScoreType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ScoreType(): string {return "scoreType";}    //评分类型

 /**
 * 常量:"ParentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父Id

 /**
 * 常量:"TableKey"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TableKey(): string {return "tableKey";}    //表主键

 /**
 * 常量:"OkCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OkCount(): string {return "okCount";}    //点赞统计

 /**
 * 常量:"PubParentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PubParentId(): string {return "pubParentId";}    //公共父Id

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
 * 常量:"WeekTimeRange"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekTimeRange(): string {return "weekTimeRange";}    //WeekTimeRange

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}