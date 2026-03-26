/**
 * 类名:clsge_StuBatchQuesRelaExWApi
 * 表名:ge_StuBatchQuesRela(01120885)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:05:03
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
 * 学生批次题目关系(ge_StuBatchQuesRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_StuBatchQuesRelaENEx } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaENEx';
import {
  ge_StuBatchQuesRela_GetObjLstByPagerAsync,
  ge_StuBatchQuesRela_SortFunByKey,
  ge_StuBatchQuesRela_FilterFunByKey,
} from '@/ts/L3ForWApi/InteractManage/clsge_StuBatchQuesRelaWApi';
import {
  vQuestionnaire_Sim_func,
  vQuestionnaire_Sim_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import { AnswerMode_func, AnswerMode_funcKey } from '@/ts/L3ForWApi/SysPara/clsAnswerModeWApi';
import { clsAnswerModeEN } from '@/ts/L0Entity/SysPara/clsAnswerModeEN';
import {
  QuestionOptions_func,
  QuestionOptions_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import {
  QuestionType_func,
  QuestionType_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import {
  ge_GameLevel_func,
  ge_GameLevel_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { vUsersSim_func, vUsersSim_funcKey } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { clsge_StuBatchQuesRelaEN } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export const ge_StuBatchQuesRelaExController = 'ge_StuBatchQuesRelaExApi';
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
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

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
  const arrge_StuBatchQuesRelaObjLst = await ge_StuBatchQuesRela_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrge_StuBatchQuesRelaExObjLst = arrge_StuBatchQuesRelaObjLst.map(
    ge_StuBatchQuesRelaEx_CopyToEx,
  );
  if (arrge_StuBatchQuesRelaExObjLst.length == 0) return arrge_StuBatchQuesRelaExObjLst;
  let arrge_StuBatchQuesRelaSel: Array<clsge_StuBatchQuesRelaENEx> = arrge_StuBatchQuesRelaExObjLst;
  try {
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
      const vQuestionnaireSimQuestionId = objge_StuBatchQuesRela.questionId;
      const vQuestionnaireSimQuestionName = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionName,
        vQuestionnaireSimQuestionId.toString(),
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000896)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000911)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000912)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      const vQuestionnaireSimQuestionId = objge_StuBatchQuesRela.questionId;
      const vQuestionnaireSimQuestionTypeId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionTypeId,
        vQuestionnaireSimQuestionId.toString(),
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
      '(errid:Watl000913)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000914)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_StuBatchQuesRelaEx_FuncMapCourseChapterId(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapCourseChapterId.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.courseChapterId) == true) {
      const vQuestionnaireSimQuestionId = objge_StuBatchQuesRela.questionId;
      const vQuestionnaireSimCourseChapterId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_CourseChapterId,
        vQuestionnaireSimQuestionId.toString(),
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.courseChapterId = vQuestionnaireSimCourseChapterId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000915)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.userName) == true) {
      const vUsersSimUserId = objge_StuBatchQuesRela.userId;
      const vUsersSimUserName = await vUsersSim_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSimUserId,
        clsPrivateSessionStorage.cmPrjId,
      );
      objge_StuBatchQuesRela.userName = vUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_StuBatchQuesRelaEx_FuncMapQuestionTypeId(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaENEx,
) {
  const strThisFuncName = ge_StuBatchQuesRelaEx_FuncMapQuestionTypeId.name;
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.questionTypeId) == true) {
      const vQuestionnaireSimQuestionId = objge_StuBatchQuesRela.questionId;
      const vQuestionnaireSimQuestionTypeId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionTypeId,
        vQuestionnaireSimQuestionId.toString(),
        objge_StuBatchQuesRela.courseId,
      );
      objge_StuBatchQuesRela.questionTypeId = vQuestionnaireSimQuestionTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000916)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
 * 日期:2024-11-13
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
 * 作者:pyf
 * 日期:2024-11-13
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
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_StuBatchQuesRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_StuBatchQuesRelaENEx.con_AnswerModeName:
      return ge_StuBatchQuesRelaEx_FuncMapAnswerModeName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_QuestionTypeName:
      return ge_StuBatchQuesRelaEx_FuncMapQuestionTypeName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_QuestionName:
      return ge_StuBatchQuesRelaEx_FuncMapQuestionName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_OptionName:
      return ge_StuBatchQuesRelaEx_FuncMapOptionName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_CourseChapterId:
      return ge_StuBatchQuesRelaEx_FuncMapCourseChapterId(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_UserName:
      return ge_StuBatchQuesRelaEx_FuncMapUserName(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_QuestionTypeId:
      return ge_StuBatchQuesRelaEx_FuncMapQuestionTypeId(objge_StuBatchQuesRelaEx);
    case clsge_StuBatchQuesRelaENEx.con_GameLevelName:
      return ge_StuBatchQuesRelaEx_FuncMapGameLevelName(objge_StuBatchQuesRelaEx);
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
export async function ge_StuBatchQuesRelaEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_StuBatchQuesRelaENEx.con_AnswerModeName:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.answerModeName === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_QuestionTypeName:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.questionTypeName === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_QuestionName:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.questionName === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_OptionName:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.optionName === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_CourseChapterId:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.courseChapterId === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_CourseChapterName:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.courseChapterName === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_UserName:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.userName === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_ChapterNameSim:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.chapterNameSim === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_QuestionTypeId:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.questionTypeId === value;
      };
    case clsge_StuBatchQuesRelaENEx.con_GameLevelName:
      return (obj: clsge_StuBatchQuesRelaENEx) => {
        return obj.gameLevelName === value;
      };
    default:
      return ge_StuBatchQuesRela_FilterFunByKey(strKey, value);
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
      '(errid:Watl000898)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000917)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000918)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000919)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000920)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      '(errid:Watl000921)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
  try {
    if (IsNullOrEmpty(objge_StuBatchQuesRela.userName) == true) return [];
    const vUsersSimUserName = objge_StuBatchQuesRela.userName;
    const arrUserId = await vUsersSim_funcKey(
      clsvUsersSimEN.con_UserName,
      vUsersSimUserName,
      clsPrivateSessionStorage.cmPrjId,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000641)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
      objge_StuBatchQuesRela.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000922)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuBatchQuesRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
