/*-- -- -- -- -- -- -- -- -- -- --
类名:clsQuestionTypeExWApi
表名:QuestionType(01120008)
生成代码版本:2021.04.13.1
生成日期:2021/04/27 10:52:08
生成者:lyl
生成服务器IP:103.116.76.183
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:系统参数
模块英文名:SysPara
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 题目类型(QuestionType)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by lyl on 2021年04月27日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */
///// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
///// <reference path="../../../scripts/typings/q/q.d.ts" />
///// <reference path="../../../scripts/typings/handlebars/handlebars.d.ts" />
//import * as QQ from "q";
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { clsQuestionTypeENEx } from '@/ts/L0Entity/SystemSet/clsQuestionTypeENEx';
import {
  QuestionType_FilterFunByKey,
  QuestionType_GetObjLstAsync,
  QuestionType_GetObjLstCache,
  QuestionType_GetSubObjLstCache,
  QuestionType_SortFunByKey,
} from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import {
  BindDdl_ObjLst,
  BindDdl_ObjLstInDivObj,
  GetObjKeys,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const questionTypeEx_Controller = 'QuestionTypeExApi';
export const questionTypeEx_ConstructorName = 'questionTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QuestionTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQuestionTypeENS:源对象
 * @returns 目标对象=>clsQuestionTypeEN:objQuestionTypeENT
 **/
export function QuestionTypeEx_CopyToEx(
  objQuestionTypeENS: clsQuestionTypeEN,
): clsQuestionTypeENEx {
  const strThisFuncName = QuestionTypeEx_CopyToEx.name;
  const objQuestionTypeENT = new clsQuestionTypeENEx();
  try {
    ObjectAssign(objQuestionTypeENT, objQuestionTypeENS);
    return objQuestionTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQuestionTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QuestionTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQuestionTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrQuestionTypeObjLst = await QuestionType_GetObjLstCache();
  const arrQuestionTypeExObjLst = arrQuestionTypeObjLst.map(QuestionTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrQuestionTypeExObjLst) {
      const conFuncMap = await QuestionTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQuestionTypeExObjLst.length == 0) return arrQuestionTypeExObjLst;
  let arrQuestionType_Sel: Array<clsQuestionTypeENEx> = arrQuestionTypeExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objQuestionType_Cond = new clsQuestionTypeENEx();
  ObjectAssign(objQuestionType_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsQuestionTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQuestionType_Sel = arrQuestionType_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQuestionType_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQuestionType_Sel = arrQuestionType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQuestionType_Sel.length == 0) return arrQuestionType_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQuestionType_Sel = arrQuestionType_Sel.sort(
        QuestionTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQuestionType_Sel = arrQuestionType_Sel.sort(objPagerPara.sortFun);
    }
    arrQuestionType_Sel = arrQuestionType_Sel.slice(intStart, intEnd);
    return arrQuestionType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      questionTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQuestionTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QuestionTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQuestionTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQuestionTypeObjLst = await QuestionType_GetObjLstAsync(objPagerPara.whereCond);
  const arrQuestionTypeExObjLst = arrQuestionTypeObjLst.map(QuestionTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrQuestionTypeExObjLst) {
      const conFuncMap = await QuestionTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQuestionTypeExObjLst.length == 0) return arrQuestionTypeExObjLst;
  let arrQuestionType_Sel: Array<clsQuestionTypeENEx> = arrQuestionTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQuestionType_Sel = arrQuestionType_Sel.sort(
        QuestionTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQuestionType_Sel = arrQuestionType_Sel.sort(objPagerPara.sortFun);
    }
    arrQuestionType_Sel = arrQuestionType_Sel.slice(intStart, intEnd);
    return arrQuestionType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      questionTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQuestionTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QuestionTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QuestionType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QuestionType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QuestionTypeEx_FuncMapByFldName(
  strFldName: string,
  objQuestionTypeEx: clsQuestionTypeENEx,
) {
  const strThisFuncName = QuestionTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsQuestionTypeEN.AttributeName;
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
 * 日期:2022-11-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QuestionTypeEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return QuestionType_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function QuestionTypeEx_BindDdl_QuestionTypeIdInDiv_CacheEx(
  objDdl: HTMLDivElement,
  strDdlName: string,
) {
  // const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_QuestionTypeIdInDiv_Cache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_QuestionTypeIdInDiv_Cache');
  let arrObjLst_Sel: Array<clsQuestionTypeEN> = await QuestionType_GetObjLstCache();
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.isUse == true);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.orderNum - y.orderNum); //排序

  BindDdl_ObjLstInDivObj(
    objDdl,
    strDdlName,
    arrObjLst_Sel,
    clsQuestionTypeEN.con_QuestionTypeId,
    clsQuestionTypeEN.con_QuestionTypeName,
    '题目类型',
  );
}

export async function QuestionTypeEx_GetDdlDataCacheEx() {
  // const objDdl = document.getElementById(strDdlName);

  //为数据源于表的下拉框设置内容
  const arrQuestionType = new Array<clsQuestionTypeEN>();
  let arrObjLst_Sel: Array<clsQuestionTypeEN> = await QuestionType_GetObjLstCache();
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.isUse == true);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.orderNum - y.orderNum); //排序
  // return arrObjLst_Sel;

  const obj0 = new clsQuestionTypeEN();
  obj0.questionTypeId = '0';
  obj0.questionTypeName = '选题型...';
  arrQuestionType.push(obj0);
  arrObjLst_Sel.forEach((x) => arrQuestionType.push(x));
  return arrQuestionType;
}
/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function QuestionTypeEx_BindDdl_QuestionTypeIdCacheEx(
  strDdlName: string,
  objQuestionType_Cond: clsQuestionTypeEN,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_QuestionTypeIdCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_QuestionTypeIdCache');
  let arrObjLst_Sel: Array<clsQuestionTypeEN> = await QuestionType_GetSubObjLstCache(
    objQuestionType_Cond,
  );
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.isUse == true);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.orderNum - y.orderNum); //排序

  BindDdl_ObjLst(
    strDdlName,
    arrObjLst_Sel,
    clsQuestionTypeEN.con_QuestionTypeId,
    clsQuestionTypeEN.con_QuestionTypeName,
    '题目类型',
  );
}
