/**
 * 类名:clsClassPerfAnalysisExWApi
 * 表名:ClassPerfAnalysis(01120977)
 * 版本:2024.12.07.1(服务器:PYF-AI)
 * 日期:2024/12/08 06:08:54
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
 * 班级问题分析(ClassPerfAnalysis)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年12月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsClassPerfAnalysisENEx } from '@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisENEx';
import {
  ClassPerfAnalysis_GetObjLstByPagerAsync,
  ClassPerfAnalysis_SortFunByKey,
  ClassPerfAnalysis_FilterFunByKey,
} from '@/ts/L3ForWApi/QuestionnaireResult/clsClassPerfAnalysisWApi';
import {
  vQuestionnaire_Sim_func,
  vQuestionnaire_Sim_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import {
  QuestionType_func,
  QuestionType_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import {
  ge_DifficultyLevel_func,
  ge_DifficultyLevel_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { XzSchool_func, XzSchool_funcKey } from 'share-stu-study-base-lib';
import { clsXzSchoolEN } from 'share-stu-study-base-lib';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvCurrEduCls_SimEN } from 'share-stu-study-base-lib';
import { clsClassPerfAnalysisEN } from '@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const classPerfAnalysisEx_Controller = 'ClassPerfAnalysisExApi';
export const classPerfAnalysisEx_ConstructorName = 'classPerfAnalysisEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ClassPerfAnalysisEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objClassPerfAnalysisENS:源对象
 * @returns 目标对象=>clsClassPerfAnalysisEN:objClassPerfAnalysisENT
 **/
export function ClassPerfAnalysisEx_CopyToEx(
  objClassPerfAnalysisENS: clsClassPerfAnalysisEN,
): clsClassPerfAnalysisENEx {
  const strThisFuncName = ClassPerfAnalysisEx_CopyToEx.name;
  const objClassPerfAnalysisENT = new clsClassPerfAnalysisENEx();
  try {
    ObjectAssign(objClassPerfAnalysisENT, objClassPerfAnalysisENS);
    return objClassPerfAnalysisENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objClassPerfAnalysisENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ClassPerfAnalysisEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsClassPerfAnalysisENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrClassPerfAnalysisObjLst = await ClassPerfAnalysis_GetObjLstByPagerAsync(objPagerPara);
  const arrClassPerfAnalysisExObjLst = arrClassPerfAnalysisObjLst.map(ClassPerfAnalysisEx_CopyToEx);
  if (arrClassPerfAnalysisExObjLst.length == 0) return arrClassPerfAnalysisExObjLst;
  let arrClassPerfAnalysisSel: Array<clsClassPerfAnalysisENEx> = arrClassPerfAnalysisExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrClassPerfAnalysisSel = arrClassPerfAnalysisSel.sort(
        ClassPerfAnalysisEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrClassPerfAnalysisSel = arrClassPerfAnalysisSel.sort(objPagerPara.sortFun);
    }
    return arrClassPerfAnalysisSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsClassPerfAnalysisENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapQuestionName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapQuestionName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.questionName) == true) {
      const vQuestionnaireSimQuestionId = objClassPerfAnalysis.questionId.toString();
      const vQuestionnaireSimQuestionName = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionName,
        vQuestionnaireSimQuestionId,
        objClassPerfAnalysis.courseId,
      );
      objClassPerfAnalysis.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000896)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapCourseName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.courseName) == true) {
      const vccCourseSimCourseId = objClassPerfAnalysis.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objClassPerfAnalysis.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapQuestionTypeName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.questionTypeName) == true) {
      const vQuestionnaireSimQuestionId = objClassPerfAnalysis.questionId.toString();
      const vQuestionnaireSimQuestionTypeId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionTypeId,
        vQuestionnaireSimQuestionId,
        objClassPerfAnalysis.courseId,
      );
      const QuestionTypeQuestionTypeId = vQuestionnaireSimQuestionTypeId;
      const QuestionTypeQuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionTypeQuestionTypeId,
      );
      objClassPerfAnalysis.questionTypeName = QuestionTypeQuestionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000913)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapDifficultyLevelName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapDifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.difficultyLevelName) == true) {
      const vQuestionnaireSimQuestionId = objClassPerfAnalysis.questionId.toString();
      const vQuestionnaireSimDifficultyLevelId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_DifficultyLevelId,
        vQuestionnaireSimQuestionId,
        objClassPerfAnalysis.courseId,
      );
      const geDifficultyLevelDifficultyLevelId = vQuestionnaireSimDifficultyLevelId;
      const geDifficultyLevelDifficultyLevelName = await ge_DifficultyLevel_func(
        clsge_DifficultyLevelEN.con_DifficultyLevelId,
        clsge_DifficultyLevelEN.con_DifficultyLevelName,
        geDifficultyLevelDifficultyLevelId,
      );
      objClassPerfAnalysis.difficultyLevelName = geDifficultyLevelDifficultyLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000925)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapDifficultyLevelId(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapDifficultyLevelId.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.difficultyLevelId) == true) {
      const vQuestionnaireSimQuestionId = objClassPerfAnalysis.questionId.toString();
      const vQuestionnaireSimDifficultyLevelId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_DifficultyLevelId,
        vQuestionnaireSimQuestionId,
        objClassPerfAnalysis.courseId,
      );
      objClassPerfAnalysis.difficultyLevelId = vQuestionnaireSimDifficultyLevelId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000995)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapQuestionTypeId(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapQuestionTypeId.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.questionTypeId) == true) {
      const vQuestionnaireSimQuestionId = objClassPerfAnalysis.questionId.toString();
      const vQuestionnaireSimQuestionTypeId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionTypeId,
        vQuestionnaireSimQuestionId,
        objClassPerfAnalysis.courseId,
      );
      objClassPerfAnalysis.questionTypeId = vQuestionnaireSimQuestionTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000916)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapSchoolName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapSchoolName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.schoolName) == true) {
      const XzSchoolIdSchool = objClassPerfAnalysis.idSchool;
      const XzSchoolSchoolName = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolName,
        XzSchoolIdSchool,
      );
      objClassPerfAnalysis.schoolName = XzSchoolSchoolName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000621)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapEduClsName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.eduClsName) == true) {
      const vCurrEduClsSimIdCurrEduCls = objClassPerfAnalysis.idCurrEduCls;
      const vCurrEduClsSimEduClsName = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_EduClsName,
        vCurrEduClsSimIdCurrEduCls,
        objClassPerfAnalysis.courseId,
      );
      objClassPerfAnalysis.eduClsName = vCurrEduClsSimEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ClassPerfAnalysisEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsClassPerfAnalysisENEx.con_QuestionName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      case clsClassPerfAnalysisENEx.con_CourseName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsClassPerfAnalysisENEx.con_QuestionTypeName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.questionTypeName.localeCompare(b.questionTypeName);
        };
      case clsClassPerfAnalysisENEx.con_DifficultyLevelName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.difficultyLevelName.localeCompare(b.difficultyLevelName);
        };
      case clsClassPerfAnalysisENEx.con_DifficultyLevelId:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.difficultyLevelId.localeCompare(b.difficultyLevelId);
        };
      case clsClassPerfAnalysisENEx.con_QuestionTypeId:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.questionTypeId.localeCompare(b.questionTypeId);
        };
      case clsClassPerfAnalysisENEx.con_SchoolName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.schoolName.localeCompare(b.schoolName);
        };
      case clsClassPerfAnalysisENEx.con_EduClsName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsClassPerfAnalysisENEx.con_KnowledgeNames:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return a.knowledgeNames.localeCompare(b.knowledgeNames);
        };
      default:
        return ClassPerfAnalysis_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsClassPerfAnalysisENEx.con_QuestionName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      case clsClassPerfAnalysisENEx.con_CourseName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsClassPerfAnalysisENEx.con_QuestionTypeName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.questionTypeName.localeCompare(a.questionTypeName);
        };
      case clsClassPerfAnalysisENEx.con_DifficultyLevelName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.difficultyLevelName.localeCompare(a.difficultyLevelName);
        };
      case clsClassPerfAnalysisENEx.con_DifficultyLevelId:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.difficultyLevelId.localeCompare(a.difficultyLevelId);
        };
      case clsClassPerfAnalysisENEx.con_QuestionTypeId:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.questionTypeId.localeCompare(a.questionTypeId);
        };
      case clsClassPerfAnalysisENEx.con_SchoolName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.schoolName.localeCompare(a.schoolName);
        };
      case clsClassPerfAnalysisENEx.con_EduClsName:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsClassPerfAnalysisENEx.con_KnowledgeNames:
        return (a: clsClassPerfAnalysisENEx, b: clsClassPerfAnalysisENEx) => {
          return b.knowledgeNames.localeCompare(a.knowledgeNames);
        };
      default:
        return ClassPerfAnalysis_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-12-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ClassPerfAnalysisEx_FuncMapByFldName(
  strFldName: string,
  objClassPerfAnalysisEx: clsClassPerfAnalysisENEx,
) {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsClassPerfAnalysisEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsClassPerfAnalysisENEx.con_QuestionName:
      return ClassPerfAnalysisEx_FuncMapQuestionName(objClassPerfAnalysisEx);
    case clsClassPerfAnalysisENEx.con_CourseName:
      return ClassPerfAnalysisEx_FuncMapCourseName(objClassPerfAnalysisEx);
    case clsClassPerfAnalysisENEx.con_QuestionTypeName:
      return ClassPerfAnalysisEx_FuncMapQuestionTypeName(objClassPerfAnalysisEx);
    case clsClassPerfAnalysisENEx.con_DifficultyLevelName:
      return ClassPerfAnalysisEx_FuncMapDifficultyLevelName(objClassPerfAnalysisEx);
    case clsClassPerfAnalysisENEx.con_DifficultyLevelId:
      return ClassPerfAnalysisEx_FuncMapDifficultyLevelId(objClassPerfAnalysisEx);
    case clsClassPerfAnalysisENEx.con_QuestionTypeId:
      return ClassPerfAnalysisEx_FuncMapQuestionTypeId(objClassPerfAnalysisEx);
    case clsClassPerfAnalysisENEx.con_SchoolName:
      return ClassPerfAnalysisEx_FuncMapSchoolName(objClassPerfAnalysisEx);
    case clsClassPerfAnalysisENEx.con_EduClsName:
      return ClassPerfAnalysisEx_FuncMapEduClsName(objClassPerfAnalysisEx);
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
 * 日期:2024-12-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ClassPerfAnalysisEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsClassPerfAnalysisENEx.con_QuestionName:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.questionName === value;
      };
    case clsClassPerfAnalysisENEx.con_CourseName:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.courseName === value;
      };
    case clsClassPerfAnalysisENEx.con_QuestionTypeName:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.questionTypeName === value;
      };
    case clsClassPerfAnalysisENEx.con_DifficultyLevelName:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.difficultyLevelName === value;
      };
    case clsClassPerfAnalysisENEx.con_DifficultyLevelId:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.difficultyLevelId === value;
      };
    case clsClassPerfAnalysisENEx.con_QuestionTypeId:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.questionTypeId === value;
      };
    case clsClassPerfAnalysisENEx.con_SchoolName:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.schoolName === value;
      };
    case clsClassPerfAnalysisENEx.con_EduClsName:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.eduClsName === value;
      };
    case clsClassPerfAnalysisENEx.con_KnowledgeNames:
      return (obj: clsClassPerfAnalysisENEx) => {
        return obj.knowledgeNames === value;
      };
    default:
      return ClassPerfAnalysis_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapKeyQuestionName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
): Promise<Array<number>> {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapKeyQuestionName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.questionName) == true) return [];
    const vQuestionnaireSimQuestionName = objClassPerfAnalysis.questionName;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionName,
      vQuestionnaireSimQuestionName,
      objClassPerfAnalysis.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000898)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
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
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapKeyCourseName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.courseName) == true) return [];
    const vccCourseSimCourseName = objClassPerfAnalysis.courseName;
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
      classPerfAnalysisEx_ConstructorName,
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
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapKeyQuestionTypeName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
): Promise<Array<number>> {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapKeyQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.questionTypeName) == true) return [];
    const QuestionTypeQuestionTypeName = objClassPerfAnalysis.questionTypeName;
    const arrQuestionTypeId = await QuestionType_funcKey(
      clsQuestionTypeEN.con_QuestionTypeName,
      QuestionTypeQuestionTypeName,
      enumComparisonOp.Like_03,
    );
    const strQuestionTypeIdLst = arrQuestionTypeId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionTypeId,
      strQuestionTypeIdLst,
      objClassPerfAnalysis.courseId,
      enumComparisonOp.In_04,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000919)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
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
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapKeyDifficultyLevelName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
): Promise<Array<number>> {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapKeyDifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.difficultyLevelName) == true) return [];
    const geDifficultyLevelDifficultyLevelName = objClassPerfAnalysis.difficultyLevelName;
    const arrDifficultyLevelId = await ge_DifficultyLevel_funcKey(
      clsge_DifficultyLevelEN.con_DifficultyLevelName,
      geDifficultyLevelDifficultyLevelName,
      enumComparisonOp.Like_03,
    );
    const strDifficultyLevelIdLst = arrDifficultyLevelId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_DifficultyLevelId,
      strDifficultyLevelIdLst,
      objClassPerfAnalysis.courseId,
      enumComparisonOp.In_04,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000928)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
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
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapKeyDifficultyLevelId(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
): Promise<Array<number>> {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapKeyDifficultyLevelId.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.difficultyLevelId) == true) return [];
    const vQuestionnaireSimDifficultyLevelId = objClassPerfAnalysis.difficultyLevelId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_DifficultyLevelId,
      vQuestionnaireSimDifficultyLevelId,
      objClassPerfAnalysis.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000996)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
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
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapKeyQuestionTypeId(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
): Promise<Array<number>> {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapKeyQuestionTypeId.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.questionTypeId) == true) return [];
    const vQuestionnaireSimQuestionTypeId = objClassPerfAnalysis.questionTypeId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionTypeId,
      vQuestionnaireSimQuestionTypeId,
      objClassPerfAnalysis.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000922)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
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
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapKeySchoolName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapKeySchoolName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.schoolName) == true) return [];
    const XzSchoolSchoolName = objClassPerfAnalysis.schoolName;
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
      classPerfAnalysisEx_ConstructorName,
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
 * @param objClassPerfAnalysisS:源对象
 **/
export async function ClassPerfAnalysisEx_FuncMapKeyEduClsName(
  objClassPerfAnalysis: clsClassPerfAnalysisENEx,
): Promise<Array<string>> {
  const strThisFuncName = ClassPerfAnalysisEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objClassPerfAnalysis.eduClsName) == true) return [];
    const vCurrEduClsSimEduClsName = objClassPerfAnalysis.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_EduClsName,
      vCurrEduClsSimEduClsName,
      objClassPerfAnalysis.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      classPerfAnalysisEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 计算班级在某个问题上的表现
 * @param strIdCurrEduCls: 当前教育班级ID
 * @param lngQuestionId: 问题ID
 * @returns 操作结果
 **/
export async function ClassPerfAnalysisEx_CalculateClassPerformanceForQuestion(
  strIdCurrEduCls: string,
  lngQuestionId: number,
): Promise<any> {
  const strThisFuncName = 'CalculateClassPerformanceForQuestion';

  if (!strIdCurrEduCls || !lngQuestionId) {
    const strMsg = `参数:[strIdCurrEduCls]和[lngQuestionId]不能为空!(In ${strThisFuncName})`;
    console.error(strMsg);
    throw new Error(strMsg);
  }

  const strAction = 'CalculateClassPerformanceForQuestion';
  const strUrl = GetWebApiUrl(classPerfAnalysisEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdCurrEduCls,
      lngQuestionId,
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
