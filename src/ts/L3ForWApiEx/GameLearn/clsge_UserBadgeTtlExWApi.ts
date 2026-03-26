import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { clsBadgeTypeEN } from '@/ts/L0Entity/GameLearn/clsBadgeTypeEN';
import { clsge_UserBadgeTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlEN';
import { clsge_UserBadgeTtlENEx } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlENEx';

import { BadgeType_func, BadgeType_funcKey } from '@/ts/L3ForWApi/GameLearn/clsBadgeTypeWApi';
import {
  ge_UserBadgeTtl_FilterFunByKey,
  ge_UserBadgeTtl_GetObjLstAsync,
  ge_UserBadgeTtl_SortFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserBadgeTtlWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';
import { vUsersSim_func, vUsersSim_funcKey } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
export const ge_UserBadgeTtlEx_Controller = 'ge_UserBadgeTtlExApi';
export const ge_UserBadgeTtlEx_ConstructorName = 'ge_UserBadgeTtlEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserBadgeTtlEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_UserBadgeTtlENS:源对象
 * @returns 目标对象=>clsge_UserBadgeTtlEN:objge_UserBadgeTtlENT
 **/
export function ge_UserBadgeTtlEx_CopyToEx(
  objge_UserBadgeTtlENS: clsge_UserBadgeTtlEN,
): clsge_UserBadgeTtlENEx {
  const strThisFuncName = ge_UserBadgeTtlEx_CopyToEx.name;
  const objge_UserBadgeTtlENT = new clsge_UserBadgeTtlENEx();
  try {
    ObjectAssign(objge_UserBadgeTtlENT, objge_UserBadgeTtlENS);
    return objge_UserBadgeTtlENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_UserBadgeTtlENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserBadgeTtlEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserBadgeTtlENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserBadgeTtlObjLst = await ge_UserBadgeTtl_GetObjLstAsync(objPagerPara.whereCond);
  const arrge_UserBadgeTtlExObjLst = arrge_UserBadgeTtlObjLst.map(ge_UserBadgeTtlEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_UserBadgeTtlExObjLst) {
      const conFuncMap = await ge_UserBadgeTtlEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_UserBadgeTtlExObjLst.length == 0) return arrge_UserBadgeTtlExObjLst;
  let arrge_UserBadgeTtl_Sel: Array<clsge_UserBadgeTtlENEx> = arrge_UserBadgeTtlExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserBadgeTtl_Sel = arrge_UserBadgeTtl_Sel.sort(
        ge_UserBadgeTtlEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_UserBadgeTtl_Sel = arrge_UserBadgeTtl_Sel.sort(objPagerPara.sortFun);
    }
    arrge_UserBadgeTtl_Sel = arrge_UserBadgeTtl_Sel.slice(intStart, intEnd);
    return arrge_UserBadgeTtl_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserBadgeTtlENEx>();
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
export function ge_UserBadgeTtlEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserBadgeTtlENEx.con_EduClsName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return a.badgeTypeName.localeCompare(b.badgeTypeName);
        };
      case clsge_UserBadgeTtlENEx.con_UserName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      default:
        return ge_UserBadgeTtl_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserBadgeTtlENEx.con_EduClsName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return b.badgeTypeName.localeCompare(a.badgeTypeName);
        };
      case clsge_UserBadgeTtlENEx.con_UserName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      default:
        return ge_UserBadgeTtl_SortFunByKey(strKey, AscOrDesc);
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
export function ge_UserBadgeTtlEx_FuncMapByFldName(
  strFldName: string,
  objge_UserBadgeTtlEx: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_UserBadgeTtlEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserBadgeTtlENEx.con_EduClsName:
      return ge_UserBadgeTtlEx_FuncMap_EduClsName(objge_UserBadgeTtlEx);
    case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
      return ge_UserBadgeTtlEx_FuncMap_BadgeTypeName(objge_UserBadgeTtlEx);
    case clsge_UserBadgeTtlENEx.con_UserName:
      return ge_UserBadgeTtlEx_FuncMap_UserName(objge_UserBadgeTtlEx);

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
export async function ge_UserBadgeTtlEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_UserBadgeTtl_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMap_EduClsName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objge_UserBadgeTtl.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        clsPubLocalStorage.courseId,
      );
      objge_UserBadgeTtl.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMap_BadgeTypeName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMap_BadgeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.badgeTypeName) == true) {
      const BadgeType_BadgeTypeId = objge_UserBadgeTtl.badgeTypeId;
      const BadgeType_BadgeTypeName = await BadgeType_func(
        clsBadgeTypeEN.con_BadgeTypeId,
        clsBadgeTypeEN.con_BadgeTypeName,
        BadgeType_BadgeTypeId,
      );
      objge_UserBadgeTtl.badgeTypeName = BadgeType_BadgeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000207)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMap_UserName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMap_UserName.name;
  try {
    const vQxUsersSimStore = usevQxUsersSimStore();
    if (IsNullOrEmpty(objge_UserBadgeTtl.userName) == true) {
      const vQxUsersSim_UserId = objge_UserBadgeTtl.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objge_UserBadgeTtl.userName = vQxUsersSim_UserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId(
  strIdCurrEduCls: string,
  strUserId: string,
): Promise<Array<clsge_UserBadgeTtlEN>> {
  const strThisFuncName = 'ge_UserBadgeTtlEx_GetObjByIdCurrEduClsAndUserId';
  let strMsg = '';
  try {
    const strWhere = `${clsge_UserBadgeTtlEN.con_IdCurrEduCls} = '${strIdCurrEduCls}' AND userId = '${strUserId}'`;
    const arrge_UserBadgeTtl_Sel = await ge_UserBadgeTtl_GetObjLstAsync(strWhere);
    return arrge_UserBadgeTtl_Sel;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)根据教学班和用户Id获取徽章汇总对象出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export function ge_UserBadgeTtlEx_SortByBadgeNum(
  a: clsge_UserBadgeTtlEN,
  b: clsge_UserBadgeTtlEN,
): number {
  const strThisFuncName = 'ge_UserBadgeTtlEx_SortByBadgeNum';
  return b.badgeNum - a.badgeNum;
}

/**
 * 类名:clsge_UserBadgeTtlExWApi
 * 表名:ge_UserBadgeTtl(01120882)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:11:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapEduClsName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.eduClsName) == true) {
      const CurrEduClsIdCurrEduCls = objge_UserBadgeTtl.idCurrEduCls;
      const CurrEduClsEduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsIdCurrEduCls,
        clsPubLocalStorage.courseId,
      );
      objge_UserBadgeTtl.eduClsName = CurrEduClsEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapBadgeTypeName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapBadgeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.badgeTypeName) == true) {
      const BadgeTypeBadgeTypeId = objge_UserBadgeTtl.badgeTypeId;
      const BadgeTypeBadgeTypeName = await BadgeType_func(
        clsBadgeTypeEN.con_BadgeTypeId,
        clsBadgeTypeEN.con_BadgeTypeName,
        BadgeTypeBadgeTypeId,
      );
      objge_UserBadgeTtl.badgeTypeName = BadgeTypeBadgeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000969)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapUserName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.userName) == true) {
      const vUsersSimUserId = objge_UserBadgeTtl.userId;
      const vUsersSimUserName = await vUsersSim_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSimUserId,
        clsSysPara4WebApi.cmPrjId,
      );
      objge_UserBadgeTtl.userName = vUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapKeyEduClsName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.eduClsName) == true) return [];
    const CurrEduClsEduClsName = objge_UserBadgeTtl.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_EduClsName,
      CurrEduClsEduClsName,
      clsPubLocalStorage.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
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
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapKeyBadgeTypeName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapKeyBadgeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.badgeTypeName) == true) return [];
    const BadgeTypeBadgeTypeName = objge_UserBadgeTtl.badgeTypeName;
    const arrBadgeTypeId = await BadgeType_funcKey(
      clsBadgeTypeEN.con_BadgeTypeName,
      BadgeTypeBadgeTypeName,
      enumComparisonOp.Like_03,
    );
    return arrBadgeTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000970)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
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
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapKeyUserName(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.userName) == true) return [];
    const vUsersSimUserName = objge_UserBadgeTtl.userName;
    const arrUserId = await vUsersSim_funcKey(
      clsvUsersSimEN.con_UserName,
      vUsersSimUserName,
      clsSysPara4WebApi.cmPrjId,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000641)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 设置配戴徽章
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strIdCurrEduCls: 教学班流水号
 * @param badgeTypeId: 徽章类型Id
 * @param bolIsWorn: 是否配戴
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserBadgeTtlEx_SetWearStatus(
  strUserId: string,
  strIdCurrEduCls: string,
  badgeTypeId: string,
  bolIsWorn: boolean,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserBadgeTtlEx_SetWearStatus.name;
  const strAction = 'SetWearStatus';
  const strUrl = ge_UserBadgeTtlEx_GetWebApiUrl(ge_UserBadgeTtlEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strIdCurrEduCls,
      badgeTypeId,
      bolIsWorn,
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
        ge_UserBadgeTtlEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserBadgeTtlEx_ConstructorName,
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
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapImageDir(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapImageDir.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.imageDir) == true) {
      const BadgeTypeBadgeTypeId = objge_UserBadgeTtl.badgeTypeId;
      const BadgeTypeImageDir = await BadgeType_func(
        clsBadgeTypeEN.con_BadgeTypeId,
        clsBadgeTypeEN.con_ImageDir,
        BadgeTypeBadgeTypeId,
      );
      objge_UserBadgeTtl.imageDir = BadgeTypeImageDir;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001013)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 获取某用户当前配戴的徽章类型对象
 * @param strUserId:给定用户
 * @returns 返回当前配戴的徽章类型对象
 */
export async function ge_UserBadgeTtlEx_GetWearBadgeTypeObj(
  strUserId: string,
): Promise<clsge_UserBadgeTtlEN | null> {
  const strThisFuncName = ge_UserBadgeTtlEx_GetWearBadgeTypeObj.name;
  const strWhere = `${clsge_UserBadgeTtlEN.con_UserId} = '${strUserId}' AND ${clsge_UserBadgeTtlEN.con_IsWorn} = '1'`;
  const arrge_UserBadgeTtl_Sel = await ge_UserBadgeTtl_GetObjLstAsync(strWhere);
  if (arrge_UserBadgeTtl_Sel.length == 0) {
    return null;
  }
  return arrge_UserBadgeTtl_Sel[0];
}

/**
 * 获取某用户当前配戴的徽章类型所对应的图像路径
 * @param strUserId:给定用户
 * @returns 返回当前配戴的徽章类型图像路径
 */
export async function ge_UserBadgeTtlEx_GetWearBadgeImageDir1(strUserId: string): Promise<string> {
  const strThisFuncName = ge_UserBadgeTtlEx_GetWearBadgeImageDir1.name;
  const strWhere = `${clsge_UserBadgeTtlEN.con_UserId} = '${strUserId}' AND ${clsge_UserBadgeTtlEN.con_IsWorn} = '1'`;
  const arrge_UserBadgeTtl_Sel = await ge_UserBadgeTtl_GetObjLstAsync(strWhere);
  if (arrge_UserBadgeTtl_Sel.length == 0) {
    return '';
  }
  const objge_UserBadgeTtl = arrge_UserBadgeTtl_Sel[0];
  if (IsNullOrEmpty(objge_UserBadgeTtl.badgeTypeId) == false) {
    const BadgeTypeBadgeTypeId = objge_UserBadgeTtl.badgeTypeId;
    const BadgeTypeImageDir = await BadgeType_func(
      clsBadgeTypeEN.con_BadgeTypeId,
      clsBadgeTypeEN.con_ImageDir,
      BadgeTypeBadgeTypeId,
    );
    return BadgeTypeImageDir;
  }
  return '';
}

export async function ge_UserBadgeTtlEx_GetWearBadgeImageDirAndName(
  strUserId: string,
): Promise<{ ImageDir: string; Name: string }> {
  const strThisFuncName = ge_UserBadgeTtlEx_GetWearBadgeImageDirAndName.name;
  const strWhere = `${clsge_UserBadgeTtlEN.con_UserId} = '${strUserId}' AND ${clsge_UserBadgeTtlEN.con_IsWorn} = '1'`;
  const arrge_UserBadgeTtl_Sel = await ge_UserBadgeTtl_GetObjLstAsync(strWhere);
  if (arrge_UserBadgeTtl_Sel.length == 0) {
    return { ImageDir: '', Name: '' };
  }
  const objge_UserBadgeTtl = arrge_UserBadgeTtl_Sel[0];
  if (IsNullOrEmpty(objge_UserBadgeTtl.badgeTypeId) == false) {
    const BadgeTypeBadgeTypeId = objge_UserBadgeTtl.badgeTypeId;
    const BadgeTypeImageDir = await BadgeType_func(
      clsBadgeTypeEN.con_BadgeTypeId,
      clsBadgeTypeEN.con_ImageDir,
      BadgeTypeBadgeTypeId,
    );
    const BadgeTypeName = await BadgeType_func(
      clsBadgeTypeEN.con_BadgeTypeId,
      clsBadgeTypeEN.con_BadgeTypeName,
      BadgeTypeBadgeTypeId,
    );

    return { ImageDir: BadgeTypeImageDir, Name: BadgeTypeName };
  }
  return { ImageDir: '', Name: '' };
}
