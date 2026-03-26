
 /**
 * 类名:clsLearnMode
 * 表名:LearnMode(01120154)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:52
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学习模式(LearnMode)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsLearnMode 
{
public static _CurrTabName= "LearnMode"; //当前表名,与该类相关的表名
public static _KeyFldName= "LearnModeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["learnModeId", "learnModeName", "learnModeENName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public learnModeId = "";    //学习模式Id
public learnModeName = "";    //学习模式名
public learnModeENName = "";    //学习模式英文名
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
case clsLearnMode.con_LearnModeId:
return this.learnModeId;
case clsLearnMode.con_LearnModeName:
return this.learnModeName;
case clsLearnMode.con_LearnModeENName:
return this.learnModeENName;
case clsLearnMode.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[LearnMode]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"LearnModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LearnModeId(): string {return "learnModeId";}    //学习模式Id

 /**
 * 常量:"LearnModeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LearnModeName(): string {return "learnModeName";}    //学习模式名

 /**
 * 常量:"LearnModeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LearnModeENName(): string {return "learnModeENName";}    //学习模式英文名

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumLearnMode
{
 /**
 * 做习题
 **/
static readonly DoExercises_0001 = "0001";
 /**
 * 做试卷
 **/
static readonly TakeExamPaper_0002 = "0002";
 /**
 * 观看视频
 **/
static readonly WatchVideo_0003 = "0003";
}