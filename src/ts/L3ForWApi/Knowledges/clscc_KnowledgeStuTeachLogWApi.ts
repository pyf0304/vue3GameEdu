
 /**
 * 类名:clscc_KnowledgeStuTeachLogWApi
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:23
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
 * 学生知识点教学日志(cc_KnowledgeStuTeachLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clscc_KnowledgeStuTeachLogEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cc_KnowledgeStuTeachLog_Controller = "cc_KnowledgeStuTeachLogApi";
 export const cc_KnowledgeStuTeachLog_ConstructorName = "cc_KnowledgeStuTeachLog";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function cc_KnowledgeStuTeachLog_SplitKeyLst(strKeyLst: string)  
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
questionId: Number(arrKey[0]),
idStudentInfo: arrKey[1],
};
if (objKeyLst.questionId == 0)
{
const strMsg = "关键字段(questionId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.idStudentInfo)== true)
{
const strMsg = "关键字段(idStudentInfo)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngQuestionId:关键字
 * @returns 对象
 **/
export  async function cc_KnowledgeStuTeachLog_GetObjByKeyLstAsync(lngQuestionId: number,strIdStudentInfo: string): Promise<clscc_KnowledgeStuTeachLogEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (lngQuestionId == 0)
{
  const strMsg = Format("参数:[lngQuestionId]不能为空!(In clscc_KnowledgeStuTeachLogWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strIdStudentInfo) == true)
{
  const strMsg = Format("参数:[strIdStudentInfo]不能为空!(In clscc_KnowledgeStuTeachLogWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStudentInfo.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clscc_KnowledgeStuTeachLogWApi.GetObjByKeyLstAsync)", strIdStudentInfo.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngQuestionId,
strIdStudentInfo,
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
const objcc_KnowledgeStuTeachLog = cc_KnowledgeStuTeachLog_GetObjFromJsonObj(returnObj);
return objcc_KnowledgeStuTeachLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  function cc_KnowledgeStuTeachLog_SortFunDefa(a:clscc_KnowledgeStuTeachLogEN , b:clscc_KnowledgeStuTeachLogEN): number 
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
export  function cc_KnowledgeStuTeachLog_SortFunDefa2Fld(a:clscc_KnowledgeStuTeachLogEN , b:clscc_KnowledgeStuTeachLogEN): number 
{
if (a.teachingLog == b.teachingLog) return a.courseId.localeCompare(b.courseId);
else return a.teachingLog.localeCompare(b.teachingLog);
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
export  function cc_KnowledgeStuTeachLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_KnowledgeStuTeachLogEN.con_QuestionId:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
return a.questionId-b.questionId;
}
case clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
case clscc_KnowledgeStuTeachLogEN.con_TeachingLog:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
return a.teachingLog.localeCompare(b.teachingLog);
}
case clscc_KnowledgeStuTeachLogEN.con_CourseId:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clscc_KnowledgeStuTeachLogEN.con_UpdDate:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clscc_KnowledgeStuTeachLogEN.con_UpdUserId:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clscc_KnowledgeStuTeachLogEN.con_Memo:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!(in ${ cc_KnowledgeStuTeachLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_KnowledgeStuTeachLogEN.con_QuestionId:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
return b.questionId-a.questionId;
}
case clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
return b.idStudentInfo.localeCompare(a.idStudentInfo);
}
case clscc_KnowledgeStuTeachLogEN.con_TeachingLog:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
return b.teachingLog.localeCompare(a.teachingLog);
}
case clscc_KnowledgeStuTeachLogEN.con_CourseId:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clscc_KnowledgeStuTeachLogEN.con_UpdDate:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clscc_KnowledgeStuTeachLogEN.con_UpdUserId:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clscc_KnowledgeStuTeachLogEN.con_Memo:
return (a: clscc_KnowledgeStuTeachLogEN, b: clscc_KnowledgeStuTeachLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!(in ${ cc_KnowledgeStuTeachLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_KnowledgeStuTeachLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_KnowledgeStuTeachLogEN.con_QuestionId:
return (obj: clscc_KnowledgeStuTeachLogEN) => {
return obj.questionId === value;
}
case clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo:
return (obj: clscc_KnowledgeStuTeachLogEN) => {
return obj.idStudentInfo === value;
}
case clscc_KnowledgeStuTeachLogEN.con_TeachingLog:
return (obj: clscc_KnowledgeStuTeachLogEN) => {
return obj.teachingLog === value;
}
case clscc_KnowledgeStuTeachLogEN.con_CourseId:
return (obj: clscc_KnowledgeStuTeachLogEN) => {
return obj.courseId === value;
}
case clscc_KnowledgeStuTeachLogEN.con_UpdDate:
return (obj: clscc_KnowledgeStuTeachLogEN) => {
return obj.updDate === value;
}
case clscc_KnowledgeStuTeachLogEN.con_UpdUserId:
return (obj: clscc_KnowledgeStuTeachLogEN) => {
return obj.updUserId === value;
}
case clscc_KnowledgeStuTeachLogEN.con_Memo:
return (obj: clscc_KnowledgeStuTeachLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_KnowledgeStuTeachLog]中不存在!(in ${ cc_KnowledgeStuTeachLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[cc_KnowledgeStuTeachLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_KnowledgeStuTeachLog_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_GetFirstObjAsync(strWhereCond: string): Promise<clscc_KnowledgeStuTeachLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const objcc_KnowledgeStuTeachLog = cc_KnowledgeStuTeachLog_GetObjFromJsonObj(returnObj);
return objcc_KnowledgeStuTeachLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_KnowledgeStuTeachLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeStuTeachLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjLstByQuestionIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function cc_KnowledgeStuTeachLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_KnowledgeStuTeachLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeStuTeachLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_KnowledgeStuTeachLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeStuTeachLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_KnowledgeStuTeachLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_KnowledgeStuTeachLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_KnowledgeStuTeachLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
 * @param lngQuestionId,strIdStudentInfo:关键字列表
 * @returns 获取删除的结果
 **/
export  async function cc_KnowledgeStuTeachLog_DelRecKeyLstAsync(lngQuestionId: number,strIdStudentInfo: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngQuestionId, 
strIdStudentInfo, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_Delcc_KnowledgeStuTeachLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_KnowledgeStuTeachLogsByCondAsync";
const strAction = "Delcc_KnowledgeStuTeachLogsByCond";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeStuTeachLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_KnowledgeStuTeachLog_AddNewRecordAsync(objcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_KnowledgeStuTeachLogEN);
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeStuTeachLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_AddNewObjSave(objcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_KnowledgeStuTeachLog_CheckPropertyNew(objcc_KnowledgeStuTeachLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_KnowledgeStuTeachLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await cc_KnowledgeStuTeachLog_IsExistAsync(objcc_KnowledgeStuTeachLogEN.questionId,objcc_KnowledgeStuTeachLogEN.idStudentInfo,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objcc_KnowledgeStuTeachLogEN.questionId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await cc_KnowledgeStuTeachLog_AddNewRecordAsync(objcc_KnowledgeStuTeachLogEN);
if (returnBool == true)
{
//cc_KnowledgeStuTeachLog_ReFreshCache();
}
else
{
const strInfo = `添加[学生知识点教学日志(cc_KnowledgeStuTeachLog)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objcc_KnowledgeStuTeachLogEN.questionId }`;
strReturnKeyLst += `|${ objcc_KnowledgeStuTeachLogEN.idStudentInfo }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_KnowledgeStuTeachLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function cc_KnowledgeStuTeachLog_UpdateObjSave(objcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr = objcc_KnowledgeStuTeachLogEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_KnowledgeStuTeachLogEN.questionId == 0 || objcc_KnowledgeStuTeachLogEN.questionId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_KnowledgeStuTeachLog_CheckProperty4Update(objcc_KnowledgeStuTeachLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_KnowledgeStuTeachLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await cc_KnowledgeStuTeachLog_UpdateRecordAsync(objcc_KnowledgeStuTeachLogEN);
if (returnBool == true)
{
//cc_KnowledgeStuTeachLog_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_KnowledgeStuTeachLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_KnowledgeStuTeachLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_KnowledgeStuTeachLog_AddNewRecordWithReturnKeyAsync(objcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeStuTeachLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeStuTeachLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_KnowledgeStuTeachLog_UpdateRecordAsync(objcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === undefined || objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === null || objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_KnowledgeStuTeachLogEN.questionId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeStuTeachLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeStuTeachLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_KnowledgeStuTeachLog_EditRecordExAsync(objcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === undefined || objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === null || objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_KnowledgeStuTeachLogEN.questionId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeStuTeachLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
 * @param objcc_KnowledgeStuTeachLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_KnowledgeStuTeachLog_UpdateWithConditionAsync(objcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === undefined || objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === null || objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_KnowledgeStuTeachLogEN.questionId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);
objcc_KnowledgeStuTeachLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_KnowledgeStuTeachLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_IsExistAsync(lngQuestionId: number,strIdStudentInfo: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngQuestionId,
strIdStudentInfo,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  async function cc_KnowledgeStuTeachLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_KnowledgeStuTeachLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_KnowledgeStuTeachLog_ConstructorName, strThisFuncName);
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
export  function cc_KnowledgeStuTeachLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_KnowledgeStuTeachLog_CheckPropertyNew(pobjcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.teachingLog) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学日志]不能为空(In 学生知识点教学日志)!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.idStudentInfo) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.idStudentInfo}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.teachingLog) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.teachingLog) > 5000)
{
 throw new Error(`(errid:Watl000413)字段[教学日志(teachingLog)]的长度不能超过5000(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.teachingLog}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.courseId) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.courseId}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.updDate) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.updDate}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.updUserId) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.updUserId}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.memo) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.memo}(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_KnowledgeStuTeachLogEN.questionId && undefined !== pobjcc_KnowledgeStuTeachLogEN.questionId && tzDataType.isNumber(pobjcc_KnowledgeStuTeachLogEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjcc_KnowledgeStuTeachLogEN.questionId}], 非法,应该为数值型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.idStudentInfo) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.idStudentInfo && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[${pobjcc_KnowledgeStuTeachLogEN.idStudentInfo}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.teachingLog) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.teachingLog && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.teachingLog) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学日志(teachingLog)]的值:[${pobjcc_KnowledgeStuTeachLogEN.teachingLog}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.courseId) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.courseId && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjcc_KnowledgeStuTeachLogEN.courseId}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.updDate) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.updDate && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_KnowledgeStuTeachLogEN.updDate}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.updUserId) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.updUserId && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjcc_KnowledgeStuTeachLogEN.updUserId}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.memo) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.memo && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_KnowledgeStuTeachLogEN.memo}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.courseId) == false && pobjcc_KnowledgeStuTeachLogEN.courseId != '[nuull]' && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 学生知识点教学日志)!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_KnowledgeStuTeachLog_CheckProperty4Update(pobjcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.idStudentInfo) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.idStudentInfo}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.teachingLog) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.teachingLog) > 5000)
{
 throw new Error(`(errid:Watl000416)字段[教学日志(teachingLog)]的长度不能超过5000(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.teachingLog}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.courseId) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.courseId}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.updDate) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.updDate}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.updUserId) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.updUserId}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.memo) == false && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!值:${pobjcc_KnowledgeStuTeachLogEN.memo}(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_KnowledgeStuTeachLogEN.questionId && undefined !== pobjcc_KnowledgeStuTeachLogEN.questionId && tzDataType.isNumber(pobjcc_KnowledgeStuTeachLogEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjcc_KnowledgeStuTeachLogEN.questionId}], 非法,应该为数值型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.idStudentInfo) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.idStudentInfo && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[${pobjcc_KnowledgeStuTeachLogEN.idStudentInfo}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.teachingLog) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.teachingLog && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.teachingLog) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学日志(teachingLog)]的值:[${pobjcc_KnowledgeStuTeachLogEN.teachingLog}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.courseId) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.courseId && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjcc_KnowledgeStuTeachLogEN.courseId}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.updDate) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.updDate && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_KnowledgeStuTeachLogEN.updDate}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.updUserId) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.updUserId && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjcc_KnowledgeStuTeachLogEN.updUserId}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.memo) == false && undefined !== pobjcc_KnowledgeStuTeachLogEN.memo && tzDataType.isString(pobjcc_KnowledgeStuTeachLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_KnowledgeStuTeachLogEN.memo}], 非法,应该为字符型(In 学生知识点教学日志(cc_KnowledgeStuTeachLog))!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjcc_KnowledgeStuTeachLogEN.questionId 
 || pobjcc_KnowledgeStuTeachLogEN.questionId != null && pobjcc_KnowledgeStuTeachLogEN.questionId.toString()  ===  ""
 || pobjcc_KnowledgeStuTeachLogEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[题目Id]不能为空(In 学生知识点教学日志)!(clscc_KnowledgeStuTeachLogBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_KnowledgeStuTeachLogEN.courseId) == false && pobjcc_KnowledgeStuTeachLogEN.courseId != '[nuull]' && GetStrLen(pobjcc_KnowledgeStuTeachLogEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 学生知识点教学日志)!(clscc_KnowledgeStuTeachLogBL:CheckPropertyNew)");
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
export  function cc_KnowledgeStuTeachLog_GetJSONStrByObj (pobjcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN): string
{
pobjcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr = pobjcc_KnowledgeStuTeachLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_KnowledgeStuTeachLogEN);
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
export  function cc_KnowledgeStuTeachLog_GetObjLstByJSONStr (strJSON: string): Array<clscc_KnowledgeStuTeachLogEN>
{
let arrcc_KnowledgeStuTeachLogObjLst = new Array<clscc_KnowledgeStuTeachLogEN>();
if (strJSON === "")
{
return arrcc_KnowledgeStuTeachLogObjLst;
}
try
{
arrcc_KnowledgeStuTeachLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_KnowledgeStuTeachLogObjLst;
}
return arrcc_KnowledgeStuTeachLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_KnowledgeStuTeachLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_KnowledgeStuTeachLog_GetObjLstByJSONObjLst (arrcc_KnowledgeStuTeachLogObjLstS: Array<clscc_KnowledgeStuTeachLogEN>): Array<clscc_KnowledgeStuTeachLogEN>
{
const arrcc_KnowledgeStuTeachLogObjLst = new Array<clscc_KnowledgeStuTeachLogEN>();
for (const objInFor of arrcc_KnowledgeStuTeachLogObjLstS) {
const obj1 = cc_KnowledgeStuTeachLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_KnowledgeStuTeachLogObjLst.push(obj1);
}
return arrcc_KnowledgeStuTeachLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_KnowledgeStuTeachLog_GetObjByJSONStr (strJSON: string): clscc_KnowledgeStuTeachLogEN
{
let pobjcc_KnowledgeStuTeachLogEN = new clscc_KnowledgeStuTeachLogEN();
if (strJSON === "")
{
return pobjcc_KnowledgeStuTeachLogEN;
}
try
{
pobjcc_KnowledgeStuTeachLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_KnowledgeStuTeachLogEN;
}
return pobjcc_KnowledgeStuTeachLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_KnowledgeStuTeachLog_GetCombineCondition(objcc_KnowledgeStuTeachLogCond: clscc_KnowledgeStuTeachLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp, clscc_KnowledgeStuTeachLogEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp[clscc_KnowledgeStuTeachLogEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clscc_KnowledgeStuTeachLogEN.con_QuestionId, objcc_KnowledgeStuTeachLogCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp, clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo) == true)
{
const strComparisonOpIdStudentInfo:string = objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp[clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeStuTeachLogEN.con_IdStudentInfo, objcc_KnowledgeStuTeachLogCond.idStudentInfo, strComparisonOpIdStudentInfo);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp, clscc_KnowledgeStuTeachLogEN.con_TeachingLog) == true)
{
const strComparisonOpTeachingLog:string = objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp[clscc_KnowledgeStuTeachLogEN.con_TeachingLog];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeStuTeachLogEN.con_TeachingLog, objcc_KnowledgeStuTeachLogCond.teachingLog, strComparisonOpTeachingLog);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp, clscc_KnowledgeStuTeachLogEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp[clscc_KnowledgeStuTeachLogEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeStuTeachLogEN.con_CourseId, objcc_KnowledgeStuTeachLogCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp, clscc_KnowledgeStuTeachLogEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp[clscc_KnowledgeStuTeachLogEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeStuTeachLogEN.con_UpdDate, objcc_KnowledgeStuTeachLogCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp, clscc_KnowledgeStuTeachLogEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp[clscc_KnowledgeStuTeachLogEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeStuTeachLogEN.con_UpdUserId, objcc_KnowledgeStuTeachLogCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp, clscc_KnowledgeStuTeachLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_KnowledgeStuTeachLogCond.dicFldComparisonOp[clscc_KnowledgeStuTeachLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_KnowledgeStuTeachLogEN.con_Memo, objcc_KnowledgeStuTeachLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_KnowledgeStuTeachLogENS:源对象
 * @param objcc_KnowledgeStuTeachLogENT:目标对象
*/
export  function cc_KnowledgeStuTeachLog_CopyObjTo(objcc_KnowledgeStuTeachLogENS: clscc_KnowledgeStuTeachLogEN , objcc_KnowledgeStuTeachLogENT: clscc_KnowledgeStuTeachLogEN ): void 
{
objcc_KnowledgeStuTeachLogENT.questionId = objcc_KnowledgeStuTeachLogENS.questionId; //题目Id
objcc_KnowledgeStuTeachLogENT.idStudentInfo = objcc_KnowledgeStuTeachLogENS.idStudentInfo; //学生流水号
objcc_KnowledgeStuTeachLogENT.teachingLog = objcc_KnowledgeStuTeachLogENS.teachingLog; //教学日志
objcc_KnowledgeStuTeachLogENT.courseId = objcc_KnowledgeStuTeachLogENS.courseId; //课程Id
objcc_KnowledgeStuTeachLogENT.updDate = objcc_KnowledgeStuTeachLogENS.updDate; //修改日期
objcc_KnowledgeStuTeachLogENT.updUserId = objcc_KnowledgeStuTeachLogENS.updUserId; //修改用户Id
objcc_KnowledgeStuTeachLogENT.memo = objcc_KnowledgeStuTeachLogENS.memo; //备注
objcc_KnowledgeStuTeachLogENT.sfUpdFldSetStr = objcc_KnowledgeStuTeachLogENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_KnowledgeStuTeachLogENS:源对象
 * @param objcc_KnowledgeStuTeachLogENT:目标对象
*/
export  function cc_KnowledgeStuTeachLog_GetObjFromJsonObj(objcc_KnowledgeStuTeachLogENS: clscc_KnowledgeStuTeachLogEN): clscc_KnowledgeStuTeachLogEN 
{
 const objcc_KnowledgeStuTeachLogENT: clscc_KnowledgeStuTeachLogEN = new clscc_KnowledgeStuTeachLogEN();
ObjectAssign(objcc_KnowledgeStuTeachLogENT, objcc_KnowledgeStuTeachLogENS);
 return objcc_KnowledgeStuTeachLogENT;
}