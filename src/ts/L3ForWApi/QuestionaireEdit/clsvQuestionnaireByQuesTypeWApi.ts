
 /**
 * 类名:clsvQuestionnaireByQuesTypeWApi
 * 表名:vQuestionnaireByQuesType(01120982)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:17
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
 * vQuestionnaireByQuesType(vQuestionnaireByQuesType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvQuestionnaireByQuesTypeEN } from "@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaireByQuesTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQuestionnaireByQuesType_Controller = "vQuestionnaireByQuesTypeApi";
 export const vQuestionnaireByQuesType_ConstructorName = "vQuestionnaireByQuesType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQuestionTypeId:关键字
 * @returns 对象
 **/
export  async function vQuestionnaireByQuesType_GetObjByQuestionTypeIdAsync(strQuestionTypeId: string): Promise<clsvQuestionnaireByQuesTypeEN|null>  
{
const strThisFuncName = "GetObjByQuestionTypeIdAsync";

if (IsNullOrEmpty(strQuestionTypeId) == true)
{
  const strMsg = Format("参数:[strQuestionTypeId]不能为空!(In clsvQuestionnaireByQuesTypeWApi.GetObjByQuestionTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strQuestionTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strQuestionTypeId]的长度:[{0}]不正确!(clsvQuestionnaireByQuesTypeWApi.GetObjByQuestionTypeIdAsync)", strQuestionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByQuestionTypeId";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionTypeId,
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
const objvQuestionnaireByQuesType = vQuestionnaireByQuesType_GetObjFromJsonObj(returnObj);
return objvQuestionnaireByQuesType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByQuestionTypeIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByQuestionTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQuestionnaireByQuesType_SortFunDefa(a:clsvQuestionnaireByQuesTypeEN , b:clsvQuestionnaireByQuesTypeEN): number 
{
return a.questionTypeId.localeCompare(b.questionTypeId);
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
export  function vQuestionnaireByQuesType_SortFunDefa2Fld(a:clsvQuestionnaireByQuesTypeEN , b:clsvQuestionnaireByQuesTypeEN): number 
{
if (a.questionTypeName == b.questionTypeName) return a.questionNum - b.questionNum;
else return a.questionTypeName.localeCompare(b.questionTypeName);
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
export  function vQuestionnaireByQuesType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId:
return (a: clsvQuestionnaireByQuesTypeEN, b: clsvQuestionnaireByQuesTypeEN) => {
if (a.questionTypeId == null) return -1;
if (b.questionTypeId == null) return 1;
return a.questionTypeId.localeCompare(b.questionTypeId);
}
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName:
return (a: clsvQuestionnaireByQuesTypeEN, b: clsvQuestionnaireByQuesTypeEN) => {
return a.questionTypeName.localeCompare(b.questionTypeName);
}
case clsvQuestionnaireByQuesTypeEN.con_QuestionNum:
return (a: clsvQuestionnaireByQuesTypeEN, b: clsvQuestionnaireByQuesTypeEN) => {
return a.questionNum-b.questionNum;
}
case clsvQuestionnaireByQuesTypeEN.con_CourseId:
return (a: clsvQuestionnaireByQuesTypeEN, b: clsvQuestionnaireByQuesTypeEN) => {
return a.courseId.localeCompare(b.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaireByQuesType]中不存在!(in ${ vQuestionnaireByQuesType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId:
return (a: clsvQuestionnaireByQuesTypeEN, b: clsvQuestionnaireByQuesTypeEN) => {
if (b.questionTypeId == null) return -1;
if (a.questionTypeId == null) return 1;
return b.questionTypeId.localeCompare(a.questionTypeId);
}
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName:
return (a: clsvQuestionnaireByQuesTypeEN, b: clsvQuestionnaireByQuesTypeEN) => {
return b.questionTypeName.localeCompare(a.questionTypeName);
}
case clsvQuestionnaireByQuesTypeEN.con_QuestionNum:
return (a: clsvQuestionnaireByQuesTypeEN, b: clsvQuestionnaireByQuesTypeEN) => {
return b.questionNum-a.questionNum;
}
case clsvQuestionnaireByQuesTypeEN.con_CourseId:
return (a: clsvQuestionnaireByQuesTypeEN, b: clsvQuestionnaireByQuesTypeEN) => {
return b.courseId.localeCompare(a.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaireByQuesType]中不存在!(in ${ vQuestionnaireByQuesType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByQuestionTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQuestionnaireByQuesType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId:
return (obj: clsvQuestionnaireByQuesTypeEN) => {
return obj.questionTypeId === value;
}
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName:
return (obj: clsvQuestionnaireByQuesTypeEN) => {
return obj.questionTypeName === value;
}
case clsvQuestionnaireByQuesTypeEN.con_QuestionNum:
return (obj: clsvQuestionnaireByQuesTypeEN) => {
return obj.questionNum === value;
}
case clsvQuestionnaireByQuesTypeEN.con_CourseId:
return (obj: clsvQuestionnaireByQuesTypeEN) => {
return obj.courseId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQuestionnaireByQuesType]中不存在!(in ${ vQuestionnaireByQuesType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQuestionnaireByQuesType__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQuestionnaireByQuesType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaireByQuesType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaireByQuesType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaireByQuesType_GetFirstObjAsync(strWhereCond: string): Promise<clsvQuestionnaireByQuesTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const objvQuestionnaireByQuesType = vQuestionnaireByQuesType_GetObjFromJsonObj(returnObj);
return objvQuestionnaireByQuesType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaireByQuesType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQuestionnaireByQuesTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaireByQuesType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
 * @param arrQuestionTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function vQuestionnaireByQuesType_GetObjLstByQuestionTypeIdLstAsync(arrQuestionTypeId: Array<string>): Promise<Array<clsvQuestionnaireByQuesTypeEN>>  
{
const strThisFuncName = "GetObjLstByQuestionTypeIdLstAsync";
const strAction = "GetObjLstByQuestionTypeIdLst";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrQuestionTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaireByQuesType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByQuestionTypeIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vQuestionnaireByQuesType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQuestionnaireByQuesTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaireByQuesType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaireByQuesType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQuestionnaireByQuesTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaireByQuesType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaireByQuesType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQuestionnaireByQuesTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQuestionnaireByQuesTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQuestionnaireByQuesType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaireByQuesType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
 * @param strQuestionTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQuestionnaireByQuesType_IsExistAsync(strQuestionTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strQuestionTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  async function vQuestionnaireByQuesType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vQuestionnaireByQuesType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQuestionnaireByQuesType_ConstructorName, strThisFuncName);
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
export  function vQuestionnaireByQuesType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function vQuestionnaireByQuesType_BindDdl_QuestionTypeIdByCourseIdInDiv(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvQuestionnaireByQuesTypeWApi.BindDdl_QuestionTypeIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaireByQuesTypeWApi.BindDdl_QuestionTypeIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_QuestionTypeIdByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionTypeIdByCourseIdInDivCache");
const strCondition = `courseId = '${ strCourseId }'`;
const arrObjLstSel = await vQuestionnaireByQuesType_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId, clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName, "vQuestionnaireByQuesType...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function vQuestionnaireByQuesType_GetArrvQuestionnaireByQuesTypeByCourseId(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvQuestionnaireByQuesTypeWApi.BindDdl_QuestionTypeIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaireByQuesTypeWApi.BindDdl_QuestionTypeIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_QuestionTypeIdByCourseIdInDivCache");
const arrvQuestionnaireByQuesType = new Array<clsvQuestionnaireByQuesTypeEN>();
const strCondition = `courseId = '${ strCourseId }'`;
const arrObjLstSel = await vQuestionnaireByQuesType_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsvQuestionnaireByQuesTypeEN();
obj0.questionTypeId = '0';
obj0.questionTypeName = '选vQuestionnaireByQuesType...';
arrvQuestionnaireByQuesType.push(obj0);
arrObjLstSel.forEach(x => arrvQuestionnaireByQuesType.push(x));
return arrvQuestionnaireByQuesType;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQuestionnaireByQuesType_GetJSONStrByObj (pobjvQuestionnaireByQuesTypeEN: clsvQuestionnaireByQuesTypeEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQuestionnaireByQuesTypeEN);
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
export  function vQuestionnaireByQuesType_GetObjLstByJSONStr (strJSON: string): Array<clsvQuestionnaireByQuesTypeEN>
{
let arrvQuestionnaireByQuesTypeObjLst = new Array<clsvQuestionnaireByQuesTypeEN>();
if (strJSON === "")
{
return arrvQuestionnaireByQuesTypeObjLst;
}
try
{
arrvQuestionnaireByQuesTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQuestionnaireByQuesTypeObjLst;
}
return arrvQuestionnaireByQuesTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQuestionnaireByQuesTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQuestionnaireByQuesType_GetObjLstByJSONObjLst (arrvQuestionnaireByQuesTypeObjLstS: Array<clsvQuestionnaireByQuesTypeEN>): Array<clsvQuestionnaireByQuesTypeEN>
{
const arrvQuestionnaireByQuesTypeObjLst = new Array<clsvQuestionnaireByQuesTypeEN>();
for (const objInFor of arrvQuestionnaireByQuesTypeObjLstS) {
const obj1 = vQuestionnaireByQuesType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQuestionnaireByQuesTypeObjLst.push(obj1);
}
return arrvQuestionnaireByQuesTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQuestionnaireByQuesType_GetObjByJSONStr (strJSON: string): clsvQuestionnaireByQuesTypeEN
{
let pobjvQuestionnaireByQuesTypeEN = new clsvQuestionnaireByQuesTypeEN();
if (strJSON === "")
{
return pobjvQuestionnaireByQuesTypeEN;
}
try
{
pobjvQuestionnaireByQuesTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQuestionnaireByQuesTypeEN;
}
return pobjvQuestionnaireByQuesTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQuestionnaireByQuesType_GetCombineCondition(objvQuestionnaireByQuesTypeCond: clsvQuestionnaireByQuesTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireByQuesTypeCond.dicFldComparisonOp, clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId) == true)
{
const strComparisonOpQuestionTypeId:string = objvQuestionnaireByQuesTypeCond.dicFldComparisonOp[clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId, objvQuestionnaireByQuesTypeCond.questionTypeId, strComparisonOpQuestionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireByQuesTypeCond.dicFldComparisonOp, clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName) == true)
{
const strComparisonOpQuestionTypeName:string = objvQuestionnaireByQuesTypeCond.dicFldComparisonOp[clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName, objvQuestionnaireByQuesTypeCond.questionTypeName, strComparisonOpQuestionTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireByQuesTypeCond.dicFldComparisonOp, clsvQuestionnaireByQuesTypeEN.con_QuestionNum) == true)
{
const strComparisonOpQuestionNum:string = objvQuestionnaireByQuesTypeCond.dicFldComparisonOp[clsvQuestionnaireByQuesTypeEN.con_QuestionNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQuestionnaireByQuesTypeEN.con_QuestionNum, objvQuestionnaireByQuesTypeCond.questionNum, strComparisonOpQuestionNum);
}
if (Object.prototype.hasOwnProperty.call(objvQuestionnaireByQuesTypeCond.dicFldComparisonOp, clsvQuestionnaireByQuesTypeEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvQuestionnaireByQuesTypeCond.dicFldComparisonOp[clsvQuestionnaireByQuesTypeEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQuestionnaireByQuesTypeEN.con_CourseId, objvQuestionnaireByQuesTypeCond.courseId, strComparisonOpCourseId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvQuestionnaireByQuesTypeENS:源对象
 * @param objvQuestionnaireByQuesTypeENT:目标对象
*/
export  function vQuestionnaireByQuesType_CopyObjTo(objvQuestionnaireByQuesTypeENS: clsvQuestionnaireByQuesTypeEN , objvQuestionnaireByQuesTypeENT: clsvQuestionnaireByQuesTypeEN ): void 
{
objvQuestionnaireByQuesTypeENT.questionTypeId = objvQuestionnaireByQuesTypeENS.questionTypeId; //题目类型Id
objvQuestionnaireByQuesTypeENT.questionTypeName = objvQuestionnaireByQuesTypeENS.questionTypeName; //题目类型名
objvQuestionnaireByQuesTypeENT.questionNum = objvQuestionnaireByQuesTypeENS.questionNum; //题目数
objvQuestionnaireByQuesTypeENT.courseId = objvQuestionnaireByQuesTypeENS.courseId; //课程Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQuestionnaireByQuesTypeENS:源对象
 * @param objvQuestionnaireByQuesTypeENT:目标对象
*/
export  function vQuestionnaireByQuesType_GetObjFromJsonObj(objvQuestionnaireByQuesTypeENS: clsvQuestionnaireByQuesTypeEN): clsvQuestionnaireByQuesTypeEN 
{
 const objvQuestionnaireByQuesTypeENT: clsvQuestionnaireByQuesTypeEN = new clsvQuestionnaireByQuesTypeEN();
ObjectAssign(objvQuestionnaireByQuesTypeENT, objvQuestionnaireByQuesTypeENS);
 return objvQuestionnaireByQuesTypeENT;
}