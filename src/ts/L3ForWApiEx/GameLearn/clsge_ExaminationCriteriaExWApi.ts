/**
* 类名:clsge_ExaminationCriteriaExWApi
* 表名:ge_ExaminationCriteria(01120898)
* 生成代码版本:2022.11.02.1
* 生成日期:2022/11/09 04:07:54
* 生成者:pyf
* 生成服务器IP:
工程名称:问卷调查(0112)
CM工程:游戏化教育平台(变量首字母小写)-全部函数集
* 相关数据库:103.116.76.183,9433EduHigh_Jsie
* PrjDataBaseId:0170
模块中文名:游戏化学习(GameLearn)
* 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
* 编程语言:TypeScript
* 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
  *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
**/

/**
 * 题目检查标准表(ge_ExaminationCriteria)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { ge_ExaminationCriteria_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsge_ExaminationCriteriaEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_ExaminationCriteriaENEx } from '@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaENEx';
import { ge_ExaminationCriteria_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import { ge_ExaminationCriteria_SortFunByKey } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { ge_ExaminationCriteria_FilterFunByKey } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsge_InspectionResultsENEx } from '@/ts/L0Entity/GameLearn/clsge_InspectionResultsENEx';
import { clsge_InspectionResultsEN } from '@/ts/L0Entity/GameLearn/clsge_InspectionResultsEN';
import { clsge_StuBatchQuesRelaEN } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN';
import axios from 'axios';
import { ge_InspectionResults_GetObjLstByJSONObjLst } from '@/ts/L3ForWApi/GameLearn/clsge_InspectionResultsWApi';
import { ge_StuBatchQuesRela_GetObjFromJsonObj } from '@/ts/L3ForWApi/InteractManage/clsge_StuBatchQuesRelaWApi';
export const ge_ExaminationCriteriaEx_Controller = 'ge_ExaminationCriteriaExApi';
export const ge_ExaminationCriteriaEx_ConstructorName = 'ge_ExaminationCriteriaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_ExaminationCriteriaEx_GetWebApiUrl(
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
 * @param objge_ExaminationCriteriaENS:源对象
 * @returns 目标对象=>clsge_ExaminationCriteriaEN:objge_ExaminationCriteriaENT
 **/
export function ge_ExaminationCriteriaEx_CopyToEx(
  objge_ExaminationCriteriaENS: clsge_ExaminationCriteriaEN,
): clsge_ExaminationCriteriaENEx {
  const strThisFuncName = ge_ExaminationCriteriaEx_CopyToEx.name;
  const objge_ExaminationCriteriaENT = new clsge_ExaminationCriteriaENEx();
  try {
    ObjectAssign(objge_ExaminationCriteriaENT, objge_ExaminationCriteriaENS);
    return objge_ExaminationCriteriaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_ExaminationCriteriaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_ExaminationCriteriaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_ExaminationCriteriaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsge_ExaminationCriteriaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrge_ExaminationCriteriaObjLst = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
  const arrge_ExaminationCriteriaExObjLst = arrge_ExaminationCriteriaObjLst.map(
    ge_ExaminationCriteriaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_ExaminationCriteriaExObjLst) {
      const conFuncMap = await ge_ExaminationCriteriaEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrge_ExaminationCriteriaExObjLst.length == 0) return arrge_ExaminationCriteriaExObjLst;
  let arrge_ExaminationCriteria_Sel: Array<clsge_ExaminationCriteriaENEx> =
    arrge_ExaminationCriteriaExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objge_ExaminationCriteria_Cond = new clsge_ExaminationCriteriaENEx();
  ObjectAssign(objge_ExaminationCriteria_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsge_ExaminationCriteriaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_ExaminationCriteria_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_ExaminationCriteria_Sel.length == 0) return arrge_ExaminationCriteria_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.sort(
        ge_ExaminationCriteriaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.sort(objPagerPara.sortFun);
    }
    arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.slice(intStart, intEnd);
    return arrge_ExaminationCriteria_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_ExaminationCriteriaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_ExaminationCriteriaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_ExaminationCriteriaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_ExaminationCriteriaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_ExaminationCriteriaObjLst = await ge_ExaminationCriteria_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_ExaminationCriteriaExObjLst = arrge_ExaminationCriteriaObjLst.map(
    ge_ExaminationCriteriaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_ExaminationCriteriaExObjLst) {
      const conFuncMap = await ge_ExaminationCriteriaEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrge_ExaminationCriteriaExObjLst.length == 0) return arrge_ExaminationCriteriaExObjLst;
  let arrge_ExaminationCriteria_Sel: Array<clsge_ExaminationCriteriaENEx> =
    arrge_ExaminationCriteriaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.sort(
        ge_ExaminationCriteriaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.sort(objPagerPara.sortFun);
    }
    arrge_ExaminationCriteria_Sel = arrge_ExaminationCriteria_Sel.slice(intStart, intEnd);
    return arrge_ExaminationCriteria_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_ExaminationCriteriaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_ExaminationCriteriaENEx>();
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
export function ge_ExaminationCriteriaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_ExaminationCriteria_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_ExaminationCriteria_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_ExaminationCriteriaEx_FuncMapByFldName(
  strFldName: string,
  objge_ExaminationCriteriaEx: clsge_ExaminationCriteriaENEx,
) {
  const strThisFuncName = ge_ExaminationCriteriaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_ExaminationCriteriaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
export async function ge_ExaminationCriteriaEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_ExaminationCriteria_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
/// </summary>
/// <param name = "objge_StuBatchQuesRelaEN">需要添加的表对象</param>
/// <returns>返回新添加记录的关键字</returns>
export async function ge_ExaminationCriteriaEx_GetChapterNameByGameLevelIdEx(
  gameLevelId: string,
): Promise<string> {
  const strThisFuncName = 'GetChapterNameByGameLevelIdEx';
  const strAction = 'GetChapterNameByGameLevelIdEx';

  let strUrl = ge_ExaminationCriteriaEx_GetWebApiUrl(
    ge_ExaminationCriteriaEx_Controller,
    strAction,
  );
  try {
    const response = await axios.get(strUrl, {
      params: { gameLevelId: gameLevelId },
    });
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function ge_ExaminationCriteriaEx_InspectionResultsEx(
  objge_InspectionResultsEN: clsge_InspectionResultsENEx,
): Promise<Array<clsge_InspectionResultsEN>> {
  const strThisFuncName = 'InspectionResultsEx';
  const strAction = 'Getge_InspectionResultsEx';
  let strUrl = ge_ExaminationCriteriaEx_GetWebApiUrl(
    ge_ExaminationCriteriaEx_Controller,
    strAction,
  );

  try {
    const response = await axios.post(strUrl, objge_InspectionResultsEN);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ge_ExaminationCriteriaEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ge_InspectionResults_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
//  (string userId, string QuestionId, string courseId, string controlHtml, string controlId, string controlClass, string controlValue)
//public static Getge_InspectionResultsByExamTypeEx(userId: string, QuestionId: number, examBatchNo: string, courseId: string, controlHtml: string, result: string): Promise<Array<clsge_InspectionResultsEN>> {
//
export async function ge_ExaminationCriteriaEx_Getge_InspectionResultsByExamTypeEx(
  objge_InspectionResultsEN: clsge_InspectionResultsENEx,
): Promise<Array<clsge_InspectionResultsEN>> {
  const strThisFuncName = 'Getge_InspectionResultsByExamTypeEx';
  const strAction = 'Getge_InspectionResultsByExamTypeEx';
  let strUrl = ge_ExaminationCriteriaEx_GetWebApiUrl(
    ge_ExaminationCriteriaEx_Controller,
    strAction,
  );

  try {
    const response = await axios.post(strUrl, objge_InspectionResultsEN);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ge_ExaminationCriteriaEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ge_InspectionResults_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象</returns>
export async function ge_ExaminationCriteriaEx_GetObjByParaEx(
  userId: string,
  idCurrEduCls: string,
): Promise<clsge_StuBatchQuesRelaEN | null> {
  const strThisFuncName = 'GetObjByParaEx';
  const strAction = 'GetObjByParaEx';
  let strUrl = ge_ExaminationCriteriaEx_GetWebApiUrl(
    ge_ExaminationCriteriaEx_Controller,
    strAction,
  );
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('userId', userId);
  mapParam.add('idCurrEduCls', idCurrEduCls);
  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        userId: userId,
        idCurrEduCls: idCurrEduCls,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objQxUsers = ge_StuBatchQuesRela_GetObjFromJsonObj(returnObj);
      return objQxUsers;
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
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

//题目全部批次，更改批次表
export async function ge_ExaminationCriteriaEx_SubmitQuestionEx(
  objge_InspectionResultsEN: clsge_InspectionResultsENEx,
): Promise<boolean> {
  const strThisFuncName = '';
  const strAction = 'SubmitQuestionEx';
  let strUrl = ge_ExaminationCriteriaEx_GetWebApiUrl(
    ge_ExaminationCriteriaEx_Controller,
    strAction,
  );

  try {
    const response = await axios.post(strUrl, objge_InspectionResultsEN);
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
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

//单个操作题目提交
export async function ge_ExaminationCriteriaEx_SubmitAllQuestionEx(
  objge_InspectionResultsEN: clsge_InspectionResultsENEx,
): Promise<boolean> {
  const strThisFuncName = 'SubmitAllQuestionEx';
  const strAction = 'SubmitAllQuestionEx';
  let strUrl = ge_ExaminationCriteriaEx_GetWebApiUrl(
    ge_ExaminationCriteriaEx_Controller,
    strAction,
  );

  //const objge_InspectionResultsEN_Sim = this.GetSimObjFromObj(objge_InspectionResultsEN);
  //const strJSON = JSON.stringify(objge_InspectionResultsEN_Sim);
  //let strUrl = ge_ExaminationCriteriaEx_GetWebApiUrl(ge_ExaminationCriteriaEx_Controller, strAction);

  try {
    const response = await axios.post(strUrl, objge_InspectionResultsEN);
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
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_ExaminationCriteriaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
