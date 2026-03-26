//import $ from "jquery";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clscc_CourseEN } from 'share-stu-study-base-lib';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { clsge_GameLevelChapterRelaEN } from '@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaEN';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsge_GameLevelENEx } from '@/ts/L0Entity/Knowledges/clsge_GameLevelENEx';
import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { cc_Course_func } from 'share-stu-study-base-lib';
import { ge_DifficultyLevel_func } from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { ge_GameLevelChapterRela_GetObjLstCache } from '@/ts/L3ForWApi/GameLearn/clsge_GameLevelChapterRelaWApi';
import { cc_CourseChapter_GetObjByCourseChapterIdCache } from 'share-stu-study-base-lib';
import {
  ge_GameLevel_FilterFunByKey,
  ge_GameLevel_GetFirstID,
  ge_GameLevel_GetObjFromJsonObj,
  ge_GameLevel_GetObjLstAsync,
  ge_GameLevel_GetObjLstCache,
  ge_GameLevel_GetUniCondStr,
  ge_GameLevel_SortFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { ge_LevelModeType_func } from '@/ts/L3ForWApi/Knowledges/clsge_LevelModeTypeWApi';
import { QuestionType_func } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const ge_GameLevelEx_Controller = 'ge_GameLevelExApi';
export const ge_GameLevelEx_ConstructorName = 'ge_GameLevelEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_GameLevelEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
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
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_GameLevelExObjLst) {
      const conFuncMap = await ge_GameLevelEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_GameLevelExObjLst.length == 0) return arrge_GameLevelExObjLst;
  let arrge_GameLevel_Sel: Array<clsge_GameLevelENEx> = arrge_GameLevelExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objge_GameLevel_Cond = new clsge_GameLevelENEx();
  ObjectAssign(objge_GameLevel_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsge_GameLevelWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objge_GameLevel_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_GameLevel_Sel = arrge_GameLevel_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_GameLevel_Sel.length == 0) return arrge_GameLevel_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_GameLevel_Sel = arrge_GameLevel_Sel.sort(
        ge_GameLevelEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_GameLevel_Sel = arrge_GameLevel_Sel.sort(objPagerPara.sortFun);
    }
    arrge_GameLevel_Sel = arrge_GameLevel_Sel.slice(intStart, intEnd);
    return arrge_GameLevel_Sel;
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_GameLevelEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_GameLevelENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_GameLevelObjLst = await ge_GameLevel_GetObjLstAsync(objPagerPara.whereCond);
  const arrge_GameLevelExObjLst = arrge_GameLevelObjLst.map(ge_GameLevelEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_GameLevelExObjLst) {
      const conFuncMap = await ge_GameLevelEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_GameLevelExObjLst.length == 0) return arrge_GameLevelExObjLst;
  let arrge_GameLevel_Sel: Array<clsge_GameLevelENEx> = arrge_GameLevelExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_GameLevel_Sel = arrge_GameLevel_Sel.sort(
        ge_GameLevelEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_GameLevel_Sel = arrge_GameLevel_Sel.sort(objPagerPara.sortFun);
    }
    arrge_GameLevel_Sel = arrge_GameLevel_Sel.slice(intStart, intEnd);
    return arrge_GameLevel_Sel;
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_GameLevelEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_GameLevel_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_GameLevel_SortFunByKey(strKey, AscOrDesc);
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
export function ge_GameLevelEx_FuncMapByFldName(
  strFldName: string,
  objge_GameLevelEx: clsge_GameLevelENEx,
) {
  const strThisFuncName = ge_GameLevelEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_GameLevelEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_GameLevelENEx.con_QuestionTypeName:
      return ge_GameLevelEx_FuncMap_QuestionTypeName(objge_GameLevelEx);
    case clsge_GameLevelENEx.con_LevelModeTypeName:
      return ge_GameLevelEx_FuncMap_LevelModeTypeName(objge_GameLevelEx);
    case clsge_GameLevelENEx.con_DifficultyLevelName:
      return ge_GameLevelEx_FuncMap_DifficultyLevelName(objge_GameLevelEx);
    case clsge_GameLevelENEx.con_CourseName:
      return ge_GameLevelEx_FuncMap_CourseName(objge_GameLevelEx);
    case clsge_GameLevelENEx.con_ChapterNamesEx:
      return ge_GameLevelEx_FuncMap_ChapterNamesEx(objge_GameLevelEx);

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
export async function ge_GameLevelEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_GameLevel_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_GameLevelS:源对象
 **/
export async function ge_GameLevelEx_FuncMap_DifficultyLevelName(
  objge_GameLevel: clsge_GameLevelENEx,
) {
  const strThisFuncName = ge_GameLevelEx_FuncMap_DifficultyLevelName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.difficultyLevelName) == true) {
      const ge_DifficultyLevel_DifficultyLevelId = objge_GameLevel.difficultyLevelId;
      const ge_DifficultyLevel_DifficultyLevelName = await ge_DifficultyLevel_func(
        clsge_DifficultyLevelEN.con_DifficultyLevelId,
        clsge_DifficultyLevelEN.con_DifficultyLevelName,
        ge_DifficultyLevel_DifficultyLevelId,
      );
      objge_GameLevel.difficultyLevelName = ge_DifficultyLevel_DifficultyLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000218)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEx_FuncMap_QuestionTypeName(
  objge_GameLevel: clsge_GameLevelENEx,
) {
  const strThisFuncName = ge_GameLevelEx_FuncMap_QuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.questionTypeName) == true) {
      const QuestionType_QuestionTypeId = objge_GameLevel.questionTypeId;
      const QuestionType_QuestionTypeName = await QuestionType_func(
        clsQuestionTypeEN.con_QuestionTypeId,
        clsQuestionTypeEN.con_QuestionTypeName,
        QuestionType_QuestionTypeId,
      );
      objge_GameLevel.questionTypeName = QuestionType_QuestionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000219)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEx_FuncMap_LevelModeTypeName(
  objge_GameLevel: clsge_GameLevelENEx,
) {
  const strThisFuncName = ge_GameLevelEx_FuncMap_LevelModeTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.levelModeTypeName) == true) {
      const ge_LevelModeType_LevelModeTypeId = objge_GameLevel.levelModeTypeId;
      const ge_LevelModeType_LevelModeTypeName = await ge_LevelModeType_func(
        clsge_LevelModeTypeEN.con_LevelModeTypeId,
        clsge_LevelModeTypeEN.con_LevelModeTypeName,
        ge_LevelModeType_LevelModeTypeId,
      );
      objge_GameLevel.levelModeTypeName = ge_LevelModeType_LevelModeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000220)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEx_FuncMap_CourseName(objge_GameLevel: clsge_GameLevelENEx) {
  const strThisFuncName = ge_GameLevelEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.courseName) == true) {
      const cc_Course_CourseId = objge_GameLevel.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objge_GameLevel.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function ge_GameLevelEx_FuncMap_ChapterNamesEx(objge_GameLevel: clsge_GameLevelENEx) {
  const strThisFuncName = ge_GameLevelEx_FuncMap_QuestionTypeName.name;
  try {
    if (IsNullOrEmpty(objge_GameLevel.chapterNamesEx) == true) {
      const arrge_GameLevelChapterRela = await ge_GameLevelChapterRela_GetObjLstCache(
        objge_GameLevel.courseId,
      );
      const arrge_GameLevelChapterRela_Sel = arrge_GameLevelChapterRela.filter(
        (x) => x.gameLevelId == objge_GameLevel.gameLevelId,
      );
      let strChapterNamesEx = '';
      const objSpan: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      objSpan.className = 'ml-2';

      //objSpan.setAttribute(clsKcCrsTeacherRelationEN.con_IdTeacher, objKcCrsTeacherRelationEN.idTeacher);

      objSpan.id = Format('spa{0}_{1}', objge_GameLevel.courseId, objge_GameLevel.gameLevelId);

      objSpan.innerText = '';

      for (const objge_GameLevelChapterRela of arrge_GameLevelChapterRela_Sel) {
        const objCourseChapter = await cc_CourseChapter_GetObjByCourseChapterIdCache(
          objge_GameLevelChapterRela.courseChapterId,
          objge_GameLevel.courseId,
        );
        if (objCourseChapter == null) continue;
        if (IsNullOrEmpty(objCourseChapter.courseChapterName) == false) {
          const btnDel: HTMLElement = document.createElement('button');
          btnDel.innerText = '删除';
          btnDel.className = 'btn btn-outline-info btn-sm';
          btnDel.style.marginLeft = '5px';
          const strMyPara = Format(
            '{0},{1}',
            objge_GameLevelChapterRela.gameLevelId,
            objCourseChapter.courseChapterId,
          );
          // btnDel.setAttribute('onclick', `btn_Click('DelChapter','${strMyPara}');`);
          btnDel.id = 'btnDelChapter';
          const strKey = `${objge_GameLevelChapterRela.gameLevelId}|${objCourseChapter.courseChapterId}`;
          btnDel.setAttribute('keyId', strKey);
          btnDel.setAttribute(
            clsge_GameLevelChapterRelaEN.con_GameLevelId,
            objge_GameLevelChapterRela.gameLevelId,
          );
          //(function (strDataNodeId1) {
          //    btnDel.onclick = (function () {
          //        DataNodeFuncMapCRUD_EditEx.btnDelNode_Click(strDataNodeId1);
          //    });
          //})(strDataNodeId);

          const objBr: HTMLBRElement = <HTMLBRElement>document.createElement('br');
          const objSpan1: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
          objSpan1.innerText = Format(
            '{0}({1}道)',
            objCourseChapter.courseChapterName,
            objge_GameLevelChapterRela.questionNum,
          );
          objSpan.appendChild(objSpan1);
          objSpan.appendChild(btnDel);
          objSpan.appendChild(objBr);
          strChapterNamesEx = objSpan.innerHTML;
        }
      }
      objge_GameLevel.chapterNamesEx = strChapterNamesEx;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000219)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_GameLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strGameLevelId:关键字
 * @returns 对象
 **/
export async function ge_GameLevel_GetGameLevelIdByName(
  strGameLevelName: string,
  strCourseId: string,
): Promise<string> {
  const strThisFuncName = 'ge_GameLevel_GetGameLevelIdByName';
  const objge_GameLevel = new clsge_GameLevelEN();
  objge_GameLevel.courseId = strCourseId;
  objge_GameLevel.gameLevelName = strGameLevelName;
  const strUniCondition = ge_GameLevel_GetUniCondStr(objge_GameLevel);
  const strGameLevelId = await ge_GameLevel_GetFirstID(strUniCondition);
  if (IsNullOrEmpty(strGameLevelId) == true) {
    const strMsg = `关卡:[${strGameLevelName}]在当前课程：[${strCourseId}]没有相关的记录!(In ge_GameLevel_GetGameLevelIdByName)`;
    console.error(strMsg);
  }
  return strGameLevelId;
}

/**
 * 根据游戏等级名称和课程ID获取相应记录的对象
 * @param strGameLevelName: 游戏等级名称
 * @param strCourseId: 课程ID
 * @returns 对象
 **/
export async function ge_GameLevelEx_GetObjByGameLevelNameAsync(
  strGameLevelName: string,
  strIdCurrEduCls: string,
  intQuestionScore: number,
): Promise<clsge_GameLevelEN | null> {
  const strThisFuncName = 'GetObjByGameLevelNameAsync';

  if (IsNullOrEmpty(strGameLevelName) || IsNullOrEmpty(strIdCurrEduCls)) {
    const strMsg = Format(
      '参数:[strGameLevelName]和[strIdCurrEduCls]不能为空!(In clsge_GameLevelWApi.GetObjByGameLevelNameAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strAction = 'GetObjByGameLevelName';
  const strUrl = GetWebApiUrl(ge_GameLevelEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGameLevelName,
      strIdCurrEduCls,
      intQuestionScore,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      const objge_GameLevel = ge_GameLevel_GetObjFromJsonObj(returnObj);
      return objge_GameLevel;
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
        ge_GameLevelEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ge_GameLevelEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
