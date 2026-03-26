/**
 * 类名:clscc_KnowledgesExamLibRelaExWApi
 * 表名:cc_KnowledgesExamLibRela(01120140)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/05 22:14:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点习题关系(cc_KnowledgesExamLibRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  cc_KnowledgesExamLibRela_GetObjLstCache,
  cc_KnowledgesExamLibRela_GetObjLstAsync,
  cc_KnowledgesExamLibRela_SortFunByKey,
  cc_KnowledgesExamLibRela_FilterFunByKey,
  cc_KnowledgesExamLibRela_AddNewObjSave,
  cc_KnowledgesExamLibRela_GetFldValueAsync,
} from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import { clscc_KnowledgesExamLibRelaENEx } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaENEx';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import {
  cc_CourseKnowledges_func,
  cc_CourseKnowledges_funcKey,
  cc_CourseKnowledges_GetFirstObjAsync,
  cc_CourseKnowledges_GetFldValueAsync,
  cc_CourseKnowledges_GetObjLstAsync,
} from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { vQuestionnaire_Sim_funcKey } from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { useUserStore } from '@/store/modulesShare/user';
import { clsQuestionnaire } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaire';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';

export const cc_KnowledgesExamLibRelaEx_Controller = 'cc_KnowledgesExamLibRelaExApi';
export const cc_KnowledgesExamLibRelaEx_ConstructorName = 'cc_KnowledgesExamLibRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_KnowledgesExamLibRelaEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objcc_KnowledgesExamLibRelaENS:源对象
 * @returns 目标对象=>clscc_KnowledgesExamLibRelaEN:objcc_KnowledgesExamLibRelaENT
 **/
export function cc_KnowledgesExamLibRelaEx_CopyToEx(
  objcc_KnowledgesExamLibRelaENS: clscc_KnowledgesExamLibRelaEN,
): clscc_KnowledgesExamLibRelaENEx {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_CopyToEx.name;
  const objcc_KnowledgesExamLibRelaENT = new clscc_KnowledgesExamLibRelaENEx();
  try {
    ObjectAssign(objcc_KnowledgesExamLibRelaENT, objcc_KnowledgesExamLibRelaENS);
    return objcc_KnowledgesExamLibRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_KnowledgesExamLibRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_KnowledgesExamLibRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clscc_KnowledgesExamLibRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrcc_KnowledgesExamLibRelaObjLst = await cc_KnowledgesExamLibRela_GetObjLstCache(
    strCourseId,
  );
  const arrcc_KnowledgesExamLibRelaExObjLst = arrcc_KnowledgesExamLibRelaObjLst.map(
    cc_KnowledgesExamLibRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_KnowledgesExamLibRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_KnowledgesExamLibRelaExObjLst) {
      await cc_KnowledgesExamLibRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_KnowledgesExamLibRelaExObjLst.length == 0) return arrcc_KnowledgesExamLibRelaExObjLst;
  let arrcc_KnowledgesExamLibRelaSel: Array<clscc_KnowledgesExamLibRelaENEx> =
    arrcc_KnowledgesExamLibRelaExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objcc_KnowledgesExamLibRelaCond = new clscc_KnowledgesExamLibRelaENEx();
  ObjectAssign(objcc_KnowledgesExamLibRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clscc_KnowledgesExamLibRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_KnowledgesExamLibRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_KnowledgesExamLibRelaSel.length == 0) return arrcc_KnowledgesExamLibRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.sort(
        cc_KnowledgesExamLibRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.sort(objPagerPara.sortFun);
    }
    arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.slice(intStart, intEnd);
    return arrcc_KnowledgesExamLibRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_KnowledgesExamLibRelaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_KnowledgesExamLibRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_KnowledgesExamLibRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_KnowledgesExamLibRelaObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcc_KnowledgesExamLibRelaExObjLst = arrcc_KnowledgesExamLibRelaObjLst.map(
    cc_KnowledgesExamLibRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_KnowledgesExamLibRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcc_KnowledgesExamLibRelaExObjLst) {
      await cc_KnowledgesExamLibRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_KnowledgesExamLibRelaExObjLst.length == 0) return arrcc_KnowledgesExamLibRelaExObjLst;
  let arrcc_KnowledgesExamLibRelaSel: Array<clscc_KnowledgesExamLibRelaENEx> =
    arrcc_KnowledgesExamLibRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.sort(
        cc_KnowledgesExamLibRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.sort(objPagerPara.sortFun);
    }
    arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.slice(intStart, intEnd);
    return arrcc_KnowledgesExamLibRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_KnowledgesExamLibRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMapCourseName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
) {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.courseName) == true) {
      const vccCourseSimCourseId = objcc_KnowledgesExamLibRela.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objcc_KnowledgesExamLibRela.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMapKnowledgeName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
) {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMapKnowledgeName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.knowledgeName) == true) {
      const ccCourseKnowledgesCourseKnowledgeId = objcc_KnowledgesExamLibRela.courseKnowledgeId;
      const ccCourseKnowledgesKnowledgeName = await cc_CourseKnowledges_func(
        clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
        clscc_CourseKnowledgesEN.con_KnowledgeName,
        ccCourseKnowledgesCourseKnowledgeId,
        objcc_KnowledgesExamLibRela.courseId,
      );
      objcc_KnowledgesExamLibRela.knowledgeName = ccCourseKnowledgesKnowledgeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000453)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMapQuestionName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
) {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMapQuestionName.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.questionName) == true) {
      const vQuestionnaireSimQuestionId = objcc_KnowledgesExamLibRela.questionId;
      const vQuestionnaireSimQuestionName = await questionnaireStore.getQuestionName(
        vQuestionnaireSimQuestionId,
      );
      objcc_KnowledgesExamLibRela.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000498)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_KnowledgesExamLibRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_KnowledgesExamLibRelaENEx.con_QuestionName:
        return (a: clscc_KnowledgesExamLibRelaENEx, b: clscc_KnowledgesExamLibRelaENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeName:
        return (a: clscc_KnowledgesExamLibRelaENEx, b: clscc_KnowledgesExamLibRelaENEx) => {
          return a.knowledgeName.localeCompare(b.knowledgeName);
        };
      case clscc_KnowledgesExamLibRelaENEx.con_CourseName:
        return (a: clscc_KnowledgesExamLibRelaENEx, b: clscc_KnowledgesExamLibRelaENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      default:
        return cc_KnowledgesExamLibRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_KnowledgesExamLibRelaENEx.con_QuestionName:
        return (a: clscc_KnowledgesExamLibRelaENEx, b: clscc_KnowledgesExamLibRelaENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeName:
        return (a: clscc_KnowledgesExamLibRelaENEx, b: clscc_KnowledgesExamLibRelaENEx) => {
          return b.knowledgeName.localeCompare(a.knowledgeName);
        };
      case clscc_KnowledgesExamLibRelaENEx.con_CourseName:
        return (a: clscc_KnowledgesExamLibRelaENEx, b: clscc_KnowledgesExamLibRelaENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      default:
        return cc_KnowledgesExamLibRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-02-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_KnowledgesExamLibRelaEx_FuncMapByFldName(
  strFldName: string,
  objcc_KnowledgesExamLibRelaEx: clscc_KnowledgesExamLibRelaENEx,
) {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_KnowledgesExamLibRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_KnowledgesExamLibRelaENEx.con_QuestionName:
      return cc_KnowledgesExamLibRelaEx_FuncMapQuestionName(objcc_KnowledgesExamLibRelaEx);
    case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeName:
      return cc_KnowledgesExamLibRelaEx_FuncMapKnowledgeName(objcc_KnowledgesExamLibRelaEx);
    case clscc_KnowledgesExamLibRelaENEx.con_CourseName:
      return cc_KnowledgesExamLibRelaEx_FuncMapCourseName(objcc_KnowledgesExamLibRelaEx);
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
 * 日期:2024-02-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_KnowledgesExamLibRelaEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_KnowledgesExamLibRelaENEx.con_QuestionName:
      return (obj: clscc_KnowledgesExamLibRelaENEx) => {
        return obj.questionName === value;
      };
    case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeName:
      return (obj: clscc_KnowledgesExamLibRelaENEx) => {
        return obj.knowledgeName === value;
      };
    case clscc_KnowledgesExamLibRelaENEx.con_CourseName:
      return (obj: clscc_KnowledgesExamLibRelaENEx) => {
        return obj.courseName === value;
      };
    default:
      return cc_KnowledgesExamLibRela_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMapKeyCourseName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.courseName) == true) return [];
    const vccCourseSimCourseName = objcc_KnowledgesExamLibRela.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
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
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMapKeyKnowledgeName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMapKeyKnowledgeName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.knowledgeName) == true) return [];
    const ccCourseKnowledgesKnowledgeName = objcc_KnowledgesExamLibRela.knowledgeName;
    const arrCourseKnowledgeId = await cc_CourseKnowledges_funcKey(
      clscc_CourseKnowledgesEN.con_KnowledgeName,
      ccCourseKnowledgesKnowledgeName,
      objcc_KnowledgesExamLibRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseKnowledgeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000453)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
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
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMapKeyQuestionName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
): Promise<Array<number>> {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMapKeyQuestionName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.questionName) == true) return [];
    const vQuestionnaireSimQuestionName = objcc_KnowledgesExamLibRela.questionName;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionName,
      vQuestionnaireSimQuestionName,
      objcc_KnowledgesExamLibRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000498)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function cc_KnowledgesExamLibRelaEx_GetObjLstByCourseKnowledgeId(
  strCourseKnowledgeId: string,
): Promise<Array<clscc_KnowledgesExamLibRelaEN>> {
  const strThisFuncName = 'cc_KnowledgesExamLibRelaEx_GetObjLstByCourseKnowledgeId';
  const strWhere = `${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} = '${strCourseKnowledgeId}'`;
  const arrcc_KnowledgesExamLibRelaObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(strWhere);
  return arrcc_KnowledgesExamLibRelaObjLst;
}

export async function cc_KnowledgesExamLibRelaEx_GetQuestionIdLstByCourseKnowledgeId(
  strCourseKnowledgeId: string,
): Promise<Array<clscc_KnowledgesExamLibRelaEN>> {
  const strThisFuncName = 'cc_KnowledgesExamLibRelaEx_GetQuestionIdLstByCourseKnowledgeId';
  const strWhere = `${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} = '${strCourseKnowledgeId}'`;
  const arrcc_KnowledgesExamLibRelaObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(strWhere);
  return arrcc_KnowledgesExamLibRelaObjLst;
}

export async function cc_KnowledgesExamLibRelaEx_GetObjLstByQuestionId(
  strQuestionId: number,
): Promise<Array<clscc_KnowledgesExamLibRelaEN>> {
  const strThisFuncName = 'cc_KnowledgesExamLibRelaEx_GetObjLstBystrQuestionId';
  const strWhere = `${clscc_KnowledgesExamLibRelaEN.con_QuestionId} = '${strQuestionId}'`;
  const arrcc_KnowledgesExamLibRelaObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(strWhere);
  return arrcc_KnowledgesExamLibRelaObjLst;
}

export async function cc_KnowledgesExamLibRelaEx_GetKnowledgeObjByQuestionId(
  strQuestionId: number,
): Promise<clscc_CourseKnowledgesEN_T | null> {
  const strThisFuncName = 'cc_KnowledgesExamLibRelaEx_GetKnowledgeObjByQuestionId';
  const strWhere = `${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} in (select ${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} from ${clscc_KnowledgesExamLibRelaEN._CurrTabName} where ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} = '${strQuestionId}' and ismain='1')`;
  const objcc_Knowledges = await cc_CourseKnowledges_GetFirstObjAsync(strWhere);
  return objcc_Knowledges;
}

export async function cc_KnowledgesExamLibRelaEx_GetKnowledgeIdLstByQuestionTypeId(
  strQuestionTypeId: string,
  strCourseId: string,
): Promise<Array<string>> {
  const strThisFuncName = 'cc_KnowledgesExamLibRelaEx_GetKnowledgeIdLstByQuestionTypeId';
  const strWhere = `${clscc_KnowledgesExamLibRelaEN.con_QuestionId} in (select ${clsQuestionnaireEN.con_QuestionId} from ${clsQuestionnaireEN._CurrTabName} where ${clsQuestionnaireEN.con_QuestionTypeId} = '${strQuestionTypeId}' and ${clsQuestionnaireEN.con_CourseId}= '${strCourseId}')`;
  const arrcon_CourseKnowledgeId = await cc_KnowledgesExamLibRela_GetFldValueAsync(
    clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId,
    strWhere,
  );
  return arrcon_CourseKnowledgeId;
}
export async function cc_KnowledgesExamLibRelaEx_GetKnowledgeIdLstByQuestionId(
  strQuestionId: number,
): Promise<Array<string>> {
  const strThisFuncName = 'cc_KnowledgesExamLibRelaEx_GetKnowledgeObjByQuestionId';
  const strWhere = ` ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} = '${strQuestionId}' `; //order By ismain desc`;
  const arrKnowledgeId = await cc_KnowledgesExamLibRela_GetFldValueAsync(
    clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId,
    strWhere,
  );
  return arrKnowledgeId;
}

/**
 * 根据知识点和难度随机获取5道题
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCourseKnowledgeId: 知识点Id
 * @param strDifficultyLevelId: 难度Id
 * @returns 获取的相应对象列表
 */
export async function cc_KnowledgesExamLibRelaEx_GetQuestionIdLstByCourseKnowledgeIdAndDiff(
  strCourseKnowledgeId: string,
  strDifficultyLevelId: string,
): Promise<Array<string>> {
  const strThisFuncName =
    cc_KnowledgesExamLibRelaEx_GetQuestionIdLstByCourseKnowledgeIdAndDiff.name;
  const strAction = 'GetQuestionIdLstByCourseKnowledgeId';
  const strUrl = cc_KnowledgesExamLibRelaEx_GetWebApiUrl(
    cc_KnowledgesExamLibRelaEx_Controller,
    strAction,
  );
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseKnowledgeId,
      strDifficultyLevelId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnStrLst = data.returnStrLst.split(',');
      //console.log("returnStrLst", returnStrLst);
      return returnStrLst;
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
        cc_KnowledgesExamLibRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        cc_KnowledgesExamLibRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 函数功能:把界面上的属性数据传到类对象中
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
 * @param pobjcc_KnowledgesExamLibRelaEN">数据传输的目的类对象</param>
 **/
export async function cc_KnowledgesExamLibRelaEx_GetEditDatacc_KnowledgesExamLibRelaObj(
  questionId: number,
  courseKnowledgeId: string,
  isMain: boolean,
) {
  const userStore = useUserStore();
  const pobjcc_KnowledgesExamLibRelaEN = new clscc_KnowledgesExamLibRelaEN();
  pobjcc_KnowledgesExamLibRelaEN.SetCourseId(clsPubLocalStorage.courseId); // 课程
  pobjcc_KnowledgesExamLibRelaEN.SetQuestionId(questionId); // 题目
  pobjcc_KnowledgesExamLibRelaEN.SetCourseKnowledgeId(courseKnowledgeId); // 知识点Id
  pobjcc_KnowledgesExamLibRelaEN.SetIsMain(isMain); // 是否主知识点
  pobjcc_KnowledgesExamLibRelaEN.SetPositiveCorrelation(0.8); // 正相关度
  pobjcc_KnowledgesExamLibRelaEN.SetNegativeCorrelation(0.2); // 负相关度
  pobjcc_KnowledgesExamLibRelaEN.SetMemo('学生通过扔一个添加'); // 备注
  pobjcc_KnowledgesExamLibRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  pobjcc_KnowledgesExamLibRelaEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  return pobjcc_KnowledgesExamLibRelaEN;
}

export async function cc_KnowledgesExamLibRelaEx_AddNewRela(
  questionId: number,
  courseKnowledgeId: string,
  isMain: boolean,
): Promise<string> {
  //扔瓶子
  // objEdit_cc_KnowledgesExamLibRela.isShowMsg = false;
  try {
    const objcc_KnowledgesExamLibRelaEN =
      await cc_KnowledgesExamLibRelaEx_GetEditDatacc_KnowledgesExamLibRelaObj(
        questionId,
        courseKnowledgeId,
        isMain,
      );
    const returnKeyId_cc_KnowledgesExamLibRela = await cc_KnowledgesExamLibRela_AddNewObjSave(
      objcc_KnowledgesExamLibRelaEN,
    );

    if (returnKeyId_cc_KnowledgesExamLibRela.success == false) {
      const strInfo = '扔瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
      console.log(strInfo);
      alert(strInfo);
      return '';
    }
    return returnKeyId_cc_KnowledgesExamLibRela.keyword;
  } catch (e) {
    const strInfo = '获取扔瓶子数据出错！(In Questionnaire_Edit.btnSubmit_Click)';
    console.log(strInfo);
    alert(strInfo);
    return '';
  }
}

export async function cc_KnowledgesExamLibRelaEx_GetKnowledgeNameLstByQuestionId(
  strQuestionId: number,
): Promise<Array<string>> {
  const strThisFuncName = 'cc_KnowledgesExamLibRelaEx_GetKnowledgeObjByQuestionId';
  const strWhere = `${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} in (select ${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} from ${clscc_KnowledgesExamLibRelaEN._CurrTabName} where ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} = '${strQuestionId}' and ismain='1')`;
  const arrcc_Knowledges: Array<clscc_CourseKnowledgesEN_T> =
    await cc_CourseKnowledges_GetObjLstAsync(strWhere);
  const arrKnowledgeName = arrcc_Knowledges.map((x) => x.knowledgeName);
  return arrKnowledgeName;
}

export async function cc_KnowledgesExamLibRelaEx_GetKnowledgeObjLstByQuestionId(
  strQuestionId: number,
): Promise<Array<clscc_CourseKnowledgesEN_T>> {
  const strThisFuncName = 'cc_KnowledgesExamLibRelaEx_GetKnowledgeObjLstByQuestionId';
  const strWhere = `${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} in (select ${clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId} from ${clscc_KnowledgesExamLibRelaEN._CurrTabName} where ${clscc_KnowledgesExamLibRelaEN.con_QuestionId} = '${strQuestionId}' and ismain='1')`;
  const objcc_Knowledges = await cc_CourseKnowledges_GetObjLstAsync(strWhere);
  return objcc_Knowledges;
}
