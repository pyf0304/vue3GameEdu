
 /**
 * 类名:clsge_UserBadgeTtlWApi
 * 表名:ge_UserBadgeTtl(01120882)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:42
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户徽章汇总(ge_UserBadgeTtl)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsge_UserBadgeTtlEN } from "@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_UserBadgeTtl_Controller = "ge_UserBadgeTtlApi";
 export const ge_UserBadgeTtl_ConstructorName = "ge_UserBadgeTtl";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ge_UserBadgeTtl_GetObjBymIdAsync(lngmId: number): Promise<clsge_UserBadgeTtlEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_UserBadgeTtlWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
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
const objge_UserBadgeTtl = ge_UserBadgeTtl_GetObjFromJsonObj(returnObj);
return objge_UserBadgeTtl;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function ge_UserBadgeTtl_SortFunDefa(a:clsge_UserBadgeTtlEN , b:clsge_UserBadgeTtlEN): number 
{
return a.mId-b.mId;
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
export  function ge_UserBadgeTtl_SortFunDefa2Fld(a:clsge_UserBadgeTtlEN , b:clsge_UserBadgeTtlEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.userId.localeCompare(b.userId);
else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function ge_UserBadgeTtl_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_UserBadgeTtlEN.con_mId:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
return a.mId-b.mId;
}
case clsge_UserBadgeTtlEN.con_IdCurrEduCls:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_UserBadgeTtlEN.con_UserId:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsge_UserBadgeTtlEN.con_BadgeTypeId:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (a.badgeTypeId == null) return -1;
if (b.badgeTypeId == null) return 1;
return a.badgeTypeId.localeCompare(b.badgeTypeId);
}
case clsge_UserBadgeTtlEN.con_BadgeNum:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
return a.badgeNum-b.badgeNum;
}
case clsge_UserBadgeTtlEN.con_IsWorn:
return (a: clsge_UserBadgeTtlEN) => {
if (a.isWorn == true) return 1;
else return -1
}
case clsge_UserBadgeTtlEN.con_UpdDate:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_UserBadgeTtlEN.con_UpdUser:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_UserBadgeTtlEN.con_Memo:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserBadgeTtl]中不存在!(in ${ ge_UserBadgeTtl_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_UserBadgeTtlEN.con_mId:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
return b.mId-a.mId;
}
case clsge_UserBadgeTtlEN.con_IdCurrEduCls:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_UserBadgeTtlEN.con_UserId:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsge_UserBadgeTtlEN.con_BadgeTypeId:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (b.badgeTypeId == null) return -1;
if (a.badgeTypeId == null) return 1;
return b.badgeTypeId.localeCompare(a.badgeTypeId);
}
case clsge_UserBadgeTtlEN.con_BadgeNum:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
return b.badgeNum-a.badgeNum;
}
case clsge_UserBadgeTtlEN.con_IsWorn:
return (b: clsge_UserBadgeTtlEN) => {
if (b.isWorn == true) return 1;
else return -1
}
case clsge_UserBadgeTtlEN.con_UpdDate:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_UserBadgeTtlEN.con_UpdUser:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_UserBadgeTtlEN.con_Memo:
return (a: clsge_UserBadgeTtlEN, b: clsge_UserBadgeTtlEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserBadgeTtl]中不存在!(in ${ ge_UserBadgeTtl_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ge_UserBadgeTtl_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_UserBadgeTtlEN.con_mId:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.mId === value;
}
case clsge_UserBadgeTtlEN.con_IdCurrEduCls:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.idCurrEduCls === value;
}
case clsge_UserBadgeTtlEN.con_UserId:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.userId === value;
}
case clsge_UserBadgeTtlEN.con_BadgeTypeId:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.badgeTypeId === value;
}
case clsge_UserBadgeTtlEN.con_BadgeNum:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.badgeNum === value;
}
case clsge_UserBadgeTtlEN.con_IsWorn:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.isWorn === value;
}
case clsge_UserBadgeTtlEN.con_UpdDate:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.updDate === value;
}
case clsge_UserBadgeTtlEN.con_UpdUser:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.updUser === value;
}
case clsge_UserBadgeTtlEN.con_Memo:
return (obj: clsge_UserBadgeTtlEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserBadgeTtl]中不存在!(in ${ ge_UserBadgeTtl_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_UserBadgeTtl__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserBadgeTtl_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_GetFirstObjAsync(strWhereCond: string): Promise<clsge_UserBadgeTtlEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const objge_UserBadgeTtl = ge_UserBadgeTtl_GetObjFromJsonObj(returnObj);
return objge_UserBadgeTtl;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_UserBadgeTtlEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeTtl_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_UserBadgeTtl_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsge_UserBadgeTtlEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeTtl_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ge_UserBadgeTtl_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_UserBadgeTtlEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeTtl_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_UserBadgeTtlEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeTtl_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_UserBadgeTtlEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_UserBadgeTtlEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserBadgeTtl_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_UserBadgeTtl_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngmId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_UserBadgeTtl_Delge_UserBadgeTtlsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_UserBadgeTtlsAsync";
const strAction = "Delge_UserBadgeTtls";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_Delge_UserBadgeTtlsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_UserBadgeTtlsByCondAsync";
const strAction = "Delge_UserBadgeTtlsByCond";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeTtlEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserBadgeTtl_AddNewRecordAsync(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_UserBadgeTtlEN);
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeTtlEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_AddNewObjSave(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_UserBadgeTtl_CheckPropertyNew(objge_UserBadgeTtlEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserBadgeTtl_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_UserBadgeTtl_CheckUniCond4Add(objge_UserBadgeTtlEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_UserBadgeTtl_AddNewRecordAsync(objge_UserBadgeTtlEN);
if (returnBool == true)
{
//ge_UserBadgeTtl_ReFreshCache();
}
else
{
const strInfo = `添加[用户徽章汇总(ge_UserBadgeTtl)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_UserBadgeTtlEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_UserBadgeTtl_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_UserBadgeTtl_CheckUniCond4Add(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): Promise<boolean>{
const strUniquenessCondition = ge_UserBadgeTtl_GetUniCondStr(objge_UserBadgeTtlEN);
const bolIsExistCondition = await ge_UserBadgeTtl_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_UserBadgeTtl_CheckUniCond4Update(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): Promise<boolean>{
const strUniquenessCondition = ge_UserBadgeTtl_GetUniCondStr4Update(objge_UserBadgeTtlEN);
const bolIsExistCondition = await ge_UserBadgeTtl_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_UserBadgeTtl_UpdateObjSave(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_UserBadgeTtlEN.sfUpdFldSetStr = objge_UserBadgeTtlEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_UserBadgeTtlEN.mId == 0 || objge_UserBadgeTtlEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_UserBadgeTtl_CheckProperty4Update(objge_UserBadgeTtlEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserBadgeTtl_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_UserBadgeTtl_CheckUniCond4Update(objge_UserBadgeTtlEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_UserBadgeTtl_UpdateRecordAsync(objge_UserBadgeTtlEN);
if (returnBool == true)
{
//ge_UserBadgeTtl_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_UserBadgeTtl_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_UserBadgeTtlEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_UserBadgeTtl_AddNewRecordWithReturnKeyAsync(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeTtlEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeTtlEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserBadgeTtl_UpdateRecordAsync(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_UserBadgeTtlEN.sfUpdFldSetStr === undefined || objge_UserBadgeTtlEN.sfUpdFldSetStr === null || objge_UserBadgeTtlEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserBadgeTtlEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeTtlEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeTtlEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserBadgeTtl_EditRecordExAsync(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_UserBadgeTtlEN.sfUpdFldSetStr === undefined || objge_UserBadgeTtlEN.sfUpdFldSetStr === null || objge_UserBadgeTtlEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserBadgeTtlEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeTtlEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
 * @param objge_UserBadgeTtlEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserBadgeTtl_UpdateWithConditionAsync(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_UserBadgeTtlEN.sfUpdFldSetStr === undefined || objge_UserBadgeTtlEN.sfUpdFldSetStr === null || objge_UserBadgeTtlEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserBadgeTtlEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);
objge_UserBadgeTtlEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserBadgeTtlEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_UserBadgeTtl_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  async function ge_UserBadgeTtl_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_UserBadgeTtl_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserBadgeTtl_ConstructorName, strThisFuncName);
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
export  function ge_UserBadgeTtl_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_UserBadgeTtl_CheckPropertyNew(pobjge_UserBadgeTtlEN: clsge_UserBadgeTtlEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.idCurrEduCls) === true 
 || pobjge_UserBadgeTtlEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 用户徽章汇总)!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.idCurrEduCls) == false && GetStrLen(pobjge_UserBadgeTtlEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.idCurrEduCls}(clsge_UserBadgeTtlBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.userId) == false && GetStrLen(pobjge_UserBadgeTtlEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.userId}(clsge_UserBadgeTtlBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.badgeTypeId) == false && GetStrLen(pobjge_UserBadgeTtlEN.badgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[徽章类型Id(badgeTypeId)]的长度不能超过2(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.badgeTypeId}(clsge_UserBadgeTtlBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.updDate) == false && GetStrLen(pobjge_UserBadgeTtlEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.updDate}(clsge_UserBadgeTtlBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.updUser) == false && GetStrLen(pobjge_UserBadgeTtlEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.updUser}(clsge_UserBadgeTtlBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.memo) == false && GetStrLen(pobjge_UserBadgeTtlEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.memo}(clsge_UserBadgeTtlBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_UserBadgeTtlEN.mId && undefined !== pobjge_UserBadgeTtlEN.mId && tzDataType.isNumber(pobjge_UserBadgeTtlEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjge_UserBadgeTtlEN.mId}], 非法,应该为数值型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.idCurrEduCls) == false && undefined !== pobjge_UserBadgeTtlEN.idCurrEduCls && tzDataType.isString(pobjge_UserBadgeTtlEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserBadgeTtlEN.idCurrEduCls}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.userId) == false && undefined !== pobjge_UserBadgeTtlEN.userId && tzDataType.isString(pobjge_UserBadgeTtlEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_UserBadgeTtlEN.userId}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.badgeTypeId) == false && undefined !== pobjge_UserBadgeTtlEN.badgeTypeId && tzDataType.isString(pobjge_UserBadgeTtlEN.badgeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章类型Id(badgeTypeId)]的值:[${pobjge_UserBadgeTtlEN.badgeTypeId}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserBadgeTtlEN.badgeNum && undefined !== pobjge_UserBadgeTtlEN.badgeNum && tzDataType.isNumber(pobjge_UserBadgeTtlEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章数量(badgeNum)]的值:[${pobjge_UserBadgeTtlEN.badgeNum}], 非法,应该为数值型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserBadgeTtlEN.isWorn && undefined !== pobjge_UserBadgeTtlEN.isWorn && tzDataType.isBoolean(pobjge_UserBadgeTtlEN.isWorn) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否配戴(isWorn)]的值:[${pobjge_UserBadgeTtlEN.isWorn}], 非法,应该为布尔型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.updDate) == false && undefined !== pobjge_UserBadgeTtlEN.updDate && tzDataType.isString(pobjge_UserBadgeTtlEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_UserBadgeTtlEN.updDate}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.updUser) == false && undefined !== pobjge_UserBadgeTtlEN.updUser && tzDataType.isString(pobjge_UserBadgeTtlEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_UserBadgeTtlEN.updUser}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.memo) == false && undefined !== pobjge_UserBadgeTtlEN.memo && tzDataType.isString(pobjge_UserBadgeTtlEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_UserBadgeTtlEN.memo}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserBadgeTtl_CheckProperty4Update(pobjge_UserBadgeTtlEN: clsge_UserBadgeTtlEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.idCurrEduCls) == false && GetStrLen(pobjge_UserBadgeTtlEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.idCurrEduCls}(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.userId) == false && GetStrLen(pobjge_UserBadgeTtlEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.userId}(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.badgeTypeId) == false && GetStrLen(pobjge_UserBadgeTtlEN.badgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[徽章类型Id(badgeTypeId)]的长度不能超过2(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.badgeTypeId}(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.updDate) == false && GetStrLen(pobjge_UserBadgeTtlEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.updDate}(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.updUser) == false && GetStrLen(pobjge_UserBadgeTtlEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.updUser}(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.memo) == false && GetStrLen(pobjge_UserBadgeTtlEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户徽章汇总(ge_UserBadgeTtl))!值:${pobjge_UserBadgeTtlEN.memo}(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_UserBadgeTtlEN.mId && undefined !== pobjge_UserBadgeTtlEN.mId && tzDataType.isNumber(pobjge_UserBadgeTtlEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjge_UserBadgeTtlEN.mId}], 非法,应该为数值型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.idCurrEduCls) == false && undefined !== pobjge_UserBadgeTtlEN.idCurrEduCls && tzDataType.isString(pobjge_UserBadgeTtlEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserBadgeTtlEN.idCurrEduCls}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.userId) == false && undefined !== pobjge_UserBadgeTtlEN.userId && tzDataType.isString(pobjge_UserBadgeTtlEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_UserBadgeTtlEN.userId}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.badgeTypeId) == false && undefined !== pobjge_UserBadgeTtlEN.badgeTypeId && tzDataType.isString(pobjge_UserBadgeTtlEN.badgeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章类型Id(badgeTypeId)]的值:[${pobjge_UserBadgeTtlEN.badgeTypeId}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (null != pobjge_UserBadgeTtlEN.badgeNum && undefined !== pobjge_UserBadgeTtlEN.badgeNum && tzDataType.isNumber(pobjge_UserBadgeTtlEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章数量(badgeNum)]的值:[${pobjge_UserBadgeTtlEN.badgeNum}], 非法,应该为数值型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (null != pobjge_UserBadgeTtlEN.isWorn && undefined !== pobjge_UserBadgeTtlEN.isWorn && tzDataType.isBoolean(pobjge_UserBadgeTtlEN.isWorn) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否配戴(isWorn)]的值:[${pobjge_UserBadgeTtlEN.isWorn}], 非法,应该为布尔型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.updDate) == false && undefined !== pobjge_UserBadgeTtlEN.updDate && tzDataType.isString(pobjge_UserBadgeTtlEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_UserBadgeTtlEN.updDate}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.updUser) == false && undefined !== pobjge_UserBadgeTtlEN.updUser && tzDataType.isString(pobjge_UserBadgeTtlEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_UserBadgeTtlEN.updUser}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserBadgeTtlEN.memo) == false && undefined !== pobjge_UserBadgeTtlEN.memo && tzDataType.isString(pobjge_UserBadgeTtlEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_UserBadgeTtlEN.memo}], 非法,应该为字符型(In 用户徽章汇总(ge_UserBadgeTtl))!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_UserBadgeTtlEN.mId 
 || pobjge_UserBadgeTtlEN.mId != null && pobjge_UserBadgeTtlEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 用户徽章汇总)!(clsge_UserBadgeTtlBL:CheckProperty4Update)`);
}
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
export  function ge_UserBadgeTtl_GetJSONStrByObj (pobjge_UserBadgeTtlEN: clsge_UserBadgeTtlEN): string
{
pobjge_UserBadgeTtlEN.sfUpdFldSetStr = pobjge_UserBadgeTtlEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_UserBadgeTtlEN);
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
export  function ge_UserBadgeTtl_GetObjLstByJSONStr (strJSON: string): Array<clsge_UserBadgeTtlEN>
{
let arrge_UserBadgeTtlObjLst = new Array<clsge_UserBadgeTtlEN>();
if (strJSON === "")
{
return arrge_UserBadgeTtlObjLst;
}
try
{
arrge_UserBadgeTtlObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_UserBadgeTtlObjLst;
}
return arrge_UserBadgeTtlObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_UserBadgeTtlObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_UserBadgeTtl_GetObjLstByJSONObjLst (arrge_UserBadgeTtlObjLstS: Array<clsge_UserBadgeTtlEN>): Array<clsge_UserBadgeTtlEN>
{
const arrge_UserBadgeTtlObjLst = new Array<clsge_UserBadgeTtlEN>();
for (const objInFor of arrge_UserBadgeTtlObjLstS) {
const obj1 = ge_UserBadgeTtl_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_UserBadgeTtlObjLst.push(obj1);
}
return arrge_UserBadgeTtlObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_UserBadgeTtl_GetObjByJSONStr (strJSON: string): clsge_UserBadgeTtlEN
{
let pobjge_UserBadgeTtlEN = new clsge_UserBadgeTtlEN();
if (strJSON === "")
{
return pobjge_UserBadgeTtlEN;
}
try
{
pobjge_UserBadgeTtlEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_UserBadgeTtlEN;
}
return pobjge_UserBadgeTtlEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_UserBadgeTtl_GetCombineCondition(objge_UserBadgeTtlCond: clsge_UserBadgeTtlEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_mId) == true)
{
const strComparisonOpmId:string = objge_UserBadgeTtlCond.dicFldComparisonOp[clsge_UserBadgeTtlEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserBadgeTtlEN.con_mId, objge_UserBadgeTtlCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_UserBadgeTtlCond.dicFldComparisonOp[clsge_UserBadgeTtlEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeTtlEN.con_IdCurrEduCls, objge_UserBadgeTtlCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_UserBadgeTtlCond.dicFldComparisonOp[clsge_UserBadgeTtlEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeTtlEN.con_UserId, objge_UserBadgeTtlCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_BadgeTypeId) == true)
{
const strComparisonOpBadgeTypeId:string = objge_UserBadgeTtlCond.dicFldComparisonOp[clsge_UserBadgeTtlEN.con_BadgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeTtlEN.con_BadgeTypeId, objge_UserBadgeTtlCond.badgeTypeId, strComparisonOpBadgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_BadgeNum) == true)
{
const strComparisonOpBadgeNum:string = objge_UserBadgeTtlCond.dicFldComparisonOp[clsge_UserBadgeTtlEN.con_BadgeNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserBadgeTtlEN.con_BadgeNum, objge_UserBadgeTtlCond.badgeNum, strComparisonOpBadgeNum);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_IsWorn) == true)
{
if (objge_UserBadgeTtlCond.isWorn == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_UserBadgeTtlEN.con_IsWorn);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserBadgeTtlEN.con_IsWorn);
}
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_UserBadgeTtlCond.dicFldComparisonOp[clsge_UserBadgeTtlEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeTtlEN.con_UpdDate, objge_UserBadgeTtlCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_UserBadgeTtlCond.dicFldComparisonOp[clsge_UserBadgeTtlEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeTtlEN.con_UpdUser, objge_UserBadgeTtlCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_UserBadgeTtlCond.dicFldComparisonOp, clsge_UserBadgeTtlEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_UserBadgeTtlCond.dicFldComparisonOp[clsge_UserBadgeTtlEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserBadgeTtlEN.con_Memo, objge_UserBadgeTtlCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_UserBadgeTtl(用户徽章汇总),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strBadgeTypeId: 徽章类型Id(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_UserBadgeTtl_GetUniCondStr(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserId = '{0}'", objge_UserBadgeTtlEN.userId);
 strWhereCond +=  Format(" and BadgeTypeId = '{0}'", objge_UserBadgeTtlEN.badgeTypeId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_UserBadgeTtlEN.idCurrEduCls);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_UserBadgeTtl(用户徽章汇总),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strBadgeTypeId: 徽章类型Id(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_UserBadgeTtl_GetUniCondStr4Update(objge_UserBadgeTtlEN: clsge_UserBadgeTtlEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objge_UserBadgeTtlEN.mId);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_UserBadgeTtlEN.userId);
 strWhereCond +=  Format(" and BadgeTypeId = '{0}'", objge_UserBadgeTtlEN.badgeTypeId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_UserBadgeTtlEN.idCurrEduCls);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_UserBadgeTtlENS:源对象
 * @param objge_UserBadgeTtlENT:目标对象
*/
export  function ge_UserBadgeTtl_CopyObjTo(objge_UserBadgeTtlENS: clsge_UserBadgeTtlEN , objge_UserBadgeTtlENT: clsge_UserBadgeTtlEN ): void 
{
objge_UserBadgeTtlENT.mId = objge_UserBadgeTtlENS.mId; //mId
objge_UserBadgeTtlENT.idCurrEduCls = objge_UserBadgeTtlENS.idCurrEduCls; //教学班流水号
objge_UserBadgeTtlENT.userId = objge_UserBadgeTtlENS.userId; //用户ID
objge_UserBadgeTtlENT.badgeTypeId = objge_UserBadgeTtlENS.badgeTypeId; //徽章类型Id
objge_UserBadgeTtlENT.badgeNum = objge_UserBadgeTtlENS.badgeNum; //徽章数量
objge_UserBadgeTtlENT.isWorn = objge_UserBadgeTtlENS.isWorn; //是否配戴
objge_UserBadgeTtlENT.updDate = objge_UserBadgeTtlENS.updDate; //修改日期
objge_UserBadgeTtlENT.updUser = objge_UserBadgeTtlENS.updUser; //修改人
objge_UserBadgeTtlENT.memo = objge_UserBadgeTtlENS.memo; //备注
objge_UserBadgeTtlENT.sfUpdFldSetStr = objge_UserBadgeTtlENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_UserBadgeTtlENS:源对象
 * @param objge_UserBadgeTtlENT:目标对象
*/
export  function ge_UserBadgeTtl_GetObjFromJsonObj(objge_UserBadgeTtlENS: clsge_UserBadgeTtlEN): clsge_UserBadgeTtlEN 
{
 const objge_UserBadgeTtlENT: clsge_UserBadgeTtlEN = new clsge_UserBadgeTtlEN();
ObjectAssign(objge_UserBadgeTtlENT, objge_UserBadgeTtlENS);
 return objge_UserBadgeTtlENT;
}