
 /**
 * 类名:clsDisciplineWApi
 * 表名:Discipline(01120315)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:38
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:技能示范(SkillDemo)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学科(Discipline)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsDisciplineEN } from "@/ts/L0Entity/SkillDemo/clsDisciplineEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const discipline_Controller = "DisciplineApi";
 export const discipline_ConstructorName = "discipline";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdDiscipline:关键字
 * @returns 对象
 **/
export  async function Discipline_GetObjByIdDisciplineAsync(strIdDiscipline: string): Promise<clsDisciplineEN|null>  
{
const strThisFuncName = "GetObjByIdDisciplineAsync";

if (IsNullOrEmpty(strIdDiscipline) == true)
{
  const strMsg = Format("参数:[strIdDiscipline]不能为空!(In clsDisciplineWApi.GetObjByIdDisciplineAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdDiscipline.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdDiscipline]的长度:[{0}]不正确!(clsDisciplineWApi.GetObjByIdDisciplineAsync)", strIdDiscipline.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdDiscipline";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdDiscipline,
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
const objDiscipline = Discipline_GetObjFromJsonObj(returnObj);
return objDiscipline;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param strIdDiscipline:所给的关键字
 * @returns 对象
*/
export  async function Discipline_GetObjByIdDisciplinelocalStorage(strIdDiscipline: string) {
const strThisFuncName = "GetObjByIdDisciplinelocalStorage";

if (IsNullOrEmpty(strIdDiscipline) == true)
{
  const strMsg = Format("参数:[strIdDiscipline]不能为空!(In clsDisciplineWApi.GetObjByIdDisciplinelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdDiscipline.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdDiscipline]的长度:[{0}]不正确!(clsDisciplineWApi.GetObjByIdDisciplinelocalStorage)", strIdDiscipline.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsDisciplineEN._CurrTabName, strIdDiscipline);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objDisciplineCache: clsDisciplineEN = JSON.parse(strTempObj);
return objDisciplineCache;
}
try
{
const objDiscipline = await Discipline_GetObjByIdDisciplineAsync(strIdDiscipline);
if (objDiscipline != null)
{
localStorage.setItem(strKey, JSON.stringify(objDiscipline));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objDiscipline;
}
return objDiscipline;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdDiscipline, discipline_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdDiscipline:所给的关键字
 * @returns 对象
*/
export  async function Discipline_GetObjByIdDisciplineCache(strIdDiscipline: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdDisciplineCache";

if (IsNullOrEmpty(strIdDiscipline) == true)
{
  const strMsg = Format("参数:[strIdDiscipline]不能为空!(In clsDisciplineWApi.GetObjByIdDisciplineCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdDiscipline.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdDiscipline]的长度:[{0}]不正确!(clsDisciplineWApi.GetObjByIdDisciplineCache)", strIdDiscipline.length);
console.error(strMsg);
throw (strMsg);
}
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
try
{
const arrDisciplineSel = arrDisciplineObjLstCache.filter(x => 
 x.idDiscipline == strIdDiscipline );
let objDiscipline: clsDisciplineEN;
if (arrDisciplineSel.length > 0)
{
objDiscipline = arrDisciplineSel[0];
return objDiscipline;
}
else
{
if (bolTryAsyncOnce == true)
{
const objDisciplineConst = await Discipline_GetObjByIdDisciplineAsync(strIdDiscipline);
if (objDisciplineConst != null)
{
Discipline_ReFreshThisCache();
return objDisciplineConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdDiscipline, discipline_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objDiscipline:所给的对象
 * @returns 对象
*/
export  async function Discipline_UpdateObjInLstCache(objDiscipline: clsDisciplineEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
const obj = arrDisciplineObjLstCache.find(x => 
x.idDiscipline == objDiscipline.idDiscipline);
if (obj != null)
{
objDiscipline.idDiscipline = obj.idDiscipline;
ObjectAssign( obj, objDiscipline);
}
else
{
arrDisciplineObjLstCache.push(objDiscipline);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, discipline_ConstructorName, strThisFuncName);
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
export  function Discipline_SortFunDefa(a:clsDisciplineEN , b:clsDisciplineEN): number 
{
return a.idDiscipline.localeCompare(b.idDiscipline);
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
export  function Discipline_SortFunDefa2Fld(a:clsDisciplineEN , b:clsDisciplineEN): number 
{
if (a.disciplineID == b.disciplineID) return a.disciplineName.localeCompare(b.disciplineName);
else return a.disciplineID.localeCompare(b.disciplineID);
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
export  function Discipline_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsDisciplineEN.con_IdDiscipline:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
return a.idDiscipline.localeCompare(b.idDiscipline);
}
case clsDisciplineEN.con_DisciplineID:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
return a.disciplineID.localeCompare(b.disciplineID);
}
case clsDisciplineEN.con_DisciplineName:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
return a.disciplineName.localeCompare(b.disciplineName);
}
case clsDisciplineEN.con_SequenceNumber:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
return a.sequenceNumber-b.sequenceNumber;
}
case clsDisciplineEN.con_Memo:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Discipline]中不存在!(in ${ discipline_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsDisciplineEN.con_IdDiscipline:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
return b.idDiscipline.localeCompare(a.idDiscipline);
}
case clsDisciplineEN.con_DisciplineID:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
return b.disciplineID.localeCompare(a.disciplineID);
}
case clsDisciplineEN.con_DisciplineName:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
return b.disciplineName.localeCompare(a.disciplineName);
}
case clsDisciplineEN.con_SequenceNumber:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
return b.sequenceNumber-a.sequenceNumber;
}
case clsDisciplineEN.con_Memo:
return (a: clsDisciplineEN, b: clsDisciplineEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Discipline]中不存在!(in ${ discipline_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdDiscipline:所给的关键字
 * @returns 对象
*/
export  async function Discipline_GetNameByIdDisciplineCache(strIdDiscipline: string) {

if (IsNullOrEmpty(strIdDiscipline) == true)
{
  const strMsg = Format("参数:[strIdDiscipline]不能为空!(In clsDisciplineWApi.GetNameByIdDisciplineCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdDiscipline.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdDiscipline]的长度:[{0}]不正确!(clsDisciplineWApi.GetNameByIdDisciplineCache)", strIdDiscipline.length);
console.error(strMsg);
throw (strMsg);
}
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
if (arrDisciplineObjLstCache == null) return "";
try
{
const arrDisciplineSel = arrDisciplineObjLstCache.filter(x => 
 x.idDiscipline == strIdDiscipline );
let objDiscipline: clsDisciplineEN;
if (arrDisciplineSel.length > 0)
{
objDiscipline = arrDisciplineSel[0];
return objDiscipline.disciplineName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdDiscipline);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function Discipline_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsDisciplineEN.con_IdDiscipline:
return (obj: clsDisciplineEN) => {
return obj.idDiscipline === value;
}
case clsDisciplineEN.con_DisciplineID:
return (obj: clsDisciplineEN) => {
return obj.disciplineID === value;
}
case clsDisciplineEN.con_DisciplineName:
return (obj: clsDisciplineEN) => {
return obj.disciplineName === value;
}
case clsDisciplineEN.con_SequenceNumber:
return (obj: clsDisciplineEN) => {
return obj.sequenceNumber === value;
}
case clsDisciplineEN.con_Memo:
return (obj: clsDisciplineEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Discipline]中不存在!(in ${ discipline_ConstructorName}.${ strThisFuncName})`;
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
export  async function Discipline_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsDisciplineEN.con_IdDiscipline)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsDisciplineEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsDisciplineEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdDiscipline = strInValue;
if (IsNullOrEmpty(strIdDiscipline) == true)
{
return "";
}
const objDiscipline = await Discipline_GetObjByIdDisciplineCache(strIdDiscipline );
if (objDiscipline == null) return "";
if (objDiscipline.GetFldValue(strOutFldName) == null) return "";
return objDiscipline.GetFldValue(strOutFldName).toString();
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
export  async function Discipline_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsDisciplineEN.con_IdDiscipline)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrDiscipline = await Discipline_GetObjLstCache();
if (arrDiscipline == null) return [];
let arrDisciplineSel = arrDiscipline;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrDisciplineSel = arrDisciplineSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrDisciplineSel.length == 0) return [];
return arrDisciplineSel.map(x=>x.idDiscipline);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Discipline_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetFirstObjAsync(strWhereCond: string): Promise<clsDisciplineEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const objDiscipline = Discipline_GetObjFromJsonObj(returnObj);
return objDiscipline;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsDisciplineEN._CurrTabName;
if (IsNullOrEmpty(clsDisciplineEN.WhereFormat) == false)
{
strWhereCond = clsDisciplineEN.WhereFormat;
}
if (IsNullOrEmpty(clsDisciplineEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsDisciplineEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrDisciplineExObjLstCache: Array<clsDisciplineEN> = CacheHelper.Get(strKey);
const arrDisciplineObjLstT = Discipline_GetObjLstByJSONObjLst(arrDisciplineExObjLstCache);
return arrDisciplineObjLstT;
}
try
{
const arrDisciplineExObjLst = await Discipline_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrDisciplineExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrDisciplineExObjLst.length);
console.log(strInfo);
return arrDisciplineExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, discipline_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Discipline_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsDisciplineEN._CurrTabName;
if (IsNullOrEmpty(clsDisciplineEN.WhereFormat) == false)
{
strWhereCond = clsDisciplineEN.WhereFormat;
}
if (IsNullOrEmpty(clsDisciplineEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsDisciplineEN.CacheAddiCondition);
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
const arrDisciplineExObjLstCache: Array<clsDisciplineEN> = JSON.parse(strTempObjLst);
const arrDisciplineObjLstT = Discipline_GetObjLstByJSONObjLst(arrDisciplineExObjLstCache);
return arrDisciplineObjLstT;
}
try
{
const arrDisciplineExObjLst = await Discipline_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrDisciplineExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrDisciplineExObjLst.length);
console.log(strInfo);
return arrDisciplineExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, discipline_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Discipline_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsDisciplineEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrDisciplineObjLstCache: Array<clsDisciplineEN> = JSON.parse(strTempObjLst);
return arrDisciplineObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function Discipline_GetObjLstAsync(strWhereCond: string): Promise<Array<clsDisciplineEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discipline_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Discipline_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsDisciplineEN._CurrTabName;
if (IsNullOrEmpty(clsDisciplineEN.WhereFormat) == false)
{
strWhereCond = clsDisciplineEN.WhereFormat;
}
if (IsNullOrEmpty(clsDisciplineEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsDisciplineEN.CacheAddiCondition);
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
const arrDisciplineExObjLstCache: Array<clsDisciplineEN> = JSON.parse(strTempObjLst);
const arrDisciplineObjLstT = Discipline_GetObjLstByJSONObjLst(arrDisciplineExObjLstCache);
return arrDisciplineObjLstT;
}
try
{
const arrDisciplineExObjLst = await Discipline_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrDisciplineExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrDisciplineExObjLst.length);
console.log(strInfo);
return arrDisciplineExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, discipline_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Discipline_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsDisciplineEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrDisciplineObjLstCache: Array<clsDisciplineEN> = JSON.parse(strTempObjLst);
return arrDisciplineObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Discipline_GetObjLstCache(): Promise<Array<clsDisciplineEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrDisciplineObjLstCache;
switch (clsDisciplineEN.CacheModeId)
{
case "04"://sessionStorage
arrDisciplineObjLstCache = await Discipline_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrDisciplineObjLstCache = await Discipline_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrDisciplineObjLstCache = await Discipline_GetObjLstClientCache();
break;
default:
arrDisciplineObjLstCache = await Discipline_GetObjLstClientCache();
break;
}
return arrDisciplineObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Discipline_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrDisciplineObjLstCache;
switch (clsDisciplineEN.CacheModeId)
{
case "04"://sessionStorage
arrDisciplineObjLstCache = await Discipline_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrDisciplineObjLstCache = await Discipline_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrDisciplineObjLstCache = null;
break;
default:
arrDisciplineObjLstCache = null;
break;
}
return arrDisciplineObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdDisciplineCond:条件对象
 * @returns 对象列表子集
*/
export  async function Discipline_GetSubObjLstCache(objDisciplineCond: clsDisciplineEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
let arrDisciplineSel = arrDisciplineObjLstCache;
if (objDisciplineCond.sfFldComparisonOp == null || objDisciplineCond.sfFldComparisonOp == "") return arrDisciplineSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objDisciplineCond.sfFldComparisonOp);
//console.log("clsDisciplineWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objDisciplineCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objDisciplineCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrDisciplineSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objDisciplineCond), discipline_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsDisciplineEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdDiscipline:关键字列表
 * @returns 对象列表
 **/
export  async function Discipline_GetObjLstByIdDisciplineLstAsync(arrIdDiscipline: Array<string>): Promise<Array<clsDisciplineEN>>  
{
const strThisFuncName = "GetObjLstByIdDisciplineLstAsync";
const strAction = "GetObjLstByIdDisciplineLst";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdDiscipline, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discipline_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Discipline_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param arrstrIdDisciplineLst:关键字列表
 * @returns 对象列表
*/
export  async function Discipline_GetObjLstByIdDisciplineLstCache(arrIdDisciplineLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdDisciplineLstCache";
try
{
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
const arrDisciplineSel = arrDisciplineObjLstCache.filter(x => arrIdDisciplineLst.indexOf(x.idDiscipline)>-1);
return arrDisciplineSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdDisciplineLst.join(","), discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsDisciplineEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discipline_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Discipline_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsDisciplineEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discipline_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Discipline_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsDisciplineEN>();
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
if (arrDisciplineObjLstCache.length == 0) return arrDisciplineObjLstCache;
let arrDisciplineSel = arrDisciplineObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objDisciplineCond = new clsDisciplineEN();
ObjectAssign(objDisciplineCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsDisciplineWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objDisciplineCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrDisciplineSel = arrDisciplineSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrDisciplineSel.length == 0) return arrDisciplineSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrDisciplineSel = arrDisciplineSel.sort(Discipline_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrDisciplineSel = arrDisciplineSel.sort(objPagerPara.sortFun);
}
arrDisciplineSel = arrDisciplineSel.slice(intStart, intEnd);     
return arrDisciplineSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, discipline_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsDisciplineEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function Discipline_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsDisciplineEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsDisciplineEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", discipline_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Discipline_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param strIdDiscipline:关键字
 * @returns 获取删除的结果
 **/
export  async function Discipline_DelRecordAsync(strIdDiscipline: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(discipline_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdDiscipline);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param arrIdDiscipline:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function Discipline_DelDisciplinesAsync(arrIdDiscipline: Array<string>): Promise<number> 
{
const strThisFuncName = "DelDisciplinesAsync";
const strAction = "DelDisciplines";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdDiscipline, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_DelDisciplinesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelDisciplinesByCondAsync";
const strAction = "DelDisciplinesByCond";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param objDisciplineEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Discipline_AddNewRecordAsync(objDisciplineEN: clsDisciplineEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objDisciplineEN.idDiscipline === null || objDisciplineEN.idDiscipline === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objDisciplineEN);
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDisciplineEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param objDisciplineEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Discipline_AddNewRecordWithMaxIdAsync(objDisciplineEN: clsDisciplineEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDisciplineEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_AddNewObjSave(objDisciplineEN: clsDisciplineEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
Discipline_CheckPropertyNew(objDisciplineEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ discipline_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await Discipline_IsExistAsync(objDisciplineEN.idDiscipline);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objDisciplineEN.idDiscipline);
console.error(strMsg);
throw(strMsg);
}
returnBool = await Discipline_AddNewRecordAsync(objDisciplineEN);
if (returnBool == true)
{
Discipline_ReFreshCache();
}
else
{
const strInfo = `添加[学科(Discipline)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objDisciplineEN.idDiscipline, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ discipline_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function Discipline_UpdateObjSave(objDisciplineEN: clsDisciplineEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objDisciplineEN.sfUpdFldSetStr = objDisciplineEN.updFldString;//设置哪些字段被修改(脏字段)
if (objDisciplineEN.idDiscipline == "" || objDisciplineEN.idDiscipline == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
Discipline_CheckProperty4Update(objDisciplineEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ discipline_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await Discipline_UpdateRecordAsync(objDisciplineEN);
if (returnBool == true)
{
Discipline_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ discipline_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objDisciplineEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function Discipline_AddNewRecordWithReturnKeyAsync(objDisciplineEN: clsDisciplineEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDisciplineEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param objDisciplineEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Discipline_UpdateRecordAsync(objDisciplineEN: clsDisciplineEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objDisciplineEN.sfUpdFldSetStr === undefined || objDisciplineEN.sfUpdFldSetStr === null || objDisciplineEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objDisciplineEN.idDiscipline);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDisciplineEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param objDisciplineEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Discipline_EditRecordExAsync(objDisciplineEN: clsDisciplineEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objDisciplineEN.sfUpdFldSetStr === undefined || objDisciplineEN.sfUpdFldSetStr === null || objDisciplineEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objDisciplineEN.idDiscipline);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDisciplineEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param objDisciplineEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Discipline_UpdateWithConditionAsync(objDisciplineEN: clsDisciplineEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objDisciplineEN.sfUpdFldSetStr === undefined || objDisciplineEN.sfUpdFldSetStr === null || objDisciplineEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objDisciplineEN.idDiscipline);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(discipline_Controller, strAction);
objDisciplineEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objDisciplineEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param objstrIdDisciplineCond:条件对象
 * @returns 对象列表子集
*/
export  async function Discipline_IsExistRecordCache(objDisciplineCond: clsDisciplineEN) {
const strThisFuncName = "IsExistRecordCache";
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
if (arrDisciplineObjLstCache == null) return false;
let arrDisciplineSel = arrDisciplineObjLstCache;
if (objDisciplineCond.sfFldComparisonOp == null || objDisciplineCond.sfFldComparisonOp == "") return arrDisciplineSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objDisciplineCond.sfFldComparisonOp);
//console.log("clsDisciplineWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objDisciplineCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objDisciplineCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrDisciplineSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objDisciplineCond), discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param strIdDiscipline:所给的关键字
 * @returns 对象
*/
export  async function Discipline_IsExistCache(strIdDiscipline:string) {
const strThisFuncName = "IsExistCache";
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
if (arrDisciplineObjLstCache == null) return false;
try
{
const arrDisciplineSel = arrDisciplineObjLstCache.filter(x => x.idDiscipline == strIdDiscipline);
if (arrDisciplineSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdDiscipline, discipline_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdDiscipline:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function Discipline_IsExistAsync(strIdDiscipline: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdDiscipline
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
 * @param objDisciplineCond:条件对象
 * @returns 对象列表记录数
*/
export  async function Discipline_GetRecCountByCondCache(objDisciplineCond: clsDisciplineEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrDisciplineObjLstCache = await Discipline_GetObjLstCache();
if (arrDisciplineObjLstCache == null) return 0;
let arrDisciplineSel = arrDisciplineObjLstCache;
if (objDisciplineCond.sfFldComparisonOp == null || objDisciplineCond.sfFldComparisonOp == "") return arrDisciplineSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objDisciplineCond.sfFldComparisonOp);
//console.log("clsDisciplineWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objDisciplineCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objDisciplineCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrDisciplineSel = arrDisciplineSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrDisciplineSel = arrDisciplineSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrDisciplineSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objDisciplineCond), discipline_ConstructorName, strThisFuncName);
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
export  async function Discipline_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(discipline_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, discipline_ConstructorName, strThisFuncName);
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
export  function Discipline_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function Discipline_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsDisciplineEN._CurrTabName;
switch (clsDisciplineEN.CacheModeId)
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
clsDisciplineEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function Discipline_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsDisciplineEN._CurrTabName;
switch (clsDisciplineEN.CacheModeId)
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
clsDisciplineEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function Discipline_GetLastRefreshTime():string
{
if (clsDisciplineEN._RefreshTimeLst.length == 0) return "";
return clsDisciplineEN._RefreshTimeLst[clsDisciplineEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function Discipline_BindDdl_id_DisciplineInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_DisciplineInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_DisciplineInDivCache");
const arrObjLstSel = await Discipline_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsDisciplineEN.con_IdDiscipline, clsDisciplineEN.con_DisciplineName, "学科...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function Discipline_GetArrDiscipline()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_DisciplineInDivCache");
const arrDiscipline = new Array<clsDisciplineEN>();
const arrObjLstSel = await Discipline_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsDisciplineEN();
obj0.idDiscipline = '0';
obj0.disciplineName = '选学科...';
arrDiscipline.push(obj0);
arrObjLstSel.forEach(x => arrDiscipline.push(x));
return arrDiscipline;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Discipline_CheckPropertyNew(pobjDisciplineEN: clsDisciplineEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjDisciplineEN.disciplineID) === true )
{
 throw new Error(`(errid:Watl000411)字段[学科ID]不能为空(In 学科)!(clsDisciplineBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineName) === true )
{
 throw new Error(`(errid:Watl000411)字段[学科名称]不能为空(In 学科)!(clsDisciplineBL:CheckPropertyNew0)`);
}
if (null === pobjDisciplineEN.sequenceNumber 
 || pobjDisciplineEN.sequenceNumber != null && pobjDisciplineEN.sequenceNumber.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[序号]不能为空(In 学科)!(clsDisciplineBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjDisciplineEN.idDiscipline) == false && GetStrLen(pobjDisciplineEN.idDiscipline) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学科流水号(idDiscipline)]的长度不能超过4(In 学科(Discipline))!值:${pobjDisciplineEN.idDiscipline}(clsDisciplineBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineID) == false && GetStrLen(pobjDisciplineEN.disciplineID) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学科ID(disciplineID)]的长度不能超过4(In 学科(Discipline))!值:${pobjDisciplineEN.disciplineID}(clsDisciplineBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineName) == false && GetStrLen(pobjDisciplineEN.disciplineName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[学科名称(disciplineName)]的长度不能超过50(In 学科(Discipline))!值:${pobjDisciplineEN.disciplineName}(clsDisciplineBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.memo) == false && GetStrLen(pobjDisciplineEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学科(Discipline))!值:${pobjDisciplineEN.memo}(clsDisciplineBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjDisciplineEN.idDiscipline) == false && undefined !== pobjDisciplineEN.idDiscipline && tzDataType.isString(pobjDisciplineEN.idDiscipline) === false)
{
 throw new Error(`(errid:Watl000414)字段[学科流水号(idDiscipline)]的值:[${pobjDisciplineEN.idDiscipline}], 非法,应该为字符型(In 学科(Discipline))!(clsDisciplineBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineID) == false && undefined !== pobjDisciplineEN.disciplineID && tzDataType.isString(pobjDisciplineEN.disciplineID) === false)
{
 throw new Error(`(errid:Watl000414)字段[学科ID(disciplineID)]的值:[${pobjDisciplineEN.disciplineID}], 非法,应该为字符型(In 学科(Discipline))!(clsDisciplineBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineName) == false && undefined !== pobjDisciplineEN.disciplineName && tzDataType.isString(pobjDisciplineEN.disciplineName) === false)
{
 throw new Error(`(errid:Watl000414)字段[学科名称(disciplineName)]的值:[${pobjDisciplineEN.disciplineName}], 非法,应该为字符型(In 学科(Discipline))!(clsDisciplineBL:CheckPropertyNew0)`);
}
if (null != pobjDisciplineEN.sequenceNumber && undefined !== pobjDisciplineEN.sequenceNumber && tzDataType.isNumber(pobjDisciplineEN.sequenceNumber) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(sequenceNumber)]的值:[${pobjDisciplineEN.sequenceNumber}], 非法,应该为数值型(In 学科(Discipline))!(clsDisciplineBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.memo) == false && undefined !== pobjDisciplineEN.memo && tzDataType.isString(pobjDisciplineEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjDisciplineEN.memo}], 非法,应该为字符型(In 学科(Discipline))!(clsDisciplineBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Discipline_CheckProperty4Update(pobjDisciplineEN: clsDisciplineEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjDisciplineEN.idDiscipline) == false && GetStrLen(pobjDisciplineEN.idDiscipline) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学科流水号(idDiscipline)]的长度不能超过4(In 学科(Discipline))!值:${pobjDisciplineEN.idDiscipline}(clsDisciplineBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineID) == false && GetStrLen(pobjDisciplineEN.disciplineID) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学科ID(disciplineID)]的长度不能超过4(In 学科(Discipline))!值:${pobjDisciplineEN.disciplineID}(clsDisciplineBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineName) == false && GetStrLen(pobjDisciplineEN.disciplineName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[学科名称(disciplineName)]的长度不能超过50(In 学科(Discipline))!值:${pobjDisciplineEN.disciplineName}(clsDisciplineBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.memo) == false && GetStrLen(pobjDisciplineEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学科(Discipline))!值:${pobjDisciplineEN.memo}(clsDisciplineBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjDisciplineEN.idDiscipline) == false && undefined !== pobjDisciplineEN.idDiscipline && tzDataType.isString(pobjDisciplineEN.idDiscipline) === false)
{
 throw new Error(`(errid:Watl000417)字段[学科流水号(idDiscipline)]的值:[${pobjDisciplineEN.idDiscipline}], 非法,应该为字符型(In 学科(Discipline))!(clsDisciplineBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineID) == false && undefined !== pobjDisciplineEN.disciplineID && tzDataType.isString(pobjDisciplineEN.disciplineID) === false)
{
 throw new Error(`(errid:Watl000417)字段[学科ID(disciplineID)]的值:[${pobjDisciplineEN.disciplineID}], 非法,应该为字符型(In 学科(Discipline))!(clsDisciplineBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.disciplineName) == false && undefined !== pobjDisciplineEN.disciplineName && tzDataType.isString(pobjDisciplineEN.disciplineName) === false)
{
 throw new Error(`(errid:Watl000417)字段[学科名称(disciplineName)]的值:[${pobjDisciplineEN.disciplineName}], 非法,应该为字符型(In 学科(Discipline))!(clsDisciplineBL:CheckProperty4Update)`);
}
if (null != pobjDisciplineEN.sequenceNumber && undefined !== pobjDisciplineEN.sequenceNumber && tzDataType.isNumber(pobjDisciplineEN.sequenceNumber) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(sequenceNumber)]的值:[${pobjDisciplineEN.sequenceNumber}], 非法,应该为数值型(In 学科(Discipline))!(clsDisciplineBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjDisciplineEN.memo) == false && undefined !== pobjDisciplineEN.memo && tzDataType.isString(pobjDisciplineEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjDisciplineEN.memo}], 非法,应该为字符型(In 学科(Discipline))!(clsDisciplineBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjDisciplineEN.idDiscipline) === true )
{
 throw new Error(`(errid:Watl000064)字段[学科流水号]不能为空(In 学科)!(clsDisciplineBL:CheckProperty4Update)`);
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
export  function Discipline_GetJSONStrByObj (pobjDisciplineEN: clsDisciplineEN): string
{
pobjDisciplineEN.sfUpdFldSetStr = pobjDisciplineEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjDisciplineEN);
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
export  function Discipline_GetObjLstByJSONStr (strJSON: string): Array<clsDisciplineEN>
{
let arrDisciplineObjLst = new Array<clsDisciplineEN>();
if (strJSON === "")
{
return arrDisciplineObjLst;
}
try
{
arrDisciplineObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrDisciplineObjLst;
}
return arrDisciplineObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDisciplineObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function Discipline_GetObjLstByJSONObjLst (arrDisciplineObjLstS: Array<clsDisciplineEN>): Array<clsDisciplineEN>
{
const arrDisciplineObjLst = new Array<clsDisciplineEN>();
for (const objInFor of arrDisciplineObjLstS) {
const obj1 = Discipline_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrDisciplineObjLst.push(obj1);
}
return arrDisciplineObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Discipline_GetObjByJSONStr (strJSON: string): clsDisciplineEN
{
let pobjDisciplineEN = new clsDisciplineEN();
if (strJSON === "")
{
return pobjDisciplineEN;
}
try
{
pobjDisciplineEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjDisciplineEN;
}
return pobjDisciplineEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function Discipline_GetCombineCondition(objDisciplineCond: clsDisciplineEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objDisciplineCond.dicFldComparisonOp, clsDisciplineEN.con_IdDiscipline) == true)
{
const strComparisonOpIdDiscipline:string = objDisciplineCond.dicFldComparisonOp[clsDisciplineEN.con_IdDiscipline];
strWhereCond += Format(" And {0} {2} '{1}'", clsDisciplineEN.con_IdDiscipline, objDisciplineCond.idDiscipline, strComparisonOpIdDiscipline);
}
if (Object.prototype.hasOwnProperty.call(objDisciplineCond.dicFldComparisonOp, clsDisciplineEN.con_DisciplineID) == true)
{
const strComparisonOpDisciplineID:string = objDisciplineCond.dicFldComparisonOp[clsDisciplineEN.con_DisciplineID];
strWhereCond += Format(" And {0} {2} '{1}'", clsDisciplineEN.con_DisciplineID, objDisciplineCond.disciplineID, strComparisonOpDisciplineID);
}
if (Object.prototype.hasOwnProperty.call(objDisciplineCond.dicFldComparisonOp, clsDisciplineEN.con_DisciplineName) == true)
{
const strComparisonOpDisciplineName:string = objDisciplineCond.dicFldComparisonOp[clsDisciplineEN.con_DisciplineName];
strWhereCond += Format(" And {0} {2} '{1}'", clsDisciplineEN.con_DisciplineName, objDisciplineCond.disciplineName, strComparisonOpDisciplineName);
}
if (Object.prototype.hasOwnProperty.call(objDisciplineCond.dicFldComparisonOp, clsDisciplineEN.con_SequenceNumber) == true)
{
const strComparisonOpSequenceNumber:string = objDisciplineCond.dicFldComparisonOp[clsDisciplineEN.con_SequenceNumber];
strWhereCond += Format(" And {0} {2} {1}", clsDisciplineEN.con_SequenceNumber, objDisciplineCond.sequenceNumber, strComparisonOpSequenceNumber);
}
if (Object.prototype.hasOwnProperty.call(objDisciplineCond.dicFldComparisonOp, clsDisciplineEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objDisciplineCond.dicFldComparisonOp[clsDisciplineEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsDisciplineEN.con_Memo, objDisciplineCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objDisciplineENS:源对象
 * @param objDisciplineENT:目标对象
*/
export  function Discipline_CopyObjTo(objDisciplineENS: clsDisciplineEN , objDisciplineENT: clsDisciplineEN ): void 
{
objDisciplineENT.idDiscipline = objDisciplineENS.idDiscipline; //学科流水号
objDisciplineENT.disciplineID = objDisciplineENS.disciplineID; //学科ID
objDisciplineENT.disciplineName = objDisciplineENS.disciplineName; //学科名称
objDisciplineENT.sequenceNumber = objDisciplineENS.sequenceNumber; //序号
objDisciplineENT.memo = objDisciplineENS.memo; //备注
objDisciplineENT.sfUpdFldSetStr = objDisciplineENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDisciplineENS:源对象
 * @param objDisciplineENT:目标对象
*/
export  function Discipline_GetObjFromJsonObj(objDisciplineENS: clsDisciplineEN): clsDisciplineEN 
{
 const objDisciplineENT: clsDisciplineEN = new clsDisciplineEN();
ObjectAssign(objDisciplineENT, objDisciplineENS);
 return objDisciplineENT;
}