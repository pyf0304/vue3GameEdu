/**
 * 知识点学习汇总表(KnowledgeLearnTotal)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsKnowledgeLearnTotalEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeLearnTotalEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsKnowledgeLearnTotalENEx } from '@/ts/L0Entity/Knowledges/clsKnowledgeLearnTotalENEx';
import { KnowledgeLearnTotal_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeLearnTotalWApi';
import { KnowledgeLearnTotal_SortFunByKey } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeLearnTotalWApi';
import { Format } from '@/ts/PubFun/clsString';
import { KnowledgeLearnTotal_FilterFunByKey } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeLearnTotalWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { cc_CourseKnowledges_func } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';

export const knowledgeLearnTotalEx_Controller = 'KnowledgeLearnTotalExApi';
export const knowledgeLearnTotalEx_ConstructorName = 'knowledgeLearnTotalEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function KnowledgeLearnTotalEx_GetWebApiUrl(
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
 * @param objKnowledgeLearnTotalENS:源对象
 * @returns 目标对象=>clsKnowledgeLearnTotalEN:objKnowledgeLearnTotalENT
 **/
export function KnowledgeLearnTotalEx_CopyToEx(
  objKnowledgeLearnTotalENS: clsKnowledgeLearnTotalEN,
): clsKnowledgeLearnTotalENEx {
  const strThisFuncName = KnowledgeLearnTotalEx_CopyToEx.name;
  const objKnowledgeLearnTotalENT = new clsKnowledgeLearnTotalENEx();
  try {
    ObjectAssign(objKnowledgeLearnTotalENT, objKnowledgeLearnTotalENS);
    return objKnowledgeLearnTotalENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      knowledgeLearnTotalEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objKnowledgeLearnTotalENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function KnowledgeLearnTotalEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsKnowledgeLearnTotalENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrKnowledgeLearnTotalObjLst = await KnowledgeLearnTotal_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrKnowledgeLearnTotalExObjLst = arrKnowledgeLearnTotalObjLst.map(
    KnowledgeLearnTotalEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrKnowledgeLearnTotalExObjLst) {
      const conFuncMap = await KnowledgeLearnTotalEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrKnowledgeLearnTotalExObjLst.length == 0) return arrKnowledgeLearnTotalExObjLst;
  let arrKnowledgeLearnTotal_Sel: Array<clsKnowledgeLearnTotalENEx> =
    arrKnowledgeLearnTotalExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrKnowledgeLearnTotal_Sel = arrKnowledgeLearnTotal_Sel.sort(
        KnowledgeLearnTotalEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrKnowledgeLearnTotal_Sel = arrKnowledgeLearnTotal_Sel.sort(objPagerPara.sortFun);
    }
    arrKnowledgeLearnTotal_Sel = arrKnowledgeLearnTotal_Sel.slice(intStart, intEnd);
    return arrKnowledgeLearnTotal_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      knowledgeLearnTotalEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsKnowledgeLearnTotalENEx>();
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
export function KnowledgeLearnTotalEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return KnowledgeLearnTotal_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return KnowledgeLearnTotal_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function KnowledgeLearnTotalEx_FuncMapByFldName(
  strFldName: string,
  objKnowledgeLearnTotalEx: clsKnowledgeLearnTotalENEx,
) {
  const strThisFuncName = KnowledgeLearnTotalEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsKnowledgeLearnTotalEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsKnowledgeLearnTotalENEx.con_KnowledgeName:
      return KnowledgeLearnTotalEx_FuncMap_KnowledgeName(objKnowledgeLearnTotalEx);
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
export async function KnowledgeLearnTotalEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return KnowledgeLearnTotal_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objKnowledgeLearnTotalS:源对象
 **/
export async function KnowledgeLearnTotalEx_FuncMap_KnowledgeName(
  objKnowledgeLearnTotal: clsKnowledgeLearnTotalENEx,
) {
  const strThisFuncName = KnowledgeLearnTotalEx_FuncMap_KnowledgeName.name;
  try {
    if (IsNullOrEmpty(objKnowledgeLearnTotal.knowledgeName) == true) {
      const cc_CourseKnowledges_CourseKnowledgeId = objKnowledgeLearnTotal.courseKnowledgeId;
      const cc_CourseKnowledges_KnowledgeName = await cc_CourseKnowledges_func(
        clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
        clscc_CourseKnowledgesEN.con_KnowledgeName,
        cc_CourseKnowledges_CourseKnowledgeId,
        objKnowledgeLearnTotal.courseId,
      );
      objKnowledgeLearnTotal.knowledgeName = cc_CourseKnowledges_KnowledgeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000189)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      knowledgeLearnTotalEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
