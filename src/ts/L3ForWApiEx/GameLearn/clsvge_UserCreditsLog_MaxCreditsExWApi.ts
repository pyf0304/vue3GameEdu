/**
 * 类名:clsvge_UserCreditsLog_MaxCreditsExWApi
 * 表名:vge_UserCreditsLog_MaxCredits(01120939)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/30 01:26:27
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v用户积分日志_最高分(vge_UserCreditsLog_MaxCredits)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月30日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vge_UserCreditsLog_MaxCredits_GetObjLstCache,
  vge_UserCreditsLog_MaxCredits_GetObjLstAsync,
  vge_UserCreditsLog_MaxCredits_SortFunByKey,
  vge_UserCreditsLog_MaxCredits_FilterFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsvge_UserCreditsLog_MaxCreditsWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvge_UserCreditsLog_MaxCreditsEN } from '@/ts/L0Entity/GameLearn/clsvge_UserCreditsLog_MaxCreditsEN';
import { clsvge_UserCreditsLog_MaxCreditsENEx } from '@/ts/L0Entity/GameLearn/clsvge_UserCreditsLog_MaxCreditsENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vge_UserCreditsLog_MaxCreditsExController = 'vge_UserCreditsLog_MaxCreditsExApi';
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

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vge_UserCreditsLog_MaxCreditsEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
): Promise<Array<clsvge_UserCreditsLog_MaxCreditsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvge_UserCreditsLog_MaxCreditsObjLst = await vge_UserCreditsLog_MaxCredits_GetObjLstCache(
    strIdCurrEduCls,
  );
  const arrvge_UserCreditsLog_MaxCreditsExObjLst = arrvge_UserCreditsLog_MaxCreditsObjLst.map(
    vge_UserCreditsLog_MaxCreditsEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvge_UserCreditsLog_MaxCreditsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvge_UserCreditsLog_MaxCreditsExObjLst) {
      await vge_UserCreditsLog_MaxCreditsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvge_UserCreditsLog_MaxCreditsExObjLst.length == 0)
    return arrvge_UserCreditsLog_MaxCreditsExObjLst;
  let arrvge_UserCreditsLog_MaxCreditsSel: Array<clsvge_UserCreditsLog_MaxCreditsENEx> =
    arrvge_UserCreditsLog_MaxCreditsExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvge_UserCreditsLog_MaxCreditsCond = new clsvge_UserCreditsLog_MaxCreditsENEx();
  ObjectAssign(objvge_UserCreditsLog_MaxCreditsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvge_UserCreditsLog_MaxCreditsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvge_UserCreditsLog_MaxCreditsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvge_UserCreditsLog_MaxCreditsSel.length == 0) return arrvge_UserCreditsLog_MaxCreditsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.sort(
        vge_UserCreditsLog_MaxCreditsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.sort(
        objPagerPara.sortFun,
      );
    }
    arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.slice(
      intStart,
      intEnd,
    );
    return arrvge_UserCreditsLog_MaxCreditsSel;
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
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
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvge_UserCreditsLog_MaxCreditsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvge_UserCreditsLog_MaxCreditsExObjLst) {
      await vge_UserCreditsLog_MaxCreditsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvge_UserCreditsLog_MaxCreditsExObjLst.length == 0)
    return arrvge_UserCreditsLog_MaxCreditsExObjLst;
  let arrvge_UserCreditsLog_MaxCreditsSel: Array<clsvge_UserCreditsLog_MaxCreditsENEx> =
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
      arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.sort(
        vge_UserCreditsLog_MaxCreditsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.sort(
        objPagerPara.sortFun,
      );
    }
    arrvge_UserCreditsLog_MaxCreditsSel = arrvge_UserCreditsLog_MaxCreditsSel.slice(
      intStart,
      intEnd,
    );
    return arrvge_UserCreditsLog_MaxCreditsSel;
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vge_UserCreditsLog_MaxCreditsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.gameLevelName.localeCompare(b.gameLevelName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_OrderNum:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.orderNum - b.orderNum;
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_Passed:
        return (a: clsvge_UserCreditsLog_MaxCreditsENEx) => {
          if (a.passed == true) return 1;
          else return -1;
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserNameEx:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return a.userNameEx.localeCompare(b.userNameEx);
        };
      default:
        return vge_UserCreditsLog_MaxCredits_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.gameLevelName.localeCompare(a.gameLevelName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserName:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_OrderNum:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.orderNum - a.orderNum;
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_Passed:
        return (b: clsvge_UserCreditsLog_MaxCreditsENEx) => {
          if (b.passed == true) return 1;
          else return -1;
        };
      case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserNameEx:
        return (
          a: clsvge_UserCreditsLog_MaxCreditsENEx,
          b: clsvge_UserCreditsLog_MaxCreditsENEx,
        ) => {
          return b.userNameEx.localeCompare(a.userNameEx);
        };
      default:
        return vge_UserCreditsLog_MaxCredits_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-30
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
  console.log(objvge_UserCreditsLog_MaxCreditsEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvge_UserCreditsLog_MaxCreditsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2024-01-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vge_UserCreditsLog_MaxCreditsEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_EduClsName:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.eduClsName === value;
      };
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_CourseName:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.courseName === value;
      };
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_GameLevelName:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.gameLevelName === value;
      };
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserName:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.userName === value;
      };
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_OrderNum:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.orderNum === value;
      };
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_Passed:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.passed === value;
      };
    case clsvge_UserCreditsLog_MaxCreditsENEx.con_UserNameEx:
      return (obj: clsvge_UserCreditsLog_MaxCreditsENEx) => {
        return obj.userNameEx === value;
      };
    default:
      return vge_UserCreditsLog_MaxCredits_FilterFunByKey(strKey, value);
  }
}
