import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsge_StuBatchQuesRelaEN } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN';
import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { clsUserAnswerResultEN } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN';
import { clsUserAnswerResultENEx } from '@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultENEx';
import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
import { cc_CourseExamPaper_func } from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperWApi';

import { QuestionOptions_func } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import {
  UserAnswerResult_FilterFunByKey,
  UserAnswerResult_GetObjLstAsync,
  UserAnswerResult_SortFunByKey,
} from '@/ts/L3ForWApi/QuestionnaireResult/clsUserAnswerResultWApi';
import { QuestionType_GetObjByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { useQuestionnaireStore } from '@/store/modules/questionnaire';
import { questionResult } from '@/ts/FunClass/questionResult';
export const userAnswerResultEx_Controller = 'UserAnswerResultExApi';
export const userAnswerResultEx_ConstructorName = 'userAnswerResultEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UserAnswerResultEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objUserAnswerResultENS:源对象
 * @returns 目标对象=>clsUserAnswerResultEN:objUserAnswerResultENT
 **/
export function UserAnswerResultEx_CopyToEx(
  objUserAnswerResultENS: clsUserAnswerResultEN,
): clsUserAnswerResultENEx {
  const strThisFuncName = UserAnswerResultEx_CopyToEx.name;
  const objUserAnswerResultENT = new clsUserAnswerResultENEx();
  try {
    ObjectAssign(objUserAnswerResultENT, objUserAnswerResultENS);
    return objUserAnswerResultENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserAnswerResultENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UserAnswerResultEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserAnswerResultENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(objPagerPara.whereCond);
  const arrUserAnswerResultExObjLst = arrUserAnswerResultObjLst.map(UserAnswerResultEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrUserAnswerResultExObjLst) {
      const conFuncMap = await UserAnswerResultEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUserAnswerResultExObjLst.length == 0) return arrUserAnswerResultExObjLst;
  let arrUserAnswerResult_Sel: Array<clsUserAnswerResultENEx> = arrUserAnswerResultExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserAnswerResult_Sel = arrUserAnswerResult_Sel.sort(
        UserAnswerResultEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrUserAnswerResult_Sel = arrUserAnswerResult_Sel.sort(objPagerPara.sortFun);
    }
    arrUserAnswerResult_Sel = arrUserAnswerResult_Sel.slice(intStart, intEnd);
    return arrUserAnswerResult_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserAnswerResultENEx>();
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
export function UserAnswerResultEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return UserAnswerResult_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return UserAnswerResult_SortFunByKey(strKey, AscOrDesc);
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
export function UserAnswerResultEx_FuncMapByFldName(
  strFldName: string,
  objUserAnswerResultEx: clsUserAnswerResultENEx,
) {
  const strThisFuncName = UserAnswerResultEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsUserAnswerResultEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsUserAnswerResultENEx.con_ExamPaperName:
      return UserAnswerResultEx_FuncMap_ExamPaperName(objUserAnswerResultEx);
    case clsUserAnswerResultENEx.con_QuestionName:
      return UserAnswerResultEx_FuncMap_QuestionName(objUserAnswerResultEx);
    case clsUserAnswerResultENEx.con_OptionName:
      return UserAnswerResultEx_FuncMap_OptionName(objUserAnswerResultEx);
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
export async function UserAnswerResultEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return UserAnswerResult_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 根据关键字判断是否存在记录
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
/// </summary>
/// <param name = "lngMinID">关键字</param>
/// <returns>是否存在?存在返回True</returns>
export async function UserAnswerResultEx_AddOrUpdateRecord(
  userId: string,
  examBatchNo: string,
  QuestionId: number,
  idCurrEduCls: string,
  answerText: string,
): Promise<number> {
  const strThisFuncName = 'AddOrUpdateRecord';
  //检测记录是否存在
  const strAction = 'AddOrUpdateRecord';
  let strUrl = UserAnswerResultEx_GetWebApiUrl(userAnswerResultEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();

  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        userId: userId,
        examBatchNo: examBatchNo,
        QuestionId: QuestionId,
        idCurrEduCls: idCurrEduCls,
        answerText: answerText,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnDbl;
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
        userAnswerResultEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userAnswerResultEx_Controller,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMap_QuestionName(
  objUserAnswerResult: clsUserAnswerResultENEx,
) {
  const strThisFuncName = UserAnswerResultEx_FuncMap_QuestionName.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objUserAnswerResult.questionName) == true) {
      const Questionnaire_QuestionId = objUserAnswerResult.questionId;
      const Questionnaire_QuestionName = await questionnaireStore.getQuestionName(
        Questionnaire_QuestionId,
      );
      objUserAnswerResult.questionName = Questionnaire_QuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000191)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMap_ExamPaperName(
  objUserAnswerResult: clsUserAnswerResultENEx,
) {
  const strThisFuncName = UserAnswerResultEx_FuncMap_ExamPaperName.name;
  try {
    if (IsNullOrEmpty(objUserAnswerResult.examPaperName) == true) {
      const cc_CourseExamPaper_CourseExamPaperId = objUserAnswerResult.courseExamPaperId;
      const cc_CourseExamPaper_ExamPaperName = await cc_CourseExamPaper_func(
        clscc_CourseExamPaperEN.con_CourseExamPaperId,
        clscc_CourseExamPaperEN.con_ExamPaperName,
        cc_CourseExamPaper_CourseExamPaperId,
        clsPubLocalStorage.courseId,
      );
      objUserAnswerResult.examPaperName = cc_CourseExamPaper_ExamPaperName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000202)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserAnswerResultS:源对象
 **/
export async function UserAnswerResultEx_FuncMap_OptionName(
  objUserAnswerResult: clsUserAnswerResultENEx,
) {
  const strThisFuncName = UserAnswerResultEx_FuncMap_OptionName.name;
  try {
    if (IsNullOrEmpty(objUserAnswerResult.optionName) == true) {
      const QuestionOptions_QuestionOptionId = objUserAnswerResult.answerOptionId;
      const QuestionOptions_OptionName = await QuestionOptions_func(
        clsQuestionOptionsEN.con_QuestionOptionId,
        clsQuestionOptionsEN.con_OptionName,
        QuestionOptions_QuestionOptionId,
        objUserAnswerResult.courseId,
      );
      objUserAnswerResult.optionName = QuestionOptions_OptionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000206)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function UserAnswerResultEx_GetObjByge_StuBatchQuesRela(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaEN,
): Promise<clsUserAnswerResultEN> {
  const strThisFuncName = UserAnswerResultEx_GetObjByge_StuBatchQuesRela.name;
  try {
    if (objge_StuBatchQuesRela == null) {
      const strMsg = Format(
        '(errid:Watl000307)根据学生批次问题表获取用户答案表时，源对象不能为空.(in {0}.{1})',
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }

    //通过批次号+用户 课程得到 做题结果表数据
    const strWhereCondition = Format(
      "{0}='{1}' And {2}='{3}' and {4}='{5}'",
      clsUserAnswerResultEN.con_ExamBatchNo,
      objge_StuBatchQuesRela.examBatchNo,
      clsUserAnswerResultEN.con_UserId,
      objge_StuBatchQuesRela.userId,
      clsUserAnswerResultEN.con_QuestionId,
      objge_StuBatchQuesRela.questionId,
    );

    //获取获取题目库
    const arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(strWhereCondition);
    if (arrUserAnswerResultObjLst == null || arrUserAnswerResultObjLst.length == 0) {
      const strMsg = Format(
        '(errid:Wapi000309)题Id:[{0}],用户:[{1}], 批次:[{2}]没有相应的用户答案.(in {3}.{4})',
        objge_StuBatchQuesRela.questionId,
        objge_StuBatchQuesRela.userId,
        objge_StuBatchQuesRela.examBatchNo,
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }

    if (arrUserAnswerResultObjLst.length > 1) {
      const strMsg = Format(
        '(errid:Wapi000310)题Id:[{0}],用户:[{1}], 批次:[{2}]有多个相应的用户答案.(in {3}.{4})',
        objge_StuBatchQuesRela.questionId,
        objge_StuBatchQuesRela.userId,
        objge_StuBatchQuesRela.examBatchNo,
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    const objUserAnswerResult_Const = arrUserAnswerResultObjLst[0];
    return objUserAnswerResult_Const;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000307)根据学生批次问题表获取用户答案表出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function UserAnswerResultEx_IsHasAnswerCache(
  objge_StuBatchQuesRela: clsge_StuBatchQuesRelaEN,
): Promise<boolean> {
  const strThisFuncName = UserAnswerResultEx_GetObjByge_StuBatchQuesRela.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (objge_StuBatchQuesRela == null) {
      const strMsg = Format(
        '(errid:Watl000307)根据学生批次问题表获取用户答案表时，源对象不能为空.(in {0}.{1})',
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }

    //通过批次号+用户 课程得到 做题结果表数据
    const strWhereCondition = Format(
      "{0}='{1}' And {2}='{3}' and {4}='{5}'",
      clsUserAnswerResultEN.con_ExamBatchNo,
      objge_StuBatchQuesRela.examBatchNo,
      clsUserAnswerResultEN.con_UserId,
      objge_StuBatchQuesRela.userId,
      clsUserAnswerResultEN.con_QuestionId,
      objge_StuBatchQuesRela.questionId,
    );

    //获取获取题目库
    const arrUserAnswerResultObjLst = await UserAnswerResult_GetObjLstAsync(
      `${clsge_StuBatchQuesRelaEN.con_IdCurrEduCls}='${objge_StuBatchQuesRela.idCurrEduCls}`,
    );
    if (arrUserAnswerResultObjLst == null || arrUserAnswerResultObjLst.length == 0) {
      const strMsg = Format(
        '(errid:Wapi000306)教学班Id:[{0}]没有相应的用户答案.(in {1}.{2})',
        objge_StuBatchQuesRela.idCurrEduCls,
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
      //throw (strMsg);
    }
    const arrUserAnswerResultObjLst_Sel = arrUserAnswerResultObjLst.filter(
      (x) =>
        x.examBatchNo == objge_StuBatchQuesRela.examBatchNo &&
        x.userId == objge_StuBatchQuesRela.userId &&
        x.questionId == objge_StuBatchQuesRela.questionId,
    );
    if (arrUserAnswerResultObjLst_Sel.length == 0) {
      const strMsg = Format(
        '(errid:Wapi000307)题Id:[{0}],用户:[{1}], 批次:[{2}]没有相应的用户答案.(in {3}.{4})',
        objge_StuBatchQuesRela.questionId,
        objge_StuBatchQuesRela.userId,
        objge_StuBatchQuesRela.examBatchNo,
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strMsg);
      //alert(strMsg);
      return false;
      //throw (strMsg);
    }
    if (arrUserAnswerResultObjLst_Sel.length > 1) {
      const strMsg = Format(
        '(errid:Wapi000308)题Id:[{0}],用户:[{1}], 批次:[{2}]有多个相应的用户答案.(in {3}.{4})',
        objge_StuBatchQuesRela.questionId,
        objge_StuBatchQuesRela.userId,
        objge_StuBatchQuesRela.examBatchNo,
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strMsg);
      //alert(strMsg);
      //throw (strMsg);
      return false;
    }
    const objUserAnswerResult = arrUserAnswerResultObjLst_Sel[0];
    const strQuestionId = objge_StuBatchQuesRela.questionId;
    const objQuestion = await questionnaireStore.getObj(strQuestionId);
    if (objQuestion == null) {
      const strMsg = Format(
        '根据问题Id:[{0}]获取相应的记录的对象为空.(in {1}.{2})',
        strQuestionId,
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strMsg);
      //alert(strMsg);
      return false;
      //throw (strMsg);
    }
    const strQuestionTypeId = objQuestion.questionTypeId;
    let arrAnswerObjLst;
    let strAnswerText;
    let strMsg;
    switch (strQuestionTypeId) {
      case enumQuestionType.FillInBlank_01:
        //填空题
        //查找答案表获取答案数 得到ID ；
        strAnswerText = objUserAnswerResult.answerText;
        if (IsNullOrEmpty(strAnswerText) == true) return false;
        return true;

      case enumQuestionType.MultipleChoice_03:
        //多选型
        const answerMultiOption = objUserAnswerResult.answerMultiOption;
        if (IsNullOrEmpty(answerMultiOption) == true) return false;
        return true;

      case enumQuestionType.ShortAnswer_10: //简答题
        //查找答案表获取答案数 得到ID ；
        strAnswerText = objUserAnswerResult.answerText;
        if (IsNullOrEmpty(strAnswerText) == true) return false;
        return true;

      case enumQuestionType.SingleChoice_02: //单选题
        //其他题型
        const strAnswerOptionId = objUserAnswerResult.answerOptionId;
        if (IsNullOrEmpty(strAnswerOptionId) == true) return false;
        return true;

      default:
        const objQuestionType = await QuestionType_GetObjByQuestionTypeIdCache(strQuestionTypeId);
        if (objQuestionType == null) {
          strMsg = Format(
            '根据问题类型Id获取相应的记录的对象为空.(in {0}.{1})',
            userAnswerResultEx_ConstructorName,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return false;
        }
        strMsg = Format(
          '问题类型:{0}({1})在Switch中没有被处理.(in {2}.{3})',
          objQuestionType.questionTypeName,
          strQuestionTypeId,
          userAnswerResultEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    } //switch(strQuestionTypeId)

    return false;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000307)根据学生批次问题表获取用户答案表出错,{0}.(in {1}.{2})',
      e,
      userAnswerResultEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function UserAnswerResultEx_Score_UserAnswer(
  markerId: string,
  userId: string,
  examBatchNo: string,
  QuestionId: number,
  idCurrEduCls: string,
  score: number,
  passed: boolean,
): Promise<boolean> {
  const strThisFuncName = 'UserAnswerResultEx_Score_UserAnswer';
  //检测记录是否存在
  const strAction = 'Score_UserAnswer';
  let strUrl = UserAnswerResultEx_GetWebApiUrl(userAnswerResultEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();

  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        markerId: markerId,
        userId: userId,
        examBatchNo: examBatchNo,
        questionId: QuestionId,
        idCurrEduCls: idCurrEduCls,
        score: score,
        passed: passed,
      },
    });
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
        userAnswerResultEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userAnswerResultEx_Controller,
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
 * 提交用户针对题目的答案
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param questionResults: 题目用户答题结果
 * @returns 获取的相应对象列表
 */
export async function UserAnswerResultEx_SubmitUserResult(
  questionResults: Array<questionResult>,
): Promise<number> {
  const strThisFuncName = UserAnswerResultEx_SubmitUserResult.name;
  const strAction = 'SubmitUserResult';
  const strUrl = UserAnswerResultEx_GetWebApiUrl(userAnswerResultEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      questionResults,
    },
  };
  try {
    const response = await axios.post(strUrl, questionResults);
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
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userAnswerResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 根据关键字判断是否存在记录
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
/// </summary>
/// <param name = "lngMinID">关键字</param>
/// <returns>是否存在?存在返回True</returns>
export async function UserAnswerResultEx_AddOrUpdateRecordNoStuBatch(
  userId: string,
  examBatchNo: string,
  QuestionId: number,
  idCurrEduCls: string,
  answerText: string,
): Promise<number> {
  const strThisFuncName = 'AddOrUpdateRecordNoStuBatch';
  //检测记录是否存在
  const strAction = 'AddOrUpdateRecordNoStuBatch';
  let strUrl = UserAnswerResultEx_GetWebApiUrl(userAnswerResultEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();

  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        userId: userId,
        examBatchNo: examBatchNo,
        QuestionId: QuestionId,
        idCurrEduCls: idCurrEduCls,
        answerText: answerText,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnDbl;
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
        userAnswerResultEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userAnswerResultEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
