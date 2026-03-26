/**
 * 类名:clsUserExamBatchRelaEN
 * 表名:UserExamBatchRela(01120980)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/13 16:45:49
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 用户考核批次关系(UserExamBatchRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUserExamBatchRelaEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '07'; //复合主键
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'UserExamBatchRela'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'UserId,ExamBatchNo'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'userId',
    'examBatchNo',
    'batchTypeId',
    'idCurrEduCls',
    'courseKnowledgeId',
    'difficultyLevelId',
    'batchStateId',
    'updDate',
    'updUser',
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
  private mstrUserId = ''; //用户ID
  private mstrExamBatchNo = ''; //学生批次号
  private mstrBatchTypeId = ''; //批次类型Id
  private mstrIdCurrEduCls = ''; //教学班流水号
  private mstrCourseKnowledgeId = ''; //知识点Id
  private mstrDifficultyLevelId = ''; //难度等级Id
  private mstrBatchStateId = ''; //批次状态Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注

  /**
   * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学生批次号(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetExamBatchNo(value: string) {
    if (value != undefined) {
      this.examBatchNo = value;
      this.hmProperty['examBatchNo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

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
   * 知识点Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCourseKnowledgeId(value: string) {
    if (value != undefined) {
      this.courseKnowledgeId = value;
      this.hmProperty['courseKnowledgeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 难度等级Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDifficultyLevelId(value: string) {
    if (value != undefined) {
      this.difficultyLevelId = value;
      this.hmProperty['difficultyLevelId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 批次状态Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBatchStateId(value: string) {
    if (value != undefined) {
      this.batchStateId = value;
      this.hmProperty['batchStateId'] = true;
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
      case clsUserExamBatchRelaEN.con_UserId:
        return this.userId;
      case clsUserExamBatchRelaEN.con_ExamBatchNo:
        return this.examBatchNo;
      case clsUserExamBatchRelaEN.con_BatchTypeId:
        return this.batchTypeId;
      case clsUserExamBatchRelaEN.con_IdCurrEduCls:
        return this.idCurrEduCls;
      case clsUserExamBatchRelaEN.con_CourseKnowledgeId:
        return this.courseKnowledgeId;
      case clsUserExamBatchRelaEN.con_DifficultyLevelId:
        return this.difficultyLevelId;
      case clsUserExamBatchRelaEN.con_BatchStateId:
        return this.batchStateId;
      case clsUserExamBatchRelaEN.con_UpdDate:
        return this.updDate;
      case clsUserExamBatchRelaEN.con_UpdUser:
        return this.updUser;
      case clsUserExamBatchRelaEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserExamBatchRela]中不存在!`;
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
      case clsUserExamBatchRelaEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsUserExamBatchRelaEN.con_ExamBatchNo:
        this.examBatchNo = strValue;
        this.hmProperty['examBatchNo'] = true;
        break;
      case clsUserExamBatchRelaEN.con_BatchTypeId:
        this.batchTypeId = strValue;
        this.hmProperty['batchTypeId'] = true;
        break;
      case clsUserExamBatchRelaEN.con_IdCurrEduCls:
        this.idCurrEduCls = strValue;
        this.hmProperty['idCurrEduCls'] = true;
        break;
      case clsUserExamBatchRelaEN.con_CourseKnowledgeId:
        this.courseKnowledgeId = strValue;
        this.hmProperty['courseKnowledgeId'] = true;
        break;
      case clsUserExamBatchRelaEN.con_DifficultyLevelId:
        this.difficultyLevelId = strValue;
        this.hmProperty['difficultyLevelId'] = true;
        break;
      case clsUserExamBatchRelaEN.con_BatchStateId:
        this.batchStateId = strValue;
        this.hmProperty['batchStateId'] = true;
        break;
      case clsUserExamBatchRelaEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsUserExamBatchRelaEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsUserExamBatchRelaEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[UserExamBatchRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public userId = ''; //用户ID
  public examBatchNo = ''; //学生批次号
  public batchTypeId = ''; //批次类型Id
  public idCurrEduCls = ''; //教学班流水号
  public courseKnowledgeId = ''; //知识点Id
  public difficultyLevelId = ''; //难度等级Id
  public batchStateId = ''; //批次状态Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户ID

  /**
   * 常量:"ExamBatchNo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ExamBatchNo(): string {
    return 'examBatchNo';
  } //学生批次号

  /**
   * 常量:"BatchTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_BatchTypeId(): string {
    return 'batchTypeId';
  } //批次类型Id

  /**
   * 常量:"IdCurrEduCls"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdCurrEduCls(): string {
    return 'idCurrEduCls';
  } //教学班流水号

  /**
   * 常量:"CourseKnowledgeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CourseKnowledgeId(): string {
    return 'courseKnowledgeId';
  } //知识点Id

  /**
   * 常量:"DifficultyLevelId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DifficultyLevelId(): string {
    return 'difficultyLevelId';
  } //难度等级Id

  /**
   * 常量:"BatchStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_BatchStateId(): string {
    return 'batchStateId';
  } //批次状态Id

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

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
    //return propName in new clsUserExamBatchRelaEN();
    const instance = new clsUserExamBatchRelaEN();
    return instance.hasOwnProperty(propName);
  }
}
