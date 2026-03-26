
 /**
 * 类名:clsge_EventTypeExWApi
 * 表名:ge_EventType(01120899)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:11:01
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 事件类型表(ge_EventType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年11月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo,GetObjKeys } from "@/ts/PubFun/clsCommFunc4Web";
import { ge_EventType_GetObjLstCache,ge_EventType_GetObjLstByPagerAsync,ge_EventType_SortFunByKey } from "@/ts/L3ForWApi/GameLearn/clsge_EventTypeWApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsge_EventTypeEN } from "@/ts/L0Entity/GameLearn/clsge_EventTypeEN";
import { clsge_EventTypeENEx } from "@/ts/L0Entity/GameLearn/clsge_EventTypeENEx";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";

export const ge_EventTypeExController = "ge_EventTypeExApi";
export const ge_EventTypeEx_ConstructorName = "ge_EventTypeEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function ge_EventTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objge_EventTypeENS:源对象
 * @returns 目标对象=>clsge_EventTypeEN:objge_EventTypeENT
 **/
export  function ge_EventTypeEx_CopyToEx(objge_EventTypeENS:clsge_EventTypeEN ): clsge_EventTypeENEx
{
const strThisFuncName  = ge_EventTypeEx_CopyToEx.name;
 const objge_EventTypeENT = new clsge_EventTypeENEx();
try
{
ObjectAssign(objge_EventTypeENT, objge_EventTypeENS);
 return objge_EventTypeENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, ge_EventTypeEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_EventTypeENT;
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function ge_EventTypeEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara ):Promise<Array<clsge_EventTypeENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
const arrge_EventTypeObjLst = await ge_EventType_GetObjLstCache();
const arrge_EventTypeExObjLst = arrge_EventTypeObjLst.map(ge_EventTypeEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsge_EventTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrge_EventTypeExObjLst) {
await ge_EventTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrge_EventTypeExObjLst.length == 0) return arrge_EventTypeExObjLst;
let arrge_EventTypeSel: Array < clsge_EventTypeENEx > = arrge_EventTypeExObjLst;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_EventTypeCond = new clsge_EventTypeENEx();
ObjectAssign(objge_EventTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_EventTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_EventTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_EventTypeSel = arrge_EventTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_EventTypeSel.length == 0) return arrge_EventTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_EventTypeSel = arrge_EventTypeSel.sort(ge_EventTypeEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_EventTypeSel = arrge_EventTypeSel.sort(objPagerPara.sortFun);
}
arrge_EventTypeSel = arrge_EventTypeSel.slice(intStart, intEnd);     
return arrge_EventTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_EventTypeEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_EventTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function ge_EventTypeEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsge_EventTypeENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrge_EventTypeObjLst = await ge_EventType_GetObjLstByPagerAsync(objPagerPara);
const arrge_EventTypeExObjLst = arrge_EventTypeObjLst.map(ge_EventTypeEx_CopyToEx);
if (arrge_EventTypeExObjLst.length == 0) return arrge_EventTypeExObjLst;
let arrge_EventTypeSel: Array < clsge_EventTypeENEx > = arrge_EventTypeExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_EventTypeSel = arrge_EventTypeSel.sort(ge_EventTypeEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_EventTypeSel = arrge_EventTypeSel.sort(objPagerPara.sortFun);
}
return arrge_EventTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_EventTypeEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_EventTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function ge_EventTypeEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return ge_EventType_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return ge_EventType_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function ge_EventTypeEx_FuncMapByFldName(strFldName: string, objge_EventTypeEx: clsge_EventTypeENEx)
{
const strThisFuncName = ge_EventTypeEx_FuncMapByFldName.name;
console.log(objge_EventTypeEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsge_EventTypeEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}
