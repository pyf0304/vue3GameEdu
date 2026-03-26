/**
 * 类名:clsQuestionnaireENEx
 * 表名:Questionnaire(01120001)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/03 21:28:23
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
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';

export class clsQuestionnaireENEx extends clsQuestionnaireEN {
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
      case clsQuestionnaireENEx.con_LevelModeTypeName:
        return this.levelModeTypeName;
      case clsQuestionnaireENEx.con_DifficultyLevelName:
        return this.difficultyLevelName;
      case clsQuestionnaireENEx.con_ChapterName:
        return this.chapterName;
      case clsQuestionnaireENEx.con_CourseName:
        return this.courseName;
      case clsQuestionnaireENEx.con_QuestionTypeName:
        return this.questionTypeName;
      case clsQuestionnaireENEx.con_UpdDateSim:
        return this.updDateSim;
      case clsQuestionnaireENEx.con_KnowledgeNameLst:
        return this.knowledgeNameLst;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"LevelModeTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_LevelModeTypeName(): string {
    return 'levelModeTypeName';
  } //模式名

  /**
   * 常量:"DifficultyLevelName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DifficultyLevelName(): string {
    return 'difficultyLevelName';
  } //难度等级名称

  /**
   * 常量:"ChapterName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ChapterName(): string {
    return 'chapterName';
  } //章名

  /**
   * 常量:"CourseName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CourseName(): string {
    return 'courseName';
  } //课程名称

  /**
   * 常量:"QuestionTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_QuestionTypeName(): string {
    return 'questionTypeName';
  } //题目类型名

  /**
   * 常量:"UpdDateSim"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_UpdDateSim(): string {
    return 'updDateSim';
  } //修改日期

  /**
   * 常量:"KnowledgeNameLst"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_KnowledgeNameLst(): string {
    return 'knowledgeNameLst';
  } //知识点名列表

  public levelModeTypeName = ''; //模式名
  public difficultyLevelName = ''; //难度等级名称
  public chapterName = ''; //章名
  public courseName = ''; //课程名称
  public questionTypeName = ''; //题目类型名
  public updDateSim = ''; //修改日期
  public knowledgeNameLst = ''; //知识点名列表

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
      case clsQuestionnaireENEx.con_LevelModeTypeName:
        this.levelModeTypeName = strValue;
        this.hmProperty['levelModeTypeName'] = true;
        break;
      case clsQuestionnaireENEx.con_DifficultyLevelName:
        this.difficultyLevelName = strValue;
        this.hmProperty['difficultyLevelName'] = true;
        break;
      case clsQuestionnaireENEx.con_ChapterName:
        this.chapterName = strValue;
        this.hmProperty['chapterName'] = true;
        break;
      case clsQuestionnaireENEx.con_CourseName:
        this.courseName = strValue;
        this.hmProperty['courseName'] = true;
        break;
      case clsQuestionnaireENEx.con_QuestionTypeName:
        this.questionTypeName = strValue;
        this.hmProperty['questionTypeName'] = true;
        break;
      case clsQuestionnaireENEx.con_UpdDateSim:
        this.updDateSim = strValue;
        this.hmProperty['updDateSim'] = true;
        break;
      case clsQuestionnaireENEx.con_KnowledgeNameLst:
        this.knowledgeNameLst = strValue;
        this.hmProperty['knowledgeNameLst'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
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
