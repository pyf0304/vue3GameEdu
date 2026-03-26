
 /**
 * 类名:clscc_CourseExamPaperRelationshipWApi
 * 表名:cc_CourseExamPaperRelationship(01120076)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:11
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
 * 题目与试卷关系(cc_CourseExamPaperRelationship)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clscc_CourseExamPaperRelationshipEN } from "@/ts/L0Entity/Knowledges/clscc_CourseExamPaperRelationshipEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cc_CourseExamPaperRelationship_Controller = "cc_CourseExamPaperRelationshipApi";
 export const cc_CourseExamPaperRelationship_ConstructorName = "cc_CourseExamPaperRelationship";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function cc_CourseExamPaperRelationship_GetObjBymIdAsync(lngmId: number): Promise<clscc_CourseExamPaperRelationshipEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clscc_CourseExamPaperRelationshipWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const objcc_CourseExamPaperRelationship = cc_CourseExamPaperRelationship_GetObjFromJsonObj(returnObj);
return objcc_CourseExamPaperRelationship;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  function cc_CourseExamPaperRelationship_SortFunDefa(a:clscc_CourseExamPaperRelationshipEN , b:clscc_CourseExamPaperRelationshipEN): number 
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
export  function cc_CourseExamPaperRelationship_SortFunDefa2Fld(a:clscc_CourseExamPaperRelationshipEN , b:clscc_CourseExamPaperRelationshipEN): number 
{
if (a.courseExamPaperId == b.courseExamPaperId) return a.courseId.localeCompare(b.courseId);
else return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
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
export  function cc_CourseExamPaperRelationship_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_CourseExamPaperRelationshipEN.con_mId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return a.mId-b.mId;
}
case clscc_CourseExamPaperRelationshipEN.con_CourseExamPaperId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
}
case clscc_CourseExamPaperRelationshipEN.con_CourseId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clscc_CourseExamPaperRelationshipEN.con_QuestionId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return a.questionId-b.questionId;
}
case clscc_CourseExamPaperRelationshipEN.con_UserId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clscc_CourseExamPaperRelationshipEN.con_StartTime:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (a.startTime == null) return -1;
if (b.startTime == null) return 1;
return a.startTime.localeCompare(b.startTime);
}
case clscc_CourseExamPaperRelationshipEN.con_PapersBigTopicId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (a.papersBigTopicId == null) return -1;
if (b.papersBigTopicId == null) return 1;
return a.papersBigTopicId.localeCompare(b.papersBigTopicId);
}
case clscc_CourseExamPaperRelationshipEN.con_TopicOrderNum:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return a.topicOrderNum-b.topicOrderNum;
}
case clscc_CourseExamPaperRelationshipEN.con_OrderNum:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return a.orderNum-b.orderNum;
}
case clscc_CourseExamPaperRelationshipEN.con_UpdDate:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clscc_CourseExamPaperRelationshipEN.con_UpdUser:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clscc_CourseExamPaperRelationshipEN.con_Memo:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseExamPaperRelationship]中不存在!(in ${ cc_CourseExamPaperRelationship_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_CourseExamPaperRelationshipEN.con_mId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return b.mId-a.mId;
}
case clscc_CourseExamPaperRelationshipEN.con_CourseExamPaperId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return b.courseExamPaperId.localeCompare(a.courseExamPaperId);
}
case clscc_CourseExamPaperRelationshipEN.con_CourseId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clscc_CourseExamPaperRelationshipEN.con_QuestionId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return b.questionId-a.questionId;
}
case clscc_CourseExamPaperRelationshipEN.con_UserId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clscc_CourseExamPaperRelationshipEN.con_StartTime:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (b.startTime == null) return -1;
if (a.startTime == null) return 1;
return b.startTime.localeCompare(a.startTime);
}
case clscc_CourseExamPaperRelationshipEN.con_PapersBigTopicId:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (b.papersBigTopicId == null) return -1;
if (a.papersBigTopicId == null) return 1;
return b.papersBigTopicId.localeCompare(a.papersBigTopicId);
}
case clscc_CourseExamPaperRelationshipEN.con_TopicOrderNum:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return b.topicOrderNum-a.topicOrderNum;
}
case clscc_CourseExamPaperRelationshipEN.con_OrderNum:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
return b.orderNum-a.orderNum;
}
case clscc_CourseExamPaperRelationshipEN.con_UpdDate:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clscc_CourseExamPaperRelationshipEN.con_UpdUser:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clscc_CourseExamPaperRelationshipEN.con_Memo:
return (a: clscc_CourseExamPaperRelationshipEN, b: clscc_CourseExamPaperRelationshipEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseExamPaperRelationship]中不存在!(in ${ cc_CourseExamPaperRelationship_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_CourseExamPaperRelationship_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_CourseExamPaperRelationshipEN.con_mId:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.mId === value;
}
case clscc_CourseExamPaperRelationshipEN.con_CourseExamPaperId:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.courseExamPaperId === value;
}
case clscc_CourseExamPaperRelationshipEN.con_CourseId:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.courseId === value;
}
case clscc_CourseExamPaperRelationshipEN.con_QuestionId:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.questionId === value;
}
case clscc_CourseExamPaperRelationshipEN.con_UserId:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.userId === value;
}
case clscc_CourseExamPaperRelationshipEN.con_StartTime:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.startTime === value;
}
case clscc_CourseExamPaperRelationshipEN.con_PapersBigTopicId:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.papersBigTopicId === value;
}
case clscc_CourseExamPaperRelationshipEN.con_TopicOrderNum:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.topicOrderNum === value;
}
case clscc_CourseExamPaperRelationshipEN.con_OrderNum:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.orderNum === value;
}
case clscc_CourseExamPaperRelationshipEN.con_UpdDate:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.updDate === value;
}
case clscc_CourseExamPaperRelationshipEN.con_UpdUser:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.updUser === value;
}
case clscc_CourseExamPaperRelationshipEN.con_Memo:
return (obj: clscc_CourseExamPaperRelationshipEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseExamPaperRelationship]中不存在!(in ${ cc_CourseExamPaperRelationship_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[cc_CourseExamPaperRelationship__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseExamPaperRelationship_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetFirstObjAsync(strWhereCond: string): Promise<clscc_CourseExamPaperRelationshipEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const objcc_CourseExamPaperRelationship = cc_CourseExamPaperRelationship_GetObjFromJsonObj(returnObj);
return objcc_CourseExamPaperRelationship;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_CourseExamPaperRelationshipEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseExamPaperRelationship_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clscc_CourseExamPaperRelationshipEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseExamPaperRelationship_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_CourseExamPaperRelationshipEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseExamPaperRelationship_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_CourseExamPaperRelationshipEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseExamPaperRelationship_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_CourseExamPaperRelationshipEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseExamPaperRelationshipEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseExamPaperRelationship_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_Delcc_CourseExamPaperRelationshipsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_CourseExamPaperRelationshipsAsync";
const strAction = "Delcc_CourseExamPaperRelationships";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_Delcc_CourseExamPaperRelationshipsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_CourseExamPaperRelationshipsByCondAsync";
const strAction = "Delcc_CourseExamPaperRelationshipsByCond";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseExamPaperRelationshipEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseExamPaperRelationship_AddNewRecordAsync(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_CourseExamPaperRelationshipEN);
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseExamPaperRelationshipEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_AddNewObjSave(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_CourseExamPaperRelationship_CheckPropertyNew(objcc_CourseExamPaperRelationshipEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseExamPaperRelationship_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseExamPaperRelationship_CheckUniCond4Add(objcc_CourseExamPaperRelationshipEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await cc_CourseExamPaperRelationship_AddNewRecordAsync(objcc_CourseExamPaperRelationshipEN);
if (returnBool == true)
{
//cc_CourseExamPaperRelationship_ReFreshCache();
}
else
{
const strInfo = `添加[题目与试卷关系(cc_CourseExamPaperRelationship)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objcc_CourseExamPaperRelationshipEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_CourseExamPaperRelationship_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_CourseExamPaperRelationship_CheckUniCond4Add(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseExamPaperRelationship_GetUniCondStr(objcc_CourseExamPaperRelationshipEN);
const bolIsExistCondition = await cc_CourseExamPaperRelationship_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseExamPaperRelationship_CheckUniCond4Update(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseExamPaperRelationship_GetUniCondStr4Update(objcc_CourseExamPaperRelationshipEN);
const bolIsExistCondition = await cc_CourseExamPaperRelationship_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseExamPaperRelationship_UpdateObjSave(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr = objcc_CourseExamPaperRelationshipEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_CourseExamPaperRelationshipEN.mId == 0 || objcc_CourseExamPaperRelationshipEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_CourseExamPaperRelationship_CheckProperty4Update(objcc_CourseExamPaperRelationshipEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseExamPaperRelationship_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseExamPaperRelationship_CheckUniCond4Update(objcc_CourseExamPaperRelationshipEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_CourseExamPaperRelationship_UpdateRecordAsync(objcc_CourseExamPaperRelationshipEN);
if (returnBool == true)
{
//cc_CourseExamPaperRelationship_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_CourseExamPaperRelationship_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_CourseExamPaperRelationshipEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_CourseExamPaperRelationship_AddNewRecordWithReturnKeyAsync(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseExamPaperRelationshipEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseExamPaperRelationshipEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseExamPaperRelationship_UpdateRecordAsync(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === undefined || objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === null || objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseExamPaperRelationshipEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseExamPaperRelationshipEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseExamPaperRelationshipEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseExamPaperRelationship_EditRecordExAsync(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === undefined || objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === null || objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseExamPaperRelationshipEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseExamPaperRelationshipEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseExamPaperRelationshipEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseExamPaperRelationship_UpdateWithConditionAsync(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === undefined || objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === null || objcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseExamPaperRelationshipEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);
objcc_CourseExamPaperRelationshipEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseExamPaperRelationshipEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  async function cc_CourseExamPaperRelationship_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_CourseExamPaperRelationship_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseExamPaperRelationship_ConstructorName, strThisFuncName);
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
export  function cc_CourseExamPaperRelationship_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_CourseExamPaperRelationship_CheckPropertyNew(pobjcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) === true 
 || pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[考卷流水号]不能为空(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseId) === true 
 || pobjcc_CourseExamPaperRelationshipEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (null === pobjcc_CourseExamPaperRelationshipEN.questionId 
 || pobjcc_CourseExamPaperRelationshipEN.questionId != null && pobjcc_CourseExamPaperRelationshipEN.questionId.toString()  ===  ""
 || pobjcc_CourseExamPaperRelationshipEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[题目Id]不能为空(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (null === pobjcc_CourseExamPaperRelationshipEN.orderNum 
 || pobjcc_CourseExamPaperRelationshipEN.orderNum != null && pobjcc_CourseExamPaperRelationshipEN.orderNum.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[序号]不能为空(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId}(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseId) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.courseId}(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.userId) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.userId}(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.startTime) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.startTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[开始时间(s)(startTime)]的长度不能超过20(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.startTime}(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[试卷大题目Id(papersBigTopicId)]的长度不能超过8(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId}(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.updDate) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.updDate}(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.updUser) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.updUser}(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.memo) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.memo}(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_CourseExamPaperRelationshipEN.mId && undefined !== pobjcc_CourseExamPaperRelationshipEN.mId && tzDataType.isNumber(pobjcc_CourseExamPaperRelationshipEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.mId}], 非法,应该为数值型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) === false)
{
 throw new Error(`(errid:Watl000414)字段[考卷流水号(courseExamPaperId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseId) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.courseId && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.courseId}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseExamPaperRelationshipEN.questionId && undefined !== pobjcc_CourseExamPaperRelationshipEN.questionId && tzDataType.isNumber(pobjcc_CourseExamPaperRelationshipEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.questionId}], 非法,应该为数值型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.userId) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.userId && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.userId}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.startTime) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.startTime && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.startTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[开始时间(s)(startTime)]的值:[${pobjcc_CourseExamPaperRelationshipEN.startTime}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) === false)
{
 throw new Error(`(errid:Watl000414)字段[试卷大题目Id(papersBigTopicId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseExamPaperRelationshipEN.topicOrderNum && undefined !== pobjcc_CourseExamPaperRelationshipEN.topicOrderNum && tzDataType.isNumber(pobjcc_CourseExamPaperRelationshipEN.topicOrderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[TopicOrderNum(topicOrderNum)]的值:[${pobjcc_CourseExamPaperRelationshipEN.topicOrderNum}], 非法,应该为数值型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseExamPaperRelationshipEN.orderNum && undefined !== pobjcc_CourseExamPaperRelationshipEN.orderNum && tzDataType.isNumber(pobjcc_CourseExamPaperRelationshipEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjcc_CourseExamPaperRelationshipEN.orderNum}], 非法,应该为数值型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.updDate) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.updDate && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_CourseExamPaperRelationshipEN.updDate}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.updUser) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.updUser && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjcc_CourseExamPaperRelationshipEN.updUser}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.memo) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.memo && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_CourseExamPaperRelationshipEN.memo}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) == false && pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId != '[nuull]' && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) !=  8)
{
 throw ("(errid:Watl000415)字段[考卷流水号]作为外键字段,长度应该为8(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseId) == false && pobjcc_CourseExamPaperRelationshipEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) == false && pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId != '[nuull]' && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) !=  8)
{
 throw ("(errid:Watl000415)字段[试卷大题目Id]作为外键字段,长度应该为8(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_CourseExamPaperRelationship_CheckProperty4Update(pobjcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId}(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseId) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.courseId}(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.userId) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.userId}(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.startTime) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.startTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[开始时间(s)(startTime)]的长度不能超过20(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.startTime}(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[试卷大题目Id(papersBigTopicId)]的长度不能超过8(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId}(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.updDate) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.updDate}(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.updUser) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.updUser}(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.memo) == false && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 题目与试卷关系(cc_CourseExamPaperRelationship))!值:${pobjcc_CourseExamPaperRelationshipEN.memo}(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_CourseExamPaperRelationshipEN.mId && undefined !== pobjcc_CourseExamPaperRelationshipEN.mId && tzDataType.isNumber(pobjcc_CourseExamPaperRelationshipEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.mId}], 非法,应该为数值型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) === false)
{
 throw new Error(`(errid:Watl000417)字段[考卷流水号(courseExamPaperId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseId) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.courseId && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.courseId}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseExamPaperRelationshipEN.questionId && undefined !== pobjcc_CourseExamPaperRelationshipEN.questionId && tzDataType.isNumber(pobjcc_CourseExamPaperRelationshipEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.questionId}], 非法,应该为数值型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.userId) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.userId && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.userId}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.startTime) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.startTime && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.startTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[开始时间(s)(startTime)]的值:[${pobjcc_CourseExamPaperRelationshipEN.startTime}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) === false)
{
 throw new Error(`(errid:Watl000417)字段[试卷大题目Id(papersBigTopicId)]的值:[${pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseExamPaperRelationshipEN.topicOrderNum && undefined !== pobjcc_CourseExamPaperRelationshipEN.topicOrderNum && tzDataType.isNumber(pobjcc_CourseExamPaperRelationshipEN.topicOrderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[TopicOrderNum(topicOrderNum)]的值:[${pobjcc_CourseExamPaperRelationshipEN.topicOrderNum}], 非法,应该为数值型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseExamPaperRelationshipEN.orderNum && undefined !== pobjcc_CourseExamPaperRelationshipEN.orderNum && tzDataType.isNumber(pobjcc_CourseExamPaperRelationshipEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjcc_CourseExamPaperRelationshipEN.orderNum}], 非法,应该为数值型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.updDate) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.updDate && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_CourseExamPaperRelationshipEN.updDate}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.updUser) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.updUser && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjcc_CourseExamPaperRelationshipEN.updUser}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.memo) == false && undefined !== pobjcc_CourseExamPaperRelationshipEN.memo && tzDataType.isString(pobjcc_CourseExamPaperRelationshipEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_CourseExamPaperRelationshipEN.memo}], 非法,应该为字符型(In 题目与试卷关系(cc_CourseExamPaperRelationship))!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjcc_CourseExamPaperRelationshipEN.mId 
 || pobjcc_CourseExamPaperRelationshipEN.mId != null && pobjcc_CourseExamPaperRelationshipEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) == false && pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId != '[nuull]' && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.courseExamPaperId) !=  8)
{
 throw ("(errid:Watl000418)字段[考卷流水号]作为外键字段,长度应该为8(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.courseId) == false && pobjcc_CourseExamPaperRelationshipEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) == false && pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId != '[nuull]' && GetStrLen(pobjcc_CourseExamPaperRelationshipEN.papersBigTopicId) !=  8)
{
 throw ("(errid:Watl000418)字段[试卷大题目Id]作为外键字段,长度应该为8(In 题目与试卷关系)!(clscc_CourseExamPaperRelationshipBL:CheckPropertyNew)");
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
export  function cc_CourseExamPaperRelationship_GetJSONStrByObj (pobjcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN): string
{
pobjcc_CourseExamPaperRelationshipEN.sfUpdFldSetStr = pobjcc_CourseExamPaperRelationshipEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_CourseExamPaperRelationshipEN);
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
export  function cc_CourseExamPaperRelationship_GetObjLstByJSONStr (strJSON: string): Array<clscc_CourseExamPaperRelationshipEN>
{
let arrcc_CourseExamPaperRelationshipObjLst = new Array<clscc_CourseExamPaperRelationshipEN>();
if (strJSON === "")
{
return arrcc_CourseExamPaperRelationshipObjLst;
}
try
{
arrcc_CourseExamPaperRelationshipObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_CourseExamPaperRelationshipObjLst;
}
return arrcc_CourseExamPaperRelationshipObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_CourseExamPaperRelationshipObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_CourseExamPaperRelationship_GetObjLstByJSONObjLst (arrcc_CourseExamPaperRelationshipObjLstS: Array<clscc_CourseExamPaperRelationshipEN>): Array<clscc_CourseExamPaperRelationshipEN>
{
const arrcc_CourseExamPaperRelationshipObjLst = new Array<clscc_CourseExamPaperRelationshipEN>();
for (const objInFor of arrcc_CourseExamPaperRelationshipObjLstS) {
const obj1 = cc_CourseExamPaperRelationship_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_CourseExamPaperRelationshipObjLst.push(obj1);
}
return arrcc_CourseExamPaperRelationshipObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_CourseExamPaperRelationship_GetObjByJSONStr (strJSON: string): clscc_CourseExamPaperRelationshipEN
{
let pobjcc_CourseExamPaperRelationshipEN = new clscc_CourseExamPaperRelationshipEN();
if (strJSON === "")
{
return pobjcc_CourseExamPaperRelationshipEN;
}
try
{
pobjcc_CourseExamPaperRelationshipEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_CourseExamPaperRelationshipEN;
}
return pobjcc_CourseExamPaperRelationshipEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_CourseExamPaperRelationship_GetCombineCondition(objcc_CourseExamPaperRelationshipCond: clscc_CourseExamPaperRelationshipEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_mId) == true)
{
const strComparisonOpmId:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseExamPaperRelationshipEN.con_mId, objcc_CourseExamPaperRelationshipCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_CourseExamPaperId) == true)
{
const strComparisonOpCourseExamPaperId:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_CourseExamPaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseExamPaperRelationshipEN.con_CourseExamPaperId, objcc_CourseExamPaperRelationshipCond.courseExamPaperId, strComparisonOpCourseExamPaperId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseExamPaperRelationshipEN.con_CourseId, objcc_CourseExamPaperRelationshipCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseExamPaperRelationshipEN.con_QuestionId, objcc_CourseExamPaperRelationshipCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseExamPaperRelationshipEN.con_UserId, objcc_CourseExamPaperRelationshipCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_StartTime) == true)
{
const strComparisonOpStartTime:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_StartTime];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseExamPaperRelationshipEN.con_StartTime, objcc_CourseExamPaperRelationshipCond.startTime, strComparisonOpStartTime);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_PapersBigTopicId) == true)
{
const strComparisonOpPapersBigTopicId:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_PapersBigTopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseExamPaperRelationshipEN.con_PapersBigTopicId, objcc_CourseExamPaperRelationshipCond.papersBigTopicId, strComparisonOpPapersBigTopicId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_TopicOrderNum) == true)
{
const strComparisonOpTopicOrderNum:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_TopicOrderNum];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseExamPaperRelationshipEN.con_TopicOrderNum, objcc_CourseExamPaperRelationshipCond.topicOrderNum, strComparisonOpTopicOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseExamPaperRelationshipEN.con_OrderNum, objcc_CourseExamPaperRelationshipCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseExamPaperRelationshipEN.con_UpdDate, objcc_CourseExamPaperRelationshipCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseExamPaperRelationshipEN.con_UpdUser, objcc_CourseExamPaperRelationshipCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp, clscc_CourseExamPaperRelationshipEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_CourseExamPaperRelationshipCond.dicFldComparisonOp[clscc_CourseExamPaperRelationshipEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseExamPaperRelationshipEN.con_Memo, objcc_CourseExamPaperRelationshipCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseExamPaperRelationship(题目与试卷关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseExamPaperId: 考卷流水号(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseExamPaperRelationship_GetUniCondStr(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseExamPaperId = '{0}'", objcc_CourseExamPaperRelationshipEN.courseExamPaperId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objcc_CourseExamPaperRelationshipEN.questionId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseExamPaperRelationship(题目与试卷关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseExamPaperId: 考卷流水号(要求唯一的字段)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseExamPaperRelationship_GetUniCondStr4Update(objcc_CourseExamPaperRelationshipEN: clscc_CourseExamPaperRelationshipEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objcc_CourseExamPaperRelationshipEN.mId);
 strWhereCond +=  Format(" and CourseExamPaperId = '{0}'", objcc_CourseExamPaperRelationshipEN.courseExamPaperId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objcc_CourseExamPaperRelationshipEN.questionId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_CourseExamPaperRelationshipENS:源对象
 * @param objcc_CourseExamPaperRelationshipENT:目标对象
*/
export  function cc_CourseExamPaperRelationship_CopyObjTo(objcc_CourseExamPaperRelationshipENS: clscc_CourseExamPaperRelationshipEN , objcc_CourseExamPaperRelationshipENT: clscc_CourseExamPaperRelationshipEN ): void 
{
objcc_CourseExamPaperRelationshipENT.mId = objcc_CourseExamPaperRelationshipENS.mId; //mId
objcc_CourseExamPaperRelationshipENT.courseExamPaperId = objcc_CourseExamPaperRelationshipENS.courseExamPaperId; //考卷流水号
objcc_CourseExamPaperRelationshipENT.courseId = objcc_CourseExamPaperRelationshipENS.courseId; //课程Id
objcc_CourseExamPaperRelationshipENT.questionId = objcc_CourseExamPaperRelationshipENS.questionId; //题目Id
objcc_CourseExamPaperRelationshipENT.userId = objcc_CourseExamPaperRelationshipENS.userId; //用户ID
objcc_CourseExamPaperRelationshipENT.startTime = objcc_CourseExamPaperRelationshipENS.startTime; //开始时间(s)
objcc_CourseExamPaperRelationshipENT.papersBigTopicId = objcc_CourseExamPaperRelationshipENS.papersBigTopicId; //试卷大题目Id
objcc_CourseExamPaperRelationshipENT.topicOrderNum = objcc_CourseExamPaperRelationshipENS.topicOrderNum; //TopicOrderNum
objcc_CourseExamPaperRelationshipENT.orderNum = objcc_CourseExamPaperRelationshipENS.orderNum; //序号
objcc_CourseExamPaperRelationshipENT.updDate = objcc_CourseExamPaperRelationshipENS.updDate; //修改日期
objcc_CourseExamPaperRelationshipENT.updUser = objcc_CourseExamPaperRelationshipENS.updUser; //修改人
objcc_CourseExamPaperRelationshipENT.memo = objcc_CourseExamPaperRelationshipENS.memo; //备注
objcc_CourseExamPaperRelationshipENT.sfUpdFldSetStr = objcc_CourseExamPaperRelationshipENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_CourseExamPaperRelationshipENS:源对象
 * @param objcc_CourseExamPaperRelationshipENT:目标对象
*/
export  function cc_CourseExamPaperRelationship_GetObjFromJsonObj(objcc_CourseExamPaperRelationshipENS: clscc_CourseExamPaperRelationshipEN): clscc_CourseExamPaperRelationshipEN 
{
 const objcc_CourseExamPaperRelationshipENT: clscc_CourseExamPaperRelationshipEN = new clscc_CourseExamPaperRelationshipEN();
ObjectAssign(objcc_CourseExamPaperRelationshipENT, objcc_CourseExamPaperRelationshipENS);
 return objcc_CourseExamPaperRelationshipENT;
}