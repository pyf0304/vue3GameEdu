/*-- -- -- -- -- -- -- -- -- -- --
类名:clsge_InspectionResultsExWApi
表名:ge_InspectionResults(01120897)
生成代码版本:2021.03.13.1
生成日期:2021/03/16 17:05:26
生成者:yy
生成服务器IP:103.116.76.183
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:游戏化学习
模块英文名:GameLearn
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/
//import * as QQ from "q";
import { clsge_ExaminationCriteriaEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN';
import { clsge_InspectionResultsEN } from '@/ts/L0Entity/GameLearn/clsge_InspectionResultsEN';
import { clsge_InspectionResultsENEx } from '@/ts/L0Entity/GameLearn/clsge_InspectionResultsENEx';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { ge_ExaminationCriteria_func } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import {
  ge_InspectionResults_FilterFunByKey,
  ge_InspectionResults_GetObjLstAsync,
  ge_InspectionResults_SortFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_InspectionResultsWApi';

import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';
export const ge_InspectionResultsEx_Controller = 'ge_InspectionResultsExApi';
export const ge_InspectionResultsEx_ConstructorName = 'ge_InspectionResultsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_InspectionResultsEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objge_InspectionResultsENS:源对象
 * @returns 目标对象=>clsge_InspectionResultsEN:objge_InspectionResultsENT
 **/
export function ge_InspectionResultsEx_CopyToEx(
  objge_InspectionResultsENS: clsge_InspectionResultsEN,
): clsge_InspectionResultsENEx {
  const strThisFuncName = ge_InspectionResultsEx_CopyToEx.name;
  const objge_InspectionResultsENT = new clsge_InspectionResultsENEx();
  try {
    ObjectAssign(objge_InspectionResultsENT, objge_InspectionResultsENS);
    return objge_InspectionResultsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_InspectionResultsENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_InspectionResultsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_InspectionResultsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_InspectionResultsObjLst = await ge_InspectionResults_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_InspectionResultsExObjLst = arrge_InspectionResultsObjLst.map(
    ge_InspectionResultsEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_InspectionResultsExObjLst) {
      const conFuncMap = await ge_InspectionResultsEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrge_InspectionResultsExObjLst.length == 0) return arrge_InspectionResultsExObjLst;
  let arrge_InspectionResults_Sel: Array<clsge_InspectionResultsENEx> =
    arrge_InspectionResultsExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_InspectionResults_Sel = arrge_InspectionResults_Sel.sort(
        ge_InspectionResultsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_InspectionResults_Sel = arrge_InspectionResults_Sel.sort(objPagerPara.sortFun);
    }
    arrge_InspectionResults_Sel = arrge_InspectionResults_Sel.slice(intStart, intEnd);
    return arrge_InspectionResults_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_InspectionResultsENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_InspectionResultsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_InspectionResults_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_InspectionResults_SortFunByKey(strKey, AscOrDesc);
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
export function ge_InspectionResultsEx_FuncMapByFldName(
  strFldName: string,
  objge_InspectionResultsEx: clsge_InspectionResultsENEx,
) {
  const strThisFuncName = ge_InspectionResultsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_InspectionResultsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_InspectionResultsENEx.con_QuestionName:
      return ge_InspectionResultsEx_FuncMap_QuestionName(objge_InspectionResultsEx);
    case clsge_InspectionResultsENEx.con_CourseId:
      return ge_InspectionResultsEx_FuncMap_CourseId(objge_InspectionResultsEx);
    case clsge_InspectionResultsENEx.con_ControlId:
      return ge_InspectionResultsEx_FuncMap_ControlId(objge_InspectionResultsEx);
    case clsge_InspectionResultsENEx.con_ControlClass:
      return ge_InspectionResultsEx_FuncMap_ControlClass(objge_InspectionResultsEx);
    case clsge_InspectionResultsENEx.con_ControlHtml:
      return ge_InspectionResultsEx_FuncMap_ControlHtml(objge_InspectionResultsEx);
    case clsge_InspectionResultsENEx.con_Describe:
      return ge_InspectionResultsEx_FuncMap_Describe(objge_InspectionResultsEx);
    case clsge_InspectionResultsENEx.con_ControlValue:
      return ge_InspectionResultsEx_FuncMap_ControlValue(objge_InspectionResultsEx);
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
 * 日期:2022-11-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_InspectionResultsEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_InspectionResults_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export async function ge_InspectionResultsEx_FuncMap_Describe(
  objge_InspectionResults: clsge_InspectionResultsENEx,
) {
  const strThisFuncName = ge_InspectionResultsEx_FuncMap_Describe.name;
  try {
    if (IsNullOrEmpty(objge_InspectionResults.describe) == true) {
      const ge_ExaminationCriteria_CriteriaId = objge_InspectionResults.criteriaId;
      const ge_ExaminationCriteria_Describe = await ge_ExaminationCriteria_func(
        clsge_ExaminationCriteriaEN.con_CriteriaId,
        clsge_ExaminationCriteriaEN.con_Describe,
        ge_ExaminationCriteria_CriteriaId,
        clsPubLocalStorage.courseId,
      );
      objge_InspectionResults.describe = ge_ExaminationCriteria_Describe;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000209)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export async function ge_InspectionResultsEx_FuncMap_QuestionName(
  objge_InspectionResults: clsge_InspectionResultsENEx,
) {
  const strThisFuncName = ge_InspectionResultsEx_FuncMap_QuestionName.name;
  try {
    const questionnaireStore = useQuestionnaireStore();
    if (IsNullOrEmpty(objge_InspectionResults.questionName) == true) {
      const Questionnaire_QuestionId = objge_InspectionResults.questionId;
      const Questionnaire_QuestionName = await questionnaireStore.getQuestionName(
        Questionnaire_QuestionId,
      );
      objge_InspectionResults.questionName = Questionnaire_QuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000191)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export async function ge_InspectionResultsEx_FuncMap_CourseId(
  objge_InspectionResults: clsge_InspectionResultsENEx,
) {
  const strThisFuncName = ge_InspectionResultsEx_FuncMap_CourseId.name;
  try {
    const questionnaireStore = useQuestionnaireStore();
    if (IsNullOrEmpty(objge_InspectionResults.courseId) == true) {
      const Questionnaire_QuestionId = objge_InspectionResults.questionId;
      const Questionnaire_CourseId = await questionnaireStore.getQuestionName(
        Questionnaire_QuestionId,
      );
      objge_InspectionResults.courseId = Questionnaire_CourseId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000203)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export async function ge_InspectionResultsEx_FuncMap_ControlHtml(
  objge_InspectionResults: clsge_InspectionResultsENEx,
) {
  const strThisFuncName = ge_InspectionResultsEx_FuncMap_ControlHtml.name;
  try {
    if (IsNullOrEmpty(objge_InspectionResults.controlHtml) == true) {
      const ge_ExaminationCriteria_CriteriaId = objge_InspectionResults.criteriaId;
      const ge_ExaminationCriteria_ControlHtml = await ge_ExaminationCriteria_func(
        clsge_ExaminationCriteriaEN.con_CriteriaId,
        clsge_ExaminationCriteriaEN.con_ControlHtml,
        ge_ExaminationCriteria_CriteriaId,
        clsPubLocalStorage.courseId,
      );
      objge_InspectionResults.controlHtml = ge_ExaminationCriteria_ControlHtml;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000210)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export async function ge_InspectionResultsEx_FuncMap_ControlId(
  objge_InspectionResults: clsge_InspectionResultsENEx,
) {
  const strThisFuncName = ge_InspectionResultsEx_FuncMap_ControlId.name;
  try {
    if (IsNullOrEmpty(objge_InspectionResults.controlId) == true) {
      const ge_ExaminationCriteria_CriteriaId = objge_InspectionResults.criteriaId;
      const ge_ExaminationCriteria_ControlId = await ge_ExaminationCriteria_func(
        clsge_ExaminationCriteriaEN.con_CriteriaId,
        clsge_ExaminationCriteriaEN.con_ControlId,
        ge_ExaminationCriteria_CriteriaId,
        clsPubLocalStorage.courseId,
      );
      objge_InspectionResults.controlId = ge_ExaminationCriteria_ControlId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000211)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export async function ge_InspectionResultsEx_FuncMap_ControlClass(
  objge_InspectionResults: clsge_InspectionResultsENEx,
) {
  const strThisFuncName = ge_InspectionResultsEx_FuncMap_ControlClass.name;
  try {
    if (IsNullOrEmpty(objge_InspectionResults.controlClass) == true) {
      const ge_ExaminationCriteria_CriteriaId = objge_InspectionResults.criteriaId;
      const ge_ExaminationCriteria_ControlClass = await ge_ExaminationCriteria_func(
        clsge_ExaminationCriteriaEN.con_CriteriaId,
        clsge_ExaminationCriteriaEN.con_ControlClass,
        ge_ExaminationCriteria_CriteriaId,
        clsPubLocalStorage.courseId,
      );
      objge_InspectionResults.controlClass = ge_ExaminationCriteria_ControlClass;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000212)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export async function ge_InspectionResultsEx_FuncMap_ControlValue(
  objge_InspectionResults: clsge_InspectionResultsENEx,
) {
  const strThisFuncName = ge_InspectionResultsEx_FuncMap_ControlValue.name;
  try {
    if (IsNullOrEmpty(objge_InspectionResults.controlValue) == true) {
      const ge_ExaminationCriteria_CriteriaId = objge_InspectionResults.criteriaId;
      const ge_ExaminationCriteria_ControlValue = await ge_ExaminationCriteria_func(
        clsge_ExaminationCriteriaEN.con_CriteriaId,
        clsge_ExaminationCriteriaEN.con_ControlValue,
        ge_ExaminationCriteria_CriteriaId,
        clsPubLocalStorage.courseId,
      );
      objge_InspectionResults.controlValue = ge_ExaminationCriteria_ControlValue;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000213)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_InspectionResultsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
