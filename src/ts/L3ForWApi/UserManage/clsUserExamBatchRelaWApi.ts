
 /**
 * 类名:clsUserExamBatchRelaWApi
 * 表名:UserExamBatchRela(01120980)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:35
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户考核批次关系(UserExamBatchRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsUserExamBatchRelaEN } from "@/ts/L0Entity/UserManage/clsUserExamBatchRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const userExamBatchRela_Controller = "UserExamBatchRelaApi";
 export const userExamBatchRela_ConstructorName = "userExamBatchRela";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function UserExamBatchRela_SplitKeyLst(strKeyLst: string)  
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
examBatchNo: arrKey[1],
};
if (IsNullOrEmpty(objKeyLst.userId)== true)
{
const strMsg = "关键字段(userId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.examBatchNo)== true)
{
const strMsg = "关键字段(examBatchNo)值不能为空!";
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
export  async function UserExamBatchRela_GetObjByKeyLstAsync(strUserId: string,strExamBatchNo: string): Promise<clsUserExamBatchRelaEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsUserExamBatchRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strExamBatchNo) == true)
{
  const strMsg = Format("参数:[strExamBatchNo]不能为空!(In clsUserExamBatchRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId,
strExamBatchNo,
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
const objUserExamBatchRela = UserExamBatchRela_GetObjFromJsonObj(returnObj);
return objUserExamBatchRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  function UserExamBatchRela_SortFunDefa(a:clsUserExamBatchRelaEN , b:clsUserExamBatchRelaEN): number 
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
export  function UserExamBatchRela_SortFunDefa2Fld(a:clsUserExamBatchRelaEN , b:clsUserExamBatchRelaEN): number 
{
if (a.batchTypeId == b.batchTypeId) return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
else return a.batchTypeId.localeCompare(b.batchTypeId);
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
export  function UserExamBatchRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsUserExamBatchRelaEN.con_UserId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return a.userId.localeCompare(b.userId);
}
case clsUserExamBatchRelaEN.con_ExamBatchNo:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return a.examBatchNo.localeCompare(b.examBatchNo);
}
case clsUserExamBatchRelaEN.con_BatchTypeId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return a.batchTypeId.localeCompare(b.batchTypeId);
}
case clsUserExamBatchRelaEN.con_IdCurrEduCls:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsUserExamBatchRelaEN.con_CourseKnowledgeId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
if (a.courseKnowledgeId == null) return -1;
if (b.courseKnowledgeId == null) return 1;
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsUserExamBatchRelaEN.con_DifficultyLevelId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
if (a.difficultyLevelId == null) return -1;
if (b.difficultyLevelId == null) return 1;
return a.difficultyLevelId.localeCompare(b.difficultyLevelId);
}
case clsUserExamBatchRelaEN.con_BatchStateId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return a.batchStateId.localeCompare(b.batchStateId);
}
case clsUserExamBatchRelaEN.con_UpdDate:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsUserExamBatchRelaEN.con_UpdUser:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsUserExamBatchRelaEN.con_Memo:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserExamBatchRela]中不存在!(in ${ userExamBatchRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsUserExamBatchRelaEN.con_UserId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return b.userId.localeCompare(a.userId);
}
case clsUserExamBatchRelaEN.con_ExamBatchNo:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return b.examBatchNo.localeCompare(a.examBatchNo);
}
case clsUserExamBatchRelaEN.con_BatchTypeId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return b.batchTypeId.localeCompare(a.batchTypeId);
}
case clsUserExamBatchRelaEN.con_IdCurrEduCls:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsUserExamBatchRelaEN.con_CourseKnowledgeId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
if (b.courseKnowledgeId == null) return -1;
if (a.courseKnowledgeId == null) return 1;
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsUserExamBatchRelaEN.con_DifficultyLevelId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
if (b.difficultyLevelId == null) return -1;
if (a.difficultyLevelId == null) return 1;
return b.difficultyLevelId.localeCompare(a.difficultyLevelId);
}
case clsUserExamBatchRelaEN.con_BatchStateId:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return b.batchStateId.localeCompare(a.batchStateId);
}
case clsUserExamBatchRelaEN.con_UpdDate:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsUserExamBatchRelaEN.con_UpdUser:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsUserExamBatchRelaEN.con_Memo:
return (a: clsUserExamBatchRelaEN, b: clsUserExamBatchRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserExamBatchRela]中不存在!(in ${ userExamBatchRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function UserExamBatchRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsUserExamBatchRelaEN.con_UserId:
return (obj: clsUserExamBatchRelaEN) => {
return obj.userId === value;
}
case clsUserExamBatchRelaEN.con_ExamBatchNo:
return (obj: clsUserExamBatchRelaEN) => {
return obj.examBatchNo === value;
}
case clsUserExamBatchRelaEN.con_BatchTypeId:
return (obj: clsUserExamBatchRelaEN) => {
return obj.batchTypeId === value;
}
case clsUserExamBatchRelaEN.con_IdCurrEduCls:
return (obj: clsUserExamBatchRelaEN) => {
return obj.idCurrEduCls === value;
}
case clsUserExamBatchRelaEN.con_CourseKnowledgeId:
return (obj: clsUserExamBatchRelaEN) => {
return obj.courseKnowledgeId === value;
}
case clsUserExamBatchRelaEN.con_DifficultyLevelId:
return (obj: clsUserExamBatchRelaEN) => {
return obj.difficultyLevelId === value;
}
case clsUserExamBatchRelaEN.con_BatchStateId:
return (obj: clsUserExamBatchRelaEN) => {
return obj.batchStateId === value;
}
case clsUserExamBatchRelaEN.con_UpdDate:
return (obj: clsUserExamBatchRelaEN) => {
return obj.updDate === value;
}
case clsUserExamBatchRelaEN.con_UpdUser:
return (obj: clsUserExamBatchRelaEN) => {
return obj.updUser === value;
}
case clsUserExamBatchRelaEN.con_Memo:
return (obj: clsUserExamBatchRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserExamBatchRela]中不存在!(in ${ userExamBatchRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[UserExamBatchRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function UserExamBatchRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetFirstObjAsync(strWhereCond: string): Promise<clsUserExamBatchRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const objUserExamBatchRela = UserExamBatchRela_GetObjFromJsonObj(returnObj);
return objUserExamBatchRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUserExamBatchRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserExamBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsUserExamBatchRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserExamBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsUserExamBatchRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserExamBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsUserExamBatchRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsUserExamBatchRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserExamBatchRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
 * @param strUserId,strExamBatchNo:关键字列表
 * @returns 获取删除的结果
 **/
export  async function UserExamBatchRela_DelRecKeyLstAsync(strUserId: string,strExamBatchNo: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId, 
strExamBatchNo, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_DelUserExamBatchRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelUserExamBatchRelasByCondAsync";
const strAction = "DelUserExamBatchRelasByCond";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
 * @param objUserExamBatchRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function UserExamBatchRela_AddNewRecordAsync(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objUserExamBatchRelaEN.userId === null || objUserExamBatchRelaEN.userId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objUserExamBatchRelaEN);
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserExamBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
 * @param objUserExamBatchRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function UserExamBatchRela_AddNewRecordWithMaxIdAsync(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserExamBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_AddNewObjSave(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
UserExamBatchRela_CheckPropertyNew(objUserExamBatchRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ userExamBatchRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await UserExamBatchRela_CheckUniCond4Add(objUserExamBatchRelaEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const bolIsExist = await UserExamBatchRela_IsExistAsync(objUserExamBatchRelaEN.userId,objUserExamBatchRelaEN.examBatchNo,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objUserExamBatchRelaEN.userId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await UserExamBatchRela_AddNewRecordAsync(objUserExamBatchRelaEN);
if (returnBool == true)
{
//UserExamBatchRela_ReFreshCache();
}
else
{
const strInfo = `添加[用户考核批次关系(UserExamBatchRela)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objUserExamBatchRelaEN.userId }`;
strReturnKeyLst += `|${ objUserExamBatchRelaEN.examBatchNo }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ userExamBatchRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function UserExamBatchRela_CheckUniCond4Add(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<boolean>{
const strUniquenessCondition = UserExamBatchRela_GetUniCondStr(objUserExamBatchRelaEN);
const bolIsExistCondition = await UserExamBatchRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function UserExamBatchRela_CheckUniCond4Update(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<boolean>{
const strUniquenessCondition = UserExamBatchRela_GetUniCondStr4Update(objUserExamBatchRelaEN);
const bolIsExistCondition = await UserExamBatchRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function UserExamBatchRela_UpdateObjSave(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objUserExamBatchRelaEN.sfUpdFldSetStr = objUserExamBatchRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objUserExamBatchRelaEN.userId == "" || objUserExamBatchRelaEN.userId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
UserExamBatchRela_CheckProperty4Update(objUserExamBatchRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ userExamBatchRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await UserExamBatchRela_CheckUniCond4Update(objUserExamBatchRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await UserExamBatchRela_UpdateRecordAsync(objUserExamBatchRelaEN);
if (returnBool == true)
{
//UserExamBatchRela_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ userExamBatchRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objUserExamBatchRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function UserExamBatchRela_AddNewRecordWithReturnKeyAsync(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserExamBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
 * @param objUserExamBatchRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function UserExamBatchRela_UpdateRecordAsync(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objUserExamBatchRelaEN.sfUpdFldSetStr === undefined || objUserExamBatchRelaEN.sfUpdFldSetStr === null || objUserExamBatchRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserExamBatchRelaEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserExamBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
 * @param objUserExamBatchRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function UserExamBatchRela_EditRecordExAsync(objUserExamBatchRelaEN: clsUserExamBatchRelaEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objUserExamBatchRelaEN.sfUpdFldSetStr === undefined || objUserExamBatchRelaEN.sfUpdFldSetStr === null || objUserExamBatchRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserExamBatchRelaEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserExamBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
 * @param objUserExamBatchRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function UserExamBatchRela_UpdateWithConditionAsync(objUserExamBatchRelaEN: clsUserExamBatchRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objUserExamBatchRelaEN.sfUpdFldSetStr === undefined || objUserExamBatchRelaEN.sfUpdFldSetStr === null || objUserExamBatchRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserExamBatchRelaEN.userId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);
objUserExamBatchRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserExamBatchRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_IsExistAsync(strUserId: string,strExamBatchNo: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId,
strExamBatchNo,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  async function UserExamBatchRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(userExamBatchRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userExamBatchRela_ConstructorName, strThisFuncName);
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
export  function UserExamBatchRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function UserExamBatchRela_CheckPropertyNew(pobjUserExamBatchRelaEN: clsUserExamBatchRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[批次类型Id]不能为空(In 用户考核批次关系)!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.idCurrEduCls) === true 
 || pobjUserExamBatchRelaEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 用户考核批次关系)!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchStateId) === true 
 || pobjUserExamBatchRelaEN.batchStateId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[批次状态Id]不能为空(In 用户考核批次关系)!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改日期]不能为空(In 用户考核批次关系)!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 用户考核批次关系)!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.userId) == false && GetStrLen(pobjUserExamBatchRelaEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.userId}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.examBatchNo) == false && GetStrLen(pobjUserExamBatchRelaEN.examBatchNo) > 20)
{
 throw new Error(`(errid:Watl000413)字段[学生批次号(examBatchNo)]的长度不能超过20(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.examBatchNo}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchTypeId) == false && GetStrLen(pobjUserExamBatchRelaEN.batchTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[批次类型Id(batchTypeId)]的长度不能超过2(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.batchTypeId}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.idCurrEduCls) == false && GetStrLen(pobjUserExamBatchRelaEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.idCurrEduCls}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.courseKnowledgeId) == false && GetStrLen(pobjUserExamBatchRelaEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.courseKnowledgeId}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.difficultyLevelId) == false && GetStrLen(pobjUserExamBatchRelaEN.difficultyLevelId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[难度等级Id(difficultyLevelId)]的长度不能超过2(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.difficultyLevelId}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchStateId) == false && GetStrLen(pobjUserExamBatchRelaEN.batchStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[批次状态Id(batchStateId)]的长度不能超过2(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.batchStateId}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updDate) == false && GetStrLen(pobjUserExamBatchRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.updDate}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updUser) == false && GetStrLen(pobjUserExamBatchRelaEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.updUser}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.memo) == false && GetStrLen(pobjUserExamBatchRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.memo}(clsUserExamBatchRelaBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.userId) == false && undefined !== pobjUserExamBatchRelaEN.userId && tzDataType.isString(pobjUserExamBatchRelaEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjUserExamBatchRelaEN.userId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.examBatchNo) == false && undefined !== pobjUserExamBatchRelaEN.examBatchNo && tzDataType.isString(pobjUserExamBatchRelaEN.examBatchNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生批次号(examBatchNo)]的值:[${pobjUserExamBatchRelaEN.examBatchNo}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchTypeId) == false && undefined !== pobjUserExamBatchRelaEN.batchTypeId && tzDataType.isString(pobjUserExamBatchRelaEN.batchTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次类型Id(batchTypeId)]的值:[${pobjUserExamBatchRelaEN.batchTypeId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.idCurrEduCls) == false && undefined !== pobjUserExamBatchRelaEN.idCurrEduCls && tzDataType.isString(pobjUserExamBatchRelaEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjUserExamBatchRelaEN.idCurrEduCls}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.courseKnowledgeId) == false && undefined !== pobjUserExamBatchRelaEN.courseKnowledgeId && tzDataType.isString(pobjUserExamBatchRelaEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点Id(courseKnowledgeId)]的值:[${pobjUserExamBatchRelaEN.courseKnowledgeId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.difficultyLevelId) == false && undefined !== pobjUserExamBatchRelaEN.difficultyLevelId && tzDataType.isString(pobjUserExamBatchRelaEN.difficultyLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[难度等级Id(difficultyLevelId)]的值:[${pobjUserExamBatchRelaEN.difficultyLevelId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchStateId) == false && undefined !== pobjUserExamBatchRelaEN.batchStateId && tzDataType.isString(pobjUserExamBatchRelaEN.batchStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[批次状态Id(batchStateId)]的值:[${pobjUserExamBatchRelaEN.batchStateId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updDate) == false && undefined !== pobjUserExamBatchRelaEN.updDate && tzDataType.isString(pobjUserExamBatchRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjUserExamBatchRelaEN.updDate}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updUser) == false && undefined !== pobjUserExamBatchRelaEN.updUser && tzDataType.isString(pobjUserExamBatchRelaEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjUserExamBatchRelaEN.updUser}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.memo) == false && undefined !== pobjUserExamBatchRelaEN.memo && tzDataType.isString(pobjUserExamBatchRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjUserExamBatchRelaEN.memo}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function UserExamBatchRela_CheckProperty4Update(pobjUserExamBatchRelaEN: clsUserExamBatchRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.userId) == false && GetStrLen(pobjUserExamBatchRelaEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.userId}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.examBatchNo) == false && GetStrLen(pobjUserExamBatchRelaEN.examBatchNo) > 20)
{
 throw new Error(`(errid:Watl000416)字段[学生批次号(examBatchNo)]的长度不能超过20(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.examBatchNo}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchTypeId) == false && GetStrLen(pobjUserExamBatchRelaEN.batchTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[批次类型Id(batchTypeId)]的长度不能超过2(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.batchTypeId}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.idCurrEduCls) == false && GetStrLen(pobjUserExamBatchRelaEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.idCurrEduCls}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.courseKnowledgeId) == false && GetStrLen(pobjUserExamBatchRelaEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.courseKnowledgeId}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.difficultyLevelId) == false && GetStrLen(pobjUserExamBatchRelaEN.difficultyLevelId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[难度等级Id(difficultyLevelId)]的长度不能超过2(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.difficultyLevelId}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchStateId) == false && GetStrLen(pobjUserExamBatchRelaEN.batchStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[批次状态Id(batchStateId)]的长度不能超过2(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.batchStateId}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updDate) == false && GetStrLen(pobjUserExamBatchRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.updDate}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updUser) == false && GetStrLen(pobjUserExamBatchRelaEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.updUser}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.memo) == false && GetStrLen(pobjUserExamBatchRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户考核批次关系(UserExamBatchRela))!值:${pobjUserExamBatchRelaEN.memo}(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.userId) == false && undefined !== pobjUserExamBatchRelaEN.userId && tzDataType.isString(pobjUserExamBatchRelaEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjUserExamBatchRelaEN.userId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.examBatchNo) == false && undefined !== pobjUserExamBatchRelaEN.examBatchNo && tzDataType.isString(pobjUserExamBatchRelaEN.examBatchNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生批次号(examBatchNo)]的值:[${pobjUserExamBatchRelaEN.examBatchNo}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchTypeId) == false && undefined !== pobjUserExamBatchRelaEN.batchTypeId && tzDataType.isString(pobjUserExamBatchRelaEN.batchTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次类型Id(batchTypeId)]的值:[${pobjUserExamBatchRelaEN.batchTypeId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.idCurrEduCls) == false && undefined !== pobjUserExamBatchRelaEN.idCurrEduCls && tzDataType.isString(pobjUserExamBatchRelaEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjUserExamBatchRelaEN.idCurrEduCls}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.courseKnowledgeId) == false && undefined !== pobjUserExamBatchRelaEN.courseKnowledgeId && tzDataType.isString(pobjUserExamBatchRelaEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点Id(courseKnowledgeId)]的值:[${pobjUserExamBatchRelaEN.courseKnowledgeId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.difficultyLevelId) == false && undefined !== pobjUserExamBatchRelaEN.difficultyLevelId && tzDataType.isString(pobjUserExamBatchRelaEN.difficultyLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[难度等级Id(difficultyLevelId)]的值:[${pobjUserExamBatchRelaEN.difficultyLevelId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.batchStateId) == false && undefined !== pobjUserExamBatchRelaEN.batchStateId && tzDataType.isString(pobjUserExamBatchRelaEN.batchStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[批次状态Id(batchStateId)]的值:[${pobjUserExamBatchRelaEN.batchStateId}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updDate) == false && undefined !== pobjUserExamBatchRelaEN.updDate && tzDataType.isString(pobjUserExamBatchRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjUserExamBatchRelaEN.updDate}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.updUser) == false && undefined !== pobjUserExamBatchRelaEN.updUser && tzDataType.isString(pobjUserExamBatchRelaEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjUserExamBatchRelaEN.updUser}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.memo) == false && undefined !== pobjUserExamBatchRelaEN.memo && tzDataType.isString(pobjUserExamBatchRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjUserExamBatchRelaEN.memo}], 非法,应该为字符型(In 用户考核批次关系(UserExamBatchRela))!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjUserExamBatchRelaEN.userId) === true )
{
 throw new Error(`(errid:Watl000064)字段[用户ID]不能为空(In 用户考核批次关系)!(clsUserExamBatchRelaBL:CheckProperty4Update)`);
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
export  function UserExamBatchRela_GetJSONStrByObj (pobjUserExamBatchRelaEN: clsUserExamBatchRelaEN): string
{
pobjUserExamBatchRelaEN.sfUpdFldSetStr = pobjUserExamBatchRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjUserExamBatchRelaEN);
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
export  function UserExamBatchRela_GetObjLstByJSONStr (strJSON: string): Array<clsUserExamBatchRelaEN>
{
let arrUserExamBatchRelaObjLst = new Array<clsUserExamBatchRelaEN>();
if (strJSON === "")
{
return arrUserExamBatchRelaObjLst;
}
try
{
arrUserExamBatchRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrUserExamBatchRelaObjLst;
}
return arrUserExamBatchRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserExamBatchRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function UserExamBatchRela_GetObjLstByJSONObjLst (arrUserExamBatchRelaObjLstS: Array<clsUserExamBatchRelaEN>): Array<clsUserExamBatchRelaEN>
{
const arrUserExamBatchRelaObjLst = new Array<clsUserExamBatchRelaEN>();
for (const objInFor of arrUserExamBatchRelaObjLstS) {
const obj1 = UserExamBatchRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrUserExamBatchRelaObjLst.push(obj1);
}
return arrUserExamBatchRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function UserExamBatchRela_GetObjByJSONStr (strJSON: string): clsUserExamBatchRelaEN
{
let pobjUserExamBatchRelaEN = new clsUserExamBatchRelaEN();
if (strJSON === "")
{
return pobjUserExamBatchRelaEN;
}
try
{
pobjUserExamBatchRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjUserExamBatchRelaEN;
}
return pobjUserExamBatchRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function UserExamBatchRela_GetCombineCondition(objUserExamBatchRelaCond: clsUserExamBatchRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_UserId, objUserExamBatchRelaCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_ExamBatchNo) == true)
{
const strComparisonOpExamBatchNo:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_ExamBatchNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_ExamBatchNo, objUserExamBatchRelaCond.examBatchNo, strComparisonOpExamBatchNo);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_BatchTypeId) == true)
{
const strComparisonOpBatchTypeId:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_BatchTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_BatchTypeId, objUserExamBatchRelaCond.batchTypeId, strComparisonOpBatchTypeId);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_IdCurrEduCls, objUserExamBatchRelaCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_CourseKnowledgeId, objUserExamBatchRelaCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_DifficultyLevelId) == true)
{
const strComparisonOpDifficultyLevelId:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_DifficultyLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_DifficultyLevelId, objUserExamBatchRelaCond.difficultyLevelId, strComparisonOpDifficultyLevelId);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_BatchStateId) == true)
{
const strComparisonOpBatchStateId:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_BatchStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_BatchStateId, objUserExamBatchRelaCond.batchStateId, strComparisonOpBatchStateId);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_UpdDate, objUserExamBatchRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_UpdUser, objUserExamBatchRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objUserExamBatchRelaCond.dicFldComparisonOp, clsUserExamBatchRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objUserExamBatchRelaCond.dicFldComparisonOp[clsUserExamBatchRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserExamBatchRelaEN.con_Memo, objUserExamBatchRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--UserExamBatchRela(用户考核批次关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strBatchTypeId: 批次类型Id(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function UserExamBatchRela_GetUniCondStr(objUserExamBatchRelaEN: clsUserExamBatchRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and BatchTypeId = '{0}'", objUserExamBatchRelaEN.batchTypeId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objUserExamBatchRelaEN.idCurrEduCls);
 strWhereCond +=  Format(" and UserId = '{0}'", objUserExamBatchRelaEN.userId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--UserExamBatchRela(用户考核批次关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strBatchTypeId: 批次类型Id(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function UserExamBatchRela_GetUniCondStr4Update(objUserExamBatchRelaEN: clsUserExamBatchRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ExamBatchNo <> '{0}'", objUserExamBatchRelaEN.examBatchNo);
 strWhereCond += Format(" and UserId <> '{0}'", objUserExamBatchRelaEN.userId);
 strWhereCond +=  Format(" and BatchTypeId = '{0}'", objUserExamBatchRelaEN.batchTypeId);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objUserExamBatchRelaEN.idCurrEduCls);
 strWhereCond +=  Format(" and UserId = '{0}'", objUserExamBatchRelaEN.userId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objUserExamBatchRelaENS:源对象
 * @param objUserExamBatchRelaENT:目标对象
*/
export  function UserExamBatchRela_CopyObjTo(objUserExamBatchRelaENS: clsUserExamBatchRelaEN , objUserExamBatchRelaENT: clsUserExamBatchRelaEN ): void 
{
objUserExamBatchRelaENT.userId = objUserExamBatchRelaENS.userId; //用户ID
objUserExamBatchRelaENT.examBatchNo = objUserExamBatchRelaENS.examBatchNo; //学生批次号
objUserExamBatchRelaENT.batchTypeId = objUserExamBatchRelaENS.batchTypeId; //批次类型Id
objUserExamBatchRelaENT.idCurrEduCls = objUserExamBatchRelaENS.idCurrEduCls; //教学班流水号
objUserExamBatchRelaENT.courseKnowledgeId = objUserExamBatchRelaENS.courseKnowledgeId; //知识点Id
objUserExamBatchRelaENT.difficultyLevelId = objUserExamBatchRelaENS.difficultyLevelId; //难度等级Id
objUserExamBatchRelaENT.batchStateId = objUserExamBatchRelaENS.batchStateId; //批次状态Id
objUserExamBatchRelaENT.updDate = objUserExamBatchRelaENS.updDate; //修改日期
objUserExamBatchRelaENT.updUser = objUserExamBatchRelaENS.updUser; //修改人
objUserExamBatchRelaENT.memo = objUserExamBatchRelaENS.memo; //备注
objUserExamBatchRelaENT.sfUpdFldSetStr = objUserExamBatchRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserExamBatchRelaENS:源对象
 * @param objUserExamBatchRelaENT:目标对象
*/
export  function UserExamBatchRela_GetObjFromJsonObj(objUserExamBatchRelaENS: clsUserExamBatchRelaEN): clsUserExamBatchRelaEN 
{
 const objUserExamBatchRelaENT: clsUserExamBatchRelaEN = new clsUserExamBatchRelaEN();
ObjectAssign(objUserExamBatchRelaENT, objUserExamBatchRelaENS);
 return objUserExamBatchRelaENT;
}