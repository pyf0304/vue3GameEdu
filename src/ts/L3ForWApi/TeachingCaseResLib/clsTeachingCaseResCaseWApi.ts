
 /**
 * 类名:clsTeachingCaseResCaseWApi
 * 表名:TeachingCaseResCase(01120377)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学案例资源案例(TeachingCaseResCase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsTeachingCaseResCaseEN } from "@/ts/L0Entity/TeachingCaseResLib/clsTeachingCaseResCaseEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const teachingCaseResCase_Controller = "TeachingCaseResCaseApi";
 export const teachingCaseResCase_ConstructorName = "teachingCaseResCase";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdTeachingCaseResCase:关键字
 * @returns 对象
 **/
export  async function TeachingCaseResCase_GetObjByIdTeachingCaseResCaseAsync(strIdTeachingCaseResCase: string): Promise<clsTeachingCaseResCaseEN|null>  
{
const strThisFuncName = "GetObjByIdTeachingCaseResCaseAsync";

if (IsNullOrEmpty(strIdTeachingCaseResCase) == true)
{
  const strMsg = Format("参数:[strIdTeachingCaseResCase]不能为空!(In clsTeachingCaseResCaseWApi.GetObjByIdTeachingCaseResCaseAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeachingCaseResCase.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeachingCaseResCase]的长度:[{0}]不正确!(clsTeachingCaseResCaseWApi.GetObjByIdTeachingCaseResCaseAsync)", strIdTeachingCaseResCase.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdTeachingCaseResCase";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeachingCaseResCase,
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
const objTeachingCaseResCase = TeachingCaseResCase_GetObjFromJsonObj(returnObj);
return objTeachingCaseResCase;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdTeachingCaseResCaselocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdTeachingCaseResCaseCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function TeachingCaseResCase_SortFunDefa(a:clsTeachingCaseResCaseEN , b:clsTeachingCaseResCaseEN): number 
{
return a.idTeachingCaseResCase.localeCompare(b.idTeachingCaseResCase);
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
export  function TeachingCaseResCase_SortFunDefa2Fld(a:clsTeachingCaseResCaseEN , b:clsTeachingCaseResCaseEN): number 
{
if (a.teachingCaseResCaseID == b.teachingCaseResCaseID) return a.teachingCaseResCaseName.localeCompare(b.teachingCaseResCaseName);
else return a.teachingCaseResCaseID.localeCompare(b.teachingCaseResCaseID);
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
export  function TeachingCaseResCase_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCase:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.idTeachingCaseResCase.localeCompare(b.idTeachingCaseResCase);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseID:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.teachingCaseResCaseID.localeCompare(b.teachingCaseResCaseID);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.teachingCaseResCaseName.localeCompare(b.teachingCaseResCaseName);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTheme:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.teachingCaseResCaseTheme == null) return -1;
if (b.teachingCaseResCaseTheme == null) return 1;
return a.teachingCaseResCaseTheme.localeCompare(b.teachingCaseResCaseTheme);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseText:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.teachingCaseResCaseText == null) return -1;
if (b.teachingCaseResCaseText == null) return 1;
return a.teachingCaseResCaseText.localeCompare(b.teachingCaseResCaseText);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDate:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.teachingCaseResCaseDate == null) return -1;
if (b.teachingCaseResCaseDate == null) return 1;
return a.teachingCaseResCaseDate.localeCompare(b.teachingCaseResCaseDate);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTime:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.teachingCaseResCaseTime == null) return -1;
if (b.teachingCaseResCaseTime == null) return 1;
return a.teachingCaseResCaseTime.localeCompare(b.teachingCaseResCaseTime);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDateIn:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.teachingCaseResCaseDateIn == null) return -1;
if (b.teachingCaseResCaseDateIn == null) return 1;
return a.teachingCaseResCaseDateIn.localeCompare(b.teachingCaseResCaseDateIn);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTimeIn:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.teachingCaseResCaseTimeIn == null) return -1;
if (b.teachingCaseResCaseTimeIn == null) return 1;
return a.teachingCaseResCaseTimeIn.localeCompare(b.teachingCaseResCaseTimeIn);
}
case clsTeachingCaseResCaseEN.con_IdCaseType:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.idCaseType.localeCompare(b.idCaseType);
}
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCaseType:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.idTeachingCaseResCaseType.localeCompare(b.idTeachingCaseResCaseType);
}
case clsTeachingCaseResCaseEN.con_CourseId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsTeachingCaseResCaseEN.con_OwnerId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.ownerId == null) return -1;
if (b.ownerId == null) return 1;
return a.ownerId.localeCompare(b.ownerId);
}
case clsTeachingCaseResCaseEN.con_IdStudyLevel:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.idStudyLevel == null) return -1;
if (b.idStudyLevel == null) return 1;
return a.idStudyLevel.localeCompare(b.idStudyLevel);
}
case clsTeachingCaseResCaseEN.con_IdTeachingPlan:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.idTeachingPlan == null) return -1;
if (b.idTeachingPlan == null) return 1;
return a.idTeachingPlan.localeCompare(b.idTeachingPlan);
}
case clsTeachingCaseResCaseEN.con_IdDiscipline:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.idDiscipline == null) return -1;
if (b.idDiscipline == null) return 1;
return a.idDiscipline.localeCompare(b.idDiscipline);
}
case clsTeachingCaseResCaseEN.con_BrowseCount:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.browseCount-b.browseCount;
}
case clsTeachingCaseResCaseEN.con_IdSenateGaugeVersion:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.idSenateGaugeVersion == null) return -1;
if (b.idSenateGaugeVersion == null) return 1;
return a.idSenateGaugeVersion.localeCompare(b.idSenateGaugeVersion);
}
case clsTeachingCaseResCaseEN.con_IdTeachSkill:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.idTeachSkill == null) return -1;
if (b.idTeachSkill == null) return 1;
return a.idTeachSkill.localeCompare(b.idTeachSkill);
}
case clsTeachingCaseResCaseEN.con_CaseLevelId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.caseLevelId == null) return -1;
if (b.caseLevelId == null) return 1;
return a.caseLevelId.localeCompare(b.caseLevelId);
}
case clsTeachingCaseResCaseEN.con_DocFile:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.docFile == null) return -1;
if (b.docFile == null) return 1;
return a.docFile.localeCompare(b.docFile);
}
case clsTeachingCaseResCaseEN.con_IsNeedGeneWord:
return (a: clsTeachingCaseResCaseEN) => {
if (a.isNeedGeneWord == true) return 1;
else return -1
}
case clsTeachingCaseResCaseEN.con_WordCreateDate:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.wordCreateDate == null) return -1;
if (b.wordCreateDate == null) return 1;
return a.wordCreateDate.localeCompare(b.wordCreateDate);
}
case clsTeachingCaseResCaseEN.con_IsVisible:
return (a: clsTeachingCaseResCaseEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsTeachingCaseResCaseEN.con_IsDualVideo:
return (a: clsTeachingCaseResCaseEN) => {
if (a.isDualVideo == true) return 1;
else return -1
}
case clsTeachingCaseResCaseEN.con_IdXzCollege:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsTeachingCaseResCaseEN.con_IdXzMajor:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsTeachingCaseResCaseEN.con_CourseChapterId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.courseChapterId == null) return -1;
if (b.courseChapterId == null) return 1;
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsTeachingCaseResCaseEN.con_ViewCount:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.viewCount-b.viewCount;
}
case clsTeachingCaseResCaseEN.con_IsShow:
return (a: clsTeachingCaseResCaseEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clsTeachingCaseResCaseEN.con_DownloadNumber:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.downloadNumber-b.downloadNumber;
}
case clsTeachingCaseResCaseEN.con_FileIntegration:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.fileIntegration-b.fileIntegration;
}
case clsTeachingCaseResCaseEN.con_LikeCount:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.likeCount-b.likeCount;
}
case clsTeachingCaseResCaseEN.con_CollectionCount:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.collectionCount-b.collectionCount;
}
case clsTeachingCaseResCaseEN.con_RecommendedDegreeId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return a.recommendedDegreeId.localeCompare(b.recommendedDegreeId);
}
case clsTeachingCaseResCaseEN.con_ftpFileType:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.ftpFileType == null) return -1;
if (b.ftpFileType == null) return 1;
return a.ftpFileType.localeCompare(b.ftpFileType);
}
case clsTeachingCaseResCaseEN.con_VideoUrl:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.videoUrl == null) return -1;
if (b.videoUrl == null) return 1;
return a.videoUrl.localeCompare(b.videoUrl);
}
case clsTeachingCaseResCaseEN.con_VideoPath:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.videoPath == null) return -1;
if (b.videoPath == null) return 1;
return a.videoPath.localeCompare(b.videoPath);
}
case clsTeachingCaseResCaseEN.con_ResErrMsg:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.resErrMsg == null) return -1;
if (b.resErrMsg == null) return 1;
return a.resErrMsg.localeCompare(b.resErrMsg);
}
case clsTeachingCaseResCaseEN.con_UpdDate:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsTeachingCaseResCaseEN.con_UpdUserId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsTeachingCaseResCaseEN.con_Memo:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingCaseResCase]中不存在!(in ${ teachingCaseResCase_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCase:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.idTeachingCaseResCase.localeCompare(a.idTeachingCaseResCase);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseID:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.teachingCaseResCaseID.localeCompare(a.teachingCaseResCaseID);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.teachingCaseResCaseName.localeCompare(a.teachingCaseResCaseName);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTheme:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.teachingCaseResCaseTheme == null) return -1;
if (a.teachingCaseResCaseTheme == null) return 1;
return b.teachingCaseResCaseTheme.localeCompare(a.teachingCaseResCaseTheme);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseText:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.teachingCaseResCaseText == null) return -1;
if (a.teachingCaseResCaseText == null) return 1;
return b.teachingCaseResCaseText.localeCompare(a.teachingCaseResCaseText);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDate:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.teachingCaseResCaseDate == null) return -1;
if (a.teachingCaseResCaseDate == null) return 1;
return b.teachingCaseResCaseDate.localeCompare(a.teachingCaseResCaseDate);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTime:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.teachingCaseResCaseTime == null) return -1;
if (a.teachingCaseResCaseTime == null) return 1;
return b.teachingCaseResCaseTime.localeCompare(a.teachingCaseResCaseTime);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDateIn:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.teachingCaseResCaseDateIn == null) return -1;
if (a.teachingCaseResCaseDateIn == null) return 1;
return b.teachingCaseResCaseDateIn.localeCompare(a.teachingCaseResCaseDateIn);
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTimeIn:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.teachingCaseResCaseTimeIn == null) return -1;
if (a.teachingCaseResCaseTimeIn == null) return 1;
return b.teachingCaseResCaseTimeIn.localeCompare(a.teachingCaseResCaseTimeIn);
}
case clsTeachingCaseResCaseEN.con_IdCaseType:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.idCaseType.localeCompare(a.idCaseType);
}
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCaseType:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.idTeachingCaseResCaseType.localeCompare(a.idTeachingCaseResCaseType);
}
case clsTeachingCaseResCaseEN.con_CourseId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsTeachingCaseResCaseEN.con_OwnerId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.ownerId == null) return -1;
if (a.ownerId == null) return 1;
return b.ownerId.localeCompare(a.ownerId);
}
case clsTeachingCaseResCaseEN.con_IdStudyLevel:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.idStudyLevel == null) return -1;
if (a.idStudyLevel == null) return 1;
return b.idStudyLevel.localeCompare(a.idStudyLevel);
}
case clsTeachingCaseResCaseEN.con_IdTeachingPlan:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.idTeachingPlan == null) return -1;
if (a.idTeachingPlan == null) return 1;
return b.idTeachingPlan.localeCompare(a.idTeachingPlan);
}
case clsTeachingCaseResCaseEN.con_IdDiscipline:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.idDiscipline == null) return -1;
if (a.idDiscipline == null) return 1;
return b.idDiscipline.localeCompare(a.idDiscipline);
}
case clsTeachingCaseResCaseEN.con_BrowseCount:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.browseCount-a.browseCount;
}
case clsTeachingCaseResCaseEN.con_IdSenateGaugeVersion:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.idSenateGaugeVersion == null) return -1;
if (a.idSenateGaugeVersion == null) return 1;
return b.idSenateGaugeVersion.localeCompare(a.idSenateGaugeVersion);
}
case clsTeachingCaseResCaseEN.con_IdTeachSkill:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.idTeachSkill == null) return -1;
if (a.idTeachSkill == null) return 1;
return b.idTeachSkill.localeCompare(a.idTeachSkill);
}
case clsTeachingCaseResCaseEN.con_CaseLevelId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.caseLevelId == null) return -1;
if (a.caseLevelId == null) return 1;
return b.caseLevelId.localeCompare(a.caseLevelId);
}
case clsTeachingCaseResCaseEN.con_DocFile:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.docFile == null) return -1;
if (a.docFile == null) return 1;
return b.docFile.localeCompare(a.docFile);
}
case clsTeachingCaseResCaseEN.con_IsNeedGeneWord:
return (b: clsTeachingCaseResCaseEN) => {
if (b.isNeedGeneWord == true) return 1;
else return -1
}
case clsTeachingCaseResCaseEN.con_WordCreateDate:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.wordCreateDate == null) return -1;
if (a.wordCreateDate == null) return 1;
return b.wordCreateDate.localeCompare(a.wordCreateDate);
}
case clsTeachingCaseResCaseEN.con_IsVisible:
return (b: clsTeachingCaseResCaseEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsTeachingCaseResCaseEN.con_IsDualVideo:
return (b: clsTeachingCaseResCaseEN) => {
if (b.isDualVideo == true) return 1;
else return -1
}
case clsTeachingCaseResCaseEN.con_IdXzCollege:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsTeachingCaseResCaseEN.con_IdXzMajor:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsTeachingCaseResCaseEN.con_CourseChapterId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.courseChapterId == null) return -1;
if (a.courseChapterId == null) return 1;
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsTeachingCaseResCaseEN.con_ViewCount:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.viewCount-a.viewCount;
}
case clsTeachingCaseResCaseEN.con_IsShow:
return (b: clsTeachingCaseResCaseEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clsTeachingCaseResCaseEN.con_DownloadNumber:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.downloadNumber-a.downloadNumber;
}
case clsTeachingCaseResCaseEN.con_FileIntegration:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.fileIntegration-a.fileIntegration;
}
case clsTeachingCaseResCaseEN.con_LikeCount:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.likeCount-a.likeCount;
}
case clsTeachingCaseResCaseEN.con_CollectionCount:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.collectionCount-a.collectionCount;
}
case clsTeachingCaseResCaseEN.con_RecommendedDegreeId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
return b.recommendedDegreeId.localeCompare(a.recommendedDegreeId);
}
case clsTeachingCaseResCaseEN.con_ftpFileType:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.ftpFileType == null) return -1;
if (a.ftpFileType == null) return 1;
return b.ftpFileType.localeCompare(a.ftpFileType);
}
case clsTeachingCaseResCaseEN.con_VideoUrl:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.videoUrl == null) return -1;
if (a.videoUrl == null) return 1;
return b.videoUrl.localeCompare(a.videoUrl);
}
case clsTeachingCaseResCaseEN.con_VideoPath:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.videoPath == null) return -1;
if (a.videoPath == null) return 1;
return b.videoPath.localeCompare(a.videoPath);
}
case clsTeachingCaseResCaseEN.con_ResErrMsg:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.resErrMsg == null) return -1;
if (a.resErrMsg == null) return 1;
return b.resErrMsg.localeCompare(a.resErrMsg);
}
case clsTeachingCaseResCaseEN.con_UpdDate:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsTeachingCaseResCaseEN.con_UpdUserId:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsTeachingCaseResCaseEN.con_Memo:
return (a: clsTeachingCaseResCaseEN, b: clsTeachingCaseResCaseEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingCaseResCase]中不存在!(in ${ teachingCaseResCase_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdTeachingCaseResCaseCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function TeachingCaseResCase_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCase:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idTeachingCaseResCase === value;
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseID:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.teachingCaseResCaseID === value;
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.teachingCaseResCaseName === value;
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTheme:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.teachingCaseResCaseTheme === value;
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseText:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.teachingCaseResCaseText === value;
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDate:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.teachingCaseResCaseDate === value;
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTime:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.teachingCaseResCaseTime === value;
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDateIn:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.teachingCaseResCaseDateIn === value;
}
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTimeIn:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.teachingCaseResCaseTimeIn === value;
}
case clsTeachingCaseResCaseEN.con_IdCaseType:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idCaseType === value;
}
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCaseType:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idTeachingCaseResCaseType === value;
}
case clsTeachingCaseResCaseEN.con_CourseId:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.courseId === value;
}
case clsTeachingCaseResCaseEN.con_OwnerId:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.ownerId === value;
}
case clsTeachingCaseResCaseEN.con_IdStudyLevel:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idStudyLevel === value;
}
case clsTeachingCaseResCaseEN.con_IdTeachingPlan:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idTeachingPlan === value;
}
case clsTeachingCaseResCaseEN.con_IdDiscipline:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idDiscipline === value;
}
case clsTeachingCaseResCaseEN.con_BrowseCount:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.browseCount === value;
}
case clsTeachingCaseResCaseEN.con_IdSenateGaugeVersion:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idSenateGaugeVersion === value;
}
case clsTeachingCaseResCaseEN.con_IdTeachSkill:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idTeachSkill === value;
}
case clsTeachingCaseResCaseEN.con_CaseLevelId:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.caseLevelId === value;
}
case clsTeachingCaseResCaseEN.con_DocFile:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.docFile === value;
}
case clsTeachingCaseResCaseEN.con_IsNeedGeneWord:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.isNeedGeneWord === value;
}
case clsTeachingCaseResCaseEN.con_WordCreateDate:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.wordCreateDate === value;
}
case clsTeachingCaseResCaseEN.con_IsVisible:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.isVisible === value;
}
case clsTeachingCaseResCaseEN.con_IsDualVideo:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.isDualVideo === value;
}
case clsTeachingCaseResCaseEN.con_IdXzCollege:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idXzCollege === value;
}
case clsTeachingCaseResCaseEN.con_IdXzMajor:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.idXzMajor === value;
}
case clsTeachingCaseResCaseEN.con_CourseChapterId:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.courseChapterId === value;
}
case clsTeachingCaseResCaseEN.con_ViewCount:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.viewCount === value;
}
case clsTeachingCaseResCaseEN.con_IsShow:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.isShow === value;
}
case clsTeachingCaseResCaseEN.con_DownloadNumber:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.downloadNumber === value;
}
case clsTeachingCaseResCaseEN.con_FileIntegration:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.fileIntegration === value;
}
case clsTeachingCaseResCaseEN.con_LikeCount:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.likeCount === value;
}
case clsTeachingCaseResCaseEN.con_CollectionCount:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.collectionCount === value;
}
case clsTeachingCaseResCaseEN.con_RecommendedDegreeId:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.recommendedDegreeId === value;
}
case clsTeachingCaseResCaseEN.con_ftpFileType:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.ftpFileType === value;
}
case clsTeachingCaseResCaseEN.con_VideoUrl:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.videoUrl === value;
}
case clsTeachingCaseResCaseEN.con_VideoPath:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.videoPath === value;
}
case clsTeachingCaseResCaseEN.con_ResErrMsg:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.resErrMsg === value;
}
case clsTeachingCaseResCaseEN.con_UpdDate:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.updDate === value;
}
case clsTeachingCaseResCaseEN.con_UpdUserId:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.updUserId === value;
}
case clsTeachingCaseResCaseEN.con_Memo:
return (obj: clsTeachingCaseResCaseEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeachingCaseResCase]中不存在!(in ${ teachingCaseResCase_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[TeachingCaseResCase__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeachingCaseResCase_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetFirstObjAsync(strWhereCond: string): Promise<clsTeachingCaseResCaseEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const objTeachingCaseResCase = TeachingCaseResCase_GetObjFromJsonObj(returnObj);
return objTeachingCaseResCase;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetObjLstAsync(strWhereCond: string): Promise<Array<clsTeachingCaseResCaseEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param arrIdTeachingCaseResCase:关键字列表
 * @returns 对象列表
 **/
export  async function TeachingCaseResCase_GetObjLstByIdTeachingCaseResCaseLstAsync(arrIdTeachingCaseResCase: Array<string>): Promise<Array<clsTeachingCaseResCaseEN>>  
{
const strThisFuncName = "GetObjLstByIdTeachingCaseResCaseLstAsync";
const strAction = "GetObjLstByIdTeachingCaseResCaseLst";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeachingCaseResCase, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdTeachingCaseResCaseLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function TeachingCaseResCase_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsTeachingCaseResCaseEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsTeachingCaseResCaseEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsTeachingCaseResCaseEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsTeachingCaseResCaseEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeachingCaseResCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param strIdTeachingCaseResCase:关键字
 * @returns 获取删除的结果
 **/
export  async function TeachingCaseResCase_DelRecordAsync(strIdTeachingCaseResCase: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdTeachingCaseResCase);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param arrIdTeachingCaseResCase:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function TeachingCaseResCase_DelTeachingCaseResCasesAsync(arrIdTeachingCaseResCase: Array<string>): Promise<number> 
{
const strThisFuncName = "DelTeachingCaseResCasesAsync";
const strAction = "DelTeachingCaseResCases";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeachingCaseResCase, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_DelTeachingCaseResCasesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelTeachingCaseResCasesByCondAsync";
const strAction = "DelTeachingCaseResCasesByCond";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function TeachingCaseResCase_AddNewRecordAsync(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objTeachingCaseResCaseEN);
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function TeachingCaseResCase_AddNewRecordWithMaxIdAsync(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_AddNewObjSave(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
TeachingCaseResCase_CheckPropertyNew(objTeachingCaseResCaseEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ teachingCaseResCase_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await TeachingCaseResCase_CheckUniCond4Add(objTeachingCaseResCaseEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await TeachingCaseResCase_AddNewRecordWithMaxIdAsync(objTeachingCaseResCaseEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//TeachingCaseResCase_ReFreshCache(objTeachingCaseResCaseEN.courseId);
}
else
{
const strInfo = `添加[教学案例资源案例(TeachingCaseResCase)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ teachingCaseResCase_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function TeachingCaseResCase_CheckUniCond4Add(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<boolean>{
const strUniquenessCondition = TeachingCaseResCase_GetUniCondStr(objTeachingCaseResCaseEN);
const bolIsExistCondition = await TeachingCaseResCase_IsExistRecordAsync(strUniquenessCondition);
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
export  async function TeachingCaseResCase_CheckUniCond4Update(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<boolean>{
const strUniquenessCondition = TeachingCaseResCase_GetUniCondStr4Update(objTeachingCaseResCaseEN);
const bolIsExistCondition = await TeachingCaseResCase_IsExistRecordAsync(strUniquenessCondition);
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
export  async function TeachingCaseResCase_UpdateObjSave(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objTeachingCaseResCaseEN.sfUpdFldSetStr = objTeachingCaseResCaseEN.updFldString;//设置哪些字段被修改(脏字段)
if (objTeachingCaseResCaseEN.idTeachingCaseResCase == "" || objTeachingCaseResCaseEN.idTeachingCaseResCase == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
TeachingCaseResCase_CheckProperty4Update(objTeachingCaseResCaseEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ teachingCaseResCase_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await TeachingCaseResCase_CheckUniCond4Update(objTeachingCaseResCaseEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await TeachingCaseResCase_UpdateRecordAsync(objTeachingCaseResCaseEN);
if (returnBool == true)
{
//TeachingCaseResCase_ReFreshCache(objTeachingCaseResCaseEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ teachingCaseResCase_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objTeachingCaseResCaseEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function TeachingCaseResCase_AddNewRecordWithReturnKeyAsync(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function TeachingCaseResCase_UpdateRecordAsync(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objTeachingCaseResCaseEN.sfUpdFldSetStr === undefined || objTeachingCaseResCaseEN.sfUpdFldSetStr === null || objTeachingCaseResCaseEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingCaseResCaseEN.idTeachingCaseResCase);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function TeachingCaseResCase_EditRecordExAsync(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objTeachingCaseResCaseEN.sfUpdFldSetStr === undefined || objTeachingCaseResCaseEN.sfUpdFldSetStr === null || objTeachingCaseResCaseEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingCaseResCaseEN.idTeachingCaseResCase);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param objTeachingCaseResCaseEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeachingCaseResCase_UpdateWithConditionAsync(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objTeachingCaseResCaseEN.sfUpdFldSetStr === undefined || objTeachingCaseResCaseEN.sfUpdFldSetStr === null || objTeachingCaseResCaseEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeachingCaseResCaseEN.idTeachingCaseResCase);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);
objTeachingCaseResCaseEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeachingCaseResCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
 * @param strIdTeachingCaseResCase:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function TeachingCaseResCase_IsExistAsync(strIdTeachingCaseResCase: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeachingCaseResCase
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  async function TeachingCaseResCase_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(teachingCaseResCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teachingCaseResCase_ConstructorName, strThisFuncName);
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
export  function TeachingCaseResCase_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function TeachingCaseResCase_CheckPropertyNew(pobjTeachingCaseResCaseEN: clsTeachingCaseResCaseEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学案例资源案例ID]不能为空(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学案例资源案例名称]不能为空(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idCaseType) === true 
 || pobjTeachingCaseResCaseEN.idCaseType.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[案例类型流水号]不能为空(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学案例资源类型流水号]不能为空(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseId) === true 
 || pobjTeachingCaseResCaseEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzCollege) === true 
 || pobjTeachingCaseResCaseEN.idXzCollege.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学院流水号]不能为空(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.recommendedDegreeId) === true 
 || pobjTeachingCaseResCaseEN.recommendedDegreeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[推荐度Id]不能为空(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCase) == false && GetStrLen(pobjTeachingCaseResCaseEN.idTeachingCaseResCase) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学案例资源案例流水号(idTeachingCaseResCase)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idTeachingCaseResCase}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学案例资源案例ID(teachingCaseResCaseID)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseID}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[教学案例资源案例名称(teachingCaseResCaseName)]的长度不能超过100(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseName}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme) > 200)
{
 throw new Error(`(errid:Watl000413)字段[教学案例资源案例主题词(teachingCaseResCaseTheme)]的长度不能超过200(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseText) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseText) > 8000)
{
 throw new Error(`(errid:Watl000413)字段[案例文本内容(teachingCaseResCaseText)]的长度不能超过8000(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseText}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseDate) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[视频资源日期(teachingCaseResCaseDate)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseDate}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTime) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseTime) > 6)
{
 throw new Error(`(errid:Watl000413)字段[视频资源时间(teachingCaseResCaseTime)]的长度不能超过6(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseTime}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn) > 8)
{
 throw new Error(`(errid:Watl000413)字段[案例入库日期(teachingCaseResCaseDateIn)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn) > 6)
{
 throw new Error(`(errid:Watl000413)字段[案例入库时间(teachingCaseResCaseTimeIn)]的长度不能超过6(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idCaseType) == false && GetStrLen(pobjTeachingCaseResCaseEN.idCaseType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[案例类型流水号(idCaseType)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idCaseType}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) == false && GetStrLen(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[教学案例资源类型流水号(idTeachingCaseResCaseType)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseId) == false && GetStrLen(pobjTeachingCaseResCaseEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.courseId}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.ownerId) == false && GetStrLen(pobjTeachingCaseResCaseEN.ownerId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[拥有者Id(ownerId)]的长度不能超过20(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.ownerId}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idStudyLevel) == false && GetStrLen(pobjTeachingCaseResCaseEN.idStudyLevel) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学段流水号(idStudyLevel)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idStudyLevel}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingPlan) == false && GetStrLen(pobjTeachingCaseResCaseEN.idTeachingPlan) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教案流水号(idTeachingPlan)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idTeachingPlan}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idDiscipline) == false && GetStrLen(pobjTeachingCaseResCaseEN.idDiscipline) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学科流水号(idDiscipline)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idDiscipline}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) == false && GetStrLen(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) > 4)
{
 throw new Error(`(errid:Watl000413)字段[评价量表版本流水号(idSenateGaugeVersion)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idSenateGaugeVersion}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachSkill) == false && GetStrLen(pobjTeachingCaseResCaseEN.idTeachSkill) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学技能流水号(idTeachSkill)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idTeachSkill}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.caseLevelId) == false && GetStrLen(pobjTeachingCaseResCaseEN.caseLevelId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[课例等级Id(caseLevelId)]的长度不能超过2(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.caseLevelId}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.docFile) == false && GetStrLen(pobjTeachingCaseResCaseEN.docFile) > 200)
{
 throw new Error(`(errid:Watl000413)字段[生成的Word文件名(docFile)]的长度不能超过200(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.docFile}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.wordCreateDate) == false && GetStrLen(pobjTeachingCaseResCaseEN.wordCreateDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[Word生成日期(wordCreateDate)]的长度不能超过14(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.wordCreateDate}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzCollege) == false && GetStrLen(pobjTeachingCaseResCaseEN.idXzCollege) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学院流水号(idXzCollege)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idXzCollege}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzMajor) == false && GetStrLen(pobjTeachingCaseResCaseEN.idXzMajor) > 8)
{
 throw new Error(`(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idXzMajor}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseChapterId) == false && GetStrLen(pobjTeachingCaseResCaseEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.courseChapterId}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.recommendedDegreeId) == false && GetStrLen(pobjTeachingCaseResCaseEN.recommendedDegreeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[推荐度Id(recommendedDegreeId)]的长度不能超过2(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.recommendedDegreeId}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.ftpFileType) == false && GetStrLen(pobjTeachingCaseResCaseEN.ftpFileType) > 30)
{
 throw new Error(`(errid:Watl000413)字段[ftp文件类型(ftpFileType)]的长度不能超过30(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.ftpFileType}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.videoUrl) == false && GetStrLen(pobjTeachingCaseResCaseEN.videoUrl) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[视频Url(videoUrl)]的长度不能超过1000(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.videoUrl}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.videoPath) == false && GetStrLen(pobjTeachingCaseResCaseEN.videoPath) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[视频目录(videoPath)]的长度不能超过1000(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.videoPath}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.resErrMsg) == false && GetStrLen(pobjTeachingCaseResCaseEN.resErrMsg) > 30)
{
 throw new Error(`(errid:Watl000413)字段[资源错误信息(resErrMsg)]的长度不能超过30(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.resErrMsg}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.updDate) == false && GetStrLen(pobjTeachingCaseResCaseEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.updDate}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.updUserId) == false && GetStrLen(pobjTeachingCaseResCaseEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.updUserId}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.memo) == false && GetStrLen(pobjTeachingCaseResCaseEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.memo}(clsTeachingCaseResCaseBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCase) == false && undefined !== pobjTeachingCaseResCaseEN.idTeachingCaseResCase && tzDataType.isString(pobjTeachingCaseResCaseEN.idTeachingCaseResCase) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学案例资源案例流水号(idTeachingCaseResCase)]的值:[${pobjTeachingCaseResCaseEN.idTeachingCaseResCase}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseID && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学案例资源案例ID(teachingCaseResCaseID)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseID}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseName && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学案例资源案例名称(teachingCaseResCaseName)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseName}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学案例资源案例主题词(teachingCaseResCaseTheme)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseText) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseText && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseText) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例文本内容(teachingCaseResCaseText)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseText}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseDate) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseDate && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[视频资源日期(teachingCaseResCaseDate)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseDate}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTime) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseTime && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[视频资源时间(teachingCaseResCaseTime)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseTime}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例入库日期(teachingCaseResCaseDateIn)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例入库时间(teachingCaseResCaseTimeIn)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idCaseType) == false && undefined !== pobjTeachingCaseResCaseEN.idCaseType && tzDataType.isString(pobjTeachingCaseResCaseEN.idCaseType) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例类型流水号(idCaseType)]的值:[${pobjTeachingCaseResCaseEN.idCaseType}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) == false && undefined !== pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType && tzDataType.isString(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学案例资源类型流水号(idTeachingCaseResCaseType)]的值:[${pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseId) == false && undefined !== pobjTeachingCaseResCaseEN.courseId && tzDataType.isString(pobjTeachingCaseResCaseEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjTeachingCaseResCaseEN.courseId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.ownerId) == false && undefined !== pobjTeachingCaseResCaseEN.ownerId && tzDataType.isString(pobjTeachingCaseResCaseEN.ownerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[拥有者Id(ownerId)]的值:[${pobjTeachingCaseResCaseEN.ownerId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idStudyLevel) == false && undefined !== pobjTeachingCaseResCaseEN.idStudyLevel && tzDataType.isString(pobjTeachingCaseResCaseEN.idStudyLevel) === false)
{
 throw new Error(`(errid:Watl000414)字段[学段流水号(idStudyLevel)]的值:[${pobjTeachingCaseResCaseEN.idStudyLevel}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingPlan) == false && undefined !== pobjTeachingCaseResCaseEN.idTeachingPlan && tzDataType.isString(pobjTeachingCaseResCaseEN.idTeachingPlan) === false)
{
 throw new Error(`(errid:Watl000414)字段[教案流水号(idTeachingPlan)]的值:[${pobjTeachingCaseResCaseEN.idTeachingPlan}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idDiscipline) == false && undefined !== pobjTeachingCaseResCaseEN.idDiscipline && tzDataType.isString(pobjTeachingCaseResCaseEN.idDiscipline) === false)
{
 throw new Error(`(errid:Watl000414)字段[学科流水号(idDiscipline)]的值:[${pobjTeachingCaseResCaseEN.idDiscipline}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.browseCount && undefined !== pobjTeachingCaseResCaseEN.browseCount && tzDataType.isNumber(pobjTeachingCaseResCaseEN.browseCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[浏览次数(browseCount)]的值:[${pobjTeachingCaseResCaseEN.browseCount}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) == false && undefined !== pobjTeachingCaseResCaseEN.idSenateGaugeVersion && tzDataType.isString(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) === false)
{
 throw new Error(`(errid:Watl000414)字段[评价量表版本流水号(idSenateGaugeVersion)]的值:[${pobjTeachingCaseResCaseEN.idSenateGaugeVersion}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachSkill) == false && undefined !== pobjTeachingCaseResCaseEN.idTeachSkill && tzDataType.isString(pobjTeachingCaseResCaseEN.idTeachSkill) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学技能流水号(idTeachSkill)]的值:[${pobjTeachingCaseResCaseEN.idTeachSkill}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.caseLevelId) == false && undefined !== pobjTeachingCaseResCaseEN.caseLevelId && tzDataType.isString(pobjTeachingCaseResCaseEN.caseLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课例等级Id(caseLevelId)]的值:[${pobjTeachingCaseResCaseEN.caseLevelId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.docFile) == false && undefined !== pobjTeachingCaseResCaseEN.docFile && tzDataType.isString(pobjTeachingCaseResCaseEN.docFile) === false)
{
 throw new Error(`(errid:Watl000414)字段[生成的Word文件名(docFile)]的值:[${pobjTeachingCaseResCaseEN.docFile}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.isNeedGeneWord && undefined !== pobjTeachingCaseResCaseEN.isNeedGeneWord && tzDataType.isBoolean(pobjTeachingCaseResCaseEN.isNeedGeneWord) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否需要生成Word(isNeedGeneWord)]的值:[${pobjTeachingCaseResCaseEN.isNeedGeneWord}], 非法,应该为布尔型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.wordCreateDate) == false && undefined !== pobjTeachingCaseResCaseEN.wordCreateDate && tzDataType.isString(pobjTeachingCaseResCaseEN.wordCreateDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[Word生成日期(wordCreateDate)]的值:[${pobjTeachingCaseResCaseEN.wordCreateDate}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.isVisible && undefined !== pobjTeachingCaseResCaseEN.isVisible && tzDataType.isBoolean(pobjTeachingCaseResCaseEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjTeachingCaseResCaseEN.isVisible}], 非法,应该为布尔型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.isDualVideo && undefined !== pobjTeachingCaseResCaseEN.isDualVideo && tzDataType.isBoolean(pobjTeachingCaseResCaseEN.isDualVideo) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否双视频(isDualVideo)]的值:[${pobjTeachingCaseResCaseEN.isDualVideo}], 非法,应该为布尔型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzCollege) == false && undefined !== pobjTeachingCaseResCaseEN.idXzCollege && tzDataType.isString(pobjTeachingCaseResCaseEN.idXzCollege) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院流水号(idXzCollege)]的值:[${pobjTeachingCaseResCaseEN.idXzCollege}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzMajor) == false && undefined !== pobjTeachingCaseResCaseEN.idXzMajor && tzDataType.isString(pobjTeachingCaseResCaseEN.idXzMajor) === false)
{
 throw new Error(`(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[${pobjTeachingCaseResCaseEN.idXzMajor}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseChapterId) == false && undefined !== pobjTeachingCaseResCaseEN.courseChapterId && tzDataType.isString(pobjTeachingCaseResCaseEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程章节ID(courseChapterId)]的值:[${pobjTeachingCaseResCaseEN.courseChapterId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.viewCount && undefined !== pobjTeachingCaseResCaseEN.viewCount && tzDataType.isNumber(pobjTeachingCaseResCaseEN.viewCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[浏览量(viewCount)]的值:[${pobjTeachingCaseResCaseEN.viewCount}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.isShow && undefined !== pobjTeachingCaseResCaseEN.isShow && tzDataType.isBoolean(pobjTeachingCaseResCaseEN.isShow) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否启用(isShow)]的值:[${pobjTeachingCaseResCaseEN.isShow}], 非法,应该为布尔型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.downloadNumber && undefined !== pobjTeachingCaseResCaseEN.downloadNumber && tzDataType.isNumber(pobjTeachingCaseResCaseEN.downloadNumber) === false)
{
 throw new Error(`(errid:Watl000414)字段[下载数目(downloadNumber)]的值:[${pobjTeachingCaseResCaseEN.downloadNumber}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.fileIntegration && undefined !== pobjTeachingCaseResCaseEN.fileIntegration && tzDataType.isNumber(pobjTeachingCaseResCaseEN.fileIntegration) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件积分(fileIntegration)]的值:[${pobjTeachingCaseResCaseEN.fileIntegration}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.likeCount && undefined !== pobjTeachingCaseResCaseEN.likeCount && tzDataType.isNumber(pobjTeachingCaseResCaseEN.likeCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源喜欢数量(likeCount)]的值:[${pobjTeachingCaseResCaseEN.likeCount}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (null != pobjTeachingCaseResCaseEN.collectionCount && undefined !== pobjTeachingCaseResCaseEN.collectionCount && tzDataType.isNumber(pobjTeachingCaseResCaseEN.collectionCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[收藏数量(collectionCount)]的值:[${pobjTeachingCaseResCaseEN.collectionCount}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.recommendedDegreeId) == false && undefined !== pobjTeachingCaseResCaseEN.recommendedDegreeId && tzDataType.isString(pobjTeachingCaseResCaseEN.recommendedDegreeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[推荐度Id(recommendedDegreeId)]的值:[${pobjTeachingCaseResCaseEN.recommendedDegreeId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.ftpFileType) == false && undefined !== pobjTeachingCaseResCaseEN.ftpFileType && tzDataType.isString(pobjTeachingCaseResCaseEN.ftpFileType) === false)
{
 throw new Error(`(errid:Watl000414)字段[ftp文件类型(ftpFileType)]的值:[${pobjTeachingCaseResCaseEN.ftpFileType}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.videoUrl) == false && undefined !== pobjTeachingCaseResCaseEN.videoUrl && tzDataType.isString(pobjTeachingCaseResCaseEN.videoUrl) === false)
{
 throw new Error(`(errid:Watl000414)字段[视频Url(videoUrl)]的值:[${pobjTeachingCaseResCaseEN.videoUrl}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.videoPath) == false && undefined !== pobjTeachingCaseResCaseEN.videoPath && tzDataType.isString(pobjTeachingCaseResCaseEN.videoPath) === false)
{
 throw new Error(`(errid:Watl000414)字段[视频目录(videoPath)]的值:[${pobjTeachingCaseResCaseEN.videoPath}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.resErrMsg) == false && undefined !== pobjTeachingCaseResCaseEN.resErrMsg && tzDataType.isString(pobjTeachingCaseResCaseEN.resErrMsg) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源错误信息(resErrMsg)]的值:[${pobjTeachingCaseResCaseEN.resErrMsg}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.updDate) == false && undefined !== pobjTeachingCaseResCaseEN.updDate && tzDataType.isString(pobjTeachingCaseResCaseEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjTeachingCaseResCaseEN.updDate}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.updUserId) == false && undefined !== pobjTeachingCaseResCaseEN.updUserId && tzDataType.isString(pobjTeachingCaseResCaseEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjTeachingCaseResCaseEN.updUserId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.memo) == false && undefined !== pobjTeachingCaseResCaseEN.memo && tzDataType.isString(pobjTeachingCaseResCaseEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjTeachingCaseResCaseEN.memo}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseId) == false && pobjTeachingCaseResCaseEN.courseId != '[nuull]' && GetStrLen(pobjTeachingCaseResCaseEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idStudyLevel) == false && pobjTeachingCaseResCaseEN.idStudyLevel != '[nuull]' && GetStrLen(pobjTeachingCaseResCaseEN.idStudyLevel) !=  4)
{
 throw ("(errid:Watl000415)字段[学段流水号]作为外键字段,长度应该为4(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) == false && pobjTeachingCaseResCaseEN.idSenateGaugeVersion != '[nuull]' && GetStrLen(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) !=  4)
{
 throw ("(errid:Watl000415)字段[评价量表版本流水号]作为外键字段,长度应该为4(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function TeachingCaseResCase_CheckProperty4Update(pobjTeachingCaseResCaseEN: clsTeachingCaseResCaseEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCase) == false && GetStrLen(pobjTeachingCaseResCaseEN.idTeachingCaseResCase) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学案例资源案例流水号(idTeachingCaseResCase)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idTeachingCaseResCase}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学案例资源案例ID(teachingCaseResCaseID)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseID}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[教学案例资源案例名称(teachingCaseResCaseName)]的长度不能超过100(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseName}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme) > 200)
{
 throw new Error(`(errid:Watl000416)字段[教学案例资源案例主题词(teachingCaseResCaseTheme)]的长度不能超过200(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseText) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseText) > 8000)
{
 throw new Error(`(errid:Watl000416)字段[案例文本内容(teachingCaseResCaseText)]的长度不能超过8000(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseText}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseDate) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[视频资源日期(teachingCaseResCaseDate)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseDate}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTime) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseTime) > 6)
{
 throw new Error(`(errid:Watl000416)字段[视频资源时间(teachingCaseResCaseTime)]的长度不能超过6(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseTime}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn) > 8)
{
 throw new Error(`(errid:Watl000416)字段[案例入库日期(teachingCaseResCaseDateIn)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn) == false && GetStrLen(pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn) > 6)
{
 throw new Error(`(errid:Watl000416)字段[案例入库时间(teachingCaseResCaseTimeIn)]的长度不能超过6(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idCaseType) == false && GetStrLen(pobjTeachingCaseResCaseEN.idCaseType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[案例类型流水号(idCaseType)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idCaseType}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) == false && GetStrLen(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[教学案例资源类型流水号(idTeachingCaseResCaseType)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseId) == false && GetStrLen(pobjTeachingCaseResCaseEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.courseId}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.ownerId) == false && GetStrLen(pobjTeachingCaseResCaseEN.ownerId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[拥有者Id(ownerId)]的长度不能超过20(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.ownerId}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idStudyLevel) == false && GetStrLen(pobjTeachingCaseResCaseEN.idStudyLevel) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学段流水号(idStudyLevel)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idStudyLevel}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingPlan) == false && GetStrLen(pobjTeachingCaseResCaseEN.idTeachingPlan) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教案流水号(idTeachingPlan)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idTeachingPlan}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idDiscipline) == false && GetStrLen(pobjTeachingCaseResCaseEN.idDiscipline) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学科流水号(idDiscipline)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idDiscipline}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) == false && GetStrLen(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) > 4)
{
 throw new Error(`(errid:Watl000416)字段[评价量表版本流水号(idSenateGaugeVersion)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idSenateGaugeVersion}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachSkill) == false && GetStrLen(pobjTeachingCaseResCaseEN.idTeachSkill) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学技能流水号(idTeachSkill)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idTeachSkill}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.caseLevelId) == false && GetStrLen(pobjTeachingCaseResCaseEN.caseLevelId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[课例等级Id(caseLevelId)]的长度不能超过2(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.caseLevelId}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.docFile) == false && GetStrLen(pobjTeachingCaseResCaseEN.docFile) > 200)
{
 throw new Error(`(errid:Watl000416)字段[生成的Word文件名(docFile)]的长度不能超过200(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.docFile}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.wordCreateDate) == false && GetStrLen(pobjTeachingCaseResCaseEN.wordCreateDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[Word生成日期(wordCreateDate)]的长度不能超过14(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.wordCreateDate}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzCollege) == false && GetStrLen(pobjTeachingCaseResCaseEN.idXzCollege) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学院流水号(idXzCollege)]的长度不能超过4(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idXzCollege}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzMajor) == false && GetStrLen(pobjTeachingCaseResCaseEN.idXzMajor) > 8)
{
 throw new Error(`(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.idXzMajor}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseChapterId) == false && GetStrLen(pobjTeachingCaseResCaseEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.courseChapterId}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.recommendedDegreeId) == false && GetStrLen(pobjTeachingCaseResCaseEN.recommendedDegreeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[推荐度Id(recommendedDegreeId)]的长度不能超过2(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.recommendedDegreeId}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.ftpFileType) == false && GetStrLen(pobjTeachingCaseResCaseEN.ftpFileType) > 30)
{
 throw new Error(`(errid:Watl000416)字段[ftp文件类型(ftpFileType)]的长度不能超过30(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.ftpFileType}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.videoUrl) == false && GetStrLen(pobjTeachingCaseResCaseEN.videoUrl) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[视频Url(videoUrl)]的长度不能超过1000(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.videoUrl}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.videoPath) == false && GetStrLen(pobjTeachingCaseResCaseEN.videoPath) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[视频目录(videoPath)]的长度不能超过1000(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.videoPath}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.resErrMsg) == false && GetStrLen(pobjTeachingCaseResCaseEN.resErrMsg) > 30)
{
 throw new Error(`(errid:Watl000416)字段[资源错误信息(resErrMsg)]的长度不能超过30(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.resErrMsg}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.updDate) == false && GetStrLen(pobjTeachingCaseResCaseEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.updDate}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.updUserId) == false && GetStrLen(pobjTeachingCaseResCaseEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.updUserId}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.memo) == false && GetStrLen(pobjTeachingCaseResCaseEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学案例资源案例(TeachingCaseResCase))!值:${pobjTeachingCaseResCaseEN.memo}(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCase) == false && undefined !== pobjTeachingCaseResCaseEN.idTeachingCaseResCase && tzDataType.isString(pobjTeachingCaseResCaseEN.idTeachingCaseResCase) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学案例资源案例流水号(idTeachingCaseResCase)]的值:[${pobjTeachingCaseResCaseEN.idTeachingCaseResCase}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseID && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseID) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学案例资源案例ID(teachingCaseResCaseID)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseID}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseName && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseName) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学案例资源案例名称(teachingCaseResCaseName)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseName}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学案例资源案例主题词(teachingCaseResCaseTheme)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseTheme}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseText) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseText && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseText) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例文本内容(teachingCaseResCaseText)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseText}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseDate) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseDate && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[视频资源日期(teachingCaseResCaseDate)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseDate}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTime) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseTime && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[视频资源时间(teachingCaseResCaseTime)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseTime}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例入库日期(teachingCaseResCaseDateIn)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseDateIn}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn) == false && undefined !== pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn && tzDataType.isString(pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例入库时间(teachingCaseResCaseTimeIn)]的值:[${pobjTeachingCaseResCaseEN.teachingCaseResCaseTimeIn}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idCaseType) == false && undefined !== pobjTeachingCaseResCaseEN.idCaseType && tzDataType.isString(pobjTeachingCaseResCaseEN.idCaseType) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例类型流水号(idCaseType)]的值:[${pobjTeachingCaseResCaseEN.idCaseType}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) == false && undefined !== pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType && tzDataType.isString(pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学案例资源类型流水号(idTeachingCaseResCaseType)]的值:[${pobjTeachingCaseResCaseEN.idTeachingCaseResCaseType}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseId) == false && undefined !== pobjTeachingCaseResCaseEN.courseId && tzDataType.isString(pobjTeachingCaseResCaseEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjTeachingCaseResCaseEN.courseId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.ownerId) == false && undefined !== pobjTeachingCaseResCaseEN.ownerId && tzDataType.isString(pobjTeachingCaseResCaseEN.ownerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[拥有者Id(ownerId)]的值:[${pobjTeachingCaseResCaseEN.ownerId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idStudyLevel) == false && undefined !== pobjTeachingCaseResCaseEN.idStudyLevel && tzDataType.isString(pobjTeachingCaseResCaseEN.idStudyLevel) === false)
{
 throw new Error(`(errid:Watl000417)字段[学段流水号(idStudyLevel)]的值:[${pobjTeachingCaseResCaseEN.idStudyLevel}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachingPlan) == false && undefined !== pobjTeachingCaseResCaseEN.idTeachingPlan && tzDataType.isString(pobjTeachingCaseResCaseEN.idTeachingPlan) === false)
{
 throw new Error(`(errid:Watl000417)字段[教案流水号(idTeachingPlan)]的值:[${pobjTeachingCaseResCaseEN.idTeachingPlan}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idDiscipline) == false && undefined !== pobjTeachingCaseResCaseEN.idDiscipline && tzDataType.isString(pobjTeachingCaseResCaseEN.idDiscipline) === false)
{
 throw new Error(`(errid:Watl000417)字段[学科流水号(idDiscipline)]的值:[${pobjTeachingCaseResCaseEN.idDiscipline}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.browseCount && undefined !== pobjTeachingCaseResCaseEN.browseCount && tzDataType.isNumber(pobjTeachingCaseResCaseEN.browseCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[浏览次数(browseCount)]的值:[${pobjTeachingCaseResCaseEN.browseCount}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) == false && undefined !== pobjTeachingCaseResCaseEN.idSenateGaugeVersion && tzDataType.isString(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) === false)
{
 throw new Error(`(errid:Watl000417)字段[评价量表版本流水号(idSenateGaugeVersion)]的值:[${pobjTeachingCaseResCaseEN.idSenateGaugeVersion}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idTeachSkill) == false && undefined !== pobjTeachingCaseResCaseEN.idTeachSkill && tzDataType.isString(pobjTeachingCaseResCaseEN.idTeachSkill) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学技能流水号(idTeachSkill)]的值:[${pobjTeachingCaseResCaseEN.idTeachSkill}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.caseLevelId) == false && undefined !== pobjTeachingCaseResCaseEN.caseLevelId && tzDataType.isString(pobjTeachingCaseResCaseEN.caseLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课例等级Id(caseLevelId)]的值:[${pobjTeachingCaseResCaseEN.caseLevelId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.docFile) == false && undefined !== pobjTeachingCaseResCaseEN.docFile && tzDataType.isString(pobjTeachingCaseResCaseEN.docFile) === false)
{
 throw new Error(`(errid:Watl000417)字段[生成的Word文件名(docFile)]的值:[${pobjTeachingCaseResCaseEN.docFile}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.isNeedGeneWord && undefined !== pobjTeachingCaseResCaseEN.isNeedGeneWord && tzDataType.isBoolean(pobjTeachingCaseResCaseEN.isNeedGeneWord) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否需要生成Word(isNeedGeneWord)]的值:[${pobjTeachingCaseResCaseEN.isNeedGeneWord}], 非法,应该为布尔型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.wordCreateDate) == false && undefined !== pobjTeachingCaseResCaseEN.wordCreateDate && tzDataType.isString(pobjTeachingCaseResCaseEN.wordCreateDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[Word生成日期(wordCreateDate)]的值:[${pobjTeachingCaseResCaseEN.wordCreateDate}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.isVisible && undefined !== pobjTeachingCaseResCaseEN.isVisible && tzDataType.isBoolean(pobjTeachingCaseResCaseEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjTeachingCaseResCaseEN.isVisible}], 非法,应该为布尔型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.isDualVideo && undefined !== pobjTeachingCaseResCaseEN.isDualVideo && tzDataType.isBoolean(pobjTeachingCaseResCaseEN.isDualVideo) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否双视频(isDualVideo)]的值:[${pobjTeachingCaseResCaseEN.isDualVideo}], 非法,应该为布尔型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzCollege) == false && undefined !== pobjTeachingCaseResCaseEN.idXzCollege && tzDataType.isString(pobjTeachingCaseResCaseEN.idXzCollege) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院流水号(idXzCollege)]的值:[${pobjTeachingCaseResCaseEN.idXzCollege}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idXzMajor) == false && undefined !== pobjTeachingCaseResCaseEN.idXzMajor && tzDataType.isString(pobjTeachingCaseResCaseEN.idXzMajor) === false)
{
 throw new Error(`(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[${pobjTeachingCaseResCaseEN.idXzMajor}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseChapterId) == false && undefined !== pobjTeachingCaseResCaseEN.courseChapterId && tzDataType.isString(pobjTeachingCaseResCaseEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程章节ID(courseChapterId)]的值:[${pobjTeachingCaseResCaseEN.courseChapterId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.viewCount && undefined !== pobjTeachingCaseResCaseEN.viewCount && tzDataType.isNumber(pobjTeachingCaseResCaseEN.viewCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[浏览量(viewCount)]的值:[${pobjTeachingCaseResCaseEN.viewCount}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.isShow && undefined !== pobjTeachingCaseResCaseEN.isShow && tzDataType.isBoolean(pobjTeachingCaseResCaseEN.isShow) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否启用(isShow)]的值:[${pobjTeachingCaseResCaseEN.isShow}], 非法,应该为布尔型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.downloadNumber && undefined !== pobjTeachingCaseResCaseEN.downloadNumber && tzDataType.isNumber(pobjTeachingCaseResCaseEN.downloadNumber) === false)
{
 throw new Error(`(errid:Watl000417)字段[下载数目(downloadNumber)]的值:[${pobjTeachingCaseResCaseEN.downloadNumber}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.fileIntegration && undefined !== pobjTeachingCaseResCaseEN.fileIntegration && tzDataType.isNumber(pobjTeachingCaseResCaseEN.fileIntegration) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件积分(fileIntegration)]的值:[${pobjTeachingCaseResCaseEN.fileIntegration}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.likeCount && undefined !== pobjTeachingCaseResCaseEN.likeCount && tzDataType.isNumber(pobjTeachingCaseResCaseEN.likeCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源喜欢数量(likeCount)]的值:[${pobjTeachingCaseResCaseEN.likeCount}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (null != pobjTeachingCaseResCaseEN.collectionCount && undefined !== pobjTeachingCaseResCaseEN.collectionCount && tzDataType.isNumber(pobjTeachingCaseResCaseEN.collectionCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[收藏数量(collectionCount)]的值:[${pobjTeachingCaseResCaseEN.collectionCount}], 非法,应该为数值型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.recommendedDegreeId) == false && undefined !== pobjTeachingCaseResCaseEN.recommendedDegreeId && tzDataType.isString(pobjTeachingCaseResCaseEN.recommendedDegreeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[推荐度Id(recommendedDegreeId)]的值:[${pobjTeachingCaseResCaseEN.recommendedDegreeId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.ftpFileType) == false && undefined !== pobjTeachingCaseResCaseEN.ftpFileType && tzDataType.isString(pobjTeachingCaseResCaseEN.ftpFileType) === false)
{
 throw new Error(`(errid:Watl000417)字段[ftp文件类型(ftpFileType)]的值:[${pobjTeachingCaseResCaseEN.ftpFileType}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.videoUrl) == false && undefined !== pobjTeachingCaseResCaseEN.videoUrl && tzDataType.isString(pobjTeachingCaseResCaseEN.videoUrl) === false)
{
 throw new Error(`(errid:Watl000417)字段[视频Url(videoUrl)]的值:[${pobjTeachingCaseResCaseEN.videoUrl}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.videoPath) == false && undefined !== pobjTeachingCaseResCaseEN.videoPath && tzDataType.isString(pobjTeachingCaseResCaseEN.videoPath) === false)
{
 throw new Error(`(errid:Watl000417)字段[视频目录(videoPath)]的值:[${pobjTeachingCaseResCaseEN.videoPath}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.resErrMsg) == false && undefined !== pobjTeachingCaseResCaseEN.resErrMsg && tzDataType.isString(pobjTeachingCaseResCaseEN.resErrMsg) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源错误信息(resErrMsg)]的值:[${pobjTeachingCaseResCaseEN.resErrMsg}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.updDate) == false && undefined !== pobjTeachingCaseResCaseEN.updDate && tzDataType.isString(pobjTeachingCaseResCaseEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjTeachingCaseResCaseEN.updDate}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.updUserId) == false && undefined !== pobjTeachingCaseResCaseEN.updUserId && tzDataType.isString(pobjTeachingCaseResCaseEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjTeachingCaseResCaseEN.updUserId}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.memo) == false && undefined !== pobjTeachingCaseResCaseEN.memo && tzDataType.isString(pobjTeachingCaseResCaseEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjTeachingCaseResCaseEN.memo}], 非法,应该为字符型(In 教学案例资源案例(TeachingCaseResCase))!(clsTeachingCaseResCaseBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.courseId) == false && pobjTeachingCaseResCaseEN.courseId != '[nuull]' && GetStrLen(pobjTeachingCaseResCaseEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idStudyLevel) == false && pobjTeachingCaseResCaseEN.idStudyLevel != '[nuull]' && GetStrLen(pobjTeachingCaseResCaseEN.idStudyLevel) !=  4)
{
 throw ("(errid:Watl000418)字段[学段流水号]作为外键字段,长度应该为4(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) == false && pobjTeachingCaseResCaseEN.idSenateGaugeVersion != '[nuull]' && GetStrLen(pobjTeachingCaseResCaseEN.idSenateGaugeVersion) !=  4)
{
 throw ("(errid:Watl000418)字段[评价量表版本流水号]作为外键字段,长度应该为4(In 教学案例资源案例)!(clsTeachingCaseResCaseBL:CheckPropertyNew)");
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
export  function TeachingCaseResCase_GetJSONStrByObj (pobjTeachingCaseResCaseEN: clsTeachingCaseResCaseEN): string
{
pobjTeachingCaseResCaseEN.sfUpdFldSetStr = pobjTeachingCaseResCaseEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjTeachingCaseResCaseEN);
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
export  function TeachingCaseResCase_GetObjLstByJSONStr (strJSON: string): Array<clsTeachingCaseResCaseEN>
{
let arrTeachingCaseResCaseObjLst = new Array<clsTeachingCaseResCaseEN>();
if (strJSON === "")
{
return arrTeachingCaseResCaseObjLst;
}
try
{
arrTeachingCaseResCaseObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrTeachingCaseResCaseObjLst;
}
return arrTeachingCaseResCaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTeachingCaseResCaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function TeachingCaseResCase_GetObjLstByJSONObjLst (arrTeachingCaseResCaseObjLstS: Array<clsTeachingCaseResCaseEN>): Array<clsTeachingCaseResCaseEN>
{
const arrTeachingCaseResCaseObjLst = new Array<clsTeachingCaseResCaseEN>();
for (const objInFor of arrTeachingCaseResCaseObjLstS) {
const obj1 = TeachingCaseResCase_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrTeachingCaseResCaseObjLst.push(obj1);
}
return arrTeachingCaseResCaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function TeachingCaseResCase_GetObjByJSONStr (strJSON: string): clsTeachingCaseResCaseEN
{
let pobjTeachingCaseResCaseEN = new clsTeachingCaseResCaseEN();
if (strJSON === "")
{
return pobjTeachingCaseResCaseEN;
}
try
{
pobjTeachingCaseResCaseEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjTeachingCaseResCaseEN;
}
return pobjTeachingCaseResCaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function TeachingCaseResCase_GetCombineCondition(objTeachingCaseResCaseCond: clsTeachingCaseResCaseEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdTeachingCaseResCase) == true)
{
const strComparisonOpIdTeachingCaseResCase:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdTeachingCaseResCase];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdTeachingCaseResCase, objTeachingCaseResCaseCond.idTeachingCaseResCase, strComparisonOpIdTeachingCaseResCase);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_TeachingCaseResCaseID) == true)
{
const strComparisonOpTeachingCaseResCaseID:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_TeachingCaseResCaseID];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_TeachingCaseResCaseID, objTeachingCaseResCaseCond.teachingCaseResCaseID, strComparisonOpTeachingCaseResCaseID);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName) == true)
{
const strComparisonOpTeachingCaseResCaseName:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName, objTeachingCaseResCaseCond.teachingCaseResCaseName, strComparisonOpTeachingCaseResCaseName);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTheme) == true)
{
const strComparisonOpTeachingCaseResCaseTheme:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTheme];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTheme, objTeachingCaseResCaseCond.teachingCaseResCaseTheme, strComparisonOpTeachingCaseResCaseTheme);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_TeachingCaseResCaseText) == true)
{
const strComparisonOpTeachingCaseResCaseText:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_TeachingCaseResCaseText];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_TeachingCaseResCaseText, objTeachingCaseResCaseCond.teachingCaseResCaseText, strComparisonOpTeachingCaseResCaseText);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDate) == true)
{
const strComparisonOpTeachingCaseResCaseDate:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDate, objTeachingCaseResCaseCond.teachingCaseResCaseDate, strComparisonOpTeachingCaseResCaseDate);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTime) == true)
{
const strComparisonOpTeachingCaseResCaseTime:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTime, objTeachingCaseResCaseCond.teachingCaseResCaseTime, strComparisonOpTeachingCaseResCaseTime);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDateIn) == true)
{
const strComparisonOpTeachingCaseResCaseDateIn:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDateIn];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDateIn, objTeachingCaseResCaseCond.teachingCaseResCaseDateIn, strComparisonOpTeachingCaseResCaseDateIn);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTimeIn) == true)
{
const strComparisonOpTeachingCaseResCaseTimeIn:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTimeIn];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTimeIn, objTeachingCaseResCaseCond.teachingCaseResCaseTimeIn, strComparisonOpTeachingCaseResCaseTimeIn);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdCaseType) == true)
{
const strComparisonOpIdCaseType:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdCaseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdCaseType, objTeachingCaseResCaseCond.idCaseType, strComparisonOpIdCaseType);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdTeachingCaseResCaseType) == true)
{
const strComparisonOpIdTeachingCaseResCaseType:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdTeachingCaseResCaseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdTeachingCaseResCaseType, objTeachingCaseResCaseCond.idTeachingCaseResCaseType, strComparisonOpIdTeachingCaseResCaseType);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_CourseId, objTeachingCaseResCaseCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_OwnerId) == true)
{
const strComparisonOpOwnerId:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_OwnerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_OwnerId, objTeachingCaseResCaseCond.ownerId, strComparisonOpOwnerId);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdStudyLevel) == true)
{
const strComparisonOpIdStudyLevel:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdStudyLevel];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdStudyLevel, objTeachingCaseResCaseCond.idStudyLevel, strComparisonOpIdStudyLevel);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdTeachingPlan) == true)
{
const strComparisonOpIdTeachingPlan:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdTeachingPlan];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdTeachingPlan, objTeachingCaseResCaseCond.idTeachingPlan, strComparisonOpIdTeachingPlan);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdDiscipline) == true)
{
const strComparisonOpIdDiscipline:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdDiscipline];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdDiscipline, objTeachingCaseResCaseCond.idDiscipline, strComparisonOpIdDiscipline);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_BrowseCount) == true)
{
const strComparisonOpBrowseCount:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_BrowseCount];
strWhereCond += Format(" And {0} {2} {1}", clsTeachingCaseResCaseEN.con_BrowseCount, objTeachingCaseResCaseCond.browseCount, strComparisonOpBrowseCount);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdSenateGaugeVersion) == true)
{
const strComparisonOpIdSenateGaugeVersion:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdSenateGaugeVersion];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdSenateGaugeVersion, objTeachingCaseResCaseCond.idSenateGaugeVersion, strComparisonOpIdSenateGaugeVersion);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdTeachSkill) == true)
{
const strComparisonOpIdTeachSkill:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdTeachSkill];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdTeachSkill, objTeachingCaseResCaseCond.idTeachSkill, strComparisonOpIdTeachSkill);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_CaseLevelId) == true)
{
const strComparisonOpCaseLevelId:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_CaseLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_CaseLevelId, objTeachingCaseResCaseCond.caseLevelId, strComparisonOpCaseLevelId);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_DocFile) == true)
{
const strComparisonOpDocFile:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_DocFile];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_DocFile, objTeachingCaseResCaseCond.docFile, strComparisonOpDocFile);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IsNeedGeneWord) == true)
{
if (objTeachingCaseResCaseCond.isNeedGeneWord == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeachingCaseResCaseEN.con_IsNeedGeneWord);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeachingCaseResCaseEN.con_IsNeedGeneWord);
}
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_WordCreateDate) == true)
{
const strComparisonOpWordCreateDate:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_WordCreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_WordCreateDate, objTeachingCaseResCaseCond.wordCreateDate, strComparisonOpWordCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IsVisible) == true)
{
if (objTeachingCaseResCaseCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeachingCaseResCaseEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeachingCaseResCaseEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IsDualVideo) == true)
{
if (objTeachingCaseResCaseCond.isDualVideo == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeachingCaseResCaseEN.con_IsDualVideo);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeachingCaseResCaseEN.con_IsDualVideo);
}
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdXzCollege, objTeachingCaseResCaseCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_IdXzMajor, objTeachingCaseResCaseCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_CourseChapterId, objTeachingCaseResCaseCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_ViewCount) == true)
{
const strComparisonOpViewCount:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_ViewCount];
strWhereCond += Format(" And {0} {2} {1}", clsTeachingCaseResCaseEN.con_ViewCount, objTeachingCaseResCaseCond.viewCount, strComparisonOpViewCount);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_IsShow) == true)
{
if (objTeachingCaseResCaseCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeachingCaseResCaseEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeachingCaseResCaseEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_DownloadNumber) == true)
{
const strComparisonOpDownloadNumber:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_DownloadNumber];
strWhereCond += Format(" And {0} {2} {1}", clsTeachingCaseResCaseEN.con_DownloadNumber, objTeachingCaseResCaseCond.downloadNumber, strComparisonOpDownloadNumber);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_FileIntegration) == true)
{
const strComparisonOpFileIntegration:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_FileIntegration];
strWhereCond += Format(" And {0} {2} {1}", clsTeachingCaseResCaseEN.con_FileIntegration, objTeachingCaseResCaseCond.fileIntegration, strComparisonOpFileIntegration);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_LikeCount) == true)
{
const strComparisonOpLikeCount:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_LikeCount];
strWhereCond += Format(" And {0} {2} {1}", clsTeachingCaseResCaseEN.con_LikeCount, objTeachingCaseResCaseCond.likeCount, strComparisonOpLikeCount);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_CollectionCount) == true)
{
const strComparisonOpCollectionCount:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_CollectionCount];
strWhereCond += Format(" And {0} {2} {1}", clsTeachingCaseResCaseEN.con_CollectionCount, objTeachingCaseResCaseCond.collectionCount, strComparisonOpCollectionCount);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_RecommendedDegreeId) == true)
{
const strComparisonOpRecommendedDegreeId:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_RecommendedDegreeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_RecommendedDegreeId, objTeachingCaseResCaseCond.recommendedDegreeId, strComparisonOpRecommendedDegreeId);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_ftpFileType) == true)
{
const strComparisonOpftpFileType:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_ftpFileType];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_ftpFileType, objTeachingCaseResCaseCond.ftpFileType, strComparisonOpftpFileType);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_VideoUrl) == true)
{
const strComparisonOpVideoUrl:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_VideoUrl];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_VideoUrl, objTeachingCaseResCaseCond.videoUrl, strComparisonOpVideoUrl);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_VideoPath) == true)
{
const strComparisonOpVideoPath:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_VideoPath];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_VideoPath, objTeachingCaseResCaseCond.videoPath, strComparisonOpVideoPath);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_ResErrMsg) == true)
{
const strComparisonOpResErrMsg:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_ResErrMsg];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_ResErrMsg, objTeachingCaseResCaseCond.resErrMsg, strComparisonOpResErrMsg);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_UpdDate, objTeachingCaseResCaseCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_UpdUserId, objTeachingCaseResCaseCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objTeachingCaseResCaseCond.dicFldComparisonOp, clsTeachingCaseResCaseEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objTeachingCaseResCaseCond.dicFldComparisonOp[clsTeachingCaseResCaseEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeachingCaseResCaseEN.con_Memo, objTeachingCaseResCaseCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--TeachingCaseResCase(教学案例资源案例),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTeachingCaseResCaseID: 教学案例资源案例ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function TeachingCaseResCase_GetUniCondStr(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and TeachingCaseResCaseID = '{0}'", objTeachingCaseResCaseEN.teachingCaseResCaseID);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--TeachingCaseResCase(教学案例资源案例),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTeachingCaseResCaseID: 教学案例资源案例ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function TeachingCaseResCase_GetUniCondStr4Update(objTeachingCaseResCaseEN: clsTeachingCaseResCaseEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdTeachingCaseResCase <> '{0}'", objTeachingCaseResCaseEN.idTeachingCaseResCase);
 strWhereCond +=  Format(" and TeachingCaseResCaseID = '{0}'", objTeachingCaseResCaseEN.teachingCaseResCaseID);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objTeachingCaseResCaseENS:源对象
 * @param objTeachingCaseResCaseENT:目标对象
*/
export  function TeachingCaseResCase_CopyObjTo(objTeachingCaseResCaseENS: clsTeachingCaseResCaseEN , objTeachingCaseResCaseENT: clsTeachingCaseResCaseEN ): void 
{
objTeachingCaseResCaseENT.idTeachingCaseResCase = objTeachingCaseResCaseENS.idTeachingCaseResCase; //教学案例资源案例流水号
objTeachingCaseResCaseENT.teachingCaseResCaseID = objTeachingCaseResCaseENS.teachingCaseResCaseID; //教学案例资源案例ID
objTeachingCaseResCaseENT.teachingCaseResCaseName = objTeachingCaseResCaseENS.teachingCaseResCaseName; //教学案例资源案例名称
objTeachingCaseResCaseENT.teachingCaseResCaseTheme = objTeachingCaseResCaseENS.teachingCaseResCaseTheme; //教学案例资源案例主题词
objTeachingCaseResCaseENT.teachingCaseResCaseText = objTeachingCaseResCaseENS.teachingCaseResCaseText; //案例文本内容
objTeachingCaseResCaseENT.teachingCaseResCaseDate = objTeachingCaseResCaseENS.teachingCaseResCaseDate; //视频资源日期
objTeachingCaseResCaseENT.teachingCaseResCaseTime = objTeachingCaseResCaseENS.teachingCaseResCaseTime; //视频资源时间
objTeachingCaseResCaseENT.teachingCaseResCaseDateIn = objTeachingCaseResCaseENS.teachingCaseResCaseDateIn; //案例入库日期
objTeachingCaseResCaseENT.teachingCaseResCaseTimeIn = objTeachingCaseResCaseENS.teachingCaseResCaseTimeIn; //案例入库时间
objTeachingCaseResCaseENT.idCaseType = objTeachingCaseResCaseENS.idCaseType; //案例类型流水号
objTeachingCaseResCaseENT.idTeachingCaseResCaseType = objTeachingCaseResCaseENS.idTeachingCaseResCaseType; //教学案例资源类型流水号
objTeachingCaseResCaseENT.courseId = objTeachingCaseResCaseENS.courseId; //课程Id
objTeachingCaseResCaseENT.ownerId = objTeachingCaseResCaseENS.ownerId; //拥有者Id
objTeachingCaseResCaseENT.idStudyLevel = objTeachingCaseResCaseENS.idStudyLevel; //学段流水号
objTeachingCaseResCaseENT.idTeachingPlan = objTeachingCaseResCaseENS.idTeachingPlan; //教案流水号
objTeachingCaseResCaseENT.idDiscipline = objTeachingCaseResCaseENS.idDiscipline; //学科流水号
objTeachingCaseResCaseENT.browseCount = objTeachingCaseResCaseENS.browseCount; //浏览次数
objTeachingCaseResCaseENT.idSenateGaugeVersion = objTeachingCaseResCaseENS.idSenateGaugeVersion; //评价量表版本流水号
objTeachingCaseResCaseENT.idTeachSkill = objTeachingCaseResCaseENS.idTeachSkill; //教学技能流水号
objTeachingCaseResCaseENT.caseLevelId = objTeachingCaseResCaseENS.caseLevelId; //课例等级Id
objTeachingCaseResCaseENT.docFile = objTeachingCaseResCaseENS.docFile; //生成的Word文件名
objTeachingCaseResCaseENT.isNeedGeneWord = objTeachingCaseResCaseENS.isNeedGeneWord; //是否需要生成Word
objTeachingCaseResCaseENT.wordCreateDate = objTeachingCaseResCaseENS.wordCreateDate; //Word生成日期
objTeachingCaseResCaseENT.isVisible = objTeachingCaseResCaseENS.isVisible; //是否显示
objTeachingCaseResCaseENT.isDualVideo = objTeachingCaseResCaseENS.isDualVideo; //是否双视频
objTeachingCaseResCaseENT.idXzCollege = objTeachingCaseResCaseENS.idXzCollege; //学院流水号
objTeachingCaseResCaseENT.idXzMajor = objTeachingCaseResCaseENS.idXzMajor; //专业流水号
objTeachingCaseResCaseENT.courseChapterId = objTeachingCaseResCaseENS.courseChapterId; //课程章节ID
objTeachingCaseResCaseENT.viewCount = objTeachingCaseResCaseENS.viewCount; //浏览量
objTeachingCaseResCaseENT.isShow = objTeachingCaseResCaseENS.isShow; //是否启用
objTeachingCaseResCaseENT.downloadNumber = objTeachingCaseResCaseENS.downloadNumber; //下载数目
objTeachingCaseResCaseENT.fileIntegration = objTeachingCaseResCaseENS.fileIntegration; //文件积分
objTeachingCaseResCaseENT.likeCount = objTeachingCaseResCaseENS.likeCount; //资源喜欢数量
objTeachingCaseResCaseENT.collectionCount = objTeachingCaseResCaseENS.collectionCount; //收藏数量
objTeachingCaseResCaseENT.recommendedDegreeId = objTeachingCaseResCaseENS.recommendedDegreeId; //推荐度Id
objTeachingCaseResCaseENT.ftpFileType = objTeachingCaseResCaseENS.ftpFileType; //ftp文件类型
objTeachingCaseResCaseENT.videoUrl = objTeachingCaseResCaseENS.videoUrl; //视频Url
objTeachingCaseResCaseENT.videoPath = objTeachingCaseResCaseENS.videoPath; //视频目录
objTeachingCaseResCaseENT.resErrMsg = objTeachingCaseResCaseENS.resErrMsg; //资源错误信息
objTeachingCaseResCaseENT.updDate = objTeachingCaseResCaseENS.updDate; //修改日期
objTeachingCaseResCaseENT.updUserId = objTeachingCaseResCaseENS.updUserId; //修改用户Id
objTeachingCaseResCaseENT.memo = objTeachingCaseResCaseENS.memo; //备注
objTeachingCaseResCaseENT.sfUpdFldSetStr = objTeachingCaseResCaseENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTeachingCaseResCaseENS:源对象
 * @param objTeachingCaseResCaseENT:目标对象
*/
export  function TeachingCaseResCase_GetObjFromJsonObj(objTeachingCaseResCaseENS: clsTeachingCaseResCaseEN): clsTeachingCaseResCaseEN 
{
 const objTeachingCaseResCaseENT: clsTeachingCaseResCaseEN = new clsTeachingCaseResCaseEN();
ObjectAssign(objTeachingCaseResCaseENT, objTeachingCaseResCaseENS);
 return objTeachingCaseResCaseENT;
}