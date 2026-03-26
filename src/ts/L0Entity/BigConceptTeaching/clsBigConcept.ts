
 /**
 * 类名:clsBigConcept
 * 表名:BigConcept(01120972)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:15
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:大概念教学(BigConceptTeaching)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 大概念(BigConcept)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsBigConcept 
{
public static _CurrTabName= "BigConcept"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdBigConcept"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 16;
public static AttributeName = ["idBigConcept", "bigConceptId", "bigConceptName", "idGrade", "schoolTerm", "courseId", "isClgCheck", "clgNote", "clgCheckerId", "clgCheckDate", "isSchCheck", "schNote", "schCheckerId", "schCheckDate", "idSubmitStatus", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idBigConcept = "";    //大概念流水号
public bigConceptId = "";    //大概念编号
public bigConceptName = "";    //大概念名称
public idGrade = "";    //年级流水号
public schoolTerm = "";    //学期
public courseId = "";    //课程Id
public isClgCheck = false;    //是否学院审批
public clgNote = "";    //学院审批意见
public clgCheckerId = "";    //学院审批人id
public clgCheckDate = "";    //学院审批日期
public isSchCheck = false;    //是否学校审批
public schNote = "";    //学校审批意见
public schCheckerId = "";    //学校审批人Id
public schCheckDate = "";    //学校审批日期
public idSubmitStatus = "";    //送审状态流水号
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
case clsBigConcept.con_IdBigConcept:
return this.idBigConcept;
case clsBigConcept.con_BigConceptId:
return this.bigConceptId;
case clsBigConcept.con_BigConceptName:
return this.bigConceptName;
case clsBigConcept.con_IdGrade:
return this.idGrade;
case clsBigConcept.con_SchoolTerm:
return this.schoolTerm;
case clsBigConcept.con_CourseId:
return this.courseId;
case clsBigConcept.con_IsClgCheck:
return this.isClgCheck;
case clsBigConcept.con_ClgNote:
return this.clgNote;
case clsBigConcept.con_ClgCheckerId:
return this.clgCheckerId;
case clsBigConcept.con_ClgCheckDate:
return this.clgCheckDate;
case clsBigConcept.con_IsSchCheck:
return this.isSchCheck;
case clsBigConcept.con_SchNote:
return this.schNote;
case clsBigConcept.con_SchCheckerId:
return this.schCheckerId;
case clsBigConcept.con_SchCheckDate:
return this.schCheckDate;
case clsBigConcept.con_IdSubmitStatus:
return this.idSubmitStatus;
case clsBigConcept.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[BigConcept]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdBigConcept"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdBigConcept(): string {return "idBigConcept";}    //大概念流水号

 /**
 * 常量:"BigConceptId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BigConceptId(): string {return "bigConceptId";}    //大概念编号

 /**
 * 常量:"BigConceptName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BigConceptName(): string {return "bigConceptName";}    //大概念名称

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IsClgCheck"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsClgCheck(): string {return "isClgCheck";}    //是否学院审批

 /**
 * 常量:"ClgNote"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClgNote(): string {return "clgNote";}    //学院审批意见

 /**
 * 常量:"ClgCheckerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClgCheckerId(): string {return "clgCheckerId";}    //学院审批人id

 /**
 * 常量:"ClgCheckDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClgCheckDate(): string {return "clgCheckDate";}    //学院审批日期

 /**
 * 常量:"IsSchCheck"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSchCheck(): string {return "isSchCheck";}    //是否学校审批

 /**
 * 常量:"SchNote"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchNote(): string {return "schNote";}    //学校审批意见

 /**
 * 常量:"SchCheckerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchCheckerId(): string {return "schCheckerId";}    //学校审批人Id

 /**
 * 常量:"SchCheckDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchCheckDate(): string {return "schCheckDate";}    //学校审批日期

 /**
 * 常量:"IdSubmitStatus"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSubmitStatus(): string {return "idSubmitStatus";}    //送审状态流水号

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}