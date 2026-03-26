
 /**
 * 类名:clscc_ExamPaperStuBatchRelaWApi
 * 表名:cc_ExamPaperStuBatchRela(01120239)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:36
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
 * 考卷与学生批次关系(cc_ExamPaperStuBatchRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clscc_ExamPaperStuBatchRelaEN } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cc_ExamPaperStuBatchRela_Controller = "cc_ExamPaperStuBatchRelaApi";
 export const cc_ExamPaperStuBatchRela_ConstructorName = "cc_ExamPaperStuBatchRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdPaperStuBatch:关键字
 * @returns 对象
 **/
export  async function cc_ExamPaperStuBatchRela_GetObjByIdPaperStuBatchAsync(strIdPaperStuBatch: string): Promise<clscc_ExamPaperStuBatchRelaEN|null>  
{
const strThisFuncName = "GetObjByIdPaperStuBatchAsync";

if (IsNullOrEmpty(strIdPaperStuBatch) == true)
{
  const strMsg = Format("参数:[strIdPaperStuBatch]不能为空!(In clscc_ExamPaperStuBatchRelaWApi.GetObjByIdPaperStuBatchAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdPaperStuBatch.length != 10)
{
const strMsg = Format("缓存分类变量:[strIdPaperStuBatch]的长度:[{0}]不正确!(clscc_ExamPaperStuBatchRelaWApi.GetObjByIdPaperStuBatchAsync)", strIdPaperStuBatch.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdPaperStuBatch";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdPaperStuBatch,
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
const objcc_ExamPaperStuBatchRela = cc_ExamPaperStuBatchRela_GetObjFromJsonObj(returnObj);
return objcc_ExamPaperStuBatchRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdPaperStuBatchlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdPaperStuBatchCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function cc_ExamPaperStuBatchRela_SortFunDefa(a:clscc_ExamPaperStuBatchRelaEN , b:clscc_ExamPaperStuBatchRelaEN): number 
{
return a.idPaperStuBatch.localeCompare(b.idPaperStuBatch);
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
export  function cc_ExamPaperStuBatchRela_SortFunDefa2Fld(a:clscc_ExamPaperStuBatchRelaEN , b:clscc_ExamPaperStuBatchRelaEN): number 
{
if (a.courseExamPaperId == b.courseExamPaperId) return a.idStudentInfo.localeCompare(b.idStudentInfo);
else return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
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
export  function cc_ExamPaperStuBatchRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return a.idPaperStuBatch.localeCompare(b.idPaperStuBatch);
}
case clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.courseExamPaperId == null) return -1;
if (b.courseExamPaperId == null) return 1;
return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
}
case clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
case clscc_ExamPaperStuBatchRelaEN.con_BatchTime:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.batchTime == null) return -1;
if (b.batchTime == null) return 1;
return a.batchTime.localeCompare(b.batchTime);
}
case clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clscc_ExamPaperStuBatchRelaEN.con_Scores:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return a.scores-b.scores;
}
case clscc_ExamPaperStuBatchRelaEN.con_IsSave:
return (a: clscc_ExamPaperStuBatchRelaEN) => {
if (a.isSave == true) return 1;
else return -1
}
case clscc_ExamPaperStuBatchRelaEN.con_IsSubmit:
return (a: clscc_ExamPaperStuBatchRelaEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.realFinishDate == null) return -1;
if (b.realFinishDate == null) return 1;
return a.realFinishDate.localeCompare(b.realFinishDate);
}
case clscc_ExamPaperStuBatchRelaEN.con_OperateTime:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.operateTime == null) return -1;
if (b.operateTime == null) return 1;
return a.operateTime.localeCompare(b.operateTime);
}
case clscc_ExamPaperStuBatchRelaEN.con_IsMarking:
return (a: clscc_ExamPaperStuBatchRelaEN) => {
if (a.isMarking == true) return 1;
else return -1
}
case clscc_ExamPaperStuBatchRelaEN.con_MarkerId:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.markerId == null) return -1;
if (b.markerId == null) return 1;
return a.markerId.localeCompare(b.markerId);
}
case clscc_ExamPaperStuBatchRelaEN.con_MarkDate:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.markDate == null) return -1;
if (b.markDate == null) return 1;
return a.markDate.localeCompare(b.markDate);
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerIP:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.answerIP == null) return -1;
if (b.answerIP == null) return 1;
return a.answerIP.localeCompare(b.answerIP);
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerDate:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.answerDate == null) return -1;
if (b.answerDate == null) return 1;
return a.answerDate.localeCompare(b.answerDate);
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerTime:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.answerTime == null) return -1;
if (b.answerTime == null) return 1;
return a.answerTime.localeCompare(b.answerTime);
}
case clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return a.totalGetScore-b.totalGetScore;
}
case clscc_ExamPaperStuBatchRelaEN.con_UpdDate:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clscc_ExamPaperStuBatchRelaEN.con_UpdUserId:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clscc_ExamPaperStuBatchRelaEN.con_Memo:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperStuBatchRela]中不存在!(in ${ cc_ExamPaperStuBatchRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return b.idPaperStuBatch.localeCompare(a.idPaperStuBatch);
}
case clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.courseExamPaperId == null) return -1;
if (a.courseExamPaperId == null) return 1;
return b.courseExamPaperId.localeCompare(a.courseExamPaperId);
}
case clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return b.idStudentInfo.localeCompare(a.idStudentInfo);
}
case clscc_ExamPaperStuBatchRelaEN.con_BatchTime:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.batchTime == null) return -1;
if (a.batchTime == null) return 1;
return b.batchTime.localeCompare(a.batchTime);
}
case clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clscc_ExamPaperStuBatchRelaEN.con_Scores:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return b.scores-a.scores;
}
case clscc_ExamPaperStuBatchRelaEN.con_IsSave:
return (b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.isSave == true) return 1;
else return -1
}
case clscc_ExamPaperStuBatchRelaEN.con_IsSubmit:
return (b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.realFinishDate == null) return -1;
if (a.realFinishDate == null) return 1;
return b.realFinishDate.localeCompare(a.realFinishDate);
}
case clscc_ExamPaperStuBatchRelaEN.con_OperateTime:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.operateTime == null) return -1;
if (a.operateTime == null) return 1;
return b.operateTime.localeCompare(a.operateTime);
}
case clscc_ExamPaperStuBatchRelaEN.con_IsMarking:
return (b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.isMarking == true) return 1;
else return -1
}
case clscc_ExamPaperStuBatchRelaEN.con_MarkerId:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.markerId == null) return -1;
if (a.markerId == null) return 1;
return b.markerId.localeCompare(a.markerId);
}
case clscc_ExamPaperStuBatchRelaEN.con_MarkDate:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.markDate == null) return -1;
if (a.markDate == null) return 1;
return b.markDate.localeCompare(a.markDate);
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerIP:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.answerIP == null) return -1;
if (a.answerIP == null) return 1;
return b.answerIP.localeCompare(a.answerIP);
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerDate:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.answerDate == null) return -1;
if (a.answerDate == null) return 1;
return b.answerDate.localeCompare(a.answerDate);
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerTime:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.answerTime == null) return -1;
if (a.answerTime == null) return 1;
return b.answerTime.localeCompare(a.answerTime);
}
case clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return b.totalGetScore-a.totalGetScore;
}
case clscc_ExamPaperStuBatchRelaEN.con_UpdDate:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clscc_ExamPaperStuBatchRelaEN.con_UpdUserId:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clscc_ExamPaperStuBatchRelaEN.con_Memo:
return (a: clscc_ExamPaperStuBatchRelaEN, b: clscc_ExamPaperStuBatchRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperStuBatchRela]中不存在!(in ${ cc_ExamPaperStuBatchRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdPaperStuBatchCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function cc_ExamPaperStuBatchRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.idPaperStuBatch === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.courseExamPaperId === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.idStudentInfo === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_BatchTime:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.batchTime === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.idCurrEduCls === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_Scores:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.scores === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_IsSave:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.isSave === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_IsSubmit:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.isSubmit === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.realFinishDate === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_OperateTime:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.operateTime === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_IsMarking:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.isMarking === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_MarkerId:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.markerId === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_MarkDate:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.markDate === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerIP:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.answerIP === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerDate:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.answerDate === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_AnswerTime:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.answerTime === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.totalGetScore === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_UpdDate:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.updDate === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_UpdUserId:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.updUserId === value;
}
case clscc_ExamPaperStuBatchRelaEN.con_Memo:
return (obj: clscc_ExamPaperStuBatchRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperStuBatchRela]中不存在!(in ${ cc_ExamPaperStuBatchRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[cc_ExamPaperStuBatchRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_ExamPaperStuBatchRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_GetFirstObjAsync(strWhereCond: string): Promise<clscc_ExamPaperStuBatchRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const objcc_ExamPaperStuBatchRela = cc_ExamPaperStuBatchRela_GetObjFromJsonObj(returnObj);
return objcc_ExamPaperStuBatchRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_ExamPaperStuBatchRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * @param arrIdPaperStuBatch:关键字列表
 * @returns 对象列表
 **/
export  async function cc_ExamPaperStuBatchRela_GetObjLstByIdPaperStuBatchLstAsync(arrIdPaperStuBatch: Array<string>): Promise<Array<clscc_ExamPaperStuBatchRelaEN>>  
{
const strThisFuncName = "GetObjLstByIdPaperStuBatchLstAsync";
const strAction = "GetObjLstByIdPaperStuBatchLst";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdPaperStuBatch, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdPaperStuBatchLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function cc_ExamPaperStuBatchRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_ExamPaperStuBatchRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_ExamPaperStuBatchRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_ExamPaperStuBatchRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_ExamPaperStuBatchRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * @param strIdPaperStuBatch:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_ExamPaperStuBatchRela_DelRecordAsync(strIdPaperStuBatch: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdPaperStuBatch);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * @param arrIdPaperStuBatch:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_ExamPaperStuBatchRela_Delcc_ExamPaperStuBatchRelasAsync(arrIdPaperStuBatch: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_ExamPaperStuBatchRelasAsync";
const strAction = "Delcc_ExamPaperStuBatchRelas";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdPaperStuBatch, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_Delcc_ExamPaperStuBatchRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_ExamPaperStuBatchRelasByCondAsync";
const strAction = "Delcc_ExamPaperStuBatchRelasByCond";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperStuBatchRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_ExamPaperStuBatchRela_AddNewRecordAsync(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_ExamPaperStuBatchRelaEN);
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objcc_ExamPaperStuBatchRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_ExamPaperStuBatchRela_AddNewRecordWithMaxIdAsync(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_AddNewObjSave(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_ExamPaperStuBatchRela_CheckPropertyNew(objcc_ExamPaperStuBatchRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_ExamPaperStuBatchRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_ExamPaperStuBatchRela_CheckUniCond4Add(objcc_ExamPaperStuBatchRelaEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await cc_ExamPaperStuBatchRela_AddNewRecordWithMaxIdAsync(objcc_ExamPaperStuBatchRelaEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//cc_ExamPaperStuBatchRela_ReFreshCache();
}
else
{
const strInfo = `添加[考卷与学生批次关系(cc_ExamPaperStuBatchRela)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_ExamPaperStuBatchRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_ExamPaperStuBatchRela_CheckUniCond4Add(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<boolean>{
const strUniquenessCondition = cc_ExamPaperStuBatchRela_GetUniCondStr(objcc_ExamPaperStuBatchRelaEN);
const bolIsExistCondition = await cc_ExamPaperStuBatchRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_ExamPaperStuBatchRela_CheckUniCond4Update(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<boolean>{
const strUniquenessCondition = cc_ExamPaperStuBatchRela_GetUniCondStr4Update(objcc_ExamPaperStuBatchRelaEN);
const bolIsExistCondition = await cc_ExamPaperStuBatchRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_ExamPaperStuBatchRela_UpdateObjSave(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr = objcc_ExamPaperStuBatchRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_ExamPaperStuBatchRelaEN.idPaperStuBatch == "" || objcc_ExamPaperStuBatchRelaEN.idPaperStuBatch == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_ExamPaperStuBatchRela_CheckProperty4Update(objcc_ExamPaperStuBatchRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_ExamPaperStuBatchRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_ExamPaperStuBatchRela_CheckUniCond4Update(objcc_ExamPaperStuBatchRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_ExamPaperStuBatchRela_UpdateRecordAsync(objcc_ExamPaperStuBatchRelaEN);
if (returnBool == true)
{
//cc_ExamPaperStuBatchRela_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_ExamPaperStuBatchRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_ExamPaperStuBatchRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_ExamPaperStuBatchRela_AddNewRecordWithReturnKeyAsync(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperStuBatchRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_ExamPaperStuBatchRela_UpdateRecordAsync(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === undefined || objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === null || objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExamPaperStuBatchRelaEN.idPaperStuBatch);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperStuBatchRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_ExamPaperStuBatchRela_EditRecordExAsync(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === undefined || objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === null || objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExamPaperStuBatchRelaEN.idPaperStuBatch);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperStuBatchRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_ExamPaperStuBatchRela_UpdateWithConditionAsync(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === undefined || objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === null || objcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExamPaperStuBatchRelaEN.idPaperStuBatch);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);
objcc_ExamPaperStuBatchRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * @param strIdPaperStuBatch:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_ExamPaperStuBatchRela_IsExistAsync(strIdPaperStuBatch: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdPaperStuBatch
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuBatchRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function cc_ExamPaperStuBatchRela_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function cc_ExamPaperStuBatchRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_ExamPaperStuBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuBatchRela_ConstructorName, strThisFuncName);
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
export  function cc_ExamPaperStuBatchRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_ExamPaperStuBatchRela_CheckPropertyNew(pobjcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) === true 
 || pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学生流水号]不能为空(In 考卷与学生批次关系)!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) === true 
 || pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 考卷与学生批次关系)!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch) > 10)
{
 throw new Error(`(errid:Watl000413)字段[学生试卷批次流水号(idPaperStuBatch)]的长度不能超过10(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.batchTime) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.batchTime) > 14)
{
 throw new Error(`(errid:Watl000413)字段[批次(batchTime)]的长度不能超过14(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.batchTime}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.realFinishDate) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.realFinishDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[实际完成日期(realFinishDate)]的长度不能超过14(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.realFinishDate}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.operateTime) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.operateTime) > 14)
{
 throw new Error(`(errid:Watl000413)字段[操作时间(operateTime)]的长度不能超过14(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.operateTime}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.markerId) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.markerId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[打分者(markerId)]的长度不能超过20(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.markerId}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.markDate) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.markDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[打分日期(markDate)]的长度不能超过14(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.markDate}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerIP) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.answerIP) > 30)
{
 throw new Error(`(errid:Watl000413)字段[回答IP(answerIP)]的长度不能超过30(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.answerIP}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerDate) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.answerDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[回答日期(answerDate)]的长度不能超过8(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.answerDate}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerTime) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.answerTime) > 10)
{
 throw new Error(`(errid:Watl000413)字段[回答时间(answerTime)]的长度不能超过10(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.answerTime}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.updDate) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.updDate}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.updUserId) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.updUserId}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.memo) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.memo}(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生试卷批次流水号(idPaperStuBatch)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) === false)
{
 throw new Error(`(errid:Watl000414)字段[考卷流水号(courseExamPaperId)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.batchTime) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.batchTime && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.batchTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次(batchTime)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.batchTime}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.scores && undefined !== pobjcc_ExamPaperStuBatchRelaEN.scores && tzDataType.isNumber(pobjcc_ExamPaperStuBatchRelaEN.scores) === false)
{
 throw new Error(`(errid:Watl000414)字段[分值(scores)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.scores}], 非法,应该为数值型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.isSave && undefined !== pobjcc_ExamPaperStuBatchRelaEN.isSave && tzDataType.isBoolean(pobjcc_ExamPaperStuBatchRelaEN.isSave) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否保存(isSave)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.isSave}], 非法,应该为布尔型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.isSubmit && undefined !== pobjcc_ExamPaperStuBatchRelaEN.isSubmit && tzDataType.isBoolean(pobjcc_ExamPaperStuBatchRelaEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否提交(isSubmit)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.isSubmit}], 非法,应该为布尔型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.realFinishDate) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.realFinishDate && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.realFinishDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[实际完成日期(realFinishDate)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.realFinishDate}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.operateTime) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.operateTime && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.operateTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[操作时间(operateTime)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.operateTime}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.isMarking && undefined !== pobjcc_ExamPaperStuBatchRelaEN.isMarking && tzDataType.isBoolean(pobjcc_ExamPaperStuBatchRelaEN.isMarking) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否批阅(isMarking)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.isMarking}], 非法,应该为布尔型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.markerId) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.markerId && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.markerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[打分者(markerId)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.markerId}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.markDate) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.markDate && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.markDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[打分日期(markDate)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.markDate}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerIP) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.answerIP && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.answerIP) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答IP(answerIP)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.answerIP}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerDate) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.answerDate && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.answerDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答日期(answerDate)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.answerDate}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerTime) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.answerTime && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.answerTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[回答时间(answerTime)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.answerTime}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.totalGetScore && undefined !== pobjcc_ExamPaperStuBatchRelaEN.totalGetScore && tzDataType.isNumber(pobjcc_ExamPaperStuBatchRelaEN.totalGetScore) === false)
{
 throw new Error(`(errid:Watl000414)字段[考生获取总分(totalGetScore)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.totalGetScore}], 非法,应该为数值型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.updDate) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.updDate && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.updDate}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.updUserId) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.updUserId && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.updUserId}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.memo) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.memo && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.memo}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) == false && pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) !=  8)
{
 throw ("(errid:Watl000415)字段[考卷流水号]作为外键字段,长度应该为8(In 考卷与学生批次关系)!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) == false && pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) !=  8)
{
 throw ("(errid:Watl000415)字段[学生流水号]作为外键字段,长度应该为8(In 考卷与学生批次关系)!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) == false && pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 考卷与学生批次关系)!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_ExamPaperStuBatchRela_CheckProperty4Update(pobjcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch) > 10)
{
 throw new Error(`(errid:Watl000416)字段[学生试卷批次流水号(idPaperStuBatch)]的长度不能超过10(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.batchTime) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.batchTime) > 14)
{
 throw new Error(`(errid:Watl000416)字段[批次(batchTime)]的长度不能超过14(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.batchTime}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.realFinishDate) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.realFinishDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[实际完成日期(realFinishDate)]的长度不能超过14(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.realFinishDate}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.operateTime) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.operateTime) > 14)
{
 throw new Error(`(errid:Watl000416)字段[操作时间(operateTime)]的长度不能超过14(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.operateTime}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.markerId) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.markerId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[打分者(markerId)]的长度不能超过20(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.markerId}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.markDate) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.markDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[打分日期(markDate)]的长度不能超过14(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.markDate}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerIP) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.answerIP) > 30)
{
 throw new Error(`(errid:Watl000416)字段[回答IP(answerIP)]的长度不能超过30(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.answerIP}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerDate) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.answerDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[回答日期(answerDate)]的长度不能超过8(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.answerDate}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerTime) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.answerTime) > 10)
{
 throw new Error(`(errid:Watl000416)字段[回答时间(answerTime)]的长度不能超过10(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.answerTime}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.updDate) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.updDate}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.updUserId) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.updUserId}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.memo) == false && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!值:${pobjcc_ExamPaperStuBatchRelaEN.memo}(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生试卷批次流水号(idPaperStuBatch)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.idPaperStuBatch}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) === false)
{
 throw new Error(`(errid:Watl000417)字段[考卷流水号(courseExamPaperId)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.batchTime) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.batchTime && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.batchTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次(batchTime)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.batchTime}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.scores && undefined !== pobjcc_ExamPaperStuBatchRelaEN.scores && tzDataType.isNumber(pobjcc_ExamPaperStuBatchRelaEN.scores) === false)
{
 throw new Error(`(errid:Watl000417)字段[分值(scores)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.scores}], 非法,应该为数值型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.isSave && undefined !== pobjcc_ExamPaperStuBatchRelaEN.isSave && tzDataType.isBoolean(pobjcc_ExamPaperStuBatchRelaEN.isSave) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否保存(isSave)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.isSave}], 非法,应该为布尔型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.isSubmit && undefined !== pobjcc_ExamPaperStuBatchRelaEN.isSubmit && tzDataType.isBoolean(pobjcc_ExamPaperStuBatchRelaEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否提交(isSubmit)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.isSubmit}], 非法,应该为布尔型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.realFinishDate) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.realFinishDate && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.realFinishDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[实际完成日期(realFinishDate)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.realFinishDate}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.operateTime) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.operateTime && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.operateTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[操作时间(operateTime)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.operateTime}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.isMarking && undefined !== pobjcc_ExamPaperStuBatchRelaEN.isMarking && tzDataType.isBoolean(pobjcc_ExamPaperStuBatchRelaEN.isMarking) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否批阅(isMarking)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.isMarking}], 非法,应该为布尔型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.markerId) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.markerId && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.markerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[打分者(markerId)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.markerId}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.markDate) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.markDate && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.markDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[打分日期(markDate)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.markDate}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerIP) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.answerIP && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.answerIP) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答IP(answerIP)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.answerIP}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerDate) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.answerDate && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.answerDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答日期(answerDate)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.answerDate}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.answerTime) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.answerTime && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.answerTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[回答时间(answerTime)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.answerTime}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (null != pobjcc_ExamPaperStuBatchRelaEN.totalGetScore && undefined !== pobjcc_ExamPaperStuBatchRelaEN.totalGetScore && tzDataType.isNumber(pobjcc_ExamPaperStuBatchRelaEN.totalGetScore) === false)
{
 throw new Error(`(errid:Watl000417)字段[考生获取总分(totalGetScore)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.totalGetScore}], 非法,应该为数值型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.updDate) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.updDate && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.updDate}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.updUserId) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.updUserId && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.updUserId}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.memo) == false && undefined !== pobjcc_ExamPaperStuBatchRelaEN.memo && tzDataType.isString(pobjcc_ExamPaperStuBatchRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_ExamPaperStuBatchRelaEN.memo}], 非法,应该为字符型(In 考卷与学生批次关系(cc_ExamPaperStuBatchRela))!(clscc_ExamPaperStuBatchRelaBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) == false && pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.courseExamPaperId) !=  8)
{
 throw ("(errid:Watl000418)字段[考卷流水号]作为外键字段,长度应该为8(In 考卷与学生批次关系)!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) == false && pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idStudentInfo) !=  8)
{
 throw ("(errid:Watl000418)字段[学生流水号]作为外键字段,长度应该为8(In 考卷与学生批次关系)!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) == false && pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuBatchRelaEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 考卷与学生批次关系)!(clscc_ExamPaperStuBatchRelaBL:CheckPropertyNew)");
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
export  function cc_ExamPaperStuBatchRela_GetJSONStrByObj (pobjcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN): string
{
pobjcc_ExamPaperStuBatchRelaEN.sfUpdFldSetStr = pobjcc_ExamPaperStuBatchRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_ExamPaperStuBatchRelaEN);
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
export  function cc_ExamPaperStuBatchRela_GetObjLstByJSONStr (strJSON: string): Array<clscc_ExamPaperStuBatchRelaEN>
{
let arrcc_ExamPaperStuBatchRelaObjLst = new Array<clscc_ExamPaperStuBatchRelaEN>();
if (strJSON === "")
{
return arrcc_ExamPaperStuBatchRelaObjLst;
}
try
{
arrcc_ExamPaperStuBatchRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_ExamPaperStuBatchRelaObjLst;
}
return arrcc_ExamPaperStuBatchRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_ExamPaperStuBatchRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_ExamPaperStuBatchRela_GetObjLstByJSONObjLst (arrcc_ExamPaperStuBatchRelaObjLstS: Array<clscc_ExamPaperStuBatchRelaEN>): Array<clscc_ExamPaperStuBatchRelaEN>
{
const arrcc_ExamPaperStuBatchRelaObjLst = new Array<clscc_ExamPaperStuBatchRelaEN>();
for (const objInFor of arrcc_ExamPaperStuBatchRelaObjLstS) {
const obj1 = cc_ExamPaperStuBatchRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_ExamPaperStuBatchRelaObjLst.push(obj1);
}
return arrcc_ExamPaperStuBatchRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_ExamPaperStuBatchRela_GetObjByJSONStr (strJSON: string): clscc_ExamPaperStuBatchRelaEN
{
let pobjcc_ExamPaperStuBatchRelaEN = new clscc_ExamPaperStuBatchRelaEN();
if (strJSON === "")
{
return pobjcc_ExamPaperStuBatchRelaEN;
}
try
{
pobjcc_ExamPaperStuBatchRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_ExamPaperStuBatchRelaEN;
}
return pobjcc_ExamPaperStuBatchRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_ExamPaperStuBatchRela_GetCombineCondition(objcc_ExamPaperStuBatchRelaCond: clscc_ExamPaperStuBatchRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch) == true)
{
const strComparisonOpIdPaperStuBatch:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch, objcc_ExamPaperStuBatchRelaCond.idPaperStuBatch, strComparisonOpIdPaperStuBatch);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId) == true)
{
const strComparisonOpCourseExamPaperId:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_CourseExamPaperId, objcc_ExamPaperStuBatchRelaCond.courseExamPaperId, strComparisonOpCourseExamPaperId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo) == true)
{
const strComparisonOpIdStudentInfo:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo, objcc_ExamPaperStuBatchRelaCond.idStudentInfo, strComparisonOpIdStudentInfo);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_BatchTime) == true)
{
const strComparisonOpBatchTime:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_BatchTime];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_BatchTime, objcc_ExamPaperStuBatchRelaCond.batchTime, strComparisonOpBatchTime);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_IdCurrEduCls, objcc_ExamPaperStuBatchRelaCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_Scores) == true)
{
const strComparisonOpScores:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_Scores];
strWhereCond += Format(" And {0} {2} {1}", clscc_ExamPaperStuBatchRelaEN.con_Scores, objcc_ExamPaperStuBatchRelaCond.scores, strComparisonOpScores);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_IsSave) == true)
{
if (objcc_ExamPaperStuBatchRelaCond.isSave == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuBatchRelaEN.con_IsSave);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuBatchRelaEN.con_IsSave);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_IsSubmit) == true)
{
if (objcc_ExamPaperStuBatchRelaCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuBatchRelaEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuBatchRelaEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate) == true)
{
const strComparisonOpRealFinishDate:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate, objcc_ExamPaperStuBatchRelaCond.realFinishDate, strComparisonOpRealFinishDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_OperateTime) == true)
{
const strComparisonOpOperateTime:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_OperateTime];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_OperateTime, objcc_ExamPaperStuBatchRelaCond.operateTime, strComparisonOpOperateTime);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_IsMarking) == true)
{
if (objcc_ExamPaperStuBatchRelaCond.isMarking == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuBatchRelaEN.con_IsMarking);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuBatchRelaEN.con_IsMarking);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_MarkerId) == true)
{
const strComparisonOpMarkerId:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_MarkerId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_MarkerId, objcc_ExamPaperStuBatchRelaCond.markerId, strComparisonOpMarkerId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_MarkDate) == true)
{
const strComparisonOpMarkDate:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_MarkDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_MarkDate, objcc_ExamPaperStuBatchRelaCond.markDate, strComparisonOpMarkDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_AnswerIP) == true)
{
const strComparisonOpAnswerIP:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_AnswerIP];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_AnswerIP, objcc_ExamPaperStuBatchRelaCond.answerIP, strComparisonOpAnswerIP);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_AnswerDate) == true)
{
const strComparisonOpAnswerDate:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_AnswerDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_AnswerDate, objcc_ExamPaperStuBatchRelaCond.answerDate, strComparisonOpAnswerDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_AnswerTime) == true)
{
const strComparisonOpAnswerTime:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_AnswerTime];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_AnswerTime, objcc_ExamPaperStuBatchRelaCond.answerTime, strComparisonOpAnswerTime);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore) == true)
{
const strComparisonOpTotalGetScore:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore];
strWhereCond += Format(" And {0} {2} {1}", clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore, objcc_ExamPaperStuBatchRelaCond.totalGetScore, strComparisonOpTotalGetScore);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_UpdDate, objcc_ExamPaperStuBatchRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_UpdUserId, objcc_ExamPaperStuBatchRelaCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp, clscc_ExamPaperStuBatchRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_ExamPaperStuBatchRelaCond.dicFldComparisonOp[clscc_ExamPaperStuBatchRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuBatchRelaEN.con_Memo, objcc_ExamPaperStuBatchRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_ExamPaperStuBatchRela(考卷与学生批次关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseExamPaperId: 考卷流水号(要求唯一的字段)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_ExamPaperStuBatchRela_GetUniCondStr(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseExamPaperId = '{0}'", objcc_ExamPaperStuBatchRelaEN.courseExamPaperId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objcc_ExamPaperStuBatchRelaEN.idStudentInfo);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_ExamPaperStuBatchRela(考卷与学生批次关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseExamPaperId: 考卷流水号(要求唯一的字段)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_ExamPaperStuBatchRela_GetUniCondStr4Update(objcc_ExamPaperStuBatchRelaEN: clscc_ExamPaperStuBatchRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdPaperStuBatch <> '{0}'", objcc_ExamPaperStuBatchRelaEN.idPaperStuBatch);
 strWhereCond +=  Format(" and CourseExamPaperId = '{0}'", objcc_ExamPaperStuBatchRelaEN.courseExamPaperId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objcc_ExamPaperStuBatchRelaEN.idStudentInfo);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_ExamPaperStuBatchRelaENS:源对象
 * @param objcc_ExamPaperStuBatchRelaENT:目标对象
*/
export  function cc_ExamPaperStuBatchRela_CopyObjTo(objcc_ExamPaperStuBatchRelaENS: clscc_ExamPaperStuBatchRelaEN , objcc_ExamPaperStuBatchRelaENT: clscc_ExamPaperStuBatchRelaEN ): void 
{
objcc_ExamPaperStuBatchRelaENT.idPaperStuBatch = objcc_ExamPaperStuBatchRelaENS.idPaperStuBatch; //学生试卷批次流水号
objcc_ExamPaperStuBatchRelaENT.courseExamPaperId = objcc_ExamPaperStuBatchRelaENS.courseExamPaperId; //考卷流水号
objcc_ExamPaperStuBatchRelaENT.idStudentInfo = objcc_ExamPaperStuBatchRelaENS.idStudentInfo; //学生流水号
objcc_ExamPaperStuBatchRelaENT.batchTime = objcc_ExamPaperStuBatchRelaENS.batchTime; //批次
objcc_ExamPaperStuBatchRelaENT.idCurrEduCls = objcc_ExamPaperStuBatchRelaENS.idCurrEduCls; //教学班流水号
objcc_ExamPaperStuBatchRelaENT.scores = objcc_ExamPaperStuBatchRelaENS.scores; //分值
objcc_ExamPaperStuBatchRelaENT.isSave = objcc_ExamPaperStuBatchRelaENS.isSave; //是否保存
objcc_ExamPaperStuBatchRelaENT.isSubmit = objcc_ExamPaperStuBatchRelaENS.isSubmit; //是否提交
objcc_ExamPaperStuBatchRelaENT.realFinishDate = objcc_ExamPaperStuBatchRelaENS.realFinishDate; //实际完成日期
objcc_ExamPaperStuBatchRelaENT.operateTime = objcc_ExamPaperStuBatchRelaENS.operateTime; //操作时间
objcc_ExamPaperStuBatchRelaENT.isMarking = objcc_ExamPaperStuBatchRelaENS.isMarking; //是否批阅
objcc_ExamPaperStuBatchRelaENT.markerId = objcc_ExamPaperStuBatchRelaENS.markerId; //打分者
objcc_ExamPaperStuBatchRelaENT.markDate = objcc_ExamPaperStuBatchRelaENS.markDate; //打分日期
objcc_ExamPaperStuBatchRelaENT.answerIP = objcc_ExamPaperStuBatchRelaENS.answerIP; //回答IP
objcc_ExamPaperStuBatchRelaENT.answerDate = objcc_ExamPaperStuBatchRelaENS.answerDate; //回答日期
objcc_ExamPaperStuBatchRelaENT.answerTime = objcc_ExamPaperStuBatchRelaENS.answerTime; //回答时间
objcc_ExamPaperStuBatchRelaENT.totalGetScore = objcc_ExamPaperStuBatchRelaENS.totalGetScore; //考生获取总分
objcc_ExamPaperStuBatchRelaENT.updDate = objcc_ExamPaperStuBatchRelaENS.updDate; //修改日期
objcc_ExamPaperStuBatchRelaENT.updUserId = objcc_ExamPaperStuBatchRelaENS.updUserId; //修改用户Id
objcc_ExamPaperStuBatchRelaENT.memo = objcc_ExamPaperStuBatchRelaENS.memo; //备注
objcc_ExamPaperStuBatchRelaENT.sfUpdFldSetStr = objcc_ExamPaperStuBatchRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_ExamPaperStuBatchRelaENS:源对象
 * @param objcc_ExamPaperStuBatchRelaENT:目标对象
*/
export  function cc_ExamPaperStuBatchRela_GetObjFromJsonObj(objcc_ExamPaperStuBatchRelaENS: clscc_ExamPaperStuBatchRelaEN): clscc_ExamPaperStuBatchRelaEN 
{
 const objcc_ExamPaperStuBatchRelaENT: clscc_ExamPaperStuBatchRelaEN = new clscc_ExamPaperStuBatchRelaEN();
ObjectAssign(objcc_ExamPaperStuBatchRelaENT, objcc_ExamPaperStuBatchRelaENS);
 return objcc_ExamPaperStuBatchRelaENT;
}