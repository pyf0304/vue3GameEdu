
 /**
 * 类名:clsge_StuBatchQuesRelaWApi
 * 表名:ge_StuBatchQuesRela(01120885)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:29
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学生批次题目关系(ge_StuBatchQuesRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsge_StuBatchQuesRelaEN } from "@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_StuBatchQuesRela_Controller = "ge_StuBatchQuesRelaApi";
 export const ge_StuBatchQuesRela_ConstructorName = "ge_StuBatchQuesRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdStuBatchQuesRela:关键字
 * @returns 对象
 **/
export  async function ge_StuBatchQuesRela_GetObjByIdStuBatchQuesRelaAsync(lngIdStuBatchQuesRela: number): Promise<clsge_StuBatchQuesRelaEN|null>  
{
const strThisFuncName = "GetObjByIdStuBatchQuesRelaAsync";

if (lngIdStuBatchQuesRela == 0)
{
  const strMsg = Format("参数:[lngIdStuBatchQuesRela]不能为空!(In clsge_StuBatchQuesRelaWApi.GetObjByIdStuBatchQuesRelaAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByIdStuBatchQuesRela";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdStuBatchQuesRela,
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
const objge_StuBatchQuesRela = ge_StuBatchQuesRela_GetObjFromJsonObj(returnObj);
return objge_StuBatchQuesRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdStuBatchQuesRelalocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdStuBatchQuesRelaCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function ge_StuBatchQuesRela_SortFunDefa(a:clsge_StuBatchQuesRelaEN , b:clsge_StuBatchQuesRelaEN): number 
{
return a.idStuBatchQuesRela-b.idStuBatchQuesRela;
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
export  function ge_StuBatchQuesRela_SortFunDefa2Fld(a:clsge_StuBatchQuesRelaEN , b:clsge_StuBatchQuesRelaEN): number 
{
if (a.examBatchNo == b.examBatchNo) return a.levelNo - b.levelNo;
else return a.examBatchNo.localeCompare(b.examBatchNo);
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
export  function ge_StuBatchQuesRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_StuBatchQuesRelaEN.con_IdStuBatchQuesRela:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.idStuBatchQuesRela-b.idStuBatchQuesRela;
}
case clsge_StuBatchQuesRelaEN.con_ExamBatchNo:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.examBatchNo.localeCompare(b.examBatchNo);
}
case clsge_StuBatchQuesRelaEN.con_LevelNo:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.levelNo-b.levelNo;
}
case clsge_StuBatchQuesRelaEN.con_QuestionId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.questionId-b.questionId;
}
case clsge_StuBatchQuesRelaEN.con_UserId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.userId.localeCompare(b.userId);
}
case clsge_StuBatchQuesRelaEN.con_IdCurrEduCls:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_StuBatchQuesRelaEN.con_QuestionIndex4Batch:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.questionIndex4Batch-b.questionIndex4Batch;
}
case clsge_StuBatchQuesRelaEN.con_GameLevelId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.gameLevelId == null) return -1;
if (b.gameLevelId == null) return 1;
return a.gameLevelId.localeCompare(b.gameLevelId);
}
case clsge_StuBatchQuesRelaEN.con_Scores:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.scores-b.scores;
}
case clsge_StuBatchQuesRelaEN.con_Score:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.score-b.score;
}
case clsge_StuBatchQuesRelaEN.con_StuAnswerText:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.stuAnswerText == null) return -1;
if (b.stuAnswerText == null) return 1;
return a.stuAnswerText.localeCompare(b.stuAnswerText);
}
case clsge_StuBatchQuesRelaEN.con_AnswerDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.answerDate == null) return -1;
if (b.answerDate == null) return 1;
return a.answerDate.localeCompare(b.answerDate);
}
case clsge_StuBatchQuesRelaEN.con_AnswerIP:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.answerIP == null) return -1;
if (b.answerIP == null) return 1;
return a.answerIP.localeCompare(b.answerIP);
}
case clsge_StuBatchQuesRelaEN.con_AnswerModeId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.answerModeId == null) return -1;
if (b.answerModeId == null) return 1;
return a.answerModeId.localeCompare(b.answerModeId);
}
case clsge_StuBatchQuesRelaEN.con_AnswerMultiOptions:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.answerMultiOptions == null) return -1;
if (b.answerMultiOptions == null) return 1;
return a.answerMultiOptions.localeCompare(b.answerMultiOptions);
}
case clsge_StuBatchQuesRelaEN.con_AnswerOptionId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.answerOptionId == null) return -1;
if (b.answerOptionId == null) return 1;
return a.answerOptionId.localeCompare(b.answerOptionId);
}
case clsge_StuBatchQuesRelaEN.con_AnswerTime:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.answerTime == null) return -1;
if (b.answerTime == null) return 1;
return a.answerTime.localeCompare(b.answerTime);
}
case clsge_StuBatchQuesRelaEN.con_ApplySendBackDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.applySendBackDate == null) return -1;
if (b.applySendBackDate == null) return 1;
return a.applySendBackDate.localeCompare(b.applySendBackDate);
}
case clsge_StuBatchQuesRelaEN.con_Comment:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.comment == null) return -1;
if (b.comment == null) return 1;
return a.comment.localeCompare(b.comment);
}
case clsge_StuBatchQuesRelaEN.con_IsAccessKnowledge:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isAccessKnowledge == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsApplySendBack:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isApplySendBack == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsInErrorQuestion:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isInErrorQuestion == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsLook:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isLook == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsMarking:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isMarking == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsNotProcessTimeout:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isNotProcessTimeout == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsHasAnswer:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isHasAnswer == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsPublish:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isPublish == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsRight:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isRight == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsSave:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isSave == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsSendBack:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isSendBack == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsSubmit:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_MarkDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.markDate == null) return -1;
if (b.markDate == null) return 1;
return a.markDate.localeCompare(b.markDate);
}
case clsge_StuBatchQuesRelaEN.con_MarkerId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.markerId == null) return -1;
if (b.markerId == null) return 1;
return a.markerId.localeCompare(b.markerId);
}
case clsge_StuBatchQuesRelaEN.con_OperateTime:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.operateTime == null) return -1;
if (b.operateTime == null) return 1;
return a.operateTime.localeCompare(b.operateTime);
}
case clsge_StuBatchQuesRelaEN.con_RealFinishDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.realFinishDate == null) return -1;
if (b.realFinishDate == null) return 1;
return a.realFinishDate.localeCompare(b.realFinishDate);
}
case clsge_StuBatchQuesRelaEN.con_WorkTypeId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.workTypeId == null) return -1;
if (b.workTypeId == null) return 1;
return a.workTypeId.localeCompare(b.workTypeId);
}
case clsge_StuBatchQuesRelaEN.con_SchoolYear:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsge_StuBatchQuesRelaEN.con_SchoolTerm:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsge_StuBatchQuesRelaEN.con_ErrMsg:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.errMsg == null) return -1;
if (b.errMsg == null) return 1;
return a.errMsg.localeCompare(b.errMsg);
}
case clsge_StuBatchQuesRelaEN.con_IsRecommend:
return (a: clsge_StuBatchQuesRelaEN) => {
if (a.isRecommend == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_CourseId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsge_StuBatchQuesRelaEN.con_UpdDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsge_StuBatchQuesRelaEN.con_UpdUserId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsge_StuBatchQuesRelaEN.con_Memo:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StuBatchQuesRela]中不存在!(in ${ ge_StuBatchQuesRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_StuBatchQuesRelaEN.con_IdStuBatchQuesRela:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.idStuBatchQuesRela-a.idStuBatchQuesRela;
}
case clsge_StuBatchQuesRelaEN.con_ExamBatchNo:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.examBatchNo.localeCompare(a.examBatchNo);
}
case clsge_StuBatchQuesRelaEN.con_LevelNo:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.levelNo-a.levelNo;
}
case clsge_StuBatchQuesRelaEN.con_QuestionId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.questionId-a.questionId;
}
case clsge_StuBatchQuesRelaEN.con_UserId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.userId.localeCompare(a.userId);
}
case clsge_StuBatchQuesRelaEN.con_IdCurrEduCls:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_StuBatchQuesRelaEN.con_QuestionIndex4Batch:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.questionIndex4Batch-a.questionIndex4Batch;
}
case clsge_StuBatchQuesRelaEN.con_GameLevelId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.gameLevelId == null) return -1;
if (a.gameLevelId == null) return 1;
return b.gameLevelId.localeCompare(a.gameLevelId);
}
case clsge_StuBatchQuesRelaEN.con_Scores:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.scores-a.scores;
}
case clsge_StuBatchQuesRelaEN.con_Score:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.score-a.score;
}
case clsge_StuBatchQuesRelaEN.con_StuAnswerText:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.stuAnswerText == null) return -1;
if (a.stuAnswerText == null) return 1;
return b.stuAnswerText.localeCompare(a.stuAnswerText);
}
case clsge_StuBatchQuesRelaEN.con_AnswerDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.answerDate == null) return -1;
if (a.answerDate == null) return 1;
return b.answerDate.localeCompare(a.answerDate);
}
case clsge_StuBatchQuesRelaEN.con_AnswerIP:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.answerIP == null) return -1;
if (a.answerIP == null) return 1;
return b.answerIP.localeCompare(a.answerIP);
}
case clsge_StuBatchQuesRelaEN.con_AnswerModeId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.answerModeId == null) return -1;
if (a.answerModeId == null) return 1;
return b.answerModeId.localeCompare(a.answerModeId);
}
case clsge_StuBatchQuesRelaEN.con_AnswerMultiOptions:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.answerMultiOptions == null) return -1;
if (a.answerMultiOptions == null) return 1;
return b.answerMultiOptions.localeCompare(a.answerMultiOptions);
}
case clsge_StuBatchQuesRelaEN.con_AnswerOptionId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.answerOptionId == null) return -1;
if (a.answerOptionId == null) return 1;
return b.answerOptionId.localeCompare(a.answerOptionId);
}
case clsge_StuBatchQuesRelaEN.con_AnswerTime:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.answerTime == null) return -1;
if (a.answerTime == null) return 1;
return b.answerTime.localeCompare(a.answerTime);
}
case clsge_StuBatchQuesRelaEN.con_ApplySendBackDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.applySendBackDate == null) return -1;
if (a.applySendBackDate == null) return 1;
return b.applySendBackDate.localeCompare(a.applySendBackDate);
}
case clsge_StuBatchQuesRelaEN.con_Comment:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.comment == null) return -1;
if (a.comment == null) return 1;
return b.comment.localeCompare(a.comment);
}
case clsge_StuBatchQuesRelaEN.con_IsAccessKnowledge:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isAccessKnowledge == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsApplySendBack:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isApplySendBack == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsInErrorQuestion:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isInErrorQuestion == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsLook:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isLook == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsMarking:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isMarking == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsNotProcessTimeout:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isNotProcessTimeout == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsHasAnswer:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isHasAnswer == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsPublish:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isPublish == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsRight:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isRight == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsSave:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isSave == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsSendBack:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isSendBack == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_IsSubmit:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_MarkDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.markDate == null) return -1;
if (a.markDate == null) return 1;
return b.markDate.localeCompare(a.markDate);
}
case clsge_StuBatchQuesRelaEN.con_MarkerId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.markerId == null) return -1;
if (a.markerId == null) return 1;
return b.markerId.localeCompare(a.markerId);
}
case clsge_StuBatchQuesRelaEN.con_OperateTime:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.operateTime == null) return -1;
if (a.operateTime == null) return 1;
return b.operateTime.localeCompare(a.operateTime);
}
case clsge_StuBatchQuesRelaEN.con_RealFinishDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.realFinishDate == null) return -1;
if (a.realFinishDate == null) return 1;
return b.realFinishDate.localeCompare(a.realFinishDate);
}
case clsge_StuBatchQuesRelaEN.con_WorkTypeId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.workTypeId == null) return -1;
if (a.workTypeId == null) return 1;
return b.workTypeId.localeCompare(a.workTypeId);
}
case clsge_StuBatchQuesRelaEN.con_SchoolYear:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsge_StuBatchQuesRelaEN.con_SchoolTerm:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsge_StuBatchQuesRelaEN.con_ErrMsg:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.errMsg == null) return -1;
if (a.errMsg == null) return 1;
return b.errMsg.localeCompare(a.errMsg);
}
case clsge_StuBatchQuesRelaEN.con_IsRecommend:
return (b: clsge_StuBatchQuesRelaEN) => {
if (b.isRecommend == true) return 1;
else return -1
}
case clsge_StuBatchQuesRelaEN.con_CourseId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsge_StuBatchQuesRelaEN.con_UpdDate:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsge_StuBatchQuesRelaEN.con_UpdUserId:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsge_StuBatchQuesRelaEN.con_Memo:
return (a: clsge_StuBatchQuesRelaEN, b: clsge_StuBatchQuesRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StuBatchQuesRela]中不存在!(in ${ ge_StuBatchQuesRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdStuBatchQuesRelaCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ge_StuBatchQuesRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_StuBatchQuesRelaEN.con_IdStuBatchQuesRela:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.idStuBatchQuesRela === value;
}
case clsge_StuBatchQuesRelaEN.con_ExamBatchNo:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.examBatchNo === value;
}
case clsge_StuBatchQuesRelaEN.con_LevelNo:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.levelNo === value;
}
case clsge_StuBatchQuesRelaEN.con_QuestionId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.questionId === value;
}
case clsge_StuBatchQuesRelaEN.con_UserId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.userId === value;
}
case clsge_StuBatchQuesRelaEN.con_IdCurrEduCls:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.idCurrEduCls === value;
}
case clsge_StuBatchQuesRelaEN.con_QuestionIndex4Batch:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.questionIndex4Batch === value;
}
case clsge_StuBatchQuesRelaEN.con_GameLevelId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.gameLevelId === value;
}
case clsge_StuBatchQuesRelaEN.con_Scores:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.scores === value;
}
case clsge_StuBatchQuesRelaEN.con_Score:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.score === value;
}
case clsge_StuBatchQuesRelaEN.con_StuAnswerText:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.stuAnswerText === value;
}
case clsge_StuBatchQuesRelaEN.con_AnswerDate:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.answerDate === value;
}
case clsge_StuBatchQuesRelaEN.con_AnswerIP:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.answerIP === value;
}
case clsge_StuBatchQuesRelaEN.con_AnswerModeId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.answerModeId === value;
}
case clsge_StuBatchQuesRelaEN.con_AnswerMultiOptions:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.answerMultiOptions === value;
}
case clsge_StuBatchQuesRelaEN.con_AnswerOptionId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.answerOptionId === value;
}
case clsge_StuBatchQuesRelaEN.con_AnswerTime:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.answerTime === value;
}
case clsge_StuBatchQuesRelaEN.con_ApplySendBackDate:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.applySendBackDate === value;
}
case clsge_StuBatchQuesRelaEN.con_Comment:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.comment === value;
}
case clsge_StuBatchQuesRelaEN.con_IsAccessKnowledge:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isAccessKnowledge === value;
}
case clsge_StuBatchQuesRelaEN.con_IsApplySendBack:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isApplySendBack === value;
}
case clsge_StuBatchQuesRelaEN.con_IsInErrorQuestion:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isInErrorQuestion === value;
}
case clsge_StuBatchQuesRelaEN.con_IsLook:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isLook === value;
}
case clsge_StuBatchQuesRelaEN.con_IsMarking:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isMarking === value;
}
case clsge_StuBatchQuesRelaEN.con_IsNotProcessTimeout:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isNotProcessTimeout === value;
}
case clsge_StuBatchQuesRelaEN.con_IsHasAnswer:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isHasAnswer === value;
}
case clsge_StuBatchQuesRelaEN.con_IsPublish:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isPublish === value;
}
case clsge_StuBatchQuesRelaEN.con_IsRight:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isRight === value;
}
case clsge_StuBatchQuesRelaEN.con_IsSave:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isSave === value;
}
case clsge_StuBatchQuesRelaEN.con_IsSendBack:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isSendBack === value;
}
case clsge_StuBatchQuesRelaEN.con_IsSubmit:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isSubmit === value;
}
case clsge_StuBatchQuesRelaEN.con_MarkDate:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.markDate === value;
}
case clsge_StuBatchQuesRelaEN.con_MarkerId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.markerId === value;
}
case clsge_StuBatchQuesRelaEN.con_OperateTime:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.operateTime === value;
}
case clsge_StuBatchQuesRelaEN.con_RealFinishDate:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.realFinishDate === value;
}
case clsge_StuBatchQuesRelaEN.con_WorkTypeId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.workTypeId === value;
}
case clsge_StuBatchQuesRelaEN.con_SchoolYear:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.schoolYear === value;
}
case clsge_StuBatchQuesRelaEN.con_SchoolTerm:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.schoolTerm === value;
}
case clsge_StuBatchQuesRelaEN.con_ErrMsg:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.errMsg === value;
}
case clsge_StuBatchQuesRelaEN.con_IsRecommend:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.isRecommend === value;
}
case clsge_StuBatchQuesRelaEN.con_CourseId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.courseId === value;
}
case clsge_StuBatchQuesRelaEN.con_UpdDate:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.updDate === value;
}
case clsge_StuBatchQuesRelaEN.con_UpdUserId:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.updUserId === value;
}
case clsge_StuBatchQuesRelaEN.con_Memo:
return (obj: clsge_StuBatchQuesRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StuBatchQuesRela]中不存在!(in ${ ge_StuBatchQuesRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_StuBatchQuesRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StuBatchQuesRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_GetFirstObjAsync(strWhereCond: string): Promise<clsge_StuBatchQuesRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const objge_StuBatchQuesRela = ge_StuBatchQuesRela_GetObjFromJsonObj(returnObj);
return objge_StuBatchQuesRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_StuBatchQuesRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuBatchQuesRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
 * @param arrIdStuBatchQuesRela:关键字列表
 * @returns 对象列表
 **/
export  async function ge_StuBatchQuesRela_GetObjLstByIdStuBatchQuesRelaLstAsync(arrIdStuBatchQuesRela: Array<string>): Promise<Array<clsge_StuBatchQuesRelaEN>>  
{
const strThisFuncName = "GetObjLstByIdStuBatchQuesRelaLstAsync";
const strAction = "GetObjLstByIdStuBatchQuesRelaLst";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdStuBatchQuesRela, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuBatchQuesRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdStuBatchQuesRelaLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ge_StuBatchQuesRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_StuBatchQuesRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuBatchQuesRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_StuBatchQuesRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuBatchQuesRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_StuBatchQuesRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StuBatchQuesRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StuBatchQuesRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
 * @param lngIdStuBatchQuesRela:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_StuBatchQuesRela_DelRecordAsync(lngIdStuBatchQuesRela: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngIdStuBatchQuesRela);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
 * @param arrIdStuBatchQuesRela:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_StuBatchQuesRela_Delge_StuBatchQuesRelasAsync(arrIdStuBatchQuesRela: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_StuBatchQuesRelasAsync";
const strAction = "Delge_StuBatchQuesRelas";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdStuBatchQuesRela, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_Delge_StuBatchQuesRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_StuBatchQuesRelasByCondAsync";
const strAction = "Delge_StuBatchQuesRelasByCond";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
 * @param objge_StuBatchQuesRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StuBatchQuesRela_AddNewRecordAsync(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_StuBatchQuesRelaEN);
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuBatchQuesRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_AddNewObjSave(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_StuBatchQuesRela_CheckPropertyNew(objge_StuBatchQuesRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StuBatchQuesRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StuBatchQuesRela_CheckUniCond4Add(objge_StuBatchQuesRelaEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_StuBatchQuesRela_AddNewRecordAsync(objge_StuBatchQuesRelaEN);
if (returnBool == true)
{
//ge_StuBatchQuesRela_ReFreshCache();
}
else
{
const strInfo = `添加[学生批次题目关系(ge_StuBatchQuesRela)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_StuBatchQuesRelaEN.idStuBatchQuesRela.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_StuBatchQuesRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_StuBatchQuesRela_CheckUniCond4Add(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): Promise<boolean>{
const strUniquenessCondition = ge_StuBatchQuesRela_GetUniCondStr(objge_StuBatchQuesRelaEN);
const bolIsExistCondition = await ge_StuBatchQuesRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StuBatchQuesRela_CheckUniCond4Update(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): Promise<boolean>{
const strUniquenessCondition = ge_StuBatchQuesRela_GetUniCondStr4Update(objge_StuBatchQuesRelaEN);
const bolIsExistCondition = await ge_StuBatchQuesRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StuBatchQuesRela_UpdateObjSave(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_StuBatchQuesRelaEN.sfUpdFldSetStr = objge_StuBatchQuesRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_StuBatchQuesRelaEN.idStuBatchQuesRela == 0 || objge_StuBatchQuesRelaEN.idStuBatchQuesRela == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_StuBatchQuesRela_CheckProperty4Update(objge_StuBatchQuesRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StuBatchQuesRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StuBatchQuesRela_CheckUniCond4Update(objge_StuBatchQuesRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_StuBatchQuesRela_UpdateRecordAsync(objge_StuBatchQuesRelaEN);
if (returnBool == true)
{
//ge_StuBatchQuesRela_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_StuBatchQuesRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_StuBatchQuesRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_StuBatchQuesRela_AddNewRecordWithReturnKeyAsync(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuBatchQuesRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
 * @param objge_StuBatchQuesRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StuBatchQuesRela_UpdateRecordAsync(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_StuBatchQuesRelaEN.sfUpdFldSetStr === undefined || objge_StuBatchQuesRelaEN.sfUpdFldSetStr === null || objge_StuBatchQuesRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StuBatchQuesRelaEN.idStuBatchQuesRela);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuBatchQuesRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
 * @param objge_StuBatchQuesRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StuBatchQuesRela_EditRecordExAsync(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_StuBatchQuesRelaEN.sfUpdFldSetStr === undefined || objge_StuBatchQuesRelaEN.sfUpdFldSetStr === null || objge_StuBatchQuesRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StuBatchQuesRelaEN.idStuBatchQuesRela);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuBatchQuesRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
 * @param objge_StuBatchQuesRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StuBatchQuesRela_UpdateWithConditionAsync(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_StuBatchQuesRelaEN.sfUpdFldSetStr === undefined || objge_StuBatchQuesRelaEN.sfUpdFldSetStr === null || objge_StuBatchQuesRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StuBatchQuesRelaEN.idStuBatchQuesRela);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);
objge_StuBatchQuesRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StuBatchQuesRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
 * @param lngIdStuBatchQuesRela:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_StuBatchQuesRela_IsExistAsync(lngIdStuBatchQuesRela: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdStuBatchQuesRela
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  async function ge_StuBatchQuesRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_StuBatchQuesRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StuBatchQuesRela_ConstructorName, strThisFuncName);
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
export  function ge_StuBatchQuesRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_StuBatchQuesRela_CheckPropertyNew(pobjge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.examBatchNo) === true )
{
 throw new Error(`(errid:Watl000411)字段[学生批次号]不能为空(In 学生批次题目关系)!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null === pobjge_StuBatchQuesRelaEN.questionId 
 || pobjge_StuBatchQuesRelaEN.questionId != null && pobjge_StuBatchQuesRelaEN.questionId.toString()  ===  ""
 || pobjge_StuBatchQuesRelaEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[题目Id]不能为空(In 学生批次题目关系)!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.userId) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 学生批次题目关系)!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.idCurrEduCls) === true 
 || pobjge_StuBatchQuesRelaEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 学生批次题目关系)!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.examBatchNo) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.examBatchNo) > 20)
{
 throw new Error(`(errid:Watl000413)字段[学生批次号(examBatchNo)]的长度不能超过20(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.examBatchNo}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.userId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.userId}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.idCurrEduCls) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.idCurrEduCls}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.gameLevelId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.gameLevelId}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[回答日期(answerDate)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerDate}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerIP) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerIP) > 30)
{
 throw new Error(`(errid:Watl000413)字段[回答IP(answerIP)]的长度不能超过30(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerIP}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerModeId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerModeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[答案模式Id(answerModeId)]的长度不能超过4(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerModeId}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerMultiOptions) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerMultiOptions) > 300)
{
 throw new Error(`(errid:Watl000413)字段[多选项答案(answerMultiOptions)]的长度不能超过300(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerMultiOptions}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerOptionId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerOptionId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[回答选项Id(answerOptionId)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerOptionId}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerTime) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerTime) > 10)
{
 throw new Error(`(errid:Watl000413)字段[回答时间(answerTime)]的长度不能超过10(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerTime}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.applySendBackDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.applySendBackDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[申请退回日期(applySendBackDate)]的长度不能超过14(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.applySendBackDate}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.markDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.markDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[打分日期(markDate)]的长度不能超过14(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.markDate}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.markerId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.markerId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[打分者(markerId)]的长度不能超过20(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.markerId}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.operateTime) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.operateTime) > 14)
{
 throw new Error(`(errid:Watl000413)字段[操作时间(operateTime)]的长度不能超过14(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.operateTime}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.realFinishDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.realFinishDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[实际完成日期(realFinishDate)]的长度不能超过14(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.realFinishDate}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.workTypeId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.workTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[作业类型Id(workTypeId)]的长度不能超过2(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.workTypeId}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.schoolYear) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.schoolYear) > 10)
{
 throw new Error(`(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.schoolYear}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.schoolTerm) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.schoolTerm) > 1)
{
 throw new Error(`(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.schoolTerm}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.errMsg) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.errMsg) > 200)
{
 throw new Error(`(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过200(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.errMsg}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.courseId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.courseId}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.updDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.updDate}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.updUserId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.updUserId}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.memo) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.memo}(clsge_StuBatchQuesRelaBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela && undefined !== pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生批次题目关系流水号(idStuBatchQuesRela)]的值:[${pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.examBatchNo) == false && undefined !== pobjge_StuBatchQuesRelaEN.examBatchNo && tzDataType.isString(pobjge_StuBatchQuesRelaEN.examBatchNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生批次号(examBatchNo)]的值:[${pobjge_StuBatchQuesRelaEN.examBatchNo}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.levelNo && undefined !== pobjge_StuBatchQuesRelaEN.levelNo && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.levelNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[等级No(levelNo)]的值:[${pobjge_StuBatchQuesRelaEN.levelNo}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.questionId && undefined !== pobjge_StuBatchQuesRelaEN.questionId && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjge_StuBatchQuesRelaEN.questionId}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.userId) == false && undefined !== pobjge_StuBatchQuesRelaEN.userId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_StuBatchQuesRelaEN.userId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.idCurrEduCls) == false && undefined !== pobjge_StuBatchQuesRelaEN.idCurrEduCls && tzDataType.isString(pobjge_StuBatchQuesRelaEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_StuBatchQuesRelaEN.idCurrEduCls}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.questionIndex4Batch && undefined !== pobjge_StuBatchQuesRelaEN.questionIndex4Batch && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.questionIndex4Batch) === false)
{
 throw new Error(`(errid:Watl000414)字段[题序号4批次(questionIndex4Batch)]的值:[${pobjge_StuBatchQuesRelaEN.questionIndex4Batch}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.gameLevelId) == false && undefined !== pobjge_StuBatchQuesRelaEN.gameLevelId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_StuBatchQuesRelaEN.gameLevelId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.scores && undefined !== pobjge_StuBatchQuesRelaEN.scores && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.scores) === false)
{
 throw new Error(`(errid:Watl000414)字段[分值(scores)]的值:[${pobjge_StuBatchQuesRelaEN.scores}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.score && undefined !== pobjge_StuBatchQuesRelaEN.score && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.score) === false)
{
 throw new Error(`(errid:Watl000414)字段[得分(score)]的值:[${pobjge_StuBatchQuesRelaEN.score}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.stuAnswerText) == false && undefined !== pobjge_StuBatchQuesRelaEN.stuAnswerText && tzDataType.isString(pobjge_StuBatchQuesRelaEN.stuAnswerText) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生回答文本(stuAnswerText)]的值:[${pobjge_StuBatchQuesRelaEN.stuAnswerText}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答日期(answerDate)]的值:[${pobjge_StuBatchQuesRelaEN.answerDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerIP) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerIP && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerIP) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答IP(answerIP)]的值:[${pobjge_StuBatchQuesRelaEN.answerIP}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerModeId) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerModeId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerModeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[答案模式Id(answerModeId)]的值:[${pobjge_StuBatchQuesRelaEN.answerModeId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerMultiOptions) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerMultiOptions && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerMultiOptions) === false)
{
 throw new Error(`(errid:Watl000414)字段[多选项答案(answerMultiOptions)]的值:[${pobjge_StuBatchQuesRelaEN.answerMultiOptions}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerOptionId) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerOptionId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerOptionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答选项Id(answerOptionId)]的值:[${pobjge_StuBatchQuesRelaEN.answerOptionId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerTime) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerTime && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答时间(answerTime)]的值:[${pobjge_StuBatchQuesRelaEN.answerTime}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.applySendBackDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.applySendBackDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.applySendBackDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[申请退回日期(applySendBackDate)]的值:[${pobjge_StuBatchQuesRelaEN.applySendBackDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.comment) == false && undefined !== pobjge_StuBatchQuesRelaEN.comment && tzDataType.isString(pobjge_StuBatchQuesRelaEN.comment) === false)
{
 throw new Error(`(errid:Watl000414)字段[批注(comment)]的值:[${pobjge_StuBatchQuesRelaEN.comment}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isAccessKnowledge && undefined !== pobjge_StuBatchQuesRelaEN.isAccessKnowledge && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isAccessKnowledge) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否处理知识点(isAccessKnowledge)]的值:[${pobjge_StuBatchQuesRelaEN.isAccessKnowledge}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isApplySendBack && undefined !== pobjge_StuBatchQuesRelaEN.isApplySendBack && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isApplySendBack) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否申请退回(isApplySendBack)]的值:[${pobjge_StuBatchQuesRelaEN.isApplySendBack}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isInErrorQuestion && undefined !== pobjge_StuBatchQuesRelaEN.isInErrorQuestion && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isInErrorQuestion) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否进入错题(isInErrorQuestion)]的值:[${pobjge_StuBatchQuesRelaEN.isInErrorQuestion}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isLook && undefined !== pobjge_StuBatchQuesRelaEN.isLook && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isLook) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否查看(isLook)]的值:[${pobjge_StuBatchQuesRelaEN.isLook}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isMarking && undefined !== pobjge_StuBatchQuesRelaEN.isMarking && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isMarking) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否批阅(isMarking)]的值:[${pobjge_StuBatchQuesRelaEN.isMarking}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isNotProcessTimeout && undefined !== pobjge_StuBatchQuesRelaEN.isNotProcessTimeout && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isNotProcessTimeout) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否不处理超时(isNotProcessTimeout)]的值:[${pobjge_StuBatchQuesRelaEN.isNotProcessTimeout}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isHasAnswer && undefined !== pobjge_StuBatchQuesRelaEN.isHasAnswer && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isHasAnswer) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否有答案(isHasAnswer)]的值:[${pobjge_StuBatchQuesRelaEN.isHasAnswer}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isPublish && undefined !== pobjge_StuBatchQuesRelaEN.isPublish && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isPublish) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否发布(isPublish)]的值:[${pobjge_StuBatchQuesRelaEN.isPublish}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isRight && undefined !== pobjge_StuBatchQuesRelaEN.isRight && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isRight) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否正确(isRight)]的值:[${pobjge_StuBatchQuesRelaEN.isRight}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isSave && undefined !== pobjge_StuBatchQuesRelaEN.isSave && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isSave) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否保存(isSave)]的值:[${pobjge_StuBatchQuesRelaEN.isSave}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isSendBack && undefined !== pobjge_StuBatchQuesRelaEN.isSendBack && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isSendBack) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否退回(isSendBack)]的值:[${pobjge_StuBatchQuesRelaEN.isSendBack}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isSubmit && undefined !== pobjge_StuBatchQuesRelaEN.isSubmit && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否提交(isSubmit)]的值:[${pobjge_StuBatchQuesRelaEN.isSubmit}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.markDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.markDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.markDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[打分日期(markDate)]的值:[${pobjge_StuBatchQuesRelaEN.markDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.markerId) == false && undefined !== pobjge_StuBatchQuesRelaEN.markerId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.markerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[打分者(markerId)]的值:[${pobjge_StuBatchQuesRelaEN.markerId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.operateTime) == false && undefined !== pobjge_StuBatchQuesRelaEN.operateTime && tzDataType.isString(pobjge_StuBatchQuesRelaEN.operateTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[操作时间(operateTime)]的值:[${pobjge_StuBatchQuesRelaEN.operateTime}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.realFinishDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.realFinishDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.realFinishDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[实际完成日期(realFinishDate)]的值:[${pobjge_StuBatchQuesRelaEN.realFinishDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.workTypeId) == false && undefined !== pobjge_StuBatchQuesRelaEN.workTypeId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.workTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[作业类型Id(workTypeId)]的值:[${pobjge_StuBatchQuesRelaEN.workTypeId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.schoolYear) == false && undefined !== pobjge_StuBatchQuesRelaEN.schoolYear && tzDataType.isString(pobjge_StuBatchQuesRelaEN.schoolYear) === false)
{
 throw new Error(`(errid:Watl000414)字段[学年(schoolYear)]的值:[${pobjge_StuBatchQuesRelaEN.schoolYear}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.schoolTerm) == false && undefined !== pobjge_StuBatchQuesRelaEN.schoolTerm && tzDataType.isString(pobjge_StuBatchQuesRelaEN.schoolTerm) === false)
{
 throw new Error(`(errid:Watl000414)字段[学期(schoolTerm)]的值:[${pobjge_StuBatchQuesRelaEN.schoolTerm}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.errMsg) == false && undefined !== pobjge_StuBatchQuesRelaEN.errMsg && tzDataType.isString(pobjge_StuBatchQuesRelaEN.errMsg) === false)
{
 throw new Error(`(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjge_StuBatchQuesRelaEN.errMsg}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isRecommend && undefined !== pobjge_StuBatchQuesRelaEN.isRecommend && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isRecommend) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否推荐(isRecommend)]的值:[${pobjge_StuBatchQuesRelaEN.isRecommend}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.courseId) == false && undefined !== pobjge_StuBatchQuesRelaEN.courseId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_StuBatchQuesRelaEN.courseId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.updDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.updDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_StuBatchQuesRelaEN.updDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.updUserId) == false && undefined !== pobjge_StuBatchQuesRelaEN.updUserId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjge_StuBatchQuesRelaEN.updUserId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.memo) == false && undefined !== pobjge_StuBatchQuesRelaEN.memo && tzDataType.isString(pobjge_StuBatchQuesRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_StuBatchQuesRelaEN.memo}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.idCurrEduCls) == false && pobjge_StuBatchQuesRelaEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjge_StuBatchQuesRelaEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 学生批次题目关系)!(clsge_StuBatchQuesRelaBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StuBatchQuesRela_CheckProperty4Update(pobjge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.examBatchNo) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.examBatchNo) > 20)
{
 throw new Error(`(errid:Watl000416)字段[学生批次号(examBatchNo)]的长度不能超过20(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.examBatchNo}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.userId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.userId}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.idCurrEduCls) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.idCurrEduCls}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.gameLevelId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.gameLevelId}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[回答日期(answerDate)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerDate}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerIP) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerIP) > 30)
{
 throw new Error(`(errid:Watl000416)字段[回答IP(answerIP)]的长度不能超过30(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerIP}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerModeId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerModeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[答案模式Id(answerModeId)]的长度不能超过4(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerModeId}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerMultiOptions) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerMultiOptions) > 300)
{
 throw new Error(`(errid:Watl000416)字段[多选项答案(answerMultiOptions)]的长度不能超过300(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerMultiOptions}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerOptionId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerOptionId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[回答选项Id(answerOptionId)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerOptionId}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerTime) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.answerTime) > 10)
{
 throw new Error(`(errid:Watl000416)字段[回答时间(answerTime)]的长度不能超过10(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.answerTime}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.applySendBackDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.applySendBackDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[申请退回日期(applySendBackDate)]的长度不能超过14(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.applySendBackDate}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.markDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.markDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[打分日期(markDate)]的长度不能超过14(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.markDate}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.markerId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.markerId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[打分者(markerId)]的长度不能超过20(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.markerId}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.operateTime) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.operateTime) > 14)
{
 throw new Error(`(errid:Watl000416)字段[操作时间(operateTime)]的长度不能超过14(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.operateTime}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.realFinishDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.realFinishDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[实际完成日期(realFinishDate)]的长度不能超过14(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.realFinishDate}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.workTypeId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.workTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[作业类型Id(workTypeId)]的长度不能超过2(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.workTypeId}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.schoolYear) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.schoolYear) > 10)
{
 throw new Error(`(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.schoolYear}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.schoolTerm) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.schoolTerm) > 1)
{
 throw new Error(`(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.schoolTerm}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.errMsg) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.errMsg) > 200)
{
 throw new Error(`(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过200(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.errMsg}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.courseId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.courseId}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.updDate) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.updDate}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.updUserId) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.updUserId}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.memo) == false && GetStrLen(pobjge_StuBatchQuesRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学生批次题目关系(ge_StuBatchQuesRela))!值:${pobjge_StuBatchQuesRelaEN.memo}(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela && undefined !== pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生批次题目关系流水号(idStuBatchQuesRela)]的值:[${pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.examBatchNo) == false && undefined !== pobjge_StuBatchQuesRelaEN.examBatchNo && tzDataType.isString(pobjge_StuBatchQuesRelaEN.examBatchNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生批次号(examBatchNo)]的值:[${pobjge_StuBatchQuesRelaEN.examBatchNo}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.levelNo && undefined !== pobjge_StuBatchQuesRelaEN.levelNo && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.levelNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[等级No(levelNo)]的值:[${pobjge_StuBatchQuesRelaEN.levelNo}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.questionId && undefined !== pobjge_StuBatchQuesRelaEN.questionId && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjge_StuBatchQuesRelaEN.questionId}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.userId) == false && undefined !== pobjge_StuBatchQuesRelaEN.userId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_StuBatchQuesRelaEN.userId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.idCurrEduCls) == false && undefined !== pobjge_StuBatchQuesRelaEN.idCurrEduCls && tzDataType.isString(pobjge_StuBatchQuesRelaEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_StuBatchQuesRelaEN.idCurrEduCls}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.questionIndex4Batch && undefined !== pobjge_StuBatchQuesRelaEN.questionIndex4Batch && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.questionIndex4Batch) === false)
{
 throw new Error(`(errid:Watl000417)字段[题序号4批次(questionIndex4Batch)]的值:[${pobjge_StuBatchQuesRelaEN.questionIndex4Batch}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.gameLevelId) == false && undefined !== pobjge_StuBatchQuesRelaEN.gameLevelId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_StuBatchQuesRelaEN.gameLevelId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.scores && undefined !== pobjge_StuBatchQuesRelaEN.scores && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.scores) === false)
{
 throw new Error(`(errid:Watl000417)字段[分值(scores)]的值:[${pobjge_StuBatchQuesRelaEN.scores}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.score && undefined !== pobjge_StuBatchQuesRelaEN.score && tzDataType.isNumber(pobjge_StuBatchQuesRelaEN.score) === false)
{
 throw new Error(`(errid:Watl000417)字段[得分(score)]的值:[${pobjge_StuBatchQuesRelaEN.score}], 非法,应该为数值型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.stuAnswerText) == false && undefined !== pobjge_StuBatchQuesRelaEN.stuAnswerText && tzDataType.isString(pobjge_StuBatchQuesRelaEN.stuAnswerText) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生回答文本(stuAnswerText)]的值:[${pobjge_StuBatchQuesRelaEN.stuAnswerText}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答日期(answerDate)]的值:[${pobjge_StuBatchQuesRelaEN.answerDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerIP) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerIP && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerIP) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答IP(answerIP)]的值:[${pobjge_StuBatchQuesRelaEN.answerIP}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerModeId) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerModeId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerModeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[答案模式Id(answerModeId)]的值:[${pobjge_StuBatchQuesRelaEN.answerModeId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerMultiOptions) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerMultiOptions && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerMultiOptions) === false)
{
 throw new Error(`(errid:Watl000417)字段[多选项答案(answerMultiOptions)]的值:[${pobjge_StuBatchQuesRelaEN.answerMultiOptions}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerOptionId) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerOptionId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerOptionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答选项Id(answerOptionId)]的值:[${pobjge_StuBatchQuesRelaEN.answerOptionId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.answerTime) == false && undefined !== pobjge_StuBatchQuesRelaEN.answerTime && tzDataType.isString(pobjge_StuBatchQuesRelaEN.answerTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答时间(answerTime)]的值:[${pobjge_StuBatchQuesRelaEN.answerTime}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.applySendBackDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.applySendBackDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.applySendBackDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[申请退回日期(applySendBackDate)]的值:[${pobjge_StuBatchQuesRelaEN.applySendBackDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.comment) == false && undefined !== pobjge_StuBatchQuesRelaEN.comment && tzDataType.isString(pobjge_StuBatchQuesRelaEN.comment) === false)
{
 throw new Error(`(errid:Watl000417)字段[批注(comment)]的值:[${pobjge_StuBatchQuesRelaEN.comment}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isAccessKnowledge && undefined !== pobjge_StuBatchQuesRelaEN.isAccessKnowledge && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isAccessKnowledge) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否处理知识点(isAccessKnowledge)]的值:[${pobjge_StuBatchQuesRelaEN.isAccessKnowledge}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isApplySendBack && undefined !== pobjge_StuBatchQuesRelaEN.isApplySendBack && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isApplySendBack) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否申请退回(isApplySendBack)]的值:[${pobjge_StuBatchQuesRelaEN.isApplySendBack}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isInErrorQuestion && undefined !== pobjge_StuBatchQuesRelaEN.isInErrorQuestion && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isInErrorQuestion) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否进入错题(isInErrorQuestion)]的值:[${pobjge_StuBatchQuesRelaEN.isInErrorQuestion}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isLook && undefined !== pobjge_StuBatchQuesRelaEN.isLook && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isLook) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否查看(isLook)]的值:[${pobjge_StuBatchQuesRelaEN.isLook}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isMarking && undefined !== pobjge_StuBatchQuesRelaEN.isMarking && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isMarking) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否批阅(isMarking)]的值:[${pobjge_StuBatchQuesRelaEN.isMarking}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isNotProcessTimeout && undefined !== pobjge_StuBatchQuesRelaEN.isNotProcessTimeout && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isNotProcessTimeout) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否不处理超时(isNotProcessTimeout)]的值:[${pobjge_StuBatchQuesRelaEN.isNotProcessTimeout}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isHasAnswer && undefined !== pobjge_StuBatchQuesRelaEN.isHasAnswer && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isHasAnswer) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否有答案(isHasAnswer)]的值:[${pobjge_StuBatchQuesRelaEN.isHasAnswer}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isPublish && undefined !== pobjge_StuBatchQuesRelaEN.isPublish && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isPublish) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否发布(isPublish)]的值:[${pobjge_StuBatchQuesRelaEN.isPublish}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isRight && undefined !== pobjge_StuBatchQuesRelaEN.isRight && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isRight) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否正确(isRight)]的值:[${pobjge_StuBatchQuesRelaEN.isRight}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isSave && undefined !== pobjge_StuBatchQuesRelaEN.isSave && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isSave) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否保存(isSave)]的值:[${pobjge_StuBatchQuesRelaEN.isSave}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isSendBack && undefined !== pobjge_StuBatchQuesRelaEN.isSendBack && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isSendBack) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否退回(isSendBack)]的值:[${pobjge_StuBatchQuesRelaEN.isSendBack}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isSubmit && undefined !== pobjge_StuBatchQuesRelaEN.isSubmit && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否提交(isSubmit)]的值:[${pobjge_StuBatchQuesRelaEN.isSubmit}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.markDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.markDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.markDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[打分日期(markDate)]的值:[${pobjge_StuBatchQuesRelaEN.markDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.markerId) == false && undefined !== pobjge_StuBatchQuesRelaEN.markerId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.markerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[打分者(markerId)]的值:[${pobjge_StuBatchQuesRelaEN.markerId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.operateTime) == false && undefined !== pobjge_StuBatchQuesRelaEN.operateTime && tzDataType.isString(pobjge_StuBatchQuesRelaEN.operateTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[操作时间(operateTime)]的值:[${pobjge_StuBatchQuesRelaEN.operateTime}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.realFinishDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.realFinishDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.realFinishDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[实际完成日期(realFinishDate)]的值:[${pobjge_StuBatchQuesRelaEN.realFinishDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.workTypeId) == false && undefined !== pobjge_StuBatchQuesRelaEN.workTypeId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.workTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[作业类型Id(workTypeId)]的值:[${pobjge_StuBatchQuesRelaEN.workTypeId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.schoolYear) == false && undefined !== pobjge_StuBatchQuesRelaEN.schoolYear && tzDataType.isString(pobjge_StuBatchQuesRelaEN.schoolYear) === false)
{
 throw new Error(`(errid:Watl000417)字段[学年(schoolYear)]的值:[${pobjge_StuBatchQuesRelaEN.schoolYear}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.schoolTerm) == false && undefined !== pobjge_StuBatchQuesRelaEN.schoolTerm && tzDataType.isString(pobjge_StuBatchQuesRelaEN.schoolTerm) === false)
{
 throw new Error(`(errid:Watl000417)字段[学期(schoolTerm)]的值:[${pobjge_StuBatchQuesRelaEN.schoolTerm}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.errMsg) == false && undefined !== pobjge_StuBatchQuesRelaEN.errMsg && tzDataType.isString(pobjge_StuBatchQuesRelaEN.errMsg) === false)
{
 throw new Error(`(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjge_StuBatchQuesRelaEN.errMsg}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (null != pobjge_StuBatchQuesRelaEN.isRecommend && undefined !== pobjge_StuBatchQuesRelaEN.isRecommend && tzDataType.isBoolean(pobjge_StuBatchQuesRelaEN.isRecommend) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否推荐(isRecommend)]的值:[${pobjge_StuBatchQuesRelaEN.isRecommend}], 非法,应该为布尔型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.courseId) == false && undefined !== pobjge_StuBatchQuesRelaEN.courseId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_StuBatchQuesRelaEN.courseId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.updDate) == false && undefined !== pobjge_StuBatchQuesRelaEN.updDate && tzDataType.isString(pobjge_StuBatchQuesRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_StuBatchQuesRelaEN.updDate}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.updUserId) == false && undefined !== pobjge_StuBatchQuesRelaEN.updUserId && tzDataType.isString(pobjge_StuBatchQuesRelaEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjge_StuBatchQuesRelaEN.updUserId}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.memo) == false && undefined !== pobjge_StuBatchQuesRelaEN.memo && tzDataType.isString(pobjge_StuBatchQuesRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_StuBatchQuesRelaEN.memo}], 非法,应该为字符型(In 学生批次题目关系(ge_StuBatchQuesRela))!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela 
 || pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela != null && pobjge_StuBatchQuesRelaEN.idStuBatchQuesRela.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[学生批次题目关系流水号]不能为空(In 学生批次题目关系)!(clsge_StuBatchQuesRelaBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_StuBatchQuesRelaEN.idCurrEduCls) == false && pobjge_StuBatchQuesRelaEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjge_StuBatchQuesRelaEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 学生批次题目关系)!(clsge_StuBatchQuesRelaBL:CheckPropertyNew)");
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
export  function ge_StuBatchQuesRela_GetJSONStrByObj (pobjge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN): string
{
pobjge_StuBatchQuesRelaEN.sfUpdFldSetStr = pobjge_StuBatchQuesRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_StuBatchQuesRelaEN);
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
export  function ge_StuBatchQuesRela_GetObjLstByJSONStr (strJSON: string): Array<clsge_StuBatchQuesRelaEN>
{
let arrge_StuBatchQuesRelaObjLst = new Array<clsge_StuBatchQuesRelaEN>();
if (strJSON === "")
{
return arrge_StuBatchQuesRelaObjLst;
}
try
{
arrge_StuBatchQuesRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_StuBatchQuesRelaObjLst;
}
return arrge_StuBatchQuesRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_StuBatchQuesRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_StuBatchQuesRela_GetObjLstByJSONObjLst (arrge_StuBatchQuesRelaObjLstS: Array<clsge_StuBatchQuesRelaEN>): Array<clsge_StuBatchQuesRelaEN>
{
const arrge_StuBatchQuesRelaObjLst = new Array<clsge_StuBatchQuesRelaEN>();
for (const objInFor of arrge_StuBatchQuesRelaObjLstS) {
const obj1 = ge_StuBatchQuesRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_StuBatchQuesRelaObjLst.push(obj1);
}
return arrge_StuBatchQuesRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_StuBatchQuesRela_GetObjByJSONStr (strJSON: string): clsge_StuBatchQuesRelaEN
{
let pobjge_StuBatchQuesRelaEN = new clsge_StuBatchQuesRelaEN();
if (strJSON === "")
{
return pobjge_StuBatchQuesRelaEN;
}
try
{
pobjge_StuBatchQuesRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_StuBatchQuesRelaEN;
}
return pobjge_StuBatchQuesRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_StuBatchQuesRela_GetCombineCondition(objge_StuBatchQuesRelaCond: clsge_StuBatchQuesRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IdStuBatchQuesRela) == true)
{
const strComparisonOpIdStuBatchQuesRela:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_IdStuBatchQuesRela];
strWhereCond += Format(" And {0} {2} {1}", clsge_StuBatchQuesRelaEN.con_IdStuBatchQuesRela, objge_StuBatchQuesRelaCond.idStuBatchQuesRela, strComparisonOpIdStuBatchQuesRela);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_ExamBatchNo) == true)
{
const strComparisonOpExamBatchNo:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_ExamBatchNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_ExamBatchNo, objge_StuBatchQuesRelaCond.examBatchNo, strComparisonOpExamBatchNo);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_LevelNo) == true)
{
const strComparisonOpLevelNo:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_LevelNo];
strWhereCond += Format(" And {0} {2} {1}", clsge_StuBatchQuesRelaEN.con_LevelNo, objge_StuBatchQuesRelaCond.levelNo, strComparisonOpLevelNo);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsge_StuBatchQuesRelaEN.con_QuestionId, objge_StuBatchQuesRelaCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_UserId, objge_StuBatchQuesRelaCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_IdCurrEduCls, objge_StuBatchQuesRelaCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_QuestionIndex4Batch) == true)
{
const strComparisonOpQuestionIndex4Batch:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_QuestionIndex4Batch];
strWhereCond += Format(" And {0} {2} {1}", clsge_StuBatchQuesRelaEN.con_QuestionIndex4Batch, objge_StuBatchQuesRelaCond.questionIndex4Batch, strComparisonOpQuestionIndex4Batch);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_GameLevelId) == true)
{
const strComparisonOpGameLevelId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_GameLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_GameLevelId, objge_StuBatchQuesRelaCond.gameLevelId, strComparisonOpGameLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_Scores) == true)
{
const strComparisonOpScores:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_Scores];
strWhereCond += Format(" And {0} {2} {1}", clsge_StuBatchQuesRelaEN.con_Scores, objge_StuBatchQuesRelaCond.scores, strComparisonOpScores);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_Score) == true)
{
const strComparisonOpScore:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsge_StuBatchQuesRelaEN.con_Score, objge_StuBatchQuesRelaCond.score, strComparisonOpScore);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_AnswerDate) == true)
{
const strComparisonOpAnswerDate:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_AnswerDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_AnswerDate, objge_StuBatchQuesRelaCond.answerDate, strComparisonOpAnswerDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_AnswerIP) == true)
{
const strComparisonOpAnswerIP:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_AnswerIP];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_AnswerIP, objge_StuBatchQuesRelaCond.answerIP, strComparisonOpAnswerIP);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_AnswerModeId) == true)
{
const strComparisonOpAnswerModeId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_AnswerModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_AnswerModeId, objge_StuBatchQuesRelaCond.answerModeId, strComparisonOpAnswerModeId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_AnswerMultiOptions) == true)
{
const strComparisonOpAnswerMultiOptions:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_AnswerMultiOptions];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_AnswerMultiOptions, objge_StuBatchQuesRelaCond.answerMultiOptions, strComparisonOpAnswerMultiOptions);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_AnswerOptionId) == true)
{
const strComparisonOpAnswerOptionId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_AnswerOptionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_AnswerOptionId, objge_StuBatchQuesRelaCond.answerOptionId, strComparisonOpAnswerOptionId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_AnswerTime) == true)
{
const strComparisonOpAnswerTime:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_AnswerTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_AnswerTime, objge_StuBatchQuesRelaCond.answerTime, strComparisonOpAnswerTime);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_ApplySendBackDate) == true)
{
const strComparisonOpApplySendBackDate:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_ApplySendBackDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_ApplySendBackDate, objge_StuBatchQuesRelaCond.applySendBackDate, strComparisonOpApplySendBackDate);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsAccessKnowledge) == true)
{
if (objge_StuBatchQuesRelaCond.isAccessKnowledge == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsAccessKnowledge);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsAccessKnowledge);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsApplySendBack) == true)
{
if (objge_StuBatchQuesRelaCond.isApplySendBack == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsApplySendBack);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsApplySendBack);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsInErrorQuestion) == true)
{
if (objge_StuBatchQuesRelaCond.isInErrorQuestion == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsInErrorQuestion);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsInErrorQuestion);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsLook) == true)
{
if (objge_StuBatchQuesRelaCond.isLook == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsLook);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsLook);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsMarking) == true)
{
if (objge_StuBatchQuesRelaCond.isMarking == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsMarking);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsMarking);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsNotProcessTimeout) == true)
{
if (objge_StuBatchQuesRelaCond.isNotProcessTimeout == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsNotProcessTimeout);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsNotProcessTimeout);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsHasAnswer) == true)
{
if (objge_StuBatchQuesRelaCond.isHasAnswer == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsHasAnswer);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsHasAnswer);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsPublish) == true)
{
if (objge_StuBatchQuesRelaCond.isPublish == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsPublish);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsPublish);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsRight) == true)
{
if (objge_StuBatchQuesRelaCond.isRight == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsRight);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsRight);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsSave) == true)
{
if (objge_StuBatchQuesRelaCond.isSave == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsSave);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsSave);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsSendBack) == true)
{
if (objge_StuBatchQuesRelaCond.isSendBack == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsSendBack);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsSendBack);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsSubmit) == true)
{
if (objge_StuBatchQuesRelaCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_MarkDate) == true)
{
const strComparisonOpMarkDate:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_MarkDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_MarkDate, objge_StuBatchQuesRelaCond.markDate, strComparisonOpMarkDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_MarkerId) == true)
{
const strComparisonOpMarkerId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_MarkerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_MarkerId, objge_StuBatchQuesRelaCond.markerId, strComparisonOpMarkerId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_OperateTime) == true)
{
const strComparisonOpOperateTime:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_OperateTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_OperateTime, objge_StuBatchQuesRelaCond.operateTime, strComparisonOpOperateTime);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_RealFinishDate) == true)
{
const strComparisonOpRealFinishDate:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_RealFinishDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_RealFinishDate, objge_StuBatchQuesRelaCond.realFinishDate, strComparisonOpRealFinishDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_WorkTypeId) == true)
{
const strComparisonOpWorkTypeId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_WorkTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_WorkTypeId, objge_StuBatchQuesRelaCond.workTypeId, strComparisonOpWorkTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_SchoolYear, objge_StuBatchQuesRelaCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_SchoolTerm, objge_StuBatchQuesRelaCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_ErrMsg) == true)
{
const strComparisonOpErrMsg:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_ErrMsg];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_ErrMsg, objge_StuBatchQuesRelaCond.errMsg, strComparisonOpErrMsg);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_IsRecommend) == true)
{
if (objge_StuBatchQuesRelaCond.isRecommend == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StuBatchQuesRelaEN.con_IsRecommend);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StuBatchQuesRelaEN.con_IsRecommend);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_CourseId, objge_StuBatchQuesRelaCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_UpdDate, objge_StuBatchQuesRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_UpdUserId, objge_StuBatchQuesRelaCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_StuBatchQuesRelaCond.dicFldComparisonOp, clsge_StuBatchQuesRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_StuBatchQuesRelaCond.dicFldComparisonOp[clsge_StuBatchQuesRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StuBatchQuesRelaEN.con_Memo, objge_StuBatchQuesRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StuBatchQuesRela(学生批次题目关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strExamBatchNo: 学生批次号(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StuBatchQuesRela_GetUniCondStr(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ExamBatchNo = '{0}'", objge_StuBatchQuesRelaEN.examBatchNo);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_StuBatchQuesRelaEN.userId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objge_StuBatchQuesRelaEN.questionId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StuBatchQuesRela(学生批次题目关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strExamBatchNo: 学生批次号(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StuBatchQuesRela_GetUniCondStr4Update(objge_StuBatchQuesRelaEN: clsge_StuBatchQuesRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdStuBatchQuesRela <> '{0}'", objge_StuBatchQuesRelaEN.idStuBatchQuesRela);
 strWhereCond +=  Format(" and ExamBatchNo = '{0}'", objge_StuBatchQuesRelaEN.examBatchNo);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_StuBatchQuesRelaEN.userId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objge_StuBatchQuesRelaEN.questionId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_StuBatchQuesRelaENS:源对象
 * @param objge_StuBatchQuesRelaENT:目标对象
*/
export  function ge_StuBatchQuesRela_CopyObjTo(objge_StuBatchQuesRelaENS: clsge_StuBatchQuesRelaEN , objge_StuBatchQuesRelaENT: clsge_StuBatchQuesRelaEN ): void 
{
objge_StuBatchQuesRelaENT.idStuBatchQuesRela = objge_StuBatchQuesRelaENS.idStuBatchQuesRela; //学生批次题目关系流水号
objge_StuBatchQuesRelaENT.examBatchNo = objge_StuBatchQuesRelaENS.examBatchNo; //学生批次号
objge_StuBatchQuesRelaENT.levelNo = objge_StuBatchQuesRelaENS.levelNo; //等级No
objge_StuBatchQuesRelaENT.questionId = objge_StuBatchQuesRelaENS.questionId; //题目Id
objge_StuBatchQuesRelaENT.userId = objge_StuBatchQuesRelaENS.userId; //用户ID
objge_StuBatchQuesRelaENT.idCurrEduCls = objge_StuBatchQuesRelaENS.idCurrEduCls; //教学班流水号
objge_StuBatchQuesRelaENT.questionIndex4Batch = objge_StuBatchQuesRelaENS.questionIndex4Batch; //题序号4批次
objge_StuBatchQuesRelaENT.gameLevelId = objge_StuBatchQuesRelaENS.gameLevelId; //游戏关卡Id
objge_StuBatchQuesRelaENT.scores = objge_StuBatchQuesRelaENS.scores; //分值
objge_StuBatchQuesRelaENT.score = objge_StuBatchQuesRelaENS.score; //得分
objge_StuBatchQuesRelaENT.stuAnswerText = objge_StuBatchQuesRelaENS.stuAnswerText; //学生回答文本
objge_StuBatchQuesRelaENT.answerDate = objge_StuBatchQuesRelaENS.answerDate; //回答日期
objge_StuBatchQuesRelaENT.answerIP = objge_StuBatchQuesRelaENS.answerIP; //回答IP
objge_StuBatchQuesRelaENT.answerModeId = objge_StuBatchQuesRelaENS.answerModeId; //答案模式Id
objge_StuBatchQuesRelaENT.answerMultiOptions = objge_StuBatchQuesRelaENS.answerMultiOptions; //多选项答案
objge_StuBatchQuesRelaENT.answerOptionId = objge_StuBatchQuesRelaENS.answerOptionId; //回答选项Id
objge_StuBatchQuesRelaENT.answerTime = objge_StuBatchQuesRelaENS.answerTime; //回答时间
objge_StuBatchQuesRelaENT.applySendBackDate = objge_StuBatchQuesRelaENS.applySendBackDate; //申请退回日期
objge_StuBatchQuesRelaENT.comment = objge_StuBatchQuesRelaENS.comment; //批注
objge_StuBatchQuesRelaENT.isAccessKnowledge = objge_StuBatchQuesRelaENS.isAccessKnowledge; //是否处理知识点
objge_StuBatchQuesRelaENT.isApplySendBack = objge_StuBatchQuesRelaENS.isApplySendBack; //是否申请退回
objge_StuBatchQuesRelaENT.isInErrorQuestion = objge_StuBatchQuesRelaENS.isInErrorQuestion; //是否进入错题
objge_StuBatchQuesRelaENT.isLook = objge_StuBatchQuesRelaENS.isLook; //是否查看
objge_StuBatchQuesRelaENT.isMarking = objge_StuBatchQuesRelaENS.isMarking; //是否批阅
objge_StuBatchQuesRelaENT.isNotProcessTimeout = objge_StuBatchQuesRelaENS.isNotProcessTimeout; //是否不处理超时
objge_StuBatchQuesRelaENT.isHasAnswer = objge_StuBatchQuesRelaENS.isHasAnswer; //是否有答案
objge_StuBatchQuesRelaENT.isPublish = objge_StuBatchQuesRelaENS.isPublish; //是否发布
objge_StuBatchQuesRelaENT.isRight = objge_StuBatchQuesRelaENS.isRight; //是否正确
objge_StuBatchQuesRelaENT.isSave = objge_StuBatchQuesRelaENS.isSave; //是否保存
objge_StuBatchQuesRelaENT.isSendBack = objge_StuBatchQuesRelaENS.isSendBack; //是否退回
objge_StuBatchQuesRelaENT.isSubmit = objge_StuBatchQuesRelaENS.isSubmit; //是否提交
objge_StuBatchQuesRelaENT.markDate = objge_StuBatchQuesRelaENS.markDate; //打分日期
objge_StuBatchQuesRelaENT.markerId = objge_StuBatchQuesRelaENS.markerId; //打分者
objge_StuBatchQuesRelaENT.operateTime = objge_StuBatchQuesRelaENS.operateTime; //操作时间
objge_StuBatchQuesRelaENT.realFinishDate = objge_StuBatchQuesRelaENS.realFinishDate; //实际完成日期
objge_StuBatchQuesRelaENT.workTypeId = objge_StuBatchQuesRelaENS.workTypeId; //作业类型Id
objge_StuBatchQuesRelaENT.schoolYear = objge_StuBatchQuesRelaENS.schoolYear; //学年
objge_StuBatchQuesRelaENT.schoolTerm = objge_StuBatchQuesRelaENS.schoolTerm; //学期
objge_StuBatchQuesRelaENT.errMsg = objge_StuBatchQuesRelaENS.errMsg; //错误信息
objge_StuBatchQuesRelaENT.isRecommend = objge_StuBatchQuesRelaENS.isRecommend; //是否推荐
objge_StuBatchQuesRelaENT.courseId = objge_StuBatchQuesRelaENS.courseId; //课程Id
objge_StuBatchQuesRelaENT.updDate = objge_StuBatchQuesRelaENS.updDate; //修改日期
objge_StuBatchQuesRelaENT.updUserId = objge_StuBatchQuesRelaENS.updUserId; //修改用户Id
objge_StuBatchQuesRelaENT.memo = objge_StuBatchQuesRelaENS.memo; //备注
objge_StuBatchQuesRelaENT.sfUpdFldSetStr = objge_StuBatchQuesRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_StuBatchQuesRelaENS:源对象
 * @param objge_StuBatchQuesRelaENT:目标对象
*/
export  function ge_StuBatchQuesRela_GetObjFromJsonObj(objge_StuBatchQuesRelaENS: clsge_StuBatchQuesRelaEN): clsge_StuBatchQuesRelaEN 
{
 const objge_StuBatchQuesRelaENT: clsge_StuBatchQuesRelaEN = new clsge_StuBatchQuesRelaEN();
ObjectAssign(objge_StuBatchQuesRelaENT, objge_StuBatchQuesRelaENS);
 return objge_StuBatchQuesRelaENT;
}