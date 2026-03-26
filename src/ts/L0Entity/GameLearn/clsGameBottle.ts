
 /**
 * 类名:clsGameBottle
 * 表名:GameBottle(01120974)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 11:10:34
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
 * 游戏瓶(GameBottle)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsGameBottle 
{
public static _CurrTabName= "GameBottle"; //当前表名,与该类相关的表名
public static _KeyFldName= "BottleId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 16;
public static AttributeName = ["bottleId", "questionId", "questionSourceId", "bottleTypeId", "userId_Throw", "throwTime", "pickUpNum", "finishedNum", "posTop", "posLeft", "bottleStateId", "credits", "idCurrEduCls", "updUser", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public bottleId = 0;    //瓶子Id
public questionId = 0;    //题目Id
public questionSourceId = "";    //题目来源Id
public bottleTypeId = "";    //瓶子类型Id
public userId_Throw = "";    //用户ID
public throwTime = "";    //扔的时间
public pickUpNum = 0;    //捞的数目
public finishedNum = 0;    //完成数
public posTop = 0;    //位置Y
public posLeft = 0;    //位置X
public bottleStateId = "";    //瓶子状态Id
public credits = 0;    //积分
public idCurrEduCls = "";    //教学班流水号
public updUser = "";    //修改人
public updDate = "";    //修改日期
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
case clsGameBottle.con_BottleId:
return this.bottleId;
case clsGameBottle.con_QuestionId:
return this.questionId;
case clsGameBottle.con_QuestionSourceId:
return this.questionSourceId;
case clsGameBottle.con_BottleTypeId:
return this.bottleTypeId;
case clsGameBottle.con_UserId_Throw:
return this.userId_Throw;
case clsGameBottle.con_ThrowTime:
return this.throwTime;
case clsGameBottle.con_PickUpNum:
return this.pickUpNum;
case clsGameBottle.con_FinishedNum:
return this.finishedNum;
case clsGameBottle.con_PosTop:
return this.posTop;
case clsGameBottle.con_PosLeft:
return this.posLeft;
case clsGameBottle.con_BottleStateId:
return this.bottleStateId;
case clsGameBottle.con_Credits:
return this.credits;
case clsGameBottle.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsGameBottle.con_UpdUser:
return this.updUser;
case clsGameBottle.con_UpdDate:
return this.updDate;
case clsGameBottle.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[GameBottle]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"BottleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleId(): string {return "bottleId";}    //瓶子Id

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"QuestionSourceId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionSourceId(): string {return "questionSourceId";}    //题目来源Id

 /**
 * 常量:"BottleTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleTypeId(): string {return "bottleTypeId";}    //瓶子类型Id

 /**
 * 常量:"UserId_Throw"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId_Throw(): string {return "userId_Throw";}    //用户ID

 /**
 * 常量:"ThrowTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ThrowTime(): string {return "throwTime";}    //扔的时间

 /**
 * 常量:"PickUpNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PickUpNum(): string {return "pickUpNum";}    //捞的数目

 /**
 * 常量:"FinishedNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FinishedNum(): string {return "finishedNum";}    //完成数

 /**
 * 常量:"PosTop"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PosTop(): string {return "posTop";}    //位置Y

 /**
 * 常量:"PosLeft"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PosLeft(): string {return "posLeft";}    //位置X

 /**
 * 常量:"BottleStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BottleStateId(): string {return "bottleStateId";}    //瓶子状态Id

 /**
 * 常量:"Credits"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Credits(): string {return "credits";}    //积分

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}