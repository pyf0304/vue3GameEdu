/**
 * 类名:clsge_KnowledgesClsMasterExWApi
 * 表名:ge_KnowledgesClsMaster(01120962)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:27:47
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
 * 知识点教学班掌握度(ge_KnowledgesClsMaster)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年12月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_KnowledgesClsMasterENEx } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesClsMasterENEx';
import {
  ge_KnowledgesClsMaster_GetObjLstByPagerAsync,
  ge_KnowledgesClsMaster_SortFunByKey,
  ge_KnowledgesClsMaster_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesClsMasterWApi';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { KnowledgeMasterLevel_func, KnowledgeMasterLevel_funcKey } from 'share-stu-study-base-lib';
import { clsKnowledgeMasterLevelEN } from 'share-stu-study-base-lib';
import { clsge_KnowledgesClsMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesClsMasterEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const ge_KnowledgesClsMasterExController = 'ge_KnowledgesClsMasterExApi';
export const ge_KnowledgesClsMasterEx_ConstructorName = 'ge_KnowledgesClsMasterEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_KnowledgesClsMasterEx_GetWebApiUrl(
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
 * @param objge_KnowledgesClsMasterENS:源对象
 * @returns 目标对象=>clsge_KnowledgesClsMasterEN:objge_KnowledgesClsMasterENT
 **/
export function ge_KnowledgesClsMasterEx_CopyToEx(
  objge_KnowledgesClsMasterENS: clsge_KnowledgesClsMasterEN,
): clsge_KnowledgesClsMasterENEx {
  const strThisFuncName = ge_KnowledgesClsMasterEx_CopyToEx.name;
  const objge_KnowledgesClsMasterENT = new clsge_KnowledgesClsMasterENEx();
  try {
    ObjectAssign(objge_KnowledgesClsMasterENT, objge_KnowledgesClsMasterENS);
    return objge_KnowledgesClsMasterENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesClsMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_KnowledgesClsMasterENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_KnowledgesClsMasterEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_KnowledgesClsMasterENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_KnowledgesClsMasterObjLst = await ge_KnowledgesClsMaster_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrge_KnowledgesClsMasterExObjLst = arrge_KnowledgesClsMasterObjLst.map(
    ge_KnowledgesClsMasterEx_CopyToEx,
  );
  if (arrge_KnowledgesClsMasterExObjLst.length == 0) return arrge_KnowledgesClsMasterExObjLst;
  let arrge_KnowledgesClsMasterSel: Array<clsge_KnowledgesClsMasterENEx> =
    arrge_KnowledgesClsMasterExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_KnowledgesClsMasterSel = arrge_KnowledgesClsMasterSel.sort(
        ge_KnowledgesClsMasterEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_KnowledgesClsMasterSel = arrge_KnowledgesClsMasterSel.sort(objPagerPara.sortFun);
    }
    return arrge_KnowledgesClsMasterSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_KnowledgesClsMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_KnowledgesClsMasterENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesClsMasterS:源对象
 **/
export async function ge_KnowledgesClsMasterEx_FuncMapCourseName(
  objge_KnowledgesClsMaster: clsge_KnowledgesClsMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesClsMasterEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesClsMaster.courseName) == true) {
      const vccCourseSimCourseId = objge_KnowledgesClsMaster.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objge_KnowledgesClsMaster.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesClsMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesClsMasterS:源对象
 **/
export async function ge_KnowledgesClsMasterEx_FuncMapMasterLevelName(
  objge_KnowledgesClsMaster: clsge_KnowledgesClsMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesClsMasterEx_FuncMapMasterLevelName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesClsMaster.masterLevelName) == true) {
      const KnowledgeMasterLevelMasterLevelId = objge_KnowledgesClsMaster.masterLevelId;
      const KnowledgeMasterLevelMasterLevelName = await KnowledgeMasterLevel_func(
        clsKnowledgeMasterLevelEN.con_MasterLevelId,
        clsKnowledgeMasterLevelEN.con_MasterLevelName,
        KnowledgeMasterLevelMasterLevelId,
      );
      objge_KnowledgesClsMaster.masterLevelName = KnowledgeMasterLevelMasterLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000957)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesClsMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KnowledgesClsMasterS:源对象
 **/
export async function ge_KnowledgesClsMasterEx_FuncMapDateTimeSim(
  objge_KnowledgesClsMaster: clsge_KnowledgesClsMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesClsMasterEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesClsMaster.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(
        objge_KnowledgesClsMaster.updDate,
      );
      objge_KnowledgesClsMaster.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000584)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KnowledgesClsMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_KnowledgesClsMasterEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_KnowledgesClsMasterENEx.con_KnowledgeName:
        return (a: clsge_KnowledgesClsMasterENEx, b: clsge_KnowledgesClsMasterENEx) => {
          return a.knowledgeName.localeCompare(b.knowledgeName);
        };
      case clsge_KnowledgesClsMasterENEx.con_MasterLevelName:
        return (a: clsge_KnowledgesClsMasterENEx, b: clsge_KnowledgesClsMasterENEx) => {
          return a.masterLevelName.localeCompare(b.masterLevelName);
        };
      case clsge_KnowledgesClsMasterENEx.con_CourseName:
        return (a: clsge_KnowledgesClsMasterENEx, b: clsge_KnowledgesClsMasterENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_KnowledgesClsMasterENEx.con_DateTimeSim:
        return (a: clsge_KnowledgesClsMasterENEx, b: clsge_KnowledgesClsMasterENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return ge_KnowledgesClsMaster_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_KnowledgesClsMasterENEx.con_KnowledgeName:
        return (a: clsge_KnowledgesClsMasterENEx, b: clsge_KnowledgesClsMasterENEx) => {
          return b.knowledgeName.localeCompare(a.knowledgeName);
        };
      case clsge_KnowledgesClsMasterENEx.con_MasterLevelName:
        return (a: clsge_KnowledgesClsMasterENEx, b: clsge_KnowledgesClsMasterENEx) => {
          return b.masterLevelName.localeCompare(a.masterLevelName);
        };
      case clsge_KnowledgesClsMasterENEx.con_CourseName:
        return (a: clsge_KnowledgesClsMasterENEx, b: clsge_KnowledgesClsMasterENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_KnowledgesClsMasterENEx.con_DateTimeSim:
        return (a: clsge_KnowledgesClsMasterENEx, b: clsge_KnowledgesClsMasterENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return ge_KnowledgesClsMaster_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_KnowledgesClsMasterEx_FuncMapByFldName(
  strFldName: string,
  objge_KnowledgesClsMasterEx: clsge_KnowledgesClsMasterENEx,
) {
  const strThisFuncName = ge_KnowledgesClsMasterEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_KnowledgesClsMasterEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_KnowledgesClsMasterENEx.con_MasterLevelName:
      return ge_KnowledgesClsMasterEx_FuncMapMasterLevelName(objge_KnowledgesClsMasterEx);
    case clsge_KnowledgesClsMasterENEx.con_CourseName:
      return ge_KnowledgesClsMasterEx_FuncMapCourseName(objge_KnowledgesClsMasterEx);
    case clsge_KnowledgesClsMasterENEx.con_DateTimeSim:
      return ge_KnowledgesClsMasterEx_FuncMapDateTimeSim(objge_KnowledgesClsMasterEx);
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
 * 日期:2024-12-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_KnowledgesClsMasterEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_KnowledgesClsMasterENEx.con_KnowledgeName:
      return (obj: clsge_KnowledgesClsMasterENEx) => {
        return obj.knowledgeName === value;
      };
    case clsge_KnowledgesClsMasterENEx.con_MasterLevelName:
      return (obj: clsge_KnowledgesClsMasterENEx) => {
        return obj.masterLevelName === value;
      };
    case clsge_KnowledgesClsMasterENEx.con_CourseName:
      return (obj: clsge_KnowledgesClsMasterENEx) => {
        return obj.courseName === value;
      };
    case clsge_KnowledgesClsMasterENEx.con_DateTimeSim:
      return (obj: clsge_KnowledgesClsMasterENEx) => {
        return obj.dateTimeSim === value;
      };
    default:
      return ge_KnowledgesClsMaster_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_KnowledgesClsMasterS:源对象
 **/
export async function ge_KnowledgesClsMasterEx_FuncMapKeyCourseName(
  objge_KnowledgesClsMaster: clsge_KnowledgesClsMasterENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_KnowledgesClsMasterEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesClsMaster.courseName) == true) return [];
    const vccCourseSimCourseName = objge_KnowledgesClsMaster.courseName;
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
      ge_KnowledgesClsMasterEx_ConstructorName,
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
 * @param objge_KnowledgesClsMasterS:源对象
 **/
export async function ge_KnowledgesClsMasterEx_FuncMapKeyMasterLevelName(
  objge_KnowledgesClsMaster: clsge_KnowledgesClsMasterENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_KnowledgesClsMasterEx_FuncMapKeyMasterLevelName.name;
  try {
    if (IsNullOrEmpty(objge_KnowledgesClsMaster.masterLevelName) == true) return [];
    const KnowledgeMasterLevelMasterLevelName = objge_KnowledgesClsMaster.masterLevelName;
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
      ge_KnowledgesClsMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
