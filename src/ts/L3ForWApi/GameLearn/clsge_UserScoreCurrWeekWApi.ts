
 /**
 * 类名:clsge_UserScoreCurrWeekWApi
 * 表名:ge_UserScoreCurrWeek(01120989)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:32
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
 * 用户当前周得分(ge_UserScoreCurrWeek)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsge_UserScoreCurrWeekEN } from "@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_UserScoreCurrWeek_Controller = "ge_UserScoreCurrWeekApi";
 export const ge_UserScoreCurrWeek_ConstructorName = "ge_UserScoreCurrWeek";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function ge_UserScoreCurrWeek_SplitKeyLst(strKeyLst: string)  
{
const arrKey = strKeyLst.split('|');
if (arrKey.length != 3)
{
const strMsg = "请选择需要修改的记录!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
const objKeyLst = {
idCurrEduCls: arrKey[0],
userId: arrKey[1],
idEduClsCalendar: Number(arrKey[2]),
};
if (IsNullOrEmpty(objKeyLst.idCurrEduCls)== true)
{
const strMsg = "关键字段(idCurrEduCls)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.userId)== true)
{
const strMsg = "关键字段(userId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (objKeyLst.idEduClsCalendar == 0)
{
const strMsg = "关键字段(idEduClsCalendar)值不能为空!";
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
export  async function ge_UserScoreCurrWeek_GetObjByKeyLstAsync(strIdCurrEduCls: string,strUserId: string,lngIdEduClsCalendar: number): Promise<clsge_UserScoreCurrWeekEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserScoreCurrWeekWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserScoreCurrWeekWApi.GetObjByKeyLstAsync)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsge_UserScoreCurrWeekWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}

if (lngIdEduClsCalendar == 0)
{
  const strMsg = Format("参数:[lngIdEduClsCalendar]不能为空!(In clsge_UserScoreCurrWeekWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
strUserId,
lngIdEduClsCalendar,
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
const objge_UserScoreCurrWeek = ge_UserScoreCurrWeek_GetObjFromJsonObj(returnObj);
return objge_UserScoreCurrWeek;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  function ge_UserScoreCurrWeek_SortFunDefa(a:clsge_UserScoreCurrWeekEN , b:clsge_UserScoreCurrWeekEN): number 
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
export  function ge_UserScoreCurrWeek_SortFunDefa2Fld(a:clsge_UserScoreCurrWeekEN , b:clsge_UserScoreCurrWeekEN): number 
{
if (a.courseId == b.courseId) return a.credits - b.credits;
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
export  function ge_UserScoreCurrWeek_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_UserScoreCurrWeekEN.con_IdCurrEduCls:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_UserScoreCurrWeekEN.con_UserId:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return a.userId.localeCompare(b.userId);
}
case clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return a.idEduClsCalendar-b.idEduClsCalendar;
}
case clsge_UserScoreCurrWeekEN.con_CourseId:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_UserScoreCurrWeekEN.con_Passed:
return (a: clsge_UserScoreCurrWeekEN) => {
if (a.passed == true) return 1;
else return -1
}
case clsge_UserScoreCurrWeekEN.con_Credits:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return a.credits-b.credits;
}
case clsge_UserScoreCurrWeekEN.con_UpdDate:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_UserScoreCurrWeekEN.con_UpdUser:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_UserScoreCurrWeekEN.con_Memo:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserScoreCurrWeek]中不存在!(in ${ ge_UserScoreCurrWeek_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_UserScoreCurrWeekEN.con_IdCurrEduCls:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_UserScoreCurrWeekEN.con_UserId:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return b.userId.localeCompare(a.userId);
}
case clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return b.idEduClsCalendar-a.idEduClsCalendar;
}
case clsge_UserScoreCurrWeekEN.con_CourseId:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_UserScoreCurrWeekEN.con_Passed:
return (b: clsge_UserScoreCurrWeekEN) => {
if (b.passed == true) return 1;
else return -1
}
case clsge_UserScoreCurrWeekEN.con_Credits:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
return b.credits-a.credits;
}
case clsge_UserScoreCurrWeekEN.con_UpdDate:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_UserScoreCurrWeekEN.con_UpdUser:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_UserScoreCurrWeekEN.con_Memo:
return (a: clsge_UserScoreCurrWeekEN, b: clsge_UserScoreCurrWeekEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserScoreCurrWeek]中不存在!(in ${ ge_UserScoreCurrWeek_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_UserScoreCurrWeek_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_UserScoreCurrWeekEN.con_IdCurrEduCls:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.idCurrEduCls === value;
}
case clsge_UserScoreCurrWeekEN.con_UserId:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.userId === value;
}
case clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.idEduClsCalendar === value;
}
case clsge_UserScoreCurrWeekEN.con_CourseId:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.courseId === value;
}
case clsge_UserScoreCurrWeekEN.con_Passed:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.passed === value;
}
case clsge_UserScoreCurrWeekEN.con_Credits:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.credits === value;
}
case clsge_UserScoreCurrWeekEN.con_UpdDate:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.updDate === value;
}
case clsge_UserScoreCurrWeekEN.con_UpdUser:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.updUser === value;
}
case clsge_UserScoreCurrWeekEN.con_Memo:
return (obj: clsge_UserScoreCurrWeekEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserScoreCurrWeek]中不存在!(in ${ ge_UserScoreCurrWeek_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_UserScoreCurrWeek__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserScoreCurrWeek_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetFirstObjAsync(strWhereCond: string): Promise<clsge_UserScoreCurrWeekEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const objge_UserScoreCurrWeek = ge_UserScoreCurrWeek_GetObjFromJsonObj(returnObj);
return objge_UserScoreCurrWeek;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_UserScoreCurrWeekEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserScoreCurrWeek_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_UserScoreCurrWeekEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserScoreCurrWeek_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_UserScoreCurrWeekEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserScoreCurrWeek_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_UserScoreCurrWeekEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_UserScoreCurrWeekEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserScoreCurrWeek_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls,strUserId,lngIdEduClsCalendar:关键字列表
 * @returns 获取删除的结果
 **/
export  async function ge_UserScoreCurrWeek_DelRecKeyLstAsync(strIdCurrEduCls: string,strUserId: string,lngIdEduClsCalendar: number): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls, 
strUserId, 
lngIdEduClsCalendar, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_Delge_UserScoreCurrWeeksByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_UserScoreCurrWeeksByCondAsync";
const strAction = "Delge_UserScoreCurrWeeksByCond";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreCurrWeekEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserScoreCurrWeek_AddNewRecordAsync(objge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objge_UserScoreCurrWeekEN.idCurrEduCls === null || objge_UserScoreCurrWeekEN.idCurrEduCls === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_UserScoreCurrWeekEN);
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreCurrWeekEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreCurrWeekEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserScoreCurrWeek_AddNewRecordWithMaxIdAsync(objge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreCurrWeekEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_AddNewObjSave(objge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_UserScoreCurrWeek_CheckPropertyNew(objge_UserScoreCurrWeekEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserScoreCurrWeek_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await ge_UserScoreCurrWeek_IsExistAsync(objge_UserScoreCurrWeekEN.idCurrEduCls,objge_UserScoreCurrWeekEN.userId,objge_UserScoreCurrWeekEN.idEduClsCalendar,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objge_UserScoreCurrWeekEN.idCurrEduCls);
console.error(strMsg);
throw(strMsg);
}
returnBool = await ge_UserScoreCurrWeek_AddNewRecordAsync(objge_UserScoreCurrWeekEN);
if (returnBool == true)
{
//ge_UserScoreCurrWeek_ReFreshCache();
}
else
{
const strInfo = `添加[用户当前周得分(ge_UserScoreCurrWeek)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objge_UserScoreCurrWeekEN.idCurrEduCls }`;
strReturnKeyLst += `|${ objge_UserScoreCurrWeekEN.userId }`;
strReturnKeyLst += `|${ objge_UserScoreCurrWeekEN.idEduClsCalendar }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_UserScoreCurrWeek_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function ge_UserScoreCurrWeek_UpdateObjSave(objge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_UserScoreCurrWeekEN.sfUpdFldSetStr = objge_UserScoreCurrWeekEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_UserScoreCurrWeekEN.idCurrEduCls == "" || objge_UserScoreCurrWeekEN.idCurrEduCls == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_UserScoreCurrWeek_CheckProperty4Update(objge_UserScoreCurrWeekEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserScoreCurrWeek_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await ge_UserScoreCurrWeek_UpdateRecordAsync(objge_UserScoreCurrWeekEN);
if (returnBool == true)
{
//ge_UserScoreCurrWeek_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_UserScoreCurrWeek_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_UserScoreCurrWeekEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_UserScoreCurrWeek_AddNewRecordWithReturnKeyAsync(objge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreCurrWeekEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreCurrWeekEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserScoreCurrWeek_UpdateRecordAsync(objge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_UserScoreCurrWeekEN.sfUpdFldSetStr === undefined || objge_UserScoreCurrWeekEN.sfUpdFldSetStr === null || objge_UserScoreCurrWeekEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserScoreCurrWeekEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreCurrWeekEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreCurrWeekEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserScoreCurrWeek_EditRecordExAsync(objge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_UserScoreCurrWeekEN.sfUpdFldSetStr === undefined || objge_UserScoreCurrWeekEN.sfUpdFldSetStr === null || objge_UserScoreCurrWeekEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserScoreCurrWeekEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreCurrWeekEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreCurrWeekEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserScoreCurrWeek_UpdateWithConditionAsync(objge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_UserScoreCurrWeekEN.sfUpdFldSetStr === undefined || objge_UserScoreCurrWeekEN.sfUpdFldSetStr === null || objge_UserScoreCurrWeekEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserScoreCurrWeekEN.idCurrEduCls);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);
objge_UserScoreCurrWeekEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreCurrWeekEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_IsExistAsync(strIdCurrEduCls: string,strUserId: string,lngIdEduClsCalendar: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
strUserId,
lngIdEduClsCalendar,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  async function ge_UserScoreCurrWeek_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_UserScoreCurrWeek_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScoreCurrWeek_ConstructorName, strThisFuncName);
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
export  function ge_UserScoreCurrWeek_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_UserScoreCurrWeek_CheckPropertyNew(pobjge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.courseId) === true 
 || pobjge_UserScoreCurrWeekEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 用户当前周得分)!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (null === pobjge_UserScoreCurrWeekEN.credits 
 || pobjge_UserScoreCurrWeekEN.credits != null && pobjge_UserScoreCurrWeekEN.credits.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[积分]不能为空(In 用户当前周得分)!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.idCurrEduCls) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.idCurrEduCls}(clsge_UserScoreCurrWeekBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.userId) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.userId}(clsge_UserScoreCurrWeekBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.courseId) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.courseId}(clsge_UserScoreCurrWeekBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.updDate) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.updDate}(clsge_UserScoreCurrWeekBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.updUser) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.updUser}(clsge_UserScoreCurrWeekBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.memo) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.memo}(clsge_UserScoreCurrWeekBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.idCurrEduCls) == false && undefined !== pobjge_UserScoreCurrWeekEN.idCurrEduCls && tzDataType.isString(pobjge_UserScoreCurrWeekEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserScoreCurrWeekEN.idCurrEduCls}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.userId) == false && undefined !== pobjge_UserScoreCurrWeekEN.userId && tzDataType.isString(pobjge_UserScoreCurrWeekEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_UserScoreCurrWeekEN.userId}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserScoreCurrWeekEN.idEduClsCalendar && undefined !== pobjge_UserScoreCurrWeekEN.idEduClsCalendar && tzDataType.isNumber(pobjge_UserScoreCurrWeekEN.idEduClsCalendar) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班学历流水号(idEduClsCalendar)]的值:[${pobjge_UserScoreCurrWeekEN.idEduClsCalendar}], 非法,应该为数值型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.courseId) == false && undefined !== pobjge_UserScoreCurrWeekEN.courseId && tzDataType.isString(pobjge_UserScoreCurrWeekEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_UserScoreCurrWeekEN.courseId}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserScoreCurrWeekEN.passed && undefined !== pobjge_UserScoreCurrWeekEN.passed && tzDataType.isBoolean(pobjge_UserScoreCurrWeekEN.passed) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否合格(passed)]的值:[${pobjge_UserScoreCurrWeekEN.passed}], 非法,应该为布尔型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserScoreCurrWeekEN.credits && undefined !== pobjge_UserScoreCurrWeekEN.credits && tzDataType.isNumber(pobjge_UserScoreCurrWeekEN.credits) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分(credits)]的值:[${pobjge_UserScoreCurrWeekEN.credits}], 非法,应该为数值型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.updDate) == false && undefined !== pobjge_UserScoreCurrWeekEN.updDate && tzDataType.isString(pobjge_UserScoreCurrWeekEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_UserScoreCurrWeekEN.updDate}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.updUser) == false && undefined !== pobjge_UserScoreCurrWeekEN.updUser && tzDataType.isString(pobjge_UserScoreCurrWeekEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_UserScoreCurrWeekEN.updUser}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.memo) == false && undefined !== pobjge_UserScoreCurrWeekEN.memo && tzDataType.isString(pobjge_UserScoreCurrWeekEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_UserScoreCurrWeekEN.memo}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserScoreCurrWeek_CheckProperty4Update(pobjge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.idCurrEduCls) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.idCurrEduCls}(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.userId) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.userId}(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.courseId) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.courseId}(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.updDate) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.updDate}(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.updUser) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.updUser}(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.memo) == false && GetStrLen(pobjge_UserScoreCurrWeekEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户当前周得分(ge_UserScoreCurrWeek))!值:${pobjge_UserScoreCurrWeekEN.memo}(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.idCurrEduCls) == false && undefined !== pobjge_UserScoreCurrWeekEN.idCurrEduCls && tzDataType.isString(pobjge_UserScoreCurrWeekEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserScoreCurrWeekEN.idCurrEduCls}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.userId) == false && undefined !== pobjge_UserScoreCurrWeekEN.userId && tzDataType.isString(pobjge_UserScoreCurrWeekEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_UserScoreCurrWeekEN.userId}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (null != pobjge_UserScoreCurrWeekEN.idEduClsCalendar && undefined !== pobjge_UserScoreCurrWeekEN.idEduClsCalendar && tzDataType.isNumber(pobjge_UserScoreCurrWeekEN.idEduClsCalendar) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班学历流水号(idEduClsCalendar)]的值:[${pobjge_UserScoreCurrWeekEN.idEduClsCalendar}], 非法,应该为数值型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.courseId) == false && undefined !== pobjge_UserScoreCurrWeekEN.courseId && tzDataType.isString(pobjge_UserScoreCurrWeekEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_UserScoreCurrWeekEN.courseId}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (null != pobjge_UserScoreCurrWeekEN.passed && undefined !== pobjge_UserScoreCurrWeekEN.passed && tzDataType.isBoolean(pobjge_UserScoreCurrWeekEN.passed) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否合格(passed)]的值:[${pobjge_UserScoreCurrWeekEN.passed}], 非法,应该为布尔型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (null != pobjge_UserScoreCurrWeekEN.credits && undefined !== pobjge_UserScoreCurrWeekEN.credits && tzDataType.isNumber(pobjge_UserScoreCurrWeekEN.credits) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分(credits)]的值:[${pobjge_UserScoreCurrWeekEN.credits}], 非法,应该为数值型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.updDate) == false && undefined !== pobjge_UserScoreCurrWeekEN.updDate && tzDataType.isString(pobjge_UserScoreCurrWeekEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_UserScoreCurrWeekEN.updDate}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.updUser) == false && undefined !== pobjge_UserScoreCurrWeekEN.updUser && tzDataType.isString(pobjge_UserScoreCurrWeekEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_UserScoreCurrWeekEN.updUser}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.memo) == false && undefined !== pobjge_UserScoreCurrWeekEN.memo && tzDataType.isString(pobjge_UserScoreCurrWeekEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_UserScoreCurrWeekEN.memo}], 非法,应该为字符型(In 用户当前周得分(ge_UserScoreCurrWeek))!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjge_UserScoreCurrWeekEN.idCurrEduCls) === true 
 || pobjge_UserScoreCurrWeekEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[教学班流水号]不能为空(In 用户当前周得分)!(clsge_UserScoreCurrWeekBL:CheckProperty4Update)`);
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
export  function ge_UserScoreCurrWeek_GetJSONStrByObj (pobjge_UserScoreCurrWeekEN: clsge_UserScoreCurrWeekEN): string
{
pobjge_UserScoreCurrWeekEN.sfUpdFldSetStr = pobjge_UserScoreCurrWeekEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_UserScoreCurrWeekEN);
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
export  function ge_UserScoreCurrWeek_GetObjLstByJSONStr (strJSON: string): Array<clsge_UserScoreCurrWeekEN>
{
let arrge_UserScoreCurrWeekObjLst = new Array<clsge_UserScoreCurrWeekEN>();
if (strJSON === "")
{
return arrge_UserScoreCurrWeekObjLst;
}
try
{
arrge_UserScoreCurrWeekObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_UserScoreCurrWeekObjLst;
}
return arrge_UserScoreCurrWeekObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_UserScoreCurrWeekObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_UserScoreCurrWeek_GetObjLstByJSONObjLst (arrge_UserScoreCurrWeekObjLstS: Array<clsge_UserScoreCurrWeekEN>): Array<clsge_UserScoreCurrWeekEN>
{
const arrge_UserScoreCurrWeekObjLst = new Array<clsge_UserScoreCurrWeekEN>();
for (const objInFor of arrge_UserScoreCurrWeekObjLstS) {
const obj1 = ge_UserScoreCurrWeek_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_UserScoreCurrWeekObjLst.push(obj1);
}
return arrge_UserScoreCurrWeekObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_UserScoreCurrWeek_GetObjByJSONStr (strJSON: string): clsge_UserScoreCurrWeekEN
{
let pobjge_UserScoreCurrWeekEN = new clsge_UserScoreCurrWeekEN();
if (strJSON === "")
{
return pobjge_UserScoreCurrWeekEN;
}
try
{
pobjge_UserScoreCurrWeekEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_UserScoreCurrWeekEN;
}
return pobjge_UserScoreCurrWeekEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_UserScoreCurrWeek_GetCombineCondition(objge_UserScoreCurrWeekCond: clsge_UserScoreCurrWeekEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_UserScoreCurrWeekCond.dicFldComparisonOp[clsge_UserScoreCurrWeekEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreCurrWeekEN.con_IdCurrEduCls, objge_UserScoreCurrWeekCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_UserScoreCurrWeekCond.dicFldComparisonOp[clsge_UserScoreCurrWeekEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreCurrWeekEN.con_UserId, objge_UserScoreCurrWeekCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar) == true)
{
const strComparisonOpIdEduClsCalendar:string = objge_UserScoreCurrWeekCond.dicFldComparisonOp[clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar, objge_UserScoreCurrWeekCond.idEduClsCalendar, strComparisonOpIdEduClsCalendar);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_UserScoreCurrWeekCond.dicFldComparisonOp[clsge_UserScoreCurrWeekEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreCurrWeekEN.con_CourseId, objge_UserScoreCurrWeekCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_Passed) == true)
{
if (objge_UserScoreCurrWeekCond.passed == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_UserScoreCurrWeekEN.con_Passed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserScoreCurrWeekEN.con_Passed);
}
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objge_UserScoreCurrWeekCond.dicFldComparisonOp[clsge_UserScoreCurrWeekEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserScoreCurrWeekEN.con_Credits, objge_UserScoreCurrWeekCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_UserScoreCurrWeekCond.dicFldComparisonOp[clsge_UserScoreCurrWeekEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreCurrWeekEN.con_UpdDate, objge_UserScoreCurrWeekCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_UserScoreCurrWeekCond.dicFldComparisonOp[clsge_UserScoreCurrWeekEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreCurrWeekEN.con_UpdUser, objge_UserScoreCurrWeekCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCurrWeekCond.dicFldComparisonOp, clsge_UserScoreCurrWeekEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_UserScoreCurrWeekCond.dicFldComparisonOp[clsge_UserScoreCurrWeekEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreCurrWeekEN.con_Memo, objge_UserScoreCurrWeekCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_UserScoreCurrWeekENS:源对象
 * @param objge_UserScoreCurrWeekENT:目标对象
*/
export  function ge_UserScoreCurrWeek_CopyObjTo(objge_UserScoreCurrWeekENS: clsge_UserScoreCurrWeekEN , objge_UserScoreCurrWeekENT: clsge_UserScoreCurrWeekEN ): void 
{
objge_UserScoreCurrWeekENT.idCurrEduCls = objge_UserScoreCurrWeekENS.idCurrEduCls; //教学班流水号
objge_UserScoreCurrWeekENT.userId = objge_UserScoreCurrWeekENS.userId; //用户ID
objge_UserScoreCurrWeekENT.idEduClsCalendar = objge_UserScoreCurrWeekENS.idEduClsCalendar; //教学班学历流水号
objge_UserScoreCurrWeekENT.courseId = objge_UserScoreCurrWeekENS.courseId; //课程Id
objge_UserScoreCurrWeekENT.passed = objge_UserScoreCurrWeekENS.passed; //是否合格
objge_UserScoreCurrWeekENT.credits = objge_UserScoreCurrWeekENS.credits; //积分
objge_UserScoreCurrWeekENT.updDate = objge_UserScoreCurrWeekENS.updDate; //修改日期
objge_UserScoreCurrWeekENT.updUser = objge_UserScoreCurrWeekENS.updUser; //修改人
objge_UserScoreCurrWeekENT.memo = objge_UserScoreCurrWeekENS.memo; //备注
objge_UserScoreCurrWeekENT.sfUpdFldSetStr = objge_UserScoreCurrWeekENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_UserScoreCurrWeekENS:源对象
 * @param objge_UserScoreCurrWeekENT:目标对象
*/
export  function ge_UserScoreCurrWeek_GetObjFromJsonObj(objge_UserScoreCurrWeekENS: clsge_UserScoreCurrWeekEN): clsge_UserScoreCurrWeekEN 
{
 const objge_UserScoreCurrWeekENT: clsge_UserScoreCurrWeekEN = new clsge_UserScoreCurrWeekEN();
ObjectAssign(objge_UserScoreCurrWeekENT, objge_UserScoreCurrWeekENS);
 return objge_UserScoreCurrWeekENT;
}