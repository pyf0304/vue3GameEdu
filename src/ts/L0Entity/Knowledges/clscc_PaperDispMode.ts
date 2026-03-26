
 /**
 * 类名:clscc_PaperDispMode
 * 表名:cc_PaperDispMode(01120073)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:25:41
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
 * 试卷显示模式(cc_PaperDispMode)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_PaperDispMode 
{
public static _CurrTabName= "cc_PaperDispMode"; //当前表名,与该类相关的表名
public static _KeyFldName= "PaperDispModeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["paperDispModeId", "paperDispModeName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public paperDispModeId = "";    //试卷显示模式Id
public paperDispModeName = "";    //试卷显示模式名称
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
case clscc_PaperDispMode.con_PaperDispModeId:
return this.paperDispModeId;
case clscc_PaperDispMode.con_PaperDispModeName:
return this.paperDispModeName;
case clscc_PaperDispMode.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_PaperDispMode]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"PaperDispModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperDispModeId(): string {return "paperDispModeId";}    //试卷显示模式Id

 /**
 * 常量:"PaperDispModeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperDispModeName(): string {return "paperDispModeName";}    //试卷显示模式名称

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}