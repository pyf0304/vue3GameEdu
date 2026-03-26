/**
 * 类名:clsAnswerExWApi
 * 表名:Answer(01120002)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:04:42
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 答案(Answer)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  Answer_GetObjLstCache,
  Answer_GetObjLstByPagerAsync,
  Answer_SortFunByKey,
  Answer_FilterFunByKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
import { clsAnswerENEx } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerENEx';
import {
  vQuestionnaire_Sim_func,
  vQuestionnaire_Sim_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const answerExController = 'AnswerExApi';
export const answerEx_ConstructorName = 'answerEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function AnswerEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objAnswerENS:源对象
 * @returns 目标对象=>clsAnswerEN:objAnswerENT
 **/
export function AnswerEx_CopyToEx(objAnswerENS: clsAnswerEN): clsAnswerENEx {
  const strThisFuncName = AnswerEx_CopyToEx.name;
  const objAnswerENT = new clsAnswerENEx();
  try {
    ObjectAssign(objAnswerENT, objAnswerENS);
    return objAnswerENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      answerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objAnswerENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function AnswerEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsAnswerENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrAnswerObjLst = await Answer_GetObjLstCache(strCourseId);
  const arrAnswerExObjLst = arrAnswerObjLst.map(AnswerEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsAnswerEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrAnswerExObjLst) {
      await AnswerEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrAnswerExObjLst.length == 0) return arrAnswerExObjLst;
  let arrAnswerSel: Array<clsAnswerENEx> = arrAnswerExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objAnswerCond = new clsAnswerENEx();
  ObjectAssign(objAnswerCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsAnswerWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrAnswerSel = arrAnswerSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objAnswerCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAnswerSel = arrAnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAnswerSel = arrAnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAnswerSel = arrAnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAnswerSel = arrAnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAnswerSel = arrAnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAnswerSel = arrAnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAnswerSel = arrAnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrAnswerSel = arrAnswerSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAnswerSel = arrAnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAnswerSel = arrAnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrAnswerSel = arrAnswerSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrAnswerSel = arrAnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrAnswerSel = arrAnswerSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrAnswerSel = arrAnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrAnswerSel.length == 0) return arrAnswerSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrAnswerSel = arrAnswerSel.sort(AnswerEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrAnswerSel = arrAnswerSel.sort(objPagerPara.sortFun);
    }
    arrAnswerSel = arrAnswerSel.slice(intStart, intEnd);
    return arrAnswerSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      answerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAnswerENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function AnswerEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsAnswerENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrAnswerObjLst = await Answer_GetObjLstByPagerAsync(objPagerPara);
  const arrAnswerExObjLst = arrAnswerObjLst.map(AnswerEx_CopyToEx);
  if (arrAnswerExObjLst.length == 0) return arrAnswerExObjLst;
  let arrAnswerSel: Array<clsAnswerENEx> = arrAnswerExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrAnswerSel = arrAnswerSel.sort(AnswerEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrAnswerSel = arrAnswerSel.sort(objPagerPara.sortFun);
    }
    return arrAnswerSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      answerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAnswerENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAnswerS:源对象
 **/
export async function AnswerEx_FuncMapQuestionName(objAnswer: clsAnswerENEx) {
  const strThisFuncName = AnswerEx_FuncMapQuestionName.name;
  try {
    if (IsNullOrEmpty(objAnswer.questionName) == true) {
      const vQuestionnaireSimQuestionId = objAnswer.questionId;
      const vQuestionnaireSimQuestionName = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionName,
        vQuestionnaireSimQuestionId.toString(),
        objAnswer.courseId,
      );
      objAnswer.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000896)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      answerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAnswerS:源对象
 **/
export async function AnswerEx_FuncMapCourseName(objAnswer: clsAnswerENEx) {
  const strThisFuncName = AnswerEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objAnswer.courseName) == true) {
      const vccCourseSimCourseId = objAnswer.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objAnswer.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      answerEx_ConstructorName,
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
export function AnswerEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsAnswerENEx.con_QuestionName:
        return (a: clsAnswerENEx, b: clsAnswerENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      case clsAnswerENEx.con_OptionName:
        return (a: clsAnswerENEx, b: clsAnswerENEx) => {
          return a.optionName.localeCompare(b.optionName);
        };
      case clsAnswerENEx.con_CourseName:
        return (a: clsAnswerENEx, b: clsAnswerENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      default:
        return Answer_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsAnswerENEx.con_QuestionName:
        return (a: clsAnswerENEx, b: clsAnswerENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      case clsAnswerENEx.con_OptionName:
        return (a: clsAnswerENEx, b: clsAnswerENEx) => {
          return b.optionName.localeCompare(a.optionName);
        };
      case clsAnswerENEx.con_CourseName:
        return (a: clsAnswerENEx, b: clsAnswerENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      default:
        return Answer_SortFunByKey(strKey, AscOrDesc);
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
export function AnswerEx_FuncMapByFldName(strFldName: string, objAnswerEx: clsAnswerENEx) {
  const strThisFuncName = AnswerEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsAnswerEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsAnswerENEx.con_QuestionName:
      return AnswerEx_FuncMapQuestionName(objAnswerEx);
    case clsAnswerENEx.con_CourseName:
      return AnswerEx_FuncMapCourseName(objAnswerEx);
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
export async function AnswerEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsAnswerENEx.con_QuestionName:
      return (obj: clsAnswerENEx) => {
        return obj.questionName === value;
      };
    case clsAnswerENEx.con_OptionName:
      return (obj: clsAnswerENEx) => {
        return obj.optionName === value;
      };
    case clsAnswerENEx.con_CourseName:
      return (obj: clsAnswerENEx) => {
        return obj.courseName === value;
      };
    default:
      return Answer_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objAnswerS:源对象
 **/
export async function AnswerEx_FuncMapKeyQuestionName(
  objAnswer: clsAnswerENEx,
): Promise<Array<number>> {
  const strThisFuncName = AnswerEx_FuncMapKeyQuestionName.name;
  try {
    if (IsNullOrEmpty(objAnswer.questionName) == true) return [];
    const vQuestionnaireSimQuestionName = objAnswer.questionName;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionName,
      vQuestionnaireSimQuestionName,
      objAnswer.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000898)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      answerEx_ConstructorName,
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
 * @param objAnswerS:源对象
 **/
export async function AnswerEx_FuncMapKeyCourseName(
  objAnswer: clsAnswerENEx,
): Promise<Array<string>> {
  const strThisFuncName = AnswerEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objAnswer.courseName) == true) return [];
    const vccCourseSimCourseName = objAnswer.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000541)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      answerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
