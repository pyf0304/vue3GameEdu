/**
 * 类名:clsGameBottleEN
 * 表名:GameBottle(01120974)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 11:10:31
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 游戏瓶(GameBottle)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsGameBottleEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'GameBottle'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'BottleId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 16;
  public static AttributeName = [
    'bottleId',
    'questionId',
    'questionSourceId',
    'bottleTypeId',
    'userId_Throw',
    'throwTime',
    'pickUpNum',
    'finishedNum',
    'posTop',
    'posLeft',
    'bottleStateId',
    'credits',
    'idCurrEduCls',
    'updUser',
    'updDate',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mlngBottleId = 0; //瓶子Id
  private mlngQuestionId = 0; //题目Id
  private mstrQuestionSourceId = ''; //题目来源Id
  private mstrBottleTypeId = ''; //瓶子类型Id
  private mstrUserId_Throw = ''; //用户ID
  private mstrThrowTime = ''; //扔的时间
  private mintPickUpNum = 0; //捞的数目
  private mintFinishedNum = 0; //完成数
  private mintPosTop = 0; //位置Y
  private mintPosLeft = 0; //位置X
  private mstrBottleStateId = ''; //瓶子状态Id
  private mintCredits = 0; //积分
  private mstrIdCurrEduCls = ''; //教学班流水号
  private mstrUpdUser = ''; //修改人
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //备注

  /**
   * 瓶子Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBottleId(value: number) {
    if (value != undefined) {
      this.bottleId = value;
      this.hmProperty['bottleId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 题目Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQuestionId(value: number) {
    if (value != undefined) {
      this.questionId = value;
      this.hmProperty['questionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 题目来源Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQuestionSourceId(value: string) {
    if (value != undefined) {
      this.questionSourceId = value;
      this.hmProperty['questionSourceId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 瓶子类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBottleTypeId(value: string) {
    if (value != undefined) {
      this.bottleTypeId = value;
      this.hmProperty['bottleTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId_Throw(value: string) {
    if (value != undefined) {
      this.userId_Throw = value;
      this.hmProperty['userId_Throw'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 扔的时间(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetThrowTime(value: string) {
    if (value != undefined) {
      this.throwTime = value;
      this.hmProperty['throwTime'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 捞的数目(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPickUpNum(value: number) {
    if (value != undefined) {
      this.pickUpNum = value;
      this.hmProperty['pickUpNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 完成数(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFinishedNum(value: number) {
    if (value != undefined) {
      this.finishedNum = value;
      this.hmProperty['finishedNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 位置Y(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosTop(value: number) {
    if (value != undefined) {
      this.posTop = value;
      this.hmProperty['posTop'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 位置X(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosLeft(value: number) {
    if (value != undefined) {
      this.posLeft = value;
      this.hmProperty['posLeft'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 瓶子状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBottleStateId(value: string) {
    if (value != undefined) {
      this.bottleStateId = value;
      this.hmProperty['bottleStateId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 积分(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCredits(value: number) {
    if (value != undefined) {
      this.credits = value;
      this.hmProperty['credits'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdCurrEduCls(value: string) {
    if (value != undefined) {
      this.idCurrEduCls = value;
      this.hmProperty['idCurrEduCls'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsGameBottleEN.con_BottleId:
        return this.bottleId;
      case clsGameBottleEN.con_QuestionId:
        return this.questionId;
      case clsGameBottleEN.con_QuestionSourceId:
        return this.questionSourceId;
      case clsGameBottleEN.con_BottleTypeId:
        return this.bottleTypeId;
      case clsGameBottleEN.con_UserId_Throw:
        return this.userId_Throw;
      case clsGameBottleEN.con_ThrowTime:
        return this.throwTime;
      case clsGameBottleEN.con_PickUpNum:
        return this.pickUpNum;
      case clsGameBottleEN.con_FinishedNum:
        return this.finishedNum;
      case clsGameBottleEN.con_PosTop:
        return this.posTop;
      case clsGameBottleEN.con_PosLeft:
        return this.posLeft;
      case clsGameBottleEN.con_BottleStateId:
        return this.bottleStateId;
      case clsGameBottleEN.con_Credits:
        return this.credits;
      case clsGameBottleEN.con_IdCurrEduCls:
        return this.idCurrEduCls;
      case clsGameBottleEN.con_UpdUser:
        return this.updUser;
      case clsGameBottleEN.con_UpdDate:
        return this.updDate;
      case clsGameBottleEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[GameBottle]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsGameBottleEN.con_BottleId:
        this.bottleId = Number(strValue);
        this.hmProperty['bottleId'] = true;
        break;
      case clsGameBottleEN.con_QuestionId:
        this.questionId = Number(strValue);
        this.hmProperty['questionId'] = true;
        break;
      case clsGameBottleEN.con_QuestionSourceId:
        this.questionSourceId = strValue;
        this.hmProperty['questionSourceId'] = true;
        break;
      case clsGameBottleEN.con_BottleTypeId:
        this.bottleTypeId = strValue;
        this.hmProperty['bottleTypeId'] = true;
        break;
      case clsGameBottleEN.con_UserId_Throw:
        this.userId_Throw = strValue;
        this.hmProperty['userId_Throw'] = true;
        break;
      case clsGameBottleEN.con_ThrowTime:
        this.throwTime = strValue;
        this.hmProperty['throwTime'] = true;
        break;
      case clsGameBottleEN.con_PickUpNum:
        this.pickUpNum = Number(strValue);
        this.hmProperty['pickUpNum'] = true;
        break;
      case clsGameBottleEN.con_FinishedNum:
        this.finishedNum = Number(strValue);
        this.hmProperty['finishedNum'] = true;
        break;
      case clsGameBottleEN.con_PosTop:
        this.posTop = Number(strValue);
        this.hmProperty['posTop'] = true;
        break;
      case clsGameBottleEN.con_PosLeft:
        this.posLeft = Number(strValue);
        this.hmProperty['posLeft'] = true;
        break;
      case clsGameBottleEN.con_BottleStateId:
        this.bottleStateId = strValue;
        this.hmProperty['bottleStateId'] = true;
        break;
      case clsGameBottleEN.con_Credits:
        this.credits = Number(strValue);
        this.hmProperty['credits'] = true;
        break;
      case clsGameBottleEN.con_IdCurrEduCls:
        this.idCurrEduCls = strValue;
        this.hmProperty['idCurrEduCls'] = true;
        break;
      case clsGameBottleEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsGameBottleEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsGameBottleEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[GameBottle]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public bottleId = 0; //瓶子Id
  public questionId = 0; //题目Id
  public questionSourceId = ''; //题目来源Id
  public bottleTypeId = ''; //瓶子类型Id
  public userId_Throw = ''; //用户ID
  public throwTime = ''; //扔的时间
  public pickUpNum = 0; //捞的数目
  public finishedNum = 0; //完成数
  public posTop = 0; //位置Y
  public posLeft = 0; //位置X
  public bottleStateId = ''; //瓶子状态Id
  public credits = 0; //积分
  public idCurrEduCls = ''; //教学班流水号
  public updUser = ''; //修改人
  public updDate = ''; //修改日期
  public memo = ''; //备注

  /**
   * 常量:"BottleId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_BottleId(): string {
    return 'bottleId';
  } //瓶子Id

  /**
   * 常量:"QuestionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QuestionId(): string {
    return 'questionId';
  } //题目Id

  /**
   * 常量:"QuestionSourceId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QuestionSourceId(): string {
    return 'questionSourceId';
  } //题目来源Id

  /**
   * 常量:"BottleTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_BottleTypeId(): string {
    return 'bottleTypeId';
  } //瓶子类型Id

  /**
   * 常量:"UserId_Throw"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId_Throw(): string {
    return 'userId_Throw';
  } //用户ID

  /**
   * 常量:"ThrowTime"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ThrowTime(): string {
    return 'throwTime';
  } //扔的时间

  /**
   * 常量:"PickUpNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PickUpNum(): string {
    return 'pickUpNum';
  } //捞的数目

  /**
   * 常量:"FinishedNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FinishedNum(): string {
    return 'finishedNum';
  } //完成数

  /**
   * 常量:"PosTop"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PosTop(): string {
    return 'posTop';
  } //位置Y

  /**
   * 常量:"PosLeft"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PosLeft(): string {
    return 'posLeft';
  } //位置X

  /**
   * 常量:"BottleStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_BottleStateId(): string {
    return 'bottleStateId';
  } //瓶子状态Id

  /**
   * 常量:"Credits"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Credits(): string {
    return 'credits';
  } //积分

  /**
   * 常量:"IdCurrEduCls"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdCurrEduCls(): string {
    return 'idCurrEduCls';
  } //教学班流水号

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsGameBottleEN();
    const instance = new clsGameBottleEN();
    return instance.hasOwnProperty(propName);
  }
}
