/**
 * 类名:clsge_UserBadgeTtlExWApi
 * 表名:ge_UserBadgeTtl(01120882)
 * 版本:2025.02.18.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/24 02:44:59
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户徽章汇总(ge_UserBadgeTtl)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年02月24日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_UserBadgeTtlENEx } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlENEx';
import {
  ge_UserBadgeTtl_GetObjLstByPagerAsync,
  ge_UserBadgeTtl_SortFunByKey,
  ge_UserBadgeTtl_FilterFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserBadgeTtlWApi';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { BadgeType_func, BadgeType_funcKey } from '@/ts/L3ForWApi/GameLearn/clsBadgeTypeWApi';
import { clsBadgeTypeEN } from '@/ts/L0Entity/GameLearn/clsBadgeTypeEN';
import { vUsersSim_func, vUsersSim_funcKey } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { clsge_UserBadgeTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';

export const ge_UserBadgeTtlExController = 'ge_UserBadgeTtlExApi';
export const ge_UserBadgeTtlEx_ConstructorName = 'ge_UserBadgeTtlEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserBadgeTtlEx_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserBadgeTtlEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserBadgeTtlENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserBadgeTtlObjLst = await ge_UserBadgeTtl_GetObjLstByPagerAsync(objPagerPara);
  const arrge_UserBadgeTtlExObjLst = arrge_UserBadgeTtlObjLst.map(ge_UserBadgeTtlEx_CopyToEx);
  if (arrge_UserBadgeTtlExObjLst.length == 0) return arrge_UserBadgeTtlExObjLst;
  let arrge_UserBadgeTtlSel: Array<clsge_UserBadgeTtlENEx> = arrge_UserBadgeTtlExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserBadgeTtlSel = arrge_UserBadgeTtlSel.sort(
        ge_UserBadgeTtlEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserBadgeTtlSel = arrge_UserBadgeTtlSel.sort(objPagerPara.sortFun);
    }
    return arrge_UserBadgeTtlSel;
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
        objge_UserBadgeTtl.courseId,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapCourseId(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
) {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapCourseId.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.courseId) == true) {
      const CurrEduClsIdCurrEduCls = objge_UserBadgeTtl.idCurrEduCls;
      const CurrEduClsCourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduClsIdCurrEduCls,
        objge_UserBadgeTtl.courseId,
      );
      objge_UserBadgeTtl.courseId = CurrEduClsCourseId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000536)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-24
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_UserBadgeTtlEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return a.badgeTypeName.localeCompare(b.badgeTypeName);
        };
      case clsge_UserBadgeTtlENEx.con_UserName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_UserBadgeTtlENEx.con_EduClsName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserBadgeTtlENEx.con_ImageDir:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return a.imageDir.localeCompare(b.imageDir);
        };
      case clsge_UserBadgeTtlENEx.con_CourseId:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return a.courseId.localeCompare(b.courseId);
        };
      default:
        return ge_UserBadgeTtl_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return b.badgeTypeName.localeCompare(a.badgeTypeName);
        };
      case clsge_UserBadgeTtlENEx.con_UserName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_UserBadgeTtlENEx.con_EduClsName:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserBadgeTtlENEx.con_ImageDir:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return b.imageDir.localeCompare(a.imageDir);
        };
      case clsge_UserBadgeTtlENEx.con_CourseId:
        return (a: clsge_UserBadgeTtlENEx, b: clsge_UserBadgeTtlENEx) => {
          return b.courseId.localeCompare(a.courseId);
        };
      default:
        return ge_UserBadgeTtl_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-02-24
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
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_UserBadgeTtlEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
      return ge_UserBadgeTtlEx_FuncMapBadgeTypeName(objge_UserBadgeTtlEx);
    case clsge_UserBadgeTtlENEx.con_UserName:
      return ge_UserBadgeTtlEx_FuncMapUserName(objge_UserBadgeTtlEx);
    case clsge_UserBadgeTtlENEx.con_EduClsName:
      return ge_UserBadgeTtlEx_FuncMapEduClsName(objge_UserBadgeTtlEx);
    case clsge_UserBadgeTtlENEx.con_ImageDir:
      return ge_UserBadgeTtlEx_FuncMapImageDir(objge_UserBadgeTtlEx);
    case clsge_UserBadgeTtlENEx.con_CourseId:
      return ge_UserBadgeTtlEx_FuncMapCourseId(objge_UserBadgeTtlEx);
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
 * 日期:2025-02-24
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_UserBadgeTtlEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
      return (obj: clsge_UserBadgeTtlENEx) => {
        return obj.badgeTypeName === value;
      };
    case clsge_UserBadgeTtlENEx.con_UserName:
      return (obj: clsge_UserBadgeTtlENEx) => {
        return obj.userName === value;
      };
    case clsge_UserBadgeTtlENEx.con_EduClsName:
      return (obj: clsge_UserBadgeTtlENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_UserBadgeTtlENEx.con_ImageDir:
      return (obj: clsge_UserBadgeTtlENEx) => {
        return obj.imageDir === value;
      };
    case clsge_UserBadgeTtlENEx.con_CourseId:
      return (obj: clsge_UserBadgeTtlENEx) => {
        return obj.courseId === value;
      };
    default:
      return ge_UserBadgeTtl_FilterFunByKey(strKey, value);
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
      objge_UserBadgeTtl.courseId,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserBadgeTtlS:源对象
 **/
export async function ge_UserBadgeTtlEx_FuncMapKeyImageDir(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapKeyImageDir.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.imageDir) == true) return [];
    const BadgeTypeImageDir = objge_UserBadgeTtl.imageDir;
    const arrBadgeTypeId = await BadgeType_funcKey(
      clsBadgeTypeEN.con_ImageDir,
      BadgeTypeImageDir,
      enumComparisonOp.Like_03,
    );
    return arrBadgeTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001014)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_UserBadgeTtlEx_FuncMapKeyCourseId(
  objge_UserBadgeTtl: clsge_UserBadgeTtlENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserBadgeTtlEx_FuncMapKeyCourseId.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeTtl.courseId) == true) return [];
    const CurrEduClsCourseId = objge_UserBadgeTtl.courseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_CourseId,
      CurrEduClsCourseId,
      objge_UserBadgeTtl.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000542)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
