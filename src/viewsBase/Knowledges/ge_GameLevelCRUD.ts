
 /**
 * 类名:ge_GameLevelCRUD(界面:ge_GameLevelCRUD,01120225)
 * 表名:ge_GameLevel(01120904)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:28:14
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { CourseId_Session,Combinege_GameLevelConditionObj4ExportExcel,Combinege_GameLevelConditionObj,divVarSet,viewVarSet,dataColumn,BindTabByList,refge_GameLevel_List } from "@/views/Knowledges/ge_GameLevelVueShare";
import { ge_GameLevel_GetRecCountByCondCache,ge_GameLevel_GetSubObjLstCache,ge_GameLevel_ReOrderAsync,ge_GameLevel_ReFreshCache,ge_GameLevel_GoBottomAsync,ge_GameLevel_DownMoveAsync,ge_GameLevel_UpMoveAsync,ge_GameLevel_GoTopAsync,ge_GameLevel_DelRecordAsync,ge_GameLevel_GetObjByGameLevelIdAsync,ge_GameLevel_GetObjLstByGameLevelIdLstAsync,ge_GameLevel_GetMaxStrIdAsync,ge_GameLevel_AddNewRecordAsync,ge_GameLevel_Delge_GameLevelsAsync } from "@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { GetCheckedKeyIdsInDivObj,SetCheckedItem4KeyIdInDiv,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsge_GameLevelENEx } from "@/ts/L0Entity/Knowledges/clsge_GameLevelENEx";
import { ge_GameLevelEx_FuncMapByFldName,ge_GameLevelEx_GetObjExLstByPagerCache } from "@/ts/L3ForWApiEx/Knowledges/clsge_GameLevelExWApi";
import { clsge_GameLevelEN } from "@/ts/L0Entity/Knowledges/clsge_GameLevelEN";
import { ObjectAssign,BindTab,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /**
* 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData:any, strFileName:string): void;
 /** ge_GameLevelCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  ge_GameLevelCRUD implements clsOperateList
{
public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
public static GetPropValue: (strPropName: string) => string;

//专门用于数据列表的界面变量,用于分页功能等
public currPageIndex = 0;
public divName4DataList = "divDataLst";  //列表中数据区的层Id
public divName4Pager = "divPager";  //列表中的分页区的层Id
public bolIsTableSm = true;//是否窄行的小表,即表中加样式： table-sm
public listPara: ListPara;//是否窄行的小表,即表中加样式： table-sm
public objPager: clsPager;
public static objPageCRUD: ge_GameLevelCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
ge_GameLevelCRUD.objPageCRUD = this;
this.objPager = new clsPager(this);
}
 /**
 * 获取当前组件的divList的层对象
 **/
public get thisDivList(): HTMLDivElement {
return divVarSet.refDivList;
}
 /**
 * 获取当前组件的divLayout的层对象
 **/
public get thisDivLayout(): HTMLDivElement {
return divVarSet.refDivLayout;
}
 /**
 * 获取当前界面的主表名
 **/
public get thisTabName(): string {
return clsge_GameLevelEN._CurrTabName;
}
 /**
 * 每页记录数,在扩展类可以修改
 **/
public get pageSize():number {
return 5;
}
public recCount = 0;

/** 
* 函数功能:初始设置，用来初始化一些变量值
**/
  public abstract InitVarSet() : void; 
/** 
* 函数功能:初始化界面控件值，放在绑定下拉框之后
**/
  public abstract InitCtlVar() : void; 

 /** 函数功能:页面导入,当页面开始运行时所发生的事件
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
 **/
public async PageLoadCache()
{
const strThisFuncName = this.PageLoadCache.name;
// 在此处放置用户代码以初始化页面
try
{
//初始设置，用来初始化一些变量值
await this.InitVarSet();
//初始化界面控件值，放在绑定下拉框之后
await this.InitCtlVar();
if (viewVarSet.sortge_GameLevelBy == '') viewVarSet.sortge_GameLevelBy = `${ clsge_GameLevelEN.con_GameLevelName } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
}
catch (e)
{
const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}


 /** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 **/
public async btnQuery_Click() 
{
this.SetCurrPageIndex(1);
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
 **/
public CombineData(arrge_GameLevelObjLst: Array<clsge_GameLevelEN>, arrDataColumn: Array<clsDataColumn>) 
{
const intRowNum = arrge_GameLevelObjLst.length;
const intColNum = arrDataColumn.length;
const arrData: Array < Array < any >> = new Array<Array<any>>();
const arrHead: Array < any > = new Array<any>();
for (let j = 0; j < intColNum; j++)
{
arrHead.push(arrDataColumn[j].colHeader);
}
arrData.push(arrHead);
for (let i = 0; i < intRowNum; i++)
{
const arrRow: Array < any > = new Array<any>();
const objEN: clsge_GameLevelEN = arrge_GameLevelObjLst[i];
for (let j = 0; j < intColNum; j++)
{
arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName));//i + "" + j;
}
arrData.push(arrRow);
}
//console.log("arrData", arrData);
const strFileName = Format("游戏关卡表({0})导出.xlsx",
 clsge_GameLevelEN._CurrTabName);
exportSpecialExcel_pyf(arrData, strFileName);
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
 **/
public async ExportExcel_ge_GameLevelCache() 
{
const strThisFuncName = this.ExportExcel_ge_GameLevelCache.name;
if (viewVarSet.sortge_GameLevelBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortge_GameLevelBy)为空,请检查!(In BindGv_ge_GameLevelCache)");
console.error(strMsg);
alert(strMsg);
return;
}
const objge_GameLevelCond = await Combinege_GameLevelConditionObj4ExportExcel();
objge_GameLevelCond.SetCondFldValue(clsge_GameLevelEN.con_CourseId, CourseId_Session.value, "=");
 let arrge_GameLevelObjLst: Array <clsge_GameLevelEN> = [];
try
{

this.recCount = await ge_GameLevel_GetRecCountByCondCache(objge_GameLevelCond ,CourseId_Session.value);
if (this.recCount == 0)
{
const strMsg = Format("在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!", objge_GameLevelCond.whereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}

arrge_GameLevelObjLst = await ge_GameLevel_GetSubObjLstCache(objge_GameLevelCond ,CourseId_Session.value);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrge_GameLevelObjLst.length == 0)
{
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, CourseId_Session.value);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
return;
}
try
{
const arrDataColumn: Array < clsDataColumn > =
       [
{
fldName: "difficultyLevelId",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "难度等级Id",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "difficultyLevelName",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "难度等级名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "updDate",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "updUser",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "memo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "备注",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "gameLevelId",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "游戏关卡Id",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "gameLevelName",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "游戏关卡名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idCurrEduCls",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "当前教学班流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "orderNum",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "序号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionNum",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
arrge_GameLevelObjLst = arrge_GameLevelObjLst.sort(this.SortFunExportExcel);
  this.CombineData(arrge_GameLevelObjLst, arrDataColumn); 
//console.log("完成BindGv_ge_GameLevel!");
}
catch(e)
{
const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 重序
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
 **/
public async btnReOrder_Click()
{
const strThisFuncName = this.btnReOrder_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseId =CourseId_Session.value;
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
const jsonObject =
{
"courseId": strCourseId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await ge_GameLevel_ReOrderAsync(objOrderByData);
ge_GameLevel_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `重序出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
}

 /**
 * 置底
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
 **/
public async btnGoBottum_Click()
{
const strThisFuncName = this.btnGoBottum_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseId =CourseId_Session.value;
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要置底的${this.thisTabName}记录!`);
return "";
}
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
objOrderByData.KeyIdLst = arrKeyIds;
const jsonObject =
{
"courseid": strCourseId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await ge_GameLevel_GoBottomAsync(objOrderByData);
ge_GameLevel_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `置底出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
}

 /**
 * 移动记录序号时的预检查函数
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
 **/
public PreCheck4Order(): boolean
{
const strCourseId =CourseId_Session.value;
if (strCourseId == "")
{
const strMsg = Format("请输入CourseId!");
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return false;
}
return true;
}

 /**
 * 下移
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
 **/
public async btnDownMove_Click()
{
const strThisFuncName = this.btnDownMove_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseId =CourseId_Session.value;
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0)
{
alert(`请选择需要下移的${this.thisTabName}记录!`);
return;
}
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
objOrderByData.KeyIdLst = arrKeyIds;
const jsonObject =
{
"courseid": strCourseId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await ge_GameLevel_DownMoveAsync(objOrderByData);
ge_GameLevel_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `下移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
}

 /**
 * 上移
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
 **/
public async btnUpMove_Click()
{
const strThisFuncName = this.btnUpMove_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseId =CourseId_Session.value;
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要上移的${this.thisTabName}记录!`);
return;
}
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
objOrderByData.KeyIdLst = arrKeyIds;
const jsonObject =
{
"courseid": strCourseId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await ge_GameLevel_UpMoveAsync(objOrderByData);
ge_GameLevel_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `上移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
}

 /** 置顶
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
 **/
public async btnGoTop_Click()
{
const strThisFuncName = this.btnGoTop_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseId =CourseId_Session.value;
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要置顶的${this.thisTabName}记录!`);
return "";
}
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
objOrderByData.KeyIdLst = arrKeyIds;
const jsonObject =
{
"courseid": strCourseId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await ge_GameLevel_GoTopAsync(objOrderByData);
ge_GameLevel_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `置顶出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
}

 /**
 * 添加新记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
 **/
public async btnCopyRecord_Click() {
const strThisFuncName = this.btnCopyRecord_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要克隆的${this.thisTabName}记录!`);
return "";
}
await this.CopyRecord(arrKeyIds);
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 
 * 在数据表里删除记录
 * "strGameLevelId": 表关键字
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
 **/
public async btnDelRecordInTab_Click(strKeyId:string) {
const strThisFuncName = this.btnDelRecordInTab_Click.name;
try
{
 if (strKeyId == "")
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
if (confirmDel(0) == false)
{
return;
}
await this.DelRecord(strKeyId);
 await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 
 * 在数据表里选择记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
 **/
public async btnSelectRecordInTab_Click(strGameLevelId: string) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (IsNullOrEmpty(strGameLevelId) == true)
{
const strMsg = "请选择相关记录,请检查!";
console.error(strMsg);
alert(strMsg);
return;
}
if (confirmDel(0) == false)
{
return;
}
this.SelectRecord(strGameLevelId);
}
catch(e)
{
const strMsg = `选择记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 
 * 根据关键字删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
 **/
public async DelRecord(strGameLevelId: string) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await ge_GameLevel_DelRecordAsync(strGameLevelId);
if (returnInt > 0)
{
ge_GameLevel_ReFreshCache(CourseId_Session.value);
const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
//显示信息框
alert(strInfo);
}
else
{
const strInfo = `删除${this.thisTabName}记录不成功!`;
//显示信息框
alert(strInfo);
}
console.log("完成DelRecord!");
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 
 * 根据关键字选择相应的记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
 * @param sender:参数列表
 **/
public async SelectRecord(strGameLevelId: string) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objge_GameLevelEN = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
console.log('完成SelectRecord!', objge_GameLevelEN);
Redirect("/Index/Main_ge_GameLevel");
}
catch(e)
{
const strMsg = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}

 /** 删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
 **/
public async btnDelRecord_Click() {
const strThisFuncName = this.btnDelRecord_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
if (confirmDel(arrKeyIds.length) == false)
{
return;
}
await this.DelMultiRecord(arrKeyIds);
await this.BindGv_ge_GameLevel4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}



 /** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
 **/
public async btnExportExcel_Click() 
{
await this.ExportExcel_ge_GameLevelCache();
}

 /** 显示ge_GameLevel对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrge_GameLevelObjLst:需要绑定的对象列表
 **/
public async BindTab_ge_GameLevel(divContainer: HTMLDivElement, arrge_GameLevelExObjLst: Array<clsge_GameLevelENEx>) 
{
if (divContainer == null)
{
alert(Format("{0}不存在!",divContainer));
return;
}
const arrDataColumn: Array < clsDataColumn > =
       [
{
fldName: "",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "",
text: "",
tdClass: "text-left",
columnType: "CheckBox",
orderNum: 1,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_GameLevelName,
sortBy: clsge_GameLevelEN.con_GameLevelName,
sortFun: SortFun,
getDataSource: "",
colHeader: "游戏关卡名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelENEx.con_DifficultyLevelName,
sortBy: "difficultyLevelName",
sortFun: SortFun,
getDataSource: "",
colHeader: "难度等级名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelENEx.con_LevelModeTypeName,
sortBy: "levelModeTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "模式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelENEx.con_QuestionTypeName,
sortBy: "questionTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目类型名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_InUse,
sortBy: clsge_GameLevelEN.con_InUse,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否在用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_EndTime,
sortBy: clsge_GameLevelEN.con_EndTime,
sortFun: SortFun,
getDataSource: "",
colHeader: "结束时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_UpdDate,
sortBy: clsge_GameLevelEN.con_UpdDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_UpdUser,
sortBy: clsge_GameLevelEN.con_UpdUser,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refge_GameLevel_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrge_GameLevelExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_ge_GameLevel函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrge_GameLevelExObjLst, arrDataColumn,  clsge_GameLevelEN.con_GameLevelId, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}
/**
* 是否显示所有错误
**/
public get dispAllErrMsg_q(): boolean {
return true;
}

 /** 显示ge_GameLevel对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrge_GameLevelExObjLst:需要绑定的对象列表
 **/
public async BindTab_ge_GameLevel4Func(divContainer: HTMLDivElement, arrge_GameLevelExObjLst: Array<clsge_GameLevelENEx>) 
{
const strThisFuncName = this.BindTab_ge_GameLevel4Func.name;
if (divContainer == null)
{
alert(Format("{0}不存在!",divContainer));
return;
}
const arrDataColumn: Array < clsDataColumn > =
       [
{
fldName: "",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "",
text: "",
tdClass: "text-left",
columnType: "CheckBox",
orderNum: 1,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_GameLevelName,
sortBy: clsge_GameLevelEN.con_GameLevelName,
sortFun: SortFun,
getDataSource: "",
colHeader: "游戏关卡名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelENEx.con_DifficultyLevelName,
sortBy: "difficultyLevelName",
sortFun: SortFun,
getDataSource: "",
colHeader: "难度等级名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelENEx.con_LevelModeTypeName,
sortBy: "levelModeTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "模式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelENEx.con_QuestionTypeName,
sortBy: "questionTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目类型名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_InUse,
sortBy: clsge_GameLevelEN.con_InUse,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否在用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_EndTime,
sortBy: clsge_GameLevelEN.con_EndTime,
sortFun: SortFun,
getDataSource: "",
colHeader: "结束时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_UpdDate,
sortBy: clsge_GameLevelEN.con_UpdDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_GameLevelEN.con_UpdUser,
sortBy: clsge_GameLevelEN.con_UpdUser,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrge_GameLevelExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refge_GameLevel_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrge_GameLevelExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_ge_GameLevel4Func函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrge_GameLevelExObjLst, arrDataColumn,  clsge_GameLevelEN.con_GameLevelId, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrge_GameLevelExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrge_GameLevelExObjLst: Array<clsge_GameLevelENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clsge_GameLevelEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrge_GameLevelExObjLst) {
await ge_GameLevelEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
}
}
}

 /** 函数功能:在数据 列表中跳转到某一页
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 * @param intPageIndex:页序号
 **/
public async IndexPage(intPageIndex:number)
{
if (intPageIndex == 0)
{
intPageIndex = this.objPager.pageCount;
}
//console.log("跳转到" + intPageIndex + "页");
this.SetCurrPageIndex(intPageIndex);
await this.BindGv_ge_GameLevel4Func(this.listPara.listDiv);
}

 /** 函数功能:在数据列表中跳转到下一页
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
 **/
public async NextPage()
{
const intCurrPageIndex = this.objPager.currPageIndex;
const intPageIndex = Number(intCurrPageIndex) + 1;
//console.log("跳转到" + intPageIndex + "页");
this.IndexPage(intPageIndex);
}

 /** 函数功能:在数据列表中跳转到前一页
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
 **/
public async PrevPage()
{
const intCurrPageIndex = this.objPager.currPageIndex;
const intPageIndex = Number(intCurrPageIndex) - 1;
//console.log("跳转到" + intPageIndex + "页");
this.IndexPage(intPageIndex);
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func)
 **/
public async BindGv_ge_GameLevel4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_ge_GameLevel4Func.name;
if (viewVarSet.sortge_GameLevelBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortge_GameLevelBy)为空,请检查!(In BindGv_ge_GameLevelCache)");
console.error(strMsg);
alert(strMsg);
return;
}
const objge_GameLevelCond = await Combinege_GameLevelConditionObj();
objge_GameLevelCond.SetCondFldValue(clsge_GameLevelEN.con_CourseId, CourseId_Session.value, "=");
const strWhereCond = JSON.stringify(objge_GameLevelCond);
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrge_GameLevelExObjLst: Array <clsge_GameLevelENEx> = [];
try
{

this.recCount = await ge_GameLevel_GetRecCountByCondCache(objge_GameLevelCond ,CourseId_Session.value);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", objge_GameLevelCond.whereCond);
const strMsg = Format("在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!", objge_GameLevelCond.whereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrge_GameLevelExObjLst, true);
return;
}

let strSortFun = (x: any, y: any) => { console.log(x,y); return 0};
if (ge_GameLevelCRUD.sortFunStatic != undefined)
{
strSortFun = ge_GameLevelCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
}
const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
orderBy: viewVarSet.sortge_GameLevelBy,
sortFun: strSortFun
}
arrge_GameLevelExObjLst = await ge_GameLevelEx_GetObjExLstByPagerCache(objPagerPara ,CourseId_Session.value);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrge_GameLevelExObjLst.length == 0)
{
const strKey = Format("{0}_{1}", clsge_GameLevelEN._CurrTabName, CourseId_Session.value);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_ge_GameLevel4Func(divList, arrge_GameLevelExObjLst);
//console.log("完成BindGv_ge_GameLevel4Func!");
}
catch(e)
{
const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 * @param objge_GameLevelENS:源对象
 * @returns 目标对象=>clsge_GameLevelEN:objge_GameLevelENT
 **/
 public CopyToEx(objge_GameLevelENS:clsge_GameLevelEN ): clsge_GameLevelENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objge_GameLevelENT = new clsge_GameLevelENEx();
try
{
ObjectAssign(objge_GameLevelENT, objge_GameLevelENS);
 return objge_GameLevelENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_GameLevelENT;
}
}

 /**
 * 排序函数。根据表对象中随机两个字段的值进行比较,正常使用时,需用该类的扩展类的同名函数
 * 作者:pyf
 * 日期:
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortFunExportExcel)
 * @param a:比较的第1个对象
 * @param b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 **/
public SortFunExportExcel(a:clsge_GameLevelEN , b:clsge_GameLevelEN): number 
{
if (a.questionScore == b.questionScore) return a.questionScore - b.questionScore ;
else return a.questionTypeId.localeCompare(b.questionTypeId);
}

 /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
 * @param sortColumnKey:排序字段名
 * @param sortDirection:排序方向，升序还是降序
 **/
  public abstract SortColumn(sortColumnKey: string, sortDirection: string) : void;
 /** 函数功能:从界面列表中根据某一个字段排序
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
 * @param objAnchorElement:带有排序字段的Anchors
 **/
public async SortBy(objAnchorElement:any) {
 //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
let strSortExpress = "";
//event = window.event || event;
if (typeof(objAnchorElement) != "function")
{
const thisEventObj: HTMLInputElement = objAnchorElement;
strSortExpress = thisEventObj.getAttribute("FldName") as string;
}
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortge_GameLevelBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (clsge_GameLevelENEx.hasProperty(sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortge_GameLevelBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
ge_GameLevelCRUD.sortFunStatic = sortFun;
await this.BindGv_ge_GameLevel4Func(this.listPara.listDiv);
}

 /** 复制记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
 **/
public async CopyRecord(arrGameLevelId: Array<string>) {
const strThisFuncName = this.CopyRecord.name;
try
{
const arrge_GameLevelObjLst = await ge_GameLevel_GetObjLstByGameLevelIdLstAsync(arrGameLevelId);
//console.log('responseText=');
//console.log(responseText);
let intCount = 0;
for (const objInFor of arrge_GameLevelObjLst)
{
const strMaxStrId = await ge_GameLevel_GetMaxStrIdAsync();
//console.log('strMaxStrId=' + strMaxStrId);
objInFor.gameLevelId = strMaxStrId;
const returnBool = await ge_GameLevel_AddNewRecordAsync(objInFor);
//console.log('returnBool=');
//console.log(returnBool);
if (returnBool == true)
{
ge_GameLevel_ReFreshCache(CourseId_Session.value);
intCount++;
}
else
{
const strInfo = Format("克隆记录不成功!");
//显示信息框
alert(strInfo);
}
}
const strInfo = Format("共克隆了{0}条记录!", intCount);
alert(strInfo);
//console.log('完成!');
}
catch (e)
{
const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}

 /** 根据关键字列表删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
 **/
public async DelMultiRecord(arrGameLevelId: Array<string>) {
const strThisFuncName = this.DelMultiRecord.name;
try
{
const returnInt = await ge_GameLevel_Delge_GameLevelsAsync(arrGameLevelId);
if (returnInt > 0)
{
ge_GameLevel_ReFreshCache(CourseId_Session.value);
const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
//显示信息框
alert(strInfo);
}
else
{
const strInfo = `删除${this.thisTabName}记录不成功!`;
//显示信息框
alert(strInfo);
}
console.log("完成DelMultiRecord!");
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 显示{0}对象的所有属性值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
 * @param divContainer:显示容器
 * @param objge_GameLevel:需要显示的对象
 **/
public Showge_GameLevelObj(divContainer: HTMLDivElement, objge_GameLevel: clsge_GameLevelEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objge_GameLevel);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objge_GameLevel.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjge_GameLevelEN:表实体类对象
 * @returns 列表的第一个关键字值
 **/
public GetFirstKey(): string {
if (arrSelectedKeys.length == 1) {
return arrSelectedKeys[0];
}
else {
alert(`请选择一个关键字!目前选择了:${ arrSelectedKeys.length}个关键字。`);
return "";
}
}

 /** 函数功能:预留函数,在某一个层(div)里绑定数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
 **/
public async BindInDiv(divBind: HTMLDivElement) {
console.log(divBind);
}

 /** 函数功能:设置当前页序号
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
 * @param value:页序号
 * @param strDivName4Pager:当前分页所在的层(div)
 **/
public SetCurrPageIndex(value: number) {
       this.objPager.currPageIndex = value;
}

 /**
 * 设置界面标题-相当使用ViewState功能
 **/
public  set ViewTitle(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivLayout, "lblViewTitle", value);
}
 /**
 * 设置界面标题
 **/
public  get ViewTitle():string {
const strValue = GetLabelHtmlInDivObj(divVarSet.refDivLayout, "lblViewTitle");
return strValue;
}
}