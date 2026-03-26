
 /**
 * 类名:JxTeachPlanKnowledgeCRUD(界面:JxTeachPlanKnowledgeCRUD,01120254)
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:28:55
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { clsJxTeachPlanKnowledgeENEx } from "@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeENEx";
import { CombineJxTeachPlanKnowledgeCondition,divVarSet,viewVarSet,dataColumn,BindTabByList,refJxTeachPlanKnowledge_List } from "@/views/TeachingPlan/JxTeachPlanKnowledgeVueShare";
import { JxTeachPlanKnowledge_GetRecCountByCondAsync,JxTeachPlanKnowledge_GetObjLstAsync,JxTeachPlanKnowledge_DelRecordAsync,JxTeachPlanKnowledge_GetObjByIdTeachPlanKnowledgeAsync,JxTeachPlanKnowledge_GetObjLstByIdTeachPlanKnowledgeLstAsync,JxTeachPlanKnowledge_GetMaxStrIdAsync,JxTeachPlanKnowledge_AddNewRecordAsync,JxTeachPlanKnowledge_DelJxTeachPlanKnowledgesAsync } from "@/ts/L3ForWApi/TeachingPlan/clsJxTeachPlanKnowledgeWApi";
import { JxTeachPlanKnowledgeEx_CopyToEx,JxTeachPlanKnowledgeEx_FuncMapByFldName,JxTeachPlanKnowledgeEx_GetObjExLstByPagerAsync } from "@/ts/L3ForWApiEx/TeachingPlan/clsJxTeachPlanKnowledgeExWApi";
import { GetCheckedKeyIdsInDivObj,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsJxTeachPlanKnowledgeEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeEN";
import { ObjectAssign,BindTab,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /**
* 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData:any, strFileName:string): void;
 /** JxTeachPlanKnowledgeCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  JxTeachPlanKnowledgeCRUD implements clsOperateList
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
public static objPageCRUD: JxTeachPlanKnowledgeCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
JxTeachPlanKnowledgeCRUD.objPageCRUD = this;
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
return clsJxTeachPlanKnowledgeEN._CurrTabName;
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
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
 **/
public async PageLoad()
{
const strThisFuncName = this.PageLoad.name;
// 在此处放置用户代码以初始化页面
try
{
//初始设置，用来初始化一些变量值
await this.InitVarSet();
//初始化界面控件值，放在绑定下拉框之后
await this.InitCtlVar();
if (viewVarSet.sortJxTeachPlanKnowledgeBy == '') viewVarSet.sortJxTeachPlanKnowledgeBy = `${ clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_JxTeachPlanKnowledge4Func(divVarSet.refDivList);
}
catch (e)
{
const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}


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
if (viewVarSet.sortJxTeachPlanKnowledgeBy == '') viewVarSet.sortJxTeachPlanKnowledgeBy = `${ clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_JxTeachPlanKnowledge4Func(divVarSet.refDivList);
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
await this.BindGv_JxTeachPlanKnowledge4Func(divVarSet.refDivList);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
 **/
public CombineData(arrJxTeachPlanKnowledgeObjLst: Array<clsJxTeachPlanKnowledgeEN>, arrDataColumn: Array<clsDataColumn>) 
{
const intRowNum = arrJxTeachPlanKnowledgeObjLst.length;
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
const objEN: clsJxTeachPlanKnowledgeEN = arrJxTeachPlanKnowledgeObjLst[i];
for (let j = 0; j < intColNum; j++)
{
arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName));//i + "" + j;
}
arrData.push(arrRow);
}
//console.log("arrData", arrData);
const strFileName = Format("教学计划知识点({0})导出.xlsx",
 clsJxTeachPlanKnowledgeEN._CurrTabName);
exportSpecialExcel_pyf(arrData, strFileName);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
 **/
public CombineData4Func(arrJxTeachPlanKnowledgeExObjLst: Array<clsJxTeachPlanKnowledgeENEx>, arrDataColumn: Array<clsDataColumn>) 
{
const intRowNum = arrJxTeachPlanKnowledgeExObjLst.length;
const intColNum = arrDataColumn.length;
const arrData: Array < Array < any >> = new Array<Array<any>>();
const arrHead: Array < any > = new Array<any>();
for (let j = 0; j < intColNum; j++)
{
arrHead.push(arrDataColumn[j] );
}
arrData.push(arrHead);
for (let i = 0; i < intRowNum; i++)
{
const arrRow: Array < any > = new Array<any>();
const objEN: clsJxTeachPlanKnowledgeENEx = arrJxTeachPlanKnowledgeExObjLst[i];
for (let j = 0; j < intColNum; j++)
{
arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName));//i + "" + j;
}
arrData.push(arrRow);
}
//console.log("arrData", arrData);
const strFileName = Format("教学计划知识点({0})导出.xlsx",
 clsJxTeachPlanKnowledgeEN._CurrTabName);
exportSpecialExcel_pyf(arrData, strFileName);
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func_NoCache)
 **/
public async ExportExcel_JxTeachPlanKnowledge4Func() 
{
const strThisFuncName = this.ExportExcel_JxTeachPlanKnowledge4Func.name;
if (viewVarSet.sortJxTeachPlanKnowledgeBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortJxTeachPlanKnowledgeBy)为空,请检查!(In BindGv_JxTeachPlanKnowledgeCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await CombineJxTeachPlanKnowledgeCondition();
 let arrJxTeachPlanKnowledgeObjLst: Array <clsJxTeachPlanKnowledgeEN> = [];
 let arrJxTeachPlanKnowledgeExObjLst: Array <clsJxTeachPlanKnowledgeENEx> = [];
try
{

this.recCount = await JxTeachPlanKnowledge_GetRecCountByCondAsync(strWhereCond);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
const strMsg = Format("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}

arrJxTeachPlanKnowledgeObjLst = await JxTeachPlanKnowledge_GetObjLstAsync(strWhereCond);
arrJxTeachPlanKnowledgeExObjLst = arrJxTeachPlanKnowledgeObjLst.map(JxTeachPlanKnowledgeEx_CopyToEx);
}
catch(e)
{
const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrJxTeachPlanKnowledgeObjLst.length == 0)
{
const strKey = Format("{0}", clsJxTeachPlanKnowledgeEN._CurrTabName);
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
fldName: "idTeachPlanKnowledge",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "教学计划知识点流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idTeachingPlan",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "教案流水号",
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
orderNum: 7,
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
orderNum: 8,
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
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "assessmentMethodId",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "考核方式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "courseKnowledgeId",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "teachingMethodId",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "教学方式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idTeachingPlan",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "教学计划名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrJxTeachPlanKnowledgeExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
arrJxTeachPlanKnowledgeObjLst = arrJxTeachPlanKnowledgeObjLst.sort(this.SortFunExportExcel);
  this.CombineData(arrJxTeachPlanKnowledgeObjLst, arrDataColumn); 
//console.log("完成BindGv_JxTeachPlanKnowledge!");
}
catch(e)
{
const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
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
await this.BindGv_JxTeachPlanKnowledge4Func(divVarSet.refDivList);
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
 * "strIdTeachPlanKnowledge": 表关键字
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
 await this.BindGv_JxTeachPlanKnowledge4Func(divVarSet.refDivList);
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
public async btnSelectRecordInTab_Click(strIdTeachPlanKnowledge: string) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (IsNullOrEmpty(strIdTeachPlanKnowledge) == true)
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
this.SelectRecord(strIdTeachPlanKnowledge);
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
public async DelRecord(strIdTeachPlanKnowledge: string) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await JxTeachPlanKnowledge_DelRecordAsync(strIdTeachPlanKnowledge);
if (returnInt > 0)
{
//JxTeachPlanKnowledge_ReFreshCache();
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
public async SelectRecord(strIdTeachPlanKnowledge: string) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objJxTeachPlanKnowledgeEN = await JxTeachPlanKnowledge_GetObjByIdTeachPlanKnowledgeAsync(strIdTeachPlanKnowledge);
console.log('完成SelectRecord!', objJxTeachPlanKnowledgeEN);
Redirect("/Index/Main_JxTeachPlanKnowledge");
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
await this.BindGv_JxTeachPlanKnowledge4Func(divVarSet.refDivList);
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
await this.ExportExcel_JxTeachPlanKnowledge4Func();
}

 /** 显示JxTeachPlanKnowledge对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrJxTeachPlanKnowledgeObjLst:需要绑定的对象列表
 **/
public async BindTab_JxTeachPlanKnowledge(divContainer: HTMLDivElement, arrJxTeachPlanKnowledgeExObjLst: Array<clsJxTeachPlanKnowledgeENEx>) 
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
fldName: clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge,
sortBy: clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge,
sortFun: SortFun,
getDataSource: "",
colHeader: "教学计划知识点流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
sortBy: clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
sortFun: SortFun,
getDataSource: "",
colHeader: "教案流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeEN.con_UpdDate,
sortBy: clsJxTeachPlanKnowledgeEN.con_UpdDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeEN.con_UpdUser,
sortBy: clsJxTeachPlanKnowledgeEN.con_UpdUser,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeEN.con_Memo,
sortBy: clsJxTeachPlanKnowledgeEN.con_Memo,
sortFun: SortFun,
getDataSource: "",
colHeader: "备注",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName,
sortBy: clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName,
sortFun: SortFun,
getDataSource: "",
colHeader: "考核方式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeENEx.con_KnowledgeName,
sortBy: clsJxTeachPlanKnowledgeENEx.con_KnowledgeName,
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName,
sortBy: clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName,
sortFun: SortFun,
getDataSource: "",
colHeader: "教学方式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc,
sortBy: clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc,
sortFun: SortFun,
getDataSource: "",
colHeader: "教学计划名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refJxTeachPlanKnowledge_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrJxTeachPlanKnowledgeExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_JxTeachPlanKnowledge函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrJxTeachPlanKnowledgeExObjLst, arrDataColumn,  clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge, this); 
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

 /** 显示JxTeachPlanKnowledge对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrJxTeachPlanKnowledgeExObjLst:需要绑定的对象列表
 **/
public async BindTab_JxTeachPlanKnowledge4Func(divContainer: HTMLDivElement, arrJxTeachPlanKnowledgeExObjLst: Array<clsJxTeachPlanKnowledgeENEx>) 
{
const strThisFuncName = this.BindTab_JxTeachPlanKnowledge4Func.name;
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
fldName: clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge,
sortBy: clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge,
sortFun: SortFun,
getDataSource: "",
colHeader: "教学计划知识点流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
sortBy: clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan,
sortFun: SortFun,
getDataSource: "",
colHeader: "教案流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeEN.con_UpdDate,
sortBy: clsJxTeachPlanKnowledgeEN.con_UpdDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeEN.con_UpdUser,
sortBy: clsJxTeachPlanKnowledgeEN.con_UpdUser,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeEN.con_Memo,
sortBy: clsJxTeachPlanKnowledgeEN.con_Memo,
sortFun: SortFun,
getDataSource: "",
colHeader: "备注",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName,
sortBy: clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName,
sortFun: SortFun,
getDataSource: "",
colHeader: "考核方式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeENEx.con_KnowledgeName,
sortBy: clsJxTeachPlanKnowledgeENEx.con_KnowledgeName,
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName,
sortBy: clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName,
sortFun: SortFun,
getDataSource: "",
colHeader: "教学方式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc,
sortBy: clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc,
sortFun: SortFun,
getDataSource: "",
colHeader: "教学计划名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrJxTeachPlanKnowledgeExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refJxTeachPlanKnowledge_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrJxTeachPlanKnowledgeExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_JxTeachPlanKnowledge4Func函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrJxTeachPlanKnowledgeExObjLst, arrDataColumn,  clsJxTeachPlanKnowledgeEN.con_IdTeachPlanKnowledge, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrJxTeachPlanKnowledgeExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrJxTeachPlanKnowledgeExObjLst: Array<clsJxTeachPlanKnowledgeENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clsJxTeachPlanKnowledgeEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrJxTeachPlanKnowledgeExObjLst) {
await JxTeachPlanKnowledgeEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
await this.BindGv_JxTeachPlanKnowledge4Func(this.listPara.listDiv);
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
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func_NoCache)
 **/
public async BindGv_JxTeachPlanKnowledge4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_JxTeachPlanKnowledge4Func.name;
if (divList == null)
{
const strMsg = Format(
'用于显示列表的div为空,请检查!(in {0}.{1})',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return;
}
this.listPara.listDiv = divList;
if (viewVarSet.sortJxTeachPlanKnowledgeBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortJxTeachPlanKnowledgeBy)为空,请检查!(In BindGv_JxTeachPlanKnowledgeCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await CombineJxTeachPlanKnowledgeCondition();
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrJxTeachPlanKnowledgeExObjLst: Array <clsJxTeachPlanKnowledgeENEx> = [];
try
{

this.recCount = await JxTeachPlanKnowledge_GetRecCountByCondAsync(strWhereCond);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
const strMsg = Format("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrJxTeachPlanKnowledgeExObjLst, true);
return;
}

const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
orderBy: viewVarSet.sortJxTeachPlanKnowledgeBy,//如果该字段为空,就使用下面的排序函数
sortFun: (x, y) => { console.log(x,y);return 0;}
}
arrJxTeachPlanKnowledgeExObjLst = await JxTeachPlanKnowledgeEx_GetObjExLstByPagerAsync(objPagerPara);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrJxTeachPlanKnowledgeExObjLst.length == 0)
{
const strKey = Format("{0}", clsJxTeachPlanKnowledgeEN._CurrTabName);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_JxTeachPlanKnowledge4Func(divList, arrJxTeachPlanKnowledgeExObjLst);
}
catch(e)
{
const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 * @param objJxTeachPlanKnowledgeENS:源对象
 * @returns 目标对象=>clsJxTeachPlanKnowledgeEN:objJxTeachPlanKnowledgeENT
 **/
 public CopyToEx(objJxTeachPlanKnowledgeENS:clsJxTeachPlanKnowledgeEN ): clsJxTeachPlanKnowledgeENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objJxTeachPlanKnowledgeENT = new clsJxTeachPlanKnowledgeENEx();
try
{
ObjectAssign(objJxTeachPlanKnowledgeENT, objJxTeachPlanKnowledgeENS);
 return objJxTeachPlanKnowledgeENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objJxTeachPlanKnowledgeENT;
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
public SortFunExportExcel(a:clsJxTeachPlanKnowledgeEN , b:clsJxTeachPlanKnowledgeEN): number 
{
if (a.updUser == b.updUser) return a.updUser.localeCompare(b.updUser) ;
else return a.updDate.localeCompare(b.updDate);
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
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortJxTeachPlanKnowledgeBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (clsJxTeachPlanKnowledgeENEx.hasProperty(sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortJxTeachPlanKnowledgeBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
JxTeachPlanKnowledgeCRUD.sortFunStatic = sortFun;
await this.BindGv_JxTeachPlanKnowledge4Func(this.listPara.listDiv);
}

 /** 复制记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
 **/
public async CopyRecord(arrIdTeachPlanKnowledge: Array<string>) {
const strThisFuncName = this.CopyRecord.name;
try
{
const arrJxTeachPlanKnowledgeObjLst = await JxTeachPlanKnowledge_GetObjLstByIdTeachPlanKnowledgeLstAsync(arrIdTeachPlanKnowledge);
//console.log('responseText=');
//console.log(responseText);
let intCount = 0;
for (const objInFor of arrJxTeachPlanKnowledgeObjLst)
{
const strMaxStrId = await JxTeachPlanKnowledge_GetMaxStrIdAsync();
//console.log('strMaxStrId=' + strMaxStrId);
objInFor.idTeachPlanKnowledge = strMaxStrId;
const returnBool = await JxTeachPlanKnowledge_AddNewRecordAsync(objInFor);
//console.log('returnBool=');
//console.log(returnBool);
if (returnBool == true)
{
//JxTeachPlanKnowledge_ReFreshCache();
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
public async DelMultiRecord(arrIdTeachPlanKnowledge: Array<string>) {
const strThisFuncName = this.DelMultiRecord.name;
try
{
const returnInt = await JxTeachPlanKnowledge_DelJxTeachPlanKnowledgesAsync(arrIdTeachPlanKnowledge);
if (returnInt > 0)
{
//JxTeachPlanKnowledge_ReFreshCache();
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
 * @param objJxTeachPlanKnowledge:需要显示的对象
 **/
public ShowJxTeachPlanKnowledgeObj(divContainer: HTMLDivElement, objJxTeachPlanKnowledge: clsJxTeachPlanKnowledgeEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objJxTeachPlanKnowledge);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objJxTeachPlanKnowledge.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjJxTeachPlanKnowledgeEN:表实体类对象
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