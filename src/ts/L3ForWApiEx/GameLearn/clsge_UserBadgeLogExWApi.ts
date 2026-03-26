import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { clsBadgeTypeEN } from '@/ts/L0Entity/GameLearn/clsBadgeTypeEN';
import { clsge_UserBadgeLogEN } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeLogEN';
import { clsge_UserBadgeLogENEx } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeLogENEx';

import { BadgeType_func } from '@/ts/L3ForWApi/GameLearn/clsBadgeTypeWApi';
import {
  ge_UserBadgeLog_FilterFunByKey,
  ge_UserBadgeLog_GetObjLstAsync,
  ge_UserBadgeLog_GetObjLstCache,
  ge_UserBadgeLog_SortFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserBadgeLogWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import axios from 'axios';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { ge_GameLevel_func } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';

export const ge_UserBadgeLogEx_Controller = 'ge_UserBadgeLogExApi';
export const ge_UserBadgeLogEx_ConstructorName = 'ge_UserBadgeLogEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserBadgeLogEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_UserBadgeLogENS:源对象
 * @returns 目标对象=>clsge_UserBadgeLogEN:objge_UserBadgeLogENT
 **/
export function ge_UserBadgeLogEx_CopyToEx(
  objge_UserBadgeLogENS: clsge_UserBadgeLogEN,
): clsge_UserBadgeLogENEx {
  const strThisFuncName = ge_UserBadgeLogEx_CopyToEx.name;
  const objge_UserBadgeLogENT = new clsge_UserBadgeLogENEx();
  try {
    ObjectAssign(objge_UserBadgeLogENT, objge_UserBadgeLogENS);
    return objge_UserBadgeLogENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_UserBadgeLogENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserBadgeLogEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
): Promise<Array<clsge_UserBadgeLogENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrge_UserBadgeLogObjLst = await ge_UserBadgeLog_GetObjLstCache(strIdCurrEduCls);
  const arrge_UserBadgeLogExObjLst = arrge_UserBadgeLogObjLst.map(ge_UserBadgeLogEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_UserBadgeLogExObjLst) {
      const conFuncMap = await ge_UserBadgeLogEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_UserBadgeLogExObjLst.length == 0) return arrge_UserBadgeLogExObjLst;
  let arrge_UserBadgeLog_Sel: Array<clsge_UserBadgeLogENEx> = arrge_UserBadgeLogExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objge_UserBadgeLog_Cond = new clsge_UserBadgeLogENEx();
  ObjectAssign(objge_UserBadgeLog_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsge_UserBadgeLogWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_UserBadgeLog_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_UserBadgeLog_Sel.length == 0) return arrge_UserBadgeLog_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.sort(
        ge_UserBadgeLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.sort(objPagerPara.sortFun);
    }
    arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.slice(intStart, intEnd);
    return arrge_UserBadgeLog_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserBadgeLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserBadgeLogENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserBadgeLogEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserBadgeLogENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserBadgeLogObjLst = await ge_UserBadgeLog_GetObjLstAsync(objPagerPara.whereCond);
  const arrge_UserBadgeLogExObjLst = arrge_UserBadgeLogObjLst.map(ge_UserBadgeLogEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_UserBadgeLogExObjLst) {
      const conFuncMap = await ge_UserBadgeLogEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_UserBadgeLogExObjLst.length == 0) return arrge_UserBadgeLogExObjLst;
  let arrge_UserBadgeLog_Sel: Array<clsge_UserBadgeLogENEx> = arrge_UserBadgeLogExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.sort(
        ge_UserBadgeLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.sort(objPagerPara.sortFun);
    }
    arrge_UserBadgeLog_Sel = arrge_UserBadgeLog_Sel.slice(intStart, intEnd);
    return arrge_UserBadgeLog_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserBadgeLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserBadgeLogENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_UserBadgeLogEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserBadgeLogENEx.con_BadgeTypeName:
        return (a: clsge_UserBadgeLogENEx, b: clsge_UserBadgeLogENEx) => {
          return a.badgeTypeName.localeCompare(b.badgeTypeName);
        };
      case clsge_UserBadgeLogENEx.con_EduClsName:
        return (a: clsge_UserBadgeLogENEx, b: clsge_UserBadgeLogENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserBadgeLogENEx.con_UserName:
        return (a: clsge_UserBadgeLogENEx, b: clsge_UserBadgeLogENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_UserBadgeLogENEx.con_GameLevelName:
        return (a: clsge_UserBadgeLogENEx, b: clsge_UserBadgeLogENEx) => {
          return a.gameLevelName.localeCompare(b.gameLevelName);
        };
      default:
        return ge_UserBadgeLog_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserBadgeLogENEx.con_BadgeTypeName:
        return (a: clsge_UserBadgeLogENEx, b: clsge_UserBadgeLogENEx) => {
          return b.badgeTypeName.localeCompare(a.badgeTypeName);
        };
      case clsge_UserBadgeLogENEx.con_EduClsName:
        return (a: clsge_UserBadgeLogENEx, b: clsge_UserBadgeLogENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserBadgeLogENEx.con_UserName:
        return (a: clsge_UserBadgeLogENEx, b: clsge_UserBadgeLogENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_UserBadgeLogENEx.con_GameLevelName:
        return (a: clsge_UserBadgeLogENEx, b: clsge_UserBadgeLogENEx) => {
          return b.gameLevelName.localeCompare(a.gameLevelName);
        };
      default:
        return ge_UserBadgeLog_SortFunByKey(strKey, AscOrDesc);
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
export function ge_UserBadgeLogEx_FuncMapByFldName(
  strFldName: string,
  objge_UserBadgeLogEx: clsge_UserBadgeLogENEx,
) {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_UserBadgeLogEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserBadgeLogENEx.con_BadgeTypeName:
      return ge_UserBadgeLogEx_FuncMap_BadgeTypeName(objge_UserBadgeLogEx);
    case clsge_UserBadgeLogENEx.con_EduClsName:
      return ge_UserBadgeLogEx_FuncMap_EduClsName(objge_UserBadgeLogEx);
    case clsge_UserBadgeLogENEx.con_UserName:
      return ge_UserBadgeLogEx_FuncMap_UserName(objge_UserBadgeLogEx);
    case clsge_UserBadgeLogENEx.con_GameLevelName:
      return ge_UserBadgeLogEx_FuncMap_GameLevelName(objge_UserBadgeLogEx);
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
export async function ge_UserBadgeLogEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_UserBadgeLog_FilterFunByKey(strKey, value);
  }
}

/**
 * 根据积分自动设置徽章
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCourseChapterId: 章节Id
 * @param strCourseId: 课程Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserBadgeLogEx_ImportCreditBadge(
  strCourseChapterId: string,
  strCourseId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserBadgeLogEx_ImportCreditBadge.name;
  const strAction = 'ImportCreditBadge';
  const strUrl = ge_UserBadgeLogEx_GetWebApiUrl(ge_UserBadgeLogEx_Controller, strAction);
  try {
    const response = await axios.get(strUrl, {
      params: {
        strCourseChapterId: strCourseChapterId,
        strCourseId: strCourseId,
        strOpUser: strOpUser,
      },
    });
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
        ge_UserBadgeLogEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserBadgeLogEx_ConstructorName,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeLogS:源对象
 **/
export async function ge_UserBadgeLogEx_FuncMap_EduClsName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
) {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objge_UserBadgeLog.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        clsPubLocalStorage.courseId,
      );
      objge_UserBadgeLog.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeLogS:源对象
 **/
export async function ge_UserBadgeLogEx_FuncMap_BadgeTypeName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
) {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMap_BadgeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.badgeTypeName) == true) {
      const BadgeType_BadgeTypeId = objge_UserBadgeLog.badgeTypeId;
      const BadgeType_BadgeTypeName = await BadgeType_func(
        clsBadgeTypeEN.con_BadgeTypeId,
        clsBadgeTypeEN.con_BadgeTypeName,
        BadgeType_BadgeTypeId,
      );
      objge_UserBadgeLog.badgeTypeName = BadgeType_BadgeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000207)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeLogS:源对象
 **/
export async function ge_UserBadgeLogEx_FuncMap_UserName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
) {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMap_UserName.name;
  try {
    const vQxUsersSimStore = usevQxUsersSimStore();
    if (IsNullOrEmpty(objge_UserBadgeLog.userName) == true) {
      const vQxUsersSim_UserId = objge_UserBadgeLog.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objge_UserBadgeLog.userName = vQxUsersSim_UserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeLogS:源对象
 **/
export async function ge_UserBadgeLogEx_FuncMap_GameLevelName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
) {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMap_GameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.gameLevelName) == true) {
      const ge_GameLevel_GameLevelId = objge_UserBadgeLog.gameLevelId;
      if (ge_GameLevel_GameLevelId == '0') {
        objge_UserBadgeLog.gameLevelName = '无';
        return;
      }
      const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        ge_GameLevel_GameLevelId,
        clsPubLocalStorage.courseId,
      );
      objge_UserBadgeLog.gameLevelName = ge_GameLevel_GameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000182)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
