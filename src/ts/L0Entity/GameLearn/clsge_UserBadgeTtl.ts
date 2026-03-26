
 /**
 * 类名:clsge_UserBadgeTtl
 * 表名:ge_UserBadgeTtl(01120882)
 * 版本:2025.02.18.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/24 02:44:59
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
 * 用户徽章汇总(ge_UserBadgeTtl)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_UserBadgeTtl 
{
public static _CurrTabName= "ge_UserBadgeTtl"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["mId", "idCurrEduCls", "userId", "badgeTypeId", "badgeNum", "isWorn", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public idCurrEduCls = "";    //教学班流水号
public userId = "";    //用户ID
public badgeTypeId = "";    //徽章类型Id
public badgeNum = 0;    //徽章数量
public isWorn = false;    //是否配戴
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
case clsge_UserBadgeTtl.con_mId:
return this.mId;
case clsge_UserBadgeTtl.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_UserBadgeTtl.con_UserId:
return this.userId;
case clsge_UserBadgeTtl.con_BadgeTypeId:
return this.badgeTypeId;
case clsge_UserBadgeTtl.con_BadgeNum:
return this.badgeNum;
case clsge_UserBadgeTtl.con_IsWorn:
return this.isWorn;
case clsge_UserBadgeTtl.con_UpdDate:
return this.updDate;
case clsge_UserBadgeTtl.con_UpdUser:
return this.updUser;
case clsge_UserBadgeTtl.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_UserBadgeTtl]中不存在!`;
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
 * 常量:"BadgeTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeTypeId(): string {return "badgeTypeId";}    //徽章类型Id

 /**
 * 常量:"BadgeNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BadgeNum(): string {return "badgeNum";}    //徽章数量

 /**
 * 常量:"IsWorn"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsWorn(): string {return "isWorn";}    //是否配戴

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