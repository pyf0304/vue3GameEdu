/**
 * 类名:clscc_ExamPaperStuBatchRelaExWApi
 * 表名:cc_ExamPaperStuBatchRela(01120239)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:08:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 考卷与学生批次关系(cc_ExamPaperStuBatchRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_ExamPaperStuBatchRelaENEx } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaENEx';
import {
  cc_ExamPaperStuBatchRela_GetObjLstByPagerAsync,
  cc_ExamPaperStuBatchRela_SortFunByKey,
  cc_ExamPaperStuBatchRela_FilterFunByKey,
} from '@/ts/L3ForWApi/InteractManage/clscc_ExamPaperStuBatchRelaWApi';
import { vStudentInfo_Sim_func, vStudentInfo_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvStudentInfo_SimEN } from 'share-stu-study-base-lib';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { clscc_ExamPaperStuBatchRelaEN } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';

export const cc_ExamPaperStuBatchRelaExController = 'cc_ExamPaperStuBatchRelaExApi';
export const cc_ExamPaperStuBatchRelaEx_ConstructorName = 'cc_ExamPaperStuBatchRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_ExamPaperStuBatchRelaEx_GetWebApiUrl(
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
 * @param objcc_ExamPaperStuBatchRelaENS:源对象
 * @returns 目标对象=>clscc_ExamPaperStuBatchRelaEN:objcc_ExamPaperStuBatchRelaENT
 **/
export function cc_ExamPaperStuBatchRelaEx_CopyToEx(
  objcc_ExamPaperStuBatchRelaENS: clscc_ExamPaperStuBatchRelaEN,
): clscc_ExamPaperStuBatchRelaENEx {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_CopyToEx.name;
  const objcc_ExamPaperStuBatchRelaENT = new clscc_ExamPaperStuBatchRelaENEx();
  try {
    ObjectAssign(objcc_ExamPaperStuBatchRelaENT, objcc_ExamPaperStuBatchRelaENS);
    return objcc_ExamPaperStuBatchRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_ExamPaperStuBatchRelaENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_ExamPaperStuBatchRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ExamPaperStuBatchRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_ExamPaperStuBatchRelaObjLst = await cc_ExamPaperStuBatchRela_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrcc_ExamPaperStuBatchRelaExObjLst = arrcc_ExamPaperStuBatchRelaObjLst.map(
    cc_ExamPaperStuBatchRelaEx_CopyToEx,
  );
  if (arrcc_ExamPaperStuBatchRelaExObjLst.length == 0) return arrcc_ExamPaperStuBatchRelaExObjLst;
  let arrcc_ExamPaperStuBatchRelaSel: Array<clscc_ExamPaperStuBatchRelaENEx> =
    arrcc_ExamPaperStuBatchRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExamPaperStuBatchRelaSel = arrcc_ExamPaperStuBatchRelaSel.sort(
        cc_ExamPaperStuBatchRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_ExamPaperStuBatchRelaSel = arrcc_ExamPaperStuBatchRelaSel.sort(objPagerPara.sortFun);
    }
    return arrcc_ExamPaperStuBatchRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamPaperStuBatchRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMapStuName(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
) {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMapStuName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.stuName) == true) {
      const vStudentInfoSimIdStudentInfo = objcc_ExamPaperStuBatchRela.idStudentInfo;
      const vStudentInfoSimStuName = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_StuName,
        vStudentInfoSimIdStudentInfo,
        objcc_ExamPaperStuBatchRela.idCurrEduCls,
      );
      objcc_ExamPaperStuBatchRela.stuName = vStudentInfoSimStuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000680)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMapEduClsName(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
) {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.eduClsName) == true) {
      const CurrEduClsIdCurrEduCls = objcc_ExamPaperStuBatchRela.idCurrEduCls;
      const CurrEduClsEduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsIdCurrEduCls,
        objcc_ExamPaperStuBatchRela.courseId,
      );
      objcc_ExamPaperStuBatchRela.eduClsName = CurrEduClsEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMapCourseId(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
) {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMapCourseId.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.courseId) == true) {
      const CurrEduClsIdCurrEduCls = objcc_ExamPaperStuBatchRela.idCurrEduCls;
      const CurrEduClsCourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduClsIdCurrEduCls,
        objcc_ExamPaperStuBatchRela.courseId,
      );
      objcc_ExamPaperStuBatchRela.courseId = CurrEduClsCourseId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000536)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
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
export function cc_ExamPaperStuBatchRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_ExamPaperStuBatchRelaENEx.con_StuName:
        return (a: clscc_ExamPaperStuBatchRelaENEx, b: clscc_ExamPaperStuBatchRelaENEx) => {
          return a.stuName.localeCompare(b.stuName);
        };
      case clscc_ExamPaperStuBatchRelaENEx.con_EduClsName:
        return (a: clscc_ExamPaperStuBatchRelaENEx, b: clscc_ExamPaperStuBatchRelaENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clscc_ExamPaperStuBatchRelaENEx.con_CourseId:
        return (a: clscc_ExamPaperStuBatchRelaENEx, b: clscc_ExamPaperStuBatchRelaENEx) => {
          return a.courseId.localeCompare(b.courseId);
        };
      default:
        return cc_ExamPaperStuBatchRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_ExamPaperStuBatchRelaENEx.con_StuName:
        return (a: clscc_ExamPaperStuBatchRelaENEx, b: clscc_ExamPaperStuBatchRelaENEx) => {
          return b.stuName.localeCompare(a.stuName);
        };
      case clscc_ExamPaperStuBatchRelaENEx.con_EduClsName:
        return (a: clscc_ExamPaperStuBatchRelaENEx, b: clscc_ExamPaperStuBatchRelaENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clscc_ExamPaperStuBatchRelaENEx.con_CourseId:
        return (a: clscc_ExamPaperStuBatchRelaENEx, b: clscc_ExamPaperStuBatchRelaENEx) => {
          return b.courseId.localeCompare(a.courseId);
        };
      default:
        return cc_ExamPaperStuBatchRela_SortFunByKey(strKey, AscOrDesc);
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
export function cc_ExamPaperStuBatchRelaEx_FuncMapByFldName(
  strFldName: string,
  objcc_ExamPaperStuBatchRelaEx: clscc_ExamPaperStuBatchRelaENEx,
) {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_ExamPaperStuBatchRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_ExamPaperStuBatchRelaENEx.con_StuName:
      return cc_ExamPaperStuBatchRelaEx_FuncMapStuName(objcc_ExamPaperStuBatchRelaEx);
    case clscc_ExamPaperStuBatchRelaENEx.con_EduClsName:
      return cc_ExamPaperStuBatchRelaEx_FuncMapEduClsName(objcc_ExamPaperStuBatchRelaEx);
    case clscc_ExamPaperStuBatchRelaENEx.con_CourseId:
      return cc_ExamPaperStuBatchRelaEx_FuncMapCourseId(objcc_ExamPaperStuBatchRelaEx);
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
export async function cc_ExamPaperStuBatchRelaEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_ExamPaperStuBatchRelaENEx.con_StuName:
      return (obj: clscc_ExamPaperStuBatchRelaENEx) => {
        return obj.stuName === value;
      };
    case clscc_ExamPaperStuBatchRelaENEx.con_EduClsName:
      return (obj: clscc_ExamPaperStuBatchRelaENEx) => {
        return obj.eduClsName === value;
      };
    case clscc_ExamPaperStuBatchRelaENEx.con_CourseId:
      return (obj: clscc_ExamPaperStuBatchRelaENEx) => {
        return obj.courseId === value;
      };
    default:
      return cc_ExamPaperStuBatchRela_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMapKeyStuName(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMapKeyStuName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.stuName) == true) return [];
    const vStudentInfoSimStuName = objcc_ExamPaperStuBatchRela.stuName;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_StuName,
      vStudentInfoSimStuName,
      objcc_ExamPaperStuBatchRela.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000684)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
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
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMapKeyEduClsName(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.eduClsName) == true) return [];
    const CurrEduClsEduClsName = objcc_ExamPaperStuBatchRela.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_EduClsName,
      CurrEduClsEduClsName,
      objcc_ExamPaperStuBatchRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
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
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMapKeyCourseId(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMapKeyCourseId.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.courseId) == true) return [];
    const CurrEduClsCourseId = objcc_ExamPaperStuBatchRela.courseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_CourseId,
      CurrEduClsCourseId,
      objcc_ExamPaperStuBatchRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000542)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
