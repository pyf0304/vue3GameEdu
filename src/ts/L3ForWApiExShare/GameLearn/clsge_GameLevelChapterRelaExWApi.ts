
 /**
 * 类名:clsge_GameLevelChapterRelaExWApi
 * 表名:ge_GameLevelChapterRela(01120913)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:11:10
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
 * 游戏关卡章节关系表(ge_GameLevelChapterRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年11月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsge_GameLevelChapterRelaENEx } from "@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaENEx";
import { ge_GameLevelChapterRela_GetObjLstByPagerAsync,ge_GameLevelChapterRela_SortFunByKey,ge_GameLevelChapterRela_FilterFunByKey } from "@/ts/L3ForWApi/GameLearn/clsge_GameLevelChapterRelaWApi";
import { clsge_GameLevelChapterRelaEN } from "@/ts/L0Entity/GameLearn/clsge_GameLevelChapterRelaEN";
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

export const ge_GameLevelChapterRelaExController = "ge_GameLevelChapterRelaExApi";
export const ge_GameLevelChapterRelaEx_ConstructorName = "ge_GameLevelChapterRelaEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function ge_GameLevelChapterRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_GameLevelChapterRelaENS:源对象
 * @returns 目标对象=>clsge_GameLevelChapterRelaEN:objge_GameLevelChapterRelaENT
 **/
export  function ge_GameLevelChapterRelaEx_CopyToEx(objge_GameLevelChapterRelaENS:clsge_GameLevelChapterRelaEN ): clsge_GameLevelChapterRelaENEx
{
const strThisFuncName  = ge_GameLevelChapterRelaEx_CopyToEx.name;
 const objge_GameLevelChapterRelaENT = new clsge_GameLevelChapterRelaENEx();
try
{
ObjectAssign(objge_GameLevelChapterRelaENT, objge_GameLevelChapterRelaENS);
 return objge_GameLevelChapterRelaENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, ge_GameLevelChapterRelaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_GameLevelChapterRelaENT;
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function ge_GameLevelChapterRelaEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsge_GameLevelChapterRelaENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrge_GameLevelChapterRelaObjLst = await ge_GameLevelChapterRela_GetObjLstByPagerAsync(objPagerPara);
const arrge_GameLevelChapterRelaExObjLst = arrge_GameLevelChapterRelaObjLst.map(ge_GameLevelChapterRelaEx_CopyToEx);
if (arrge_GameLevelChapterRelaExObjLst.length == 0) return arrge_GameLevelChapterRelaExObjLst;
let arrge_GameLevelChapterRelaSel: Array < clsge_GameLevelChapterRelaENEx > = arrge_GameLevelChapterRelaExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.sort(ge_GameLevelChapterRelaEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_GameLevelChapterRelaSel = arrge_GameLevelChapterRelaSel.sort(objPagerPara.sortFun);
}
return arrge_GameLevelChapterRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_GameLevelChapterRelaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_GameLevelChapterRelaENEx>();
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
export  function ge_GameLevelChapterRelaEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_GameLevelChapterRelaENEx.con_CourseName:
return (a: clsge_GameLevelChapterRelaENEx, b: clsge_GameLevelChapterRelaENEx) => {
return a.courseName.localeCompare(b.courseName);
}
case clsge_GameLevelChapterRelaENEx.con_ChapterName:
return (a: clsge_GameLevelChapterRelaENEx, b: clsge_GameLevelChapterRelaENEx) => {
return a.chapterName.localeCompare(b.chapterName);
}
case clsge_GameLevelChapterRelaENEx.con_GameLevelName:
return (a: clsge_GameLevelChapterRelaENEx, b: clsge_GameLevelChapterRelaENEx) => {
return a.gameLevelName.localeCompare(b.gameLevelName);
}
        default:
return ge_GameLevelChapterRela_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsge_GameLevelChapterRelaENEx.con_CourseName:
return (a: clsge_GameLevelChapterRelaENEx, b: clsge_GameLevelChapterRelaENEx) => {
return b.courseName.localeCompare(a.courseName);
}
case clsge_GameLevelChapterRelaENEx.con_ChapterName:
return (a: clsge_GameLevelChapterRelaENEx, b: clsge_GameLevelChapterRelaENEx) => {
return b.chapterName.localeCompare(a.chapterName);
}
case clsge_GameLevelChapterRelaENEx.con_GameLevelName:
return (a: clsge_GameLevelChapterRelaENEx, b: clsge_GameLevelChapterRelaENEx) => {
return b.gameLevelName.localeCompare(a.gameLevelName);
}
        default:
return ge_GameLevelChapterRela_SortFunByKey(strKey, AscOrDesc);
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
export  function ge_GameLevelChapterRelaEx_FuncMapByFldName(strFldName: string, objge_GameLevelChapterRelaEx: clsge_GameLevelChapterRelaENEx)
{
const strThisFuncName = ge_GameLevelChapterRelaEx_FuncMapByFldName.name;
console.log(objge_GameLevelChapterRelaEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsge_GameLevelChapterRelaEN.AttributeName;
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
export  async function ge_GameLevelChapterRelaEx_FilterFunByKey(strKey:string, value: any)
{
switch (strKey)
{

case clsge_GameLevelChapterRelaENEx.con_CourseName:
return (obj: clsge_GameLevelChapterRelaENEx) => {
return obj.courseName === value;
}
case clsge_GameLevelChapterRelaENEx.con_ChapterName:
return (obj: clsge_GameLevelChapterRelaENEx) => {
return obj.chapterName === value;
}
case clsge_GameLevelChapterRelaENEx.con_GameLevelName:
return (obj: clsge_GameLevelChapterRelaENEx) => {
return obj.gameLevelName === value;
}
        default:
return ge_GameLevelChapterRela_FilterFunByKey(strKey, value);
 }
}
