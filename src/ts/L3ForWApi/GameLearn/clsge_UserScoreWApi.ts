
 /**
 * 类名:clsge_UserScoreWApi
 * 表名:ge_UserScore(01120985)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:20
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
 * 用户得分(ge_UserScore)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsge_UserScoreEN } from "@/ts/L0Entity/GameLearn/clsge_UserScoreEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_UserScore_Controller = "ge_UserScoreApi";
 export const ge_UserScore_ConstructorName = "ge_UserScore";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function ge_UserScore_SplitKeyLst(strKeyLst: string)  
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
userId: arrKey[1],
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
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 对象
 **/
export  async function ge_UserScore_GetObjByKeyLstAsync(strIdCurrEduCls: string,strUserId: string): Promise<clsge_UserScoreEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsge_UserScoreWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsge_UserScoreWApi.GetObjByKeyLstAsync)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsge_UserScoreWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
strUserId,
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
const objge_UserScore = ge_UserScore_GetObjFromJsonObj(returnObj);
return objge_UserScore;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  function ge_UserScore_SortFunDefa(a:clsge_UserScoreEN , b:clsge_UserScoreEN): number 
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
export  function ge_UserScore_SortFunDefa2Fld(a:clsge_UserScoreEN , b:clsge_UserScoreEN): number 
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
export  function ge_UserScore_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_UserScoreEN.con_IdCurrEduCls:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_UserScoreEN.con_UserId:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return a.userId.localeCompare(b.userId);
}
case clsge_UserScoreEN.con_CourseId:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_UserScoreEN.con_Passed:
return (a: clsge_UserScoreEN) => {
if (a.passed == true) return 1;
else return -1
}
case clsge_UserScoreEN.con_Credits:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return a.credits-b.credits;
}
case clsge_UserScoreEN.con_UsedCredits:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return a.usedCredits-b.usedCredits;
}
case clsge_UserScoreEN.con_GetDate:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (a.getDate == null) return -1;
if (b.getDate == null) return 1;
return a.getDate.localeCompare(b.getDate);
}
case clsge_UserScoreEN.con_GetInstructions:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (a.getInstructions == null) return -1;
if (b.getInstructions == null) return 1;
return a.getInstructions.localeCompare(b.getInstructions);
}
case clsge_UserScoreEN.con_BadgeNum:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return a.badgeNum-b.badgeNum;
}
case clsge_UserScoreEN.con_UpdDate:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_UserScoreEN.con_UpdUser:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_UserScoreEN.con_Memo:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserScore]中不存在!(in ${ ge_UserScore_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_UserScoreEN.con_IdCurrEduCls:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_UserScoreEN.con_UserId:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return b.userId.localeCompare(a.userId);
}
case clsge_UserScoreEN.con_CourseId:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_UserScoreEN.con_Passed:
return (b: clsge_UserScoreEN) => {
if (b.passed == true) return 1;
else return -1
}
case clsge_UserScoreEN.con_Credits:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return b.credits-a.credits;
}
case clsge_UserScoreEN.con_UsedCredits:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return b.usedCredits-a.usedCredits;
}
case clsge_UserScoreEN.con_GetDate:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (b.getDate == null) return -1;
if (a.getDate == null) return 1;
return b.getDate.localeCompare(a.getDate);
}
case clsge_UserScoreEN.con_GetInstructions:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (b.getInstructions == null) return -1;
if (a.getInstructions == null) return 1;
return b.getInstructions.localeCompare(a.getInstructions);
}
case clsge_UserScoreEN.con_BadgeNum:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
return b.badgeNum-a.badgeNum;
}
case clsge_UserScoreEN.con_UpdDate:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_UserScoreEN.con_UpdUser:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_UserScoreEN.con_Memo:
return (a: clsge_UserScoreEN, b: clsge_UserScoreEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserScore]中不存在!(in ${ ge_UserScore_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_UserScore_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_UserScoreEN.con_IdCurrEduCls:
return (obj: clsge_UserScoreEN) => {
return obj.idCurrEduCls === value;
}
case clsge_UserScoreEN.con_UserId:
return (obj: clsge_UserScoreEN) => {
return obj.userId === value;
}
case clsge_UserScoreEN.con_CourseId:
return (obj: clsge_UserScoreEN) => {
return obj.courseId === value;
}
case clsge_UserScoreEN.con_Passed:
return (obj: clsge_UserScoreEN) => {
return obj.passed === value;
}
case clsge_UserScoreEN.con_Credits:
return (obj: clsge_UserScoreEN) => {
return obj.credits === value;
}
case clsge_UserScoreEN.con_UsedCredits:
return (obj: clsge_UserScoreEN) => {
return obj.usedCredits === value;
}
case clsge_UserScoreEN.con_GetDate:
return (obj: clsge_UserScoreEN) => {
return obj.getDate === value;
}
case clsge_UserScoreEN.con_GetInstructions:
return (obj: clsge_UserScoreEN) => {
return obj.getInstructions === value;
}
case clsge_UserScoreEN.con_BadgeNum:
return (obj: clsge_UserScoreEN) => {
return obj.badgeNum === value;
}
case clsge_UserScoreEN.con_UpdDate:
return (obj: clsge_UserScoreEN) => {
return obj.updDate === value;
}
case clsge_UserScoreEN.con_UpdUser:
return (obj: clsge_UserScoreEN) => {
return obj.updUser === value;
}
case clsge_UserScoreEN.con_Memo:
return (obj: clsge_UserScoreEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserScore]中不存在!(in ${ ge_UserScore_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_UserScore__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserScore_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetFirstObjAsync(strWhereCond: string): Promise<clsge_UserScoreEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const objge_UserScore = ge_UserScore_GetObjFromJsonObj(returnObj);
return objge_UserScore;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_UserScoreEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserScore_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserScore_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_UserScoreEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserScore_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserScore_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_UserScoreEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserScore_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserScore_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_UserScoreEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_UserScoreEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserScore_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserScore_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls,strUserId:关键字列表
 * @returns 获取删除的结果
 **/
export  async function ge_UserScore_DelRecKeyLstAsync(strIdCurrEduCls: string,strUserId: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls, 
strUserId, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_Delge_UserScoresByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_UserScoresByCondAsync";
const strAction = "Delge_UserScoresByCond";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserScore_AddNewRecordAsync(objge_UserScoreEN: clsge_UserScoreEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objge_UserScoreEN.idCurrEduCls === null || objge_UserScoreEN.idCurrEduCls === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_UserScoreEN);
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserScore_AddNewRecordWithMaxIdAsync(objge_UserScoreEN: clsge_UserScoreEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_AddNewObjSave(objge_UserScoreEN: clsge_UserScoreEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_UserScore_CheckPropertyNew(objge_UserScoreEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserScore_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await ge_UserScore_IsExistAsync(objge_UserScoreEN.idCurrEduCls,objge_UserScoreEN.userId,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objge_UserScoreEN.idCurrEduCls);
console.error(strMsg);
throw(strMsg);
}
returnBool = await ge_UserScore_AddNewRecordAsync(objge_UserScoreEN);
if (returnBool == true)
{
//ge_UserScore_ReFreshCache();
}
else
{
const strInfo = `添加[用户得分(ge_UserScore)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objge_UserScoreEN.idCurrEduCls }`;
strReturnKeyLst += `|${ objge_UserScoreEN.userId }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_UserScore_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function ge_UserScore_UpdateObjSave(objge_UserScoreEN: clsge_UserScoreEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_UserScoreEN.sfUpdFldSetStr = objge_UserScoreEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_UserScoreEN.idCurrEduCls == "" || objge_UserScoreEN.idCurrEduCls == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_UserScore_CheckProperty4Update(objge_UserScoreEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserScore_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await ge_UserScore_UpdateRecordAsync(objge_UserScoreEN);
if (returnBool == true)
{
//ge_UserScore_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_UserScore_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_UserScoreEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_UserScore_AddNewRecordWithReturnKeyAsync(objge_UserScoreEN: clsge_UserScoreEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserScore_UpdateRecordAsync(objge_UserScoreEN: clsge_UserScoreEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_UserScoreEN.sfUpdFldSetStr === undefined || objge_UserScoreEN.sfUpdFldSetStr === null || objge_UserScoreEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserScoreEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserScore_EditRecordExAsync(objge_UserScoreEN: clsge_UserScoreEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_UserScoreEN.sfUpdFldSetStr === undefined || objge_UserScoreEN.sfUpdFldSetStr === null || objge_UserScoreEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserScoreEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
 * @param objge_UserScoreEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserScore_UpdateWithConditionAsync(objge_UserScoreEN: clsge_UserScoreEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_UserScoreEN.sfUpdFldSetStr === undefined || objge_UserScoreEN.sfUpdFldSetStr === null || objge_UserScoreEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserScoreEN.idCurrEduCls);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);
objge_UserScoreEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserScoreEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_IsExistAsync(strIdCurrEduCls: string,strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
strUserId,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  async function ge_UserScore_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_UserScore_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserScore_ConstructorName, strThisFuncName);
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
export  function ge_UserScore_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_UserScore_CheckPropertyNew(pobjge_UserScoreEN: clsge_UserScoreEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_UserScoreEN.courseId) === true 
 || pobjge_UserScoreEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 用户得分)!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (null === pobjge_UserScoreEN.credits 
 || pobjge_UserScoreEN.credits != null && pobjge_UserScoreEN.credits.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[积分]不能为空(In 用户得分)!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserScoreEN.idCurrEduCls) == false && GetStrLen(pobjge_UserScoreEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.idCurrEduCls}(clsge_UserScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.userId) == false && GetStrLen(pobjge_UserScoreEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.userId}(clsge_UserScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.courseId) == false && GetStrLen(pobjge_UserScoreEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.courseId}(clsge_UserScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.getDate) == false && GetStrLen(pobjge_UserScoreEN.getDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[获取日期(getDate)]的长度不能超过20(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.getDate}(clsge_UserScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.getInstructions) == false && GetStrLen(pobjge_UserScoreEN.getInstructions) > 100)
{
 throw new Error(`(errid:Watl000413)字段[获取说明(getInstructions)]的长度不能超过100(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.getInstructions}(clsge_UserScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.updDate) == false && GetStrLen(pobjge_UserScoreEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.updDate}(clsge_UserScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.updUser) == false && GetStrLen(pobjge_UserScoreEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.updUser}(clsge_UserScoreBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.memo) == false && GetStrLen(pobjge_UserScoreEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.memo}(clsge_UserScoreBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_UserScoreEN.idCurrEduCls) == false && undefined !== pobjge_UserScoreEN.idCurrEduCls && tzDataType.isString(pobjge_UserScoreEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserScoreEN.idCurrEduCls}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.userId) == false && undefined !== pobjge_UserScoreEN.userId && tzDataType.isString(pobjge_UserScoreEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_UserScoreEN.userId}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.courseId) == false && undefined !== pobjge_UserScoreEN.courseId && tzDataType.isString(pobjge_UserScoreEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_UserScoreEN.courseId}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserScoreEN.passed && undefined !== pobjge_UserScoreEN.passed && tzDataType.isBoolean(pobjge_UserScoreEN.passed) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否合格(passed)]的值:[${pobjge_UserScoreEN.passed}], 非法,应该为布尔型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserScoreEN.credits && undefined !== pobjge_UserScoreEN.credits && tzDataType.isNumber(pobjge_UserScoreEN.credits) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分(credits)]的值:[${pobjge_UserScoreEN.credits}], 非法,应该为数值型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserScoreEN.usedCredits && undefined !== pobjge_UserScoreEN.usedCredits && tzDataType.isNumber(pobjge_UserScoreEN.usedCredits) === false)
{
 throw new Error(`(errid:Watl000414)字段[已用积分(usedCredits)]的值:[${pobjge_UserScoreEN.usedCredits}], 非法,应该为数值型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.getDate) == false && undefined !== pobjge_UserScoreEN.getDate && tzDataType.isString(pobjge_UserScoreEN.getDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[获取日期(getDate)]的值:[${pobjge_UserScoreEN.getDate}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.getInstructions) == false && undefined !== pobjge_UserScoreEN.getInstructions && tzDataType.isString(pobjge_UserScoreEN.getInstructions) === false)
{
 throw new Error(`(errid:Watl000414)字段[获取说明(getInstructions)]的值:[${pobjge_UserScoreEN.getInstructions}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserScoreEN.badgeNum && undefined !== pobjge_UserScoreEN.badgeNum && tzDataType.isNumber(pobjge_UserScoreEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章数量(badgeNum)]的值:[${pobjge_UserScoreEN.badgeNum}], 非法,应该为数值型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.updDate) == false && undefined !== pobjge_UserScoreEN.updDate && tzDataType.isString(pobjge_UserScoreEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_UserScoreEN.updDate}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.updUser) == false && undefined !== pobjge_UserScoreEN.updUser && tzDataType.isString(pobjge_UserScoreEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_UserScoreEN.updUser}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.memo) == false && undefined !== pobjge_UserScoreEN.memo && tzDataType.isString(pobjge_UserScoreEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_UserScoreEN.memo}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserScore_CheckProperty4Update(pobjge_UserScoreEN: clsge_UserScoreEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserScoreEN.idCurrEduCls) == false && GetStrLen(pobjge_UserScoreEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.idCurrEduCls}(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.userId) == false && GetStrLen(pobjge_UserScoreEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.userId}(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.courseId) == false && GetStrLen(pobjge_UserScoreEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.courseId}(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.getDate) == false && GetStrLen(pobjge_UserScoreEN.getDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[获取日期(getDate)]的长度不能超过20(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.getDate}(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.getInstructions) == false && GetStrLen(pobjge_UserScoreEN.getInstructions) > 100)
{
 throw new Error(`(errid:Watl000416)字段[获取说明(getInstructions)]的长度不能超过100(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.getInstructions}(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.updDate) == false && GetStrLen(pobjge_UserScoreEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.updDate}(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.updUser) == false && GetStrLen(pobjge_UserScoreEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.updUser}(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.memo) == false && GetStrLen(pobjge_UserScoreEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户得分(ge_UserScore))!值:${pobjge_UserScoreEN.memo}(clsge_UserScoreBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_UserScoreEN.idCurrEduCls) == false && undefined !== pobjge_UserScoreEN.idCurrEduCls && tzDataType.isString(pobjge_UserScoreEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserScoreEN.idCurrEduCls}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.userId) == false && undefined !== pobjge_UserScoreEN.userId && tzDataType.isString(pobjge_UserScoreEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_UserScoreEN.userId}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.courseId) == false && undefined !== pobjge_UserScoreEN.courseId && tzDataType.isString(pobjge_UserScoreEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_UserScoreEN.courseId}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (null != pobjge_UserScoreEN.passed && undefined !== pobjge_UserScoreEN.passed && tzDataType.isBoolean(pobjge_UserScoreEN.passed) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否合格(passed)]的值:[${pobjge_UserScoreEN.passed}], 非法,应该为布尔型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (null != pobjge_UserScoreEN.credits && undefined !== pobjge_UserScoreEN.credits && tzDataType.isNumber(pobjge_UserScoreEN.credits) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分(credits)]的值:[${pobjge_UserScoreEN.credits}], 非法,应该为数值型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (null != pobjge_UserScoreEN.usedCredits && undefined !== pobjge_UserScoreEN.usedCredits && tzDataType.isNumber(pobjge_UserScoreEN.usedCredits) === false)
{
 throw new Error(`(errid:Watl000417)字段[已用积分(usedCredits)]的值:[${pobjge_UserScoreEN.usedCredits}], 非法,应该为数值型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.getDate) == false && undefined !== pobjge_UserScoreEN.getDate && tzDataType.isString(pobjge_UserScoreEN.getDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[获取日期(getDate)]的值:[${pobjge_UserScoreEN.getDate}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.getInstructions) == false && undefined !== pobjge_UserScoreEN.getInstructions && tzDataType.isString(pobjge_UserScoreEN.getInstructions) === false)
{
 throw new Error(`(errid:Watl000417)字段[获取说明(getInstructions)]的值:[${pobjge_UserScoreEN.getInstructions}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (null != pobjge_UserScoreEN.badgeNum && undefined !== pobjge_UserScoreEN.badgeNum && tzDataType.isNumber(pobjge_UserScoreEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章数量(badgeNum)]的值:[${pobjge_UserScoreEN.badgeNum}], 非法,应该为数值型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.updDate) == false && undefined !== pobjge_UserScoreEN.updDate && tzDataType.isString(pobjge_UserScoreEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_UserScoreEN.updDate}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.updUser) == false && undefined !== pobjge_UserScoreEN.updUser && tzDataType.isString(pobjge_UserScoreEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_UserScoreEN.updUser}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserScoreEN.memo) == false && undefined !== pobjge_UserScoreEN.memo && tzDataType.isString(pobjge_UserScoreEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_UserScoreEN.memo}], 非法,应该为字符型(In 用户得分(ge_UserScore))!(clsge_UserScoreBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjge_UserScoreEN.idCurrEduCls) === true 
 || pobjge_UserScoreEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[教学班流水号]不能为空(In 用户得分)!(clsge_UserScoreBL:CheckProperty4Update)`);
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
export  function ge_UserScore_GetJSONStrByObj (pobjge_UserScoreEN: clsge_UserScoreEN): string
{
pobjge_UserScoreEN.sfUpdFldSetStr = pobjge_UserScoreEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_UserScoreEN);
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
export  function ge_UserScore_GetObjLstByJSONStr (strJSON: string): Array<clsge_UserScoreEN>
{
let arrge_UserScoreObjLst = new Array<clsge_UserScoreEN>();
if (strJSON === "")
{
return arrge_UserScoreObjLst;
}
try
{
arrge_UserScoreObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_UserScoreObjLst;
}
return arrge_UserScoreObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_UserScoreObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_UserScore_GetObjLstByJSONObjLst (arrge_UserScoreObjLstS: Array<clsge_UserScoreEN>): Array<clsge_UserScoreEN>
{
const arrge_UserScoreObjLst = new Array<clsge_UserScoreEN>();
for (const objInFor of arrge_UserScoreObjLstS) {
const obj1 = ge_UserScore_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_UserScoreObjLst.push(obj1);
}
return arrge_UserScoreObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_UserScore_GetObjByJSONStr (strJSON: string): clsge_UserScoreEN
{
let pobjge_UserScoreEN = new clsge_UserScoreEN();
if (strJSON === "")
{
return pobjge_UserScoreEN;
}
try
{
pobjge_UserScoreEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_UserScoreEN;
}
return pobjge_UserScoreEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_UserScore_GetCombineCondition(objge_UserScoreCond: clsge_UserScoreEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreEN.con_IdCurrEduCls, objge_UserScoreCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreEN.con_UserId, objge_UserScoreCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreEN.con_CourseId, objge_UserScoreCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_Passed) == true)
{
if (objge_UserScoreCond.passed == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_UserScoreEN.con_Passed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserScoreEN.con_Passed);
}
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserScoreEN.con_Credits, objge_UserScoreCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_UsedCredits) == true)
{
const strComparisonOpUsedCredits:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_UsedCredits];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserScoreEN.con_UsedCredits, objge_UserScoreCond.usedCredits, strComparisonOpUsedCredits);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_GetDate) == true)
{
const strComparisonOpGetDate:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_GetDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreEN.con_GetDate, objge_UserScoreCond.getDate, strComparisonOpGetDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_GetInstructions) == true)
{
const strComparisonOpGetInstructions:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_GetInstructions];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreEN.con_GetInstructions, objge_UserScoreCond.getInstructions, strComparisonOpGetInstructions);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_BadgeNum) == true)
{
const strComparisonOpBadgeNum:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_BadgeNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserScoreEN.con_BadgeNum, objge_UserScoreCond.badgeNum, strComparisonOpBadgeNum);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreEN.con_UpdDate, objge_UserScoreCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreEN.con_UpdUser, objge_UserScoreCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_UserScoreCond.dicFldComparisonOp, clsge_UserScoreEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_UserScoreCond.dicFldComparisonOp[clsge_UserScoreEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserScoreEN.con_Memo, objge_UserScoreCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_UserScoreENS:源对象
 * @param objge_UserScoreENT:目标对象
*/
export  function ge_UserScore_CopyObjTo(objge_UserScoreENS: clsge_UserScoreEN , objge_UserScoreENT: clsge_UserScoreEN ): void 
{
objge_UserScoreENT.idCurrEduCls = objge_UserScoreENS.idCurrEduCls; //教学班流水号
objge_UserScoreENT.userId = objge_UserScoreENS.userId; //用户ID
objge_UserScoreENT.courseId = objge_UserScoreENS.courseId; //课程Id
objge_UserScoreENT.passed = objge_UserScoreENS.passed; //是否合格
objge_UserScoreENT.credits = objge_UserScoreENS.credits; //积分
objge_UserScoreENT.usedCredits = objge_UserScoreENS.usedCredits; //已用积分
objge_UserScoreENT.getDate = objge_UserScoreENS.getDate; //获取日期
objge_UserScoreENT.getInstructions = objge_UserScoreENS.getInstructions; //获取说明
objge_UserScoreENT.badgeNum = objge_UserScoreENS.badgeNum; //徽章数量
objge_UserScoreENT.updDate = objge_UserScoreENS.updDate; //修改日期
objge_UserScoreENT.updUser = objge_UserScoreENS.updUser; //修改人
objge_UserScoreENT.memo = objge_UserScoreENS.memo; //备注
objge_UserScoreENT.sfUpdFldSetStr = objge_UserScoreENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_UserScoreENS:源对象
 * @param objge_UserScoreENT:目标对象
*/
export  function ge_UserScore_GetObjFromJsonObj(objge_UserScoreENS: clsge_UserScoreEN): clsge_UserScoreEN 
{
 const objge_UserScoreENT: clsge_UserScoreEN = new clsge_UserScoreEN();
ObjectAssign(objge_UserScoreENT, objge_UserScoreENS);
 return objge_UserScoreENT;
}