/**
 * 类名:clsJxTeachingPlanExWApi
 * 表名:JxTeachingPlan(01120968)
 * 版本:2024.11.08.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/09 18:38:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学计划(JxTeachingPlan)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月09日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  JxTeachingPlan_GetObjLstCache,
  JxTeachingPlan_GetObjLstByPagerAsync,
  JxTeachingPlan_SortFunByKey,
  JxTeachingPlan_FilterFunByKey,
} from '@/ts/L3ForWApi/TeachingPlan/clsJxTeachingPlanWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsJxTeachingPlanEN } from '@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN';
import { clsJxTeachingPlanENEx } from '@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanENEx';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { XzGrade_func, XzGrade_funcKey } from 'share-stu-study-base-lib';
import { clsXzGradeEN } from 'share-stu-study-base-lib';
import { SchoolTerm_func, SchoolTerm_funcKey } from 'share-stu-study-base-lib';
import { clsSchoolTermEN } from 'share-stu-study-base-lib';
import {
  SubmitStatus_func,
  SubmitStatus_funcKey,
} from '@/ts/L3ForWApi/BaseTab/clsSubmitStatusWApi';
import { clsSubmitStatusEN } from '@/ts/L0Entity/BaseTab/clsSubmitStatusEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const jxTeachingPlanExController = 'JxTeachingPlanExApi';
export const jxTeachingPlanEx_ConstructorName = 'jxTeachingPlanEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function JxTeachingPlanEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objJxTeachingPlanENS:源对象
 * @returns 目标对象=>clsJxTeachingPlanEN:objJxTeachingPlanENT
 **/
export function JxTeachingPlanEx_CopyToEx(
  objJxTeachingPlanENS: clsJxTeachingPlanEN,
): clsJxTeachingPlanENEx {
  const strThisFuncName = JxTeachingPlanEx_CopyToEx.name;
  const objJxTeachingPlanENT = new clsJxTeachingPlanENEx();
  try {
    ObjectAssign(objJxTeachingPlanENT, objJxTeachingPlanENS);
    return objJxTeachingPlanENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachingPlanEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objJxTeachingPlanENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function JxTeachingPlanEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsJxTeachingPlanENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrJxTeachingPlanObjLst = await JxTeachingPlan_GetObjLstCache();
  const arrJxTeachingPlanExObjLst = arrJxTeachingPlanObjLst.map(JxTeachingPlanEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsJxTeachingPlanEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrJxTeachingPlanExObjLst) {
      await JxTeachingPlanEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrJxTeachingPlanExObjLst.length == 0) return arrJxTeachingPlanExObjLst;
  let arrJxTeachingPlanSel: Array<clsJxTeachingPlanENEx> = arrJxTeachingPlanExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objJxTeachingPlanCond = new clsJxTeachingPlanENEx();
  ObjectAssign(objJxTeachingPlanCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsJxTeachingPlanWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objJxTeachingPlanCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrJxTeachingPlanSel = arrJxTeachingPlanSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrJxTeachingPlanSel.length == 0) return arrJxTeachingPlanSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrJxTeachingPlanSel = arrJxTeachingPlanSel.sort(
        JxTeachingPlanEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrJxTeachingPlanSel = arrJxTeachingPlanSel.sort(objPagerPara.sortFun);
    }
    arrJxTeachingPlanSel = arrJxTeachingPlanSel.slice(intStart, intEnd);
    return arrJxTeachingPlanSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      jxTeachingPlanEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJxTeachingPlanENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function JxTeachingPlanEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsJxTeachingPlanENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrJxTeachingPlanObjLst = await JxTeachingPlan_GetObjLstByPagerAsync(objPagerPara);
  const arrJxTeachingPlanExObjLst = arrJxTeachingPlanObjLst.map(JxTeachingPlanEx_CopyToEx);
  if (arrJxTeachingPlanExObjLst.length == 0) return arrJxTeachingPlanExObjLst;
  let arrJxTeachingPlanSel: Array<clsJxTeachingPlanENEx> = arrJxTeachingPlanExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrJxTeachingPlanSel = arrJxTeachingPlanSel.sort(
        JxTeachingPlanEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrJxTeachingPlanSel = arrJxTeachingPlanSel.sort(objPagerPara.sortFun);
    }
    return arrJxTeachingPlanSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      jxTeachingPlanEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJxTeachingPlanENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJxTeachingPlanS:源对象
 **/
export async function JxTeachingPlanEx_FuncMapCourseName(objJxTeachingPlan: clsJxTeachingPlanENEx) {
  const strThisFuncName = JxTeachingPlanEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objJxTeachingPlan.courseName) == true) {
      const vccCourseSimCourseId = objJxTeachingPlan.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objJxTeachingPlan.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachingPlanEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJxTeachingPlanS:源对象
 **/
export async function JxTeachingPlanEx_FuncMapGradeName(objJxTeachingPlan: clsJxTeachingPlanENEx) {
  const strThisFuncName = JxTeachingPlanEx_FuncMapGradeName.name;
  try {
    if (IsNullOrEmpty(objJxTeachingPlan.gradeName) == true) {
      const XzGradeIdGrade = objJxTeachingPlan.idGrade;
      const XzGradeGradeName = await XzGrade_func(
        clsXzGradeEN.con_IdGrade,
        clsXzGradeEN.con_GradeName,
        XzGradeIdGrade,
      );
      objJxTeachingPlan.gradeName = XzGradeGradeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000554)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachingPlanEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJxTeachingPlanS:源对象
 **/
export async function JxTeachingPlanEx_FuncMapSchoolTermName(
  objJxTeachingPlan: clsJxTeachingPlanENEx,
) {
  const strThisFuncName = JxTeachingPlanEx_FuncMapSchoolTermName.name;
  try {
    if (IsNullOrEmpty(objJxTeachingPlan.schoolTermName) == true) {
      const SchoolTermSchoolTerm = objJxTeachingPlan.schoolTerm;
      const SchoolTermSchoolTermName = await SchoolTerm_func(
        clsSchoolTermEN.con_SchoolTerm,
        clsSchoolTermEN.con_SchoolTermName,
        SchoolTermSchoolTerm,
      );
      objJxTeachingPlan.schoolTermName = SchoolTermSchoolTermName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000943)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachingPlanEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJxTeachingPlanS:源对象
 **/
export async function JxTeachingPlanEx_FuncMapSubmitStatusDesc(
  objJxTeachingPlan: clsJxTeachingPlanENEx,
) {
  const strThisFuncName = JxTeachingPlanEx_FuncMapSubmitStatusDesc.name;
  try {
    if (IsNullOrEmpty(objJxTeachingPlan.submitStatusDesc) == true) {
      const SubmitStatusIdSubmitStatus = objJxTeachingPlan.idSubmitStatus;
      const SubmitStatusSubmitStatusDesc = await SubmitStatus_func(
        clsSubmitStatusEN.con_IdSubmitStatus,
        clsSubmitStatusEN.con_SubmitStatusDesc,
        SubmitStatusIdSubmitStatus,
      );
      objJxTeachingPlan.submitStatusDesc = SubmitStatusSubmitStatusDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000944)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachingPlanEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function JxTeachingPlanEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsJxTeachingPlanENEx.con_CourseName:
        return (a: clsJxTeachingPlanENEx, b: clsJxTeachingPlanENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsJxTeachingPlanENEx.con_GradeName:
        return (a: clsJxTeachingPlanENEx, b: clsJxTeachingPlanENEx) => {
          return a.gradeName.localeCompare(b.gradeName);
        };
      case clsJxTeachingPlanENEx.con_SchoolTermName:
        return (a: clsJxTeachingPlanENEx, b: clsJxTeachingPlanENEx) => {
          return a.schoolTermName.localeCompare(b.schoolTermName);
        };
      case clsJxTeachingPlanENEx.con_SubmitStatusDesc:
        return (a: clsJxTeachingPlanENEx, b: clsJxTeachingPlanENEx) => {
          return a.submitStatusDesc.localeCompare(b.submitStatusDesc);
        };
      default:
        return JxTeachingPlan_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsJxTeachingPlanENEx.con_CourseName:
        return (a: clsJxTeachingPlanENEx, b: clsJxTeachingPlanENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsJxTeachingPlanENEx.con_GradeName:
        return (a: clsJxTeachingPlanENEx, b: clsJxTeachingPlanENEx) => {
          return b.gradeName.localeCompare(a.gradeName);
        };
      case clsJxTeachingPlanENEx.con_SchoolTermName:
        return (a: clsJxTeachingPlanENEx, b: clsJxTeachingPlanENEx) => {
          return b.schoolTermName.localeCompare(a.schoolTermName);
        };
      case clsJxTeachingPlanENEx.con_SubmitStatusDesc:
        return (a: clsJxTeachingPlanENEx, b: clsJxTeachingPlanENEx) => {
          return b.submitStatusDesc.localeCompare(a.submitStatusDesc);
        };
      default:
        return JxTeachingPlan_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function JxTeachingPlanEx_FuncMapByFldName(
  strFldName: string,
  objJxTeachingPlanEx: clsJxTeachingPlanENEx,
) {
  const strThisFuncName = JxTeachingPlanEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsJxTeachingPlanEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsJxTeachingPlanENEx.con_CourseName:
      return JxTeachingPlanEx_FuncMapCourseName(objJxTeachingPlanEx);
    case clsJxTeachingPlanENEx.con_GradeName:
      return JxTeachingPlanEx_FuncMapGradeName(objJxTeachingPlanEx);
    case clsJxTeachingPlanENEx.con_SchoolTermName:
      return JxTeachingPlanEx_FuncMapSchoolTermName(objJxTeachingPlanEx);
    case clsJxTeachingPlanENEx.con_SubmitStatusDesc:
      return JxTeachingPlanEx_FuncMapSubmitStatusDesc(objJxTeachingPlanEx);
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
 * 日期:2024-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function JxTeachingPlanEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsJxTeachingPlanENEx.con_CourseName:
      return (obj: clsJxTeachingPlanENEx) => {
        return obj.courseName === value;
      };
    case clsJxTeachingPlanENEx.con_GradeName:
      return (obj: clsJxTeachingPlanENEx) => {
        return obj.gradeName === value;
      };
    case clsJxTeachingPlanENEx.con_SchoolTermName:
      return (obj: clsJxTeachingPlanENEx) => {
        return obj.schoolTermName === value;
      };
    case clsJxTeachingPlanENEx.con_SubmitStatusDesc:
      return (obj: clsJxTeachingPlanENEx) => {
        return obj.submitStatusDesc === value;
      };
    default:
      return JxTeachingPlan_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objJxTeachingPlanS:源对象
 **/
export async function JxTeachingPlanEx_FuncMapKeyCourseName(
  objJxTeachingPlan: clsJxTeachingPlanENEx,
): Promise<Array<string>> {
  const strThisFuncName = JxTeachingPlanEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objJxTeachingPlan.courseName) == true) return [];
    const vccCourseSimCourseName = objJxTeachingPlan.courseName;
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
      jxTeachingPlanEx_ConstructorName,
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
 * @param objJxTeachingPlanS:源对象
 **/
export async function JxTeachingPlanEx_FuncMapKeyGradeName(
  objJxTeachingPlan: clsJxTeachingPlanENEx,
): Promise<Array<string>> {
  const strThisFuncName = JxTeachingPlanEx_FuncMapKeyGradeName.name;
  try {
    if (IsNullOrEmpty(objJxTeachingPlan.gradeName) == true) return [];
    const XzGradeGradeName = objJxTeachingPlan.gradeName;
    const arrIdGrade = await XzGrade_funcKey(
      clsXzGradeEN.con_GradeName,
      XzGradeGradeName,
      enumComparisonOp.Like_03,
    );
    return arrIdGrade;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000559)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachingPlanEx_ConstructorName,
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
 * @param objJxTeachingPlanS:源对象
 **/
export async function JxTeachingPlanEx_FuncMapKeySchoolTermName(
  objJxTeachingPlan: clsJxTeachingPlanENEx,
): Promise<Array<string>> {
  const strThisFuncName = JxTeachingPlanEx_FuncMapKeySchoolTermName.name;
  try {
    if (IsNullOrEmpty(objJxTeachingPlan.schoolTermName) == true) return [];
    const SchoolTermSchoolTermName = objJxTeachingPlan.schoolTermName;
    const arrSchoolTerm = await SchoolTerm_funcKey(
      clsSchoolTermEN.con_SchoolTermName,
      SchoolTermSchoolTermName,
      enumComparisonOp.Like_03,
    );
    return arrSchoolTerm;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000945)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachingPlanEx_ConstructorName,
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
 * @param objJxTeachingPlanS:源对象
 **/
export async function JxTeachingPlanEx_FuncMapKeySubmitStatusDesc(
  objJxTeachingPlan: clsJxTeachingPlanENEx,
): Promise<Array<string>> {
  const strThisFuncName = JxTeachingPlanEx_FuncMapKeySubmitStatusDesc.name;
  try {
    if (IsNullOrEmpty(objJxTeachingPlan.submitStatusDesc) == true) return [];
    const SubmitStatusSubmitStatusDesc = objJxTeachingPlan.submitStatusDesc;
    const arrIdSubmitStatus = await SubmitStatus_funcKey(
      clsSubmitStatusEN.con_SubmitStatusDesc,
      SubmitStatusSubmitStatusDesc,
      enumComparisonOp.Like_03,
    );
    return arrIdSubmitStatus;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000946)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      jxTeachingPlanEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
