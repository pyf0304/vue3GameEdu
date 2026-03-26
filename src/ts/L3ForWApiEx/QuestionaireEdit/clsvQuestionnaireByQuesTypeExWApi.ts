/**
 * 类名:clsvQuestionnaireByQuesTypeExWApi
 * 表名:vQuestionnaireByQuesType(01120982)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/12 12:11:21
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQuestionnaireByQuesType(vQuestionnaireByQuesType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年01月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvQuestionnaireByQuesTypeENEx } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaireByQuesTypeENEx';
import {
  vQuestionnaireByQuesType_GetObjLstByPagerAsync,
  vQuestionnaireByQuesType_SortFunByKey,
  vQuestionnaireByQuesType_FilterFunByKey,
  vQuestionnaireByQuesType_GetObjLstAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaireByQuesTypeWApi';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { clsvQuestionnaireByQuesTypeEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaireByQuesTypeEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vQuestionnaireByQuesTypeExController = 'vQuestionnaireByQuesTypeExApi';
export const vQuestionnaireByQuesTypeEx_ConstructorName = 'vQuestionnaireByQuesTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vQuestionnaireByQuesTypeEx_GetWebApiUrl(
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
 * @param objvQuestionnaireByQuesTypeENS:源对象
 * @returns 目标对象=>clsvQuestionnaireByQuesTypeEN:objvQuestionnaireByQuesTypeENT
 **/
export function vQuestionnaireByQuesTypeEx_CopyToEx(
  objvQuestionnaireByQuesTypeENS: clsvQuestionnaireByQuesTypeEN,
): clsvQuestionnaireByQuesTypeENEx {
  const strThisFuncName = vQuestionnaireByQuesTypeEx_CopyToEx.name;
  const objvQuestionnaireByQuesTypeENT = new clsvQuestionnaireByQuesTypeENEx();
  try {
    ObjectAssign(objvQuestionnaireByQuesTypeENT, objvQuestionnaireByQuesTypeENS);
    return objvQuestionnaireByQuesTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vQuestionnaireByQuesTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvQuestionnaireByQuesTypeENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vQuestionnaireByQuesTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvQuestionnaireByQuesTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvQuestionnaireByQuesTypeObjLst = await vQuestionnaireByQuesType_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrvQuestionnaireByQuesTypeExObjLst = arrvQuestionnaireByQuesTypeObjLst.map(
    vQuestionnaireByQuesTypeEx_CopyToEx,
  );
  if (arrvQuestionnaireByQuesTypeExObjLst.length == 0) return arrvQuestionnaireByQuesTypeExObjLst;
  let arrvQuestionnaireByQuesTypeSel: Array<clsvQuestionnaireByQuesTypeENEx> =
    arrvQuestionnaireByQuesTypeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvQuestionnaireByQuesTypeSel = arrvQuestionnaireByQuesTypeSel.sort(
        vQuestionnaireByQuesTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvQuestionnaireByQuesTypeSel = arrvQuestionnaireByQuesTypeSel.sort(objPagerPara.sortFun);
    }
    return arrvQuestionnaireByQuesTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vQuestionnaireByQuesTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvQuestionnaireByQuesTypeENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvQuestionnaireByQuesTypeS:源对象
 **/
export async function vQuestionnaireByQuesTypeEx_FuncMapCourseName(
  objvQuestionnaireByQuesType: clsvQuestionnaireByQuesTypeENEx,
) {
  const strThisFuncName = vQuestionnaireByQuesTypeEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objvQuestionnaireByQuesType.courseName) == true) {
      const vccCourseSimCourseId = objvQuestionnaireByQuesType.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objvQuestionnaireByQuesType.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vQuestionnaireByQuesTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function vQuestionnaireByQuesTypeEx_FuncMapQuestionTypeNameEx(
  objvQuestionnaireByQuesType: clsvQuestionnaireByQuesTypeENEx,
) {
  const strThisFuncName = vQuestionnaireByQuesTypeEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objvQuestionnaireByQuesType.questionTypeNameEx) == true) {
      objvQuestionnaireByQuesType.questionTypeNameEx = `${objvQuestionnaireByQuesType.questionTypeName}(${objvQuestionnaireByQuesType.questionNum})`;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vQuestionnaireByQuesTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-01-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQuestionnaireByQuesTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvQuestionnaireByQuesTypeENEx.con_QuestionTypeNameEx:
        return (a: clsvQuestionnaireByQuesTypeENEx, b: clsvQuestionnaireByQuesTypeENEx) => {
          return a.questionTypeNameEx.localeCompare(b.questionTypeNameEx);
        };
      case clsvQuestionnaireByQuesTypeENEx.con_CourseName:
        return (a: clsvQuestionnaireByQuesTypeENEx, b: clsvQuestionnaireByQuesTypeENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      default:
        return vQuestionnaireByQuesType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvQuestionnaireByQuesTypeENEx.con_QuestionTypeNameEx:
        return (a: clsvQuestionnaireByQuesTypeENEx, b: clsvQuestionnaireByQuesTypeENEx) => {
          return b.questionTypeNameEx.localeCompare(a.questionTypeNameEx);
        };
      case clsvQuestionnaireByQuesTypeENEx.con_CourseName:
        return (a: clsvQuestionnaireByQuesTypeENEx, b: clsvQuestionnaireByQuesTypeENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      default:
        return vQuestionnaireByQuesType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-01-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vQuestionnaireByQuesTypeEx_FuncMapByFldName(
  strFldName: string,
  objvQuestionnaireByQuesTypeEx: clsvQuestionnaireByQuesTypeENEx,
) {
  const strThisFuncName = vQuestionnaireByQuesTypeEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvQuestionnaireByQuesTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsvQuestionnaireByQuesTypeENEx.con_CourseName:
      return vQuestionnaireByQuesTypeEx_FuncMapCourseName(objvQuestionnaireByQuesTypeEx);
    case clsvQuestionnaireByQuesTypeENEx.con_QuestionTypeNameEx:
      return vQuestionnaireByQuesTypeEx_FuncMapQuestionTypeNameEx(objvQuestionnaireByQuesTypeEx);

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
 * 日期:2025-01-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vQuestionnaireByQuesTypeEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsvQuestionnaireByQuesTypeENEx.con_QuestionTypeNameEx:
      return (obj: clsvQuestionnaireByQuesTypeENEx) => {
        return obj.questionTypeNameEx === value;
      };
    case clsvQuestionnaireByQuesTypeENEx.con_CourseName:
      return (obj: clsvQuestionnaireByQuesTypeENEx) => {
        return obj.courseName === value;
      };
    default:
      return vQuestionnaireByQuesType_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objvQuestionnaireByQuesTypeS:源对象
 **/
export async function vQuestionnaireByQuesTypeEx_FuncMapKeyCourseName(
  objvQuestionnaireByQuesType: clsvQuestionnaireByQuesTypeENEx,
): Promise<Array<string>> {
  const strThisFuncName = vQuestionnaireByQuesTypeEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objvQuestionnaireByQuesType.courseName) == true) return [];
    const vccCourseSimCourseName = objvQuestionnaireByQuesType.courseName;
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
      vQuestionnaireByQuesTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export async function vQuestionnaireByQuesTypeEx_GetArrvQuestionnaireByQuesTypeByCourseId(
  strCourseId: string,
): Promise<Array<clsvQuestionnaireByQuesTypeENEx>> {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsvQuestionnaireByQuesTypeWApi.BindDdl_QuestionTypeIdByCourseIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaireByQuesTypeWApi.BindDdl_QuestionTypeIdByCourseIdInDiv)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_QuestionTypeIdByCourseIdInDivCache");
  const arrvQuestionnaireByQuesType = new Array<clsvQuestionnaireByQuesTypeENEx>();
  const strCondition = `courseId = '${strCourseId}'`;
  const arrObjLstSel = await vQuestionnaireByQuesType_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return arrvQuestionnaireByQuesType;
  const arrObjExLstSel = arrObjLstSel.map(vQuestionnaireByQuesTypeEx_CopyToEx);
  for (const objInFor of arrObjExLstSel) {
    await vQuestionnaireByQuesTypeEx_FuncMapQuestionTypeNameEx(objInFor);
  }
  const obj0 = new clsvQuestionnaireByQuesTypeENEx();
  obj0.questionTypeId = '0';
  obj0.questionTypeNameEx = '选题型...';
  arrvQuestionnaireByQuesType.push(obj0);
  arrObjExLstSel.forEach((x) => arrvQuestionnaireByQuesType.push(x));
  return arrvQuestionnaireByQuesType;
}
