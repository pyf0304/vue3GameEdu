/**
 * 类名:clsge_StuErrorLibExWApi
 * 表名:ge_StuErrorLib(01120887)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:05:07
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
 * 学生错误作业集(ge_StuErrorLib)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_StuErrorLibENEx } from '@/ts/L0Entity/InteractManage/clsge_StuErrorLibENEx';
import {
  ge_StuErrorLib_GetObjLstByPagerAsync,
  ge_StuErrorLib_SortFunByKey,
  ge_StuErrorLib_FilterFunByKey,
} from '@/ts/L3ForWApi/InteractManage/clsge_StuErrorLibWApi';
import {
  SourceType_func,
  SourceType_funcKey,
} from '@/ts/L3ForWApi/InteractManage/clsSourceTypeWApi';
import { clsSourceTypeEN } from '@/ts/L0Entity/InteractManage/clsSourceTypeEN';
import {
  vQuestionnaire_Sim_func,
  vQuestionnaire_Sim_funcKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import { clsge_StuErrorLibEN } from '@/ts/L0Entity/InteractManage/clsge_StuErrorLibEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const ge_StuErrorLibExController = 'ge_StuErrorLibExApi';
export const ge_StuErrorLibEx_ConstructorName = 'ge_StuErrorLibEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_StuErrorLibEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_StuErrorLibENS:源对象
 * @returns 目标对象=>clsge_StuErrorLibEN:objge_StuErrorLibENT
 **/
export function ge_StuErrorLibEx_CopyToEx(
  objge_StuErrorLibENS: clsge_StuErrorLibEN,
): clsge_StuErrorLibENEx {
  const strThisFuncName = ge_StuErrorLibEx_CopyToEx.name;
  const objge_StuErrorLibENT = new clsge_StuErrorLibENEx();
  try {
    ObjectAssign(objge_StuErrorLibENT, objge_StuErrorLibENS);
    return objge_StuErrorLibENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuErrorLibEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_StuErrorLibENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_StuErrorLibEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_StuErrorLibENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_StuErrorLibObjLst = await ge_StuErrorLib_GetObjLstByPagerAsync(objPagerPara);
  const arrge_StuErrorLibExObjLst = arrge_StuErrorLibObjLst.map(ge_StuErrorLibEx_CopyToEx);
  if (arrge_StuErrorLibExObjLst.length == 0) return arrge_StuErrorLibExObjLst;
  let arrge_StuErrorLibSel: Array<clsge_StuErrorLibENEx> = arrge_StuErrorLibExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_StuErrorLibSel = arrge_StuErrorLibSel.sort(
        ge_StuErrorLibEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_StuErrorLibSel = arrge_StuErrorLibSel.sort(objPagerPara.sortFun);
    }
    return arrge_StuErrorLibSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_StuErrorLibEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_StuErrorLibENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuErrorLibS:源对象
 **/
export async function ge_StuErrorLibEx_FuncMapSourceTypeName(
  objge_StuErrorLib: clsge_StuErrorLibENEx,
) {
  const strThisFuncName = ge_StuErrorLibEx_FuncMapSourceTypeName.name;
  try {
    if (IsNullOrEmpty(objge_StuErrorLib.sourceTypeName) == true) {
      const SourceTypeSourceTypeId = objge_StuErrorLib.sourceTypeId;
      const SourceTypeSourceTypeName = await SourceType_func(
        clsSourceTypeEN.con_SourceTypeId,
        clsSourceTypeEN.con_SourceTypeName,
        SourceTypeSourceTypeId,
      );
      objge_StuErrorLib.sourceTypeName = SourceTypeSourceTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000923)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuErrorLibEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StuErrorLibS:源对象
 **/
export async function ge_StuErrorLibEx_FuncMapQuestionName(
  objge_StuErrorLib: clsge_StuErrorLibENEx,
) {
  const strThisFuncName = ge_StuErrorLibEx_FuncMapQuestionName.name;
  try {
    if (IsNullOrEmpty(objge_StuErrorLib.questionName) == true) {
      const vQuestionnaireSimQuestionId = objge_StuErrorLib.questionId;
      const vQuestionnaireSimQuestionName = await vQuestionnaire_Sim_func(
        clsvQuestionnaire_SimEN.con_QuestionId,
        clsvQuestionnaire_SimEN.con_QuestionName,
        vQuestionnaireSimQuestionId.toString(),
        objge_StuErrorLib.courseId,
      );
      objge_StuErrorLib.questionName = vQuestionnaireSimQuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000896)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuErrorLibEx_ConstructorName,
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
export function ge_StuErrorLibEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_StuErrorLibENEx.con_SourceTypeName:
        return (a: clsge_StuErrorLibENEx, b: clsge_StuErrorLibENEx) => {
          return a.sourceTypeName.localeCompare(b.sourceTypeName);
        };
      case clsge_StuErrorLibENEx.con_CourseName:
        return (a: clsge_StuErrorLibENEx, b: clsge_StuErrorLibENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_StuErrorLibENEx.con_StuName:
        return (a: clsge_StuErrorLibENEx, b: clsge_StuErrorLibENEx) => {
          return a.stuName.localeCompare(b.stuName);
        };
      case clsge_StuErrorLibENEx.con_QuestionName:
        return (a: clsge_StuErrorLibENEx, b: clsge_StuErrorLibENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      default:
        return ge_StuErrorLib_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_StuErrorLibENEx.con_SourceTypeName:
        return (a: clsge_StuErrorLibENEx, b: clsge_StuErrorLibENEx) => {
          return b.sourceTypeName.localeCompare(a.sourceTypeName);
        };
      case clsge_StuErrorLibENEx.con_CourseName:
        return (a: clsge_StuErrorLibENEx, b: clsge_StuErrorLibENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_StuErrorLibENEx.con_StuName:
        return (a: clsge_StuErrorLibENEx, b: clsge_StuErrorLibENEx) => {
          return b.stuName.localeCompare(a.stuName);
        };
      case clsge_StuErrorLibENEx.con_QuestionName:
        return (a: clsge_StuErrorLibENEx, b: clsge_StuErrorLibENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      default:
        return ge_StuErrorLib_SortFunByKey(strKey, AscOrDesc);
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
export function ge_StuErrorLibEx_FuncMapByFldName(
  strFldName: string,
  objge_StuErrorLibEx: clsge_StuErrorLibENEx,
) {
  const strThisFuncName = ge_StuErrorLibEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_StuErrorLibEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_StuErrorLibENEx.con_SourceTypeName:
      return ge_StuErrorLibEx_FuncMapSourceTypeName(objge_StuErrorLibEx);
    case clsge_StuErrorLibENEx.con_QuestionName:
      return ge_StuErrorLibEx_FuncMapQuestionName(objge_StuErrorLibEx);
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
export async function ge_StuErrorLibEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_StuErrorLibENEx.con_SourceTypeName:
      return (obj: clsge_StuErrorLibENEx) => {
        return obj.sourceTypeName === value;
      };
    case clsge_StuErrorLibENEx.con_CourseName:
      return (obj: clsge_StuErrorLibENEx) => {
        return obj.courseName === value;
      };
    case clsge_StuErrorLibENEx.con_StuName:
      return (obj: clsge_StuErrorLibENEx) => {
        return obj.stuName === value;
      };
    case clsge_StuErrorLibENEx.con_QuestionName:
      return (obj: clsge_StuErrorLibENEx) => {
        return obj.questionName === value;
      };
    default:
      return ge_StuErrorLib_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_StuErrorLibS:源对象
 **/
export async function ge_StuErrorLibEx_FuncMapKeySourceTypeName(
  objge_StuErrorLib: clsge_StuErrorLibENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_StuErrorLibEx_FuncMapKeySourceTypeName.name;
  try {
    if (IsNullOrEmpty(objge_StuErrorLib.sourceTypeName) == true) return [];
    const SourceTypeSourceTypeName = objge_StuErrorLib.sourceTypeName;
    const arrSourceTypeId = await SourceType_funcKey(
      clsSourceTypeEN.con_SourceTypeName,
      SourceTypeSourceTypeName,
      enumComparisonOp.Like_03,
    );
    return arrSourceTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000924)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuErrorLibEx_ConstructorName,
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
 * @param objge_StuErrorLibS:源对象
 **/
export async function ge_StuErrorLibEx_FuncMapKeyQuestionName(
  objge_StuErrorLib: clsge_StuErrorLibENEx,
): Promise<Array<number>> {
  const strThisFuncName = ge_StuErrorLibEx_FuncMapKeyQuestionName.name;
  try {
    if (IsNullOrEmpty(objge_StuErrorLib.questionName) == true) return [];
    const vQuestionnaireSimQuestionName = objge_StuErrorLib.questionName;
    const arrQuestionId = await vQuestionnaire_Sim_funcKey(
      clsvQuestionnaire_SimEN.con_QuestionName,
      vQuestionnaireSimQuestionName,
      objge_StuErrorLib.courseId,
      enumComparisonOp.Like_03,
    );
    return arrQuestionId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000898)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StuErrorLibEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
