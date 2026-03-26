/**
 * 游戏关卡教学班关系(ge_GameLevelEduClsRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月23日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clscc_CourseEN } from 'share-stu-study-base-lib';
import { clsCurrEduClsEN } from 'share-stu-study-base-lib';

import { clsge_GameLevelEduClsRelaEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEduClsRelaEN';
import { clsge_GameLevelEduClsRelaENEx } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEduClsRelaENEx';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';

import { cc_Course_func } from 'share-stu-study-base-lib';

import { ge_DifficultyLevel_func } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import {
  ge_GameLevelEduClsRela_FilterFunByKey,
  ge_GameLevelEduClsRela_GetObjLstAsync,
  ge_GameLevelEduClsRela_SortFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelEduClsRelaWApi';
import { ge_GameLevel_func } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { ge_LevelModeType_func } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { QuestionType_func } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { vCurrEduCls_Sim_func } from 'share-stu-study-base-lib';
export const ge_GameLevelEduClsRelaEx_Controller = 'ge_GameLevelEduClsRelaExApi';
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
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_GameLevelEduClsRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_GameLevelEduClsRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_GameLevelEduClsRelaObjLst = await ge_GameLevelEduClsRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_GameLevelEduClsRelaExObjLst = arrge_GameLevelEduClsRelaObjLst.map(
    ge_GameLevelEduClsRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_GameLevelEduClsRelaExObjLst) {
      const conFuncMap = await ge_GameLevelEduClsRelaEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrge_GameLevelEduClsRelaExObjLst.length == 0) return arrge_GameLevelEduClsRelaExObjLst;
  let arrge_GameLevelEduClsRela_Sel: Array<clsge_GameLevelEduClsRelaENEx> =
    arrge_GameLevelEduClsRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_GameLevelEduClsRela_Sel = arrge_GameLevelEduClsRela_Sel.sort(
        ge_GameLevelEduClsRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_GameLevelEduClsRela_Sel = arrge_GameLevelEduClsRela_Sel.sort(objPagerPara.sortFun);
    }
    arrge_GameLevelEduClsRela_Sel = arrge_GameLevelEduClsRela_Sel.slice(intStart, intEnd);
    return arrge_GameLevelEduClsRela_Sel;
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
export async function ge_GameLevelEduClsRelaEx_FuncMap_QuestionTypeName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMap_QuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.questionTypeName) == true) {
      const ge_GameLevel_GameLevelId = objge_GameLevelEduClsRela.gameLevelId;
      const ge_GameLevel_QuestionTypeId = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_QuestionTypeId,
        ge_GameLevel_GameLevelId,
        clsPubLocalStorage.courseId,
      );
      const QuestionType_QuestionTypeId = ge_GameLevel_QuestionTypeId;
      const QuestionType_QuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionType_QuestionTypeId,
      );
      objge_GameLevelEduClsRela.questionTypeName = QuestionType_QuestionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000219)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEduClsRelaEx_FuncMap_CourseName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.courseName) == true) {
      const CurrEduCls_id_CurrEduCls = objge_GameLevelEduClsRela.idCurrEduCls;
      const CurrEduCls_CourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduCls_id_CurrEduCls,
        clsPubLocalStorage.courseId,
      );
      const cc_Course_CourseId = CurrEduCls_CourseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objge_GameLevelEduClsRela.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEduClsRelaEx_FuncMap_EduClsName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objge_GameLevelEduClsRela.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        clsPubLocalStorage.courseId,
      );
      objge_GameLevelEduClsRela.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEduClsRelaEx_FuncMap_GameLevelName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMap_GameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.gameLevelName) == true) {
      const ge_GameLevel_GameLevelId = objge_GameLevelEduClsRela.gameLevelId;
      const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        ge_GameLevel_GameLevelId,
        clsPubLocalStorage.courseId,
      );
      objge_GameLevelEduClsRela.gameLevelName = ge_GameLevel_GameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000182)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEduClsRelaEx_FuncMap_DifficultyLevelName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMap_DifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.difficultyLevelName) == true) {
      const ge_GameLevel_GameLevelId = objge_GameLevelEduClsRela.gameLevelId;
      const ge_GameLevel_DifficultyLevelId = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_DifficultyLevelId,
        ge_GameLevel_GameLevelId,
        clsPubLocalStorage.courseId,
      );
      const ge_DifficultyLevel_DifficultyLevelId = ge_GameLevel_DifficultyLevelId;
      const ge_DifficultyLevel_DifficultyLevelName = await ge_DifficultyLevel_func(
        clsge_DifficultyLevelEN.con_DifficultyLevelId,
        clsge_DifficultyLevelEN.con_DifficultyLevelName,
        ge_DifficultyLevel_DifficultyLevelId,
      );
      objge_GameLevelEduClsRela.difficultyLevelName = ge_DifficultyLevel_DifficultyLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000218)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEduClsRelaEx_FuncMap_LevelModeTypeName(
  objge_GameLevelEduClsRela: clsge_GameLevelEduClsRelaENEx,
) {
  const strThisFuncName = ge_GameLevelEduClsRelaEx_FuncMap_LevelModeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevelEduClsRela.levelModeTypeName) == true) {
      const ge_GameLevel_GameLevelId = objge_GameLevelEduClsRela.gameLevelId;
      const ge_GameLevel_GameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        ge_GameLevel_GameLevelId,
        clsPubLocalStorage.courseId,
      );
      const ge_GameLevel_LevelModeTypeId = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelName,
        clsge_GameLevelEN.con_LevelModeTypeId,
        ge_GameLevel_GameLevelName,
        clsPubLocalStorage.courseId,
      );
      const ge_LevelModeType_LevelModeTypeId = ge_GameLevel_LevelModeTypeId;
      const ge_LevelModeType_LevelModeTypeName = await ge_LevelModeType_func(
        clsge_LevelModeTypeEN.con_LevelModeTypeId,
        clsge_LevelModeTypeEN.con_LevelModeTypeName,
        ge_LevelModeType_LevelModeTypeId,
      );
      objge_GameLevelEduClsRela.levelModeTypeName = ge_LevelModeType_LevelModeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000220)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
 * 日期:2022-11-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_GameLevelEduClsRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
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
 * 日期:2022-11-23
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
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_GameLevelEduClsRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_GameLevelEduClsRelaENEx.con_QuestionTypeName:
      return ge_GameLevelEduClsRelaEx_FuncMap_QuestionTypeName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_LevelModeTypeName:
      return ge_GameLevelEduClsRelaEx_FuncMap_LevelModeTypeName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_DifficultyLevelName:
      return ge_GameLevelEduClsRelaEx_FuncMap_DifficultyLevelName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_EduClsName:
      return ge_GameLevelEduClsRelaEx_FuncMap_EduClsName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_CourseName:
      return ge_GameLevelEduClsRelaEx_FuncMap_CourseName(objge_GameLevelEduClsRelaEx);
    case clsge_GameLevelEduClsRelaENEx.con_GameLevelName:
      return ge_GameLevelEduClsRelaEx_FuncMap_GameLevelName(objge_GameLevelEduClsRelaEx);
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
 * 日期:2022-11-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_GameLevelEduClsRelaEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
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
