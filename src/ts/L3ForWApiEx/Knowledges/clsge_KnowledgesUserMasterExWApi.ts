/**
 * 知识点用户掌握(ge_KnowledgesUserMaster)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, SetAllCkechedKeysV2 } from '@/ts/PubFun/clsCommFunc4Web';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsge_KnowledgesUserMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_KnowledgesUserMasterENEx } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterENEx';
import { ge_KnowledgesUserMaster_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
import { ge_KnowledgesUserMaster_SortFunByKey } from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
import { Format } from '@/ts/PubFun/clsString';
import { ge_KnowledgesUserMaster_FilterFunByKey } from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { KnowledgeMasterType_func } from 'share-stu-study-base-lib';
import { clsKnowledgeMasterTypeEN } from 'share-stu-study-base-lib';
import { KnowledgeMasterLevel_func } from 'share-stu-study-base-lib';
import { clsKnowledgeMasterLevelEN } from 'share-stu-study-base-lib';
import { cc_CourseKnowledges_func } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { cc_Course_func } from 'share-stu-study-base-lib';
import { clscc_CourseEN } from 'share-stu-study-base-lib';
import { GetDistinctArray } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDimensions } from '@/ts/FunClass/clsDimensions';

import { clsDateTime } from '@/ts/PubFun/clsDateTime';
export const ge_KnowledgesUserMasterEx_Controller = 'ge_KnowledgesUserMasterExApi';
export const ge_KnowledgesUserMasterEx_ConstructorName = 'ge_KnowledgesUserMasterEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_KnowledgesUserMasterEx_GetWebApiUrl(
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
 * @param objge_KnowledgesUserMasterENS:源对象
 * @returns 目标对象=>clsge_KnowledgesUserMasterEN:objge_KnowledgesUserMasterENT
 **/
export function ge_KnowledgesUserMasterEx_CopyToEx(
  objge_KnowledgesUserMasterENS: clsge_KnowledgesUserMasterEN,
): clsge_KnowledgesUserMasterENEx {
  const strThisFuncName = ge_KnowledgesUserMasterEx_CopyToEx.name;
  const objge_KnowledgesUserMasterENT = new clsge_KnowledgesUserMasterENEx();
  try {
    ObjectAssign(objge_KnowledgesUserMasterENT, objge_KnowledgesUserMasterENS);
    return objge_KnowledgesUserMasterENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_KnowledgesUserMasterENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_KnowledgesUserMasterEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_KnowledgesUserMasterENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_KnowledgesUserMasterObjLst = await ge_KnowledgesUserMaster_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_KnowledgesUserMasterExObjLst = arrge_KnowledgesUserMasterObjLst.map(
    ge_KnowledgesUserMasterEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_KnowledgesUserMasterExObjLst) {
      const conFuncMap = await ge_KnowledgesUserMasterEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrge_KnowledgesUserMasterExObjLst.length == 0) return arrge_KnowledgesUserMasterExObjLst;
  let arrge_KnowledgesUserMaster_Sel: Array<clsge_KnowledgesUserMasterENEx> =
    arrge_KnowledgesUserMasterExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_KnowledgesUserMaster_Sel = arrge_KnowledgesUserMaster_Sel.sort(
        ge_KnowledgesUserMasterEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_KnowledgesUserMaster_Sel = arrge_KnowledgesUserMaster_Sel.sort(objPagerPara.sortFun);
    }
    arrge_KnowledgesUserMaster_Sel = arrge_KnowledgesUserMaster_Sel.slice(intStart, intEnd);
    return arrge_KnowledgesUserMaster_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_KnowledgesUserMasterENEx>();
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
export function ge_KnowledgesUserMasterEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_KnowledgesUserMaster_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_KnowledgesUserMaster_SortFunByKey(strKey, AscOrDesc);
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
export function ge_KnowledgesUserMasterEx_FuncMapByFldName(
  strFldName: string,
  objge_KnowledgesUserMasterEx: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_KnowledgesUserMasterEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_KnowledgesUserMasterENEx.con_MasterTypeName:
      return ge_KnowledgesUserMasterEx_FuncMap_MasterTypeName(objge_KnowledgesUserMasterEx);
    case clsge_KnowledgesUserMasterENEx.con_KnowledgeName:
      return ge_KnowledgesUserMasterEx_FuncMap_KnowledgeName(objge_KnowledgesUserMasterEx);
    case clsge_KnowledgesUserMasterENEx.con_MasterLevelName:
      return ge_KnowledgesUserMasterEx_FuncMap_MasterLevelName(objge_KnowledgesUserMasterEx);
    case clsge_KnowledgesUserMasterENEx.con_CourseName:
      return ge_KnowledgesUserMasterEx_FuncMap_CourseName(objge_KnowledgesUserMasterEx);
    case clsge_KnowledgesUserMasterENEx.con_DateTimeSim:
      return ge_KnowledgesUserMasterEx_FuncMapDateTimeSim(objge_KnowledgesUserMasterEx);
    case clsge_KnowledgesUserMasterENEx.con_KnowledgeName:
      return ge_KnowledgesUserMasterEx_FuncMapKnowledgeName(objge_KnowledgesUserMasterEx);
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
export async function ge_KnowledgesUserMasterEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_KnowledgesUserMaster_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMap_MasterTypeName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMap_MasterTypeName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.masterTypeName) == true) {
      const KnowledgeMasterType_MasterTypeId = objge_KnowledgesUserMaster.masterTypeId;
      const KnowledgeMasterType_MasterTypeName = await KnowledgeMasterType_func(
        clsKnowledgeMasterTypeEN.con_MasterTypeId,
        clsKnowledgeMasterTypeEN.con_MasterTypeName,
        KnowledgeMasterType_MasterTypeId,
      );
      objge_KnowledgesUserMaster.masterTypeName = KnowledgeMasterType_MasterTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000199)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMap_MasterLevelName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMap_MasterLevelName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.masterLevelName) == true) {
      const KnowledgeMasterLevel_MasterLevelId = objge_KnowledgesUserMaster.masterLevelId;
      const KnowledgeMasterLevel_MasterLevelName = await KnowledgeMasterLevel_func(
        clsKnowledgeMasterLevelEN.con_MasterLevelId,
        clsKnowledgeMasterLevelEN.con_MasterLevelName,
        KnowledgeMasterLevel_MasterLevelId,
      );
      objge_KnowledgesUserMaster.masterLevelName = KnowledgeMasterLevel_MasterLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000200)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMap_KnowledgeName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMap_KnowledgeName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.knowledgeName) == true) {
      const cc_CourseKnowledges_CourseKnowledgeId = objge_KnowledgesUserMaster.courseKnowledgeId;
      const cc_CourseKnowledges_KnowledgeName = await cc_CourseKnowledges_func(
        clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
        clscc_CourseKnowledgesEN.con_KnowledgeName,
        cc_CourseKnowledges_CourseKnowledgeId,
        objge_KnowledgesUserMaster.courseId,
      );
      objge_KnowledgesUserMaster.knowledgeName = cc_CourseKnowledges_KnowledgeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000189)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMap_CourseName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.courseName) == true) {
      const cc_Course_CourseId = objge_KnowledgesUserMaster.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objge_KnowledgesUserMaster.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 初始化用户知识点模块关系
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCourseId: 课程Id
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function ge_KnowledgesUserMasterEx_InitUserKnowledge(
  strCourseId: string,
  strUserId: string,
): Promise<number> {
  const strThisFuncName = ge_KnowledgesUserMasterEx_InitUserKnowledge.name;
  const strAction = 'InitUserKnowledge';
  const strUrl = ge_KnowledgesUserMasterEx_GetWebApiUrl(
    ge_KnowledgesUserMasterEx_Controller,
    strAction,
  );
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseId,
      strUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        ge_KnowledgesUserMasterEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_KnowledgesUserMasterEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function BindTab_Cls(
  divContainer: HTMLDivElement,
  arrge_KnowledgesUserMasterExObjLst: Array<clsge_KnowledgesUserMasterENEx>,
) {
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'tab4Bind';
  table.className = 'table table-striped table-condensed table-bordered table-sm';
  const tbody = document.createElement('tbody');
  const arrKnowledgeName0 = arrge_KnowledgesUserMasterExObjLst.map(
    (x) => `${x.knowledgeName}|${x.courseKnowledgeId}`,
  );
  let arrKnowledgeName = GetDistinctArray(arrKnowledgeName0);
  arrKnowledgeName = arrKnowledgeName.sort();
  const arrUserId0 = arrge_KnowledgesUserMasterExObjLst.map((x) => x.userId);
  let arrUserId = GetDistinctArray(arrUserId0);
  arrUserId = arrUserId.sort();

  table.border = '1';
  const intRowNum = arrUserId.length;
  const intColNum = arrKnowledgeName.length;
  const trHead: HTMLTableRowElement = document.createElement('tr');
  trHead.className = 'row-height';
  let check00: HTMLInputElement;
  let strSortExpress;

  const td00 = document.createElement('td');
  check00 = document.createElement('input');
  check00.type = 'checkbox';
  check00.id = `chkTabHead`;
  check00.name = 'chkTabHead';
  check00.className = 'CheckInTab';
  check00.onclick = function (this) {
    SetAllCkechedKeysV2(divContainer, this);
  };
  td00.appendChild(check00);
  trHead.appendChild(td00);

  const td0 = document.createElement('td');
  const a2: HTMLAnchorElement = document.createElement('a');
  a2.nodeValue = '用户'; //i + "" + j;
  a2.text = '用户'; //i + "" + j;

  a2.href = 'javascript:';

  td0.appendChild(a2);

  td0.className = 'text-center';
  trHead.appendChild(td0);
  for (let j = 0; j < intColNum; j++) {
    const td = document.createElement('td');
    const objCollumn = arrKnowledgeName[j];
    const arr = objCollumn.split('|');
    td.id = Format('td{0}', arr[0]);
    const a2: HTMLAnchorElement = document.createElement('a');
    a2.nodeValue = arr[0]; //i + "" + j;
    a2.text = arr[0]; //i + "" + j;

    a2.href = 'javascript:';

    td.appendChild(a2);

    td.className = 'text-center';
    trHead.appendChild(td);
  }
  tbody.appendChild(trHead);
  for (let i = 0; i < intRowNum; i++) {
    const strUserId = arrUserId[i];
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.className = 'row-height';
    tr.id = `tr${strUserId}`;

    const td10 = document.createElement('td');
    td10.className = 'row-height';
    td10.id = `td${strUserId}_10`;
    const check10 = document.createElement('input');
    check10.type = 'checkbox';

    check10.id = `chk${strUserId}`;
    check10.name = 'chkInTab';
    check10.className = 'CheckInTab';
    //if (IsNullOrEmpty(objEN.GetFldValue("CtrlId")) == false) {
    //    check.setAttribute("ctrlId", objEN.GetFldValue("CtrlId"));
    //}
    td10.appendChild(check10);
    tr.appendChild(td10);

    let check: HTMLInputElement;
    let div1: HTMLDivElement;
    const td00 = document.createElement('td');
    td00.id = `td${strUserId}_00`;
    td00.innerHTML = `${strUserId}`;
    td00.className = 'text-center';
    tr.appendChild(td00);
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      const objCollumn = arrKnowledgeName[j];
      const arr = objCollumn.split('|');
      td.id = `td${strUserId}_${arr[1]}`;
      const objEN = arrge_KnowledgesUserMasterExObjLst.find(
        (x) => x.courseKnowledgeId == arr[1] && x.userId == strUserId,
      );
      if (objEN == null) continue;
      td.innerHTML = `${objEN.masterLevelName}(${objEN.masteryValue})`;
      td.className = 'text-center';
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  while (divContainer.childNodes.length > 0) {
    divContainer.removeChild(divContainer.childNodes[0]);
  }
  divContainer.appendChild(table);
}

export async function ge_KnowledgesUserMasterEx_getUserMasterKnowledge(
  strCourseId: string,
  strUserId: string,
): Promise<Array<clsDimensions>> {
  const arrMasterKnowledge = new Array<clsDimensions>();

  const strWhere = `courseId = '${strCourseId}' and userId = '${strUserId}'`;
  const arrge_KnowledgesUserMasterSel = await ge_KnowledgesUserMaster_GetObjLstAsync(strWhere);
  if (arrge_KnowledgesUserMasterSel.length == 0) return arrMasterKnowledge;

  const arrge_KnowledgesUserMasterExObjLst = arrge_KnowledgesUserMasterSel.map(
    ge_KnowledgesUserMasterEx_CopyToEx,
  );
  for (const objInFor of arrge_KnowledgesUserMasterExObjLst) {
    await ge_KnowledgesUserMasterEx_FuncMapKnowledgeName(objInFor);
  }

  const arrKnowledgeName0 = arrge_KnowledgesUserMasterExObjLst.map(
    (x) => `${x.knowledgeName}|${x.courseKnowledgeId}`,
  );
  let arrKnowledgeName = GetDistinctArray(arrKnowledgeName0);
  arrKnowledgeName = arrKnowledgeName.sort();
  const arrUserId0 = arrge_KnowledgesUserMasterExObjLst.map((x) => x.userId);
  let arrUserId = GetDistinctArray(arrUserId0);
  arrUserId = arrUserId.sort();

  const intColNum = arrKnowledgeName.length;

  for (let j = 0; j < intColNum; j++) {
    const objCollumn = arrKnowledgeName[j];
    const arr = objCollumn.split('|');

    const objEN = arrge_KnowledgesUserMasterExObjLst.find(
      (x) => x.courseKnowledgeId == arr[1] && x.userId == strUserId,
    );
    if (objEN == null) continue;
    const objDimension: clsDimensions = { name: arr[0], value: objEN.masteryValue * 100 };
    arrMasterKnowledge.push(objDimension);
  }
  return arrMasterKnowledge;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMapDateTimeSim(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(
        objge_KnowledgesUserMaster.updDate,
      );
      objge_KnowledgesUserMaster.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMapKnowledgeName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMapKnowledgeName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.knowledgeName) == true) {
      const ccCourseKnowledgesCourseKnowledgeId = objge_KnowledgesUserMaster.courseKnowledgeId;
      const ccCourseKnowledgesKnowledgeName = await cc_CourseKnowledges_func(
        clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
        clscc_CourseKnowledgesEN.con_KnowledgeName,
        ccCourseKnowledgesCourseKnowledgeId,
        objge_KnowledgesUserMaster.courseId,
      );
      objge_KnowledgesUserMaster.knowledgeName = ccCourseKnowledgesKnowledgeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000453)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 计算用户掌握的知识点
 * @param userId: 用户ID
 * @param questionId: 问题ID
 * @param courseId: 课程ID
 * @returns 操作结果
 **/
export async function ge_KnowledgesUserMasterEx_CalcKnowledgesUserMaster(
  userId: string,
  questionId: number,
  courseId: string,
): Promise<boolean> {
  const strThisFuncName = 'CalcKnowledgesUserMaster';

  if (!userId || !questionId || !courseId) {
    const strMsg = `参数:[userId]、[questionId]和[courseId]不能为空!(In ${strThisFuncName})`;
    console.error(strMsg);
    throw new Error(strMsg);
  }

  const strAction = 'CalcKnowledgesUserMaster';
  const strUrl = GetWebApiUrl(ge_KnowledgesUserMasterEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      userId,
      questionId,
      courseId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId === 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw new Error(data.errorMsg);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || '网络错误');
  }
}
