
 /**
 * 类名:clsPageDispMode
 * 表名:PageDispMode(01120908)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:28:49
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(PrjMenu)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 页面显示模式(PageDispMode)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsPageDispMode 
{
public static _CurrTabName= "PageDispMode"; //当前表名,与该类相关的表名
public static _KeyFldName= "PageDispModeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["pageDispModeId", "pageDispModeName", "pageDispModeENName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public pageDispModeId = "";    //页面显示模式Id
public pageDispModeName = "";    //页面显示模式名称
public pageDispModeENName = "";    //页面显示模式英文名
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
case clsPageDispMode.con_PageDispModeId:
return this.pageDispModeId;
case clsPageDispMode.con_PageDispModeName:
return this.pageDispModeName;
case clsPageDispMode.con_PageDispModeENName:
return this.pageDispModeENName;
case clsPageDispMode.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[PageDispMode]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"PageDispModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PageDispModeId(): string {return "pageDispModeId";}    //页面显示模式Id

 /**
 * 常量:"PageDispModeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PageDispModeName(): string {return "pageDispModeName";}    //页面显示模式名称

 /**
 * 常量:"PageDispModeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PageDispModeENName(): string {return "pageDispModeENName";}    //页面显示模式英文名

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
 export class enumPageDispMode
{
 /**
 * 弹出框
 **/
static readonly PopupBox_01 = "01";
 /**
 * 右边
 **/
static readonly Right_02 = "02";
 /**
 * 下边
 **/
static readonly Below_03 = "03";
 /**
 * 左边
 **/
static readonly Left_04 = "04";
 /**
 * 全页
 **/
static readonly FullPage_05 = "05";
}