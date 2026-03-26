
 /**
 * 类名:clsgs_StructureChartNode
 * 表名:gs_StructureChartNode(01120877)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:28:20
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
 * 结构图节点(gs_StructureChartNode)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_StructureChartNode 
{
public static _CurrTabName= "gs_StructureChartNode"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["mId", "structureChartId", "nodeId", "nodeTitle", "parentId", "isRoot", "expanded", "direction", "bgColor", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public structureChartId = "";    //结构图Id
public nodeId = "";    //节点Id
public nodeTitle = "";    //节点标题
public parentId = "";    //父Id
public isRoot = false;    //IsRoot
public expanded = false;    //扩大
public direction = "";    //方向
public bgColor = "";    //背景色
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
case clsgs_StructureChartNode.con_mId:
return this.mId;
case clsgs_StructureChartNode.con_StructureChartId:
return this.structureChartId;
case clsgs_StructureChartNode.con_NodeId:
return this.nodeId;
case clsgs_StructureChartNode.con_NodeTitle:
return this.nodeTitle;
case clsgs_StructureChartNode.con_ParentId:
return this.parentId;
case clsgs_StructureChartNode.con_IsRoot:
return this.isRoot;
case clsgs_StructureChartNode.con_Expanded:
return this.expanded;
case clsgs_StructureChartNode.con_Direction:
return this.direction;
case clsgs_StructureChartNode.con_BgColor:
return this.bgColor;
case clsgs_StructureChartNode.con_UpdDate:
return this.updDate;
case clsgs_StructureChartNode.con_UpdUser:
return this.updUser;
case clsgs_StructureChartNode.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_StructureChartNode]中不存在!`;
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
 * 常量:"StructureChartId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureChartId(): string {return "structureChartId";}    //结构图Id

 /**
 * 常量:"NodeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_NodeId(): string {return "nodeId";}    //节点Id

 /**
 * 常量:"NodeTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_NodeTitle(): string {return "nodeTitle";}    //节点标题

 /**
 * 常量:"ParentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父Id

 /**
 * 常量:"IsRoot"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRoot(): string {return "isRoot";}    //IsRoot

 /**
 * 常量:"Expanded"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Expanded(): string {return "expanded";}    //扩大

 /**
 * 常量:"Direction"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Direction(): string {return "direction";}    //方向

 /**
 * 常量:"BgColor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BgColor(): string {return "bgColor";}    //背景色

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