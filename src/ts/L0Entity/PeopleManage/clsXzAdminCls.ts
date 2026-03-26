
 /**
 * 类名:clsXzAdminCls
 * 表名:XzAdminCls(01120194)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:47
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:人员管理(PeopleManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 行政班(XzAdminCls)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzAdminCls 
{
public static _CurrTabName= "XzAdminCls"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdAdminCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["idAdminCls", "adminClsName", "idXzMajor", "idXzCollege", "idUniZone", "currentStuQty", "headTeacherId", "idGrade", "idGradeBase", "adminClsId", "idAdminClsType", "adminClsIndex", "memo", "modifyUserId", "modifyDate"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idAdminCls = "";    //行政班流水号
public adminClsName = "";    //行政班名称
public idXzMajor = "";    //专业流水号
public idXzCollege = "";    //学院流水号
public idUniZone = "";    //校区流水号
public currentStuQty = 0;    //当前学生数
public headTeacherId = "";    //班主任Id
public idGrade = "";    //年级流水号
public idGradeBase = "";    //入学年级流水号
public adminClsId = "";    //行政班代号
public idAdminClsType = "";    //行政班级类型流水号
public adminClsIndex = 0;    //AdminClsIndex
public memo = "";    //备注
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期

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
case clsXzAdminCls.con_IdAdminCls:
return this.idAdminCls;
case clsXzAdminCls.con_AdminClsName:
return this.adminClsName;
case clsXzAdminCls.con_IdXzMajor:
return this.idXzMajor;
case clsXzAdminCls.con_IdXzCollege:
return this.idXzCollege;
case clsXzAdminCls.con_IdUniZone:
return this.idUniZone;
case clsXzAdminCls.con_CurrentStuQty:
return this.currentStuQty;
case clsXzAdminCls.con_HeadTeacherId:
return this.headTeacherId;
case clsXzAdminCls.con_IdGrade:
return this.idGrade;
case clsXzAdminCls.con_IdGradeBase:
return this.idGradeBase;
case clsXzAdminCls.con_AdminClsId:
return this.adminClsId;
case clsXzAdminCls.con_IdAdminClsType:
return this.idAdminClsType;
case clsXzAdminCls.con_AdminClsIndex:
return this.adminClsIndex;
case clsXzAdminCls.con_Memo:
return this.memo;
case clsXzAdminCls.con_ModifyUserId:
return this.modifyUserId;
case clsXzAdminCls.con_ModifyDate:
return this.modifyDate;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzAdminCls]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"AdminClsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsName(): string {return "adminClsName";}    //行政班名称

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"CurrentStuQty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrentStuQty(): string {return "currentStuQty";}    //当前学生数

 /**
 * 常量:"HeadTeacherId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_HeadTeacherId(): string {return "headTeacherId";}    //班主任Id

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"AdminClsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsId(): string {return "adminClsId";}    //行政班代号

 /**
 * 常量:"IdAdminClsType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminClsType(): string {return "idAdminClsType";}    //行政班级类型流水号

 /**
 * 常量:"AdminClsIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsIndex(): string {return "adminClsIndex";}    //AdminClsIndex

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
}