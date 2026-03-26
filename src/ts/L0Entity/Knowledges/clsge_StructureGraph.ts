
 /**
 * 类名:clsge_StructureGraph
 * 表名:ge_StructureGraph(01120895)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:23:08
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
 * 结构图谱表(ge_StructureGraph)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_StructureGraph 
{
public static _CurrTabName= "ge_StructureGraph"; //当前表名,与该类相关的表名
public static _KeyFldName= "StructureGraphId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["structureGraphId", "structureGraphName", "idCurrEduCls", "courseId", "createUser", "updDate", "updUser", "memo", "graphTypeId", "isDisplay", "isExtend", "isRecommend", "theme", "isSubmit", "sectionTypeId", "takeUpTime", "submitTime", "startTime"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public structureGraphId = "";    //知识图谱Id
public structureGraphName = "";    //结构图谱名称
public idCurrEduCls = "";    //教学班流水号
public courseId = "";    //课程Id
public createUser = "";    //建立用户
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public graphTypeId = "";    //图谱类型Id
public isDisplay = false;    //是否显示
public isExtend = false;    //是否扩展
public isRecommend = false;    //是否推荐
public theme = "";    //主题
public isSubmit = false;    //是否提交
public sectionTypeId = "";    //节点类型Id
public takeUpTime = "";    //耗时
public submitTime = "";    //提交时间
public startTime = "";    //开始时间(s)

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
case clsge_StructureGraph.con_StructureGraphId:
return this.structureGraphId;
case clsge_StructureGraph.con_StructureGraphName:
return this.structureGraphName;
case clsge_StructureGraph.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsge_StructureGraph.con_CourseId:
return this.courseId;
case clsge_StructureGraph.con_CreateUser:
return this.createUser;
case clsge_StructureGraph.con_UpdDate:
return this.updDate;
case clsge_StructureGraph.con_UpdUser:
return this.updUser;
case clsge_StructureGraph.con_Memo:
return this.memo;
case clsge_StructureGraph.con_GraphTypeId:
return this.graphTypeId;
case clsge_StructureGraph.con_IsDisplay:
return this.isDisplay;
case clsge_StructureGraph.con_IsExtend:
return this.isExtend;
case clsge_StructureGraph.con_IsRecommend:
return this.isRecommend;
case clsge_StructureGraph.con_Theme:
return this.theme;
case clsge_StructureGraph.con_IsSubmit:
return this.isSubmit;
case clsge_StructureGraph.con_SectionTypeId:
return this.sectionTypeId;
case clsge_StructureGraph.con_TakeUpTime:
return this.takeUpTime;
case clsge_StructureGraph.con_SubmitTime:
return this.submitTime;
case clsge_StructureGraph.con_StartTime:
return this.startTime;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureGraph]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"StructureGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureGraphId(): string {return "structureGraphId";}    //知识图谱Id

 /**
 * 常量:"StructureGraphName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureGraphName(): string {return "structureGraphName";}    //结构图谱名称

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CreateUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateUser(): string {return "createUser";}    //建立用户

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
 * 常量:"GraphTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GraphTypeId(): string {return "graphTypeId";}    //图谱类型Id

 /**
 * 常量:"IsDisplay"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDisplay(): string {return "isDisplay";}    //是否显示

 /**
 * 常量:"IsExtend"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsExtend(): string {return "isExtend";}    //是否扩展

 /**
 * 常量:"IsRecommend"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

 /**
 * 常量:"Theme"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Theme(): string {return "theme";}    //主题

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"TakeUpTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TakeUpTime(): string {return "takeUpTime";}    //耗时

 /**
 * 常量:"SubmitTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SubmitTime(): string {return "submitTime";}    //提交时间

 /**
 * 常量:"StartTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StartTime(): string {return "startTime";}    //开始时间(s)
}