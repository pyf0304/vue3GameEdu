
 /**
 * 类名:clsBottleState
 * 表名:BottleState(01120975)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/10 23:08:07
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 瓶子状态(BottleState)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsBottleState 
{
public static _CurrTabName= "BottleState"; //当前表名,与该类相关的表名
public static _KeyFldName= "BottleStateId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["bottleStateId", "bottleStateName", "bottleStateEnName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public bottleStateId = "";    //瓶子状态Id
public bottleStateName = "";    //瓶子状态名
public bottleStateEnName = "";    //瓶子状态名
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
case clsBottleState.con_BottleStateId:
return this.bottleStateId;
case clsBottleState.con_BottleStateName:
return this.bottleStateName;
case clsBottleState.con_BottleStateEnName:
return this.bottleStateEnName;
case clsBottleState.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BottleState]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"BottleStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleStateId(): string {return "bottleStateId";}    //瓶子状态Id

 /**
 * 常量:"BottleStateName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleStateName(): string {return "bottleStateName";}    //瓶子状态名

 /**
 * 常量:"BottleStateEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleStateEnName(): string {return "bottleStateEnName";}    //瓶子状态名

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumBottleState
{
 /**
 * 扔瓶子
 **/
static readonly ThrowBottle_01 = "01";
 /**
 * 捞瓶子
 **/
static readonly PickUpBottle_02 = "02";
 /**
 * 答题中
 **/
static readonly InProgress_03 = "03";
 /**
 * 完成
 **/
static readonly Finished_04 = "04";
}