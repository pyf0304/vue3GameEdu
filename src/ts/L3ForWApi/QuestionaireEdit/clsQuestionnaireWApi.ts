
 /**
 * 类名:clsQuestionnaireWApi
 * 表名:Questionnaire(01120001)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:28
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 题目(Questionnaire)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQuestionnaireEN } from "@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const questionnaire_Controller = "QuestionnaireApi";
 export const questionnaire_ConstructorName = "questionnaire";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngQuestionId:关键字
 * @returns 对象
 **/
export  async function Questionnaire_GetObjByQuestionIdAsync(lngQuestionId: number): Promise<clsQuestionnaireEN|null>  
{
const strThisFuncName = "GetObjByQuestionIdAsync";

if (lngQuestionId == 0)
{
  const strMsg = Format("参数:[lngQuestionId]不能为空!(In clsQuestionnaireWApi.GetObjByQuestionIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByQuestionId";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngQuestionId,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objQuestionnaire = Questionnaire_GetObjFromJsonObj(returnObj);
return objQuestionnaire;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByQuestionIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByQuestionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Questionnaire_SortFunDefa(a:clsQuestionnaireEN , b:clsQuestionnaireEN): number 
{
return a.questionId-b.questionId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Questionnaire_SortFunDefa2Fld(a:clsQuestionnaireEN , b:clsQuestionnaireEN): number 
{
if (a.questionIndex == b.questionIndex) return a.questionName.localeCompare(b.questionName);
else return a.questionIndex - b.questionIndex;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Questionnaire_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQuestionnaireEN.con_QuestionId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.questionId-b.questionId;
}
case clsQuestionnaireEN.con_QuestionIndex:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.questionIndex-b.questionIndex;
}
case clsQuestionnaireEN.con_QuestionName:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.questionName.localeCompare(b.questionName);
}
case clsQuestionnaireEN.con_QuestionContent:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.questionContent == null) return -1;
if (b.questionContent == null) return 1;
return a.questionContent.localeCompare(b.questionContent);
}
case clsQuestionnaireEN.con_QuestionMemo:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.questionMemo == null) return -1;
if (b.questionMemo == null) return 1;
return a.questionMemo.localeCompare(b.questionMemo);
}
case clsQuestionnaireEN.con_QuestionNo:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.questionNo == null) return -1;
if (b.questionNo == null) return 1;
return a.questionNo.localeCompare(b.questionNo);
}
case clsQuestionnaireEN.con_ParentQuestionId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.parentQuestionId == null) return -1;
if (b.parentQuestionId == null) return 1;
return a.parentQuestionId.localeCompare(b.parentQuestionId);
}
case clsQuestionnaireEN.con_ExamAnswer:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.examAnswer == null) return -1;
if (b.examAnswer == null) return 1;
return a.examAnswer.localeCompare(b.examAnswer);
}
case clsQuestionnaireEN.con_CourseId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsQuestionnaireEN.con_LevelNo:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.levelNo-b.levelNo;
}
case clsQuestionnaireEN.con_QuestionSourceId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.questionSourceId.localeCompare(b.questionSourceId);
}
case clsQuestionnaireEN.con_CourseChapterId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.courseChapterId == null) return -1;
if (b.courseChapterId == null) return 1;
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsQuestionnaireEN.con_QuestionTypeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.questionTypeId == null) return -1;
if (b.questionTypeId == null) return 1;
return a.questionTypeId.localeCompare(b.questionTypeId);
}
case clsQuestionnaireEN.con_QuestionTypeId4Course:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.questionTypeId4Course == null) return -1;
if (b.questionTypeId4Course == null) return 1;
return a.questionTypeId4Course.localeCompare(b.questionTypeId4Course);
}
case clsQuestionnaireEN.con_AnswerTypeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.answerTypeId == null) return -1;
if (b.answerTypeId == null) return 1;
return a.answerTypeId.localeCompare(b.answerTypeId);
}
case clsQuestionnaireEN.con_GridTitle:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.gridTitle == null) return -1;
if (b.gridTitle == null) return 1;
return a.gridTitle.localeCompare(b.gridTitle);
}
case clsQuestionnaireEN.con_AnswerModeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.answerModeId == null) return -1;
if (b.answerModeId == null) return 1;
return a.answerModeId.localeCompare(b.answerModeId);
}
case clsQuestionnaireEN.con_IsHaveAdditionalMemo:
return (a: clsQuestionnaireEN) => {
if (a.isHaveAdditionalMemo == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_QuestionScore:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.questionScore-b.questionScore;
}
case clsQuestionnaireEN.con_DefaultValue:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.defaultValue == null) return -1;
if (b.defaultValue == null) return 1;
return a.defaultValue.localeCompare(b.defaultValue);
}
case clsQuestionnaireEN.con_DefaultSelectItem:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.defaultSelectItem == null) return -1;
if (b.defaultSelectItem == null) return 1;
return a.defaultSelectItem.localeCompare(b.defaultSelectItem);
}
case clsQuestionnaireEN.con_IsShow:
return (a: clsQuestionnaireEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_IsCast:
return (a: clsQuestionnaireEN) => {
if (a.isCast == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_LikeCount:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.likeCount-b.likeCount;
}
case clsQuestionnaireEN.con_AnswerAttLimitSize:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.answerAttLimitSize-b.answerAttLimitSize;
}
case clsQuestionnaireEN.con_LimitedResourceType:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.limitedResourceType == null) return -1;
if (b.limitedResourceType == null) return 1;
return a.limitedResourceType.localeCompare(b.limitedResourceType);
}
case clsQuestionnaireEN.con_IsEffective:
return (a: clsQuestionnaireEN) => {
if (a.isEffective == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_IsCanInPaper:
return (a: clsQuestionnaireEN) => {
if (a.isCanInPaper == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_ExamGradeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.examGradeId == null) return -1;
if (b.examGradeId == null) return 1;
return a.examGradeId.localeCompare(b.examGradeId);
}
case clsQuestionnaireEN.con_TextDirectId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.textDirectId == null) return -1;
if (b.textDirectId == null) return 1;
return a.textDirectId.localeCompare(b.textDirectId);
}
case clsQuestionnaireEN.con_UpdDate:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQuestionnaireEN.con_UpdUser:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsQuestionnaireEN.con_Memo:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsQuestionnaireEN.con_QuestionCode:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.questionCode == null) return -1;
if (b.questionCode == null) return 1;
return a.questionCode.localeCompare(b.questionCode);
}
case clsQuestionnaireEN.con_DifficultyLevelId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.difficultyLevelId == null) return -1;
if (b.difficultyLevelId == null) return 1;
return a.difficultyLevelId.localeCompare(b.difficultyLevelId);
}
case clsQuestionnaireEN.con_SectionTypeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.sectionTypeId == null) return -1;
if (b.sectionTypeId == null) return 1;
return a.sectionTypeId.localeCompare(b.sectionTypeId);
}
case clsQuestionnaireEN.con_KnowledgeGraphId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.knowledgeGraphId == null) return -1;
if (b.knowledgeGraphId == null) return 1;
return a.knowledgeGraphId.localeCompare(b.knowledgeGraphId);
}
case clsQuestionnaireEN.con_FirstIndent:
return (a: clsQuestionnaireEN) => {
if (a.firstIndent == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_QuestionNameAdd:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.questionNameAdd == null) return -1;
if (b.questionNameAdd == null) return 1;
return a.questionNameAdd.localeCompare(b.questionNameAdd);
}
case clsQuestionnaireEN.con_CodeTab:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.codeTab == null) return -1;
if (b.codeTab == null) return 1;
return a.codeTab.localeCompare(b.codeTab);
}
case clsQuestionnaireEN.con_CodeTabCode:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.codeTabCode == null) return -1;
if (b.codeTabCode == null) return 1;
return a.codeTabCode.localeCompare(b.codeTabCode);
}
case clsQuestionnaireEN.con_CodeTabCondition:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.codeTabCondition == null) return -1;
if (b.codeTabCondition == null) return 1;
return a.codeTabCondition.localeCompare(b.codeTabCondition);
}
case clsQuestionnaireEN.con_CodeTabName:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.codeTabName == null) return -1;
if (b.codeTabName == null) return 1;
return a.codeTabName.localeCompare(b.codeTabName);
}
case clsQuestionnaireEN.con_FillInTextHeight:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.fillInTextHeight-b.fillInTextHeight;
}
case clsQuestionnaireEN.con_FillInTextWidth:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.fillInTextWidth-b.fillInTextWidth;
}
case clsQuestionnaireEN.con_IsMulti4FillInText:
return (a: clsQuestionnaireEN) => {
if (a.isMulti4FillInText == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_CheckBoxLimitCount:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.checkBoxLimitCount-b.checkBoxLimitCount;
}
case clsQuestionnaireEN.con_IsJs:
return (a: clsQuestionnaireEN) => {
if (a.isJs == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_MemoTextWidth:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.memoTextWidth-b.memoTextWidth;
}
case clsQuestionnaireEN.con_RelaEvent:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.relaEvent == null) return -1;
if (b.relaEvent == null) return 1;
return a.relaEvent.localeCompare(b.relaEvent);
}
case clsQuestionnaireEN.con_IsTest:
return (a: clsQuestionnaireEN) => {
if (a.isTest == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_LevelModeTypeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return a.levelModeTypeId.localeCompare(b.levelModeTypeId);
}
case clsQuestionnaireEN.con_IsRandom:
return (a: clsQuestionnaireEN) => {
if (a.isRandom == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_AnswerContent:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (a.answerContent == null) return -1;
if (b.answerContent == null) return 1;
return a.answerContent.localeCompare(b.answerContent);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Questionnaire]中不存在!(in ${ questionnaire_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQuestionnaireEN.con_QuestionId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.questionId-a.questionId;
}
case clsQuestionnaireEN.con_QuestionIndex:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.questionIndex-a.questionIndex;
}
case clsQuestionnaireEN.con_QuestionName:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.questionName.localeCompare(a.questionName);
}
case clsQuestionnaireEN.con_QuestionContent:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.questionContent == null) return -1;
if (a.questionContent == null) return 1;
return b.questionContent.localeCompare(a.questionContent);
}
case clsQuestionnaireEN.con_QuestionMemo:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.questionMemo == null) return -1;
if (a.questionMemo == null) return 1;
return b.questionMemo.localeCompare(a.questionMemo);
}
case clsQuestionnaireEN.con_QuestionNo:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.questionNo == null) return -1;
if (a.questionNo == null) return 1;
return b.questionNo.localeCompare(a.questionNo);
}
case clsQuestionnaireEN.con_ParentQuestionId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.parentQuestionId == null) return -1;
if (a.parentQuestionId == null) return 1;
return b.parentQuestionId.localeCompare(a.parentQuestionId);
}
case clsQuestionnaireEN.con_ExamAnswer:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.examAnswer == null) return -1;
if (a.examAnswer == null) return 1;
return b.examAnswer.localeCompare(a.examAnswer);
}
case clsQuestionnaireEN.con_CourseId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsQuestionnaireEN.con_LevelNo:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.levelNo-a.levelNo;
}
case clsQuestionnaireEN.con_QuestionSourceId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.questionSourceId.localeCompare(a.questionSourceId);
}
case clsQuestionnaireEN.con_CourseChapterId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.courseChapterId == null) return -1;
if (a.courseChapterId == null) return 1;
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsQuestionnaireEN.con_QuestionTypeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.questionTypeId == null) return -1;
if (a.questionTypeId == null) return 1;
return b.questionTypeId.localeCompare(a.questionTypeId);
}
case clsQuestionnaireEN.con_QuestionTypeId4Course:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.questionTypeId4Course == null) return -1;
if (a.questionTypeId4Course == null) return 1;
return b.questionTypeId4Course.localeCompare(a.questionTypeId4Course);
}
case clsQuestionnaireEN.con_AnswerTypeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.answerTypeId == null) return -1;
if (a.answerTypeId == null) return 1;
return b.answerTypeId.localeCompare(a.answerTypeId);
}
case clsQuestionnaireEN.con_GridTitle:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.gridTitle == null) return -1;
if (a.gridTitle == null) return 1;
return b.gridTitle.localeCompare(a.gridTitle);
}
case clsQuestionnaireEN.con_AnswerModeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.answerModeId == null) return -1;
if (a.answerModeId == null) return 1;
return b.answerModeId.localeCompare(a.answerModeId);
}
case clsQuestionnaireEN.con_IsHaveAdditionalMemo:
return (b: clsQuestionnaireEN) => {
if (b.isHaveAdditionalMemo == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_QuestionScore:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.questionScore-a.questionScore;
}
case clsQuestionnaireEN.con_DefaultValue:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.defaultValue == null) return -1;
if (a.defaultValue == null) return 1;
return b.defaultValue.localeCompare(a.defaultValue);
}
case clsQuestionnaireEN.con_DefaultSelectItem:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.defaultSelectItem == null) return -1;
if (a.defaultSelectItem == null) return 1;
return b.defaultSelectItem.localeCompare(a.defaultSelectItem);
}
case clsQuestionnaireEN.con_IsShow:
return (b: clsQuestionnaireEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_IsCast:
return (b: clsQuestionnaireEN) => {
if (b.isCast == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_LikeCount:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.likeCount-a.likeCount;
}
case clsQuestionnaireEN.con_AnswerAttLimitSize:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.answerAttLimitSize-a.answerAttLimitSize;
}
case clsQuestionnaireEN.con_LimitedResourceType:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.limitedResourceType == null) return -1;
if (a.limitedResourceType == null) return 1;
return b.limitedResourceType.localeCompare(a.limitedResourceType);
}
case clsQuestionnaireEN.con_IsEffective:
return (b: clsQuestionnaireEN) => {
if (b.isEffective == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_IsCanInPaper:
return (b: clsQuestionnaireEN) => {
if (b.isCanInPaper == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_ExamGradeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.examGradeId == null) return -1;
if (a.examGradeId == null) return 1;
return b.examGradeId.localeCompare(a.examGradeId);
}
case clsQuestionnaireEN.con_TextDirectId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.textDirectId == null) return -1;
if (a.textDirectId == null) return 1;
return b.textDirectId.localeCompare(a.textDirectId);
}
case clsQuestionnaireEN.con_UpdDate:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQuestionnaireEN.con_UpdUser:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsQuestionnaireEN.con_Memo:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsQuestionnaireEN.con_QuestionCode:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.questionCode == null) return -1;
if (a.questionCode == null) return 1;
return b.questionCode.localeCompare(a.questionCode);
}
case clsQuestionnaireEN.con_DifficultyLevelId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.difficultyLevelId == null) return -1;
if (a.difficultyLevelId == null) return 1;
return b.difficultyLevelId.localeCompare(a.difficultyLevelId);
}
case clsQuestionnaireEN.con_SectionTypeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.sectionTypeId == null) return -1;
if (a.sectionTypeId == null) return 1;
return b.sectionTypeId.localeCompare(a.sectionTypeId);
}
case clsQuestionnaireEN.con_KnowledgeGraphId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.knowledgeGraphId == null) return -1;
if (a.knowledgeGraphId == null) return 1;
return b.knowledgeGraphId.localeCompare(a.knowledgeGraphId);
}
case clsQuestionnaireEN.con_FirstIndent:
return (b: clsQuestionnaireEN) => {
if (b.firstIndent == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_QuestionNameAdd:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.questionNameAdd == null) return -1;
if (a.questionNameAdd == null) return 1;
return b.questionNameAdd.localeCompare(a.questionNameAdd);
}
case clsQuestionnaireEN.con_CodeTab:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.codeTab == null) return -1;
if (a.codeTab == null) return 1;
return b.codeTab.localeCompare(a.codeTab);
}
case clsQuestionnaireEN.con_CodeTabCode:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.codeTabCode == null) return -1;
if (a.codeTabCode == null) return 1;
return b.codeTabCode.localeCompare(a.codeTabCode);
}
case clsQuestionnaireEN.con_CodeTabCondition:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.codeTabCondition == null) return -1;
if (a.codeTabCondition == null) return 1;
return b.codeTabCondition.localeCompare(a.codeTabCondition);
}
case clsQuestionnaireEN.con_CodeTabName:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.codeTabName == null) return -1;
if (a.codeTabName == null) return 1;
return b.codeTabName.localeCompare(a.codeTabName);
}
case clsQuestionnaireEN.con_FillInTextHeight:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.fillInTextHeight-a.fillInTextHeight;
}
case clsQuestionnaireEN.con_FillInTextWidth:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.fillInTextWidth-a.fillInTextWidth;
}
case clsQuestionnaireEN.con_IsMulti4FillInText:
return (b: clsQuestionnaireEN) => {
if (b.isMulti4FillInText == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_CheckBoxLimitCount:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.checkBoxLimitCount-a.checkBoxLimitCount;
}
case clsQuestionnaireEN.con_IsJs:
return (b: clsQuestionnaireEN) => {
if (b.isJs == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_MemoTextWidth:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.memoTextWidth-a.memoTextWidth;
}
case clsQuestionnaireEN.con_RelaEvent:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.relaEvent == null) return -1;
if (a.relaEvent == null) return 1;
return b.relaEvent.localeCompare(a.relaEvent);
}
case clsQuestionnaireEN.con_IsTest:
return (b: clsQuestionnaireEN) => {
if (b.isTest == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_LevelModeTypeId:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
return b.levelModeTypeId.localeCompare(a.levelModeTypeId);
}
case clsQuestionnaireEN.con_IsRandom:
return (b: clsQuestionnaireEN) => {
if (b.isRandom == true) return 1;
else return -1
}
case clsQuestionnaireEN.con_AnswerContent:
return (a: clsQuestionnaireEN, b: clsQuestionnaireEN) => {
if (b.answerContent == null) return -1;
if (a.answerContent == null) return 1;
return b.answerContent.localeCompare(a.answerContent);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Questionnaire]中不存在!(in ${ questionnaire_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByQuestionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function Questionnaire_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQuestionnaireEN.con_QuestionId:
return (obj: clsQuestionnaireEN) => {
return obj.questionId === value;
}
case clsQuestionnaireEN.con_QuestionIndex:
return (obj: clsQuestionnaireEN) => {
return obj.questionIndex === value;
}
case clsQuestionnaireEN.con_QuestionName:
return (obj: clsQuestionnaireEN) => {
return obj.questionName === value;
}
case clsQuestionnaireEN.con_QuestionContent:
return (obj: clsQuestionnaireEN) => {
return obj.questionContent === value;
}
case clsQuestionnaireEN.con_QuestionMemo:
return (obj: clsQuestionnaireEN) => {
return obj.questionMemo === value;
}
case clsQuestionnaireEN.con_QuestionNo:
return (obj: clsQuestionnaireEN) => {
return obj.questionNo === value;
}
case clsQuestionnaireEN.con_ParentQuestionId:
return (obj: clsQuestionnaireEN) => {
return obj.parentQuestionId === value;
}
case clsQuestionnaireEN.con_ExamAnswer:
return (obj: clsQuestionnaireEN) => {
return obj.examAnswer === value;
}
case clsQuestionnaireEN.con_CourseId:
return (obj: clsQuestionnaireEN) => {
return obj.courseId === value;
}
case clsQuestionnaireEN.con_LevelNo:
return (obj: clsQuestionnaireEN) => {
return obj.levelNo === value;
}
case clsQuestionnaireEN.con_QuestionSourceId:
return (obj: clsQuestionnaireEN) => {
return obj.questionSourceId === value;
}
case clsQuestionnaireEN.con_CourseChapterId:
return (obj: clsQuestionnaireEN) => {
return obj.courseChapterId === value;
}
case clsQuestionnaireEN.con_QuestionTypeId:
return (obj: clsQuestionnaireEN) => {
return obj.questionTypeId === value;
}
case clsQuestionnaireEN.con_QuestionTypeId4Course:
return (obj: clsQuestionnaireEN) => {
return obj.questionTypeId4Course === value;
}
case clsQuestionnaireEN.con_AnswerTypeId:
return (obj: clsQuestionnaireEN) => {
return obj.answerTypeId === value;
}
case clsQuestionnaireEN.con_GridTitle:
return (obj: clsQuestionnaireEN) => {
return obj.gridTitle === value;
}
case clsQuestionnaireEN.con_AnswerModeId:
return (obj: clsQuestionnaireEN) => {
return obj.answerModeId === value;
}
case clsQuestionnaireEN.con_IsHaveAdditionalMemo:
return (obj: clsQuestionnaireEN) => {
return obj.isHaveAdditionalMemo === value;
}
case clsQuestionnaireEN.con_QuestionScore:
return (obj: clsQuestionnaireEN) => {
return obj.questionScore === value;
}
case clsQuestionnaireEN.con_DefaultValue:
return (obj: clsQuestionnaireEN) => {
return obj.defaultValue === value;
}
case clsQuestionnaireEN.con_DefaultSelectItem:
return (obj: clsQuestionnaireEN) => {
return obj.defaultSelectItem === value;
}
case clsQuestionnaireEN.con_IsShow:
return (obj: clsQuestionnaireEN) => {
return obj.isShow === value;
}
case clsQuestionnaireEN.con_IsCast:
return (obj: clsQuestionnaireEN) => {
return obj.isCast === value;
}
case clsQuestionnaireEN.con_LikeCount:
return (obj: clsQuestionnaireEN) => {
return obj.likeCount === value;
}
case clsQuestionnaireEN.con_AnswerAttLimitSize:
return (obj: clsQuestionnaireEN) => {
return obj.answerAttLimitSize === value;
}
case clsQuestionnaireEN.con_LimitedResourceType:
return (obj: clsQuestionnaireEN) => {
return obj.limitedResourceType === value;
}
case clsQuestionnaireEN.con_IsEffective:
return (obj: clsQuestionnaireEN) => {
return obj.isEffective === value;
}
case clsQuestionnaireEN.con_IsCanInPaper:
return (obj: clsQuestionnaireEN) => {
return obj.isCanInPaper === value;
}
case clsQuestionnaireEN.con_ExamGradeId:
return (obj: clsQuestionnaireEN) => {
return obj.examGradeId === value;
}
case clsQuestionnaireEN.con_TextDirectId:
return (obj: clsQuestionnaireEN) => {
return obj.textDirectId === value;
}
case clsQuestionnaireEN.con_UpdDate:
return (obj: clsQuestionnaireEN) => {
return obj.updDate === value;
}
case clsQuestionnaireEN.con_UpdUser:
return (obj: clsQuestionnaireEN) => {
return obj.updUser === value;
}
case clsQuestionnaireEN.con_Memo:
return (obj: clsQuestionnaireEN) => {
return obj.memo === value;
}
case clsQuestionnaireEN.con_QuestionCode:
return (obj: clsQuestionnaireEN) => {
return obj.questionCode === value;
}
case clsQuestionnaireEN.con_DifficultyLevelId:
return (obj: clsQuestionnaireEN) => {
return obj.difficultyLevelId === value;
}
case clsQuestionnaireEN.con_SectionTypeId:
return (obj: clsQuestionnaireEN) => {
return obj.sectionTypeId === value;
}
case clsQuestionnaireEN.con_KnowledgeGraphId:
return (obj: clsQuestionnaireEN) => {
return obj.knowledgeGraphId === value;
}
case clsQuestionnaireEN.con_FirstIndent:
return (obj: clsQuestionnaireEN) => {
return obj.firstIndent === value;
}
case clsQuestionnaireEN.con_QuestionNameAdd:
return (obj: clsQuestionnaireEN) => {
return obj.questionNameAdd === value;
}
case clsQuestionnaireEN.con_CodeTab:
return (obj: clsQuestionnaireEN) => {
return obj.codeTab === value;
}
case clsQuestionnaireEN.con_CodeTabCode:
return (obj: clsQuestionnaireEN) => {
return obj.codeTabCode === value;
}
case clsQuestionnaireEN.con_CodeTabCondition:
return (obj: clsQuestionnaireEN) => {
return obj.codeTabCondition === value;
}
case clsQuestionnaireEN.con_CodeTabName:
return (obj: clsQuestionnaireEN) => {
return obj.codeTabName === value;
}
case clsQuestionnaireEN.con_FillInTextHeight:
return (obj: clsQuestionnaireEN) => {
return obj.fillInTextHeight === value;
}
case clsQuestionnaireEN.con_FillInTextWidth:
return (obj: clsQuestionnaireEN) => {
return obj.fillInTextWidth === value;
}
case clsQuestionnaireEN.con_IsMulti4FillInText:
return (obj: clsQuestionnaireEN) => {
return obj.isMulti4FillInText === value;
}
case clsQuestionnaireEN.con_CheckBoxLimitCount:
return (obj: clsQuestionnaireEN) => {
return obj.checkBoxLimitCount === value;
}
case clsQuestionnaireEN.con_IsJs:
return (obj: clsQuestionnaireEN) => {
return obj.isJs === value;
}
case clsQuestionnaireEN.con_MemoTextWidth:
return (obj: clsQuestionnaireEN) => {
return obj.memoTextWidth === value;
}
case clsQuestionnaireEN.con_RelaEvent:
return (obj: clsQuestionnaireEN) => {
return obj.relaEvent === value;
}
case clsQuestionnaireEN.con_IsTest:
return (obj: clsQuestionnaireEN) => {
return obj.isTest === value;
}
case clsQuestionnaireEN.con_LevelModeTypeId:
return (obj: clsQuestionnaireEN) => {
return obj.levelModeTypeId === value;
}
case clsQuestionnaireEN.con_IsRandom:
return (obj: clsQuestionnaireEN) => {
return obj.isRandom === value;
}
case clsQuestionnaireEN.con_AnswerContent:
return (obj: clsQuestionnaireEN) => {
return obj.answerContent === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Questionnaire]中不存在!(in ${ questionnaire_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[Questionnaire__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Questionnaire_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFldName,
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const arrId = data.returnStrLst.split(',');
return arrId;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Questionnaire_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
*/
export  async function Questionnaire_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export  async function Questionnaire_GetFirstObjAsync(strWhereCond: string): Promise<clsQuestionnaireEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objQuestionnaire = Questionnaire_GetObjFromJsonObj(returnObj);
return objQuestionnaire;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function Questionnaire_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQuestionnaireEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Questionnaire_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQuestionId:关键字列表
 * @returns 对象列表
 **/
export  async function Questionnaire_GetObjLstByQuestionIdLstAsync(arrQuestionId: Array<string>): Promise<Array<clsQuestionnaireEN>>  
{
const strThisFuncName = "GetObjLstByQuestionIdLstAsync";
const strAction = "GetObjLstByQuestionIdLst";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Questionnaire_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByQuestionIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function Questionnaire_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQuestionnaireEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTopPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Questionnaire_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function Questionnaire_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQuestionnaireEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRangePara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Questionnaire_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function Questionnaire_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQuestionnaireEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQuestionnaireEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPagerPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", questionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Questionnaire_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngQuestionId:关键字
 * @returns 获取删除的结果
 **/
export  async function Questionnaire_DelRecordAsync(lngQuestionId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(questionnaire_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngQuestionId);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const configDel = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.delete(strUrl, configDel);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrQuestionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function Questionnaire_DelQuestionnairesAsync(arrQuestionId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQuestionnairesAsync";
const strAction = "DelQuestionnaires";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionId, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw data.errorMsg;
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function Questionnaire_DelQuestionnairesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQuestionnairesByCondAsync";
const strAction = "DelQuestionnairesByCond";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Questionnaire_AddNewRecordAsync(objQuestionnaireEN: clsQuestionnaireEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQuestionnaireEN);
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

 /**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Questionnaire_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Questionnaire_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQuestionnaireEN);
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Questionnaire_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQuestionnaireEN);
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function Questionnaire_AddNewObjSave(objQuestionnaireEN: clsQuestionnaireEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
Questionnaire_CheckPropertyNew(objQuestionnaireEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionnaire_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await Questionnaire_CheckUniCond4Add(objQuestionnaireEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await Questionnaire_AddNewRecordAsync(objQuestionnaireEN);
if (returnBool == true)
{
//Questionnaire_ReFreshCache(objQuestionnaireEN.courseId);
}
else
{
const strInfo = `添加[题目(Questionnaire)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQuestionnaireEN.questionId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ questionnaire_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function Questionnaire_CheckUniCond4Add(objQuestionnaireEN: clsQuestionnaireEN): Promise<boolean>{
const strUniquenessCondition = Questionnaire_GetUniCondStr(objQuestionnaireEN);
const bolIsExistCondition = await Questionnaire_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export  async function Questionnaire_CheckUniCond4Update(objQuestionnaireEN: clsQuestionnaireEN): Promise<boolean>{
const strUniquenessCondition = Questionnaire_GetUniCondStr4Update(objQuestionnaireEN);
const bolIsExistCondition = await Questionnaire_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function Questionnaire_UpdateObjSave(objQuestionnaireEN: clsQuestionnaireEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQuestionnaireEN.sfUpdFldSetStr = objQuestionnaireEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQuestionnaireEN.questionId == 0 || objQuestionnaireEN.questionId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
Questionnaire_CheckProperty4Update(objQuestionnaireEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ questionnaire_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await Questionnaire_CheckUniCond4Update(objQuestionnaireEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await Questionnaire_UpdateRecordAsync(objQuestionnaireEN);
if (returnBool == true)
{
//Questionnaire_ReFreshCache(objQuestionnaireEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ questionnaire_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Questionnaire_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQuestionnaireEN);
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Questionnaire_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objQuestionnaireEN);
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQuestionnaireEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function Questionnaire_AddNewRecordWithReturnKeyAsync(objQuestionnaireEN: clsQuestionnaireEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Questionnaire_UpdateRecordAsync(objQuestionnaireEN: clsQuestionnaireEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQuestionnaireEN.sfUpdFldSetStr === undefined || objQuestionnaireEN.sfUpdFldSetStr === null || objQuestionnaireEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionnaireEN.questionId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objQuestionnaireEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Questionnaire_EditRecordExAsync(objQuestionnaireEN: clsQuestionnaireEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQuestionnaireEN.sfUpdFldSetStr === undefined || objQuestionnaireEN.sfUpdFldSetStr === null || objQuestionnaireEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionnaireEN.questionId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objQuestionnaireEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Questionnaire_UpdateWithConditionAsync(objQuestionnaireEN: clsQuestionnaireEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQuestionnaireEN.sfUpdFldSetStr === undefined || objQuestionnaireEN.sfUpdFldSetStr === null || objQuestionnaireEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQuestionnaireEN.questionId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);
objQuestionnaireEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQuestionnaireEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function Questionnaire_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngQuestionId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function Questionnaire_IsExistAsync(lngQuestionId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngQuestionId
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export  async function Questionnaire_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function Questionnaire_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(questionnaire_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrefix,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, questionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function Questionnaire_GetWebApiUrl(strController: string, strAction: string): string {
let strServiceUrl:string;
let strCurrIPAddressAndPort = "";
if (clsSysPara4WebApi.bolIsLocalHost == false)
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
}
else
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
}
if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true)
{
strServiceUrl = Format("{0}/{1}/{2}", strCurrIPAddressAndPort, strController, strAction);
}
else
{
strServiceUrl = Format("{0}/{1}/{2}/{3}", strCurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx, strController, strAction);
}
return strServiceUrl;
}
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function Questionnaire_BindDdl_QuestionIdByCourseIdInDiv(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsQuestionnaireWApi.BindDdl_QuestionIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsQuestionnaireWApi.BindDdl_QuestionIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_QuestionIdByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionIdByCourseIdInDivCache");
const strCondition = `courseId = '${ strCourseId }'`;
const arrObjLstSel = await Questionnaire_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQuestionnaireEN.con_QuestionId, clsQuestionnaireEN.con_QuestionName, "题目...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function Questionnaire_GetArrQuestionnaireByCourseId(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsQuestionnaireWApi.BindDdl_QuestionIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsQuestionnaireWApi.BindDdl_QuestionIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionIdByCourseIdInDivCache");
const arrQuestionnaire = new Array<clsQuestionnaireEN>();
const strCondition = `courseId = '${ strCourseId }'`;
const arrObjLstSel = await Questionnaire_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsQuestionnaireEN();
obj0.questionId = 0;
obj0.questionName = '选题目...';
arrQuestionnaire.push(obj0);
arrObjLstSel.forEach(x => arrQuestionnaire.push(x));
return arrQuestionnaire;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Questionnaire_CheckPropertyNew(pobjQuestionnaireEN: clsQuestionnaireEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQuestionnaireEN.questionName) === true )
{
 throw new Error(`(errid:Watl000411)字段[题目名称]不能为空(In 题目)!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseId) === true 
 || pobjQuestionnaireEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 题目)!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionSourceId) === true )
{
 throw new Error(`(errid:Watl000411)字段[题目来源Id]不能为空(In 题目)!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改日期]不能为空(In 题目)!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 题目)!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.levelModeTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[模式Id]不能为空(In 题目)!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionnaireEN.questionName) == false && GetStrLen(pobjQuestionnaireEN.questionName) > 500)
{
 throw new Error(`(errid:Watl000413)字段[题目名称(questionName)]的长度不能超过500(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionName}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionContent) == false && GetStrLen(pobjQuestionnaireEN.questionContent) > 4000)
{
 throw new Error(`(errid:Watl000413)字段[题目内容(questionContent)]的长度不能超过4000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionContent}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionMemo) == false && GetStrLen(pobjQuestionnaireEN.questionMemo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[题目说明(questionMemo)]的长度不能超过1000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionMemo}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionNo) == false && GetStrLen(pobjQuestionnaireEN.questionNo) > 10)
{
 throw new Error(`(errid:Watl000413)字段[题目编号(questionNo)]的长度不能超过10(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionNo}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.parentQuestionId) == false && GetStrLen(pobjQuestionnaireEN.parentQuestionId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[父题目Id(parentQuestionId)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.parentQuestionId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.examAnswer) == false && GetStrLen(pobjQuestionnaireEN.examAnswer) > 8000)
{
 throw new Error(`(errid:Watl000413)字段[题目答案(examAnswer)]的长度不能超过8000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.examAnswer}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseId) == false && GetStrLen(pobjQuestionnaireEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.courseId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionSourceId) == false && GetStrLen(pobjQuestionnaireEN.questionSourceId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[题目来源Id(questionSourceId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionSourceId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseChapterId) == false && GetStrLen(pobjQuestionnaireEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.courseChapterId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId) == false && GetStrLen(pobjQuestionnaireEN.questionTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[题目类型Id(questionTypeId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionTypeId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId4Course) == false && GetStrLen(pobjQuestionnaireEN.questionTypeId4Course) > 8)
{
 throw new Error(`(errid:Watl000413)字段[题目类型Id4课程(questionTypeId4Course)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionTypeId4Course}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerTypeId) == false && GetStrLen(pobjQuestionnaireEN.answerTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[答案类型ID(answerTypeId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.answerTypeId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.gridTitle) == false && GetStrLen(pobjQuestionnaireEN.gridTitle) > 30)
{
 throw new Error(`(errid:Watl000413)字段[表格标题(gridTitle)]的长度不能超过30(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.gridTitle}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerModeId) == false && GetStrLen(pobjQuestionnaireEN.answerModeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[答案模式Id(answerModeId)]的长度不能超过4(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.answerModeId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.defaultValue) == false && GetStrLen(pobjQuestionnaireEN.defaultValue) > 50)
{
 throw new Error(`(errid:Watl000413)字段[缺省值(defaultValue)]的长度不能超过50(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.defaultValue}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.defaultSelectItem) == false && GetStrLen(pobjQuestionnaireEN.defaultSelectItem) > 20)
{
 throw new Error(`(errid:Watl000413)字段[默认选项(defaultSelectItem)]的长度不能超过20(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.defaultSelectItem}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.limitedResourceType) == false && GetStrLen(pobjQuestionnaireEN.limitedResourceType) > 100)
{
 throw new Error(`(errid:Watl000413)字段[限制资源类型(limitedResourceType)]的长度不能超过100(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.limitedResourceType}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.examGradeId) == false && GetStrLen(pobjQuestionnaireEN.examGradeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[题库等级ID(examGradeId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.examGradeId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.textDirectId) == false && GetStrLen(pobjQuestionnaireEN.textDirectId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[文本方向ID(textDirectId)]的长度不能超过4(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.textDirectId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updDate) == false && GetStrLen(pobjQuestionnaireEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.updDate}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updUser) == false && GetStrLen(pobjQuestionnaireEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.updUser}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.memo) == false && GetStrLen(pobjQuestionnaireEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.memo}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionCode) == false && GetStrLen(pobjQuestionnaireEN.questionCode) > 8000)
{
 throw new Error(`(errid:Watl000413)字段[html代码(questionCode)]的长度不能超过8000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionCode}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.difficultyLevelId) == false && GetStrLen(pobjQuestionnaireEN.difficultyLevelId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[难度等级Id(difficultyLevelId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.difficultyLevelId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.sectionTypeId) == false && GetStrLen(pobjQuestionnaireEN.sectionTypeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[节点类型Id(sectionTypeId)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.sectionTypeId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.knowledgeGraphId) == false && GetStrLen(pobjQuestionnaireEN.knowledgeGraphId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[知识点图Id(knowledgeGraphId)]的长度不能超过10(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.knowledgeGraphId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionNameAdd) == false && GetStrLen(pobjQuestionnaireEN.questionNameAdd) > 500)
{
 throw new Error(`(errid:Watl000413)字段[题目补充(questionNameAdd)]的长度不能超过500(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionNameAdd}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTab) == false && GetStrLen(pobjQuestionnaireEN.codeTab) > 50)
{
 throw new Error(`(errid:Watl000413)字段[代码表(codeTab)]的长度不能超过50(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.codeTab}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabCode) == false && GetStrLen(pobjQuestionnaireEN.codeTabCode) > 50)
{
 throw new Error(`(errid:Watl000413)字段[CodeTab_Code(codeTabCode)]的长度不能超过50(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.codeTabCode}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabCondition) == false && GetStrLen(pobjQuestionnaireEN.codeTabCondition) > 200)
{
 throw new Error(`(errid:Watl000413)字段[代码表_条件(codeTabCondition)]的长度不能超过200(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.codeTabCondition}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabName) == false && GetStrLen(pobjQuestionnaireEN.codeTabName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[CodeTab_Name(codeTabName)]的长度不能超过50(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.codeTabName}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.relaEvent) == false && GetStrLen(pobjQuestionnaireEN.relaEvent) > 4000)
{
 throw new Error(`(errid:Watl000413)字段[相关事件(relaEvent)]的长度不能超过4000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.relaEvent}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.levelModeTypeId) == false && GetStrLen(pobjQuestionnaireEN.levelModeTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[模式Id(levelModeTypeId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.levelModeTypeId}(clsQuestionnaireBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerContent) == false && GetStrLen(pobjQuestionnaireEN.answerContent) > 8000)
{
 throw new Error(`(errid:Watl000413)字段[答案内容(answerContent)]的长度不能超过8000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.answerContent}(clsQuestionnaireBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQuestionnaireEN.questionId && undefined !== pobjQuestionnaireEN.questionId && tzDataType.isNumber(pobjQuestionnaireEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjQuestionnaireEN.questionId}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.questionIndex && undefined !== pobjQuestionnaireEN.questionIndex && tzDataType.isNumber(pobjQuestionnaireEN.questionIndex) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目序号(questionIndex)]的值:[${pobjQuestionnaireEN.questionIndex}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionName) == false && undefined !== pobjQuestionnaireEN.questionName && tzDataType.isString(pobjQuestionnaireEN.questionName) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目名称(questionName)]的值:[${pobjQuestionnaireEN.questionName}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionContent) == false && undefined !== pobjQuestionnaireEN.questionContent && tzDataType.isString(pobjQuestionnaireEN.questionContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目内容(questionContent)]的值:[${pobjQuestionnaireEN.questionContent}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionMemo) == false && undefined !== pobjQuestionnaireEN.questionMemo && tzDataType.isString(pobjQuestionnaireEN.questionMemo) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目说明(questionMemo)]的值:[${pobjQuestionnaireEN.questionMemo}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionNo) == false && undefined !== pobjQuestionnaireEN.questionNo && tzDataType.isString(pobjQuestionnaireEN.questionNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目编号(questionNo)]的值:[${pobjQuestionnaireEN.questionNo}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.parentQuestionId) == false && undefined !== pobjQuestionnaireEN.parentQuestionId && tzDataType.isString(pobjQuestionnaireEN.parentQuestionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[父题目Id(parentQuestionId)]的值:[${pobjQuestionnaireEN.parentQuestionId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.examAnswer) == false && undefined !== pobjQuestionnaireEN.examAnswer && tzDataType.isString(pobjQuestionnaireEN.examAnswer) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目答案(examAnswer)]的值:[${pobjQuestionnaireEN.examAnswer}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseId) == false && undefined !== pobjQuestionnaireEN.courseId && tzDataType.isString(pobjQuestionnaireEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjQuestionnaireEN.courseId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.levelNo && undefined !== pobjQuestionnaireEN.levelNo && tzDataType.isNumber(pobjQuestionnaireEN.levelNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[等级No(levelNo)]的值:[${pobjQuestionnaireEN.levelNo}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionSourceId) == false && undefined !== pobjQuestionnaireEN.questionSourceId && tzDataType.isString(pobjQuestionnaireEN.questionSourceId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目来源Id(questionSourceId)]的值:[${pobjQuestionnaireEN.questionSourceId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseChapterId) == false && undefined !== pobjQuestionnaireEN.courseChapterId && tzDataType.isString(pobjQuestionnaireEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程章节ID(courseChapterId)]的值:[${pobjQuestionnaireEN.courseChapterId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId) == false && undefined !== pobjQuestionnaireEN.questionTypeId && tzDataType.isString(pobjQuestionnaireEN.questionTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目类型Id(questionTypeId)]的值:[${pobjQuestionnaireEN.questionTypeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId4Course) == false && undefined !== pobjQuestionnaireEN.questionTypeId4Course && tzDataType.isString(pobjQuestionnaireEN.questionTypeId4Course) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目类型Id4课程(questionTypeId4Course)]的值:[${pobjQuestionnaireEN.questionTypeId4Course}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerTypeId) == false && undefined !== pobjQuestionnaireEN.answerTypeId && tzDataType.isString(pobjQuestionnaireEN.answerTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[答案类型ID(answerTypeId)]的值:[${pobjQuestionnaireEN.answerTypeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.gridTitle) == false && undefined !== pobjQuestionnaireEN.gridTitle && tzDataType.isString(pobjQuestionnaireEN.gridTitle) === false)
{
 throw new Error(`(errid:Watl000414)字段[表格标题(gridTitle)]的值:[${pobjQuestionnaireEN.gridTitle}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerModeId) == false && undefined !== pobjQuestionnaireEN.answerModeId && tzDataType.isString(pobjQuestionnaireEN.answerModeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[答案模式Id(answerModeId)]的值:[${pobjQuestionnaireEN.answerModeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isHaveAdditionalMemo && undefined !== pobjQuestionnaireEN.isHaveAdditionalMemo && tzDataType.isBoolean(pobjQuestionnaireEN.isHaveAdditionalMemo) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否有附加说明(isHaveAdditionalMemo)]的值:[${pobjQuestionnaireEN.isHaveAdditionalMemo}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.questionScore && undefined !== pobjQuestionnaireEN.questionScore && tzDataType.isNumber(pobjQuestionnaireEN.questionScore) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目得分(questionScore)]的值:[${pobjQuestionnaireEN.questionScore}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.defaultValue) == false && undefined !== pobjQuestionnaireEN.defaultValue && tzDataType.isString(pobjQuestionnaireEN.defaultValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[缺省值(defaultValue)]的值:[${pobjQuestionnaireEN.defaultValue}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.defaultSelectItem) == false && undefined !== pobjQuestionnaireEN.defaultSelectItem && tzDataType.isString(pobjQuestionnaireEN.defaultSelectItem) === false)
{
 throw new Error(`(errid:Watl000414)字段[默认选项(defaultSelectItem)]的值:[${pobjQuestionnaireEN.defaultSelectItem}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isShow && undefined !== pobjQuestionnaireEN.isShow && tzDataType.isBoolean(pobjQuestionnaireEN.isShow) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否启用(isShow)]的值:[${pobjQuestionnaireEN.isShow}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isCast && undefined !== pobjQuestionnaireEN.isCast && tzDataType.isBoolean(pobjQuestionnaireEN.isCast) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否播放(isCast)]的值:[${pobjQuestionnaireEN.isCast}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.likeCount && undefined !== pobjQuestionnaireEN.likeCount && tzDataType.isNumber(pobjQuestionnaireEN.likeCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源喜欢数量(likeCount)]的值:[${pobjQuestionnaireEN.likeCount}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.answerAttLimitSize && undefined !== pobjQuestionnaireEN.answerAttLimitSize && tzDataType.isNumber(pobjQuestionnaireEN.answerAttLimitSize) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答附件限制大小(answerAttLimitSize)]的值:[${pobjQuestionnaireEN.answerAttLimitSize}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.limitedResourceType) == false && undefined !== pobjQuestionnaireEN.limitedResourceType && tzDataType.isString(pobjQuestionnaireEN.limitedResourceType) === false)
{
 throw new Error(`(errid:Watl000414)字段[限制资源类型(limitedResourceType)]的值:[${pobjQuestionnaireEN.limitedResourceType}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isEffective && undefined !== pobjQuestionnaireEN.isEffective && tzDataType.isBoolean(pobjQuestionnaireEN.isEffective) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否有效(isEffective)]的值:[${pobjQuestionnaireEN.isEffective}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isCanInPaper && undefined !== pobjQuestionnaireEN.isCanInPaper && tzDataType.isBoolean(pobjQuestionnaireEN.isCanInPaper) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否可在Paper(isCanInPaper)]的值:[${pobjQuestionnaireEN.isCanInPaper}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.examGradeId) == false && undefined !== pobjQuestionnaireEN.examGradeId && tzDataType.isString(pobjQuestionnaireEN.examGradeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题库等级ID(examGradeId)]的值:[${pobjQuestionnaireEN.examGradeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.textDirectId) == false && undefined !== pobjQuestionnaireEN.textDirectId && tzDataType.isString(pobjQuestionnaireEN.textDirectId) === false)
{
 throw new Error(`(errid:Watl000414)字段[文本方向ID(textDirectId)]的值:[${pobjQuestionnaireEN.textDirectId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updDate) == false && undefined !== pobjQuestionnaireEN.updDate && tzDataType.isString(pobjQuestionnaireEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQuestionnaireEN.updDate}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updUser) == false && undefined !== pobjQuestionnaireEN.updUser && tzDataType.isString(pobjQuestionnaireEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjQuestionnaireEN.updUser}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.memo) == false && undefined !== pobjQuestionnaireEN.memo && tzDataType.isString(pobjQuestionnaireEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQuestionnaireEN.memo}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionCode) == false && undefined !== pobjQuestionnaireEN.questionCode && tzDataType.isString(pobjQuestionnaireEN.questionCode) === false)
{
 throw new Error(`(errid:Watl000414)字段[html代码(questionCode)]的值:[${pobjQuestionnaireEN.questionCode}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.difficultyLevelId) == false && undefined !== pobjQuestionnaireEN.difficultyLevelId && tzDataType.isString(pobjQuestionnaireEN.difficultyLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[难度等级Id(difficultyLevelId)]的值:[${pobjQuestionnaireEN.difficultyLevelId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.sectionTypeId) == false && undefined !== pobjQuestionnaireEN.sectionTypeId && tzDataType.isString(pobjQuestionnaireEN.sectionTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[节点类型Id(sectionTypeId)]的值:[${pobjQuestionnaireEN.sectionTypeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.knowledgeGraphId) == false && undefined !== pobjQuestionnaireEN.knowledgeGraphId && tzDataType.isString(pobjQuestionnaireEN.knowledgeGraphId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点图Id(knowledgeGraphId)]的值:[${pobjQuestionnaireEN.knowledgeGraphId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.firstIndent && undefined !== pobjQuestionnaireEN.firstIndent && tzDataType.isBoolean(pobjQuestionnaireEN.firstIndent) === false)
{
 throw new Error(`(errid:Watl000414)字段[首行缩进(firstIndent)]的值:[${pobjQuestionnaireEN.firstIndent}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionNameAdd) == false && undefined !== pobjQuestionnaireEN.questionNameAdd && tzDataType.isString(pobjQuestionnaireEN.questionNameAdd) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目补充(questionNameAdd)]的值:[${pobjQuestionnaireEN.questionNameAdd}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTab) == false && undefined !== pobjQuestionnaireEN.codeTab && tzDataType.isString(pobjQuestionnaireEN.codeTab) === false)
{
 throw new Error(`(errid:Watl000414)字段[代码表(codeTab)]的值:[${pobjQuestionnaireEN.codeTab}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabCode) == false && undefined !== pobjQuestionnaireEN.codeTabCode && tzDataType.isString(pobjQuestionnaireEN.codeTabCode) === false)
{
 throw new Error(`(errid:Watl000414)字段[CodeTab_Code(codeTabCode)]的值:[${pobjQuestionnaireEN.codeTabCode}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabCondition) == false && undefined !== pobjQuestionnaireEN.codeTabCondition && tzDataType.isString(pobjQuestionnaireEN.codeTabCondition) === false)
{
 throw new Error(`(errid:Watl000414)字段[代码表_条件(codeTabCondition)]的值:[${pobjQuestionnaireEN.codeTabCondition}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabName) == false && undefined !== pobjQuestionnaireEN.codeTabName && tzDataType.isString(pobjQuestionnaireEN.codeTabName) === false)
{
 throw new Error(`(errid:Watl000414)字段[CodeTab_Name(codeTabName)]的值:[${pobjQuestionnaireEN.codeTabName}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.fillInTextHeight && undefined !== pobjQuestionnaireEN.fillInTextHeight && tzDataType.isNumber(pobjQuestionnaireEN.fillInTextHeight) === false)
{
 throw new Error(`(errid:Watl000414)字段[填空框高度(fillInTextHeight)]的值:[${pobjQuestionnaireEN.fillInTextHeight}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.fillInTextWidth && undefined !== pobjQuestionnaireEN.fillInTextWidth && tzDataType.isNumber(pobjQuestionnaireEN.fillInTextWidth) === false)
{
 throw new Error(`(errid:Watl000414)字段[填空框宽度(fillInTextWidth)]的值:[${pobjQuestionnaireEN.fillInTextWidth}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isMulti4FillInText && undefined !== pobjQuestionnaireEN.isMulti4FillInText && tzDataType.isBoolean(pobjQuestionnaireEN.isMulti4FillInText) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否填空框多行(isMulti4FillInText)]的值:[${pobjQuestionnaireEN.isMulti4FillInText}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.checkBoxLimitCount && undefined !== pobjQuestionnaireEN.checkBoxLimitCount && tzDataType.isNumber(pobjQuestionnaireEN.checkBoxLimitCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[复选框限制数(checkBoxLimitCount)]的值:[${pobjQuestionnaireEN.checkBoxLimitCount}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isJs && undefined !== pobjQuestionnaireEN.isJs && tzDataType.isBoolean(pobjQuestionnaireEN.isJs) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否是JS(isJs)]的值:[${pobjQuestionnaireEN.isJs}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.memoTextWidth && undefined !== pobjQuestionnaireEN.memoTextWidth && tzDataType.isNumber(pobjQuestionnaireEN.memoTextWidth) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注框宽度(memoTextWidth)]的值:[${pobjQuestionnaireEN.memoTextWidth}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.relaEvent) == false && undefined !== pobjQuestionnaireEN.relaEvent && tzDataType.isString(pobjQuestionnaireEN.relaEvent) === false)
{
 throw new Error(`(errid:Watl000414)字段[相关事件(relaEvent)]的值:[${pobjQuestionnaireEN.relaEvent}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isTest && undefined !== pobjQuestionnaireEN.isTest && tzDataType.isBoolean(pobjQuestionnaireEN.isTest) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否测试(isTest)]的值:[${pobjQuestionnaireEN.isTest}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.levelModeTypeId) == false && undefined !== pobjQuestionnaireEN.levelModeTypeId && tzDataType.isString(pobjQuestionnaireEN.levelModeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[模式Id(levelModeTypeId)]的值:[${pobjQuestionnaireEN.levelModeTypeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (null != pobjQuestionnaireEN.isRandom && undefined !== pobjQuestionnaireEN.isRandom && tzDataType.isBoolean(pobjQuestionnaireEN.isRandom) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否随机(isRandom)]的值:[${pobjQuestionnaireEN.isRandom}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerContent) == false && undefined !== pobjQuestionnaireEN.answerContent && tzDataType.isString(pobjQuestionnaireEN.answerContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[答案内容(answerContent)]的值:[${pobjQuestionnaireEN.answerContent}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId) == false && pobjQuestionnaireEN.questionTypeId != '[nuull]' && GetStrLen(pobjQuestionnaireEN.questionTypeId) !=  2)
{
 throw ("(errid:Watl000415)字段[题目类型Id]作为外键字段,长度应该为2(In 题目)!(clsQuestionnaireBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerTypeId) == false && pobjQuestionnaireEN.answerTypeId != '[nuull]' && GetStrLen(pobjQuestionnaireEN.answerTypeId) !=  2)
{
 throw ("(errid:Watl000415)字段[答案类型ID]作为外键字段,长度应该为2(In 题目)!(clsQuestionnaireBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerModeId) == false && pobjQuestionnaireEN.answerModeId != '[nuull]' && GetStrLen(pobjQuestionnaireEN.answerModeId) !=  4)
{
 throw ("(errid:Watl000415)字段[答案模式Id]作为外键字段,长度应该为4(In 题目)!(clsQuestionnaireBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Questionnaire_CheckProperty4Update(pobjQuestionnaireEN: clsQuestionnaireEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQuestionnaireEN.questionName) == false && GetStrLen(pobjQuestionnaireEN.questionName) > 500)
{
 throw new Error(`(errid:Watl000416)字段[题目名称(questionName)]的长度不能超过500(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionName}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionContent) == false && GetStrLen(pobjQuestionnaireEN.questionContent) > 4000)
{
 throw new Error(`(errid:Watl000416)字段[题目内容(questionContent)]的长度不能超过4000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionContent}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionMemo) == false && GetStrLen(pobjQuestionnaireEN.questionMemo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[题目说明(questionMemo)]的长度不能超过1000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionMemo}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionNo) == false && GetStrLen(pobjQuestionnaireEN.questionNo) > 10)
{
 throw new Error(`(errid:Watl000416)字段[题目编号(questionNo)]的长度不能超过10(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionNo}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.parentQuestionId) == false && GetStrLen(pobjQuestionnaireEN.parentQuestionId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[父题目Id(parentQuestionId)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.parentQuestionId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.examAnswer) == false && GetStrLen(pobjQuestionnaireEN.examAnswer) > 8000)
{
 throw new Error(`(errid:Watl000416)字段[题目答案(examAnswer)]的长度不能超过8000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.examAnswer}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseId) == false && GetStrLen(pobjQuestionnaireEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.courseId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionSourceId) == false && GetStrLen(pobjQuestionnaireEN.questionSourceId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[题目来源Id(questionSourceId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionSourceId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseChapterId) == false && GetStrLen(pobjQuestionnaireEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.courseChapterId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId) == false && GetStrLen(pobjQuestionnaireEN.questionTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[题目类型Id(questionTypeId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionTypeId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId4Course) == false && GetStrLen(pobjQuestionnaireEN.questionTypeId4Course) > 8)
{
 throw new Error(`(errid:Watl000416)字段[题目类型Id4课程(questionTypeId4Course)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionTypeId4Course}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerTypeId) == false && GetStrLen(pobjQuestionnaireEN.answerTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[答案类型ID(answerTypeId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.answerTypeId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.gridTitle) == false && GetStrLen(pobjQuestionnaireEN.gridTitle) > 30)
{
 throw new Error(`(errid:Watl000416)字段[表格标题(gridTitle)]的长度不能超过30(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.gridTitle}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerModeId) == false && GetStrLen(pobjQuestionnaireEN.answerModeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[答案模式Id(answerModeId)]的长度不能超过4(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.answerModeId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.defaultValue) == false && GetStrLen(pobjQuestionnaireEN.defaultValue) > 50)
{
 throw new Error(`(errid:Watl000416)字段[缺省值(defaultValue)]的长度不能超过50(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.defaultValue}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.defaultSelectItem) == false && GetStrLen(pobjQuestionnaireEN.defaultSelectItem) > 20)
{
 throw new Error(`(errid:Watl000416)字段[默认选项(defaultSelectItem)]的长度不能超过20(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.defaultSelectItem}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.limitedResourceType) == false && GetStrLen(pobjQuestionnaireEN.limitedResourceType) > 100)
{
 throw new Error(`(errid:Watl000416)字段[限制资源类型(limitedResourceType)]的长度不能超过100(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.limitedResourceType}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.examGradeId) == false && GetStrLen(pobjQuestionnaireEN.examGradeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[题库等级ID(examGradeId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.examGradeId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.textDirectId) == false && GetStrLen(pobjQuestionnaireEN.textDirectId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[文本方向ID(textDirectId)]的长度不能超过4(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.textDirectId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updDate) == false && GetStrLen(pobjQuestionnaireEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.updDate}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updUser) == false && GetStrLen(pobjQuestionnaireEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.updUser}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.memo) == false && GetStrLen(pobjQuestionnaireEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.memo}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionCode) == false && GetStrLen(pobjQuestionnaireEN.questionCode) > 8000)
{
 throw new Error(`(errid:Watl000416)字段[html代码(questionCode)]的长度不能超过8000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionCode}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.difficultyLevelId) == false && GetStrLen(pobjQuestionnaireEN.difficultyLevelId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[难度等级Id(difficultyLevelId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.difficultyLevelId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.sectionTypeId) == false && GetStrLen(pobjQuestionnaireEN.sectionTypeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[节点类型Id(sectionTypeId)]的长度不能超过8(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.sectionTypeId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.knowledgeGraphId) == false && GetStrLen(pobjQuestionnaireEN.knowledgeGraphId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[知识点图Id(knowledgeGraphId)]的长度不能超过10(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.knowledgeGraphId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionNameAdd) == false && GetStrLen(pobjQuestionnaireEN.questionNameAdd) > 500)
{
 throw new Error(`(errid:Watl000416)字段[题目补充(questionNameAdd)]的长度不能超过500(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.questionNameAdd}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTab) == false && GetStrLen(pobjQuestionnaireEN.codeTab) > 50)
{
 throw new Error(`(errid:Watl000416)字段[代码表(codeTab)]的长度不能超过50(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.codeTab}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabCode) == false && GetStrLen(pobjQuestionnaireEN.codeTabCode) > 50)
{
 throw new Error(`(errid:Watl000416)字段[CodeTab_Code(codeTabCode)]的长度不能超过50(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.codeTabCode}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabCondition) == false && GetStrLen(pobjQuestionnaireEN.codeTabCondition) > 200)
{
 throw new Error(`(errid:Watl000416)字段[代码表_条件(codeTabCondition)]的长度不能超过200(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.codeTabCondition}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabName) == false && GetStrLen(pobjQuestionnaireEN.codeTabName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[CodeTab_Name(codeTabName)]的长度不能超过50(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.codeTabName}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.relaEvent) == false && GetStrLen(pobjQuestionnaireEN.relaEvent) > 4000)
{
 throw new Error(`(errid:Watl000416)字段[相关事件(relaEvent)]的长度不能超过4000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.relaEvent}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.levelModeTypeId) == false && GetStrLen(pobjQuestionnaireEN.levelModeTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[模式Id(levelModeTypeId)]的长度不能超过2(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.levelModeTypeId}(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerContent) == false && GetStrLen(pobjQuestionnaireEN.answerContent) > 8000)
{
 throw new Error(`(errid:Watl000416)字段[答案内容(answerContent)]的长度不能超过8000(In 题目(Questionnaire))!值:${pobjQuestionnaireEN.answerContent}(clsQuestionnaireBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQuestionnaireEN.questionId && undefined !== pobjQuestionnaireEN.questionId && tzDataType.isNumber(pobjQuestionnaireEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjQuestionnaireEN.questionId}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.questionIndex && undefined !== pobjQuestionnaireEN.questionIndex && tzDataType.isNumber(pobjQuestionnaireEN.questionIndex) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目序号(questionIndex)]的值:[${pobjQuestionnaireEN.questionIndex}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionName) == false && undefined !== pobjQuestionnaireEN.questionName && tzDataType.isString(pobjQuestionnaireEN.questionName) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目名称(questionName)]的值:[${pobjQuestionnaireEN.questionName}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionContent) == false && undefined !== pobjQuestionnaireEN.questionContent && tzDataType.isString(pobjQuestionnaireEN.questionContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目内容(questionContent)]的值:[${pobjQuestionnaireEN.questionContent}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionMemo) == false && undefined !== pobjQuestionnaireEN.questionMemo && tzDataType.isString(pobjQuestionnaireEN.questionMemo) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目说明(questionMemo)]的值:[${pobjQuestionnaireEN.questionMemo}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionNo) == false && undefined !== pobjQuestionnaireEN.questionNo && tzDataType.isString(pobjQuestionnaireEN.questionNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目编号(questionNo)]的值:[${pobjQuestionnaireEN.questionNo}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.parentQuestionId) == false && undefined !== pobjQuestionnaireEN.parentQuestionId && tzDataType.isString(pobjQuestionnaireEN.parentQuestionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[父题目Id(parentQuestionId)]的值:[${pobjQuestionnaireEN.parentQuestionId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.examAnswer) == false && undefined !== pobjQuestionnaireEN.examAnswer && tzDataType.isString(pobjQuestionnaireEN.examAnswer) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目答案(examAnswer)]的值:[${pobjQuestionnaireEN.examAnswer}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseId) == false && undefined !== pobjQuestionnaireEN.courseId && tzDataType.isString(pobjQuestionnaireEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjQuestionnaireEN.courseId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.levelNo && undefined !== pobjQuestionnaireEN.levelNo && tzDataType.isNumber(pobjQuestionnaireEN.levelNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[等级No(levelNo)]的值:[${pobjQuestionnaireEN.levelNo}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionSourceId) == false && undefined !== pobjQuestionnaireEN.questionSourceId && tzDataType.isString(pobjQuestionnaireEN.questionSourceId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目来源Id(questionSourceId)]的值:[${pobjQuestionnaireEN.questionSourceId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.courseChapterId) == false && undefined !== pobjQuestionnaireEN.courseChapterId && tzDataType.isString(pobjQuestionnaireEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程章节ID(courseChapterId)]的值:[${pobjQuestionnaireEN.courseChapterId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId) == false && undefined !== pobjQuestionnaireEN.questionTypeId && tzDataType.isString(pobjQuestionnaireEN.questionTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目类型Id(questionTypeId)]的值:[${pobjQuestionnaireEN.questionTypeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId4Course) == false && undefined !== pobjQuestionnaireEN.questionTypeId4Course && tzDataType.isString(pobjQuestionnaireEN.questionTypeId4Course) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目类型Id4课程(questionTypeId4Course)]的值:[${pobjQuestionnaireEN.questionTypeId4Course}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerTypeId) == false && undefined !== pobjQuestionnaireEN.answerTypeId && tzDataType.isString(pobjQuestionnaireEN.answerTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[答案类型ID(answerTypeId)]的值:[${pobjQuestionnaireEN.answerTypeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.gridTitle) == false && undefined !== pobjQuestionnaireEN.gridTitle && tzDataType.isString(pobjQuestionnaireEN.gridTitle) === false)
{
 throw new Error(`(errid:Watl000417)字段[表格标题(gridTitle)]的值:[${pobjQuestionnaireEN.gridTitle}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerModeId) == false && undefined !== pobjQuestionnaireEN.answerModeId && tzDataType.isString(pobjQuestionnaireEN.answerModeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[答案模式Id(answerModeId)]的值:[${pobjQuestionnaireEN.answerModeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isHaveAdditionalMemo && undefined !== pobjQuestionnaireEN.isHaveAdditionalMemo && tzDataType.isBoolean(pobjQuestionnaireEN.isHaveAdditionalMemo) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否有附加说明(isHaveAdditionalMemo)]的值:[${pobjQuestionnaireEN.isHaveAdditionalMemo}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.questionScore && undefined !== pobjQuestionnaireEN.questionScore && tzDataType.isNumber(pobjQuestionnaireEN.questionScore) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目得分(questionScore)]的值:[${pobjQuestionnaireEN.questionScore}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.defaultValue) == false && undefined !== pobjQuestionnaireEN.defaultValue && tzDataType.isString(pobjQuestionnaireEN.defaultValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[缺省值(defaultValue)]的值:[${pobjQuestionnaireEN.defaultValue}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.defaultSelectItem) == false && undefined !== pobjQuestionnaireEN.defaultSelectItem && tzDataType.isString(pobjQuestionnaireEN.defaultSelectItem) === false)
{
 throw new Error(`(errid:Watl000417)字段[默认选项(defaultSelectItem)]的值:[${pobjQuestionnaireEN.defaultSelectItem}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isShow && undefined !== pobjQuestionnaireEN.isShow && tzDataType.isBoolean(pobjQuestionnaireEN.isShow) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否启用(isShow)]的值:[${pobjQuestionnaireEN.isShow}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isCast && undefined !== pobjQuestionnaireEN.isCast && tzDataType.isBoolean(pobjQuestionnaireEN.isCast) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否播放(isCast)]的值:[${pobjQuestionnaireEN.isCast}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.likeCount && undefined !== pobjQuestionnaireEN.likeCount && tzDataType.isNumber(pobjQuestionnaireEN.likeCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源喜欢数量(likeCount)]的值:[${pobjQuestionnaireEN.likeCount}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.answerAttLimitSize && undefined !== pobjQuestionnaireEN.answerAttLimitSize && tzDataType.isNumber(pobjQuestionnaireEN.answerAttLimitSize) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答附件限制大小(answerAttLimitSize)]的值:[${pobjQuestionnaireEN.answerAttLimitSize}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.limitedResourceType) == false && undefined !== pobjQuestionnaireEN.limitedResourceType && tzDataType.isString(pobjQuestionnaireEN.limitedResourceType) === false)
{
 throw new Error(`(errid:Watl000417)字段[限制资源类型(limitedResourceType)]的值:[${pobjQuestionnaireEN.limitedResourceType}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isEffective && undefined !== pobjQuestionnaireEN.isEffective && tzDataType.isBoolean(pobjQuestionnaireEN.isEffective) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否有效(isEffective)]的值:[${pobjQuestionnaireEN.isEffective}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isCanInPaper && undefined !== pobjQuestionnaireEN.isCanInPaper && tzDataType.isBoolean(pobjQuestionnaireEN.isCanInPaper) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否可在Paper(isCanInPaper)]的值:[${pobjQuestionnaireEN.isCanInPaper}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.examGradeId) == false && undefined !== pobjQuestionnaireEN.examGradeId && tzDataType.isString(pobjQuestionnaireEN.examGradeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题库等级ID(examGradeId)]的值:[${pobjQuestionnaireEN.examGradeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.textDirectId) == false && undefined !== pobjQuestionnaireEN.textDirectId && tzDataType.isString(pobjQuestionnaireEN.textDirectId) === false)
{
 throw new Error(`(errid:Watl000417)字段[文本方向ID(textDirectId)]的值:[${pobjQuestionnaireEN.textDirectId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updDate) == false && undefined !== pobjQuestionnaireEN.updDate && tzDataType.isString(pobjQuestionnaireEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQuestionnaireEN.updDate}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.updUser) == false && undefined !== pobjQuestionnaireEN.updUser && tzDataType.isString(pobjQuestionnaireEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjQuestionnaireEN.updUser}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.memo) == false && undefined !== pobjQuestionnaireEN.memo && tzDataType.isString(pobjQuestionnaireEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQuestionnaireEN.memo}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionCode) == false && undefined !== pobjQuestionnaireEN.questionCode && tzDataType.isString(pobjQuestionnaireEN.questionCode) === false)
{
 throw new Error(`(errid:Watl000417)字段[html代码(questionCode)]的值:[${pobjQuestionnaireEN.questionCode}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.difficultyLevelId) == false && undefined !== pobjQuestionnaireEN.difficultyLevelId && tzDataType.isString(pobjQuestionnaireEN.difficultyLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[难度等级Id(difficultyLevelId)]的值:[${pobjQuestionnaireEN.difficultyLevelId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.sectionTypeId) == false && undefined !== pobjQuestionnaireEN.sectionTypeId && tzDataType.isString(pobjQuestionnaireEN.sectionTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[节点类型Id(sectionTypeId)]的值:[${pobjQuestionnaireEN.sectionTypeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.knowledgeGraphId) == false && undefined !== pobjQuestionnaireEN.knowledgeGraphId && tzDataType.isString(pobjQuestionnaireEN.knowledgeGraphId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点图Id(knowledgeGraphId)]的值:[${pobjQuestionnaireEN.knowledgeGraphId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.firstIndent && undefined !== pobjQuestionnaireEN.firstIndent && tzDataType.isBoolean(pobjQuestionnaireEN.firstIndent) === false)
{
 throw new Error(`(errid:Watl000417)字段[首行缩进(firstIndent)]的值:[${pobjQuestionnaireEN.firstIndent}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.questionNameAdd) == false && undefined !== pobjQuestionnaireEN.questionNameAdd && tzDataType.isString(pobjQuestionnaireEN.questionNameAdd) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目补充(questionNameAdd)]的值:[${pobjQuestionnaireEN.questionNameAdd}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTab) == false && undefined !== pobjQuestionnaireEN.codeTab && tzDataType.isString(pobjQuestionnaireEN.codeTab) === false)
{
 throw new Error(`(errid:Watl000417)字段[代码表(codeTab)]的值:[${pobjQuestionnaireEN.codeTab}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabCode) == false && undefined !== pobjQuestionnaireEN.codeTabCode && tzDataType.isString(pobjQuestionnaireEN.codeTabCode) === false)
{
 throw new Error(`(errid:Watl000417)字段[CodeTab_Code(codeTabCode)]的值:[${pobjQuestionnaireEN.codeTabCode}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabCondition) == false && undefined !== pobjQuestionnaireEN.codeTabCondition && tzDataType.isString(pobjQuestionnaireEN.codeTabCondition) === false)
{
 throw new Error(`(errid:Watl000417)字段[代码表_条件(codeTabCondition)]的值:[${pobjQuestionnaireEN.codeTabCondition}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.codeTabName) == false && undefined !== pobjQuestionnaireEN.codeTabName && tzDataType.isString(pobjQuestionnaireEN.codeTabName) === false)
{
 throw new Error(`(errid:Watl000417)字段[CodeTab_Name(codeTabName)]的值:[${pobjQuestionnaireEN.codeTabName}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.fillInTextHeight && undefined !== pobjQuestionnaireEN.fillInTextHeight && tzDataType.isNumber(pobjQuestionnaireEN.fillInTextHeight) === false)
{
 throw new Error(`(errid:Watl000417)字段[填空框高度(fillInTextHeight)]的值:[${pobjQuestionnaireEN.fillInTextHeight}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.fillInTextWidth && undefined !== pobjQuestionnaireEN.fillInTextWidth && tzDataType.isNumber(pobjQuestionnaireEN.fillInTextWidth) === false)
{
 throw new Error(`(errid:Watl000417)字段[填空框宽度(fillInTextWidth)]的值:[${pobjQuestionnaireEN.fillInTextWidth}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isMulti4FillInText && undefined !== pobjQuestionnaireEN.isMulti4FillInText && tzDataType.isBoolean(pobjQuestionnaireEN.isMulti4FillInText) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否填空框多行(isMulti4FillInText)]的值:[${pobjQuestionnaireEN.isMulti4FillInText}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.checkBoxLimitCount && undefined !== pobjQuestionnaireEN.checkBoxLimitCount && tzDataType.isNumber(pobjQuestionnaireEN.checkBoxLimitCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[复选框限制数(checkBoxLimitCount)]的值:[${pobjQuestionnaireEN.checkBoxLimitCount}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isJs && undefined !== pobjQuestionnaireEN.isJs && tzDataType.isBoolean(pobjQuestionnaireEN.isJs) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否是JS(isJs)]的值:[${pobjQuestionnaireEN.isJs}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.memoTextWidth && undefined !== pobjQuestionnaireEN.memoTextWidth && tzDataType.isNumber(pobjQuestionnaireEN.memoTextWidth) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注框宽度(memoTextWidth)]的值:[${pobjQuestionnaireEN.memoTextWidth}], 非法,应该为数值型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.relaEvent) == false && undefined !== pobjQuestionnaireEN.relaEvent && tzDataType.isString(pobjQuestionnaireEN.relaEvent) === false)
{
 throw new Error(`(errid:Watl000417)字段[相关事件(relaEvent)]的值:[${pobjQuestionnaireEN.relaEvent}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isTest && undefined !== pobjQuestionnaireEN.isTest && tzDataType.isBoolean(pobjQuestionnaireEN.isTest) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否测试(isTest)]的值:[${pobjQuestionnaireEN.isTest}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.levelModeTypeId) == false && undefined !== pobjQuestionnaireEN.levelModeTypeId && tzDataType.isString(pobjQuestionnaireEN.levelModeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[模式Id(levelModeTypeId)]的值:[${pobjQuestionnaireEN.levelModeTypeId}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (null != pobjQuestionnaireEN.isRandom && undefined !== pobjQuestionnaireEN.isRandom && tzDataType.isBoolean(pobjQuestionnaireEN.isRandom) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否随机(isRandom)]的值:[${pobjQuestionnaireEN.isRandom}], 非法,应该为布尔型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerContent) == false && undefined !== pobjQuestionnaireEN.answerContent && tzDataType.isString(pobjQuestionnaireEN.answerContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[答案内容(answerContent)]的值:[${pobjQuestionnaireEN.answerContent}], 非法,应该为字符型(In 题目(Questionnaire))!(clsQuestionnaireBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQuestionnaireEN.questionId 
 || pobjQuestionnaireEN.questionId != null && pobjQuestionnaireEN.questionId.toString()  ===  ""
 || pobjQuestionnaireEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[题目Id]不能为空(In 题目)!(clsQuestionnaireBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQuestionnaireEN.questionTypeId) == false && pobjQuestionnaireEN.questionTypeId != '[nuull]' && GetStrLen(pobjQuestionnaireEN.questionTypeId) !=  2)
{
 throw ("(errid:Watl000418)字段[题目类型Id]作为外键字段,长度应该为2(In 题目)!(clsQuestionnaireBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerTypeId) == false && pobjQuestionnaireEN.answerTypeId != '[nuull]' && GetStrLen(pobjQuestionnaireEN.answerTypeId) !=  2)
{
 throw ("(errid:Watl000418)字段[答案类型ID]作为外键字段,长度应该为2(In 题目)!(clsQuestionnaireBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQuestionnaireEN.answerModeId) == false && pobjQuestionnaireEN.answerModeId != '[nuull]' && GetStrLen(pobjQuestionnaireEN.answerModeId) !=  4)
{
 throw ("(errid:Watl000418)字段[答案模式Id]作为外键字段,长度应该为4(In 题目)!(clsQuestionnaireBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Questionnaire_GetJSONStrByObj (pobjQuestionnaireEN: clsQuestionnaireEN): string
{
pobjQuestionnaireEN.sfUpdFldSetStr = pobjQuestionnaireEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQuestionnaireEN);
}
catch(objException)
{
const strEx = GetExceptionStr(objException);
myShowErrorMsg(strEx);
}
if (strJson == undefined) return "";
else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function Questionnaire_GetObjLstByJSONStr (strJSON: string): Array<clsQuestionnaireEN>
{
let arrQuestionnaireObjLst = new Array<clsQuestionnaireEN>();
if (strJSON === "")
{
return arrQuestionnaireObjLst;
}
try
{
arrQuestionnaireObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQuestionnaireObjLst;
}
return arrQuestionnaireObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQuestionnaireObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function Questionnaire_GetObjLstByJSONObjLst (arrQuestionnaireObjLstS: Array<clsQuestionnaireEN>): Array<clsQuestionnaireEN>
{
const arrQuestionnaireObjLst = new Array<clsQuestionnaireEN>();
for (const objInFor of arrQuestionnaireObjLstS) {
const obj1 = Questionnaire_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQuestionnaireObjLst.push(obj1);
}
return arrQuestionnaireObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Questionnaire_GetObjByJSONStr (strJSON: string): clsQuestionnaireEN
{
let pobjQuestionnaireEN = new clsQuestionnaireEN();
if (strJSON === "")
{
return pobjQuestionnaireEN;
}
try
{
pobjQuestionnaireEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQuestionnaireEN;
}
return pobjQuestionnaireEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function Questionnaire_GetCombineCondition(objQuestionnaireCond: clsQuestionnaireEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_QuestionId, objQuestionnaireCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionIndex) == true)
{
const strComparisonOpQuestionIndex:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionIndex];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_QuestionIndex, objQuestionnaireCond.questionIndex, strComparisonOpQuestionIndex);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionName) == true)
{
const strComparisonOpQuestionName:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionName, objQuestionnaireCond.questionName, strComparisonOpQuestionName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionContent) == true)
{
const strComparisonOpQuestionContent:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionContent, objQuestionnaireCond.questionContent, strComparisonOpQuestionContent);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionMemo) == true)
{
const strComparisonOpQuestionMemo:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionMemo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionMemo, objQuestionnaireCond.questionMemo, strComparisonOpQuestionMemo);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionNo) == true)
{
const strComparisonOpQuestionNo:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionNo, objQuestionnaireCond.questionNo, strComparisonOpQuestionNo);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_ParentQuestionId) == true)
{
const strComparisonOpParentQuestionId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_ParentQuestionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_ParentQuestionId, objQuestionnaireCond.parentQuestionId, strComparisonOpParentQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_ExamAnswer) == true)
{
const strComparisonOpExamAnswer:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_ExamAnswer];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_ExamAnswer, objQuestionnaireCond.examAnswer, strComparisonOpExamAnswer);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_CourseId, objQuestionnaireCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_LevelNo) == true)
{
const strComparisonOpLevelNo:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_LevelNo];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_LevelNo, objQuestionnaireCond.levelNo, strComparisonOpLevelNo);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionSourceId) == true)
{
const strComparisonOpQuestionSourceId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionSourceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionSourceId, objQuestionnaireCond.questionSourceId, strComparisonOpQuestionSourceId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_CourseChapterId, objQuestionnaireCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionTypeId) == true)
{
const strComparisonOpQuestionTypeId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionTypeId, objQuestionnaireCond.questionTypeId, strComparisonOpQuestionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionTypeId4Course) == true)
{
const strComparisonOpQuestionTypeId4Course:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionTypeId4Course];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionTypeId4Course, objQuestionnaireCond.questionTypeId4Course, strComparisonOpQuestionTypeId4Course);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_AnswerTypeId) == true)
{
const strComparisonOpAnswerTypeId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_AnswerTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_AnswerTypeId, objQuestionnaireCond.answerTypeId, strComparisonOpAnswerTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_GridTitle) == true)
{
const strComparisonOpGridTitle:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_GridTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_GridTitle, objQuestionnaireCond.gridTitle, strComparisonOpGridTitle);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_AnswerModeId) == true)
{
const strComparisonOpAnswerModeId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_AnswerModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_AnswerModeId, objQuestionnaireCond.answerModeId, strComparisonOpAnswerModeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsHaveAdditionalMemo) == true)
{
if (objQuestionnaireCond.isHaveAdditionalMemo == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsHaveAdditionalMemo);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsHaveAdditionalMemo);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionScore) == true)
{
const strComparisonOpQuestionScore:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionScore];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_QuestionScore, objQuestionnaireCond.questionScore, strComparisonOpQuestionScore);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_DefaultValue) == true)
{
const strComparisonOpDefaultValue:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_DefaultValue];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_DefaultValue, objQuestionnaireCond.defaultValue, strComparisonOpDefaultValue);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_DefaultSelectItem) == true)
{
const strComparisonOpDefaultSelectItem:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_DefaultSelectItem];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_DefaultSelectItem, objQuestionnaireCond.defaultSelectItem, strComparisonOpDefaultSelectItem);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsShow) == true)
{
if (objQuestionnaireCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsCast) == true)
{
if (objQuestionnaireCond.isCast == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsCast);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsCast);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_LikeCount) == true)
{
const strComparisonOpLikeCount:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_LikeCount];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_LikeCount, objQuestionnaireCond.likeCount, strComparisonOpLikeCount);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_AnswerAttLimitSize) == true)
{
const strComparisonOpAnswerAttLimitSize:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_AnswerAttLimitSize];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_AnswerAttLimitSize, objQuestionnaireCond.answerAttLimitSize, strComparisonOpAnswerAttLimitSize);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_LimitedResourceType) == true)
{
const strComparisonOpLimitedResourceType:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_LimitedResourceType];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_LimitedResourceType, objQuestionnaireCond.limitedResourceType, strComparisonOpLimitedResourceType);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsEffective) == true)
{
if (objQuestionnaireCond.isEffective == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsEffective);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsEffective);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsCanInPaper) == true)
{
if (objQuestionnaireCond.isCanInPaper == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsCanInPaper);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsCanInPaper);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_ExamGradeId) == true)
{
const strComparisonOpExamGradeId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_ExamGradeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_ExamGradeId, objQuestionnaireCond.examGradeId, strComparisonOpExamGradeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_TextDirectId) == true)
{
const strComparisonOpTextDirectId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_TextDirectId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_TextDirectId, objQuestionnaireCond.textDirectId, strComparisonOpTextDirectId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_UpdDate, objQuestionnaireCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_UpdUser, objQuestionnaireCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_Memo, objQuestionnaireCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionCode) == true)
{
const strComparisonOpQuestionCode:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionCode, objQuestionnaireCond.questionCode, strComparisonOpQuestionCode);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_DifficultyLevelId) == true)
{
const strComparisonOpDifficultyLevelId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_DifficultyLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_DifficultyLevelId, objQuestionnaireCond.difficultyLevelId, strComparisonOpDifficultyLevelId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_SectionTypeId) == true)
{
const strComparisonOpSectionTypeId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_SectionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_SectionTypeId, objQuestionnaireCond.sectionTypeId, strComparisonOpSectionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_KnowledgeGraphId) == true)
{
const strComparisonOpKnowledgeGraphId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_KnowledgeGraphId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_KnowledgeGraphId, objQuestionnaireCond.knowledgeGraphId, strComparisonOpKnowledgeGraphId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_FirstIndent) == true)
{
if (objQuestionnaireCond.firstIndent == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_FirstIndent);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_FirstIndent);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_QuestionNameAdd) == true)
{
const strComparisonOpQuestionNameAdd:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_QuestionNameAdd];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_QuestionNameAdd, objQuestionnaireCond.questionNameAdd, strComparisonOpQuestionNameAdd);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_CodeTab) == true)
{
const strComparisonOpCodeTab:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_CodeTab];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_CodeTab, objQuestionnaireCond.codeTab, strComparisonOpCodeTab);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_CodeTabCode) == true)
{
const strComparisonOpCodeTabCode:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_CodeTabCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_CodeTabCode, objQuestionnaireCond.codeTabCode, strComparisonOpCodeTabCode);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_CodeTabCondition) == true)
{
const strComparisonOpCodeTabCondition:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_CodeTabCondition];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_CodeTabCondition, objQuestionnaireCond.codeTabCondition, strComparisonOpCodeTabCondition);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_CodeTabName) == true)
{
const strComparisonOpCodeTabName:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_CodeTabName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_CodeTabName, objQuestionnaireCond.codeTabName, strComparisonOpCodeTabName);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_FillInTextHeight) == true)
{
const strComparisonOpFillInTextHeight:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_FillInTextHeight];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_FillInTextHeight, objQuestionnaireCond.fillInTextHeight, strComparisonOpFillInTextHeight);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_FillInTextWidth) == true)
{
const strComparisonOpFillInTextWidth:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_FillInTextWidth];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_FillInTextWidth, objQuestionnaireCond.fillInTextWidth, strComparisonOpFillInTextWidth);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsMulti4FillInText) == true)
{
if (objQuestionnaireCond.isMulti4FillInText == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsMulti4FillInText);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsMulti4FillInText);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_CheckBoxLimitCount) == true)
{
const strComparisonOpCheckBoxLimitCount:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_CheckBoxLimitCount];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_CheckBoxLimitCount, objQuestionnaireCond.checkBoxLimitCount, strComparisonOpCheckBoxLimitCount);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsJs) == true)
{
if (objQuestionnaireCond.isJs == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsJs);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsJs);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_MemoTextWidth) == true)
{
const strComparisonOpMemoTextWidth:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_MemoTextWidth];
strWhereCond += Format(" And {0} {2} {1}", clsQuestionnaireEN.con_MemoTextWidth, objQuestionnaireCond.memoTextWidth, strComparisonOpMemoTextWidth);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_RelaEvent) == true)
{
const strComparisonOpRelaEvent:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_RelaEvent];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_RelaEvent, objQuestionnaireCond.relaEvent, strComparisonOpRelaEvent);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsTest) == true)
{
if (objQuestionnaireCond.isTest == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsTest);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsTest);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_LevelModeTypeId) == true)
{
const strComparisonOpLevelModeTypeId:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_LevelModeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_LevelModeTypeId, objQuestionnaireCond.levelModeTypeId, strComparisonOpLevelModeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_IsRandom) == true)
{
if (objQuestionnaireCond.isRandom == true)
{
strWhereCond += Format(" And {0} = '1'", clsQuestionnaireEN.con_IsRandom);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQuestionnaireEN.con_IsRandom);
}
}
if (Object.prototype.hasOwnProperty.call(objQuestionnaireCond.dicFldComparisonOp, clsQuestionnaireEN.con_AnswerContent) == true)
{
const strComparisonOpAnswerContent:string = objQuestionnaireCond.dicFldComparisonOp[clsQuestionnaireEN.con_AnswerContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsQuestionnaireEN.con_AnswerContent, objQuestionnaireCond.answerContent, strComparisonOpAnswerContent);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--Questionnaire(题目),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function Questionnaire_GetUniCondStr(objQuestionnaireEN: clsQuestionnaireEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QuestionId = '{0}'", objQuestionnaireEN.questionId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--Questionnaire(题目),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function Questionnaire_GetUniCondStr4Update(objQuestionnaireEN: clsQuestionnaireEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and QuestionId <> '{0}'", objQuestionnaireEN.questionId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objQuestionnaireEN.questionId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objQuestionnaireENS:源对象
 * @param objQuestionnaireENT:目标对象
*/
export  function Questionnaire_CopyObjTo(objQuestionnaireENS: clsQuestionnaireEN , objQuestionnaireENT: clsQuestionnaireEN ): void 
{
objQuestionnaireENT.questionId = objQuestionnaireENS.questionId; //题目Id
objQuestionnaireENT.questionIndex = objQuestionnaireENS.questionIndex; //题目序号
objQuestionnaireENT.questionName = objQuestionnaireENS.questionName; //题目名称
objQuestionnaireENT.questionContent = objQuestionnaireENS.questionContent; //题目内容
objQuestionnaireENT.questionMemo = objQuestionnaireENS.questionMemo; //题目说明
objQuestionnaireENT.questionNo = objQuestionnaireENS.questionNo; //题目编号
objQuestionnaireENT.parentQuestionId = objQuestionnaireENS.parentQuestionId; //父题目Id
objQuestionnaireENT.examAnswer = objQuestionnaireENS.examAnswer; //题目答案
objQuestionnaireENT.courseId = objQuestionnaireENS.courseId; //课程Id
objQuestionnaireENT.levelNo = objQuestionnaireENS.levelNo; //等级No
objQuestionnaireENT.questionSourceId = objQuestionnaireENS.questionSourceId; //题目来源Id
objQuestionnaireENT.courseChapterId = objQuestionnaireENS.courseChapterId; //课程章节ID
objQuestionnaireENT.questionTypeId = objQuestionnaireENS.questionTypeId; //题目类型Id
objQuestionnaireENT.questionTypeId4Course = objQuestionnaireENS.questionTypeId4Course; //题目类型Id4课程
objQuestionnaireENT.answerTypeId = objQuestionnaireENS.answerTypeId; //答案类型ID
objQuestionnaireENT.gridTitle = objQuestionnaireENS.gridTitle; //表格标题
objQuestionnaireENT.answerModeId = objQuestionnaireENS.answerModeId; //答案模式Id
objQuestionnaireENT.isHaveAdditionalMemo = objQuestionnaireENS.isHaveAdditionalMemo; //是否有附加说明
objQuestionnaireENT.questionScore = objQuestionnaireENS.questionScore; //题目得分
objQuestionnaireENT.defaultValue = objQuestionnaireENS.defaultValue; //缺省值
objQuestionnaireENT.defaultSelectItem = objQuestionnaireENS.defaultSelectItem; //默认选项
objQuestionnaireENT.isShow = objQuestionnaireENS.isShow; //是否启用
objQuestionnaireENT.isCast = objQuestionnaireENS.isCast; //是否播放
objQuestionnaireENT.likeCount = objQuestionnaireENS.likeCount; //资源喜欢数量
objQuestionnaireENT.answerAttLimitSize = objQuestionnaireENS.answerAttLimitSize; //回答附件限制大小
objQuestionnaireENT.limitedResourceType = objQuestionnaireENS.limitedResourceType; //限制资源类型
objQuestionnaireENT.isEffective = objQuestionnaireENS.isEffective; //是否有效
objQuestionnaireENT.isCanInPaper = objQuestionnaireENS.isCanInPaper; //是否可在Paper
objQuestionnaireENT.examGradeId = objQuestionnaireENS.examGradeId; //题库等级ID
objQuestionnaireENT.textDirectId = objQuestionnaireENS.textDirectId; //文本方向ID
objQuestionnaireENT.updDate = objQuestionnaireENS.updDate; //修改日期
objQuestionnaireENT.updUser = objQuestionnaireENS.updUser; //修改人
objQuestionnaireENT.memo = objQuestionnaireENS.memo; //备注
objQuestionnaireENT.questionCode = objQuestionnaireENS.questionCode; //html代码
objQuestionnaireENT.difficultyLevelId = objQuestionnaireENS.difficultyLevelId; //难度等级Id
objQuestionnaireENT.sectionTypeId = objQuestionnaireENS.sectionTypeId; //节点类型Id
objQuestionnaireENT.knowledgeGraphId = objQuestionnaireENS.knowledgeGraphId; //知识点图Id
objQuestionnaireENT.firstIndent = objQuestionnaireENS.firstIndent; //首行缩进
objQuestionnaireENT.questionNameAdd = objQuestionnaireENS.questionNameAdd; //题目补充
objQuestionnaireENT.codeTab = objQuestionnaireENS.codeTab; //代码表
objQuestionnaireENT.codeTabCode = objQuestionnaireENS.codeTabCode; //CodeTab_Code
objQuestionnaireENT.codeTabCondition = objQuestionnaireENS.codeTabCondition; //代码表_条件
objQuestionnaireENT.codeTabName = objQuestionnaireENS.codeTabName; //CodeTab_Name
objQuestionnaireENT.fillInTextHeight = objQuestionnaireENS.fillInTextHeight; //填空框高度
objQuestionnaireENT.fillInTextWidth = objQuestionnaireENS.fillInTextWidth; //填空框宽度
objQuestionnaireENT.isMulti4FillInText = objQuestionnaireENS.isMulti4FillInText; //是否填空框多行
objQuestionnaireENT.checkBoxLimitCount = objQuestionnaireENS.checkBoxLimitCount; //复选框限制数
objQuestionnaireENT.isJs = objQuestionnaireENS.isJs; //是否是JS
objQuestionnaireENT.memoTextWidth = objQuestionnaireENS.memoTextWidth; //备注框宽度
objQuestionnaireENT.relaEvent = objQuestionnaireENS.relaEvent; //相关事件
objQuestionnaireENT.isTest = objQuestionnaireENS.isTest; //是否测试
objQuestionnaireENT.levelModeTypeId = objQuestionnaireENS.levelModeTypeId; //模式Id
objQuestionnaireENT.isRandom = objQuestionnaireENS.isRandom; //是否随机
objQuestionnaireENT.answerContent = objQuestionnaireENS.answerContent; //答案内容
objQuestionnaireENT.sfUpdFldSetStr = objQuestionnaireENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQuestionnaireENS:源对象
 * @param objQuestionnaireENT:目标对象
*/
export  function Questionnaire_GetObjFromJsonObj(objQuestionnaireENS: clsQuestionnaireEN): clsQuestionnaireEN 
{
 const objQuestionnaireENT: clsQuestionnaireEN = new clsQuestionnaireEN();
ObjectAssign(objQuestionnaireENT, objQuestionnaireENS);
 return objQuestionnaireENT;
}