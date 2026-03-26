
 /**
 * 类名:clsvQuestionnaireWApi
 * 表名:vQuestionnaire(01120019)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:03
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
 * v题目(vQuestionnaire)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvQuestionnaireEN } from "@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaireEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQuestionnaire_Controller = "vQuestionnaireApi";
 export const vQuestionnaire_ConstructorName = "vQuestionnaire";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngQuestionId:关键字
 * @returns 对象
 **/
export  async function vQuestionnaire_GetObjByQuestionIdAsync(lngQuestionId: number): Promise<clsvQuestionnaireEN|null>  
{
const strThisFuncName = "GetObjByQuestionIdAsync";

if (lngQuestionId == 0)
{
  const strMsg = Format("参数:[lngQuestionId]不能为空!(In clsvQuestionnaireWApi.GetObjByQuestionIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByQuestionId";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const objvQuestionnaire = vQuestionnaire_GetObjFromJsonObj(returnObj);
return objvQuestionnaire;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQuestionnaire_SortFunDefa(a:clsvQuestionnaireEN , b:clsvQuestionnaireEN): number 
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
export  function vQuestionnaire_SortFunDefa2Fld(a:clsvQuestionnaireEN , b:clsvQuestionnaireEN): number 
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
export  function vQuestionnaire_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQuestionnaireEN.con_QuestionId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.questionId-b.questionId;
}
case clsvQuestionnaireEN.con_QuestionIndex:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.questionIndex-b.questionIndex;
}
case clsvQuestionnaireEN.con_QuestionName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionName == null) return -1;
if (b.questionName == null) return 1;
return a.questionName.localeCompare(b.questionName);
}
case clsvQuestionnaireEN.con_QuestionContent:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionContent == null) return -1;
if (b.questionContent == null) return 1;
return a.questionContent.localeCompare(b.questionContent);
}
case clsvQuestionnaireEN.con_QuestionMemo:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionMemo == null) return -1;
if (b.questionMemo == null) return 1;
return a.questionMemo.localeCompare(b.questionMemo);
}
case clsvQuestionnaireEN.con_QuestionNo:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionNo == null) return -1;
if (b.questionNo == null) return 1;
return a.questionNo.localeCompare(b.questionNo);
}
case clsvQuestionnaireEN.con_ParentQuestionId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.parentQuestionId == null) return -1;
if (b.parentQuestionId == null) return 1;
return a.parentQuestionId.localeCompare(b.parentQuestionId);
}
case clsvQuestionnaireEN.con_ExamAnswer:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.examAnswer == null) return -1;
if (b.examAnswer == null) return 1;
return a.examAnswer.localeCompare(b.examAnswer);
}
case clsvQuestionnaireEN.con_CourseId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvQuestionnaireEN.con_CourseCode:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.courseCode == null) return -1;
if (b.courseCode == null) return 1;
return a.courseCode.localeCompare(b.courseCode);
}
case clsvQuestionnaireEN.con_CourseName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.courseName == null) return -1;
if (b.courseName == null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clsvQuestionnaireEN.con_LevelNo:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.levelNo-b.levelNo;
}
case clsvQuestionnaireEN.con_CourseChapterId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.courseChapterId == null) return -1;
if (b.courseChapterId == null) return 1;
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsvQuestionnaireEN.con_CourseChapterName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.courseChapterName == null) return -1;
if (b.courseChapterName == null) return 1;
return a.courseChapterName.localeCompare(b.courseChapterName);
}
case clsvQuestionnaireEN.con_ChapterId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.chapterId == null) return -1;
if (b.chapterId == null) return 1;
return a.chapterId.localeCompare(b.chapterId);
}
case clsvQuestionnaireEN.con_SectionId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.sectionId == null) return -1;
if (b.sectionId == null) return 1;
return a.sectionId.localeCompare(b.sectionId);
}
case clsvQuestionnaireEN.con_ChapterName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.chapterName == null) return -1;
if (b.chapterName == null) return 1;
return a.chapterName.localeCompare(b.chapterName);
}
case clsvQuestionnaireEN.con_SectionName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.sectionName == null) return -1;
if (b.sectionName == null) return 1;
return a.sectionName.localeCompare(b.sectionName);
}
case clsvQuestionnaireEN.con_ChapterNameSim:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.chapterNameSim == null) return -1;
if (b.chapterNameSim == null) return 1;
return a.chapterNameSim.localeCompare(b.chapterNameSim);
}
case clsvQuestionnaireEN.con_SectionNameSim:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.sectionNameSim == null) return -1;
if (b.sectionNameSim == null) return 1;
return a.sectionNameSim.localeCompare(b.sectionNameSim);
}
case clsvQuestionnaireEN.con_ParentNodeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.parentNodeId == null) return -1;
if (b.parentNodeId == null) return 1;
return a.parentNodeId.localeCompare(b.parentNodeId);
}
case clsvQuestionnaireEN.con_CourseChapterReferred:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.courseChapterReferred == null) return -1;
if (b.courseChapterReferred == null) return 1;
return a.courseChapterReferred.localeCompare(b.courseChapterReferred);
}
case clsvQuestionnaireEN.con_ParentNodeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.parentNodeName == null) return -1;
if (b.parentNodeName == null) return 1;
return a.parentNodeName.localeCompare(b.parentNodeName);
}
case clsvQuestionnaireEN.con_ParentNodeReferred:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.parentNodeReferred == null) return -1;
if (b.parentNodeReferred == null) return 1;
return a.parentNodeReferred.localeCompare(b.parentNodeReferred);
}
case clsvQuestionnaireEN.con_QuestionTypeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionTypeId == null) return -1;
if (b.questionTypeId == null) return 1;
return a.questionTypeId.localeCompare(b.questionTypeId);
}
case clsvQuestionnaireEN.con_QuestionTypeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionTypeName == null) return -1;
if (b.questionTypeName == null) return 1;
return a.questionTypeName.localeCompare(b.questionTypeName);
}
case clsvQuestionnaireEN.con_QuestionTypeId4Course:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.questionTypeId4Course.localeCompare(b.questionTypeId4Course);
}
case clsvQuestionnaireEN.con_QuestionTypeName4Course:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionTypeName4Course == null) return -1;
if (b.questionTypeName4Course == null) return 1;
return a.questionTypeName4Course.localeCompare(b.questionTypeName4Course);
}
case clsvQuestionnaireEN.con_AnswerTypeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.answerTypeId == null) return -1;
if (b.answerTypeId == null) return 1;
return a.answerTypeId.localeCompare(b.answerTypeId);
}
case clsvQuestionnaireEN.con_AnswerTypeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.answerTypeName == null) return -1;
if (b.answerTypeName == null) return 1;
return a.answerTypeName.localeCompare(b.answerTypeName);
}
case clsvQuestionnaireEN.con_GridTitle:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.gridTitle == null) return -1;
if (b.gridTitle == null) return 1;
return a.gridTitle.localeCompare(b.gridTitle);
}
case clsvQuestionnaireEN.con_AnswerModeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.answerModeId == null) return -1;
if (b.answerModeId == null) return 1;
return a.answerModeId.localeCompare(b.answerModeId);
}
case clsvQuestionnaireEN.con_AnswerModeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.answerModeName == null) return -1;
if (b.answerModeName == null) return 1;
return a.answerModeName.localeCompare(b.answerModeName);
}
case clsvQuestionnaireEN.con_QuestionScore:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.questionScore-b.questionScore;
}
case clsvQuestionnaireEN.con_DefaultValue:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.defaultValue == null) return -1;
if (b.defaultValue == null) return 1;
return a.defaultValue.localeCompare(b.defaultValue);
}
case clsvQuestionnaireEN.con_DefaultSelectItem:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.defaultSelectItem == null) return -1;
if (b.defaultSelectItem == null) return 1;
return a.defaultSelectItem.localeCompare(b.defaultSelectItem);
}
case clsvQuestionnaireEN.con_IsShow:
return (a: clsvQuestionnaireEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_IsCast:
return (a: clsvQuestionnaireEN) => {
if (a.isCast == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_LikeCount:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.likeCount-b.likeCount;
}
case clsvQuestionnaireEN.con_AnswerAttLimitSize:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.answerAttLimitSize-b.answerAttLimitSize;
}
case clsvQuestionnaireEN.con_LimitedResourceType:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.limitedResourceType == null) return -1;
if (b.limitedResourceType == null) return 1;
return a.limitedResourceType.localeCompare(b.limitedResourceType);
}
case clsvQuestionnaireEN.con_IsEffective:
return (a: clsvQuestionnaireEN) => {
if (a.isEffective == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_IsCanInPaper:
return (a: clsvQuestionnaireEN) => {
if (a.isCanInPaper == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_ExamGradeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.examGradeId == null) return -1;
if (b.examGradeId == null) return 1;
return a.examGradeId.localeCompare(b.examGradeId);
}
case clsvQuestionnaireEN.con_ExamGradeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.examGradeName == null) return -1;
if (b.examGradeName == null) return 1;
return a.examGradeName.localeCompare(b.examGradeName);
}
case clsvQuestionnaireEN.con_TextDirectId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.textDirectId == null) return -1;
if (b.textDirectId == null) return 1;
return a.textDirectId.localeCompare(b.textDirectId);
}
case clsvQuestionnaireEN.con_UpdDate:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsvQuestionnaireEN.con_UpdUser:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsvQuestionnaireEN.con_Memo:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvQuestionnaireEN.con_FirstIndent:
return (a: clsvQuestionnaireEN) => {
if (a.firstIndent == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_CodeTab:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.codeTab == null) return -1;
if (b.codeTab == null) return 1;
return a.codeTab.localeCompare(b.codeTab);
}
case clsvQuestionnaireEN.con_CodeTabCode:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.codeTabCode == null) return -1;
if (b.codeTabCode == null) return 1;
return a.codeTabCode.localeCompare(b.codeTabCode);
}
case clsvQuestionnaireEN.con_CodeTabCondition:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.codeTabCondition == null) return -1;
if (b.codeTabCondition == null) return 1;
return a.codeTabCondition.localeCompare(b.codeTabCondition);
}
case clsvQuestionnaireEN.con_CodeTabName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.codeTabName == null) return -1;
if (b.codeTabName == null) return 1;
return a.codeTabName.localeCompare(b.codeTabName);
}
case clsvQuestionnaireEN.con_CourseIdChapter:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.courseIdChapter == null) return -1;
if (b.courseIdChapter == null) return 1;
return a.courseIdChapter.localeCompare(b.courseIdChapter);
}
case clsvQuestionnaireEN.con_OptionNum:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.optionNum-b.optionNum;
}
case clsvQuestionnaireEN.con_ChapterOrderNum:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.chapterOrderNum-b.chapterOrderNum;
}
case clsvQuestionnaireEN.con_QuestionNameAdd:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionNameAdd == null) return -1;
if (b.questionNameAdd == null) return 1;
return a.questionNameAdd.localeCompare(b.questionNameAdd);
}
case clsvQuestionnaireEN.con_DifficultyLevelId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.difficultyLevelId == null) return -1;
if (b.difficultyLevelId == null) return 1;
return a.difficultyLevelId.localeCompare(b.difficultyLevelId);
}
case clsvQuestionnaireEN.con_FillInTextHeight:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.fillInTextHeight-b.fillInTextHeight;
}
case clsvQuestionnaireEN.con_FillInTextWidth:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.fillInTextWidth-b.fillInTextWidth;
}
case clsvQuestionnaireEN.con_IsHaveAdditionalMemo:
return (a: clsvQuestionnaireEN) => {
if (a.isHaveAdditionalMemo == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_IsJs:
return (a: clsvQuestionnaireEN) => {
if (a.isJs == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_IsMulti4FillInText:
return (a: clsvQuestionnaireEN) => {
if (a.isMulti4FillInText == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_KnowledgeGraphId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.knowledgeGraphId == null) return -1;
if (b.knowledgeGraphId == null) return 1;
return a.knowledgeGraphId.localeCompare(b.knowledgeGraphId);
}
case clsvQuestionnaireEN.con_MemoTextWidth:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.memoTextWidth-b.memoTextWidth;
}
case clsvQuestionnaireEN.con_QuestionCode:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.questionCode == null) return -1;
if (b.questionCode == null) return 1;
return a.questionCode.localeCompare(b.questionCode);
}
case clsvQuestionnaireEN.con_SectionTypeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.sectionTypeId == null) return -1;
if (b.sectionTypeId == null) return 1;
return a.sectionTypeId.localeCompare(b.sectionTypeId);
}
case clsvQuestionnaireEN.con_CheckBoxLimitCount:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return a.checkBoxLimitCount-b.checkBoxLimitCount;
}
case clsvQuestionnaireEN.con_RelaEvent:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (a.relaEvent == null) return -1;
if (b.relaEvent == null) return 1;
return a.relaEvent.localeCompare(b.relaEvent);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaire]中不存在!(in ${ vQuestionnaire_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQuestionnaireEN.con_QuestionId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.questionId-a.questionId;
}
case clsvQuestionnaireEN.con_QuestionIndex:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.questionIndex-a.questionIndex;
}
case clsvQuestionnaireEN.con_QuestionName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionName == null) return -1;
if (a.questionName == null) return 1;
return b.questionName.localeCompare(a.questionName);
}
case clsvQuestionnaireEN.con_QuestionContent:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionContent == null) return -1;
if (a.questionContent == null) return 1;
return b.questionContent.localeCompare(a.questionContent);
}
case clsvQuestionnaireEN.con_QuestionMemo:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionMemo == null) return -1;
if (a.questionMemo == null) return 1;
return b.questionMemo.localeCompare(a.questionMemo);
}
case clsvQuestionnaireEN.con_QuestionNo:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionNo == null) return -1;
if (a.questionNo == null) return 1;
return b.questionNo.localeCompare(a.questionNo);
}
case clsvQuestionnaireEN.con_ParentQuestionId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.parentQuestionId == null) return -1;
if (a.parentQuestionId == null) return 1;
return b.parentQuestionId.localeCompare(a.parentQuestionId);
}
case clsvQuestionnaireEN.con_ExamAnswer:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.examAnswer == null) return -1;
if (a.examAnswer == null) return 1;
return b.examAnswer.localeCompare(a.examAnswer);
}
case clsvQuestionnaireEN.con_CourseId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvQuestionnaireEN.con_CourseCode:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.courseCode == null) return -1;
if (a.courseCode == null) return 1;
return b.courseCode.localeCompare(a.courseCode);
}
case clsvQuestionnaireEN.con_CourseName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.courseName == null) return -1;
if (a.courseName == null) return 1;
return b.courseName.localeCompare(a.courseName);
}
case clsvQuestionnaireEN.con_LevelNo:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.levelNo-a.levelNo;
}
case clsvQuestionnaireEN.con_CourseChapterId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.courseChapterId == null) return -1;
if (a.courseChapterId == null) return 1;
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsvQuestionnaireEN.con_CourseChapterName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.courseChapterName == null) return -1;
if (a.courseChapterName == null) return 1;
return b.courseChapterName.localeCompare(a.courseChapterName);
}
case clsvQuestionnaireEN.con_ChapterId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.chapterId == null) return -1;
if (a.chapterId == null) return 1;
return b.chapterId.localeCompare(a.chapterId);
}
case clsvQuestionnaireEN.con_SectionId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.sectionId == null) return -1;
if (a.sectionId == null) return 1;
return b.sectionId.localeCompare(a.sectionId);
}
case clsvQuestionnaireEN.con_ChapterName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.chapterName == null) return -1;
if (a.chapterName == null) return 1;
return b.chapterName.localeCompare(a.chapterName);
}
case clsvQuestionnaireEN.con_SectionName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.sectionName == null) return -1;
if (a.sectionName == null) return 1;
return b.sectionName.localeCompare(a.sectionName);
}
case clsvQuestionnaireEN.con_ChapterNameSim:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.chapterNameSim == null) return -1;
if (a.chapterNameSim == null) return 1;
return b.chapterNameSim.localeCompare(a.chapterNameSim);
}
case clsvQuestionnaireEN.con_SectionNameSim:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.sectionNameSim == null) return -1;
if (a.sectionNameSim == null) return 1;
return b.sectionNameSim.localeCompare(a.sectionNameSim);
}
case clsvQuestionnaireEN.con_ParentNodeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.parentNodeId == null) return -1;
if (a.parentNodeId == null) return 1;
return b.parentNodeId.localeCompare(a.parentNodeId);
}
case clsvQuestionnaireEN.con_CourseChapterReferred:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.courseChapterReferred == null) return -1;
if (a.courseChapterReferred == null) return 1;
return b.courseChapterReferred.localeCompare(a.courseChapterReferred);
}
case clsvQuestionnaireEN.con_ParentNodeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.parentNodeName == null) return -1;
if (a.parentNodeName == null) return 1;
return b.parentNodeName.localeCompare(a.parentNodeName);
}
case clsvQuestionnaireEN.con_ParentNodeReferred:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.parentNodeReferred == null) return -1;
if (a.parentNodeReferred == null) return 1;
return b.parentNodeReferred.localeCompare(a.parentNodeReferred);
}
case clsvQuestionnaireEN.con_QuestionTypeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionTypeId == null) return -1;
if (a.questionTypeId == null) return 1;
return b.questionTypeId.localeCompare(a.questionTypeId);
}
case clsvQuestionnaireEN.con_QuestionTypeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionTypeName == null) return -1;
if (a.questionTypeName == null) return 1;
return b.questionTypeName.localeCompare(a.questionTypeName);
}
case clsvQuestionnaireEN.con_QuestionTypeId4Course:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.questionTypeId4Course.localeCompare(a.questionTypeId4Course);
}
case clsvQuestionnaireEN.con_QuestionTypeName4Course:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionTypeName4Course == null) return -1;
if (a.questionTypeName4Course == null) return 1;
return b.questionTypeName4Course.localeCompare(a.questionTypeName4Course);
}
case clsvQuestionnaireEN.con_AnswerTypeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.answerTypeId == null) return -1;
if (a.answerTypeId == null) return 1;
return b.answerTypeId.localeCompare(a.answerTypeId);
}
case clsvQuestionnaireEN.con_AnswerTypeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.answerTypeName == null) return -1;
if (a.answerTypeName == null) return 1;
return b.answerTypeName.localeCompare(a.answerTypeName);
}
case clsvQuestionnaireEN.con_GridTitle:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.gridTitle == null) return -1;
if (a.gridTitle == null) return 1;
return b.gridTitle.localeCompare(a.gridTitle);
}
case clsvQuestionnaireEN.con_AnswerModeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.answerModeId == null) return -1;
if (a.answerModeId == null) return 1;
return b.answerModeId.localeCompare(a.answerModeId);
}
case clsvQuestionnaireEN.con_AnswerModeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.answerModeName == null) return -1;
if (a.answerModeName == null) return 1;
return b.answerModeName.localeCompare(a.answerModeName);
}
case clsvQuestionnaireEN.con_QuestionScore:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.questionScore-a.questionScore;
}
case clsvQuestionnaireEN.con_DefaultValue:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.defaultValue == null) return -1;
if (a.defaultValue == null) return 1;
return b.defaultValue.localeCompare(a.defaultValue);
}
case clsvQuestionnaireEN.con_DefaultSelectItem:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.defaultSelectItem == null) return -1;
if (a.defaultSelectItem == null) return 1;
return b.defaultSelectItem.localeCompare(a.defaultSelectItem);
}
case clsvQuestionnaireEN.con_IsShow:
return (b: clsvQuestionnaireEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_IsCast:
return (b: clsvQuestionnaireEN) => {
if (b.isCast == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_LikeCount:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.likeCount-a.likeCount;
}
case clsvQuestionnaireEN.con_AnswerAttLimitSize:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.answerAttLimitSize-a.answerAttLimitSize;
}
case clsvQuestionnaireEN.con_LimitedResourceType:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.limitedResourceType == null) return -1;
if (a.limitedResourceType == null) return 1;
return b.limitedResourceType.localeCompare(a.limitedResourceType);
}
case clsvQuestionnaireEN.con_IsEffective:
return (b: clsvQuestionnaireEN) => {
if (b.isEffective == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_IsCanInPaper:
return (b: clsvQuestionnaireEN) => {
if (b.isCanInPaper == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_ExamGradeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.examGradeId == null) return -1;
if (a.examGradeId == null) return 1;
return b.examGradeId.localeCompare(a.examGradeId);
}
case clsvQuestionnaireEN.con_ExamGradeName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.examGradeName == null) return -1;
if (a.examGradeName == null) return 1;
return b.examGradeName.localeCompare(a.examGradeName);
}
case clsvQuestionnaireEN.con_TextDirectId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.textDirectId == null) return -1;
if (a.textDirectId == null) return 1;
return b.textDirectId.localeCompare(a.textDirectId);
}
case clsvQuestionnaireEN.con_UpdDate:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsvQuestionnaireEN.con_UpdUser:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsvQuestionnaireEN.con_Memo:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvQuestionnaireEN.con_FirstIndent:
return (b: clsvQuestionnaireEN) => {
if (b.firstIndent == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_CodeTab:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.codeTab == null) return -1;
if (a.codeTab == null) return 1;
return b.codeTab.localeCompare(a.codeTab);
}
case clsvQuestionnaireEN.con_CodeTabCode:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.codeTabCode == null) return -1;
if (a.codeTabCode == null) return 1;
return b.codeTabCode.localeCompare(a.codeTabCode);
}
case clsvQuestionnaireEN.con_CodeTabCondition:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.codeTabCondition == null) return -1;
if (a.codeTabCondition == null) return 1;
return b.codeTabCondition.localeCompare(a.codeTabCondition);
}
case clsvQuestionnaireEN.con_CodeTabName:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.codeTabName == null) return -1;
if (a.codeTabName == null) return 1;
return b.codeTabName.localeCompare(a.codeTabName);
}
case clsvQuestionnaireEN.con_CourseIdChapter:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.courseIdChapter == null) return -1;
if (a.courseIdChapter == null) return 1;
return b.courseIdChapter.localeCompare(a.courseIdChapter);
}
case clsvQuestionnaireEN.con_OptionNum:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.optionNum-a.optionNum;
}
case clsvQuestionnaireEN.con_ChapterOrderNum:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.chapterOrderNum-a.chapterOrderNum;
}
case clsvQuestionnaireEN.con_QuestionNameAdd:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionNameAdd == null) return -1;
if (a.questionNameAdd == null) return 1;
return b.questionNameAdd.localeCompare(a.questionNameAdd);
}
case clsvQuestionnaireEN.con_DifficultyLevelId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.difficultyLevelId == null) return -1;
if (a.difficultyLevelId == null) return 1;
return b.difficultyLevelId.localeCompare(a.difficultyLevelId);
}
case clsvQuestionnaireEN.con_FillInTextHeight:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.fillInTextHeight-a.fillInTextHeight;
}
case clsvQuestionnaireEN.con_FillInTextWidth:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.fillInTextWidth-a.fillInTextWidth;
}
case clsvQuestionnaireEN.con_IsHaveAdditionalMemo:
return (b: clsvQuestionnaireEN) => {
if (b.isHaveAdditionalMemo == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_IsJs:
return (b: clsvQuestionnaireEN) => {
if (b.isJs == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_IsMulti4FillInText:
return (b: clsvQuestionnaireEN) => {
if (b.isMulti4FillInText == true) return 1;
else return -1
}
case clsvQuestionnaireEN.con_KnowledgeGraphId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.knowledgeGraphId == null) return -1;
if (a.knowledgeGraphId == null) return 1;
return b.knowledgeGraphId.localeCompare(a.knowledgeGraphId);
}
case clsvQuestionnaireEN.con_MemoTextWidth:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.memoTextWidth-a.memoTextWidth;
}
case clsvQuestionnaireEN.con_QuestionCode:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.questionCode == null) return -1;
if (a.questionCode == null) return 1;
return b.questionCode.localeCompare(a.questionCode);
}
case clsvQuestionnaireEN.con_SectionTypeId:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.sectionTypeId == null) return -1;
if (a.sectionTypeId == null) return 1;
return b.sectionTypeId.localeCompare(a.sectionTypeId);
}
case clsvQuestionnaireEN.con_CheckBoxLimitCount:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
return b.checkBoxLimitCount-a.checkBoxLimitCount;
}
case clsvQuestionnaireEN.con_RelaEvent:
return (a: clsvQuestionnaireEN, b: clsvQuestionnaireEN) => {
if (b.relaEvent == null) return -1;
if (a.relaEvent == null) return 1;
return b.relaEvent.localeCompare(a.relaEvent);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaire]中不存在!(in ${ vQuestionnaire_ConstructorName}.${ strThisFuncName})`;
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
export  async function vQuestionnaire_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQuestionnaireEN.con_QuestionId:
return (obj: clsvQuestionnaireEN) => {
return obj.questionId === value;
}
case clsvQuestionnaireEN.con_QuestionIndex:
return (obj: clsvQuestionnaireEN) => {
return obj.questionIndex === value;
}
case clsvQuestionnaireEN.con_QuestionName:
return (obj: clsvQuestionnaireEN) => {
return obj.questionName === value;
}
case clsvQuestionnaireEN.con_QuestionContent:
return (obj: clsvQuestionnaireEN) => {
return obj.questionContent === value;
}
case clsvQuestionnaireEN.con_QuestionMemo:
return (obj: clsvQuestionnaireEN) => {
return obj.questionMemo === value;
}
case clsvQuestionnaireEN.con_QuestionNo:
return (obj: clsvQuestionnaireEN) => {
return obj.questionNo === value;
}
case clsvQuestionnaireEN.con_ParentQuestionId:
return (obj: clsvQuestionnaireEN) => {
return obj.parentQuestionId === value;
}
case clsvQuestionnaireEN.con_ExamAnswer:
return (obj: clsvQuestionnaireEN) => {
return obj.examAnswer === value;
}
case clsvQuestionnaireEN.con_CourseId:
return (obj: clsvQuestionnaireEN) => {
return obj.courseId === value;
}
case clsvQuestionnaireEN.con_CourseCode:
return (obj: clsvQuestionnaireEN) => {
return obj.courseCode === value;
}
case clsvQuestionnaireEN.con_CourseName:
return (obj: clsvQuestionnaireEN) => {
return obj.courseName === value;
}
case clsvQuestionnaireEN.con_LevelNo:
return (obj: clsvQuestionnaireEN) => {
return obj.levelNo === value;
}
case clsvQuestionnaireEN.con_CourseChapterId:
return (obj: clsvQuestionnaireEN) => {
return obj.courseChapterId === value;
}
case clsvQuestionnaireEN.con_CourseChapterName:
return (obj: clsvQuestionnaireEN) => {
return obj.courseChapterName === value;
}
case clsvQuestionnaireEN.con_ChapterId:
return (obj: clsvQuestionnaireEN) => {
return obj.chapterId === value;
}
case clsvQuestionnaireEN.con_SectionId:
return (obj: clsvQuestionnaireEN) => {
return obj.sectionId === value;
}
case clsvQuestionnaireEN.con_ChapterName:
return (obj: clsvQuestionnaireEN) => {
return obj.chapterName === value;
}
case clsvQuestionnaireEN.con_SectionName:
return (obj: clsvQuestionnaireEN) => {
return obj.sectionName === value;
}
case clsvQuestionnaireEN.con_ChapterNameSim:
return (obj: clsvQuestionnaireEN) => {
return obj.chapterNameSim === value;
}
case clsvQuestionnaireEN.con_SectionNameSim:
return (obj: clsvQuestionnaireEN) => {
return obj.sectionNameSim === value;
}
case clsvQuestionnaireEN.con_ParentNodeId:
return (obj: clsvQuestionnaireEN) => {
return obj.parentNodeId === value;
}
case clsvQuestionnaireEN.con_CourseChapterReferred:
return (obj: clsvQuestionnaireEN) => {
return obj.courseChapterReferred === value;
}
case clsvQuestionnaireEN.con_ParentNodeName:
return (obj: clsvQuestionnaireEN) => {
return obj.parentNodeName === value;
}
case clsvQuestionnaireEN.con_ParentNodeReferred:
return (obj: clsvQuestionnaireEN) => {
return obj.parentNodeReferred === value;
}
case clsvQuestionnaireEN.con_QuestionTypeId:
return (obj: clsvQuestionnaireEN) => {
return obj.questionTypeId === value;
}
case clsvQuestionnaireEN.con_QuestionTypeName:
return (obj: clsvQuestionnaireEN) => {
return obj.questionTypeName === value;
}
case clsvQuestionnaireEN.con_QuestionTypeId4Course:
return (obj: clsvQuestionnaireEN) => {
return obj.questionTypeId4Course === value;
}
case clsvQuestionnaireEN.con_QuestionTypeName4Course:
return (obj: clsvQuestionnaireEN) => {
return obj.questionTypeName4Course === value;
}
case clsvQuestionnaireEN.con_AnswerTypeId:
return (obj: clsvQuestionnaireEN) => {
return obj.answerTypeId === value;
}
case clsvQuestionnaireEN.con_AnswerTypeName:
return (obj: clsvQuestionnaireEN) => {
return obj.answerTypeName === value;
}
case clsvQuestionnaireEN.con_GridTitle:
return (obj: clsvQuestionnaireEN) => {
return obj.gridTitle === value;
}
case clsvQuestionnaireEN.con_AnswerModeId:
return (obj: clsvQuestionnaireEN) => {
return obj.answerModeId === value;
}
case clsvQuestionnaireEN.con_AnswerModeName:
return (obj: clsvQuestionnaireEN) => {
return obj.answerModeName === value;
}
case clsvQuestionnaireEN.con_QuestionScore:
return (obj: clsvQuestionnaireEN) => {
return obj.questionScore === value;
}
case clsvQuestionnaireEN.con_DefaultValue:
return (obj: clsvQuestionnaireEN) => {
return obj.defaultValue === value;
}
case clsvQuestionnaireEN.con_DefaultSelectItem:
return (obj: clsvQuestionnaireEN) => {
return obj.defaultSelectItem === value;
}
case clsvQuestionnaireEN.con_IsShow:
return (obj: clsvQuestionnaireEN) => {
return obj.isShow === value;
}
case clsvQuestionnaireEN.con_IsCast:
return (obj: clsvQuestionnaireEN) => {
return obj.isCast === value;
}
case clsvQuestionnaireEN.con_LikeCount:
return (obj: clsvQuestionnaireEN) => {
return obj.likeCount === value;
}
case clsvQuestionnaireEN.con_AnswerAttLimitSize:
return (obj: clsvQuestionnaireEN) => {
return obj.answerAttLimitSize === value;
}
case clsvQuestionnaireEN.con_LimitedResourceType:
return (obj: clsvQuestionnaireEN) => {
return obj.limitedResourceType === value;
}
case clsvQuestionnaireEN.con_IsEffective:
return (obj: clsvQuestionnaireEN) => {
return obj.isEffective === value;
}
case clsvQuestionnaireEN.con_IsCanInPaper:
return (obj: clsvQuestionnaireEN) => {
return obj.isCanInPaper === value;
}
case clsvQuestionnaireEN.con_ExamGradeId:
return (obj: clsvQuestionnaireEN) => {
return obj.examGradeId === value;
}
case clsvQuestionnaireEN.con_ExamGradeName:
return (obj: clsvQuestionnaireEN) => {
return obj.examGradeName === value;
}
case clsvQuestionnaireEN.con_TextDirectId:
return (obj: clsvQuestionnaireEN) => {
return obj.textDirectId === value;
}
case clsvQuestionnaireEN.con_UpdDate:
return (obj: clsvQuestionnaireEN) => {
return obj.updDate === value;
}
case clsvQuestionnaireEN.con_UpdUser:
return (obj: clsvQuestionnaireEN) => {
return obj.updUser === value;
}
case clsvQuestionnaireEN.con_Memo:
return (obj: clsvQuestionnaireEN) => {
return obj.memo === value;
}
case clsvQuestionnaireEN.con_FirstIndent:
return (obj: clsvQuestionnaireEN) => {
return obj.firstIndent === value;
}
case clsvQuestionnaireEN.con_CodeTab:
return (obj: clsvQuestionnaireEN) => {
return obj.codeTab === value;
}
case clsvQuestionnaireEN.con_CodeTabCode:
return (obj: clsvQuestionnaireEN) => {
return obj.codeTabCode === value;
}
case clsvQuestionnaireEN.con_CodeTabCondition:
return (obj: clsvQuestionnaireEN) => {
return obj.codeTabCondition === value;
}
case clsvQuestionnaireEN.con_CodeTabName:
return (obj: clsvQuestionnaireEN) => {
return obj.codeTabName === value;
}
case clsvQuestionnaireEN.con_CourseIdChapter:
return (obj: clsvQuestionnaireEN) => {
return obj.courseIdChapter === value;
}
case clsvQuestionnaireEN.con_OptionNum:
return (obj: clsvQuestionnaireEN) => {
return obj.optionNum === value;
}
case clsvQuestionnaireEN.con_ChapterOrderNum:
return (obj: clsvQuestionnaireEN) => {
return obj.chapterOrderNum === value;
}
case clsvQuestionnaireEN.con_QuestionNameAdd:
return (obj: clsvQuestionnaireEN) => {
return obj.questionNameAdd === value;
}
case clsvQuestionnaireEN.con_DifficultyLevelId:
return (obj: clsvQuestionnaireEN) => {
return obj.difficultyLevelId === value;
}
case clsvQuestionnaireEN.con_FillInTextHeight:
return (obj: clsvQuestionnaireEN) => {
return obj.fillInTextHeight === value;
}
case clsvQuestionnaireEN.con_FillInTextWidth:
return (obj: clsvQuestionnaireEN) => {
return obj.fillInTextWidth === value;
}
case clsvQuestionnaireEN.con_IsHaveAdditionalMemo:
return (obj: clsvQuestionnaireEN) => {
return obj.isHaveAdditionalMemo === value;
}
case clsvQuestionnaireEN.con_IsJs:
return (obj: clsvQuestionnaireEN) => {
return obj.isJs === value;
}
case clsvQuestionnaireEN.con_IsMulti4FillInText:
return (obj: clsvQuestionnaireEN) => {
return obj.isMulti4FillInText === value;
}
case clsvQuestionnaireEN.con_KnowledgeGraphId:
return (obj: clsvQuestionnaireEN) => {
return obj.knowledgeGraphId === value;
}
case clsvQuestionnaireEN.con_MemoTextWidth:
return (obj: clsvQuestionnaireEN) => {
return obj.memoTextWidth === value;
}
case clsvQuestionnaireEN.con_QuestionCode:
return (obj: clsvQuestionnaireEN) => {
return obj.questionCode === value;
}
case clsvQuestionnaireEN.con_SectionTypeId:
return (obj: clsvQuestionnaireEN) => {
return obj.sectionTypeId === value;
}
case clsvQuestionnaireEN.con_CheckBoxLimitCount:
return (obj: clsvQuestionnaireEN) => {
return obj.checkBoxLimitCount === value;
}
case clsvQuestionnaireEN.con_RelaEvent:
return (obj: clsvQuestionnaireEN) => {
return obj.relaEvent === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaire]中不存在!(in ${ vQuestionnaire_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQuestionnaire__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQuestionnaire_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetFirstObjAsync(strWhereCond: string): Promise<clsvQuestionnaireEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const objvQuestionnaire = vQuestionnaire_GetObjFromJsonObj(returnObj);
return objvQuestionnaire;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQuestionnaireEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetObjLstByQuestionIdLstAsync(arrQuestionId: Array<string>): Promise<Array<clsvQuestionnaireEN>>  
{
const strThisFuncName = "GetObjLstByQuestionIdLstAsync";
const strAction = "GetObjLstByQuestionIdLst";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQuestionnaireEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQuestionnaireEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQuestionnaireEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQuestionnaireEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaire_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_IsExistAsync(lngQuestionId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaire_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vQuestionnaire_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaire_ConstructorName, strThisFuncName);
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

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vQuestionnaire_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function vQuestionnaire_(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvQuestionnaireWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaireWApi.)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const strCondition = `1=1`;
const arrObjLstSel = await vQuestionnaire_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQuestionnaireEN.con_QuestionId, clsvQuestionnaireEN.con_QuestionName, "v题目...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function vQuestionnaire_GetArrvQuestionnaire(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvQuestionnaireWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaireWApi.)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrvQuestionnaire = new Array<clsvQuestionnaireEN>();
const strCondition = `1=1`;
const arrObjLstSel = await vQuestionnaire_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsvQuestionnaireEN();
obj0.questionId = 0;
obj0.questionName = '选v题目...';
arrvQuestionnaire.push(obj0);
arrObjLstSel.forEach(x => arrvQuestionnaire.push(x));
return arrvQuestionnaire;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQuestionnaire_GetJSONStrByObj (pobjvQuestionnaireEN: clsvQuestionnaireEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQuestionnaireEN);
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
export  function vQuestionnaire_GetObjLstByJSONStr (strJSON: string): Array<clsvQuestionnaireEN>
{
let arrvQuestionnaireObjLst = new Array<clsvQuestionnaireEN>();
if (strJSON === "")
{
return arrvQuestionnaireObjLst;
}
try
{
arrvQuestionnaireObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQuestionnaireObjLst;
}
return arrvQuestionnaireObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQuestionnaireObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQuestionnaire_GetObjLstByJSONObjLst (arrvQuestionnaireObjLstS: Array<clsvQuestionnaireEN>): Array<clsvQuestionnaireEN>
{
const arrvQuestionnaireObjLst = new Array<clsvQuestionnaireEN>();
for (const objInFor of arrvQuestionnaireObjLstS) {
const obj1 = vQuestionnaire_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQuestionnaireObjLst.push(obj1);
}
return arrvQuestionnaireObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQuestionnaire_GetObjByJSONStr (strJSON: string): clsvQuestionnaireEN
{
let pobjvQuestionnaireEN = new clsvQuestionnaireEN();
if (strJSON === "")
{
return pobjvQuestionnaireEN;
}
try
{
pobjvQuestionnaireEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQuestionnaireEN;
}
return pobjvQuestionnaireEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQuestionnaire_GetCombineCondition(objvQuestionnaireCond: clsvQuestionnaireEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_QuestionId, objvQuestionnaireCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionIndex) == true)
{
const strComparisonOpQuestionIndex:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionIndex];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_QuestionIndex, objvQuestionnaireCond.questionIndex, strComparisonOpQuestionIndex);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionName) == true)
{
const strComparisonOpQuestionName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionName, objvQuestionnaireCond.questionName, strComparisonOpQuestionName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionContent) == true)
{
const strComparisonOpQuestionContent:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionContent, objvQuestionnaireCond.questionContent, strComparisonOpQuestionContent);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionMemo) == true)
{
const strComparisonOpQuestionMemo:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionMemo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionMemo, objvQuestionnaireCond.questionMemo, strComparisonOpQuestionMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionNo) == true)
{
const strComparisonOpQuestionNo:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionNo, objvQuestionnaireCond.questionNo, strComparisonOpQuestionNo);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ParentQuestionId) == true)
{
const strComparisonOpParentQuestionId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ParentQuestionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ParentQuestionId, objvQuestionnaireCond.parentQuestionId, strComparisonOpParentQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ExamAnswer) == true)
{
const strComparisonOpExamAnswer:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ExamAnswer];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ExamAnswer, objvQuestionnaireCond.examAnswer, strComparisonOpExamAnswer);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CourseId, objvQuestionnaireCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CourseCode) == true)
{
const strComparisonOpCourseCode:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CourseCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CourseCode, objvQuestionnaireCond.courseCode, strComparisonOpCourseCode);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CourseName) == true)
{
const strComparisonOpCourseName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CourseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CourseName, objvQuestionnaireCond.courseName, strComparisonOpCourseName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_LevelNo) == true)
{
const strComparisonOpLevelNo:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_LevelNo];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_LevelNo, objvQuestionnaireCond.levelNo, strComparisonOpLevelNo);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CourseChapterId, objvQuestionnaireCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CourseChapterName) == true)
{
const strComparisonOpCourseChapterName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CourseChapterName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CourseChapterName, objvQuestionnaireCond.courseChapterName, strComparisonOpCourseChapterName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ChapterId) == true)
{
const strComparisonOpChapterId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ChapterId, objvQuestionnaireCond.chapterId, strComparisonOpChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_SectionId, objvQuestionnaireCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ChapterName) == true)
{
const strComparisonOpChapterName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ChapterName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ChapterName, objvQuestionnaireCond.chapterName, strComparisonOpChapterName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_SectionName) == true)
{
const strComparisonOpSectionName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_SectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_SectionName, objvQuestionnaireCond.sectionName, strComparisonOpSectionName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ChapterNameSim) == true)
{
const strComparisonOpChapterNameSim:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ChapterNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ChapterNameSim, objvQuestionnaireCond.chapterNameSim, strComparisonOpChapterNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_SectionNameSim) == true)
{
const strComparisonOpSectionNameSim:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_SectionNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_SectionNameSim, objvQuestionnaireCond.sectionNameSim, strComparisonOpSectionNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ParentNodeId) == true)
{
const strComparisonOpParentNodeId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ParentNodeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ParentNodeId, objvQuestionnaireCond.parentNodeId, strComparisonOpParentNodeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CourseChapterReferred) == true)
{
const strComparisonOpCourseChapterReferred:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CourseChapterReferred];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CourseChapterReferred, objvQuestionnaireCond.courseChapterReferred, strComparisonOpCourseChapterReferred);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ParentNodeName) == true)
{
const strComparisonOpParentNodeName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ParentNodeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ParentNodeName, objvQuestionnaireCond.parentNodeName, strComparisonOpParentNodeName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ParentNodeReferred) == true)
{
const strComparisonOpParentNodeReferred:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ParentNodeReferred];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ParentNodeReferred, objvQuestionnaireCond.parentNodeReferred, strComparisonOpParentNodeReferred);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionTypeId) == true)
{
const strComparisonOpQuestionTypeId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionTypeId, objvQuestionnaireCond.questionTypeId, strComparisonOpQuestionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionTypeName) == true)
{
const strComparisonOpQuestionTypeName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionTypeName, objvQuestionnaireCond.questionTypeName, strComparisonOpQuestionTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionTypeId4Course) == true)
{
const strComparisonOpQuestionTypeId4Course:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionTypeId4Course];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionTypeId4Course, objvQuestionnaireCond.questionTypeId4Course, strComparisonOpQuestionTypeId4Course);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionTypeName4Course) == true)
{
const strComparisonOpQuestionTypeName4Course:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionTypeName4Course];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionTypeName4Course, objvQuestionnaireCond.questionTypeName4Course, strComparisonOpQuestionTypeName4Course);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_AnswerTypeId) == true)
{
const strComparisonOpAnswerTypeId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_AnswerTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_AnswerTypeId, objvQuestionnaireCond.answerTypeId, strComparisonOpAnswerTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_AnswerTypeName) == true)
{
const strComparisonOpAnswerTypeName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_AnswerTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_AnswerTypeName, objvQuestionnaireCond.answerTypeName, strComparisonOpAnswerTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_GridTitle) == true)
{
const strComparisonOpGridTitle:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_GridTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_GridTitle, objvQuestionnaireCond.gridTitle, strComparisonOpGridTitle);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_AnswerModeId) == true)
{
const strComparisonOpAnswerModeId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_AnswerModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_AnswerModeId, objvQuestionnaireCond.answerModeId, strComparisonOpAnswerModeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_AnswerModeName) == true)
{
const strComparisonOpAnswerModeName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_AnswerModeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_AnswerModeName, objvQuestionnaireCond.answerModeName, strComparisonOpAnswerModeName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionScore) == true)
{
const strComparisonOpQuestionScore:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionScore];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_QuestionScore, objvQuestionnaireCond.questionScore, strComparisonOpQuestionScore);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_DefaultValue) == true)
{
const strComparisonOpDefaultValue:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_DefaultValue];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_DefaultValue, objvQuestionnaireCond.defaultValue, strComparisonOpDefaultValue);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_DefaultSelectItem) == true)
{
const strComparisonOpDefaultSelectItem:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_DefaultSelectItem];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_DefaultSelectItem, objvQuestionnaireCond.defaultSelectItem, strComparisonOpDefaultSelectItem);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_IsShow) == true)
{
if (objvQuestionnaireCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaireEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaireEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_IsCast) == true)
{
if (objvQuestionnaireCond.isCast == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaireEN.con_IsCast);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaireEN.con_IsCast);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_LikeCount) == true)
{
const strComparisonOpLikeCount:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_LikeCount];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_LikeCount, objvQuestionnaireCond.likeCount, strComparisonOpLikeCount);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_AnswerAttLimitSize) == true)
{
const strComparisonOpAnswerAttLimitSize:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_AnswerAttLimitSize];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_AnswerAttLimitSize, objvQuestionnaireCond.answerAttLimitSize, strComparisonOpAnswerAttLimitSize);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_LimitedResourceType) == true)
{
const strComparisonOpLimitedResourceType:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_LimitedResourceType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_LimitedResourceType, objvQuestionnaireCond.limitedResourceType, strComparisonOpLimitedResourceType);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_IsEffective) == true)
{
if (objvQuestionnaireCond.isEffective == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaireEN.con_IsEffective);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaireEN.con_IsEffective);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_IsCanInPaper) == true)
{
if (objvQuestionnaireCond.isCanInPaper == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaireEN.con_IsCanInPaper);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaireEN.con_IsCanInPaper);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ExamGradeId) == true)
{
const strComparisonOpExamGradeId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ExamGradeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ExamGradeId, objvQuestionnaireCond.examGradeId, strComparisonOpExamGradeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ExamGradeName) == true)
{
const strComparisonOpExamGradeName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ExamGradeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_ExamGradeName, objvQuestionnaireCond.examGradeName, strComparisonOpExamGradeName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_TextDirectId) == true)
{
const strComparisonOpTextDirectId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_TextDirectId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_TextDirectId, objvQuestionnaireCond.textDirectId, strComparisonOpTextDirectId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_UpdDate, objvQuestionnaireCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_UpdUser, objvQuestionnaireCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_Memo, objvQuestionnaireCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_FirstIndent) == true)
{
if (objvQuestionnaireCond.firstIndent == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaireEN.con_FirstIndent);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaireEN.con_FirstIndent);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CodeTab) == true)
{
const strComparisonOpCodeTab:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CodeTab];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CodeTab, objvQuestionnaireCond.codeTab, strComparisonOpCodeTab);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CodeTabCode) == true)
{
const strComparisonOpCodeTabCode:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CodeTabCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CodeTabCode, objvQuestionnaireCond.codeTabCode, strComparisonOpCodeTabCode);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CodeTabCondition) == true)
{
const strComparisonOpCodeTabCondition:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CodeTabCondition];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CodeTabCondition, objvQuestionnaireCond.codeTabCondition, strComparisonOpCodeTabCondition);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CodeTabName) == true)
{
const strComparisonOpCodeTabName:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CodeTabName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CodeTabName, objvQuestionnaireCond.codeTabName, strComparisonOpCodeTabName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CourseIdChapter) == true)
{
const strComparisonOpCourseIdChapter:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CourseIdChapter];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_CourseIdChapter, objvQuestionnaireCond.courseIdChapter, strComparisonOpCourseIdChapter);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_OptionNum) == true)
{
const strComparisonOpOptionNum:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_OptionNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_OptionNum, objvQuestionnaireCond.optionNum, strComparisonOpOptionNum);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_ChapterOrderNum) == true)
{
const strComparisonOpChapterOrderNum:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_ChapterOrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_ChapterOrderNum, objvQuestionnaireCond.chapterOrderNum, strComparisonOpChapterOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionNameAdd) == true)
{
const strComparisonOpQuestionNameAdd:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionNameAdd];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionNameAdd, objvQuestionnaireCond.questionNameAdd, strComparisonOpQuestionNameAdd);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_DifficultyLevelId) == true)
{
const strComparisonOpDifficultyLevelId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_DifficultyLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_DifficultyLevelId, objvQuestionnaireCond.difficultyLevelId, strComparisonOpDifficultyLevelId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_FillInTextHeight) == true)
{
const strComparisonOpFillInTextHeight:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_FillInTextHeight];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_FillInTextHeight, objvQuestionnaireCond.fillInTextHeight, strComparisonOpFillInTextHeight);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_FillInTextWidth) == true)
{
const strComparisonOpFillInTextWidth:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_FillInTextWidth];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_FillInTextWidth, objvQuestionnaireCond.fillInTextWidth, strComparisonOpFillInTextWidth);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_IsHaveAdditionalMemo) == true)
{
if (objvQuestionnaireCond.isHaveAdditionalMemo == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaireEN.con_IsHaveAdditionalMemo);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaireEN.con_IsHaveAdditionalMemo);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_IsJs) == true)
{
if (objvQuestionnaireCond.isJs == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaireEN.con_IsJs);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaireEN.con_IsJs);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_IsMulti4FillInText) == true)
{
if (objvQuestionnaireCond.isMulti4FillInText == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQuestionnaireEN.con_IsMulti4FillInText);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQuestionnaireEN.con_IsMulti4FillInText);
}
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_KnowledgeGraphId) == true)
{
const strComparisonOpKnowledgeGraphId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_KnowledgeGraphId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_KnowledgeGraphId, objvQuestionnaireCond.knowledgeGraphId, strComparisonOpKnowledgeGraphId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_MemoTextWidth) == true)
{
const strComparisonOpMemoTextWidth:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_MemoTextWidth];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_MemoTextWidth, objvQuestionnaireCond.memoTextWidth, strComparisonOpMemoTextWidth);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_QuestionCode) == true)
{
const strComparisonOpQuestionCode:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_QuestionCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_QuestionCode, objvQuestionnaireCond.questionCode, strComparisonOpQuestionCode);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_SectionTypeId) == true)
{
const strComparisonOpSectionTypeId:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_SectionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_SectionTypeId, objvQuestionnaireCond.sectionTypeId, strComparisonOpSectionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_CheckBoxLimitCount) == true)
{
const strComparisonOpCheckBoxLimitCount:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_CheckBoxLimitCount];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireEN.con_CheckBoxLimitCount, objvQuestionnaireCond.checkBoxLimitCount, strComparisonOpCheckBoxLimitCount);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireCond.dicFldComparisonOp, clsvQuestionnaireEN.con_RelaEvent) == true)
{
const strComparisonOpRelaEvent:string = objvQuestionnaireCond.dicFldComparisonOp[clsvQuestionnaireEN.con_RelaEvent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireEN.con_RelaEvent, objvQuestionnaireCond.relaEvent, strComparisonOpRelaEvent);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvQuestionnaireENS:源对象
 * @param objvQuestionnaireENT:目标对象
*/
export  function vQuestionnaire_CopyObjTo(objvQuestionnaireENS: clsvQuestionnaireEN , objvQuestionnaireENT: clsvQuestionnaireEN ): void 
{
objvQuestionnaireENT.questionId = objvQuestionnaireENS.questionId; //题目Id
objvQuestionnaireENT.questionIndex = objvQuestionnaireENS.questionIndex; //题目序号
objvQuestionnaireENT.questionName = objvQuestionnaireENS.questionName; //题目名称
objvQuestionnaireENT.questionContent = objvQuestionnaireENS.questionContent; //题目内容
objvQuestionnaireENT.questionMemo = objvQuestionnaireENS.questionMemo; //题目说明
objvQuestionnaireENT.questionNo = objvQuestionnaireENS.questionNo; //题目编号
objvQuestionnaireENT.parentQuestionId = objvQuestionnaireENS.parentQuestionId; //父题目Id
objvQuestionnaireENT.examAnswer = objvQuestionnaireENS.examAnswer; //题目答案
objvQuestionnaireENT.courseId = objvQuestionnaireENS.courseId; //课程Id
objvQuestionnaireENT.courseCode = objvQuestionnaireENS.courseCode; //课程代码
objvQuestionnaireENT.courseName = objvQuestionnaireENS.courseName; //课程名称
objvQuestionnaireENT.levelNo = objvQuestionnaireENS.levelNo; //等级No
objvQuestionnaireENT.courseChapterId = objvQuestionnaireENS.courseChapterId; //课程章节ID
objvQuestionnaireENT.courseChapterName = objvQuestionnaireENS.courseChapterName; //课程章节名称
objvQuestionnaireENT.chapterId = objvQuestionnaireENS.chapterId; //章Id
objvQuestionnaireENT.sectionId = objvQuestionnaireENS.sectionId; //节Id
objvQuestionnaireENT.chapterName = objvQuestionnaireENS.chapterName; //章名
objvQuestionnaireENT.sectionName = objvQuestionnaireENS.sectionName; //节名
objvQuestionnaireENT.chapterNameSim = objvQuestionnaireENS.chapterNameSim; //章名简称
objvQuestionnaireENT.sectionNameSim = objvQuestionnaireENS.sectionNameSim; //节名简称
objvQuestionnaireENT.parentNodeId = objvQuestionnaireENS.parentNodeId; //父节点编号
objvQuestionnaireENT.courseChapterReferred = objvQuestionnaireENS.courseChapterReferred; //节简称
objvQuestionnaireENT.parentNodeName = objvQuestionnaireENS.parentNodeName; //父节点名称
objvQuestionnaireENT.parentNodeReferred = objvQuestionnaireENS.parentNodeReferred; //章简称
objvQuestionnaireENT.questionTypeId = objvQuestionnaireENS.questionTypeId; //题目类型Id
objvQuestionnaireENT.questionTypeName = objvQuestionnaireENS.questionTypeName; //题目类型名
objvQuestionnaireENT.questionTypeId4Course = objvQuestionnaireENS.questionTypeId4Course; //题目类型Id4课程
objvQuestionnaireENT.questionTypeName4Course = objvQuestionnaireENS.questionTypeName4Course; //题目类型名4课程
objvQuestionnaireENT.answerTypeId = objvQuestionnaireENS.answerTypeId; //答案类型ID
objvQuestionnaireENT.answerTypeName = objvQuestionnaireENS.answerTypeName; //答案类型名
objvQuestionnaireENT.gridTitle = objvQuestionnaireENS.gridTitle; //表格标题
objvQuestionnaireENT.answerModeId = objvQuestionnaireENS.answerModeId; //答案模式Id
objvQuestionnaireENT.answerModeName = objvQuestionnaireENS.answerModeName; //答案模式名称
objvQuestionnaireENT.questionScore = objvQuestionnaireENS.questionScore; //题目得分
objvQuestionnaireENT.defaultValue = objvQuestionnaireENS.defaultValue; //缺省值
objvQuestionnaireENT.defaultSelectItem = objvQuestionnaireENS.defaultSelectItem; //默认选项
objvQuestionnaireENT.isShow = objvQuestionnaireENS.isShow; //是否启用
objvQuestionnaireENT.isCast = objvQuestionnaireENS.isCast; //是否播放
objvQuestionnaireENT.likeCount = objvQuestionnaireENS.likeCount; //资源喜欢数量
objvQuestionnaireENT.answerAttLimitSize = objvQuestionnaireENS.answerAttLimitSize; //回答附件限制大小
objvQuestionnaireENT.limitedResourceType = objvQuestionnaireENS.limitedResourceType; //限制资源类型
objvQuestionnaireENT.isEffective = objvQuestionnaireENS.isEffective; //是否有效
objvQuestionnaireENT.isCanInPaper = objvQuestionnaireENS.isCanInPaper; //是否可在Paper
objvQuestionnaireENT.examGradeId = objvQuestionnaireENS.examGradeId; //题库等级ID
objvQuestionnaireENT.examGradeName = objvQuestionnaireENS.examGradeName; //题库等级名
objvQuestionnaireENT.textDirectId = objvQuestionnaireENS.textDirectId; //文本方向ID
objvQuestionnaireENT.updDate = objvQuestionnaireENS.updDate; //修改日期
objvQuestionnaireENT.updUser = objvQuestionnaireENS.updUser; //修改人
objvQuestionnaireENT.memo = objvQuestionnaireENS.memo; //备注
objvQuestionnaireENT.firstIndent = objvQuestionnaireENS.firstIndent; //首行缩进
objvQuestionnaireENT.codeTab = objvQuestionnaireENS.codeTab; //代码表
objvQuestionnaireENT.codeTabCode = objvQuestionnaireENS.codeTabCode; //CodeTab_Code
objvQuestionnaireENT.codeTabCondition = objvQuestionnaireENS.codeTabCondition; //代码表_条件
objvQuestionnaireENT.codeTabName = objvQuestionnaireENS.codeTabName; //CodeTab_Name
objvQuestionnaireENT.courseIdChapter = objvQuestionnaireENS.courseIdChapter; //CourseId_Chapter
objvQuestionnaireENT.optionNum = objvQuestionnaireENS.optionNum; //选项数
objvQuestionnaireENT.chapterOrderNum = objvQuestionnaireENS.chapterOrderNum; //章排序号
objvQuestionnaireENT.questionNameAdd = objvQuestionnaireENS.questionNameAdd; //题目补充
objvQuestionnaireENT.difficultyLevelId = objvQuestionnaireENS.difficultyLevelId; //难度等级Id
objvQuestionnaireENT.fillInTextHeight = objvQuestionnaireENS.fillInTextHeight; //填空框高度
objvQuestionnaireENT.fillInTextWidth = objvQuestionnaireENS.fillInTextWidth; //填空框宽度
objvQuestionnaireENT.isHaveAdditionalMemo = objvQuestionnaireENS.isHaveAdditionalMemo; //是否有附加说明
objvQuestionnaireENT.isJs = objvQuestionnaireENS.isJs; //是否是JS
objvQuestionnaireENT.isMulti4FillInText = objvQuestionnaireENS.isMulti4FillInText; //是否填空框多行
objvQuestionnaireENT.knowledgeGraphId = objvQuestionnaireENS.knowledgeGraphId; //知识点图Id
objvQuestionnaireENT.memoTextWidth = objvQuestionnaireENS.memoTextWidth; //备注框宽度
objvQuestionnaireENT.questionCode = objvQuestionnaireENS.questionCode; //html代码
objvQuestionnaireENT.sectionTypeId = objvQuestionnaireENS.sectionTypeId; //节点类型Id
objvQuestionnaireENT.checkBoxLimitCount = objvQuestionnaireENS.checkBoxLimitCount; //复选框限制数
objvQuestionnaireENT.relaEvent = objvQuestionnaireENS.relaEvent; //相关事件
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQuestionnaireENS:源对象
 * @param objvQuestionnaireENT:目标对象
*/
export  function vQuestionnaire_GetObjFromJsonObj(objvQuestionnaireENS: clsvQuestionnaireEN): clsvQuestionnaireEN 
{
 const objvQuestionnaireENT: clsvQuestionnaireEN = new clsvQuestionnaireEN();
ObjectAssign(objvQuestionnaireENT, objvQuestionnaireENS);
 return objvQuestionnaireENT;
}