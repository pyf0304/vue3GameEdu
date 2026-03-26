
 /**
 * 类名:clsgs_TotalDataType
 * 表名:gs_TotalDataType(01120685)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:28:06
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
 * 总数据类型表(gs_TotalDataType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_TotalDataType 
{
public static _CurrTabName= "gs_TotalDataType"; //当前表名,与该类相关的表名
public static _KeyFldName= "TotalDataTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["totalDataTypeId", "totalDataTypeName", "dataTable", "dataTableId", "memo", "onlyId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public totalDataTypeId = "";    //总数据类型Id
public totalDataTypeName = "";    //总数据类型名称
public dataTable = "";    //数据表
public dataTableId = "";    //数据表Id
public memo = "";    //备注
public onlyId = "";    //OnlyId

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
case clsgs_TotalDataType.con_TotalDataTypeId:
return this.totalDataTypeId;
case clsgs_TotalDataType.con_TotalDataTypeName:
return this.totalDataTypeName;
case clsgs_TotalDataType.con_DataTable:
return this.dataTable;
case clsgs_TotalDataType.con_DataTableId:
return this.dataTableId;
case clsgs_TotalDataType.con_Memo:
return this.memo;
case clsgs_TotalDataType.con_OnlyId:
return this.onlyId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_TotalDataType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"TotalDataTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalDataTypeId(): string {return "totalDataTypeId";}    //总数据类型Id

 /**
 * 常量:"TotalDataTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalDataTypeName(): string {return "totalDataTypeName";}    //总数据类型名称

 /**
 * 常量:"DataTable"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DataTable(): string {return "dataTable";}    //数据表

 /**
 * 常量:"DataTableId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DataTableId(): string {return "dataTableId";}    //数据表Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"OnlyId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OnlyId(): string {return "onlyId";}    //OnlyId
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumgs_TotalDataType
{
 /**
 * 论文
 **/
static readonly Paper_01 = "01";
 /**
 * 论文读写
 **/
static readonly PaperReadWrite_02 = "02";
 /**
 * 论文子观点
 **/
static readonly PaperSubViewpoint_03 = "03";
 /**
 * 个人观点
 **/
static readonly Viewpoint_04 = "04";
 /**
 * 专家观点
 **/
static readonly Viewpoint_05 = "05";
 /**
 * 主题概念
 **/
static readonly Concept_06 = "06";
 /**
 * 客观事实
 **/
static readonly TopicObjective_07 = "07";
 /**
 * 客观数据
 **/
static readonly TopicObjective_08 = "08";
 /**
 * 技能
 **/
static readonly SysSkill_09 = "09";
 /**
 * 社会关系
 **/
static readonly SysSocialRelations_10 = "10";
 /**
 * 教师问题回答
 **/
static readonly qa_Answer_11 = "11";
 /**
 * 论文汇报
 **/
static readonly gs_PaperReport_12 = "12";
}