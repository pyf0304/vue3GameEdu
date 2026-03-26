/*-- -- -- -- -- -- -- -- -- -- --
类名:clsge_StuBatchQuesRelaWApi
表名:ge_StuBatchQuesRela(01120885)
生成代码版本:2021.02.21.1
生成日期:2021/02/25 15:42:49
生成者:yy
生成服务器IP:103.116.76.183
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:互动管理
模块英文名:InteractManage
框架-层名:WA_访问层(WA_Access)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/
//import * as QQ from "q";
import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { cc_CourseChapter_func } from 'share-stu-study-base-lib';

import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ge_StuBatchQuesRela_GetObjLstAsync,
  ge_StuBatchQuesRela_SortFunByKey,
  ge_StuBatchQuesRela_FilterFunByKey,
  ge_StuBatchQuesRela_GetObjLstByJSONObjLst,
} from '@/ts/L3ForWApi/InteractManage/clsge_StuBatchQuesRelaWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsge_StuBatchQuesRelaEN } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN';
import { clsge_StuBatchQuesRelaENEx } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaENEx';
import {
  vQuestionnaire_Sim_func,
  vQuestionnaire_Sim_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';

import { AnswerMode_func, AnswerMode_funcKey } from '@/ts/L3ForWApi/SysPara/clsAnswerModeWApi';
import { clsAnswerModeEN } from '@/ts/L0Entity/SysPara/clsAnswerModeEN';
import {
  QuestionOptions_func,
  QuestionOptions_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import {
  QuestionType_GetNameByQuestionTypeIdCache,
  QuestionType_func,
  QuestionType_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import {
  ge_GameLevel_GetUniCondStr,
  ge_GameLevel_func,
  ge_GameLevel_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { ge_GameLevel_GetGameLevelIdByName } from '@/ts/L3ForWApiEx/Knowledges/clsge_GameLevelExWApi';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';
import { clsge_StuBatchQuesRelaENExV2 } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaENExV2';

export const ge_StuBatchQuesRelaEx_Controller = 'ge_StuBatchQuesRelaExApi';
export const ge_StuBatchQuesRelaEx_ConstructorName = 'ge_StuBatchQuesRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_StuBatchQuesRelaEx_GetWebApiUrl(
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
 * @param objge_StuBatchQuesRelaENS:源对象
 * @returns 目标对象=>clsge_StuBatchQuesRelaEN:objge_StuBatchQuesRelaENT
 **/
export function ge_StuBatchQuesRelaEx_CopyToEx(
  objge_StuBatchQuesRelaENS: clsge_StuBatchQuesRelaEN,
): clsge_StuBatchQuesRelaENEx {
  const strThisFuncName = ge_StuBatchQuesRelaEx_CopyToEx.name;
  const objge_StuBatchQuesRelaENT = new clsge_StuBatchQuesRelaENEx();
  try {
    ObjectAssign(objge_StuBatchQuesRelaENT, objge_StuBatchQuesRelaENS);
    return objge_StuBatchQuesRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_StuBatchQuesRelaENT;
  }
}

export function ge_StuBatchQuesRelaEx_CopyToExV2(
  objge_StuBatchQuesRelaENS: clsge_StuBatchQuesRelaEN,
): clsge_StuBatchQuesRelaENExV2 {
  const strThisFuncName = ge_StuBatchQuesRelaEx_CopyToExV2.name;
  const objge_StuBatchQuesRelaENT = new clsge_StuBatchQuesRelaENExV2();
  try {
    ObjectAssign(objge_StuBatchQuesRelaENT, objge_StuBatchQuesRelaENS);
    return objge_StuBatchQuesRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_StuBatchQuesRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_StuBatchQuesRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_StuBatchQuesRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_StuBatchQuesRelaObjLst = await ge_StuBatchQuesRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_StuBatchQuesRelaExObjLst = arrge_StuBatchQuesRelaObjLst.map(
    ge_StuBatchQuesRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsge_StuBatchQuesRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrge_StuBatchQuesRelaExObjLst) {
      await ge_StuBatchQuesRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_StuBatchQuesRelaExObjLst.length == 0) return arrge_StuBatchQuesRelaExObjLst;
  let arrge_StuBatchQuesRelaSel: Array<clsge_StuBatchQuesRelaENEx> = arrge_StuBatchQuesRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_StuBatchQuesRelaSel = arrge_StuBatchQuesRelaSel.sort(
        ge_StuBatchQuesRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_StuBatchQuesRelaSel = arrge_StuBatchQuesRelaSel.sort(objPagerPara.sortFun);
    }
    arrge_StuBatchQuesRelaSel = arrge_StuBatchQuesRelaSel.slice(intStart, intEnd);
    return arrge_StuBatchQuesRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_StuBatchQuesRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapQuestionName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapQuestionName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionName) == true) {
      const vQuestionnaireSimQuestionID = objge_StuBatchQuesRela.questionId;
      const vQuestionnaireSimQuestionName = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionName,
        vQuestionnaireSimQuestionID.toString(),
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000498)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapAnswerModeName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapAnswerModeName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.answerModeName) == true) {
      const AnswerModeAnswerModeId = objge_StuBatchQuesRela.answerModeId;
      const AnswerModeAnswerModeName = await AnswerMode_func(
        clsAnswerModeEN.con_AnswerModeId,
        clsAnswerModeEN.con_AnswerModeName,
        AnswerModeAnswerModeId,
      );
      objge_StuBatchQuesRela.answerModeName = AnswerModeAnswerModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000499)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapOptionName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapOptionName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.optionName) == true) {
      const QuestionOptionsQuestionOptionId = objge_StuBatchQuesRela.answerOptionId;
      const QuestionOptionsOptionName = await QuestionOptions_func(
        clsQuestionOptionsEN.con_QuestionOptionId,
        clsQuestionOptionsEN.con_OptionName,
        QuestionOptionsQuestionOptionId,
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.optionName = QuestionOptionsOptionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000500)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapQuestionTypeName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionTypeName) == true) {
      const vQuestionnaireSimQuestionID = objge_StuBatchQuesRela.questionId;
      const vQuestionnaireSimQuestionTypeId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionTypeId,
        vQuestionnaireSimQuestionID.toString(),
        objge_StuBatchQuesRela.courseId,
      );
      const QuestionTypeQuestionTypeId = vQuestionnaireSimQuestionTypeId;
      const QuestionTypeQuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionTypeQuestionTypeId,
      );
      objge_StuBatchQuesRela.questionTypeName = QuestionTypeQuestionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000501)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapGameLevelName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.gameLevelName) == true) {
      const geGameLevelGameLevelId = objge_StuBatchQuesRela.gameLevelId;
      const geGameLevelGameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        geGameLevelGameLevelId,
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.gameLevelName = geGameLevelGameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000502)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapUserName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapUserName.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.userName) == true) {
      const vUsersSimUserId = objge_StuBatchQuesRela.userId;
      const vUsersSimUserName = await vQxUsersSimStore.getUserName(vUsersSimUserId);
      objge_StuBatchQuesRela.userName = vUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_StuBatchQuesRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_StuBatchQuesRelaENEx.con_AnswerModeName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.answerModeName.localeCompare(b.answerModeName);
        };
      case clsge_StuBatchQuesRelaENEx.con_QuestionTypeName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.questionTypeName.localeCompare(b.questionTypeName);
        };
      case clsge_StuBatchQuesRelaENEx.con_QuestionName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      case clsge_StuBatchQuesRelaENEx.con_OptionName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.optionName.localeCompare(b.optionName);
        };
      case clsge_StuBatchQuesRelaENEx.con_CourseChapterId:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.courseChapterId.localeCompare(b.courseChapterId);
        };
      case clsge_StuBatchQuesRelaENEx.con_CourseChapterName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.courseChapterName.localeCompare(b.courseChapterName);
        };
      case clsge_StuBatchQuesRelaENEx.con_UserName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_StuBatchQuesRelaENEx.con_ChapterNameSim:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.chapterNameSim.localeCompare(b.chapterNameSim);
        };
      case clsge_StuBatchQuesRelaENEx.con_QuestionTypeId:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.questionTypeId.localeCompare(b.questionTypeId);
        };
      case clsge_StuBatchQuesRelaENEx.con_GameLevelName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return a.gameLevelName.localeCompare(b.gameLevelName);
        };
      default:
        return ge_StuBatchQuesRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_StuBatchQuesRelaENEx.con_AnswerModeName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.answerModeName.localeCompare(a.answerModeName);
        };
      case clsge_StuBatchQuesRelaENEx.con_QuestionTypeName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.questionTypeName.localeCompare(a.questionTypeName);
        };
      case clsge_StuBatchQuesRelaENEx.con_QuestionName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      case clsge_StuBatchQuesRelaENEx.con_OptionName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.optionName.localeCompare(a.optionName);
        };
      case clsge_StuBatchQuesRelaENEx.con_CourseChapterId:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.courseChapterId.localeCompare(a.courseChapterId);
        };
      case clsge_StuBatchQuesRelaENEx.con_CourseChapterName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.courseChapterName.localeCompare(a.courseChapterName);
        };
      case clsge_StuBatchQuesRelaENEx.con_UserName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_StuBatchQuesRelaENEx.con_ChapterNameSim:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.chapterNameSim.localeCompare(a.chapterNameSim);
        };
      case clsge_StuBatchQuesRelaENEx.con_QuestionTypeId:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.questionTypeId.localeCompare(a.questionTypeId);
        };
      case clsge_StuBatchQuesRelaENEx.con_GameLevelName:
        return (a: clsge_StuBatchQuesRelaENEx, b: clsge_StuBatchQuesRelaENEx) => {
          return b.gameLevelName.localeCompare(a.gameLevelName);
        };
      default:
        return ge_StuBatchQuesRela_SortFunByKey(strKey, AscOrDesc);
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
export function ge_StuBatchQuesRelaEx_FuncMapByFldName(
  strFldName: string,
  objge_StuBatchQuesRelaEx: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_StuBatchQuesRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_StuBatchQuesRelaENEx.con_AnswerModeName:
      return ge_StuBatchQuesRelaEx_FuncMap_AnswerModeName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_QuestionName:
      return ge_StuBatchQuesRelaEx_FuncMap_QuestionName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_QuestionTypeName:
      return ge_StuBatchQuesRelaEx_FuncMap_QuestionTypeName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_OptionName:
      return ge_StuBatchQuesRelaEx_FuncMap_OptionName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_CourseChapterId:
      return ge_StuBatchQuesRelaEx_FuncMap_CourseChapterId(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_CourseChapterName:
      return ge_StuBatchQuesRelaEx_FuncMap_CourseChapterName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_UserName:
      return ge_StuBatchQuesRelaEx_FuncMap_UserName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_ChapterNameSim:
      return ge_StuBatchQuesRelaEx_FuncMap_ChapterName_Sim(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_QuestionTypeId:
      return ge_StuBatchQuesRelaEx_FuncMap_QuestionTypeId(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_GameLevelName:
      return ge_StuBatchQuesRelaEx_FuncMap_GameLevelName(objge_StuBatchQuesRelaEx);
    //case clsge_StuBatchQuesRelaENEx.con_IsHasAnswer:
    //    return ge_StuBatchQuesRelaEx_FuncMap_IsHasAnswer(objge_StuBatchQuesRelaEx);
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
export async function ge_StuBatchQuesRelaEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_StuBatchQuesRela_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function ge_StuBatchQuesRelaEx_Getge_StuBatchQuesRelaListExV2(
  userId: string,
  idCurrEduCls: string,
  difficultyLevelId: string,
  questionTypeId: string,
  questionNum: number,
  gameLevelId: string,
): Promise<Array<clsge_StuBatchQuesRelaEN>> {
  const strThisFuncName = 'Getge_StuBatchQuesRelaListExV2';
  const strAction = 'Getge_StuBatchQuesRelaListExV2';
  let strUrl = ge_StuBatchQuesRelaEx_GetWebApiUrl(ge_StuBatchQuesRelaEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('userId', userId);
  mapParam.add('idCurrEduCls', idCurrEduCls);
  mapParam.add('difficultyLevelId', difficultyLevelId);
  mapParam.add('questionTypeId', questionTypeId);
  mapParam.add('questionNum', questionNum);
  mapParam.add('gameLevelId', gameLevelId);

  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        userId: userId,
        idCurrEduCls: idCurrEduCls,
        difficultyLevelId: difficultyLevelId,
        questionTypeId: questionTypeId,
        questionNum: questionNum,
        gameLevelId: gameLevelId,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ge_StuBatchQuesRelaEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ge_StuBatchQuesRela_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        ge_StuBatchQuesRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_StuBatchQuesRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
/// </summary>
/// <param name = "objge_StuBatchQuesRelaEN">需要添加的表对象</param>
/// <returns>返回新添加记录的关键字</returns>
export async function ge_StuBatchQuesRelaEx_GetLevelNoByCourseIdEx(
  courseId: string,
  strIdCurrEduCls: string,
): Promise<string> {
  const strThisFuncName = 'GetLevelNoByCourseIdEx';
  const strAction = 'GetLevelNoByCourseIdEx';
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('courseId', courseId);
  mapParam.add('strIdCurrEduCls', strIdCurrEduCls);

  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  let strUrl = ge_StuBatchQuesRelaEx_GetWebApiUrl(ge_StuBatchQuesRelaEx_Controller, strAction);
  try {
    const response = await axios.get(strUrl, {
      params: {
        courseId: courseId,
        strIdCurrEduCls: strIdCurrEduCls,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        ge_StuBatchQuesRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_StuBatchQuesRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function ge_StuBatchQuesRelaEx_GetRecommend_ge_StuBatchQuesRelaListEx(
  userId: string,
  courseId: string,
): Promise<Array<clsge_StuBatchQuesRelaEN>> {
  const strThisFuncName = 'GetRecommend_ge_StuBatchQuesRelaListEx';
  const strAction = 'Getge_StuBatchQuesRelaListEx';
  let strUrl = ge_StuBatchQuesRelaEx_GetWebApiUrl(ge_StuBatchQuesRelaEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();

  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        userId: userId,
        courseId: courseId,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ge_StuBatchQuesRelaEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ge_StuBatchQuesRela_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        ge_StuBatchQuesRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_StuBatchQuesRelaEx_Controller,
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
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_QuestionName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_QuestionName.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionName) == true) {
      const Questionnaire_QuestionId = objge_StuBatchQuesRela.questionId;
      const Questionnaire_QuestionName = await questionnaireStore.getQuestionName(
        Questionnaire_QuestionId,
      );
      objge_StuBatchQuesRela.questionName = Questionnaire_QuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000191)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_AnswerModeName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_AnswerModeName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.answerModeName) == true) {
      const AnswerMode_AnswerModeId = objge_StuBatchQuesRela.answerModeId;
      const AnswerMode_AnswerModeName = await AnswerMode_func(
        clsAnswerModeEN.con_AnswerModeId,
        clsAnswerModeEN.con_AnswerModeName,
        AnswerMode_AnswerModeId,
      );
      objge_StuBatchQuesRela.answerModeName = AnswerMode_AnswerModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000205)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_OptionName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_OptionName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.optionName) == true) {
      const QuestionOptions_QuestionOptionId = objge_StuBatchQuesRela.answerOptionId;
      const QuestionOptions_OptionName = await QuestionOptions_func(
        clsQuestionOptionsEN.con_QuestionOptionId,
        clsQuestionOptionsEN.con_OptionName,
        QuestionOptions_QuestionOptionId,
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.optionName = QuestionOptions_OptionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000206)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_QuestionTypeName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_QuestionTypeName.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionTypeName) == true) {
      const Questionnaire_QuestionId = objge_StuBatchQuesRela.questionId;
      const Questionnaire_QuestionTypeId = await questionnaireStore.getQuestionTypeId(
        Questionnaire_QuestionId,
      );
      const QuestionType_QuestionTypeId = Questionnaire_QuestionTypeId;
      const QuestionType_QuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionType_QuestionTypeId,
      );
      objge_StuBatchQuesRela.questionTypeName = QuestionType_QuestionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000219)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_GameLevelName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_GameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.gameLevelName) == true) {
      const ge_GameLevel_GameLevelId = objge_StuBatchQuesRela.gameLevelId;
      const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        ge_GameLevel_GameLevelId,
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.gameLevelName = ge_GameLevel_GameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000182)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_CourseChapterId(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_CourseChapterId.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.courseChapterId) == true) {
      const Questionnaire_QuestionId = objge_StuBatchQuesRela.questionId;
      const Questionnaire_CourseChapterId = await questionnaireStore.getCourseChapterId(
        Questionnaire_QuestionId,
      );
      objge_StuBatchQuesRela.courseChapterId = Questionnaire_CourseChapterId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000228)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_CourseChapterName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_CourseChapterName.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.courseChapterName) == true) {
      const Questionnaire_QuestionId = objge_StuBatchQuesRela.questionId;
      const Questionnaire_CourseChapterId = await questionnaireStore.getCourseChapterId(
        Questionnaire_QuestionId,
      );
      const cc_CourseChapter_CourseChapterId = Questionnaire_CourseChapterId;
      const cc_CourseChapter_CourseChapterName = await cc_CourseChapter_func(
        clscc_CourseChapterEN.con_CourseChapterId,
        clscc_CourseChapterEN.con_CourseChapterName,
        cc_CourseChapter_CourseChapterId,
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.courseChapterName = cc_CourseChapter_CourseChapterName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000185)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_UserName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_UserName.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.userName) == true) {
      const vQxUsersSim_UserId = objge_StuBatchQuesRela.userId;
      const vQxUsersSim_UserName = await vQxUsersSimStore.getUserName(vQxUsersSim_UserId);
      objge_StuBatchQuesRela.userName = vQxUsersSim_UserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_ChapterName_Sim(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_ChapterName_Sim.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.chapterNameSim) == true) {
      const Questionnaire_QuestionId = objge_StuBatchQuesRela.questionId;
      const Questionnaire_CourseChapterId = await questionnaireStore.getCourseChapterId(
        Questionnaire_QuestionId,
      );
      const cc_CourseChapter_CourseChapterId = Questionnaire_CourseChapterId;
      const cc_CourseChapter_ChapterName_Sim = await cc_CourseChapter_func(
        clscc_CourseChapterEN.con_CourseChapterId,
        clscc_CourseChapterEN.con_ChapterNameSim,
        cc_CourseChapter_CourseChapterId,
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.chapterNameSim = cc_CourseChapter_ChapterName_Sim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000229)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMap_QuestionTypeId(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_QuestionTypeId.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionTypeId) == true) {
      const Questionnaire_QuestionId = objge_StuBatchQuesRela.questionId;
      const Questionnaire_QuestionTypeId = await questionnaireStore.getQuestionTypeId(
        Questionnaire_QuestionId,
      );
      objge_StuBatchQuesRela.questionTypeId = Questionnaire_QuestionTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000230)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function ge_StuBatchQuesRelaEx_FuncMapKey_QuestionTypeId(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<number>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_QuestionTypeId.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionTypeId) == true) return [];
    const Questionnaire_QuestionTypeId = objge_StuBatchQuesRela.questionTypeId;
    const arrQuestionnId = await vQuestionnaire_Sim_funcKey(
      clsQuestionnaireEN.con_QuestionTypeId,
      Questionnaire_QuestionTypeId,
      enumComparisonOp.Equal_01,
      objge_StuBatchQuesRela.courseId,
    );
    return arrQuestionnId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000230)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function ge_StuBatchQuesRelaEx_FuncMapKey_CourseChapterId(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<number>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKey_CourseChapterId.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionTypeId) == true) return [];
    const Questionnaire_CourseChapterId = objge_StuBatchQuesRela.courseChapterId;
    const arrQuestionnId = await vQuestionnaire_Sim_funcKey(
      clsQuestionnaireEN.con_CourseChapterId,
      Questionnaire_CourseChapterId,
      enumComparisonOp.Equal_01,
      objge_StuBatchQuesRela.courseId,
    );
    return arrQuestionnId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000230)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function ge_StuBatchQuesRelaEx_FuncMapKey_UserName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKey_CourseChapterId.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.userName) == true) return [];
    const Questionnaire_userName = objge_StuBatchQuesRela.userName;
    const arrUserId = await vQxUsersSimStore.getUserIdLstByUserName(
      Questionnaire_userName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000230)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

///**
//* 把一个扩展类的部分属性进行函数转换
//* (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
//* @param objge_StuBatchQuesRelaS:源对象
//**/
//export async function ge_StuBatchQuesRelaEx_FuncMap_IsHasAnswer(objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx) {
//    const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMap_GameLevelName.name;
//    try {
//        if (IsNullOrEmpty(objge_StuBatchQuesRela.isHasAnswer) == true) {
//            const bolIsHasAnswer = await UserAnswerResultEx_IsHasAnswerCache(objge_StuBatchQuesRela);
//            if (bolIsHasAnswer == true) objge_StuBatchQuesRela.isHasAnswer = "有";
//            else objge_StuBatchQuesRela.isHasAnswer = "没有";
//        }
//    }
//    catch (e) {
//        const strMsg = Format("(errid:Watl000182)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_StuBatchQuesRelaEx_ConstructorName, strThisFuncName);
//        console.error(strMsg);
//        alert(strMsg);
//    }
//}

/**
 * 设置是否有答案
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @returns 获取的相应对象列表
 */
export async function ge_StuBatchQuesRelaEx_SetIsHasAnswer(
  strIdCurrEduCls: string,
): Promise<number> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_SetIsHasAnswer.name;
  const strAction = 'SetIsHasAnswer';
  const strUrl = ge_StuBatchQuesRelaEx_GetWebApiUrl(ge_StuBatchQuesRelaEx_Controller, strAction);
  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls: strIdCurrEduCls,
      },
    });
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
        ge_StuBatchQuesRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_StuBatchQuesRelaEx_ConstructorName,
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapKeyQuestionName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<number>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKeyQuestionName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionName) == true) return [];
    const vQuestionnaireSimQuestionName = objge_StuBatchQuesRela.questionName;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionName,
      vQuestionnaireSimQuestionName,
      objge_StuBatchQuesRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000498)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
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
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapKeyAnswerModeName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKeyAnswerModeName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.answerModeName) == true) return [];
    const AnswerModeAnswerModeName = objge_StuBatchQuesRela.answerModeName;
    const arrAnswerModeId = await AnswerMode_funcKey(
      clsAnswerModeEN.con_AnswerModeName,
      AnswerModeAnswerModeName,
      enumComparisonOp.Like_03,
    );
    return arrAnswerModeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000499)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
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
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapKeyOptionName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKeyOptionName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.optionName) == true) return [];
    const QuestionOptionsOptionName = objge_StuBatchQuesRela.optionName;
    const arrQuestionOptionId = await QuestionOptions_funcKey(
      clsQuestionOptionsEN.con_OptionName,
      QuestionOptionsOptionName,
      objge_StuBatchQuesRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionOptionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000500)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
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
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapKeyQuestionTypeName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<number>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKeyQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionTypeName) == true) return [];
    const QuestionTypeQuestionTypeName = objge_StuBatchQuesRela.questionTypeName;
    const arrQuestionTypeId = await QuestionType_funcKey(
      clsQuestionTypeEN.con_QuestionTypeName,
      QuestionTypeQuestionTypeName,
      enumComparisonOp.Like_03,
    );
    const strQuestionTypeIdLst = arrQuestionTypeId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionTypeId,
      strQuestionTypeIdLst,
      objge_StuBatchQuesRela.courseId,
      enumComparisonOp.In_04,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000501)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
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
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapKeyGameLevelName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKeyGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.gameLevelName) == true) return [];
    const geGameLevelGameLevelName = objge_StuBatchQuesRela.gameLevelName;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_GameLevelName,
      geGameLevelGameLevelName,
      objge_StuBatchQuesRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000502)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
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
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapKeyCourseChapterId(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<number>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKeyCourseChapterId.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.courseChapterId) == true) return [];
    const vQuestionnaireSimCourseChapterId = objge_StuBatchQuesRela.courseChapterId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_CourseChapterId,
      vQuestionnaireSimCourseChapterId,
      objge_StuBatchQuesRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000515)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
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
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapKeyUserName(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKeyUserName.name;
  const vQxUsersSimStore = usevQxUsersSimStore();
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.userName) == true) return [];
    const vUsersSimUserName = objge_StuBatchQuesRela.userName;
    const arrUserId = await vQxUsersSimStore.getUserIdLstByUserName(
      vUsersSimUserName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
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
 * @param objge_StuBatchQuesRelaS:源对象
 **/
export async function ge_StuBatchQuesRelaEx_FuncMapKeyQuestionTypeId(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
): Promise<Array<number>> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapKeyQuestionTypeId.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionTypeId) == true) return [];
    const vQuestionnaireSimQuestionTypeId = objge_StuBatchQuesRela.questionTypeId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionTypeId,
      vQuestionnaireSimQuestionTypeId,
      enumComparisonOp.Like_03,
      objge_StuBatchQuesRela.courseId,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000516)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 设置是否有答案
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strGameLevelId: 关卡Id
 * @param strUserId: 用户Id
 * @param bolIsRecommend: 是否推荐
 * @returns 获取的相应对象列表
 */
export async function ge_StuBatchQuesRelaEx_GetLastExamBatchNo(
  strGameLevelId: string,
  strUserId: string,
  bolIsRecommend: boolean,
): Promise<string> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_GetLastExamBatchNo.name;
  const strAction = 'GetLastExamBatchNo';
  const strUrl = ge_StuBatchQuesRelaEx_GetWebApiUrl(ge_StuBatchQuesRelaEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGameLevelId,
      strUserId,
      bolIsRecommend,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        ge_StuBatchQuesRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_StuBatchQuesRelaEx_ConstructorName,
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
 * 设置是否有答案
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strGameLevelId: 关卡Id
 * @param strUserId: 用户Id
 * @param bolIsRecommend: 是否推荐
 * @returns 获取的相应对象列表
 */
export async function ge_StuBatchQuesRelaEx_RecommendTopics0(
  strCourseKnowledgeId: string,
  strQuestionTypeId: string,
  strUserId: string,
): Promise<number> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_RecommendTopics0.name;
  const strQuestionTypeName = await QuestionType_GetNameByQuestionTypeIdCache(strQuestionTypeId);
  const strGameLevelName = `教师推荐${strQuestionTypeName}`;

  const strGameLevelId = await ge_GameLevel_GetGameLevelIdByName(
    strGameLevelName,
    clsPubLocalStorage.courseId,
  );
  if (strGameLevelId == '') {
    const strMsg = `关卡:[${strGameLevelName}]在当前课程：[${clsPubLocalStorage.courseId}]不存在, 请添加这样的关卡后再推荐!(In ge_StuBatchQuesRelaEx_RecommendTopics)`;
    console.error(strMsg);
    alert(strMsg);
    return 0;
  }
  const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
  const intQuestionNum = 3;
  const bolIsSuccess = await ge_StuBatchQuesRelaEx_RecommendTopics(
    strCourseKnowledgeId,
    strUserId,
    strIdCurrEduCls,
    intQuestionNum,
    strGameLevelId,
  );
  return bolIsSuccess;
}

/**
 * 推荐题目
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCourseKnowledgeId: 知识点Id
 * @param strUserId: 用户Id
 * @param strIdCurrEduCls: 教学班流水号
 * @param intQuestionNum: 问题数
 * @param strGameLevelId: 关卡Id
 * @returns 获取的相应对象列表
 */
export async function ge_StuBatchQuesRelaEx_RecommendTopics(
  strCourseKnowledgeId: string,
  strUserId: string,
  strIdCurrEduCls: string,
  intQuestionNum: number,
  strGameLevelId: string,
): Promise<number> {
  const strThisFuncName = ge_StuBatchQuesRelaEx_RecommendTopics.name;
  const strAction = 'RecommendTopics';
  const strUrl = ge_StuBatchQuesRelaEx_GetWebApiUrl(ge_StuBatchQuesRelaEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCourseKnowledgeId,
      strUserId,
      strIdCurrEduCls,
      intQuestionNum,
      strGameLevelId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
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
        ge_StuBatchQuesRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_StuBatchQuesRelaEx_ConstructorName,
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
 * 根据知识点获取随机问题
 * @param strUserId: 用户ID
 * @param strIdCurrEduCls: 当前教育班级ID
 * @param strBatchTypeId: 批次类型ID
 * @param KnowledgeId: 知识点ID
 * @param DifficultyLevelId: 难度等级ID
 * @param QuestionTypeId: 问题类型ID
 * @param QuestionNum: 问题数量
 * @param GameLevelId: 游戏等级ID
 * @returns 问题列表
 **/
export async function ge_StuBatchQuesRelaEx_GetRandomQuesByKnowledge(
  strUserId: string,
  strIdCurrEduCls: string,
  strBatchTypeId: string,
  KnowledgeId: string,
  DifficultyLevelId: string,
  QuestionNum: number,
  GameLevelId: string,
): Promise<clsge_StuBatchQuesRelaEN[] | null> {
  const strThisFuncName = 'GetRandomQuesByKnowledgeAsync';

  if (
    IsNullOrEmpty(strUserId) ||
    IsNullOrEmpty(strIdCurrEduCls) ||
    IsNullOrEmpty(strBatchTypeId) ||
    IsNullOrEmpty(KnowledgeId) ||
    IsNullOrEmpty(DifficultyLevelId) ||
    QuestionNum <= 0 ||
    IsNullOrEmpty(GameLevelId)
  ) {
    const strMsg = Format('参数不能为空!(In clsge_GameLevelExWApi.GetRandomQuesByKnowledgeAsync)');
    console.error(strMsg);
    throw strMsg;
  }

  const strAction = 'GetRandomQuesByKnowledge';
  const strUrl = GetWebApiUrl(ge_StuBatchQuesRelaEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strIdCurrEduCls,
      strBatchTypeId,
      KnowledgeId,
      DifficultyLevelId,
      QuestionNum,
      GameLevelId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ge_StuBatchQuesRelaEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }

      const arrObjLst = ge_StuBatchQuesRela_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        ge_StuBatchQuesRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ge_StuBatchQuesRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
