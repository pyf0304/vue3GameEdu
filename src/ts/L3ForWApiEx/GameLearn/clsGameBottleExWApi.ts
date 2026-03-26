/**
 * 类名:clsGameBottleExWApi
 * 表名:GameBottle(01120974)
 * 版本:2024.11.10.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/12 00:47:28
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 游戏瓶(GameBottle)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  GameBottle_GetObjLstCache,
  GameBottle_GetObjLstByPagerAsync,
  GameBottle_SortFunByKey,
  GameBottle_FilterFunByKey,
  GameBottle_AddNewObjSave,
  GameBottle_GetObjByBottleIdAsync,
  GameBottle_UpdateObjSave,
} from '@/ts/L3ForWApi/GameLearn/clsGameBottleWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGameBottleEN } from '@/ts/L0Entity/GameLearn/clsGameBottleEN';
import { clsGameBottleENEx } from '@/ts/L0Entity/GameLearn/clsGameBottleENEx';
import {
  vQuestionnaire_Sim_func,
  vQuestionnaire_Sim_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import {
  QuestionType_func,
  QuestionType_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { vQxUsersSim_func, vQxUsersSim_funcKey } from 'share-gen-plat-base-lib';
import { clsvQxUsersSimEN } from 'share-gen-plat-base-lib';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';
import { cc_KnowledgesExamLibRelaCRUD } from '@/viewsBase/Knowledges/cc_KnowledgesExamLibRelaCRUD';
import {
  cc_KnowledgesExamLibRela_GetObjLstAsync,
  cc_KnowledgesExamLibRela_GetObjLstCache,
} from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import { CourseId_Session } from '@/views/QuestionaireEdit/QuestionnaireVueShare';
import { useQuestionOptionsStore } from '@/store/modules/questionOptions';
import { usecc_CourseKnowledgesStore } from '@/store/modules/cc_CourseKnowledges';
import { ge_DifficultyLevel_func } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { useUserStore } from '@/store/modulesShare/user';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { enumBottleState } from '@/ts/L0Entity/SysPara/clsBottleState';
import { promises } from 'dns';

export const gameBottleExController = 'GameBottleExApi';
export const gameBottleEx_ConstructorName = 'gameBottleEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function GameBottleEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objGameBottleENS:源对象
 * @returns 目标对象=>clsGameBottleEN:objGameBottleENT
 **/
export function GameBottleEx_CopyToEx(objGameBottleENS: clsGameBottleEN): clsGameBottleENEx {
  const strThisFuncName = GameBottleEx_CopyToEx.name;
  const objGameBottleENT = new clsGameBottleENEx();
  try {
    ObjectAssign(objGameBottleENT, objGameBottleENS);
    return objGameBottleENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGameBottleENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GameBottleEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGameBottleENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrGameBottleObjLst = await GameBottle_GetObjLstCache();
  const arrGameBottleExObjLst = arrGameBottleObjLst.map(GameBottleEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGameBottleEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrGameBottleExObjLst) {
      await GameBottleEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrGameBottleExObjLst.length == 0) return arrGameBottleExObjLst;
  let arrGameBottleSel: Array<clsGameBottleENEx> = arrGameBottleExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objGameBottleCond = new clsGameBottleENEx();
  ObjectAssign(objGameBottleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsGameBottleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrGameBottleSel = arrGameBottleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGameBottleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGameBottleSel = arrGameBottleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGameBottleSel = arrGameBottleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGameBottleSel = arrGameBottleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGameBottleSel = arrGameBottleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGameBottleSel = arrGameBottleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGameBottleSel = arrGameBottleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGameBottleSel = arrGameBottleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrGameBottleSel = arrGameBottleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGameBottleSel = arrGameBottleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGameBottleSel = arrGameBottleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGameBottleSel = arrGameBottleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGameBottleSel = arrGameBottleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGameBottleSel = arrGameBottleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGameBottleSel = arrGameBottleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrGameBottleSel.length == 0) return arrGameBottleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGameBottleSel = arrGameBottleSel.sort(GameBottleEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGameBottleSel = arrGameBottleSel.sort(objPagerPara.sortFun);
    }
    arrGameBottleSel = arrGameBottleSel.slice(intStart, intEnd);
    return arrGameBottleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGameBottleENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GameBottleEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGameBottleENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrGameBottleObjLst = await GameBottle_GetObjLstByPagerAsync(objPagerPara);
  const arrGameBottleExObjLst = arrGameBottleObjLst.map(GameBottleEx_CopyToEx);
  if (arrGameBottleExObjLst.length == 0) return arrGameBottleExObjLst;
  let arrGameBottleSel: Array<clsGameBottleENEx> = arrGameBottleExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGameBottleSel = arrGameBottleSel.sort(GameBottleEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGameBottleSel = arrGameBottleSel.sort(objPagerPara.sortFun);
    }
    return arrGameBottleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGameBottleENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapQuestionTypeName(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapQuestionTypeName.name;
  try {
    const questionnaireStore = useQuestionnaireStore();
    if (IsNullOrEmpty(objGameBottle.questionTypeName) == true) {
      const vQuestionnaireSimQuestionId = objGameBottle.questionId;
      // console.log('vQuestionnaireSimQuestionId', vQuestionnaireSimQuestionId);
      const vQuestionnaireSimQuestionTypeId = await questionnaireStore.getQuestionTypeId(
        vQuestionnaireSimQuestionId,
      );
      // console.log(vQuestionnaireSimQuestionTypeId);
      const QuestionTypeQuestionTypeId = vQuestionnaireSimQuestionTypeId;
      const QuestionTypeQuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionTypeQuestionTypeId,
      );
      objGameBottle.questionTypeName = QuestionTypeQuestionTypeName;
      // console.log('QuestionTypeQuestionTypeName:', QuestionTypeQuestionTypeName);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000913)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapQuestionName(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapQuestionName.name;
  try {
    if (IsNullOrEmpty(objGameBottle.questionName) == true) {
      const vQuestionnaireSimQuestionId = objGameBottle.questionId;
      const vQuestionnaireSimQuestionName = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionName,
        vQuestionnaireSimQuestionId.toString(),
        clsPubLocalStorage.courseId,
      );
      objGameBottle.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000896)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapQuestionTypeId(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapQuestionTypeId.name;
  try {
    if (IsNullOrEmpty(objGameBottle.questionTypeId) == true) {
      const vQuestionnaireSimQuestionId = objGameBottle.questionId;
      const vQuestionnaireSimQuestionTypeId = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionTypeId,
        vQuestionnaireSimQuestionId.toString(),
        clsPubLocalStorage.courseId,
      );
      objGameBottle.questionTypeId = vQuestionnaireSimQuestionTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000916)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapKnowlegeIds(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapQuestionTypeId.name;
  try {
    if (IsNullOrEmpty(objGameBottle.courseKnowledgeIds) == true) {
      const vQuestionnaireSimQuestionId = objGameBottle.questionId;
      let arrcc_KnowledgesExamLibRela = await cc_KnowledgesExamLibRela_GetObjLstCache(
        CourseId_Session.value,
      );
      arrcc_KnowledgesExamLibRela = arrcc_KnowledgesExamLibRela.filter(
        (x) => x.questionId == vQuestionnaireSimQuestionId,
      );
      const arrCourseKnowledgeIds = arrcc_KnowledgesExamLibRela.map((x) => x.courseKnowledgeId);
      objGameBottle.courseKnowledgeIds = arrCourseKnowledgeIds.join('|');
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000916)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapKnowlegeNames(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapQuestionTypeId.name;
  try {
    const cc_CourseKnowledgesStore = usecc_CourseKnowledgesStore();
    if (IsNullOrEmpty(objGameBottle.knowledgeNames) == true) {
      const vQuestionnaireSimQuestionId = objGameBottle.questionId;
      let arrcc_KnowledgesExamLibRela = await cc_KnowledgesExamLibRela_GetObjLstCache(
        CourseId_Session.value,
      );
      arrcc_KnowledgesExamLibRela = arrcc_KnowledgesExamLibRela.filter(
        (x) => x.questionId == vQuestionnaireSimQuestionId,
      );
      const arrCourseKnowledgeIds = arrcc_KnowledgesExamLibRela.map((x) => x.courseKnowledgeId);
      const arrCourseKnowledgeNames: string[] = [];
      for (const x of arrCourseKnowledgeIds) {
        const strknowledgeName = await cc_CourseKnowledgesStore.getKnowledgeName(x);
        arrCourseKnowledgeNames.push(strknowledgeName);
      }
      objGameBottle.knowledgeNames = arrCourseKnowledgeNames.join('|');
      // console.log('knowledgeNames:', objGameBottle.knowledgeNames);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000916)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapUserName_Throw(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapUserName_Throw.name;
  try {
    if (IsNullOrEmpty(objGameBottle.userName_Throw) == true) {
      const vQxUsersSimUserId = objGameBottle.userId_Throw;
      const vQxUsersSimUserName = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_UserName,
        vQxUsersSimUserId,
      );
      objGameBottle.userName_Throw = vQxUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000953)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapUserName_PickUp(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapUserName_PickUp.name;
  try {
    if (IsNullOrEmpty(objGameBottle.userName_PickUp) == true) {
      const vQxUsersSimUserId = objGameBottle.userId_PickUp;
      const vQxUsersSimUserName = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_UserName,
        vQxUsersSimUserId,
      );
      objGameBottle.userName_PickUp = vQxUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000954)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GameBottleEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGameBottleENEx.con_QuestionTypeName:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return a.questionTypeName.localeCompare(b.questionTypeName);
        };
      case clsGameBottleENEx.con_QuestionName:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      case clsGameBottleENEx.con_QuestionTypeId:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return a.questionTypeId.localeCompare(b.questionTypeId);
        };
      case clsGameBottleENEx.con_UserName_Throw:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return a.userName_Throw.localeCompare(b.userName_Throw);
        };
      case clsGameBottleENEx.con_UserName_PickUp:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return a.userName_PickUp.localeCompare(b.userName_PickUp);
        };
      default:
        return GameBottle_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGameBottleENEx.con_QuestionTypeName:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return b.questionTypeName.localeCompare(a.questionTypeName);
        };
      case clsGameBottleENEx.con_QuestionName:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      case clsGameBottleENEx.con_QuestionTypeId:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return b.questionTypeId.localeCompare(a.questionTypeId);
        };
      case clsGameBottleENEx.con_UserName_Throw:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return b.userName_Throw.localeCompare(a.userName_Throw);
        };
      case clsGameBottleENEx.con_UserName_PickUp:
        return (a: clsGameBottleENEx, b: clsGameBottleENEx) => {
          return b.userName_PickUp.localeCompare(a.userName_PickUp);
        };
      default:
        return GameBottle_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GameBottleEx_FuncMapByFldName(
  strFldName: string,
  objGameBottleEx: clsGameBottleENEx,
) {
  const strThisFuncName = GameBottleEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGameBottleEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGameBottleENEx.con_QuestionTypeName:
      return GameBottleEx_FuncMapQuestionTypeName(objGameBottleEx);
    case clsGameBottleENEx.con_QuestionName:
      return GameBottleEx_FuncMapQuestionName(objGameBottleEx);
    case clsGameBottleENEx.con_QuestionTypeId:
      return GameBottleEx_FuncMapQuestionTypeId(objGameBottleEx);
    case clsGameBottleENEx.con_UserName_Throw:
      return GameBottleEx_FuncMapUserName_Throw(objGameBottleEx);
    case clsGameBottleENEx.con_UserName_PickUp:
      return GameBottleEx_FuncMapUserName_PickUp(objGameBottleEx);
    case clsGameBottleENEx.con_DifficultyLevelName:
      return GameBottleEx_FuncMapDifficultyLevelName(objGameBottleEx);

    case clsGameBottleENEx.con_KnowledgeNames:
      return GameBottleEx_FuncMapKnowlegeNames(objGameBottleEx);
    case clsGameBottleENEx.con_IsMasterStr:
      return GameBottleEx_FuncMapIsMasterStr(objGameBottleEx);

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
 * 日期:2024-11-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GameBottleEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsGameBottleENEx.con_QuestionTypeName:
      return (obj: clsGameBottleENEx) => {
        return obj.questionTypeName === value;
      };
    case clsGameBottleENEx.con_QuestionName:
      return (obj: clsGameBottleENEx) => {
        return obj.questionName === value;
      };
    case clsGameBottleENEx.con_QuestionTypeId:
      return (obj: clsGameBottleENEx) => {
        return obj.questionTypeId === value;
      };
    case clsGameBottleENEx.con_UserName_Throw:
      return (obj: clsGameBottleENEx) => {
        return obj.userName_Throw === value;
      };
    case clsGameBottleENEx.con_UserName_PickUp:
      return (obj: clsGameBottleENEx) => {
        return obj.userName_PickUp === value;
      };
    default:
      return GameBottle_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapKeyQuestionTypeName(
  objGameBottle: clsGameBottleENEx,
): Promise<Array<number>> {
  const strThisFuncName = GameBottleEx_FuncMapKeyQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objGameBottle.questionTypeName) == true) return [];
    const QuestionTypeQuestionTypeName = objGameBottle.questionTypeName;
    const arrQuestionTypeId = await QuestionType_funcKey(
      clsQuestionTypeEN.con_QuestionTypeName,
      QuestionTypeQuestionTypeName,
      enumComparisonOp.Like_03,
    );
    const strQuestionTypeIdLst = arrQuestionTypeId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionTypeId,
      strQuestionTypeIdLst,
      clsPubLocalStorage.courseId,
      enumComparisonOp.In_04,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000919)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
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
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapKeyQuestionName(
  objGameBottle: clsGameBottleENEx,
): Promise<Array<number>> {
  const strThisFuncName = GameBottleEx_FuncMapKeyQuestionName.name;
  try {
    if (IsNullOrEmpty(objGameBottle.questionName) == true) return [];
    const vQuestionnaireSimQuestionName = objGameBottle.questionName;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionName,
      vQuestionnaireSimQuestionName,
      clsPubLocalStorage.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000898)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
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
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapKeyQuestionTypeId(
  objGameBottle: clsGameBottleENEx,
): Promise<Array<number>> {
  const strThisFuncName = GameBottleEx_FuncMapKeyQuestionTypeId.name;
  try {
    if (IsNullOrEmpty(objGameBottle.questionTypeId) == true) return [];
    const vQuestionnaireSimQuestionTypeId = objGameBottle.questionTypeId;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionTypeId,
      vQuestionnaireSimQuestionTypeId,
      clsPubLocalStorage.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000922)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGameBottleS:源对象
 **/
export async function GameBottleEx_FuncMapDifficultyLevelName(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapDifficultyLevelName.name;
  try {
    const questionnaireStore = useQuestionnaireStore();
    if (IsNullOrEmpty(objGameBottle.difficultyLevelName) == true) {
      const vQuestionnaireSimQuestionId = objGameBottle.questionId;
      const vQuestionnaireSimDifficultyLevelId = await questionnaireStore.getDifficultyLevelId(
        vQuestionnaireSimQuestionId,
      );
      const geDifficultyLevelDifficultyLevelId = vQuestionnaireSimDifficultyLevelId;
      const geDifficultyLevelDifficultyLevelName = await ge_DifficultyLevel_func(
        clsge_DifficultyLevelEN.con_DifficultyLevelId,
        clsge_DifficultyLevelEN.con_DifficultyLevelName,
        geDifficultyLevelDifficultyLevelId,
      );
      objGameBottle.difficultyLevelName = geDifficultyLevelDifficultyLevelName;
      // console.log('geDifficultyLevelDifficultyLevelName:', geDifficultyLevelDifficultyLevelName);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000925)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function GameBottleEx_FuncMapIsMasterStr(objGameBottle: clsGameBottleENEx) {
  const strThisFuncName = GameBottleEx_FuncMapDifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objGameBottle.isMasterStr) == true) {
      if (objGameBottle.isMaster == true) {
        objGameBottle.isMasterStr = '智慧瓶';
      } else {
        objGameBottle.isMasterStr = '求知瓶';
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000925)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
export async function GameBottleEx_throwBottle(
  lngQuestionId: number,
  isMaster: boolean,
): Promise<string> {
  //扔瓶子
  // objEdit_GameBottle.isShowMsg = false;
  try {
    const objGameBottleEN = await GameBottleEx_GetEditDataGameBottleObj(lngQuestionId, isMaster);
    const returnKeyId_GameBottle = await GameBottle_AddNewObjSave(objGameBottleEN);

    if (returnKeyId_GameBottle.success == false) {
      const strInfo = '扔瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
      console.log(strInfo);
      alert(strInfo);
      return '';
    }
    return returnKeyId_GameBottle.keyword;
  } catch (e) {
    const strInfo = '获取扔瓶子数据出错！(In Questionnaire_Edit.btnSubmit_Click)';
    console.log(strInfo);
    alert(strInfo);
    return '';
  }
}

export async function GameBottleEx_PickBottle(
  bottleId: number,
  UserId_PickUp: string,
): Promise<boolean> {
  //扔瓶子
  // objEdit_GameBottle.isShowMsg = false;
  try {
    const objGameBottleEN = await GameBottle_GetObjByBottleIdAsync(bottleId);
    if (objGameBottleEN == null) {
      const strInfo = '获取扔瓶子数据出错！(In Questionnaire_Edit.btnSubmit_Click)';
      console.log(strInfo);
      alert(strInfo);
      return false;
    }

    // objGameBottleEN.SetUserId_PickUp(UserId_PickUp);
    // objGameBottleEN.SetPickUpTime(clsDateTime.getTodayDateTimeStr(0)); // 捡的时间
    objGameBottleEN.SetBottleStateId(enumBottleState.PickUpBottle_02); // 操作方式Id
    objGameBottleEN.SetUpdUser(UserId_PickUp); // 修改人
    objGameBottleEN.SetMemo('学生通过捡一个添加'); // 备注
    objGameBottleEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期

    const returnKeyId_GameBottle = await GameBottle_UpdateObjSave(objGameBottleEN);

    if (returnKeyId_GameBottle == false) {
      const strInfo = '捡瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
      console.log(strInfo);
      alert(strInfo);
      return false;
    }
    return returnKeyId_GameBottle;
  } catch (e) {
    const strInfo = '获取扔瓶子数据出错！(In Questionnaire_Edit.btnSubmit_Click)';
    console.log(strInfo);
    alert(strInfo);
    return false;
  }
}

export async function GameBottleEx_FinishAnswer(
  bottleId: number,
  UserId_PickUp: string,
): Promise<boolean> {
  //扔瓶子
  // objEdit_GameBottle.isShowMsg = false;
  try {
    const objGameBottleEN = await GameBottle_GetObjByBottleIdAsync(bottleId);
    if (objGameBottleEN == null) {
      const strInfo = '获取扔瓶子数据出错！(In Questionnaire_Edit.btnSubmit_Click)';
      console.log(strInfo);
      alert(strInfo);
      return false;
    }

    // objGameBottleEN.SetUserId_PickUp(UserId_PickUp);
    // objGameBottleEN.SetUserId_PickUp(UserId_PickUp);
    // objGameBottleEN.SetPickUpTime(clsDateTime.getTodayDateTimeStr(0)); // 捡的时间
    // objGameBottleEN.SetFinishedTime(clsDateTime.getTodayDateTimeStr(0)); // 捡的时间
    objGameBottleEN.SetBottleStateId(enumBottleState.Finished_04); // 操作方式Id
    objGameBottleEN.SetUpdUser(UserId_PickUp); // 修改人
    objGameBottleEN.SetMemo('学生通过捡一个完成'); // 备注
    objGameBottleEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期

    const returnKeyId_GameBottle = await GameBottle_UpdateObjSave(objGameBottleEN);

    if (returnKeyId_GameBottle == false) {
      const strInfo = '捡瓶子不成功！(In Questionnaire_Edit.btnSubmit_Click)';
      console.log(strInfo);
      alert(strInfo);
      return false;
    }

    return returnKeyId_GameBottle;
  } catch (e) {
    const strInfo = '获取扔瓶子数据出错！(In Questionnaire_Edit.btnSubmit_Click)';
    console.log(strInfo);
    alert(strInfo);
    return false;
  }
}

/** 函数功能:把界面上的属性数据传到类对象中
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
 * @param pobjGameBottleEN">数据传输的目的类对象</param>
 **/
async function GameBottleEx_GetEditDataGameBottleObj(
  questionId: number,
  isMaster: boolean,
): Promise<clsGameBottleEN> {
  const userStore = useUserStore();
  const pobjGameBottleEN = new clsGameBottleEN();
  pobjGameBottleEN.SetQuestionId(questionId); // 题目Id
  pobjGameBottleEN.SetUserId_Throw(userStore.userId); // 用户ID
  pobjGameBottleEN.SetThrowTime(clsDateTime.getTodayDateTimeStr(0)); // 扔的时间
  // if (isMaster == true) {
  //   pobjGameBottleEN.SetIsMaster(true); // 是否是智慧瓶
  // } else {
  //   pobjGameBottleEN.SetIsMaster(false); // 扔的时间
  // }
  pobjGameBottleEN.SetBottleStateId(enumBottleState.ThrowBottle_01); // 操作方式Id
  pobjGameBottleEN.SetUpdUser(userStore.getUserId); // 修改人
  pobjGameBottleEN.SetMemo('学生通过扔一个添加'); // 备注
  pobjGameBottleEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  return pobjGameBottleEN;
}
