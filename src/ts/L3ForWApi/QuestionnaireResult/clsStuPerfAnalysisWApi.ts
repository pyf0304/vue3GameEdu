
 /**
 * 类名:clsStuPerfAnalysisWApi
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:08
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
 * 学生问题分析(StuPerfAnalysis)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsStuPerfAnalysisEN } from "@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const stuPerfAnalysis_Controller = "StuPerfAnalysisApi";
 export const stuPerfAnalysis_ConstructorName = "stuPerfAnalysis";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function StuPerfAnalysis_SplitKeyLst(strKeyLst: string)  
{
const arrKey = strKeyLst.split('|');
if (arrKey.length != 2)
{
const strMsg = "请选择需要修改的记录!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
const objKeyLst = {
idStudentInfo: arrKey[0],
idCurrEduCls: arrKey[1],
};
if (IsNullOrEmpty(objKeyLst.idStudentInfo)== true)
{
const strMsg = "关键字段(idStudentInfo)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.idCurrEduCls)== true)
{
const strMsg = "关键字段(idCurrEduCls)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdStudentInfo:关键字
 * @returns 对象
 **/
export  async function StuPerfAnalysis_GetObjByKeyLstAsync(strIdStudentInfo: string,strIdCurrEduCls: string): Promise<clsStuPerfAnalysisEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strIdStudentInfo) == true)
{
  const strMsg = Format("参数:[strIdStudentInfo]不能为空!(In clsStuPerfAnalysisWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStudentInfo.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsStuPerfAnalysisWApi.GetObjByKeyLstAsync)", strIdStudentInfo.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsStuPerfAnalysisWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsStuPerfAnalysisWApi.GetObjByKeyLstAsync)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdStudentInfo,
strIdCurrEduCls,
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
const objStuPerfAnalysis = StuPerfAnalysis_GetObjFromJsonObj(returnObj);
return objStuPerfAnalysis;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByKeyLstlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByKeyLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function StuPerfAnalysis_SortFunDefa(a:clsStuPerfAnalysisEN , b:clsStuPerfAnalysisEN): number 
{
return a.idStudentInfo.localeCompare(b.idStudentInfo);
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
export  function StuPerfAnalysis_SortFunDefa2Fld(a:clsStuPerfAnalysisEN , b:clsStuPerfAnalysisEN): number 
{
if (a.courseId == b.courseId) return a.questionCount - b.questionCount;
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
export  function StuPerfAnalysis_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsStuPerfAnalysisEN.con_IdStudentInfo:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
case clsStuPerfAnalysisEN.con_IdCurrEduCls:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsStuPerfAnalysisEN.con_CourseId:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsStuPerfAnalysisEN.con_QuestionCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.questionCount-b.questionCount;
}
case clsStuPerfAnalysisEN.con_CommentCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.commentCount-b.commentCount;
}
case clsStuPerfAnalysisEN.con_LikeCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.likeCount-b.likeCount;
}
case clsStuPerfAnalysisEN.con_AskedCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.askedCount-b.askedCount;
}
case clsStuPerfAnalysisEN.con_RightCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.rightCount-b.rightCount;
}
case clsStuPerfAnalysisEN.con_ErrorCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.errorCount-b.errorCount;
}
case clsStuPerfAnalysisEN.con_TotalPoints:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.totalPoints-b.totalPoints;
}
case clsStuPerfAnalysisEN.con_MarkCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.markCount-b.markCount;
}
case clsStuPerfAnalysisEN.con_IdSchool:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsStuPerfAnalysisEN.con_Comment:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
if (a.comment == null) return -1;
if (b.comment == null) return 1;
return a.comment.localeCompare(b.comment);
}
case clsStuPerfAnalysisEN.con_UpdDate:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsStuPerfAnalysisEN.con_UpdUser:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsStuPerfAnalysisEN.con_Memo:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[StuPerfAnalysis]中不存在!(in ${ stuPerfAnalysis_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsStuPerfAnalysisEN.con_IdStudentInfo:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.idStudentInfo.localeCompare(a.idStudentInfo);
}
case clsStuPerfAnalysisEN.con_IdCurrEduCls:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsStuPerfAnalysisEN.con_CourseId:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsStuPerfAnalysisEN.con_QuestionCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.questionCount-a.questionCount;
}
case clsStuPerfAnalysisEN.con_CommentCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.commentCount-a.commentCount;
}
case clsStuPerfAnalysisEN.con_LikeCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.likeCount-a.likeCount;
}
case clsStuPerfAnalysisEN.con_AskedCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.askedCount-a.askedCount;
}
case clsStuPerfAnalysisEN.con_RightCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.rightCount-a.rightCount;
}
case clsStuPerfAnalysisEN.con_ErrorCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.errorCount-a.errorCount;
}
case clsStuPerfAnalysisEN.con_TotalPoints:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.totalPoints-a.totalPoints;
}
case clsStuPerfAnalysisEN.con_MarkCount:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.markCount-a.markCount;
}
case clsStuPerfAnalysisEN.con_IdSchool:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsStuPerfAnalysisEN.con_Comment:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
if (b.comment == null) return -1;
if (a.comment == null) return 1;
return b.comment.localeCompare(a.comment);
}
case clsStuPerfAnalysisEN.con_UpdDate:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsStuPerfAnalysisEN.con_UpdUser:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsStuPerfAnalysisEN.con_Memo:
return (a: clsStuPerfAnalysisEN, b: clsStuPerfAnalysisEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[StuPerfAnalysis]中不存在!(in ${ stuPerfAnalysis_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdStudentInfoCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function StuPerfAnalysis_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsStuPerfAnalysisEN.con_IdStudentInfo:
return (obj: clsStuPerfAnalysisEN) => {
return obj.idStudentInfo === value;
}
case clsStuPerfAnalysisEN.con_IdCurrEduCls:
return (obj: clsStuPerfAnalysisEN) => {
return obj.idCurrEduCls === value;
}
case clsStuPerfAnalysisEN.con_CourseId:
return (obj: clsStuPerfAnalysisEN) => {
return obj.courseId === value;
}
case clsStuPerfAnalysisEN.con_QuestionCount:
return (obj: clsStuPerfAnalysisEN) => {
return obj.questionCount === value;
}
case clsStuPerfAnalysisEN.con_CommentCount:
return (obj: clsStuPerfAnalysisEN) => {
return obj.commentCount === value;
}
case clsStuPerfAnalysisEN.con_LikeCount:
return (obj: clsStuPerfAnalysisEN) => {
return obj.likeCount === value;
}
case clsStuPerfAnalysisEN.con_AskedCount:
return (obj: clsStuPerfAnalysisEN) => {
return obj.askedCount === value;
}
case clsStuPerfAnalysisEN.con_RightCount:
return (obj: clsStuPerfAnalysisEN) => {
return obj.rightCount === value;
}
case clsStuPerfAnalysisEN.con_ErrorCount:
return (obj: clsStuPerfAnalysisEN) => {
return obj.errorCount === value;
}
case clsStuPerfAnalysisEN.con_TotalPoints:
return (obj: clsStuPerfAnalysisEN) => {
return obj.totalPoints === value;
}
case clsStuPerfAnalysisEN.con_MarkCount:
return (obj: clsStuPerfAnalysisEN) => {
return obj.markCount === value;
}
case clsStuPerfAnalysisEN.con_IdSchool:
return (obj: clsStuPerfAnalysisEN) => {
return obj.idSchool === value;
}
case clsStuPerfAnalysisEN.con_Comment:
return (obj: clsStuPerfAnalysisEN) => {
return obj.comment === value;
}
case clsStuPerfAnalysisEN.con_UpdDate:
return (obj: clsStuPerfAnalysisEN) => {
return obj.updDate === value;
}
case clsStuPerfAnalysisEN.con_UpdUser:
return (obj: clsStuPerfAnalysisEN) => {
return obj.updUser === value;
}
case clsStuPerfAnalysisEN.con_Memo:
return (obj: clsStuPerfAnalysisEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[StuPerfAnalysis]中不存在!(in ${ stuPerfAnalysis_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[StuPerfAnalysis__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function StuPerfAnalysis_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_GetFirstObjAsync(strWhereCond: string): Promise<clsStuPerfAnalysisEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const objStuPerfAnalysis = StuPerfAnalysis_GetObjFromJsonObj(returnObj);
return objStuPerfAnalysis;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_GetObjLstAsync(strWhereCond: string): Promise<Array<clsStuPerfAnalysisEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = StuPerfAnalysis_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjLstByIdStudentInfoLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function StuPerfAnalysis_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsStuPerfAnalysisEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = StuPerfAnalysis_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsStuPerfAnalysisEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = StuPerfAnalysis_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsStuPerfAnalysisEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsStuPerfAnalysisEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = StuPerfAnalysis_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param strIdStudentInfo,strIdCurrEduCls:关键字列表
 * @returns 获取删除的结果
 **/
export  async function StuPerfAnalysis_DelRecKeyLstAsync(strIdStudentInfo: string,strIdCurrEduCls: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdStudentInfo, 
strIdCurrEduCls, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export  async function StuPerfAnalysis_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrKeyLsts, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_DelStuPerfAnalysissByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelStuPerfAnalysissByCondAsync";
const strAction = "DelStuPerfAnalysissByCond";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objStuPerfAnalysisEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function StuPerfAnalysis_AddNewRecordAsync(objStuPerfAnalysisEN: clsStuPerfAnalysisEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objStuPerfAnalysisEN.idStudentInfo === null || objStuPerfAnalysisEN.idStudentInfo === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objStuPerfAnalysisEN);
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objStuPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objStuPerfAnalysisEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function StuPerfAnalysis_AddNewRecordWithMaxIdAsync(objStuPerfAnalysisEN: clsStuPerfAnalysisEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objStuPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_AddNewObjSave(objStuPerfAnalysisEN: clsStuPerfAnalysisEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
StuPerfAnalysis_CheckPropertyNew(objStuPerfAnalysisEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ stuPerfAnalysis_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await StuPerfAnalysis_IsExistAsync(objStuPerfAnalysisEN.idStudentInfo,objStuPerfAnalysisEN.idCurrEduCls,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objStuPerfAnalysisEN.idStudentInfo);
console.error(strMsg);
throw(strMsg);
}
returnBool = await StuPerfAnalysis_AddNewRecordAsync(objStuPerfAnalysisEN);
if (returnBool == true)
{
//StuPerfAnalysis_ReFreshCache();
}
else
{
const strInfo = `添加[学生问题分析(StuPerfAnalysis)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objStuPerfAnalysisEN.idStudentInfo }`;
strReturnKeyLst += `|${ objStuPerfAnalysisEN.idCurrEduCls }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ stuPerfAnalysis_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function StuPerfAnalysis_UpdateObjSave(objStuPerfAnalysisEN: clsStuPerfAnalysisEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objStuPerfAnalysisEN.sfUpdFldSetStr = objStuPerfAnalysisEN.updFldString;//设置哪些字段被修改(脏字段)
if (objStuPerfAnalysisEN.idStudentInfo == "" || objStuPerfAnalysisEN.idStudentInfo == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
StuPerfAnalysis_CheckProperty4Update(objStuPerfAnalysisEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ stuPerfAnalysis_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await StuPerfAnalysis_UpdateRecordAsync(objStuPerfAnalysisEN);
if (returnBool == true)
{
//StuPerfAnalysis_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ stuPerfAnalysis_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objStuPerfAnalysisEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function StuPerfAnalysis_AddNewRecordWithReturnKeyAsync(objStuPerfAnalysisEN: clsStuPerfAnalysisEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objStuPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objStuPerfAnalysisEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function StuPerfAnalysis_UpdateRecordAsync(objStuPerfAnalysisEN: clsStuPerfAnalysisEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objStuPerfAnalysisEN.sfUpdFldSetStr === undefined || objStuPerfAnalysisEN.sfUpdFldSetStr === null || objStuPerfAnalysisEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objStuPerfAnalysisEN.idStudentInfo);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objStuPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objStuPerfAnalysisEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function StuPerfAnalysis_EditRecordExAsync(objStuPerfAnalysisEN: clsStuPerfAnalysisEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objStuPerfAnalysisEN.sfUpdFldSetStr === undefined || objStuPerfAnalysisEN.sfUpdFldSetStr === null || objStuPerfAnalysisEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objStuPerfAnalysisEN.idStudentInfo);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objStuPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objStuPerfAnalysisEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function StuPerfAnalysis_UpdateWithConditionAsync(objStuPerfAnalysisEN: clsStuPerfAnalysisEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objStuPerfAnalysisEN.sfUpdFldSetStr === undefined || objStuPerfAnalysisEN.sfUpdFldSetStr === null || objStuPerfAnalysisEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objStuPerfAnalysisEN.idStudentInfo);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);
objStuPerfAnalysisEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objStuPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param strIdStudentInfo:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function StuPerfAnalysis_IsExistAsync(strIdStudentInfo: string,strIdCurrEduCls: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdStudentInfo,
strIdCurrEduCls,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function StuPerfAnalysis_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(stuPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, stuPerfAnalysis_ConstructorName, strThisFuncName);
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
export  function StuPerfAnalysis_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function StuPerfAnalysis_CheckPropertyNew(pobjStuPerfAnalysisEN: clsStuPerfAnalysisEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 学生问题分析)!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idStudentInfo) == false && GetStrLen(pobjStuPerfAnalysisEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.idStudentInfo}(clsStuPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idCurrEduCls) == false && GetStrLen(pobjStuPerfAnalysisEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.idCurrEduCls}(clsStuPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.courseId) == false && GetStrLen(pobjStuPerfAnalysisEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.courseId}(clsStuPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idSchool) == false && GetStrLen(pobjStuPerfAnalysisEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.idSchool}(clsStuPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updDate) == false && GetStrLen(pobjStuPerfAnalysisEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.updDate}(clsStuPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updUser) == false && GetStrLen(pobjStuPerfAnalysisEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.updUser}(clsStuPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.memo) == false && GetStrLen(pobjStuPerfAnalysisEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.memo}(clsStuPerfAnalysisBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idStudentInfo) == false && undefined !== pobjStuPerfAnalysisEN.idStudentInfo && tzDataType.isString(pobjStuPerfAnalysisEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[${pobjStuPerfAnalysisEN.idStudentInfo}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idCurrEduCls) == false && undefined !== pobjStuPerfAnalysisEN.idCurrEduCls && tzDataType.isString(pobjStuPerfAnalysisEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjStuPerfAnalysisEN.idCurrEduCls}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.courseId) == false && undefined !== pobjStuPerfAnalysisEN.courseId && tzDataType.isString(pobjStuPerfAnalysisEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjStuPerfAnalysisEN.courseId}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjStuPerfAnalysisEN.questionCount && undefined !== pobjStuPerfAnalysisEN.questionCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.questionCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[问题数(questionCount)]的值:[${pobjStuPerfAnalysisEN.questionCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjStuPerfAnalysisEN.commentCount && undefined !== pobjStuPerfAnalysisEN.commentCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.commentCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[评论数(commentCount)]的值:[${pobjStuPerfAnalysisEN.commentCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjStuPerfAnalysisEN.likeCount && undefined !== pobjStuPerfAnalysisEN.likeCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.likeCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源喜欢数量(likeCount)]的值:[${pobjStuPerfAnalysisEN.likeCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjStuPerfAnalysisEN.askedCount && undefined !== pobjStuPerfAnalysisEN.askedCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.askedCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[提问数(askedCount)]的值:[${pobjStuPerfAnalysisEN.askedCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjStuPerfAnalysisEN.rightCount && undefined !== pobjStuPerfAnalysisEN.rightCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.rightCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[正确次数(rightCount)]的值:[${pobjStuPerfAnalysisEN.rightCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjStuPerfAnalysisEN.errorCount && undefined !== pobjStuPerfAnalysisEN.errorCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.errorCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[错误次数(errorCount)]的值:[${pobjStuPerfAnalysisEN.errorCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjStuPerfAnalysisEN.totalPoints && undefined !== pobjStuPerfAnalysisEN.totalPoints && tzDataType.isNumber(pobjStuPerfAnalysisEN.totalPoints) === false)
{
 throw new Error(`(errid:Watl000414)字段[总积分(totalPoints)]的值:[${pobjStuPerfAnalysisEN.totalPoints}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjStuPerfAnalysisEN.markCount && undefined !== pobjStuPerfAnalysisEN.markCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.markCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[打分数(markCount)]的值:[${pobjStuPerfAnalysisEN.markCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idSchool) == false && undefined !== pobjStuPerfAnalysisEN.idSchool && tzDataType.isString(pobjStuPerfAnalysisEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjStuPerfAnalysisEN.idSchool}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.comment) == false && undefined !== pobjStuPerfAnalysisEN.comment && tzDataType.isString(pobjStuPerfAnalysisEN.comment) === false)
{
 throw new Error(`(errid:Watl000414)字段[批注(comment)]的值:[${pobjStuPerfAnalysisEN.comment}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updDate) == false && undefined !== pobjStuPerfAnalysisEN.updDate && tzDataType.isString(pobjStuPerfAnalysisEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjStuPerfAnalysisEN.updDate}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updUser) == false && undefined !== pobjStuPerfAnalysisEN.updUser && tzDataType.isString(pobjStuPerfAnalysisEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjStuPerfAnalysisEN.updUser}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.memo) == false && undefined !== pobjStuPerfAnalysisEN.memo && tzDataType.isString(pobjStuPerfAnalysisEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjStuPerfAnalysisEN.memo}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idCurrEduCls) == false && pobjStuPerfAnalysisEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjStuPerfAnalysisEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 学生问题分析)!(clsStuPerfAnalysisBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function StuPerfAnalysis_CheckProperty4Update(pobjStuPerfAnalysisEN: clsStuPerfAnalysisEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idStudentInfo) == false && GetStrLen(pobjStuPerfAnalysisEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.idStudentInfo}(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idCurrEduCls) == false && GetStrLen(pobjStuPerfAnalysisEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.idCurrEduCls}(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.courseId) == false && GetStrLen(pobjStuPerfAnalysisEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.courseId}(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idSchool) == false && GetStrLen(pobjStuPerfAnalysisEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.idSchool}(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updDate) == false && GetStrLen(pobjStuPerfAnalysisEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.updDate}(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updUser) == false && GetStrLen(pobjStuPerfAnalysisEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.updUser}(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.memo) == false && GetStrLen(pobjStuPerfAnalysisEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学生问题分析(StuPerfAnalysis))!值:${pobjStuPerfAnalysisEN.memo}(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idStudentInfo) == false && undefined !== pobjStuPerfAnalysisEN.idStudentInfo && tzDataType.isString(pobjStuPerfAnalysisEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[${pobjStuPerfAnalysisEN.idStudentInfo}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idCurrEduCls) == false && undefined !== pobjStuPerfAnalysisEN.idCurrEduCls && tzDataType.isString(pobjStuPerfAnalysisEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjStuPerfAnalysisEN.idCurrEduCls}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.courseId) == false && undefined !== pobjStuPerfAnalysisEN.courseId && tzDataType.isString(pobjStuPerfAnalysisEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjStuPerfAnalysisEN.courseId}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjStuPerfAnalysisEN.questionCount && undefined !== pobjStuPerfAnalysisEN.questionCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.questionCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[问题数(questionCount)]的值:[${pobjStuPerfAnalysisEN.questionCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjStuPerfAnalysisEN.commentCount && undefined !== pobjStuPerfAnalysisEN.commentCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.commentCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[评论数(commentCount)]的值:[${pobjStuPerfAnalysisEN.commentCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjStuPerfAnalysisEN.likeCount && undefined !== pobjStuPerfAnalysisEN.likeCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.likeCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源喜欢数量(likeCount)]的值:[${pobjStuPerfAnalysisEN.likeCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjStuPerfAnalysisEN.askedCount && undefined !== pobjStuPerfAnalysisEN.askedCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.askedCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[提问数(askedCount)]的值:[${pobjStuPerfAnalysisEN.askedCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjStuPerfAnalysisEN.rightCount && undefined !== pobjStuPerfAnalysisEN.rightCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.rightCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[正确次数(rightCount)]的值:[${pobjStuPerfAnalysisEN.rightCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjStuPerfAnalysisEN.errorCount && undefined !== pobjStuPerfAnalysisEN.errorCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.errorCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[错误次数(errorCount)]的值:[${pobjStuPerfAnalysisEN.errorCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjStuPerfAnalysisEN.totalPoints && undefined !== pobjStuPerfAnalysisEN.totalPoints && tzDataType.isNumber(pobjStuPerfAnalysisEN.totalPoints) === false)
{
 throw new Error(`(errid:Watl000417)字段[总积分(totalPoints)]的值:[${pobjStuPerfAnalysisEN.totalPoints}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjStuPerfAnalysisEN.markCount && undefined !== pobjStuPerfAnalysisEN.markCount && tzDataType.isNumber(pobjStuPerfAnalysisEN.markCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[打分数(markCount)]的值:[${pobjStuPerfAnalysisEN.markCount}], 非法,应该为数值型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idSchool) == false && undefined !== pobjStuPerfAnalysisEN.idSchool && tzDataType.isString(pobjStuPerfAnalysisEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjStuPerfAnalysisEN.idSchool}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.comment) == false && undefined !== pobjStuPerfAnalysisEN.comment && tzDataType.isString(pobjStuPerfAnalysisEN.comment) === false)
{
 throw new Error(`(errid:Watl000417)字段[批注(comment)]的值:[${pobjStuPerfAnalysisEN.comment}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updDate) == false && undefined !== pobjStuPerfAnalysisEN.updDate && tzDataType.isString(pobjStuPerfAnalysisEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjStuPerfAnalysisEN.updDate}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.updUser) == false && undefined !== pobjStuPerfAnalysisEN.updUser && tzDataType.isString(pobjStuPerfAnalysisEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjStuPerfAnalysisEN.updUser}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.memo) == false && undefined !== pobjStuPerfAnalysisEN.memo && tzDataType.isString(pobjStuPerfAnalysisEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjStuPerfAnalysisEN.memo}], 非法,应该为字符型(In 学生问题分析(StuPerfAnalysis))!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idStudentInfo) === true 
 || pobjStuPerfAnalysisEN.idStudentInfo.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[学生流水号]不能为空(In 学生问题分析)!(clsStuPerfAnalysisBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjStuPerfAnalysisEN.idCurrEduCls) == false && pobjStuPerfAnalysisEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjStuPerfAnalysisEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 学生问题分析)!(clsStuPerfAnalysisBL:CheckPropertyNew)");
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
export  function StuPerfAnalysis_GetJSONStrByObj (pobjStuPerfAnalysisEN: clsStuPerfAnalysisEN): string
{
pobjStuPerfAnalysisEN.sfUpdFldSetStr = pobjStuPerfAnalysisEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjStuPerfAnalysisEN);
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
export  function StuPerfAnalysis_GetObjLstByJSONStr (strJSON: string): Array<clsStuPerfAnalysisEN>
{
let arrStuPerfAnalysisObjLst = new Array<clsStuPerfAnalysisEN>();
if (strJSON === "")
{
return arrStuPerfAnalysisObjLst;
}
try
{
arrStuPerfAnalysisObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrStuPerfAnalysisObjLst;
}
return arrStuPerfAnalysisObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrStuPerfAnalysisObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function StuPerfAnalysis_GetObjLstByJSONObjLst (arrStuPerfAnalysisObjLstS: Array<clsStuPerfAnalysisEN>): Array<clsStuPerfAnalysisEN>
{
const arrStuPerfAnalysisObjLst = new Array<clsStuPerfAnalysisEN>();
for (const objInFor of arrStuPerfAnalysisObjLstS) {
const obj1 = StuPerfAnalysis_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrStuPerfAnalysisObjLst.push(obj1);
}
return arrStuPerfAnalysisObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function StuPerfAnalysis_GetObjByJSONStr (strJSON: string): clsStuPerfAnalysisEN
{
let pobjStuPerfAnalysisEN = new clsStuPerfAnalysisEN();
if (strJSON === "")
{
return pobjStuPerfAnalysisEN;
}
try
{
pobjStuPerfAnalysisEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjStuPerfAnalysisEN;
}
return pobjStuPerfAnalysisEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function StuPerfAnalysis_GetCombineCondition(objStuPerfAnalysisCond: clsStuPerfAnalysisEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_IdStudentInfo) == true)
{
const strComparisonOpIdStudentInfo:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_IdStudentInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clsStuPerfAnalysisEN.con_IdStudentInfo, objStuPerfAnalysisCond.idStudentInfo, strComparisonOpIdStudentInfo);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsStuPerfAnalysisEN.con_IdCurrEduCls, objStuPerfAnalysisCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsStuPerfAnalysisEN.con_CourseId, objStuPerfAnalysisCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_QuestionCount) == true)
{
const strComparisonOpQuestionCount:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_QuestionCount];
strWhereCond += Format(" And {0} {2} {1}", clsStuPerfAnalysisEN.con_QuestionCount, objStuPerfAnalysisCond.questionCount, strComparisonOpQuestionCount);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_CommentCount) == true)
{
const strComparisonOpCommentCount:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_CommentCount];
strWhereCond += Format(" And {0} {2} {1}", clsStuPerfAnalysisEN.con_CommentCount, objStuPerfAnalysisCond.commentCount, strComparisonOpCommentCount);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_LikeCount) == true)
{
const strComparisonOpLikeCount:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_LikeCount];
strWhereCond += Format(" And {0} {2} {1}", clsStuPerfAnalysisEN.con_LikeCount, objStuPerfAnalysisCond.likeCount, strComparisonOpLikeCount);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_AskedCount) == true)
{
const strComparisonOpAskedCount:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_AskedCount];
strWhereCond += Format(" And {0} {2} {1}", clsStuPerfAnalysisEN.con_AskedCount, objStuPerfAnalysisCond.askedCount, strComparisonOpAskedCount);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_RightCount) == true)
{
const strComparisonOpRightCount:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_RightCount];
strWhereCond += Format(" And {0} {2} {1}", clsStuPerfAnalysisEN.con_RightCount, objStuPerfAnalysisCond.rightCount, strComparisonOpRightCount);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_ErrorCount) == true)
{
const strComparisonOpErrorCount:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_ErrorCount];
strWhereCond += Format(" And {0} {2} {1}", clsStuPerfAnalysisEN.con_ErrorCount, objStuPerfAnalysisCond.errorCount, strComparisonOpErrorCount);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_TotalPoints) == true)
{
const strComparisonOpTotalPoints:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_TotalPoints];
strWhereCond += Format(" And {0} {2} {1}", clsStuPerfAnalysisEN.con_TotalPoints, objStuPerfAnalysisCond.totalPoints, strComparisonOpTotalPoints);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_MarkCount) == true)
{
const strComparisonOpMarkCount:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_MarkCount];
strWhereCond += Format(" And {0} {2} {1}", clsStuPerfAnalysisEN.con_MarkCount, objStuPerfAnalysisCond.markCount, strComparisonOpMarkCount);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsStuPerfAnalysisEN.con_IdSchool, objStuPerfAnalysisCond.idSchool, strComparisonOpIdSchool);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsStuPerfAnalysisEN.con_UpdDate, objStuPerfAnalysisCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsStuPerfAnalysisEN.con_UpdUser, objStuPerfAnalysisCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objStuPerfAnalysisCond.dicFldComparisonOp, clsStuPerfAnalysisEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objStuPerfAnalysisCond.dicFldComparisonOp[clsStuPerfAnalysisEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsStuPerfAnalysisEN.con_Memo, objStuPerfAnalysisCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objStuPerfAnalysisENS:源对象
 * @param objStuPerfAnalysisENT:目标对象
*/
export  function StuPerfAnalysis_CopyObjTo(objStuPerfAnalysisENS: clsStuPerfAnalysisEN , objStuPerfAnalysisENT: clsStuPerfAnalysisEN ): void 
{
objStuPerfAnalysisENT.idStudentInfo = objStuPerfAnalysisENS.idStudentInfo; //学生流水号
objStuPerfAnalysisENT.idCurrEduCls = objStuPerfAnalysisENS.idCurrEduCls; //教学班流水号
objStuPerfAnalysisENT.courseId = objStuPerfAnalysisENS.courseId; //课程Id
objStuPerfAnalysisENT.questionCount = objStuPerfAnalysisENS.questionCount; //问题数
objStuPerfAnalysisENT.commentCount = objStuPerfAnalysisENS.commentCount; //评论数
objStuPerfAnalysisENT.likeCount = objStuPerfAnalysisENS.likeCount; //资源喜欢数量
objStuPerfAnalysisENT.askedCount = objStuPerfAnalysisENS.askedCount; //提问数
objStuPerfAnalysisENT.rightCount = objStuPerfAnalysisENS.rightCount; //正确次数
objStuPerfAnalysisENT.errorCount = objStuPerfAnalysisENS.errorCount; //错误次数
objStuPerfAnalysisENT.totalPoints = objStuPerfAnalysisENS.totalPoints; //总积分
objStuPerfAnalysisENT.markCount = objStuPerfAnalysisENS.markCount; //打分数
objStuPerfAnalysisENT.idSchool = objStuPerfAnalysisENS.idSchool; //学校流水号
objStuPerfAnalysisENT.comment = objStuPerfAnalysisENS.comment; //批注
objStuPerfAnalysisENT.updDate = objStuPerfAnalysisENS.updDate; //修改日期
objStuPerfAnalysisENT.updUser = objStuPerfAnalysisENS.updUser; //修改人
objStuPerfAnalysisENT.memo = objStuPerfAnalysisENS.memo; //备注
objStuPerfAnalysisENT.sfUpdFldSetStr = objStuPerfAnalysisENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objStuPerfAnalysisENS:源对象
 * @param objStuPerfAnalysisENT:目标对象
*/
export  function StuPerfAnalysis_GetObjFromJsonObj(objStuPerfAnalysisENS: clsStuPerfAnalysisEN): clsStuPerfAnalysisEN 
{
 const objStuPerfAnalysisENT: clsStuPerfAnalysisEN = new clsStuPerfAnalysisEN();
ObjectAssign(objStuPerfAnalysisENT, objStuPerfAnalysisENS);
 return objStuPerfAnalysisENT;
}