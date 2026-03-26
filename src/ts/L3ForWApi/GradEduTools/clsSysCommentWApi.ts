
 /**
 * 类名:clsSysCommentWApi
 * 表名:SysComment(01120622)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:51
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 系统评论表(SysComment)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsSysCommentEN } from "@/ts/L0Entity/GradEduTools/clsSysCommentEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const sysComment_Controller = "SysCommentApi";
 export const sysComment_ConstructorName = "sysComment";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCommentId:关键字
 * @returns 对象
 **/
export  async function SysComment_GetObjByCommentIdAsync(strCommentId: string): Promise<clsSysCommentEN|null>  
{
const strThisFuncName = "GetObjByCommentIdAsync";

if (IsNullOrEmpty(strCommentId) == true)
{
  const strMsg = Format("参数:[strCommentId]不能为空!(In clsSysCommentWApi.GetObjByCommentIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCommentId.length != 10)
{
const strMsg = Format("缓存分类变量:[strCommentId]的长度:[{0}]不正确!(clsSysCommentWApi.GetObjByCommentIdAsync)", strCommentId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCommentId";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCommentId,
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
const objSysComment = SysComment_GetObjFromJsonObj(returnObj);
return objSysComment;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByCommentIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByCommentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function SysComment_SortFunDefa(a:clsSysCommentEN , b:clsSysCommentEN): number 
{
return a.commentId.localeCompare(b.commentId);
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
export  function SysComment_SortFunDefa2Fld(a:clsSysCommentEN , b:clsSysCommentEN): number 
{
if (a.commentTypeId == b.commentTypeId) return a.scoreType.localeCompare(b.scoreType);
else return a.commentTypeId.localeCompare(b.commentTypeId);
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
export  function SysComment_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSysCommentEN.con_CommentId:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
return a.commentId.localeCompare(b.commentId);
}
case clsSysCommentEN.con_CommentTypeId:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
return a.commentTypeId.localeCompare(b.commentTypeId);
}
case clsSysCommentEN.con_ScoreType:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.scoreType == null) return -1;
if (b.scoreType == null) return 1;
return a.scoreType.localeCompare(b.scoreType);
}
case clsSysCommentEN.con_TableKey:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.tableKey == null) return -1;
if (b.tableKey == null) return 1;
return a.tableKey.localeCompare(b.tableKey);
}
case clsSysCommentEN.con_OkCount:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
return a.okCount-b.okCount;
}
case clsSysCommentEN.con_PubParentId:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.pubParentId == null) return -1;
if (b.pubParentId == null) return 1;
return a.pubParentId.localeCompare(b.pubParentId);
}
case clsSysCommentEN.con_IdCurrEduCls:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsSysCommentEN.con_UserId:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsSysCommentEN.con_Week:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
return a.week-b.week;
}
case clsSysCommentEN.con_WeekTimeRange:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.weekTimeRange == null) return -1;
if (b.weekTimeRange == null) return 1;
return a.weekTimeRange.localeCompare(b.weekTimeRange);
}
case clsSysCommentEN.con_UpdUser:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsSysCommentEN.con_UpdDate:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsSysCommentEN.con_Memo:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysComment]中不存在!(in ${ sysComment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSysCommentEN.con_CommentId:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
return b.commentId.localeCompare(a.commentId);
}
case clsSysCommentEN.con_CommentTypeId:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
return b.commentTypeId.localeCompare(a.commentTypeId);
}
case clsSysCommentEN.con_ScoreType:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.scoreType == null) return -1;
if (a.scoreType == null) return 1;
return b.scoreType.localeCompare(a.scoreType);
}
case clsSysCommentEN.con_TableKey:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.tableKey == null) return -1;
if (a.tableKey == null) return 1;
return b.tableKey.localeCompare(a.tableKey);
}
case clsSysCommentEN.con_OkCount:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
return b.okCount-a.okCount;
}
case clsSysCommentEN.con_PubParentId:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.pubParentId == null) return -1;
if (a.pubParentId == null) return 1;
return b.pubParentId.localeCompare(a.pubParentId);
}
case clsSysCommentEN.con_IdCurrEduCls:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsSysCommentEN.con_UserId:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsSysCommentEN.con_Week:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
return b.week-a.week;
}
case clsSysCommentEN.con_WeekTimeRange:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.weekTimeRange == null) return -1;
if (a.weekTimeRange == null) return 1;
return b.weekTimeRange.localeCompare(a.weekTimeRange);
}
case clsSysCommentEN.con_UpdUser:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsSysCommentEN.con_UpdDate:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsSysCommentEN.con_Memo:
return (a: clsSysCommentEN, b: clsSysCommentEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysComment]中不存在!(in ${ sysComment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByCommentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function SysComment_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSysCommentEN.con_CommentId:
return (obj: clsSysCommentEN) => {
return obj.commentId === value;
}
case clsSysCommentEN.con_CommentTypeId:
return (obj: clsSysCommentEN) => {
return obj.commentTypeId === value;
}
case clsSysCommentEN.con_ScoreType:
return (obj: clsSysCommentEN) => {
return obj.scoreType === value;
}
case clsSysCommentEN.con_TableKey:
return (obj: clsSysCommentEN) => {
return obj.tableKey === value;
}
case clsSysCommentEN.con_OkCount:
return (obj: clsSysCommentEN) => {
return obj.okCount === value;
}
case clsSysCommentEN.con_PubParentId:
return (obj: clsSysCommentEN) => {
return obj.pubParentId === value;
}
case clsSysCommentEN.con_IdCurrEduCls:
return (obj: clsSysCommentEN) => {
return obj.idCurrEduCls === value;
}
case clsSysCommentEN.con_UserId:
return (obj: clsSysCommentEN) => {
return obj.userId === value;
}
case clsSysCommentEN.con_Week:
return (obj: clsSysCommentEN) => {
return obj.week === value;
}
case clsSysCommentEN.con_WeekTimeRange:
return (obj: clsSysCommentEN) => {
return obj.weekTimeRange === value;
}
case clsSysCommentEN.con_UpdUser:
return (obj: clsSysCommentEN) => {
return obj.updUser === value;
}
case clsSysCommentEN.con_UpdDate:
return (obj: clsSysCommentEN) => {
return obj.updDate === value;
}
case clsSysCommentEN.con_Memo:
return (obj: clsSysCommentEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysComment]中不存在!(in ${ sysComment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[SysComment__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysComment_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetFirstObjAsync(strWhereCond: string): Promise<clsSysCommentEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const objSysComment = SysComment_GetObjFromJsonObj(returnObj);
return objSysComment;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSysCommentEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysComment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysComment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param arrCommentId:关键字列表
 * @returns 对象列表
 **/
export  async function SysComment_GetObjLstByCommentIdLstAsync(arrCommentId: Array<string>): Promise<Array<clsSysCommentEN>>  
{
const strThisFuncName = "GetObjLstByCommentIdLstAsync";
const strAction = "GetObjLstByCommentIdLst";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCommentId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysComment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysComment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByCommentIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function SysComment_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSysCommentEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysComment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysComment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSysCommentEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysComment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysComment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsSysCommentEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsSysCommentEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysComment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysComment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param strCommentId:关键字
 * @returns 获取删除的结果
 **/
export  async function SysComment_DelRecordAsync(strCommentId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(sysComment_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strCommentId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param arrCommentId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SysComment_DelSysCommentsAsync(arrCommentId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSysCommentsAsync";
const strAction = "DelSysComments";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCommentId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_DelSysCommentsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSysCommentsByCondAsync";
const strAction = "DelSysCommentsByCond";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param objSysCommentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SysComment_AddNewRecordAsync(objSysCommentEN: clsSysCommentEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objSysCommentEN);
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCommentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param objSysCommentEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SysComment_AddNewRecordWithMaxIdAsync(objSysCommentEN: clsSysCommentEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCommentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_AddNewObjSave(objSysCommentEN: clsSysCommentEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
SysComment_CheckPropertyNew(objSysCommentEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ sysComment_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await SysComment_CheckUniCond4Add(objSysCommentEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await SysComment_AddNewRecordWithMaxIdAsync(objSysCommentEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//SysComment_ReFreshCache(objSysCommentEN.idCurrEduCls);
}
else
{
const strInfo = `添加[系统评论表(SysComment)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ sysComment_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function SysComment_CheckUniCond4Add(objSysCommentEN: clsSysCommentEN): Promise<boolean>{
const strUniquenessCondition = SysComment_GetUniCondStr(objSysCommentEN);
const bolIsExistCondition = await SysComment_IsExistRecordAsync(strUniquenessCondition);
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
export  async function SysComment_CheckUniCond4Update(objSysCommentEN: clsSysCommentEN): Promise<boolean>{
const strUniquenessCondition = SysComment_GetUniCondStr4Update(objSysCommentEN);
const bolIsExistCondition = await SysComment_IsExistRecordAsync(strUniquenessCondition);
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
export  async function SysComment_UpdateObjSave(objSysCommentEN: clsSysCommentEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objSysCommentEN.sfUpdFldSetStr = objSysCommentEN.updFldString;//设置哪些字段被修改(脏字段)
if (objSysCommentEN.commentId == "" || objSysCommentEN.commentId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
SysComment_CheckProperty4Update(objSysCommentEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ sysComment_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await SysComment_CheckUniCond4Update(objSysCommentEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await SysComment_UpdateRecordAsync(objSysCommentEN);
if (returnBool == true)
{
//SysComment_ReFreshCache(objSysCommentEN.idCurrEduCls);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ sysComment_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSysCommentEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SysComment_AddNewRecordWithReturnKeyAsync(objSysCommentEN: clsSysCommentEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCommentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param objSysCommentEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SysComment_UpdateRecordAsync(objSysCommentEN: clsSysCommentEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSysCommentEN.sfUpdFldSetStr === undefined || objSysCommentEN.sfUpdFldSetStr === null || objSysCommentEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysCommentEN.commentId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCommentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param objSysCommentEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SysComment_EditRecordExAsync(objSysCommentEN: clsSysCommentEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objSysCommentEN.sfUpdFldSetStr === undefined || objSysCommentEN.sfUpdFldSetStr === null || objSysCommentEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysCommentEN.commentId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCommentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param objSysCommentEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysComment_UpdateWithConditionAsync(objSysCommentEN: clsSysCommentEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSysCommentEN.sfUpdFldSetStr === undefined || objSysCommentEN.sfUpdFldSetStr === null || objSysCommentEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysCommentEN.commentId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);
objSysCommentEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysCommentEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
 * @param strCommentId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SysComment_IsExistAsync(strCommentId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCommentId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  async function SysComment_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(sysComment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysComment_ConstructorName, strThisFuncName);
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
export  function SysComment_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SysComment_CheckPropertyNew(pobjSysCommentEN: clsSysCommentEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjSysCommentEN.commentTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[评论类型Id]不能为空(In 系统评论表)!(clsSysCommentBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysCommentEN.commentId) == false && GetStrLen(pobjSysCommentEN.commentId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[评论Id(commentId)]的长度不能超过10(In 系统评论表(SysComment))!值:${pobjSysCommentEN.commentId}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.commentTypeId) == false && GetStrLen(pobjSysCommentEN.commentTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[评论类型Id(commentTypeId)]的长度不能超过2(In 系统评论表(SysComment))!值:${pobjSysCommentEN.commentTypeId}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.scoreType) == false && GetStrLen(pobjSysCommentEN.scoreType) > 1)
{
 throw new Error(`(errid:Watl000413)字段[评分类型(scoreType)]的长度不能超过1(In 系统评论表(SysComment))!值:${pobjSysCommentEN.scoreType}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.tableKey) == false && GetStrLen(pobjSysCommentEN.tableKey) > 20)
{
 throw new Error(`(errid:Watl000413)字段[表主键(tableKey)]的长度不能超过20(In 系统评论表(SysComment))!值:${pobjSysCommentEN.tableKey}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.pubParentId) == false && GetStrLen(pobjSysCommentEN.pubParentId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[公共父Id(pubParentId)]的长度不能超过20(In 系统评论表(SysComment))!值:${pobjSysCommentEN.pubParentId}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.idCurrEduCls) == false && GetStrLen(pobjSysCommentEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 系统评论表(SysComment))!值:${pobjSysCommentEN.idCurrEduCls}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.userId) == false && GetStrLen(pobjSysCommentEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 系统评论表(SysComment))!值:${pobjSysCommentEN.userId}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.weekTimeRange) == false && GetStrLen(pobjSysCommentEN.weekTimeRange) > 100)
{
 throw new Error(`(errid:Watl000413)字段[WeekTimeRange(weekTimeRange)]的长度不能超过100(In 系统评论表(SysComment))!值:${pobjSysCommentEN.weekTimeRange}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.updUser) == false && GetStrLen(pobjSysCommentEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 系统评论表(SysComment))!值:${pobjSysCommentEN.updUser}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.updDate) == false && GetStrLen(pobjSysCommentEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 系统评论表(SysComment))!值:${pobjSysCommentEN.updDate}(clsSysCommentBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.memo) == false && GetStrLen(pobjSysCommentEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 系统评论表(SysComment))!值:${pobjSysCommentEN.memo}(clsSysCommentBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSysCommentEN.commentId) == false && undefined !== pobjSysCommentEN.commentId && tzDataType.isString(pobjSysCommentEN.commentId) === false)
{
 throw new Error(`(errid:Watl000414)字段[评论Id(commentId)]的值:[${pobjSysCommentEN.commentId}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.commentTypeId) == false && undefined !== pobjSysCommentEN.commentTypeId && tzDataType.isString(pobjSysCommentEN.commentTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[评论类型Id(commentTypeId)]的值:[${pobjSysCommentEN.commentTypeId}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.scoreType) == false && undefined !== pobjSysCommentEN.scoreType && tzDataType.isString(pobjSysCommentEN.scoreType) === false)
{
 throw new Error(`(errid:Watl000414)字段[评分类型(scoreType)]的值:[${pobjSysCommentEN.scoreType}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.tableKey) == false && undefined !== pobjSysCommentEN.tableKey && tzDataType.isString(pobjSysCommentEN.tableKey) === false)
{
 throw new Error(`(errid:Watl000414)字段[表主键(tableKey)]的值:[${pobjSysCommentEN.tableKey}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (null != pobjSysCommentEN.okCount && undefined !== pobjSysCommentEN.okCount && tzDataType.isNumber(pobjSysCommentEN.okCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[点赞统计(okCount)]的值:[${pobjSysCommentEN.okCount}], 非法,应该为数值型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.pubParentId) == false && undefined !== pobjSysCommentEN.pubParentId && tzDataType.isString(pobjSysCommentEN.pubParentId) === false)
{
 throw new Error(`(errid:Watl000414)字段[公共父Id(pubParentId)]的值:[${pobjSysCommentEN.pubParentId}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.idCurrEduCls) == false && undefined !== pobjSysCommentEN.idCurrEduCls && tzDataType.isString(pobjSysCommentEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjSysCommentEN.idCurrEduCls}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.userId) == false && undefined !== pobjSysCommentEN.userId && tzDataType.isString(pobjSysCommentEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjSysCommentEN.userId}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (null != pobjSysCommentEN.week && undefined !== pobjSysCommentEN.week && tzDataType.isNumber(pobjSysCommentEN.week) === false)
{
 throw new Error(`(errid:Watl000414)字段[周(week)]的值:[${pobjSysCommentEN.week}], 非法,应该为数值型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.weekTimeRange) == false && undefined !== pobjSysCommentEN.weekTimeRange && tzDataType.isString(pobjSysCommentEN.weekTimeRange) === false)
{
 throw new Error(`(errid:Watl000414)字段[WeekTimeRange(weekTimeRange)]的值:[${pobjSysCommentEN.weekTimeRange}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.updUser) == false && undefined !== pobjSysCommentEN.updUser && tzDataType.isString(pobjSysCommentEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjSysCommentEN.updUser}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.updDate) == false && undefined !== pobjSysCommentEN.updDate && tzDataType.isString(pobjSysCommentEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjSysCommentEN.updDate}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.memo) == false && undefined !== pobjSysCommentEN.memo && tzDataType.isString(pobjSysCommentEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjSysCommentEN.memo}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SysComment_CheckProperty4Update(pobjSysCommentEN: clsSysCommentEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysCommentEN.commentId) == false && GetStrLen(pobjSysCommentEN.commentId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[评论Id(commentId)]的长度不能超过10(In 系统评论表(SysComment))!值:${pobjSysCommentEN.commentId}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.commentTypeId) == false && GetStrLen(pobjSysCommentEN.commentTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[评论类型Id(commentTypeId)]的长度不能超过2(In 系统评论表(SysComment))!值:${pobjSysCommentEN.commentTypeId}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.scoreType) == false && GetStrLen(pobjSysCommentEN.scoreType) > 1)
{
 throw new Error(`(errid:Watl000416)字段[评分类型(scoreType)]的长度不能超过1(In 系统评论表(SysComment))!值:${pobjSysCommentEN.scoreType}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.tableKey) == false && GetStrLen(pobjSysCommentEN.tableKey) > 20)
{
 throw new Error(`(errid:Watl000416)字段[表主键(tableKey)]的长度不能超过20(In 系统评论表(SysComment))!值:${pobjSysCommentEN.tableKey}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.pubParentId) == false && GetStrLen(pobjSysCommentEN.pubParentId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[公共父Id(pubParentId)]的长度不能超过20(In 系统评论表(SysComment))!值:${pobjSysCommentEN.pubParentId}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.idCurrEduCls) == false && GetStrLen(pobjSysCommentEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 系统评论表(SysComment))!值:${pobjSysCommentEN.idCurrEduCls}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.userId) == false && GetStrLen(pobjSysCommentEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 系统评论表(SysComment))!值:${pobjSysCommentEN.userId}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.weekTimeRange) == false && GetStrLen(pobjSysCommentEN.weekTimeRange) > 100)
{
 throw new Error(`(errid:Watl000416)字段[WeekTimeRange(weekTimeRange)]的长度不能超过100(In 系统评论表(SysComment))!值:${pobjSysCommentEN.weekTimeRange}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.updUser) == false && GetStrLen(pobjSysCommentEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 系统评论表(SysComment))!值:${pobjSysCommentEN.updUser}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.updDate) == false && GetStrLen(pobjSysCommentEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 系统评论表(SysComment))!值:${pobjSysCommentEN.updDate}(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.memo) == false && GetStrLen(pobjSysCommentEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 系统评论表(SysComment))!值:${pobjSysCommentEN.memo}(clsSysCommentBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSysCommentEN.commentId) == false && undefined !== pobjSysCommentEN.commentId && tzDataType.isString(pobjSysCommentEN.commentId) === false)
{
 throw new Error(`(errid:Watl000417)字段[评论Id(commentId)]的值:[${pobjSysCommentEN.commentId}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.commentTypeId) == false && undefined !== pobjSysCommentEN.commentTypeId && tzDataType.isString(pobjSysCommentEN.commentTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[评论类型Id(commentTypeId)]的值:[${pobjSysCommentEN.commentTypeId}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.scoreType) == false && undefined !== pobjSysCommentEN.scoreType && tzDataType.isString(pobjSysCommentEN.scoreType) === false)
{
 throw new Error(`(errid:Watl000417)字段[评分类型(scoreType)]的值:[${pobjSysCommentEN.scoreType}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.tableKey) == false && undefined !== pobjSysCommentEN.tableKey && tzDataType.isString(pobjSysCommentEN.tableKey) === false)
{
 throw new Error(`(errid:Watl000417)字段[表主键(tableKey)]的值:[${pobjSysCommentEN.tableKey}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (null != pobjSysCommentEN.okCount && undefined !== pobjSysCommentEN.okCount && tzDataType.isNumber(pobjSysCommentEN.okCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[点赞统计(okCount)]的值:[${pobjSysCommentEN.okCount}], 非法,应该为数值型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.pubParentId) == false && undefined !== pobjSysCommentEN.pubParentId && tzDataType.isString(pobjSysCommentEN.pubParentId) === false)
{
 throw new Error(`(errid:Watl000417)字段[公共父Id(pubParentId)]的值:[${pobjSysCommentEN.pubParentId}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.idCurrEduCls) == false && undefined !== pobjSysCommentEN.idCurrEduCls && tzDataType.isString(pobjSysCommentEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjSysCommentEN.idCurrEduCls}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.userId) == false && undefined !== pobjSysCommentEN.userId && tzDataType.isString(pobjSysCommentEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjSysCommentEN.userId}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (null != pobjSysCommentEN.week && undefined !== pobjSysCommentEN.week && tzDataType.isNumber(pobjSysCommentEN.week) === false)
{
 throw new Error(`(errid:Watl000417)字段[周(week)]的值:[${pobjSysCommentEN.week}], 非法,应该为数值型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.weekTimeRange) == false && undefined !== pobjSysCommentEN.weekTimeRange && tzDataType.isString(pobjSysCommentEN.weekTimeRange) === false)
{
 throw new Error(`(errid:Watl000417)字段[WeekTimeRange(weekTimeRange)]的值:[${pobjSysCommentEN.weekTimeRange}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.updUser) == false && undefined !== pobjSysCommentEN.updUser && tzDataType.isString(pobjSysCommentEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjSysCommentEN.updUser}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.updDate) == false && undefined !== pobjSysCommentEN.updDate && tzDataType.isString(pobjSysCommentEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjSysCommentEN.updDate}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSysCommentEN.memo) == false && undefined !== pobjSysCommentEN.memo && tzDataType.isString(pobjSysCommentEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjSysCommentEN.memo}], 非法,应该为字符型(In 系统评论表(SysComment))!(clsSysCommentBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SysComment_GetJSONStrByObj (pobjSysCommentEN: clsSysCommentEN): string
{
pobjSysCommentEN.sfUpdFldSetStr = pobjSysCommentEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSysCommentEN);
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
export  function SysComment_GetObjLstByJSONStr (strJSON: string): Array<clsSysCommentEN>
{
let arrSysCommentObjLst = new Array<clsSysCommentEN>();
if (strJSON === "")
{
return arrSysCommentObjLst;
}
try
{
arrSysCommentObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSysCommentObjLst;
}
return arrSysCommentObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysCommentObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SysComment_GetObjLstByJSONObjLst (arrSysCommentObjLstS: Array<clsSysCommentEN>): Array<clsSysCommentEN>
{
const arrSysCommentObjLst = new Array<clsSysCommentEN>();
for (const objInFor of arrSysCommentObjLstS) {
const obj1 = SysComment_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSysCommentObjLst.push(obj1);
}
return arrSysCommentObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SysComment_GetObjByJSONStr (strJSON: string): clsSysCommentEN
{
let pobjSysCommentEN = new clsSysCommentEN();
if (strJSON === "")
{
return pobjSysCommentEN;
}
try
{
pobjSysCommentEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSysCommentEN;
}
return pobjSysCommentEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SysComment_GetCombineCondition(objSysCommentCond: clsSysCommentEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_CommentId) == true)
{
const strComparisonOpCommentId:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_CommentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_CommentId, objSysCommentCond.commentId, strComparisonOpCommentId);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_CommentTypeId) == true)
{
const strComparisonOpCommentTypeId:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_CommentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_CommentTypeId, objSysCommentCond.commentTypeId, strComparisonOpCommentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_ScoreType) == true)
{
const strComparisonOpScoreType:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_ScoreType];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_ScoreType, objSysCommentCond.scoreType, strComparisonOpScoreType);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_TableKey) == true)
{
const strComparisonOpTableKey:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_TableKey];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_TableKey, objSysCommentCond.tableKey, strComparisonOpTableKey);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysCommentEN.con_OkCount, objSysCommentCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_PubParentId) == true)
{
const strComparisonOpPubParentId:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_PubParentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_PubParentId, objSysCommentCond.pubParentId, strComparisonOpPubParentId);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_IdCurrEduCls, objSysCommentCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_UserId, objSysCommentCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_Week) == true)
{
const strComparisonOpWeek:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_Week];
strWhereCond += Format(" And {0} {2} {1}", clsSysCommentEN.con_Week, objSysCommentCond.week, strComparisonOpWeek);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_WeekTimeRange) == true)
{
const strComparisonOpWeekTimeRange:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_WeekTimeRange];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_WeekTimeRange, objSysCommentCond.weekTimeRange, strComparisonOpWeekTimeRange);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_UpdUser, objSysCommentCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_UpdDate, objSysCommentCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objSysCommentCond.dicFldComparisonOp, clsSysCommentEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objSysCommentCond.dicFldComparisonOp[clsSysCommentEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysCommentEN.con_Memo, objSysCommentCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysComment(系统评论表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCommentId: 评论Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysComment_GetUniCondStr(objSysCommentEN: clsSysCommentEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CommentId = '{0}'", objSysCommentEN.commentId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysComment(系统评论表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCommentId: 评论Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysComment_GetUniCondStr4Update(objSysCommentEN: clsSysCommentEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and CommentId <> '{0}'", objSysCommentEN.commentId);
 strWhereCond +=  Format(" and CommentId = '{0}'", objSysCommentEN.commentId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysCommentENS:源对象
 * @param objSysCommentENT:目标对象
*/
export  function SysComment_CopyObjTo(objSysCommentENS: clsSysCommentEN , objSysCommentENT: clsSysCommentEN ): void 
{
objSysCommentENT.commentId = objSysCommentENS.commentId; //评论Id
objSysCommentENT.commentTypeId = objSysCommentENS.commentTypeId; //评论类型Id
objSysCommentENT.scoreType = objSysCommentENS.scoreType; //评分类型
objSysCommentENT.tableKey = objSysCommentENS.tableKey; //表主键
objSysCommentENT.okCount = objSysCommentENS.okCount; //点赞统计
objSysCommentENT.pubParentId = objSysCommentENS.pubParentId; //公共父Id
objSysCommentENT.idCurrEduCls = objSysCommentENS.idCurrEduCls; //教学班流水号
objSysCommentENT.userId = objSysCommentENS.userId; //用户ID
objSysCommentENT.week = objSysCommentENS.week; //周
objSysCommentENT.weekTimeRange = objSysCommentENS.weekTimeRange; //WeekTimeRange
objSysCommentENT.updUser = objSysCommentENS.updUser; //修改人
objSysCommentENT.updDate = objSysCommentENS.updDate; //修改日期
objSysCommentENT.memo = objSysCommentENS.memo; //备注
objSysCommentENT.sfUpdFldSetStr = objSysCommentENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysCommentENS:源对象
 * @param objSysCommentENT:目标对象
*/
export  function SysComment_GetObjFromJsonObj(objSysCommentENS: clsSysCommentEN): clsSysCommentEN 
{
 const objSysCommentENT: clsSysCommentEN = new clsSysCommentEN();
ObjectAssign(objSysCommentENT, objSysCommentENS);
 return objSysCommentENT;
}