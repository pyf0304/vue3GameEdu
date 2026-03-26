/**
 * 类名:clsSysCommentExWApi
 * 表名:SysComment(01120622)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/04 17:05:01
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 系统评论表(SysComment)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  SysComment_GetObjLstAsync,
  SysComment_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { clsSysCommentENEx } from '@/ts/L0Entity/GradEduTools/clsSysCommentENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const sysCommentEx_Controller = 'SysCommentExApi';
export const sysCommentEx_ConstructorName = 'sysCommentEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function SysCommentEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objSysCommentENS:源对象
 * @returns 目标对象=>clsSysCommentEN:objSysCommentENT
 **/
export function SysCommentEx_CopyToEx(objSysCommentENS: clsSysCommentEN): clsSysCommentENEx {
  const strThisFuncName = SysCommentEx_CopyToEx.name;
  const objSysCommentENT = new clsSysCommentENEx();
  try {
    ObjectAssign(objSysCommentENT, objSysCommentENS);
    return objSysCommentENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      sysCommentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objSysCommentENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function SysCommentEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSysCommentENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrSysCommentObjLst = await SysComment_GetObjLstAsync(objPagerPara.whereCond);
  const arrSysCommentExObjLst = arrSysCommentObjLst.map(SysCommentEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsSysCommentEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrSysCommentExObjLst) {
      await SysCommentEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrSysCommentExObjLst.length == 0) return arrSysCommentExObjLst;
  let arrSysCommentSel: Array<clsSysCommentENEx> = arrSysCommentExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSysCommentSel = arrSysCommentSel.sort(SysCommentEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSysCommentSel = arrSysCommentSel.sort(objPagerPara.sortFun);
    }
    arrSysCommentSel = arrSysCommentSel.slice(intStart, intEnd);
    return arrSysCommentSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sysCommentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysCommentENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SysCommentEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return SysComment_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return SysComment_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function SysCommentEx_FuncMapByFldName(
  strFldName: string,
  objSysCommentEx: clsSysCommentENEx,
) {
  const strThisFuncName = SysCommentEx_FuncMapByFldName.name;
  console.log(objSysCommentEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsSysCommentEN.AttributeName;
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

/// <summary>
/// 修改评论内的教学班周
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>是否存在记录？</returns>
export async function SysCommentEx_UpdateCommentWeekAsync(
  strIdCurrEduCls: string,
  updUser: string,
): Promise<boolean> {
  const strThisFuncName = '';
  const strAction = 'UpdateCommentWeek';
  const strUrl = SysCommentEx_GetWebApiUrl(sysCommentEx_Controller, strAction);

  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls,
        strUpdUser: updUser,
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
        sysCommentEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sysCommentEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
