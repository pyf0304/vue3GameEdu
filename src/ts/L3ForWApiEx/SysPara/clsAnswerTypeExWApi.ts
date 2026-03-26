
 /**
 * 类名:clsAnswerTypeExWApi
 * 表名:AnswerType(01120004)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/14 03:53:36
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 答案类型(AnswerType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年11月14日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo,GetObjKeys } from "@/ts/PubFun/clsCommFunc4Web";
import { AnswerType_GetObjLstCache,AnswerType_GetObjLstByPagerAsync,AnswerType_SortFunByKey } from "@/ts/L3ForWApi/SysPara/clsAnswerTypeWApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsAnswerTypeEN } from "@/ts/L0Entity/SysPara/clsAnswerTypeEN";
import { clsAnswerTypeENEx } from "@/ts/L0Entity/SysPara/clsAnswerTypeENEx";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";

export const answerTypeExController = "AnswerTypeExApi";
export const answerTypeEx_ConstructorName = "answerTypeEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function AnswerTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objAnswerTypeENS:源对象
 * @returns 目标对象=>clsAnswerTypeEN:objAnswerTypeENT
 **/
export  function AnswerTypeEx_CopyToEx(objAnswerTypeENS:clsAnswerTypeEN ): clsAnswerTypeENEx
{
const strThisFuncName  = AnswerTypeEx_CopyToEx.name;
 const objAnswerTypeENT = new clsAnswerTypeENEx();
try
{
ObjectAssign(objAnswerTypeENT, objAnswerTypeENS);
 return objAnswerTypeENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, answerTypeEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objAnswerTypeENT;
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function AnswerTypeEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara ):Promise<Array<clsAnswerTypeENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
const arrAnswerTypeObjLst = await AnswerType_GetObjLstCache();
const arrAnswerTypeExObjLst = arrAnswerTypeObjLst.map(AnswerTypeEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsAnswerTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrAnswerTypeExObjLst) {
await AnswerTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrAnswerTypeExObjLst.length == 0) return arrAnswerTypeExObjLst;
let arrAnswerTypeSel: Array < clsAnswerTypeENEx > = arrAnswerTypeExObjLst;
const objCond = JSON.parse(objPagerPara.whereCond);
const objAnswerTypeCond = new clsAnswerTypeENEx();
ObjectAssign(objAnswerTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsAnswerTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAnswerTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAnswerTypeSel = arrAnswerTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrAnswerTypeSel.length == 0) return arrAnswerTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrAnswerTypeSel = arrAnswerTypeSel.sort(AnswerTypeEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrAnswerTypeSel = arrAnswerTypeSel.sort(objPagerPara.sortFun);
}
arrAnswerTypeSel = arrAnswerTypeSel.slice(intStart, intEnd);     
return arrAnswerTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, answerTypeEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsAnswerTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function AnswerTypeEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsAnswerTypeENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrAnswerTypeObjLst = await AnswerType_GetObjLstByPagerAsync(objPagerPara);
const arrAnswerTypeExObjLst = arrAnswerTypeObjLst.map(AnswerTypeEx_CopyToEx);
if (arrAnswerTypeExObjLst.length == 0) return arrAnswerTypeExObjLst;
let arrAnswerTypeSel: Array < clsAnswerTypeENEx > = arrAnswerTypeExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrAnswerTypeSel = arrAnswerTypeSel.sort(AnswerTypeEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrAnswerTypeSel = arrAnswerTypeSel.sort(objPagerPara.sortFun);
}
return arrAnswerTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, answerTypeEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsAnswerTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-14
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function AnswerTypeEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return AnswerType_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return AnswerType_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-14
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function AnswerTypeEx_FuncMapByFldName(strFldName: string, objAnswerTypeEx: clsAnswerTypeENEx)
{
const strThisFuncName = AnswerTypeEx_FuncMapByFldName.name;
console.log(objAnswerTypeEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsAnswerTypeEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}
