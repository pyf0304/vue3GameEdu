
 /**
 * 类名:clsge_ExaminationCriteriaExWApi
 * 表名:ge_ExaminationCriteria(01120898)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:05:18
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
 * 题目检查标准表(ge_ExaminationCriteria)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年11月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo,GetObjKeys } from "@/ts/PubFun/clsCommFunc4Web";
import { ge_ExaminationCriteria_GetObjLstCache,ge_ExaminationCriteria_GetObjLstByPagerAsync,ge_ExaminationCriteria_SortFunByKey,ge_ExaminationCriteria_FilterFunByKey } from "@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsge_ExaminationCriteriaEN } from "@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN";
import { clsge_ExaminationCriteriaENEx } from "@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaENEx";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";

export const ge_ExaminationCriteriaExController = "ge_ExaminationCriteriaExApi";
export const ge_ExaminationCriteriaEx_ConstructorName = "ge_ExaminationCriteriaEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function ge_ExaminationCriteriaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_ExaminationCriteriaENS:源对象
 * @returns 目标对象=>clsge_ExaminationCriteriaEN:objge_ExaminationCriteriaENT
 **/
export  function ge_ExaminationCriteriaEx_CopyToEx(objge_ExaminationCriteriaENS:clsge_ExaminationCriteriaEN ): clsge_ExaminationCriteriaENEx
{
const strThisFuncName  = ge_ExaminationCriteriaEx_CopyToEx.name;
 const objge_ExaminationCriteriaENT = new clsge_ExaminationCriteriaENEx();
try
{
ObjectAssign(objge_ExaminationCriteriaENT, objge_ExaminationCriteriaENS);
 return objge_ExaminationCriteriaENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, ge_ExaminationCriteriaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_ExaminationCriteriaENT;
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function ge_ExaminationCriteriaEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara , strCourseId:string):Promise<Array<clsge_ExaminationCriteriaENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
const arrge_ExaminationCriteriaObjLst = await ge_ExaminationCriteria_GetObjLstCache(strCourseId);
const arrge_ExaminationCriteriaExObjLst = arrge_ExaminationCriteriaObjLst.map(ge_ExaminationCriteriaEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsge_ExaminationCriteriaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrge_ExaminationCriteriaExObjLst) {
await ge_ExaminationCriteriaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrge_ExaminationCriteriaExObjLst.length == 0) return arrge_ExaminationCriteriaExObjLst;
let arrge_ExaminationCriteriaSel: Array < clsge_ExaminationCriteriaENEx > = arrge_ExaminationCriteriaExObjLst;
const objCond = JSON.parse(objPagerPara.whereCond);
const objge_ExaminationCriteriaCond = new clsge_ExaminationCriteriaENEx();
ObjectAssign(objge_ExaminationCriteriaCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsge_ExaminationCriteriaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objge_ExaminationCriteriaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_ExaminationCriteriaSel.length == 0) return arrge_ExaminationCriteriaSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.sort(ge_ExaminationCriteriaEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.sort(objPagerPara.sortFun);
}
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.slice(intStart, intEnd);     
return arrge_ExaminationCriteriaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_ExaminationCriteriaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ExaminationCriteriaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function ge_ExaminationCriteriaEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsge_ExaminationCriteriaENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrge_ExaminationCriteriaObjLst = await ge_ExaminationCriteria_GetObjLstByPagerAsync(objPagerPara);
const arrge_ExaminationCriteriaExObjLst = arrge_ExaminationCriteriaObjLst.map(ge_ExaminationCriteriaEx_CopyToEx);
if (arrge_ExaminationCriteriaExObjLst.length == 0) return arrge_ExaminationCriteriaExObjLst;
let arrge_ExaminationCriteriaSel: Array < clsge_ExaminationCriteriaENEx > = arrge_ExaminationCriteriaExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.sort(ge_ExaminationCriteriaEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_ExaminationCriteriaSel = arrge_ExaminationCriteriaSel.sort(objPagerPara.sortFun);
}
return arrge_ExaminationCriteriaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_ExaminationCriteriaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_ExaminationCriteriaENEx>();
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
export  function ge_ExaminationCriteriaEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_ExaminationCriteriaENEx.con_CourseName:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return a.courseName.localeCompare(b.courseName);
}
case clsge_ExaminationCriteriaENEx.con_ControlTypeName:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return a.controlTypeName.localeCompare(b.controlTypeName);
}
case clsge_ExaminationCriteriaENEx.con_EventTypeName:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return a.eventTypeName.localeCompare(b.eventTypeName);
}
case clsge_ExaminationCriteriaENEx.con_TypeDescribe:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return a.typeDescribe.localeCompare(b.typeDescribe);
}
case clsge_ExaminationCriteriaENEx.con_QuestionName:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return a.questionName.localeCompare(b.questionName);
}
        default:
return ge_ExaminationCriteria_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsge_ExaminationCriteriaENEx.con_CourseName:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return b.courseName.localeCompare(a.courseName);
}
case clsge_ExaminationCriteriaENEx.con_ControlTypeName:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return b.controlTypeName.localeCompare(a.controlTypeName);
}
case clsge_ExaminationCriteriaENEx.con_EventTypeName:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return b.eventTypeName.localeCompare(a.eventTypeName);
}
case clsge_ExaminationCriteriaENEx.con_TypeDescribe:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return b.typeDescribe.localeCompare(a.typeDescribe);
}
case clsge_ExaminationCriteriaENEx.con_QuestionName:
return (a: clsge_ExaminationCriteriaENEx, b: clsge_ExaminationCriteriaENEx) => {
return b.questionName.localeCompare(a.questionName);
}
        default:
return ge_ExaminationCriteria_SortFunByKey(strKey, AscOrDesc);
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
export  function ge_ExaminationCriteriaEx_FuncMapByFldName(strFldName: string, objge_ExaminationCriteriaEx: clsge_ExaminationCriteriaENEx)
{
const strThisFuncName = ge_ExaminationCriteriaEx_FuncMapByFldName.name;
console.log(objge_ExaminationCriteriaEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsge_ExaminationCriteriaEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ge_ExaminationCriteriaEx_FilterFunByKey(strKey:string, value: any)
{
switch (strKey)
{

case clsge_ExaminationCriteriaENEx.con_CourseName:
return (obj: clsge_ExaminationCriteriaENEx) => {
return obj.courseName === value;
}
case clsge_ExaminationCriteriaENEx.con_ControlTypeName:
return (obj: clsge_ExaminationCriteriaENEx) => {
return obj.controlTypeName === value;
}
case clsge_ExaminationCriteriaENEx.con_EventTypeName:
return (obj: clsge_ExaminationCriteriaENEx) => {
return obj.eventTypeName === value;
}
case clsge_ExaminationCriteriaENEx.con_TypeDescribe:
return (obj: clsge_ExaminationCriteriaENEx) => {
return obj.typeDescribe === value;
}
case clsge_ExaminationCriteriaENEx.con_QuestionName:
return (obj: clsge_ExaminationCriteriaENEx) => {
return obj.questionName === value;
}
        default:
return ge_ExaminationCriteria_FilterFunByKey(strKey, value);
 }
}
