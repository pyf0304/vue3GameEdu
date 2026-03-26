
 /**
 * 类名:clsDiscipline
 * 表名:Discipline(01120315)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:08
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:技能示范(SkillDemo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学科(Discipline)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsDiscipline 
{
public static _CurrTabName= "Discipline"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdDiscipline"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idDiscipline", "disciplineID", "disciplineName", "sequenceNumber", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idDiscipline = "";    //学科流水号
public disciplineID = "";    //学科ID
public disciplineName = "";    //学科名称
public sequenceNumber = 0;    //序号
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
case clsDiscipline.con_IdDiscipline:
return this.idDiscipline;
case clsDiscipline.con_DisciplineID:
return this.disciplineID;
case clsDiscipline.con_DisciplineName:
return this.disciplineName;
case clsDiscipline.con_SequenceNumber:
return this.sequenceNumber;
case clsDiscipline.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Discipline]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdDiscipline"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDiscipline(): string {return "idDiscipline";}    //学科流水号

 /**
 * 常量:"DisciplineID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DisciplineID(): string {return "disciplineID";}    //学科ID

 /**
 * 常量:"DisciplineName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DisciplineName(): string {return "disciplineName";}    //学科名称

 /**
 * 常量:"SequenceNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SequenceNumber(): string {return "sequenceNumber";}    //序号

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}