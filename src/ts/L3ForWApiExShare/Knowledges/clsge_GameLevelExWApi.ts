/**
 * 类名:clsge_GameLevelExWApi
 * 表名:ge_GameLevel(01120904)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:06:33
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
 * 游戏关卡表(ge_GameLevel)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ge_GameLevel_GetObjLstCache,
  ge_GameLevel_GetObjLstByPagerAsync,
  ge_GameLevel_SortFunByKey,
  ge_GameLevel_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsge_GameLevelENEx } from '@/ts/L0Entity/Knowledges/clsge_GameLevelENEx';
import {
  ge_DifficultyLevel_func,
  ge_DifficultyLevel_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import {
  QuestionType_func,
  QuestionType_funcKey,
} from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import {
  ge_LevelModeType_func,
  ge_LevelModeType_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';

import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';

export const ge_GameLevelExController = 'ge_GameLevelExApi';
export const ge_GameLevelEx_ConstructorName = 'ge_GameLevelEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_GameLevelEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_GameLevelENS:源对象
 * @returns 目标对象=>clsge_GameLevelEN:objge_GameLevelENT
 **/
export function ge_GameLevelEx_CopyToEx(
  objge_GameLevelENS: clsge_GameLevelEN,
): clsge_GameLevelENEx {
  const strThisFuncName = ge_GameLevelEx_CopyToEx.name;
  const objge_GameLevelENT = new clsge_GameLevelENEx();
  try {
    ObjectAssign(objge_GameLevelENT, objge_GameLevelENS);
    return objge_GameLevelENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_GameLevelENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_GameLevelEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsge_GameLevelENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrge_GameLevelObjLst = await ge_GameLevel_GetObjLstCache(strCourseId);
  const arrge_GameLevelExObjLst = arrge_GameLevelObjLst.map(ge_GameLevelEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsge_GameLevelEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrge_GameLevelExObjLst) {
      await ge_GameLevelEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_GameLevelExObjLst.length == 0) return arrge_GameLevelExObjLst;
  let arrge_GameLevelSel: Array<clsge_GameLevelENEx> = arrge_GameLevelExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objge_GameLevelCond = new clsge_GameLevelENEx();
  ObjectAssign(objge_GameLevelCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsge_GameLevelWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_GameLevelSel = arrge_GameLevelSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_GameLevelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrge_GameLevelSel = arrge_GameLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_GameLevelSel.length == 0) return arrge_GameLevelSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_GameLevelSel = arrge_GameLevelSel.sort(
        ge_GameLevelEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_GameLevelSel = arrge_GameLevelSel.sort(objPagerPara.sortFun);
    }
    arrge_GameLevelSel = arrge_GameLevelSel.slice(intStart, intEnd);
    return arrge_GameLevelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_GameLevelENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_GameLevelEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_GameLevelENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_GameLevelObjLst = await ge_GameLevel_GetObjLstByPagerAsync(objPagerPara);
  const arrge_GameLevelExObjLst = arrge_GameLevelObjLst.map(ge_GameLevelEx_CopyToEx);
  if (arrge_GameLevelExObjLst.length == 0) return arrge_GameLevelExObjLst;
  let arrge_GameLevelSel: Array<clsge_GameLevelENEx> = arrge_GameLevelExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_GameLevelSel = arrge_GameLevelSel.sort(
        ge_GameLevelEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_GameLevelSel = arrge_GameLevelSel.sort(objPagerPara.sortFun);
    }
    return arrge_GameLevelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_GameLevelENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapDifficultyLevelName(
  objge_GameLevel: clsge_GameLevelENEx,
) {
  const strThisFuncName = ge_GameLevelEx_FuncMapDifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.difficultyLevelName) == true) {
      const geDifficultyLevelDifficultyLevelId = objge_GameLevel.difficultyLevelId;
      const geDifficultyLevelDifficultyLevelName = await ge_DifficultyLevel_func(
        clsge_DifficultyLevelEN.con_DifficultyLevelId,
        clsge_DifficultyLevelEN.con_DifficultyLevelName,
        geDifficultyLevelDifficultyLevelId,
      );
      objge_GameLevel.difficultyLevelName = geDifficultyLevelDifficultyLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000925)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapQuestionTypeName(objge_GameLevel: clsge_GameLevelENEx) {
  const strThisFuncName = ge_GameLevelEx_FuncMapQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.questionTypeName) == true) {
      const QuestionTypeQuestionTypeId = objge_GameLevel.questionTypeId;
      const QuestionTypeQuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionTypeQuestionTypeId,
      );
      objge_GameLevel.questionTypeName = QuestionTypeQuestionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000913)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapLevelModeTypeName(
  objge_GameLevel: clsge_GameLevelENEx,
) {
  const strThisFuncName = ge_GameLevelEx_FuncMapLevelModeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.levelModeTypeName) == true) {
      const geLevelModeTypeLevelModeTypeId = objge_GameLevel.levelModeTypeId;
      const geLevelModeTypeLevelModeTypeName = await ge_LevelModeType_func(
        clsge_LevelModeTypeEN.con_LevelModeTypeId,
        clsge_LevelModeTypeEN.con_LevelModeTypeName,
        geLevelModeTypeLevelModeTypeId,
      );
      objge_GameLevel.levelModeTypeName = geLevelModeTypeLevelModeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000927)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapEduClsName(objge_GameLevel: clsge_GameLevelENEx) {
  const strThisFuncName = ge_GameLevelEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.eduClsName) == true) {
      const CurrEduClsIdCurrEduCls = objge_GameLevel.idCurrEduCls;
      const CurrEduClsEduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsIdCurrEduCls,
        objge_GameLevel.courseId,
      );
      objge_GameLevel.eduClsName = CurrEduClsEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapCourseName(objge_GameLevel: clsge_GameLevelENEx) {
  const strThisFuncName = ge_GameLevelEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.courseName) == true) {
      const CurrEduClsIdCurrEduCls = objge_GameLevel.idCurrEduCls;
      const CurrEduClsCourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduClsIdCurrEduCls,
        objge_GameLevel.courseId,
      );
      const vccCourseSimCourseId = CurrEduClsCourseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objge_GameLevel.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
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
export function ge_GameLevelEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_GameLevelENEx.con_ChapterNameName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return a.chapterNameName.localeCompare(b.chapterNameName);
        };
      case clsge_GameLevelENEx.con_ChapterNamesEx:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return a.chapterNamesEx.localeCompare(b.chapterNamesEx);
        };
      case clsge_GameLevelENEx.con_QuestionTypeName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return a.questionTypeName.localeCompare(b.questionTypeName);
        };
      case clsge_GameLevelENEx.con_LevelModeTypeName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return a.levelModeTypeName.localeCompare(b.levelModeTypeName);
        };
      case clsge_GameLevelENEx.con_DifficultyLevelName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return a.difficultyLevelName.localeCompare(b.difficultyLevelName);
        };
      case clsge_GameLevelENEx.con_EduClsName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_GameLevelENEx.con_CourseName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      default:
        return ge_GameLevel_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_GameLevelENEx.con_ChapterNameName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return b.chapterNameName.localeCompare(a.chapterNameName);
        };
      case clsge_GameLevelENEx.con_ChapterNamesEx:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return b.chapterNamesEx.localeCompare(a.chapterNamesEx);
        };
      case clsge_GameLevelENEx.con_QuestionTypeName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return b.questionTypeName.localeCompare(a.questionTypeName);
        };
      case clsge_GameLevelENEx.con_LevelModeTypeName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return b.levelModeTypeName.localeCompare(a.levelModeTypeName);
        };
      case clsge_GameLevelENEx.con_DifficultyLevelName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return b.difficultyLevelName.localeCompare(a.difficultyLevelName);
        };
      case clsge_GameLevelENEx.con_EduClsName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_GameLevelENEx.con_CourseName:
        return (a: clsge_GameLevelENEx, b: clsge_GameLevelENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      default:
        return ge_GameLevel_SortFunByKey(strKey, AscOrDesc);
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
export function ge_GameLevelEx_FuncMapByFldName(
  strFldName: string,
  objge_GameLevelEx: clsge_GameLevelENEx,
) {
  const strThisFuncName = ge_GameLevelEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_GameLevelEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_GameLevelENEx.con_QuestionTypeName:
      return ge_GameLevelEx_FuncMapQuestionTypeName(objge_GameLevelEx);
    case clsge_GameLevelENEx.con_LevelModeTypeName:
      return ge_GameLevelEx_FuncMapLevelModeTypeName(objge_GameLevelEx);
    case clsge_GameLevelENEx.con_DifficultyLevelName:
      return ge_GameLevelEx_FuncMapDifficultyLevelName(objge_GameLevelEx);
    case clsge_GameLevelENEx.con_EduClsName:
      return ge_GameLevelEx_FuncMapEduClsName(objge_GameLevelEx);
    case clsge_GameLevelENEx.con_CourseName:
      return ge_GameLevelEx_FuncMapCourseName(objge_GameLevelEx);
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
export async function ge_GameLevelEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_GameLevelENEx.con_ChapterNameName:
      return (obj: clsge_GameLevelENEx) => {
        return obj.chapterNameName === value;
      };
    case clsge_GameLevelENEx.con_ChapterNamesEx:
      return (obj: clsge_GameLevelENEx) => {
        return obj.chapterNamesEx === value;
      };
    case clsge_GameLevelENEx.con_QuestionTypeName:
      return (obj: clsge_GameLevelENEx) => {
        return obj.questionTypeName === value;
      };
    case clsge_GameLevelENEx.con_LevelModeTypeName:
      return (obj: clsge_GameLevelENEx) => {
        return obj.levelModeTypeName === value;
      };
    case clsge_GameLevelENEx.con_DifficultyLevelName:
      return (obj: clsge_GameLevelENEx) => {
        return obj.difficultyLevelName === value;
      };
    case clsge_GameLevelENEx.con_EduClsName:
      return (obj: clsge_GameLevelENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_GameLevelENEx.con_CourseName:
      return (obj: clsge_GameLevelENEx) => {
        return obj.courseName === value;
      };
    default:
      return ge_GameLevel_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapKeyDifficultyLevelName(
  objge_GameLevel: clsge_GameLevelENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEx_FuncMapKeyDifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.difficultyLevelName) == true) return [];
    const geDifficultyLevelDifficultyLevelName = objge_GameLevel.difficultyLevelName;
    const arrDifficultyLevelId = await ge_DifficultyLevel_funcKey(
      clsge_DifficultyLevelEN.con_DifficultyLevelName,
      geDifficultyLevelDifficultyLevelName,
      enumComparisonOp.Like_03,
    );
    return arrDifficultyLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000928)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
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
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapKeyQuestionTypeName(
  objge_GameLevel: clsge_GameLevelENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEx_FuncMapKeyQuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.questionTypeName) == true) return [];
    const QuestionTypeQuestionTypeName = objge_GameLevel.questionTypeName;
    const arrQuestionTypeId = await QuestionType_funcKey(
      clsQuestionTypeEN.con_QuestionTypeName,
      QuestionTypeQuestionTypeName,
      enumComparisonOp.Like_03,
    );
    return arrQuestionTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000919)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
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
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapKeyLevelModeTypeName(
  objge_GameLevel: clsge_GameLevelENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEx_FuncMapKeyLevelModeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.levelModeTypeName) == true) return [];
    const geLevelModeTypeLevelModeTypeName = objge_GameLevel.levelModeTypeName;
    const arrLevelModeTypeId = await ge_LevelModeType_funcKey(
      clsge_LevelModeTypeEN.con_LevelModeTypeName,
      geLevelModeTypeLevelModeTypeName,
      enumComparisonOp.Like_03,
    );
    return arrLevelModeTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000930)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
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
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapKeyEduClsName(
  objge_GameLevel: clsge_GameLevelENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.eduClsName) == true) return [];
    const CurrEduClsEduClsName = objge_GameLevel.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_EduClsName,
      CurrEduClsEduClsName,
      objge_GameLevel.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
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
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMapKeyCourseName(
  objge_GameLevel: clsge_GameLevelENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_GameLevelEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.courseName) == true) return [];
    const vccCourseSimCourseName = objge_GameLevel.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    const strCourseIdLst = arrCourseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_CourseId,
      strCourseIdLst,
      objge_GameLevel.courseId,
      enumComparisonOp.In_04,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000541)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
