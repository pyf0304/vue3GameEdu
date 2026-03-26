
 /**
 * 类名:clsBatchState
 * 表名:BatchState(01120979)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/06 16:39:41
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
 * 批次状态(BatchState)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsBatchState 
{
public static _CurrTabName= "BatchState"; //当前表名,与该类相关的表名
public static _KeyFldName= "BatchStateId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["batchStateId", "batchStateName", "batchStateEnName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public batchStateId = "";    //批次状态Id
public batchStateName = "";    //批次状态名
public batchStateEnName = "";    //批次状态英文名
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
case clsBatchState.con_BatchStateId:
return this.batchStateId;
case clsBatchState.con_BatchStateName:
return this.batchStateName;
case clsBatchState.con_BatchStateEnName:
return this.batchStateEnName;
case clsBatchState.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BatchState]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"BatchStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchStateId(): string {return "batchStateId";}    //批次状态Id

 /**
 * 常量:"BatchStateName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchStateName(): string {return "batchStateName";}    //批次状态名

 /**
 * 常量:"BatchStateEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BatchStateEnName(): string {return "batchStateEnName";}    //批次状态英文名

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
 export class enumBatchState
{
 /**
 * 未知
 **/
static readonly Unknown_00 = "00";
 /**
 * 开始
 **/
static readonly Start_01 = "01";
 /**
 * 答题中
 **/
static readonly InProgress_02 = "02";
 /**
 * 提交
 **/
static readonly Submit_03 = "03";
}