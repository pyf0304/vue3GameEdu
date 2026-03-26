
 /**
 * 类名:clsge_InspectProcessWApi
 * 表名:ge_InspectProcess(01120910)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:20
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
 * 检查过程表(ge_InspectProcess)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsge_InspectProcessEN } from "@/ts/L0Entity/GameLearn/clsge_InspectProcessEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_InspectProcess_Controller = "ge_InspectProcessApi";
 export const ge_InspectProcess_ConstructorName = "ge_InspectProcess";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strInspectId:关键字
 * @returns 对象
 **/
export  async function ge_InspectProcess_GetObjByInspectIdAsync(strInspectId: string): Promise<clsge_InspectProcessEN|null>  
{
const strThisFuncName = "GetObjByInspectIdAsync";

if (IsNullOrEmpty(strInspectId) == true)
{
  const strMsg = Format("参数:[strInspectId]不能为空!(In clsge_InspectProcessWApi.GetObjByInspectIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strInspectId.length != 10)
{
const strMsg = Format("缓存分类变量:[strInspectId]的长度:[{0}]不正确!(clsge_InspectProcessWApi.GetObjByInspectIdAsync)", strInspectId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByInspectId";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strInspectId,
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
const objge_InspectProcess = ge_InspectProcess_GetObjFromJsonObj(returnObj);
return objge_InspectProcess;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByInspectIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByInspectIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function ge_InspectProcess_SortFunDefa(a:clsge_InspectProcessEN , b:clsge_InspectProcessEN): number 
{
return a.inspectId.localeCompare(b.inspectId);
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
export  function ge_InspectProcess_SortFunDefa2Fld(a:clsge_InspectProcessEN , b:clsge_InspectProcessEN): number 
{
if (a.operationTypeId == b.operationTypeId) return a.questionId - b.questionId;
else return a.operationTypeId.localeCompare(b.operationTypeId);
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
export  function ge_InspectProcess_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_InspectProcessEN.con_InspectId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return a.inspectId.localeCompare(b.inspectId);
}
case clsge_InspectProcessEN.con_OperationTypeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return a.operationTypeId.localeCompare(b.operationTypeId);
}
case clsge_InspectProcessEN.con_QuestionId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return a.questionId-b.questionId;
}
case clsge_InspectProcessEN.con_CourseId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_InspectProcessEN.con_ControlId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.controlId == null) return -1;
if (b.controlId == null) return 1;
return a.controlId.localeCompare(b.controlId);
}
case clsge_InspectProcessEN.con_ControlTypeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.controlTypeId == null) return -1;
if (b.controlTypeId == null) return 1;
return a.controlTypeId.localeCompare(b.controlTypeId);
}
case clsge_InspectProcessEN.con_CheckMemo:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.checkMemo == null) return -1;
if (b.checkMemo == null) return 1;
return a.checkMemo.localeCompare(b.checkMemo);
}
case clsge_InspectProcessEN.con_ControlProp:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.controlProp == null) return -1;
if (b.controlProp == null) return 1;
return a.controlProp.localeCompare(b.controlProp);
}
case clsge_InspectProcessEN.con_AttributeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.attributeId == null) return -1;
if (b.attributeId == null) return 1;
return a.attributeId.localeCompare(b.attributeId);
}
case clsge_InspectProcessEN.con_ControlValue:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.controlValue == null) return -1;
if (b.controlValue == null) return 1;
return a.controlValue.localeCompare(b.controlValue);
}
case clsge_InspectProcessEN.con_OrderNum:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return a.orderNum-b.orderNum;
}
case clsge_InspectProcessEN.con_UpdUser:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_InspectProcessEN.con_UpdDate:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_InspectProcessEN.con_Memo:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsge_InspectProcessEN.con_ControlClass:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.controlClass == null) return -1;
if (b.controlClass == null) return 1;
return a.controlClass.localeCompare(b.controlClass);
}
case clsge_InspectProcessEN.con_EventTypeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.eventTypeId == null) return -1;
if (b.eventTypeId == null) return 1;
return a.eventTypeId.localeCompare(b.eventTypeId);
}
case clsge_InspectProcessEN.con_ExaminationTypeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.examinationTypeId == null) return -1;
if (b.examinationTypeId == null) return 1;
return a.examinationTypeId.localeCompare(b.examinationTypeId);
}
case clsge_InspectProcessEN.con_FunctionName:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (a.functionName == null) return -1;
if (b.functionName == null) return 1;
return a.functionName.localeCompare(b.functionName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_InspectProcess]中不存在!(in ${ ge_InspectProcess_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_InspectProcessEN.con_InspectId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return b.inspectId.localeCompare(a.inspectId);
}
case clsge_InspectProcessEN.con_OperationTypeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return b.operationTypeId.localeCompare(a.operationTypeId);
}
case clsge_InspectProcessEN.con_QuestionId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return b.questionId-a.questionId;
}
case clsge_InspectProcessEN.con_CourseId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_InspectProcessEN.con_ControlId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.controlId == null) return -1;
if (a.controlId == null) return 1;
return b.controlId.localeCompare(a.controlId);
}
case clsge_InspectProcessEN.con_ControlTypeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.controlTypeId == null) return -1;
if (a.controlTypeId == null) return 1;
return b.controlTypeId.localeCompare(a.controlTypeId);
}
case clsge_InspectProcessEN.con_CheckMemo:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.checkMemo == null) return -1;
if (a.checkMemo == null) return 1;
return b.checkMemo.localeCompare(a.checkMemo);
}
case clsge_InspectProcessEN.con_ControlProp:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.controlProp == null) return -1;
if (a.controlProp == null) return 1;
return b.controlProp.localeCompare(a.controlProp);
}
case clsge_InspectProcessEN.con_AttributeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.attributeId == null) return -1;
if (a.attributeId == null) return 1;
return b.attributeId.localeCompare(a.attributeId);
}
case clsge_InspectProcessEN.con_ControlValue:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.controlValue == null) return -1;
if (a.controlValue == null) return 1;
return b.controlValue.localeCompare(a.controlValue);
}
case clsge_InspectProcessEN.con_OrderNum:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
return b.orderNum-a.orderNum;
}
case clsge_InspectProcessEN.con_UpdUser:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_InspectProcessEN.con_UpdDate:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_InspectProcessEN.con_Memo:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsge_InspectProcessEN.con_ControlClass:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.controlClass == null) return -1;
if (a.controlClass == null) return 1;
return b.controlClass.localeCompare(a.controlClass);
}
case clsge_InspectProcessEN.con_EventTypeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.eventTypeId == null) return -1;
if (a.eventTypeId == null) return 1;
return b.eventTypeId.localeCompare(a.eventTypeId);
}
case clsge_InspectProcessEN.con_ExaminationTypeId:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.examinationTypeId == null) return -1;
if (a.examinationTypeId == null) return 1;
return b.examinationTypeId.localeCompare(a.examinationTypeId);
}
case clsge_InspectProcessEN.con_FunctionName:
return (a: clsge_InspectProcessEN, b: clsge_InspectProcessEN) => {
if (b.functionName == null) return -1;
if (a.functionName == null) return 1;
return b.functionName.localeCompare(a.functionName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_InspectProcess]中不存在!(in ${ ge_InspectProcess_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByInspectIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ge_InspectProcess_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_InspectProcessEN.con_InspectId:
return (obj: clsge_InspectProcessEN) => {
return obj.inspectId === value;
}
case clsge_InspectProcessEN.con_OperationTypeId:
return (obj: clsge_InspectProcessEN) => {
return obj.operationTypeId === value;
}
case clsge_InspectProcessEN.con_QuestionId:
return (obj: clsge_InspectProcessEN) => {
return obj.questionId === value;
}
case clsge_InspectProcessEN.con_CourseId:
return (obj: clsge_InspectProcessEN) => {
return obj.courseId === value;
}
case clsge_InspectProcessEN.con_ControlId:
return (obj: clsge_InspectProcessEN) => {
return obj.controlId === value;
}
case clsge_InspectProcessEN.con_ControlTypeId:
return (obj: clsge_InspectProcessEN) => {
return obj.controlTypeId === value;
}
case clsge_InspectProcessEN.con_CheckMemo:
return (obj: clsge_InspectProcessEN) => {
return obj.checkMemo === value;
}
case clsge_InspectProcessEN.con_ControlProp:
return (obj: clsge_InspectProcessEN) => {
return obj.controlProp === value;
}
case clsge_InspectProcessEN.con_AttributeId:
return (obj: clsge_InspectProcessEN) => {
return obj.attributeId === value;
}
case clsge_InspectProcessEN.con_ControlValue:
return (obj: clsge_InspectProcessEN) => {
return obj.controlValue === value;
}
case clsge_InspectProcessEN.con_OrderNum:
return (obj: clsge_InspectProcessEN) => {
return obj.orderNum === value;
}
case clsge_InspectProcessEN.con_UpdUser:
return (obj: clsge_InspectProcessEN) => {
return obj.updUser === value;
}
case clsge_InspectProcessEN.con_UpdDate:
return (obj: clsge_InspectProcessEN) => {
return obj.updDate === value;
}
case clsge_InspectProcessEN.con_Memo:
return (obj: clsge_InspectProcessEN) => {
return obj.memo === value;
}
case clsge_InspectProcessEN.con_ControlClass:
return (obj: clsge_InspectProcessEN) => {
return obj.controlClass === value;
}
case clsge_InspectProcessEN.con_EventTypeId:
return (obj: clsge_InspectProcessEN) => {
return obj.eventTypeId === value;
}
case clsge_InspectProcessEN.con_ExaminationTypeId:
return (obj: clsge_InspectProcessEN) => {
return obj.examinationTypeId === value;
}
case clsge_InspectProcessEN.con_FunctionName:
return (obj: clsge_InspectProcessEN) => {
return obj.functionName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_InspectProcess]中不存在!(in ${ ge_InspectProcess_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_InspectProcess__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_InspectProcess_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetFirstObjAsync(strWhereCond: string): Promise<clsge_InspectProcessEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const objge_InspectProcess = ge_InspectProcess_GetObjFromJsonObj(returnObj);
return objge_InspectProcess;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_InspectProcessEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_InspectProcess_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param arrInspectId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_InspectProcess_GetObjLstByInspectIdLstAsync(arrInspectId: Array<string>): Promise<Array<clsge_InspectProcessEN>>  
{
const strThisFuncName = "GetObjLstByInspectIdLstAsync";
const strAction = "GetObjLstByInspectIdLst";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrInspectId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_InspectProcess_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByInspectIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ge_InspectProcess_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_InspectProcessEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_InspectProcess_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_InspectProcessEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_InspectProcess_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_InspectProcessEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_InspectProcessEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_InspectProcess_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param strInspectId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_InspectProcess_DelRecordAsync(strInspectId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strInspectId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param arrInspectId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_InspectProcess_Delge_InspectProcesssAsync(arrInspectId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_InspectProcesssAsync";
const strAction = "Delge_InspectProcesss";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrInspectId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_Delge_InspectProcesssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_InspectProcesssByCondAsync";
const strAction = "Delge_InspectProcesssByCond";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_InspectProcess_AddNewRecordAsync(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_InspectProcessEN);
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_InspectProcessEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_InspectProcess_AddNewRecordWithMaxIdAsync(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_InspectProcessEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_InspectProcess_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_InspectProcess_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_InspectProcessEN);
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_InspectProcess_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_InspectProcessEN);
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_AddNewObjSave(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_InspectProcess_CheckPropertyNew(objge_InspectProcessEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_InspectProcess_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_InspectProcess_CheckUniCond4Add(objge_InspectProcessEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_InspectProcess_AddNewRecordWithMaxIdAsync(objge_InspectProcessEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//ge_InspectProcess_ReFreshCache();
}
else
{
const strInfo = `添加[检查过程表(ge_InspectProcess)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_InspectProcess_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_InspectProcess_CheckUniCond4Add(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<boolean>{
const strUniquenessCondition = ge_InspectProcess_GetUniCondStr(objge_InspectProcessEN);
const bolIsExistCondition = await ge_InspectProcess_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_InspectProcess_CheckUniCond4Update(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<boolean>{
const strUniquenessCondition = ge_InspectProcess_GetUniCondStr4Update(objge_InspectProcessEN);
const bolIsExistCondition = await ge_InspectProcess_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_InspectProcess_UpdateObjSave(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_InspectProcessEN.sfUpdFldSetStr = objge_InspectProcessEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_InspectProcessEN.inspectId == "" || objge_InspectProcessEN.inspectId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_InspectProcess_CheckProperty4Update(objge_InspectProcessEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_InspectProcess_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_InspectProcess_CheckUniCond4Update(objge_InspectProcessEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_InspectProcess_UpdateRecordAsync(objge_InspectProcessEN);
if (returnBool == true)
{
//ge_InspectProcess_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_InspectProcess_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_InspectProcess_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_InspectProcessEN);
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_InspectProcess_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objge_InspectProcessEN);
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_InspectProcessEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_InspectProcess_AddNewRecordWithReturnKeyAsync(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_InspectProcessEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_InspectProcess_UpdateRecordAsync(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_InspectProcessEN.sfUpdFldSetStr === undefined || objge_InspectProcessEN.sfUpdFldSetStr === null || objge_InspectProcessEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_InspectProcessEN.inspectId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_InspectProcessEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param objge_InspectProcessEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_InspectProcess_EditRecordExAsync(objge_InspectProcessEN: clsge_InspectProcessEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_InspectProcessEN.sfUpdFldSetStr === undefined || objge_InspectProcessEN.sfUpdFldSetStr === null || objge_InspectProcessEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_InspectProcessEN.inspectId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_InspectProcessEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param objge_InspectProcessEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_InspectProcess_UpdateWithConditionAsync(objge_InspectProcessEN: clsge_InspectProcessEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_InspectProcessEN.sfUpdFldSetStr === undefined || objge_InspectProcessEN.sfUpdFldSetStr === null || objge_InspectProcessEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_InspectProcessEN.inspectId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);
objge_InspectProcessEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_InspectProcessEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
 * @param strInspectId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_InspectProcess_IsExistAsync(strInspectId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strInspectId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  async function ge_InspectProcess_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_InspectProcess_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_InspectProcess_ConstructorName, strThisFuncName);
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
export  function ge_InspectProcess_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function ge_InspectProcess_(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const strCondition = `1=1`;
const arrObjLstSel = await ge_InspectProcess_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_InspectProcessEN.con_InspectId, clsge_InspectProcessEN.con_OperationTypeId, "检查过程表...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ge_InspectProcess_GetArrge_InspectProcess()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrge_InspectProcess = new Array<clsge_InspectProcessEN>();
const strCondition = `1=1`;
const arrObjLstSel = await ge_InspectProcess_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsge_InspectProcessEN();
obj0.inspectId = '0';
obj0.operationTypeId = '选检查过程表...';
arrge_InspectProcess.push(obj0);
arrObjLstSel.forEach(x => arrge_InspectProcess.push(x));
return arrge_InspectProcess;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_InspectProcess_CheckPropertyNew(pobjge_InspectProcessEN: clsge_InspectProcessEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_InspectProcessEN.operationTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[操作类型ID]不能为空(In 检查过程表)!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (null === pobjge_InspectProcessEN.questionId 
 || pobjge_InspectProcessEN.questionId != null && pobjge_InspectProcessEN.questionId.toString()  ===  ""
 || pobjge_InspectProcessEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[题目Id]不能为空(In 检查过程表)!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.courseId) === true 
 || pobjge_InspectProcessEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 检查过程表)!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_InspectProcessEN.inspectId) == false && GetStrLen(pobjge_InspectProcessEN.inspectId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[检查Id(inspectId)]的长度不能超过10(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.inspectId}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.operationTypeId) == false && GetStrLen(pobjge_InspectProcessEN.operationTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.operationTypeId}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.courseId) == false && GetStrLen(pobjge_InspectProcessEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.courseId}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlId) == false && GetStrLen(pobjge_InspectProcessEN.controlId) > 50)
{
 throw new Error(`(errid:Watl000413)字段[控件Id(controlId)]的长度不能超过50(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlId}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlTypeId) == false && GetStrLen(pobjge_InspectProcessEN.controlTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[控件Id(controlTypeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlTypeId}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.checkMemo) == false && GetStrLen(pobjge_InspectProcessEN.checkMemo) > 100)
{
 throw new Error(`(errid:Watl000413)字段[检查描述(checkMemo)]的长度不能超过100(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.checkMemo}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlProp) == false && GetStrLen(pobjge_InspectProcessEN.controlProp) > 50)
{
 throw new Error(`(errid:Watl000413)字段[控件属性(controlProp)]的长度不能超过50(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlProp}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.attributeId) == false && GetStrLen(pobjge_InspectProcessEN.attributeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[控件属性Id(attributeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.attributeId}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlValue) == false && GetStrLen(pobjge_InspectProcessEN.controlValue) > 100)
{
 throw new Error(`(errid:Watl000413)字段[控件值(controlValue)]的长度不能超过100(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlValue}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.updUser) == false && GetStrLen(pobjge_InspectProcessEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.updUser}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.updDate) == false && GetStrLen(pobjge_InspectProcessEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.updDate}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.memo) == false && GetStrLen(pobjge_InspectProcessEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.memo}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlClass) == false && GetStrLen(pobjge_InspectProcessEN.controlClass) > 100)
{
 throw new Error(`(errid:Watl000413)字段[控件样式(controlClass)]的长度不能超过100(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlClass}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.eventTypeId) == false && GetStrLen(pobjge_InspectProcessEN.eventTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[事件Id(eventTypeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.eventTypeId}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.examinationTypeId) == false && GetStrLen(pobjge_InspectProcessEN.examinationTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[检查类型Id(examinationTypeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.examinationTypeId}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.functionName) == false && GetStrLen(pobjge_InspectProcessEN.functionName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[函数名(functionName)]的长度不能超过100(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.functionName}(clsge_InspectProcessBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_InspectProcessEN.inspectId) == false && undefined !== pobjge_InspectProcessEN.inspectId && tzDataType.isString(pobjge_InspectProcessEN.inspectId) === false)
{
 throw new Error(`(errid:Watl000414)字段[检查Id(inspectId)]的值:[${pobjge_InspectProcessEN.inspectId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.operationTypeId) == false && undefined !== pobjge_InspectProcessEN.operationTypeId && tzDataType.isString(pobjge_InspectProcessEN.operationTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[操作类型ID(operationTypeId)]的值:[${pobjge_InspectProcessEN.operationTypeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (null != pobjge_InspectProcessEN.questionId && undefined !== pobjge_InspectProcessEN.questionId && tzDataType.isNumber(pobjge_InspectProcessEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjge_InspectProcessEN.questionId}], 非法,应该为数值型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.courseId) == false && undefined !== pobjge_InspectProcessEN.courseId && tzDataType.isString(pobjge_InspectProcessEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_InspectProcessEN.courseId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlId) == false && undefined !== pobjge_InspectProcessEN.controlId && tzDataType.isString(pobjge_InspectProcessEN.controlId) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件Id(controlId)]的值:[${pobjge_InspectProcessEN.controlId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlTypeId) == false && undefined !== pobjge_InspectProcessEN.controlTypeId && tzDataType.isString(pobjge_InspectProcessEN.controlTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件Id(controlTypeId)]的值:[${pobjge_InspectProcessEN.controlTypeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.checkMemo) == false && undefined !== pobjge_InspectProcessEN.checkMemo && tzDataType.isString(pobjge_InspectProcessEN.checkMemo) === false)
{
 throw new Error(`(errid:Watl000414)字段[检查描述(checkMemo)]的值:[${pobjge_InspectProcessEN.checkMemo}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlProp) == false && undefined !== pobjge_InspectProcessEN.controlProp && tzDataType.isString(pobjge_InspectProcessEN.controlProp) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件属性(controlProp)]的值:[${pobjge_InspectProcessEN.controlProp}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.attributeId) == false && undefined !== pobjge_InspectProcessEN.attributeId && tzDataType.isString(pobjge_InspectProcessEN.attributeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件属性Id(attributeId)]的值:[${pobjge_InspectProcessEN.attributeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlValue) == false && undefined !== pobjge_InspectProcessEN.controlValue && tzDataType.isString(pobjge_InspectProcessEN.controlValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件值(controlValue)]的值:[${pobjge_InspectProcessEN.controlValue}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (null != pobjge_InspectProcessEN.orderNum && undefined !== pobjge_InspectProcessEN.orderNum && tzDataType.isNumber(pobjge_InspectProcessEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjge_InspectProcessEN.orderNum}], 非法,应该为数值型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.updUser) == false && undefined !== pobjge_InspectProcessEN.updUser && tzDataType.isString(pobjge_InspectProcessEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_InspectProcessEN.updUser}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.updDate) == false && undefined !== pobjge_InspectProcessEN.updDate && tzDataType.isString(pobjge_InspectProcessEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_InspectProcessEN.updDate}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.memo) == false && undefined !== pobjge_InspectProcessEN.memo && tzDataType.isString(pobjge_InspectProcessEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_InspectProcessEN.memo}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlClass) == false && undefined !== pobjge_InspectProcessEN.controlClass && tzDataType.isString(pobjge_InspectProcessEN.controlClass) === false)
{
 throw new Error(`(errid:Watl000414)字段[控件样式(controlClass)]的值:[${pobjge_InspectProcessEN.controlClass}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.eventTypeId) == false && undefined !== pobjge_InspectProcessEN.eventTypeId && tzDataType.isString(pobjge_InspectProcessEN.eventTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[事件Id(eventTypeId)]的值:[${pobjge_InspectProcessEN.eventTypeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.examinationTypeId) == false && undefined !== pobjge_InspectProcessEN.examinationTypeId && tzDataType.isString(pobjge_InspectProcessEN.examinationTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[检查类型Id(examinationTypeId)]的值:[${pobjge_InspectProcessEN.examinationTypeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.functionName) == false && undefined !== pobjge_InspectProcessEN.functionName && tzDataType.isString(pobjge_InspectProcessEN.functionName) === false)
{
 throw new Error(`(errid:Watl000414)字段[函数名(functionName)]的值:[${pobjge_InspectProcessEN.functionName}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_InspectProcess_CheckProperty4Update(pobjge_InspectProcessEN: clsge_InspectProcessEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_InspectProcessEN.inspectId) == false && GetStrLen(pobjge_InspectProcessEN.inspectId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[检查Id(inspectId)]的长度不能超过10(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.inspectId}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.operationTypeId) == false && GetStrLen(pobjge_InspectProcessEN.operationTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.operationTypeId}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.courseId) == false && GetStrLen(pobjge_InspectProcessEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.courseId}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlId) == false && GetStrLen(pobjge_InspectProcessEN.controlId) > 50)
{
 throw new Error(`(errid:Watl000416)字段[控件Id(controlId)]的长度不能超过50(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlId}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlTypeId) == false && GetStrLen(pobjge_InspectProcessEN.controlTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[控件Id(controlTypeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlTypeId}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.checkMemo) == false && GetStrLen(pobjge_InspectProcessEN.checkMemo) > 100)
{
 throw new Error(`(errid:Watl000416)字段[检查描述(checkMemo)]的长度不能超过100(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.checkMemo}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlProp) == false && GetStrLen(pobjge_InspectProcessEN.controlProp) > 50)
{
 throw new Error(`(errid:Watl000416)字段[控件属性(controlProp)]的长度不能超过50(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlProp}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.attributeId) == false && GetStrLen(pobjge_InspectProcessEN.attributeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[控件属性Id(attributeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.attributeId}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlValue) == false && GetStrLen(pobjge_InspectProcessEN.controlValue) > 100)
{
 throw new Error(`(errid:Watl000416)字段[控件值(controlValue)]的长度不能超过100(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlValue}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.updUser) == false && GetStrLen(pobjge_InspectProcessEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.updUser}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.updDate) == false && GetStrLen(pobjge_InspectProcessEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.updDate}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.memo) == false && GetStrLen(pobjge_InspectProcessEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.memo}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlClass) == false && GetStrLen(pobjge_InspectProcessEN.controlClass) > 100)
{
 throw new Error(`(errid:Watl000416)字段[控件样式(controlClass)]的长度不能超过100(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.controlClass}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.eventTypeId) == false && GetStrLen(pobjge_InspectProcessEN.eventTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[事件Id(eventTypeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.eventTypeId}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.examinationTypeId) == false && GetStrLen(pobjge_InspectProcessEN.examinationTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[检查类型Id(examinationTypeId)]的长度不能超过4(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.examinationTypeId}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.functionName) == false && GetStrLen(pobjge_InspectProcessEN.functionName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[函数名(functionName)]的长度不能超过100(In 检查过程表(ge_InspectProcess))!值:${pobjge_InspectProcessEN.functionName}(clsge_InspectProcessBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_InspectProcessEN.inspectId) == false && undefined !== pobjge_InspectProcessEN.inspectId && tzDataType.isString(pobjge_InspectProcessEN.inspectId) === false)
{
 throw new Error(`(errid:Watl000417)字段[检查Id(inspectId)]的值:[${pobjge_InspectProcessEN.inspectId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.operationTypeId) == false && undefined !== pobjge_InspectProcessEN.operationTypeId && tzDataType.isString(pobjge_InspectProcessEN.operationTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[操作类型ID(operationTypeId)]的值:[${pobjge_InspectProcessEN.operationTypeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (null != pobjge_InspectProcessEN.questionId && undefined !== pobjge_InspectProcessEN.questionId && tzDataType.isNumber(pobjge_InspectProcessEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjge_InspectProcessEN.questionId}], 非法,应该为数值型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.courseId) == false && undefined !== pobjge_InspectProcessEN.courseId && tzDataType.isString(pobjge_InspectProcessEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_InspectProcessEN.courseId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlId) == false && undefined !== pobjge_InspectProcessEN.controlId && tzDataType.isString(pobjge_InspectProcessEN.controlId) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件Id(controlId)]的值:[${pobjge_InspectProcessEN.controlId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlTypeId) == false && undefined !== pobjge_InspectProcessEN.controlTypeId && tzDataType.isString(pobjge_InspectProcessEN.controlTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件Id(controlTypeId)]的值:[${pobjge_InspectProcessEN.controlTypeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.checkMemo) == false && undefined !== pobjge_InspectProcessEN.checkMemo && tzDataType.isString(pobjge_InspectProcessEN.checkMemo) === false)
{
 throw new Error(`(errid:Watl000417)字段[检查描述(checkMemo)]的值:[${pobjge_InspectProcessEN.checkMemo}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlProp) == false && undefined !== pobjge_InspectProcessEN.controlProp && tzDataType.isString(pobjge_InspectProcessEN.controlProp) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件属性(controlProp)]的值:[${pobjge_InspectProcessEN.controlProp}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.attributeId) == false && undefined !== pobjge_InspectProcessEN.attributeId && tzDataType.isString(pobjge_InspectProcessEN.attributeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件属性Id(attributeId)]的值:[${pobjge_InspectProcessEN.attributeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlValue) == false && undefined !== pobjge_InspectProcessEN.controlValue && tzDataType.isString(pobjge_InspectProcessEN.controlValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件值(controlValue)]的值:[${pobjge_InspectProcessEN.controlValue}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (null != pobjge_InspectProcessEN.orderNum && undefined !== pobjge_InspectProcessEN.orderNum && tzDataType.isNumber(pobjge_InspectProcessEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjge_InspectProcessEN.orderNum}], 非法,应该为数值型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.updUser) == false && undefined !== pobjge_InspectProcessEN.updUser && tzDataType.isString(pobjge_InspectProcessEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_InspectProcessEN.updUser}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.updDate) == false && undefined !== pobjge_InspectProcessEN.updDate && tzDataType.isString(pobjge_InspectProcessEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_InspectProcessEN.updDate}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.memo) == false && undefined !== pobjge_InspectProcessEN.memo && tzDataType.isString(pobjge_InspectProcessEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_InspectProcessEN.memo}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.controlClass) == false && undefined !== pobjge_InspectProcessEN.controlClass && tzDataType.isString(pobjge_InspectProcessEN.controlClass) === false)
{
 throw new Error(`(errid:Watl000417)字段[控件样式(controlClass)]的值:[${pobjge_InspectProcessEN.controlClass}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.eventTypeId) == false && undefined !== pobjge_InspectProcessEN.eventTypeId && tzDataType.isString(pobjge_InspectProcessEN.eventTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[事件Id(eventTypeId)]的值:[${pobjge_InspectProcessEN.eventTypeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.examinationTypeId) == false && undefined !== pobjge_InspectProcessEN.examinationTypeId && tzDataType.isString(pobjge_InspectProcessEN.examinationTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[检查类型Id(examinationTypeId)]的值:[${pobjge_InspectProcessEN.examinationTypeId}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_InspectProcessEN.functionName) == false && undefined !== pobjge_InspectProcessEN.functionName && tzDataType.isString(pobjge_InspectProcessEN.functionName) === false)
{
 throw new Error(`(errid:Watl000417)字段[函数名(functionName)]的值:[${pobjge_InspectProcessEN.functionName}], 非法,应该为字符型(In 检查过程表(ge_InspectProcess))!(clsge_InspectProcessBL:CheckProperty4Update)`);
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
export  function ge_InspectProcess_GetJSONStrByObj (pobjge_InspectProcessEN: clsge_InspectProcessEN): string
{
pobjge_InspectProcessEN.sfUpdFldSetStr = pobjge_InspectProcessEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_InspectProcessEN);
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
export  function ge_InspectProcess_GetObjLstByJSONStr (strJSON: string): Array<clsge_InspectProcessEN>
{
let arrge_InspectProcessObjLst = new Array<clsge_InspectProcessEN>();
if (strJSON === "")
{
return arrge_InspectProcessObjLst;
}
try
{
arrge_InspectProcessObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_InspectProcessObjLst;
}
return arrge_InspectProcessObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_InspectProcessObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_InspectProcess_GetObjLstByJSONObjLst (arrge_InspectProcessObjLstS: Array<clsge_InspectProcessEN>): Array<clsge_InspectProcessEN>
{
const arrge_InspectProcessObjLst = new Array<clsge_InspectProcessEN>();
for (const objInFor of arrge_InspectProcessObjLstS) {
const obj1 = ge_InspectProcess_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_InspectProcessObjLst.push(obj1);
}
return arrge_InspectProcessObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_InspectProcess_GetObjByJSONStr (strJSON: string): clsge_InspectProcessEN
{
let pobjge_InspectProcessEN = new clsge_InspectProcessEN();
if (strJSON === "")
{
return pobjge_InspectProcessEN;
}
try
{
pobjge_InspectProcessEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_InspectProcessEN;
}
return pobjge_InspectProcessEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_InspectProcess_GetCombineCondition(objge_InspectProcessCond: clsge_InspectProcessEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_InspectId) == true)
{
const strComparisonOpInspectId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_InspectId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_InspectId, objge_InspectProcessCond.inspectId, strComparisonOpInspectId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_OperationTypeId) == true)
{
const strComparisonOpOperationTypeId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_OperationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_OperationTypeId, objge_InspectProcessCond.operationTypeId, strComparisonOpOperationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsge_InspectProcessEN.con_QuestionId, objge_InspectProcessCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_CourseId, objge_InspectProcessCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_ControlId) == true)
{
const strComparisonOpControlId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_ControlId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_ControlId, objge_InspectProcessCond.controlId, strComparisonOpControlId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_ControlTypeId) == true)
{
const strComparisonOpControlTypeId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_ControlTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_ControlTypeId, objge_InspectProcessCond.controlTypeId, strComparisonOpControlTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_CheckMemo) == true)
{
const strComparisonOpCheckMemo:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_CheckMemo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_CheckMemo, objge_InspectProcessCond.checkMemo, strComparisonOpCheckMemo);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_ControlProp) == true)
{
const strComparisonOpControlProp:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_ControlProp];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_ControlProp, objge_InspectProcessCond.controlProp, strComparisonOpControlProp);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_AttributeId) == true)
{
const strComparisonOpAttributeId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_AttributeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_AttributeId, objge_InspectProcessCond.attributeId, strComparisonOpAttributeId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_ControlValue) == true)
{
const strComparisonOpControlValue:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_ControlValue];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_ControlValue, objge_InspectProcessCond.controlValue, strComparisonOpControlValue);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_InspectProcessEN.con_OrderNum, objge_InspectProcessCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_UpdUser, objge_InspectProcessCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_UpdDate, objge_InspectProcessCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_Memo, objge_InspectProcessCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_ControlClass) == true)
{
const strComparisonOpControlClass:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_ControlClass];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_ControlClass, objge_InspectProcessCond.controlClass, strComparisonOpControlClass);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_EventTypeId) == true)
{
const strComparisonOpEventTypeId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_EventTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_EventTypeId, objge_InspectProcessCond.eventTypeId, strComparisonOpEventTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_ExaminationTypeId) == true)
{
const strComparisonOpExaminationTypeId:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_ExaminationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_ExaminationTypeId, objge_InspectProcessCond.examinationTypeId, strComparisonOpExaminationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_InspectProcessCond.dicFldComparisonOp, clsge_InspectProcessEN.con_FunctionName) == true)
{
const strComparisonOpFunctionName:string = objge_InspectProcessCond.dicFldComparisonOp[clsge_InspectProcessEN.con_FunctionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_InspectProcessEN.con_FunctionName, objge_InspectProcessCond.functionName, strComparisonOpFunctionName);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_InspectProcess(检查过程表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strInspectId: 检查Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_InspectProcess_GetUniCondStr(objge_InspectProcessEN: clsge_InspectProcessEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and InspectId = '{0}'", objge_InspectProcessEN.inspectId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_InspectProcess(检查过程表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strInspectId: 检查Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_InspectProcess_GetUniCondStr4Update(objge_InspectProcessEN: clsge_InspectProcessEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and InspectId <> '{0}'", objge_InspectProcessEN.inspectId);
 strWhereCond +=  Format(" and InspectId = '{0}'", objge_InspectProcessEN.inspectId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_InspectProcessENS:源对象
 * @param objge_InspectProcessENT:目标对象
*/
export  function ge_InspectProcess_CopyObjTo(objge_InspectProcessENS: clsge_InspectProcessEN , objge_InspectProcessENT: clsge_InspectProcessEN ): void 
{
objge_InspectProcessENT.inspectId = objge_InspectProcessENS.inspectId; //检查Id
objge_InspectProcessENT.operationTypeId = objge_InspectProcessENS.operationTypeId; //操作类型ID
objge_InspectProcessENT.questionId = objge_InspectProcessENS.questionId; //题目Id
objge_InspectProcessENT.courseId = objge_InspectProcessENS.courseId; //课程Id
objge_InspectProcessENT.controlId = objge_InspectProcessENS.controlId; //控件Id
objge_InspectProcessENT.controlTypeId = objge_InspectProcessENS.controlTypeId; //控件Id
objge_InspectProcessENT.checkMemo = objge_InspectProcessENS.checkMemo; //检查描述
objge_InspectProcessENT.controlProp = objge_InspectProcessENS.controlProp; //控件属性
objge_InspectProcessENT.attributeId = objge_InspectProcessENS.attributeId; //控件属性Id
objge_InspectProcessENT.controlValue = objge_InspectProcessENS.controlValue; //控件值
objge_InspectProcessENT.orderNum = objge_InspectProcessENS.orderNum; //序号
objge_InspectProcessENT.updUser = objge_InspectProcessENS.updUser; //修改人
objge_InspectProcessENT.updDate = objge_InspectProcessENS.updDate; //修改日期
objge_InspectProcessENT.memo = objge_InspectProcessENS.memo; //备注
objge_InspectProcessENT.controlClass = objge_InspectProcessENS.controlClass; //控件样式
objge_InspectProcessENT.eventTypeId = objge_InspectProcessENS.eventTypeId; //事件Id
objge_InspectProcessENT.examinationTypeId = objge_InspectProcessENS.examinationTypeId; //检查类型Id
objge_InspectProcessENT.functionName = objge_InspectProcessENS.functionName; //函数名
objge_InspectProcessENT.sfUpdFldSetStr = objge_InspectProcessENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_InspectProcessENS:源对象
 * @param objge_InspectProcessENT:目标对象
*/
export  function ge_InspectProcess_GetObjFromJsonObj(objge_InspectProcessENS: clsge_InspectProcessEN): clsge_InspectProcessEN 
{
 const objge_InspectProcessENT: clsge_InspectProcessEN = new clsge_InspectProcessEN();
ObjectAssign(objge_InspectProcessENT, objge_InspectProcessENS);
 return objge_InspectProcessENT;
}