
 /**
 * 类名:clsBigConceptWApi
 * 表名:BigConcept(01120972)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:24:57
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:大概念教学(BigConceptTeaching)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 大概念(BigConcept)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsBigConceptEN } from "@/ts/L0Entity/BigConceptTeaching/clsBigConceptEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const bigConcept_Controller = "BigConceptApi";
 export const bigConcept_ConstructorName = "bigConcept";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdBigConcept:关键字
 * @returns 对象
 **/
export  async function BigConcept_GetObjByIdBigConceptAsync(strIdBigConcept: string): Promise<clsBigConceptEN|null>  
{
const strThisFuncName = "GetObjByIdBigConceptAsync";

if (IsNullOrEmpty(strIdBigConcept) == true)
{
  const strMsg = Format("参数:[strIdBigConcept]不能为空!(In clsBigConceptWApi.GetObjByIdBigConceptAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdBigConcept.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdBigConcept]的长度:[{0}]不正确!(clsBigConceptWApi.GetObjByIdBigConceptAsync)", strIdBigConcept.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdBigConcept";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdBigConcept,
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
const objBigConcept = BigConcept_GetObjFromJsonObj(returnObj);
return objBigConcept;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdBigConceptlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdBigConceptCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function BigConcept_SortFunDefa(a:clsBigConceptEN , b:clsBigConceptEN): number 
{
return a.idBigConcept.localeCompare(b.idBigConcept);
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
export  function BigConcept_SortFunDefa2Fld(a:clsBigConceptEN , b:clsBigConceptEN): number 
{
if (a.bigConceptId == b.bigConceptId) return a.bigConceptName.localeCompare(b.bigConceptName);
else return a.bigConceptId.localeCompare(b.bigConceptId);
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
export  function BigConcept_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsBigConceptEN.con_IdBigConcept:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return a.idBigConcept.localeCompare(b.idBigConcept);
}
case clsBigConceptEN.con_BigConceptId:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return a.bigConceptId.localeCompare(b.bigConceptId);
}
case clsBigConceptEN.con_BigConceptName:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return a.bigConceptName.localeCompare(b.bigConceptName);
}
case clsBigConceptEN.con_IdGrade:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return a.idGrade.localeCompare(b.idGrade);
}
case clsBigConceptEN.con_SchoolTerm:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsBigConceptEN.con_CourseId:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsBigConceptEN.con_IsClgCheck:
return (a: clsBigConceptEN) => {
if (a.isClgCheck == true) return 1;
else return -1
}
case clsBigConceptEN.con_ClgNote:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (a.clgNote == null) return -1;
if (b.clgNote == null) return 1;
return a.clgNote.localeCompare(b.clgNote);
}
case clsBigConceptEN.con_ClgCheckerId:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (a.clgCheckerId == null) return -1;
if (b.clgCheckerId == null) return 1;
return a.clgCheckerId.localeCompare(b.clgCheckerId);
}
case clsBigConceptEN.con_ClgCheckDate:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (a.clgCheckDate == null) return -1;
if (b.clgCheckDate == null) return 1;
return a.clgCheckDate.localeCompare(b.clgCheckDate);
}
case clsBigConceptEN.con_IsSchCheck:
return (a: clsBigConceptEN) => {
if (a.isSchCheck == true) return 1;
else return -1
}
case clsBigConceptEN.con_SchNote:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (a.schNote == null) return -1;
if (b.schNote == null) return 1;
return a.schNote.localeCompare(b.schNote);
}
case clsBigConceptEN.con_SchCheckerId:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (a.schCheckerId == null) return -1;
if (b.schCheckerId == null) return 1;
return a.schCheckerId.localeCompare(b.schCheckerId);
}
case clsBigConceptEN.con_SchCheckDate:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (a.schCheckDate == null) return -1;
if (b.schCheckDate == null) return 1;
return a.schCheckDate.localeCompare(b.schCheckDate);
}
case clsBigConceptEN.con_IdSubmitStatus:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return a.idSubmitStatus.localeCompare(b.idSubmitStatus);
}
case clsBigConceptEN.con_Memo:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BigConcept]中不存在!(in ${ bigConcept_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsBigConceptEN.con_IdBigConcept:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return b.idBigConcept.localeCompare(a.idBigConcept);
}
case clsBigConceptEN.con_BigConceptId:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return b.bigConceptId.localeCompare(a.bigConceptId);
}
case clsBigConceptEN.con_BigConceptName:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return b.bigConceptName.localeCompare(a.bigConceptName);
}
case clsBigConceptEN.con_IdGrade:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return b.idGrade.localeCompare(a.idGrade);
}
case clsBigConceptEN.con_SchoolTerm:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsBigConceptEN.con_CourseId:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsBigConceptEN.con_IsClgCheck:
return (b: clsBigConceptEN) => {
if (b.isClgCheck == true) return 1;
else return -1
}
case clsBigConceptEN.con_ClgNote:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (b.clgNote == null) return -1;
if (a.clgNote == null) return 1;
return b.clgNote.localeCompare(a.clgNote);
}
case clsBigConceptEN.con_ClgCheckerId:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (b.clgCheckerId == null) return -1;
if (a.clgCheckerId == null) return 1;
return b.clgCheckerId.localeCompare(a.clgCheckerId);
}
case clsBigConceptEN.con_ClgCheckDate:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (b.clgCheckDate == null) return -1;
if (a.clgCheckDate == null) return 1;
return b.clgCheckDate.localeCompare(a.clgCheckDate);
}
case clsBigConceptEN.con_IsSchCheck:
return (b: clsBigConceptEN) => {
if (b.isSchCheck == true) return 1;
else return -1
}
case clsBigConceptEN.con_SchNote:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (b.schNote == null) return -1;
if (a.schNote == null) return 1;
return b.schNote.localeCompare(a.schNote);
}
case clsBigConceptEN.con_SchCheckerId:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (b.schCheckerId == null) return -1;
if (a.schCheckerId == null) return 1;
return b.schCheckerId.localeCompare(a.schCheckerId);
}
case clsBigConceptEN.con_SchCheckDate:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (b.schCheckDate == null) return -1;
if (a.schCheckDate == null) return 1;
return b.schCheckDate.localeCompare(a.schCheckDate);
}
case clsBigConceptEN.con_IdSubmitStatus:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
return b.idSubmitStatus.localeCompare(a.idSubmitStatus);
}
case clsBigConceptEN.con_Memo:
return (a: clsBigConceptEN, b: clsBigConceptEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BigConcept]中不存在!(in ${ bigConcept_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdBigConceptCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function BigConcept_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsBigConceptEN.con_IdBigConcept:
return (obj: clsBigConceptEN) => {
return obj.idBigConcept === value;
}
case clsBigConceptEN.con_BigConceptId:
return (obj: clsBigConceptEN) => {
return obj.bigConceptId === value;
}
case clsBigConceptEN.con_BigConceptName:
return (obj: clsBigConceptEN) => {
return obj.bigConceptName === value;
}
case clsBigConceptEN.con_IdGrade:
return (obj: clsBigConceptEN) => {
return obj.idGrade === value;
}
case clsBigConceptEN.con_SchoolTerm:
return (obj: clsBigConceptEN) => {
return obj.schoolTerm === value;
}
case clsBigConceptEN.con_CourseId:
return (obj: clsBigConceptEN) => {
return obj.courseId === value;
}
case clsBigConceptEN.con_IsClgCheck:
return (obj: clsBigConceptEN) => {
return obj.isClgCheck === value;
}
case clsBigConceptEN.con_ClgNote:
return (obj: clsBigConceptEN) => {
return obj.clgNote === value;
}
case clsBigConceptEN.con_ClgCheckerId:
return (obj: clsBigConceptEN) => {
return obj.clgCheckerId === value;
}
case clsBigConceptEN.con_ClgCheckDate:
return (obj: clsBigConceptEN) => {
return obj.clgCheckDate === value;
}
case clsBigConceptEN.con_IsSchCheck:
return (obj: clsBigConceptEN) => {
return obj.isSchCheck === value;
}
case clsBigConceptEN.con_SchNote:
return (obj: clsBigConceptEN) => {
return obj.schNote === value;
}
case clsBigConceptEN.con_SchCheckerId:
return (obj: clsBigConceptEN) => {
return obj.schCheckerId === value;
}
case clsBigConceptEN.con_SchCheckDate:
return (obj: clsBigConceptEN) => {
return obj.schCheckDate === value;
}
case clsBigConceptEN.con_IdSubmitStatus:
return (obj: clsBigConceptEN) => {
return obj.idSubmitStatus === value;
}
case clsBigConceptEN.con_Memo:
return (obj: clsBigConceptEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[BigConcept]中不存在!(in ${ bigConcept_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[BigConcept__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BigConcept_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetFirstObjAsync(strWhereCond: string): Promise<clsBigConceptEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const objBigConcept = BigConcept_GetObjFromJsonObj(returnObj);
return objBigConcept;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetObjLstAsync(strWhereCond: string): Promise<Array<clsBigConceptEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bigConcept_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BigConcept_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param arrIdBigConcept:关键字列表
 * @returns 对象列表
 **/
export  async function BigConcept_GetObjLstByIdBigConceptLstAsync(arrIdBigConcept: Array<string>): Promise<Array<clsBigConceptEN>>  
{
const strThisFuncName = "GetObjLstByIdBigConceptLstAsync";
const strAction = "GetObjLstByIdBigConceptLst";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdBigConcept, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bigConcept_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BigConcept_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdBigConceptLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function BigConcept_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsBigConceptEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bigConcept_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BigConcept_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsBigConceptEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bigConcept_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BigConcept_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsBigConceptEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsBigConceptEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", bigConcept_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = BigConcept_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param strIdBigConcept:关键字
 * @returns 获取删除的结果
 **/
export  async function BigConcept_DelRecordAsync(strIdBigConcept: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(bigConcept_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdBigConcept);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param arrIdBigConcept:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function BigConcept_DelBigConceptsAsync(arrIdBigConcept: Array<string>): Promise<number> 
{
const strThisFuncName = "DelBigConceptsAsync";
const strAction = "DelBigConcepts";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdBigConcept, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_DelBigConceptsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelBigConceptsByCondAsync";
const strAction = "DelBigConceptsByCond";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param objBigConceptEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BigConcept_AddNewRecordAsync(objBigConceptEN: clsBigConceptEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objBigConceptEN);
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBigConceptEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param objBigConceptEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function BigConcept_AddNewRecordWithMaxIdAsync(objBigConceptEN: clsBigConceptEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBigConceptEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_AddNewObjSave(objBigConceptEN: clsBigConceptEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
BigConcept_CheckPropertyNew(objBigConceptEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ bigConcept_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await BigConcept_CheckUniCond4Add(objBigConceptEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await BigConcept_AddNewRecordWithMaxIdAsync(objBigConceptEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//BigConcept_ReFreshCache();
}
else
{
const strInfo = `添加[大概念(BigConcept)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ bigConcept_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function BigConcept_CheckUniCond4Add(objBigConceptEN: clsBigConceptEN): Promise<boolean>{
const strUniquenessCondition = BigConcept_GetUniCondStr(objBigConceptEN);
const bolIsExistCondition = await BigConcept_IsExistRecordAsync(strUniquenessCondition);
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
export  async function BigConcept_CheckUniCond4Update(objBigConceptEN: clsBigConceptEN): Promise<boolean>{
const strUniquenessCondition = BigConcept_GetUniCondStr4Update(objBigConceptEN);
const bolIsExistCondition = await BigConcept_IsExistRecordAsync(strUniquenessCondition);
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
export  async function BigConcept_UpdateObjSave(objBigConceptEN: clsBigConceptEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objBigConceptEN.sfUpdFldSetStr = objBigConceptEN.updFldString;//设置哪些字段被修改(脏字段)
if (objBigConceptEN.idBigConcept == "" || objBigConceptEN.idBigConcept == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
BigConcept_CheckProperty4Update(objBigConceptEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ bigConcept_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await BigConcept_CheckUniCond4Update(objBigConceptEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await BigConcept_UpdateRecordAsync(objBigConceptEN);
if (returnBool == true)
{
//BigConcept_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ bigConcept_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objBigConceptEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function BigConcept_AddNewRecordWithReturnKeyAsync(objBigConceptEN: clsBigConceptEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBigConceptEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param objBigConceptEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BigConcept_UpdateRecordAsync(objBigConceptEN: clsBigConceptEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objBigConceptEN.sfUpdFldSetStr === undefined || objBigConceptEN.sfUpdFldSetStr === null || objBigConceptEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBigConceptEN.idBigConcept);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBigConceptEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param objBigConceptEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function BigConcept_EditRecordExAsync(objBigConceptEN: clsBigConceptEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objBigConceptEN.sfUpdFldSetStr === undefined || objBigConceptEN.sfUpdFldSetStr === null || objBigConceptEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBigConceptEN.idBigConcept);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBigConceptEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param objBigConceptEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function BigConcept_UpdateWithConditionAsync(objBigConceptEN: clsBigConceptEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objBigConceptEN.sfUpdFldSetStr === undefined || objBigConceptEN.sfUpdFldSetStr === null || objBigConceptEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objBigConceptEN.idBigConcept);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);
objBigConceptEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objBigConceptEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
 * @param strIdBigConcept:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function BigConcept_IsExistAsync(strIdBigConcept: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdBigConcept
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  async function BigConcept_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(bigConcept_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, bigConcept_ConstructorName, strThisFuncName);
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
export  function BigConcept_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function BigConcept_BindDdl_IdBigConceptByCourseIdInDiv(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsBigConceptWApi.BindDdl_IdBigConceptByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsBigConceptWApi.BindDdl_IdBigConceptByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdBigConceptByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdBigConceptByCourseIdInDivCache");
const strCondition = `courseId = '${ strCourseId }'`;
const arrObjLstSel = await BigConcept_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsBigConceptEN.con_IdBigConcept, clsBigConceptEN.con_BigConceptName, "大概念...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function BigConcept_GetArrBigConceptByCourseId(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsBigConceptWApi.BindDdl_IdBigConceptByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsBigConceptWApi.BindDdl_IdBigConceptByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdBigConceptByCourseIdInDivCache");
const arrBigConcept = new Array<clsBigConceptEN>();
const strCondition = `courseId = '${ strCourseId }'`;
const arrObjLstSel = await BigConcept_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsBigConceptEN();
obj0.idBigConcept = '0';
obj0.bigConceptName = '选大概念...';
arrBigConcept.push(obj0);
arrObjLstSel.forEach(x => arrBigConcept.push(x));
return arrBigConcept;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BigConcept_CheckPropertyNew(pobjBigConceptEN: clsBigConceptEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptId) === true )
{
 throw new Error(`(errid:Watl000411)字段[大概念编号]不能为空(In 大概念)!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptName) === true )
{
 throw new Error(`(errid:Watl000411)字段[大概念名称]不能为空(In 大概念)!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idGrade) === true 
 || pobjBigConceptEN.idGrade.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[年级流水号]不能为空(In 大概念)!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schoolTerm) === true 
 || pobjBigConceptEN.schoolTerm.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学期]不能为空(In 大概念)!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.courseId) === true 
 || pobjBigConceptEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 大概念)!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idSubmitStatus) === true )
{
 throw new Error(`(errid:Watl000411)字段[送审状态流水号]不能为空(In 大概念)!(clsBigConceptBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBigConceptEN.idBigConcept) == false && GetStrLen(pobjBigConceptEN.idBigConcept) > 8)
{
 throw new Error(`(errid:Watl000413)字段[大概念流水号(idBigConcept)]的长度不能超过8(In 大概念(BigConcept))!值:${pobjBigConceptEN.idBigConcept}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptId) == false && GetStrLen(pobjBigConceptEN.bigConceptId) > 12)
{
 throw new Error(`(errid:Watl000413)字段[大概念编号(bigConceptId)]的长度不能超过12(In 大概念(BigConcept))!值:${pobjBigConceptEN.bigConceptId}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptName) == false && GetStrLen(pobjBigConceptEN.bigConceptName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[大概念名称(bigConceptName)]的长度不能超过100(In 大概念(BigConcept))!值:${pobjBigConceptEN.bigConceptName}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idGrade) == false && GetStrLen(pobjBigConceptEN.idGrade) > 2)
{
 throw new Error(`(errid:Watl000413)字段[年级流水号(idGrade)]的长度不能超过2(In 大概念(BigConcept))!值:${pobjBigConceptEN.idGrade}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schoolTerm) == false && GetStrLen(pobjBigConceptEN.schoolTerm) > 1)
{
 throw new Error(`(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 大概念(BigConcept))!值:${pobjBigConceptEN.schoolTerm}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.courseId) == false && GetStrLen(pobjBigConceptEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 大概念(BigConcept))!值:${pobjBigConceptEN.courseId}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgCheckerId) == false && GetStrLen(pobjBigConceptEN.clgCheckerId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[学院审批人id(clgCheckerId)]的长度不能超过18(In 大概念(BigConcept))!值:${pobjBigConceptEN.clgCheckerId}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgCheckDate) == false && GetStrLen(pobjBigConceptEN.clgCheckDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学院审批日期(clgCheckDate)]的长度不能超过8(In 大概念(BigConcept))!值:${pobjBigConceptEN.clgCheckDate}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schCheckerId) == false && GetStrLen(pobjBigConceptEN.schCheckerId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[学校审批人Id(schCheckerId)]的长度不能超过18(In 大概念(BigConcept))!值:${pobjBigConceptEN.schCheckerId}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schCheckDate) == false && GetStrLen(pobjBigConceptEN.schCheckDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学校审批日期(schCheckDate)]的长度不能超过8(In 大概念(BigConcept))!值:${pobjBigConceptEN.schCheckDate}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idSubmitStatus) == false && GetStrLen(pobjBigConceptEN.idSubmitStatus) > 2)
{
 throw new Error(`(errid:Watl000413)字段[送审状态流水号(idSubmitStatus)]的长度不能超过2(In 大概念(BigConcept))!值:${pobjBigConceptEN.idSubmitStatus}(clsBigConceptBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.memo) == false && GetStrLen(pobjBigConceptEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 大概念(BigConcept))!值:${pobjBigConceptEN.memo}(clsBigConceptBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBigConceptEN.idBigConcept) == false && undefined !== pobjBigConceptEN.idBigConcept && tzDataType.isString(pobjBigConceptEN.idBigConcept) === false)
{
 throw new Error(`(errid:Watl000414)字段[大概念流水号(idBigConcept)]的值:[${pobjBigConceptEN.idBigConcept}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptId) == false && undefined !== pobjBigConceptEN.bigConceptId && tzDataType.isString(pobjBigConceptEN.bigConceptId) === false)
{
 throw new Error(`(errid:Watl000414)字段[大概念编号(bigConceptId)]的值:[${pobjBigConceptEN.bigConceptId}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptName) == false && undefined !== pobjBigConceptEN.bigConceptName && tzDataType.isString(pobjBigConceptEN.bigConceptName) === false)
{
 throw new Error(`(errid:Watl000414)字段[大概念名称(bigConceptName)]的值:[${pobjBigConceptEN.bigConceptName}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idGrade) == false && undefined !== pobjBigConceptEN.idGrade && tzDataType.isString(pobjBigConceptEN.idGrade) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级流水号(idGrade)]的值:[${pobjBigConceptEN.idGrade}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schoolTerm) == false && undefined !== pobjBigConceptEN.schoolTerm && tzDataType.isString(pobjBigConceptEN.schoolTerm) === false)
{
 throw new Error(`(errid:Watl000414)字段[学期(schoolTerm)]的值:[${pobjBigConceptEN.schoolTerm}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.courseId) == false && undefined !== pobjBigConceptEN.courseId && tzDataType.isString(pobjBigConceptEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjBigConceptEN.courseId}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (null != pobjBigConceptEN.isClgCheck && undefined !== pobjBigConceptEN.isClgCheck && tzDataType.isBoolean(pobjBigConceptEN.isClgCheck) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否学院审批(isClgCheck)]的值:[${pobjBigConceptEN.isClgCheck}], 非法,应该为布尔型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgNote) == false && undefined !== pobjBigConceptEN.clgNote && tzDataType.isString(pobjBigConceptEN.clgNote) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院审批意见(clgNote)]的值:[${pobjBigConceptEN.clgNote}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgCheckerId) == false && undefined !== pobjBigConceptEN.clgCheckerId && tzDataType.isString(pobjBigConceptEN.clgCheckerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院审批人id(clgCheckerId)]的值:[${pobjBigConceptEN.clgCheckerId}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgCheckDate) == false && undefined !== pobjBigConceptEN.clgCheckDate && tzDataType.isString(pobjBigConceptEN.clgCheckDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院审批日期(clgCheckDate)]的值:[${pobjBigConceptEN.clgCheckDate}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (null != pobjBigConceptEN.isSchCheck && undefined !== pobjBigConceptEN.isSchCheck && tzDataType.isBoolean(pobjBigConceptEN.isSchCheck) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否学校审批(isSchCheck)]的值:[${pobjBigConceptEN.isSchCheck}], 非法,应该为布尔型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schNote) == false && undefined !== pobjBigConceptEN.schNote && tzDataType.isString(pobjBigConceptEN.schNote) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校审批意见(schNote)]的值:[${pobjBigConceptEN.schNote}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schCheckerId) == false && undefined !== pobjBigConceptEN.schCheckerId && tzDataType.isString(pobjBigConceptEN.schCheckerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校审批人Id(schCheckerId)]的值:[${pobjBigConceptEN.schCheckerId}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schCheckDate) == false && undefined !== pobjBigConceptEN.schCheckDate && tzDataType.isString(pobjBigConceptEN.schCheckDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校审批日期(schCheckDate)]的值:[${pobjBigConceptEN.schCheckDate}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idSubmitStatus) == false && undefined !== pobjBigConceptEN.idSubmitStatus && tzDataType.isString(pobjBigConceptEN.idSubmitStatus) === false)
{
 throw new Error(`(errid:Watl000414)字段[送审状态流水号(idSubmitStatus)]的值:[${pobjBigConceptEN.idSubmitStatus}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.memo) == false && undefined !== pobjBigConceptEN.memo && tzDataType.isString(pobjBigConceptEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjBigConceptEN.memo}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjBigConceptEN.idSubmitStatus) == false && pobjBigConceptEN.idSubmitStatus != '[nuull]' && GetStrLen(pobjBigConceptEN.idSubmitStatus) !=  2)
{
 throw ("(errid:Watl000415)字段[送审状态流水号]作为外键字段,长度应该为2(In 大概念)!(clsBigConceptBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function BigConcept_CheckProperty4Update(pobjBigConceptEN: clsBigConceptEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjBigConceptEN.idBigConcept) == false && GetStrLen(pobjBigConceptEN.idBigConcept) > 8)
{
 throw new Error(`(errid:Watl000416)字段[大概念流水号(idBigConcept)]的长度不能超过8(In 大概念(BigConcept))!值:${pobjBigConceptEN.idBigConcept}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptId) == false && GetStrLen(pobjBigConceptEN.bigConceptId) > 12)
{
 throw new Error(`(errid:Watl000416)字段[大概念编号(bigConceptId)]的长度不能超过12(In 大概念(BigConcept))!值:${pobjBigConceptEN.bigConceptId}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptName) == false && GetStrLen(pobjBigConceptEN.bigConceptName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[大概念名称(bigConceptName)]的长度不能超过100(In 大概念(BigConcept))!值:${pobjBigConceptEN.bigConceptName}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idGrade) == false && GetStrLen(pobjBigConceptEN.idGrade) > 2)
{
 throw new Error(`(errid:Watl000416)字段[年级流水号(idGrade)]的长度不能超过2(In 大概念(BigConcept))!值:${pobjBigConceptEN.idGrade}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schoolTerm) == false && GetStrLen(pobjBigConceptEN.schoolTerm) > 1)
{
 throw new Error(`(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 大概念(BigConcept))!值:${pobjBigConceptEN.schoolTerm}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.courseId) == false && GetStrLen(pobjBigConceptEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 大概念(BigConcept))!值:${pobjBigConceptEN.courseId}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgCheckerId) == false && GetStrLen(pobjBigConceptEN.clgCheckerId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[学院审批人id(clgCheckerId)]的长度不能超过18(In 大概念(BigConcept))!值:${pobjBigConceptEN.clgCheckerId}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgCheckDate) == false && GetStrLen(pobjBigConceptEN.clgCheckDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学院审批日期(clgCheckDate)]的长度不能超过8(In 大概念(BigConcept))!值:${pobjBigConceptEN.clgCheckDate}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schCheckerId) == false && GetStrLen(pobjBigConceptEN.schCheckerId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[学校审批人Id(schCheckerId)]的长度不能超过18(In 大概念(BigConcept))!值:${pobjBigConceptEN.schCheckerId}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schCheckDate) == false && GetStrLen(pobjBigConceptEN.schCheckDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学校审批日期(schCheckDate)]的长度不能超过8(In 大概念(BigConcept))!值:${pobjBigConceptEN.schCheckDate}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idSubmitStatus) == false && GetStrLen(pobjBigConceptEN.idSubmitStatus) > 2)
{
 throw new Error(`(errid:Watl000416)字段[送审状态流水号(idSubmitStatus)]的长度不能超过2(In 大概念(BigConcept))!值:${pobjBigConceptEN.idSubmitStatus}(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.memo) == false && GetStrLen(pobjBigConceptEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 大概念(BigConcept))!值:${pobjBigConceptEN.memo}(clsBigConceptBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjBigConceptEN.idBigConcept) == false && undefined !== pobjBigConceptEN.idBigConcept && tzDataType.isString(pobjBigConceptEN.idBigConcept) === false)
{
 throw new Error(`(errid:Watl000417)字段[大概念流水号(idBigConcept)]的值:[${pobjBigConceptEN.idBigConcept}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptId) == false && undefined !== pobjBigConceptEN.bigConceptId && tzDataType.isString(pobjBigConceptEN.bigConceptId) === false)
{
 throw new Error(`(errid:Watl000417)字段[大概念编号(bigConceptId)]的值:[${pobjBigConceptEN.bigConceptId}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.bigConceptName) == false && undefined !== pobjBigConceptEN.bigConceptName && tzDataType.isString(pobjBigConceptEN.bigConceptName) === false)
{
 throw new Error(`(errid:Watl000417)字段[大概念名称(bigConceptName)]的值:[${pobjBigConceptEN.bigConceptName}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idGrade) == false && undefined !== pobjBigConceptEN.idGrade && tzDataType.isString(pobjBigConceptEN.idGrade) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级流水号(idGrade)]的值:[${pobjBigConceptEN.idGrade}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schoolTerm) == false && undefined !== pobjBigConceptEN.schoolTerm && tzDataType.isString(pobjBigConceptEN.schoolTerm) === false)
{
 throw new Error(`(errid:Watl000417)字段[学期(schoolTerm)]的值:[${pobjBigConceptEN.schoolTerm}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.courseId) == false && undefined !== pobjBigConceptEN.courseId && tzDataType.isString(pobjBigConceptEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjBigConceptEN.courseId}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (null != pobjBigConceptEN.isClgCheck && undefined !== pobjBigConceptEN.isClgCheck && tzDataType.isBoolean(pobjBigConceptEN.isClgCheck) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否学院审批(isClgCheck)]的值:[${pobjBigConceptEN.isClgCheck}], 非法,应该为布尔型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgNote) == false && undefined !== pobjBigConceptEN.clgNote && tzDataType.isString(pobjBigConceptEN.clgNote) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院审批意见(clgNote)]的值:[${pobjBigConceptEN.clgNote}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgCheckerId) == false && undefined !== pobjBigConceptEN.clgCheckerId && tzDataType.isString(pobjBigConceptEN.clgCheckerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院审批人id(clgCheckerId)]的值:[${pobjBigConceptEN.clgCheckerId}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.clgCheckDate) == false && undefined !== pobjBigConceptEN.clgCheckDate && tzDataType.isString(pobjBigConceptEN.clgCheckDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院审批日期(clgCheckDate)]的值:[${pobjBigConceptEN.clgCheckDate}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (null != pobjBigConceptEN.isSchCheck && undefined !== pobjBigConceptEN.isSchCheck && tzDataType.isBoolean(pobjBigConceptEN.isSchCheck) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否学校审批(isSchCheck)]的值:[${pobjBigConceptEN.isSchCheck}], 非法,应该为布尔型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schNote) == false && undefined !== pobjBigConceptEN.schNote && tzDataType.isString(pobjBigConceptEN.schNote) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校审批意见(schNote)]的值:[${pobjBigConceptEN.schNote}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schCheckerId) == false && undefined !== pobjBigConceptEN.schCheckerId && tzDataType.isString(pobjBigConceptEN.schCheckerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校审批人Id(schCheckerId)]的值:[${pobjBigConceptEN.schCheckerId}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.schCheckDate) == false && undefined !== pobjBigConceptEN.schCheckDate && tzDataType.isString(pobjBigConceptEN.schCheckDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校审批日期(schCheckDate)]的值:[${pobjBigConceptEN.schCheckDate}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.idSubmitStatus) == false && undefined !== pobjBigConceptEN.idSubmitStatus && tzDataType.isString(pobjBigConceptEN.idSubmitStatus) === false)
{
 throw new Error(`(errid:Watl000417)字段[送审状态流水号(idSubmitStatus)]的值:[${pobjBigConceptEN.idSubmitStatus}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjBigConceptEN.memo) == false && undefined !== pobjBigConceptEN.memo && tzDataType.isString(pobjBigConceptEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjBigConceptEN.memo}], 非法,应该为字符型(In 大概念(BigConcept))!(clsBigConceptBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjBigConceptEN.idSubmitStatus) == false && pobjBigConceptEN.idSubmitStatus != '[nuull]' && GetStrLen(pobjBigConceptEN.idSubmitStatus) !=  2)
{
 throw ("(errid:Watl000418)字段[送审状态流水号]作为外键字段,长度应该为2(In 大概念)!(clsBigConceptBL:CheckPropertyNew)");
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
export  function BigConcept_GetJSONStrByObj (pobjBigConceptEN: clsBigConceptEN): string
{
pobjBigConceptEN.sfUpdFldSetStr = pobjBigConceptEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjBigConceptEN);
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
export  function BigConcept_GetObjLstByJSONStr (strJSON: string): Array<clsBigConceptEN>
{
let arrBigConceptObjLst = new Array<clsBigConceptEN>();
if (strJSON === "")
{
return arrBigConceptObjLst;
}
try
{
arrBigConceptObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrBigConceptObjLst;
}
return arrBigConceptObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrBigConceptObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function BigConcept_GetObjLstByJSONObjLst (arrBigConceptObjLstS: Array<clsBigConceptEN>): Array<clsBigConceptEN>
{
const arrBigConceptObjLst = new Array<clsBigConceptEN>();
for (const objInFor of arrBigConceptObjLstS) {
const obj1 = BigConcept_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrBigConceptObjLst.push(obj1);
}
return arrBigConceptObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function BigConcept_GetObjByJSONStr (strJSON: string): clsBigConceptEN
{
let pobjBigConceptEN = new clsBigConceptEN();
if (strJSON === "")
{
return pobjBigConceptEN;
}
try
{
pobjBigConceptEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjBigConceptEN;
}
return pobjBigConceptEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function BigConcept_GetCombineCondition(objBigConceptCond: clsBigConceptEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_IdBigConcept) == true)
{
const strComparisonOpIdBigConcept:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_IdBigConcept];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_IdBigConcept, objBigConceptCond.idBigConcept, strComparisonOpIdBigConcept);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_BigConceptId) == true)
{
const strComparisonOpBigConceptId:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_BigConceptId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_BigConceptId, objBigConceptCond.bigConceptId, strComparisonOpBigConceptId);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_BigConceptName) == true)
{
const strComparisonOpBigConceptName:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_BigConceptName];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_BigConceptName, objBigConceptCond.bigConceptName, strComparisonOpBigConceptName);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_IdGrade) == true)
{
const strComparisonOpIdGrade:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_IdGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_IdGrade, objBigConceptCond.idGrade, strComparisonOpIdGrade);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_SchoolTerm, objBigConceptCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_CourseId, objBigConceptCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_IsClgCheck) == true)
{
if (objBigConceptCond.isClgCheck == true)
{
strWhereCond += Format(" And {0} = '1'", clsBigConceptEN.con_IsClgCheck);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsBigConceptEN.con_IsClgCheck);
}
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_ClgCheckerId) == true)
{
const strComparisonOpClgCheckerId:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_ClgCheckerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_ClgCheckerId, objBigConceptCond.clgCheckerId, strComparisonOpClgCheckerId);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_ClgCheckDate) == true)
{
const strComparisonOpClgCheckDate:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_ClgCheckDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_ClgCheckDate, objBigConceptCond.clgCheckDate, strComparisonOpClgCheckDate);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_IsSchCheck) == true)
{
if (objBigConceptCond.isSchCheck == true)
{
strWhereCond += Format(" And {0} = '1'", clsBigConceptEN.con_IsSchCheck);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsBigConceptEN.con_IsSchCheck);
}
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_SchCheckerId) == true)
{
const strComparisonOpSchCheckerId:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_SchCheckerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_SchCheckerId, objBigConceptCond.schCheckerId, strComparisonOpSchCheckerId);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_SchCheckDate) == true)
{
const strComparisonOpSchCheckDate:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_SchCheckDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_SchCheckDate, objBigConceptCond.schCheckDate, strComparisonOpSchCheckDate);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_IdSubmitStatus) == true)
{
const strComparisonOpIdSubmitStatus:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_IdSubmitStatus];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_IdSubmitStatus, objBigConceptCond.idSubmitStatus, strComparisonOpIdSubmitStatus);
}
if (Object.prototype.hasOwnProperty.call(objBigConceptCond.dicFldComparisonOp, clsBigConceptEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objBigConceptCond.dicFldComparisonOp[clsBigConceptEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsBigConceptEN.con_Memo, objBigConceptCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--BigConcept(大概念),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strBigConceptName: 大概念名称(要求唯一的字段)
 * @param strIdGrade: 年级流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function BigConcept_GetUniCondStr(objBigConceptEN: clsBigConceptEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and BigConceptName = '{0}'", objBigConceptEN.bigConceptName);
 strWhereCond +=  Format(" and IdGrade = '{0}'", objBigConceptEN.idGrade);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--BigConcept(大概念),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strBigConceptName: 大概念名称(要求唯一的字段)
 * @param strIdGrade: 年级流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function BigConcept_GetUniCondStr4Update(objBigConceptEN: clsBigConceptEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdBigConcept <> '{0}'", objBigConceptEN.idBigConcept);
 strWhereCond +=  Format(" and BigConceptName = '{0}'", objBigConceptEN.bigConceptName);
 strWhereCond +=  Format(" and IdGrade = '{0}'", objBigConceptEN.idGrade);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objBigConceptENS:源对象
 * @param objBigConceptENT:目标对象
*/
export  function BigConcept_CopyObjTo(objBigConceptENS: clsBigConceptEN , objBigConceptENT: clsBigConceptEN ): void 
{
objBigConceptENT.idBigConcept = objBigConceptENS.idBigConcept; //大概念流水号
objBigConceptENT.bigConceptId = objBigConceptENS.bigConceptId; //大概念编号
objBigConceptENT.bigConceptName = objBigConceptENS.bigConceptName; //大概念名称
objBigConceptENT.idGrade = objBigConceptENS.idGrade; //年级流水号
objBigConceptENT.schoolTerm = objBigConceptENS.schoolTerm; //学期
objBigConceptENT.courseId = objBigConceptENS.courseId; //课程Id
objBigConceptENT.isClgCheck = objBigConceptENS.isClgCheck; //是否学院审批
objBigConceptENT.clgNote = objBigConceptENS.clgNote; //学院审批意见
objBigConceptENT.clgCheckerId = objBigConceptENS.clgCheckerId; //学院审批人id
objBigConceptENT.clgCheckDate = objBigConceptENS.clgCheckDate; //学院审批日期
objBigConceptENT.isSchCheck = objBigConceptENS.isSchCheck; //是否学校审批
objBigConceptENT.schNote = objBigConceptENS.schNote; //学校审批意见
objBigConceptENT.schCheckerId = objBigConceptENS.schCheckerId; //学校审批人Id
objBigConceptENT.schCheckDate = objBigConceptENS.schCheckDate; //学校审批日期
objBigConceptENT.idSubmitStatus = objBigConceptENS.idSubmitStatus; //送审状态流水号
objBigConceptENT.memo = objBigConceptENS.memo; //备注
objBigConceptENT.sfUpdFldSetStr = objBigConceptENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objBigConceptENS:源对象
 * @param objBigConceptENT:目标对象
*/
export  function BigConcept_GetObjFromJsonObj(objBigConceptENS: clsBigConceptEN): clsBigConceptEN 
{
 const objBigConceptENT: clsBigConceptEN = new clsBigConceptEN();
ObjectAssign(objBigConceptENT, objBigConceptENS);
 return objBigConceptENT;
}