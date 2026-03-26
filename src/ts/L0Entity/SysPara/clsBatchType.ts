/**
 * 类名:clsBatchType
 * 表名:BatchType(01120981)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/06 16:39:35
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * 批次类型(BatchType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsBatchType {
  public static _CurrTabName = 'BatchType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'BatchTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = ['batchTypeId', 'batchTypeName', 'batchTypeEnName', 'memo'];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public batchTypeId = ''; //批次类型Id
  public batchTypeName = ''; //批次类型名
  public batchTypeEnName = ''; //批次类型英文名
  public memo = ''; //备注

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsBatchType.con_BatchTypeId:
        return this.batchTypeId;
      case clsBatchType.con_BatchTypeName:
        return this.batchTypeName;
      case clsBatchType.con_BatchTypeEnName:
        return this.batchTypeEnName;
      case clsBatchType.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[BatchType]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"BatchTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_BatchTypeId(): string {
    return 'batchTypeId';
  } //批次类型Id

  /**
   * 常量:"BatchTypeName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_BatchTypeName(): string {
    return 'batchTypeName';
  } //批次类型名

  /**
   * 常量:"BatchTypeEnName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_BatchTypeEnName(): string {
    return 'batchTypeEnName';
  } //批次类型英文名

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
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
