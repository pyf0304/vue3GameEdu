
 /**
 * 类名:clsge_InspectionResultsExWApi
 * 表名:ge_InspectionResults(01120897)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:05:14
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
 * 编程检查结果表(ge_InspectionResults)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年11月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsge_InspectionResultsENEx } from "@/ts/L0Entity/GameLearn/clsge_InspectionResultsENEx";
import { ge_InspectionResults_GetObjLstByPagerAsync,ge_InspectionResults_SortFunByKey,ge_InspectionResults_FilterFunByKey } from "@/ts/L3ForWApi/GameLearn/clsge_InspectionResultsWApi";
import { ge_ExaminationCriteria_func,ge_ExaminationCriteria_funcKey } from "@/ts/L3ForWApi/GameLearn/clsge_ExaminationCriteriaWApi";
import { clsge_ExaminationCriteriaEN } from "@/ts/L0Entity/GameLearn/clsge_ExaminationCriteriaEN";
import { clsge_InspectionResultsEN } from "@/ts/L0Entity/GameLearn/clsge_InspectionResultsEN";
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

export const ge_InspectionResultsExController = "ge_InspectionResultsExApi";
export const ge_InspectionResultsEx_ConstructorName = "ge_InspectionResultsEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function ge_InspectionResultsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_InspectionResultsENS:源对象
 * @returns 目标对象=>clsge_InspectionResultsEN:objge_InspectionResultsENT
 **/
export  function ge_InspectionResultsEx_CopyToEx(objge_InspectionResultsENS:clsge_InspectionResultsEN ): clsge_InspectionResultsENEx
{
const strThisFuncName  = ge_InspectionResultsEx_CopyToEx.name;
 const objge_InspectionResultsENT = new clsge_InspectionResultsENEx();
try
{
ObjectAssign(objge_InspectionResultsENT, objge_InspectionResultsENS);
 return objge_InspectionResultsENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_InspectionResultsENT;
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function ge_InspectionResultsEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsge_InspectionResultsENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrge_InspectionResultsObjLst = await ge_InspectionResults_GetObjLstByPagerAsync(objPagerPara);
const arrge_InspectionResultsExObjLst = arrge_InspectionResultsObjLst.map(ge_InspectionResultsEx_CopyToEx);
if (arrge_InspectionResultsExObjLst.length == 0) return arrge_InspectionResultsExObjLst;
let arrge_InspectionResultsSel: Array < clsge_InspectionResultsENEx > = arrge_InspectionResultsExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_InspectionResultsSel = arrge_InspectionResultsSel.sort(ge_InspectionResultsEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_InspectionResultsSel = arrge_InspectionResultsSel.sort(objPagerPara.sortFun);
}
return arrge_InspectionResultsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_InspectionResultsENEx>();
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapDescribe(objge_InspectionResults:clsge_InspectionResultsENEx )
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapDescribe.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.describe) == true){
 const geExaminationCriteriaCriteriaId = objge_InspectionResults.criteriaId;
 const geExaminationCriteriaDescribe = await ge_ExaminationCriteria_func(clsge_ExaminationCriteriaEN.con_CriteriaId, clsge_ExaminationCriteriaEN.con_Describe, geExaminationCriteriaCriteriaId , objge_InspectionResults.courseId);
 objge_InspectionResults.describe = geExaminationCriteriaDescribe;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000901)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapControlHtml(objge_InspectionResults:clsge_InspectionResultsENEx )
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapControlHtml.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.controlHtml) == true){
 const geExaminationCriteriaCriteriaId = objge_InspectionResults.criteriaId;
 const geExaminationCriteriaControlHtml = await ge_ExaminationCriteria_func(clsge_ExaminationCriteriaEN.con_CriteriaId, clsge_ExaminationCriteriaEN.con_ControlHtml, geExaminationCriteriaCriteriaId , objge_InspectionResults.courseId);
 objge_InspectionResults.controlHtml = geExaminationCriteriaControlHtml;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000902)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapControlId(objge_InspectionResults:clsge_InspectionResultsENEx )
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapControlId.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.controlId) == true){
 const geExaminationCriteriaCriteriaId = objge_InspectionResults.criteriaId;
 const geExaminationCriteriaControlId = await ge_ExaminationCriteria_func(clsge_ExaminationCriteriaEN.con_CriteriaId, clsge_ExaminationCriteriaEN.con_ControlId, geExaminationCriteriaCriteriaId , objge_InspectionResults.courseId);
 objge_InspectionResults.controlId = geExaminationCriteriaControlId;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000903)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapControlClass(objge_InspectionResults:clsge_InspectionResultsENEx )
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapControlClass.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.controlClass) == true){
 const geExaminationCriteriaCriteriaId = objge_InspectionResults.criteriaId;
 const geExaminationCriteriaControlClass = await ge_ExaminationCriteria_func(clsge_ExaminationCriteriaEN.con_CriteriaId, clsge_ExaminationCriteriaEN.con_ControlClass, geExaminationCriteriaCriteriaId , objge_InspectionResults.courseId);
 objge_InspectionResults.controlClass = geExaminationCriteriaControlClass;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000904)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapControlValue(objge_InspectionResults:clsge_InspectionResultsENEx )
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapControlValue.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.controlValue) == true){
 const geExaminationCriteriaCriteriaId = objge_InspectionResults.criteriaId;
 const geExaminationCriteriaControlValue = await ge_ExaminationCriteria_func(clsge_ExaminationCriteriaEN.con_CriteriaId, clsge_ExaminationCriteriaEN.con_ControlValue, geExaminationCriteriaCriteriaId , objge_InspectionResults.courseId);
 objge_InspectionResults.controlValue = geExaminationCriteriaControlValue;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000905)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
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
export  function ge_InspectionResultsEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_InspectionResultsENEx.con_QuestionName:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return a.questionName.localeCompare(b.questionName);
}
case clsge_InspectionResultsENEx.con_CourseId:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_InspectionResultsENEx.con_ControlId:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return a.controlId.localeCompare(b.controlId);
}
case clsge_InspectionResultsENEx.con_ControlClass:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return a.controlClass.localeCompare(b.controlClass);
}
case clsge_InspectionResultsENEx.con_ControlHtml:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return a.controlHtml.localeCompare(b.controlHtml);
}
case clsge_InspectionResultsENEx.con_Result:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return a.result.localeCompare(b.result);
}
case clsge_InspectionResultsENEx.con_ControlValue:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return a.controlValue.localeCompare(b.controlValue);
}
case clsge_InspectionResultsENEx.con_Describe:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return a.describe.localeCompare(b.describe);
}
        default:
return ge_InspectionResults_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsge_InspectionResultsENEx.con_QuestionName:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return b.questionName.localeCompare(a.questionName);
}
case clsge_InspectionResultsENEx.con_CourseId:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_InspectionResultsENEx.con_ControlId:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return b.controlId.localeCompare(a.controlId);
}
case clsge_InspectionResultsENEx.con_ControlClass:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return b.controlClass.localeCompare(a.controlClass);
}
case clsge_InspectionResultsENEx.con_ControlHtml:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return b.controlHtml.localeCompare(a.controlHtml);
}
case clsge_InspectionResultsENEx.con_Result:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return b.result.localeCompare(a.result);
}
case clsge_InspectionResultsENEx.con_ControlValue:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return b.controlValue.localeCompare(a.controlValue);
}
case clsge_InspectionResultsENEx.con_Describe:
return (a: clsge_InspectionResultsENEx, b: clsge_InspectionResultsENEx) => {
return b.describe.localeCompare(a.describe);
}
        default:
return ge_InspectionResults_SortFunByKey(strKey, AscOrDesc);
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
export  function ge_InspectionResultsEx_FuncMapByFldName(strFldName: string, objge_InspectionResultsEx: clsge_InspectionResultsENEx)
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapByFldName.name;
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsge_InspectionResultsEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsge_InspectionResultsENEx.con_ControlId:
return ge_InspectionResultsEx_FuncMapControlId(objge_InspectionResultsEx);
case clsge_InspectionResultsENEx.con_ControlClass:
return ge_InspectionResultsEx_FuncMapControlClass(objge_InspectionResultsEx);
case clsge_InspectionResultsENEx.con_ControlHtml:
return ge_InspectionResultsEx_FuncMapControlHtml(objge_InspectionResultsEx);
case clsge_InspectionResultsENEx.con_ControlValue:
return ge_InspectionResultsEx_FuncMapControlValue(objge_InspectionResultsEx);
case clsge_InspectionResultsENEx.con_Describe:
return ge_InspectionResultsEx_FuncMapDescribe(objge_InspectionResultsEx);
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
export  async function ge_InspectionResultsEx_FilterFunByKey(strKey:string, value: any)
{
switch (strKey)
{

case clsge_InspectionResultsENEx.con_QuestionName:
return (obj: clsge_InspectionResultsENEx) => {
return obj.questionName === value;
}
case clsge_InspectionResultsENEx.con_CourseId:
return (obj: clsge_InspectionResultsENEx) => {
return obj.courseId === value;
}
case clsge_InspectionResultsENEx.con_ControlId:
return (obj: clsge_InspectionResultsENEx) => {
return obj.controlId === value;
}
case clsge_InspectionResultsENEx.con_ControlClass:
return (obj: clsge_InspectionResultsENEx) => {
return obj.controlClass === value;
}
case clsge_InspectionResultsENEx.con_ControlHtml:
return (obj: clsge_InspectionResultsENEx) => {
return obj.controlHtml === value;
}
case clsge_InspectionResultsENEx.con_Result:
return (obj: clsge_InspectionResultsENEx) => {
return obj.result === value;
}
case clsge_InspectionResultsENEx.con_ControlValue:
return (obj: clsge_InspectionResultsENEx) => {
return obj.controlValue === value;
}
case clsge_InspectionResultsENEx.con_Describe:
return (obj: clsge_InspectionResultsENEx) => {
return obj.describe === value;
}
        default:
return ge_InspectionResults_FilterFunByKey(strKey, value);
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapKeyDescribe(objge_InspectionResults:clsge_InspectionResultsENEx ): Promise<Array<string>>
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapKeyDescribe.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.describe) == true) return [];
 const geExaminationCriteriaDescribe = objge_InspectionResults.describe;
 const arrCriteriaId = await ge_ExaminationCriteria_funcKey(clsge_ExaminationCriteriaEN.con_Describe, geExaminationCriteriaDescribe , objge_InspectionResults.courseId, enumComparisonOp.Like_03);
 return arrCriteriaId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000906)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapKeyControlHtml(objge_InspectionResults:clsge_InspectionResultsENEx ): Promise<Array<string>>
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapKeyControlHtml.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.controlHtml) == true) return [];
 const geExaminationCriteriaControlHtml = objge_InspectionResults.controlHtml;
 const arrCriteriaId = await ge_ExaminationCriteria_funcKey(clsge_ExaminationCriteriaEN.con_ControlHtml, geExaminationCriteriaControlHtml , objge_InspectionResults.courseId, enumComparisonOp.Like_03);
 return arrCriteriaId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000907)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapKeyControlId(objge_InspectionResults:clsge_InspectionResultsENEx ): Promise<Array<string>>
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapKeyControlId.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.controlId) == true) return [];
 const geExaminationCriteriaControlId = objge_InspectionResults.controlId;
 const arrCriteriaId = await ge_ExaminationCriteria_funcKey(clsge_ExaminationCriteriaEN.con_ControlId, geExaminationCriteriaControlId , objge_InspectionResults.courseId, enumComparisonOp.Like_03);
 return arrCriteriaId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000908)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapKeyControlClass(objge_InspectionResults:clsge_InspectionResultsENEx ): Promise<Array<string>>
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapKeyControlClass.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.controlClass) == true) return [];
 const geExaminationCriteriaControlClass = objge_InspectionResults.controlClass;
 const arrCriteriaId = await ge_ExaminationCriteria_funcKey(clsge_ExaminationCriteriaEN.con_ControlClass, geExaminationCriteriaControlClass , objge_InspectionResults.courseId, enumComparisonOp.Like_03);
 return arrCriteriaId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000909)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_InspectionResultsS:源对象
 **/
export  async function ge_InspectionResultsEx_FuncMapKeyControlValue(objge_InspectionResults:clsge_InspectionResultsENEx ): Promise<Array<string>>
{
const strThisFuncName = ge_InspectionResultsEx_FuncMapKeyControlValue.name;
try
{
if (IsNullOrEmpty(objge_InspectionResults.controlValue) == true) return [];
 const geExaminationCriteriaControlValue = objge_InspectionResults.controlValue;
 const arrCriteriaId = await ge_ExaminationCriteria_funcKey(clsge_ExaminationCriteriaEN.con_ControlValue, geExaminationCriteriaControlValue , objge_InspectionResults.courseId, enumComparisonOp.Like_03);
 return arrCriteriaId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000910)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_InspectionResultsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
