/**
 * 类名:clsDriftingBottleGameExWApi
 * 表名:DriftingBottleGame(01120992)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/10 07:59:08
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
 * 漂流瓶游戏(DriftingBottleGame)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年02月10日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const driftingBottleGameEx_Controller = 'DriftingBottleGameExApi';
export const driftingBottleGameEx_ConstructorName = 'driftingBottleGameEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function DriftingBottleGameEx_GetWebApiUrl(
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
 * 捡瓶后保存
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param lngBottleId: 漂流瓶Id
 * @param strAnswerText: 回答文本
 * @returns 获取的相应对象列表
 */
export async function DriftingBottleGameEx_PickUpBottleSave(
  strUserId: string,
  lngBottleId: number,
  strAnswerText: string,
): Promise<boolean> {
  const strThisFuncName = DriftingBottleGameEx_PickUpBottleSave.name;
  const strAction = 'PickUpBottleSave';
  const strUrl = DriftingBottleGameEx_GetWebApiUrl(driftingBottleGameEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      lngBottleId,
      strAnswerText,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        driftingBottleGameEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        driftingBottleGameEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 扔瓶提交
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strIdCurrEduCls: 教学班流水号
 * @param lngQuestionId: 题目Id
 * @param strAnswerText: 回答文本
 * @param strQuestionSourceId: 题目来源Id
 * @param bolCanSolve: 是否能解决
 * @returns 获取的相应对象列表
 */
export async function DriftingBottleGameEx_SubmitThrowBottle(
  strUserId: string,
  strIdCurrEduCls: string,
  lngQuestionId: number,
  strAnswerText: string,
  strQuestionSourceId: string,
  bolCanSolve: boolean,
): Promise<boolean> {
  const strThisFuncName = DriftingBottleGameEx_SubmitThrowBottle.name;
  const strAction = 'SubmitThrowBottle';
  const strUrl = DriftingBottleGameEx_GetWebApiUrl(driftingBottleGameEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strIdCurrEduCls,
      lngQuestionId,
      strAnswerText,
      strQuestionSourceId,
      bolCanSolve,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        driftingBottleGameEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        driftingBottleGameEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 提交知识点预测
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strGameLevelId: 关卡Id
 * @param strExamBatchNo: 测试批次号
 * @param bolSubmit: 是否提交
 * @param strUserId: 用户Id
 * @param strIdCurrEduCls: 教学班流水号
 * @returns 获取的相应对象列表
 */
export async function DriftingBottleGameEx_SubmitKnowledgePreTest(
  strGameLevelId: string,
  strExamBatchNo: string,
  bolSubmit: boolean,
  strUserId: string,
  strIdCurrEduCls: string,
): Promise<number> {
  const strThisFuncName = DriftingBottleGameEx_SubmitKnowledgePreTest.name;
  const strAction = 'SubmitKnowledgePreTest';
  const strUrl = DriftingBottleGameEx_GetWebApiUrl(driftingBottleGameEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGameLevelId,
      strExamBatchNo,
      bolSubmit,
      strUserId,
      strIdCurrEduCls,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        driftingBottleGameEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        driftingBottleGameEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
