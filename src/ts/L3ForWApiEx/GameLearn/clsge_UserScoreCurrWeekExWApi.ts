/**
 * 类名:clsge_UserScoreCurrWeekExWApi
 * 表名:ge_UserScoreCurrWeek(01120989)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/11 00:04:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户当前周得分(ge_UserScoreCurrWeek)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年02月11日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_UserScoreCurrWeekENEx } from '@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekENEx';
import {
  ge_UserScoreCurrWeek_GetObjLstByPagerAsync,
  ge_UserScoreCurrWeek_SortFunByKey,
  ge_UserScoreCurrWeek_FilterFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserScoreCurrWeekWApi';
import { vCurrEduCls_Sim_func, vCurrEduCls_Sim_funcKey } from 'share-stu-study-base-lib';
import { clsvCurrEduCls_SimEN } from 'share-stu-study-base-lib';
import {
  EduClsCalendar_func,
  EduClsCalendar_funcKey,
} from '@/ts/L3ForWApi/DailyRunning/clsEduClsCalendarWApi';
import { clsEduClsCalendarEN } from '@/ts/L0Entity/DailyRunning/clsEduClsCalendarEN';
import { clsge_UserScoreCurrWeekEN } from '@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vQxUsersSim_func } from 'share-gen-plat-base-lib';
import { clsvQxUsersSimEN } from 'share-gen-plat-base-lib';

export const ge_UserScoreCurrWeekExController = 'ge_UserScoreCurrWeekExApi';
export const ge_UserScoreCurrWeekEx_ConstructorName = 'ge_UserScoreCurrWeekEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserScoreCurrWeekEx_GetWebApiUrl(
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
 * @param objge_UserScoreCurrWeekENS:源对象
 * @returns 目标对象=>clsge_UserScoreCurrWeekEN:objge_UserScoreCurrWeekENT
 **/
export function ge_UserScoreCurrWeekEx_CopyToEx(
  objge_UserScoreCurrWeekENS: clsge_UserScoreCurrWeekEN,
): clsge_UserScoreCurrWeekENEx {
  const strThisFuncName = ge_UserScoreCurrWeekEx_CopyToEx.name;
  const objge_UserScoreCurrWeekENT = new clsge_UserScoreCurrWeekENEx();
  try {
    ObjectAssign(objge_UserScoreCurrWeekENT, objge_UserScoreCurrWeekENS);
    return objge_UserScoreCurrWeekENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreCurrWeekEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_UserScoreCurrWeekENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserScoreCurrWeekEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserScoreCurrWeekENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserScoreCurrWeekObjLst = await ge_UserScoreCurrWeek_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrge_UserScoreCurrWeekExObjLst = arrge_UserScoreCurrWeekObjLst.map(
    ge_UserScoreCurrWeekEx_CopyToEx,
  );
  if (arrge_UserScoreCurrWeekExObjLst.length == 0) return arrge_UserScoreCurrWeekExObjLst;
  let arrge_UserScoreCurrWeekSel: Array<clsge_UserScoreCurrWeekENEx> =
    arrge_UserScoreCurrWeekExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserScoreCurrWeekSel = arrge_UserScoreCurrWeekSel.sort(
        ge_UserScoreCurrWeekEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserScoreCurrWeekSel = arrge_UserScoreCurrWeekSel.sort(objPagerPara.sortFun);
    }
    return arrge_UserScoreCurrWeekSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserScoreCurrWeekEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserScoreCurrWeekENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserScoreCurrWeekS:源对象
 **/
export async function ge_UserScoreCurrWeekEx_FuncMapEduClsName(
  objge_UserScoreCurrWeek: clsge_UserScoreCurrWeekENEx,
) {
  const strThisFuncName = ge_UserScoreCurrWeekEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserScoreCurrWeek.eduClsName) == true) {
      const vCurrEduClsSimIdCurrEduCls = objge_UserScoreCurrWeek.idCurrEduCls;
      const vCurrEduClsSimEduClsName = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_EduClsName,
        vCurrEduClsSimIdCurrEduCls,
        objge_UserScoreCurrWeek.courseId,
      );
      objge_UserScoreCurrWeek.eduClsName = vCurrEduClsSimEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreCurrWeekEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserScoreCurrWeekS:源对象
 **/
export async function ge_UserScoreCurrWeekEx_FuncMapWeekIndex(
  objge_UserScoreCurrWeek: clsge_UserScoreCurrWeekENEx,
) {
  const strThisFuncName = ge_UserScoreCurrWeekEx_FuncMapWeekIndex.name;
  try {
    if (objge_UserScoreCurrWeek.weekIndex == 0) {
      const EduClsCalendarIdEduClsCalendar = objge_UserScoreCurrWeek.idEduClsCalendar.toString();
      const EduClsCalendarWeekIndex = await EduClsCalendar_func(
        clsEduClsCalendarEN.con_IdEduClsCalendar,
        clsEduClsCalendarEN.con_WeekIndex,
        EduClsCalendarIdEduClsCalendar,
        objge_UserScoreCurrWeek.idCurrEduCls,
      );
      objge_UserScoreCurrWeek.weekIndex = EduClsCalendarWeekIndex;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001015)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreCurrWeekEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_UserScoreCurrWeekEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserScoreCurrWeekENEx.con_UserName:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_UserScoreCurrWeekENEx.con_CourseName:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_UserScoreCurrWeekENEx.con_WeekIndex:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return a.weekIndex - b.weekIndex;
        };
      case clsge_UserScoreCurrWeekENEx.con_EduClsName:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserScoreCurrWeekENEx.con_UpdDateSim:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return a.updDateSim.localeCompare(b.updDateSim);
        };
      default:
        return ge_UserScoreCurrWeek_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserScoreCurrWeekENEx.con_UserName:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_UserScoreCurrWeekENEx.con_CourseName:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_UserScoreCurrWeekENEx.con_WeekIndex:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return b.weekIndex - a.weekIndex;
        };
      case clsge_UserScoreCurrWeekENEx.con_EduClsName:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserScoreCurrWeekENEx.con_UpdDateSim:
        return (a: clsge_UserScoreCurrWeekENEx, b: clsge_UserScoreCurrWeekENEx) => {
          return b.updDateSim.localeCompare(a.updDateSim);
        };
      default:
        return ge_UserScoreCurrWeek_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-02-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_UserScoreCurrWeekEx_FuncMapByFldName(
  strFldName: string,
  objge_UserScoreCurrWeekEx: clsge_UserScoreCurrWeekENEx,
) {
  const strThisFuncName = ge_UserScoreCurrWeekEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_UserScoreCurrWeekEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserScoreCurrWeekENEx.con_WeekIndex:
      return ge_UserScoreCurrWeekEx_FuncMapWeekIndex(objge_UserScoreCurrWeekEx);
    case clsge_UserScoreCurrWeekENEx.con_EduClsName:
      return ge_UserScoreCurrWeekEx_FuncMapEduClsName(objge_UserScoreCurrWeekEx);
    case clsge_UserScoreCurrWeekENEx.con_UserName:
      return ge_UserScoreCurrWeekEx_FuncMapUserName(objge_UserScoreCurrWeekEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserScoreCurrWeekS:源对象
 **/
export async function ge_UserScoreCurrWeekEx_FuncMapUserName(
  objge_UserScoreCurrWeek: clsge_UserScoreCurrWeekENEx,
) {
  const strThisFuncName = ge_UserScoreCurrWeekEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserScoreCurrWeek.userName) == true) {
      const vQxUsersSimUserId = objge_UserScoreCurrWeek.userId;
      const vQxUsersSimUserName = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_UserName,
        vQxUsersSimUserId,
      );
      objge_UserScoreCurrWeek.userName = vQxUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreCurrWeekEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_UserScoreCurrWeekEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_UserScoreCurrWeekENEx.con_UserName:
      return (obj: clsge_UserScoreCurrWeekENEx) => {
        return obj.userName === value;
      };
    case clsge_UserScoreCurrWeekENEx.con_CourseName:
      return (obj: clsge_UserScoreCurrWeekENEx) => {
        return obj.courseName === value;
      };
    case clsge_UserScoreCurrWeekENEx.con_WeekIndex:
      return (obj: clsge_UserScoreCurrWeekENEx) => {
        return obj.weekIndex === value;
      };
    case clsge_UserScoreCurrWeekENEx.con_EduClsName:
      return (obj: clsge_UserScoreCurrWeekENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_UserScoreCurrWeekENEx.con_UpdDateSim:
      return (obj: clsge_UserScoreCurrWeekENEx) => {
        return obj.updDateSim === value;
      };
    default:
      return ge_UserScoreCurrWeek_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserScoreCurrWeekS:源对象
 **/
export async function ge_UserScoreCurrWeekEx_FuncMapKeyEduClsName(
  objge_UserScoreCurrWeek: clsge_UserScoreCurrWeekENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserScoreCurrWeekEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserScoreCurrWeek.eduClsName) == true) return [];
    const vCurrEduClsSimEduClsName = objge_UserScoreCurrWeek.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_EduClsName,
      vCurrEduClsSimEduClsName,
      objge_UserScoreCurrWeek.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreCurrWeekEx_ConstructorName,
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
 * @param objge_UserScoreCurrWeekS:源对象
 **/
export async function ge_UserScoreCurrWeekEx_FuncMapKeyWeekIndex(
  objge_UserScoreCurrWeek: clsge_UserScoreCurrWeekENEx,
): Promise<Array<number>> {
  const strThisFuncName = ge_UserScoreCurrWeekEx_FuncMapKeyWeekIndex.name;
  try {
    if (objge_UserScoreCurrWeek.weekIndex == 0) return [];
    const EduClsCalendarWeekIndex = objge_UserScoreCurrWeek.weekIndex;
    const arrIdEduClsCalendar = await EduClsCalendar_funcKey(
      clsEduClsCalendarEN.con_WeekIndex,
      EduClsCalendarWeekIndex,
      objge_UserScoreCurrWeek.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdEduClsCalendar;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001016)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserScoreCurrWeekEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_UserScoreCurrWeekEx_SortByCredits(
  a: clsge_UserScoreCurrWeekEN,
  b: clsge_UserScoreCurrWeekEN,
): number {
  return b.credits - a.credits;
}
