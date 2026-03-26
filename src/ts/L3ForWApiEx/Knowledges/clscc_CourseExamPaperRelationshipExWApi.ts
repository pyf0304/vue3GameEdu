//import $ from "jquery";
import { clscc_CourseExamPaperRelationshipEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperRelationshipEN';
import { clscc_CourseExamPaperRelationshipENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperRelationshipENEx';
import {
  cc_CourseExamPaperRelationship_FilterFunByKey,
  cc_CourseExamPaperRelationship_GetObjLstAsync,
  cc_CourseExamPaperRelationship_SortFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperRelationshipWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clscc_CourseEN } from 'share-stu-study-base-lib';
import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';

import { cc_Course_func } from 'share-stu-study-base-lib';
import { cc_CourseExamPaper_func } from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperWApi';

import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';

export const cc_CourseExamPaperRelationshipEx_Controller = 'cc_CourseExamPaperRelationshipExApi';
export const cc_CourseExamPaperRelationshipEx_ConstructorName = 'cc_CourseExamPaperRelationshipEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_CourseExamPaperRelationshipEx_GetWebApiUrl(
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
 * @param objcc_CourseExamPaperRelationshipENS:源对象
 * @returns 目标对象=>clscc_CourseExamPaperRelationshipEN:objcc_CourseExamPaperRelationshipENT
 **/
export function cc_CourseExamPaperRelationshipEx_CopyToEx(
  objcc_CourseExamPaperRelationshipENS: clscc_CourseExamPaperRelationshipEN,
): clscc_CourseExamPaperRelationshipENEx {
  const strThisFuncName = cc_CourseExamPaperRelationshipEx_CopyToEx.name;
  const objcc_CourseExamPaperRelationshipENT = new clscc_CourseExamPaperRelationshipENEx();
  try {
    ObjectAssign(objcc_CourseExamPaperRelationshipENT, objcc_CourseExamPaperRelationshipENS);
    return objcc_CourseExamPaperRelationshipENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseExamPaperRelationshipEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseExamPaperRelationshipENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseExamPaperRelationshipEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseExamPaperRelationshipENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_CourseExamPaperRelationshipObjLst =
    await cc_CourseExamPaperRelationship_GetObjLstAsync(objPagerPara.whereCond);
  const arrcc_CourseExamPaperRelationshipExObjLst = arrcc_CourseExamPaperRelationshipObjLst.map(
    cc_CourseExamPaperRelationshipEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrcc_CourseExamPaperRelationshipExObjLst) {
      const conFuncMap = await cc_CourseExamPaperRelationshipEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrcc_CourseExamPaperRelationshipExObjLst.length == 0)
    return arrcc_CourseExamPaperRelationshipExObjLst;
  let arrcc_CourseExamPaperRelationship_Sel: Array<clscc_CourseExamPaperRelationshipENEx> =
    arrcc_CourseExamPaperRelationshipExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseExamPaperRelationship_Sel = arrcc_CourseExamPaperRelationship_Sel.sort(
        cc_CourseExamPaperRelationshipEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcc_CourseExamPaperRelationship_Sel = arrcc_CourseExamPaperRelationship_Sel.sort(
        objPagerPara.sortFun,
      );
    }
    arrcc_CourseExamPaperRelationship_Sel = arrcc_CourseExamPaperRelationship_Sel.slice(
      intStart,
      intEnd,
    );
    return arrcc_CourseExamPaperRelationship_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseExamPaperRelationshipEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseExamPaperRelationshipENEx>();
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
export function cc_CourseExamPaperRelationshipEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return cc_CourseExamPaperRelationship_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return cc_CourseExamPaperRelationship_SortFunByKey(strKey, AscOrDesc);
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
export function cc_CourseExamPaperRelationshipEx_FuncMapByFldName(
  strFldName: string,
  objcc_CourseExamPaperRelationshipEx: clscc_CourseExamPaperRelationshipENEx,
) {
  const strThisFuncName = cc_CourseExamPaperRelationshipEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscc_CourseExamPaperRelationshipEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_CourseExamPaperRelationshipENEx.con_ExamPaperName:
      return cc_CourseExamPaperRelationshipEx_FuncMap_ExamPaperName(
        objcc_CourseExamPaperRelationshipEx,
      );
    case clscc_CourseExamPaperRelationshipENEx.con_CourseName:
      return cc_CourseExamPaperRelationshipEx_FuncMap_CourseName(
        objcc_CourseExamPaperRelationshipEx,
      );
    case clscc_CourseExamPaperRelationshipENEx.con_QuestionName:
      return cc_CourseExamPaperRelationshipEx_FuncMap_QuestionName(
        objcc_CourseExamPaperRelationshipEx,
      );
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
export async function cc_CourseExamPaperRelationshipEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return cc_CourseExamPaperRelationship_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseExamPaperRelationshipS:源对象
 **/
export async function cc_CourseExamPaperRelationshipEx_FuncMap_ExamPaperName(
  objcc_CourseExamPaperRelationship: clscc_CourseExamPaperRelationshipENEx,
) {
  const strThisFuncName = cc_CourseExamPaperRelationshipEx_FuncMap_ExamPaperName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseExamPaperRelationship.examPaperName) == true) {
      const cc_CourseExamPaper_CourseExamPaperId =
        objcc_CourseExamPaperRelationship.courseExamPaperId;
      const cc_CourseExamPaper_ExamPaperName = await cc_CourseExamPaper_func(
        clscc_CourseExamPaperEN.con_CourseExamPaperId,
        clscc_CourseExamPaperEN.con_ExamPaperName,
        cc_CourseExamPaper_CourseExamPaperId,
        objcc_CourseExamPaperRelationship.courseId,
      );
      objcc_CourseExamPaperRelationship.examPaperName = cc_CourseExamPaper_ExamPaperName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000202)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseExamPaperRelationshipEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseExamPaperRelationshipS:源对象
 **/
export async function cc_CourseExamPaperRelationshipEx_FuncMap_CourseName(
  objcc_CourseExamPaperRelationship: clscc_CourseExamPaperRelationshipENEx,
) {
  const strThisFuncName = cc_CourseExamPaperRelationshipEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseExamPaperRelationship.courseName) == true) {
      const cc_Course_CourseId = objcc_CourseExamPaperRelationship.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objcc_CourseExamPaperRelationship.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseExamPaperRelationshipEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseExamPaperRelationshipS:源对象
 **/
export async function cc_CourseExamPaperRelationshipEx_FuncMap_QuestionName(
  objcc_CourseExamPaperRelationship: clscc_CourseExamPaperRelationshipENEx,
) {
  const strThisFuncName = cc_CourseExamPaperRelationshipEx_FuncMap_QuestionName.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objcc_CourseExamPaperRelationship.questionName) == true) {
      const Questionnaire_QuestionId = objcc_CourseExamPaperRelationship.questionId;
      const Questionnaire_QuestionName = await questionnaireStore.getQuestionName(
        Questionnaire_QuestionId,
      );
      objcc_CourseExamPaperRelationship.questionName = Questionnaire_QuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000191)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseExamPaperRelationshipEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
