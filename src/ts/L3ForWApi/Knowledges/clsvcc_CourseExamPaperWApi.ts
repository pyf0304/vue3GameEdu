
 /**
 * 类名:clsvcc_CourseExamPaperWApi
 * 表名:vcc_CourseExamPaper(01120098)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:59
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v考卷(vcc_CourseExamPaper)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvcc_CourseExamPaperEN } from "@/ts/L0Entity/Knowledges/clsvcc_CourseExamPaperEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vcc_CourseExamPaper_Controller = "vcc_CourseExamPaperApi";
 export const vcc_CourseExamPaper_ConstructorName = "vcc_CourseExamPaper";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseExamPaperId:关键字
 * @returns 对象
 **/
export  async function vcc_CourseExamPaper_GetObjByCourseExamPaperIdAsync(strCourseExamPaperId: string): Promise<clsvcc_CourseExamPaperEN|null>  
{
const strThisFuncName = "GetObjByCourseExamPaperIdAsync";

if (IsNullOrEmpty(strCourseExamPaperId) == true)
{
  const strMsg = Format("参数:[strCourseExamPaperId]不能为空!(In clsvcc_CourseExamPaperWApi.GetObjByCourseExamPaperIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseExamPaperId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseExamPaperId]的长度:[{0}]不正确!(clsvcc_CourseExamPaperWApi.GetObjByCourseExamPaperIdAsync)", strCourseExamPaperId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCourseExamPaperId";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCourseExamPaperId,
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
const objvcc_CourseExamPaper = vcc_CourseExamPaper_GetObjFromJsonObj(returnObj);
return objvcc_CourseExamPaper;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByCourseExamPaperIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByCourseExamPaperIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vcc_CourseExamPaper_SortFunDefa(a:clsvcc_CourseExamPaperEN , b:clsvcc_CourseExamPaperEN): number 
{
return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
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
export  function vcc_CourseExamPaper_SortFunDefa2Fld(a:clsvcc_CourseExamPaperEN , b:clsvcc_CourseExamPaperEN): number 
{
if (a.courseId == b.courseId) return a.courseName.localeCompare(b.courseName);
else return a.courseId.localeCompare(b.courseId);
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
export  function vcc_CourseExamPaper_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvcc_CourseExamPaperEN.con_CourseExamPaperId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
}
case clsvcc_CourseExamPaperEN.con_CourseId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvcc_CourseExamPaperEN.con_CourseName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.courseName == null) return -1;
if (b.courseName == null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clsvcc_CourseExamPaperEN.con_ExamPaperName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.examPaperName == null) return -1;
if (b.examPaperName == null) return 1;
return a.examPaperName.localeCompare(b.examPaperName);
}
case clsvcc_CourseExamPaperEN.con_PaperIndex:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.paperIndex-b.paperIndex;
}
case clsvcc_CourseExamPaperEN.con_ExamPaperTypeId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.examPaperTypeId.localeCompare(b.examPaperTypeId);
}
case clsvcc_CourseExamPaperEN.con_ExamPaperTypeName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.examPaperTypeName == null) return -1;
if (b.examPaperTypeName == null) return 1;
return a.examPaperTypeName.localeCompare(b.examPaperTypeName);
}
case clsvcc_CourseExamPaperEN.con_IsShow:
return (a: clsvcc_CourseExamPaperEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_TotalScore:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.totalScore-b.totalScore;
}
case clsvcc_CourseExamPaperEN.con_ViewCount:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.viewCount-b.viewCount;
}
case clsvcc_CourseExamPaperEN.con_DoneNumber:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.doneNumber-b.doneNumber;
}
case clsvcc_CourseExamPaperEN.con_PaperTime:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.paperTime-b.paperTime;
}
case clsvcc_CourseExamPaperEN.con_DownloadNumber:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.downloadNumber-b.downloadNumber;
}
case clsvcc_CourseExamPaperEN.con_CollectionCount:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.collectionCount-b.collectionCount;
}
case clsvcc_CourseExamPaperEN.con_LikeCount:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.likeCount-b.likeCount;
}
case clsvcc_CourseExamPaperEN.con_IdXzMajor:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvcc_CourseExamPaperEN.con_MajorName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.majorName == null) return -1;
if (b.majorName == null) return 1;
return a.majorName.localeCompare(b.majorName);
}
case clsvcc_CourseExamPaperEN.con_PaperDispModeId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.paperDispModeId == null) return -1;
if (b.paperDispModeId == null) return 1;
return a.paperDispModeId.localeCompare(b.paperDispModeId);
}
case clsvcc_CourseExamPaperEN.con_PaperDispModeName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.paperDispModeName == null) return -1;
if (b.paperDispModeName == null) return 1;
return a.paperDispModeName.localeCompare(b.paperDispModeName);
}
case clsvcc_CourseExamPaperEN.con_ExamCreateTime:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.examCreateTime == null) return -1;
if (b.examCreateTime == null) return 1;
return a.examCreateTime.localeCompare(b.examCreateTime);
}
case clsvcc_CourseExamPaperEN.con_CreateUserID:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.createUserID == null) return -1;
if (b.createUserID == null) return 1;
return a.createUserID.localeCompare(b.createUserID);
}
case clsvcc_CourseExamPaperEN.con_UserName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.userName == null) return -1;
if (b.userName == null) return 1;
return a.userName.localeCompare(b.userName);
}
case clsvcc_CourseExamPaperEN.con_IsOpenToAllStu:
return (a: clsvcc_CourseExamPaperEN) => {
if (a.isOpenToAllStu == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_IsOpenToSchool:
return (a: clsvcc_CourseExamPaperEN) => {
if (a.isOpenToSchool == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_IsOpenToSocial:
return (a: clsvcc_CourseExamPaperEN) => {
if (a.isOpenToSocial == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_CourseChapterId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.courseChapterId == null) return -1;
if (b.courseChapterId == null) return 1;
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsvcc_CourseExamPaperEN.con_CourseChapterName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.courseChapterName == null) return -1;
if (b.courseChapterName == null) return 1;
return a.courseChapterName.localeCompare(b.courseChapterName);
}
case clsvcc_CourseExamPaperEN.con_ChapterId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.chapterId == null) return -1;
if (b.chapterId == null) return 1;
return a.chapterId.localeCompare(b.chapterId);
}
case clsvcc_CourseExamPaperEN.con_SectionId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.sectionId == null) return -1;
if (b.sectionId == null) return 1;
return a.sectionId.localeCompare(b.sectionId);
}
case clsvcc_CourseExamPaperEN.con_ChapterName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.chapterName == null) return -1;
if (b.chapterName == null) return 1;
return a.chapterName.localeCompare(b.chapterName);
}
case clsvcc_CourseExamPaperEN.con_SectionName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.sectionName == null) return -1;
if (b.sectionName == null) return 1;
return a.sectionName.localeCompare(b.sectionName);
}
case clsvcc_CourseExamPaperEN.con_ChapterNameSim:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.chapterNameSim == null) return -1;
if (b.chapterNameSim == null) return 1;
return a.chapterNameSim.localeCompare(b.chapterNameSim);
}
case clsvcc_CourseExamPaperEN.con_SectionNameSim:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.sectionNameSim == null) return -1;
if (b.sectionNameSim == null) return 1;
return a.sectionNameSim.localeCompare(b.sectionNameSim);
}
case clsvcc_CourseExamPaperEN.con_IsAutoGeneQuestion:
return (a: clsvcc_CourseExamPaperEN) => {
if (a.isAutoGeneQuestion == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_IsCanMultiDo:
return (a: clsvcc_CourseExamPaperEN) => {
if (a.isCanMultiDo == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_UpdDate:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsvcc_CourseExamPaperEN.con_UpdUserId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsvcc_CourseExamPaperEN.con_Memo:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvcc_CourseExamPaperEN.con_QuestionNum:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.questionNum-b.questionNum;
}
case clsvcc_CourseExamPaperEN.con_BigTopicNum:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return a.bigTopicNum-b.bigTopicNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CourseExamPaper]中不存在!(in ${ vcc_CourseExamPaper_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvcc_CourseExamPaperEN.con_CourseExamPaperId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.courseExamPaperId.localeCompare(a.courseExamPaperId);
}
case clsvcc_CourseExamPaperEN.con_CourseId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvcc_CourseExamPaperEN.con_CourseName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.courseName == null) return -1;
if (a.courseName == null) return 1;
return b.courseName.localeCompare(a.courseName);
}
case clsvcc_CourseExamPaperEN.con_ExamPaperName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.examPaperName == null) return -1;
if (a.examPaperName == null) return 1;
return b.examPaperName.localeCompare(a.examPaperName);
}
case clsvcc_CourseExamPaperEN.con_PaperIndex:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.paperIndex-a.paperIndex;
}
case clsvcc_CourseExamPaperEN.con_ExamPaperTypeId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.examPaperTypeId.localeCompare(a.examPaperTypeId);
}
case clsvcc_CourseExamPaperEN.con_ExamPaperTypeName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.examPaperTypeName == null) return -1;
if (a.examPaperTypeName == null) return 1;
return b.examPaperTypeName.localeCompare(a.examPaperTypeName);
}
case clsvcc_CourseExamPaperEN.con_IsShow:
return (b: clsvcc_CourseExamPaperEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_TotalScore:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.totalScore-a.totalScore;
}
case clsvcc_CourseExamPaperEN.con_ViewCount:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.viewCount-a.viewCount;
}
case clsvcc_CourseExamPaperEN.con_DoneNumber:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.doneNumber-a.doneNumber;
}
case clsvcc_CourseExamPaperEN.con_PaperTime:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.paperTime-a.paperTime;
}
case clsvcc_CourseExamPaperEN.con_DownloadNumber:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.downloadNumber-a.downloadNumber;
}
case clsvcc_CourseExamPaperEN.con_CollectionCount:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.collectionCount-a.collectionCount;
}
case clsvcc_CourseExamPaperEN.con_LikeCount:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.likeCount-a.likeCount;
}
case clsvcc_CourseExamPaperEN.con_IdXzMajor:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvcc_CourseExamPaperEN.con_MajorName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.majorName == null) return -1;
if (a.majorName == null) return 1;
return b.majorName.localeCompare(a.majorName);
}
case clsvcc_CourseExamPaperEN.con_PaperDispModeId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.paperDispModeId == null) return -1;
if (a.paperDispModeId == null) return 1;
return b.paperDispModeId.localeCompare(a.paperDispModeId);
}
case clsvcc_CourseExamPaperEN.con_PaperDispModeName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.paperDispModeName == null) return -1;
if (a.paperDispModeName == null) return 1;
return b.paperDispModeName.localeCompare(a.paperDispModeName);
}
case clsvcc_CourseExamPaperEN.con_ExamCreateTime:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.examCreateTime == null) return -1;
if (a.examCreateTime == null) return 1;
return b.examCreateTime.localeCompare(a.examCreateTime);
}
case clsvcc_CourseExamPaperEN.con_CreateUserID:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.createUserID == null) return -1;
if (a.createUserID == null) return 1;
return b.createUserID.localeCompare(a.createUserID);
}
case clsvcc_CourseExamPaperEN.con_UserName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.userName == null) return -1;
if (a.userName == null) return 1;
return b.userName.localeCompare(a.userName);
}
case clsvcc_CourseExamPaperEN.con_IsOpenToAllStu:
return (b: clsvcc_CourseExamPaperEN) => {
if (b.isOpenToAllStu == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_IsOpenToSchool:
return (b: clsvcc_CourseExamPaperEN) => {
if (b.isOpenToSchool == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_IsOpenToSocial:
return (b: clsvcc_CourseExamPaperEN) => {
if (b.isOpenToSocial == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_CourseChapterId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.courseChapterId == null) return -1;
if (a.courseChapterId == null) return 1;
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsvcc_CourseExamPaperEN.con_CourseChapterName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.courseChapterName == null) return -1;
if (a.courseChapterName == null) return 1;
return b.courseChapterName.localeCompare(a.courseChapterName);
}
case clsvcc_CourseExamPaperEN.con_ChapterId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.chapterId == null) return -1;
if (a.chapterId == null) return 1;
return b.chapterId.localeCompare(a.chapterId);
}
case clsvcc_CourseExamPaperEN.con_SectionId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.sectionId == null) return -1;
if (a.sectionId == null) return 1;
return b.sectionId.localeCompare(a.sectionId);
}
case clsvcc_CourseExamPaperEN.con_ChapterName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.chapterName == null) return -1;
if (a.chapterName == null) return 1;
return b.chapterName.localeCompare(a.chapterName);
}
case clsvcc_CourseExamPaperEN.con_SectionName:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.sectionName == null) return -1;
if (a.sectionName == null) return 1;
return b.sectionName.localeCompare(a.sectionName);
}
case clsvcc_CourseExamPaperEN.con_ChapterNameSim:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.chapterNameSim == null) return -1;
if (a.chapterNameSim == null) return 1;
return b.chapterNameSim.localeCompare(a.chapterNameSim);
}
case clsvcc_CourseExamPaperEN.con_SectionNameSim:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.sectionNameSim == null) return -1;
if (a.sectionNameSim == null) return 1;
return b.sectionNameSim.localeCompare(a.sectionNameSim);
}
case clsvcc_CourseExamPaperEN.con_IsAutoGeneQuestion:
return (b: clsvcc_CourseExamPaperEN) => {
if (b.isAutoGeneQuestion == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_IsCanMultiDo:
return (b: clsvcc_CourseExamPaperEN) => {
if (b.isCanMultiDo == true) return 1;
else return -1
}
case clsvcc_CourseExamPaperEN.con_UpdDate:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsvcc_CourseExamPaperEN.con_UpdUserId:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsvcc_CourseExamPaperEN.con_Memo:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvcc_CourseExamPaperEN.con_QuestionNum:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.questionNum-a.questionNum;
}
case clsvcc_CourseExamPaperEN.con_BigTopicNum:
return (a: clsvcc_CourseExamPaperEN, b: clsvcc_CourseExamPaperEN) => {
return b.bigTopicNum-a.bigTopicNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CourseExamPaper]中不存在!(in ${ vcc_CourseExamPaper_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByCourseExamPaperIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vcc_CourseExamPaper_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvcc_CourseExamPaperEN.con_CourseExamPaperId:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.courseExamPaperId === value;
}
case clsvcc_CourseExamPaperEN.con_CourseId:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.courseId === value;
}
case clsvcc_CourseExamPaperEN.con_CourseName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.courseName === value;
}
case clsvcc_CourseExamPaperEN.con_ExamPaperName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.examPaperName === value;
}
case clsvcc_CourseExamPaperEN.con_PaperIndex:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.paperIndex === value;
}
case clsvcc_CourseExamPaperEN.con_ExamPaperTypeId:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.examPaperTypeId === value;
}
case clsvcc_CourseExamPaperEN.con_ExamPaperTypeName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.examPaperTypeName === value;
}
case clsvcc_CourseExamPaperEN.con_IsShow:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.isShow === value;
}
case clsvcc_CourseExamPaperEN.con_TotalScore:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.totalScore === value;
}
case clsvcc_CourseExamPaperEN.con_ViewCount:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.viewCount === value;
}
case clsvcc_CourseExamPaperEN.con_DoneNumber:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.doneNumber === value;
}
case clsvcc_CourseExamPaperEN.con_PaperTime:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.paperTime === value;
}
case clsvcc_CourseExamPaperEN.con_DownloadNumber:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.downloadNumber === value;
}
case clsvcc_CourseExamPaperEN.con_CollectionCount:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.collectionCount === value;
}
case clsvcc_CourseExamPaperEN.con_LikeCount:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.likeCount === value;
}
case clsvcc_CourseExamPaperEN.con_IdXzMajor:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.idXzMajor === value;
}
case clsvcc_CourseExamPaperEN.con_MajorName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.majorName === value;
}
case clsvcc_CourseExamPaperEN.con_PaperDispModeId:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.paperDispModeId === value;
}
case clsvcc_CourseExamPaperEN.con_PaperDispModeName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.paperDispModeName === value;
}
case clsvcc_CourseExamPaperEN.con_ExamCreateTime:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.examCreateTime === value;
}
case clsvcc_CourseExamPaperEN.con_CreateUserID:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.createUserID === value;
}
case clsvcc_CourseExamPaperEN.con_UserName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.userName === value;
}
case clsvcc_CourseExamPaperEN.con_IsOpenToAllStu:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.isOpenToAllStu === value;
}
case clsvcc_CourseExamPaperEN.con_IsOpenToSchool:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.isOpenToSchool === value;
}
case clsvcc_CourseExamPaperEN.con_IsOpenToSocial:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.isOpenToSocial === value;
}
case clsvcc_CourseExamPaperEN.con_CourseChapterId:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.courseChapterId === value;
}
case clsvcc_CourseExamPaperEN.con_CourseChapterName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.courseChapterName === value;
}
case clsvcc_CourseExamPaperEN.con_ChapterId:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.chapterId === value;
}
case clsvcc_CourseExamPaperEN.con_SectionId:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.sectionId === value;
}
case clsvcc_CourseExamPaperEN.con_ChapterName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.chapterName === value;
}
case clsvcc_CourseExamPaperEN.con_SectionName:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.sectionName === value;
}
case clsvcc_CourseExamPaperEN.con_ChapterNameSim:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.chapterNameSim === value;
}
case clsvcc_CourseExamPaperEN.con_SectionNameSim:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.sectionNameSim === value;
}
case clsvcc_CourseExamPaperEN.con_IsAutoGeneQuestion:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.isAutoGeneQuestion === value;
}
case clsvcc_CourseExamPaperEN.con_IsCanMultiDo:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.isCanMultiDo === value;
}
case clsvcc_CourseExamPaperEN.con_UpdDate:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.updDate === value;
}
case clsvcc_CourseExamPaperEN.con_UpdUserId:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.updUserId === value;
}
case clsvcc_CourseExamPaperEN.con_Memo:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.memo === value;
}
case clsvcc_CourseExamPaperEN.con_QuestionNum:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.questionNum === value;
}
case clsvcc_CourseExamPaperEN.con_BigTopicNum:
return (obj: clsvcc_CourseExamPaperEN) => {
return obj.bigTopicNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CourseExamPaper]中不存在!(in ${ vcc_CourseExamPaper_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vcc_CourseExamPaper__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vcc_CourseExamPaper_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseExamPaper_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseExamPaper_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseExamPaper_GetFirstObjAsync(strWhereCond: string): Promise<clsvcc_CourseExamPaperEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const objvcc_CourseExamPaper = vcc_CourseExamPaper_GetObjFromJsonObj(returnObj);
return objvcc_CourseExamPaper;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseExamPaper_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvcc_CourseExamPaperEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
 * @param arrCourseExamPaperId:关键字列表
 * @returns 对象列表
 **/
export  async function vcc_CourseExamPaper_GetObjLstByCourseExamPaperIdLstAsync(arrCourseExamPaperId: Array<string>): Promise<Array<clsvcc_CourseExamPaperEN>>  
{
const strThisFuncName = "GetObjLstByCourseExamPaperIdLstAsync";
const strAction = "GetObjLstByCourseExamPaperIdLst";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseExamPaperId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByCourseExamPaperIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vcc_CourseExamPaper_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvcc_CourseExamPaperEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseExamPaper_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvcc_CourseExamPaperEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseExamPaper_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvcc_CourseExamPaperEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvcc_CourseExamPaperEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseExamPaper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseExamPaper_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
 * @param strCourseExamPaperId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vcc_CourseExamPaper_IsExistAsync(strCourseExamPaperId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCourseExamPaperId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseExamPaper_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vcc_CourseExamPaper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseExamPaper_ConstructorName, strThisFuncName);
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
export  function vcc_CourseExamPaper_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vcc_CourseExamPaper_GetJSONStrByObj (pobjvcc_CourseExamPaperEN: clsvcc_CourseExamPaperEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvcc_CourseExamPaperEN);
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
export  function vcc_CourseExamPaper_GetObjLstByJSONStr (strJSON: string): Array<clsvcc_CourseExamPaperEN>
{
let arrvcc_CourseExamPaperObjLst = new Array<clsvcc_CourseExamPaperEN>();
if (strJSON === "")
{
return arrvcc_CourseExamPaperObjLst;
}
try
{
arrvcc_CourseExamPaperObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvcc_CourseExamPaperObjLst;
}
return arrvcc_CourseExamPaperObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvcc_CourseExamPaperObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vcc_CourseExamPaper_GetObjLstByJSONObjLst (arrvcc_CourseExamPaperObjLstS: Array<clsvcc_CourseExamPaperEN>): Array<clsvcc_CourseExamPaperEN>
{
const arrvcc_CourseExamPaperObjLst = new Array<clsvcc_CourseExamPaperEN>();
for (const objInFor of arrvcc_CourseExamPaperObjLstS) {
const obj1 = vcc_CourseExamPaper_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvcc_CourseExamPaperObjLst.push(obj1);
}
return arrvcc_CourseExamPaperObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vcc_CourseExamPaper_GetObjByJSONStr (strJSON: string): clsvcc_CourseExamPaperEN
{
let pobjvcc_CourseExamPaperEN = new clsvcc_CourseExamPaperEN();
if (strJSON === "")
{
return pobjvcc_CourseExamPaperEN;
}
try
{
pobjvcc_CourseExamPaperEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvcc_CourseExamPaperEN;
}
return pobjvcc_CourseExamPaperEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vcc_CourseExamPaper_GetCombineCondition(objvcc_CourseExamPaperCond: clsvcc_CourseExamPaperEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_CourseExamPaperId) == true)
{
const strComparisonOpCourseExamPaperId:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_CourseExamPaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_CourseExamPaperId, objvcc_CourseExamPaperCond.courseExamPaperId, strComparisonOpCourseExamPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_CourseId, objvcc_CourseExamPaperCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_CourseName) == true)
{
const strComparisonOpCourseName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_CourseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_CourseName, objvcc_CourseExamPaperCond.courseName, strComparisonOpCourseName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_ExamPaperName) == true)
{
const strComparisonOpExamPaperName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_ExamPaperName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_ExamPaperName, objvcc_CourseExamPaperCond.examPaperName, strComparisonOpExamPaperName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_PaperIndex) == true)
{
const strComparisonOpPaperIndex:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_PaperIndex];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_PaperIndex, objvcc_CourseExamPaperCond.paperIndex, strComparisonOpPaperIndex);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_ExamPaperTypeId) == true)
{
const strComparisonOpExamPaperTypeId:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_ExamPaperTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_ExamPaperTypeId, objvcc_CourseExamPaperCond.examPaperTypeId, strComparisonOpExamPaperTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_ExamPaperTypeName) == true)
{
const strComparisonOpExamPaperTypeName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_ExamPaperTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_ExamPaperTypeName, objvcc_CourseExamPaperCond.examPaperTypeName, strComparisonOpExamPaperTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_IsShow) == true)
{
if (objvcc_CourseExamPaperCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseExamPaperEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseExamPaperEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_TotalScore) == true)
{
const strComparisonOpTotalScore:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_TotalScore];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_TotalScore, objvcc_CourseExamPaperCond.totalScore, strComparisonOpTotalScore);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_ViewCount) == true)
{
const strComparisonOpViewCount:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_ViewCount];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_ViewCount, objvcc_CourseExamPaperCond.viewCount, strComparisonOpViewCount);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_DoneNumber) == true)
{
const strComparisonOpDoneNumber:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_DoneNumber];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_DoneNumber, objvcc_CourseExamPaperCond.doneNumber, strComparisonOpDoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_PaperTime) == true)
{
const strComparisonOpPaperTime:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_PaperTime];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_PaperTime, objvcc_CourseExamPaperCond.paperTime, strComparisonOpPaperTime);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_DownloadNumber) == true)
{
const strComparisonOpDownloadNumber:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_DownloadNumber];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_DownloadNumber, objvcc_CourseExamPaperCond.downloadNumber, strComparisonOpDownloadNumber);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_CollectionCount) == true)
{
const strComparisonOpCollectionCount:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_CollectionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_CollectionCount, objvcc_CourseExamPaperCond.collectionCount, strComparisonOpCollectionCount);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_LikeCount) == true)
{
const strComparisonOpLikeCount:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_LikeCount];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_LikeCount, objvcc_CourseExamPaperCond.likeCount, strComparisonOpLikeCount);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_IdXzMajor, objvcc_CourseExamPaperCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_MajorName) == true)
{
const strComparisonOpMajorName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_MajorName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_MajorName, objvcc_CourseExamPaperCond.majorName, strComparisonOpMajorName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_PaperDispModeId) == true)
{
const strComparisonOpPaperDispModeId:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_PaperDispModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_PaperDispModeId, objvcc_CourseExamPaperCond.paperDispModeId, strComparisonOpPaperDispModeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_PaperDispModeName) == true)
{
const strComparisonOpPaperDispModeName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_PaperDispModeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_PaperDispModeName, objvcc_CourseExamPaperCond.paperDispModeName, strComparisonOpPaperDispModeName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_ExamCreateTime) == true)
{
const strComparisonOpExamCreateTime:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_ExamCreateTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_ExamCreateTime, objvcc_CourseExamPaperCond.examCreateTime, strComparisonOpExamCreateTime);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_CreateUserID) == true)
{
const strComparisonOpCreateUserID:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_CreateUserID];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_CreateUserID, objvcc_CourseExamPaperCond.createUserID, strComparisonOpCreateUserID);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_UserName, objvcc_CourseExamPaperCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_IsOpenToAllStu) == true)
{
if (objvcc_CourseExamPaperCond.isOpenToAllStu == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseExamPaperEN.con_IsOpenToAllStu);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseExamPaperEN.con_IsOpenToAllStu);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_IsOpenToSchool) == true)
{
if (objvcc_CourseExamPaperCond.isOpenToSchool == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseExamPaperEN.con_IsOpenToSchool);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseExamPaperEN.con_IsOpenToSchool);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_IsOpenToSocial) == true)
{
if (objvcc_CourseExamPaperCond.isOpenToSocial == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseExamPaperEN.con_IsOpenToSocial);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseExamPaperEN.con_IsOpenToSocial);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_CourseChapterId, objvcc_CourseExamPaperCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_CourseChapterName) == true)
{
const strComparisonOpCourseChapterName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_CourseChapterName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_CourseChapterName, objvcc_CourseExamPaperCond.courseChapterName, strComparisonOpCourseChapterName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_ChapterId) == true)
{
const strComparisonOpChapterId:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_ChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_ChapterId, objvcc_CourseExamPaperCond.chapterId, strComparisonOpChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_SectionId, objvcc_CourseExamPaperCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_ChapterName) == true)
{
const strComparisonOpChapterName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_ChapterName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_ChapterName, objvcc_CourseExamPaperCond.chapterName, strComparisonOpChapterName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_SectionName) == true)
{
const strComparisonOpSectionName:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_SectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_SectionName, objvcc_CourseExamPaperCond.sectionName, strComparisonOpSectionName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_ChapterNameSim) == true)
{
const strComparisonOpChapterNameSim:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_ChapterNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_ChapterNameSim, objvcc_CourseExamPaperCond.chapterNameSim, strComparisonOpChapterNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_SectionNameSim) == true)
{
const strComparisonOpSectionNameSim:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_SectionNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_SectionNameSim, objvcc_CourseExamPaperCond.sectionNameSim, strComparisonOpSectionNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_IsAutoGeneQuestion) == true)
{
if (objvcc_CourseExamPaperCond.isAutoGeneQuestion == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseExamPaperEN.con_IsAutoGeneQuestion);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseExamPaperEN.con_IsAutoGeneQuestion);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_IsCanMultiDo) == true)
{
if (objvcc_CourseExamPaperCond.isCanMultiDo == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseExamPaperEN.con_IsCanMultiDo);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseExamPaperEN.con_IsCanMultiDo);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_UpdDate, objvcc_CourseExamPaperCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_UpdUserId, objvcc_CourseExamPaperCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseExamPaperEN.con_Memo, objvcc_CourseExamPaperCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_QuestionNum) == true)
{
const strComparisonOpQuestionNum:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_QuestionNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_QuestionNum, objvcc_CourseExamPaperCond.questionNum, strComparisonOpQuestionNum);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseExamPaperCond.dicFldComparisonOp, clsvcc_CourseExamPaperEN.con_BigTopicNum) == true)
{
const strComparisonOpBigTopicNum:string = objvcc_CourseExamPaperCond.dicFldComparisonOp[clsvcc_CourseExamPaperEN.con_BigTopicNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseExamPaperEN.con_BigTopicNum, objvcc_CourseExamPaperCond.bigTopicNum, strComparisonOpBigTopicNum);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvcc_CourseExamPaperENS:源对象
 * @param objvcc_CourseExamPaperENT:目标对象
*/
export  function vcc_CourseExamPaper_CopyObjTo(objvcc_CourseExamPaperENS: clsvcc_CourseExamPaperEN , objvcc_CourseExamPaperENT: clsvcc_CourseExamPaperEN ): void 
{
objvcc_CourseExamPaperENT.courseExamPaperId = objvcc_CourseExamPaperENS.courseExamPaperId; //考卷流水号
objvcc_CourseExamPaperENT.courseId = objvcc_CourseExamPaperENS.courseId; //课程Id
objvcc_CourseExamPaperENT.courseName = objvcc_CourseExamPaperENS.courseName; //课程名称
objvcc_CourseExamPaperENT.examPaperName = objvcc_CourseExamPaperENS.examPaperName; //考卷名称
objvcc_CourseExamPaperENT.paperIndex = objvcc_CourseExamPaperENS.paperIndex; //试卷序号
objvcc_CourseExamPaperENT.examPaperTypeId = objvcc_CourseExamPaperENS.examPaperTypeId; //试卷类型Id
objvcc_CourseExamPaperENT.examPaperTypeName = objvcc_CourseExamPaperENS.examPaperTypeName; //试卷类型名称
objvcc_CourseExamPaperENT.isShow = objvcc_CourseExamPaperENS.isShow; //是否启用
objvcc_CourseExamPaperENT.totalScore = objvcc_CourseExamPaperENS.totalScore; //总得分
objvcc_CourseExamPaperENT.viewCount = objvcc_CourseExamPaperENS.viewCount; //浏览量
objvcc_CourseExamPaperENT.doneNumber = objvcc_CourseExamPaperENS.doneNumber; //已做人数
objvcc_CourseExamPaperENT.paperTime = objvcc_CourseExamPaperENS.paperTime; //考试时间（分钟）
objvcc_CourseExamPaperENT.downloadNumber = objvcc_CourseExamPaperENS.downloadNumber; //下载数目
objvcc_CourseExamPaperENT.collectionCount = objvcc_CourseExamPaperENS.collectionCount; //收藏数量
objvcc_CourseExamPaperENT.likeCount = objvcc_CourseExamPaperENS.likeCount; //资源喜欢数量
objvcc_CourseExamPaperENT.idXzMajor = objvcc_CourseExamPaperENS.idXzMajor; //专业流水号
objvcc_CourseExamPaperENT.majorName = objvcc_CourseExamPaperENS.majorName; //专业名称
objvcc_CourseExamPaperENT.paperDispModeId = objvcc_CourseExamPaperENS.paperDispModeId; //试卷显示模式Id
objvcc_CourseExamPaperENT.paperDispModeName = objvcc_CourseExamPaperENS.paperDispModeName; //试卷显示模式名称
objvcc_CourseExamPaperENT.examCreateTime = objvcc_CourseExamPaperENS.examCreateTime; //考卷建立时间
objvcc_CourseExamPaperENT.createUserID = objvcc_CourseExamPaperENS.createUserID; //建立用户ID
objvcc_CourseExamPaperENT.userName = objvcc_CourseExamPaperENS.userName; //用户名
objvcc_CourseExamPaperENT.isOpenToAllStu = objvcc_CourseExamPaperENS.isOpenToAllStu; //全校师生
objvcc_CourseExamPaperENT.isOpenToSchool = objvcc_CourseExamPaperENS.isOpenToSchool; //全校师生公开
objvcc_CourseExamPaperENT.isOpenToSocial = objvcc_CourseExamPaperENS.isOpenToSocial; //社会公众
objvcc_CourseExamPaperENT.courseChapterId = objvcc_CourseExamPaperENS.courseChapterId; //课程章节ID
objvcc_CourseExamPaperENT.courseChapterName = objvcc_CourseExamPaperENS.courseChapterName; //课程章节名称
objvcc_CourseExamPaperENT.chapterId = objvcc_CourseExamPaperENS.chapterId; //章Id
objvcc_CourseExamPaperENT.sectionId = objvcc_CourseExamPaperENS.sectionId; //节Id
objvcc_CourseExamPaperENT.chapterName = objvcc_CourseExamPaperENS.chapterName; //章名
objvcc_CourseExamPaperENT.sectionName = objvcc_CourseExamPaperENS.sectionName; //节名
objvcc_CourseExamPaperENT.chapterNameSim = objvcc_CourseExamPaperENS.chapterNameSim; //章名简称
objvcc_CourseExamPaperENT.sectionNameSim = objvcc_CourseExamPaperENS.sectionNameSim; //节名简称
objvcc_CourseExamPaperENT.isAutoGeneQuestion = objvcc_CourseExamPaperENS.isAutoGeneQuestion; //是否自动生成题目
objvcc_CourseExamPaperENT.isCanMultiDo = objvcc_CourseExamPaperENS.isCanMultiDo; //是否可以做多次
objvcc_CourseExamPaperENT.updDate = objvcc_CourseExamPaperENS.updDate; //修改日期
objvcc_CourseExamPaperENT.updUserId = objvcc_CourseExamPaperENS.updUserId; //修改用户Id
objvcc_CourseExamPaperENT.memo = objvcc_CourseExamPaperENS.memo; //备注
objvcc_CourseExamPaperENT.questionNum = objvcc_CourseExamPaperENS.questionNum; //题目数
objvcc_CourseExamPaperENT.bigTopicNum = objvcc_CourseExamPaperENS.bigTopicNum; //大标题数
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvcc_CourseExamPaperENS:源对象
 * @param objvcc_CourseExamPaperENT:目标对象
*/
export  function vcc_CourseExamPaper_GetObjFromJsonObj(objvcc_CourseExamPaperENS: clsvcc_CourseExamPaperEN): clsvcc_CourseExamPaperEN 
{
 const objvcc_CourseExamPaperENT: clsvcc_CourseExamPaperEN = new clsvcc_CourseExamPaperEN();
ObjectAssign(objvcc_CourseExamPaperENT, objvcc_CourseExamPaperENS);
 return objvcc_CourseExamPaperENT;
}