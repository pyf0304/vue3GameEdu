import * as $ from 'jquery';
//import * as QQ from "q";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuExcelData } from '@/ts/FunClass/stuExcelData';
import { clscc_CourseEN } from 'share-stu-study-base-lib';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionnaireENEx } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { cc_Course_func } from 'share-stu-study-base-lib';
import { ge_DifficultyLevel_func } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { cc_CourseChapter_func } from 'share-stu-study-base-lib';
import { ge_LevelModeType_func } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { Answer_GetObjLstCache } from '@/ts/L3ForWApi/QuestionaireEdit/clsAnswerWApi';
import {
  Questionnaire_FilterFunByKey,
  Questionnaire_GetObjLstAsync,
  Questionnaire_SortFunByKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
import { QuestionType_func } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const questionnaireEx_Controller = 'QuestionnaireExApi';
export const questionnaireEx_ConstructorName = 'questionnaireEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QuestionnaireEx_GetWebApiUrl(strController: string, strAction: string): string {
  const strThisFuncName = 'GetWebApiUrl';
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
 * @param objQuestionnaireENS:源对象
 * @returns 目标对象=>clsQuestionnaireEN:objQuestionnaireENT
 **/
export function QuestionnaireEx_CopyToEx(
  objQuestionnaireENS: clsQuestionnaireEN,
): clsQuestionnaireENEx {
  const strThisFuncName = QuestionnaireEx_CopyToEx.name;
  const objQuestionnaireENT = new clsQuestionnaireENEx();
  try {
    ObjectAssign(objQuestionnaireENT, objQuestionnaireENS);
    return objQuestionnaireENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQuestionnaireENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QuestionnaireEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQuestionnaireENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQuestionnaireObjLst = await Questionnaire_GetObjLstAsync(objPagerPara.whereCond);
  const arrQuestionnaireExObjLst = arrQuestionnaireObjLst.map(QuestionnaireEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrQuestionnaireExObjLst) {
      const conFuncMap = await QuestionnaireEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQuestionnaireExObjLst.length == 0) return arrQuestionnaireExObjLst;
  let arrQuestionnaire_Sel: Array<clsQuestionnaireENEx> = arrQuestionnaireExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQuestionnaire_Sel = arrQuestionnaire_Sel.sort(
        QuestionnaireEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQuestionnaire_Sel = arrQuestionnaire_Sel.sort(objPagerPara.sortFun);
    }
    arrQuestionnaire_Sel = arrQuestionnaire_Sel.slice(intStart, intEnd);
    return arrQuestionnaire_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQuestionnaireENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QuestionnaireEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQuestionnaireENEx.con_LevelModeTypeName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return a.levelModeTypeName.localeCompare(b.levelModeTypeName);
        };
      case clsQuestionnaireENEx.con_DifficultyLevelName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return a.difficultyLevelName.localeCompare(b.difficultyLevelName);
        };
      case clsQuestionnaireENEx.con_ChapterName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return a.chapterName.localeCompare(b.chapterName);
        };
      case clsQuestionnaireENEx.con_CourseName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsQuestionnaireENEx.con_QuestionTypeName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return a.questionTypeName.localeCompare(b.questionTypeName);
        };
      case clsQuestionnaireENEx.con_AnswerContent:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return a.answerContent.localeCompare(b.answerContent);
        };
      case clsQuestionnaireENEx.con_UpdDateSim:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return a.updDateSim.localeCompare(b.updDateSim);
        };
      default:
        return Questionnaire_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQuestionnaireENEx.con_LevelModeTypeName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return b.levelModeTypeName.localeCompare(a.levelModeTypeName);
        };
      case clsQuestionnaireENEx.con_DifficultyLevelName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return b.difficultyLevelName.localeCompare(a.difficultyLevelName);
        };
      case clsQuestionnaireENEx.con_ChapterName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return b.chapterName.localeCompare(a.chapterName);
        };
      case clsQuestionnaireENEx.con_CourseName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsQuestionnaireENEx.con_QuestionTypeName:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return b.questionTypeName.localeCompare(a.questionTypeName);
        };
      case clsQuestionnaireENEx.con_AnswerContent:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return b.answerContent.localeCompare(a.answerContent);
        };
      case clsQuestionnaireENEx.con_UpdDateSim:
        return (a: clsQuestionnaireENEx, b: clsQuestionnaireENEx) => {
          return b.updDateSim.localeCompare(a.updDateSim);
        };
      default:
        return Questionnaire_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QuestionnaireEx_FuncMapByFldName(
  strFldName: string,
  objQuestionnaireEx: clsQuestionnaireENEx,
) {
  const strThisFuncName = QuestionnaireEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsQuestionnaireEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQuestionnaireENEx.con_LevelModeTypeName:
      return QuestionnaireEx_FuncMap_LevelModeTypeName(objQuestionnaireEx);
    case clsQuestionnaireENEx.con_DifficultyLevelName:
      return QuestionnaireEx_FuncMap_DifficultyLevelName(objQuestionnaireEx);
    case clsQuestionnaireENEx.con_ChapterName:
      return QuestionnaireEx_FuncMap_ChapterName(objQuestionnaireEx);
    case clsQuestionnaireENEx.con_CourseName:
      return QuestionnaireEx_FuncMap_CourseName(objQuestionnaireEx);
    case clsQuestionnaireENEx.con_QuestionTypeName:
      return QuestionnaireEx_FuncMap_QuestionTypeName(objQuestionnaireEx);
    case clsQuestionnaireENEx.con_AnswerContent:
      return QuestionnaireEx_FuncMap_AnswerContent(objQuestionnaireEx);
    case clsQuestionnaireENEx.con_UpdDateSim:
      return QuestionnaireEx_FuncMap_UpdDate_Sim(objQuestionnaireEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QuestionnaireEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return Questionnaire_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取给定表中满足条件的记录数
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
/// </summary>
/// <param name = "strWhereCond">条件串</param>
/// <returns>获取的相应对象列表</returns>
export async function QuestionnaireEx_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strAction = 'GetRecCountByCond';
  let strUrl = QuestionnaireEx_GetWebApiUrl(questionnaireEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'Get',
      dataType: 'json',
      data: strData,
      success: function (data) {
        resolve(data);
      },
      error: (e) => {
        console.error(e);
        const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/// <summary>
/// 导入Excel数据
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "objExcelData">Excel数据结构</param>
/// <returns>获取的相应对象列表</returns>
export async function QuestionnaireEx_ImportDataFromCsvBak(
  objExcelData: stuExcelData,
): Promise<number> {
  const strThisFuncName = 'ImportDataFromCsvBak';
  const strAction = 'ImportDataFromCsv';
  let strUrl = QuestionnaireEx_GetWebApiUrl(questionnaireEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('objExcelData', objExcelData);
  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.post(strUrl, objExcelData);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        questionnaireEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        questionnaireEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QuestionnaireEx_ImportDataFromCsv(
  objExcelData: stuExcelData,
): Promise<number> {
  const strThisFuncName = 'QuestionnaireEx_ImportDataFromCsv';
  const strAction = 'ImportDataFromCsv';

  const strUrl = QuestionnaireEx_GetWebApiUrl(questionnaireEx_Controller, strAction);
  try {
    const response = await axios.post(strUrl, objExcelData);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        questionnaireEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        questionnaireEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQuestionnaireS:源对象
 **/
export async function QuestionnaireEx_FuncMap_QuestionTypeName(
  objQuestionnaire: clsQuestionnaireENEx,
) {
  const strThisFuncName = QuestionnaireEx_FuncMap_QuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objQuestionnaire.questionTypeName) == true) {
      const QuestionType_QuestionTypeId = objQuestionnaire.questionTypeId;
      const QuestionType_QuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionType_QuestionTypeId,
      );
      objQuestionnaire.questionTypeName = QuestionType_QuestionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000219)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQuestionnaireS:源对象
 **/
export async function QuestionnaireEx_FuncMap_DifficultyLevelName(
  objQuestionnaire: clsQuestionnaireENEx,
) {
  const strThisFuncName = QuestionnaireEx_FuncMap_DifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objQuestionnaire.difficultyLevelName) == true) {
      const ge_DifficultyLevel_DifficultyLevelId = objQuestionnaire.difficultyLevelId;
      const ge_DifficultyLevel_DifficultyLevelName = await ge_DifficultyLevel_func(
        clsge_DifficultyLevelEN.con_DifficultyLevelId,
        clsge_DifficultyLevelEN.con_DifficultyLevelName,
        ge_DifficultyLevel_DifficultyLevelId,
      );
      objQuestionnaire.difficultyLevelName = ge_DifficultyLevel_DifficultyLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000218)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQuestionnaireS:源对象
 **/
export async function QuestionnaireEx_FuncMap_CourseName(objQuestionnaire: clsQuestionnaireENEx) {
  const strThisFuncName = QuestionnaireEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objQuestionnaire.courseName) == true) {
      const cc_Course_CourseId = objQuestionnaire.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objQuestionnaire.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQuestionnaireS:源对象
 **/
export async function QuestionnaireEx_FuncMap_ChapterName(objQuestionnaire: clsQuestionnaireENEx) {
  const strThisFuncName = QuestionnaireEx_FuncMap_ChapterName.name;
  try {
    if (IsNullOrEmpty(objQuestionnaire.chapterName) == true) {
      const cc_CourseChapter_CourseChapterId = objQuestionnaire.courseChapterId;
      const cc_CourseChapter_ChapterName = await cc_CourseChapter_func(
        clscc_CourseChapterEN.con_CourseChapterId,
        clscc_CourseChapterEN.con_ChapterName,
        cc_CourseChapter_CourseChapterId,
        objQuestionnaire.courseId,
      );
      objQuestionnaire.chapterName = cc_CourseChapter_ChapterName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000221)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQuestionnaireS:源对象
 **/
export async function QuestionnaireEx_FuncMap_LevelModeTypeName(
  objQuestionnaire: clsQuestionnaireENEx,
) {
  const strThisFuncName = QuestionnaireEx_FuncMap_LevelModeTypeName.name;
  try {
    if (IsNullOrEmpty(objQuestionnaire.levelModeTypeName) == true) {
      const ge_LevelModeType_LevelModeTypeId = objQuestionnaire.levelModeTypeId;
      const ge_LevelModeType_LevelModeTypeName = await ge_LevelModeType_func(
        clsge_LevelModeTypeEN.con_LevelModeTypeId,
        clsge_LevelModeTypeEN.con_LevelModeTypeName,
        ge_LevelModeType_LevelModeTypeId,
      );
      objQuestionnaire.levelModeTypeName = ge_LevelModeType_LevelModeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000220)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 扩展删除
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strQuestionId: 题目Id
 * @returns 获取的相应对象列表
 */
export async function QuestionnaireEx_DelRecordEx(strQuestionId: number): Promise<boolean> {
  const strThisFuncName = QuestionnaireEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = QuestionnaireEx_GetWebApiUrl(questionnaireEx_Controller, strAction);
  try {
    const response = await axios.get(strUrl, {
      params: {
        strQuestionId: strQuestionId,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        questionnaireEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        questionnaireEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQuestionnaireS:源对象
 **/
export async function QuestionnaireEx_FuncMap_AnswerContent(
  objQuestionnaire: clsQuestionnaireENEx,
) {
  const strThisFuncName = QuestionnaireEx_FuncMap_QuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objQuestionnaire.answerContent) == true) {
      const arrAnswer = await Answer_GetObjLstCache(objQuestionnaire.courseId);
      const arrAnswer_Sel = arrAnswer.filter((x) => x.questionId == objQuestionnaire.questionId);
      //switch (objQuestionnaire.questionTypeId) {
      //    case enumQuestionType.SingleChoice_02:

      //        break;
      //}
      let strAnswerContent = '';
      let intIndex = 0;
      for (const objInFor of arrAnswer_Sel) {
        if (intIndex == 0) {
          strAnswerContent = Format('{1}', strAnswerContent, objInFor.answerContent);
        } else {
          strAnswerContent = Format('{0}|{1}', strAnswerContent, objInFor.answerContent);
        }
      }
      objQuestionnaire.answerContent = strAnswerContent;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000219)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQuestionnaireS:源对象
 **/
export async function QuestionnaireEx_FuncMap_UpdDate_Sim(objQuestionnaire: clsQuestionnaireENEx) {
  const strThisFuncName = QuestionnaireEx_FuncMap_QuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objQuestionnaire.updDateSim) == true) {
      objQuestionnaire.updDateSim = clsDateTime.GetDateTime_Sim(objQuestionnaire.updDate);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000219)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      questionnaireEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 设置题目的标准答案For选择题
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCourseId: 课程Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function QuestionnaireEx_SetQuestionAnswer4SingleChoice(
  strCourseId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = QuestionnaireEx_SetQuestionAnswer4SingleChoice.name;
  const strAction = 'SetQuestionAnswer4SingleChoice';
  const strUrl = QuestionnaireEx_GetWebApiUrl(questionnaireEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseId,
      strOpUser,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        questionnaireEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        questionnaireEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
