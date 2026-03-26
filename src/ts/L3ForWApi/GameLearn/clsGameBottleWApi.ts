
 /**
 * 类名:clsGameBottleWApi
 * 表名:GameBottle(01120974)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:27:32
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
 * 游戏瓶(GameBottle)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsGameBottleEN } from "@/ts/L0Entity/GameLearn/clsGameBottleEN";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const gameBottle_Controller = "GameBottleApi";
 export const gameBottle_ConstructorName = "gameBottle";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngBottleId:关键字
 * @returns 对象
 **/
export  async function GameBottle_GetObjByBottleIdAsync(lngBottleId: number): Promise<clsGameBottleEN|null>  
{
const strThisFuncName = "GetObjByBottleIdAsync";

if (lngBottleId == 0)
{
  const strMsg = Format("参数:[lngBottleId]不能为空!(In clsGameBottleWApi.GetObjByBottleIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByBottleId";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngBottleId,
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
const objGameBottle = GameBottle_GetObjFromJsonObj(returnObj);
return objGameBottle;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngBottleId:所给的关键字
 * @returns 对象
*/
export  async function GameBottle_GetObjByBottleIdlocalStorage(lngBottleId: number) {
const strThisFuncName = "GetObjByBottleIdlocalStorage";

if (lngBottleId == 0)
{
  const strMsg = Format("参数:[lngBottleId]不能为空!(In clsGameBottleWApi.GetObjByBottleIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsGameBottleEN._CurrTabName, lngBottleId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objGameBottleCache: clsGameBottleEN = JSON.parse(strTempObj);
return objGameBottleCache;
}
try
{
const objGameBottle = await GameBottle_GetObjByBottleIdAsync(lngBottleId);
if (objGameBottle != null)
{
localStorage.setItem(strKey, JSON.stringify(objGameBottle));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objGameBottle;
}
return objGameBottle;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngBottleId, gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngBottleId:所给的关键字
 * @returns 对象
*/
export  async function GameBottle_GetObjByBottleIdCache(lngBottleId: number, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByBottleIdCache";

if (lngBottleId == 0)
{
  const strMsg = Format("参数:[lngBottleId]不能为空!(In clsGameBottleWApi.GetObjByBottleIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrGameBottleObjLstCache = await GameBottle_GetObjLstCache();
try
{
const arrGameBottleSel = arrGameBottleObjLstCache.filter(x => 
 x.bottleId == lngBottleId );
let objGameBottle: clsGameBottleEN;
if (arrGameBottleSel.length > 0)
{
objGameBottle = arrGameBottleSel[0];
return objGameBottle;
}
else
{
if (bolTryAsyncOnce == true)
{
const objGameBottleConst = await GameBottle_GetObjByBottleIdAsync(lngBottleId);
if (objGameBottleConst != null)
{
GameBottle_ReFreshThisCache();
return objGameBottleConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngBottleId, gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objGameBottle:所给的对象
 * @returns 对象
*/
export  async function GameBottle_UpdateObjInLstCache(objGameBottle: clsGameBottleEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrGameBottleObjLstCache = await GameBottle_GetObjLstCache();
const obj = arrGameBottleObjLstCache.find(x => x.questionId == objGameBottle.questionId && x.userId_Throw == objGameBottle.userId_Throw);
if (obj != null)
{
objGameBottle.bottleId = obj.bottleId;
ObjectAssign( obj, objGameBottle);
}
else
{
arrGameBottleObjLstCache.push(objGameBottle);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function GameBottle_SortFunDefa(a:clsGameBottleEN , b:clsGameBottleEN): number 
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
export  function GameBottle_SortFunDefa2Fld(a:clsGameBottleEN , b:clsGameBottleEN): number 
{
if (a.questionId == b.questionId) return a.questionSourceId.localeCompare(b.questionSourceId);
else return a.questionId - b.questionId;
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
export  function GameBottle_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsGameBottleEN.con_BottleId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.bottleId-b.bottleId;
}
case clsGameBottleEN.con_QuestionId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.questionId-b.questionId;
}
case clsGameBottleEN.con_QuestionSourceId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.questionSourceId.localeCompare(b.questionSourceId);
}
case clsGameBottleEN.con_BottleTypeId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.bottleTypeId.localeCompare(b.bottleTypeId);
}
case clsGameBottleEN.con_UserId_Throw:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.userId_Throw.localeCompare(b.userId_Throw);
}
case clsGameBottleEN.con_ThrowTime:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.throwTime.localeCompare(b.throwTime);
}
case clsGameBottleEN.con_PickUpNum:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.pickUpNum-b.pickUpNum;
}
case clsGameBottleEN.con_FinishedNum:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.finishedNum-b.finishedNum;
}
case clsGameBottleEN.con_PosTop:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.posTop-b.posTop;
}
case clsGameBottleEN.con_PosLeft:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.posLeft-b.posLeft;
}
case clsGameBottleEN.con_BottleStateId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.bottleStateId.localeCompare(b.bottleStateId);
}
case clsGameBottleEN.con_Credits:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.credits-b.credits;
}
case clsGameBottleEN.con_IdCurrEduCls:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsGameBottleEN.con_UpdUser:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsGameBottleEN.con_UpdDate:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsGameBottleEN.con_Memo:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[GameBottle]中不存在!(in ${ gameBottle_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsGameBottleEN.con_BottleId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.bottleId-a.bottleId;
}
case clsGameBottleEN.con_QuestionId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.questionId-a.questionId;
}
case clsGameBottleEN.con_QuestionSourceId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.questionSourceId.localeCompare(a.questionSourceId);
}
case clsGameBottleEN.con_BottleTypeId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.bottleTypeId.localeCompare(a.bottleTypeId);
}
case clsGameBottleEN.con_UserId_Throw:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.userId_Throw.localeCompare(a.userId_Throw);
}
case clsGameBottleEN.con_ThrowTime:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.throwTime.localeCompare(a.throwTime);
}
case clsGameBottleEN.con_PickUpNum:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.pickUpNum-a.pickUpNum;
}
case clsGameBottleEN.con_FinishedNum:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.finishedNum-a.finishedNum;
}
case clsGameBottleEN.con_PosTop:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.posTop-a.posTop;
}
case clsGameBottleEN.con_PosLeft:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.posLeft-a.posLeft;
}
case clsGameBottleEN.con_BottleStateId:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.bottleStateId.localeCompare(a.bottleStateId);
}
case clsGameBottleEN.con_Credits:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.credits-a.credits;
}
case clsGameBottleEN.con_IdCurrEduCls:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsGameBottleEN.con_UpdUser:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsGameBottleEN.con_UpdDate:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsGameBottleEN.con_Memo:
return (a: clsGameBottleEN, b: clsGameBottleEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[GameBottle]中不存在!(in ${ gameBottle_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function GameBottle_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsGameBottleEN.con_BottleId:
return (obj: clsGameBottleEN) => {
return obj.bottleId === value;
}
case clsGameBottleEN.con_QuestionId:
return (obj: clsGameBottleEN) => {
return obj.questionId === value;
}
case clsGameBottleEN.con_QuestionSourceId:
return (obj: clsGameBottleEN) => {
return obj.questionSourceId === value;
}
case clsGameBottleEN.con_BottleTypeId:
return (obj: clsGameBottleEN) => {
return obj.bottleTypeId === value;
}
case clsGameBottleEN.con_UserId_Throw:
return (obj: clsGameBottleEN) => {
return obj.userId_Throw === value;
}
case clsGameBottleEN.con_ThrowTime:
return (obj: clsGameBottleEN) => {
return obj.throwTime === value;
}
case clsGameBottleEN.con_PickUpNum:
return (obj: clsGameBottleEN) => {
return obj.pickUpNum === value;
}
case clsGameBottleEN.con_FinishedNum:
return (obj: clsGameBottleEN) => {
return obj.finishedNum === value;
}
case clsGameBottleEN.con_PosTop:
return (obj: clsGameBottleEN) => {
return obj.posTop === value;
}
case clsGameBottleEN.con_PosLeft:
return (obj: clsGameBottleEN) => {
return obj.posLeft === value;
}
case clsGameBottleEN.con_BottleStateId:
return (obj: clsGameBottleEN) => {
return obj.bottleStateId === value;
}
case clsGameBottleEN.con_Credits:
return (obj: clsGameBottleEN) => {
return obj.credits === value;
}
case clsGameBottleEN.con_IdCurrEduCls:
return (obj: clsGameBottleEN) => {
return obj.idCurrEduCls === value;
}
case clsGameBottleEN.con_UpdUser:
return (obj: clsGameBottleEN) => {
return obj.updUser === value;
}
case clsGameBottleEN.con_UpdDate:
return (obj: clsGameBottleEN) => {
return obj.updDate === value;
}
case clsGameBottleEN.con_Memo:
return (obj: clsGameBottleEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[GameBottle]中不存在!(in ${ gameBottle_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function GameBottle_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsGameBottleEN.con_BottleId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsGameBottleEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsGameBottleEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngBottleId = Number(strInValue);
if (lngBottleId == 0)
{
return "";
}
const objGameBottle = await GameBottle_GetObjByBottleIdCache(lngBottleId );
if (objGameBottle == null) return "";
if (objGameBottle.GetFldValue(strOutFldName) == null) return "";
return objGameBottle.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function GameBottle_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<number>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsGameBottleEN.con_BottleId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrGameBottle = await GameBottle_GetObjLstCache();
if (arrGameBottle == null) return [];
let arrGameBottleSel = arrGameBottle;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrGameBottleSel = arrGameBottleSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrGameBottleSel.length == 0) return [];
return arrGameBottleSel.map(x=>x.bottleId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function GameBottle_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
export  async function GameBottle_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
export  async function GameBottle_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
export  async function GameBottle_GetFirstObjAsync(strWhereCond: string): Promise<clsGameBottleEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const objGameBottle = GameBottle_GetObjFromJsonObj(returnObj);
return objGameBottle;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function GameBottle_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsGameBottleEN._CurrTabName;
if (IsNullOrEmpty(clsGameBottleEN.WhereFormat) == false)
{
strWhereCond = clsGameBottleEN.WhereFormat;
}
if (IsNullOrEmpty(clsGameBottleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsGameBottleEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrGameBottleExObjLstCache: Array<clsGameBottleEN> = CacheHelper.Get(strKey);
const arrGameBottleObjLstT = GameBottle_GetObjLstByJSONObjLst(arrGameBottleExObjLstCache);
return arrGameBottleObjLstT;
}
try
{
const arrGameBottleExObjLst = await GameBottle_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrGameBottleExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrGameBottleExObjLst.length);
console.log(strInfo);
return arrGameBottleExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function GameBottle_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsGameBottleEN._CurrTabName;
if (IsNullOrEmpty(clsGameBottleEN.WhereFormat) == false)
{
strWhereCond = clsGameBottleEN.WhereFormat;
}
if (IsNullOrEmpty(clsGameBottleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsGameBottleEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrGameBottleExObjLstCache: Array<clsGameBottleEN> = JSON.parse(strTempObjLst);
const arrGameBottleObjLstT = GameBottle_GetObjLstByJSONObjLst(arrGameBottleExObjLstCache);
return arrGameBottleObjLstT;
}
try
{
const arrGameBottleExObjLst = await GameBottle_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrGameBottleExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrGameBottleExObjLst.length);
console.log(strInfo);
return arrGameBottleExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function GameBottle_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsGameBottleEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrGameBottleObjLstCache: Array<clsGameBottleEN> = JSON.parse(strTempObjLst);
return arrGameBottleObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function GameBottle_GetObjLstAsync(strWhereCond: string): Promise<Array<clsGameBottleEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function GameBottle_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsGameBottleEN._CurrTabName;
if (IsNullOrEmpty(clsGameBottleEN.WhereFormat) == false)
{
strWhereCond = clsGameBottleEN.WhereFormat;
}
if (IsNullOrEmpty(clsGameBottleEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsGameBottleEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrGameBottleExObjLstCache: Array<clsGameBottleEN> = JSON.parse(strTempObjLst);
const arrGameBottleObjLstT = GameBottle_GetObjLstByJSONObjLst(arrGameBottleExObjLstCache);
return arrGameBottleObjLstT;
}
try
{
const arrGameBottleExObjLst = await GameBottle_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrGameBottleExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrGameBottleExObjLst.length);
console.log(strInfo);
return arrGameBottleExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function GameBottle_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsGameBottleEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrGameBottleObjLstCache: Array<clsGameBottleEN> = JSON.parse(strTempObjLst);
return arrGameBottleObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function GameBottle_GetObjLstCache(): Promise<Array<clsGameBottleEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrGameBottleObjLstCache;
switch (clsGameBottleEN.CacheModeId)
{
case "04"://sessionStorage
arrGameBottleObjLstCache = await GameBottle_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrGameBottleObjLstCache = await GameBottle_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrGameBottleObjLstCache = await GameBottle_GetObjLstClientCache();
break;
default:
arrGameBottleObjLstCache = await GameBottle_GetObjLstClientCache();
break;
}
return arrGameBottleObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function GameBottle_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrGameBottleObjLstCache;
switch (clsGameBottleEN.CacheModeId)
{
case "04"://sessionStorage
arrGameBottleObjLstCache = await GameBottle_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrGameBottleObjLstCache = await GameBottle_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrGameBottleObjLstCache = null;
break;
default:
arrGameBottleObjLstCache = null;
break;
}
return arrGameBottleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngBottleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function GameBottle_GetSubObjLstCache(objGameBottleCond: clsGameBottleEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrGameBottleObjLstCache = await GameBottle_GetObjLstCache();
let arrGameBottleSel = arrGameBottleObjLstCache;
if (objGameBottleCond.sfFldComparisonOp == null || objGameBottleCond.sfFldComparisonOp == "") return arrGameBottleSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objGameBottleCond.sfFldComparisonOp);
//console.log("clsGameBottleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objGameBottleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objGameBottleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrGameBottleSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objGameBottleCond), gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsGameBottleEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrBottleId:关键字列表
 * @returns 对象列表
 **/
export  async function GameBottle_GetObjLstByBottleIdLstAsync(arrBottleId: Array<string>): Promise<Array<clsGameBottleEN>>  
{
const strThisFuncName = "GetObjLstByBottleIdLstAsync";
const strAction = "GetObjLstByBottleIdLst";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBottleId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrlngBottleIdLst:关键字列表
 * @returns 对象列表
*/
export  async function GameBottle_GetObjLstByBottleIdLstCache(arrBottleIdLst: Array<number> ) {
const strThisFuncName = "GetObjLstByBottleIdLstCache";
try
{
const arrGameBottleObjLstCache = await GameBottle_GetObjLstCache();
const arrGameBottleSel = arrGameBottleObjLstCache.filter(x => arrBottleIdLst.indexOf(x.bottleId)>-1);
return arrGameBottleSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrBottleIdLst.join(","), gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
}

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function GameBottle_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsGameBottleEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
export  async function GameBottle_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsGameBottleEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function GameBottle_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsGameBottleEN>();
const arrGameBottleObjLstCache = await GameBottle_GetObjLstCache();
if (arrGameBottleObjLstCache.length == 0) return arrGameBottleObjLstCache;
let arrGameBottleSel = arrGameBottleObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objGameBottleCond = new clsGameBottleEN();
ObjectAssign(objGameBottleCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsGameBottleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objGameBottleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrGameBottleSel = arrGameBottleSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrGameBottleSel.length == 0) return arrGameBottleSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrGameBottleSel = arrGameBottleSel.sort(GameBottle_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrGameBottleSel = arrGameBottleSel.sort(objPagerPara.sortFun);
}
arrGameBottleSel = arrGameBottleSel.slice(intStart, intEnd);     
return arrGameBottleSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsGameBottleEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function GameBottle_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsGameBottleEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsGameBottleEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gameBottle_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = GameBottle_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * @param lngBottleId:关键字
 * @returns 获取删除的结果
 **/
export  async function GameBottle_DelRecordAsync(lngBottleId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gameBottle_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngBottleId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * @param arrBottleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function GameBottle_DelGameBottlesAsync(arrBottleId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelGameBottlesAsync";
const strAction = "DelGameBottles";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrBottleId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
export  async function GameBottle_DelGameBottlesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelGameBottlesByCondAsync";
const strAction = "DelGameBottlesByCond";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * @param objGameBottleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function GameBottle_AddNewRecordAsync(objGameBottleEN: clsGameBottleEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objGameBottleEN);
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
export  async function GameBottle_AddNewObjSave(objGameBottleEN: clsGameBottleEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
GameBottle_CheckPropertyNew(objGameBottleEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gameBottle_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await GameBottle_CheckUniCond4Add(objGameBottleEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await GameBottle_AddNewRecordAsync(objGameBottleEN);
if (returnBool == true)
{
GameBottle_ReFreshCache();
}
else
{
const strInfo = `添加[游戏瓶(GameBottle)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objGameBottleEN.bottleId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ gameBottle_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function GameBottle_CheckUniCond4Add(objGameBottleEN: clsGameBottleEN): Promise<boolean>{
const strUniquenessCondition = GameBottle_GetUniCondStr(objGameBottleEN);
const bolIsExistCondition = await GameBottle_IsExistRecordAsync(strUniquenessCondition);
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
export  async function GameBottle_CheckUniCond4Update(objGameBottleEN: clsGameBottleEN): Promise<boolean>{
const strUniquenessCondition = GameBottle_GetUniCondStr4Update(objGameBottleEN);
const bolIsExistCondition = await GameBottle_IsExistRecordAsync(strUniquenessCondition);
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
export  async function GameBottle_UpdateObjSave(objGameBottleEN: clsGameBottleEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objGameBottleEN.sfUpdFldSetStr = objGameBottleEN.updFldString;//设置哪些字段被修改(脏字段)
if (objGameBottleEN.bottleId == 0 || objGameBottleEN.bottleId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
GameBottle_CheckProperty4Update(objGameBottleEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gameBottle_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await GameBottle_CheckUniCond4Update(objGameBottleEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await GameBottle_UpdateRecordAsync(objGameBottleEN);
if (returnBool == true)
{
GameBottle_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ gameBottle_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGameBottleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function GameBottle_AddNewRecordWithReturnKeyAsync(objGameBottleEN: clsGameBottleEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * @param objGameBottleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function GameBottle_UpdateRecordAsync(objGameBottleEN: clsGameBottleEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objGameBottleEN.sfUpdFldSetStr === undefined || objGameBottleEN.sfUpdFldSetStr === null || objGameBottleEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objGameBottleEN.bottleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * @param objGameBottleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function GameBottle_EditRecordExAsync(objGameBottleEN: clsGameBottleEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objGameBottleEN.sfUpdFldSetStr === undefined || objGameBottleEN.sfUpdFldSetStr === null || objGameBottleEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objGameBottleEN.bottleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * @param objGameBottleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function GameBottle_UpdateWithConditionAsync(objGameBottleEN: clsGameBottleEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objGameBottleEN.sfUpdFldSetStr === undefined || objGameBottleEN.sfUpdFldSetStr === null || objGameBottleEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objGameBottleEN.bottleId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);
objGameBottleEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objGameBottleEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objlngBottleIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function GameBottle_IsExistRecordCache(objGameBottleCond: clsGameBottleEN) {
const strThisFuncName = "IsExistRecordCache";
const arrGameBottleObjLstCache = await GameBottle_GetObjLstCache();
if (arrGameBottleObjLstCache == null) return false;
let arrGameBottleSel = arrGameBottleObjLstCache;
if (objGameBottleCond.sfFldComparisonOp == null || objGameBottleCond.sfFldComparisonOp == "") return arrGameBottleSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objGameBottleCond.sfFldComparisonOp);
//console.log("clsGameBottleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objGameBottleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objGameBottleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrGameBottleSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objGameBottleCond), gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return false;
}

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function GameBottle_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param lngBottleId:所给的关键字
 * @returns 对象
*/
export  async function GameBottle_IsExistCache(lngBottleId:number) {
const strThisFuncName = "IsExistCache";
const arrGameBottleObjLstCache = await GameBottle_GetObjLstCache();
if (arrGameBottleObjLstCache == null) return false;
try
{
const arrGameBottleSel = arrGameBottleObjLstCache.filter(x => x.bottleId == lngBottleId);
if (arrGameBottleSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e)
{
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngBottleId, gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngBottleId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function GameBottle_IsExistAsync(lngBottleId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngBottleId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
export  async function GameBottle_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objGameBottleCond:条件对象
 * @returns 对象列表记录数
*/
export  async function GameBottle_GetRecCountByCondCache(objGameBottleCond: clsGameBottleEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrGameBottleObjLstCache = await GameBottle_GetObjLstCache();
if (arrGameBottleObjLstCache == null) return 0;
let arrGameBottleSel = arrGameBottleObjLstCache;
if (objGameBottleCond.sfFldComparisonOp == null || objGameBottleCond.sfFldComparisonOp == "") return arrGameBottleSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objGameBottleCond.sfFldComparisonOp);
//console.log("clsGameBottleWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objGameBottleCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objGameBottleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrGameBottleSel = arrGameBottleSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrGameBottleSel = arrGameBottleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrGameBottleSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objGameBottleCond), gameBottle_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function GameBottle_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gameBottle_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gameBottle_ConstructorName, strThisFuncName);
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
export  function GameBottle_GetWebApiUrl(strController: string, strAction: string): string {
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

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export  function GameBottle_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsGameBottleEN._CurrTabName;
switch (clsGameBottleEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
clsGameBottleEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function GameBottle_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsGameBottleEN._CurrTabName;
switch (clsGameBottleEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
clsGameBottleEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
const strMsg = Format("刷新缓存成功!");
console.trace(strMsg);
}
else
{
const strMsg = Format("刷新缓存已经关闭。");
console.trace(strMsg);
}
}
/**
* 获取最新的缓存刷新时间
* @returns 最新的缓存刷新时间，字符串型
**/
export  function GameBottle_GetLastRefreshTime():string
{
if (clsGameBottleEN._RefreshTimeLst.length == 0) return "";
return clsGameBottleEN._RefreshTimeLst[clsGameBottleEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function GameBottle_CheckPropertyNew(pobjGameBottleEN: clsGameBottleEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (null === pobjGameBottleEN.questionId 
 || pobjGameBottleEN.questionId != null && pobjGameBottleEN.questionId.toString()  ===  ""
 || pobjGameBottleEN.questionId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[题目Id]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.questionSourceId) === true )
{
 throw new Error(`(errid:Watl000411)字段[题目来源Id]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[瓶子类型Id]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.userId_Throw) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.throwTime) === true )
{
 throw new Error(`(errid:Watl000411)字段[扔的时间]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleStateId) === true 
 || pobjGameBottleEN.bottleStateId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[瓶子状态Id]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.idCurrEduCls) === true 
 || pobjGameBottleEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjGameBottleEN.questionSourceId) == false && GetStrLen(pobjGameBottleEN.questionSourceId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[题目来源Id(questionSourceId)]的长度不能超过2(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.questionSourceId}(clsGameBottleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleTypeId) == false && GetStrLen(pobjGameBottleEN.bottleTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[瓶子类型Id(bottleTypeId)]的长度不能超过2(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.bottleTypeId}(clsGameBottleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.userId_Throw) == false && GetStrLen(pobjGameBottleEN.userId_Throw) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId_Throw)]的长度不能超过18(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.userId_Throw}(clsGameBottleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.throwTime) == false && GetStrLen(pobjGameBottleEN.throwTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[扔的时间(throwTime)]的长度不能超过20(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.throwTime}(clsGameBottleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleStateId) == false && GetStrLen(pobjGameBottleEN.bottleStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[瓶子状态Id(bottleStateId)]的长度不能超过2(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.bottleStateId}(clsGameBottleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.idCurrEduCls) == false && GetStrLen(pobjGameBottleEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.idCurrEduCls}(clsGameBottleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updUser) == false && GetStrLen(pobjGameBottleEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.updUser}(clsGameBottleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updDate) == false && GetStrLen(pobjGameBottleEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.updDate}(clsGameBottleBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.memo) == false && GetStrLen(pobjGameBottleEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.memo}(clsGameBottleBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjGameBottleEN.bottleId && undefined !== pobjGameBottleEN.bottleId && tzDataType.isNumber(pobjGameBottleEN.bottleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子Id(bottleId)]的值:[${pobjGameBottleEN.bottleId}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (null != pobjGameBottleEN.questionId && undefined !== pobjGameBottleEN.questionId && tzDataType.isNumber(pobjGameBottleEN.questionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目Id(questionId)]的值:[${pobjGameBottleEN.questionId}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.questionSourceId) == false && undefined !== pobjGameBottleEN.questionSourceId && tzDataType.isString(pobjGameBottleEN.questionSourceId) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目来源Id(questionSourceId)]的值:[${pobjGameBottleEN.questionSourceId}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleTypeId) == false && undefined !== pobjGameBottleEN.bottleTypeId && tzDataType.isString(pobjGameBottleEN.bottleTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子类型Id(bottleTypeId)]的值:[${pobjGameBottleEN.bottleTypeId}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.userId_Throw) == false && undefined !== pobjGameBottleEN.userId_Throw && tzDataType.isString(pobjGameBottleEN.userId_Throw) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId_Throw)]的值:[${pobjGameBottleEN.userId_Throw}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.throwTime) == false && undefined !== pobjGameBottleEN.throwTime && tzDataType.isString(pobjGameBottleEN.throwTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[扔的时间(throwTime)]的值:[${pobjGameBottleEN.throwTime}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (null != pobjGameBottleEN.pickUpNum && undefined !== pobjGameBottleEN.pickUpNum && tzDataType.isNumber(pobjGameBottleEN.pickUpNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[捞的数目(pickUpNum)]的值:[${pobjGameBottleEN.pickUpNum}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (null != pobjGameBottleEN.finishedNum && undefined !== pobjGameBottleEN.finishedNum && tzDataType.isNumber(pobjGameBottleEN.finishedNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[完成数(finishedNum)]的值:[${pobjGameBottleEN.finishedNum}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (null != pobjGameBottleEN.posTop && undefined !== pobjGameBottleEN.posTop && tzDataType.isNumber(pobjGameBottleEN.posTop) === false)
{
 throw new Error(`(errid:Watl000414)字段[位置Y(posTop)]的值:[${pobjGameBottleEN.posTop}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (null != pobjGameBottleEN.posLeft && undefined !== pobjGameBottleEN.posLeft && tzDataType.isNumber(pobjGameBottleEN.posLeft) === false)
{
 throw new Error(`(errid:Watl000414)字段[位置X(posLeft)]的值:[${pobjGameBottleEN.posLeft}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleStateId) == false && undefined !== pobjGameBottleEN.bottleStateId && tzDataType.isString(pobjGameBottleEN.bottleStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[瓶子状态Id(bottleStateId)]的值:[${pobjGameBottleEN.bottleStateId}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (null != pobjGameBottleEN.credits && undefined !== pobjGameBottleEN.credits && tzDataType.isNumber(pobjGameBottleEN.credits) === false)
{
 throw new Error(`(errid:Watl000414)字段[积分(credits)]的值:[${pobjGameBottleEN.credits}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.idCurrEduCls) == false && undefined !== pobjGameBottleEN.idCurrEduCls && tzDataType.isString(pobjGameBottleEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjGameBottleEN.idCurrEduCls}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updUser) == false && undefined !== pobjGameBottleEN.updUser && tzDataType.isString(pobjGameBottleEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjGameBottleEN.updUser}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updDate) == false && undefined !== pobjGameBottleEN.updDate && tzDataType.isString(pobjGameBottleEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGameBottleEN.updDate}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.memo) == false && undefined !== pobjGameBottleEN.memo && tzDataType.isString(pobjGameBottleEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjGameBottleEN.memo}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjGameBottleEN.idCurrEduCls) == false && pobjGameBottleEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjGameBottleEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function GameBottle_CheckProperty4Update(pobjGameBottleEN: clsGameBottleEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjGameBottleEN.questionSourceId) == false && GetStrLen(pobjGameBottleEN.questionSourceId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[题目来源Id(questionSourceId)]的长度不能超过2(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.questionSourceId}(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleTypeId) == false && GetStrLen(pobjGameBottleEN.bottleTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[瓶子类型Id(bottleTypeId)]的长度不能超过2(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.bottleTypeId}(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.userId_Throw) == false && GetStrLen(pobjGameBottleEN.userId_Throw) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId_Throw)]的长度不能超过18(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.userId_Throw}(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.throwTime) == false && GetStrLen(pobjGameBottleEN.throwTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[扔的时间(throwTime)]的长度不能超过20(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.throwTime}(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleStateId) == false && GetStrLen(pobjGameBottleEN.bottleStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[瓶子状态Id(bottleStateId)]的长度不能超过2(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.bottleStateId}(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.idCurrEduCls) == false && GetStrLen(pobjGameBottleEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.idCurrEduCls}(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updUser) == false && GetStrLen(pobjGameBottleEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.updUser}(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updDate) == false && GetStrLen(pobjGameBottleEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.updDate}(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.memo) == false && GetStrLen(pobjGameBottleEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 游戏瓶(GameBottle))!值:${pobjGameBottleEN.memo}(clsGameBottleBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjGameBottleEN.bottleId && undefined !== pobjGameBottleEN.bottleId && tzDataType.isNumber(pobjGameBottleEN.bottleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子Id(bottleId)]的值:[${pobjGameBottleEN.bottleId}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (null != pobjGameBottleEN.questionId && undefined !== pobjGameBottleEN.questionId && tzDataType.isNumber(pobjGameBottleEN.questionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目Id(questionId)]的值:[${pobjGameBottleEN.questionId}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.questionSourceId) == false && undefined !== pobjGameBottleEN.questionSourceId && tzDataType.isString(pobjGameBottleEN.questionSourceId) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目来源Id(questionSourceId)]的值:[${pobjGameBottleEN.questionSourceId}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleTypeId) == false && undefined !== pobjGameBottleEN.bottleTypeId && tzDataType.isString(pobjGameBottleEN.bottleTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子类型Id(bottleTypeId)]的值:[${pobjGameBottleEN.bottleTypeId}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.userId_Throw) == false && undefined !== pobjGameBottleEN.userId_Throw && tzDataType.isString(pobjGameBottleEN.userId_Throw) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId_Throw)]的值:[${pobjGameBottleEN.userId_Throw}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.throwTime) == false && undefined !== pobjGameBottleEN.throwTime && tzDataType.isString(pobjGameBottleEN.throwTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[扔的时间(throwTime)]的值:[${pobjGameBottleEN.throwTime}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (null != pobjGameBottleEN.pickUpNum && undefined !== pobjGameBottleEN.pickUpNum && tzDataType.isNumber(pobjGameBottleEN.pickUpNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[捞的数目(pickUpNum)]的值:[${pobjGameBottleEN.pickUpNum}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (null != pobjGameBottleEN.finishedNum && undefined !== pobjGameBottleEN.finishedNum && tzDataType.isNumber(pobjGameBottleEN.finishedNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[完成数(finishedNum)]的值:[${pobjGameBottleEN.finishedNum}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (null != pobjGameBottleEN.posTop && undefined !== pobjGameBottleEN.posTop && tzDataType.isNumber(pobjGameBottleEN.posTop) === false)
{
 throw new Error(`(errid:Watl000417)字段[位置Y(posTop)]的值:[${pobjGameBottleEN.posTop}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (null != pobjGameBottleEN.posLeft && undefined !== pobjGameBottleEN.posLeft && tzDataType.isNumber(pobjGameBottleEN.posLeft) === false)
{
 throw new Error(`(errid:Watl000417)字段[位置X(posLeft)]的值:[${pobjGameBottleEN.posLeft}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.bottleStateId) == false && undefined !== pobjGameBottleEN.bottleStateId && tzDataType.isString(pobjGameBottleEN.bottleStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[瓶子状态Id(bottleStateId)]的值:[${pobjGameBottleEN.bottleStateId}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (null != pobjGameBottleEN.credits && undefined !== pobjGameBottleEN.credits && tzDataType.isNumber(pobjGameBottleEN.credits) === false)
{
 throw new Error(`(errid:Watl000417)字段[积分(credits)]的值:[${pobjGameBottleEN.credits}], 非法,应该为数值型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.idCurrEduCls) == false && undefined !== pobjGameBottleEN.idCurrEduCls && tzDataType.isString(pobjGameBottleEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjGameBottleEN.idCurrEduCls}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updUser) == false && undefined !== pobjGameBottleEN.updUser && tzDataType.isString(pobjGameBottleEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjGameBottleEN.updUser}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.updDate) == false && undefined !== pobjGameBottleEN.updDate && tzDataType.isString(pobjGameBottleEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGameBottleEN.updDate}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjGameBottleEN.memo) == false && undefined !== pobjGameBottleEN.memo && tzDataType.isString(pobjGameBottleEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjGameBottleEN.memo}], 非法,应该为字符型(In 游戏瓶(GameBottle))!(clsGameBottleBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjGameBottleEN.bottleId 
 || pobjGameBottleEN.bottleId != null && pobjGameBottleEN.bottleId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[瓶子Id]不能为空(In 游戏瓶)!(clsGameBottleBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjGameBottleEN.idCurrEduCls) == false && pobjGameBottleEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjGameBottleEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 游戏瓶)!(clsGameBottleBL:CheckPropertyNew)");
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
export  function GameBottle_GetJSONStrByObj (pobjGameBottleEN: clsGameBottleEN): string
{
pobjGameBottleEN.sfUpdFldSetStr = pobjGameBottleEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjGameBottleEN);
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
export  function GameBottle_GetObjLstByJSONStr (strJSON: string): Array<clsGameBottleEN>
{
let arrGameBottleObjLst = new Array<clsGameBottleEN>();
if (strJSON === "")
{
return arrGameBottleObjLst;
}
try
{
arrGameBottleObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrGameBottleObjLst;
}
return arrGameBottleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGameBottleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function GameBottle_GetObjLstByJSONObjLst (arrGameBottleObjLstS: Array<clsGameBottleEN>): Array<clsGameBottleEN>
{
const arrGameBottleObjLst = new Array<clsGameBottleEN>();
for (const objInFor of arrGameBottleObjLstS) {
const obj1 = GameBottle_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrGameBottleObjLst.push(obj1);
}
return arrGameBottleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function GameBottle_GetObjByJSONStr (strJSON: string): clsGameBottleEN
{
let pobjGameBottleEN = new clsGameBottleEN();
if (strJSON === "")
{
return pobjGameBottleEN;
}
try
{
pobjGameBottleEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjGameBottleEN;
}
return pobjGameBottleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function GameBottle_GetCombineCondition(objGameBottleCond: clsGameBottleEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_BottleId) == true)
{
const strComparisonOpBottleId:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_BottleId];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottleEN.con_BottleId, objGameBottleCond.bottleId, strComparisonOpBottleId);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottleEN.con_QuestionId, objGameBottleCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_QuestionSourceId) == true)
{
const strComparisonOpQuestionSourceId:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_QuestionSourceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_QuestionSourceId, objGameBottleCond.questionSourceId, strComparisonOpQuestionSourceId);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_BottleTypeId) == true)
{
const strComparisonOpBottleTypeId:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_BottleTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_BottleTypeId, objGameBottleCond.bottleTypeId, strComparisonOpBottleTypeId);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_UserId_Throw) == true)
{
const strComparisonOpUserId_Throw:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_UserId_Throw];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_UserId_Throw, objGameBottleCond.userId_Throw, strComparisonOpUserId_Throw);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_ThrowTime) == true)
{
const strComparisonOpThrowTime:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_ThrowTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_ThrowTime, objGameBottleCond.throwTime, strComparisonOpThrowTime);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_PickUpNum) == true)
{
const strComparisonOpPickUpNum:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_PickUpNum];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottleEN.con_PickUpNum, objGameBottleCond.pickUpNum, strComparisonOpPickUpNum);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_FinishedNum) == true)
{
const strComparisonOpFinishedNum:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_FinishedNum];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottleEN.con_FinishedNum, objGameBottleCond.finishedNum, strComparisonOpFinishedNum);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_PosTop) == true)
{
const strComparisonOpPosTop:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_PosTop];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottleEN.con_PosTop, objGameBottleCond.posTop, strComparisonOpPosTop);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_PosLeft) == true)
{
const strComparisonOpPosLeft:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_PosLeft];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottleEN.con_PosLeft, objGameBottleCond.posLeft, strComparisonOpPosLeft);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_BottleStateId) == true)
{
const strComparisonOpBottleStateId:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_BottleStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_BottleStateId, objGameBottleCond.bottleStateId, strComparisonOpBottleStateId);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_Credits) == true)
{
const strComparisonOpCredits:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_Credits];
strWhereCond += Format(" And {0} {2} {1}", clsGameBottleEN.con_Credits, objGameBottleCond.credits, strComparisonOpCredits);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_IdCurrEduCls, objGameBottleCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_UpdUser, objGameBottleCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_UpdDate, objGameBottleCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objGameBottleCond.dicFldComparisonOp, clsGameBottleEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objGameBottleCond.dicFldComparisonOp[clsGameBottleEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsGameBottleEN.con_Memo, objGameBottleCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--GameBottle(游戏瓶),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @param strUserId_Throw: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function GameBottle_GetUniCondStr(objGameBottleEN: clsGameBottleEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QuestionId = '{0}'", objGameBottleEN.questionId);
 strWhereCond +=  Format(" and UserId_Throw = '{0}'", objGameBottleEN.userId_Throw);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--GameBottle(游戏瓶),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngQuestionId: 题目Id(要求唯一的字段)
 * @param strUserId_Throw: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function GameBottle_GetUniCondStr4Update(objGameBottleEN: clsGameBottleEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and BottleId <> '{0}'", objGameBottleEN.bottleId);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objGameBottleEN.questionId);
 strWhereCond +=  Format(" and UserId_Throw = '{0}'", objGameBottleEN.userId_Throw);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objGameBottleENS:源对象
 * @param objGameBottleENT:目标对象
*/
export  function GameBottle_CopyObjTo(objGameBottleENS: clsGameBottleEN , objGameBottleENT: clsGameBottleEN ): void 
{
objGameBottleENT.bottleId = objGameBottleENS.bottleId; //瓶子Id
objGameBottleENT.questionId = objGameBottleENS.questionId; //题目Id
objGameBottleENT.questionSourceId = objGameBottleENS.questionSourceId; //题目来源Id
objGameBottleENT.bottleTypeId = objGameBottleENS.bottleTypeId; //瓶子类型Id
objGameBottleENT.userId_Throw = objGameBottleENS.userId_Throw; //用户ID
objGameBottleENT.throwTime = objGameBottleENS.throwTime; //扔的时间
objGameBottleENT.pickUpNum = objGameBottleENS.pickUpNum; //捞的数目
objGameBottleENT.finishedNum = objGameBottleENS.finishedNum; //完成数
objGameBottleENT.posTop = objGameBottleENS.posTop; //位置Y
objGameBottleENT.posLeft = objGameBottleENS.posLeft; //位置X
objGameBottleENT.bottleStateId = objGameBottleENS.bottleStateId; //瓶子状态Id
objGameBottleENT.credits = objGameBottleENS.credits; //积分
objGameBottleENT.idCurrEduCls = objGameBottleENS.idCurrEduCls; //教学班流水号
objGameBottleENT.updUser = objGameBottleENS.updUser; //修改人
objGameBottleENT.updDate = objGameBottleENS.updDate; //修改日期
objGameBottleENT.memo = objGameBottleENS.memo; //备注
objGameBottleENT.sfUpdFldSetStr = objGameBottleENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGameBottleENS:源对象
 * @param objGameBottleENT:目标对象
*/
export  function GameBottle_GetObjFromJsonObj(objGameBottleENS: clsGameBottleEN): clsGameBottleEN 
{
 const objGameBottleENT: clsGameBottleEN = new clsGameBottleEN();
ObjectAssign(objGameBottleENT, objGameBottleENS);
 return objGameBottleENT;
}