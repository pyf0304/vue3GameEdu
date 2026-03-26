/**
 * 类名:clsge_KMLearningGoalsExWApi
 * 表名:ge_KMLearningGoals(01120960)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:06:39
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点模块学习目标(ge_KMLearningGoals)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_KMLearningGoalsENEx } from '@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsENEx';
import {
  ge_KMLearningGoals_GetObjLstByPagerAsync,
  ge_KMLearningGoals_SortFunByKey,
  ge_KMLearningGoals_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_KMLearningGoalsWApi';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { cc_KnowledgeModules_func, cc_KnowledgeModules_funcKey } from 'share-stu-study-base-lib';
import { clscc_KnowledgeModulesEN } from 'share-stu-study-base-lib';
import { vQxUsersSim_func, vQxUsersSim_funcKey } from 'share-gen-plat-base-lib';
import { clsvQxUsersSimEN } from 'share-gen-plat-base-lib';
import { clsge_KMLearningGoalsEN } from '@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const ge_KMLearningGoalsExController = 'ge_KMLearningGoalsExApi';
export const ge_KMLearningGoalsEx_ConstructorName = 'ge_KMLearningGoalsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_KMLearningGoalsEx_GetWebApiUrl(
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
 * @param objge_KMLearningGoalsENS:源对象
 * @returns 目标对象=>clsge_KMLearningGoalsEN:objge_KMLearningGoalsENT
 **/
export function ge_KMLearningGoalsEx_CopyToEx(
  objge_KMLearningGoalsENS: clsge_KMLearningGoalsEN,
): clsge_KMLearningGoalsENEx {
  const strThisFuncName = ge_KMLearningGoalsEx_CopyToEx.name;
  const objge_KMLearningGoalsENT = new clsge_KMLearningGoalsENEx();
  try {
    ObjectAssign(objge_KMLearningGoalsENT, objge_KMLearningGoalsENS);
    return objge_KMLearningGoalsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KMLearningGoalsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_KMLearningGoalsENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_KMLearningGoalsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_KMLearningGoalsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_KMLearningGoalsObjLst = await ge_KMLearningGoals_GetObjLstByPagerAsync(objPagerPara);
  const arrge_KMLearningGoalsExObjLst = arrge_KMLearningGoalsObjLst.map(
    ge_KMLearningGoalsEx_CopyToEx,
  );
  if (arrge_KMLearningGoalsExObjLst.length == 0) return arrge_KMLearningGoalsExObjLst;
  let arrge_KMLearningGoalsSel: Array<clsge_KMLearningGoalsENEx> = arrge_KMLearningGoalsExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_KMLearningGoalsSel = arrge_KMLearningGoalsSel.sort(
        ge_KMLearningGoalsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_KMLearningGoalsSel = arrge_KMLearningGoalsSel.sort(objPagerPara.sortFun);
    }
    return arrge_KMLearningGoalsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_KMLearningGoalsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_KMLearningGoalsENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KMLearningGoalsS:源对象
 **/
export async function ge_KMLearningGoalsEx_FuncMapCourseName(
  objge_KMLearningGoals: clsge_KMLearningGoalsENEx,
) {
  const strThisFuncName = ge_KMLearningGoalsEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objge_KMLearningGoals.courseName) == true) {
      const vccCourseSimCourseId = objge_KMLearningGoals.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objge_KMLearningGoals.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KMLearningGoalsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KMLearningGoalsS:源对象
 **/
export async function ge_KMLearningGoalsEx_FuncMapKnowledgeModuleName(
  objge_KMLearningGoals: clsge_KMLearningGoalsENEx,
) {
  const strThisFuncName = ge_KMLearningGoalsEx_FuncMapKnowledgeModuleName.name;
  try {
    if (IsNullOrEmpty(objge_KMLearningGoals.knowledgeModuleName) == true) {
      const ccKnowledgeModulesKnowledgeModuleId = objge_KMLearningGoals.knowledgeModuleId;
      const ccKnowledgeModulesKnowledgeModuleName = await cc_KnowledgeModules_func(
        clscc_KnowledgeModulesEN.con_KnowledgeModuleId,
        clscc_KnowledgeModulesEN.con_KnowledgeModuleName,
        ccKnowledgeModulesKnowledgeModuleId,
        objge_KMLearningGoals.courseId,
      );
      objge_KMLearningGoals.knowledgeModuleName = ccKnowledgeModulesKnowledgeModuleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000933)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KMLearningGoalsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KMLearningGoalsS:源对象
 **/
export async function ge_KMLearningGoalsEx_FuncMapUserName(
  objge_KMLearningGoals: clsge_KMLearningGoalsENEx,
) {
  const strThisFuncName = ge_KMLearningGoalsEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objge_KMLearningGoals.userName) == true) {
      const vQxUsersSimUserId = objge_KMLearningGoals.userId;
      const vQxUsersSimUserName = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_UserName,
        vQxUsersSimUserId,
      );
      objge_KMLearningGoals.userName = vQxUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KMLearningGoalsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_KMLearningGoalsS:源对象
 **/
export async function ge_KMLearningGoalsEx_FuncMapDateTimeSim(
  objge_KMLearningGoals: clsge_KMLearningGoalsENEx,
) {
  const strThisFuncName = ge_KMLearningGoalsEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objge_KMLearningGoals.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objge_KMLearningGoals.updDate);
      objge_KMLearningGoals.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000584)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KMLearningGoalsEx_ConstructorName,
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
export function ge_KMLearningGoalsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_KMLearningGoalsENEx.con_CourseName:
        return (a: clsge_KMLearningGoalsENEx, b: clsge_KMLearningGoalsENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_KMLearningGoalsENEx.con_KnowledgeModuleName:
        return (a: clsge_KMLearningGoalsENEx, b: clsge_KMLearningGoalsENEx) => {
          return a.knowledgeModuleName.localeCompare(b.knowledgeModuleName);
        };
      case clsge_KMLearningGoalsENEx.con_UserName:
        return (a: clsge_KMLearningGoalsENEx, b: clsge_KMLearningGoalsENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_KMLearningGoalsENEx.con_DateTimeSim:
        return (a: clsge_KMLearningGoalsENEx, b: clsge_KMLearningGoalsENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return ge_KMLearningGoals_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_KMLearningGoalsENEx.con_CourseName:
        return (a: clsge_KMLearningGoalsENEx, b: clsge_KMLearningGoalsENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_KMLearningGoalsENEx.con_KnowledgeModuleName:
        return (a: clsge_KMLearningGoalsENEx, b: clsge_KMLearningGoalsENEx) => {
          return b.knowledgeModuleName.localeCompare(a.knowledgeModuleName);
        };
      case clsge_KMLearningGoalsENEx.con_UserName:
        return (a: clsge_KMLearningGoalsENEx, b: clsge_KMLearningGoalsENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_KMLearningGoalsENEx.con_DateTimeSim:
        return (a: clsge_KMLearningGoalsENEx, b: clsge_KMLearningGoalsENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return ge_KMLearningGoals_SortFunByKey(strKey, AscOrDesc);
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
export function ge_KMLearningGoalsEx_FuncMapByFldName(
  strFldName: string,
  objge_KMLearningGoalsEx: clsge_KMLearningGoalsENEx,
) {
  const strThisFuncName = ge_KMLearningGoalsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_KMLearningGoalsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_KMLearningGoalsENEx.con_CourseName:
      return ge_KMLearningGoalsEx_FuncMapCourseName(objge_KMLearningGoalsEx);
    case clsge_KMLearningGoalsENEx.con_KnowledgeModuleName:
      return ge_KMLearningGoalsEx_FuncMapKnowledgeModuleName(objge_KMLearningGoalsEx);
    case clsge_KMLearningGoalsENEx.con_UserName:
      return ge_KMLearningGoalsEx_FuncMapUserName(objge_KMLearningGoalsEx);
    case clsge_KMLearningGoalsENEx.con_DateTimeSim:
      return ge_KMLearningGoalsEx_FuncMapDateTimeSim(objge_KMLearningGoalsEx);
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
export async function ge_KMLearningGoalsEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_KMLearningGoalsENEx.con_CourseName:
      return (obj: clsge_KMLearningGoalsENEx) => {
        return obj.courseName === value;
      };
    case clsge_KMLearningGoalsENEx.con_KnowledgeModuleName:
      return (obj: clsge_KMLearningGoalsENEx) => {
        return obj.knowledgeModuleName === value;
      };
    case clsge_KMLearningGoalsENEx.con_UserName:
      return (obj: clsge_KMLearningGoalsENEx) => {
        return obj.userName === value;
      };
    case clsge_KMLearningGoalsENEx.con_DateTimeSim:
      return (obj: clsge_KMLearningGoalsENEx) => {
        return obj.dateTimeSim === value;
      };
    default:
      return ge_KMLearningGoals_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_KMLearningGoalsS:源对象
 **/
export async function ge_KMLearningGoalsEx_FuncMapKeyCourseName(
  objge_KMLearningGoals: clsge_KMLearningGoalsENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_KMLearningGoalsEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objge_KMLearningGoals.courseName) == true) return [];
    const vccCourseSimCourseName = objge_KMLearningGoals.courseName;
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
      ge_KMLearningGoalsEx_ConstructorName,
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
 * @param objge_KMLearningGoalsS:源对象
 **/
export async function ge_KMLearningGoalsEx_FuncMapKeyKnowledgeModuleName(
  objge_KMLearningGoals: clsge_KMLearningGoalsENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_KMLearningGoalsEx_FuncMapKeyKnowledgeModuleName.name;
  try {
    if (IsNullOrEmpty(objge_KMLearningGoals.knowledgeModuleName) == true) return [];
    const ccKnowledgeModulesKnowledgeModuleName = objge_KMLearningGoals.knowledgeModuleName;
    const arrKnowledgeModuleId = await cc_KnowledgeModules_funcKey(
      clscc_KnowledgeModulesEN.con_KnowledgeModuleName,
      ccKnowledgeModulesKnowledgeModuleName,
      enumComparisonOp.Like_03,
      objge_KMLearningGoals.courseId,
    );
    return arrKnowledgeModuleId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000936)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KMLearningGoalsEx_ConstructorName,
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
 * @param objge_KMLearningGoalsS:源对象
 **/
export async function ge_KMLearningGoalsEx_FuncMapKeyUserName(
  objge_KMLearningGoals: clsge_KMLearningGoalsENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_KMLearningGoalsEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objge_KMLearningGoals.userName) == true) return [];
    const vQxUsersSimUserName = objge_KMLearningGoals.userName;
    const arrUserId = await vQxUsersSim_funcKey(
      clsvQxUsersSimEN.con_UserName,
      vQxUsersSimUserName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000641)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_KMLearningGoalsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
