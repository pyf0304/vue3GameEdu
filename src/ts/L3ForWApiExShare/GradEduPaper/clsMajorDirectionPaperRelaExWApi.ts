/**
 * 类名:clsMajorDirectionPaperRelaExWApi
 * 表名:MajorDirectionPaperRela(01120554)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/23 16:57:42
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 专业方向论文关系(MajorDirectionPaperRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { clsXzMajorEN } from 'share-stu-study-base-lib';

import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  MajorDirectionPaperRela_GetObjLstCache,
  MajorDirectionPaperRela_GetObjLstByPagerAsync,
  MajorDirectionPaperRela_SortFunByKey,
  MajorDirectionPaperRela_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsMajorDirectionPaperRelaWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaEN';
import { clsMajorDirectionPaperRelaENEx } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaENEx';
import { XzMajorDirection_func, XzMajorDirection_funcKey } from 'share-stu-study-base-lib';
import { clsXzMajorDirectionEN } from 'share-stu-study-base-lib';
import { XzMajor_func, XzMajor_funcKey } from 'share-stu-study-base-lib';

import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const majorDirectionPaperRelaExController = 'MajorDirectionPaperRelaExApi';
export const majorDirectionPaperRelaEx_ConstructorName = 'majorDirectionPaperRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function MajorDirectionPaperRelaEx_GetWebApiUrl(
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
 * @param objMajorDirectionPaperRelaENS:源对象
 * @returns 目标对象=>clsMajorDirectionPaperRelaEN:objMajorDirectionPaperRelaENT
 **/
export function MajorDirectionPaperRelaEx_CopyToEx(
  objMajorDirectionPaperRelaENS: clsMajorDirectionPaperRelaEN,
): clsMajorDirectionPaperRelaENEx {
  const strThisFuncName = MajorDirectionPaperRelaEx_CopyToEx.name;
  const objMajorDirectionPaperRelaENT = new clsMajorDirectionPaperRelaENEx();
  try {
    ObjectAssign(objMajorDirectionPaperRelaENT, objMajorDirectionPaperRelaENS);
    return objMajorDirectionPaperRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objMajorDirectionPaperRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function MajorDirectionPaperRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdXzMajor: string,
): Promise<Array<clsMajorDirectionPaperRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrMajorDirectionPaperRelaObjLst = await MajorDirectionPaperRela_GetObjLstCache(
    strIdXzMajor,
  );
  const arrMajorDirectionPaperRelaExObjLst = arrMajorDirectionPaperRelaObjLst.map(
    MajorDirectionPaperRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsMajorDirectionPaperRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrMajorDirectionPaperRelaExObjLst) {
      await MajorDirectionPaperRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrMajorDirectionPaperRelaExObjLst.length == 0) return arrMajorDirectionPaperRelaExObjLst;
  let arrMajorDirectionPaperRelaSel: Array<clsMajorDirectionPaperRelaENEx> =
    arrMajorDirectionPaperRelaExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objMajorDirectionPaperRelaCond = new clsMajorDirectionPaperRelaENEx();
  ObjectAssign(objMajorDirectionPaperRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsMajorDirectionPaperRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objMajorDirectionPaperRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrMajorDirectionPaperRelaSel.length == 0) return arrMajorDirectionPaperRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.sort(
        MajorDirectionPaperRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.sort(objPagerPara.sortFun);
    }
    arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.slice(intStart, intEnd);
    return arrMajorDirectionPaperRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsMajorDirectionPaperRelaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function MajorDirectionPaperRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsMajorDirectionPaperRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrMajorDirectionPaperRelaObjLst = await MajorDirectionPaperRela_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrMajorDirectionPaperRelaExObjLst = arrMajorDirectionPaperRelaObjLst.map(
    MajorDirectionPaperRelaEx_CopyToEx,
  );
  if (arrMajorDirectionPaperRelaExObjLst.length == 0) return arrMajorDirectionPaperRelaExObjLst;
  let arrMajorDirectionPaperRelaSel: Array<clsMajorDirectionPaperRelaENEx> =
    arrMajorDirectionPaperRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.sort(
        MajorDirectionPaperRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrMajorDirectionPaperRelaSel = arrMajorDirectionPaperRelaSel.sort(objPagerPara.sortFun);
    }
    return arrMajorDirectionPaperRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsMajorDirectionPaperRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objMajorDirectionPaperRelaS:源对象
 **/
export async function MajorDirectionPaperRelaEx_FuncMapIdXzMajor(
  objMajorDirectionPaperRela: clsMajorDirectionPaperRelaENEx,
) {
  const strThisFuncName = MajorDirectionPaperRelaEx_FuncMapIdXzMajor.name;
  try {
    if (IsNullOrEmpty(objMajorDirectionPaperRela.idXzMajor) == true) {
      const XzMajorDirectionMajorDirectionId = objMajorDirectionPaperRela.majorDirectionId;
      const XzMajorDirectionIdXzMajor = await XzMajorDirection_func(
        clsXzMajorDirectionEN.con_MajorDirectionId,
        clsXzMajorDirectionEN.con_IdXzMajor,
        XzMajorDirectionMajorDirectionId,
        objMajorDirectionPaperRela.idXzMajor,
      );
      objMajorDirectionPaperRela.idXzMajor = XzMajorDirectionIdXzMajor;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000987)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objMajorDirectionPaperRelaS:源对象
 **/
export async function MajorDirectionPaperRelaEx_FuncMapMajorName(
  objMajorDirectionPaperRela: clsMajorDirectionPaperRelaENEx,
) {
  const strThisFuncName = MajorDirectionPaperRelaEx_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objMajorDirectionPaperRela.majorName) == true) {
      const XzMajorDirectionMajorDirectionId = objMajorDirectionPaperRela.majorDirectionId;
      const XzMajorDirectionIdXzMajor = await XzMajorDirection_func(
        clsXzMajorDirectionEN.con_MajorDirectionId,
        clsXzMajorDirectionEN.con_IdXzMajor,
        XzMajorDirectionMajorDirectionId,
        objMajorDirectionPaperRela.idXzMajor,
      );
      const XzMajorIdXzMajor = XzMajorDirectionIdXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajorIdXzMajor,
      );
      objMajorDirectionPaperRela.majorName = XzMajorMajorName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000947)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objMajorDirectionPaperRelaS:源对象
 **/
export async function MajorDirectionPaperRelaEx_FuncMapMajorDirectionName(
  objMajorDirectionPaperRela: clsMajorDirectionPaperRelaENEx,
) {
  const strThisFuncName = MajorDirectionPaperRelaEx_FuncMapMajorDirectionName.name;
  try {
    if (IsNullOrEmpty(objMajorDirectionPaperRela.majorDirectionName) == true) {
      const XzMajorDirectionMajorDirectionId = objMajorDirectionPaperRela.majorDirectionId;
      const XzMajorDirectionMajorDirectionName = await XzMajorDirection_func(
        clsXzMajorDirectionEN.con_MajorDirectionId,
        clsXzMajorDirectionEN.con_MajorDirectionName,
        XzMajorDirectionMajorDirectionId,
        objMajorDirectionPaperRela.idXzMajor,
      );
      objMajorDirectionPaperRela.majorDirectionName = XzMajorDirectionMajorDirectionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000988)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function MajorDirectionPaperRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsMajorDirectionPaperRelaENEx.con_IdXzMajor:
        return (a: clsMajorDirectionPaperRelaENEx, b: clsMajorDirectionPaperRelaENEx) => {
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsMajorDirectionPaperRelaENEx.con_MajorName:
        return (a: clsMajorDirectionPaperRelaENEx, b: clsMajorDirectionPaperRelaENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsMajorDirectionPaperRelaENEx.con_MajorDirectionName:
        return (a: clsMajorDirectionPaperRelaENEx, b: clsMajorDirectionPaperRelaENEx) => {
          return a.majorDirectionName.localeCompare(b.majorDirectionName);
        };
      default:
        return MajorDirectionPaperRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsMajorDirectionPaperRelaENEx.con_IdXzMajor:
        return (a: clsMajorDirectionPaperRelaENEx, b: clsMajorDirectionPaperRelaENEx) => {
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsMajorDirectionPaperRelaENEx.con_MajorName:
        return (a: clsMajorDirectionPaperRelaENEx, b: clsMajorDirectionPaperRelaENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsMajorDirectionPaperRelaENEx.con_MajorDirectionName:
        return (a: clsMajorDirectionPaperRelaENEx, b: clsMajorDirectionPaperRelaENEx) => {
          return b.majorDirectionName.localeCompare(a.majorDirectionName);
        };
      default:
        return MajorDirectionPaperRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function MajorDirectionPaperRelaEx_FuncMapByFldName(
  strFldName: string,
  objMajorDirectionPaperRelaEx: clsMajorDirectionPaperRelaENEx,
) {
  const strThisFuncName = MajorDirectionPaperRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsMajorDirectionPaperRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsMajorDirectionPaperRelaENEx.con_IdXzMajor:
      return MajorDirectionPaperRelaEx_FuncMapIdXzMajor(objMajorDirectionPaperRelaEx);
    case clsMajorDirectionPaperRelaENEx.con_MajorName:
      return MajorDirectionPaperRelaEx_FuncMapMajorName(objMajorDirectionPaperRelaEx);
    case clsMajorDirectionPaperRelaENEx.con_MajorDirectionName:
      return MajorDirectionPaperRelaEx_FuncMapMajorDirectionName(objMajorDirectionPaperRelaEx);
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
 * 日期:2024-11-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function MajorDirectionPaperRelaEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsMajorDirectionPaperRelaENEx.con_IdXzMajor:
      return (obj: clsMajorDirectionPaperRelaENEx) => {
        return obj.idXzMajor === value;
      };
    case clsMajorDirectionPaperRelaENEx.con_MajorName:
      return (obj: clsMajorDirectionPaperRelaENEx) => {
        return obj.majorName === value;
      };
    case clsMajorDirectionPaperRelaENEx.con_MajorDirectionName:
      return (obj: clsMajorDirectionPaperRelaENEx) => {
        return obj.majorDirectionName === value;
      };
    default:
      return MajorDirectionPaperRela_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objMajorDirectionPaperRelaS:源对象
 **/
export async function MajorDirectionPaperRelaEx_FuncMapKeyIdXzMajor(
  objMajorDirectionPaperRela: clsMajorDirectionPaperRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = MajorDirectionPaperRelaEx_FuncMapKeyIdXzMajor.name;
  try {
    if (IsNullOrEmpty(objMajorDirectionPaperRela.idXzMajor) == true) return [];
    const XzMajorDirectionIdXzMajor = objMajorDirectionPaperRela.idXzMajor;
    const arrMajorDirectionId = await XzMajorDirection_funcKey(
      clsXzMajorDirectionEN.con_IdXzMajor,
      XzMajorDirectionIdXzMajor,
      objMajorDirectionPaperRela.idXzMajor,
      enumComparisonOp.Like_03,
    );
    return arrMajorDirectionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000989)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
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
 * @param objMajorDirectionPaperRelaS:源对象
 **/
export async function MajorDirectionPaperRelaEx_FuncMapKeyMajorName(
  objMajorDirectionPaperRela: clsMajorDirectionPaperRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = MajorDirectionPaperRelaEx_FuncMapKeyMajorName.name;
  try {
    if (IsNullOrEmpty(objMajorDirectionPaperRela.majorName) == true) return [];
    const XzMajorMajorName = objMajorDirectionPaperRela.majorName;
    const arrIdXzMajor = await XzMajor_funcKey(
      clsXzMajorEN.con_MajorName,
      XzMajorMajorName,
      enumComparisonOp.Like_03,
    );
    const strIdXzMajorLst = arrIdXzMajor;
    const arrMajorDirectionId = await XzMajorDirection_funcKey(
      clsXzMajorDirectionEN.con_IdXzMajor,
      strIdXzMajorLst,
      objMajorDirectionPaperRela.idXzMajor,
      enumComparisonOp.In_04,
    );
    return arrMajorDirectionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000948)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
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
 * @param objMajorDirectionPaperRelaS:源对象
 **/
export async function MajorDirectionPaperRelaEx_FuncMapKeyMajorDirectionName(
  objMajorDirectionPaperRela: clsMajorDirectionPaperRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = MajorDirectionPaperRelaEx_FuncMapKeyMajorDirectionName.name;
  try {
    if (IsNullOrEmpty(objMajorDirectionPaperRela.majorDirectionName) == true) return [];
    const XzMajorDirectionMajorDirectionName = objMajorDirectionPaperRela.majorDirectionName;
    const arrMajorDirectionId = await XzMajorDirection_funcKey(
      clsXzMajorDirectionEN.con_MajorDirectionName,
      XzMajorDirectionMajorDirectionName,
      objMajorDirectionPaperRela.idXzMajor,
      enumComparisonOp.Like_03,
    );
    return arrMajorDirectionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000990)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      majorDirectionPaperRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
