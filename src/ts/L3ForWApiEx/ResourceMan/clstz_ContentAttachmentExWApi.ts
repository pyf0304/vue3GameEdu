/**
* 类名:clstz_ContentAttachmentExWApi
* 表名:tz_ContentAttachment(01120207)
* 生成代码版本:2022.11.02.1
* 生成日期:2022/11/09 04:08:27
* 生成者:pyf
* 生成服务器IP:
工程名称:问卷调查(0112)
CM工程:游戏化教育平台(变量首字母小写)-全部函数集
* 相关数据库:103.116.76.183,9433EduHigh_Jsie
* PrjDataBaseId:0170
模块中文名:资源管理(ResourceMan)
* 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
* 编程语言:TypeScript
* 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
  *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
**/

/**
 * 内容附件(tz_ContentAttachment)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { tz_ContentAttachment_GetFirstObjAsync } from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clstz_ContentAttachmentENEx } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentENEx';
import { tz_ContentAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { tz_ContentAttachment_SortFunByKey } from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { Format } from '@/ts/PubFun/clsString';
import { tz_ContentAttachment_FilterFunByKey } from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { cc_Course_func } from 'share-stu-study-base-lib';
import { clscc_CourseEN } from 'share-stu-study-base-lib';
import { ResourceType_func } from '@/ts/L3ForWApi/ResourceMan/clsResourceTypeWApi';
import { clsResourceTypeEN, enumResourceType } from '@/ts/L0Entity/ResourceMan/clsResourceTypeEN';
import {
  GetDiv_Empty,
  GetImg_Empty,
  GetLi_Empty,
  GetTextAreaEmpty,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

export const tz_ContentAttachmentEx_Controller = 'tz_ContentAttachmentExApi';
export const tz_ContentAttachmentEx_ConstructorName = 'tz_ContentAttachmentEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function tz_ContentAttachmentEx_GetWebApiUrl(
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
 * @param objtz_ContentAttachmentENS:源对象
 * @returns 目标对象=>clstz_ContentAttachmentEN:objtz_ContentAttachmentENT
 **/
export function tz_ContentAttachmentEx_CopyToEx(
  objtz_ContentAttachmentENS: clstz_ContentAttachmentEN,
): clstz_ContentAttachmentENEx {
  const strThisFuncName = tz_ContentAttachmentEx_CopyToEx.name;
  const objtz_ContentAttachmentENT = new clstz_ContentAttachmentENEx();
  try {
    ObjectAssign(objtz_ContentAttachmentENT, objtz_ContentAttachmentENS);
    return objtz_ContentAttachmentENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      tz_ContentAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objtz_ContentAttachmentENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function tz_ContentAttachmentEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clstz_ContentAttachmentENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrtz_ContentAttachmentObjLst = await tz_ContentAttachment_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrtz_ContentAttachmentExObjLst = arrtz_ContentAttachmentObjLst.map(
    tz_ContentAttachmentEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrtz_ContentAttachmentExObjLst) {
      const conFuncMap = await tz_ContentAttachmentEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrtz_ContentAttachmentExObjLst.length == 0) return arrtz_ContentAttachmentExObjLst;
  let arrtz_ContentAttachment_Sel: Array<clstz_ContentAttachmentENEx> =
    arrtz_ContentAttachmentExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrtz_ContentAttachment_Sel = arrtz_ContentAttachment_Sel.sort(
        tz_ContentAttachmentEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrtz_ContentAttachment_Sel = arrtz_ContentAttachment_Sel.sort(objPagerPara.sortFun);
    }
    arrtz_ContentAttachment_Sel = arrtz_ContentAttachment_Sel.slice(intStart, intEnd);
    return arrtz_ContentAttachment_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tz_ContentAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clstz_ContentAttachmentENEx>();
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
export function tz_ContentAttachmentEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return tz_ContentAttachment_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return tz_ContentAttachment_SortFunByKey(strKey, AscOrDesc);
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
export function tz_ContentAttachmentEx_FuncMapByFldName(
  strFldName: string,
  objtz_ContentAttachmentEx: clstz_ContentAttachmentENEx,
) {
  const strThisFuncName = tz_ContentAttachmentEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clstz_ContentAttachmentEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clstz_ContentAttachmentENEx.con_CourseName:
      return tz_ContentAttachmentEx_FuncMap_CourseName(objtz_ContentAttachmentEx);
    case clstz_ContentAttachmentENEx.con_ResourceTypeName:
      return tz_ContentAttachmentEx_FuncMap_ResourceTypeName(objtz_ContentAttachmentEx);
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
export async function tz_ContentAttachmentEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return tz_ContentAttachment_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objtz_ContentAttachmentS:源对象
 **/
export async function tz_ContentAttachmentEx_FuncMap_CourseName(
  objtz_ContentAttachment: clstz_ContentAttachmentENEx,
) {
  const strThisFuncName = tz_ContentAttachmentEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objtz_ContentAttachment.courseName) == true) {
      const cc_Course_CourseId = objtz_ContentAttachment.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objtz_ContentAttachment.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tz_ContentAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objtz_ContentAttachmentS:源对象
 **/
export async function tz_ContentAttachmentEx_FuncMap_ResourceTypeName(
  objtz_ContentAttachment: clstz_ContentAttachmentENEx,
) {
  const strThisFuncName = tz_ContentAttachmentEx_FuncMap_ResourceTypeName.name;
  try {
    if (IsNullOrEmpty(objtz_ContentAttachment.resourceTypeName) == true) {
      const ResourceType_idResourceType = objtz_ContentAttachment.idResourceType;
      const ResourceType_ResourceTypeName = await ResourceType_func(
        clsResourceTypeEN.con_IdResourceType,
        clsResourceTypeEN.con_ResourceTypeName,
        ResourceType_idResourceType,
      );
      objtz_ContentAttachment.resourceTypeName = ResourceType_ResourceTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000225)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tz_ContentAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function tz_ContentAttachmentEx_GetObjLstByTableNameKeyContentTypeId(
  strContentTypeId: string,
  strTableNameKey: string,
): Promise<Array<clstz_ContentAttachmentEN>> {
  const strThisFuncName = 'tz_ContentAttachmentEx_GetObjLstByTableNameKeyContentTypeId';

  if (strContentTypeId == '') {
    const strMsg = Format(
      '参数:[strContentTypeId]不能为空!(In clstz_ContentAttachmentWApi.tz_ContentAttachmentEx_GetObjLstByTableNameKeyContentTypeId)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTableNameKey == '') {
    const strMsg = Format(
      '参数:[strTableNameKey]不能为空!(In clstz_ContentAttachmentWApi.tz_ContentAttachmentEx_GetObjLstByTableNameKeyContentTypeId)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  let strWhere = `${clstz_ContentAttachmentEN.con_ContentTypeId} = '${strContentTypeId}' and ${clstz_ContentAttachmentEN.con_TableNameKey} = '${strTableNameKey}' `;
  strWhere += ` order by ${clstz_ContentAttachmentEN.con_OrderNum}`;
  const arrtz_ContentAttachment = await tz_ContentAttachment_GetObjLstAsync(strWhere);
  return arrtz_ContentAttachment;
}

export function tz_ContentAttachmentEx_GeneLiHtmlByObj(
  objtz_ContentAttachment: clstz_ContentAttachmentEN,
  strAddressAndPort: string,
): string {
  let strhtml = '';
  const strResourceType = objtz_ContentAttachment.idResourceType;
  let strMsg;
  switch (strResourceType) {
    case enumResourceType.Picture_0004:
      const strAddressAndPortfull = strAddressAndPort + objtz_ContentAttachment.filePath;
      strhtml +=
        '<li><div class="example"><img style="max-width:400px; margin-left: 2px; " src="' +
        strAddressAndPortfull +
        '"  alt="" data-action="zoom" /></div></li>';
      break;
    case '0010':
    case '0011':
      strhtml +=
        '<li><pre><div class="example">' +
        objtz_ContentAttachment.textContent +
        '</div></pre></li>';
      break;
    case '0015':
      strhtml +=
        '<li><textarea id="txtCode" name = "txtCode" class="form-control" disabled="true" style = "width:100%; height:200px;" >' +
        objtz_ContentAttachment.textContent +
        '</textarea></li>';
      break;
    default:
      strMsg = `strResourceType:${strResourceType}在switch中没有处理!(In BindList_QuestionnaireEx())`;
      console.error(strMsg);
      alert(strMsg);
      break;
  }
  return strhtml;
}

export function tz_ContentAttachmentEx_GeneDivObjByObj(
  objtz_ContentAttachment: clstz_ContentAttachmentEN,
  strAddressAndPort: string,
  strPicWidth: string = '',
): HTMLDivElement {
  const strResourceType = objtz_ContentAttachment.idResourceType;
  let strMsg;
  const div1 = GetDiv_Empty('example');
  const img1 = GetImg_Empty('');
  img1.style.maxWidth = '400px';
  if (strPicWidth != '') {
    img1.style.maxWidth = strPicWidth;
  }
  img1.style.marginLeft = '2px';
  img1.setAttribute('alt', '');
  img1.setAttribute('data-action', 'zoom');
  const textArea1 = GetTextAreaEmpty('form-control');
  textArea1.id = 'txtCode';
  textArea1.disabled = true;
  textArea1.style.width = '100%';
  textArea1.style.height = '200px';
  switch (strResourceType) {
    case enumResourceType.Picture_0004:
      const strAddressAndPortfull = strAddressAndPort + objtz_ContentAttachment.filePath;
      img1.src = strAddressAndPortfull;
      div1.appendChild(img1);
      break;
    case '0010':
    case '0011':
      div1.innerHTML = objtz_ContentAttachment.textContent;
      break;
    case '0015':
      // strhtml +=
      //   '<li><textarea id="txtCode" name = "txtCode" class="form-control" disabled="true" style = "width:100%; height:200px;" >' +
      //   objtz_ContentAttachment.textContent +
      //   '</textarea></li>';
      textArea1.innerText = objtz_ContentAttachment.textContent;
      div1.appendChild(textArea1);
      break;
    default:
      strMsg = `strResourceType:${strResourceType}在switch中没有处理!(In BindList_QuestionnaireEx())`;
      console.error(strMsg);
      alert(strMsg);
      break;
  }
  return div1;
}

export function tz_ContentAttachmentEx_GeneLiObjByObj(
  objtz_ContentAttachment: clstz_ContentAttachmentEN,
  strAddressAndPort: string,
  strPicWidth: string = '',
): HTMLLIElement {
  const strResourceType = objtz_ContentAttachment.idResourceType;
  let strMsg;
  const liRoot = GetLi_Empty('');
  const div1 = GetDiv_Empty('example');
  const img1 = GetImg_Empty('');

  if (strPicWidth != '') {
    img1.style.maxWidth = strPicWidth;
  } else {
    img1.style.maxWidth = '400px';
  }
  img1.style.marginLeft = '2px';
  img1.setAttribute('alt', '');
  img1.setAttribute('data-action', 'zoom');
  const textArea1 = GetTextAreaEmpty('form-control');
  textArea1.id = 'txtCode';
  textArea1.disabled = true;
  textArea1.style.width = '100%';
  textArea1.style.height = '200px';
  switch (strResourceType) {
    case enumResourceType.Picture_0004:
      const strAddressAndPortfull = strAddressAndPort + objtz_ContentAttachment.filePath;
      img1.src = strAddressAndPortfull;
      div1.appendChild(img1);
      break;
    case '0010':
    case '0011':
      div1.innerHTML = objtz_ContentAttachment.textContent;
      break;
    case '0015':
      // strhtml +=
      //   '<li><textarea id="txtCode" name = "txtCode" class="form-control" disabled="true" style = "width:100%; height:200px;" >' +
      //   objtz_ContentAttachment.textContent +
      //   '</textarea></li>';
      textArea1.innerText = objtz_ContentAttachment.textContent;
      div1.appendChild(textArea1);
      break;
    default:
      strMsg = `strResourceType:${strResourceType}在switch中没有处理!(In BindList_QuestionnaireEx())`;
      console.error(strMsg);
      alert(strMsg);
      break;
  }
  liRoot.appendChild(div1);
  return liRoot;
}
