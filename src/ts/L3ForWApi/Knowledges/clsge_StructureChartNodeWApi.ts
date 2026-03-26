
 /**
 * 类名:clsge_StructureChartNodeWApi
 * 表名:ge_StructureChartNode(01120894)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:27
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
 * 知识点结构图(ge_StructureChartNode)
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
import { clsge_StructureChartNodeEN } from "@/ts/L0Entity/Knowledges/clsge_StructureChartNodeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_StructureChartNode_Controller = "ge_StructureChartNodeApi";
 export const ge_StructureChartNode_ConstructorName = "ge_StructureChartNode";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strStructureNodeId:关键字
 * @returns 对象
 **/
export  async function ge_StructureChartNode_GetObjByStructureNodeIdAsync(strStructureNodeId: string): Promise<clsge_StructureChartNodeEN|null>  
{
const strThisFuncName = "GetObjByStructureNodeIdAsync";

if (IsNullOrEmpty(strStructureNodeId) == true)
{
  const strMsg = Format("参数:[strStructureNodeId]不能为空!(In clsge_StructureChartNodeWApi.GetObjByStructureNodeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureNodeId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureNodeId]的长度:[{0}]不正确!(clsge_StructureChartNodeWApi.GetObjByStructureNodeIdAsync)", strStructureNodeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByStructureNodeId";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strStructureNodeId,
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
const objge_StructureChartNode = ge_StructureChartNode_GetObjFromJsonObj(returnObj);
return objge_StructureChartNode;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByStructureNodeIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByStructureNodeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function ge_StructureChartNode_SortFunDefa(a:clsge_StructureChartNodeEN , b:clsge_StructureChartNodeEN): number 
{
return a.structureNodeId.localeCompare(b.structureNodeId);
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
export  function ge_StructureChartNode_SortFunDefa2Fld(a:clsge_StructureChartNodeEN , b:clsge_StructureChartNodeEN): number 
{
if (a.structureNodeName == b.structureNodeName) return a.updDate.localeCompare(b.updDate);
else return a.structureNodeName.localeCompare(b.structureNodeName);
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
export  function ge_StructureChartNode_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_StructureChartNodeEN.con_StructureNodeId:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return a.structureNodeId.localeCompare(b.structureNodeId);
}
case clsge_StructureChartNodeEN.con_StructureNodeName:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return a.structureNodeName.localeCompare(b.structureNodeName);
}
case clsge_StructureChartNodeEN.con_UpdDate:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_StructureChartNodeEN.con_UpdUser:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_StructureChartNodeEN.con_Memo:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsge_StructureChartNodeEN.con_ParentId:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return a.parentId.localeCompare(b.parentId);
}
case clsge_StructureChartNodeEN.con_IsRoot:
return (a: clsge_StructureChartNodeEN) => {
if (a.isRoot == true) return 1;
else return -1
}
case clsge_StructureChartNodeEN.con_background:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (a.background == null) return -1;
if (b.background == null) return 1;
return a.background.localeCompare(b.background);
}
case clsge_StructureChartNodeEN.con_foreground:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (a.foreground == null) return -1;
if (b.foreground == null) return 1;
return a.foreground.localeCompare(b.foreground);
}
case clsge_StructureChartNodeEN.con_StructureGraphId:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return a.structureGraphId.localeCompare(b.structureGraphId);
}
case clsge_StructureChartNodeEN.con_Direction:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (a.direction == null) return -1;
if (b.direction == null) return 1;
return a.direction.localeCompare(b.direction);
}
case clsge_StructureChartNodeEN.con_IsExpanded:
return (a: clsge_StructureChartNodeEN) => {
if (a.isExpanded == true) return 1;
else return -1
}
case clsge_StructureChartNodeEN.con_StructureSectionId:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (a.structureSectionId == null) return -1;
if (b.structureSectionId == null) return 1;
return a.structureSectionId.localeCompare(b.structureSectionId);
}
case clsge_StructureChartNodeEN.con_OrderNum:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return a.orderNum-b.orderNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureChartNode]中不存在!(in ${ ge_StructureChartNode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_StructureChartNodeEN.con_StructureNodeId:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return b.structureNodeId.localeCompare(a.structureNodeId);
}
case clsge_StructureChartNodeEN.con_StructureNodeName:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return b.structureNodeName.localeCompare(a.structureNodeName);
}
case clsge_StructureChartNodeEN.con_UpdDate:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_StructureChartNodeEN.con_UpdUser:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_StructureChartNodeEN.con_Memo:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsge_StructureChartNodeEN.con_ParentId:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return b.parentId.localeCompare(a.parentId);
}
case clsge_StructureChartNodeEN.con_IsRoot:
return (b: clsge_StructureChartNodeEN) => {
if (b.isRoot == true) return 1;
else return -1
}
case clsge_StructureChartNodeEN.con_background:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (b.background == null) return -1;
if (a.background == null) return 1;
return b.background.localeCompare(a.background);
}
case clsge_StructureChartNodeEN.con_foreground:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (b.foreground == null) return -1;
if (a.foreground == null) return 1;
return b.foreground.localeCompare(a.foreground);
}
case clsge_StructureChartNodeEN.con_StructureGraphId:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return b.structureGraphId.localeCompare(a.structureGraphId);
}
case clsge_StructureChartNodeEN.con_Direction:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (b.direction == null) return -1;
if (a.direction == null) return 1;
return b.direction.localeCompare(a.direction);
}
case clsge_StructureChartNodeEN.con_IsExpanded:
return (b: clsge_StructureChartNodeEN) => {
if (b.isExpanded == true) return 1;
else return -1
}
case clsge_StructureChartNodeEN.con_StructureSectionId:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
if (b.structureSectionId == null) return -1;
if (a.structureSectionId == null) return 1;
return b.structureSectionId.localeCompare(a.structureSectionId);
}
case clsge_StructureChartNodeEN.con_OrderNum:
return (a: clsge_StructureChartNodeEN, b: clsge_StructureChartNodeEN) => {
return b.orderNum-a.orderNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureChartNode]中不存在!(in ${ ge_StructureChartNode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByStructureNodeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ge_StructureChartNode_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_StructureChartNodeEN.con_StructureNodeId:
return (obj: clsge_StructureChartNodeEN) => {
return obj.structureNodeId === value;
}
case clsge_StructureChartNodeEN.con_StructureNodeName:
return (obj: clsge_StructureChartNodeEN) => {
return obj.structureNodeName === value;
}
case clsge_StructureChartNodeEN.con_UpdDate:
return (obj: clsge_StructureChartNodeEN) => {
return obj.updDate === value;
}
case clsge_StructureChartNodeEN.con_UpdUser:
return (obj: clsge_StructureChartNodeEN) => {
return obj.updUser === value;
}
case clsge_StructureChartNodeEN.con_Memo:
return (obj: clsge_StructureChartNodeEN) => {
return obj.memo === value;
}
case clsge_StructureChartNodeEN.con_ParentId:
return (obj: clsge_StructureChartNodeEN) => {
return obj.parentId === value;
}
case clsge_StructureChartNodeEN.con_IsRoot:
return (obj: clsge_StructureChartNodeEN) => {
return obj.isRoot === value;
}
case clsge_StructureChartNodeEN.con_background:
return (obj: clsge_StructureChartNodeEN) => {
return obj.background === value;
}
case clsge_StructureChartNodeEN.con_foreground:
return (obj: clsge_StructureChartNodeEN) => {
return obj.foreground === value;
}
case clsge_StructureChartNodeEN.con_StructureGraphId:
return (obj: clsge_StructureChartNodeEN) => {
return obj.structureGraphId === value;
}
case clsge_StructureChartNodeEN.con_Direction:
return (obj: clsge_StructureChartNodeEN) => {
return obj.direction === value;
}
case clsge_StructureChartNodeEN.con_IsExpanded:
return (obj: clsge_StructureChartNodeEN) => {
return obj.isExpanded === value;
}
case clsge_StructureChartNodeEN.con_StructureSectionId:
return (obj: clsge_StructureChartNodeEN) => {
return obj.structureSectionId === value;
}
case clsge_StructureChartNodeEN.con_OrderNum:
return (obj: clsge_StructureChartNodeEN) => {
return obj.orderNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureChartNode]中不存在!(in ${ ge_StructureChartNode_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_StructureChartNode__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureChartNode_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetFirstObjAsync(strWhereCond: string): Promise<clsge_StructureChartNodeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const objge_StructureChartNode = ge_StructureChartNode_GetObjFromJsonObj(returnObj);
return objge_StructureChartNode;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_StructureChartNodeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureChartNode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param arrStructureNodeId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_StructureChartNode_GetObjLstByStructureNodeIdLstAsync(arrStructureNodeId: Array<string>): Promise<Array<clsge_StructureChartNodeEN>>  
{
const strThisFuncName = "GetObjLstByStructureNodeIdLstAsync";
const strAction = "GetObjLstByStructureNodeIdLst";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrStructureNodeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureChartNode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByStructureNodeIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ge_StructureChartNode_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_StructureChartNodeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureChartNode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_StructureChartNodeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureChartNode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_StructureChartNodeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StructureChartNodeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureChartNode_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param strStructureNodeId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_StructureChartNode_DelRecordAsync(strStructureNodeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strStructureNodeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param arrStructureNodeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_StructureChartNode_Delge_StructureChartNodesAsync(arrStructureNodeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_StructureChartNodesAsync";
const strAction = "Delge_StructureChartNodes";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrStructureNodeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_Delge_StructureChartNodesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_StructureChartNodesByCondAsync";
const strAction = "Delge_StructureChartNodesByCond";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureChartNode_AddNewRecordAsync(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_StructureChartNodeEN);
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureChartNodeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureChartNode_AddNewRecordWithMaxIdAsync(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureChartNodeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureChartNode_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureChartNode_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_StructureChartNodeEN);
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureChartNode_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_StructureChartNodeEN);
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_AddNewObjSave(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_StructureChartNode_CheckPropertyNew(objge_StructureChartNodeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureChartNode_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureChartNode_CheckUniCond4Add(objge_StructureChartNodeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_StructureChartNode_AddNewRecordWithMaxIdAsync(objge_StructureChartNodeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//ge_StructureChartNode_ReFreshCache(objge_StructureChartNodeEN.structureGraphId);
}
else
{
const strInfo = `添加[知识点结构图(ge_StructureChartNode)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_StructureChartNode_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_StructureChartNode_CheckUniCond4Add(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureChartNode_GetUniCondStr(objge_StructureChartNodeEN);
const bolIsExistCondition = await ge_StructureChartNode_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureChartNode_CheckUniCond4Update(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureChartNode_GetUniCondStr4Update(objge_StructureChartNodeEN);
const bolIsExistCondition = await ge_StructureChartNode_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureChartNode_UpdateObjSave(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_StructureChartNodeEN.sfUpdFldSetStr = objge_StructureChartNodeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_StructureChartNodeEN.structureNodeId == "" || objge_StructureChartNodeEN.structureNodeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_StructureChartNode_CheckProperty4Update(objge_StructureChartNodeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureChartNode_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureChartNode_CheckUniCond4Update(objge_StructureChartNodeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_StructureChartNode_UpdateRecordAsync(objge_StructureChartNodeEN);
if (returnBool == true)
{
//ge_StructureChartNode_ReFreshCache(objge_StructureChartNodeEN.structureGraphId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_StructureChartNode_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureChartNode_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_StructureChartNodeEN);
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureChartNode_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objge_StructureChartNodeEN);
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_StructureChartNode_AddNewRecordWithReturnKeyAsync(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureChartNodeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureChartNode_UpdateRecordAsync(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_StructureChartNodeEN.sfUpdFldSetStr === undefined || objge_StructureChartNodeEN.sfUpdFldSetStr === null || objge_StructureChartNodeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureChartNodeEN.structureNodeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureChartNodeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureChartNode_EditRecordExAsync(objge_StructureChartNodeEN: clsge_StructureChartNodeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_StructureChartNodeEN.sfUpdFldSetStr === undefined || objge_StructureChartNodeEN.sfUpdFldSetStr === null || objge_StructureChartNodeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureChartNodeEN.structureNodeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureChartNodeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param objge_StructureChartNodeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureChartNode_UpdateWithConditionAsync(objge_StructureChartNodeEN: clsge_StructureChartNodeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_StructureChartNodeEN.sfUpdFldSetStr === undefined || objge_StructureChartNodeEN.sfUpdFldSetStr === null || objge_StructureChartNodeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureChartNodeEN.structureNodeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);
objge_StructureChartNodeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureChartNodeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
 * @param strStructureNodeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_StructureChartNode_IsExistAsync(strStructureNodeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strStructureNodeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  async function ge_StructureChartNode_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_StructureChartNode_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureChartNode_ConstructorName, strThisFuncName);
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
export  function ge_StructureChartNode_GetWebApiUrl(strController: string, strAction: string): string {
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

 * @param strStructureGraphId:
*/
export  async function ge_StructureChartNode_(objDiv: HTMLDivElement, strDdlName: string ,strStructureGraphId: string)
{

if (IsNullOrEmpty(strStructureGraphId) == true)
{
  const strMsg = Format("参数:[strStructureGraphId]不能为空！(In clsge_StructureChartNodeWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureGraphId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureGraphId]的长度:[{0}]不正确！(clsge_StructureChartNodeWApi.)", strStructureGraphId.length);
console.error(strMsg);
throw (strMsg);
}

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
const arrObjLstSel = await ge_StructureChartNode_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_StructureChartNodeEN.con_StructureNodeId, clsge_StructureChartNodeEN.con_StructureNodeName, "知识点结构图...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strStructureGraphId:
*/
export  async function ge_StructureChartNode_GetArrge_StructureChartNode(strStructureGraphId: string)
{

if (IsNullOrEmpty(strStructureGraphId) == true)
{
  const strMsg = Format("参数:[strStructureGraphId]不能为空！(In clsge_StructureChartNodeWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureGraphId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureGraphId]的长度:[{0}]不正确！(clsge_StructureChartNodeWApi.)", strStructureGraphId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrge_StructureChartNode = new Array<clsge_StructureChartNodeEN>();
const strCondition = `1=1`;
const arrObjLstSel = await ge_StructureChartNode_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsge_StructureChartNodeEN();
obj0.structureNodeId = '0';
obj0.structureNodeName = '选知识点结构图...';
arrge_StructureChartNode.push(obj0);
arrObjLstSel.forEach(x => arrge_StructureChartNode.push(x));
return arrge_StructureChartNode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureChartNode_CheckPropertyNew(pobjge_StructureChartNodeEN: clsge_StructureChartNodeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[结构名称]不能为空(In 知识点结构图)!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.parentId) === true )
{
 throw new Error(`(errid:Watl000411)字段[父节点Id]不能为空(In 知识点结构图)!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureGraphId) === true )
{
 throw new Error(`(errid:Watl000411)字段[知识图谱Id]不能为空(In 知识点结构图)!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeId) == false && GetStrLen(pobjge_StructureChartNodeEN.structureNodeId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[结构Id(structureNodeId)]的长度不能超过10(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.structureNodeId}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeName) == false && GetStrLen(pobjge_StructureChartNodeEN.structureNodeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[结构名称(structureNodeName)]的长度不能超过50(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.structureNodeName}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.updDate) == false && GetStrLen(pobjge_StructureChartNodeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.updDate}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.updUser) == false && GetStrLen(pobjge_StructureChartNodeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.updUser}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.memo) == false && GetStrLen(pobjge_StructureChartNodeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.memo}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.parentId) == false && GetStrLen(pobjge_StructureChartNodeEN.parentId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[父节点Id(parentId)]的长度不能超过10(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.parentId}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.background) == false && GetStrLen(pobjge_StructureChartNodeEN.background) > 50)
{
 throw new Error(`(errid:Watl000413)字段[背景色(background)]的长度不能超过50(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.background}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.foreground) == false && GetStrLen(pobjge_StructureChartNodeEN.foreground) > 50)
{
 throw new Error(`(errid:Watl000413)字段[背景字颜色(foreground)]的长度不能超过50(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.foreground}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureGraphId) == false && GetStrLen(pobjge_StructureChartNodeEN.structureGraphId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[知识图谱Id(structureGraphId)]的长度不能超过10(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.structureGraphId}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.direction) == false && GetStrLen(pobjge_StructureChartNodeEN.direction) > 50)
{
 throw new Error(`(errid:Watl000413)字段[方向(direction)]的长度不能超过50(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.direction}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureSectionId) == false && GetStrLen(pobjge_StructureChartNodeEN.structureSectionId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[结构章节Id(structureSectionId)]的长度不能超过10(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.structureSectionId}(clsge_StructureChartNodeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeId) == false && undefined !== pobjge_StructureChartNodeEN.structureNodeId && tzDataType.isString(pobjge_StructureChartNodeEN.structureNodeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[结构Id(structureNodeId)]的值:[${pobjge_StructureChartNodeEN.structureNodeId}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeName) == false && undefined !== pobjge_StructureChartNodeEN.structureNodeName && tzDataType.isString(pobjge_StructureChartNodeEN.structureNodeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[结构名称(structureNodeName)]的值:[${pobjge_StructureChartNodeEN.structureNodeName}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.updDate) == false && undefined !== pobjge_StructureChartNodeEN.updDate && tzDataType.isString(pobjge_StructureChartNodeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_StructureChartNodeEN.updDate}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.updUser) == false && undefined !== pobjge_StructureChartNodeEN.updUser && tzDataType.isString(pobjge_StructureChartNodeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_StructureChartNodeEN.updUser}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.memo) == false && undefined !== pobjge_StructureChartNodeEN.memo && tzDataType.isString(pobjge_StructureChartNodeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_StructureChartNodeEN.memo}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.parentId) == false && undefined !== pobjge_StructureChartNodeEN.parentId && tzDataType.isString(pobjge_StructureChartNodeEN.parentId) === false)
{
 throw new Error(`(errid:Watl000414)字段[父节点Id(parentId)]的值:[${pobjge_StructureChartNodeEN.parentId}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureChartNodeEN.isRoot && undefined !== pobjge_StructureChartNodeEN.isRoot && tzDataType.isBoolean(pobjge_StructureChartNodeEN.isRoot) === false)
{
 throw new Error(`(errid:Watl000414)字段[IsRoot(isRoot)]的值:[${pobjge_StructureChartNodeEN.isRoot}], 非法,应该为布尔型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.background) == false && undefined !== pobjge_StructureChartNodeEN.background && tzDataType.isString(pobjge_StructureChartNodeEN.background) === false)
{
 throw new Error(`(errid:Watl000414)字段[背景色(background)]的值:[${pobjge_StructureChartNodeEN.background}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.foreground) == false && undefined !== pobjge_StructureChartNodeEN.foreground && tzDataType.isString(pobjge_StructureChartNodeEN.foreground) === false)
{
 throw new Error(`(errid:Watl000414)字段[背景字颜色(foreground)]的值:[${pobjge_StructureChartNodeEN.foreground}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureGraphId) == false && undefined !== pobjge_StructureChartNodeEN.structureGraphId && tzDataType.isString(pobjge_StructureChartNodeEN.structureGraphId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识图谱Id(structureGraphId)]的值:[${pobjge_StructureChartNodeEN.structureGraphId}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.direction) == false && undefined !== pobjge_StructureChartNodeEN.direction && tzDataType.isString(pobjge_StructureChartNodeEN.direction) === false)
{
 throw new Error(`(errid:Watl000414)字段[方向(direction)]的值:[${pobjge_StructureChartNodeEN.direction}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureChartNodeEN.isExpanded && undefined !== pobjge_StructureChartNodeEN.isExpanded && tzDataType.isBoolean(pobjge_StructureChartNodeEN.isExpanded) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否扩展(isExpanded)]的值:[${pobjge_StructureChartNodeEN.isExpanded}], 非法,应该为布尔型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureSectionId) == false && undefined !== pobjge_StructureChartNodeEN.structureSectionId && tzDataType.isString(pobjge_StructureChartNodeEN.structureSectionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[结构章节Id(structureSectionId)]的值:[${pobjge_StructureChartNodeEN.structureSectionId}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureChartNodeEN.orderNum && undefined !== pobjge_StructureChartNodeEN.orderNum && tzDataType.isNumber(pobjge_StructureChartNodeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjge_StructureChartNodeEN.orderNum}], 非法,应该为数值型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureChartNode_CheckProperty4Update(pobjge_StructureChartNodeEN: clsge_StructureChartNodeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeId) == false && GetStrLen(pobjge_StructureChartNodeEN.structureNodeId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[结构Id(structureNodeId)]的长度不能超过10(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.structureNodeId}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeName) == false && GetStrLen(pobjge_StructureChartNodeEN.structureNodeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[结构名称(structureNodeName)]的长度不能超过50(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.structureNodeName}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.updDate) == false && GetStrLen(pobjge_StructureChartNodeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.updDate}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.updUser) == false && GetStrLen(pobjge_StructureChartNodeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.updUser}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.memo) == false && GetStrLen(pobjge_StructureChartNodeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.memo}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.parentId) == false && GetStrLen(pobjge_StructureChartNodeEN.parentId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[父节点Id(parentId)]的长度不能超过10(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.parentId}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.background) == false && GetStrLen(pobjge_StructureChartNodeEN.background) > 50)
{
 throw new Error(`(errid:Watl000416)字段[背景色(background)]的长度不能超过50(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.background}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.foreground) == false && GetStrLen(pobjge_StructureChartNodeEN.foreground) > 50)
{
 throw new Error(`(errid:Watl000416)字段[背景字颜色(foreground)]的长度不能超过50(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.foreground}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureGraphId) == false && GetStrLen(pobjge_StructureChartNodeEN.structureGraphId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[知识图谱Id(structureGraphId)]的长度不能超过10(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.structureGraphId}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.direction) == false && GetStrLen(pobjge_StructureChartNodeEN.direction) > 50)
{
 throw new Error(`(errid:Watl000416)字段[方向(direction)]的长度不能超过50(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.direction}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureSectionId) == false && GetStrLen(pobjge_StructureChartNodeEN.structureSectionId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[结构章节Id(structureSectionId)]的长度不能超过10(In 知识点结构图(ge_StructureChartNode))!值:${pobjge_StructureChartNodeEN.structureSectionId}(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeId) == false && undefined !== pobjge_StructureChartNodeEN.structureNodeId && tzDataType.isString(pobjge_StructureChartNodeEN.structureNodeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[结构Id(structureNodeId)]的值:[${pobjge_StructureChartNodeEN.structureNodeId}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureNodeName) == false && undefined !== pobjge_StructureChartNodeEN.structureNodeName && tzDataType.isString(pobjge_StructureChartNodeEN.structureNodeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[结构名称(structureNodeName)]的值:[${pobjge_StructureChartNodeEN.structureNodeName}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.updDate) == false && undefined !== pobjge_StructureChartNodeEN.updDate && tzDataType.isString(pobjge_StructureChartNodeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_StructureChartNodeEN.updDate}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.updUser) == false && undefined !== pobjge_StructureChartNodeEN.updUser && tzDataType.isString(pobjge_StructureChartNodeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_StructureChartNodeEN.updUser}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.memo) == false && undefined !== pobjge_StructureChartNodeEN.memo && tzDataType.isString(pobjge_StructureChartNodeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_StructureChartNodeEN.memo}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.parentId) == false && undefined !== pobjge_StructureChartNodeEN.parentId && tzDataType.isString(pobjge_StructureChartNodeEN.parentId) === false)
{
 throw new Error(`(errid:Watl000417)字段[父节点Id(parentId)]的值:[${pobjge_StructureChartNodeEN.parentId}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureChartNodeEN.isRoot && undefined !== pobjge_StructureChartNodeEN.isRoot && tzDataType.isBoolean(pobjge_StructureChartNodeEN.isRoot) === false)
{
 throw new Error(`(errid:Watl000417)字段[IsRoot(isRoot)]的值:[${pobjge_StructureChartNodeEN.isRoot}], 非法,应该为布尔型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.background) == false && undefined !== pobjge_StructureChartNodeEN.background && tzDataType.isString(pobjge_StructureChartNodeEN.background) === false)
{
 throw new Error(`(errid:Watl000417)字段[背景色(background)]的值:[${pobjge_StructureChartNodeEN.background}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.foreground) == false && undefined !== pobjge_StructureChartNodeEN.foreground && tzDataType.isString(pobjge_StructureChartNodeEN.foreground) === false)
{
 throw new Error(`(errid:Watl000417)字段[背景字颜色(foreground)]的值:[${pobjge_StructureChartNodeEN.foreground}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureGraphId) == false && undefined !== pobjge_StructureChartNodeEN.structureGraphId && tzDataType.isString(pobjge_StructureChartNodeEN.structureGraphId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识图谱Id(structureGraphId)]的值:[${pobjge_StructureChartNodeEN.structureGraphId}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.direction) == false && undefined !== pobjge_StructureChartNodeEN.direction && tzDataType.isString(pobjge_StructureChartNodeEN.direction) === false)
{
 throw new Error(`(errid:Watl000417)字段[方向(direction)]的值:[${pobjge_StructureChartNodeEN.direction}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureChartNodeEN.isExpanded && undefined !== pobjge_StructureChartNodeEN.isExpanded && tzDataType.isBoolean(pobjge_StructureChartNodeEN.isExpanded) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否扩展(isExpanded)]的值:[${pobjge_StructureChartNodeEN.isExpanded}], 非法,应该为布尔型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureChartNodeEN.structureSectionId) == false && undefined !== pobjge_StructureChartNodeEN.structureSectionId && tzDataType.isString(pobjge_StructureChartNodeEN.structureSectionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[结构章节Id(structureSectionId)]的值:[${pobjge_StructureChartNodeEN.structureSectionId}], 非法,应该为字符型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureChartNodeEN.orderNum && undefined !== pobjge_StructureChartNodeEN.orderNum && tzDataType.isNumber(pobjge_StructureChartNodeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjge_StructureChartNodeEN.orderNum}], 非法,应该为数值型(In 知识点结构图(ge_StructureChartNode))!(clsge_StructureChartNodeBL:CheckProperty4Update)`);
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
export  function ge_StructureChartNode_GetJSONStrByObj (pobjge_StructureChartNodeEN: clsge_StructureChartNodeEN): string
{
pobjge_StructureChartNodeEN.sfUpdFldSetStr = pobjge_StructureChartNodeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_StructureChartNodeEN);
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
export  function ge_StructureChartNode_GetObjLstByJSONStr (strJSON: string): Array<clsge_StructureChartNodeEN>
{
let arrge_StructureChartNodeObjLst = new Array<clsge_StructureChartNodeEN>();
if (strJSON === "")
{
return arrge_StructureChartNodeObjLst;
}
try
{
arrge_StructureChartNodeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_StructureChartNodeObjLst;
}
return arrge_StructureChartNodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_StructureChartNodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_StructureChartNode_GetObjLstByJSONObjLst (arrge_StructureChartNodeObjLstS: Array<clsge_StructureChartNodeEN>): Array<clsge_StructureChartNodeEN>
{
const arrge_StructureChartNodeObjLst = new Array<clsge_StructureChartNodeEN>();
for (const objInFor of arrge_StructureChartNodeObjLstS) {
const obj1 = ge_StructureChartNode_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_StructureChartNodeObjLst.push(obj1);
}
return arrge_StructureChartNodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_StructureChartNode_GetObjByJSONStr (strJSON: string): clsge_StructureChartNodeEN
{
let pobjge_StructureChartNodeEN = new clsge_StructureChartNodeEN();
if (strJSON === "")
{
return pobjge_StructureChartNodeEN;
}
try
{
pobjge_StructureChartNodeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_StructureChartNodeEN;
}
return pobjge_StructureChartNodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_StructureChartNode_GetCombineCondition(objge_StructureChartNodeCond: clsge_StructureChartNodeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_StructureNodeId) == true)
{
const strComparisonOpStructureNodeId:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_StructureNodeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_StructureNodeId, objge_StructureChartNodeCond.structureNodeId, strComparisonOpStructureNodeId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_StructureNodeName) == true)
{
const strComparisonOpStructureNodeName:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_StructureNodeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_StructureNodeName, objge_StructureChartNodeCond.structureNodeName, strComparisonOpStructureNodeName);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_UpdDate, objge_StructureChartNodeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_UpdUser, objge_StructureChartNodeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_Memo, objge_StructureChartNodeCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_ParentId) == true)
{
const strComparisonOpParentId:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_ParentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_ParentId, objge_StructureChartNodeCond.parentId, strComparisonOpParentId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_IsRoot) == true)
{
if (objge_StructureChartNodeCond.isRoot == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureChartNodeEN.con_IsRoot);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureChartNodeEN.con_IsRoot);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_background) == true)
{
const strComparisonOpbackground:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_background];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_background, objge_StructureChartNodeCond.background, strComparisonOpbackground);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_foreground) == true)
{
const strComparisonOpforeground:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_foreground];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_foreground, objge_StructureChartNodeCond.foreground, strComparisonOpforeground);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_StructureGraphId) == true)
{
const strComparisonOpStructureGraphId:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_StructureGraphId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_StructureGraphId, objge_StructureChartNodeCond.structureGraphId, strComparisonOpStructureGraphId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_Direction) == true)
{
const strComparisonOpDirection:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_Direction];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_Direction, objge_StructureChartNodeCond.direction, strComparisonOpDirection);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_IsExpanded) == true)
{
if (objge_StructureChartNodeCond.isExpanded == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureChartNodeEN.con_IsExpanded);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureChartNodeEN.con_IsExpanded);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_StructureSectionId) == true)
{
const strComparisonOpStructureSectionId:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_StructureSectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureChartNodeEN.con_StructureSectionId, objge_StructureChartNodeCond.structureSectionId, strComparisonOpStructureSectionId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureChartNodeCond.dicFldComparisonOp, clsge_StructureChartNodeEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objge_StructureChartNodeCond.dicFldComparisonOp[clsge_StructureChartNodeEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_StructureChartNodeEN.con_OrderNum, objge_StructureChartNodeCond.orderNum, strComparisonOpOrderNum);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureChartNode(知识点结构图),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strStructureNodeName: 结构名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureChartNode_GetUniCondStr(objge_StructureChartNodeEN: clsge_StructureChartNodeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and StructureNodeName = '{0}'", objge_StructureChartNodeEN.structureNodeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureChartNode(知识点结构图),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strStructureNodeName: 结构名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureChartNode_GetUniCondStr4Update(objge_StructureChartNodeEN: clsge_StructureChartNodeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and StructureNodeId <> '{0}'", objge_StructureChartNodeEN.structureNodeId);
 strWhereCond +=  Format(" and StructureNodeName = '{0}'", objge_StructureChartNodeEN.structureNodeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_StructureChartNodeENS:源对象
 * @param objge_StructureChartNodeENT:目标对象
*/
export  function ge_StructureChartNode_CopyObjTo(objge_StructureChartNodeENS: clsge_StructureChartNodeEN , objge_StructureChartNodeENT: clsge_StructureChartNodeEN ): void 
{
objge_StructureChartNodeENT.structureNodeId = objge_StructureChartNodeENS.structureNodeId; //结构Id
objge_StructureChartNodeENT.structureNodeName = objge_StructureChartNodeENS.structureNodeName; //结构名称
objge_StructureChartNodeENT.updDate = objge_StructureChartNodeENS.updDate; //修改日期
objge_StructureChartNodeENT.updUser = objge_StructureChartNodeENS.updUser; //修改人
objge_StructureChartNodeENT.memo = objge_StructureChartNodeENS.memo; //备注
objge_StructureChartNodeENT.parentId = objge_StructureChartNodeENS.parentId; //父节点Id
objge_StructureChartNodeENT.isRoot = objge_StructureChartNodeENS.isRoot; //IsRoot
objge_StructureChartNodeENT.background = objge_StructureChartNodeENS.background; //背景色
objge_StructureChartNodeENT.foreground = objge_StructureChartNodeENS.foreground; //背景字颜色
objge_StructureChartNodeENT.structureGraphId = objge_StructureChartNodeENS.structureGraphId; //知识图谱Id
objge_StructureChartNodeENT.direction = objge_StructureChartNodeENS.direction; //方向
objge_StructureChartNodeENT.isExpanded = objge_StructureChartNodeENS.isExpanded; //是否扩展
objge_StructureChartNodeENT.structureSectionId = objge_StructureChartNodeENS.structureSectionId; //结构章节Id
objge_StructureChartNodeENT.orderNum = objge_StructureChartNodeENS.orderNum; //序号
objge_StructureChartNodeENT.sfUpdFldSetStr = objge_StructureChartNodeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_StructureChartNodeENS:源对象
 * @param objge_StructureChartNodeENT:目标对象
*/
export  function ge_StructureChartNode_GetObjFromJsonObj(objge_StructureChartNodeENS: clsge_StructureChartNodeEN): clsge_StructureChartNodeEN 
{
 const objge_StructureChartNodeENT: clsge_StructureChartNodeEN = new clsge_StructureChartNodeEN();
ObjectAssign(objge_StructureChartNodeENT, objge_StructureChartNodeENS);
 return objge_StructureChartNodeENT;
}