/**
 * 类名:clsge_UserCreditsLogExWApi
 * 表名:ge_UserCreditsLog(01120883)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:11:25
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
 * 用户积分日志(ge_UserCreditsLog)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_UserCreditsLogENEx } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsLogENEx';
import {
  ge_UserCreditsLog_GetObjLstByPagerAsync,
  ge_UserCreditsLog_SortFunByKey,
  ge_UserCreditsLog_FilterFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserCreditsLogWApi';
import {
  ge_GameLevel_func,
  ge_GameLevel_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { vUsersSim_func, vUsersSim_funcKey } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { clsge_UserCreditsLogEN } from '@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';

export const ge_UserCreditsLogExController = 'ge_UserCreditsLogExApi';
export const ge_UserCreditsLogEx_ConstructorName = 'ge_UserCreditsLogEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserCreditsLogEx_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserCreditsLogEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserCreditsLogENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserCreditsLogObjLst = await ge_UserCreditsLog_GetObjLstByPagerAsync(objPagerPara);
  const arrge_UserCreditsLogExObjLst = arrge_UserCreditsLogObjLst.map(ge_UserCreditsLogEx_CopyToEx);
  if (arrge_UserCreditsLogExObjLst.length == 0) return arrge_UserCreditsLogExObjLst;
  let arrge_UserCreditsLogSel: Array<clsge_UserCreditsLogENEx> = arrge_UserCreditsLogExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserCreditsLogSel = arrge_UserCreditsLogSel.sort(
        ge_UserCreditsLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserCreditsLogSel = arrge_UserCreditsLogSel.sort(objPagerPara.sortFun);
    }
    return arrge_UserCreditsLogSel;
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMapGameLevelName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMapGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.gameLevelName) == true) {
      const geGameLevelGameLevelId = objge_UserCreditsLog.gameLevelId;
      const geGameLevelGameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        geGameLevelGameLevelId,
        objge_UserCreditsLog.courseId,
      );
      objge_UserCreditsLog.gameLevelName = geGameLevelGameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000914)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_UserCreditsLogEx_FuncMapEduClsName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.eduClsName) == true) {
      const CurrEduClsIdCurrEduCls = objge_UserCreditsLog.idCurrEduCls;
      const CurrEduClsEduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsIdCurrEduCls,
        objge_UserCreditsLog.courseId,
      );
      objge_UserCreditsLog.eduClsName = CurrEduClsEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_UserCreditsLogEx_FuncMapUserName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.userName) == true) {
      const vUsersSimUserId = objge_UserCreditsLog.userId;
      const vUsersSimUserName = await vUsersSim_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSimUserId,
        clsPrivateSessionStorage.cmPrjId,
      );
      objge_UserCreditsLog.userName = vUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
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
export function ge_UserCreditsLogEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserCreditsLogENEx.con_UserName:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_UserCreditsLogENEx.con_UserNameEx:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return a.userNameEx.localeCompare(b.userNameEx);
        };
      case clsge_UserCreditsLogENEx.con_CourseName:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_UserCreditsLogENEx.con_EduClsName:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserCreditsLogENEx.con_GameLevelName:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return a.gameLevelName.localeCompare(b.gameLevelName);
        };
      case clsge_UserCreditsLogENEx.con_UpdDateSim:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return a.updDateSim.localeCompare(b.updDateSim);
        };
      default:
        return ge_UserCreditsLog_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserCreditsLogENEx.con_UserName:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_UserCreditsLogENEx.con_UserNameEx:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return b.userNameEx.localeCompare(a.userNameEx);
        };
      case clsge_UserCreditsLogENEx.con_CourseName:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_UserCreditsLogENEx.con_EduClsName:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserCreditsLogENEx.con_GameLevelName:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return b.gameLevelName.localeCompare(a.gameLevelName);
        };
      case clsge_UserCreditsLogENEx.con_UpdDateSim:
        return (a: clsge_UserCreditsLogENEx, b: clsge_UserCreditsLogENEx) => {
          return b.updDateSim.localeCompare(a.updDateSim);
        };
      default:
        return ge_UserCreditsLog_SortFunByKey(strKey, AscOrDesc);
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
export function ge_UserCreditsLogEx_FuncMapByFldName(
  strFldName: string,
  objge_UserCreditsLogEx: clsge_UserCreditsLogENEx,
) {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_UserCreditsLogEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserCreditsLogENEx.con_UserName:
      return ge_UserCreditsLogEx_FuncMapUserName(objge_UserCreditsLogEx);
    case clsge_UserCreditsLogENEx.con_EduClsName:
      return ge_UserCreditsLogEx_FuncMapEduClsName(objge_UserCreditsLogEx);
    case clsge_UserCreditsLogENEx.con_GameLevelName:
      return ge_UserCreditsLogEx_FuncMapGameLevelName(objge_UserCreditsLogEx);
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
export async function ge_UserCreditsLogEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_UserCreditsLogENEx.con_UserName:
      return (obj: clsge_UserCreditsLogENEx) => {
        return obj.userName === value;
      };
    case clsge_UserCreditsLogENEx.con_UserNameEx:
      return (obj: clsge_UserCreditsLogENEx) => {
        return obj.userNameEx === value;
      };
    case clsge_UserCreditsLogENEx.con_CourseName:
      return (obj: clsge_UserCreditsLogENEx) => {
        return obj.courseName === value;
      };
    case clsge_UserCreditsLogENEx.con_EduClsName:
      return (obj: clsge_UserCreditsLogENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_UserCreditsLogENEx.con_GameLevelName:
      return (obj: clsge_UserCreditsLogENEx) => {
        return obj.gameLevelName === value;
      };
    case clsge_UserCreditsLogENEx.con_UpdDateSim:
      return (obj: clsge_UserCreditsLogENEx) => {
        return obj.updDateSim === value;
      };
    default:
      return ge_UserCreditsLog_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMapKeyGameLevelName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMapKeyGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.gameLevelName) == true) return [];
    const geGameLevelGameLevelName = objge_UserCreditsLog.gameLevelName;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_GameLevelName,
      geGameLevelGameLevelName,
      objge_UserCreditsLog.courseId,
      enumComparisonOp.Like_03,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000920)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
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
 * @param objge_UserCreditsLogS:源对象
 **/
export async function ge_UserCreditsLogEx_FuncMapKeyUserName(
  objge_UserCreditsLog: clsge_UserCreditsLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserCreditsLogEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserCreditsLog.userName) == true) return [];
    const vUsersSimUserName = objge_UserCreditsLog.userName;
    const arrUserId = await vUsersSim_funcKey(
      clsvUsersSimEN.con_UserName,
      vUsersSimUserName,
      clsPrivateSessionStorage.cmPrjId,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000641)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserCreditsLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
