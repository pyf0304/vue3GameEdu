/**
 * 类名:clsUserAnswerResultExWApi
 * 表名:UserAnswerResult(01120032)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:04:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户答题结果(UserAnswerResult)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsUserAnswerResultENEx } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultENEx';
import {
  UserAnswerResult_GetObjLstByPagerAsync,
  UserAnswerResult_SortFunByKey,
  UserAnswerResult_FilterFunByKey,
} from '@/ts/L3ForWApi/QuestionnaireResult/clsUserAnswerResultWApi';
import {
  vQuestionnaire_Sim_func,
  vQuestionnaire_Sim_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import {
  cc_CourseExamPaper_func,
  cc_CourseExamPaper_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperWApi';
import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';
import {
  QuestionOptions_func,
  QuestionOptions_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userAnswerResultExController = 'UserAnswerResultExApi';
export const userAnswerResultEx_ConstructorName = 'userAnswerResultEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UserAnswerResultEx_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objUserAnswerResultENS:源对象
 * @returns 目标对象=>clsUserAnswerResultEN:objUserAnswerResultENT
 **/
export function UserAnswerResultEx_CopyToEx(
  objUserAnswerResultENS: clsUserAnswerResultEN,
): clsUserAnswerResultENEx {
  const strThisFuncName = UserAnswerResultEx_CopyToEx.name;
  const objUserAnswerResultENT = new clsUserAnswerResultENEx();
  try {
    ObjectAssign(objUserAnswerResultENT, objUserAnswerResultENS);
    return objUserAnswerResultENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserAnswerResultENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UserAnswerResultEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserAnswerResultENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstByPagerAsync(objPagerPara);
  const arrUserAnswerResultExObjLst = arrUserAnswerResultObjLst.map(UserAnswerResultEx_CopyToEx);
  if (arrUserAnswerResultExObjLst.length == 0) return arrUserAnswerResultExObjLst;
  let arrUserAnswerResultSel: Array<clsUserAnswerResultENEx> = arrUserAnswerResultExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserAnswerResultSel = arrUserAnswerResultSel.sort(
        UserAnswerResultEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserAnswerResultSel = arrUserAnswerResultSel.sort(objPagerPara.sortFun);
    }
    return arrUserAnswerResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserAnswerResultENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMapQuestionName(
  objUserAnswerResult: clsUserAnswerResultENEx,
) {
  const strThisFuncName = UserAnswerResultEx_FuncMapQuestionName.name;
  try {
    if (IsNullOrEmpty(objUserAnswerResult.questionName) == true) {
      const vQuestionnaireSimQuestionId = objUserAnswerResult.questionId;
      const vQuestionnaireSimQuestionName = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionName,
        vQuestionnaireSimQuestionId.toString(),
        objUserAnswerResult.courseId,
      );
      objUserAnswerResult.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000896)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMapExamPaperName(
  objUserAnswerResult: clsUserAnswerResultENEx,
) {
  const strThisFuncName = UserAnswerResultEx_FuncMapExamPaperName.name;
  try {
    if (IsNullOrEmpty(objUserAnswerResult.examPaperName) == true) {
      const ccCourseExamPaperCourseExamPaperId = objUserAnswerResult.courseExamPaperId;
      const ccCourseExamPaperExamPaperName = await cc_CourseExamPaper_func(
        clscc_CourseExamPaperEN.con_CourseExamPaperId,
        clscc_CourseExamPaperEN.con_ExamPaperName,
        ccCourseExamPaperCourseExamPaperId,
        objUserAnswerResult.courseId,
      );
      objUserAnswerResult.examPaperName = ccCourseExamPaperExamPaperName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000899)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMapOptionName(
  objUserAnswerResult: clsUserAnswerResultENEx,
) {
  const strThisFuncName = UserAnswerResultEx_FuncMapOptionName.name;
  try {
    if (IsNullOrEmpty(objUserAnswerResult.optionName) == true) {
      const QuestionOptionsQuestionOptionId = objUserAnswerResult.answerOptionId;
      const QuestionOptionsOptionName = await QuestionOptions_func(
        clsQuestionOptionsEN.con_QuestionOptionId,
        clsQuestionOptionsEN.con_OptionName,
        QuestionOptionsQuestionOptionId,
        objUserAnswerResult.courseId,
      );
      objUserAnswerResult.optionName = QuestionOptionsOptionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000912)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserAnswerResultEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserAnswerResultENEx.con_ExamPaperName:
        return (a: clsUserAnswerResultENEx, b: clsUserAnswerResultENEx) => {
          return a.examPaperName.localeCompare(b.examPaperName);
        };
      case clsUserAnswerResultENEx.con_QuestionName:
        return (a: clsUserAnswerResultENEx, b: clsUserAnswerResultENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      case clsUserAnswerResultENEx.con_OptionName:
        return (a: clsUserAnswerResultENEx, b: clsUserAnswerResultENEx) => {
          return a.optionName.localeCompare(b.optionName);
        };
      default:
        return UserAnswerResult_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUserAnswerResultENEx.con_ExamPaperName:
        return (a: clsUserAnswerResultENEx, b: clsUserAnswerResultENEx) => {
          return b.examPaperName.localeCompare(a.examPaperName);
        };
      case clsUserAnswerResultENEx.con_QuestionName:
        return (a: clsUserAnswerResultENEx, b: clsUserAnswerResultENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      case clsUserAnswerResultENEx.con_OptionName:
        return (a: clsUserAnswerResultENEx, b: clsUserAnswerResultENEx) => {
          return b.optionName.localeCompare(a.optionName);
        };
      default:
        return UserAnswerResult_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function UserAnswerResultEx_FuncMapByFldName(
  strFldName: string,
  objUserAnswerResultEx: clsUserAnswerResultENEx,
) {
  const strThisFuncName = UserAnswerResultEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsUserAnswerResultEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsUserAnswerResultENEx.con_ExamPaperName:
      return UserAnswerResultEx_FuncMapExamPaperName(objUserAnswerResultEx);
    case clsUserAnswerResultENEx.con_QuestionName:
      return UserAnswerResultEx_FuncMapQuestionName(objUserAnswerResultEx);
    case clsUserAnswerResultENEx.con_OptionName:
      return UserAnswerResultEx_FuncMapOptionName(objUserAnswerResultEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function UserAnswerResultEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsUserAnswerResultENEx.con_ExamPaperName:
      return (obj: clsUserAnswerResultENEx) => {
        return obj.examPaperName === value;
      };
    case clsUserAnswerResultENEx.con_QuestionName:
      return (obj: clsUserAnswerResultENEx) => {
        return obj.questionName === value;
      };
    case clsUserAnswerResultENEx.con_OptionName:
      return (obj: clsUserAnswerResultENEx) => {
        return obj.optionName === value;
      };
    default:
      return UserAnswerResult_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMapKeyQuestionName(
  objUserAnswerResult: clsUserAnswerResultENEx,
): Promise<Array<number>> {
  const strThisFuncName = UserAnswerResultEx_FuncMapKeyQuestionName.name;
  try {
    if (IsNullOrEmpty(objUserAnswerResult.questionName) == true) return [];
    const vQuestionnaireSimQuestionName = objUserAnswerResult.questionName;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionName,
      vQuestionnaireSimQuestionName,
      objUserAnswerResult.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000898)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMapKeyExamPaperName(
  objUserAnswerResult: clsUserAnswerResultENEx,
): Promise<Array<string>> {
  const strThisFuncName = UserAnswerResultEx_FuncMapKeyExamPaperName.name;
  try {
    if (IsNullOrEmpty(objUserAnswerResult.examPaperName) == true) return [];
    const ccCourseExamPaperExamPaperName = objUserAnswerResult.examPaperName;
    const arrCourseExamPaperId = await cc_CourseExamPaper_funcKey(
      clscc_CourseExamPaperEN.con_ExamPaperName,
      ccCourseExamPaperExamPaperName,
      objUserAnswerResult.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseExamPaperId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000900)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMapKeyOptionName(
  objUserAnswerResult: clsUserAnswerResultENEx,
): Promise<Array<string>> {
  const strThisFuncName = UserAnswerResultEx_FuncMapKeyOptionName.name;
  try {
    if (IsNullOrEmpty(objUserAnswerResult.optionName) == true) return [];
    const QuestionOptionsOptionName = objUserAnswerResult.optionName;
    const arrQuestionOptionId = await QuestionOptions_funcKey(
      clsQuestionOptionsEN.con_OptionName,
      QuestionOptionsOptionName,
      objUserAnswerResult.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionOptionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000918)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
