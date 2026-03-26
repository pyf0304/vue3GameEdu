//import $ from "jquery";
import { clscc_CourseEN } from 'share-stu-study-base-lib';
import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { clsvge_UserCreditsLog_MaxCreditsEN } from '@/ts/L0Entity/GameLearn/clsvge_UserCreditsLog_MaxCreditsEN';
import { clsvge_UserCreditsLog_MaxCreditsENEx } from '@/ts/L0Entity/GameLearn/clsvge_UserCreditsLog_MaxCreditsENEx';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { cc_Course_func } from 'share-stu-study-base-lib';

import {
  vge_UserCreditsLog_MaxCredits_FilterFunByKey,
  vge_UserCreditsLog_MaxCredits_GetObjLstAsync,
  vge_UserCreditsLog_MaxCredits_SortFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsvge_UserCreditsLog_MaxCreditsWApi';
import { ge_GameLevel_func } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import {
  BindDdl_ObjLstInDiv_V,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';
export const vge_UserCreditsLog_MaxCreditsEx_Controller = 'vge_UserCreditsLog_MaxCreditsExApi';
export const vge_UserCreditsLog_MaxCreditsEx_ConstructorName = 'vge_UserCreditsLog_MaxCreditsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vge_UserCreditsLog_MaxCreditsEx_GetWebApiUrl(
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
 * @param objvge_UserCreditsLog_MaxCreditsENS:源对象
 * @returns 目标对象=>clsvge_UserCreditsLog_MaxCreditsEN:objvge_UserCreditsLog_MaxCreditsENT
 **/
export function vge_UserCreditsLog_MaxCreditsEx_CopyToEx(
  objvge_UserCreditsLog_MaxCreditsENS: clsvge_UserCreditsLog_MaxCreditsEN,
): clsvge_UserCreditsLog_MaxCreditsENEx {
  const strThisFuncName = vge_UserCreditsLog_MaxCreditsEx_CopyToEx.name;
  const objvge_UserCreditsLog_MaxCreditsENT = new clsvge_UserCreditsLog_MaxCreditsENEx();
  try {
    ObjectAssign(objvge_UserCreditsLog_MaxCreditsENT, objvge_UserCreditsLog_MaxCreditsENS);
    return objvge_UserCreditsLog_MaxCreditsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vge_UserCreditsLog_MaxCreditsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvge_UserCreditsLog_MaxCreditsENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vge_UserCreditsLog_MaxCreditsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvge_UserCreditsLog_MaxCreditsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvge_UserCreditsLog_MaxCreditsObjLst = await vge_UserCreditsLog_MaxCredits_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrvge_UserCreditsLog_MaxCreditsExObjLst = arrvge_UserCreditsLog_MaxCreditsObjLst.map(
    vge_UserCreditsLog_MaxCreditsEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvge_UserCreditsLog_MaxCreditsExObjLst) {
      const conFuncMap = await vge_UserCreditsLog_MaxCreditsEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrvge_UserCreditsLog_MaxCreditsExObjLst.length == 0)
    return arrvge_UserCreditsLog_MaxCreditsExObjLst;
  let arrvge_UserCreditsLog_MaxCredits_Sel: Array<clsvge_UserCreditsLog_MaxCreditsENEx> =
    arrvge_UserCreditsLog_MaxCreditsExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvge_UserCreditsLog_MaxCredits_Sel = arrvge_UserCreditsLog_MaxCredits_Sel.sort(
        vge_UserCreditsLog_MaxCreditsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvge_UserCreditsLog_MaxCredits_Sel = arrvge_UserCreditsLog_MaxCredits_Sel.sort(
        objPagerPara.sortFun,
      );
    }
    arrvge_UserCreditsLog_MaxCredits_Sel = arrvge_UserCreditsLog_MaxCredits_Sel.slice(
      intStart,
      intEnd,
    );
    return arrvge_UserCreditsLog_MaxCredits_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vge_UserCreditsLog_MaxCreditsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvge_UserCreditsLog_MaxCreditsENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvge_UserCreditsLog_MaxCreditsS:源对象
 **/
export async function vge_UserCreditsLog_MaxCreditsEx_FuncMap_CourseName(
  objvge_UserCreditsLog_MaxCredits: clsvge_UserCreditsLog_MaxCreditsENEx,
) {
  const strThisFuncName = vge_UserCreditsLog_MaxCreditsEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objvge_UserCreditsLog_MaxCredits.courseName) == true) {
      const cc_Course_CourseId = objvge_UserCreditsLog_MaxCredits.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objvge_UserCreditsLog_MaxCredits.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vge_UserCreditsLog_MaxCreditsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvge_UserCreditsLog_MaxCreditsS:源对象
 **/
export async function vge_UserCreditsLog_MaxCreditsEx_FuncMap_EduClsName(
  objvge_UserCreditsLog_MaxCredits: clsvge_UserCreditsLog_MaxCreditsENEx,
) {
  const strThisFuncName = vge_UserCreditsLog_MaxCreditsEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objvge_UserCreditsLog_MaxCredits.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objvge_UserCreditsLog_MaxCredits.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        objvge_UserCreditsLog_MaxCredits.courseId,
      );
      objvge_UserCreditsLog_MaxCredits.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vge_UserCreditsLog_MaxCreditsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvge_UserCreditsLog_MaxCreditsS:源对象
 **/
export async function vge_UserCreditsLog_MaxCreditsEx_FuncMap_GameLevelName(
  objvge_UserCreditsLog_MaxCredits: clsvge_UserCreditsLog_MaxCreditsENEx,
) {
  const strThisFuncName = vge_UserCreditsLog_MaxCreditsEx_FuncMap_GameLevelName.name;
  try {
    if (IsNullOrEmpty(objvge_UserCreditsLog_MaxCredits.gameLevelName) == true) {
      const ge_GameLevel_GameLevelId = objvge_UserCreditsLog_MaxCredits.gameLevelId;
      const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        ge_GameLevel_GameLevelId,
        objvge_UserCreditsLog_MaxCredits.courseId,
      );
      objvge_UserCreditsLog_MaxCredits.gameLevelName = ge_GameLevel_GameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000182)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vge_UserCreditsLog_MaxCreditsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vge_UserCreditsLog_MaxCreditsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.gameLevelName.localeCompare(b.gameLevelName);
        };
      default:
        return vge_UserCreditsLog_MaxCredits_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.gameLevelName.localeCompare(a.gameLevelName);
        };
      default:
        return vge_UserCreditsLog_MaxCredits_SortFunByKey(strKey, AscOrDesc);
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
export function vge_UserCreditsLog_MaxCreditsEx_FuncMapByFldName(
  strFldName: string,
  objvge_UserCreditsLog_MaxCreditsEx: clsvge_UserCreditsLog_MaxCreditsENEx,
) {
  const strThisFuncName = vge_UserCreditsLog_MaxCreditsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvge_UserCreditsLog_MaxCreditsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
      return vge_UserCreditsLog_MaxCreditsEx_FuncMap_EduClsName(objvge_UserCreditsLog_MaxCreditsEx);
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
      return vge_UserCreditsLog_MaxCreditsEx_FuncMap_CourseName(objvge_UserCreditsLog_MaxCreditsEx);
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
      return vge_UserCreditsLog_MaxCreditsEx_FuncMap_GameLevelName(
        objvge_UserCreditsLog_MaxCreditsEx,
      );
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserName:
      return vge_UserCreditsLog_MaxCreditsEx_FuncMap_UserName(objvge_UserCreditsLog_MaxCreditsEx);
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserNameEx:
      return vge_UserCreditsLog_MaxCreditsEx_FuncMap_UserNameEx(objvge_UserCreditsLog_MaxCreditsEx);
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
 * 日期:2022-11-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vge_UserCreditsLog_MaxCreditsEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.courseName === value;
      };
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.eduClsName === value;
      };
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.gameLevelName === value;
      };
    default:
      return vge_UserCreditsLog_MaxCredits_FilterFunByKey(strKey, value);
  }
}

/**
 * 绑定基于语言:TypeScript的下拉框
 * (AGC.BusinessLogicEx.clsTabFeatureBLEx:GC_DdlBindFunctionInDiv4TypeScript)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strid_CurrEduCls:教学班流水号
 */
export async function vge_UserCreditsLog_MaxCreditsEx_BindDdl_UserIdByIdCurrEduClsInDivEx_CacheBak(
  strDivName: string,
  strDdlName: string,
  strid_CurrEduCls: string,
) {
  const strThisFuncName =
    vge_UserCreditsLog_MaxCreditsEx_BindDdl_UserIdByIdCurrEduClsInDivEx_CacheBak.name;
  console.log('strThisFuncName', strThisFuncName);
  if (IsNullOrEmpty(strid_CurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strid_CurrEduCls]不能为空！(In BindDdl_UserIdByIdCurrEduClsInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_UserIdByIdCurrEduClsInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_UserIdByIdCurrEduClsInDiv_Cache');
  const strCondition = Format(
    "{0}='{1}'",
    clsvge_UserCreditsLog_MaxCreditsEN.con_IdCurrEduCls,
    strid_CurrEduCls,
  );
  let arrObjLst_Sel0: Array<clsvge_UserCreditsLog_MaxCreditsEN> =
    await vge_UserCreditsLog_MaxCredits_GetObjLstAsync(strCondition);
  let arrObjLst_Sel: Array<clsvge_UserCreditsLog_MaxCreditsEN> =
    new Array<clsvge_UserCreditsLog_MaxCreditsEN>();
  for (const objInFor of arrObjLst_Sel0) {
    if (arrObjLst_Sel.find((x) => x.userId == objInFor.userId) == null) {
      arrObjLst_Sel.push(objInFor);
    }
  }

  let arrObjExLst_Sel: Array<clsvge_UserCreditsLog_MaxCreditsENEx> = arrObjLst_Sel.map(
    vge_UserCreditsLog_MaxCreditsEx_CopyToEx,
  );
  for (const objInFor of arrObjExLst_Sel) {
    await vge_UserCreditsLog_MaxCreditsEx_FuncMapByFldName(
      clsvge_UserCreditsLog_MaxCreditsENEx.con_UserNameEx,
      objInFor,
    );
  }
  arrObjExLst_Sel = arrObjExLst_Sel.sort((x, y) => x.userId.localeCompare(y.userId));
  BindDdl_ObjLstInDiv_V(
    strDivName,
    strDdlName,
    arrObjExLst_Sel,
    clsvge_UserCreditsLog_MaxCreditsEN.con_UserId,
    clsvge_UserCreditsLog_MaxCreditsENEx.con_UserNameEx,
    '用户',
  );
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvge_UserCreditsLog_MaxCreditsS:源对象
 **/
export async function vge_UserCreditsLog_MaxCreditsEx_FuncMap_UserName(
  objvge_UserCreditsLog_MaxCredits: clsvge_UserCreditsLog_MaxCreditsENEx,
) {
  const strThisFuncName = vge_UserCreditsLog_MaxCreditsEx_FuncMap_UserName.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objvge_UserCreditsLog_MaxCredits.userName) == true) {
      const vQxUsersSim_UserId = objvge_UserCreditsLog_MaxCredits.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objvge_UserCreditsLog_MaxCredits.userName = vQxUsersSim_UserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vge_UserCreditsLog_MaxCreditsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvge_UserCreditsLog_MaxCreditsS:源对象
 **/
export async function vge_UserCreditsLog_MaxCreditsEx_FuncMap_UserNameEx(
  objvge_UserCreditsLog_MaxCredits: clsvge_UserCreditsLog_MaxCreditsENEx,
) {
  const strThisFuncName = vge_UserCreditsLog_MaxCreditsEx_FuncMap_UserName.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objvge_UserCreditsLog_MaxCredits.userName) == true) {
      const vQxUsersSim_UserId = objvge_UserCreditsLog_MaxCredits.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objvge_UserCreditsLog_MaxCredits.userName = vQxUsersSim_UserName;
    }
    if (IsNullOrEmpty(objvge_UserCreditsLog_MaxCredits.userNameEx) == true) {
      objvge_UserCreditsLog_MaxCredits.userNameEx = Format(
        '{0}_{1}',
        objvge_UserCreditsLog_MaxCredits.userId,
        objvge_UserCreditsLog_MaxCredits.userName,
      );
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vge_UserCreditsLog_MaxCreditsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
