/**
 * 类名:clsge_KnowledgesUserMasterExWApi
 * 表名:ge_KnowledgesUserMaster(01120892)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:28:28
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点用户掌握(ge_KnowledgesUserMaster)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年12月16日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_KnowledgesUserMasterENEx } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterENEx';
import {
  ge_KnowledgesUserMaster_GetObjLstByPagerAsync,
  ge_KnowledgesUserMaster_SortFunByKey,
  ge_KnowledgesUserMaster_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
import { KnowledgeMasterType_func, KnowledgeMasterType_funcKey } from 'share-stu-study-base-lib';
import { clsKnowledgeMasterTypeEN } from 'share-stu-study-base-lib';
import { KnowledgeMasterLevel_func, KnowledgeMasterLevel_funcKey } from 'share-stu-study-base-lib';
import { clsKnowledgeMasterLevelEN } from 'share-stu-study-base-lib';
import { cc_CourseKnowledges_func, cc_CourseKnowledges_funcKey } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { clsge_KnowledgesUserMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const ge_KnowledgesUserMasterExController = 'ge_KnowledgesUserMasterExApi';
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
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_KnowledgesUserMasterEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_KnowledgesUserMasterENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_KnowledgesUserMasterObjLst = await ge_KnowledgesUserMaster_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrge_KnowledgesUserMasterExObjLst = arrge_KnowledgesUserMasterObjLst.map(
    ge_KnowledgesUserMasterEx_CopyToEx,
  );
  if (arrge_KnowledgesUserMasterExObjLst.length == 0) return arrge_KnowledgesUserMasterExObjLst;
  let arrge_KnowledgesUserMasterSel: Array<clsge_KnowledgesUserMasterENEx> =
    arrge_KnowledgesUserMasterExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_KnowledgesUserMasterSel = arrge_KnowledgesUserMasterSel.sort(
        ge_KnowledgesUserMasterEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_KnowledgesUserMasterSel = arrge_KnowledgesUserMasterSel.sort(objPagerPara.sortFun);
    }
    return arrge_KnowledgesUserMasterSel;
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMapMasterTypeName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMapMasterTypeName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.masterTypeName) == true) {
      const KnowledgeMasterTypeMasterTypeId = objge_KnowledgesUserMaster.masterTypeId;
      const KnowledgeMasterTypeMasterTypeName = await KnowledgeMasterType_func(
        clsKnowledgeMasterTypeEN.con_MasterTypeId,
        clsKnowledgeMasterTypeEN.con_MasterTypeName,
        KnowledgeMasterTypeMasterTypeId,
      );
      objge_KnowledgesUserMaster.masterTypeName = KnowledgeMasterTypeMasterTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000959)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_KnowledgesUserMasterEx_FuncMapMasterLevelName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMapMasterLevelName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.masterLevelName) == true) {
      const KnowledgeMasterLevelMasterLevelId = objge_KnowledgesUserMaster.masterLevelId;
      const KnowledgeMasterLevelMasterLevelName = await KnowledgeMasterLevel_func(
        clsKnowledgeMasterLevelEN.con_MasterLevelId,
        clsKnowledgeMasterLevelEN.con_MasterLevelName,
        KnowledgeMasterLevelMasterLevelId,
      );
      objge_KnowledgesUserMaster.masterLevelName = KnowledgeMasterLevelMasterLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000957)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000895)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000584)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_KnowledgesUserMasterEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_KnowledgesUserMasterENEx.con_MasterTypeName:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return a.masterTypeName.localeCompare(b.masterTypeName);
        };
      case clsge_KnowledgesUserMasterENEx.con_KnowledgeName:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return a.knowledgeName.localeCompare(b.knowledgeName);
        };
      case clsge_KnowledgesUserMasterENEx.con_MasterLevelName:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return a.masterLevelName.localeCompare(b.masterLevelName);
        };
      case clsge_KnowledgesUserMasterENEx.con_CourseName:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_KnowledgesUserMasterENEx.con_DateTimeSim:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return ge_KnowledgesUserMaster_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_KnowledgesUserMasterENEx.con_MasterTypeName:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return b.masterTypeName.localeCompare(a.masterTypeName);
        };
      case clsge_KnowledgesUserMasterENEx.con_KnowledgeName:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return b.knowledgeName.localeCompare(a.knowledgeName);
        };
      case clsge_KnowledgesUserMasterENEx.con_MasterLevelName:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return b.masterLevelName.localeCompare(a.masterLevelName);
        };
      case clsge_KnowledgesUserMasterENEx.con_CourseName:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_KnowledgesUserMasterENEx.con_DateTimeSim:
        return (a: clsge_KnowledgesUserMasterENEx, b: clsge_KnowledgesUserMasterENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return ge_KnowledgesUserMaster_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-12-16
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
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_KnowledgesUserMasterEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_KnowledgesUserMasterENEx.con_MasterTypeName:
      return ge_KnowledgesUserMasterEx_FuncMapMasterTypeName(objge_KnowledgesUserMasterEx);
    case clsge_KnowledgesUserMasterENEx.con_KnowledgeName:
      return ge_KnowledgesUserMasterEx_FuncMapKnowledgeName(objge_KnowledgesUserMasterEx);
    case clsge_KnowledgesUserMasterENEx.con_MasterLevelName:
      return ge_KnowledgesUserMasterEx_FuncMapMasterLevelName(objge_KnowledgesUserMasterEx);
    case clsge_KnowledgesUserMasterENEx.con_DateTimeSim:
      return ge_KnowledgesUserMasterEx_FuncMapDateTimeSim(objge_KnowledgesUserMasterEx);
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
 * 日期:2024-12-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_KnowledgesUserMasterEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_KnowledgesUserMasterENEx.con_MasterTypeName:
      return (obj: clsge_KnowledgesUserMasterENEx) => {
        return obj.masterTypeName === value;
      };
    case clsge_KnowledgesUserMasterENEx.con_KnowledgeName:
      return (obj: clsge_KnowledgesUserMasterENEx) => {
        return obj.knowledgeName === value;
      };
    case clsge_KnowledgesUserMasterENEx.con_MasterLevelName:
      return (obj: clsge_KnowledgesUserMasterENEx) => {
        return obj.masterLevelName === value;
      };
    case clsge_KnowledgesUserMasterENEx.con_CourseName:
      return (obj: clsge_KnowledgesUserMasterENEx) => {
        return obj.courseName === value;
      };
    case clsge_KnowledgesUserMasterENEx.con_DateTimeSim:
      return (obj: clsge_KnowledgesUserMasterENEx) => {
        return obj.dateTimeSim === value;
      };
    default:
      return ge_KnowledgesUserMaster_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMapKeyMasterTypeName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMapKeyMasterTypeName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.masterTypeName) == true) return [];
    const KnowledgeMasterTypeMasterTypeName = objge_KnowledgesUserMaster.masterTypeName;
    const arrMasterTypeId = await KnowledgeMasterType_funcKey(
      clsKnowledgeMasterTypeEN.con_MasterTypeName,
      KnowledgeMasterTypeMasterTypeName,
      enumComparisonOp.Like_03,
    );
    return arrMasterTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000960)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
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
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMapKeyMasterLevelName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMapKeyMasterLevelName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.masterLevelName) == true) return [];
    const KnowledgeMasterLevelMasterLevelName = objge_KnowledgesUserMaster.masterLevelName;
    const arrMasterLevelId = await KnowledgeMasterLevel_funcKey(
      clsKnowledgeMasterLevelEN.con_MasterLevelName,
      KnowledgeMasterLevelMasterLevelName,
      enumComparisonOp.Like_03,
    );
    return arrMasterLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000958)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
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
 * @param objge_KnowledgesUserMasterS:源对象
 **/
export async function ge_KnowledgesUserMasterEx_FuncMapKeyKnowledgeName(
  objge_KnowledgesUserMaster: clsge_KnowledgesUserMasterENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_KnowledgesUserMasterEx_FuncMapKeyKnowledgeName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesUserMaster.knowledgeName) == true) return [];
    const ccCourseKnowledgesKnowledgeName = objge_KnowledgesUserMaster.knowledgeName;
    const arrCourseKnowledgeId = await cc_CourseKnowledges_funcKey(
      clscc_CourseKnowledgesEN.con_KnowledgeName,
      ccCourseKnowledgesKnowledgeName,
      objge_KnowledgesUserMaster.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseKnowledgeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000897)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesUserMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
