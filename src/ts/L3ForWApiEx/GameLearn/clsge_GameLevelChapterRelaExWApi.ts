//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { ge_GameLevelChapterRela_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_GameLevelChapterRelaWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsge_GameLevelChapterRelaEN } from '@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_GameLevelChapterRelaENEx } from '@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaENEx';
import { ge_GameLevelChapterRela_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_GameLevelChapterRelaWApi';
import { ge_GameLevelChapterRela_SortFunByKey } from '@/ts/L3ForWApi/GameLearn/clsge_GameLevelChapterRelaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { ge_GameLevelChapterRela_FilterFunByKey } from '@/ts/L3ForWApi/GameLearn/clsge_GameLevelChapterRelaWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import axios from 'axios';
export const ge_GameLevelChapterRelaEx_Controller = 'ge_GameLevelChapterRelaExApi';
export const ge_GameLevelChapterRelaEx_ConstructorName = 'ge_GameLevelChapterRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_GameLevelChapterRelaEx_GetWebApiUrl(
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
 * @param objge_GameLevelChapterRelaENS:源对象
 * @returns 目标对象=>clsge_GameLevelChapterRelaEN:objge_GameLevelChapterRelaENT
 **/
export function ge_GameLevelChapterRelaEx_CopyToEx(
  objge_GameLevelChapterRelaENS: clsge_GameLevelChapterRelaEN,
): clsge_GameLevelChapterRelaENEx {
  const strThisFuncName = ge_GameLevelChapterRelaEx_CopyToEx.name;
  const objge_GameLevelChapterRelaENT = new clsge_GameLevelChapterRelaENEx();
  try {
    ObjectAssign(objge_GameLevelChapterRelaENT, objge_GameLevelChapterRelaENS);
    return objge_GameLevelChapterRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelChapterRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_GameLevelChapterRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_GameLevelChapterRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsge_GameLevelChapterRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrge_GameLevelChapterRelaObjLst = await ge_GameLevelChapterRela_GetObjLstCache(
    strCourseId,
  );
  const arrge_GameLevelChapterRelaExObjLst = arrge_GameLevelChapterRelaObjLst.map(
    ge_GameLevelChapterRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_GameLevelChapterRelaExObjLst) {
      const conFuncMap = await ge_GameLevelChapterRelaEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrge_GameLevelChapterRelaExObjLst.length == 0) return arrge_GameLevelChapterRelaExObjLst;
  let arrge_GameLevelChapterRela_Sel: Array<clsge_GameLevelChapterRelaENEx> =
    arrge_GameLevelChapterRelaExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objge_GameLevelChapterRela_Cond = new clsge_GameLevelChapterRelaENEx();
  ObjectAssign(objge_GameLevelChapterRela_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsge_GameLevelChapterRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_GameLevelChapterRela_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_GameLevelChapterRela_Sel.length == 0) return arrge_GameLevelChapterRela_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.sort(
        ge_GameLevelChapterRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.sort(objPagerPara.sortFun);
    }
    arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.slice(intStart, intEnd);
    return arrge_GameLevelChapterRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_GameLevelChapterRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_GameLevelChapterRelaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_GameLevelChapterRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_GameLevelChapterRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_GameLevelChapterRelaObjLst = await ge_GameLevelChapterRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_GameLevelChapterRelaExObjLst = arrge_GameLevelChapterRelaObjLst.map(
    ge_GameLevelChapterRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_GameLevelChapterRelaExObjLst) {
      const conFuncMap = await ge_GameLevelChapterRelaEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrge_GameLevelChapterRelaExObjLst.length == 0) return arrge_GameLevelChapterRelaExObjLst;
  let arrge_GameLevelChapterRela_Sel: Array<clsge_GameLevelChapterRelaENEx> =
    arrge_GameLevelChapterRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.sort(
        ge_GameLevelChapterRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.sort(objPagerPara.sortFun);
    }
    arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela_Sel.slice(intStart, intEnd);
    return arrge_GameLevelChapterRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_GameLevelChapterRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_GameLevelChapterRelaENEx>();
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
export function ge_GameLevelChapterRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_GameLevelChapterRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_GameLevelChapterRela_SortFunByKey(strKey, AscOrDesc);
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
export function ge_GameLevelChapterRelaEx_FuncMapByFldName(
  strFldName: string,
  objge_GameLevelChapterRelaEx: clsge_GameLevelChapterRelaENEx,
) {
  const strThisFuncName = ge_GameLevelChapterRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_GameLevelChapterRelaEN.AttributeName;
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
export async function ge_GameLevelChapterRelaEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_GameLevelChapterRela_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
/// </summary>
/// <param name = "objge_StuBatchQuesRelaEN">需要添加的表对象</param>
/// <returns>返回新添加记录的关键字</returns>
export async function ge_GameLevelChapterRelaEx_GetObjLstByGameLevelIdEx(
  gameLevelId: string,
): Promise<Array<clsge_GameLevelChapterRelaEN>> {
  const strThisFuncName = 'GetObjLstByGameLevelIdEx';
  const arrge_GameLevelChapterRela = await ge_GameLevelChapterRela_GetObjLstCache(
    clsPubLocalStorage.courseId,
  );
  const arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela.filter(
    (x) => x.gameLevelId == gameLevelId,
  );
  return arrge_GameLevelChapterRela_Sel;
}

/**
 * 添加记录
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param objge_GameLevelChapterRelaEN: 关卡章节关系
 * @returns 获取的相应对象列表
 */
export async function ge_GameLevelChapterRelaEx_AddNewRecordEx(
  objge_GameLevelChapterRelaEN: clsge_GameLevelChapterRelaEN,
): Promise<boolean> {
  const strThisFuncName = ge_GameLevelChapterRelaEx_AddNewRecordEx.name;
  const strAction = 'AddNewRecordEx';
  const strUrl = ge_GameLevelChapterRelaEx_GetWebApiUrl(
    ge_GameLevelChapterRelaEx_Controller,
    strAction,
  );
  try {
    const response = await axios.post(strUrl, objge_GameLevelChapterRelaEN);
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
        ge_GameLevelChapterRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_GameLevelChapterRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 扩展删除
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strGameLevelId: 关卡Id
 * @param strCourseChapterId: 章节Id
 * @returns 获取的相应对象列表
 */
export async function ge_GameLevelChapterRelaEx_DelRecordEx(
  strGameLevelId: string,
  strCourseChapterId: string,
): Promise<number> {
  const strThisFuncName = ge_GameLevelChapterRelaEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = ge_GameLevelChapterRelaEx_GetWebApiUrl(
    ge_GameLevelChapterRelaEx_Controller,
    strAction,
  );
  try {
    const response = await axios.get(strUrl, {
      params: {
        strGameLevelId: strGameLevelId,
        strCourseChapterId: strCourseChapterId,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        ge_GameLevelChapterRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_GameLevelChapterRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
