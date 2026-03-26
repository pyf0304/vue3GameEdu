//import $ from "jquery";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsAnswerEN } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerEN';
import { clsAnswerENEx } from '@/ts/L0Entity/QuestionaireEdit/clsAnswerENEx';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import {
  Answer_FilterFunByKey,
  Answer_GetObjLstAsync,
  Answer_GetObjLstCache,
  Answer_SortFunByKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';

import { QuestionOptions_func } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';
export const answerEx_Controller = 'AnswerExApi';
export const answerEx_ConstructorName = 'answerEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function AnswerEx_GetWebApiUrl(strController: string, strAction: string): string {
  const strThisFuncName = 'GetWebApiUrl';
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
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
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrAnswerExObjLst) {
      const conFuncMap = await AnswerEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrAnswerExObjLst.length == 0) return arrAnswerExObjLst;
  let arrAnswer_Sel: Array<clsAnswerENEx> = arrAnswerExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objAnswer_Cond = new clsAnswerENEx();
  ObjectAssign(objAnswer_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsAnswerWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrAnswer_Sel = arrAnswer_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objAnswer_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAnswer_Sel = arrAnswer_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAnswer_Sel = arrAnswer_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrAnswer_Sel = arrAnswer_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAnswer_Sel = arrAnswer_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAnswer_Sel = arrAnswer_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrAnswer_Sel = arrAnswer_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrAnswer_Sel = arrAnswer_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrAnswer_Sel = arrAnswer_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrAnswer_Sel = arrAnswer_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrAnswer_Sel.length == 0) return arrAnswer_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrAnswer_Sel = arrAnswer_Sel.sort(AnswerEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrAnswer_Sel = arrAnswer_Sel.sort(objPagerPara.sortFun);
    }
    arrAnswer_Sel = arrAnswer_Sel.slice(intStart, intEnd);
    return arrAnswer_Sel;
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function AnswerEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsAnswerENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrAnswerObjLst = await Answer_GetObjLstAsync(objPagerPara.whereCond);
  const arrAnswerExObjLst = arrAnswerObjLst.map(AnswerEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrAnswerExObjLst) {
      const conFuncMap = await AnswerEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrAnswerExObjLst.length == 0) return arrAnswerExObjLst;
  let arrAnswer_Sel: Array<clsAnswerENEx> = arrAnswerExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrAnswer_Sel = arrAnswer_Sel.sort(AnswerEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrAnswer_Sel = arrAnswer_Sel.sort(objPagerPara.sortFun);
    }
    arrAnswer_Sel = arrAnswer_Sel.slice(intStart, intEnd);
    return arrAnswer_Sel;
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function AnswerEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return Answer_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return Answer_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function AnswerEx_FuncMapByFldName(strFldName: string, objAnswerEx: clsAnswerENEx) {
  const strThisFuncName = AnswerEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsAnswerEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsAnswerENEx.con_QuestionName:
      return AnswerEx_FuncMap_QuestionName(objAnswerEx);
    case clsAnswerENEx.con_OptionName:
      return AnswerEx_FuncMap_OptionName(objAnswerEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function AnswerEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return Answer_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAnswerS:源对象
 **/
export async function AnswerEx_FuncMap_QuestionName(objAnswer: clsAnswerENEx) {
  const strThisFuncName = AnswerEx_FuncMap_QuestionName.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objAnswer.questionName) == true) {
      const Questionnaire_QuestionId = objAnswer.questionId;
      const Questionnaire_QuestionName = await questionnaireStore.getQuestionName(
        Questionnaire_QuestionId,
      );
      objAnswer.questionName = Questionnaire_QuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000191)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function AnswerEx_FuncMap_OptionName(objAnswer: clsAnswerENEx) {
  const strThisFuncName = AnswerEx_FuncMap_OptionName.name;
  try {
    if (IsNullOrEmpty(objAnswer.optionName) == true) {
      const QuestionOptions_QuestionOptionId = objAnswer.answerOptionId;
      const QuestionOptions_OptionName = await QuestionOptions_func(
        clsQuestionOptionsEN.con_QuestionOptionId,
        clsQuestionOptionsEN.con_OptionName,
        QuestionOptions_QuestionOptionId,
        objAnswer.courseId,
      );
      objAnswer.optionName = QuestionOptions_OptionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000206)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      answerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 设置题目的标准答案
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strQuestionId: 题目Id
 * @param strAnswer: 标准答案
 * @param strCourseId: 课程Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function AnswerEx_SetQuestionAnswer(
  strQuestionId: number,
  strAnswer: string,
  strCourseId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = AnswerEx_SetQuestionAnswer.name;
  const strAction = 'SetQuestionAnswer';
  const strUrl = AnswerEx_GetWebApiUrl(answerEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strQuestionId,
      strAnswer,
      strCourseId,
      strOpUser,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        answerEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        answerEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
