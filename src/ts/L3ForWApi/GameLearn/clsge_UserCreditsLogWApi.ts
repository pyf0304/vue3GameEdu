
 /**
 * 类名:clsge_UserCreditsLogWApi
 * 表名:ge_UserCreditsLog(01120883)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:25
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
 * 用户积分日志(ge_UserCreditsLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsge_UserCreditsLogEN } from "@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_UserCreditsLog_Controller = "ge_UserCreditsLogApi";
 export const ge_UserCreditsLog_ConstructorName = "ge_UserCreditsLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ge_UserCreditsLog_GetObjBymIdAsync(lngmId: number): Promise<clsge_UserCreditsLogEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_UserCreditsLogWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const objge_UserCreditsLog = ge_UserCreditsLog_GetObjFromJsonObj(returnObj);
return objge_UserCreditsLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  function ge_UserCreditsLog_SortFunDefa(a:clsge_UserCreditsLogEN , b:clsge_UserCreditsLogEN): number 
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
export  function ge_UserCreditsLog_SortFunDefa2Fld(a:clsge_UserCreditsLogEN , b:clsge_UserCreditsLogEN): number 
{
if (a.userId == b.userId) return a.questionId - b.questionId;
else return a.userId.localeCompare(b.userId);
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
export  function ge_UserCreditsLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_UserCreditsLogEN.con_mId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return a.mId-b.mId;
}
case clsge_UserCreditsLogEN.con_UserId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsge_UserCreditsLogEN.con_QuestionId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return a.questionId-b.questionId;
}
case clsge_UserCreditsLogEN.con_ExamBatchNo:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.examBatchNo == null) return -1;
if (b.examBatchNo == null) return 1;
return a.examBatchNo.localeCompare(b.examBatchNo);
}
case clsge_UserCreditsLogEN.con_Credits:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return a.credits-b.credits;
}
case clsge_UserCreditsLogEN.con_CreditTypeId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.creditTypeId == null) return -1;
if (b.creditTypeId == null) return 1;
return a.creditTypeId.localeCompare(b.creditTypeId);
}
case clsge_UserCreditsLogEN.con_BadgeNum:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return a.badgeNum-b.badgeNum;
}
case clsge_UserCreditsLogEN.con_Passed:
return (a: clsge_UserCreditsLogEN) => {
if (a.passed == true) return 1;
else return -1
}
case clsge_UserCreditsLogEN.con_IsSubmit:
return (a: clsge_UserCreditsLogEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsge_UserCreditsLogEN.con_GetInstructions:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.getInstructions == null) return -1;
if (b.getInstructions == null) return 1;
return a.getInstructions.localeCompare(b.getInstructions);
}
case clsge_UserCreditsLogEN.con_GetDate:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.getDate == null) return -1;
if (b.getDate == null) return 1;
return a.getDate.localeCompare(b.getDate);
}
case clsge_UserCreditsLogEN.con_IdCurrEduCls:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsge_UserCreditsLogEN.con_GameLevelId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.gameLevelId == null) return -1;
if (b.gameLevelId == null) return 1;
return a.gameLevelId.localeCompare(b.gameLevelId);
}
case clsge_UserCreditsLogEN.con_CourseId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_UserCreditsLogEN.con_UpdDate:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_UserCreditsLogEN.con_UpdUser:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_UserCreditsLogEN.con_Memo:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserCreditsLog]中不存在!(in ${ ge_UserCreditsLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_UserCreditsLogEN.con_mId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return b.mId-a.mId;
}
case clsge_UserCreditsLogEN.con_UserId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsge_UserCreditsLogEN.con_QuestionId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return b.questionId-a.questionId;
}
case clsge_UserCreditsLogEN.con_ExamBatchNo:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.examBatchNo == null) return -1;
if (a.examBatchNo == null) return 1;
return b.examBatchNo.localeCompare(a.examBatchNo);
}
case clsge_UserCreditsLogEN.con_Credits:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return b.credits-a.credits;
}
case clsge_UserCreditsLogEN.con_CreditTypeId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.creditTypeId == null) return -1;
if (a.creditTypeId == null) return 1;
return b.creditTypeId.localeCompare(a.creditTypeId);
}
case clsge_UserCreditsLogEN.con_BadgeNum:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return b.badgeNum-a.badgeNum;
}
case clsge_UserCreditsLogEN.con_Passed:
return (b: clsge_UserCreditsLogEN) => {
if (b.passed == true) return 1;
else return -1
}
case clsge_UserCreditsLogEN.con_IsSubmit:
return (b: clsge_UserCreditsLogEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsge_UserCreditsLogEN.con_GetInstructions:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.getInstructions == null) return -1;
if (a.getInstructions == null) return 1;
return b.getInstructions.localeCompare(a.getInstructions);
}
case clsge_UserCreditsLogEN.con_GetDate:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.getDate == null) return -1;
if (a.getDate == null) return 1;
return b.getDate.localeCompare(a.getDate);
}
case clsge_UserCreditsLogEN.con_IdCurrEduCls:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsge_UserCreditsLogEN.con_GameLevelId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.gameLevelId == null) return -1;
if (a.gameLevelId == null) return 1;
return b.gameLevelId.localeCompare(a.gameLevelId);
}
case clsge_UserCreditsLogEN.con_CourseId:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_UserCreditsLogEN.con_UpdDate:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_UserCreditsLogEN.con_UpdUser:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_UserCreditsLogEN.con_Memo:
return (a: clsge_UserCreditsLogEN, b: clsge_UserCreditsLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserCreditsLog]中不存在!(in ${ ge_UserCreditsLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_UserCreditsLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_UserCreditsLogEN.con_mId:
return (obj: clsge_UserCreditsLogEN) => {
return obj.mId === value;
}
case clsge_UserCreditsLogEN.con_UserId:
return (obj: clsge_UserCreditsLogEN) => {
return obj.userId === value;
}
case clsge_UserCreditsLogEN.con_QuestionId:
return (obj: clsge_UserCreditsLogEN) => {
return obj.questionId === value;
}
case clsge_UserCreditsLogEN.con_ExamBatchNo:
return (obj: clsge_UserCreditsLogEN) => {
return obj.examBatchNo === value;
}
case clsge_UserCreditsLogEN.con_Credits:
return (obj: clsge_UserCreditsLogEN) => {
return obj.credits === value;
}
case clsge_UserCreditsLogEN.con_CreditTypeId:
return (obj: clsge_UserCreditsLogEN) => {
return obj.creditTypeId === value;
}
case clsge_UserCreditsLogEN.con_BadgeNum:
return (obj: clsge_UserCreditsLogEN) => {
return obj.badgeNum === value;
}
case clsge_UserCreditsLogEN.con_Passed:
return (obj: clsge_UserCreditsLogEN) => {
return obj.passed === value;
}
case clsge_UserCreditsLogEN.con_IsSubmit:
return (obj: clsge_UserCreditsLogEN) => {
return obj.isSubmit === value;
}
case clsge_UserCreditsLogEN.con_GetInstructions:
return (obj: clsge_UserCreditsLogEN) => {
return obj.getInstructions === value;
}
case clsge_UserCreditsLogEN.con_GetDate:
return (obj: clsge_UserCreditsLogEN) => {
return obj.getDate === value;
}
case clsge_UserCreditsLogEN.con_IdCurrEduCls:
return (obj: clsge_UserCreditsLogEN) => {
return obj.idCurrEduCls === value;
}
case clsge_UserCreditsLogEN.con_GameLevelId:
return (obj: clsge_UserCreditsLogEN) => {
return obj.gameLevelId === value;
}
case clsge_UserCreditsLogEN.con_CourseId:
return (obj: clsge_UserCreditsLogEN) => {
return obj.courseId === value;
}
case clsge_UserCreditsLogEN.con_UpdDate:
return (obj: clsge_UserCreditsLogEN) => {
return obj.updDate === value;
}
case clsge_UserCreditsLogEN.con_UpdUser:
return (obj: clsge_UserCreditsLogEN) => {
return obj.updUser === value;
}
case clsge_UserCreditsLogEN.con_Memo:
return (obj: clsge_UserCreditsLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_UserCreditsLog]中不存在!(in ${ ge_UserCreditsLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_UserCreditsLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserCreditsLog_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetFirstObjAsync(strWhereCond: string): Promise<clsge_UserCreditsLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const objge_UserCreditsLog = ge_UserCreditsLog_GetObjFromJsonObj(returnObj);
return objge_UserCreditsLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_UserCreditsLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserCreditsLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsge_UserCreditsLogEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserCreditsLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_UserCreditsLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserCreditsLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_UserCreditsLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserCreditsLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_UserCreditsLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_UserCreditsLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_UserCreditsLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_Delge_UserCreditsLogsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_UserCreditsLogsAsync";
const strAction = "Delge_UserCreditsLogs";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_Delge_UserCreditsLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_UserCreditsLogsByCondAsync";
const strAction = "Delge_UserCreditsLogsByCond";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserCreditsLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_UserCreditsLog_AddNewRecordAsync(objge_UserCreditsLogEN: clsge_UserCreditsLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_UserCreditsLogEN);
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserCreditsLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_AddNewObjSave(objge_UserCreditsLogEN: clsge_UserCreditsLogEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_UserCreditsLog_CheckPropertyNew(objge_UserCreditsLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserCreditsLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_UserCreditsLog_CheckUniCond4Add(objge_UserCreditsLogEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_UserCreditsLog_AddNewRecordAsync(objge_UserCreditsLogEN);
if (returnBool == true)
{
//ge_UserCreditsLog_ReFreshCache(objge_UserCreditsLogEN.idCurrEduCls);
}
else
{
const strInfo = `添加[用户积分日志(ge_UserCreditsLog)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_UserCreditsLogEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_UserCreditsLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_UserCreditsLog_CheckUniCond4Add(objge_UserCreditsLogEN: clsge_UserCreditsLogEN): Promise<boolean>{
const strUniquenessCondition = ge_UserCreditsLog_GetUniCondStr(objge_UserCreditsLogEN);
const bolIsExistCondition = await ge_UserCreditsLog_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_UserCreditsLog_CheckUniCond4Update(objge_UserCreditsLogEN: clsge_UserCreditsLogEN): Promise<boolean>{
const strUniquenessCondition = ge_UserCreditsLog_GetUniCondStr4Update(objge_UserCreditsLogEN);
const bolIsExistCondition = await ge_UserCreditsLog_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_UserCreditsLog_UpdateObjSave(objge_UserCreditsLogEN: clsge_UserCreditsLogEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_UserCreditsLogEN.sfUpdFldSetStr = objge_UserCreditsLogEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_UserCreditsLogEN.mId == 0 || objge_UserCreditsLogEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_UserCreditsLog_CheckProperty4Update(objge_UserCreditsLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_UserCreditsLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_UserCreditsLog_CheckUniCond4Update(objge_UserCreditsLogEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_UserCreditsLog_UpdateRecordAsync(objge_UserCreditsLogEN);
if (returnBool == true)
{
//ge_UserCreditsLog_ReFreshCache(objge_UserCreditsLogEN.idCurrEduCls);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_UserCreditsLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_UserCreditsLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_UserCreditsLog_AddNewRecordWithReturnKeyAsync(objge_UserCreditsLogEN: clsge_UserCreditsLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserCreditsLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserCreditsLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserCreditsLog_UpdateRecordAsync(objge_UserCreditsLogEN: clsge_UserCreditsLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_UserCreditsLogEN.sfUpdFldSetStr === undefined || objge_UserCreditsLogEN.sfUpdFldSetStr === null || objge_UserCreditsLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserCreditsLogEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserCreditsLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserCreditsLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_UserCreditsLog_EditRecordExAsync(objge_UserCreditsLogEN: clsge_UserCreditsLogEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_UserCreditsLogEN.sfUpdFldSetStr === undefined || objge_UserCreditsLogEN.sfUpdFldSetStr === null || objge_UserCreditsLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserCreditsLogEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserCreditsLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
 * @param objge_UserCreditsLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_UserCreditsLog_UpdateWithConditionAsync(objge_UserCreditsLogEN: clsge_UserCreditsLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_UserCreditsLogEN.sfUpdFldSetStr === undefined || objge_UserCreditsLogEN.sfUpdFldSetStr === null || objge_UserCreditsLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_UserCreditsLogEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);
objge_UserCreditsLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_UserCreditsLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  async function ge_UserCreditsLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_UserCreditsLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_UserCreditsLog_ConstructorName, strThisFuncName);
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
export  function ge_UserCreditsLog_GetWebApiUrl(strController: string, strAction: string): string {
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

//(IsNeedGC == false)该表下拉框功能不需要生成;

//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserCreditsLog_CheckPropertyNew(pobjge_UserCreditsLogEN: clsge_UserCreditsLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (null === pobjge_UserCreditsLogEN.isSubmit 
 || pobjge_UserCreditsLogEN.isSubmit != null && pobjge_UserCreditsLogEN.isSubmit.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否提交]不能为空(In 用户积分日志)!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.idCurrEduCls) === true 
 || pobjge_UserCreditsLogEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 用户积分日志)!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.courseId) === true 
 || pobjge_UserCreditsLogEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 用户积分日志)!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.userId) == false && GetStrLen(pobjge_UserCreditsLogEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.userId}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.examBatchNo) == false && GetStrLen(pobjge_UserCreditsLogEN.examBatchNo) > 20)
{
 throw new Error(`(errid:Watl000413)字段[学生批次号(examBatchNo)]的长度不能超过20(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.examBatchNo}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.creditTypeId) == false && GetStrLen(pobjge_UserCreditsLogEN.creditTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[积分类型Id(creditTypeId)]的长度不能超过2(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.creditTypeId}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.getInstructions) == false && GetStrLen(pobjge_UserCreditsLogEN.getInstructions) > 100)
{
 throw new Error(`(errid:Watl000413)字段[获取说明(getInstructions)]的长度不能超过100(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.getInstructions}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.getDate) == false && GetStrLen(pobjge_UserCreditsLogEN.getDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[获取日期(getDate)]的长度不能超过20(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.getDate}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.idCurrEduCls) == false && GetStrLen(pobjge_UserCreditsLogEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.idCurrEduCls}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.gameLevelId) == false && GetStrLen(pobjge_UserCreditsLogEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.gameLevelId}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.courseId) == false && GetStrLen(pobjge_UserCreditsLogEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.courseId}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.updDate) == false && GetStrLen(pobjge_UserCreditsLogEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.updDate}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.updUser) == false && GetStrLen(pobjge_UserCreditsLogEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.updUser}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.memo) == false && GetStrLen(pobjge_UserCreditsLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.memo}(clsge_UserCreditsLogBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_UserCreditsLogEN.mId && undefined !== pobjge_UserCreditsLogEN.mId && tzDataType.isNumber(pobjge_UserCreditsLogEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjge_UserCreditsLogEN.mId}], 非法,应该为数值型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.userId) == false && undefined !== pobjge_UserCreditsLogEN.userId && tzDataType.isString(pobjge_UserCreditsLogEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_UserCreditsLogEN.userId}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserCreditsLogEN.questionId && undefined !== pobjge_UserCreditsLogEN.questionId && tzDataType.isNumber(pobjge_UserCreditsLogEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjge_UserCreditsLogEN.questionId}], 非法,应该为数值型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.examBatchNo) == false && undefined !== pobjge_UserCreditsLogEN.examBatchNo && tzDataType.isString(pobjge_UserCreditsLogEN.examBatchNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生批次号(examBatchNo)]的值:[${pobjge_UserCreditsLogEN.examBatchNo}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserCreditsLogEN.credits && undefined !== pobjge_UserCreditsLogEN.credits && tzDataType.isNumber(pobjge_UserCreditsLogEN.credits) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分(credits)]的值:[${pobjge_UserCreditsLogEN.credits}], 非法,应该为数值型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.creditTypeId) == false && undefined !== pobjge_UserCreditsLogEN.creditTypeId && tzDataType.isString(pobjge_UserCreditsLogEN.creditTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分类型Id(creditTypeId)]的值:[${pobjge_UserCreditsLogEN.creditTypeId}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserCreditsLogEN.badgeNum && undefined !== pobjge_UserCreditsLogEN.badgeNum && tzDataType.isNumber(pobjge_UserCreditsLogEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[徽章数量(badgeNum)]的值:[${pobjge_UserCreditsLogEN.badgeNum}], 非法,应该为数值型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserCreditsLogEN.passed && undefined !== pobjge_UserCreditsLogEN.passed && tzDataType.isBoolean(pobjge_UserCreditsLogEN.passed) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否合格(passed)]的值:[${pobjge_UserCreditsLogEN.passed}], 非法,应该为布尔型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (null != pobjge_UserCreditsLogEN.isSubmit && undefined !== pobjge_UserCreditsLogEN.isSubmit && tzDataType.isBoolean(pobjge_UserCreditsLogEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否提交(isSubmit)]的值:[${pobjge_UserCreditsLogEN.isSubmit}], 非法,应该为布尔型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.getInstructions) == false && undefined !== pobjge_UserCreditsLogEN.getInstructions && tzDataType.isString(pobjge_UserCreditsLogEN.getInstructions) === false)
{
 throw new Error(`(errid:Watl000414)字段[获取说明(getInstructions)]的值:[${pobjge_UserCreditsLogEN.getInstructions}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.getDate) == false && undefined !== pobjge_UserCreditsLogEN.getDate && tzDataType.isString(pobjge_UserCreditsLogEN.getDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[获取日期(getDate)]的值:[${pobjge_UserCreditsLogEN.getDate}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.idCurrEduCls) == false && undefined !== pobjge_UserCreditsLogEN.idCurrEduCls && tzDataType.isString(pobjge_UserCreditsLogEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserCreditsLogEN.idCurrEduCls}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.gameLevelId) == false && undefined !== pobjge_UserCreditsLogEN.gameLevelId && tzDataType.isString(pobjge_UserCreditsLogEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_UserCreditsLogEN.gameLevelId}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.courseId) == false && undefined !== pobjge_UserCreditsLogEN.courseId && tzDataType.isString(pobjge_UserCreditsLogEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_UserCreditsLogEN.courseId}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.updDate) == false && undefined !== pobjge_UserCreditsLogEN.updDate && tzDataType.isString(pobjge_UserCreditsLogEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_UserCreditsLogEN.updDate}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.updUser) == false && undefined !== pobjge_UserCreditsLogEN.updUser && tzDataType.isString(pobjge_UserCreditsLogEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_UserCreditsLogEN.updUser}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.memo) == false && undefined !== pobjge_UserCreditsLogEN.memo && tzDataType.isString(pobjge_UserCreditsLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_UserCreditsLogEN.memo}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_UserCreditsLog_CheckProperty4Update(pobjge_UserCreditsLogEN: clsge_UserCreditsLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.userId) == false && GetStrLen(pobjge_UserCreditsLogEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.userId}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.examBatchNo) == false && GetStrLen(pobjge_UserCreditsLogEN.examBatchNo) > 20)
{
 throw new Error(`(errid:Watl000416)字段[学生批次号(examBatchNo)]的长度不能超过20(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.examBatchNo}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.creditTypeId) == false && GetStrLen(pobjge_UserCreditsLogEN.creditTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[积分类型Id(creditTypeId)]的长度不能超过2(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.creditTypeId}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.getInstructions) == false && GetStrLen(pobjge_UserCreditsLogEN.getInstructions) > 100)
{
 throw new Error(`(errid:Watl000416)字段[获取说明(getInstructions)]的长度不能超过100(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.getInstructions}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.getDate) == false && GetStrLen(pobjge_UserCreditsLogEN.getDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[获取日期(getDate)]的长度不能超过20(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.getDate}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.idCurrEduCls) == false && GetStrLen(pobjge_UserCreditsLogEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.idCurrEduCls}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.gameLevelId) == false && GetStrLen(pobjge_UserCreditsLogEN.gameLevelId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[游戏关卡Id(gameLevelId)]的长度不能超过8(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.gameLevelId}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.courseId) == false && GetStrLen(pobjge_UserCreditsLogEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.courseId}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.updDate) == false && GetStrLen(pobjge_UserCreditsLogEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.updDate}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.updUser) == false && GetStrLen(pobjge_UserCreditsLogEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.updUser}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.memo) == false && GetStrLen(pobjge_UserCreditsLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户积分日志(ge_UserCreditsLog))!值:${pobjge_UserCreditsLogEN.memo}(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_UserCreditsLogEN.mId && undefined !== pobjge_UserCreditsLogEN.mId && tzDataType.isNumber(pobjge_UserCreditsLogEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjge_UserCreditsLogEN.mId}], 非法,应该为数值型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.userId) == false && undefined !== pobjge_UserCreditsLogEN.userId && tzDataType.isString(pobjge_UserCreditsLogEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_UserCreditsLogEN.userId}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (null != pobjge_UserCreditsLogEN.questionId && undefined !== pobjge_UserCreditsLogEN.questionId && tzDataType.isNumber(pobjge_UserCreditsLogEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjge_UserCreditsLogEN.questionId}], 非法,应该为数值型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.examBatchNo) == false && undefined !== pobjge_UserCreditsLogEN.examBatchNo && tzDataType.isString(pobjge_UserCreditsLogEN.examBatchNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生批次号(examBatchNo)]的值:[${pobjge_UserCreditsLogEN.examBatchNo}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (null != pobjge_UserCreditsLogEN.credits && undefined !== pobjge_UserCreditsLogEN.credits && tzDataType.isNumber(pobjge_UserCreditsLogEN.credits) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分(credits)]的值:[${pobjge_UserCreditsLogEN.credits}], 非法,应该为数值型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.creditTypeId) == false && undefined !== pobjge_UserCreditsLogEN.creditTypeId && tzDataType.isString(pobjge_UserCreditsLogEN.creditTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分类型Id(creditTypeId)]的值:[${pobjge_UserCreditsLogEN.creditTypeId}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (null != pobjge_UserCreditsLogEN.badgeNum && undefined !== pobjge_UserCreditsLogEN.badgeNum && tzDataType.isNumber(pobjge_UserCreditsLogEN.badgeNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[徽章数量(badgeNum)]的值:[${pobjge_UserCreditsLogEN.badgeNum}], 非法,应该为数值型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (null != pobjge_UserCreditsLogEN.passed && undefined !== pobjge_UserCreditsLogEN.passed && tzDataType.isBoolean(pobjge_UserCreditsLogEN.passed) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否合格(passed)]的值:[${pobjge_UserCreditsLogEN.passed}], 非法,应该为布尔型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (null != pobjge_UserCreditsLogEN.isSubmit && undefined !== pobjge_UserCreditsLogEN.isSubmit && tzDataType.isBoolean(pobjge_UserCreditsLogEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否提交(isSubmit)]的值:[${pobjge_UserCreditsLogEN.isSubmit}], 非法,应该为布尔型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.getInstructions) == false && undefined !== pobjge_UserCreditsLogEN.getInstructions && tzDataType.isString(pobjge_UserCreditsLogEN.getInstructions) === false)
{
 throw new Error(`(errid:Watl000417)字段[获取说明(getInstructions)]的值:[${pobjge_UserCreditsLogEN.getInstructions}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.getDate) == false && undefined !== pobjge_UserCreditsLogEN.getDate && tzDataType.isString(pobjge_UserCreditsLogEN.getDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[获取日期(getDate)]的值:[${pobjge_UserCreditsLogEN.getDate}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.idCurrEduCls) == false && undefined !== pobjge_UserCreditsLogEN.idCurrEduCls && tzDataType.isString(pobjge_UserCreditsLogEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjge_UserCreditsLogEN.idCurrEduCls}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.gameLevelId) == false && undefined !== pobjge_UserCreditsLogEN.gameLevelId && tzDataType.isString(pobjge_UserCreditsLogEN.gameLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[游戏关卡Id(gameLevelId)]的值:[${pobjge_UserCreditsLogEN.gameLevelId}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.courseId) == false && undefined !== pobjge_UserCreditsLogEN.courseId && tzDataType.isString(pobjge_UserCreditsLogEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_UserCreditsLogEN.courseId}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.updDate) == false && undefined !== pobjge_UserCreditsLogEN.updDate && tzDataType.isString(pobjge_UserCreditsLogEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_UserCreditsLogEN.updDate}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.updUser) == false && undefined !== pobjge_UserCreditsLogEN.updUser && tzDataType.isString(pobjge_UserCreditsLogEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_UserCreditsLogEN.updUser}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_UserCreditsLogEN.memo) == false && undefined !== pobjge_UserCreditsLogEN.memo && tzDataType.isString(pobjge_UserCreditsLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_UserCreditsLogEN.memo}], 非法,应该为字符型(In 用户积分日志(ge_UserCreditsLog))!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_UserCreditsLogEN.mId 
 || pobjge_UserCreditsLogEN.mId != null && pobjge_UserCreditsLogEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 用户积分日志)!(clsge_UserCreditsLogBL:CheckProperty4Update)`);
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
export  function ge_UserCreditsLog_GetJSONStrByObj (pobjge_UserCreditsLogEN: clsge_UserCreditsLogEN): string
{
pobjge_UserCreditsLogEN.sfUpdFldSetStr = pobjge_UserCreditsLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_UserCreditsLogEN);
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
export  function ge_UserCreditsLog_GetObjLstByJSONStr (strJSON: string): Array<clsge_UserCreditsLogEN>
{
let arrge_UserCreditsLogObjLst = new Array<clsge_UserCreditsLogEN>();
if (strJSON === "")
{
return arrge_UserCreditsLogObjLst;
}
try
{
arrge_UserCreditsLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_UserCreditsLogObjLst;
}
return arrge_UserCreditsLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_UserCreditsLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_UserCreditsLog_GetObjLstByJSONObjLst (arrge_UserCreditsLogObjLstS: Array<clsge_UserCreditsLogEN>): Array<clsge_UserCreditsLogEN>
{
const arrge_UserCreditsLogObjLst = new Array<clsge_UserCreditsLogEN>();
for (const objInFor of arrge_UserCreditsLogObjLstS) {
const obj1 = ge_UserCreditsLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_UserCreditsLogObjLst.push(obj1);
}
return arrge_UserCreditsLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_UserCreditsLog_GetObjByJSONStr (strJSON: string): clsge_UserCreditsLogEN
{
let pobjge_UserCreditsLogEN = new clsge_UserCreditsLogEN();
if (strJSON === "")
{
return pobjge_UserCreditsLogEN;
}
try
{
pobjge_UserCreditsLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_UserCreditsLogEN;
}
return pobjge_UserCreditsLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_UserCreditsLog_GetCombineCondition(objge_UserCreditsLogCond: clsge_UserCreditsLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_mId) == true)
{
const strComparisonOpmId:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserCreditsLogEN.con_mId, objge_UserCreditsLogCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_UserId, objge_UserCreditsLogCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserCreditsLogEN.con_QuestionId, objge_UserCreditsLogCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_ExamBatchNo) == true)
{
const strComparisonOpExamBatchNo:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_ExamBatchNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_ExamBatchNo, objge_UserCreditsLogCond.examBatchNo, strComparisonOpExamBatchNo);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserCreditsLogEN.con_Credits, objge_UserCreditsLogCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_CreditTypeId) == true)
{
const strComparisonOpCreditTypeId:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_CreditTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_CreditTypeId, objge_UserCreditsLogCond.creditTypeId, strComparisonOpCreditTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_BadgeNum) == true)
{
const strComparisonOpBadgeNum:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_BadgeNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_UserCreditsLogEN.con_BadgeNum, objge_UserCreditsLogCond.badgeNum, strComparisonOpBadgeNum);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_Passed) == true)
{
if (objge_UserCreditsLogCond.passed == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_UserCreditsLogEN.con_Passed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserCreditsLogEN.con_Passed);
}
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_IsSubmit) == true)
{
if (objge_UserCreditsLogCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_UserCreditsLogEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserCreditsLogEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_GetInstructions) == true)
{
const strComparisonOpGetInstructions:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_GetInstructions];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_GetInstructions, objge_UserCreditsLogCond.getInstructions, strComparisonOpGetInstructions);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_GetDate) == true)
{
const strComparisonOpGetDate:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_GetDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_GetDate, objge_UserCreditsLogCond.getDate, strComparisonOpGetDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_IdCurrEduCls, objge_UserCreditsLogCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_GameLevelId) == true)
{
const strComparisonOpGameLevelId:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_GameLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_GameLevelId, objge_UserCreditsLogCond.gameLevelId, strComparisonOpGameLevelId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_CourseId, objge_UserCreditsLogCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_UpdDate, objge_UserCreditsLogCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_UpdUser, objge_UserCreditsLogCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_UserCreditsLogCond.dicFldComparisonOp, clsge_UserCreditsLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_UserCreditsLogCond.dicFldComparisonOp[clsge_UserCreditsLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_UserCreditsLogEN.con_Memo, objge_UserCreditsLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_UserCreditsLog(用户积分日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strExamBatchNo: 学生批次号(要求唯一的字段)
 * @param strGameLevelId: 游戏关卡Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_UserCreditsLog_GetUniCondStr(objge_UserCreditsLogEN: clsge_UserCreditsLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ExamBatchNo = '{0}'", objge_UserCreditsLogEN.examBatchNo);
 strWhereCond +=  Format(" and GameLevelId = '{0}'", objge_UserCreditsLogEN.gameLevelId);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_UserCreditsLogEN.userId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_UserCreditsLogEN.idCurrEduCls);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_UserCreditsLog(用户积分日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strExamBatchNo: 学生批次号(要求唯一的字段)
 * @param strGameLevelId: 游戏关卡Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_UserCreditsLog_GetUniCondStr4Update(objge_UserCreditsLogEN: clsge_UserCreditsLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objge_UserCreditsLogEN.mId);
 strWhereCond +=  Format(" and ExamBatchNo = '{0}'", objge_UserCreditsLogEN.examBatchNo);
 strWhereCond +=  Format(" and GameLevelId = '{0}'", objge_UserCreditsLogEN.gameLevelId);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_UserCreditsLogEN.userId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objge_UserCreditsLogEN.idCurrEduCls);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_UserCreditsLogENS:源对象
 * @param objge_UserCreditsLogENT:目标对象
*/
export  function ge_UserCreditsLog_CopyObjTo(objge_UserCreditsLogENS: clsge_UserCreditsLogEN , objge_UserCreditsLogENT: clsge_UserCreditsLogEN ): void 
{
objge_UserCreditsLogENT.mId = objge_UserCreditsLogENS.mId; //mId
objge_UserCreditsLogENT.userId = objge_UserCreditsLogENS.userId; //用户ID
objge_UserCreditsLogENT.questionId = objge_UserCreditsLogENS.questionId; //题目Id
objge_UserCreditsLogENT.examBatchNo = objge_UserCreditsLogENS.examBatchNo; //学生批次号
objge_UserCreditsLogENT.credits = objge_UserCreditsLogENS.credits; //积分
objge_UserCreditsLogENT.creditTypeId = objge_UserCreditsLogENS.creditTypeId; //积分类型Id
objge_UserCreditsLogENT.badgeNum = objge_UserCreditsLogENS.badgeNum; //徽章数量
objge_UserCreditsLogENT.passed = objge_UserCreditsLogENS.passed; //是否合格
objge_UserCreditsLogENT.isSubmit = objge_UserCreditsLogENS.isSubmit; //是否提交
objge_UserCreditsLogENT.getInstructions = objge_UserCreditsLogENS.getInstructions; //获取说明
objge_UserCreditsLogENT.getDate = objge_UserCreditsLogENS.getDate; //获取日期
objge_UserCreditsLogENT.idCurrEduCls = objge_UserCreditsLogENS.idCurrEduCls; //教学班流水号
objge_UserCreditsLogENT.gameLevelId = objge_UserCreditsLogENS.gameLevelId; //游戏关卡Id
objge_UserCreditsLogENT.courseId = objge_UserCreditsLogENS.courseId; //课程Id
objge_UserCreditsLogENT.updDate = objge_UserCreditsLogENS.updDate; //修改日期
objge_UserCreditsLogENT.updUser = objge_UserCreditsLogENS.updUser; //修改人
objge_UserCreditsLogENT.memo = objge_UserCreditsLogENS.memo; //备注
objge_UserCreditsLogENT.sfUpdFldSetStr = objge_UserCreditsLogENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_UserCreditsLogENS:源对象
 * @param objge_UserCreditsLogENT:目标对象
*/
export  function ge_UserCreditsLog_GetObjFromJsonObj(objge_UserCreditsLogENS: clsge_UserCreditsLogEN): clsge_UserCreditsLogEN 
{
 const objge_UserCreditsLogENT: clsge_UserCreditsLogEN = new clsge_UserCreditsLogEN();
ObjectAssign(objge_UserCreditsLogENT, objge_UserCreditsLogENS);
 return objge_UserCreditsLogENT;
}