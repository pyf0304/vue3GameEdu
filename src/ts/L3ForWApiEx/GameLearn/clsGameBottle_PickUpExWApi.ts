/**
 * 类名:clsGameBottle_PickUpExWApi
 * 表名:GameBottle_PickUp(01120983)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/13 11:31:26
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
 * 捞游戏瓶(GameBottle_PickUp)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年01月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsGameBottle_PickUpENEx } from '@/ts/L0Entity/GameLearn/clsGameBottle_PickUpENEx';
import {
  GameBottle_PickUp_GetObjLstByPagerAsync,
  GameBottle_PickUp_SortFunByKey,
  GameBottle_PickUp_FilterFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsGameBottle_PickUpWApi';
import { clsGameBottle_PickUpEN } from '@/ts/L0Entity/GameLearn/clsGameBottle_PickUpEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gameBottle_PickUpEx_Controller = 'GameBottle_PickUpExApi';
export const gameBottle_PickUpEx_ConstructorName = 'gameBottle_PickUpEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function GameBottle_PickUpEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objGameBottle_PickUpENS:源对象
 * @returns 目标对象=>clsGameBottle_PickUpEN:objGameBottle_PickUpENT
 **/
export function GameBottle_PickUpEx_CopyToEx(
  objGameBottle_PickUpENS: clsGameBottle_PickUpEN,
): clsGameBottle_PickUpENEx {
  const strThisFuncName = GameBottle_PickUpEx_CopyToEx.name;
  const objGameBottle_PickUpENT = new clsGameBottle_PickUpENEx();
  try {
    ObjectAssign(objGameBottle_PickUpENT, objGameBottle_PickUpENS);
    return objGameBottle_PickUpENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gameBottle_PickUpEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGameBottle_PickUpENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GameBottle_PickUpEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGameBottle_PickUpENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrGameBottle_PickUpObjLst = await GameBottle_PickUp_GetObjLstByPagerAsync(objPagerPara);
  const arrGameBottle_PickUpExObjLst = arrGameBottle_PickUpObjLst.map(GameBottle_PickUpEx_CopyToEx);
  if (arrGameBottle_PickUpExObjLst.length == 0) return arrGameBottle_PickUpExObjLst;
  let arrGameBottle_PickUpSel: Array<clsGameBottle_PickUpENEx> = arrGameBottle_PickUpExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGameBottle_PickUpSel = arrGameBottle_PickUpSel.sort(
        GameBottle_PickUpEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGameBottle_PickUpSel = arrGameBottle_PickUpSel.sort(objPagerPara.sortFun);
    }
    return arrGameBottle_PickUpSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gameBottle_PickUpEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGameBottle_PickUpENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-01-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GameBottle_PickUpEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGameBottle_PickUpENEx.con_QuestionTypeName:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.questionTypeName.localeCompare(b.questionTypeName);
        };
      case clsGameBottle_PickUpENEx.con_QuestionName:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.questionName.localeCompare(b.questionName);
        };
      case clsGameBottle_PickUpENEx.con_QuestionTypeId:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.questionTypeId.localeCompare(b.questionTypeId);
        };
      case clsGameBottle_PickUpENEx.con_UserName_Throw:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.userName_Throw.localeCompare(b.userName_Throw);
        };
      case clsGameBottle_PickUpENEx.con_UserName_PickUp:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.userName_PickUp.localeCompare(b.userName_PickUp);
        };
      case clsGameBottle_PickUpENEx.con_DifficultyLevelName:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.difficultyLevelName.localeCompare(b.difficultyLevelName);
        };
      case clsGameBottle_PickUpENEx.con_KnowledgeNames:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.knowledgeNames.localeCompare(b.knowledgeNames);
        };
      case clsGameBottle_PickUpENEx.con_IsMasterStr:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.isMasterStr.localeCompare(b.isMasterStr);
        };
      case clsGameBottle_PickUpENEx.con_CourseKnowledgeIds:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return a.courseKnowledgeIds.localeCompare(b.courseKnowledgeIds);
        };
      default:
        return GameBottle_PickUp_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGameBottle_PickUpENEx.con_QuestionTypeName:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.questionTypeName.localeCompare(a.questionTypeName);
        };
      case clsGameBottle_PickUpENEx.con_QuestionName:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.questionName.localeCompare(a.questionName);
        };
      case clsGameBottle_PickUpENEx.con_QuestionTypeId:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.questionTypeId.localeCompare(a.questionTypeId);
        };
      case clsGameBottle_PickUpENEx.con_UserName_Throw:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.userName_Throw.localeCompare(a.userName_Throw);
        };
      case clsGameBottle_PickUpENEx.con_UserName_PickUp:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.userName_PickUp.localeCompare(a.userName_PickUp);
        };
      case clsGameBottle_PickUpENEx.con_DifficultyLevelName:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.difficultyLevelName.localeCompare(a.difficultyLevelName);
        };
      case clsGameBottle_PickUpENEx.con_KnowledgeNames:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.knowledgeNames.localeCompare(a.knowledgeNames);
        };
      case clsGameBottle_PickUpENEx.con_IsMasterStr:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.isMasterStr.localeCompare(a.isMasterStr);
        };
      case clsGameBottle_PickUpENEx.con_CourseKnowledgeIds:
        return (a: clsGameBottle_PickUpENEx, b: clsGameBottle_PickUpENEx) => {
          return b.courseKnowledgeIds.localeCompare(a.courseKnowledgeIds);
        };
      default:
        return GameBottle_PickUp_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-01-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GameBottle_PickUpEx_FuncMapByFldName(
  strFldName: string,
  objGameBottle_PickUpEx: clsGameBottle_PickUpENEx,
) {
  const strThisFuncName = GameBottle_PickUpEx_FuncMapByFldName.name;
  console.log(objGameBottle_PickUpEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGameBottle_PickUpEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2025-01-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GameBottle_PickUpEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsGameBottle_PickUpENEx.con_QuestionTypeName:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.questionTypeName === value;
      };
    case clsGameBottle_PickUpENEx.con_QuestionName:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.questionName === value;
      };
    case clsGameBottle_PickUpENEx.con_QuestionTypeId:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.questionTypeId === value;
      };
    case clsGameBottle_PickUpENEx.con_UserName_Throw:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.userName_Throw === value;
      };
    case clsGameBottle_PickUpENEx.con_UserName_PickUp:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.userName_PickUp === value;
      };
    case clsGameBottle_PickUpENEx.con_DifficultyLevelName:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.difficultyLevelName === value;
      };
    case clsGameBottle_PickUpENEx.con_KnowledgeNames:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.knowledgeNames === value;
      };
    case clsGameBottle_PickUpENEx.con_IsMasterStr:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.isMasterStr === value;
      };
    case clsGameBottle_PickUpENEx.con_CourseKnowledgeIds:
      return (obj: clsGameBottle_PickUpENEx) => {
        return obj.courseKnowledgeIds === value;
      };
    default:
      return GameBottle_PickUp_FilterFunByKey(strKey, value);
  }
}

/**
 * 捡瓶子
 * @param lngBottleId: 瓶子ID
 * @param strUserId_PickUp: 捡瓶子的用户ID
 * @returns 操作结果
 **/
export async function GameBottle_PickUpEx_PickUpBottle(
  lngBottleId: number,
  strUserId_PickUp: string,
): Promise<boolean> {
  const strThisFuncName = 'PickUpBottle';

  if (!lngBottleId || !strUserId_PickUp) {
    const strMsg = `参数:[lngBottleId]和[strUserId_PickUp]不能为空!(In ${strThisFuncName})`;
    console.error(strMsg);
    throw new Error(strMsg);
  }

  const strAction = 'PickUpBottle';
  const strUrl = GetWebApiUrl(gameBottle_PickUpEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngBottleId,
      strUserId_PickUp,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId === 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw new Error(data.errorMsg);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || '网络错误');
  }
}

/**
 * 提交捡瓶子
 * @param lngBottleId: 瓶子ID
 * @param strUserId_PickUp: 捡瓶子的用户ID
 * @returns 操作结果
 **/
export async function GameBottle_PickUpEx_SubmitPickUpBottle(
  lngBottleId: number,
  strUserId_PickUp: string,
): Promise<boolean> {
  const strThisFuncName = 'SubmitPickUpBottle';

  if (!lngBottleId || !strUserId_PickUp) {
    const strMsg = `参数:[lngBottleId]和[strUserId_PickUp]不能为空!(In ${strThisFuncName})`;
    console.error(strMsg);
    throw new Error(strMsg);
  }

  const strAction = 'SubmitPickUpBottle';
  const strUrl = GetWebApiUrl(gameBottle_PickUpEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngBottleId,
      strUserId_PickUp,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId === 0) {
      return data.returnObj;
    } else {
      console.error(data.errorMsg);
      throw new Error(data.errorMsg);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || '网络错误');
  }
}

/**
 * 扔回瓶子
 * @param lngBottleId: 瓶子ID
 * @param strUserId_PickUp: 捡瓶子的用户ID
 * @returns 操作结果
 **/
export async function GameBottle_PickUpEx_ThrowBackBottle(
  lngBottleId: number,
  strUserId_PickUp: string,
): Promise<boolean> {
  const strThisFuncName = 'ThrowBackBottle';

  if (!lngBottleId || !strUserId_PickUp) {
    const strMsg = `参数:[lngBottleId]和[strUserId_PickUp]不能为空!(In ${strThisFuncName})`;
    console.error(strMsg);
    throw new Error(strMsg);
  }

  const strAction = 'ThrowBackBottle';
  const strUrl = GetWebApiUrl(gameBottle_PickUpEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngBottleId,
      strUserId_PickUp,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId === 0) {
      return data.returnObj;
    } else {
      console.error(data.errorMsg);
      throw new Error(data.errorMsg);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || '网络错误');
  }
}

/**
 * 检查是否存在捡瓶子
 * @param strUserId_PickUp: 捡瓶子的用户ID
 * @returns 操作结果
 **/
export async function GameBottle_PickUpEx_CheckExistedPickUpBottle(
  strUserId_PickUp: string,
): Promise<clsGameBottle_PickUpEN> {
  const strThisFuncName = 'CheckExistedPickUpBottle';

  if (!strUserId_PickUp) {
    const strMsg = `参数:[strUserId_PickUp]不能为空!(In ${strThisFuncName})`;
    console.error(strMsg);
    throw new Error(strMsg);
  }

  const strAction = 'CheckExistedPickUpBottle';
  const strUrl = GetWebApiUrl(gameBottle_PickUpEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId_PickUp,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId === 0) {
      return data.returnObj;
    } else {
      console.error(data.errorMsg);
      throw new Error(data.errorMsg);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || '网络错误');
  }
}
