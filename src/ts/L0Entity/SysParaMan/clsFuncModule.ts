
 /**
 * 类名:clsFuncModule
 * 表名:FuncModule(01120121)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:20
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数管理(SysParaMan)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 功能模块(FuncModule)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsFuncModule 
{
public static _CurrTabName= "FuncModule"; //当前表名,与该类相关的表名
public static _KeyFldName= "FuncModuleId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["funcModuleId", "funcModuleName", "funcModuleNameSim", "memo", "updDate", "updUser", "orderNum", "prjId", "funcModuleEnName", "useStateId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public funcModuleId = "";    //功能模块Id
public funcModuleName = "";    //功能模块名称
public funcModuleNameSim = "";    //功能模块简称
public memo = "";    //备注
public updDate = "";    //修改日期
public updUser = "";    //修改人
public orderNum = 0;    //序号
public prjId = "";    //PrjId
public funcModuleEnName = "";    //FuncModuleEnName
public useStateId = "";    //UseStateId

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
case clsFuncModule.con_FuncModuleId:
return this.funcModuleId;
case clsFuncModule.con_FuncModuleName:
return this.funcModuleName;
case clsFuncModule.con_FuncModuleNameSim:
return this.funcModuleNameSim;
case clsFuncModule.con_Memo:
return this.memo;
case clsFuncModule.con_UpdDate:
return this.updDate;
case clsFuncModule.con_UpdUser:
return this.updUser;
case clsFuncModule.con_OrderNum:
return this.orderNum;
case clsFuncModule.con_PrjId:
return this.prjId;
case clsFuncModule.con_FuncModuleEnName:
return this.funcModuleEnName;
case clsFuncModule.con_UseStateId:
return this.useStateId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[FuncModule]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"FuncModuleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FuncModuleId(): string {return "funcModuleId";}    //功能模块Id

 /**
 * 常量:"FuncModuleName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FuncModuleName(): string {return "funcModuleName";}    //功能模块名称

 /**
 * 常量:"FuncModuleNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FuncModuleNameSim(): string {return "funcModuleNameSim";}    //功能模块简称

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"PrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PrjId(): string {return "prjId";}    //PrjId

 /**
 * 常量:"FuncModuleEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FuncModuleEnName(): string {return "funcModuleEnName";}    //FuncModuleEnName

 /**
 * 常量:"UseStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UseStateId(): string {return "useStateId";}    //UseStateId
}