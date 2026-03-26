
 /**
 * 类名:cc_ExamPaperStuBatchRelaCRUD(界面:cc_ExamPaperStuBatchRelaCRUD,01120194)
 * 表名:cc_ExamPaperStuBatchRela(01120239)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:28:17
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:互动管理(InteractManage)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { Combinecc_ExamPaperStuBatchRelaCondition,divVarSet,viewVarSet,dataColumn,BindTabByList,refcc_ExamPaperStuBatchRela_List } from "@/views/InteractManage/cc_ExamPaperStuBatchRelaVueShare";
import { cc_ExamPaperStuBatchRela_GetRecCountByCondAsync,cc_ExamPaperStuBatchRela_GetObjLstAsync,cc_ExamPaperStuBatchRela_DelRecordAsync,cc_ExamPaperStuBatchRela_GetObjByIdPaperStuBatchAsync,cc_ExamPaperStuBatchRela_GetObjLstByIdPaperStuBatchLstAsync,cc_ExamPaperStuBatchRela_GetMaxStrIdAsync,cc_ExamPaperStuBatchRela_AddNewRecordAsync,cc_ExamPaperStuBatchRela_Delcc_ExamPaperStuBatchRelasAsync } from "@/ts/L3ForWApi/InteractManage/clscc_ExamPaperStuBatchRelaWApi";
import { GetCheckedKeyIdsInDivObj,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clscc_ExamPaperStuBatchRelaENEx } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaENEx";
import { cc_ExamPaperStuBatchRelaEx_FuncMapByFldName,cc_ExamPaperStuBatchRelaEx_GetObjExLstByPagerAsync } from "@/ts/L3ForWApiEx/InteractManage/clscc_ExamPaperStuBatchRelaExWApi";
import { clscc_ExamPaperStuBatchRelaEN } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaEN";
import { ObjectAssign,BindTab,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /**
* 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData:any, strFileName:string): void;
 /** cc_ExamPaperStuBatchRelaCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  cc_ExamPaperStuBatchRelaCRUD implements clsOperateList
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
public static objPageCRUD: cc_ExamPaperStuBatchRelaCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
cc_ExamPaperStuBatchRelaCRUD.objPageCRUD = this;
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
return clscc_ExamPaperStuBatchRelaEN._CurrTabName;
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
if (viewVarSet.sortcc_ExamPaperStuBatchRelaBy == '') viewVarSet.sortcc_ExamPaperStuBatchRelaBy = `${ clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_cc_ExamPaperStuBatchRela4Func(divVarSet.refDivList);
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
if (viewVarSet.sortcc_ExamPaperStuBatchRelaBy == '') viewVarSet.sortcc_ExamPaperStuBatchRelaBy = `${ clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_cc_ExamPaperStuBatchRela4Func(divVarSet.refDivList);
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
await this.BindGv_cc_ExamPaperStuBatchRela4Func(divVarSet.refDivList);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
 **/
public CombineData(arrcc_ExamPaperStuBatchRelaObjLst: Array<clscc_ExamPaperStuBatchRelaEN>, arrDataColumn: Array<clsDataColumn>) 
{
const intRowNum = arrcc_ExamPaperStuBatchRelaObjLst.length;
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
const objEN: clscc_ExamPaperStuBatchRelaEN = arrcc_ExamPaperStuBatchRelaObjLst[i];
for (let j = 0; j < intColNum; j++)
{
arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName));//i + "" + j;
}
arrData.push(arrRow);
}
//console.log("arrData", arrData);
const strFileName = Format("考卷与学生批次关系({0})导出.xlsx",
 clscc_ExamPaperStuBatchRelaEN._CurrTabName);
exportSpecialExcel_pyf(arrData, strFileName);
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel)
 **/
public async ExportExcel_cc_ExamPaperStuBatchRela() 
{
const strThisFuncName = this.ExportExcel_cc_ExamPaperStuBatchRela.name;
if (viewVarSet.sortcc_ExamPaperStuBatchRelaBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortcc_ExamPaperStuBatchRelaBy)为空,请检查!(In BindGv_cc_ExamPaperStuBatchRelaCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await Combinecc_ExamPaperStuBatchRelaCondition();
 let arrcc_ExamPaperStuBatchRelaObjLst: Array <clscc_ExamPaperStuBatchRelaEN> = [];
try
{

this.recCount = await cc_ExamPaperStuBatchRela_GetRecCountByCondAsync(strWhereCond);
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

arrcc_ExamPaperStuBatchRelaObjLst = await cc_ExamPaperStuBatchRela_GetObjLstAsync(strWhereCond);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrcc_ExamPaperStuBatchRelaObjLst.length == 0)
{
const strMsg = `在ExportExcel过程中,根据条件获取的${this.thisTabName}记录数为0!`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
try
{
const arrDataColumn: Array < clsDataColumn > =
       [
{
fldName: "idPaperStuBatch",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学生试卷批次流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idStudentInfo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学生流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "batchTime",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "批次",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
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
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "scores",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "分值",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isSave",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否保存",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isSubmit",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否提交",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "realFinishDate",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "实际完成日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "operateTime",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "操作时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isMarking",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否批阅",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "markDate",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "打分日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 14,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "answerIP",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "回答IP",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 15,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "answerDate",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "回答日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 16,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "answerTime",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "回答时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 17,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "totalGetScore",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "考生获取总分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 18,
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
orderNum: 19,
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
orderNum: 21,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
arrcc_ExamPaperStuBatchRelaObjLst = arrcc_ExamPaperStuBatchRelaObjLst.sort(this.SortFunExportExcel);
  this.CombineData(arrcc_ExamPaperStuBatchRelaObjLst, arrDataColumn); 
//console.log("完成BindGv_cc_ExamPaperStuBatchRela!");
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
await this.BindGv_cc_ExamPaperStuBatchRela4Func(divVarSet.refDivList);
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
 * "strIdPaperStuBatch": 表关键字
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
 await this.BindGv_cc_ExamPaperStuBatchRela4Func(divVarSet.refDivList);
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
public async btnSelectRecordInTab_Click(strIdPaperStuBatch: string) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (IsNullOrEmpty(strIdPaperStuBatch) == true)
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
this.SelectRecord(strIdPaperStuBatch);
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
public async DelRecord(strIdPaperStuBatch: string) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await cc_ExamPaperStuBatchRela_DelRecordAsync(strIdPaperStuBatch);
if (returnInt > 0)
{
//cc_ExamPaperStuBatchRela_ReFreshCache();
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
public async SelectRecord(strIdPaperStuBatch: string) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objcc_ExamPaperStuBatchRelaEN = await cc_ExamPaperStuBatchRela_GetObjByIdPaperStuBatchAsync(strIdPaperStuBatch);
console.log('完成SelectRecord!', objcc_ExamPaperStuBatchRelaEN);
Redirect("/Index/Main_cc_ExamPaperStuBatchRela");
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
await this.BindGv_cc_ExamPaperStuBatchRela4Func(divVarSet.refDivList);
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
await this.ExportExcel_cc_ExamPaperStuBatchRela();
}

 /** 显示cc_ExamPaperStuBatchRela对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrcc_ExamPaperStuBatchRelaObjLst:需要绑定的对象列表
 **/
public async BindTab_cc_ExamPaperStuBatchRela(divContainer: HTMLDivElement, arrcc_ExamPaperStuBatchRelaExObjLst: Array<clscc_ExamPaperStuBatchRelaENEx>) 
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
fldName: clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo,
sortBy: "stuName",
sortFun: SortFun,
getDataSource: "",
colHeader: "学生",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_BatchTime,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_BatchTime,
sortFun: SortFun,
getDataSource: "",
colHeader: "批次",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaENEx.con_EduClsName,
sortBy: "eduClsName",
sortFun: SortFun,
getDataSource: "",
colHeader: "当前教学班",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_Scores,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_Scores,
sortFun: SortFun,
getDataSource: "",
colHeader: "分值",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_IsSave,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_IsSave,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否保存",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_IsSubmit,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_IsSubmit,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否提交",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "实际完成日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_OperateTime,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_OperateTime,
sortFun: SortFun,
getDataSource: "",
colHeader: "操作时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_IsMarking,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_IsMarking,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否批阅",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_MarkDate,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_MarkDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "打分日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_AnswerIP,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_AnswerIP,
sortFun: SortFun,
getDataSource: "",
colHeader: "回答IP",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_AnswerDate,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_AnswerDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "回答日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_AnswerTime,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_AnswerTime,
sortFun: SortFun,
getDataSource: "",
colHeader: "回答时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 14,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore,
sortFun: SortFun,
getDataSource: "",
colHeader: "考生获取总分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 15,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_UpdDate,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_UpdDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 16,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refcc_ExamPaperStuBatchRela_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrcc_ExamPaperStuBatchRelaExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_cc_ExamPaperStuBatchRela函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrcc_ExamPaperStuBatchRelaExObjLst, arrDataColumn,  clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch, this); 
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

 /** 显示cc_ExamPaperStuBatchRela对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrcc_ExamPaperStuBatchRelaExObjLst:需要绑定的对象列表
 **/
public async BindTab_cc_ExamPaperStuBatchRela4Func(divContainer: HTMLDivElement, arrcc_ExamPaperStuBatchRelaExObjLst: Array<clscc_ExamPaperStuBatchRelaENEx>) 
{
const strThisFuncName = this.BindTab_cc_ExamPaperStuBatchRela4Func.name;
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
fldName: clscc_ExamPaperStuBatchRelaEN.con_IdStudentInfo,
sortBy: "stuName",
sortFun: SortFun,
getDataSource: "",
colHeader: "学生",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_BatchTime,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_BatchTime,
sortFun: SortFun,
getDataSource: "",
colHeader: "批次",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaENEx.con_EduClsName,
sortBy: "eduClsName",
sortFun: SortFun,
getDataSource: "",
colHeader: "当前教学班",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_Scores,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_Scores,
sortFun: SortFun,
getDataSource: "",
colHeader: "分值",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_IsSave,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_IsSave,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否保存",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_IsSubmit,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_IsSubmit,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否提交",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_RealFinishDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "实际完成日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_OperateTime,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_OperateTime,
sortFun: SortFun,
getDataSource: "",
colHeader: "操作时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_IsMarking,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_IsMarking,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否批阅",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_MarkDate,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_MarkDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "打分日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_AnswerIP,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_AnswerIP,
sortFun: SortFun,
getDataSource: "",
colHeader: "回答IP",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_AnswerDate,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_AnswerDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "回答日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_AnswerTime,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_AnswerTime,
sortFun: SortFun,
getDataSource: "",
colHeader: "回答时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 14,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_TotalGetScore,
sortFun: SortFun,
getDataSource: "",
colHeader: "考生获取总分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 15,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_ExamPaperStuBatchRelaEN.con_UpdDate,
sortBy: clscc_ExamPaperStuBatchRelaEN.con_UpdDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 16,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrcc_ExamPaperStuBatchRelaExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refcc_ExamPaperStuBatchRela_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrcc_ExamPaperStuBatchRelaExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_cc_ExamPaperStuBatchRela4Func函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrcc_ExamPaperStuBatchRelaExObjLst, arrDataColumn,  clscc_ExamPaperStuBatchRelaEN.con_IdPaperStuBatch, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrcc_ExamPaperStuBatchRelaExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrcc_ExamPaperStuBatchRelaExObjLst: Array<clscc_ExamPaperStuBatchRelaENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clscc_ExamPaperStuBatchRelaEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrcc_ExamPaperStuBatchRelaExObjLst) {
await cc_ExamPaperStuBatchRelaEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
await this.BindGv_cc_ExamPaperStuBatchRela4Func(this.listPara.listDiv);
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
public async BindGv_cc_ExamPaperStuBatchRela4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_cc_ExamPaperStuBatchRela4Func.name;
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
if (viewVarSet.sortcc_ExamPaperStuBatchRelaBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortcc_ExamPaperStuBatchRelaBy)为空,请检查!(In BindGv_cc_ExamPaperStuBatchRelaCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await Combinecc_ExamPaperStuBatchRelaCondition();
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrcc_ExamPaperStuBatchRelaExObjLst: Array <clscc_ExamPaperStuBatchRelaENEx> = [];
try
{

this.recCount = await cc_ExamPaperStuBatchRela_GetRecCountByCondAsync(strWhereCond);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
const strMsg = Format("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrcc_ExamPaperStuBatchRelaExObjLst, true);
return;
}

const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
orderBy: viewVarSet.sortcc_ExamPaperStuBatchRelaBy,//如果该字段为空,就使用下面的排序函数
sortFun: (x, y) => { console.log(x,y);return 0;}
}
arrcc_ExamPaperStuBatchRelaExObjLst = await cc_ExamPaperStuBatchRelaEx_GetObjExLstByPagerAsync(objPagerPara);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrcc_ExamPaperStuBatchRelaExObjLst.length == 0)
{
const strKey = Format("{0}", clscc_ExamPaperStuBatchRelaEN._CurrTabName);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_cc_ExamPaperStuBatchRela4Func(divList, arrcc_ExamPaperStuBatchRelaExObjLst);
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
 * @param objcc_ExamPaperStuBatchRelaENS:源对象
 * @returns 目标对象=>clscc_ExamPaperStuBatchRelaEN:objcc_ExamPaperStuBatchRelaENT
 **/
 public CopyToEx(objcc_ExamPaperStuBatchRelaENS:clscc_ExamPaperStuBatchRelaEN ): clscc_ExamPaperStuBatchRelaENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objcc_ExamPaperStuBatchRelaENT = new clscc_ExamPaperStuBatchRelaENEx();
try
{
ObjectAssign(objcc_ExamPaperStuBatchRelaENT, objcc_ExamPaperStuBatchRelaENS);
 return objcc_ExamPaperStuBatchRelaENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objcc_ExamPaperStuBatchRelaENT;
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
public SortFunExportExcel(a:clscc_ExamPaperStuBatchRelaEN , b:clscc_ExamPaperStuBatchRelaEN): number 
{
if (a.memo == b.memo) return a.memo.localeCompare(b.memo) ;
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
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortcc_ExamPaperStuBatchRelaBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (clscc_ExamPaperStuBatchRelaENEx.hasProperty(sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortcc_ExamPaperStuBatchRelaBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
cc_ExamPaperStuBatchRelaCRUD.sortFunStatic = sortFun;
await this.BindGv_cc_ExamPaperStuBatchRela4Func(this.listPara.listDiv);
}

 /** 复制记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
 **/
public async CopyRecord(arrIdPaperStuBatch: Array<string>) {
const strThisFuncName = this.CopyRecord.name;
try
{
const arrcc_ExamPaperStuBatchRelaObjLst = await cc_ExamPaperStuBatchRela_GetObjLstByIdPaperStuBatchLstAsync(arrIdPaperStuBatch);
//console.log('responseText=');
//console.log(responseText);
let intCount = 0;
for (const objInFor of arrcc_ExamPaperStuBatchRelaObjLst)
{
const strMaxStrId = await cc_ExamPaperStuBatchRela_GetMaxStrIdAsync();
//console.log('strMaxStrId=' + strMaxStrId);
objInFor.idPaperStuBatch = strMaxStrId;
const returnBool = await cc_ExamPaperStuBatchRela_AddNewRecordAsync(objInFor);
//console.log('returnBool=');
//console.log(returnBool);
if (returnBool == true)
{
//cc_ExamPaperStuBatchRela_ReFreshCache();
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
public async DelMultiRecord(arrIdPaperStuBatch: Array<string>) {
const strThisFuncName = this.DelMultiRecord.name;
try
{
const returnInt = await cc_ExamPaperStuBatchRela_Delcc_ExamPaperStuBatchRelasAsync(arrIdPaperStuBatch);
if (returnInt > 0)
{
//cc_ExamPaperStuBatchRela_ReFreshCache();
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
 * @param objcc_ExamPaperStuBatchRela:需要显示的对象
 **/
public Showcc_ExamPaperStuBatchRelaObj(divContainer: HTMLDivElement, objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objcc_ExamPaperStuBatchRela);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objcc_ExamPaperStuBatchRela.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjcc_ExamPaperStuBatchRelaEN:表实体类对象
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