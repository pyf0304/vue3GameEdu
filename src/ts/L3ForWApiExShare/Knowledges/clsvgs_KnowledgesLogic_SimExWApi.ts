/**
 * 类名:clsvgs_KnowledgesLogic_SimExWApi
 * 表名:vgs_KnowledgesLogic_Sim(01120935)
 * 生成代码版本:2022.11.12.1
 * 生成日期:2022/11/14 15:04:02
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v知识点结点_Sim(vgs_KnowledgesLogic_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月14日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { vgs_KnowledgesLogic_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsvgs_KnowledgesLogic_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsvgs_KnowledgesLogic_SimEN } from '@/ts/L0Entity/Knowledges/clsvgs_KnowledgesLogic_SimEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvgs_KnowledgesLogic_SimENEx } from '@/ts/L0Entity/Knowledges/clsvgs_KnowledgesLogic_SimENEx';
import { vgs_KnowledgesLogic_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsvgs_KnowledgesLogic_SimWApi';
import { vgs_KnowledgesLogic_Sim_SortFunByKey } from '@/ts/L3ForWApi/Knowledges/clsvgs_KnowledgesLogic_SimWApi';
import { Format } from '@/ts/PubFun/clsString';
import { vgs_KnowledgesLogic_Sim_FilterFunByKey } from '@/ts/L3ForWApi/Knowledges/clsvgs_KnowledgesLogic_SimWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const vgs_KnowledgesLogic_SimEx_Controller = 'vgs_KnowledgesLogic_SimExApi';
export const vgs_KnowledgesLogic_SimEx_ConstructorName = 'vgs_KnowledgesLogic_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vgs_KnowledgesLogic_SimEx_GetWebApiUrl(
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
 * @param objvgs_KnowledgesLogic_SimENS:源对象
 * @returns 目标对象=>clsvgs_KnowledgesLogic_SimEN:objvgs_KnowledgesLogic_SimENT
 **/
export function vgs_KnowledgesLogic_SimEx_CopyToEx(
  objvgs_KnowledgesLogic_SimENS: clsvgs_KnowledgesLogic_SimEN,
): clsvgs_KnowledgesLogic_SimENEx {
  const strThisFuncName = vgs_KnowledgesLogic_SimEx_CopyToEx.name;
  const objvgs_KnowledgesLogic_SimENT = new clsvgs_KnowledgesLogic_SimENEx();
  try {
    ObjectAssign(objvgs_KnowledgesLogic_SimENT, objvgs_KnowledgesLogic_SimENS);
    return objvgs_KnowledgesLogic_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vgs_KnowledgesLogic_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvgs_KnowledgesLogic_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vgs_KnowledgesLogic_SimEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsvgs_KnowledgesLogic_SimENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvgs_KnowledgesLogic_SimObjLst = await vgs_KnowledgesLogic_Sim_GetObjLstCache(
    strCourseId,
  );
  const arrvgs_KnowledgesLogic_SimExObjLst = arrvgs_KnowledgesLogic_SimObjLst.map(
    vgs_KnowledgesLogic_SimEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvgs_KnowledgesLogic_SimExObjLst) {
      const conFuncMap = await vgs_KnowledgesLogic_SimEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrvgs_KnowledgesLogic_SimExObjLst.length == 0) return arrvgs_KnowledgesLogic_SimExObjLst;
  let arrvgs_KnowledgesLogic_Sim_Sel: Array<clsvgs_KnowledgesLogic_SimENEx> =
    arrvgs_KnowledgesLogic_SimExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvgs_KnowledgesLogic_Sim_Cond = new clsvgs_KnowledgesLogic_SimENEx();
  ObjectAssign(objvgs_KnowledgesLogic_Sim_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvgs_KnowledgesLogic_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_KnowledgesLogic_Sim_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_KnowledgesLogic_Sim_Sel.length == 0) return arrvgs_KnowledgesLogic_Sim_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.sort(
        vgs_KnowledgesLogic_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.sort(objPagerPara.sortFun);
    }
    arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.slice(intStart, intEnd);
    return arrvgs_KnowledgesLogic_Sim_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_KnowledgesLogic_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_KnowledgesLogic_SimENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vgs_KnowledgesLogic_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_KnowledgesLogic_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvgs_KnowledgesLogic_SimObjLst = await vgs_KnowledgesLogic_Sim_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrvgs_KnowledgesLogic_SimExObjLst = arrvgs_KnowledgesLogic_SimObjLst.map(
    vgs_KnowledgesLogic_SimEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvgs_KnowledgesLogic_SimExObjLst) {
      const conFuncMap = await vgs_KnowledgesLogic_SimEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrvgs_KnowledgesLogic_SimExObjLst.length == 0) return arrvgs_KnowledgesLogic_SimExObjLst;
  let arrvgs_KnowledgesLogic_Sim_Sel: Array<clsvgs_KnowledgesLogic_SimENEx> =
    arrvgs_KnowledgesLogic_SimExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.sort(
        vgs_KnowledgesLogic_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.sort(objPagerPara.sortFun);
    }
    arrvgs_KnowledgesLogic_Sim_Sel = arrvgs_KnowledgesLogic_Sim_Sel.slice(intStart, intEnd);
    return arrvgs_KnowledgesLogic_Sim_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_KnowledgesLogic_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_KnowledgesLogic_SimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-14
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vgs_KnowledgesLogic_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vgs_KnowledgesLogic_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vgs_KnowledgesLogic_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-14
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vgs_KnowledgesLogic_SimEx_FuncMapByFldName(
  strFldName: string,
  objvgs_KnowledgesLogic_SimEx: clsvgs_KnowledgesLogic_SimENEx,
) {
  const strThisFuncName = vgs_KnowledgesLogic_SimEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvgs_KnowledgesLogic_SimEN.AttributeName;
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
 * 日期:2022-11-14
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vgs_KnowledgesLogic_SimEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return vgs_KnowledgesLogic_Sim_FilterFunByKey(strKey, value);
  }
}
