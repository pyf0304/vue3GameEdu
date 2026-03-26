
 /**
 * 类名:clsge_StuErrorLib
 * 表名:ge_StuErrorLib(01120887)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:46
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学生错误作业集(ge_StuErrorLib)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_StuErrorLib 
{
public static _CurrTabName= "ge_StuErrorLib"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["mId", "courseId", "idStudentInfo", "questionId", "creator", "createDate", "sourceTypeId", "isRedo", "redoDate", "isPassed", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseId = "";    //课程Id
public idStudentInfo = "";    //学生流水号
public questionId = 0;    //题目Id
public creator = "";    //创建者
public createDate = "";    //建立日期
public sourceTypeId = "";    //来源类型Id
public isRedo = false;    //是否重做
public redoDate = "";    //重做日期
public isPassed = false;    //是否通过
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
case clsge_StuErrorLib.con_mId:
return this.mId;
case clsge_StuErrorLib.con_CourseId:
return this.courseId;
case clsge_StuErrorLib.con_IdStudentInfo:
return this.idStudentInfo;
case clsge_StuErrorLib.con_QuestionId:
return this.questionId;
case clsge_StuErrorLib.con_Creator:
return this.creator;
case clsge_StuErrorLib.con_CreateDate:
return this.createDate;
case clsge_StuErrorLib.con_SourceTypeId:
return this.sourceTypeId;
case clsge_StuErrorLib.con_IsRedo:
return this.isRedo;
case clsge_StuErrorLib.con_RedoDate:
return this.redoDate;
case clsge_StuErrorLib.con_IsPassed:
return this.isPassed;
case clsge_StuErrorLib.con_UpdDate:
return this.updDate;
case clsge_StuErrorLib.con_UpdUser:
return this.updUser;
case clsge_StuErrorLib.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StuErrorLib]中不存在!`;
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
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"Creator"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Creator(): string {return "creator";}    //创建者

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"SourceTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SourceTypeId(): string {return "sourceTypeId";}    //来源类型Id

 /**
 * 常量:"IsRedo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRedo(): string {return "isRedo";}    //是否重做

 /**
 * 常量:"RedoDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RedoDate(): string {return "redoDate";}    //重做日期

 /**
 * 常量:"IsPassed"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsPassed(): string {return "isPassed";}    //是否通过

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