
 /**
 * 类名:clsge_GameLevelChapterRela
 * 表名:ge_GameLevelChapterRela(01120913)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:03:20
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
 * 游戏关卡章节关系表(ge_GameLevelChapterRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_GameLevelChapterRela 
{
public static _CurrTabName= "ge_GameLevelChapterRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["mId", "courseId", "gameLevelId", "courseChapterId", "questionNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseId = "";    //课程Id
public gameLevelId = "";    //游戏关卡Id
public courseChapterId = "";    //课程章节ID
public questionNum = 0;    //题目数
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
case clsge_GameLevelChapterRela.con_mId:
return this.mId;
case clsge_GameLevelChapterRela.con_CourseId:
return this.courseId;
case clsge_GameLevelChapterRela.con_GameLevelId:
return this.gameLevelId;
case clsge_GameLevelChapterRela.con_CourseChapterId:
return this.courseChapterId;
case clsge_GameLevelChapterRela.con_QuestionNum:
return this.questionNum;
case clsge_GameLevelChapterRela.con_UpdDate:
return this.updDate;
case clsge_GameLevelChapterRela.con_UpdUser:
return this.updUser;
case clsge_GameLevelChapterRela.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_GameLevelChapterRela]中不存在!`;
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
 * 常量:"GameLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GameLevelId(): string {return "gameLevelId";}    //游戏关卡Id

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

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