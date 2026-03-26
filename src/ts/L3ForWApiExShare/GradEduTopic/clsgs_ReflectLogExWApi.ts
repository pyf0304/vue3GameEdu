/**
 * 类名:clsgs_ReflectLogExWApi
 * 表名:gs_ReflectLog(01120702)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 10:39:16
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 反思日志(gs_ReflectLog)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年01月01日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsgs_ReflectLogENEx } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogENEx';
import {
  gs_ReflectLog_GetObjLstByPagerAsync,
  gs_ReflectLog_SortFunByKey,
  gs_ReflectLog_FilterFunByKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ReflectLogWApi';
import { vQxUsersSim_func, vQxUsersSim_funcKey } from 'share-gen-plat-base-lib';
import { clsvQxUsersSimEN } from 'share-gen-plat-base-lib';
import { clsgs_ReflectLogEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const gs_ReflectLogExController = 'gs_ReflectLogExApi';
export const gs_ReflectLogEx_ConstructorName = 'gs_ReflectLogEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_ReflectLogEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objgs_ReflectLogENS:源对象
 * @returns 目标对象=>clsgs_ReflectLogEN:objgs_ReflectLogENT
 **/
export function gs_ReflectLogEx_CopyToEx(
  objgs_ReflectLogENS: clsgs_ReflectLogEN,
): clsgs_ReflectLogENEx {
  const strThisFuncName = gs_ReflectLogEx_CopyToEx.name;
  const objgs_ReflectLogENT = new clsgs_ReflectLogENEx();
  try {
    ObjectAssign(objgs_ReflectLogENT, objgs_ReflectLogENS);
    return objgs_ReflectLogENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_ReflectLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_ReflectLogENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_ReflectLogEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_ReflectLogENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_ReflectLogObjLst = await gs_ReflectLog_GetObjLstByPagerAsync(objPagerPara);
  const arrgs_ReflectLogExObjLst = arrgs_ReflectLogObjLst.map(gs_ReflectLogEx_CopyToEx);
  if (arrgs_ReflectLogExObjLst.length == 0) return arrgs_ReflectLogExObjLst;
  let arrgs_ReflectLogSel: Array<clsgs_ReflectLogENEx> = arrgs_ReflectLogExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_ReflectLogSel = arrgs_ReflectLogSel.sort(
        gs_ReflectLogEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_ReflectLogSel = arrgs_ReflectLogSel.sort(objPagerPara.sortFun);
    }
    return arrgs_ReflectLogSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_ReflectLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_ReflectLogENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objgs_ReflectLogS:源对象
 **/
export async function gs_ReflectLogEx_FuncMapDateTimeSim(objgs_ReflectLog: clsgs_ReflectLogENEx) {
  const strThisFuncName = gs_ReflectLogEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objgs_ReflectLog.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objgs_ReflectLog.updDate);
      objgs_ReflectLog.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000584)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_ReflectLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objgs_ReflectLogS:源对象
 **/
export async function gs_ReflectLogEx_FuncMapCreateDateSim(objgs_ReflectLog: clsgs_ReflectLogENEx) {
  const strThisFuncName = gs_ReflectLogEx_FuncMapCreateDateSim.name;
  try {
    if (IsNullOrEmpty(objgs_ReflectLog.createDateSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objgs_ReflectLog.createDate);
      objgs_ReflectLog.createDateSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000985)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_ReflectLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objgs_ReflectLogS:源对象
 **/
export async function gs_ReflectLogEx_FuncMapUserName(objgs_ReflectLog: clsgs_ReflectLogENEx) {
  const strThisFuncName = gs_ReflectLogEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objgs_ReflectLog.userName) == true) {
      const vQxUsersSimUserId = objgs_ReflectLog.userId;
      const vQxUsersSimUserName = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_UserName,
        vQxUsersSimUserId,
      );
      objgs_ReflectLog.userName = vQxUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_ReflectLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-01-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_ReflectLogEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_ReflectLogENEx.con_DateTimeSim:
        return (a: clsgs_ReflectLogENEx, b: clsgs_ReflectLogENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsgs_ReflectLogENEx.con_CreateDateSim:
        return (a: clsgs_ReflectLogENEx, b: clsgs_ReflectLogENEx) => {
          return a.createDateSim.localeCompare(b.createDateSim);
        };
      case clsgs_ReflectLogENEx.con_UserName:
        return (a: clsgs_ReflectLogENEx, b: clsgs_ReflectLogENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      default:
        return gs_ReflectLog_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsgs_ReflectLogENEx.con_DateTimeSim:
        return (a: clsgs_ReflectLogENEx, b: clsgs_ReflectLogENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsgs_ReflectLogENEx.con_CreateDateSim:
        return (a: clsgs_ReflectLogENEx, b: clsgs_ReflectLogENEx) => {
          return b.createDateSim.localeCompare(a.createDateSim);
        };
      case clsgs_ReflectLogENEx.con_UserName:
        return (a: clsgs_ReflectLogENEx, b: clsgs_ReflectLogENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      default:
        return gs_ReflectLog_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-01-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function gs_ReflectLogEx_FuncMapByFldName(
  strFldName: string,
  objgs_ReflectLogEx: clsgs_ReflectLogENEx,
) {
  const strThisFuncName = gs_ReflectLogEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsgs_ReflectLogEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsgs_ReflectLogENEx.con_DateTimeSim:
      return gs_ReflectLogEx_FuncMapDateTimeSim(objgs_ReflectLogEx);
    case clsgs_ReflectLogENEx.con_CreateDateSim:
      return gs_ReflectLogEx_FuncMapCreateDateSim(objgs_ReflectLogEx);
    case clsgs_ReflectLogENEx.con_UserName:
      return gs_ReflectLogEx_FuncMapUserName(objgs_ReflectLogEx);
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
 * 日期:2025-01-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function gs_ReflectLogEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsgs_ReflectLogENEx.con_DateTimeSim:
      return (obj: clsgs_ReflectLogENEx) => {
        return obj.dateTimeSim === value;
      };
    case clsgs_ReflectLogENEx.con_CreateDateSim:
      return (obj: clsgs_ReflectLogENEx) => {
        return obj.createDateSim === value;
      };
    case clsgs_ReflectLogENEx.con_UserName:
      return (obj: clsgs_ReflectLogENEx) => {
        return obj.userName === value;
      };
    default:
      return gs_ReflectLog_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objgs_ReflectLogS:源对象
 **/
export async function gs_ReflectLogEx_FuncMapKeyUserName(
  objgs_ReflectLog: clsgs_ReflectLogENEx,
): Promise<Array<string>> {
  const strThisFuncName = gs_ReflectLogEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objgs_ReflectLog.userName) == true) return [];
    const vQxUsersSimUserName = objgs_ReflectLog.userName;
    const arrUserId = await vQxUsersSim_funcKey(
      clsvQxUsersSimEN.con_UserName,
      vQxUsersSimUserName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000641)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_ReflectLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
