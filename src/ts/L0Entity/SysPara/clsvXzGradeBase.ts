
 /**
 * 类名:clsvXzGradeBase
 * 表名:vXzGradeBase(01120130)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:31:30
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
 * v年级(vXzGradeBase)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvXzGradeBase 
{
public static _CurrTabName= "vXzGradeBase"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdGradeBase"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 23;
public static AttributeName = ["idGradeBase", "gradeBaseId", "gradeBaseName", "gradeBaseNameA", "schoolYear", "schoolTerm", "enterSchoolDate", "currentTermSeq", "execPlanTermIndex", "setEPTermIndexDate", "isOffed", "gradeIndex", "beginYearMonth", "endYearMonth", "allowUpBaseInfo", "prefix", "pointCalcVersionId", "modifyUserId", "modifyDate", "idStudyLevel", "studyLevelName", "isVisible", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idGradeBase = "";    //入学年级流水号
public gradeBaseId = "";    //年级代号
public gradeBaseName = "";    //年级名称
public gradeBaseNameA = "";    //年级名称缩写
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public enterSchoolDate = "";    //进校日期
public currentTermSeq = 0;    //当前学期
public execPlanTermIndex = 0;    //生成执行计划学期
public setEPTermIndexDate = "";    //设定执行计划学期日期
public isOffed = false;    //是否毕业
public gradeIndex = 0;    //年级序号
public beginYearMonth = "";    //开始年月
public endYearMonth = "";    //结束年月
public allowUpBaseInfo = false;    //允许修改基本信息
public prefix = "";    //前缀
public pointCalcVersionId = "";    //绩点计算版本Id
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期
public idStudyLevel = "";    //学段流水号
public studyLevelName = "";    //学段名称
public isVisible = false;    //是否显示
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
case clsvXzGradeBase.con_IdGradeBase:
return this.idGradeBase;
case clsvXzGradeBase.con_GradeBaseId:
return this.gradeBaseId;
case clsvXzGradeBase.con_GradeBaseName:
return this.gradeBaseName;
case clsvXzGradeBase.con_GradeBaseNameA:
return this.gradeBaseNameA;
case clsvXzGradeBase.con_SchoolYear:
return this.schoolYear;
case clsvXzGradeBase.con_SchoolTerm:
return this.schoolTerm;
case clsvXzGradeBase.con_EnterSchoolDate:
return this.enterSchoolDate;
case clsvXzGradeBase.con_CurrentTermSeq:
return this.currentTermSeq;
case clsvXzGradeBase.con_ExecPlanTermIndex:
return this.execPlanTermIndex;
case clsvXzGradeBase.con_SetEPTermIndexDate:
return this.setEPTermIndexDate;
case clsvXzGradeBase.con_IsOffed:
return this.isOffed;
case clsvXzGradeBase.con_GradeIndex:
return this.gradeIndex;
case clsvXzGradeBase.con_BeginYearMonth:
return this.beginYearMonth;
case clsvXzGradeBase.con_EndYearMonth:
return this.endYearMonth;
case clsvXzGradeBase.con_AllowUpBaseInfo:
return this.allowUpBaseInfo;
case clsvXzGradeBase.con_Prefix:
return this.prefix;
case clsvXzGradeBase.con_PointCalcVersionId:
return this.pointCalcVersionId;
case clsvXzGradeBase.con_ModifyUserId:
return this.modifyUserId;
case clsvXzGradeBase.con_ModifyDate:
return this.modifyDate;
case clsvXzGradeBase.con_IdStudyLevel:
return this.idStudyLevel;
case clsvXzGradeBase.con_StudyLevelName:
return this.studyLevelName;
case clsvXzGradeBase.con_IsVisible:
return this.isVisible;
case clsvXzGradeBase.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vXzGradeBase]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"GradeBaseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeBaseId(): string {return "gradeBaseId";}    //年级代号

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"GradeBaseNameA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeBaseNameA(): string {return "gradeBaseNameA";}    //年级名称缩写

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"EnterSchoolDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EnterSchoolDate(): string {return "enterSchoolDate";}    //进校日期

 /**
 * 常量:"CurrentTermSeq"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrentTermSeq(): string {return "currentTermSeq";}    //当前学期

 /**
 * 常量:"ExecPlanTermIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExecPlanTermIndex(): string {return "execPlanTermIndex";}    //生成执行计划学期

 /**
 * 常量:"SetEPTermIndexDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SetEPTermIndexDate(): string {return "setEPTermIndexDate";}    //设定执行计划学期日期

 /**
 * 常量:"IsOffed"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOffed(): string {return "isOffed";}    //是否毕业

 /**
 * 常量:"GradeIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeIndex(): string {return "gradeIndex";}    //年级序号

 /**
 * 常量:"BeginYearMonth"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BeginYearMonth(): string {return "beginYearMonth";}    //开始年月

 /**
 * 常量:"EndYearMonth"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EndYearMonth(): string {return "endYearMonth";}    //结束年月

 /**
 * 常量:"AllowUpBaseInfo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AllowUpBaseInfo(): string {return "allowUpBaseInfo";}    //允许修改基本信息

 /**
 * 常量:"Prefix"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Prefix(): string {return "prefix";}    //前缀

 /**
 * 常量:"PointCalcVersionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PointCalcVersionId(): string {return "pointCalcVersionId";}    //绩点计算版本Id

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"StudyLevelName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StudyLevelName(): string {return "studyLevelName";}    //学段名称

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}