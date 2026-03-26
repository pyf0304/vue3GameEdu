/**
 * 类名:clsge_UserCreditsTtlExWApi
 * 表名:ge_UserCreditsTtl(01120884)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:11:29
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
 * 用户积分汇总(ge_UserCreditsTtl)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_UserCreditsTtlENEx } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlENEx';
import {
  ge_UserCreditsTtl_GetObjLstByPagerAsync,
  ge_UserCreditsTtl_SortFunByKey,
  ge_UserCreditsTtl_FilterFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserCreditsTtlWApi';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { vUsersSim_func, vUsersSim_funcKey } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { clsge_UserCreditsTtlEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsTtlEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';

export const ge_UserCreditsTtlExController = 'ge_UserCreditsTtlExApi';
export const ge_UserCreditsTtlEx_ConstructorName = 'ge_UserCreditsTtlEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserCreditsTtlEx_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserCreditsTtlEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserCreditsTtlENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserCreditsTtlObjLst = await ge_UserCreditsTtl_GetObjLstByPagerAsync(objPagerPara);
  const arrge_UserCreditsTtlExObjLst = arrge_UserCreditsTtlObjLst.map(ge_UserCreditsTtlEx_CopyToEx);
  if (arrge_UserCreditsTtlExObjLst.length == 0) return arrge_UserCreditsTtlExObjLst;
  let arrge_UserCreditsTtlSel: Array<clsge_UserCreditsTtlENEx> = arrge_UserCreditsTtlExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserCreditsTtlSel = arrge_UserCreditsTtlSel.sort(
        ge_UserCreditsTtlEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserCreditsTtlSel = arrge_UserCreditsTtlSel.sort(objPagerPara.sortFun);
    }
    return arrge_UserCreditsTtlSel;
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsTtlS:源对象
 **/
export async function ge_UserCreditsTtlEx_FuncMapEduClsName(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
) {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsTtl.eduClsName) == true) {
      const CurrEduClsIdCurrEduCls = objge_UserCreditsTtl.idCurrEduCls;
      const CurrEduClsEduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsIdCurrEduCls,
        objge_UserCreditsTtl.courseId,
      );
      objge_UserCreditsTtl.eduClsName = CurrEduClsEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_UserCreditsTtlEx_FuncMapUserName(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
) {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsTtl.userName) == true) {
      const vUsersSimUserId = objge_UserCreditsTtl.userId;
      const vUsersSimUserName = await vUsersSim_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSimUserId,
        clsSysPara4WebApi.cmPrjId,
      );
      objge_UserCreditsTtl.userName = vUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_UserCreditsTtlEx_FuncMapCourseId(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
) {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMapCourseId.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsTtl.courseId) == true) {
      const CurrEduClsIdCurrEduCls = objge_UserCreditsTtl.idCurrEduCls;
      const CurrEduClsCourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduClsIdCurrEduCls,
        objge_UserCreditsTtl.courseId,
      );
      objge_UserCreditsTtl.courseId = CurrEduClsCourseId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000536)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_UserCreditsTtlEx_SortFunByKey(strKey: string, AscOrDesc: string) {
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
 * 作者:pyf
 * 日期:2024-11-13
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
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_UserCreditsTtlEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserCreditsTtlENEx.con_UserName:
      return ge_UserCreditsTtlEx_FuncMapUserName(objge_UserCreditsTtlEx);
    case clsge_UserCreditsTtlENEx.con_CourseId:
      return ge_UserCreditsTtlEx_FuncMapCourseId(objge_UserCreditsTtlEx);
    case clsge_UserCreditsTtlENEx.con_EduClsName:
      return ge_UserCreditsTtlEx_FuncMapEduClsName(objge_UserCreditsTtlEx);
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
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_UserCreditsTtlEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_UserCreditsTtlENEx.con_UserName:
      return (obj: clsge_UserCreditsTtlENEx) => {
        return obj.userName === value;
      };
    case clsge_UserCreditsTtlENEx.con_CourseId:
      return (obj: clsge_UserCreditsTtlENEx) => {
        return obj.courseId === value;
      };
    case clsge_UserCreditsTtlENEx.con_EduClsName:
      return (obj: clsge_UserCreditsTtlENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_UserCreditsTtlENEx.con_GameNum:
      return (obj: clsge_UserCreditsTtlENEx) => {
        return obj.gameNum === value;
      };
    default:
      return ge_UserCreditsTtl_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserCreditsTtlS:源对象
 **/
export async function ge_UserCreditsTtlEx_FuncMapKeyUserName(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsTtl.userName) == true) return [];
    const vUsersSimUserName = objge_UserCreditsTtl.userName;
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
      ge_UserCreditsTtlEx_ConstructorName,
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
 * @param objge_UserCreditsTtlS:源对象
 **/
export async function ge_UserCreditsTtlEx_FuncMapKeyCourseId(
  objge_UserCreditsTtl: clsge_UserCreditsTtlENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserCreditsTtlEx_FuncMapKeyCourseId.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsTtl.courseId) == true) return [];
    const CurrEduClsCourseId = objge_UserCreditsTtl.courseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_CourseId,
      CurrEduClsCourseId,
      objge_UserCreditsTtl.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000542)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsTtlEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
