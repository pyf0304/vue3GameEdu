/**
 * 类名:clsge_UserScoreExWApi
 * 表名:ge_UserScore(01120985)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/27 21:49:57
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
 * 用户得分(ge_UserScore)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年01月27日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_UserScoreENEx } from '@/ts/L0Entity/GameLearn/clsge_UserScoreENEx';
import {
  ge_UserScore_GetObjLstByPagerAsync,
  ge_UserScore_SortFunByKey,
  ge_UserScore_FilterFunByKey,
  ge_UserScore_GetObjByKeyLstAsync,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserScoreWApi';
import { vQxUsersSim_funcKey } from 'share-gen-plat-base-lib';
import { clsvQxUsersSimEN } from 'share-gen-plat-base-lib';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvCurrEduCls_SimEN } from 'share-stu-study-base-lib';
import { clsge_UserScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserScoreEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vQxUsersSim_func } from 'share-gen-plat-base-lib';

export const ge_UserScoreEx_Controller = 'ge_UserScoreExApi';
export const ge_UserScoreEx_ConstructorName = 'ge_UserScoreEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserScoreEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_UserScoreENS:源对象
 * @returns 目标对象=>clsge_UserScoreEN:objge_UserScoreENT
 **/
export function ge_UserScoreEx_CopyToEx(
  objge_UserScoreENS: clsge_UserScoreEN,
): clsge_UserScoreENEx {
  const strThisFuncName = ge_UserScoreEx_CopyToEx.name;
  const objge_UserScoreENT = new clsge_UserScoreENEx();
  try {
    ObjectAssign(objge_UserScoreENT, objge_UserScoreENS);
    return objge_UserScoreENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_UserScoreENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserScoreEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserScoreENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserScoreObjLst = await ge_UserScore_GetObjLstByPagerAsync(objPagerPara);
  const arrge_UserScoreExObjLst = arrge_UserScoreObjLst.map(ge_UserScoreEx_CopyToEx);
  if (arrge_UserScoreExObjLst.length == 0) return arrge_UserScoreExObjLst;
  let arrge_UserScoreSel: Array<clsge_UserScoreENEx> = arrge_UserScoreExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserScoreSel = arrge_UserScoreSel.sort(
        ge_UserScoreEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserScoreSel = arrge_UserScoreSel.sort(objPagerPara.sortFun);
    }
    return arrge_UserScoreSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserScoreENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserScoreS:源对象
 **/
export async function ge_UserScoreEx_FuncMapUserName(objge_UserScore: clsge_UserScoreENEx) {
  const strThisFuncName = ge_UserScoreEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserScore.userName) == true) {
      const vQxUsersSimUserId = objge_UserScore.userId;
      const vQxUsersSimUserName = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_UserName,
        vQxUsersSimUserId,
      );
      objge_UserScore.userName = vQxUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserScoreS:源对象
 **/
export async function ge_UserScoreEx_FuncMapCourseName(objge_UserScore: clsge_UserScoreENEx) {
  const strThisFuncName = ge_UserScoreEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objge_UserScore.courseName) == true) {
      const vccCourseSimCourseId = objge_UserScore.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objge_UserScore.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserScoreS:源对象
 **/
export async function ge_UserScoreEx_FuncMapEduClsName(objge_UserScore: clsge_UserScoreENEx) {
  const strThisFuncName = ge_UserScoreEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserScore.eduClsName) == true) {
      const vCurrEduClsSimIdCurrEduCls = objge_UserScore.idCurrEduCls;
      const vCurrEduClsSimEduClsName = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_EduClsName,
        vCurrEduClsSimIdCurrEduCls,
        objge_UserScore.courseId,
      );
      objge_UserScore.eduClsName = vCurrEduClsSimEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-01-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_UserScoreEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserScoreENEx.con_UserName:
        return (a: clsge_UserScoreENEx, b: clsge_UserScoreENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_UserScoreENEx.con_CourseName:
        return (a: clsge_UserScoreENEx, b: clsge_UserScoreENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_UserScoreENEx.con_EduClsName:
        return (a: clsge_UserScoreENEx, b: clsge_UserScoreENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserScoreENEx.con_UpdDateSim:
        return (a: clsge_UserScoreENEx, b: clsge_UserScoreENEx) => {
          return a.updDateSim.localeCompare(b.updDateSim);
        };
      default:
        return ge_UserScore_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserScoreENEx.con_UserName:
        return (a: clsge_UserScoreENEx, b: clsge_UserScoreENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_UserScoreENEx.con_CourseName:
        return (a: clsge_UserScoreENEx, b: clsge_UserScoreENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_UserScoreENEx.con_EduClsName:
        return (a: clsge_UserScoreENEx, b: clsge_UserScoreENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserScoreENEx.con_UpdDateSim:
        return (a: clsge_UserScoreENEx, b: clsge_UserScoreENEx) => {
          return b.updDateSim.localeCompare(a.updDateSim);
        };
      default:
        return ge_UserScore_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-01-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_UserScoreEx_FuncMapByFldName(
  strFldName: string,
  objge_UserScoreEx: clsge_UserScoreENEx,
) {
  const strThisFuncName = ge_UserScoreEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_UserScoreEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserScoreENEx.con_UserName:
      return ge_UserScoreEx_FuncMapUserName(objge_UserScoreEx);
    case clsge_UserScoreENEx.con_CourseName:
      return ge_UserScoreEx_FuncMapCourseName(objge_UserScoreEx);
    case clsge_UserScoreENEx.con_EduClsName:
      return ge_UserScoreEx_FuncMapEduClsName(objge_UserScoreEx);
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
 * 日期:2025-01-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_UserScoreEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_UserScoreENEx.con_UserName:
      return (obj: clsge_UserScoreENEx) => {
        return obj.userName === value;
      };
    case clsge_UserScoreENEx.con_CourseName:
      return (obj: clsge_UserScoreENEx) => {
        return obj.courseName === value;
      };
    case clsge_UserScoreENEx.con_EduClsName:
      return (obj: clsge_UserScoreENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_UserScoreENEx.con_UpdDateSim:
      return (obj: clsge_UserScoreENEx) => {
        return obj.updDateSim === value;
      };
    default:
      return ge_UserScore_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserScoreS:源对象
 **/
export async function ge_UserScoreEx_FuncMapKeyUserName(
  objge_UserScore: clsge_UserScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserScoreEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserScore.userName) == true) return [];
    const vQxUsersSimUserName = objge_UserScore.userName;
    const arrUserId = await vQxUsersSim_funcKey(
      clsvQxUsersSimEN.con_UserName,
      vQxUsersSimUserName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000641)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
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
 * @param objge_UserScoreS:源对象
 **/
export async function ge_UserScoreEx_FuncMapKeyCourseName(
  objge_UserScore: clsge_UserScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserScoreEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objge_UserScore.courseName) == true) return [];
    const vccCourseSimCourseName = objge_UserScore.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000541)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
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
 * @param objge_UserScoreS:源对象
 **/
export async function ge_UserScoreEx_FuncMapKeyEduClsName(
  objge_UserScore: clsge_UserScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserScoreEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserScore.eduClsName) == true) return [];
    const vCurrEduClsSimEduClsName = objge_UserScore.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_EduClsName,
      vCurrEduClsSimEduClsName,
      objge_UserScore.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function ge_UserScoreEx_GetCreditsByUserId(
  strUserId: string,
  strIdCurrEduCls: string,
): Promise<number> {
  const strThisFuncName = ge_UserScoreEx_GetCreditsByUserId.name;
  try {
    const obj = await ge_UserScore_GetObjByKeyLstAsync(strIdCurrEduCls, strUserId);
    if (obj == null) return 0;
    return obj.credits;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)根据用户Id获取积分出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function ge_UserScoreEx_GetRemainCreditsByUserId(
  strUserId: string,
  strIdCurrEduCls: string,
): Promise<number> {
  const strThisFuncName = ge_UserScoreEx_GetCreditsByUserId.name;
  try {
    const obj = await ge_UserScore_GetObjByKeyLstAsync(strIdCurrEduCls, strUserId);
    if (obj == null) return 0;
    return obj.credits - obj.usedCredits;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)根据用户Id获取积分出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 兑换徽章
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strIdCurrEduCls: 教学班流水号
 * @param badgeTypeId: 徽章类型Id
 * @param strGameLevelId: 关卡Id
 * @param strCourseChapterId: 章节Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function ge_UserScoreEx_RedeemBadge(
  strUserId: string,
  strIdCurrEduCls: string,
  badgeTypeId: string,
  strGameLevelId: string,
  strCourseChapterId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = ge_UserScoreEx_RedeemBadge.name;
  const strAction = 'RedeemBadge';
  const strUrl = ge_UserScoreEx_GetWebApiUrl(ge_UserScoreEx_Controller, strAction);
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
      strGameLevelId,
      strCourseChapterId,
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
        ge_UserScoreEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_UserScoreEx_ConstructorName,
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_UserScoreEx_SortByCredits(a: clsge_UserScoreEN, b: clsge_UserScoreEN): number {
  return b.credits - a.credits;
}
