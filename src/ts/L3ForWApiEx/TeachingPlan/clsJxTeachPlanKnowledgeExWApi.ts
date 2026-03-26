/**
 * 类名:clsJxTeachPlanKnowledgeExWApi
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2024.05.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/05/05 10:32:42
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学计划知识点(JxTeachPlanKnowledge)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年05月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsJxTeachPlanKnowledgeENEx } from '@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeENEx';
import {
  JxTeachPlanKnowledge_GetObjLstAsync,
  JxTeachPlanKnowledge_SortFunByKey,
  JxTeachPlanKnowledge_FilterFunByKey,
} from '@/ts/L3ForWApi/TeachingPlan/clsJxTeachPlanKnowledgeWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  AssessmentMethods_func,
  AssessmentMethods_funcKey,
} from '@/ts/L3ForWApi/SysPara/clsAssessmentMethodsWApi';
import { clsAssessmentMethodsEN } from '@/ts/L0Entity/SysPara/clsAssessmentMethodsEN';
import { cc_CourseKnowledges_func, cc_CourseKnowledges_funcKey } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import {
  TeachingMethods_func,
  TeachingMethods_funcKey,
} from '@/ts/L3ForWApi/SysPara/clsTeachingMethodsWApi';
import { clsTeachingMethodsEN } from '@/ts/L0Entity/SysPara/clsTeachingMethodsEN';
import {
  JxTeachingPlan_func,
  JxTeachingPlan_funcKey,
} from '@/ts/L3ForWApi/TeachingPlan/clsJxTeachingPlanWApi';
import { clsJxTeachingPlanEN } from '@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN';
import { clsJxTeachPlanKnowledgeEN } from '@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const jxTeachPlanKnowledgeExController = 'JxTeachPlanKnowledgeExApi';
export const jxTeachPlanKnowledgeEx_ConstructorName = 'jxTeachPlanKnowledgeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function JxTeachPlanKnowledgeEx_GetWebApiUrl(
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
 * @param objJxTeachPlanKnowledgeENS:源对象
 * @returns 目标对象=>clsJxTeachPlanKnowledgeEN:objJxTeachPlanKnowledgeENT
 **/
export function JxTeachPlanKnowledgeEx_CopyToEx(
  objJxTeachPlanKnowledgeENS: clsJxTeachPlanKnowledgeEN,
): clsJxTeachPlanKnowledgeENEx {
  const strThisFuncName = JxTeachPlanKnowledgeEx_CopyToEx.name;
  const objJxTeachPlanKnowledgeENT = new clsJxTeachPlanKnowledgeENEx();
  try {
    ObjectAssign(objJxTeachPlanKnowledgeENT, objJxTeachPlanKnowledgeENS);
    return objJxTeachPlanKnowledgeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objJxTeachPlanKnowledgeENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function JxTeachPlanKnowledgeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsJxTeachPlanKnowledgeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrJxTeachPlanKnowledgeObjLst = await JxTeachPlanKnowledge_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrJxTeachPlanKnowledgeExObjLst = arrJxTeachPlanKnowledgeObjLst.map(
    JxTeachPlanKnowledgeEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsJxTeachPlanKnowledgeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrJxTeachPlanKnowledgeExObjLst) {
      await JxTeachPlanKnowledgeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrJxTeachPlanKnowledgeExObjLst.length == 0) return arrJxTeachPlanKnowledgeExObjLst;
  let arrJxTeachPlanKnowledgeSel: Array<clsJxTeachPlanKnowledgeENEx> =
    arrJxTeachPlanKnowledgeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrJxTeachPlanKnowledgeSel = arrJxTeachPlanKnowledgeSel.sort(
        JxTeachPlanKnowledgeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrJxTeachPlanKnowledgeSel = arrJxTeachPlanKnowledgeSel.sort(objPagerPara.sortFun);
    }
    arrJxTeachPlanKnowledgeSel = arrJxTeachPlanKnowledgeSel.slice(intStart, intEnd);
    return arrJxTeachPlanKnowledgeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      jxTeachPlanKnowledgeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJxTeachPlanKnowledgeENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJxTeachPlanKnowledgeS:源对象
 **/
export async function JxTeachPlanKnowledgeEx_FuncMapAssessmentMethodName(
  objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeENEx,
) {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapAssessmentMethodName.name;
  try {
    if (IsNullOrEmpty(objJxTeachPlanKnowledge.assessmentMethodName) == true) {
      const AssessmentMethodsAssessmentMethodId = objJxTeachPlanKnowledge.assessmentMethodId;
      const AssessmentMethodsAssessmentMethodName = await AssessmentMethods_func(
        clsAssessmentMethodsEN.con_AssessmentMethodId,
        clsAssessmentMethodsEN.con_AssessmentMethodName,
        AssessmentMethodsAssessmentMethodId,
      );
      objJxTeachPlanKnowledge.assessmentMethodName = AssessmentMethodsAssessmentMethodName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000526)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJxTeachPlanKnowledgeS:源对象
 **/
export async function JxTeachPlanKnowledgeEx_FuncMapKnowledgeName(
  objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeENEx,
) {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapKnowledgeName.name;
  try {
    if (IsNullOrEmpty(objJxTeachPlanKnowledge.knowledgeName) == true) {
      const ccCourseKnowledgesCourseKnowledgeId = objJxTeachPlanKnowledge.courseKnowledgeId;
      const ccCourseKnowledgesKnowledgeName = await cc_CourseKnowledges_func(
        clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
        clscc_CourseKnowledgesEN.con_KnowledgeName,
        ccCourseKnowledgesCourseKnowledgeId,
        objJxTeachPlanKnowledge.courseId,
      );
      objJxTeachPlanKnowledge.knowledgeName = ccCourseKnowledgesKnowledgeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000453)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJxTeachPlanKnowledgeS:源对象
 **/
export async function JxTeachPlanKnowledgeEx_FuncMapTeachingMethodName(
  objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeENEx,
) {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapTeachingMethodName.name;
  try {
    if (IsNullOrEmpty(objJxTeachPlanKnowledge.teachingMethodName) == true) {
      const TeachingMethodsTeachingMethodId = objJxTeachPlanKnowledge.teachingMethodId;
      const TeachingMethodsTeachingMethodName = await TeachingMethods_func(
        clsTeachingMethodsEN.con_TeachingMethodId,
        clsTeachingMethodsEN.con_TeachingMethodName,
        TeachingMethodsTeachingMethodId,
      );
      objJxTeachPlanKnowledge.teachingMethodName = TeachingMethodsTeachingMethodName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000527)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJxTeachPlanKnowledgeS:源对象
 **/
export async function JxTeachPlanKnowledgeEx_FuncMapTeachingPlanDesc(
  objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeENEx,
) {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapTeachingPlanDesc.name;
  try {
    if (IsNullOrEmpty(objJxTeachPlanKnowledge.teachingPlanDesc) == true) {
      const JxTeachingPlanIdTeachingPlan = objJxTeachPlanKnowledge.idTeachingPlan;
      const JxTeachingPlanTeachingPlanDesc = await JxTeachingPlan_func(
        clsJxTeachingPlanEN.con_IdTeachingPlan,
        clsJxTeachingPlanEN.con_TeachingPlanDesc,
        JxTeachingPlanIdTeachingPlan,
      );
      objJxTeachPlanKnowledge.teachingPlanDesc = JxTeachingPlanTeachingPlanDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000528)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-05-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function JxTeachPlanKnowledgeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName:
        return (a: clsJxTeachPlanKnowledgeENEx, b: clsJxTeachPlanKnowledgeENEx) => {
          return a.assessmentMethodName.localeCompare(b.assessmentMethodName);
        };
      case clsJxTeachPlanKnowledgeENEx.con_KnowledgeName:
        return (a: clsJxTeachPlanKnowledgeENEx, b: clsJxTeachPlanKnowledgeENEx) => {
          return a.knowledgeName.localeCompare(b.knowledgeName);
        };
      case clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName:
        return (a: clsJxTeachPlanKnowledgeENEx, b: clsJxTeachPlanKnowledgeENEx) => {
          return a.teachingMethodName.localeCompare(b.teachingMethodName);
        };
      case clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc:
        return (a: clsJxTeachPlanKnowledgeENEx, b: clsJxTeachPlanKnowledgeENEx) => {
          return a.teachingPlanDesc.localeCompare(b.teachingPlanDesc);
        };
      default:
        return JxTeachPlanKnowledge_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName:
        return (a: clsJxTeachPlanKnowledgeENEx, b: clsJxTeachPlanKnowledgeENEx) => {
          return b.assessmentMethodName.localeCompare(a.assessmentMethodName);
        };
      case clsJxTeachPlanKnowledgeENEx.con_KnowledgeName:
        return (a: clsJxTeachPlanKnowledgeENEx, b: clsJxTeachPlanKnowledgeENEx) => {
          return b.knowledgeName.localeCompare(a.knowledgeName);
        };
      case clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName:
        return (a: clsJxTeachPlanKnowledgeENEx, b: clsJxTeachPlanKnowledgeENEx) => {
          return b.teachingMethodName.localeCompare(a.teachingMethodName);
        };
      case clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc:
        return (a: clsJxTeachPlanKnowledgeENEx, b: clsJxTeachPlanKnowledgeENEx) => {
          return b.teachingPlanDesc.localeCompare(a.teachingPlanDesc);
        };
      default:
        return JxTeachPlanKnowledge_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-05-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function JxTeachPlanKnowledgeEx_FuncMapByFldName(
  strFldName: string,
  objJxTeachPlanKnowledgeEx: clsJxTeachPlanKnowledgeENEx,
) {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsJxTeachPlanKnowledgeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName:
      return JxTeachPlanKnowledgeEx_FuncMapAssessmentMethodName(objJxTeachPlanKnowledgeEx);
    case clsJxTeachPlanKnowledgeENEx.con_KnowledgeName:
      return JxTeachPlanKnowledgeEx_FuncMapKnowledgeName(objJxTeachPlanKnowledgeEx);
    case clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName:
      return JxTeachPlanKnowledgeEx_FuncMapTeachingMethodName(objJxTeachPlanKnowledgeEx);
    case clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc:
      return JxTeachPlanKnowledgeEx_FuncMapTeachingPlanDesc(objJxTeachPlanKnowledgeEx);
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
 * 日期:2024-05-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function JxTeachPlanKnowledgeEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName:
      return (obj: clsJxTeachPlanKnowledgeENEx) => {
        return obj.assessmentMethodName === value;
      };
    case clsJxTeachPlanKnowledgeENEx.con_KnowledgeName:
      return (obj: clsJxTeachPlanKnowledgeENEx) => {
        return obj.knowledgeName === value;
      };
    case clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName:
      return (obj: clsJxTeachPlanKnowledgeENEx) => {
        return obj.teachingMethodName === value;
      };
    case clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc:
      return (obj: clsJxTeachPlanKnowledgeENEx) => {
        return obj.teachingPlanDesc === value;
      };
    default:
      return JxTeachPlanKnowledge_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objJxTeachPlanKnowledgeS:源对象
 **/
export async function JxTeachPlanKnowledgeEx_FuncMapKeyAssessmentMethodName(
  objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeENEx,
): Promise<Array<string>> {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapKeyAssessmentMethodName.name;
  try {
    if (IsNullOrEmpty(objJxTeachPlanKnowledge.assessmentMethodName) == true) return [];
    const AssessmentMethodsAssessmentMethodName = objJxTeachPlanKnowledge.assessmentMethodName;
    const arrAssessmentMethodId = await AssessmentMethods_funcKey(
      clsAssessmentMethodsEN.con_AssessmentMethodName,
      AssessmentMethodsAssessmentMethodName,
      enumComparisonOp.Like_03,
    );
    return arrAssessmentMethodId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000526)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
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
 * @param objJxTeachPlanKnowledgeS:源对象
 **/
export async function JxTeachPlanKnowledgeEx_FuncMapKeyKnowledgeName(
  objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeENEx,
): Promise<Array<string>> {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapKeyKnowledgeName.name;
  try {
    if (IsNullOrEmpty(objJxTeachPlanKnowledge.knowledgeName) == true) return [];
    const ccCourseKnowledgesKnowledgeName = objJxTeachPlanKnowledge.knowledgeName;
    const arrCourseKnowledgeId = await cc_CourseKnowledges_funcKey(
      clscc_CourseKnowledgesEN.con_KnowledgeName,
      ccCourseKnowledgesKnowledgeName,
      objJxTeachPlanKnowledge.courseId,
      enumComparisonOp.Like_03,
    );
    return arrCourseKnowledgeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000453)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
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
 * @param objJxTeachPlanKnowledgeS:源对象
 **/
export async function JxTeachPlanKnowledgeEx_FuncMapKeyTeachingMethodName(
  objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeENEx,
): Promise<Array<string>> {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapKeyTeachingMethodName.name;
  try {
    if (IsNullOrEmpty(objJxTeachPlanKnowledge.teachingMethodName) == true) return [];
    const TeachingMethodsTeachingMethodName = objJxTeachPlanKnowledge.teachingMethodName;
    const arrTeachingMethodId = await TeachingMethods_funcKey(
      clsTeachingMethodsEN.con_TeachingMethodName,
      TeachingMethodsTeachingMethodName,
      enumComparisonOp.Like_03,
    );
    return arrTeachingMethodId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000527)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
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
 * @param objJxTeachPlanKnowledgeS:源对象
 **/
export async function JxTeachPlanKnowledgeEx_FuncMapKeyTeachingPlanDesc(
  objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeENEx,
): Promise<Array<string>> {
  const strThisFuncName = JxTeachPlanKnowledgeEx_FuncMapKeyTeachingPlanDesc.name;
  try {
    if (IsNullOrEmpty(objJxTeachPlanKnowledge.teachingPlanDesc) == true) return [];
    const JxTeachingPlanTeachingPlanDesc = objJxTeachPlanKnowledge.teachingPlanDesc;
    const arrIdTeachingPlan = await JxTeachingPlan_funcKey(
      clsJxTeachingPlanEN.con_TeachingPlanDesc,
      JxTeachingPlanTeachingPlanDesc,
      enumComparisonOp.Like_03,
    );
    return arrIdTeachingPlan;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000528)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachPlanKnowledgeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
