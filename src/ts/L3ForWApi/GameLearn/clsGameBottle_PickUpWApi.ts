
 /**
 * 类名:clsGameBottle_PickUpWApi
 * 表名:GameBottle_PickUp(01120983)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:30
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
 * 捞游戏瓶(GameBottle_PickUp)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsGameBottle_PickUpEN } from "@/ts/L0Entity/GameLearn/clsGameBottle_PickUpEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gameBottle_PickUp_Controller = "GameBottle_PickUpApi";
 export const gameBottle_PickUp_ConstructorName = "gameBottle_PickUp";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function GameBottle_PickUp_SplitKeyLst(strKeyLst: string)  
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
bottleId: Number(arrKey[0]),
userId_PickUp: arrKey[1],
};
if (objKeyLst.bottleId == 0)
{
const strMsg = "关键字段(bottleId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.userId_PickUp)== true)
{
const strMsg = "关键字段(userId_PickUp)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngBottleId:关键字
 * @returns 对象
 **/
export  async function GameBottle_PickUp_GetObjByKeyLstAsync(lngBottleId: number,strUserId_PickUp: string): Promise<clsGameBottle_PickUpEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (lngBottleId == 0)
{
  const strMsg = Format("参数:[lngBottleId]不能为空!(In clsGameBottle_PickUpWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strUserId_PickUp) == true)
{
  const strMsg = Format("参数:[strUserId_PickUp]不能为空!(In clsGameBottle_PickUpWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngBottleId,
strUserId_PickUp,
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
const objGameBottle_PickUp = GameBottle_PickUp_GetObjFromJsonObj(returnObj);
return objGameBottle_PickUp;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  function GameBottle_PickUp_SortFunDefa(a:clsGameBottle_PickUpEN , b:clsGameBottle_PickUpEN): number 
{
return a.bottleId-b.bottleId;
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
export  function GameBottle_PickUp_SortFunDefa2Fld(a:clsGameBottle_PickUpEN , b:clsGameBottle_PickUpEN): number 
{
if (a.pickUpTime == b.pickUpTime) return a.finishedTime.localeCompare(b.finishedTime);
else return a.pickUpTime.localeCompare(b.pickUpTime);
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
export  function GameBottle_PickUp_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsGameBottle_PickUpEN.con_BottleId:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return a.bottleId-b.bottleId;
}
case clsGameBottle_PickUpEN.con_UserId_PickUp:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return a.userId_PickUp.localeCompare(b.userId_PickUp);
}
case clsGameBottle_PickUpEN.con_PickUpTime:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
if (a.pickUpTime == null) return -1;
if (b.pickUpTime == null) return 1;
return a.pickUpTime.localeCompare(b.pickUpTime);
}
case clsGameBottle_PickUpEN.con_FinishedTime:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
if (a.finishedTime == null) return -1;
if (b.finishedTime == null) return 1;
return a.finishedTime.localeCompare(b.finishedTime);
}
case clsGameBottle_PickUpEN.con_BottleStateId:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return a.bottleStateId.localeCompare(b.bottleStateId);
}
case clsGameBottle_PickUpEN.con_Credits:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return a.credits-b.credits;
}
case clsGameBottle_PickUpEN.con_UpdUser:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsGameBottle_PickUpEN.con_UpdDate:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsGameBottle_PickUpEN.con_Memo:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[GameBottle_PickUp]中不存在!(in ${ gameBottle_PickUp_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsGameBottle_PickUpEN.con_BottleId:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return b.bottleId-a.bottleId;
}
case clsGameBottle_PickUpEN.con_UserId_PickUp:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return b.userId_PickUp.localeCompare(a.userId_PickUp);
}
case clsGameBottle_PickUpEN.con_PickUpTime:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
if (b.pickUpTime == null) return -1;
if (a.pickUpTime == null) return 1;
return b.pickUpTime.localeCompare(a.pickUpTime);
}
case clsGameBottle_PickUpEN.con_FinishedTime:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
if (b.finishedTime == null) return -1;
if (a.finishedTime == null) return 1;
return b.finishedTime.localeCompare(a.finishedTime);
}
case clsGameBottle_PickUpEN.con_BottleStateId:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return b.bottleStateId.localeCompare(a.bottleStateId);
}
case clsGameBottle_PickUpEN.con_Credits:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return b.credits-a.credits;
}
case clsGameBottle_PickUpEN.con_UpdUser:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsGameBottle_PickUpEN.con_UpdDate:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsGameBottle_PickUpEN.con_Memo:
return (a: clsGameBottle_PickUpEN, b: clsGameBottle_PickUpEN) => {
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[GameBottle_PickUp]中不存在!(in ${ gameBottle_PickUp_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByBottleIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function GameBottle_PickUp_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsGameBottle_PickUpEN.con_BottleId:
return (obj: clsGameBottle_PickUpEN) => {
return obj.bottleId === value;
}
case clsGameBottle_PickUpEN.con_UserId_PickUp:
return (obj: clsGameBottle_PickUpEN) => {
return obj.userId_PickUp === value;
}
case clsGameBottle_PickUpEN.con_PickUpTime:
return (obj: clsGameBottle_PickUpEN) => {
return obj.pickUpTime === value;
}
case clsGameBottle_PickUpEN.con_FinishedTime:
return (obj: clsGameBottle_PickUpEN) => {
return obj.finishedTime === value;
}
case clsGameBottle_PickUpEN.con_BottleStateId:
return (obj: clsGameBottle_PickUpEN) => {
return obj.bottleStateId === value;
}
case clsGameBottle_PickUpEN.con_Credits:
return (obj: clsGameBottle_PickUpEN) => {
return obj.credits === value;
}
case clsGameBottle_PickUpEN.con_UpdUser:
return (obj: clsGameBottle_PickUpEN) => {
return obj.updUser === value;
}
case clsGameBottle_PickUpEN.con_UpdDate:
return (obj: clsGameBottle_PickUpEN) => {
return obj.updDate === value;
}
case clsGameBottle_PickUpEN.con_Memo:
return (obj: clsGameBottle_PickUpEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[GameBottle_PickUp]中不存在!(in ${ gameBottle_PickUp_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[GameBottle_PickUp__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function GameBottle_PickUp_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_GetFirstObjAsync(strWhereCond: string): Promise<clsGameBottle_PickUpEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const objGameBottle_PickUp = GameBottle_PickUp_GetObjFromJsonObj(returnObj);
return objGameBottle_PickUp;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_GetObjLstAsync(strWhereCond: string): Promise<Array<clsGameBottle_PickUpEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_PickUp_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjLstByBottleIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function GameBottle_PickUp_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsGameBottle_PickUpEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_PickUp_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsGameBottle_PickUpEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_PickUp_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsGameBottle_PickUpEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsGameBottle_PickUpEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_PickUp_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
 * @param lngBottleId,strUserId_PickUp:关键字列表
 * @returns 获取删除的结果
 **/
export  async function GameBottle_PickUp_DelRecKeyLstAsync(lngBottleId: number,strUserId_PickUp: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngBottleId, 
strUserId_PickUp, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_DelGameBottle_PickUpsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelGameBottle_PickUpsByCondAsync";
const strAction = "DelGameBottle_PickUpsByCond";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
 * @param objGameBottle_PickUpEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function GameBottle_PickUp_AddNewRecordAsync(objGameBottle_PickUpEN: clsGameBottle_PickUpEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objGameBottle_PickUpEN);
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottle_PickUpEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_AddNewObjSave(objGameBottle_PickUpEN: clsGameBottle_PickUpEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
GameBottle_PickUp_CheckPropertyNew(objGameBottle_PickUpEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gameBottle_PickUp_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await GameBottle_PickUp_IsExistAsync(objGameBottle_PickUpEN.bottleId,objGameBottle_PickUpEN.userId_PickUp,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objGameBottle_PickUpEN.bottleId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await GameBottle_PickUp_AddNewRecordAsync(objGameBottle_PickUpEN);
if (returnBool == true)
{
//GameBottle_PickUp_ReFreshCache();
}
else
{
const strInfo = `添加[捞游戏瓶(GameBottle_PickUp)]记录不成功!`;
//显示信息框
throw(strInfo);
}
let strReturnKeyLst = '';
strReturnKeyLst += `${ objGameBottle_PickUpEN.bottleId }`;
strReturnKeyLst += `|${ objGameBottle_PickUpEN.userId_PickUp }`;
return { keyword: strReturnKeyLst, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ gameBottle_PickUp_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function GameBottle_PickUp_UpdateObjSave(objGameBottle_PickUpEN: clsGameBottle_PickUpEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objGameBottle_PickUpEN.sfUpdFldSetStr = objGameBottle_PickUpEN.updFldString;//设置哪些字段被修改(脏字段)
if (objGameBottle_PickUpEN.bottleId == 0 || objGameBottle_PickUpEN.bottleId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
GameBottle_PickUp_CheckProperty4Update(objGameBottle_PickUpEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gameBottle_PickUp_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await GameBottle_PickUp_UpdateRecordAsync(objGameBottle_PickUpEN);
if (returnBool == true)
{
//GameBottle_PickUp_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ gameBottle_PickUp_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGameBottle_PickUpEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function GameBottle_PickUp_AddNewRecordWithReturnKeyAsync(objGameBottle_PickUpEN: clsGameBottle_PickUpEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottle_PickUpEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
 * @param objGameBottle_PickUpEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function GameBottle_PickUp_UpdateRecordAsync(objGameBottle_PickUpEN: clsGameBottle_PickUpEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objGameBottle_PickUpEN.sfUpdFldSetStr === undefined || objGameBottle_PickUpEN.sfUpdFldSetStr === null || objGameBottle_PickUpEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objGameBottle_PickUpEN.bottleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottle_PickUpEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
 * @param objGameBottle_PickUpEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function GameBottle_PickUp_EditRecordExAsync(objGameBottle_PickUpEN: clsGameBottle_PickUpEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objGameBottle_PickUpEN.sfUpdFldSetStr === undefined || objGameBottle_PickUpEN.sfUpdFldSetStr === null || objGameBottle_PickUpEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objGameBottle_PickUpEN.bottleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottle_PickUpEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
 * @param objGameBottle_PickUpEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function GameBottle_PickUp_UpdateWithConditionAsync(objGameBottle_PickUpEN: clsGameBottle_PickUpEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objGameBottle_PickUpEN.sfUpdFldSetStr === undefined || objGameBottle_PickUpEN.sfUpdFldSetStr === null || objGameBottle_PickUpEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objGameBottle_PickUpEN.bottleId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);
objGameBottle_PickUpEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottle_PickUpEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
 * @param lngBottleId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function GameBottle_PickUp_IsExistAsync(lngBottleId: number,strUserId_PickUp: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngBottleId,
strUserId_PickUp,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  async function GameBottle_PickUp_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gameBottle_PickUp_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_PickUp_ConstructorName, strThisFuncName);
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
export  function GameBottle_PickUp_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function GameBottle_PickUp_CheckPropertyNew(pobjGameBottle_PickUpEN: clsGameBottle_PickUpEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.bottleStateId) === true 
 || pobjGameBottle_PickUpEN.bottleStateId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[瓶子状态Id]不能为空(In 捞游戏瓶)!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 捞游戏瓶)!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.memo) === true )
{
 throw new Error(`(errid:Watl000411)字段[备注]不能为空(In 捞游戏瓶)!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.userId_PickUp) == false && GetStrLen(pobjGameBottle_PickUpEN.userId_PickUp) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId_PickUp)]的长度不能超过18(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.userId_PickUp}(clsGameBottle_PickUpBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.pickUpTime) == false && GetStrLen(pobjGameBottle_PickUpEN.pickUpTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[捞的时间(pickUpTime)]的长度不能超过20(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.pickUpTime}(clsGameBottle_PickUpBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.finishedTime) == false && GetStrLen(pobjGameBottle_PickUpEN.finishedTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[完成时间(finishedTime)]的长度不能超过20(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.finishedTime}(clsGameBottle_PickUpBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.bottleStateId) == false && GetStrLen(pobjGameBottle_PickUpEN.bottleStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[瓶子状态Id(bottleStateId)]的长度不能超过2(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.bottleStateId}(clsGameBottle_PickUpBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updUser) == false && GetStrLen(pobjGameBottle_PickUpEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.updUser}(clsGameBottle_PickUpBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updDate) == false && GetStrLen(pobjGameBottle_PickUpEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.updDate}(clsGameBottle_PickUpBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.memo) == false && GetStrLen(pobjGameBottle_PickUpEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.memo}(clsGameBottle_PickUpBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjGameBottle_PickUpEN.bottleId && undefined !== pobjGameBottle_PickUpEN.bottleId && tzDataType.isNumber(pobjGameBottle_PickUpEN.bottleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子Id(bottleId)]的值:[${pobjGameBottle_PickUpEN.bottleId}], 非法,应该为数值型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.userId_PickUp) == false && undefined !== pobjGameBottle_PickUpEN.userId_PickUp && tzDataType.isString(pobjGameBottle_PickUpEN.userId_PickUp) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId_PickUp)]的值:[${pobjGameBottle_PickUpEN.userId_PickUp}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.pickUpTime) == false && undefined !== pobjGameBottle_PickUpEN.pickUpTime && tzDataType.isString(pobjGameBottle_PickUpEN.pickUpTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[捞的时间(pickUpTime)]的值:[${pobjGameBottle_PickUpEN.pickUpTime}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.finishedTime) == false && undefined !== pobjGameBottle_PickUpEN.finishedTime && tzDataType.isString(pobjGameBottle_PickUpEN.finishedTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[完成时间(finishedTime)]的值:[${pobjGameBottle_PickUpEN.finishedTime}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.bottleStateId) == false && undefined !== pobjGameBottle_PickUpEN.bottleStateId && tzDataType.isString(pobjGameBottle_PickUpEN.bottleStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子状态Id(bottleStateId)]的值:[${pobjGameBottle_PickUpEN.bottleStateId}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (null != pobjGameBottle_PickUpEN.credits && undefined !== pobjGameBottle_PickUpEN.credits && tzDataType.isNumber(pobjGameBottle_PickUpEN.credits) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分(credits)]的值:[${pobjGameBottle_PickUpEN.credits}], 非法,应该为数值型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updUser) == false && undefined !== pobjGameBottle_PickUpEN.updUser && tzDataType.isString(pobjGameBottle_PickUpEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjGameBottle_PickUpEN.updUser}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updDate) == false && undefined !== pobjGameBottle_PickUpEN.updDate && tzDataType.isString(pobjGameBottle_PickUpEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGameBottle_PickUpEN.updDate}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.memo) == false && undefined !== pobjGameBottle_PickUpEN.memo && tzDataType.isString(pobjGameBottle_PickUpEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjGameBottle_PickUpEN.memo}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function GameBottle_PickUp_CheckProperty4Update(pobjGameBottle_PickUpEN: clsGameBottle_PickUpEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.userId_PickUp) == false && GetStrLen(pobjGameBottle_PickUpEN.userId_PickUp) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId_PickUp)]的长度不能超过18(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.userId_PickUp}(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.pickUpTime) == false && GetStrLen(pobjGameBottle_PickUpEN.pickUpTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[捞的时间(pickUpTime)]的长度不能超过20(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.pickUpTime}(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.finishedTime) == false && GetStrLen(pobjGameBottle_PickUpEN.finishedTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[完成时间(finishedTime)]的长度不能超过20(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.finishedTime}(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.bottleStateId) == false && GetStrLen(pobjGameBottle_PickUpEN.bottleStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[瓶子状态Id(bottleStateId)]的长度不能超过2(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.bottleStateId}(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updUser) == false && GetStrLen(pobjGameBottle_PickUpEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.updUser}(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updDate) == false && GetStrLen(pobjGameBottle_PickUpEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.updDate}(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.memo) == false && GetStrLen(pobjGameBottle_PickUpEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 捞游戏瓶(GameBottle_PickUp))!值:${pobjGameBottle_PickUpEN.memo}(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjGameBottle_PickUpEN.bottleId && undefined !== pobjGameBottle_PickUpEN.bottleId && tzDataType.isNumber(pobjGameBottle_PickUpEN.bottleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子Id(bottleId)]的值:[${pobjGameBottle_PickUpEN.bottleId}], 非法,应该为数值型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.userId_PickUp) == false && undefined !== pobjGameBottle_PickUpEN.userId_PickUp && tzDataType.isString(pobjGameBottle_PickUpEN.userId_PickUp) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId_PickUp)]的值:[${pobjGameBottle_PickUpEN.userId_PickUp}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.pickUpTime) == false && undefined !== pobjGameBottle_PickUpEN.pickUpTime && tzDataType.isString(pobjGameBottle_PickUpEN.pickUpTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[捞的时间(pickUpTime)]的值:[${pobjGameBottle_PickUpEN.pickUpTime}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.finishedTime) == false && undefined !== pobjGameBottle_PickUpEN.finishedTime && tzDataType.isString(pobjGameBottle_PickUpEN.finishedTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[完成时间(finishedTime)]的值:[${pobjGameBottle_PickUpEN.finishedTime}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.bottleStateId) == false && undefined !== pobjGameBottle_PickUpEN.bottleStateId && tzDataType.isString(pobjGameBottle_PickUpEN.bottleStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子状态Id(bottleStateId)]的值:[${pobjGameBottle_PickUpEN.bottleStateId}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (null != pobjGameBottle_PickUpEN.credits && undefined !== pobjGameBottle_PickUpEN.credits && tzDataType.isNumber(pobjGameBottle_PickUpEN.credits) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分(credits)]的值:[${pobjGameBottle_PickUpEN.credits}], 非法,应该为数值型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updUser) == false && undefined !== pobjGameBottle_PickUpEN.updUser && tzDataType.isString(pobjGameBottle_PickUpEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjGameBottle_PickUpEN.updUser}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.updDate) == false && undefined !== pobjGameBottle_PickUpEN.updDate && tzDataType.isString(pobjGameBottle_PickUpEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGameBottle_PickUpEN.updDate}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottle_PickUpEN.memo) == false && undefined !== pobjGameBottle_PickUpEN.memo && tzDataType.isString(pobjGameBottle_PickUpEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjGameBottle_PickUpEN.memo}], 非法,应该为字符型(In 捞游戏瓶(GameBottle_PickUp))!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjGameBottle_PickUpEN.bottleId 
 || pobjGameBottle_PickUpEN.bottleId != null && pobjGameBottle_PickUpEN.bottleId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[瓶子Id]不能为空(In 捞游戏瓶)!(clsGameBottle_PickUpBL:CheckProperty4Update)`);
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
export  function GameBottle_PickUp_GetJSONStrByObj (pobjGameBottle_PickUpEN: clsGameBottle_PickUpEN): string
{
pobjGameBottle_PickUpEN.sfUpdFldSetStr = pobjGameBottle_PickUpEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjGameBottle_PickUpEN);
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
export  function GameBottle_PickUp_GetObjLstByJSONStr (strJSON: string): Array<clsGameBottle_PickUpEN>
{
let arrGameBottle_PickUpObjLst = new Array<clsGameBottle_PickUpEN>();
if (strJSON === "")
{
return arrGameBottle_PickUpObjLst;
}
try
{
arrGameBottle_PickUpObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrGameBottle_PickUpObjLst;
}
return arrGameBottle_PickUpObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGameBottle_PickUpObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function GameBottle_PickUp_GetObjLstByJSONObjLst (arrGameBottle_PickUpObjLstS: Array<clsGameBottle_PickUpEN>): Array<clsGameBottle_PickUpEN>
{
const arrGameBottle_PickUpObjLst = new Array<clsGameBottle_PickUpEN>();
for (const objInFor of arrGameBottle_PickUpObjLstS) {
const obj1 = GameBottle_PickUp_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrGameBottle_PickUpObjLst.push(obj1);
}
return arrGameBottle_PickUpObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function GameBottle_PickUp_GetObjByJSONStr (strJSON: string): clsGameBottle_PickUpEN
{
let pobjGameBottle_PickUpEN = new clsGameBottle_PickUpEN();
if (strJSON === "")
{
return pobjGameBottle_PickUpEN;
}
try
{
pobjGameBottle_PickUpEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjGameBottle_PickUpEN;
}
return pobjGameBottle_PickUpEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function GameBottle_PickUp_GetCombineCondition(objGameBottle_PickUpCond: clsGameBottle_PickUpEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_BottleId) == true)
{
const strComparisonOpBottleId:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_BottleId];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottle_PickUpEN.con_BottleId, objGameBottle_PickUpCond.bottleId, strComparisonOpBottleId);
}
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_UserId_PickUp) == true)
{
const strComparisonOpUserId_PickUp:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_UserId_PickUp];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottle_PickUpEN.con_UserId_PickUp, objGameBottle_PickUpCond.userId_PickUp, strComparisonOpUserId_PickUp);
}
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_PickUpTime) == true)
{
const strComparisonOpPickUpTime:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_PickUpTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottle_PickUpEN.con_PickUpTime, objGameBottle_PickUpCond.pickUpTime, strComparisonOpPickUpTime);
}
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_FinishedTime) == true)
{
const strComparisonOpFinishedTime:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_FinishedTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottle_PickUpEN.con_FinishedTime, objGameBottle_PickUpCond.finishedTime, strComparisonOpFinishedTime);
}
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_BottleStateId) == true)
{
const strComparisonOpBottleStateId:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_BottleStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottle_PickUpEN.con_BottleStateId, objGameBottle_PickUpCond.bottleStateId, strComparisonOpBottleStateId);
}
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottle_PickUpEN.con_Credits, objGameBottle_PickUpCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottle_PickUpEN.con_UpdUser, objGameBottle_PickUpCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottle_PickUpEN.con_UpdDate, objGameBottle_PickUpCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objGameBottle_PickUpCond.dicFldComparisonOp, clsGameBottle_PickUpEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objGameBottle_PickUpCond.dicFldComparisonOp[clsGameBottle_PickUpEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottle_PickUpEN.con_Memo, objGameBottle_PickUpCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objGameBottle_PickUpENS:源对象
 * @param objGameBottle_PickUpENT:目标对象
*/
export  function GameBottle_PickUp_CopyObjTo(objGameBottle_PickUpENS: clsGameBottle_PickUpEN , objGameBottle_PickUpENT: clsGameBottle_PickUpEN ): void 
{
objGameBottle_PickUpENT.bottleId = objGameBottle_PickUpENS.bottleId; //瓶子Id
objGameBottle_PickUpENT.userId_PickUp = objGameBottle_PickUpENS.userId_PickUp; //用户ID
objGameBottle_PickUpENT.pickUpTime = objGameBottle_PickUpENS.pickUpTime; //捞的时间
objGameBottle_PickUpENT.finishedTime = objGameBottle_PickUpENS.finishedTime; //完成时间
objGameBottle_PickUpENT.bottleStateId = objGameBottle_PickUpENS.bottleStateId; //瓶子状态Id
objGameBottle_PickUpENT.credits = objGameBottle_PickUpENS.credits; //积分
objGameBottle_PickUpENT.updUser = objGameBottle_PickUpENS.updUser; //修改人
objGameBottle_PickUpENT.updDate = objGameBottle_PickUpENS.updDate; //修改日期
objGameBottle_PickUpENT.memo = objGameBottle_PickUpENS.memo; //备注
objGameBottle_PickUpENT.sfUpdFldSetStr = objGameBottle_PickUpENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGameBottle_PickUpENS:源对象
 * @param objGameBottle_PickUpENT:目标对象
*/
export  function GameBottle_PickUp_GetObjFromJsonObj(objGameBottle_PickUpENS: clsGameBottle_PickUpEN): clsGameBottle_PickUpEN 
{
 const objGameBottle_PickUpENT: clsGameBottle_PickUpEN = new clsGameBottle_PickUpEN();
ObjectAssign(objGameBottle_PickUpENT, objGameBottle_PickUpENS);
 return objGameBottle_PickUpENT;
}