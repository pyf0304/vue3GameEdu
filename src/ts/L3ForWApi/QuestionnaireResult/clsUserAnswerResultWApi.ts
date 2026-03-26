
 /**
 * 类名:clsUserAnswerResultWApi
 * 表名:UserAnswerResult(01120032)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:23
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户答题结果(UserAnswerResult)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsUserAnswerResultEN } from "@/ts/L0Entity/QuestionnaireResult/clsUserAnswerResultEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const userAnswerResult_Controller = "UserAnswerResultApi";
 export const userAnswerResult_ConstructorName = "userAnswerResult";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngMinId:关键字
 * @returns 对象
 **/
export  async function UserAnswerResult_GetObjByMinIdAsync(lngMinId: number): Promise<clsUserAnswerResultEN|null>  
{
const strThisFuncName = "GetObjByMinIdAsync";

if (lngMinId == 0)
{
  const strMsg = Format("参数:[lngMinId]不能为空!(In clsUserAnswerResultWApi.GetObjByMinIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByMinId";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngMinId,
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
const objUserAnswerResult = UserAnswerResult_GetObjFromJsonObj(returnObj);
return objUserAnswerResult;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByMinIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByMinIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function UserAnswerResult_SortFunDefa(a:clsUserAnswerResultEN , b:clsUserAnswerResultEN): number 
{
return a.minId-b.minId;
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
export  function UserAnswerResult_SortFunDefa2Fld(a:clsUserAnswerResultEN , b:clsUserAnswerResultEN): number 
{
if (a.questionId == b.questionId) return a.courseId.localeCompare(b.courseId);
else return a.questionId - b.questionId;
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
export  function UserAnswerResult_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsUserAnswerResultEN.con_MinId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return a.minId-b.minId;
}
case clsUserAnswerResultEN.con_QuestionId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return a.questionId-b.questionId;
}
case clsUserAnswerResultEN.con_CourseId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsUserAnswerResultEN.con_IdCurrEduCls:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsUserAnswerResultEN.con_ExamBatchNo:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.examBatchNo == null) return -1;
if (b.examBatchNo == null) return 1;
return a.examBatchNo.localeCompare(b.examBatchNo);
}
case clsUserAnswerResultEN.con_CourseExamPaperId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.courseExamPaperId == null) return -1;
if (b.courseExamPaperId == null) return 1;
return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
}
case clsUserAnswerResultEN.con_AnswerOptionId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.answerOptionId == null) return -1;
if (b.answerOptionId == null) return 1;
return a.answerOptionId.localeCompare(b.answerOptionId);
}
case clsUserAnswerResultEN.con_BatchId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.batchId == null) return -1;
if (b.batchId == null) return 1;
return a.batchId.localeCompare(b.batchId);
}
case clsUserAnswerResultEN.con_UserId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsUserAnswerResultEN.con_AnswerText:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.answerText == null) return -1;
if (b.answerText == null) return 1;
return a.answerText.localeCompare(b.answerText);
}
case clsUserAnswerResultEN.con_AnswerDate:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.answerDate == null) return -1;
if (b.answerDate == null) return 1;
return a.answerDate.localeCompare(b.answerDate);
}
case clsUserAnswerResultEN.con_AnswerTime:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.answerTime == null) return -1;
if (b.answerTime == null) return 1;
return a.answerTime.localeCompare(b.answerTime);
}
case clsUserAnswerResultEN.con_AnswerIP:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.answerIP == null) return -1;
if (b.answerIP == null) return 1;
return a.answerIP.localeCompare(b.answerIP);
}
case clsUserAnswerResultEN.con_IsAccess:
return (a: clsUserAnswerResultEN) => {
if (a.isAccess == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_IsAccessC:
return (a: clsUserAnswerResultEN) => {
if (a.isAccessC == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_IdSchool:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsUserAnswerResultEN.con_School:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.school == null) return -1;
if (b.school == null) return 1;
return a.school.localeCompare(b.school);
}
case clsUserAnswerResultEN.con_AnswerMode:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return a.answerMode-b.answerMode;
}
case clsUserAnswerResultEN.con_IsMarking:
return (a: clsUserAnswerResultEN) => {
if (a.isMarking == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_IsRight:
return (a: clsUserAnswerResultEN) => {
if (a.isRight == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_Score:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return a.score-b.score;
}
case clsUserAnswerResultEN.con_MarkTime:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.markTime == null) return -1;
if (b.markTime == null) return 1;
return a.markTime.localeCompare(b.markTime);
}
case clsUserAnswerResultEN.con_MarkerId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.markerId == null) return -1;
if (b.markerId == null) return 1;
return a.markerId.localeCompare(b.markerId);
}
case clsUserAnswerResultEN.con_Comment:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.comment == null) return -1;
if (b.comment == null) return 1;
return a.comment.localeCompare(b.comment);
}
case clsUserAnswerResultEN.con_IsAccessKnowledge:
return (a: clsUserAnswerResultEN) => {
if (a.isAccessKnowledge == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_AnswerId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return a.answerId-b.answerId;
}
case clsUserAnswerResultEN.con_AnswerMultiOption:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.answerMultiOption == null) return -1;
if (b.answerMultiOption == null) return 1;
return a.answerMultiOption.localeCompare(b.answerMultiOption);
}
case clsUserAnswerResultEN.con_UpdDate:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsUserAnswerResultEN.con_UpdUser:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsUserAnswerResultEN.con_Memo:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsUserAnswerResultEN.con_QuestionnaireSetId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (a.questionnaireSetId == null) return -1;
if (b.questionnaireSetId == null) return 1;
return a.questionnaireSetId.localeCompare(b.questionnaireSetId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserAnswerResult]中不存在!(in ${ userAnswerResult_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsUserAnswerResultEN.con_MinId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return b.minId-a.minId;
}
case clsUserAnswerResultEN.con_QuestionId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return b.questionId-a.questionId;
}
case clsUserAnswerResultEN.con_CourseId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsUserAnswerResultEN.con_IdCurrEduCls:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsUserAnswerResultEN.con_ExamBatchNo:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.examBatchNo == null) return -1;
if (a.examBatchNo == null) return 1;
return b.examBatchNo.localeCompare(a.examBatchNo);
}
case clsUserAnswerResultEN.con_CourseExamPaperId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.courseExamPaperId == null) return -1;
if (a.courseExamPaperId == null) return 1;
return b.courseExamPaperId.localeCompare(a.courseExamPaperId);
}
case clsUserAnswerResultEN.con_AnswerOptionId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.answerOptionId == null) return -1;
if (a.answerOptionId == null) return 1;
return b.answerOptionId.localeCompare(a.answerOptionId);
}
case clsUserAnswerResultEN.con_BatchId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.batchId == null) return -1;
if (a.batchId == null) return 1;
return b.batchId.localeCompare(a.batchId);
}
case clsUserAnswerResultEN.con_UserId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsUserAnswerResultEN.con_AnswerText:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.answerText == null) return -1;
if (a.answerText == null) return 1;
return b.answerText.localeCompare(a.answerText);
}
case clsUserAnswerResultEN.con_AnswerDate:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.answerDate == null) return -1;
if (a.answerDate == null) return 1;
return b.answerDate.localeCompare(a.answerDate);
}
case clsUserAnswerResultEN.con_AnswerTime:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.answerTime == null) return -1;
if (a.answerTime == null) return 1;
return b.answerTime.localeCompare(a.answerTime);
}
case clsUserAnswerResultEN.con_AnswerIP:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.answerIP == null) return -1;
if (a.answerIP == null) return 1;
return b.answerIP.localeCompare(a.answerIP);
}
case clsUserAnswerResultEN.con_IsAccess:
return (b: clsUserAnswerResultEN) => {
if (b.isAccess == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_IsAccessC:
return (b: clsUserAnswerResultEN) => {
if (b.isAccessC == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_IdSchool:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsUserAnswerResultEN.con_School:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.school == null) return -1;
if (a.school == null) return 1;
return b.school.localeCompare(a.school);
}
case clsUserAnswerResultEN.con_AnswerMode:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return b.answerMode-a.answerMode;
}
case clsUserAnswerResultEN.con_IsMarking:
return (b: clsUserAnswerResultEN) => {
if (b.isMarking == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_IsRight:
return (b: clsUserAnswerResultEN) => {
if (b.isRight == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_Score:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return b.score-a.score;
}
case clsUserAnswerResultEN.con_MarkTime:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.markTime == null) return -1;
if (a.markTime == null) return 1;
return b.markTime.localeCompare(a.markTime);
}
case clsUserAnswerResultEN.con_MarkerId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.markerId == null) return -1;
if (a.markerId == null) return 1;
return b.markerId.localeCompare(a.markerId);
}
case clsUserAnswerResultEN.con_Comment:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.comment == null) return -1;
if (a.comment == null) return 1;
return b.comment.localeCompare(a.comment);
}
case clsUserAnswerResultEN.con_IsAccessKnowledge:
return (b: clsUserAnswerResultEN) => {
if (b.isAccessKnowledge == true) return 1;
else return -1
}
case clsUserAnswerResultEN.con_AnswerId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return b.answerId-a.answerId;
}
case clsUserAnswerResultEN.con_AnswerMultiOption:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.answerMultiOption == null) return -1;
if (a.answerMultiOption == null) return 1;
return b.answerMultiOption.localeCompare(a.answerMultiOption);
}
case clsUserAnswerResultEN.con_UpdDate:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsUserAnswerResultEN.con_UpdUser:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsUserAnswerResultEN.con_Memo:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsUserAnswerResultEN.con_QuestionnaireSetId:
return (a: clsUserAnswerResultEN, b: clsUserAnswerResultEN) => {
if (b.questionnaireSetId == null) return -1;
if (a.questionnaireSetId == null) return 1;
return b.questionnaireSetId.localeCompare(a.questionnaireSetId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserAnswerResult]中不存在!(in ${ userAnswerResult_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByMinIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function UserAnswerResult_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsUserAnswerResultEN.con_MinId:
return (obj: clsUserAnswerResultEN) => {
return obj.minId === value;
}
case clsUserAnswerResultEN.con_QuestionId:
return (obj: clsUserAnswerResultEN) => {
return obj.questionId === value;
}
case clsUserAnswerResultEN.con_CourseId:
return (obj: clsUserAnswerResultEN) => {
return obj.courseId === value;
}
case clsUserAnswerResultEN.con_IdCurrEduCls:
return (obj: clsUserAnswerResultEN) => {
return obj.idCurrEduCls === value;
}
case clsUserAnswerResultEN.con_ExamBatchNo:
return (obj: clsUserAnswerResultEN) => {
return obj.examBatchNo === value;
}
case clsUserAnswerResultEN.con_CourseExamPaperId:
return (obj: clsUserAnswerResultEN) => {
return obj.courseExamPaperId === value;
}
case clsUserAnswerResultEN.con_AnswerOptionId:
return (obj: clsUserAnswerResultEN) => {
return obj.answerOptionId === value;
}
case clsUserAnswerResultEN.con_BatchId:
return (obj: clsUserAnswerResultEN) => {
return obj.batchId === value;
}
case clsUserAnswerResultEN.con_UserId:
return (obj: clsUserAnswerResultEN) => {
return obj.userId === value;
}
case clsUserAnswerResultEN.con_AnswerText:
return (obj: clsUserAnswerResultEN) => {
return obj.answerText === value;
}
case clsUserAnswerResultEN.con_AnswerDate:
return (obj: clsUserAnswerResultEN) => {
return obj.answerDate === value;
}
case clsUserAnswerResultEN.con_AnswerTime:
return (obj: clsUserAnswerResultEN) => {
return obj.answerTime === value;
}
case clsUserAnswerResultEN.con_AnswerIP:
return (obj: clsUserAnswerResultEN) => {
return obj.answerIP === value;
}
case clsUserAnswerResultEN.con_IsAccess:
return (obj: clsUserAnswerResultEN) => {
return obj.isAccess === value;
}
case clsUserAnswerResultEN.con_IsAccessC:
return (obj: clsUserAnswerResultEN) => {
return obj.isAccessC === value;
}
case clsUserAnswerResultEN.con_IdSchool:
return (obj: clsUserAnswerResultEN) => {
return obj.idSchool === value;
}
case clsUserAnswerResultEN.con_School:
return (obj: clsUserAnswerResultEN) => {
return obj.school === value;
}
case clsUserAnswerResultEN.con_AnswerMode:
return (obj: clsUserAnswerResultEN) => {
return obj.answerMode === value;
}
case clsUserAnswerResultEN.con_IsMarking:
return (obj: clsUserAnswerResultEN) => {
return obj.isMarking === value;
}
case clsUserAnswerResultEN.con_IsRight:
return (obj: clsUserAnswerResultEN) => {
return obj.isRight === value;
}
case clsUserAnswerResultEN.con_Score:
return (obj: clsUserAnswerResultEN) => {
return obj.score === value;
}
case clsUserAnswerResultEN.con_MarkTime:
return (obj: clsUserAnswerResultEN) => {
return obj.markTime === value;
}
case clsUserAnswerResultEN.con_MarkerId:
return (obj: clsUserAnswerResultEN) => {
return obj.markerId === value;
}
case clsUserAnswerResultEN.con_Comment:
return (obj: clsUserAnswerResultEN) => {
return obj.comment === value;
}
case clsUserAnswerResultEN.con_IsAccessKnowledge:
return (obj: clsUserAnswerResultEN) => {
return obj.isAccessKnowledge === value;
}
case clsUserAnswerResultEN.con_AnswerId:
return (obj: clsUserAnswerResultEN) => {
return obj.answerId === value;
}
case clsUserAnswerResultEN.con_AnswerMultiOption:
return (obj: clsUserAnswerResultEN) => {
return obj.answerMultiOption === value;
}
case clsUserAnswerResultEN.con_UpdDate:
return (obj: clsUserAnswerResultEN) => {
return obj.updDate === value;
}
case clsUserAnswerResultEN.con_UpdUser:
return (obj: clsUserAnswerResultEN) => {
return obj.updUser === value;
}
case clsUserAnswerResultEN.con_Memo:
return (obj: clsUserAnswerResultEN) => {
return obj.memo === value;
}
case clsUserAnswerResultEN.con_QuestionnaireSetId:
return (obj: clsUserAnswerResultEN) => {
return obj.questionnaireSetId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserAnswerResult]中不存在!(in ${ userAnswerResult_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[UserAnswerResult__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function UserAnswerResult_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_GetFirstObjAsync(strWhereCond: string): Promise<clsUserAnswerResultEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const objUserAnswerResult = UserAnswerResult_GetObjFromJsonObj(returnObj);
return objUserAnswerResult;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUserAnswerResultEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userAnswerResult_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserAnswerResult_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
 * @param arrMinId:关键字列表
 * @returns 对象列表
 **/
export  async function UserAnswerResult_GetObjLstByMinIdLstAsync(arrMinId: Array<string>): Promise<Array<clsUserAnswerResultEN>>  
{
const strThisFuncName = "GetObjLstByMinIdLstAsync";
const strAction = "GetObjLstByMinIdLst";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMinId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userAnswerResult_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserAnswerResult_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByMinIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function UserAnswerResult_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsUserAnswerResultEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userAnswerResult_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserAnswerResult_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsUserAnswerResultEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userAnswerResult_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserAnswerResult_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsUserAnswerResultEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsUserAnswerResultEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userAnswerResult_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserAnswerResult_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
 * @param lngMinId:关键字
 * @returns 获取删除的结果
 **/
export  async function UserAnswerResult_DelRecordAsync(lngMinId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngMinId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
 * @param arrMinId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function UserAnswerResult_DelUserAnswerResultsAsync(arrMinId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelUserAnswerResultsAsync";
const strAction = "DelUserAnswerResults";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMinId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_DelUserAnswerResultsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelUserAnswerResultsByCondAsync";
const strAction = "DelUserAnswerResultsByCond";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
 * @param objUserAnswerResultEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function UserAnswerResult_AddNewRecordAsync(objUserAnswerResultEN: clsUserAnswerResultEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objUserAnswerResultEN);
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserAnswerResultEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function UserAnswerResult_AddNewObjSave(objUserAnswerResultEN: clsUserAnswerResultEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
UserAnswerResult_CheckPropertyNew(objUserAnswerResultEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ userAnswerResult_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await UserAnswerResult_CheckUniCond4Add(objUserAnswerResultEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await UserAnswerResult_AddNewRecordAsync(objUserAnswerResultEN);
if (returnBool == true)
{
//UserAnswerResult_ReFreshCache();
}
else
{
const strInfo = `添加[用户答题结果(UserAnswerResult)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objUserAnswerResultEN.minId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ userAnswerResult_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function UserAnswerResult_CheckUniCond4Add(objUserAnswerResultEN: clsUserAnswerResultEN): Promise<boolean>{
const strUniquenessCondition = UserAnswerResult_GetUniCondStr(objUserAnswerResultEN);
const bolIsExistCondition = await UserAnswerResult_IsExistRecordAsync(strUniquenessCondition);
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
export  async function UserAnswerResult_CheckUniCond4Update(objUserAnswerResultEN: clsUserAnswerResultEN): Promise<boolean>{
const strUniquenessCondition = UserAnswerResult_GetUniCondStr4Update(objUserAnswerResultEN);
const bolIsExistCondition = await UserAnswerResult_IsExistRecordAsync(strUniquenessCondition);
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
export  async function UserAnswerResult_UpdateObjSave(objUserAnswerResultEN: clsUserAnswerResultEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objUserAnswerResultEN.sfUpdFldSetStr = objUserAnswerResultEN.updFldString;//设置哪些字段被修改(脏字段)
if (objUserAnswerResultEN.minId == 0 || objUserAnswerResultEN.minId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
UserAnswerResult_CheckProperty4Update(objUserAnswerResultEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ userAnswerResult_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await UserAnswerResult_CheckUniCond4Update(objUserAnswerResultEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await UserAnswerResult_UpdateRecordAsync(objUserAnswerResultEN);
if (returnBool == true)
{
//UserAnswerResult_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ userAnswerResult_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objUserAnswerResultEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function UserAnswerResult_AddNewRecordWithReturnKeyAsync(objUserAnswerResultEN: clsUserAnswerResultEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserAnswerResultEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
 * @param objUserAnswerResultEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function UserAnswerResult_UpdateRecordAsync(objUserAnswerResultEN: clsUserAnswerResultEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objUserAnswerResultEN.sfUpdFldSetStr === undefined || objUserAnswerResultEN.sfUpdFldSetStr === null || objUserAnswerResultEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserAnswerResultEN.minId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserAnswerResultEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
 * @param objUserAnswerResultEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function UserAnswerResult_EditRecordExAsync(objUserAnswerResultEN: clsUserAnswerResultEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objUserAnswerResultEN.sfUpdFldSetStr === undefined || objUserAnswerResultEN.sfUpdFldSetStr === null || objUserAnswerResultEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserAnswerResultEN.minId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserAnswerResultEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
 * @param objUserAnswerResultEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function UserAnswerResult_UpdateWithConditionAsync(objUserAnswerResultEN: clsUserAnswerResultEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objUserAnswerResultEN.sfUpdFldSetStr === undefined || objUserAnswerResultEN.sfUpdFldSetStr === null || objUserAnswerResultEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserAnswerResultEN.minId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);
objUserAnswerResultEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserAnswerResultEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
 * @param lngMinId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function UserAnswerResult_IsExistAsync(lngMinId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngMinId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  async function UserAnswerResult_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(userAnswerResult_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userAnswerResult_ConstructorName, strThisFuncName);
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
export  function UserAnswerResult_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function UserAnswerResult_CheckPropertyNew(pobjUserAnswerResultEN: clsUserAnswerResultEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjUserAnswerResultEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 用户答题结果)!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUserAnswerResultEN.courseId) == false && GetStrLen(pobjUserAnswerResultEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.courseId}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.idCurrEduCls) == false && GetStrLen(pobjUserAnswerResultEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.idCurrEduCls}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.examBatchNo) == false && GetStrLen(pobjUserAnswerResultEN.examBatchNo) > 20)
{
 throw new Error(`(errid:Watl000413)字段[学生批次号(examBatchNo)]的长度不能超过20(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.examBatchNo}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.courseExamPaperId) == false && GetStrLen(pobjUserAnswerResultEN.courseExamPaperId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.courseExamPaperId}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerOptionId) == false && GetStrLen(pobjUserAnswerResultEN.answerOptionId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[回答选项Id(answerOptionId)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerOptionId}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.batchId) == false && GetStrLen(pobjUserAnswerResultEN.batchId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[批次ID(batchId)]的长度不能超过4(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.batchId}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.userId) == false && GetStrLen(pobjUserAnswerResultEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.userId}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerText) == false && GetStrLen(pobjUserAnswerResultEN.answerText) > 8000)
{
 throw new Error(`(errid:Watl000413)字段[回答文本(answerText)]的长度不能超过8000(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerText}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerDate) == false && GetStrLen(pobjUserAnswerResultEN.answerDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[回答日期(answerDate)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerDate}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerTime) == false && GetStrLen(pobjUserAnswerResultEN.answerTime) > 10)
{
 throw new Error(`(errid:Watl000413)字段[回答时间(answerTime)]的长度不能超过10(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerTime}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerIP) == false && GetStrLen(pobjUserAnswerResultEN.answerIP) > 30)
{
 throw new Error(`(errid:Watl000413)字段[回答IP(answerIP)]的长度不能超过30(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerIP}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.idSchool) == false && GetStrLen(pobjUserAnswerResultEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.idSchool}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.school) == false && GetStrLen(pobjUserAnswerResultEN.school) > 50)
{
 throw new Error(`(errid:Watl000413)字段[School(school)]的长度不能超过50(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.school}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.markTime) == false && GetStrLen(pobjUserAnswerResultEN.markTime) > 14)
{
 throw new Error(`(errid:Watl000413)字段[批改时间(markTime)]的长度不能超过14(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.markTime}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.markerId) == false && GetStrLen(pobjUserAnswerResultEN.markerId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[打分者(markerId)]的长度不能超过20(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.markerId}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerMultiOption) == false && GetStrLen(pobjUserAnswerResultEN.answerMultiOption) > 300)
{
 throw new Error(`(errid:Watl000413)字段[多选项答案(answerMultiOption)]的长度不能超过300(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerMultiOption}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.updDate) == false && GetStrLen(pobjUserAnswerResultEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.updDate}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.updUser) == false && GetStrLen(pobjUserAnswerResultEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.updUser}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.memo) == false && GetStrLen(pobjUserAnswerResultEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.memo}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.questionnaireSetId) == false && GetStrLen(pobjUserAnswerResultEN.questionnaireSetId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[问卷集ID(questionnaireSetId)]的长度不能超过4(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.questionnaireSetId}(clsUserAnswerResultBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjUserAnswerResultEN.minId && undefined !== pobjUserAnswerResultEN.minId && tzDataType.isNumber(pobjUserAnswerResultEN.minId) === false)
{
 throw new Error(`(errid:Watl000414)字段[MinId(minId)]的值:[${pobjUserAnswerResultEN.minId}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.questionId && undefined !== pobjUserAnswerResultEN.questionId && tzDataType.isNumber(pobjUserAnswerResultEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjUserAnswerResultEN.questionId}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.courseId) == false && undefined !== pobjUserAnswerResultEN.courseId && tzDataType.isString(pobjUserAnswerResultEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjUserAnswerResultEN.courseId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.idCurrEduCls) == false && undefined !== pobjUserAnswerResultEN.idCurrEduCls && tzDataType.isString(pobjUserAnswerResultEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjUserAnswerResultEN.idCurrEduCls}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.examBatchNo) == false && undefined !== pobjUserAnswerResultEN.examBatchNo && tzDataType.isString(pobjUserAnswerResultEN.examBatchNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生批次号(examBatchNo)]的值:[${pobjUserAnswerResultEN.examBatchNo}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.courseExamPaperId) == false && undefined !== pobjUserAnswerResultEN.courseExamPaperId && tzDataType.isString(pobjUserAnswerResultEN.courseExamPaperId) === false)
{
 throw new Error(`(errid:Watl000414)字段[考卷流水号(courseExamPaperId)]的值:[${pobjUserAnswerResultEN.courseExamPaperId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerOptionId) == false && undefined !== pobjUserAnswerResultEN.answerOptionId && tzDataType.isString(pobjUserAnswerResultEN.answerOptionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答选项Id(answerOptionId)]的值:[${pobjUserAnswerResultEN.answerOptionId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.batchId) == false && undefined !== pobjUserAnswerResultEN.batchId && tzDataType.isString(pobjUserAnswerResultEN.batchId) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次ID(batchId)]的值:[${pobjUserAnswerResultEN.batchId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.userId) == false && undefined !== pobjUserAnswerResultEN.userId && tzDataType.isString(pobjUserAnswerResultEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjUserAnswerResultEN.userId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerText) == false && undefined !== pobjUserAnswerResultEN.answerText && tzDataType.isString(pobjUserAnswerResultEN.answerText) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答文本(answerText)]的值:[${pobjUserAnswerResultEN.answerText}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerDate) == false && undefined !== pobjUserAnswerResultEN.answerDate && tzDataType.isString(pobjUserAnswerResultEN.answerDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答日期(answerDate)]的值:[${pobjUserAnswerResultEN.answerDate}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerTime) == false && undefined !== pobjUserAnswerResultEN.answerTime && tzDataType.isString(pobjUserAnswerResultEN.answerTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答时间(answerTime)]的值:[${pobjUserAnswerResultEN.answerTime}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerIP) == false && undefined !== pobjUserAnswerResultEN.answerIP && tzDataType.isString(pobjUserAnswerResultEN.answerIP) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答IP(answerIP)]的值:[${pobjUserAnswerResultEN.answerIP}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.isAccess && undefined !== pobjUserAnswerResultEN.isAccess && tzDataType.isBoolean(pobjUserAnswerResultEN.isAccess) === false)
{
 throw new Error(`(errid:Watl000414)字段[IsAccess(isAccess)]的值:[${pobjUserAnswerResultEN.isAccess}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.isAccessC && undefined !== pobjUserAnswerResultEN.isAccessC && tzDataType.isBoolean(pobjUserAnswerResultEN.isAccessC) === false)
{
 throw new Error(`(errid:Watl000414)字段[IsAccessC(isAccessC)]的值:[${pobjUserAnswerResultEN.isAccessC}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.idSchool) == false && undefined !== pobjUserAnswerResultEN.idSchool && tzDataType.isString(pobjUserAnswerResultEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjUserAnswerResultEN.idSchool}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.school) == false && undefined !== pobjUserAnswerResultEN.school && tzDataType.isString(pobjUserAnswerResultEN.school) === false)
{
 throw new Error(`(errid:Watl000414)字段[School(school)]的值:[${pobjUserAnswerResultEN.school}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.answerMode && undefined !== pobjUserAnswerResultEN.answerMode && tzDataType.isNumber(pobjUserAnswerResultEN.answerMode) === false)
{
 throw new Error(`(errid:Watl000414)字段[AnswerMode(answerMode)]的值:[${pobjUserAnswerResultEN.answerMode}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.isMarking && undefined !== pobjUserAnswerResultEN.isMarking && tzDataType.isBoolean(pobjUserAnswerResultEN.isMarking) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否批阅(isMarking)]的值:[${pobjUserAnswerResultEN.isMarking}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.isRight && undefined !== pobjUserAnswerResultEN.isRight && tzDataType.isBoolean(pobjUserAnswerResultEN.isRight) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否正确(isRight)]的值:[${pobjUserAnswerResultEN.isRight}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.score && undefined !== pobjUserAnswerResultEN.score && tzDataType.isNumber(pobjUserAnswerResultEN.score) === false)
{
 throw new Error(`(errid:Watl000414)字段[得分(score)]的值:[${pobjUserAnswerResultEN.score}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.markTime) == false && undefined !== pobjUserAnswerResultEN.markTime && tzDataType.isString(pobjUserAnswerResultEN.markTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[批改时间(markTime)]的值:[${pobjUserAnswerResultEN.markTime}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.markerId) == false && undefined !== pobjUserAnswerResultEN.markerId && tzDataType.isString(pobjUserAnswerResultEN.markerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[打分者(markerId)]的值:[${pobjUserAnswerResultEN.markerId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.comment) == false && undefined !== pobjUserAnswerResultEN.comment && tzDataType.isString(pobjUserAnswerResultEN.comment) === false)
{
 throw new Error(`(errid:Watl000414)字段[批注(comment)]的值:[${pobjUserAnswerResultEN.comment}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.isAccessKnowledge && undefined !== pobjUserAnswerResultEN.isAccessKnowledge && tzDataType.isBoolean(pobjUserAnswerResultEN.isAccessKnowledge) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否处理知识点(isAccessKnowledge)]的值:[${pobjUserAnswerResultEN.isAccessKnowledge}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (null != pobjUserAnswerResultEN.answerId && undefined !== pobjUserAnswerResultEN.answerId && tzDataType.isNumber(pobjUserAnswerResultEN.answerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[问答ID(answerId)]的值:[${pobjUserAnswerResultEN.answerId}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerMultiOption) == false && undefined !== pobjUserAnswerResultEN.answerMultiOption && tzDataType.isString(pobjUserAnswerResultEN.answerMultiOption) === false)
{
 throw new Error(`(errid:Watl000414)字段[多选项答案(answerMultiOption)]的值:[${pobjUserAnswerResultEN.answerMultiOption}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.updDate) == false && undefined !== pobjUserAnswerResultEN.updDate && tzDataType.isString(pobjUserAnswerResultEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjUserAnswerResultEN.updDate}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.updUser) == false && undefined !== pobjUserAnswerResultEN.updUser && tzDataType.isString(pobjUserAnswerResultEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjUserAnswerResultEN.updUser}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.memo) == false && undefined !== pobjUserAnswerResultEN.memo && tzDataType.isString(pobjUserAnswerResultEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjUserAnswerResultEN.memo}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.questionnaireSetId) == false && undefined !== pobjUserAnswerResultEN.questionnaireSetId && tzDataType.isString(pobjUserAnswerResultEN.questionnaireSetId) === false)
{
 throw new Error(`(errid:Watl000414)字段[问卷集ID(questionnaireSetId)]的值:[${pobjUserAnswerResultEN.questionnaireSetId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjUserAnswerResultEN.idCurrEduCls) == false && pobjUserAnswerResultEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjUserAnswerResultEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 用户答题结果)!(clsUserAnswerResultBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function UserAnswerResult_CheckProperty4Update(pobjUserAnswerResultEN: clsUserAnswerResultEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUserAnswerResultEN.courseId) == false && GetStrLen(pobjUserAnswerResultEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.courseId}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.idCurrEduCls) == false && GetStrLen(pobjUserAnswerResultEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.idCurrEduCls}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.examBatchNo) == false && GetStrLen(pobjUserAnswerResultEN.examBatchNo) > 20)
{
 throw new Error(`(errid:Watl000416)字段[学生批次号(examBatchNo)]的长度不能超过20(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.examBatchNo}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.courseExamPaperId) == false && GetStrLen(pobjUserAnswerResultEN.courseExamPaperId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.courseExamPaperId}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerOptionId) == false && GetStrLen(pobjUserAnswerResultEN.answerOptionId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[回答选项Id(answerOptionId)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerOptionId}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.batchId) == false && GetStrLen(pobjUserAnswerResultEN.batchId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[批次ID(batchId)]的长度不能超过4(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.batchId}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.userId) == false && GetStrLen(pobjUserAnswerResultEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.userId}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerText) == false && GetStrLen(pobjUserAnswerResultEN.answerText) > 8000)
{
 throw new Error(`(errid:Watl000416)字段[回答文本(answerText)]的长度不能超过8000(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerText}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerDate) == false && GetStrLen(pobjUserAnswerResultEN.answerDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[回答日期(answerDate)]的长度不能超过8(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerDate}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerTime) == false && GetStrLen(pobjUserAnswerResultEN.answerTime) > 10)
{
 throw new Error(`(errid:Watl000416)字段[回答时间(answerTime)]的长度不能超过10(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerTime}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerIP) == false && GetStrLen(pobjUserAnswerResultEN.answerIP) > 30)
{
 throw new Error(`(errid:Watl000416)字段[回答IP(answerIP)]的长度不能超过30(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerIP}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.idSchool) == false && GetStrLen(pobjUserAnswerResultEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.idSchool}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.school) == false && GetStrLen(pobjUserAnswerResultEN.school) > 50)
{
 throw new Error(`(errid:Watl000416)字段[School(school)]的长度不能超过50(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.school}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.markTime) == false && GetStrLen(pobjUserAnswerResultEN.markTime) > 14)
{
 throw new Error(`(errid:Watl000416)字段[批改时间(markTime)]的长度不能超过14(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.markTime}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.markerId) == false && GetStrLen(pobjUserAnswerResultEN.markerId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[打分者(markerId)]的长度不能超过20(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.markerId}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerMultiOption) == false && GetStrLen(pobjUserAnswerResultEN.answerMultiOption) > 300)
{
 throw new Error(`(errid:Watl000416)字段[多选项答案(answerMultiOption)]的长度不能超过300(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.answerMultiOption}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.updDate) == false && GetStrLen(pobjUserAnswerResultEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.updDate}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.updUser) == false && GetStrLen(pobjUserAnswerResultEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.updUser}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.memo) == false && GetStrLen(pobjUserAnswerResultEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.memo}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.questionnaireSetId) == false && GetStrLen(pobjUserAnswerResultEN.questionnaireSetId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[问卷集ID(questionnaireSetId)]的长度不能超过4(In 用户答题结果(UserAnswerResult))!值:${pobjUserAnswerResultEN.questionnaireSetId}(clsUserAnswerResultBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjUserAnswerResultEN.minId && undefined !== pobjUserAnswerResultEN.minId && tzDataType.isNumber(pobjUserAnswerResultEN.minId) === false)
{
 throw new Error(`(errid:Watl000417)字段[MinId(minId)]的值:[${pobjUserAnswerResultEN.minId}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.questionId && undefined !== pobjUserAnswerResultEN.questionId && tzDataType.isNumber(pobjUserAnswerResultEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjUserAnswerResultEN.questionId}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.courseId) == false && undefined !== pobjUserAnswerResultEN.courseId && tzDataType.isString(pobjUserAnswerResultEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjUserAnswerResultEN.courseId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.idCurrEduCls) == false && undefined !== pobjUserAnswerResultEN.idCurrEduCls && tzDataType.isString(pobjUserAnswerResultEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjUserAnswerResultEN.idCurrEduCls}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.examBatchNo) == false && undefined !== pobjUserAnswerResultEN.examBatchNo && tzDataType.isString(pobjUserAnswerResultEN.examBatchNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生批次号(examBatchNo)]的值:[${pobjUserAnswerResultEN.examBatchNo}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.courseExamPaperId) == false && undefined !== pobjUserAnswerResultEN.courseExamPaperId && tzDataType.isString(pobjUserAnswerResultEN.courseExamPaperId) === false)
{
 throw new Error(`(errid:Watl000417)字段[考卷流水号(courseExamPaperId)]的值:[${pobjUserAnswerResultEN.courseExamPaperId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerOptionId) == false && undefined !== pobjUserAnswerResultEN.answerOptionId && tzDataType.isString(pobjUserAnswerResultEN.answerOptionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答选项Id(answerOptionId)]的值:[${pobjUserAnswerResultEN.answerOptionId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.batchId) == false && undefined !== pobjUserAnswerResultEN.batchId && tzDataType.isString(pobjUserAnswerResultEN.batchId) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次ID(batchId)]的值:[${pobjUserAnswerResultEN.batchId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.userId) == false && undefined !== pobjUserAnswerResultEN.userId && tzDataType.isString(pobjUserAnswerResultEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjUserAnswerResultEN.userId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerText) == false && undefined !== pobjUserAnswerResultEN.answerText && tzDataType.isString(pobjUserAnswerResultEN.answerText) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答文本(answerText)]的值:[${pobjUserAnswerResultEN.answerText}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerDate) == false && undefined !== pobjUserAnswerResultEN.answerDate && tzDataType.isString(pobjUserAnswerResultEN.answerDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答日期(answerDate)]的值:[${pobjUserAnswerResultEN.answerDate}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerTime) == false && undefined !== pobjUserAnswerResultEN.answerTime && tzDataType.isString(pobjUserAnswerResultEN.answerTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答时间(answerTime)]的值:[${pobjUserAnswerResultEN.answerTime}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerIP) == false && undefined !== pobjUserAnswerResultEN.answerIP && tzDataType.isString(pobjUserAnswerResultEN.answerIP) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答IP(answerIP)]的值:[${pobjUserAnswerResultEN.answerIP}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.isAccess && undefined !== pobjUserAnswerResultEN.isAccess && tzDataType.isBoolean(pobjUserAnswerResultEN.isAccess) === false)
{
 throw new Error(`(errid:Watl000417)字段[IsAccess(isAccess)]的值:[${pobjUserAnswerResultEN.isAccess}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.isAccessC && undefined !== pobjUserAnswerResultEN.isAccessC && tzDataType.isBoolean(pobjUserAnswerResultEN.isAccessC) === false)
{
 throw new Error(`(errid:Watl000417)字段[IsAccessC(isAccessC)]的值:[${pobjUserAnswerResultEN.isAccessC}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.idSchool) == false && undefined !== pobjUserAnswerResultEN.idSchool && tzDataType.isString(pobjUserAnswerResultEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjUserAnswerResultEN.idSchool}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.school) == false && undefined !== pobjUserAnswerResultEN.school && tzDataType.isString(pobjUserAnswerResultEN.school) === false)
{
 throw new Error(`(errid:Watl000417)字段[School(school)]的值:[${pobjUserAnswerResultEN.school}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.answerMode && undefined !== pobjUserAnswerResultEN.answerMode && tzDataType.isNumber(pobjUserAnswerResultEN.answerMode) === false)
{
 throw new Error(`(errid:Watl000417)字段[AnswerMode(answerMode)]的值:[${pobjUserAnswerResultEN.answerMode}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.isMarking && undefined !== pobjUserAnswerResultEN.isMarking && tzDataType.isBoolean(pobjUserAnswerResultEN.isMarking) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否批阅(isMarking)]的值:[${pobjUserAnswerResultEN.isMarking}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.isRight && undefined !== pobjUserAnswerResultEN.isRight && tzDataType.isBoolean(pobjUserAnswerResultEN.isRight) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否正确(isRight)]的值:[${pobjUserAnswerResultEN.isRight}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.score && undefined !== pobjUserAnswerResultEN.score && tzDataType.isNumber(pobjUserAnswerResultEN.score) === false)
{
 throw new Error(`(errid:Watl000417)字段[得分(score)]的值:[${pobjUserAnswerResultEN.score}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.markTime) == false && undefined !== pobjUserAnswerResultEN.markTime && tzDataType.isString(pobjUserAnswerResultEN.markTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[批改时间(markTime)]的值:[${pobjUserAnswerResultEN.markTime}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.markerId) == false && undefined !== pobjUserAnswerResultEN.markerId && tzDataType.isString(pobjUserAnswerResultEN.markerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[打分者(markerId)]的值:[${pobjUserAnswerResultEN.markerId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.comment) == false && undefined !== pobjUserAnswerResultEN.comment && tzDataType.isString(pobjUserAnswerResultEN.comment) === false)
{
 throw new Error(`(errid:Watl000417)字段[批注(comment)]的值:[${pobjUserAnswerResultEN.comment}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.isAccessKnowledge && undefined !== pobjUserAnswerResultEN.isAccessKnowledge && tzDataType.isBoolean(pobjUserAnswerResultEN.isAccessKnowledge) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否处理知识点(isAccessKnowledge)]的值:[${pobjUserAnswerResultEN.isAccessKnowledge}], 非法,应该为布尔型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (null != pobjUserAnswerResultEN.answerId && undefined !== pobjUserAnswerResultEN.answerId && tzDataType.isNumber(pobjUserAnswerResultEN.answerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[问答ID(answerId)]的值:[${pobjUserAnswerResultEN.answerId}], 非法,应该为数值型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.answerMultiOption) == false && undefined !== pobjUserAnswerResultEN.answerMultiOption && tzDataType.isString(pobjUserAnswerResultEN.answerMultiOption) === false)
{
 throw new Error(`(errid:Watl000417)字段[多选项答案(answerMultiOption)]的值:[${pobjUserAnswerResultEN.answerMultiOption}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.updDate) == false && undefined !== pobjUserAnswerResultEN.updDate && tzDataType.isString(pobjUserAnswerResultEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjUserAnswerResultEN.updDate}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.updUser) == false && undefined !== pobjUserAnswerResultEN.updUser && tzDataType.isString(pobjUserAnswerResultEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjUserAnswerResultEN.updUser}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.memo) == false && undefined !== pobjUserAnswerResultEN.memo && tzDataType.isString(pobjUserAnswerResultEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjUserAnswerResultEN.memo}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserAnswerResultEN.questionnaireSetId) == false && undefined !== pobjUserAnswerResultEN.questionnaireSetId && tzDataType.isString(pobjUserAnswerResultEN.questionnaireSetId) === false)
{
 throw new Error(`(errid:Watl000417)字段[问卷集ID(questionnaireSetId)]的值:[${pobjUserAnswerResultEN.questionnaireSetId}], 非法,应该为字符型(In 用户答题结果(UserAnswerResult))!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjUserAnswerResultEN.minId 
 || pobjUserAnswerResultEN.minId != null && pobjUserAnswerResultEN.minId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[MinId]不能为空(In 用户答题结果)!(clsUserAnswerResultBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjUserAnswerResultEN.idCurrEduCls) == false && pobjUserAnswerResultEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjUserAnswerResultEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 用户答题结果)!(clsUserAnswerResultBL:CheckPropertyNew)");
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
export  function UserAnswerResult_GetJSONStrByObj (pobjUserAnswerResultEN: clsUserAnswerResultEN): string
{
pobjUserAnswerResultEN.sfUpdFldSetStr = pobjUserAnswerResultEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjUserAnswerResultEN);
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
export  function UserAnswerResult_GetObjLstByJSONStr (strJSON: string): Array<clsUserAnswerResultEN>
{
let arrUserAnswerResultObjLst = new Array<clsUserAnswerResultEN>();
if (strJSON === "")
{
return arrUserAnswerResultObjLst;
}
try
{
arrUserAnswerResultObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrUserAnswerResultObjLst;
}
return arrUserAnswerResultObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserAnswerResultObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function UserAnswerResult_GetObjLstByJSONObjLst (arrUserAnswerResultObjLstS: Array<clsUserAnswerResultEN>): Array<clsUserAnswerResultEN>
{
const arrUserAnswerResultObjLst = new Array<clsUserAnswerResultEN>();
for (const objInFor of arrUserAnswerResultObjLstS) {
const obj1 = UserAnswerResult_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrUserAnswerResultObjLst.push(obj1);
}
return arrUserAnswerResultObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function UserAnswerResult_GetObjByJSONStr (strJSON: string): clsUserAnswerResultEN
{
let pobjUserAnswerResultEN = new clsUserAnswerResultEN();
if (strJSON === "")
{
return pobjUserAnswerResultEN;
}
try
{
pobjUserAnswerResultEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjUserAnswerResultEN;
}
return pobjUserAnswerResultEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function UserAnswerResult_GetCombineCondition(objUserAnswerResultCond: clsUserAnswerResultEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_MinId) == true)
{
const strComparisonOpMinId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_MinId];
strWhereCond += Format(" And {0} {2} {1}", clsUserAnswerResultEN.con_MinId, objUserAnswerResultCond.minId, strComparisonOpMinId);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsUserAnswerResultEN.con_QuestionId, objUserAnswerResultCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_CourseId, objUserAnswerResultCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_IdCurrEduCls, objUserAnswerResultCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_ExamBatchNo) == true)
{
const strComparisonOpExamBatchNo:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_ExamBatchNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_ExamBatchNo, objUserAnswerResultCond.examBatchNo, strComparisonOpExamBatchNo);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_CourseExamPaperId) == true)
{
const strComparisonOpCourseExamPaperId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_CourseExamPaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_CourseExamPaperId, objUserAnswerResultCond.courseExamPaperId, strComparisonOpCourseExamPaperId);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_AnswerOptionId) == true)
{
const strComparisonOpAnswerOptionId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_AnswerOptionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_AnswerOptionId, objUserAnswerResultCond.answerOptionId, strComparisonOpAnswerOptionId);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_BatchId) == true)
{
const strComparisonOpBatchId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_BatchId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_BatchId, objUserAnswerResultCond.batchId, strComparisonOpBatchId);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_UserId, objUserAnswerResultCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_AnswerText) == true)
{
const strComparisonOpAnswerText:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_AnswerText];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_AnswerText, objUserAnswerResultCond.answerText, strComparisonOpAnswerText);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_AnswerDate) == true)
{
const strComparisonOpAnswerDate:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_AnswerDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_AnswerDate, objUserAnswerResultCond.answerDate, strComparisonOpAnswerDate);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_AnswerTime) == true)
{
const strComparisonOpAnswerTime:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_AnswerTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_AnswerTime, objUserAnswerResultCond.answerTime, strComparisonOpAnswerTime);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_AnswerIP) == true)
{
const strComparisonOpAnswerIP:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_AnswerIP];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_AnswerIP, objUserAnswerResultCond.answerIP, strComparisonOpAnswerIP);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_IsAccess) == true)
{
if (objUserAnswerResultCond.isAccess == true)
{
strWhereCond += Format(" And {0} = '1'", clsUserAnswerResultEN.con_IsAccess);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUserAnswerResultEN.con_IsAccess);
}
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_IsAccessC) == true)
{
if (objUserAnswerResultCond.isAccessC == true)
{
strWhereCond += Format(" And {0} = '1'", clsUserAnswerResultEN.con_IsAccessC);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUserAnswerResultEN.con_IsAccessC);
}
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_IdSchool, objUserAnswerResultCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_School) == true)
{
const strComparisonOpSchool:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_School];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_School, objUserAnswerResultCond.school, strComparisonOpSchool);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_AnswerMode) == true)
{
const strComparisonOpAnswerMode:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_AnswerMode];
strWhereCond += Format(" And {0} {2} {1}", clsUserAnswerResultEN.con_AnswerMode, objUserAnswerResultCond.answerMode, strComparisonOpAnswerMode);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_IsMarking) == true)
{
if (objUserAnswerResultCond.isMarking == true)
{
strWhereCond += Format(" And {0} = '1'", clsUserAnswerResultEN.con_IsMarking);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUserAnswerResultEN.con_IsMarking);
}
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_IsRight) == true)
{
if (objUserAnswerResultCond.isRight == true)
{
strWhereCond += Format(" And {0} = '1'", clsUserAnswerResultEN.con_IsRight);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUserAnswerResultEN.con_IsRight);
}
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_Score) == true)
{
const strComparisonOpScore:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsUserAnswerResultEN.con_Score, objUserAnswerResultCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_MarkTime) == true)
{
const strComparisonOpMarkTime:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_MarkTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_MarkTime, objUserAnswerResultCond.markTime, strComparisonOpMarkTime);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_MarkerId) == true)
{
const strComparisonOpMarkerId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_MarkerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_MarkerId, objUserAnswerResultCond.markerId, strComparisonOpMarkerId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_IsAccessKnowledge) == true)
{
if (objUserAnswerResultCond.isAccessKnowledge == true)
{
strWhereCond += Format(" And {0} = '1'", clsUserAnswerResultEN.con_IsAccessKnowledge);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUserAnswerResultEN.con_IsAccessKnowledge);
}
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_AnswerId) == true)
{
const strComparisonOpAnswerId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_AnswerId];
strWhereCond += Format(" And {0} {2} {1}", clsUserAnswerResultEN.con_AnswerId, objUserAnswerResultCond.answerId, strComparisonOpAnswerId);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_AnswerMultiOption) == true)
{
const strComparisonOpAnswerMultiOption:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_AnswerMultiOption];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_AnswerMultiOption, objUserAnswerResultCond.answerMultiOption, strComparisonOpAnswerMultiOption);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_UpdDate, objUserAnswerResultCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_UpdUser, objUserAnswerResultCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_Memo, objUserAnswerResultCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objUserAnswerResultCond.dicFldComparisonOp, clsUserAnswerResultEN.con_QuestionnaireSetId) == true)
{
const strComparisonOpQuestionnaireSetId:string = objUserAnswerResultCond.dicFldComparisonOp[clsUserAnswerResultEN.con_QuestionnaireSetId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserAnswerResultEN.con_QuestionnaireSetId, objUserAnswerResultCond.questionnaireSetId, strComparisonOpQuestionnaireSetId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--UserAnswerResult(用户答题结果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseExamPaperId: 考卷流水号(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strExamBatchNo: 学生批次号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function UserAnswerResult_GetUniCondStr(objUserAnswerResultEN: clsUserAnswerResultEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseExamPaperId = '{0}'", objUserAnswerResultEN.courseExamPaperId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objUserAnswerResultEN.questionId);
 strWhereCond +=  Format(" and UserId = '{0}'", objUserAnswerResultEN.userId);
 strWhereCond +=  Format(" and ExamBatchNo = '{0}'", objUserAnswerResultEN.examBatchNo);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--UserAnswerResult(用户答题结果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseExamPaperId: 考卷流水号(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strExamBatchNo: 学生批次号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function UserAnswerResult_GetUniCondStr4Update(objUserAnswerResultEN: clsUserAnswerResultEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and MinId <> '{0}'", objUserAnswerResultEN.minId);
 strWhereCond +=  Format(" and CourseExamPaperId = '{0}'", objUserAnswerResultEN.courseExamPaperId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objUserAnswerResultEN.questionId);
 strWhereCond +=  Format(" and UserId = '{0}'", objUserAnswerResultEN.userId);
 strWhereCond +=  Format(" and ExamBatchNo = '{0}'", objUserAnswerResultEN.examBatchNo);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objUserAnswerResultENS:源对象
 * @param objUserAnswerResultENT:目标对象
*/
export  function UserAnswerResult_CopyObjTo(objUserAnswerResultENS: clsUserAnswerResultEN , objUserAnswerResultENT: clsUserAnswerResultEN ): void 
{
objUserAnswerResultENT.minId = objUserAnswerResultENS.minId; //MinId
objUserAnswerResultENT.questionId = objUserAnswerResultENS.questionId; //题目Id
objUserAnswerResultENT.courseId = objUserAnswerResultENS.courseId; //课程Id
objUserAnswerResultENT.idCurrEduCls = objUserAnswerResultENS.idCurrEduCls; //教学班流水号
objUserAnswerResultENT.examBatchNo = objUserAnswerResultENS.examBatchNo; //学生批次号
objUserAnswerResultENT.courseExamPaperId = objUserAnswerResultENS.courseExamPaperId; //考卷流水号
objUserAnswerResultENT.answerOptionId = objUserAnswerResultENS.answerOptionId; //回答选项Id
objUserAnswerResultENT.batchId = objUserAnswerResultENS.batchId; //批次ID
objUserAnswerResultENT.userId = objUserAnswerResultENS.userId; //用户ID
objUserAnswerResultENT.answerText = objUserAnswerResultENS.answerText; //回答文本
objUserAnswerResultENT.answerDate = objUserAnswerResultENS.answerDate; //回答日期
objUserAnswerResultENT.answerTime = objUserAnswerResultENS.answerTime; //回答时间
objUserAnswerResultENT.answerIP = objUserAnswerResultENS.answerIP; //回答IP
objUserAnswerResultENT.isAccess = objUserAnswerResultENS.isAccess; //IsAccess
objUserAnswerResultENT.isAccessC = objUserAnswerResultENS.isAccessC; //IsAccessC
objUserAnswerResultENT.idSchool = objUserAnswerResultENS.idSchool; //学校流水号
objUserAnswerResultENT.school = objUserAnswerResultENS.school; //School
objUserAnswerResultENT.answerMode = objUserAnswerResultENS.answerMode; //AnswerMode
objUserAnswerResultENT.isMarking = objUserAnswerResultENS.isMarking; //是否批阅
objUserAnswerResultENT.isRight = objUserAnswerResultENS.isRight; //是否正确
objUserAnswerResultENT.score = objUserAnswerResultENS.score; //得分
objUserAnswerResultENT.markTime = objUserAnswerResultENS.markTime; //批改时间
objUserAnswerResultENT.markerId = objUserAnswerResultENS.markerId; //打分者
objUserAnswerResultENT.comment = objUserAnswerResultENS.comment; //批注
objUserAnswerResultENT.isAccessKnowledge = objUserAnswerResultENS.isAccessKnowledge; //是否处理知识点
objUserAnswerResultENT.answerId = objUserAnswerResultENS.answerId; //问答ID
objUserAnswerResultENT.answerMultiOption = objUserAnswerResultENS.answerMultiOption; //多选项答案
objUserAnswerResultENT.updDate = objUserAnswerResultENS.updDate; //修改日期
objUserAnswerResultENT.updUser = objUserAnswerResultENS.updUser; //修改人
objUserAnswerResultENT.memo = objUserAnswerResultENS.memo; //备注
objUserAnswerResultENT.questionnaireSetId = objUserAnswerResultENS.questionnaireSetId; //问卷集ID
objUserAnswerResultENT.sfUpdFldSetStr = objUserAnswerResultENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserAnswerResultENS:源对象
 * @param objUserAnswerResultENT:目标对象
*/
export  function UserAnswerResult_GetObjFromJsonObj(objUserAnswerResultENS: clsUserAnswerResultEN): clsUserAnswerResultEN 
{
 const objUserAnswerResultENT: clsUserAnswerResultEN = new clsUserAnswerResultEN();
ObjectAssign(objUserAnswerResultENT, objUserAnswerResultENS);
 return objUserAnswerResultENT;
}