/**
 * 类名:clstz_ContentAttachmentExWApi
 * 表名:tz_ContentAttachment(01120207)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:06:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 内容附件(tz_ContentAttachment)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clstz_ContentAttachmentENEx } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentENEx';
import {
  tz_ContentAttachment_GetObjLstByPagerAsync,
  tz_ContentAttachment_SortFunByKey,
  tz_ContentAttachment_FilterFunByKey,
} from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import {
  ResourceType_func,
  ResourceType_funcKey,
} from '@/ts/L3ForWApi/ResourceMan/clsResourceTypeWApi';
import { clsResourceTypeEN } from '@/ts/L0Entity/ResourceMan/clsResourceTypeEN';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const tz_ContentAttachmentExController = 'tz_ContentAttachmentExApi';
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
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function tz_ContentAttachmentEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clstz_ContentAttachmentENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrtz_ContentAttachmentObjLst = await tz_ContentAttachment_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrtz_ContentAttachmentExObjLst = arrtz_ContentAttachmentObjLst.map(
    tz_ContentAttachmentEx_CopyToEx,
  );
  if (arrtz_ContentAttachmentExObjLst.length == 0) return arrtz_ContentAttachmentExObjLst;
  let arrtz_ContentAttachmentSel: Array<clstz_ContentAttachmentENEx> =
    arrtz_ContentAttachmentExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrtz_ContentAttachmentSel = arrtz_ContentAttachmentSel.sort(
        tz_ContentAttachmentEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrtz_ContentAttachmentSel = arrtz_ContentAttachmentSel.sort(objPagerPara.sortFun);
    }
    return arrtz_ContentAttachmentSel;
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objtz_ContentAttachmentS:源对象
 **/
export async function tz_ContentAttachmentEx_FuncMapCourseName(
  objtz_ContentAttachment: clstz_ContentAttachmentENEx,
) {
  const strThisFuncName = tz_ContentAttachmentEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objtz_ContentAttachment.courseName) == true) {
      const vccCourseSimCourseId = objtz_ContentAttachment.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objtz_ContentAttachment.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function tz_ContentAttachmentEx_FuncMapResourceTypeName(
  objtz_ContentAttachment: clstz_ContentAttachmentENEx,
) {
  const strThisFuncName = tz_ContentAttachmentEx_FuncMapResourceTypeName.name;
  try {
    if (IsNullOrEmpty(objtz_ContentAttachment.resourceTypeName) == true) {
      const ResourceTypeIdResourceType = objtz_ContentAttachment.idResourceType;
      const ResourceTypeResourceTypeName = await ResourceType_func(
        clsResourceTypeEN.con_IdResourceType,
        clsResourceTypeEN.con_ResourceTypeName,
        ResourceTypeIdResourceType,
      );
      objtz_ContentAttachment.resourceTypeName = ResourceTypeResourceTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000961)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tz_ContentAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function tz_ContentAttachmentEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clstz_ContentAttachmentENEx.con_CourseName:
        return (a: clstz_ContentAttachmentENEx, b: clstz_ContentAttachmentENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clstz_ContentAttachmentENEx.con_ResourceTypeName:
        return (a: clstz_ContentAttachmentENEx, b: clstz_ContentAttachmentENEx) => {
          return a.resourceTypeName.localeCompare(b.resourceTypeName);
        };
      default:
        return tz_ContentAttachment_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clstz_ContentAttachmentENEx.con_CourseName:
        return (a: clstz_ContentAttachmentENEx, b: clstz_ContentAttachmentENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clstz_ContentAttachmentENEx.con_ResourceTypeName:
        return (a: clstz_ContentAttachmentENEx, b: clstz_ContentAttachmentENEx) => {
          return b.resourceTypeName.localeCompare(a.resourceTypeName);
        };
      default:
        return tz_ContentAttachment_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-13
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
  //如果是本表中字段,不需要映射
  const arrFldName = clstz_ContentAttachmentEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clstz_ContentAttachmentENEx.con_CourseName:
      return tz_ContentAttachmentEx_FuncMapCourseName(objtz_ContentAttachmentEx);
    case clstz_ContentAttachmentENEx.con_ResourceTypeName:
      return tz_ContentAttachmentEx_FuncMapResourceTypeName(objtz_ContentAttachmentEx);
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
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function tz_ContentAttachmentEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clstz_ContentAttachmentENEx.con_CourseName:
      return (obj: clstz_ContentAttachmentENEx) => {
        return obj.courseName === value;
      };
    case clstz_ContentAttachmentENEx.con_ResourceTypeName:
      return (obj: clstz_ContentAttachmentENEx) => {
        return obj.resourceTypeName === value;
      };
    default:
      return tz_ContentAttachment_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objtz_ContentAttachmentS:源对象
 **/
export async function tz_ContentAttachmentEx_FuncMapKeyCourseName(
  objtz_ContentAttachment: clstz_ContentAttachmentENEx,
): Promise<Array<string>> {
  const strThisFuncName = tz_ContentAttachmentEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objtz_ContentAttachment.courseName) == true) return [];
    const vccCourseSimCourseName = objtz_ContentAttachment.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000541)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tz_ContentAttachmentEx_ConstructorName,
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
 * @param objtz_ContentAttachmentS:源对象
 **/
export async function tz_ContentAttachmentEx_FuncMapKeyResourceTypeName(
  objtz_ContentAttachment: clstz_ContentAttachmentENEx,
): Promise<Array<string>> {
  const strThisFuncName = tz_ContentAttachmentEx_FuncMapKeyResourceTypeName.name;
  try {
    if (IsNullOrEmpty(objtz_ContentAttachment.resourceTypeName) == true) return [];
    const ResourceTypeResourceTypeName = objtz_ContentAttachment.resourceTypeName;
    const arrIdResourceType = await ResourceType_funcKey(
      clsResourceTypeEN.con_ResourceTypeName,
      ResourceTypeResourceTypeName,
      enumComparisonOp.Like_03,
    );
    return arrIdResourceType;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000962)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tz_ContentAttachmentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
