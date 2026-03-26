/**
 * 类名:clscc_ExamPaperTypeExWApi
 * 表名:cc_ExamPaperType(01120074)
 * 生成代码版本:2022.11.10.1
 * 生成日期:2022/11/10 17:47:54
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 试卷类型(cc_ExamPaperType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月10日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { cc_ExamPaperType_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clscc_ExamPaperTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clscc_ExamPaperTypeEN } from '@/ts/L0Entity/SysPara/clscc_ExamPaperTypeEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_ExamPaperTypeENEx } from '@/ts/L0Entity/SysPara/clscc_ExamPaperTypeENEx';
import { cc_ExamPaperType_GetObjLstAsync } from '@/ts/L3ForWApi/SysPara/clscc_ExamPaperTypeWApi';
import { cc_ExamPaperType_SortFunByKey } from '@/ts/L3ForWApi/SysPara/clscc_ExamPaperTypeWApi';
import { Format } from '@/ts/PubFun/clsString';
import { cc_ExamPaperType_FilterFunByKey } from '@/ts/L3ForWApi/SysPara/clscc_ExamPaperTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const cc_ExamPaperTypeEx_Controller = 'cc_ExamPaperTypeExApi';
export const cc_ExamPaperTypeEx_ConstructorName = 'cc_ExamPaperTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_ExamPaperTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objcc_ExamPaperTypeENS:源对象
 * @returns 目标对象=>clscc_ExamPaperTypeEN:objcc_ExamPaperTypeENT
 **/
export function cc_ExamPaperTypeEx_CopyToEx(
  objcc_ExamPaperTypeENS: clscc_ExamPaperTypeEN,
): clscc_ExamPaperTypeENEx {
  const strThisFuncName = cc_ExamPaperTypeEx_CopyToEx.name;
  const objcc_ExamPaperTypeENT = new clscc_ExamPaperTypeENEx();
  try {
    ObjectAssign(objcc_ExamPaperTypeENT, objcc_ExamPaperTypeENS);
    return objcc_ExamPaperTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_ExamPaperTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_ExamPaperTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ExamPaperTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrcc_ExamPaperTypeObjLst = await cc_ExamPaperType_GetObjLstCache();
  const arrcc_ExamPaperTypeExObjLst = arrcc_ExamPaperTypeObjLst.map(cc_ExamPaperTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrcc_ExamPaperTypeExObjLst) {
      const conFuncMap = await cc_ExamPaperTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_ExamPaperTypeExObjLst.length == 0) return arrcc_ExamPaperTypeExObjLst;
  let arrcc_ExamPaperType_Sel: Array<clscc_ExamPaperTypeENEx> = arrcc_ExamPaperTypeExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objcc_ExamPaperType_Cond = new clscc_ExamPaperTypeENEx();
  ObjectAssign(objcc_ExamPaperType_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clscc_ExamPaperTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objcc_ExamPaperType_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_ExamPaperType_Sel.length == 0) return arrcc_ExamPaperType_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.sort(
        cc_ExamPaperTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.sort(objPagerPara.sortFun);
    }
    arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.slice(intStart, intEnd);
    return arrcc_ExamPaperType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExamPaperTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamPaperTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_ExamPaperTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ExamPaperTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_ExamPaperTypeObjLst = await cc_ExamPaperType_GetObjLstAsync(objPagerPara.whereCond);
  const arrcc_ExamPaperTypeExObjLst = arrcc_ExamPaperTypeObjLst.map(cc_ExamPaperTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrcc_ExamPaperTypeExObjLst) {
      const conFuncMap = await cc_ExamPaperTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_ExamPaperTypeExObjLst.length == 0) return arrcc_ExamPaperTypeExObjLst;
  let arrcc_ExamPaperType_Sel: Array<clscc_ExamPaperTypeENEx> = arrcc_ExamPaperTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.sort(
        cc_ExamPaperTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.sort(objPagerPara.sortFun);
    }
    arrcc_ExamPaperType_Sel = arrcc_ExamPaperType_Sel.slice(intStart, intEnd);
    return arrcc_ExamPaperType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExamPaperTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamPaperTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_ExamPaperTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return cc_ExamPaperType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return cc_ExamPaperType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_ExamPaperTypeEx_FuncMapByFldName(
  strFldName: string,
  objcc_ExamPaperTypeEx: clscc_ExamPaperTypeENEx,
) {
  const strThisFuncName = cc_ExamPaperTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscc_ExamPaperTypeEN.AttributeName;
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
 * 日期:2022-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_ExamPaperTypeEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return cc_ExamPaperType_FilterFunByKey(strKey, value);
  }
}
