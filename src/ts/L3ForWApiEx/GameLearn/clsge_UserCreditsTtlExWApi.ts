//import $ from "jquery";
import axios from 'axios';
import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { clsge_UserCreditsTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlEN';
import { clsge_UserCreditsTtlENEx } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlENEx';

import {
  ge_UserCreditsTtl_FilterFunByKey,
  ge_UserCreditsTtl_GetObjLstAsync,
  ge_UserCreditsTtl_SortFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserCreditsTtlWApi';

import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vge_UserCreditsLog_MaxCredits_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsvge_UserCreditsLog_MaxCreditsWApi';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';

export const ge_UserCreditsTtlEx_Controller = 'ge_UserCreditsTtlExApi';
export const ge_UserCreditsTtlEx_ConstructorName = 'ge_UserCreditsTtlEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserCreditsTtlEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_UserCreditsTtlENS:源对象
 * @returns 目标对象=>clsge_UserCreditsTtlEN:objge_UserCreditsTtlENT
 **/
export function ge_UserCreditsTtlEx_CopyToEx(
  objge_UserCreditsTtlENS: clsge_UserCreditsTtlEN,
): clsge_UserCreditsTtlENEx {
  const strThisFuncName = ge_UserCreditsTtlEx_CopyToEx.name;
  const objge_UserCreditsTtlENT = new clsge_UserCreditsTtlENEx();
  try {
    ObjectAssign(objge_UserCreditsTtlENT, objge_UserCreditsTtlENS);
    return objge_UserCreditsTtlENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_UserCreditsTtlENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserCreditsTtlEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserCreditsTtlENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserCreditsTtlObjLst = await ge_UserCreditsTtl_GetObjLstAsync(objPagerPara.whereCond);
  const arrge_UserCreditsTtlExObjLst = arrge_UserCreditsTtlObjLst.map(ge_UserCreditsTtlEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_UserCreditsTtlExObjLst) {
      const conFuncMap = await ge_UserCreditsTtlEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_UserCreditsTtlExObjLst.length == 0) return arrge_UserCreditsTtlExObjLst;
  let arrge_UserCreditsTtl_Sel: Array<clsge_UserCreditsTtlENEx> = arrge_UserCreditsTtlExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserCreditsTtl_Sel = arrge_UserCreditsTtl_Sel.sort(
        ge_UserCreditsTtlEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_UserCreditsTtl_Sel = arrge_UserCreditsTtl_Sel.sort(objPagerPara.sortFun);
    }
    arrge_UserCreditsTtl_Sel = arrge_UserCreditsTtl_Sel.slice(intStart, intEnd);
    return arrge_UserCreditsTtl_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserCreditsTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserCreditsTtlENEx>();
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
export function ge_UserCreditsTtlEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserCreditsTtlENEx.con_UserName:
        return (a: clsge_UserCreditsTtlENEx, b: clsge_UserCreditsTtlENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_UserCreditsTtlENEx.con_CourseId:
        return (a: clsge_UserCreditsTtlENEx, b: clsge_UserCreditsTtlENEx) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clsge_UserCreditsTtlENEx.con_EduClsName:
        return (a: clsge_UserCreditsTtlENEx, b: clsge_UserCreditsTtlENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserCreditsTtlENEx.con_GameNum:
        return (a: clsge_UserCreditsTtlENEx, b: clsge_UserCreditsTtlENEx) => {
          return a.gameNum - b.gameNum;
        };
      default:
        return ge_UserCreditsTtl_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserCreditsTtlENEx.con_UserName:
        return (a: clsge_UserCreditsTtlENEx, b: clsge_UserCreditsTtlENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_UserCreditsTtlENEx.con_CourseId:
        return (a: clsge_UserCreditsTtlENEx, b: clsge_UserCreditsTtlENEx) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clsge_UserCreditsTtlENEx.con_EduClsName:
        return (a: clsge_UserCreditsTtlENEx, b: clsge_UserCreditsTtlENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserCreditsTtlENEx.con_GameNum:
        return (a: clsge_UserCreditsTtlENEx, b: clsge_UserCreditsTtlENEx) => {
          return b.gameNum - a.gameNum;
        };
      default:
        return ge_UserCreditsTtl_SortFunByKey(strKey, AscOrDesc);
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
export function ge_UserCreditsTtlEx_FuncMapByFldName(
  strFldName: string,
  objge_UserCreditsTtlEx: clsge_UserCreditsTtlENEx,
) {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_UserCreditsTtlEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserCreditsTtlENEx.con_UserName:
      return ge_UserCreditsTtlEx_FuncMap_UserName(objge_UserCreditsTtlEx);
    case clsge_UserCreditsTtlENEx.con_CourseId:
      return ge_UserCreditsTtlEx_FuncMap_CourseId(objge_UserCreditsTtlEx);
    case clsge_UserCreditsTtlENEx.con_EduClsName:
      return ge_UserCreditsTtlEx_FuncMap_EduClsName(objge_UserCreditsTtlEx);
    case clsge_UserCreditsTtlENEx.con_GameNum:
      return ge_UserCreditsTtlEx_FuncMap_GameNum(objge_UserCreditsTtlEx);
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
export async function ge_UserCreditsTtlEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_UserCreditsTtl_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsTtlS:源对象
 **/
export async function ge_UserCreditsTtlEx_FuncMap_EduClsName(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
) {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsTtl.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objge_UserCreditsTtl.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        clsPubLocalStorage.courseId,
      );
      objge_UserCreditsTtl.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsTtlS:源对象
 **/
export async function ge_UserCreditsTtlEx_FuncMap_UserName(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
) {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMap_UserName.name;
  try {
    const vQxUsersSimStore = usevQxUsersSimStore();
    if (IsNullOrEmpty(objge_UserCreditsTtl.userName) == true) {
      const vQxUsersSim_UserId = objge_UserCreditsTtl.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objge_UserCreditsTtl.userName = vQxUsersSim_UserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsTtlS:源对象
 **/
export async function ge_UserCreditsTtlEx_FuncMap_CourseId(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
) {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMap_CourseId.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsTtl.courseId) == true) {
      const CurrEduCls_id_CurrEduCls = objge_UserCreditsTtl.idCurrEduCls;
      const CurrEduCls_CourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduCls_id_CurrEduCls,
        objge_UserCreditsTtl.courseId,
      );
      objge_UserCreditsTtl.courseId = CurrEduCls_CourseId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000203)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function ge_UserCreditsTtlEx_FuncMap_GameNum(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
) {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMap_CourseId.name;
  try {
    if (objge_UserCreditsTtl.gameNum == 0) {
      const arrvge_UserCreditsLog_MaxCredits = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(
        objge_UserCreditsTtl.idCurrEduCls,
      );
      const intLength = arrvge_UserCreditsLog_MaxCredits.filter(
        (x) => x.userId == objge_UserCreditsTtl.userId,
      ).length;
      objge_UserCreditsTtl.gameNum = intLength;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000203)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 汇总每个教学班用户的积分
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserCreditsTtlEx_CalcCreditTtl(
  strIdCurrEduCls: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserCreditsTtlEx_CalcCreditTtl.name;
  const strAction = 'CalcCreditTtl';
  const strUrl = ge_UserCreditsTtlEx_GetWebApiUrl(ge_UserCreditsTtlEx_Controller, strAction);
  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls: strIdCurrEduCls,
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
        ge_UserCreditsTtlEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserCreditsTtlEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
