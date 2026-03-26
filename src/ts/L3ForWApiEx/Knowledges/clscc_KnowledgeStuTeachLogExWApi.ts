/**
 * 类名:clscc_KnowledgeStuTeachLogExWApi
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2024.11.10.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/10 23:50:25
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
 * 学生知识点教学日志(cc_KnowledgeStuTeachLog)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月10日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_KnowledgeStuTeachLogENEx } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogENEx';
import {
  cc_KnowledgeStuTeachLog_GetObjLstByPagerAsync,
  cc_KnowledgeStuTeachLog_SortFunByKey,
  cc_KnowledgeStuTeachLog_FilterFunByKey,
  cc_KnowledgeStuTeachLog_AddNewObjSave,
} from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgeStuTeachLogWApi';
import { vcc_Course_Sim_func, vcc_Course_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvcc_Course_SimEN } from 'share-stu-study-base-lib';
import { vStudentInfo_Sim_func, vStudentInfo_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvStudentInfo_SimEN } from 'share-stu-study-base-lib';
import {
  vQuestionnaire_Sim_func,
  vQuestionnaire_Sim_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import { clscc_KnowledgeStuTeachLogEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { useUserStore } from '@/store/modulesShare/user';

export const cc_KnowledgeStuTeachLogExController = 'cc_KnowledgeStuTeachLogExApi';
export const cc_KnowledgeStuTeachLogEx_ConstructorName = 'cc_KnowledgeStuTeachLogEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_KnowledgeStuTeachLogEx_GetWebApiUrl(
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
 * @param objcc_KnowledgeStuTeachLogENS:源对象
 * @returns 目标对象=>clscc_KnowledgeStuTeachLogEN:objcc_KnowledgeStuTeachLogENT
 **/
export function cc_KnowledgeStuTeachLogEx_CopyToEx(
  objcc_KnowledgeStuTeachLogENS: clscc_KnowledgeStuTeachLogEN,
): clscc_KnowledgeStuTeachLogENEx {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_CopyToEx.name;
  const objcc_KnowledgeStuTeachLogENT = new clscc_KnowledgeStuTeachLogENEx();
  try {
    ObjectAssign(objcc_KnowledgeStuTeachLogENT, objcc_KnowledgeStuTeachLogENS);
    return objcc_KnowledgeStuTeachLogENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_KnowledgeStuTeachLogENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_KnowledgeStuTeachLogEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_KnowledgeStuTeachLogENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_KnowledgeStuTeachLogObjLst = await cc_KnowledgeStuTeachLog_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrcc_KnowledgeStuTeachLogExObjLst = arrcc_KnowledgeStuTeachLogObjLst.map(
    cc_KnowledgeStuTeachLogEx_CopyToEx,
  );
  if (arrcc_KnowledgeStuTeachLogExObjLst.length == 0) return arrcc_KnowledgeStuTeachLogExObjLst;
  let arrcc_KnowledgeStuTeachLogSel: Array<clscc_KnowledgeStuTeachLogENEx> =
    arrcc_KnowledgeStuTeachLogExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_KnowledgeStuTeachLogSel = arrcc_KnowledgeStuTeachLogSel.sort(
        cc_KnowledgeStuTeachLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_KnowledgeStuTeachLogSel = arrcc_KnowledgeStuTeachLogSel.sort(objPagerPara.sortFun);
    }
    return arrcc_KnowledgeStuTeachLogSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_KnowledgeStuTeachLogENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgeStuTeachLogS:源对象
 **/
export async function cc_KnowledgeStuTeachLogEx_FuncMapCourseName(
  objcc_KnowledgeStuTeachLog: clscc_KnowledgeStuTeachLogENEx,
) {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeStuTeachLog.courseName) == true) {
      const vccCourseSimCourseId = objcc_KnowledgeStuTeachLog.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objcc_KnowledgeStuTeachLog.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgeStuTeachLogS:源对象
 **/
export async function cc_KnowledgeStuTeachLogEx_FuncMapStuId(
  objcc_KnowledgeStuTeachLog: clscc_KnowledgeStuTeachLogENEx,
) {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapStuId.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeStuTeachLog.stuId) == true) {
      const vStudentInfoSimIdStudentInfo = objcc_KnowledgeStuTeachLog.idStudentInfo;
      const vStudentInfoSimStuId = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_StuId,
        vStudentInfoSimIdStudentInfo,
        clsPubLocalStorage.idCurrEduCls,
      );
      objcc_KnowledgeStuTeachLog.stuId = vStudentInfoSimStuId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000853)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgeStuTeachLogS:源对象
 **/
export async function cc_KnowledgeStuTeachLogEx_FuncMapStuName(
  objcc_KnowledgeStuTeachLog: clscc_KnowledgeStuTeachLogENEx,
) {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapStuName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeStuTeachLog.stuName) == true) {
      const vStudentInfoSimIdStudentInfo = objcc_KnowledgeStuTeachLog.idStudentInfo;
      const vStudentInfoSimStuName = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_StuName,
        vStudentInfoSimIdStudentInfo,
        clsPubLocalStorage.idCurrEduCls,
      );
      objcc_KnowledgeStuTeachLog.stuName = vStudentInfoSimStuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000680)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgeStuTeachLogS:源对象
 **/
export async function cc_KnowledgeStuTeachLogEx_FuncMapQuestionName(
  objcc_KnowledgeStuTeachLog: clscc_KnowledgeStuTeachLogENEx,
) {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapQuestionName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeStuTeachLog.questionName) == true) {
      const vQuestionnaireSimQuestionId = objcc_KnowledgeStuTeachLog.questionId;
      const vQuestionnaireSimQuestionName = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionName,
        vQuestionnaireSimQuestionId.toString(),
        objcc_KnowledgeStuTeachLog.courseId,
      );
      objcc_KnowledgeStuTeachLog.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000896)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_KnowledgeStuTeachLogEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_KnowledgeStuTeachLogENEx.con_CourseName:
        return (a: clscc_KnowledgeStuTeachLogENEx, b: clscc_KnowledgeStuTeachLogENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clscc_KnowledgeStuTeachLogENEx.con_StuId:
        return (a: clscc_KnowledgeStuTeachLogENEx, b: clscc_KnowledgeStuTeachLogENEx) => {
          return a.stuId.localeCompare(b.stuId);
        };
      case clscc_KnowledgeStuTeachLogENEx.con_StuName:
        return (a: clscc_KnowledgeStuTeachLogENEx, b: clscc_KnowledgeStuTeachLogENEx) => {
          return a.stuName.localeCompare(b.stuName);
        };
      case clscc_KnowledgeStuTeachLogENEx.con_QuestionName:
        return (a: clscc_KnowledgeStuTeachLogENEx, b: clscc_KnowledgeStuTeachLogENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      default:
        return cc_KnowledgeStuTeachLog_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_KnowledgeStuTeachLogENEx.con_CourseName:
        return (a: clscc_KnowledgeStuTeachLogENEx, b: clscc_KnowledgeStuTeachLogENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clscc_KnowledgeStuTeachLogENEx.con_StuId:
        return (a: clscc_KnowledgeStuTeachLogENEx, b: clscc_KnowledgeStuTeachLogENEx) => {
          return b.stuId.localeCompare(a.stuId);
        };
      case clscc_KnowledgeStuTeachLogENEx.con_StuName:
        return (a: clscc_KnowledgeStuTeachLogENEx, b: clscc_KnowledgeStuTeachLogENEx) => {
          return b.stuName.localeCompare(a.stuName);
        };
      case clscc_KnowledgeStuTeachLogENEx.con_QuestionName:
        return (a: clscc_KnowledgeStuTeachLogENEx, b: clscc_KnowledgeStuTeachLogENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      default:
        return cc_KnowledgeStuTeachLog_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_KnowledgeStuTeachLogEx_FuncMapByFldName(
  strFldName: string,
  objcc_KnowledgeStuTeachLogEx: clscc_KnowledgeStuTeachLogENEx,
) {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_KnowledgeStuTeachLogEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_KnowledgeStuTeachLogENEx.con_CourseName:
      return cc_KnowledgeStuTeachLogEx_FuncMapCourseName(objcc_KnowledgeStuTeachLogEx);
    case clscc_KnowledgeStuTeachLogENEx.con_StuId:
      return cc_KnowledgeStuTeachLogEx_FuncMapStuId(objcc_KnowledgeStuTeachLogEx);
    case clscc_KnowledgeStuTeachLogENEx.con_StuName:
      return cc_KnowledgeStuTeachLogEx_FuncMapStuName(objcc_KnowledgeStuTeachLogEx);
    case clscc_KnowledgeStuTeachLogENEx.con_QuestionName:
      return cc_KnowledgeStuTeachLogEx_FuncMapQuestionName(objcc_KnowledgeStuTeachLogEx);
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
 * 日期:2024-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_KnowledgeStuTeachLogEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_KnowledgeStuTeachLogENEx.con_CourseName:
      return (obj: clscc_KnowledgeStuTeachLogENEx) => {
        return obj.courseName === value;
      };
    case clscc_KnowledgeStuTeachLogENEx.con_StuId:
      return (obj: clscc_KnowledgeStuTeachLogENEx) => {
        return obj.stuId === value;
      };
    case clscc_KnowledgeStuTeachLogENEx.con_StuName:
      return (obj: clscc_KnowledgeStuTeachLogENEx) => {
        return obj.stuName === value;
      };
    case clscc_KnowledgeStuTeachLogENEx.con_QuestionName:
      return (obj: clscc_KnowledgeStuTeachLogENEx) => {
        return obj.questionName === value;
      };
    default:
      return cc_KnowledgeStuTeachLog_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_KnowledgeStuTeachLogS:源对象
 **/
export async function cc_KnowledgeStuTeachLogEx_FuncMapKeyCourseName(
  objcc_KnowledgeStuTeachLog: clscc_KnowledgeStuTeachLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeStuTeachLog.courseName) == true) return [];
    const vccCourseSimCourseName = objcc_KnowledgeStuTeachLog.courseName;
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
      cc_KnowledgeStuTeachLogEx_ConstructorName,
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
 * @param objcc_KnowledgeStuTeachLogS:源对象
 **/
export async function cc_KnowledgeStuTeachLogEx_FuncMapKeyStuId(
  objcc_KnowledgeStuTeachLog: clscc_KnowledgeStuTeachLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapKeyStuId.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeStuTeachLog.stuId) == true) return [];
    const vStudentInfoSimStuId = objcc_KnowledgeStuTeachLog.stuId;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_StuId,
      vStudentInfoSimStuId,
      clsPubLocalStorage.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000854)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
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
 * @param objcc_KnowledgeStuTeachLogS:源对象
 **/
export async function cc_KnowledgeStuTeachLogEx_FuncMapKeyStuName(
  objcc_KnowledgeStuTeachLog: clscc_KnowledgeStuTeachLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapKeyStuName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeStuTeachLog.stuName) == true) return [];
    const vStudentInfoSimStuName = objcc_KnowledgeStuTeachLog.stuName;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_StuName,
      vStudentInfoSimStuName,
      clsPubLocalStorage.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000684)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
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
 * @param objcc_KnowledgeStuTeachLogS:源对象
 **/
export async function cc_KnowledgeStuTeachLogEx_FuncMapKeyQuestionName(
  objcc_KnowledgeStuTeachLog: clscc_KnowledgeStuTeachLogENEx,
): Promise<Array<number>> {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_FuncMapKeyQuestionName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeStuTeachLog.questionName) == true) return [];
    const vQuestionnaireSimQuestionName = objcc_KnowledgeStuTeachLog.questionName;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionName,
      vQuestionnaireSimQuestionName,
      objcc_KnowledgeStuTeachLog.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000898)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 添加新的学习日志
 */
export async function cc_KnowledgeStuTeachLogEx_AddNewLog(
  lngQuestionId: number,
  strIdStudentInfo: string,
  strTeachingLog: string,
): Promise<boolean> {
  const strThisFuncName = cc_KnowledgeStuTeachLogEx_AddNewLog.name;
  try {
    const objcc_KnowledgeStuTeachLogEN =
      await cc_KnowledgeStuTeachLogEx_GetEditDatacc_KnowledgeStuTeachLogObj(
        lngQuestionId,
        strIdStudentInfo,
        strTeachingLog,
      );
    const returnKeyId_cc_KnowledgeStuTeachLog = await cc_KnowledgeStuTeachLog_AddNewObjSave(
      objcc_KnowledgeStuTeachLogEN,
    );

    return returnKeyId_cc_KnowledgeStuTeachLog.success;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000898)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeStuTeachLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/** 函数功能:把界面上的属性数据传到类对象中
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
 * @param pobjcc_KnowledgeStuTeachLogEN">数据传输的目的类对象</param>
 **/
async function cc_KnowledgeStuTeachLogEx_GetEditDatacc_KnowledgeStuTeachLogObj(
  lngQuestionId: number,
  strIdStudentInfo: string,
  strTeachingLog: string,
): Promise<clscc_KnowledgeStuTeachLogEN> {
  const userStore = useUserStore();
  const pobjcc_KnowledgeStuTeachLogEN = new clscc_KnowledgeStuTeachLogEN();

  pobjcc_KnowledgeStuTeachLogEN.SetQuestionId(lngQuestionId); // 题目Id
  pobjcc_KnowledgeStuTeachLogEN.SetIdStudentInfo(strIdStudentInfo); // 学生流水号
  pobjcc_KnowledgeStuTeachLogEN.SetTeachingLog(strTeachingLog); // 教学日志
  pobjcc_KnowledgeStuTeachLogEN.SetCourseId(clsPubLocalStorage.courseId); // 课程Id
  pobjcc_KnowledgeStuTeachLogEN.SetMemo('学生通过扔一个添加'); // 备注
  pobjcc_KnowledgeStuTeachLogEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  pobjcc_KnowledgeStuTeachLogEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  return pobjcc_KnowledgeStuTeachLogEN;
}
