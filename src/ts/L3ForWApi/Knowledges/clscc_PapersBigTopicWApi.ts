
 /**
 * 类名:clscc_PapersBigTopicWApi
 * 表名:cc_PapersBigTopic(01120077)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:16
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
 * 试卷大题目(cc_PapersBigTopic)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clscc_PapersBigTopicEN } from "@/ts/L0Entity/Knowledges/clscc_PapersBigTopicEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cc_PapersBigTopic_Controller = "cc_PapersBigTopicApi";
 export const cc_PapersBigTopic_ConstructorName = "cc_PapersBigTopic";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPapersBigTopicId:关键字
 * @returns 对象
 **/
export  async function cc_PapersBigTopic_GetObjByPapersBigTopicIdAsync(strPapersBigTopicId: string): Promise<clscc_PapersBigTopicEN|null>  
{
const strThisFuncName = "GetObjByPapersBigTopicIdAsync";

if (IsNullOrEmpty(strPapersBigTopicId) == true)
{
  const strMsg = Format("参数:[strPapersBigTopicId]不能为空!(In clscc_PapersBigTopicWApi.GetObjByPapersBigTopicIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPapersBigTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPapersBigTopicId]的长度:[{0}]不正确!(clscc_PapersBigTopicWApi.GetObjByPapersBigTopicIdAsync)", strPapersBigTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPapersBigTopicId";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPapersBigTopicId,
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
const objcc_PapersBigTopic = cc_PapersBigTopic_GetObjFromJsonObj(returnObj);
return objcc_PapersBigTopic;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPapersBigTopicIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByPapersBigTopicIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function cc_PapersBigTopic_SortFunDefa(a:clscc_PapersBigTopicEN , b:clscc_PapersBigTopicEN): number 
{
return a.papersBigTopicId.localeCompare(b.papersBigTopicId);
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
export  function cc_PapersBigTopic_SortFunDefa2Fld(a:clscc_PapersBigTopicEN , b:clscc_PapersBigTopicEN): number 
{
if (a.papersBigTopicName == b.papersBigTopicName) return a.topicDescription.localeCompare(b.topicDescription);
else return a.papersBigTopicName.localeCompare(b.papersBigTopicName);
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
export  function cc_PapersBigTopic_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_PapersBigTopicEN.con_PapersBigTopicId:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return a.papersBigTopicId.localeCompare(b.papersBigTopicId);
}
case clscc_PapersBigTopicEN.con_PapersBigTopicName:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return a.papersBigTopicName.localeCompare(b.papersBigTopicName);
}
case clscc_PapersBigTopicEN.con_TopicDescription:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (a.topicDescription == null) return -1;
if (b.topicDescription == null) return 1;
return a.topicDescription.localeCompare(b.topicDescription);
}
case clscc_PapersBigTopicEN.con_TopicScores:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return a.topicScores-b.topicScores;
}
case clscc_PapersBigTopicEN.con_CourseExamPaperId:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
}
case clscc_PapersBigTopicEN.con_QuestionTypeId:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (a.questionTypeId == null) return -1;
if (b.questionTypeId == null) return 1;
return a.questionTypeId.localeCompare(b.questionTypeId);
}
case clscc_PapersBigTopicEN.con_IsShow:
return (a: clscc_PapersBigTopicEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clscc_PapersBigTopicEN.con_OrderNum:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return a.orderNum-b.orderNum;
}
case clscc_PapersBigTopicEN.con_UpdDate:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clscc_PapersBigTopicEN.con_UpdUser:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clscc_PapersBigTopicEN.con_Memo:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_PapersBigTopic]中不存在!(in ${ cc_PapersBigTopic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_PapersBigTopicEN.con_PapersBigTopicId:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return b.papersBigTopicId.localeCompare(a.papersBigTopicId);
}
case clscc_PapersBigTopicEN.con_PapersBigTopicName:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return b.papersBigTopicName.localeCompare(a.papersBigTopicName);
}
case clscc_PapersBigTopicEN.con_TopicDescription:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (b.topicDescription == null) return -1;
if (a.topicDescription == null) return 1;
return b.topicDescription.localeCompare(a.topicDescription);
}
case clscc_PapersBigTopicEN.con_TopicScores:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return b.topicScores-a.topicScores;
}
case clscc_PapersBigTopicEN.con_CourseExamPaperId:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return b.courseExamPaperId.localeCompare(a.courseExamPaperId);
}
case clscc_PapersBigTopicEN.con_QuestionTypeId:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (b.questionTypeId == null) return -1;
if (a.questionTypeId == null) return 1;
return b.questionTypeId.localeCompare(a.questionTypeId);
}
case clscc_PapersBigTopicEN.con_IsShow:
return (b: clscc_PapersBigTopicEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clscc_PapersBigTopicEN.con_OrderNum:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
return b.orderNum-a.orderNum;
}
case clscc_PapersBigTopicEN.con_UpdDate:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clscc_PapersBigTopicEN.con_UpdUser:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clscc_PapersBigTopicEN.con_Memo:
return (a: clscc_PapersBigTopicEN, b: clscc_PapersBigTopicEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_PapersBigTopic]中不存在!(in ${ cc_PapersBigTopic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByPapersBigTopicIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function cc_PapersBigTopic_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_PapersBigTopicEN.con_PapersBigTopicId:
return (obj: clscc_PapersBigTopicEN) => {
return obj.papersBigTopicId === value;
}
case clscc_PapersBigTopicEN.con_PapersBigTopicName:
return (obj: clscc_PapersBigTopicEN) => {
return obj.papersBigTopicName === value;
}
case clscc_PapersBigTopicEN.con_TopicDescription:
return (obj: clscc_PapersBigTopicEN) => {
return obj.topicDescription === value;
}
case clscc_PapersBigTopicEN.con_TopicScores:
return (obj: clscc_PapersBigTopicEN) => {
return obj.topicScores === value;
}
case clscc_PapersBigTopicEN.con_CourseExamPaperId:
return (obj: clscc_PapersBigTopicEN) => {
return obj.courseExamPaperId === value;
}
case clscc_PapersBigTopicEN.con_QuestionTypeId:
return (obj: clscc_PapersBigTopicEN) => {
return obj.questionTypeId === value;
}
case clscc_PapersBigTopicEN.con_IsShow:
return (obj: clscc_PapersBigTopicEN) => {
return obj.isShow === value;
}
case clscc_PapersBigTopicEN.con_OrderNum:
return (obj: clscc_PapersBigTopicEN) => {
return obj.orderNum === value;
}
case clscc_PapersBigTopicEN.con_UpdDate:
return (obj: clscc_PapersBigTopicEN) => {
return obj.updDate === value;
}
case clscc_PapersBigTopicEN.con_UpdUser:
return (obj: clscc_PapersBigTopicEN) => {
return obj.updUser === value;
}
case clscc_PapersBigTopicEN.con_Memo:
return (obj: clscc_PapersBigTopicEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_PapersBigTopic]中不存在!(in ${ cc_PapersBigTopic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[cc_PapersBigTopic__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_PapersBigTopic_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetFirstObjAsync(strWhereCond: string): Promise<clscc_PapersBigTopicEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const objcc_PapersBigTopic = cc_PapersBigTopic_GetObjFromJsonObj(returnObj);
return objcc_PapersBigTopic;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_PapersBigTopicEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_PapersBigTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param arrPapersBigTopicId:关键字列表
 * @returns 对象列表
 **/
export  async function cc_PapersBigTopic_GetObjLstByPapersBigTopicIdLstAsync(arrPapersBigTopicId: Array<string>): Promise<Array<clscc_PapersBigTopicEN>>  
{
const strThisFuncName = "GetObjLstByPapersBigTopicIdLstAsync";
const strAction = "GetObjLstByPapersBigTopicIdLst";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPapersBigTopicId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_PapersBigTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPapersBigTopicIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function cc_PapersBigTopic_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_PapersBigTopicEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_PapersBigTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_PapersBigTopicEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_PapersBigTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_PapersBigTopicEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_PapersBigTopicEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_PapersBigTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param strPapersBigTopicId:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_PapersBigTopic_DelRecordAsync(strPapersBigTopicId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strPapersBigTopicId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param arrPapersBigTopicId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_PapersBigTopic_Delcc_PapersBigTopicsAsync(arrPapersBigTopicId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_PapersBigTopicsAsync";
const strAction = "Delcc_PapersBigTopics";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPapersBigTopicId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_Delcc_PapersBigTopicsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_PapersBigTopicsByCondAsync";
const strAction = "Delcc_PapersBigTopicsByCond";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param objcc_PapersBigTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_PapersBigTopic_AddNewRecordAsync(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_PapersBigTopicEN);
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_PapersBigTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param objcc_PapersBigTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_PapersBigTopic_AddNewRecordWithMaxIdAsync(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_PapersBigTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_AddNewObjSave(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_PapersBigTopic_CheckPropertyNew(objcc_PapersBigTopicEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_PapersBigTopic_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_PapersBigTopic_CheckUniCond4Add(objcc_PapersBigTopicEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await cc_PapersBigTopic_AddNewRecordWithMaxIdAsync(objcc_PapersBigTopicEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//cc_PapersBigTopic_ReFreshCache();
}
else
{
const strInfo = `添加[试卷大题目(cc_PapersBigTopic)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_PapersBigTopic_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_PapersBigTopic_CheckUniCond4Add(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<boolean>{
const strUniquenessCondition = cc_PapersBigTopic_GetUniCondStr(objcc_PapersBigTopicEN);
const bolIsExistCondition = await cc_PapersBigTopic_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_PapersBigTopic_CheckUniCond4Update(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<boolean>{
const strUniquenessCondition = cc_PapersBigTopic_GetUniCondStr4Update(objcc_PapersBigTopicEN);
const bolIsExistCondition = await cc_PapersBigTopic_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_PapersBigTopic_UpdateObjSave(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_PapersBigTopicEN.sfUpdFldSetStr = objcc_PapersBigTopicEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_PapersBigTopicEN.papersBigTopicId == "" || objcc_PapersBigTopicEN.papersBigTopicId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_PapersBigTopic_CheckProperty4Update(objcc_PapersBigTopicEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_PapersBigTopic_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_PapersBigTopic_CheckUniCond4Update(objcc_PapersBigTopicEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_PapersBigTopic_UpdateRecordAsync(objcc_PapersBigTopicEN);
if (returnBool == true)
{
//cc_PapersBigTopic_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_PapersBigTopic_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_PapersBigTopicEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_PapersBigTopic_AddNewRecordWithReturnKeyAsync(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_PapersBigTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param objcc_PapersBigTopicEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_PapersBigTopic_UpdateRecordAsync(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_PapersBigTopicEN.sfUpdFldSetStr === undefined || objcc_PapersBigTopicEN.sfUpdFldSetStr === null || objcc_PapersBigTopicEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_PapersBigTopicEN.papersBigTopicId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_PapersBigTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param objcc_PapersBigTopicEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_PapersBigTopic_EditRecordExAsync(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_PapersBigTopicEN.sfUpdFldSetStr === undefined || objcc_PapersBigTopicEN.sfUpdFldSetStr === null || objcc_PapersBigTopicEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_PapersBigTopicEN.papersBigTopicId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_PapersBigTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param objcc_PapersBigTopicEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_PapersBigTopic_UpdateWithConditionAsync(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_PapersBigTopicEN.sfUpdFldSetStr === undefined || objcc_PapersBigTopicEN.sfUpdFldSetStr === null || objcc_PapersBigTopicEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_PapersBigTopicEN.papersBigTopicId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);
objcc_PapersBigTopicEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_PapersBigTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
 * @param strPapersBigTopicId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_PapersBigTopic_IsExistAsync(strPapersBigTopicId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPapersBigTopicId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  async function cc_PapersBigTopic_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_PapersBigTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_PapersBigTopic_ConstructorName, strThisFuncName);
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
export  function cc_PapersBigTopic_GetWebApiUrl(strController: string, strAction: string): string {
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

*/
export  async function cc_PapersBigTopic_BindDdl_PapersBigTopicIdInDiv(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_PapersBigTopicIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_PapersBigTopicIdInDivCache");
const strCondition = `1=1`;
const arrObjLstSel = await cc_PapersBigTopic_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clscc_PapersBigTopicEN.con_PapersBigTopicId, clscc_PapersBigTopicEN.con_PapersBigTopicName, "试卷大题目...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function cc_PapersBigTopic_GetArrcc_PapersBigTopic()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_PapersBigTopicIdInDivCache");
const arrcc_PapersBigTopic = new Array<clscc_PapersBigTopicEN>();
const strCondition = `1=1`;
const arrObjLstSel = await cc_PapersBigTopic_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clscc_PapersBigTopicEN();
obj0.papersBigTopicId = '0';
obj0.papersBigTopicName = '选试卷大题目...';
arrcc_PapersBigTopic.push(obj0);
arrObjLstSel.forEach(x => arrcc_PapersBigTopic.push(x));
return arrcc_PapersBigTopic;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_PapersBigTopic_CheckPropertyNew(pobjcc_PapersBigTopicEN: clscc_PapersBigTopicEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicName) === true )
{
 throw new Error(`(errid:Watl000411)字段[试卷大题目名称]不能为空(In 试卷大题目)!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.courseExamPaperId) === true 
 || pobjcc_PapersBigTopicEN.courseExamPaperId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[考卷流水号]不能为空(In 试卷大题目)!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicId) == false && GetStrLen(pobjcc_PapersBigTopicEN.papersBigTopicId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[试卷大题目Id(papersBigTopicId)]的长度不能超过8(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.papersBigTopicId}(clscc_PapersBigTopicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicName) == false && GetStrLen(pobjcc_PapersBigTopicEN.papersBigTopicName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[试卷大题目名称(papersBigTopicName)]的长度不能超过50(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.papersBigTopicName}(clscc_PapersBigTopicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.topicDescription) == false && GetStrLen(pobjcc_PapersBigTopicEN.topicDescription) > 100)
{
 throw new Error(`(errid:Watl000413)字段[标题描述(topicDescription)]的长度不能超过100(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.topicDescription}(clscc_PapersBigTopicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.courseExamPaperId) == false && GetStrLen(pobjcc_PapersBigTopicEN.courseExamPaperId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.courseExamPaperId}(clscc_PapersBigTopicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.questionTypeId) == false && GetStrLen(pobjcc_PapersBigTopicEN.questionTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[题目类型Id(questionTypeId)]的长度不能超过2(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.questionTypeId}(clscc_PapersBigTopicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.updDate) == false && GetStrLen(pobjcc_PapersBigTopicEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.updDate}(clscc_PapersBigTopicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.updUser) == false && GetStrLen(pobjcc_PapersBigTopicEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.updUser}(clscc_PapersBigTopicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.memo) == false && GetStrLen(pobjcc_PapersBigTopicEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.memo}(clscc_PapersBigTopicBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicId) == false && undefined !== pobjcc_PapersBigTopicEN.papersBigTopicId && tzDataType.isString(pobjcc_PapersBigTopicEN.papersBigTopicId) === false)
{
 throw new Error(`(errid:Watl000414)字段[试卷大题目Id(papersBigTopicId)]的值:[${pobjcc_PapersBigTopicEN.papersBigTopicId}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicName) == false && undefined !== pobjcc_PapersBigTopicEN.papersBigTopicName && tzDataType.isString(pobjcc_PapersBigTopicEN.papersBigTopicName) === false)
{
 throw new Error(`(errid:Watl000414)字段[试卷大题目名称(papersBigTopicName)]的值:[${pobjcc_PapersBigTopicEN.papersBigTopicName}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.topicDescription) == false && undefined !== pobjcc_PapersBigTopicEN.topicDescription && tzDataType.isString(pobjcc_PapersBigTopicEN.topicDescription) === false)
{
 throw new Error(`(errid:Watl000414)字段[标题描述(topicDescription)]的值:[${pobjcc_PapersBigTopicEN.topicDescription}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (null != pobjcc_PapersBigTopicEN.topicScores && undefined !== pobjcc_PapersBigTopicEN.topicScores && tzDataType.isNumber(pobjcc_PapersBigTopicEN.topicScores) === false)
{
 throw new Error(`(errid:Watl000414)字段[大题得分(topicScores)]的值:[${pobjcc_PapersBigTopicEN.topicScores}], 非法,应该为数值型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.courseExamPaperId) == false && undefined !== pobjcc_PapersBigTopicEN.courseExamPaperId && tzDataType.isString(pobjcc_PapersBigTopicEN.courseExamPaperId) === false)
{
 throw new Error(`(errid:Watl000414)字段[考卷流水号(courseExamPaperId)]的值:[${pobjcc_PapersBigTopicEN.courseExamPaperId}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.questionTypeId) == false && undefined !== pobjcc_PapersBigTopicEN.questionTypeId && tzDataType.isString(pobjcc_PapersBigTopicEN.questionTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目类型Id(questionTypeId)]的值:[${pobjcc_PapersBigTopicEN.questionTypeId}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (null != pobjcc_PapersBigTopicEN.isShow && undefined !== pobjcc_PapersBigTopicEN.isShow && tzDataType.isBoolean(pobjcc_PapersBigTopicEN.isShow) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否启用(isShow)]的值:[${pobjcc_PapersBigTopicEN.isShow}], 非法,应该为布尔型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (null != pobjcc_PapersBigTopicEN.orderNum && undefined !== pobjcc_PapersBigTopicEN.orderNum && tzDataType.isNumber(pobjcc_PapersBigTopicEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjcc_PapersBigTopicEN.orderNum}], 非法,应该为数值型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.updDate) == false && undefined !== pobjcc_PapersBigTopicEN.updDate && tzDataType.isString(pobjcc_PapersBigTopicEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_PapersBigTopicEN.updDate}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.updUser) == false && undefined !== pobjcc_PapersBigTopicEN.updUser && tzDataType.isString(pobjcc_PapersBigTopicEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjcc_PapersBigTopicEN.updUser}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.memo) == false && undefined !== pobjcc_PapersBigTopicEN.memo && tzDataType.isString(pobjcc_PapersBigTopicEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_PapersBigTopicEN.memo}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_PapersBigTopic_CheckProperty4Update(pobjcc_PapersBigTopicEN: clscc_PapersBigTopicEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicId) == false && GetStrLen(pobjcc_PapersBigTopicEN.papersBigTopicId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[试卷大题目Id(papersBigTopicId)]的长度不能超过8(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.papersBigTopicId}(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicName) == false && GetStrLen(pobjcc_PapersBigTopicEN.papersBigTopicName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[试卷大题目名称(papersBigTopicName)]的长度不能超过50(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.papersBigTopicName}(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.topicDescription) == false && GetStrLen(pobjcc_PapersBigTopicEN.topicDescription) > 100)
{
 throw new Error(`(errid:Watl000416)字段[标题描述(topicDescription)]的长度不能超过100(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.topicDescription}(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.courseExamPaperId) == false && GetStrLen(pobjcc_PapersBigTopicEN.courseExamPaperId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.courseExamPaperId}(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.questionTypeId) == false && GetStrLen(pobjcc_PapersBigTopicEN.questionTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[题目类型Id(questionTypeId)]的长度不能超过2(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.questionTypeId}(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.updDate) == false && GetStrLen(pobjcc_PapersBigTopicEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.updDate}(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.updUser) == false && GetStrLen(pobjcc_PapersBigTopicEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.updUser}(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.memo) == false && GetStrLen(pobjcc_PapersBigTopicEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 试卷大题目(cc_PapersBigTopic))!值:${pobjcc_PapersBigTopicEN.memo}(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicId) == false && undefined !== pobjcc_PapersBigTopicEN.papersBigTopicId && tzDataType.isString(pobjcc_PapersBigTopicEN.papersBigTopicId) === false)
{
 throw new Error(`(errid:Watl000417)字段[试卷大题目Id(papersBigTopicId)]的值:[${pobjcc_PapersBigTopicEN.papersBigTopicId}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.papersBigTopicName) == false && undefined !== pobjcc_PapersBigTopicEN.papersBigTopicName && tzDataType.isString(pobjcc_PapersBigTopicEN.papersBigTopicName) === false)
{
 throw new Error(`(errid:Watl000417)字段[试卷大题目名称(papersBigTopicName)]的值:[${pobjcc_PapersBigTopicEN.papersBigTopicName}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.topicDescription) == false && undefined !== pobjcc_PapersBigTopicEN.topicDescription && tzDataType.isString(pobjcc_PapersBigTopicEN.topicDescription) === false)
{
 throw new Error(`(errid:Watl000417)字段[标题描述(topicDescription)]的值:[${pobjcc_PapersBigTopicEN.topicDescription}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (null != pobjcc_PapersBigTopicEN.topicScores && undefined !== pobjcc_PapersBigTopicEN.topicScores && tzDataType.isNumber(pobjcc_PapersBigTopicEN.topicScores) === false)
{
 throw new Error(`(errid:Watl000417)字段[大题得分(topicScores)]的值:[${pobjcc_PapersBigTopicEN.topicScores}], 非法,应该为数值型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.courseExamPaperId) == false && undefined !== pobjcc_PapersBigTopicEN.courseExamPaperId && tzDataType.isString(pobjcc_PapersBigTopicEN.courseExamPaperId) === false)
{
 throw new Error(`(errid:Watl000417)字段[考卷流水号(courseExamPaperId)]的值:[${pobjcc_PapersBigTopicEN.courseExamPaperId}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.questionTypeId) == false && undefined !== pobjcc_PapersBigTopicEN.questionTypeId && tzDataType.isString(pobjcc_PapersBigTopicEN.questionTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目类型Id(questionTypeId)]的值:[${pobjcc_PapersBigTopicEN.questionTypeId}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (null != pobjcc_PapersBigTopicEN.isShow && undefined !== pobjcc_PapersBigTopicEN.isShow && tzDataType.isBoolean(pobjcc_PapersBigTopicEN.isShow) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否启用(isShow)]的值:[${pobjcc_PapersBigTopicEN.isShow}], 非法,应该为布尔型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (null != pobjcc_PapersBigTopicEN.orderNum && undefined !== pobjcc_PapersBigTopicEN.orderNum && tzDataType.isNumber(pobjcc_PapersBigTopicEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjcc_PapersBigTopicEN.orderNum}], 非法,应该为数值型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.updDate) == false && undefined !== pobjcc_PapersBigTopicEN.updDate && tzDataType.isString(pobjcc_PapersBigTopicEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_PapersBigTopicEN.updDate}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.updUser) == false && undefined !== pobjcc_PapersBigTopicEN.updUser && tzDataType.isString(pobjcc_PapersBigTopicEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjcc_PapersBigTopicEN.updUser}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_PapersBigTopicEN.memo) == false && undefined !== pobjcc_PapersBigTopicEN.memo && tzDataType.isString(pobjcc_PapersBigTopicEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_PapersBigTopicEN.memo}], 非法,应该为字符型(In 试卷大题目(cc_PapersBigTopic))!(clscc_PapersBigTopicBL:CheckProperty4Update)`);
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
export  function cc_PapersBigTopic_GetJSONStrByObj (pobjcc_PapersBigTopicEN: clscc_PapersBigTopicEN): string
{
pobjcc_PapersBigTopicEN.sfUpdFldSetStr = pobjcc_PapersBigTopicEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_PapersBigTopicEN);
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
export  function cc_PapersBigTopic_GetObjLstByJSONStr (strJSON: string): Array<clscc_PapersBigTopicEN>
{
let arrcc_PapersBigTopicObjLst = new Array<clscc_PapersBigTopicEN>();
if (strJSON === "")
{
return arrcc_PapersBigTopicObjLst;
}
try
{
arrcc_PapersBigTopicObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_PapersBigTopicObjLst;
}
return arrcc_PapersBigTopicObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_PapersBigTopicObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_PapersBigTopic_GetObjLstByJSONObjLst (arrcc_PapersBigTopicObjLstS: Array<clscc_PapersBigTopicEN>): Array<clscc_PapersBigTopicEN>
{
const arrcc_PapersBigTopicObjLst = new Array<clscc_PapersBigTopicEN>();
for (const objInFor of arrcc_PapersBigTopicObjLstS) {
const obj1 = cc_PapersBigTopic_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_PapersBigTopicObjLst.push(obj1);
}
return arrcc_PapersBigTopicObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_PapersBigTopic_GetObjByJSONStr (strJSON: string): clscc_PapersBigTopicEN
{
let pobjcc_PapersBigTopicEN = new clscc_PapersBigTopicEN();
if (strJSON === "")
{
return pobjcc_PapersBigTopicEN;
}
try
{
pobjcc_PapersBigTopicEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_PapersBigTopicEN;
}
return pobjcc_PapersBigTopicEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_PapersBigTopic_GetCombineCondition(objcc_PapersBigTopicCond: clscc_PapersBigTopicEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_PapersBigTopicId) == true)
{
const strComparisonOpPapersBigTopicId:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_PapersBigTopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_PapersBigTopicEN.con_PapersBigTopicId, objcc_PapersBigTopicCond.papersBigTopicId, strComparisonOpPapersBigTopicId);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_PapersBigTopicName) == true)
{
const strComparisonOpPapersBigTopicName:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_PapersBigTopicName];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_PapersBigTopicEN.con_PapersBigTopicName, objcc_PapersBigTopicCond.papersBigTopicName, strComparisonOpPapersBigTopicName);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_TopicDescription) == true)
{
const strComparisonOpTopicDescription:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_TopicDescription];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_PapersBigTopicEN.con_TopicDescription, objcc_PapersBigTopicCond.topicDescription, strComparisonOpTopicDescription);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_TopicScores) == true)
{
const strComparisonOpTopicScores:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_TopicScores];
strWhereCond += Format(" And {0} {2} {1}", clscc_PapersBigTopicEN.con_TopicScores, objcc_PapersBigTopicCond.topicScores, strComparisonOpTopicScores);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_CourseExamPaperId) == true)
{
const strComparisonOpCourseExamPaperId:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_CourseExamPaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_PapersBigTopicEN.con_CourseExamPaperId, objcc_PapersBigTopicCond.courseExamPaperId, strComparisonOpCourseExamPaperId);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_QuestionTypeId) == true)
{
const strComparisonOpQuestionTypeId:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_QuestionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_PapersBigTopicEN.con_QuestionTypeId, objcc_PapersBigTopicCond.questionTypeId, strComparisonOpQuestionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_IsShow) == true)
{
if (objcc_PapersBigTopicCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_PapersBigTopicEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_PapersBigTopicEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clscc_PapersBigTopicEN.con_OrderNum, objcc_PapersBigTopicCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_PapersBigTopicEN.con_UpdDate, objcc_PapersBigTopicCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_PapersBigTopicEN.con_UpdUser, objcc_PapersBigTopicCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objcc_PapersBigTopicCond.dicFldComparisonOp, clscc_PapersBigTopicEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_PapersBigTopicCond.dicFldComparisonOp[clscc_PapersBigTopicEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_PapersBigTopicEN.con_Memo, objcc_PapersBigTopicCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_PapersBigTopic(试卷大题目),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPapersBigTopicName: 试卷大题目名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_PapersBigTopic_GetUniCondStr(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PapersBigTopicName = '{0}'", objcc_PapersBigTopicEN.papersBigTopicName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_PapersBigTopic(试卷大题目),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPapersBigTopicName: 试卷大题目名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_PapersBigTopic_GetUniCondStr4Update(objcc_PapersBigTopicEN: clscc_PapersBigTopicEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and PapersBigTopicId <> '{0}'", objcc_PapersBigTopicEN.papersBigTopicId);
 strWhereCond +=  Format(" and PapersBigTopicName = '{0}'", objcc_PapersBigTopicEN.papersBigTopicName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_PapersBigTopicENS:源对象
 * @param objcc_PapersBigTopicENT:目标对象
*/
export  function cc_PapersBigTopic_CopyObjTo(objcc_PapersBigTopicENS: clscc_PapersBigTopicEN , objcc_PapersBigTopicENT: clscc_PapersBigTopicEN ): void 
{
objcc_PapersBigTopicENT.papersBigTopicId = objcc_PapersBigTopicENS.papersBigTopicId; //试卷大题目Id
objcc_PapersBigTopicENT.papersBigTopicName = objcc_PapersBigTopicENS.papersBigTopicName; //试卷大题目名称
objcc_PapersBigTopicENT.topicDescription = objcc_PapersBigTopicENS.topicDescription; //标题描述
objcc_PapersBigTopicENT.topicScores = objcc_PapersBigTopicENS.topicScores; //大题得分
objcc_PapersBigTopicENT.courseExamPaperId = objcc_PapersBigTopicENS.courseExamPaperId; //考卷流水号
objcc_PapersBigTopicENT.questionTypeId = objcc_PapersBigTopicENS.questionTypeId; //题目类型Id
objcc_PapersBigTopicENT.isShow = objcc_PapersBigTopicENS.isShow; //是否启用
objcc_PapersBigTopicENT.orderNum = objcc_PapersBigTopicENS.orderNum; //序号
objcc_PapersBigTopicENT.updDate = objcc_PapersBigTopicENS.updDate; //修改日期
objcc_PapersBigTopicENT.updUser = objcc_PapersBigTopicENS.updUser; //修改人
objcc_PapersBigTopicENT.memo = objcc_PapersBigTopicENS.memo; //备注
objcc_PapersBigTopicENT.sfUpdFldSetStr = objcc_PapersBigTopicENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_PapersBigTopicENS:源对象
 * @param objcc_PapersBigTopicENT:目标对象
*/
export  function cc_PapersBigTopic_GetObjFromJsonObj(objcc_PapersBigTopicENS: clscc_PapersBigTopicEN): clscc_PapersBigTopicEN 
{
 const objcc_PapersBigTopicENT: clscc_PapersBigTopicEN = new clscc_PapersBigTopicEN();
ObjectAssign(objcc_PapersBigTopicENT, objcc_PapersBigTopicENS);
 return objcc_PapersBigTopicENT;
}