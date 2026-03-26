
 /**
 * 类名:clsge_KMLearningGoalsWApi
 * 表名:ge_KMLearningGoals(01120960)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:15
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
 * 知识点模块学习目标(ge_KMLearningGoals)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsge_KMLearningGoalsEN } from "@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_KMLearningGoals_Controller = "ge_KMLearningGoalsApi";
 export const ge_KMLearningGoals_ConstructorName = "ge_KMLearningGoals";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function ge_KMLearningGoals_SplitKeyLst(strKeyLst: string)  
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
userId: arrKey[0],
knowledgeModuleId: arrKey[1],
};
if (IsNullOrEmpty(objKeyLst.userId)== true)
{
const strMsg = "关键字段(userId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.knowledgeModuleId)== true)
{
const strMsg = "关键字段(knowledgeModuleId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function ge_KMLearningGoals_GetObjByKeyLstAsync(strUserId: string,strKnowledgeModuleId: string): Promise<clsge_KMLearningGoalsEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsge_KMLearningGoalsWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strKnowledgeModuleId) == true)
{
  const strMsg = Format("参数:[strKnowledgeModuleId]不能为空!(In clsge_KMLearningGoalsWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strKnowledgeModuleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strKnowledgeModuleId]的长度:[{0}]不正确!(clsge_KMLearningGoalsWApi.GetObjByKeyLstAsync)", strKnowledgeModuleId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId,
strKnowledgeModuleId,
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
const objge_KMLearningGoals = ge_KMLearningGoals_GetObjFromJsonObj(returnObj);
return objge_KMLearningGoals;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  function ge_KMLearningGoals_SortFunDefa(a:clsge_KMLearningGoalsEN , b:clsge_KMLearningGoalsEN): number 
{
return a.userId.localeCompare(b.userId);
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
export  function ge_KMLearningGoals_SortFunDefa2Fld(a:clsge_KMLearningGoalsEN , b:clsge_KMLearningGoalsEN): number 
{
if (a.masteryValue == b.masteryValue) return a.selfPerceivedValue - b.selfPerceivedValue;
else return a.masteryValue - b.masteryValue;
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
export  function ge_KMLearningGoals_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_KMLearningGoalsEN.con_UserId:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return a.userId.localeCompare(b.userId);
}
case clsge_KMLearningGoalsEN.con_KnowledgeModuleId:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return a.knowledgeModuleId.localeCompare(b.knowledgeModuleId);
}
case clsge_KMLearningGoalsEN.con_MasteryValue:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return a.masteryValue-b.masteryValue;
}
case clsge_KMLearningGoalsEN.con_SelfPerceivedValue:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return a.selfPerceivedValue-b.selfPerceivedValue;
}
case clsge_KMLearningGoalsEN.con_GoalValue:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return a.goalValue-b.goalValue;
}
case clsge_KMLearningGoalsEN.con_CourseId:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_KMLearningGoalsEN.con_UpdDate:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_KMLearningGoalsEN.con_UpdUser:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_KMLearningGoalsEN.con_Memo:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_KMLearningGoals]中不存在!(in ${ ge_KMLearningGoals_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_KMLearningGoalsEN.con_UserId:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return b.userId.localeCompare(a.userId);
}
case clsge_KMLearningGoalsEN.con_KnowledgeModuleId:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return b.knowledgeModuleId.localeCompare(a.knowledgeModuleId);
}
case clsge_KMLearningGoalsEN.con_MasteryValue:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return b.masteryValue-a.masteryValue;
}
case clsge_KMLearningGoalsEN.con_SelfPerceivedValue:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return b.selfPerceivedValue-a.selfPerceivedValue;
}
case clsge_KMLearningGoalsEN.con_GoalValue:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return b.goalValue-a.goalValue;
}
case clsge_KMLearningGoalsEN.con_CourseId:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_KMLearningGoalsEN.con_UpdDate:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_KMLearningGoalsEN.con_UpdUser:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_KMLearningGoalsEN.con_Memo:
return (a: clsge_KMLearningGoalsEN, b: clsge_KMLearningGoalsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_KMLearningGoals]中不存在!(in ${ ge_KMLearningGoals_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByUserIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ge_KMLearningGoals_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_KMLearningGoalsEN.con_UserId:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.userId === value;
}
case clsge_KMLearningGoalsEN.con_KnowledgeModuleId:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.knowledgeModuleId === value;
}
case clsge_KMLearningGoalsEN.con_MasteryValue:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.masteryValue === value;
}
case clsge_KMLearningGoalsEN.con_SelfPerceivedValue:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.selfPerceivedValue === value;
}
case clsge_KMLearningGoalsEN.con_GoalValue:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.goalValue === value;
}
case clsge_KMLearningGoalsEN.con_CourseId:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.courseId === value;
}
case clsge_KMLearningGoalsEN.con_UpdDate:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.updDate === value;
}
case clsge_KMLearningGoalsEN.con_UpdUser:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.updUser === value;
}
case clsge_KMLearningGoalsEN.con_Memo:
return (obj: clsge_KMLearningGoalsEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_KMLearningGoals]中不存在!(in ${ ge_KMLearningGoals_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_KMLearningGoals__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_KMLearningGoals_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_GetFirstObjAsync(strWhereCond: string): Promise<clsge_KMLearningGoalsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const objge_KMLearningGoals = ge_KMLearningGoals_GetObjFromJsonObj(returnObj);
return objge_KMLearningGoals;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_KMLearningGoalsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KMLearningGoals_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjLstByUserIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ge_KMLearningGoals_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_KMLearningGoalsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KMLearningGoals_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_KMLearningGoalsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KMLearningGoals_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_KMLearningGoalsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_KMLearningGoalsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KMLearningGoals_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
 * @param strUserId,strKnowledgeModuleId:关键字列表
 * @returns 获取删除的结果
 **/
export  async function ge_KMLearningGoals_DelRecKeyLstAsync(strUserId: string,strKnowledgeModuleId: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId, 
strKnowledgeModuleId, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_Delge_KMLearningGoalssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_KMLearningGoalssByCondAsync";
const strAction = "Delge_KMLearningGoalssByCond";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
 * @param objge_KMLearningGoalsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_KMLearningGoals_AddNewRecordAsync(objge_KMLearningGoalsEN: clsge_KMLearningGoalsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objge_KMLearningGoalsEN.userId === null || objge_KMLearningGoalsEN.userId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_KMLearningGoalsEN);
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KMLearningGoalsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
 * @param objge_KMLearningGoalsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_KMLearningGoals_AddNewRecordWithMaxIdAsync(objge_KMLearningGoalsEN: clsge_KMLearningGoalsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KMLearningGoalsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_AddNewObjSave(objge_KMLearningGoalsEN: clsge_KMLearningGoalsEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_KMLearningGoals_CheckPropertyNew(objge_KMLearningGoalsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_KMLearningGoals_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await ge_KMLearningGoals_IsExistAsync(objge_KMLearningGoalsEN.userId,objge_KMLearningGoalsEN.knowledgeModuleId,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objge_KMLearningGoalsEN.userId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await ge_KMLearningGoals_AddNewRecordAsync(objge_KMLearningGoalsEN);
if (returnBool == true)
{
//ge_KMLearningGoals_ReFreshCache();
}
else
{
const strInfo = `添加[知识点模块学习目标(ge_KMLearningGoals)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objge_KMLearningGoalsEN.userId }`;
strReturnKeyLst += `|${ objge_KMLearningGoalsEN.knowledgeModuleId }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_KMLearningGoals_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function ge_KMLearningGoals_UpdateObjSave(objge_KMLearningGoalsEN: clsge_KMLearningGoalsEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_KMLearningGoalsEN.sfUpdFldSetStr = objge_KMLearningGoalsEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_KMLearningGoalsEN.userId == "" || objge_KMLearningGoalsEN.userId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_KMLearningGoals_CheckProperty4Update(objge_KMLearningGoalsEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_KMLearningGoals_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await ge_KMLearningGoals_UpdateRecordAsync(objge_KMLearningGoalsEN);
if (returnBool == true)
{
//ge_KMLearningGoals_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_KMLearningGoals_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_KMLearningGoalsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_KMLearningGoals_AddNewRecordWithReturnKeyAsync(objge_KMLearningGoalsEN: clsge_KMLearningGoalsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KMLearningGoalsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
 * @param objge_KMLearningGoalsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_KMLearningGoals_UpdateRecordAsync(objge_KMLearningGoalsEN: clsge_KMLearningGoalsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_KMLearningGoalsEN.sfUpdFldSetStr === undefined || objge_KMLearningGoalsEN.sfUpdFldSetStr === null || objge_KMLearningGoalsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_KMLearningGoalsEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KMLearningGoalsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
 * @param objge_KMLearningGoalsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_KMLearningGoals_EditRecordExAsync(objge_KMLearningGoalsEN: clsge_KMLearningGoalsEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_KMLearningGoalsEN.sfUpdFldSetStr === undefined || objge_KMLearningGoalsEN.sfUpdFldSetStr === null || objge_KMLearningGoalsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_KMLearningGoalsEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KMLearningGoalsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
 * @param objge_KMLearningGoalsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_KMLearningGoals_UpdateWithConditionAsync(objge_KMLearningGoalsEN: clsge_KMLearningGoalsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_KMLearningGoalsEN.sfUpdFldSetStr === undefined || objge_KMLearningGoalsEN.sfUpdFldSetStr === null || objge_KMLearningGoalsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_KMLearningGoalsEN.userId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);
objge_KMLearningGoalsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KMLearningGoalsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
 * @param strUserId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_KMLearningGoals_IsExistAsync(strUserId: string,strKnowledgeModuleId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId,
strKnowledgeModuleId,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  async function ge_KMLearningGoals_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_KMLearningGoals_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KMLearningGoals_ConstructorName, strThisFuncName);
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
export  function ge_KMLearningGoals_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_KMLearningGoals_CheckPropertyNew(pobjge_KMLearningGoalsEN: clsge_KMLearningGoalsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.courseId) === true 
 || pobjge_KMLearningGoalsEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 知识点模块学习目标)!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.userId) == false && GetStrLen(pobjge_KMLearningGoalsEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.userId}(clsge_KMLearningGoalsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.knowledgeModuleId) == false && GetStrLen(pobjge_KMLearningGoalsEN.knowledgeModuleId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点模块Id(knowledgeModuleId)]的长度不能超过8(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.knowledgeModuleId}(clsge_KMLearningGoalsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.courseId) == false && GetStrLen(pobjge_KMLearningGoalsEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.courseId}(clsge_KMLearningGoalsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.updDate) == false && GetStrLen(pobjge_KMLearningGoalsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.updDate}(clsge_KMLearningGoalsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.updUser) == false && GetStrLen(pobjge_KMLearningGoalsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.updUser}(clsge_KMLearningGoalsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.memo) == false && GetStrLen(pobjge_KMLearningGoalsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.memo}(clsge_KMLearningGoalsBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.userId) == false && undefined !== pobjge_KMLearningGoalsEN.userId && tzDataType.isString(pobjge_KMLearningGoalsEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_KMLearningGoalsEN.userId}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.knowledgeModuleId) == false && undefined !== pobjge_KMLearningGoalsEN.knowledgeModuleId && tzDataType.isString(pobjge_KMLearningGoalsEN.knowledgeModuleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点模块Id(knowledgeModuleId)]的值:[${pobjge_KMLearningGoalsEN.knowledgeModuleId}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
if (null != pobjge_KMLearningGoalsEN.masteryValue && undefined !== pobjge_KMLearningGoalsEN.masteryValue && tzDataType.isNumber(pobjge_KMLearningGoalsEN.masteryValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握度(masteryValue)]的值:[${pobjge_KMLearningGoalsEN.masteryValue}], 非法,应该为数值型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
if (null != pobjge_KMLearningGoalsEN.selfPerceivedValue && undefined !== pobjge_KMLearningGoalsEN.selfPerceivedValue && tzDataType.isNumber(pobjge_KMLearningGoalsEN.selfPerceivedValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[自我认为值(selfPerceivedValue)]的值:[${pobjge_KMLearningGoalsEN.selfPerceivedValue}], 非法,应该为数值型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
if (null != pobjge_KMLearningGoalsEN.goalValue && undefined !== pobjge_KMLearningGoalsEN.goalValue && tzDataType.isNumber(pobjge_KMLearningGoalsEN.goalValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[目标值(goalValue)]的值:[${pobjge_KMLearningGoalsEN.goalValue}], 非法,应该为数值型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.courseId) == false && undefined !== pobjge_KMLearningGoalsEN.courseId && tzDataType.isString(pobjge_KMLearningGoalsEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_KMLearningGoalsEN.courseId}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.updDate) == false && undefined !== pobjge_KMLearningGoalsEN.updDate && tzDataType.isString(pobjge_KMLearningGoalsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_KMLearningGoalsEN.updDate}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.updUser) == false && undefined !== pobjge_KMLearningGoalsEN.updUser && tzDataType.isString(pobjge_KMLearningGoalsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_KMLearningGoalsEN.updUser}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.memo) == false && undefined !== pobjge_KMLearningGoalsEN.memo && tzDataType.isString(pobjge_KMLearningGoalsEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_KMLearningGoalsEN.memo}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.courseId) == false && pobjge_KMLearningGoalsEN.courseId != '[nuull]' && GetStrLen(pobjge_KMLearningGoalsEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 知识点模块学习目标)!(clsge_KMLearningGoalsBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_KMLearningGoals_CheckProperty4Update(pobjge_KMLearningGoalsEN: clsge_KMLearningGoalsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.userId) == false && GetStrLen(pobjge_KMLearningGoalsEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.userId}(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.knowledgeModuleId) == false && GetStrLen(pobjge_KMLearningGoalsEN.knowledgeModuleId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点模块Id(knowledgeModuleId)]的长度不能超过8(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.knowledgeModuleId}(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.courseId) == false && GetStrLen(pobjge_KMLearningGoalsEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.courseId}(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.updDate) == false && GetStrLen(pobjge_KMLearningGoalsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.updDate}(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.updUser) == false && GetStrLen(pobjge_KMLearningGoalsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.updUser}(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.memo) == false && GetStrLen(pobjge_KMLearningGoalsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点模块学习目标(ge_KMLearningGoals))!值:${pobjge_KMLearningGoalsEN.memo}(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.userId) == false && undefined !== pobjge_KMLearningGoalsEN.userId && tzDataType.isString(pobjge_KMLearningGoalsEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_KMLearningGoalsEN.userId}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.knowledgeModuleId) == false && undefined !== pobjge_KMLearningGoalsEN.knowledgeModuleId && tzDataType.isString(pobjge_KMLearningGoalsEN.knowledgeModuleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点模块Id(knowledgeModuleId)]的值:[${pobjge_KMLearningGoalsEN.knowledgeModuleId}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (null != pobjge_KMLearningGoalsEN.masteryValue && undefined !== pobjge_KMLearningGoalsEN.masteryValue && tzDataType.isNumber(pobjge_KMLearningGoalsEN.masteryValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握度(masteryValue)]的值:[${pobjge_KMLearningGoalsEN.masteryValue}], 非法,应该为数值型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (null != pobjge_KMLearningGoalsEN.selfPerceivedValue && undefined !== pobjge_KMLearningGoalsEN.selfPerceivedValue && tzDataType.isNumber(pobjge_KMLearningGoalsEN.selfPerceivedValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[自我认为值(selfPerceivedValue)]的值:[${pobjge_KMLearningGoalsEN.selfPerceivedValue}], 非法,应该为数值型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (null != pobjge_KMLearningGoalsEN.goalValue && undefined !== pobjge_KMLearningGoalsEN.goalValue && tzDataType.isNumber(pobjge_KMLearningGoalsEN.goalValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[目标值(goalValue)]的值:[${pobjge_KMLearningGoalsEN.goalValue}], 非法,应该为数值型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.courseId) == false && undefined !== pobjge_KMLearningGoalsEN.courseId && tzDataType.isString(pobjge_KMLearningGoalsEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_KMLearningGoalsEN.courseId}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.updDate) == false && undefined !== pobjge_KMLearningGoalsEN.updDate && tzDataType.isString(pobjge_KMLearningGoalsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_KMLearningGoalsEN.updDate}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.updUser) == false && undefined !== pobjge_KMLearningGoalsEN.updUser && tzDataType.isString(pobjge_KMLearningGoalsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_KMLearningGoalsEN.updUser}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.memo) == false && undefined !== pobjge_KMLearningGoalsEN.memo && tzDataType.isString(pobjge_KMLearningGoalsEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_KMLearningGoalsEN.memo}], 非法,应该为字符型(In 知识点模块学习目标(ge_KMLearningGoals))!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.userId) === true )
{
 throw new Error(`(errid:Watl000064)字段[用户ID]不能为空(In 知识点模块学习目标)!(clsge_KMLearningGoalsBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_KMLearningGoalsEN.courseId) == false && pobjge_KMLearningGoalsEN.courseId != '[nuull]' && GetStrLen(pobjge_KMLearningGoalsEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 知识点模块学习目标)!(clsge_KMLearningGoalsBL:CheckPropertyNew)");
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
export  function ge_KMLearningGoals_GetJSONStrByObj (pobjge_KMLearningGoalsEN: clsge_KMLearningGoalsEN): string
{
pobjge_KMLearningGoalsEN.sfUpdFldSetStr = pobjge_KMLearningGoalsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_KMLearningGoalsEN);
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
export  function ge_KMLearningGoals_GetObjLstByJSONStr (strJSON: string): Array<clsge_KMLearningGoalsEN>
{
let arrge_KMLearningGoalsObjLst = new Array<clsge_KMLearningGoalsEN>();
if (strJSON === "")
{
return arrge_KMLearningGoalsObjLst;
}
try
{
arrge_KMLearningGoalsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_KMLearningGoalsObjLst;
}
return arrge_KMLearningGoalsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_KMLearningGoalsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_KMLearningGoals_GetObjLstByJSONObjLst (arrge_KMLearningGoalsObjLstS: Array<clsge_KMLearningGoalsEN>): Array<clsge_KMLearningGoalsEN>
{
const arrge_KMLearningGoalsObjLst = new Array<clsge_KMLearningGoalsEN>();
for (const objInFor of arrge_KMLearningGoalsObjLstS) {
const obj1 = ge_KMLearningGoals_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_KMLearningGoalsObjLst.push(obj1);
}
return arrge_KMLearningGoalsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_KMLearningGoals_GetObjByJSONStr (strJSON: string): clsge_KMLearningGoalsEN
{
let pobjge_KMLearningGoalsEN = new clsge_KMLearningGoalsEN();
if (strJSON === "")
{
return pobjge_KMLearningGoalsEN;
}
try
{
pobjge_KMLearningGoalsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_KMLearningGoalsEN;
}
return pobjge_KMLearningGoalsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_KMLearningGoals_GetCombineCondition(objge_KMLearningGoalsCond: clsge_KMLearningGoalsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_KMLearningGoalsCond.dicFldComparisonOp, clsge_KMLearningGoalsEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_KMLearningGoalsCond.dicFldComparisonOp[clsge_KMLearningGoalsEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KMLearningGoalsEN.con_UserId, objge_KMLearningGoalsCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_KMLearningGoalsCond.dicFldComparisonOp, clsge_KMLearningGoalsEN.con_KnowledgeModuleId) == true)
{
const strComparisonOpKnowledgeModuleId:string = objge_KMLearningGoalsCond.dicFldComparisonOp[clsge_KMLearningGoalsEN.con_KnowledgeModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KMLearningGoalsEN.con_KnowledgeModuleId, objge_KMLearningGoalsCond.knowledgeModuleId, strComparisonOpKnowledgeModuleId);
}
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objge_KMLearningGoalsCond.dicFldComparisonOp, clsge_KMLearningGoalsEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_KMLearningGoalsCond.dicFldComparisonOp[clsge_KMLearningGoalsEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KMLearningGoalsEN.con_CourseId, objge_KMLearningGoalsCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_KMLearningGoalsCond.dicFldComparisonOp, clsge_KMLearningGoalsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_KMLearningGoalsCond.dicFldComparisonOp[clsge_KMLearningGoalsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KMLearningGoalsEN.con_UpdDate, objge_KMLearningGoalsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_KMLearningGoalsCond.dicFldComparisonOp, clsge_KMLearningGoalsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_KMLearningGoalsCond.dicFldComparisonOp[clsge_KMLearningGoalsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KMLearningGoalsEN.con_UpdUser, objge_KMLearningGoalsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_KMLearningGoalsCond.dicFldComparisonOp, clsge_KMLearningGoalsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_KMLearningGoalsCond.dicFldComparisonOp[clsge_KMLearningGoalsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KMLearningGoalsEN.con_Memo, objge_KMLearningGoalsCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_KMLearningGoalsENS:源对象
 * @param objge_KMLearningGoalsENT:目标对象
*/
export  function ge_KMLearningGoals_CopyObjTo(objge_KMLearningGoalsENS: clsge_KMLearningGoalsEN , objge_KMLearningGoalsENT: clsge_KMLearningGoalsEN ): void 
{
objge_KMLearningGoalsENT.userId = objge_KMLearningGoalsENS.userId; //用户ID
objge_KMLearningGoalsENT.knowledgeModuleId = objge_KMLearningGoalsENS.knowledgeModuleId; //知识点模块Id
objge_KMLearningGoalsENT.masteryValue = objge_KMLearningGoalsENS.masteryValue; //掌握度
objge_KMLearningGoalsENT.selfPerceivedValue = objge_KMLearningGoalsENS.selfPerceivedValue; //自我认为值
objge_KMLearningGoalsENT.goalValue = objge_KMLearningGoalsENS.goalValue; //目标值
objge_KMLearningGoalsENT.courseId = objge_KMLearningGoalsENS.courseId; //课程Id
objge_KMLearningGoalsENT.updDate = objge_KMLearningGoalsENS.updDate; //修改日期
objge_KMLearningGoalsENT.updUser = objge_KMLearningGoalsENS.updUser; //修改人
objge_KMLearningGoalsENT.memo = objge_KMLearningGoalsENS.memo; //备注
objge_KMLearningGoalsENT.sfUpdFldSetStr = objge_KMLearningGoalsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_KMLearningGoalsENS:源对象
 * @param objge_KMLearningGoalsENT:目标对象
*/
export  function ge_KMLearningGoals_GetObjFromJsonObj(objge_KMLearningGoalsENS: clsge_KMLearningGoalsEN): clsge_KMLearningGoalsEN 
{
 const objge_KMLearningGoalsENT: clsge_KMLearningGoalsEN = new clsge_KMLearningGoalsEN();
ObjectAssign(objge_KMLearningGoalsENT, objge_KMLearningGoalsENS);
 return objge_KMLearningGoalsENT;
}