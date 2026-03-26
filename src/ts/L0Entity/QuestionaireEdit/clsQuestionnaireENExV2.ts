/**
 * 类名:clsQuestionnaireENEx
 * 表名:Questionnaire(01120001)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:44
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
 * 题目(Questionnaire)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/

import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';

export class clsQuestionnaireENExV2 extends clsQuestionnaireENEx {
  //以下是属性变量
  options: any[] = [];
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

      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

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
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Questionnaire]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
    //return propName in new clsQuestionnaireENEx();
    const instance = new clsQuestionnaireENEx();
    return instance.hasOwnProperty(propName);
  }
}
