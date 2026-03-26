
 /**
 * 类名:clsClassPerfAnalysisWApi
 * 表名:ClassPerfAnalysis(01120977)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:04
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
 * 班级问题分析(ClassPerfAnalysis)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsClassPerfAnalysisEN } from "@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const classPerfAnalysis_Controller = "ClassPerfAnalysisApi";
 export const classPerfAnalysis_ConstructorName = "classPerfAnalysis";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function ClassPerfAnalysis_SplitKeyLst(strKeyLst: string)  
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
idCurrEduCls: arrKey[0],
questionId: Number(arrKey[1]),
};
if (IsNullOrEmpty(objKeyLst.idCurrEduCls)== true)
{
const strMsg = "关键字段(idCurrEduCls)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (objKeyLst.questionId == 0)
{
const strMsg = "关键字段(questionId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 对象
 **/
export  async function ClassPerfAnalysis_GetObjByKeyLstAsync(strIdCurrEduCls: string,lngQuestionId: number): Promise<clsClassPerfAnalysisEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsClassPerfAnalysisWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsClassPerfAnalysisWApi.GetObjByKeyLstAsync)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

if (lngQuestionId == 0)
{
  const strMsg = Format("参数:[lngQuestionId]不能为空!(In clsClassPerfAnalysisWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
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
const objClassPerfAnalysis = ClassPerfAnalysis_GetObjFromJsonObj(returnObj);
return objClassPerfAnalysis;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  function ClassPerfAnalysis_SortFunDefa(a:clsClassPerfAnalysisEN , b:clsClassPerfAnalysisEN): number 
{
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function ClassPerfAnalysis_SortFunDefa2Fld(a:clsClassPerfAnalysisEN , b:clsClassPerfAnalysisEN): number 
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
export  function ClassPerfAnalysis_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsClassPerfAnalysisEN.con_IdCurrEduCls:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsClassPerfAnalysisEN.con_QuestionId:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return a.questionId-b.questionId;
}
case clsClassPerfAnalysisEN.con_CourseId:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsClassPerfAnalysisEN.con_QuestionCount:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return a.questionCount-b.questionCount;
}
case clsClassPerfAnalysisEN.con_RightCount:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return a.rightCount-b.rightCount;
}
case clsClassPerfAnalysisEN.con_ErrorCount:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return a.errorCount-b.errorCount;
}
case clsClassPerfAnalysisEN.con_MarkCount:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return a.markCount-b.markCount;
}
case clsClassPerfAnalysisEN.con_IdSchool:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsClassPerfAnalysisEN.con_Comment:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
if (a.comment == null) return -1;
if (b.comment == null) return 1;
return a.comment.localeCompare(b.comment);
}
case clsClassPerfAnalysisEN.con_UpdDate:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsClassPerfAnalysisEN.con_UpdUser:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsClassPerfAnalysisEN.con_Memo:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ClassPerfAnalysis]中不存在!(in ${ classPerfAnalysis_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsClassPerfAnalysisEN.con_IdCurrEduCls:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsClassPerfAnalysisEN.con_QuestionId:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return b.questionId-a.questionId;
}
case clsClassPerfAnalysisEN.con_CourseId:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsClassPerfAnalysisEN.con_QuestionCount:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return b.questionCount-a.questionCount;
}
case clsClassPerfAnalysisEN.con_RightCount:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return b.rightCount-a.rightCount;
}
case clsClassPerfAnalysisEN.con_ErrorCount:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return b.errorCount-a.errorCount;
}
case clsClassPerfAnalysisEN.con_MarkCount:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return b.markCount-a.markCount;
}
case clsClassPerfAnalysisEN.con_IdSchool:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsClassPerfAnalysisEN.con_Comment:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
if (b.comment == null) return -1;
if (a.comment == null) return 1;
return b.comment.localeCompare(a.comment);
}
case clsClassPerfAnalysisEN.con_UpdDate:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsClassPerfAnalysisEN.con_UpdUser:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsClassPerfAnalysisEN.con_Memo:
return (a: clsClassPerfAnalysisEN, b: clsClassPerfAnalysisEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ClassPerfAnalysis]中不存在!(in ${ classPerfAnalysis_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdCurrEduClsCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ClassPerfAnalysis_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsClassPerfAnalysisEN.con_IdCurrEduCls:
return (obj: clsClassPerfAnalysisEN) => {
return obj.idCurrEduCls === value;
}
case clsClassPerfAnalysisEN.con_QuestionId:
return (obj: clsClassPerfAnalysisEN) => {
return obj.questionId === value;
}
case clsClassPerfAnalysisEN.con_CourseId:
return (obj: clsClassPerfAnalysisEN) => {
return obj.courseId === value;
}
case clsClassPerfAnalysisEN.con_QuestionCount:
return (obj: clsClassPerfAnalysisEN) => {
return obj.questionCount === value;
}
case clsClassPerfAnalysisEN.con_RightCount:
return (obj: clsClassPerfAnalysisEN) => {
return obj.rightCount === value;
}
case clsClassPerfAnalysisEN.con_ErrorCount:
return (obj: clsClassPerfAnalysisEN) => {
return obj.errorCount === value;
}
case clsClassPerfAnalysisEN.con_MarkCount:
return (obj: clsClassPerfAnalysisEN) => {
return obj.markCount === value;
}
case clsClassPerfAnalysisEN.con_IdSchool:
return (obj: clsClassPerfAnalysisEN) => {
return obj.idSchool === value;
}
case clsClassPerfAnalysisEN.con_Comment:
return (obj: clsClassPerfAnalysisEN) => {
return obj.comment === value;
}
case clsClassPerfAnalysisEN.con_UpdDate:
return (obj: clsClassPerfAnalysisEN) => {
return obj.updDate === value;
}
case clsClassPerfAnalysisEN.con_UpdUser:
return (obj: clsClassPerfAnalysisEN) => {
return obj.updUser === value;
}
case clsClassPerfAnalysisEN.con_Memo:
return (obj: clsClassPerfAnalysisEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ClassPerfAnalysis]中不存在!(in ${ classPerfAnalysis_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ClassPerfAnalysis__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ClassPerfAnalysis_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_GetFirstObjAsync(strWhereCond: string): Promise<clsClassPerfAnalysisEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const objClassPerfAnalysis = ClassPerfAnalysis_GetObjFromJsonObj(returnObj);
return objClassPerfAnalysis;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_GetObjLstAsync(strWhereCond: string): Promise<Array<clsClassPerfAnalysisEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ClassPerfAnalysis_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjLstByIdCurrEduClsLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ClassPerfAnalysis_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsClassPerfAnalysisEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ClassPerfAnalysis_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsClassPerfAnalysisEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ClassPerfAnalysis_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsClassPerfAnalysisEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsClassPerfAnalysisEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ClassPerfAnalysis_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls,lngQuestionId:关键字列表
 * @returns 获取删除的结果
 **/
export  async function ClassPerfAnalysis_DelRecKeyLstAsync(strIdCurrEduCls: string,lngQuestionId: number): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls, 
lngQuestionId, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_DelClassPerfAnalysissByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelClassPerfAnalysissByCondAsync";
const strAction = "DelClassPerfAnalysissByCond";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objClassPerfAnalysisEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ClassPerfAnalysis_AddNewRecordAsync(objClassPerfAnalysisEN: clsClassPerfAnalysisEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objClassPerfAnalysisEN.idCurrEduCls === null || objClassPerfAnalysisEN.idCurrEduCls === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objClassPerfAnalysisEN);
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClassPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objClassPerfAnalysisEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ClassPerfAnalysis_AddNewRecordWithMaxIdAsync(objClassPerfAnalysisEN: clsClassPerfAnalysisEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClassPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_AddNewObjSave(objClassPerfAnalysisEN: clsClassPerfAnalysisEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ClassPerfAnalysis_CheckPropertyNew(objClassPerfAnalysisEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ classPerfAnalysis_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await ClassPerfAnalysis_IsExistAsync(objClassPerfAnalysisEN.idCurrEduCls,objClassPerfAnalysisEN.questionId,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objClassPerfAnalysisEN.idCurrEduCls);
console.error(strMsg);
throw(strMsg);
}
returnBool = await ClassPerfAnalysis_AddNewRecordAsync(objClassPerfAnalysisEN);
if (returnBool == true)
{
//ClassPerfAnalysis_ReFreshCache();
}
else
{
const strInfo = `添加[班级问题分析(ClassPerfAnalysis)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objClassPerfAnalysisEN.idCurrEduCls }`;
strReturnKeyLst += `|${ objClassPerfAnalysisEN.questionId }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ classPerfAnalysis_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function ClassPerfAnalysis_UpdateObjSave(objClassPerfAnalysisEN: clsClassPerfAnalysisEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objClassPerfAnalysisEN.sfUpdFldSetStr = objClassPerfAnalysisEN.updFldString;//设置哪些字段被修改(脏字段)
if (objClassPerfAnalysisEN.idCurrEduCls == "" || objClassPerfAnalysisEN.idCurrEduCls == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ClassPerfAnalysis_CheckProperty4Update(objClassPerfAnalysisEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ classPerfAnalysis_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await ClassPerfAnalysis_UpdateRecordAsync(objClassPerfAnalysisEN);
if (returnBool == true)
{
//ClassPerfAnalysis_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ classPerfAnalysis_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objClassPerfAnalysisEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ClassPerfAnalysis_AddNewRecordWithReturnKeyAsync(objClassPerfAnalysisEN: clsClassPerfAnalysisEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClassPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objClassPerfAnalysisEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ClassPerfAnalysis_UpdateRecordAsync(objClassPerfAnalysisEN: clsClassPerfAnalysisEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objClassPerfAnalysisEN.sfUpdFldSetStr === undefined || objClassPerfAnalysisEN.sfUpdFldSetStr === null || objClassPerfAnalysisEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objClassPerfAnalysisEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClassPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objClassPerfAnalysisEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ClassPerfAnalysis_EditRecordExAsync(objClassPerfAnalysisEN: clsClassPerfAnalysisEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objClassPerfAnalysisEN.sfUpdFldSetStr === undefined || objClassPerfAnalysisEN.sfUpdFldSetStr === null || objClassPerfAnalysisEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objClassPerfAnalysisEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClassPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param objClassPerfAnalysisEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ClassPerfAnalysis_UpdateWithConditionAsync(objClassPerfAnalysisEN: clsClassPerfAnalysisEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objClassPerfAnalysisEN.sfUpdFldSetStr === undefined || objClassPerfAnalysisEN.sfUpdFldSetStr === null || objClassPerfAnalysisEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objClassPerfAnalysisEN.idCurrEduCls);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);
objClassPerfAnalysisEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClassPerfAnalysisEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ClassPerfAnalysis_IsExistAsync(strIdCurrEduCls: string,lngQuestionId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
lngQuestionId,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  async function ClassPerfAnalysis_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(classPerfAnalysis_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, classPerfAnalysis_ConstructorName, strThisFuncName);
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
export  function ClassPerfAnalysis_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ClassPerfAnalysis_CheckPropertyNew(pobjClassPerfAnalysisEN: clsClassPerfAnalysisEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 班级问题分析)!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idCurrEduCls) == false && GetStrLen(pobjClassPerfAnalysisEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.idCurrEduCls}(clsClassPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.courseId) == false && GetStrLen(pobjClassPerfAnalysisEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.courseId}(clsClassPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idSchool) == false && GetStrLen(pobjClassPerfAnalysisEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.idSchool}(clsClassPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updDate) == false && GetStrLen(pobjClassPerfAnalysisEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.updDate}(clsClassPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updUser) == false && GetStrLen(pobjClassPerfAnalysisEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.updUser}(clsClassPerfAnalysisBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.memo) == false && GetStrLen(pobjClassPerfAnalysisEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.memo}(clsClassPerfAnalysisBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idCurrEduCls) == false && undefined !== pobjClassPerfAnalysisEN.idCurrEduCls && tzDataType.isString(pobjClassPerfAnalysisEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjClassPerfAnalysisEN.idCurrEduCls}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjClassPerfAnalysisEN.questionId && undefined !== pobjClassPerfAnalysisEN.questionId && tzDataType.isNumber(pobjClassPerfAnalysisEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjClassPerfAnalysisEN.questionId}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.courseId) == false && undefined !== pobjClassPerfAnalysisEN.courseId && tzDataType.isString(pobjClassPerfAnalysisEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjClassPerfAnalysisEN.courseId}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjClassPerfAnalysisEN.questionCount && undefined !== pobjClassPerfAnalysisEN.questionCount && tzDataType.isNumber(pobjClassPerfAnalysisEN.questionCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[问题数(questionCount)]的值:[${pobjClassPerfAnalysisEN.questionCount}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjClassPerfAnalysisEN.rightCount && undefined !== pobjClassPerfAnalysisEN.rightCount && tzDataType.isNumber(pobjClassPerfAnalysisEN.rightCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[正确次数(rightCount)]的值:[${pobjClassPerfAnalysisEN.rightCount}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjClassPerfAnalysisEN.errorCount && undefined !== pobjClassPerfAnalysisEN.errorCount && tzDataType.isNumber(pobjClassPerfAnalysisEN.errorCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[错误次数(errorCount)]的值:[${pobjClassPerfAnalysisEN.errorCount}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (null != pobjClassPerfAnalysisEN.markCount && undefined !== pobjClassPerfAnalysisEN.markCount && tzDataType.isNumber(pobjClassPerfAnalysisEN.markCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[打分数(markCount)]的值:[${pobjClassPerfAnalysisEN.markCount}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idSchool) == false && undefined !== pobjClassPerfAnalysisEN.idSchool && tzDataType.isString(pobjClassPerfAnalysisEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjClassPerfAnalysisEN.idSchool}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.comment) == false && undefined !== pobjClassPerfAnalysisEN.comment && tzDataType.isString(pobjClassPerfAnalysisEN.comment) === false)
{
 throw new Error(`(errid:Watl000414)字段[批注(comment)]的值:[${pobjClassPerfAnalysisEN.comment}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updDate) == false && undefined !== pobjClassPerfAnalysisEN.updDate && tzDataType.isString(pobjClassPerfAnalysisEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjClassPerfAnalysisEN.updDate}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updUser) == false && undefined !== pobjClassPerfAnalysisEN.updUser && tzDataType.isString(pobjClassPerfAnalysisEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjClassPerfAnalysisEN.updUser}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.memo) == false && undefined !== pobjClassPerfAnalysisEN.memo && tzDataType.isString(pobjClassPerfAnalysisEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjClassPerfAnalysisEN.memo}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idCurrEduCls) == false && pobjClassPerfAnalysisEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjClassPerfAnalysisEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 班级问题分析)!(clsClassPerfAnalysisBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ClassPerfAnalysis_CheckProperty4Update(pobjClassPerfAnalysisEN: clsClassPerfAnalysisEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idCurrEduCls) == false && GetStrLen(pobjClassPerfAnalysisEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.idCurrEduCls}(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.courseId) == false && GetStrLen(pobjClassPerfAnalysisEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.courseId}(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idSchool) == false && GetStrLen(pobjClassPerfAnalysisEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.idSchool}(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updDate) == false && GetStrLen(pobjClassPerfAnalysisEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.updDate}(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updUser) == false && GetStrLen(pobjClassPerfAnalysisEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.updUser}(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.memo) == false && GetStrLen(pobjClassPerfAnalysisEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 班级问题分析(ClassPerfAnalysis))!值:${pobjClassPerfAnalysisEN.memo}(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idCurrEduCls) == false && undefined !== pobjClassPerfAnalysisEN.idCurrEduCls && tzDataType.isString(pobjClassPerfAnalysisEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjClassPerfAnalysisEN.idCurrEduCls}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjClassPerfAnalysisEN.questionId && undefined !== pobjClassPerfAnalysisEN.questionId && tzDataType.isNumber(pobjClassPerfAnalysisEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjClassPerfAnalysisEN.questionId}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.courseId) == false && undefined !== pobjClassPerfAnalysisEN.courseId && tzDataType.isString(pobjClassPerfAnalysisEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjClassPerfAnalysisEN.courseId}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjClassPerfAnalysisEN.questionCount && undefined !== pobjClassPerfAnalysisEN.questionCount && tzDataType.isNumber(pobjClassPerfAnalysisEN.questionCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[问题数(questionCount)]的值:[${pobjClassPerfAnalysisEN.questionCount}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjClassPerfAnalysisEN.rightCount && undefined !== pobjClassPerfAnalysisEN.rightCount && tzDataType.isNumber(pobjClassPerfAnalysisEN.rightCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[正确次数(rightCount)]的值:[${pobjClassPerfAnalysisEN.rightCount}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjClassPerfAnalysisEN.errorCount && undefined !== pobjClassPerfAnalysisEN.errorCount && tzDataType.isNumber(pobjClassPerfAnalysisEN.errorCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[错误次数(errorCount)]的值:[${pobjClassPerfAnalysisEN.errorCount}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (null != pobjClassPerfAnalysisEN.markCount && undefined !== pobjClassPerfAnalysisEN.markCount && tzDataType.isNumber(pobjClassPerfAnalysisEN.markCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[打分数(markCount)]的值:[${pobjClassPerfAnalysisEN.markCount}], 非法,应该为数值型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idSchool) == false && undefined !== pobjClassPerfAnalysisEN.idSchool && tzDataType.isString(pobjClassPerfAnalysisEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjClassPerfAnalysisEN.idSchool}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.comment) == false && undefined !== pobjClassPerfAnalysisEN.comment && tzDataType.isString(pobjClassPerfAnalysisEN.comment) === false)
{
 throw new Error(`(errid:Watl000417)字段[批注(comment)]的值:[${pobjClassPerfAnalysisEN.comment}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updDate) == false && undefined !== pobjClassPerfAnalysisEN.updDate && tzDataType.isString(pobjClassPerfAnalysisEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjClassPerfAnalysisEN.updDate}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.updUser) == false && undefined !== pobjClassPerfAnalysisEN.updUser && tzDataType.isString(pobjClassPerfAnalysisEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjClassPerfAnalysisEN.updUser}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.memo) == false && undefined !== pobjClassPerfAnalysisEN.memo && tzDataType.isString(pobjClassPerfAnalysisEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjClassPerfAnalysisEN.memo}], 非法,应该为字符型(In 班级问题分析(ClassPerfAnalysis))!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idCurrEduCls) === true 
 || pobjClassPerfAnalysisEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[教学班流水号]不能为空(In 班级问题分析)!(clsClassPerfAnalysisBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjClassPerfAnalysisEN.idCurrEduCls) == false && pobjClassPerfAnalysisEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjClassPerfAnalysisEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 班级问题分析)!(clsClassPerfAnalysisBL:CheckPropertyNew)");
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
export  function ClassPerfAnalysis_GetJSONStrByObj (pobjClassPerfAnalysisEN: clsClassPerfAnalysisEN): string
{
pobjClassPerfAnalysisEN.sfUpdFldSetStr = pobjClassPerfAnalysisEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjClassPerfAnalysisEN);
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
export  function ClassPerfAnalysis_GetObjLstByJSONStr (strJSON: string): Array<clsClassPerfAnalysisEN>
{
let arrClassPerfAnalysisObjLst = new Array<clsClassPerfAnalysisEN>();
if (strJSON === "")
{
return arrClassPerfAnalysisObjLst;
}
try
{
arrClassPerfAnalysisObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrClassPerfAnalysisObjLst;
}
return arrClassPerfAnalysisObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrClassPerfAnalysisObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ClassPerfAnalysis_GetObjLstByJSONObjLst (arrClassPerfAnalysisObjLstS: Array<clsClassPerfAnalysisEN>): Array<clsClassPerfAnalysisEN>
{
const arrClassPerfAnalysisObjLst = new Array<clsClassPerfAnalysisEN>();
for (const objInFor of arrClassPerfAnalysisObjLstS) {
const obj1 = ClassPerfAnalysis_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrClassPerfAnalysisObjLst.push(obj1);
}
return arrClassPerfAnalysisObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ClassPerfAnalysis_GetObjByJSONStr (strJSON: string): clsClassPerfAnalysisEN
{
let pobjClassPerfAnalysisEN = new clsClassPerfAnalysisEN();
if (strJSON === "")
{
return pobjClassPerfAnalysisEN;
}
try
{
pobjClassPerfAnalysisEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjClassPerfAnalysisEN;
}
return pobjClassPerfAnalysisEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ClassPerfAnalysis_GetCombineCondition(objClassPerfAnalysisCond: clsClassPerfAnalysisEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsClassPerfAnalysisEN.con_IdCurrEduCls, objClassPerfAnalysisCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsClassPerfAnalysisEN.con_QuestionId, objClassPerfAnalysisCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsClassPerfAnalysisEN.con_CourseId, objClassPerfAnalysisCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_QuestionCount) == true)
{
const strComparisonOpQuestionCount:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_QuestionCount];
strWhereCond += Format(" And {0} {2} {1}", clsClassPerfAnalysisEN.con_QuestionCount, objClassPerfAnalysisCond.questionCount, strComparisonOpQuestionCount);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_RightCount) == true)
{
const strComparisonOpRightCount:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_RightCount];
strWhereCond += Format(" And {0} {2} {1}", clsClassPerfAnalysisEN.con_RightCount, objClassPerfAnalysisCond.rightCount, strComparisonOpRightCount);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_ErrorCount) == true)
{
const strComparisonOpErrorCount:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_ErrorCount];
strWhereCond += Format(" And {0} {2} {1}", clsClassPerfAnalysisEN.con_ErrorCount, objClassPerfAnalysisCond.errorCount, strComparisonOpErrorCount);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_MarkCount) == true)
{
const strComparisonOpMarkCount:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_MarkCount];
strWhereCond += Format(" And {0} {2} {1}", clsClassPerfAnalysisEN.con_MarkCount, objClassPerfAnalysisCond.markCount, strComparisonOpMarkCount);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsClassPerfAnalysisEN.con_IdSchool, objClassPerfAnalysisCond.idSchool, strComparisonOpIdSchool);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsClassPerfAnalysisEN.con_UpdDate, objClassPerfAnalysisCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsClassPerfAnalysisEN.con_UpdUser, objClassPerfAnalysisCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objClassPerfAnalysisCond.dicFldComparisonOp, clsClassPerfAnalysisEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objClassPerfAnalysisCond.dicFldComparisonOp[clsClassPerfAnalysisEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsClassPerfAnalysisEN.con_Memo, objClassPerfAnalysisCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objClassPerfAnalysisENS:源对象
 * @param objClassPerfAnalysisENT:目标对象
*/
export  function ClassPerfAnalysis_CopyObjTo(objClassPerfAnalysisENS: clsClassPerfAnalysisEN , objClassPerfAnalysisENT: clsClassPerfAnalysisEN ): void 
{
objClassPerfAnalysisENT.idCurrEduCls = objClassPerfAnalysisENS.idCurrEduCls; //教学班流水号
objClassPerfAnalysisENT.questionId = objClassPerfAnalysisENS.questionId; //题目Id
objClassPerfAnalysisENT.courseId = objClassPerfAnalysisENS.courseId; //课程Id
objClassPerfAnalysisENT.questionCount = objClassPerfAnalysisENS.questionCount; //问题数
objClassPerfAnalysisENT.rightCount = objClassPerfAnalysisENS.rightCount; //正确次数
objClassPerfAnalysisENT.errorCount = objClassPerfAnalysisENS.errorCount; //错误次数
objClassPerfAnalysisENT.markCount = objClassPerfAnalysisENS.markCount; //打分数
objClassPerfAnalysisENT.idSchool = objClassPerfAnalysisENS.idSchool; //学校流水号
objClassPerfAnalysisENT.comment = objClassPerfAnalysisENS.comment; //批注
objClassPerfAnalysisENT.updDate = objClassPerfAnalysisENS.updDate; //修改日期
objClassPerfAnalysisENT.updUser = objClassPerfAnalysisENS.updUser; //修改人
objClassPerfAnalysisENT.memo = objClassPerfAnalysisENS.memo; //备注
objClassPerfAnalysisENT.sfUpdFldSetStr = objClassPerfAnalysisENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objClassPerfAnalysisENS:源对象
 * @param objClassPerfAnalysisENT:目标对象
*/
export  function ClassPerfAnalysis_GetObjFromJsonObj(objClassPerfAnalysisENS: clsClassPerfAnalysisEN): clsClassPerfAnalysisEN 
{
 const objClassPerfAnalysisENT: clsClassPerfAnalysisEN = new clsClassPerfAnalysisEN();
ObjectAssign(objClassPerfAnalysisENT, objClassPerfAnalysisENS);
 return objClassPerfAnalysisENT;
}