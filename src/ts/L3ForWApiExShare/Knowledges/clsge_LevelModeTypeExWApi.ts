/*-- -- -- -- -- -- -- -- -- -- --
类名:clsge_LevelModeTypeExWApi
表名:ge_LevelModeType(01120907)
生成代码版本:2021.04.13.1
生成日期:2021/04/27 10:05:38
生成者:yy
生成服务器IP:103.116.76.183
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:知识点相关
模块英文名:Knowledges
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/
//import * as QQ from "q";
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
import { clsge_LevelModeTypeENEx } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeENEx';
import { ge_LevelModeType_GetSubObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import {
  ge_LevelModeType_FilterFunByKey,
  ge_LevelModeType_GetObjLstAsync,
  ge_LevelModeType_GetObjLstCache,
  ge_LevelModeType_SortFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import {
  BindDdl_ObjLstInDiv,
  GetObjKeys,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
export const ge_LevelModeTypeEx_Controller = 'ge_LevelModeTypeExApi';
export const ge_LevelModeTypeEx_ConstructorName = 'ge_LevelModeTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_LevelModeTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_LevelModeTypeENS:源对象
 * @returns 目标对象=>clsge_LevelModeTypeEN:objge_LevelModeTypeENT
 **/
export function ge_LevelModeTypeEx_CopyToEx(
  objge_LevelModeTypeENS: clsge_LevelModeTypeEN,
): clsge_LevelModeTypeENEx {
  const strThisFuncName = ge_LevelModeTypeEx_CopyToEx.name;
  const objge_LevelModeTypeENT = new clsge_LevelModeTypeENEx();
  try {
    ObjectAssign(objge_LevelModeTypeENT, objge_LevelModeTypeENS);
    return objge_LevelModeTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_LevelModeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_LevelModeTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_LevelModeTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_LevelModeTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrge_LevelModeTypeObjLst = await ge_LevelModeType_GetObjLstCache();
  const arrge_LevelModeTypeExObjLst = arrge_LevelModeTypeObjLst.map(ge_LevelModeTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_LevelModeTypeExObjLst) {
      const conFuncMap = await ge_LevelModeTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_LevelModeTypeExObjLst.length == 0) return arrge_LevelModeTypeExObjLst;
  let arrge_LevelModeType_Sel: Array<clsge_LevelModeTypeENEx> = arrge_LevelModeTypeExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objge_LevelModeType_Cond = new clsge_LevelModeTypeENEx();
  ObjectAssign(objge_LevelModeType_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsge_LevelModeTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_LevelModeType_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_LevelModeType_Sel.length == 0) return arrge_LevelModeType_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.sort(
        ge_LevelModeTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.sort(objPagerPara.sortFun);
    }
    arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.slice(intStart, intEnd);
    return arrge_LevelModeType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_LevelModeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_LevelModeTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_LevelModeTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_LevelModeTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_LevelModeTypeObjLst = await ge_LevelModeType_GetObjLstAsync(objPagerPara.whereCond);
  const arrge_LevelModeTypeExObjLst = arrge_LevelModeTypeObjLst.map(ge_LevelModeTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_LevelModeTypeExObjLst) {
      const conFuncMap = await ge_LevelModeTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_LevelModeTypeExObjLst.length == 0) return arrge_LevelModeTypeExObjLst;
  let arrge_LevelModeType_Sel: Array<clsge_LevelModeTypeENEx> = arrge_LevelModeTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.sort(
        ge_LevelModeTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.sort(objPagerPara.sortFun);
    }
    arrge_LevelModeType_Sel = arrge_LevelModeType_Sel.slice(intStart, intEnd);
    return arrge_LevelModeType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_LevelModeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_LevelModeTypeENEx>();
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
export function ge_LevelModeTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_LevelModeType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_LevelModeType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_LevelModeTypeEx_FuncMapByFldName(
  strFldName: string,
  objge_LevelModeTypeEx: clsge_LevelModeTypeENEx,
) {
  const strThisFuncName = ge_LevelModeTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_LevelModeTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_LevelModeTypeEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_LevelModeType_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function ge_LevelModeTypeEx_BindDdl_LevelModeTypeIdInDivCache(
  strDivName: string,
  strDdlName: string,
  objge_LevelModeType_Cond: clsge_LevelModeTypeEN,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_LevelModeTypeIdInDiv_Cache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_LevelModeTypeIdInDiv_Cache');
  const arrObjLst_Sel: Array<clsge_LevelModeTypeEN> = await ge_LevelModeType_GetSubObjLstCache(
    objge_LevelModeType_Cond,
  );
  //过滤不等于所有类型的ID；
  const arrObjLst_Sel1 = arrObjLst_Sel.filter((x) => x.levelModeTypeId != '03');

  BindDdl_ObjLstInDiv(
    strDivName,
    strDdlName,
    arrObjLst_Sel1,
    clsge_LevelModeTypeEN.con_LevelModeTypeId,
    clsge_LevelModeTypeEN.con_LevelModeTypeName,
    '关卡模式类型',
  );
}
