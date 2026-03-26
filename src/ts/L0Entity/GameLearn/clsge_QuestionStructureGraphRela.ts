
 /**
 * 类名:clsge_QuestionStructureGraphRela
 * 表名:ge_QuestionStructureGraphRela(01120906)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:27:34
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 问题结构图关系(ge_QuestionStructureGraphRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_QuestionStructureGraphRela 
{
public static _CurrTabName= "ge_QuestionStructureGraphRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["mId", "questionId", "structureGraphId", "courseId", "createUser", "updDate", "updUser", "memo", "gameLevelId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public questionId = 0;    //题目Id
public structureGraphId = "";    //知识图谱Id
public courseId = "";    //课程Id
public createUser = "";    //建立用户
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public gameLevelId = "";    //游戏关卡Id

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
case clsge_QuestionStructureGraphRela.con_mId:
return this.mId;
case clsge_QuestionStructureGraphRela.con_QuestionId:
return this.questionId;
case clsge_QuestionStructureGraphRela.con_StructureGraphId:
return this.structureGraphId;
case clsge_QuestionStructureGraphRela.con_CourseId:
return this.courseId;
case clsge_QuestionStructureGraphRela.con_CreateUser:
return this.createUser;
case clsge_QuestionStructureGraphRela.con_UpdDate:
return this.updDate;
case clsge_QuestionStructureGraphRela.con_UpdUser:
return this.updUser;
case clsge_QuestionStructureGraphRela.con_Memo:
return this.memo;
case clsge_QuestionStructureGraphRela.con_GameLevelId:
return this.gameLevelId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_QuestionStructureGraphRela]中不存在!`;
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
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"StructureGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureGraphId(): string {return "structureGraphId";}    //知识图谱Id

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
 * 常量:"GameLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GameLevelId(): string {return "gameLevelId";}    //游戏关卡Id
}