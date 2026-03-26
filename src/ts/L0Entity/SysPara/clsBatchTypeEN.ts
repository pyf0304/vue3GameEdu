/**
 * 类名:clsBatchTypeEN
 * 表名:BatchType(01120981)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/06 16:39:34
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
 * 批次类型(BatchType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsBatchTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'BatchType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'BatchTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = ['batchTypeId', 'batchTypeName', 'batchTypeEnName', 'memo'];
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
  private mstrBatchTypeId = ''; //批次类型Id
  private mstrBatchTypeName = ''; //批次类型名
  private mstrBatchTypeEnName = ''; //批次类型英文名
  private mstrMemo = ''; //备注

  /**
   * 批次类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBatchTypeId(value: string) {
    if (value != undefined) {
      this.batchTypeId = value;
      this.hmProperty['batchTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 批次类型名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBatchTypeName(value: string) {
    if (value != undefined) {
      this.batchTypeName = value;
      this.hmProperty['batchTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 批次类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBatchTypeEnName(value: string) {
    if (value != undefined) {
      this.batchTypeEnName = value;
      this.hmProperty['batchTypeEnName'] = true;
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
      case clsBatchTypeEN.con_BatchTypeId:
        return this.batchTypeId;
      case clsBatchTypeEN.con_BatchTypeName:
        return this.batchTypeName;
      case clsBatchTypeEN.con_BatchTypeEnName:
        return this.batchTypeEnName;
      case clsBatchTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[BatchType]中不存在!`;
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
      case clsBatchTypeEN.con_BatchTypeId:
        this.batchTypeId = strValue;
        this.hmProperty['batchTypeId'] = true;
        break;
      case clsBatchTypeEN.con_BatchTypeName:
        this.batchTypeName = strValue;
        this.hmProperty['batchTypeName'] = true;
        break;
      case clsBatchTypeEN.con_BatchTypeEnName:
        this.batchTypeEnName = strValue;
        this.hmProperty['batchTypeEnName'] = true;
        break;
      case clsBatchTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[BatchType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public batchTypeId = ''; //批次类型Id
  public batchTypeName = ''; //批次类型名
  public batchTypeEnName = ''; //批次类型英文名
  public memo = ''; //备注

  /**
   * 常量:"BatchTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_BatchTypeId(): string {
    return 'batchTypeId';
  } //批次类型Id

  /**
   * 常量:"BatchTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_BatchTypeName(): string {
    return 'batchTypeName';
  } //批次类型名

  /**
   * 常量:"BatchTypeEnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_BatchTypeEnName(): string {
    return 'batchTypeEnName';
  } //批次类型英文名

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
    //return propName in new clsBatchTypeEN();
    const instance = new clsBatchTypeEN();
    return instance.hasOwnProperty(propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumBatchType {
  /**
   * 未知
   **/
  static readonly Unknown_00 = '00';
  /**
   * 前测
   **/
  static readonly PreTest_01 = '01';
  /**
   * 预习
   **/
  static readonly Preview_02 = '02';
  /**
   * 练习
   **/
  static readonly Exercise_03 = '03';
  /**
   * 复习
   **/
  static readonly Review_04 = '04';
  /**
   * 考试
   **/
  static readonly Exam_05 = '05';
  /**
   * 捞瓶解题
   **/
  static readonly RetrieveSolve_06 = '06';
  /**
   * 扔瓶解题
   **/
  static readonly ThrowSolve_07 = '07';
}
