/**
 * 类名:clsQuestionSource
 * 表名:QuestionSource(01120991)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/10 23:07:55
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * 题目来源(QuestionSource)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsQuestionSource {
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
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public questionSourceId = ''; //题目来源Id
  public questionSourceName = ''; //题目来源名
  public questionSourceEnName = ''; //题目来源英文名
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
      case clsQuestionSource.con_QuestionSourceId:
        return this.questionSourceId;
      case clsQuestionSource.con_QuestionSourceName:
        return this.questionSourceName;
      case clsQuestionSource.con_QuestionSourceEnName:
        return this.questionSourceEnName;
      case clsQuestionSource.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QuestionSource]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"QuestionSourceId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_QuestionSourceId(): string {
    return 'questionSourceId';
  } //题目来源Id

  /**
   * 常量:"QuestionSourceName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_QuestionSourceName(): string {
    return 'questionSourceName';
  } //题目来源名

  /**
   * 常量:"QuestionSourceEnName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_QuestionSourceEnName(): string {
    return 'questionSourceEnName';
  } //题目来源英文名

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
