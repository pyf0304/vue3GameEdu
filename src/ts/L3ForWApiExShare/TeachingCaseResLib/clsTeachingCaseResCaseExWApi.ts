
 /**
 * 类名:clsTeachingCaseResCaseExWApi
 * 表名:TeachingCaseResCase(01120377)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:08:43
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 教学案例资源案例(TeachingCaseResCase)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年11月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsTeachingCaseResCaseENEx } from "@/ts/L0Entity/TeachingCaseResLib/clsTeachingCaseResCaseENEx";
import { TeachingCaseResCase_GetObjLstByPagerAsync,TeachingCaseResCase_SortFunByKey,TeachingCaseResCase_FilterFunByKey } from "@/ts/L3ForWApi/TeachingCaseResLib/clsTeachingCaseResCaseWApi";
import { clsTeachingCaseResCaseEN } from "@/ts/L0Entity/TeachingCaseResLib/clsTeachingCaseResCaseEN";
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

export const teachingCaseResCaseExController = "TeachingCaseResCaseExApi";
export const teachingCaseResCaseEx_ConstructorName = "teachingCaseResCaseEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function TeachingCaseResCaseEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objTeachingCaseResCaseENS:源对象
 * @returns 目标对象=>clsTeachingCaseResCaseEN:objTeachingCaseResCaseENT
 **/
export  function TeachingCaseResCaseEx_CopyToEx(objTeachingCaseResCaseENS:clsTeachingCaseResCaseEN ): clsTeachingCaseResCaseENEx
{
const strThisFuncName  = TeachingCaseResCaseEx_CopyToEx.name;
 const objTeachingCaseResCaseENT = new clsTeachingCaseResCaseENEx();
try
{
ObjectAssign(objTeachingCaseResCaseENT, objTeachingCaseResCaseENS);
 return objTeachingCaseResCaseENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, teachingCaseResCaseEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objTeachingCaseResCaseENT;
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function TeachingCaseResCaseEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsTeachingCaseResCaseENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrTeachingCaseResCaseObjLst = await TeachingCaseResCase_GetObjLstByPagerAsync(objPagerPara);
const arrTeachingCaseResCaseExObjLst = arrTeachingCaseResCaseObjLst.map(TeachingCaseResCaseEx_CopyToEx);
if (arrTeachingCaseResCaseExObjLst.length == 0) return arrTeachingCaseResCaseExObjLst;
let arrTeachingCaseResCaseSel: Array < clsTeachingCaseResCaseENEx > = arrTeachingCaseResCaseExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrTeachingCaseResCaseSel = arrTeachingCaseResCaseSel.sort(TeachingCaseResCaseEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrTeachingCaseResCaseSel = arrTeachingCaseResCaseSel.sort(objPagerPara.sortFun);
}
return arrTeachingCaseResCaseSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, teachingCaseResCaseEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsTeachingCaseResCaseENEx>();
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
export  function TeachingCaseResCaseEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsTeachingCaseResCaseENEx.con_CaseTypeName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return a.caseTypeName.localeCompare(b.caseTypeName);
}
case clsTeachingCaseResCaseENEx.con_CollegeName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return a.collegeName.localeCompare(b.collegeName);
}
case clsTeachingCaseResCaseENEx.con_MajorName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return a.majorName.localeCompare(b.majorName);
}
case clsTeachingCaseResCaseENEx.con_CourseName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return a.courseName.localeCompare(b.courseName);
}
case clsTeachingCaseResCaseENEx.con_ChapterName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return a.chapterName.localeCompare(b.chapterName);
}
        default:
return TeachingCaseResCase_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsTeachingCaseResCaseENEx.con_CaseTypeName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return b.caseTypeName.localeCompare(a.caseTypeName);
}
case clsTeachingCaseResCaseENEx.con_CollegeName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return b.collegeName.localeCompare(a.collegeName);
}
case clsTeachingCaseResCaseENEx.con_MajorName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return b.majorName.localeCompare(a.majorName);
}
case clsTeachingCaseResCaseENEx.con_CourseName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return b.courseName.localeCompare(a.courseName);
}
case clsTeachingCaseResCaseENEx.con_ChapterName:
return (a: clsTeachingCaseResCaseENEx, b: clsTeachingCaseResCaseENEx) => {
return b.chapterName.localeCompare(a.chapterName);
}
        default:
return TeachingCaseResCase_SortFunByKey(strKey, AscOrDesc);
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
export  function TeachingCaseResCaseEx_FuncMapByFldName(strFldName: string, objTeachingCaseResCaseEx: clsTeachingCaseResCaseENEx)
{
const strThisFuncName = TeachingCaseResCaseEx_FuncMapByFldName.name;
console.log(objTeachingCaseResCaseEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsTeachingCaseResCaseEN.AttributeName;
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
export  async function TeachingCaseResCaseEx_FilterFunByKey(strKey:string, value: any)
{
switch (strKey)
{

case clsTeachingCaseResCaseENEx.con_CaseTypeName:
return (obj: clsTeachingCaseResCaseENEx) => {
return obj.caseTypeName === value;
}
case clsTeachingCaseResCaseENEx.con_CollegeName:
return (obj: clsTeachingCaseResCaseENEx) => {
return obj.collegeName === value;
}
case clsTeachingCaseResCaseENEx.con_MajorName:
return (obj: clsTeachingCaseResCaseENEx) => {
return obj.majorName === value;
}
case clsTeachingCaseResCaseENEx.con_CourseName:
return (obj: clsTeachingCaseResCaseENEx) => {
return obj.courseName === value;
}
case clsTeachingCaseResCaseENEx.con_ChapterName:
return (obj: clsTeachingCaseResCaseENEx) => {
return obj.chapterName === value;
}
        default:
return TeachingCaseResCase_FilterFunByKey(strKey, value);
 }
}
