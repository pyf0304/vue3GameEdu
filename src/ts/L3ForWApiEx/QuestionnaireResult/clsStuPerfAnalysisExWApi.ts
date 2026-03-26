/**
 * 类名:clsStuPerfAnalysisExWApi
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/09 00:09:36
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学生问题分析(StuPerfAnalysis)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年12月09日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsStuPerfAnalysisENEx } from '@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisENEx';
import {
  StuPerfAnalysis_GetObjLstByPagerAsync,
  StuPerfAnalysis_SortFunByKey,
  StuPerfAnalysis_FilterFunByKey,
} from '@/ts/L3ForWApi/QuestionnaireResult/clsStuPerfAnalysisWApi';
import { XzSchool_func, XzSchool_funcKey } from 'share-stu-study-base-lib';
import { clsXzSchoolEN } from 'share-stu-study-base-lib';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvCurrEduCls_SimEN } from 'share-stu-study-base-lib';
import { vStudentInfo_Sim_func, vStudentInfo_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvStudentInfo_SimEN } from 'share-stu-study-base-lib';
import { XzAdminCls_func, XzAdminCls_funcKey } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
import { XzGrade_func, XzGrade_funcKey } from 'share-stu-study-base-lib';
import { clsXzGradeEN } from 'share-stu-study-base-lib';
import { clsStuPerfAnalysisEN } from '@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const stuPerfAnalysisEx_Controller = 'StuPerfAnalysisExApi';
export const stuPerfAnalysisEx_ConstructorName = 'stuPerfAnalysisEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function StuPerfAnalysisEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objStuPerfAnalysisENS:源对象
 * @returns 目标对象=>clsStuPerfAnalysisEN:objStuPerfAnalysisENT
 **/
export function StuPerfAnalysisEx_CopyToEx(
  objStuPerfAnalysisENS: clsStuPerfAnalysisEN,
): clsStuPerfAnalysisENEx {
  const strThisFuncName = StuPerfAnalysisEx_CopyToEx.name;
  const objStuPerfAnalysisENT = new clsStuPerfAnalysisENEx();
  try {
    ObjectAssign(objStuPerfAnalysisENT, objStuPerfAnalysisENS);
    return objStuPerfAnalysisENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objStuPerfAnalysisENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function StuPerfAnalysisEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsStuPerfAnalysisENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrStuPerfAnalysisObjLst = await StuPerfAnalysis_GetObjLstByPagerAsync(objPagerPara);
  const arrStuPerfAnalysisExObjLst = arrStuPerfAnalysisObjLst.map(StuPerfAnalysisEx_CopyToEx);
  if (arrStuPerfAnalysisExObjLst.length == 0) return arrStuPerfAnalysisExObjLst;
  let arrStuPerfAnalysisSel: Array<clsStuPerfAnalysisENEx> = arrStuPerfAnalysisExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrStuPerfAnalysisSel = arrStuPerfAnalysisSel.sort(
        StuPerfAnalysisEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrStuPerfAnalysisSel = arrStuPerfAnalysisSel.sort(objPagerPara.sortFun);
    }
    return arrStuPerfAnalysisSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsStuPerfAnalysisENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapSchoolName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapSchoolName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.schoolName) == true) {
      const XzSchoolIdSchool = objStuPerfAnalysis.idSchool;
      const XzSchoolSchoolName = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolName,
        XzSchoolIdSchool,
      );
      objStuPerfAnalysis.schoolName = XzSchoolSchoolName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000621)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapCourseName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.courseName) == true) {
      const vccCourseSimCourseId = objStuPerfAnalysis.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objStuPerfAnalysis.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapEduClsName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.eduClsName) == true) {
      const vCurrEduClsSimIdCurrEduCls = objStuPerfAnalysis.idCurrEduCls;
      const vCurrEduClsSimEduClsName = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_EduClsName,
        vCurrEduClsSimIdCurrEduCls,
        objStuPerfAnalysis.courseId,
      );
      objStuPerfAnalysis.eduClsName = vCurrEduClsSimEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapStuId(objStuPerfAnalysis: clsStuPerfAnalysisENEx) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapStuId.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.stuId) == true) {
      const vStudentInfoSimIdStudentInfo = objStuPerfAnalysis.idStudentInfo;
      const vStudentInfoSimStuId = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_StuId,
        vStudentInfoSimIdStudentInfo,
        objStuPerfAnalysis.idCurrEduCls,
      );
      objStuPerfAnalysis.stuId = vStudentInfoSimStuId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000853)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapStuName(objStuPerfAnalysis: clsStuPerfAnalysisENEx) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapStuName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.stuName) == true) {
      const vStudentInfoSimIdStudentInfo = objStuPerfAnalysis.idStudentInfo;
      const vStudentInfoSimStuName = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_StuName,
        vStudentInfoSimIdStudentInfo,
        objStuPerfAnalysis.idCurrEduCls,
      );
      objStuPerfAnalysis.stuName = vStudentInfoSimStuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000680)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapAdminClsName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapAdminClsName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.adminClsName) == true) {
      const vStudentInfoSimIdStudentInfo = objStuPerfAnalysis.idStudentInfo;
      const vStudentInfoSimIdAdminCls = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_IdAdminCls,
        vStudentInfoSimIdStudentInfo,
        objStuPerfAnalysis.idCurrEduCls,
      );
      const XzAdminClsIdAdminCls = vStudentInfoSimIdAdminCls;
      const XzAdminClsAdminClsName = await XzAdminCls_func(
        clsXzAdminClsEN.con_IdAdminCls,
        clsXzAdminClsEN.con_AdminClsName,
        XzAdminClsIdAdminCls,
      );
      objStuPerfAnalysis.adminClsName = XzAdminClsAdminClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000670)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapGradeName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapGradeName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.gradeName) == true) {
      const vStudentInfoSimIdStudentInfo = objStuPerfAnalysis.idStudentInfo;
      const vStudentInfoSimIdGrade = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_IdGrade,
        vStudentInfoSimIdStudentInfo,
        objStuPerfAnalysis.idCurrEduCls,
      );
      const XzGradeIdGrade = vStudentInfoSimIdGrade;
      const XzGradeGradeName = await XzGrade_func(
        clsXzGradeEN.con_IdGrade,
        clsXzGradeEN.con_GradeName,
        XzGradeIdGrade,
      );
      objStuPerfAnalysis.gradeName = XzGradeGradeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000554)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapIdGrade(objStuPerfAnalysis: clsStuPerfAnalysisENEx) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapIdGrade.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.idGrade) == true) {
      const vStudentInfoSimIdStudentInfo = objStuPerfAnalysis.idStudentInfo;
      const vStudentInfoSimIdGrade = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_IdGrade,
        vStudentInfoSimIdStudentInfo,
        objStuPerfAnalysis.idCurrEduCls,
      );
      objStuPerfAnalysis.idGrade = vStudentInfoSimIdGrade;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000997)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapIdAdminCls(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapIdAdminCls.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.idAdminCls) == true) {
      const vStudentInfoSimIdStudentInfo = objStuPerfAnalysis.idStudentInfo;
      const vStudentInfoSimIdAdminCls = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_IdAdminCls,
        vStudentInfoSimIdStudentInfo,
        objStuPerfAnalysis.idCurrEduCls,
      );
      objStuPerfAnalysis.idAdminCls = vStudentInfoSimIdAdminCls;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000998)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function StuPerfAnalysisEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsStuPerfAnalysisENEx.con_CourseName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsStuPerfAnalysisENEx.con_SchoolName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.schoolName.localeCompare(b.schoolName);
        };
      case clsStuPerfAnalysisENEx.con_EduClsName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsStuPerfAnalysisENEx.con_IdGrade:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.idGrade.localeCompare(b.idGrade);
        };
      case clsStuPerfAnalysisENEx.con_KnowledgeNames:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.knowledgeNames.localeCompare(b.knowledgeNames);
        };
      case clsStuPerfAnalysisENEx.con_IdAdminCls:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.idAdminCls.localeCompare(b.idAdminCls);
        };
      case clsStuPerfAnalysisENEx.con_StuId:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.stuId.localeCompare(b.stuId);
        };
      case clsStuPerfAnalysisENEx.con_StuName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.stuName.localeCompare(b.stuName);
        };
      case clsStuPerfAnalysisENEx.con_AdminClsName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.adminClsName.localeCompare(b.adminClsName);
        };
      case clsStuPerfAnalysisENEx.con_GradeName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return a.gradeName.localeCompare(b.gradeName);
        };
      default:
        return StuPerfAnalysis_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsStuPerfAnalysisENEx.con_CourseName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsStuPerfAnalysisENEx.con_SchoolName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.schoolName.localeCompare(a.schoolName);
        };
      case clsStuPerfAnalysisENEx.con_EduClsName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsStuPerfAnalysisENEx.con_IdGrade:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.idGrade.localeCompare(a.idGrade);
        };
      case clsStuPerfAnalysisENEx.con_KnowledgeNames:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.knowledgeNames.localeCompare(a.knowledgeNames);
        };
      case clsStuPerfAnalysisENEx.con_IdAdminCls:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.idAdminCls.localeCompare(a.idAdminCls);
        };
      case clsStuPerfAnalysisENEx.con_StuId:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.stuId.localeCompare(a.stuId);
        };
      case clsStuPerfAnalysisENEx.con_StuName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.stuName.localeCompare(a.stuName);
        };
      case clsStuPerfAnalysisENEx.con_AdminClsName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.adminClsName.localeCompare(a.adminClsName);
        };
      case clsStuPerfAnalysisENEx.con_GradeName:
        return (a: clsStuPerfAnalysisENEx, b: clsStuPerfAnalysisENEx) => {
          return b.gradeName.localeCompare(a.gradeName);
        };
      default:
        return StuPerfAnalysis_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-12-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function StuPerfAnalysisEx_FuncMapByFldName(
  strFldName: string,
  objStuPerfAnalysisEx: clsStuPerfAnalysisENEx,
) {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsStuPerfAnalysisEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsStuPerfAnalysisENEx.con_CourseName:
      return StuPerfAnalysisEx_FuncMapCourseName(objStuPerfAnalysisEx);
    case clsStuPerfAnalysisENEx.con_SchoolName:
      return StuPerfAnalysisEx_FuncMapSchoolName(objStuPerfAnalysisEx);
    case clsStuPerfAnalysisENEx.con_EduClsName:
      return StuPerfAnalysisEx_FuncMapEduClsName(objStuPerfAnalysisEx);
    case clsStuPerfAnalysisENEx.con_IdGrade:
      return StuPerfAnalysisEx_FuncMapIdGrade(objStuPerfAnalysisEx);
    case clsStuPerfAnalysisENEx.con_IdAdminCls:
      return StuPerfAnalysisEx_FuncMapIdAdminCls(objStuPerfAnalysisEx);
    case clsStuPerfAnalysisENEx.con_StuId:
      return StuPerfAnalysisEx_FuncMapStuId(objStuPerfAnalysisEx);
    case clsStuPerfAnalysisENEx.con_StuName:
      return StuPerfAnalysisEx_FuncMapStuName(objStuPerfAnalysisEx);
    case clsStuPerfAnalysisENEx.con_AdminClsName:
      return StuPerfAnalysisEx_FuncMapAdminClsName(objStuPerfAnalysisEx);
    case clsStuPerfAnalysisENEx.con_GradeName:
      return StuPerfAnalysisEx_FuncMapGradeName(objStuPerfAnalysisEx);
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
 * 日期:2024-12-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function StuPerfAnalysisEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsStuPerfAnalysisENEx.con_CourseName:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.courseName === value;
      };
    case clsStuPerfAnalysisENEx.con_SchoolName:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.schoolName === value;
      };
    case clsStuPerfAnalysisENEx.con_EduClsName:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.eduClsName === value;
      };
    case clsStuPerfAnalysisENEx.con_IdGrade:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.idGrade === value;
      };
    case clsStuPerfAnalysisENEx.con_KnowledgeNames:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.knowledgeNames === value;
      };
    case clsStuPerfAnalysisENEx.con_IdAdminCls:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.idAdminCls === value;
      };
    case clsStuPerfAnalysisENEx.con_StuId:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.stuId === value;
      };
    case clsStuPerfAnalysisENEx.con_StuName:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.stuName === value;
      };
    case clsStuPerfAnalysisENEx.con_AdminClsName:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.adminClsName === value;
      };
    case clsStuPerfAnalysisENEx.con_GradeName:
      return (obj: clsStuPerfAnalysisENEx) => {
        return obj.gradeName === value;
      };
    default:
      return StuPerfAnalysis_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeySchoolName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeySchoolName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.schoolName) == true) return [];
    const XzSchoolSchoolName = objStuPerfAnalysis.schoolName;
    const arrIdSchool = await XzSchool_funcKey(
      clsXzSchoolEN.con_SchoolName,
      XzSchoolSchoolName,
      enumComparisonOp.Like_03,
    );
    return arrIdSchool;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000627)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
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
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeyCourseName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.courseName) == true) return [];
    const vccCourseSimCourseName = objStuPerfAnalysis.courseName;
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
      stuPerfAnalysisEx_ConstructorName,
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
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeyEduClsName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.eduClsName) == true) return [];
    const vCurrEduClsSimEduClsName = objStuPerfAnalysis.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_EduClsName,
      vCurrEduClsSimEduClsName,
      objStuPerfAnalysis.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
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
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeyStuId(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeyStuId.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.stuId) == true) return [];
    const vStudentInfoSimStuId = objStuPerfAnalysis.stuId;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_StuId,
      vStudentInfoSimStuId,
      objStuPerfAnalysis.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000854)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
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
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeyStuName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeyStuName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.stuName) == true) return [];
    const vStudentInfoSimStuName = objStuPerfAnalysis.stuName;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_StuName,
      vStudentInfoSimStuName,
      objStuPerfAnalysis.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000684)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
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
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeyAdminClsName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeyAdminClsName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.adminClsName) == true) return [];
    const XzAdminClsAdminClsName = objStuPerfAnalysis.adminClsName;
    const arrIdAdminCls = await XzAdminCls_funcKey(
      clsXzAdminClsEN.con_AdminClsName,
      XzAdminClsAdminClsName,
      enumComparisonOp.Like_03,
    );
    const strIdAdminClsLst = arrIdAdminCls;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_IdAdminCls,
      strIdAdminClsLst,
      objStuPerfAnalysis.idCurrEduCls,
      enumComparisonOp.In_04,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000674)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
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
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeyGradeName(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeyGradeName.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.gradeName) == true) return [];
    const XzGradeGradeName = objStuPerfAnalysis.gradeName;
    const arrIdGrade = await XzGrade_funcKey(
      clsXzGradeEN.con_GradeName,
      XzGradeGradeName,
      enumComparisonOp.Like_03,
    );
    const strIdGradeLst = arrIdGrade;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_IdGrade,
      strIdGradeLst,
      objStuPerfAnalysis.idCurrEduCls,
      enumComparisonOp.In_04,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000559)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
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
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeyIdGrade(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeyIdGrade.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.idGrade) == true) return [];
    const vStudentInfoSimIdGrade = objStuPerfAnalysis.idGrade;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_IdGrade,
      vStudentInfoSimIdGrade,
      objStuPerfAnalysis.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000999)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
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
 * @param objStuPerfAnalysisS:源对象
 **/
export async function StuPerfAnalysisEx_FuncMapKeyIdAdminCls(
  objStuPerfAnalysis: clsStuPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = StuPerfAnalysisEx_FuncMapKeyIdAdminCls.name;
  try {
    if (IsNullOrEmpty(objStuPerfAnalysis.idAdminCls) == true) return [];
    const vStudentInfoSimIdAdminCls = objStuPerfAnalysis.idAdminCls;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_IdAdminCls,
      vStudentInfoSimIdAdminCls,
      objStuPerfAnalysis.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001000)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      stuPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 计算学生表现
 * @param strIdStudentInfo: 学生信息ID
 * @param strIdCurrEduCls: 当前教育班级ID
 * @returns 操作结果
 **/
export async function StuPerfAnalysisEx_CalculateStudentPerformance(
  strIdStudentInfo: string,
  strIdCurrEduCls: string,
  strCourseId: string,
): Promise<any> {
  const strThisFuncName = 'CalculateStudentPerformance';

  if (!strIdStudentInfo || !strIdCurrEduCls) {
    const strMsg = `参数:[strIdStudentInfo]和[strIdCurrEduCls]不能为空!(In ${strThisFuncName})`;
    console.error(strMsg);
    throw new Error(strMsg);
  }

  const strAction = 'CalculateStudentPerformance';
  const strUrl = GetWebApiUrl(stuPerfAnalysisEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStudentInfo,
      strIdCurrEduCls,
      strCourseId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId === 0) {
      return data.returnObj;
    } else {
      console.error(data.errorMsg);
      throw new Error(data.errorMsg);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || '网络错误');
  }
}
