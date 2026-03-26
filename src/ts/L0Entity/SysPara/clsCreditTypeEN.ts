/**
 * 类名:clsCreditTypeEN
 * 表名:CreditType(01120984)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/30 10:10:11
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 积分类型(CreditType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCreditTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CreditType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CreditTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 5;
  public static AttributeName = [
    'creditTypeId',
    'creditTypeName',
    'creditTypeEnName',
    'credits',
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
  private mstrCreditTypeId = ''; //积分类型Id
  private mstrCreditTypeName = ''; //积分类型名
  private mstrCreditTypeEnName = ''; //积分类型英文名
  private mintCredits = 0; //积分
  private mstrMemo = ''; //备注

  /**
   * 积分类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreditTypeId(value: string) {
    if (value != undefined) {
      this.creditTypeId = value;
      this.hmProperty['creditTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 积分类型名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreditTypeName(value: string) {
    if (value != undefined) {
      this.creditTypeName = value;
      this.hmProperty['creditTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 积分类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreditTypeEnName(value: string) {
    if (value != undefined) {
      this.creditTypeEnName = value;
      this.hmProperty['creditTypeEnName'] = true;
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
      case clsCreditTypeEN.con_CreditTypeId:
        return this.creditTypeId;
      case clsCreditTypeEN.con_CreditTypeName:
        return this.creditTypeName;
      case clsCreditTypeEN.con_CreditTypeEnName:
        return this.creditTypeEnName;
      case clsCreditTypeEN.con_Credits:
        return this.credits;
      case clsCreditTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CreditType]中不存在!`;
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
      case clsCreditTypeEN.con_CreditTypeId:
        this.creditTypeId = strValue;
        this.hmProperty['creditTypeId'] = true;
        break;
      case clsCreditTypeEN.con_CreditTypeName:
        this.creditTypeName = strValue;
        this.hmProperty['creditTypeName'] = true;
        break;
      case clsCreditTypeEN.con_CreditTypeEnName:
        this.creditTypeEnName = strValue;
        this.hmProperty['creditTypeEnName'] = true;
        break;
      case clsCreditTypeEN.con_Credits:
        this.credits = Number(strValue);
        this.hmProperty['credits'] = true;
        break;
      case clsCreditTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[CreditType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public creditTypeId = ''; //积分类型Id
  public creditTypeName = ''; //积分类型名
  public creditTypeEnName = ''; //积分类型英文名
  public credits = 0; //积分
  public memo = ''; //备注

  /**
   * 常量:"CreditTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CreditTypeId(): string {
    return 'creditTypeId';
  } //积分类型Id

  /**
   * 常量:"CreditTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CreditTypeName(): string {
    return 'creditTypeName';
  } //积分类型名

  /**
   * 常量:"CreditTypeEnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CreditTypeEnName(): string {
    return 'creditTypeEnName';
  } //积分类型英文名

  /**
   * 常量:"Credits"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Credits(): string {
    return 'credits';
  } //积分

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
    //return propName in new clsCreditTypeEN();
    const instance = new clsCreditTypeEN();
    return instance.hasOwnProperty(propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumCreditType {
  /**
   * 丢瓶-提交新题目
   **/
  static readonly ThrowBottle_SubmitNewQuestion_01 = '01';
  /**
   * 丢瓶-无人回答-答案正确
   **/
  static readonly ThrowBottle_NoAnswer_CorrectAnswer_02 = '02';
  /**
   * 丢瓶-答案错误-教师删除
   **/
  static readonly ThrowBottle_IncorrectAnswer_TeacherDeletes_03 = '03';
  /**
   * 丢瓶-提交已存在题目
   **/
  static readonly ThrowBottle_SubmitExistingQuestion_04 = '04';
  /**
   * 丢瓶-已存在题目-无人回答-自己会做
   **/
  static readonly ThrowBottle_ExistingQuestion_NoAnswer_SelfSolve_05 = '05';
  /**
   * 捡瓶-智慧瓶
   **/
  static readonly PickBottle_SmartBottle_06 = '06';
  /**
   * 捡瓶-求知瓶
   **/
  static readonly PickBottle_KnowledgeBottle_07 = '07';
  /**
   * 捡瓶-答案正确
   **/
  static readonly PickBottle_CorrectAnswer_08 = '08';
  /**
   * 捡瓶-答案错误
   **/
  static readonly PickBottle_IncorrectAnswer_09 = '09';
  /**
   * 捡瓶-答案被点赞
   **/
  static readonly PickBottle_AnswerLiked_10 = '10';
}
