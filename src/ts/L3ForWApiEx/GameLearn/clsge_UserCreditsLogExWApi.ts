//import * as QQ from "q";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { clsge_UserCreditsLogEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN';
import { clsge_UserCreditsLogENEx } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsLogENEx';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsStudentInfoEN } from 'share-stu-study-base-lib';
import { cc_Course_func } from 'share-stu-study-base-lib';

import {
  ge_UserCreditsLog_FilterFunByKey,
  ge_UserCreditsLog_GetFirstID,
  ge_UserCreditsLog_GetFirstObjAsync,
  ge_UserCreditsLog_GetObjLstAsync,
  ge_UserCreditsLog_GetObjLstByJSONObjLst,
  ge_UserCreditsLog_SortFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserCreditsLogWApi';
import { ge_GameLevel_func } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import {
  BindDdl_ObjLstInDiv,
  BindDdl_ObjLstInDivObj,
  GetObjKeys,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clscc_CourseEN } from 'share-stu-study-base-lib';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { useStudentInfoStore } from '@/store/modulesShare/studentInfo';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';
export const ge_UserCreditsLogEx_Controller = 'ge_UserCreditsLogExApi';
export const ge_UserCreditsLogEx_ConstructorName = 'ge_UserCreditsLogEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserCreditsLogEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_UserCreditsLogENS:源对象
 * @returns 目标对象=>clsge_UserCreditsLogEN:objge_UserCreditsLogENT
 **/
export function ge_UserCreditsLogEx_CopyToEx(
  objge_UserCreditsLogENS: clsge_UserCreditsLogEN,
): clsge_UserCreditsLogENEx {
  const strThisFuncName = ge_UserCreditsLogEx_CopyToEx.name;
  const objge_UserCreditsLogENT = new clsge_UserCreditsLogENEx();
  try {
    ObjectAssign(objge_UserCreditsLogENT, objge_UserCreditsLogENS);
    return objge_UserCreditsLogENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_UserCreditsLogENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserCreditsLogEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserCreditsLogENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserCreditsLogObjLst = await ge_UserCreditsLog_GetObjLstAsync(objPagerPara.whereCond);
  const arrge_UserCreditsLogExObjLst = arrge_UserCreditsLogObjLst.map(ge_UserCreditsLogEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_UserCreditsLogExObjLst) {
      const conFuncMap = await ge_UserCreditsLogEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_UserCreditsLogExObjLst.length == 0) return arrge_UserCreditsLogExObjLst;
  let arrge_UserCreditsLog_Sel: Array<clsge_UserCreditsLogENEx> = arrge_UserCreditsLogExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserCreditsLog_Sel = arrge_UserCreditsLog_Sel.sort(
        ge_UserCreditsLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_UserCreditsLog_Sel = arrge_UserCreditsLog_Sel.sort(objPagerPara.sortFun);
    }
    arrge_UserCreditsLog_Sel = arrge_UserCreditsLog_Sel.slice(intStart, intEnd);
    return arrge_UserCreditsLog_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserCreditsLogENEx>();
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
export function ge_UserCreditsLogEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_UserCreditsLog_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_UserCreditsLog_SortFunByKey(strKey, AscOrDesc);
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
export function ge_UserCreditsLogEx_FuncMapByFldName(
  strFldName: string,
  objge_UserCreditsLogEx: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_UserCreditsLogEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserCreditsLogENEx.con_GameLevelName:
      return ge_UserCreditsLogEx_FuncMap_GameLevelName(objge_UserCreditsLogEx);
    case clsge_UserCreditsLogENEx.con_EduClsName:
      return ge_UserCreditsLogEx_FuncMap_EduClsName(objge_UserCreditsLogEx);
    case clsge_UserCreditsLogENEx.con_CourseName:
      return ge_UserCreditsLogEx_FuncMap_CourseName(objge_UserCreditsLogEx);
    case clsge_UserCreditsLogENEx.con_UpdDateSim:
      return ge_UserCreditsLogEx_FuncMap_UpdDate_Sim(objge_UserCreditsLogEx);
    case clsge_UserCreditsLogENEx.con_UserName:
      return ge_UserCreditsLogEx_FuncMap_UserName(objge_UserCreditsLogEx);
    case clsge_UserCreditsLogENEx.con_UserNameEx:
      return ge_UserCreditsLogEx_FuncMap_UserNameEx(objge_UserCreditsLogEx);

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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMap_UpdDate_Sim(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMap_UpdDate_Sim.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.updDateSim) == true) {
      objge_UserCreditsLog.updDateSim = clsDateTime.GetDateTime_Sim(objge_UserCreditsLog.updDate);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000219)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export async function ge_UserCreditsLogEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_UserCreditsLog_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取每个用户的排名用户每关最高分集合；
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function ge_UserCreditsLogEx_Getge_UserCreditsRankLstEx(
  strWhere: string,
): Promise<Array<clsge_UserCreditsLogEN>> {
  const strThisFuncName = 'Getge_UserCreditsRankLstEx';
  const strAction = 'Getge_UserCreditsRankLstEx';
  let strUrl = ge_UserCreditsLogEx_GetWebApiUrl(ge_UserCreditsLogEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { strWhere: strWhere },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ge_UserCreditsLogEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ge_UserCreditsLog_GetObjLstByJSONObjLst(returnObjLst);
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
        ge_UserCreditsLogEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserCreditsLogEx_Controller,
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
/// 获取用户每关最高分集合；
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function ge_UserCreditsLogEx_Getge_UserCreditsObjLstEx(
  userId: string,
  idCurrEduCls: string,
): Promise<Array<clsge_UserCreditsLogEN>> {
  const strThisFuncName = 'Getge_UserCreditsObjLstEx';
  const strAction = 'Getge_UserCreditsObjLstEx';
  let strUrl = ge_UserCreditsLogEx_GetWebApiUrl(ge_UserCreditsLogEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();

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
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ge_UserCreditsLogEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ge_UserCreditsLog_GetObjLstByJSONObjLst(returnObjLst);
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
        ge_UserCreditsLogEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserCreditsLogEx_Controller,
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
/// 映射函数。根据表映射把输入字段值，映射成输出字段值
/// 作者:yy
/// 日期:20210414165925
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
/// </summary>
/// <param name = "strInFldName">输入字段名</param>
/// <param name = "strOutFldName">输出字段名</param>
/// <param name = "strInValue">输入字段值</param>
/// <returns>返回一个输出字段值</returns>
export async function ge_UserCreditsLogEx_funcStudentInfo(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  const studentInfoStore = useStudentInfoStore();
  if (strInFldName != clsStudentInfoEN.con_StuId) {
    const strMsg: string = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }

  // const attributeNames0 = clsStudentInfoEN_G.AttributeName;
  const attributeNames0 = (clsStudentInfoEN as any).AttributeName;

  // const attributeNames1 = clsStudentInfoEN_T.AttributeName;
  console.log(attributeNames0);
  if (attributeNames0.indexOf(strOutFldName) == -1) {
    const strMsg: string = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strInFldName,
      attributeNames0.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const objStudentInfo = await studentInfoStore.getObj(strInValue);
  if (objStudentInfo == null) return '';
  return objStudentInfo.GetFldValue(strOutFldName).toString();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMap_GameLevelName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMap_GameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.gameLevelName) == true) {
      const ge_GameLevel_GameLevelId = objge_UserCreditsLog.gameLevelId;
      const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        ge_GameLevel_GameLevelId,
        objge_UserCreditsLog.courseId,
      );
      objge_UserCreditsLog.gameLevelName = ge_GameLevel_GameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000182)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMap_EduClsName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objge_UserCreditsLog.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        objge_UserCreditsLog.courseId,
      );
      objge_UserCreditsLog.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMap_CourseName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.courseName) == true) {
      const cc_Course_CourseId = objge_UserCreditsLog.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objge_UserCreditsLog.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function ge_UserCreditsLogEx_GetObjByIdCurrEduClsAndUserId(
  strIdCurrEduCls: string,
  strUserId: string,
  credits: Number,
): Promise<clsge_UserCreditsLogEN | null> {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  try {
    // const arrge_UserCreditsLogCache = await ge_UserCreditsLog_GetObjLstCache(strIdCurrEduCls);
    // const objge_UserCreditsLog = arrge_UserCreditsLogCache.find(
    //   (x) => x.credits == credits && x.userId == strUserId,
    // );
    const strWhere = `credits = ${credits} and userId = '${strUserId}' and idCurrEduCls = '${strIdCurrEduCls}'`;
    const objge_UserCreditsLog = await ge_UserCreditsLog_GetFirstObjAsync(strWhere);

    if (objge_UserCreditsLog == undefined) return null;
    return objge_UserCreditsLog;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
}

export async function ge_UserCreditsLogEx_GetObjByGameLevelIdAndUserId(
  strIdCurrEduCls: string,
  strGameLevelId: string,
  strUserId: string,
  strExamBatchNo: string,
): Promise<clsge_UserCreditsLogEN | null> {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  try {
    const strWhere = `gameLevelId = '${strGameLevelId}' and userId = '${strUserId}' and examBatchNo = '${strExamBatchNo}' and idCurrEduCls = '${strIdCurrEduCls}'`;
    const objge_UserCreditsLog = await ge_UserCreditsLog_GetFirstObjAsync(strWhere);

    if (objge_UserCreditsLog == undefined) {
      const strWhere = `${clsge_UserCreditsLogEN.con_UserId} = '${strUserId}' and ${clsge_UserCreditsLogEN.con_ExamBatchNo} = 'strExamBatchNo'`;
      const objge_UserCreditsLog0 = await ge_UserCreditsLog_GetFirstObjAsync(strWhere);
      if (objge_UserCreditsLog0 == null) return null;

      return objge_UserCreditsLog0;
    }

    return objge_UserCreditsLog;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
}

export async function ge_UserCreditsLogEx_GetMaxCreditObjByIdCurrEduClsAndUserId(
  strIdCurrEduCls: string,
  strUserId: string,
  strGameLevelId: string,
): Promise<clsge_UserCreditsLogEN | null> {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  try {
    const strWhere = `gameLevelId = '${strGameLevelId}' and userId = '${strUserId}' and idCurrEduCls = '${strIdCurrEduCls}'`;
    const objge_UserCreditsLog_Sel = await ge_UserCreditsLog_GetObjLstAsync(strWhere);

    if (objge_UserCreditsLog_Sel == undefined || objge_UserCreditsLog_Sel.length == 0) return null;
    const objge_UserCreditsLog_Sort = objge_UserCreditsLog_Sel.sort(
      (x, y) => y.credits - x.credits,
    );
    return objge_UserCreditsLog_Sort[0];
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMap_UserName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMap_UserName.name;
  try {
    const vQxUsersSimStore = usevQxUsersSimStore();
    if (IsNullOrEmpty(objge_UserCreditsLog.userName) == true) {
      const vQxUsersSim_UserId = objge_UserCreditsLog.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objge_UserCreditsLog.userName = vQxUsersSim_UserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strid_CurrEduCls:教学班流水号
 */
export async function ge_UserCreditsLog_BindDdl_UserIdByIdCurrEduClsInDivCache(
  strDivName: string,
  strDdlName: string,
  strid_CurrEduCls: string,
) {
  const strThisFuncName = 'BindDdl_UserIdByIdCurrEduClsInDiv_Cache';

  if (IsNullOrEmpty(strid_CurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strid_CurrEduCls]不能为空！(In BindDdl_UserIdByIdCurrEduClsInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strid_CurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strid_CurrEduCls]的长度:[{0}]不正确！',
      strid_CurrEduCls.length,
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
  //console.log("开始：BindDdl_UserIdByIdCurrEduClsInDiv_Cache");

  const strWhere = ` idCurrEduCls = '${strid_CurrEduCls}'`;
  const arrObjLst_Sel = await ge_UserCreditsLog_GetObjLstAsync(strWhere);

  if (arrObjLst_Sel == null) return;
  BindDdl_ObjLstInDiv(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsge_UserCreditsLogEN.con_UserId,
    clsge_UserCreditsLogENEx.con_UserName,
    '用户积分日志',
  );
}

/**
 * 绑定基于语言:TypeScript的下拉框
 * (AGC.BusinessLogicEx.clsTabFeatureBLEx:GC_DdlBindFunctionInDiv4TypeScript)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strid_CurrEduCls:教学班流水号
 */
export async function ge_UserCreditsLogEx_BindDdl_UserIdByIdCurrEduClsInDivExCache(
  divName: HTMLDivElement,
  strDdlName: string,
  strid_CurrEduCls: string,
) {
  const strThisFuncName = ge_UserCreditsLogEx_BindDdl_UserIdByIdCurrEduClsInDivExCache.name;
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
    clsge_UserCreditsLogEN.con_IdCurrEduCls,
    strid_CurrEduCls,
  );
  let arrObjLst_Sel0: Array<clsge_UserCreditsLogEN> = await ge_UserCreditsLog_GetObjLstAsync(
    strCondition,
  );
  let arrObjLst_Sel: Array<clsge_UserCreditsLogEN> = new Array<clsge_UserCreditsLogEN>();
  for (const objInFor of arrObjLst_Sel0) {
    if (arrObjLst_Sel.find((x) => x.userId == objInFor.userId) == null) {
      arrObjLst_Sel.push(objInFor);
    }
  }

  let arrObjExLst_Sel: Array<clsge_UserCreditsLogENEx> = arrObjLst_Sel.map(
    ge_UserCreditsLogEx_CopyToEx,
  );
  for (const objInFor of arrObjExLst_Sel) {
    await ge_UserCreditsLogEx_FuncMapByFldName(clsge_UserCreditsLogENEx.con_UserNameEx, objInFor);
  }
  arrObjExLst_Sel = arrObjExLst_Sel.sort((x, y) => x.userId.localeCompare(y.userId));
  BindDdl_ObjLstInDivObj(
    divName,
    strDdlName,
    arrObjExLst_Sel,
    clsge_UserCreditsLogEN.con_UserId,
    clsge_UserCreditsLogENEx.con_UserNameEx,
    '用户',
  );
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMap_UserNameEx(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMap_UserName.name;
  try {
    const vQxUsersSimStore = usevQxUsersSimStore();
    if (IsNullOrEmpty(objge_UserCreditsLog.userName) == true) {
      const vQxUsersSim_UserId = objge_UserCreditsLog.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objge_UserCreditsLog.userName = vQxUsersSim_UserName;
    }
    if (IsNullOrEmpty(objge_UserCreditsLog.userNameEx) == true) {
      objge_UserCreditsLog.userNameEx = Format(
        '{0}_{1}',
        objge_UserCreditsLog.userId,
        objge_UserCreditsLog.userName,
      );
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 计算一个教学班的用户积分日志
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserCreditsLogEx_CalcCreditLog(
  strIdCurrEduCls: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserCreditsLogEx_CalcCreditLog.name;
  const strAction = 'CalcCreditLog';
  const strUrl = ge_UserCreditsLogEx_GetWebApiUrl(ge_UserCreditsLogEx_Controller, strAction);
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
        ge_UserCreditsLogEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserCreditsLogEx_ConstructorName,
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
 * 计算一个用户的积分日志
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @param strUserId: 用户Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserCreditsLogEx_CalcCreditLogByUserId(
  strIdCurrEduCls: string,
  bolSubmit: boolean,
  strUserId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserCreditsLogEx_CalcCreditLogByUserId.name;
  const strAction = 'CalcCreditLogByUserId';
  const strUrl = ge_UserCreditsLogEx_GetWebApiUrl(ge_UserCreditsLogEx_Controller, strAction);
  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls: strIdCurrEduCls,
        bolSubmit: bolSubmit,
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
        ge_UserCreditsLogEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserCreditsLogEx_ConstructorName,
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
 * 添加用户闯关日志
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strExamBatchNo: 测试批次号
 * @param bolSubmit: 是否提交
 * @param strUserId: 用户Id
 * @param strIdCurrEduCls: 教学班流水号
 * @returns 获取的相应对象列表
 */
export async function ge_UserCreditsLogEx_Addge_UserCreditsLog(
  strGameLevelId: string,
  strExamBatchNo: string,
  bolSubmit: boolean,
  strUserId: string,
  strIdCurrEduCls: string,
): Promise<number> {
  const strThisFuncName = ge_UserCreditsLogEx_Addge_UserCreditsLog.name;
  const strAction = 'Addge_UserCreditsLog';
  const strUrl = ge_UserCreditsLogEx_GetWebApiUrl(ge_UserCreditsLogEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGameLevelId,
      strExamBatchNo,
      bolSubmit,
      strUserId,
      strIdCurrEduCls,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
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
        ge_UserCreditsLogEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserCreditsLogEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function ge_UserCreditsLogEx_Addge_UserCreditsLog_Marker(
  strGameLevelId: string,
  strExamBatchNo: string,
  bolSubmit: boolean,
  strUserId: string,
  strIdCurrEduCls: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserCreditsLogEx_Addge_UserCreditsLog_Marker.name;
  const strAction = 'Addge_UserCreditsLog_Marker';
  const strUrl = ge_UserCreditsLogEx_GetWebApiUrl(ge_UserCreditsLogEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGameLevelId,
      strExamBatchNo,
      bolSubmit,
      strUserId,
      strIdCurrEduCls,
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
        ge_UserCreditsLogEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserCreditsLogEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
