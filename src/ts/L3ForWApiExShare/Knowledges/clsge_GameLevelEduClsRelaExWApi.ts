/**
 * 类名:clsge_GameLevelEduClsRelaExWApi
 * 表名:ge_GameLevelEduClsRela(01120938)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:09:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 游戏关卡教学班关系(ge_GameLevelEduClsRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_GameLevelEduClsRelaENEx } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEduClsRelaENEx';
import {
  ge_GameLevelEduClsRela_GetObjLstByPagerAsync,
  ge_GameLevelEduClsRela_SortFunByKey,
  ge_GameLevelEduClsRela_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelEduClsRelaWApi';
import {
  ge_GameLevel_func,
  ge_GameLevel_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import {
  QuestionType_func,
  QuestionType_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import {
  ge_DifficultyLevel_func,
  ge_DifficultyLevel_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import {
  ge_LevelModeType_func,
  ge_LevelModeType_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
import { clsge_GameLevelEduClsRelaEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEduClsRelaEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

export const ge_GameLevelEduClsRelaExController = 'ge_GameLevelEduClsRelaExApi';
export const ge_GameLevelEduClsRelaEx_ConstructorName = 'ge_GameLevelEduClsRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_GameLevelEduClsRelaEx_GetWebApiUrl(
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
 * @param objge_GameLevelEduClsRelaENS:源对象
 * @returns 目标对象=>clsge_GameLevelEduClsRelaEN:objge_GameLevelEduClsRelaENT
 **/
export function ge_GameLevelEduClsRelaEx_CopyToEx(
  objge_GameLevelEduClsRelaENS: clsge_GameLevelEduClsRelaEN,
): clsge_GameLevelEduClsRelaENEx {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_CopyToEx.name;
  const objge_GameLevelEduClsRelaENT = new clsge_GameLevelEduClsRelaENEx();
  try {
    ObjectAssign(objge_GameLevelEduClsRelaENT, objge_GameLevelEduClsRelaENS);
    return objge_GameLevelEduClsRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_GameLevelEduClsRelaENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_GameLevelEduClsRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_GameLevelEduClsRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_GameLevelEduClsRelaObjLst = await ge_GameLevelEduClsRela_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrge_GameLevelEduClsRelaExObjLst = arrge_GameLevelEduClsRelaObjLst.map(
    ge_GameLevelEduClsRelaEx_CopyToEx,
  );
  if (arrge_GameLevelEduClsRelaExObjLst.length == 0) return arrge_GameLevelEduClsRelaExObjLst;
  let arrge_GameLevelEduClsRelaSel: Array<clsge_GameLevelEduClsRelaENEx> =
    arrge_GameLevelEduClsRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_GameLevelEduClsRelaSel = arrge_GameLevelEduClsRelaSel.sort(
        ge_GameLevelEduClsRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_GameLevelEduClsRelaSel = arrge_GameLevelEduClsRelaSel.sort(objPagerPara.sortFun);
    }
    return arrge_GameLevelEduClsRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_GameLevelEduClsRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_GameLevelEduClsRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapQuestionTypeName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.questionTypeName) == true) {
      const geGameLevelGameLevelId = objge_GameLevelEduClsRela.gameLevelId;
      const geGameLevelQuestionTypeId = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_QuestionTypeId,
        geGameLevelGameLevelId,
        clsPubLocalStorage.courseId,
      );
      const QuestionTypeQuestionTypeId = geGameLevelQuestionTypeId;
      const QuestionTypeQuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionTypeQuestionTypeId,
      );
      objge_GameLevelEduClsRela.questionTypeName = QuestionTypeQuestionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000913)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapEduClsName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.eduClsName) == true) {
      const CurrEduClsIdCurrEduCls = objge_GameLevelEduClsRela.idCurrEduCls;
      const CurrEduClsEduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsIdCurrEduCls,
        clsPubLocalStorage.courseId,
      );
      objge_GameLevelEduClsRela.eduClsName = CurrEduClsEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapGameLevelName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.gameLevelName) == true) {
      const geGameLevelGameLevelId = objge_GameLevelEduClsRela.gameLevelId;
      const geGameLevelGameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        geGameLevelGameLevelId,
        clsPubLocalStorage.courseId,
      );
      objge_GameLevelEduClsRela.gameLevelName = geGameLevelGameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000914)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapDifficultyLevelName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapDifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.difficultyLevelName) == true) {
      const geGameLevelGameLevelId = objge_GameLevelEduClsRela.gameLevelId;
      const geGameLevelDifficultyLevelId = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_DifficultyLevelId,
        geGameLevelGameLevelId,
        clsPubLocalStorage.courseId,
      );
      const geDifficultyLevelDifficultyLevelId = geGameLevelDifficultyLevelId;
      const geDifficultyLevelDifficultyLevelName = await ge_DifficultyLevel_func(
        clsge_DifficultyLevelEN.con_DifficultyLevelId,
        clsge_DifficultyLevelEN.con_DifficultyLevelName,
        geDifficultyLevelDifficultyLevelId,
      );
      objge_GameLevelEduClsRela.difficultyLevelName = geDifficultyLevelDifficultyLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000925)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapLevelModeTypeName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapLevelModeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.levelModeTypeName) == true) {
      const geGameLevelGameLevelId = objge_GameLevelEduClsRela.gameLevelId;
      const geGameLevelGameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        geGameLevelGameLevelId,
        clsPubLocalStorage.courseId,
      );
      const geGameLevelLevelModeTypeId = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelName,
        clsge_GameLevelEN.con_LevelModeTypeId,
        geGameLevelGameLevelName,
        clsPubLocalStorage.courseId,
      );
      const geLevelModeTypeLevelModeTypeId = geGameLevelLevelModeTypeId;
      const geLevelModeTypeLevelModeTypeName = await ge_LevelModeType_func(
        clsge_LevelModeTypeEN.con_LevelModeTypeId,
        clsge_LevelModeTypeEN.con_LevelModeTypeName,
        geLevelModeTypeLevelModeTypeId,
      );
      objge_GameLevelEduClsRela.levelModeTypeName = geLevelModeTypeLevelModeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000927)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
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
export function ge_GameLevelEduClsRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_GameLevelEduClsRelaENEx.con_ChapterNameName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return a.chapterNameName.localeCompare(b.chapterNameName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_QuestionTypeName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return a.questionTypeName.localeCompare(b.questionTypeName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_LevelModeTypeName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return a.levelModeTypeName.localeCompare(b.levelModeTypeName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_DifficultyLevelName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return a.difficultyLevelName.localeCompare(b.difficultyLevelName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_EduClsName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_CourseName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_GameLevelName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return a.gameLevelName.localeCompare(b.gameLevelName);
        };
      default:
        return ge_GameLevelEduClsRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_GameLevelEduClsRelaENEx.con_ChapterNameName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return b.chapterNameName.localeCompare(a.chapterNameName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_QuestionTypeName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return b.questionTypeName.localeCompare(a.questionTypeName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_LevelModeTypeName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return b.levelModeTypeName.localeCompare(a.levelModeTypeName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_DifficultyLevelName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return b.difficultyLevelName.localeCompare(a.difficultyLevelName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_EduClsName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_CourseName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_GameLevelEduClsRelaENEx.con_GameLevelName:
        return (a: clsge_GameLevelEduClsRelaENEx, b: clsge_GameLevelEduClsRelaENEx) => {
          return b.gameLevelName.localeCompare(a.gameLevelName);
        };
      default:
        return ge_GameLevelEduClsRela_SortFunByKey(strKey, AscOrDesc);
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
export function ge_GameLevelEduClsRelaEx_FuncMapByFldName(
  strFldName: string,
  objge_GameLevelEduClsRelaEx: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_GameLevelEduClsRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_GameLevelEduClsRelaENEx.con_QuestionTypeName:
      return ge_GameLevelEduClsRelaEx_FuncMapQuestionTypeName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_LevelModeTypeName:
      return ge_GameLevelEduClsRelaEx_FuncMapLevelModeTypeName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_DifficultyLevelName:
      return ge_GameLevelEduClsRelaEx_FuncMapDifficultyLevelName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_EduClsName:
      return ge_GameLevelEduClsRelaEx_FuncMapEduClsName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_GameLevelName:
      return ge_GameLevelEduClsRelaEx_FuncMapGameLevelName(objge_GameLevelEduClsRelaEx);
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
export async function ge_GameLevelEduClsRelaEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_GameLevelEduClsRelaENEx.con_ChapterNameName:
      return (obj: clsge_GameLevelEduClsRelaENEx) => {
        return obj.chapterNameName === value;
      };
    case clsge_GameLevelEduClsRelaENEx.con_QuestionTypeName:
      return (obj: clsge_GameLevelEduClsRelaENEx) => {
        return obj.questionTypeName === value;
      };
    case clsge_GameLevelEduClsRelaENEx.con_LevelModeTypeName:
      return (obj: clsge_GameLevelEduClsRelaENEx) => {
        return obj.levelModeTypeName === value;
      };
    case clsge_GameLevelEduClsRelaENEx.con_DifficultyLevelName:
      return (obj: clsge_GameLevelEduClsRelaENEx) => {
        return obj.difficultyLevelName === value;
      };
    case clsge_GameLevelEduClsRelaENEx.con_EduClsName:
      return (obj: clsge_GameLevelEduClsRelaENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_GameLevelEduClsRelaENEx.con_CourseName:
      return (obj: clsge_GameLevelEduClsRelaENEx) => {
        return obj.courseName === value;
      };
    case clsge_GameLevelEduClsRelaENEx.con_GameLevelName:
      return (obj: clsge_GameLevelEduClsRelaENEx) => {
        return obj.gameLevelName === value;
      };
    default:
      return ge_GameLevelEduClsRela_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapKeyQuestionTypeName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapKeyQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.questionTypeName) == true) return [];
    const QuestionTypeQuestionTypeName = objge_GameLevelEduClsRela.questionTypeName;
    const arrQuestionTypeId = await QuestionType_funcKey(
      clsQuestionTypeEN.con_QuestionTypeName,
      QuestionTypeQuestionTypeName,
      enumComparisonOp.Like_03,
    );
    const strQuestionTypeIdLst = arrQuestionTypeId;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_QuestionTypeId,
      strQuestionTypeIdLst,
      clsPubLocalStorage.courseId,
      enumComparisonOp.In_04,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000919)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
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
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapKeyEduClsName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.eduClsName) == true) return [];
    const CurrEduClsEduClsName = objge_GameLevelEduClsRela.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_EduClsName,
      CurrEduClsEduClsName,
      clsPubLocalStorage.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
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
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapKeyGameLevelName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapKeyGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.gameLevelName) == true) return [];
    const geGameLevelGameLevelName = objge_GameLevelEduClsRela.gameLevelName;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_GameLevelName,
      geGameLevelGameLevelName,
      clsPubLocalStorage.courseId,
      enumComparisonOp.Like_03,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000920)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
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
 * @param objge_GameLevelEduClsRelaS:源对象
 **/
export async function ge_GameLevelEduClsRelaEx_FuncMapKeyDifficultyLevelName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMapKeyDifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.difficultyLevelName) == true) return [];
    const geDifficultyLevelDifficultyLevelName = objge_GameLevelEduClsRela.difficultyLevelName;
    const arrDifficultyLevelId = await ge_DifficultyLevel_funcKey(
      clsge_DifficultyLevelEN.con_DifficultyLevelName,
      geDifficultyLevelDifficultyLevelName,
      enumComparisonOp.Like_03,
    );
    const strDifficultyLevelIdLst = arrDifficultyLevelId;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_DifficultyLevelId,
      strDifficultyLevelIdLst,
      clsPubLocalStorage.courseId,
      enumComparisonOp.In_04,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000928)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEduClsRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
