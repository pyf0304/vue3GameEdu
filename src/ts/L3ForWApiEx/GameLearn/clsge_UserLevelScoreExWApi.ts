/**
 * 用户闯关得分(ge_UserLevelScore)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年12月30日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import axios from 'axios';

import { GetObjKeys, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_UserLevelScoreENEx } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreENEx';
import {
  ge_UserLevelScore_GetObjLstAsync,
  ge_UserLevelScore_GetObjLstCache,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { cc_Course_func } from 'share-stu-study-base-lib';
import { clscc_CourseEN } from 'share-stu-study-base-lib';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { ge_GameLevel_func } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { ge_UserLevelScore_SortFunByKey } from '@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi';
import { clsge_UserLevelScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN';
import { Format } from '@/ts/PubFun/clsString';
import { ge_UserLevelScore_FilterFunByKey } from '@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi';
import { cc_Course_funcKey } from 'share-stu-study-base-lib';

import { ge_GameLevel_funcKey } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';
export const ge_UserLevelScoreEx_Controller = 'ge_UserLevelScoreExApi';
export const ge_UserLevelScoreEx_ConstructorName = 'ge_UserLevelScoreEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserLevelScoreEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_UserLevelScoreENS:源对象
 * @returns 目标对象=>clsge_UserLevelScoreEN:objge_UserLevelScoreENT
 **/
export function ge_UserLevelScoreEx_CopyToEx(
  objge_UserLevelScoreENS: clsge_UserLevelScoreEN,
): clsge_UserLevelScoreENEx {
  const strThisFuncName = ge_UserLevelScoreEx_CopyToEx.name;
  const objge_UserLevelScoreENT = new clsge_UserLevelScoreENEx();
  try {
    ObjectAssign(objge_UserLevelScoreENT, objge_UserLevelScoreENS);
    return objge_UserLevelScoreENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_UserLevelScoreENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserLevelScoreEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserLevelScoreENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserLevelScoreObjLst = await ge_UserLevelScore_GetObjLstAsync(objPagerPara.whereCond);
  const arrge_UserLevelScoreExObjLst = arrge_UserLevelScoreObjLst.map(ge_UserLevelScoreEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_UserLevelScoreExObjLst) {
      const conFuncMap = await ge_UserLevelScoreEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_UserLevelScoreExObjLst.length == 0) return arrge_UserLevelScoreExObjLst;
  let arrge_UserLevelScore_Sel: Array<clsge_UserLevelScoreENEx> = arrge_UserLevelScoreExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserLevelScore_Sel = arrge_UserLevelScore_Sel.sort(
        ge_UserLevelScoreEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_UserLevelScore_Sel = arrge_UserLevelScore_Sel.sort(objPagerPara.sortFun);
    }
    arrge_UserLevelScore_Sel = arrge_UserLevelScore_Sel.slice(intStart, intEnd);
    return arrge_UserLevelScore_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserLevelScoreENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMap_UserName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMap_UserName.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.userName) == true) {
      const vQxUsersSim_UserId = objge_UserLevelScore.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objge_UserLevelScore.userName = vQxUsersSim_UserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMap_CourseName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.courseName) == true) {
      const cc_Course_CourseId = objge_UserLevelScore.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objge_UserLevelScore.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMap_EduClsName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objge_UserLevelScore.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        objge_UserLevelScore.courseId,
      );
      objge_UserLevelScore.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMap_GameLevelName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMap_GameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.gameLevelName) == true) {
      const ge_GameLevel_GameLevelId = objge_UserLevelScore.gameLevelId;
      const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        ge_GameLevel_GameLevelId,
        objge_UserLevelScore.courseId,
      );
      objge_UserLevelScore.gameLevelName = ge_GameLevel_GameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000182)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-12-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_UserLevelScoreEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserLevelScoreENEx.con_UserName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_UserLevelScoreENEx.con_CourseName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_UserLevelScoreENEx.con_EduClsName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserLevelScoreENEx.con_GameLevelName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.gameLevelName.localeCompare(b.gameLevelName);
        };
      case clsge_UserLevelScoreENEx.con_UpdDateSim:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.updDateSim.localeCompare(b.updDateSim);
        };
      default:
        return ge_UserLevelScore_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserLevelScoreENEx.con_UserName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_UserLevelScoreENEx.con_CourseName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_UserLevelScoreENEx.con_EduClsName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserLevelScoreENEx.con_GameLevelName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.gameLevelName.localeCompare(a.gameLevelName);
        };
      case clsge_UserLevelScoreENEx.con_UpdDateSim:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.updDateSim.localeCompare(a.updDateSim);
        };
      default:
        return ge_UserLevelScore_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-12-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_UserLevelScoreEx_FuncMapByFldName(
  strFldName: string,
  objge_UserLevelScoreEx: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_UserLevelScoreEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserLevelScoreENEx.con_UserName:
      return ge_UserLevelScoreEx_FuncMap_UserName(objge_UserLevelScoreEx);
    case clsge_UserLevelScoreENEx.con_CourseName:
      return ge_UserLevelScoreEx_FuncMap_CourseName(objge_UserLevelScoreEx);
    case clsge_UserLevelScoreENEx.con_EduClsName:
      return ge_UserLevelScoreEx_FuncMap_EduClsName(objge_UserLevelScoreEx);
    case clsge_UserLevelScoreENEx.con_GameLevelName:
      return ge_UserLevelScoreEx_FuncMap_GameLevelName(objge_UserLevelScoreEx);
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
 * 日期:2022-12-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_UserLevelScoreEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsge_UserLevelScoreENEx.con_UserName:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.userName === value;
      };
    case clsge_UserLevelScoreENEx.con_CourseName:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.courseName === value;
      };
    case clsge_UserLevelScoreENEx.con_EduClsName:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_UserLevelScoreENEx.con_GameLevelName:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.gameLevelName === value;
      };
    case clsge_UserLevelScoreENEx.con_UpdDateSim:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.updDateSim === value;
      };
    default:
      return ge_UserLevelScore_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKey_UserName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKey_UserName.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.userName) == true) return [];
    const vQxUsersSim_UserName = objge_UserLevelScore.userName;
    const arrUserId = await vQxUsersSimStore.getUserIdLstByUserName(
      vQxUsersSim_UserName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
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
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKey_CourseName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKey_CourseName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.courseName) == true) return [];
    const cc_Course_CourseName = objge_UserLevelScore.courseName;
    const arrCourseId = await cc_Course_funcKey(
      clscc_CourseEN.con_CourseName,
      cc_Course_CourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
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
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKey_GameLevelName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKey_GameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.gameLevelName) == true) return [];
    const ge_GameLevel_GameLevelName = objge_UserLevelScore.gameLevelName;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_GameLevelName,
      ge_GameLevel_GameLevelName,
      objge_UserLevelScore.courseId,
      enumComparisonOp.Like_03,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000182)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserLevelScoreEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
): Promise<Array<clsge_UserLevelScoreENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrge_UserLevelScoreObjLst = await ge_UserLevelScore_GetObjLstCache(strIdCurrEduCls);
  const arrge_UserLevelScoreExObjLst = arrge_UserLevelScoreObjLst.map(ge_UserLevelScoreEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsge_UserLevelScoreEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrge_UserLevelScoreExObjLst) {
      await ge_UserLevelScoreEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_UserLevelScoreExObjLst.length == 0) return arrge_UserLevelScoreExObjLst;
  let arrge_UserLevelScoreSel: Array<clsge_UserLevelScoreENEx> = arrge_UserLevelScoreExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objge_UserLevelScoreCond = new clsge_UserLevelScoreENEx();
  ObjectAssign(objge_UserLevelScoreCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsge_UserLevelScoreWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_UserLevelScoreCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_UserLevelScoreSel.length == 0) return arrge_UserLevelScoreSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.sort(
        ge_UserLevelScoreEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.sort(objPagerPara.sortFun);
    }
    arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.slice(intStart, intEnd);
    return arrge_UserLevelScoreSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserLevelScoreENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKeyUserName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKeyUserName.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.userName) == true) return [];
    const vUsersSimUserName = objge_UserLevelScore.userName;
    const arrUserId = await vQxUsersSimStore.getUserIdLstByUserName(
      vUsersSimUserName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
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
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKeyCourseName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.courseName) == true) return [];
    const vccCourseSimCourseName = objge_UserLevelScore.courseName;
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
      ge_UserLevelScoreEx_ConstructorName,
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
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKeyGameLevelName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKeyGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.gameLevelName) == true) return [];
    const geGameLevelGameLevelName = objge_UserLevelScore.gameLevelName;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_GameLevelName,
      geGameLevelGameLevelName,
      objge_UserLevelScore.courseId,
      enumComparisonOp.Like_03,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000502)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 计算一个用户一个闯关的积分
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @param strUserId: 用户Id
 * @param strGameLevelId: 关卡Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserLevelScoreEx_CalcUserLevelScoreByGameLevelId(
  strIdCurrEduCls: string,
  strUserId: string,
  strGameLevelId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserLevelScoreEx_CalcUserLevelScoreByGameLevelId.name;
  const strAction = 'CalcUserLevelScoreByGameLevelId';
  const strUrl = ge_UserLevelScoreEx_GetWebApiUrl(ge_UserLevelScoreEx_Controller, strAction);
  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls: strIdCurrEduCls,
        strUserId: strUserId,
        strGameLevelId: strGameLevelId,
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
        ge_UserLevelScoreEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserLevelScoreEx_ConstructorName,
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
 * 计算一个教学班的积分
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserLevelScoreEx_CalcUserLevelScore(
  strIdCurrEduCls: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserLevelScoreEx_CalcUserLevelScore.name;
  const strAction = 'CalcUserLevelScore';
  const strUrl = ge_UserLevelScoreEx_GetWebApiUrl(ge_UserLevelScoreEx_Controller, strAction);
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
        ge_UserLevelScoreEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserLevelScoreEx_ConstructorName,
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
 * 计算一个用户的积分
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @param strUserId: 用户Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserLevelScoreEx_CalcUserLevelScoreByUserId(
  strIdCurrEduCls: string,
  strUserId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserLevelScoreEx_CalcUserLevelScoreByUserId.name;
  const strAction = 'CalcUserLevelScoreByUserId';
  const strUrl = ge_UserLevelScoreEx_GetWebApiUrl(ge_UserLevelScoreEx_Controller, strAction);
  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls: strIdCurrEduCls,
        strUserId: strUserId,
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
        ge_UserLevelScoreEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserLevelScoreEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
