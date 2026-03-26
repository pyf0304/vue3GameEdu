/**
 * 类名:clsQuestionSourceEN
 * 表名:QuestionSource(01120991)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/10 23:07:53
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 题目来源(QuestionSource)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQuestionSourceEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QuestionSource'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'QuestionSourceId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = [
    'questionSourceId',
    'questionSourceName',
    'questionSourceEnName',
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
  private mstrQuestionSourceId = ''; //题目来源Id
  private mstrQuestionSourceName = ''; //题目来源名
  private mstrQuestionSourceEnName = ''; //题目来源英文名
  private mstrMemo = ''; //备注

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
   * 题目来源名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQuestionSourceName(value: string) {
    if (value != undefined) {
      this.questionSourceName = value;
      this.hmProperty['questionSourceName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 题目来源英文名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQuestionSourceEnName(value: string) {
    if (value != undefined) {
      this.questionSourceEnName = value;
      this.hmProperty['questionSourceEnName'] = true;
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
      case clsQuestionSourceEN.con_QuestionSourceId:
        return this.questionSourceId;
      case clsQuestionSourceEN.con_QuestionSourceName:
        return this.questionSourceName;
      case clsQuestionSourceEN.con_QuestionSourceEnName:
        return this.questionSourceEnName;
      case clsQuestionSourceEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QuestionSource]中不存在!`;
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
      case clsQuestionSourceEN.con_QuestionSourceId:
        this.questionSourceId = strValue;
        this.hmProperty['questionSourceId'] = true;
        break;
      case clsQuestionSourceEN.con_QuestionSourceName:
        this.questionSourceName = strValue;
        this.hmProperty['questionSourceName'] = true;
        break;
      case clsQuestionSourceEN.con_QuestionSourceEnName:
        this.questionSourceEnName = strValue;
        this.hmProperty['questionSourceEnName'] = true;
        break;
      case clsQuestionSourceEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[QuestionSource]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public questionSourceId = ''; //题目来源Id
  public questionSourceName = ''; //题目来源名
  public questionSourceEnName = ''; //题目来源英文名
  public memo = ''; //备注

  /**
   * 常量:"QuestionSourceId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QuestionSourceId(): string {
    return 'questionSourceId';
  } //题目来源Id

  /**
   * 常量:"QuestionSourceName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QuestionSourceName(): string {
    return 'questionSourceName';
  } //题目来源名

  /**
   * 常量:"QuestionSourceEnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QuestionSourceEnName(): string {
    return 'questionSourceEnName';
  } //题目来源英文名

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
    //return propName in new clsQuestionSourceEN();
    const instance = new clsQuestionSourceEN();
    return instance.hasOwnProperty(propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumQuestionSource {
  /**
   * 未知
   **/
  static readonly Unknown_00 = '00';
  /**
   * 教师出题
   **/
  static readonly CreatedByTeacher_01 = '01';
  /**
   * 学生出题
   **/
  static readonly CreatedByStudent_02 = '02';
}
