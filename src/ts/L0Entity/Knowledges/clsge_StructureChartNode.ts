
 /**
 * 类名:clsge_StructureChartNode
 * 表名:ge_StructureChartNode(01120894)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:27:13
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
 * 知识点结构图(ge_StructureChartNode)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_StructureChartNode 
{
public static _CurrTabName= "ge_StructureChartNode"; //当前表名,与该类相关的表名
public static _KeyFldName= "StructureNodeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["structureNodeId", "structureNodeName", "updDate", "updUser", "memo", "parentId", "isRoot", "background", "foreground", "structureGraphId", "direction", "isExpanded", "structureSectionId", "orderNum"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public structureNodeId = "";    //结构Id
public structureNodeName = "";    //结构名称
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public parentId = "";    //父节点Id
public isRoot = false;    //IsRoot
public background = "";    //背景色
public foreground = "";    //背景字颜色
public structureGraphId = "";    //知识图谱Id
public direction = "";    //方向
public isExpanded = false;    //是否扩展
public structureSectionId = "";    //结构章节Id
public orderNum = 0;    //序号

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
case clsge_StructureChartNode.con_StructureNodeId:
return this.structureNodeId;
case clsge_StructureChartNode.con_StructureNodeName:
return this.structureNodeName;
case clsge_StructureChartNode.con_UpdDate:
return this.updDate;
case clsge_StructureChartNode.con_UpdUser:
return this.updUser;
case clsge_StructureChartNode.con_Memo:
return this.memo;
case clsge_StructureChartNode.con_ParentId:
return this.parentId;
case clsge_StructureChartNode.con_IsRoot:
return this.isRoot;
case clsge_StructureChartNode.con_background:
return this.background;
case clsge_StructureChartNode.con_foreground:
return this.foreground;
case clsge_StructureChartNode.con_StructureGraphId:
return this.structureGraphId;
case clsge_StructureChartNode.con_Direction:
return this.direction;
case clsge_StructureChartNode.con_IsExpanded:
return this.isExpanded;
case clsge_StructureChartNode.con_StructureSectionId:
return this.structureSectionId;
case clsge_StructureChartNode.con_OrderNum:
return this.orderNum;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureChartNode]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"StructureNodeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureNodeId(): string {return "structureNodeId";}    //结构Id

 /**
 * 常量:"StructureNodeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureNodeName(): string {return "structureNodeName";}    //结构名称

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
 * 常量:"ParentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父节点Id

 /**
 * 常量:"IsRoot"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRoot(): string {return "isRoot";}    //IsRoot

 /**
 * 常量:"background"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_background(): string {return "background";}    //背景色

 /**
 * 常量:"foreground"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_foreground(): string {return "foreground";}    //背景字颜色

 /**
 * 常量:"StructureGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureGraphId(): string {return "structureGraphId";}    //知识图谱Id

 /**
 * 常量:"Direction"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Direction(): string {return "direction";}    //方向

 /**
 * 常量:"IsExpanded"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsExpanded(): string {return "isExpanded";}    //是否扩展

 /**
 * 常量:"StructureSectionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureSectionId(): string {return "structureSectionId";}    //结构章节Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号
}