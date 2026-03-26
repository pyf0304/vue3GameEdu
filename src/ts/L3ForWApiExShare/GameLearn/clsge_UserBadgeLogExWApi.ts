/**
 * 类名:clsge_UserBadgeLogExWApi
 * 表名:ge_UserBadgeLog(01120881)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:11:19
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
 * 用户徽章日志(ge_UserBadgeLog)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ge_UserBadgeLog_GetObjLstCache,
  ge_UserBadgeLog_GetObjLstByPagerAsync,
  ge_UserBadgeLog_SortFunByKey,
  ge_UserBadgeLog_FilterFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserBadgeLogWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsge_UserBadgeLogEN } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeLogEN';
import { clsge_UserBadgeLogENEx } from '@/ts/L0Entity/GameLearn/clsge_UserBadgeLogENEx';
import { BadgeType_func, BadgeType_funcKey } from '@/ts/L3ForWApi/GameLearn/clsBadgeTypeWApi';
import { clsBadgeTypeEN } from '@/ts/L0Entity/GameLearn/clsBadgeTypeEN';
import { vUsersSim_func, vUsersSim_funcKey } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  ge_GameLevel_func,
  ge_GameLevel_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export const ge_UserBadgeLogExController = 'ge_UserBadgeLogExApi';
export const ge_UserBadgeLogEx_ConstructorName = 'ge_UserBadgeLogEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserBadgeLogEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
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
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsge_UserBadgeLogEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrge_UserBadgeLogExObjLst) {
      await ge_UserBadgeLogEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_UserBadgeLogExObjLst.length == 0) return arrge_UserBadgeLogExObjLst;
  let arrge_UserBadgeLogSel: Array<clsge_UserBadgeLogENEx> = arrge_UserBadgeLogExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objge_UserBadgeLogCond = new clsge_UserBadgeLogENEx();
  ObjectAssign(objge_UserBadgeLogCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsge_UserBadgeLogWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_UserBadgeLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_UserBadgeLogSel.length == 0) return arrge_UserBadgeLogSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.sort(
        ge_UserBadgeLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.sort(objPagerPara.sortFun);
    }
    arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.slice(intStart, intEnd);
    return arrge_UserBadgeLogSel;
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserBadgeLogEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserBadgeLogENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserBadgeLogObjLst = await ge_UserBadgeLog_GetObjLstByPagerAsync(objPagerPara);
  const arrge_UserBadgeLogExObjLst = arrge_UserBadgeLogObjLst.map(ge_UserBadgeLogEx_CopyToEx);
  if (arrge_UserBadgeLogExObjLst.length == 0) return arrge_UserBadgeLogExObjLst;
  let arrge_UserBadgeLogSel: Array<clsge_UserBadgeLogENEx> = arrge_UserBadgeLogExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.sort(
        ge_UserBadgeLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserBadgeLogSel = arrge_UserBadgeLogSel.sort(objPagerPara.sortFun);
    }
    return arrge_UserBadgeLogSel;
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserBadgeLogS:源对象
 **/
export async function ge_UserBadgeLogEx_FuncMapBadgeTypeName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
) {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMapBadgeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.badgeTypeName) == true) {
      const BadgeTypeBadgeTypeId = objge_UserBadgeLog.badgeTypeId;
      const BadgeTypeBadgeTypeName = await BadgeType_func(
        clsBadgeTypeEN.con_BadgeTypeId,
        clsBadgeTypeEN.con_BadgeTypeName,
        BadgeTypeBadgeTypeId,
      );
      objge_UserBadgeLog.badgeTypeName = BadgeTypeBadgeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000969)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_UserBadgeLogEx_FuncMapUserName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
) {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.userName) == true) {
      const vUsersSimUserId = objge_UserBadgeLog.userId;
      const vUsersSimUserName = await vUsersSim_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSimUserId,
        clsPrivateSessionStorage.cmPrjId,
      );
      objge_UserBadgeLog.userName = vUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_UserBadgeLogEx_FuncMapGameLevelName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
) {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMapGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.gameLevelName) == true) {
      const geGameLevelGameLevelId = objge_UserBadgeLog.gameLevelId;
      const geGameLevelGameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        geGameLevelGameLevelId,
        clsPubLocalStorage.courseId,
      );
      objge_UserBadgeLog.gameLevelName = geGameLevelGameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000914)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeLogEx_ConstructorName,
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
export function ge_UserBadgeLogEx_SortFunByKey(strKey: string, AscOrDesc: string) {
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
 * 作者:pyf
 * 日期:2024-11-13
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
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_UserBadgeLogEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserBadgeLogENEx.con_BadgeTypeName:
      return ge_UserBadgeLogEx_FuncMapBadgeTypeName(objge_UserBadgeLogEx);
    case clsge_UserBadgeLogENEx.con_UserName:
      return ge_UserBadgeLogEx_FuncMapUserName(objge_UserBadgeLogEx);
    case clsge_UserBadgeLogENEx.con_GameLevelName:
      return ge_UserBadgeLogEx_FuncMapGameLevelName(objge_UserBadgeLogEx);
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
export async function ge_UserBadgeLogEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_UserBadgeLogENEx.con_BadgeTypeName:
      return (obj: clsge_UserBadgeLogENEx) => {
        return obj.badgeTypeName === value;
      };
    case clsge_UserBadgeLogENEx.con_EduClsName:
      return (obj: clsge_UserBadgeLogENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_UserBadgeLogENEx.con_UserName:
      return (obj: clsge_UserBadgeLogENEx) => {
        return obj.userName === value;
      };
    case clsge_UserBadgeLogENEx.con_GameLevelName:
      return (obj: clsge_UserBadgeLogENEx) => {
        return obj.gameLevelName === value;
      };
    default:
      return ge_UserBadgeLog_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserBadgeLogS:源对象
 **/
export async function ge_UserBadgeLogEx_FuncMapKeyBadgeTypeName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMapKeyBadgeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.badgeTypeName) == true) return [];
    const BadgeTypeBadgeTypeName = objge_UserBadgeLog.badgeTypeName;
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
      ge_UserBadgeLogEx_ConstructorName,
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
 * @param objge_UserBadgeLogS:源对象
 **/
export async function ge_UserBadgeLogEx_FuncMapKeyUserName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.userName) == true) return [];
    const vUsersSimUserName = objge_UserBadgeLog.userName;
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
      ge_UserBadgeLogEx_ConstructorName,
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
 * @param objge_UserBadgeLogS:源对象
 **/
export async function ge_UserBadgeLogEx_FuncMapKeyGameLevelName(
  objge_UserBadgeLog: clsge_UserBadgeLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserBadgeLogEx_FuncMapKeyGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserBadgeLog.gameLevelName) == true) return [];
    const geGameLevelGameLevelName = objge_UserBadgeLog.gameLevelName;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_GameLevelName,
      geGameLevelGameLevelName,
      clsPubLocalStorage.courseId,
      enumComparisonOp.Like_03,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000920)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserBadgeLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
