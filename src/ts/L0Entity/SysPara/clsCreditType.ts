/**
 * 类名:clsCreditType
 * 表名:CreditType(01120984)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/30 10:10:12
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
 * 积分类型(CreditType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsCreditType {
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
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public creditTypeId = ''; //积分类型Id
  public creditTypeName = ''; //积分类型名
  public creditTypeEnName = ''; //积分类型英文名
  public credits = 0; //积分
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
      case clsCreditType.con_CreditTypeId:
        return this.creditTypeId;
      case clsCreditType.con_CreditTypeName:
        return this.creditTypeName;
      case clsCreditType.con_CreditTypeEnName:
        return this.creditTypeEnName;
      case clsCreditType.con_Credits:
        return this.credits;
      case clsCreditType.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CreditType]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"CreditTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CreditTypeId(): string {
    return 'creditTypeId';
  } //积分类型Id

  /**
   * 常量:"CreditTypeName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CreditTypeName(): string {
    return 'creditTypeName';
  } //积分类型名

  /**
   * 常量:"CreditTypeEnName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CreditTypeEnName(): string {
    return 'creditTypeEnName';
  } //积分类型英文名

  /**
   * 常量:"Credits"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Credits(): string {
    return 'credits';
  } //积分

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
