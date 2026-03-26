/**
 * 类名:clsQuestionOptionsENEx
 * 表名:QuestionOptions(01120188)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:40
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 题目选项(QuestionOptions)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';

export class clsQuestionOptionsENEx extends clsQuestionOptionsEN {
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strValue;
    switch (strFldName) {
      case 'CtrlId':
        return '';
      case clsQuestionOptionsENEx.con_QuestionName:
        return this.questionName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"QuestionName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_QuestionName(): string {
    return 'questionName';
  } //题目名称

  public questionName = ''; //题目名称
  public optionNameEx = '';
  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsQuestionOptionsENEx.con_QuestionName:
        this.questionName = strValue;
        this.hmProperty['questionName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QuestionOptions]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsQuestionOptionsENEx();
    const instance = new clsQuestionOptionsENEx();
    return instance.hasOwnProperty(propName);
  }
}
