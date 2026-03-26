/**
 * 类名:clsEduClsCalendarExWApi
 * 表名:EduClsCalendar(01120988)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/03 15:56:37
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学班学历(EduClsCalendar)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年02月03日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  EduClsCalendar_GetObjLstCache,
  EduClsCalendar_GetObjLstByPagerAsync,
  EduClsCalendar_SortFunByKey,
} from '@/ts/L3ForWApi/DailyRunning/clsEduClsCalendarWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsEduClsCalendarEN } from '@/ts/L0Entity/DailyRunning/clsEduClsCalendarEN';
import { clsEduClsCalendarENEx } from '@/ts/L0Entity/DailyRunning/clsEduClsCalendarENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const eduClsCalendarEx_Controller = 'EduClsCalendarExApi';
export const eduClsCalendarEx_ConstructorName = 'eduClsCalendarEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function EduClsCalendarEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objEduClsCalendarENS:源对象
 * @returns 目标对象=>clsEduClsCalendarEN:objEduClsCalendarENT
 **/
export function EduClsCalendarEx_CopyToEx(
  objEduClsCalendarENS: clsEduClsCalendarEN,
): clsEduClsCalendarENEx {
  const strThisFuncName = EduClsCalendarEx_CopyToEx.name;
  const objEduClsCalendarENT = new clsEduClsCalendarENEx();
  try {
    ObjectAssign(objEduClsCalendarENT, objEduClsCalendarENS);
    return objEduClsCalendarENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      eduClsCalendarEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objEduClsCalendarENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function EduClsCalendarEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
): Promise<Array<clsEduClsCalendarENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrEduClsCalendarObjLst = await EduClsCalendar_GetObjLstCache(strIdCurrEduCls);
  const arrEduClsCalendarExObjLst = arrEduClsCalendarObjLst.map(EduClsCalendarEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsEduClsCalendarEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrEduClsCalendarExObjLst) {
      await EduClsCalendarEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrEduClsCalendarExObjLst.length == 0) return arrEduClsCalendarExObjLst;
  let arrEduClsCalendarSel: Array<clsEduClsCalendarENEx> = arrEduClsCalendarExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objEduClsCalendarCond = new clsEduClsCalendarENEx();
  ObjectAssign(objEduClsCalendarCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsEduClsCalendarWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrEduClsCalendarSel = arrEduClsCalendarSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objEduClsCalendarCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEduClsCalendarSel = arrEduClsCalendarSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrEduClsCalendarSel.length == 0) return arrEduClsCalendarSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrEduClsCalendarSel = arrEduClsCalendarSel.sort(
        EduClsCalendarEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrEduClsCalendarSel = arrEduClsCalendarSel.sort(objPagerPara.sortFun);
    }
    arrEduClsCalendarSel = arrEduClsCalendarSel.slice(intStart, intEnd);
    return arrEduClsCalendarSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      eduClsCalendarEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsEduClsCalendarENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function EduClsCalendarEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsEduClsCalendarENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrEduClsCalendarObjLst = await EduClsCalendar_GetObjLstByPagerAsync(objPagerPara);
  const arrEduClsCalendarExObjLst = arrEduClsCalendarObjLst.map(EduClsCalendarEx_CopyToEx);
  if (arrEduClsCalendarExObjLst.length == 0) return arrEduClsCalendarExObjLst;
  let arrEduClsCalendarSel: Array<clsEduClsCalendarENEx> = arrEduClsCalendarExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrEduClsCalendarSel = arrEduClsCalendarSel.sort(
        EduClsCalendarEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrEduClsCalendarSel = arrEduClsCalendarSel.sort(objPagerPara.sortFun);
    }
    return arrEduClsCalendarSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      eduClsCalendarEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsEduClsCalendarENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function EduClsCalendarEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return EduClsCalendar_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return EduClsCalendar_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-02-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function EduClsCalendarEx_FuncMapByFldName(
  strFldName: string,
  objEduClsCalendarEx: clsEduClsCalendarENEx,
) {
  const strThisFuncName = EduClsCalendarEx_FuncMapByFldName.name;
  console.log(objEduClsCalendarEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsEduClsCalendarEN.AttributeName;
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
 * 根据当前系统日期获取教学班日志对象
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @returns 获取的相应对象列表
 */
export async function EduClsCalendarEx_GetEduClsCalendarByCurrentSystemDate(
  strIdCurrEduCls: string,
): Promise<clsEduClsCalendarEN> {
  const strThisFuncName = EduClsCalendarEx_GetEduClsCalendarByCurrentSystemDate.name;
  const strAction = 'GetEduClsCalendarByCurrentSystemDate';
  const strUrl = EduClsCalendarEx_GetWebApiUrl(eduClsCalendarEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdCurrEduCls,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      //console.log(returnObj);
      return returnObj;
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
        eduClsCalendarEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        eduClsCalendarEx_ConstructorName,
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
 * 给定日期获取教学班日志对象
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @param strDate: 日期
 * @returns 获取的相应对象列表
 */
export async function EduClsCalendarEx_GetEduClsCalendarByDate(
  strIdCurrEduCls: string,
  strDate: string,
): Promise<clsEduClsCalendarEN> {
  const strThisFuncName = EduClsCalendarEx_GetEduClsCalendarByDate.name;
  const strAction = 'GetEduClsCalendarByDate';
  const strUrl = EduClsCalendarEx_GetWebApiUrl(eduClsCalendarEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdCurrEduCls,
      strDate,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      //console.log(returnObj);
      return returnObj;
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
        eduClsCalendarEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        eduClsCalendarEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
