/**
 * 类名:clsge_ExaminationTypeExWApi
 * 表名:ge_ExaminationType(01120902)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/09 04:07:56
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
 * 检查类型(ge_ExaminationType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { ge_ExaminationType_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsge_ExaminationTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationTypeEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_ExaminationTypeENEx } from '@/ts/L0Entity/GameLearn/clsge_ExaminationTypeENEx';
import { ge_ExaminationType_GetObjLstAsync } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationTypeWApi';
import { ge_ExaminationType_SortFunByKey } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationTypeWApi';
import { Format } from '@/ts/PubFun/clsString';
import { ge_ExaminationType_FilterFunByKey } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const ge_ExaminationTypeEx_Controller = 'ge_ExaminationTypeExApi';
export const ge_ExaminationTypeEx_ConstructorName = 'ge_ExaminationTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_ExaminationTypeEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objge_ExaminationTypeENS:源对象
 * @returns 目标对象=>clsge_ExaminationTypeEN:objge_ExaminationTypeENT
 **/
export function ge_ExaminationTypeEx_CopyToEx(
  objge_ExaminationTypeENS: clsge_ExaminationTypeEN,
): clsge_ExaminationTypeENEx {
  const strThisFuncName = ge_ExaminationTypeEx_CopyToEx.name;
  const objge_ExaminationTypeENT = new clsge_ExaminationTypeENEx();
  try {
    ObjectAssign(objge_ExaminationTypeENT, objge_ExaminationTypeENS);
    return objge_ExaminationTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_ExaminationTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_ExaminationTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_ExaminationTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_ExaminationTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrge_ExaminationTypeObjLst = await ge_ExaminationType_GetObjLstCache();
  const arrge_ExaminationTypeExObjLst = arrge_ExaminationTypeObjLst.map(
    ge_ExaminationTypeEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_ExaminationTypeExObjLst) {
      const conFuncMap = await ge_ExaminationTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_ExaminationTypeExObjLst.length == 0) return arrge_ExaminationTypeExObjLst;
  let arrge_ExaminationType_Sel: Array<clsge_ExaminationTypeENEx> = arrge_ExaminationTypeExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objge_ExaminationType_Cond = new clsge_ExaminationTypeENEx();
  ObjectAssign(objge_ExaminationType_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsge_ExaminationTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_ExaminationType_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_ExaminationType_Sel.length == 0) return arrge_ExaminationType_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.sort(
        ge_ExaminationTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.sort(objPagerPara.sortFun);
    }
    arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.slice(intStart, intEnd);
    return arrge_ExaminationType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_ExaminationTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_ExaminationTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_ExaminationTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_ExaminationTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_ExaminationTypeObjLst = await ge_ExaminationType_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_ExaminationTypeExObjLst = arrge_ExaminationTypeObjLst.map(
    ge_ExaminationTypeEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_ExaminationTypeExObjLst) {
      const conFuncMap = await ge_ExaminationTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_ExaminationTypeExObjLst.length == 0) return arrge_ExaminationTypeExObjLst;
  let arrge_ExaminationType_Sel: Array<clsge_ExaminationTypeENEx> = arrge_ExaminationTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.sort(
        ge_ExaminationTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.sort(objPagerPara.sortFun);
    }
    arrge_ExaminationType_Sel = arrge_ExaminationType_Sel.slice(intStart, intEnd);
    return arrge_ExaminationType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_ExaminationTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_ExaminationTypeENEx>();
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
export function ge_ExaminationTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_ExaminationType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_ExaminationType_SortFunByKey(strKey, AscOrDesc);
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
export function ge_ExaminationTypeEx_FuncMapByFldName(
  strFldName: string,
  objge_ExaminationTypeEx: clsge_ExaminationTypeENEx,
) {
  const strThisFuncName = ge_ExaminationTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_ExaminationTypeEN.AttributeName;
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
export async function ge_ExaminationTypeEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_ExaminationType_FilterFunByKey(strKey, value);
  }
}
