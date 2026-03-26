
 /**
 * 类名:clsKnowledgeLearnDetailWApi
 * 表名:KnowledgeLearnDetail(01120153)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:17
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
 * 知识点学习情况(KnowledgeLearnDetail)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsKnowledgeLearnDetailEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnDetailEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const knowledgeLearnDetail_Controller = "KnowledgeLearnDetailApi";
 export const knowledgeLearnDetail_ConstructorName = "knowledgeLearnDetail";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function KnowledgeLearnDetail_GetObjBymIdAsync(lngmId: number): Promise<clsKnowledgeLearnDetailEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsKnowledgeLearnDetailWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const objKnowledgeLearnDetail = KnowledgeLearnDetail_GetObjFromJsonObj(returnObj);
return objKnowledgeLearnDetail;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  function KnowledgeLearnDetail_SortFunDefa(a:clsKnowledgeLearnDetailEN , b:clsKnowledgeLearnDetailEN): number 
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
export  function KnowledgeLearnDetail_SortFunDefa2Fld(a:clsKnowledgeLearnDetailEN , b:clsKnowledgeLearnDetailEN): number 
{
if (a.userId == b.userId) return a.learnDate.localeCompare(b.learnDate);
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
export  function KnowledgeLearnDetail_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsKnowledgeLearnDetailEN.con_mId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return a.mId-b.mId;
}
case clsKnowledgeLearnDetailEN.con_UserId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsKnowledgeLearnDetailEN.con_LearnDate:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return a.learnDate.localeCompare(b.learnDate);
}
case clsKnowledgeLearnDetailEN.con_LearnModeId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return a.learnModeId.localeCompare(b.learnModeId);
}
case clsKnowledgeLearnDetailEN.con_CourseKnowledgeId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (a.courseKnowledgeId == null) return -1;
if (b.courseKnowledgeId == null) return 1;
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsKnowledgeLearnDetailEN.con_IdCase:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (a.idCase == null) return -1;
if (b.idCase == null) return 1;
return a.idCase.localeCompare(b.idCase);
}
case clsKnowledgeLearnDetailEN.con_IdCaseType:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (a.idCaseType == null) return -1;
if (b.idCaseType == null) return 1;
return a.idCaseType.localeCompare(b.idCaseType);
}
case clsKnowledgeLearnDetailEN.con_IsRight:
return (a: clsKnowledgeLearnDetailEN) => {
if (a.isRight == true) return 1;
else return -1
}
case clsKnowledgeLearnDetailEN.con_IsMaster:
return (a: clsKnowledgeLearnDetailEN) => {
if (a.isMaster == true) return 1;
else return -1
}
case clsKnowledgeLearnDetailEN.con_MasterDegree:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return a.masterDegree-b.masterDegree;
}
case clsKnowledgeLearnDetailEN.con_MarkerId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (a.markerId == null) return -1;
if (b.markerId == null) return 1;
return a.markerId.localeCompare(b.markerId);
}
case clsKnowledgeLearnDetailEN.con_MarkTime:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (a.markTime == null) return -1;
if (b.markTime == null) return 1;
return a.markTime.localeCompare(b.markTime);
}
case clsKnowledgeLearnDetailEN.con_IsAnalysis:
return (a: clsKnowledgeLearnDetailEN) => {
if (a.isAnalysis == true) return 1;
else return -1
}
case clsKnowledgeLearnDetailEN.con_CourseId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsKnowledgeLearnDetailEN.con_UpdDate:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsKnowledgeLearnDetailEN.con_UpdUser:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsKnowledgeLearnDetailEN.con_Memo:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeLearnDetail]中不存在!(in ${ knowledgeLearnDetail_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsKnowledgeLearnDetailEN.con_mId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return b.mId-a.mId;
}
case clsKnowledgeLearnDetailEN.con_UserId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsKnowledgeLearnDetailEN.con_LearnDate:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return b.learnDate.localeCompare(a.learnDate);
}
case clsKnowledgeLearnDetailEN.con_LearnModeId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return b.learnModeId.localeCompare(a.learnModeId);
}
case clsKnowledgeLearnDetailEN.con_CourseKnowledgeId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (b.courseKnowledgeId == null) return -1;
if (a.courseKnowledgeId == null) return 1;
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsKnowledgeLearnDetailEN.con_IdCase:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (b.idCase == null) return -1;
if (a.idCase == null) return 1;
return b.idCase.localeCompare(a.idCase);
}
case clsKnowledgeLearnDetailEN.con_IdCaseType:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (b.idCaseType == null) return -1;
if (a.idCaseType == null) return 1;
return b.idCaseType.localeCompare(a.idCaseType);
}
case clsKnowledgeLearnDetailEN.con_IsRight:
return (b: clsKnowledgeLearnDetailEN) => {
if (b.isRight == true) return 1;
else return -1
}
case clsKnowledgeLearnDetailEN.con_IsMaster:
return (b: clsKnowledgeLearnDetailEN) => {
if (b.isMaster == true) return 1;
else return -1
}
case clsKnowledgeLearnDetailEN.con_MasterDegree:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return b.masterDegree-a.masterDegree;
}
case clsKnowledgeLearnDetailEN.con_MarkerId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (b.markerId == null) return -1;
if (a.markerId == null) return 1;
return b.markerId.localeCompare(a.markerId);
}
case clsKnowledgeLearnDetailEN.con_MarkTime:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (b.markTime == null) return -1;
if (a.markTime == null) return 1;
return b.markTime.localeCompare(a.markTime);
}
case clsKnowledgeLearnDetailEN.con_IsAnalysis:
return (b: clsKnowledgeLearnDetailEN) => {
if (b.isAnalysis == true) return 1;
else return -1
}
case clsKnowledgeLearnDetailEN.con_CourseId:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsKnowledgeLearnDetailEN.con_UpdDate:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsKnowledgeLearnDetailEN.con_UpdUser:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsKnowledgeLearnDetailEN.con_Memo:
return (a: clsKnowledgeLearnDetailEN, b: clsKnowledgeLearnDetailEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeLearnDetail]中不存在!(in ${ knowledgeLearnDetail_ConstructorName}.${ strThisFuncName})`;
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
export  async function KnowledgeLearnDetail_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsKnowledgeLearnDetailEN.con_mId:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.mId === value;
}
case clsKnowledgeLearnDetailEN.con_UserId:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.userId === value;
}
case clsKnowledgeLearnDetailEN.con_LearnDate:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.learnDate === value;
}
case clsKnowledgeLearnDetailEN.con_LearnModeId:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.learnModeId === value;
}
case clsKnowledgeLearnDetailEN.con_CourseKnowledgeId:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.courseKnowledgeId === value;
}
case clsKnowledgeLearnDetailEN.con_IdCase:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.idCase === value;
}
case clsKnowledgeLearnDetailEN.con_IdCaseType:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.idCaseType === value;
}
case clsKnowledgeLearnDetailEN.con_IsRight:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.isRight === value;
}
case clsKnowledgeLearnDetailEN.con_IsMaster:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.isMaster === value;
}
case clsKnowledgeLearnDetailEN.con_MasterDegree:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.masterDegree === value;
}
case clsKnowledgeLearnDetailEN.con_MarkerId:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.markerId === value;
}
case clsKnowledgeLearnDetailEN.con_MarkTime:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.markTime === value;
}
case clsKnowledgeLearnDetailEN.con_IsAnalysis:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.isAnalysis === value;
}
case clsKnowledgeLearnDetailEN.con_CourseId:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.courseId === value;
}
case clsKnowledgeLearnDetailEN.con_UpdDate:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.updDate === value;
}
case clsKnowledgeLearnDetailEN.con_UpdUser:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.updUser === value;
}
case clsKnowledgeLearnDetailEN.con_Memo:
return (obj: clsKnowledgeLearnDetailEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeLearnDetail]中不存在!(in ${ knowledgeLearnDetail_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[KnowledgeLearnDetail__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KnowledgeLearnDetail_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetFirstObjAsync(strWhereCond: string): Promise<clsKnowledgeLearnDetailEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const objKnowledgeLearnDetail = KnowledgeLearnDetail_GetObjFromJsonObj(returnObj);
return objKnowledgeLearnDetail;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetObjLstAsync(strWhereCond: string): Promise<Array<clsKnowledgeLearnDetailEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsKnowledgeLearnDetailEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsKnowledgeLearnDetailEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsKnowledgeLearnDetailEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsKnowledgeLearnDetailEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsKnowledgeLearnDetailEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeLearnDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_DelKnowledgeLearnDetailsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelKnowledgeLearnDetailsAsync";
const strAction = "DelKnowledgeLearnDetails";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_DelKnowledgeLearnDetailsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelKnowledgeLearnDetailsByCondAsync";
const strAction = "DelKnowledgeLearnDetailsByCond";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeLearnDetailEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KnowledgeLearnDetail_AddNewRecordAsync(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objKnowledgeLearnDetailEN);
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_AddNewObjSave(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
KnowledgeLearnDetail_CheckPropertyNew(objKnowledgeLearnDetailEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ knowledgeLearnDetail_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await KnowledgeLearnDetail_CheckUniCond4Add(objKnowledgeLearnDetailEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await KnowledgeLearnDetail_AddNewRecordAsync(objKnowledgeLearnDetailEN);
if (returnBool == true)
{
//KnowledgeLearnDetail_ReFreshCache(objKnowledgeLearnDetailEN.courseId);
}
else
{
const strInfo = `添加[知识点学习情况(KnowledgeLearnDetail)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objKnowledgeLearnDetailEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ knowledgeLearnDetail_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function KnowledgeLearnDetail_CheckUniCond4Add(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): Promise<boolean>{
const strUniquenessCondition = KnowledgeLearnDetail_GetUniCondStr(objKnowledgeLearnDetailEN);
const bolIsExistCondition = await KnowledgeLearnDetail_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KnowledgeLearnDetail_CheckUniCond4Update(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): Promise<boolean>{
const strUniquenessCondition = KnowledgeLearnDetail_GetUniCondStr4Update(objKnowledgeLearnDetailEN);
const bolIsExistCondition = await KnowledgeLearnDetail_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KnowledgeLearnDetail_UpdateObjSave(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objKnowledgeLearnDetailEN.sfUpdFldSetStr = objKnowledgeLearnDetailEN.updFldString;//设置哪些字段被修改(脏字段)
if (objKnowledgeLearnDetailEN.mId == 0 || objKnowledgeLearnDetailEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
KnowledgeLearnDetail_CheckProperty4Update(objKnowledgeLearnDetailEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ knowledgeLearnDetail_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await KnowledgeLearnDetail_CheckUniCond4Update(objKnowledgeLearnDetailEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await KnowledgeLearnDetail_UpdateRecordAsync(objKnowledgeLearnDetailEN);
if (returnBool == true)
{
//KnowledgeLearnDetail_ReFreshCache(objKnowledgeLearnDetailEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ knowledgeLearnDetail_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objKnowledgeLearnDetailEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function KnowledgeLearnDetail_AddNewRecordWithReturnKeyAsync(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeLearnDetailEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KnowledgeLearnDetail_UpdateRecordAsync(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objKnowledgeLearnDetailEN.sfUpdFldSetStr === undefined || objKnowledgeLearnDetailEN.sfUpdFldSetStr === null || objKnowledgeLearnDetailEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeLearnDetailEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeLearnDetailEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KnowledgeLearnDetail_EditRecordExAsync(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objKnowledgeLearnDetailEN.sfUpdFldSetStr === undefined || objKnowledgeLearnDetailEN.sfUpdFldSetStr === null || objKnowledgeLearnDetailEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeLearnDetailEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeLearnDetailEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KnowledgeLearnDetail_UpdateWithConditionAsync(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objKnowledgeLearnDetailEN.sfUpdFldSetStr === undefined || objKnowledgeLearnDetailEN.sfUpdFldSetStr === null || objKnowledgeLearnDetailEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeLearnDetailEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);
objKnowledgeLearnDetailEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeLearnDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  async function KnowledgeLearnDetail_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(knowledgeLearnDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeLearnDetail_ConstructorName, strThisFuncName);
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
export  function KnowledgeLearnDetail_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function KnowledgeLearnDetail_CheckPropertyNew(pobjKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[学习日期]不能为空(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnModeId) === true 
 || pobjKnowledgeLearnDetailEN.learnModeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学习模式Id]不能为空(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (null === pobjKnowledgeLearnDetailEN.isMaster 
 || pobjKnowledgeLearnDetailEN.isMaster != null && pobjKnowledgeLearnDetailEN.isMaster.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否掌握]不能为空(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (null === pobjKnowledgeLearnDetailEN.masterDegree 
 || pobjKnowledgeLearnDetailEN.masterDegree != null && pobjKnowledgeLearnDetailEN.masterDegree.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[掌握程度]不能为空(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (null === pobjKnowledgeLearnDetailEN.isAnalysis 
 || pobjKnowledgeLearnDetailEN.isAnalysis != null && pobjKnowledgeLearnDetailEN.isAnalysis.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否分析]不能为空(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseId) === true 
 || pobjKnowledgeLearnDetailEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.userId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.userId}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnDate) == false && GetStrLen(pobjKnowledgeLearnDetailEN.learnDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[学习日期(learnDate)]的长度不能超过20(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.learnDate}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnModeId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.learnModeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学习模式Id(learnModeId)]的长度不能超过4(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.learnModeId}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseKnowledgeId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.courseKnowledgeId}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.idCase) == false && GetStrLen(pobjKnowledgeLearnDetailEN.idCase) > 8)
{
 throw new Error(`(errid:Watl000413)字段[案例流水号(idCase)]的长度不能超过8(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.idCase}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.idCaseType) == false && GetStrLen(pobjKnowledgeLearnDetailEN.idCaseType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[案例类型流水号(idCaseType)]的长度不能超过4(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.idCaseType}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.markerId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.markerId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[打分者(markerId)]的长度不能超过20(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.markerId}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.markTime) == false && GetStrLen(pobjKnowledgeLearnDetailEN.markTime) > 14)
{
 throw new Error(`(errid:Watl000413)字段[批改时间(markTime)]的长度不能超过14(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.markTime}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.courseId}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updDate) == false && GetStrLen(pobjKnowledgeLearnDetailEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.updDate}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updUser) == false && GetStrLen(pobjKnowledgeLearnDetailEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.updUser}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.memo) == false && GetStrLen(pobjKnowledgeLearnDetailEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.memo}(clsKnowledgeLearnDetailBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjKnowledgeLearnDetailEN.mId && undefined !== pobjKnowledgeLearnDetailEN.mId && tzDataType.isNumber(pobjKnowledgeLearnDetailEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjKnowledgeLearnDetailEN.mId}], 非法,应该为数值型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.userId) == false && undefined !== pobjKnowledgeLearnDetailEN.userId && tzDataType.isString(pobjKnowledgeLearnDetailEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjKnowledgeLearnDetailEN.userId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnDate) == false && undefined !== pobjKnowledgeLearnDetailEN.learnDate && tzDataType.isString(pobjKnowledgeLearnDetailEN.learnDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[学习日期(learnDate)]的值:[${pobjKnowledgeLearnDetailEN.learnDate}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnModeId) == false && undefined !== pobjKnowledgeLearnDetailEN.learnModeId && tzDataType.isString(pobjKnowledgeLearnDetailEN.learnModeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学习模式Id(learnModeId)]的值:[${pobjKnowledgeLearnDetailEN.learnModeId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseKnowledgeId) == false && undefined !== pobjKnowledgeLearnDetailEN.courseKnowledgeId && tzDataType.isString(pobjKnowledgeLearnDetailEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点Id(courseKnowledgeId)]的值:[${pobjKnowledgeLearnDetailEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.idCase) == false && undefined !== pobjKnowledgeLearnDetailEN.idCase && tzDataType.isString(pobjKnowledgeLearnDetailEN.idCase) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例流水号(idCase)]的值:[${pobjKnowledgeLearnDetailEN.idCase}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.idCaseType) == false && undefined !== pobjKnowledgeLearnDetailEN.idCaseType && tzDataType.isString(pobjKnowledgeLearnDetailEN.idCaseType) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例类型流水号(idCaseType)]的值:[${pobjKnowledgeLearnDetailEN.idCaseType}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnDetailEN.isRight && undefined !== pobjKnowledgeLearnDetailEN.isRight && tzDataType.isBoolean(pobjKnowledgeLearnDetailEN.isRight) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否正确(isRight)]的值:[${pobjKnowledgeLearnDetailEN.isRight}], 非法,应该为布尔型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnDetailEN.isMaster && undefined !== pobjKnowledgeLearnDetailEN.isMaster && tzDataType.isBoolean(pobjKnowledgeLearnDetailEN.isMaster) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否掌握(isMaster)]的值:[${pobjKnowledgeLearnDetailEN.isMaster}], 非法,应该为布尔型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnDetailEN.masterDegree && undefined !== pobjKnowledgeLearnDetailEN.masterDegree && tzDataType.isNumber(pobjKnowledgeLearnDetailEN.masterDegree) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握程度(masterDegree)]的值:[${pobjKnowledgeLearnDetailEN.masterDegree}], 非法,应该为数值型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.markerId) == false && undefined !== pobjKnowledgeLearnDetailEN.markerId && tzDataType.isString(pobjKnowledgeLearnDetailEN.markerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[打分者(markerId)]的值:[${pobjKnowledgeLearnDetailEN.markerId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.markTime) == false && undefined !== pobjKnowledgeLearnDetailEN.markTime && tzDataType.isString(pobjKnowledgeLearnDetailEN.markTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[批改时间(markTime)]的值:[${pobjKnowledgeLearnDetailEN.markTime}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeLearnDetailEN.isAnalysis && undefined !== pobjKnowledgeLearnDetailEN.isAnalysis && tzDataType.isBoolean(pobjKnowledgeLearnDetailEN.isAnalysis) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否分析(isAnalysis)]的值:[${pobjKnowledgeLearnDetailEN.isAnalysis}], 非法,应该为布尔型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseId) == false && undefined !== pobjKnowledgeLearnDetailEN.courseId && tzDataType.isString(pobjKnowledgeLearnDetailEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjKnowledgeLearnDetailEN.courseId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updDate) == false && undefined !== pobjKnowledgeLearnDetailEN.updDate && tzDataType.isString(pobjKnowledgeLearnDetailEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjKnowledgeLearnDetailEN.updDate}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updUser) == false && undefined !== pobjKnowledgeLearnDetailEN.updUser && tzDataType.isString(pobjKnowledgeLearnDetailEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjKnowledgeLearnDetailEN.updUser}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.memo) == false && undefined !== pobjKnowledgeLearnDetailEN.memo && tzDataType.isString(pobjKnowledgeLearnDetailEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjKnowledgeLearnDetailEN.memo}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseKnowledgeId) == false && pobjKnowledgeLearnDetailEN.courseKnowledgeId != '[nuull]' && GetStrLen(pobjKnowledgeLearnDetailEN.courseKnowledgeId) !=  8)
{
 throw ("(errid:Watl000415)字段[知识点Id]作为外键字段,长度应该为8(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KnowledgeLearnDetail_CheckProperty4Update(pobjKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.userId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.userId}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnDate) == false && GetStrLen(pobjKnowledgeLearnDetailEN.learnDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[学习日期(learnDate)]的长度不能超过20(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.learnDate}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnModeId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.learnModeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学习模式Id(learnModeId)]的长度不能超过4(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.learnModeId}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseKnowledgeId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.courseKnowledgeId}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.idCase) == false && GetStrLen(pobjKnowledgeLearnDetailEN.idCase) > 8)
{
 throw new Error(`(errid:Watl000416)字段[案例流水号(idCase)]的长度不能超过8(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.idCase}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.idCaseType) == false && GetStrLen(pobjKnowledgeLearnDetailEN.idCaseType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[案例类型流水号(idCaseType)]的长度不能超过4(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.idCaseType}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.markerId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.markerId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[打分者(markerId)]的长度不能超过20(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.markerId}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.markTime) == false && GetStrLen(pobjKnowledgeLearnDetailEN.markTime) > 14)
{
 throw new Error(`(errid:Watl000416)字段[批改时间(markTime)]的长度不能超过14(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.markTime}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseId) == false && GetStrLen(pobjKnowledgeLearnDetailEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.courseId}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updDate) == false && GetStrLen(pobjKnowledgeLearnDetailEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.updDate}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updUser) == false && GetStrLen(pobjKnowledgeLearnDetailEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.updUser}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.memo) == false && GetStrLen(pobjKnowledgeLearnDetailEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点学习情况(KnowledgeLearnDetail))!值:${pobjKnowledgeLearnDetailEN.memo}(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjKnowledgeLearnDetailEN.mId && undefined !== pobjKnowledgeLearnDetailEN.mId && tzDataType.isNumber(pobjKnowledgeLearnDetailEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjKnowledgeLearnDetailEN.mId}], 非法,应该为数值型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.userId) == false && undefined !== pobjKnowledgeLearnDetailEN.userId && tzDataType.isString(pobjKnowledgeLearnDetailEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjKnowledgeLearnDetailEN.userId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnDate) == false && undefined !== pobjKnowledgeLearnDetailEN.learnDate && tzDataType.isString(pobjKnowledgeLearnDetailEN.learnDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[学习日期(learnDate)]的值:[${pobjKnowledgeLearnDetailEN.learnDate}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.learnModeId) == false && undefined !== pobjKnowledgeLearnDetailEN.learnModeId && tzDataType.isString(pobjKnowledgeLearnDetailEN.learnModeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学习模式Id(learnModeId)]的值:[${pobjKnowledgeLearnDetailEN.learnModeId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseKnowledgeId) == false && undefined !== pobjKnowledgeLearnDetailEN.courseKnowledgeId && tzDataType.isString(pobjKnowledgeLearnDetailEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点Id(courseKnowledgeId)]的值:[${pobjKnowledgeLearnDetailEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.idCase) == false && undefined !== pobjKnowledgeLearnDetailEN.idCase && tzDataType.isString(pobjKnowledgeLearnDetailEN.idCase) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例流水号(idCase)]的值:[${pobjKnowledgeLearnDetailEN.idCase}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.idCaseType) == false && undefined !== pobjKnowledgeLearnDetailEN.idCaseType && tzDataType.isString(pobjKnowledgeLearnDetailEN.idCaseType) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例类型流水号(idCaseType)]的值:[${pobjKnowledgeLearnDetailEN.idCaseType}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnDetailEN.isRight && undefined !== pobjKnowledgeLearnDetailEN.isRight && tzDataType.isBoolean(pobjKnowledgeLearnDetailEN.isRight) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否正确(isRight)]的值:[${pobjKnowledgeLearnDetailEN.isRight}], 非法,应该为布尔型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnDetailEN.isMaster && undefined !== pobjKnowledgeLearnDetailEN.isMaster && tzDataType.isBoolean(pobjKnowledgeLearnDetailEN.isMaster) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否掌握(isMaster)]的值:[${pobjKnowledgeLearnDetailEN.isMaster}], 非法,应该为布尔型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnDetailEN.masterDegree && undefined !== pobjKnowledgeLearnDetailEN.masterDegree && tzDataType.isNumber(pobjKnowledgeLearnDetailEN.masterDegree) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握程度(masterDegree)]的值:[${pobjKnowledgeLearnDetailEN.masterDegree}], 非法,应该为数值型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.markerId) == false && undefined !== pobjKnowledgeLearnDetailEN.markerId && tzDataType.isString(pobjKnowledgeLearnDetailEN.markerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[打分者(markerId)]的值:[${pobjKnowledgeLearnDetailEN.markerId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.markTime) == false && undefined !== pobjKnowledgeLearnDetailEN.markTime && tzDataType.isString(pobjKnowledgeLearnDetailEN.markTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[批改时间(markTime)]的值:[${pobjKnowledgeLearnDetailEN.markTime}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeLearnDetailEN.isAnalysis && undefined !== pobjKnowledgeLearnDetailEN.isAnalysis && tzDataType.isBoolean(pobjKnowledgeLearnDetailEN.isAnalysis) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否分析(isAnalysis)]的值:[${pobjKnowledgeLearnDetailEN.isAnalysis}], 非法,应该为布尔型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseId) == false && undefined !== pobjKnowledgeLearnDetailEN.courseId && tzDataType.isString(pobjKnowledgeLearnDetailEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjKnowledgeLearnDetailEN.courseId}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updDate) == false && undefined !== pobjKnowledgeLearnDetailEN.updDate && tzDataType.isString(pobjKnowledgeLearnDetailEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjKnowledgeLearnDetailEN.updDate}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.updUser) == false && undefined !== pobjKnowledgeLearnDetailEN.updUser && tzDataType.isString(pobjKnowledgeLearnDetailEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjKnowledgeLearnDetailEN.updUser}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.memo) == false && undefined !== pobjKnowledgeLearnDetailEN.memo && tzDataType.isString(pobjKnowledgeLearnDetailEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjKnowledgeLearnDetailEN.memo}], 非法,应该为字符型(In 知识点学习情况(KnowledgeLearnDetail))!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjKnowledgeLearnDetailEN.mId 
 || pobjKnowledgeLearnDetailEN.mId != null && pobjKnowledgeLearnDetailEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjKnowledgeLearnDetailEN.courseKnowledgeId) == false && pobjKnowledgeLearnDetailEN.courseKnowledgeId != '[nuull]' && GetStrLen(pobjKnowledgeLearnDetailEN.courseKnowledgeId) !=  8)
{
 throw ("(errid:Watl000418)字段[知识点Id]作为外键字段,长度应该为8(In 知识点学习情况)!(clsKnowledgeLearnDetailBL:CheckPropertyNew)");
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
export  function KnowledgeLearnDetail_GetJSONStrByObj (pobjKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN): string
{
pobjKnowledgeLearnDetailEN.sfUpdFldSetStr = pobjKnowledgeLearnDetailEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjKnowledgeLearnDetailEN);
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
export  function KnowledgeLearnDetail_GetObjLstByJSONStr (strJSON: string): Array<clsKnowledgeLearnDetailEN>
{
let arrKnowledgeLearnDetailObjLst = new Array<clsKnowledgeLearnDetailEN>();
if (strJSON === "")
{
return arrKnowledgeLearnDetailObjLst;
}
try
{
arrKnowledgeLearnDetailObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrKnowledgeLearnDetailObjLst;
}
return arrKnowledgeLearnDetailObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrKnowledgeLearnDetailObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function KnowledgeLearnDetail_GetObjLstByJSONObjLst (arrKnowledgeLearnDetailObjLstS: Array<clsKnowledgeLearnDetailEN>): Array<clsKnowledgeLearnDetailEN>
{
const arrKnowledgeLearnDetailObjLst = new Array<clsKnowledgeLearnDetailEN>();
for (const objInFor of arrKnowledgeLearnDetailObjLstS) {
const obj1 = KnowledgeLearnDetail_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrKnowledgeLearnDetailObjLst.push(obj1);
}
return arrKnowledgeLearnDetailObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function KnowledgeLearnDetail_GetObjByJSONStr (strJSON: string): clsKnowledgeLearnDetailEN
{
let pobjKnowledgeLearnDetailEN = new clsKnowledgeLearnDetailEN();
if (strJSON === "")
{
return pobjKnowledgeLearnDetailEN;
}
try
{
pobjKnowledgeLearnDetailEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjKnowledgeLearnDetailEN;
}
return pobjKnowledgeLearnDetailEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function KnowledgeLearnDetail_GetCombineCondition(objKnowledgeLearnDetailCond: clsKnowledgeLearnDetailEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_mId) == true)
{
const strComparisonOpmId:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsKnowledgeLearnDetailEN.con_mId, objKnowledgeLearnDetailCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_UserId, objKnowledgeLearnDetailCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_LearnDate) == true)
{
const strComparisonOpLearnDate:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_LearnDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_LearnDate, objKnowledgeLearnDetailCond.learnDate, strComparisonOpLearnDate);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_LearnModeId) == true)
{
const strComparisonOpLearnModeId:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_LearnModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_LearnModeId, objKnowledgeLearnDetailCond.learnModeId, strComparisonOpLearnModeId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_CourseKnowledgeId, objKnowledgeLearnDetailCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_IdCase) == true)
{
const strComparisonOpIdCase:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_IdCase];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_IdCase, objKnowledgeLearnDetailCond.idCase, strComparisonOpIdCase);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_IdCaseType) == true)
{
const strComparisonOpIdCaseType:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_IdCaseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_IdCaseType, objKnowledgeLearnDetailCond.idCaseType, strComparisonOpIdCaseType);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_IsRight) == true)
{
if (objKnowledgeLearnDetailCond.isRight == true)
{
strWhereCond += Format(" And {0} = '1'", clsKnowledgeLearnDetailEN.con_IsRight);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKnowledgeLearnDetailEN.con_IsRight);
}
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_IsMaster) == true)
{
if (objKnowledgeLearnDetailCond.isMaster == true)
{
strWhereCond += Format(" And {0} = '1'", clsKnowledgeLearnDetailEN.con_IsMaster);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKnowledgeLearnDetailEN.con_IsMaster);
}
}
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_MarkerId) == true)
{
const strComparisonOpMarkerId:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_MarkerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_MarkerId, objKnowledgeLearnDetailCond.markerId, strComparisonOpMarkerId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_MarkTime) == true)
{
const strComparisonOpMarkTime:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_MarkTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_MarkTime, objKnowledgeLearnDetailCond.markTime, strComparisonOpMarkTime);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_IsAnalysis) == true)
{
if (objKnowledgeLearnDetailCond.isAnalysis == true)
{
strWhereCond += Format(" And {0} = '1'", clsKnowledgeLearnDetailEN.con_IsAnalysis);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKnowledgeLearnDetailEN.con_IsAnalysis);
}
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_CourseId, objKnowledgeLearnDetailCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_UpdDate, objKnowledgeLearnDetailCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_UpdUser, objKnowledgeLearnDetailCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeLearnDetailCond.dicFldComparisonOp, clsKnowledgeLearnDetailEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objKnowledgeLearnDetailCond.dicFldComparisonOp[clsKnowledgeLearnDetailEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeLearnDetailEN.con_Memo, objKnowledgeLearnDetailCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KnowledgeLearnDetail(知识点学习情况),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strIdCase: 案例流水号(要求唯一的字段)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KnowledgeLearnDetail_GetUniCondStr(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserId = '{0}'", objKnowledgeLearnDetailEN.userId);
 strWhereCond +=  Format(" and IdCase = '{0}'", objKnowledgeLearnDetailEN.idCase);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objKnowledgeLearnDetailEN.courseKnowledgeId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KnowledgeLearnDetail(知识点学习情况),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strIdCase: 案例流水号(要求唯一的字段)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KnowledgeLearnDetail_GetUniCondStr4Update(objKnowledgeLearnDetailEN: clsKnowledgeLearnDetailEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objKnowledgeLearnDetailEN.mId);
 strWhereCond +=  Format(" and UserId = '{0}'", objKnowledgeLearnDetailEN.userId);
 strWhereCond +=  Format(" and IdCase = '{0}'", objKnowledgeLearnDetailEN.idCase);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objKnowledgeLearnDetailEN.courseKnowledgeId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objKnowledgeLearnDetailENS:源对象
 * @param objKnowledgeLearnDetailENT:目标对象
*/
export  function KnowledgeLearnDetail_CopyObjTo(objKnowledgeLearnDetailENS: clsKnowledgeLearnDetailEN , objKnowledgeLearnDetailENT: clsKnowledgeLearnDetailEN ): void 
{
objKnowledgeLearnDetailENT.mId = objKnowledgeLearnDetailENS.mId; //mId
objKnowledgeLearnDetailENT.userId = objKnowledgeLearnDetailENS.userId; //用户ID
objKnowledgeLearnDetailENT.learnDate = objKnowledgeLearnDetailENS.learnDate; //学习日期
objKnowledgeLearnDetailENT.learnModeId = objKnowledgeLearnDetailENS.learnModeId; //学习模式Id
objKnowledgeLearnDetailENT.courseKnowledgeId = objKnowledgeLearnDetailENS.courseKnowledgeId; //知识点Id
objKnowledgeLearnDetailENT.idCase = objKnowledgeLearnDetailENS.idCase; //案例流水号
objKnowledgeLearnDetailENT.idCaseType = objKnowledgeLearnDetailENS.idCaseType; //案例类型流水号
objKnowledgeLearnDetailENT.isRight = objKnowledgeLearnDetailENS.isRight; //是否正确
objKnowledgeLearnDetailENT.isMaster = objKnowledgeLearnDetailENS.isMaster; //是否掌握
objKnowledgeLearnDetailENT.masterDegree = objKnowledgeLearnDetailENS.masterDegree; //掌握程度
objKnowledgeLearnDetailENT.markerId = objKnowledgeLearnDetailENS.markerId; //打分者
objKnowledgeLearnDetailENT.markTime = objKnowledgeLearnDetailENS.markTime; //批改时间
objKnowledgeLearnDetailENT.isAnalysis = objKnowledgeLearnDetailENS.isAnalysis; //是否分析
objKnowledgeLearnDetailENT.courseId = objKnowledgeLearnDetailENS.courseId; //课程Id
objKnowledgeLearnDetailENT.updDate = objKnowledgeLearnDetailENS.updDate; //修改日期
objKnowledgeLearnDetailENT.updUser = objKnowledgeLearnDetailENS.updUser; //修改人
objKnowledgeLearnDetailENT.memo = objKnowledgeLearnDetailENS.memo; //备注
objKnowledgeLearnDetailENT.sfUpdFldSetStr = objKnowledgeLearnDetailENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objKnowledgeLearnDetailENS:源对象
 * @param objKnowledgeLearnDetailENT:目标对象
*/
export  function KnowledgeLearnDetail_GetObjFromJsonObj(objKnowledgeLearnDetailENS: clsKnowledgeLearnDetailEN): clsKnowledgeLearnDetailEN 
{
 const objKnowledgeLearnDetailENT: clsKnowledgeLearnDetailEN = new clsKnowledgeLearnDetailEN();
ObjectAssign(objKnowledgeLearnDetailENT, objKnowledgeLearnDetailENS);
 return objKnowledgeLearnDetailENT;
}