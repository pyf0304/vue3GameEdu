/**
 * 类名:clscc_ExamPaperStuRelationExWApi
 * 表名:cc_ExamPaperStuRelation(01120235)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:26
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 考卷与学生关系(cc_ExamPaperStuRelation)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年12月16日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_ExamPaperStuRelationENEx } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationENEx';
import {
  cc_ExamPaperStuRelation_GetObjLstByPagerAsync,
  cc_ExamPaperStuRelation_SortFunByKey,
  cc_ExamPaperStuRelation_FilterFunByKey,
} from '@/ts/L3ForWApi/InteractManage/clscc_ExamPaperStuRelationWApi';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { clscc_ExamPaperStuRelationEN } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';

export const cc_ExamPaperStuRelationExController = 'cc_ExamPaperStuRelationExApi';
export const cc_ExamPaperStuRelationEx_ConstructorName = 'cc_ExamPaperStuRelationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_ExamPaperStuRelationEx_GetWebApiUrl(
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
 * @param objcc_ExamPaperStuRelationENS:源对象
 * @returns 目标对象=>clscc_ExamPaperStuRelationEN:objcc_ExamPaperStuRelationENT
 **/
export function cc_ExamPaperStuRelationEx_CopyToEx(
  objcc_ExamPaperStuRelationENS: clscc_ExamPaperStuRelationEN,
): clscc_ExamPaperStuRelationENEx {
  const strThisFuncName = cc_ExamPaperStuRelationEx_CopyToEx.name;
  const objcc_ExamPaperStuRelationENT = new clscc_ExamPaperStuRelationENEx();
  try {
    ObjectAssign(objcc_ExamPaperStuRelationENT, objcc_ExamPaperStuRelationENS);
    return objcc_ExamPaperStuRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_ExamPaperStuRelationENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_ExamPaperStuRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ExamPaperStuRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_ExamPaperStuRelationObjLst = await cc_ExamPaperStuRelation_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrcc_ExamPaperStuRelationExObjLst = arrcc_ExamPaperStuRelationObjLst.map(
    cc_ExamPaperStuRelationEx_CopyToEx,
  );
  if (arrcc_ExamPaperStuRelationExObjLst.length == 0) return arrcc_ExamPaperStuRelationExObjLst;
  let arrcc_ExamPaperStuRelationSel: Array<clscc_ExamPaperStuRelationENEx> =
    arrcc_ExamPaperStuRelationExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.sort(
        cc_ExamPaperStuRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.sort(objPagerPara.sortFun);
    }
    return arrcc_ExamPaperStuRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamPaperStuRelationENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuRelationS:源对象
 **/
export async function cc_ExamPaperStuRelationEx_FuncMapEduClsName(
  objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationENEx,
) {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuRelation.eduClsName) == true) {
      const CurrEduClsIdCurrEduCls = objcc_ExamPaperStuRelation.idCurrEduCls;
      const CurrEduClsEduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsIdCurrEduCls,
        objcc_ExamPaperStuRelation.courseId,
      );
      objcc_ExamPaperStuRelation.eduClsName = CurrEduClsEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuRelationS:源对象
 **/
export async function cc_ExamPaperStuRelationEx_FuncMapCourseId(
  objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationENEx,
) {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapCourseId.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuRelation.courseId) == true) {
      const CurrEduClsIdCurrEduCls = objcc_ExamPaperStuRelation.idCurrEduCls;
      const CurrEduClsCourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduClsIdCurrEduCls,
        objcc_ExamPaperStuRelation.courseId,
      );
      objcc_ExamPaperStuRelation.courseId = CurrEduClsCourseId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000536)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
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
export function cc_ExamPaperStuRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_ExamPaperStuRelationENEx.con_CourseId:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clscc_ExamPaperStuRelationENEx.con_ExamPaperName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return a.examPaperName.localeCompare(b.examPaperName);
        };
      case clscc_ExamPaperStuRelationENEx.con_EduClsName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clscc_ExamPaperStuRelationENEx.con_StuName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return a.stuName.localeCompare(b.stuName);
        };
      default:
        return cc_ExamPaperStuRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_ExamPaperStuRelationENEx.con_CourseId:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clscc_ExamPaperStuRelationENEx.con_ExamPaperName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return b.examPaperName.localeCompare(a.examPaperName);
        };
      case clscc_ExamPaperStuRelationENEx.con_EduClsName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clscc_ExamPaperStuRelationENEx.con_StuName:
        return (a: clscc_ExamPaperStuRelationENEx, b: clscc_ExamPaperStuRelationENEx) => {
          return b.stuName.localeCompare(a.stuName);
        };
      default:
        return cc_ExamPaperStuRelation_SortFunByKey(strKey, AscOrDesc);
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
export function cc_ExamPaperStuRelationEx_FuncMapByFldName(
  strFldName: string,
  objcc_ExamPaperStuRelationEx: clscc_ExamPaperStuRelationENEx,
) {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_ExamPaperStuRelationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_ExamPaperStuRelationENEx.con_CourseId:
      return cc_ExamPaperStuRelationEx_FuncMapCourseId(objcc_ExamPaperStuRelationEx);
    case clscc_ExamPaperStuRelationENEx.con_EduClsName:
      return cc_ExamPaperStuRelationEx_FuncMapEduClsName(objcc_ExamPaperStuRelationEx);
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
export async function cc_ExamPaperStuRelationEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_ExamPaperStuRelationENEx.con_CourseId:
      return (obj: clscc_ExamPaperStuRelationENEx) => {
        return obj.courseId === value;
      };
    case clscc_ExamPaperStuRelationENEx.con_ExamPaperName:
      return (obj: clscc_ExamPaperStuRelationENEx) => {
        return obj.examPaperName === value;
      };
    case clscc_ExamPaperStuRelationENEx.con_EduClsName:
      return (obj: clscc_ExamPaperStuRelationENEx) => {
        return obj.eduClsName === value;
      };
    case clscc_ExamPaperStuRelationENEx.con_StuName:
      return (obj: clscc_ExamPaperStuRelationENEx) => {
        return obj.stuName === value;
      };
    default:
      return cc_ExamPaperStuRelation_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_ExamPaperStuRelationS:源对象
 **/
export async function cc_ExamPaperStuRelationEx_FuncMapKeyEduClsName(
  objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuRelation.eduClsName) == true) return [];
    const CurrEduClsEduClsName = objcc_ExamPaperStuRelation.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_EduClsName,
      CurrEduClsEduClsName,
      objcc_ExamPaperStuRelation.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
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
 * @param objcc_ExamPaperStuRelationS:源对象
 **/
export async function cc_ExamPaperStuRelationEx_FuncMapKeyCourseId(
  objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_ExamPaperStuRelationEx_FuncMapKeyCourseId.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuRelation.courseId) == true) return [];
    const CurrEduClsCourseId = objcc_ExamPaperStuRelation.courseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_CourseId,
      CurrEduClsCourseId,
      objcc_ExamPaperStuRelation.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000542)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
