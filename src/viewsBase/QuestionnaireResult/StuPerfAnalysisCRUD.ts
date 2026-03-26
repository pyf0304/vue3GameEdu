
 /**
 * 类名:StuPerfAnalysisCRUD(界面:StuPerfAnalysisCRUD,01120259)
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:29:05
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { clsStuPerfAnalysisENEx } from "@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisENEx";
import { CombineStuPerfAnalysisCondition,divVarSet,viewVarSet,dataColumn,BindTabByList,refStuPerfAnalysis_List } from "@/views/QuestionnaireResult/StuPerfAnalysisVueShare";
import { StuPerfAnalysis_GetRecCountByCondAsync,StuPerfAnalysis_GetObjLstAsync,StuPerfAnalysis_DelRecKeyLstAsync,StuPerfAnalysis_GetObjByKeyLstAsync,StuPerfAnalysis_DelRecKeyLstsAsync } from "@/ts/L3ForWApi/QuestionnaireResult/clsStuPerfAnalysisWApi";
import { StuPerfAnalysisEx_CopyToEx,StuPerfAnalysisEx_FuncMapByFldName,StuPerfAnalysisEx_GetObjExLstByPagerAsync,StuPerfAnalysisEx_FuncMapKeyIdGrade,StuPerfAnalysisEx_FuncMapKeyIdAdminCls } from "@/ts/L3ForWApiEx/QuestionnaireResult/clsStuPerfAnalysisExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { GetCheckedKeyLstsInDivObj,GetDivObjInDivObj,intersectSets,GetSelectValueInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { clsStuPerfAnalysisEN } from "@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisEN";
import { ObjectAssign,BindTab_KeyLst,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /**
* 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData:any, strFileName:string): void;
 /** StuPerfAnalysisCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  StuPerfAnalysisCRUD implements clsOperateList
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
public static objPageCRUD: StuPerfAnalysisCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
StuPerfAnalysisCRUD.objPageCRUD = this;
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
return clsStuPerfAnalysisEN._CurrTabName;
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
if (viewVarSet.sortStuPerfAnalysisBy == '') viewVarSet.sortStuPerfAnalysisBy = `${ clsStuPerfAnalysisEN.con_LikeCount } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_StuPerfAnalysis4Func(divVarSet.refDivList);
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
if (viewVarSet.sortStuPerfAnalysisBy == '') viewVarSet.sortStuPerfAnalysisBy = `${ clsStuPerfAnalysisEN.con_LikeCount } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_StuPerfAnalysis4Func(divVarSet.refDivList);
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
await this.BindGv_StuPerfAnalysis4Func(divVarSet.refDivList);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
 **/
public CombineData(arrStuPerfAnalysisObjLst: Array<clsStuPerfAnalysisEN>, arrDataColumn: Array<clsDataColumn>) 
{
const intRowNum = arrStuPerfAnalysisObjLst.length;
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
const objEN: clsStuPerfAnalysisEN = arrStuPerfAnalysisObjLst[i];
for (let j = 0; j < intColNum; j++)
{
arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName));//i + "" + j;
}
arrData.push(arrRow);
}
//console.log("arrData", arrData);
const strFileName = Format("学生问题分析({0})导出.xlsx",
 clsStuPerfAnalysisEN._CurrTabName);
exportSpecialExcel_pyf(arrData, strFileName);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
 **/
public CombineData4Func(arrStuPerfAnalysisExObjLst: Array<clsStuPerfAnalysisENEx>, arrDataColumn: Array<clsDataColumn>) 
{
const intRowNum = arrStuPerfAnalysisExObjLst.length;
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
const objEN: clsStuPerfAnalysisENEx = arrStuPerfAnalysisExObjLst[i];
for (let j = 0; j < intColNum; j++)
{
arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName));//i + "" + j;
}
arrData.push(arrRow);
}
//console.log("arrData", arrData);
const strFileName = Format("学生问题分析({0})导出.xlsx",
 clsStuPerfAnalysisEN._CurrTabName);
exportSpecialExcel_pyf(arrData, strFileName);
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func_NoCache)
 **/
public async ExportExcel_StuPerfAnalysis4Func() 
{
const strThisFuncName = this.ExportExcel_StuPerfAnalysis4Func.name;
if (viewVarSet.sortStuPerfAnalysisBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortStuPerfAnalysisBy)为空,请检查!(In BindGv_StuPerfAnalysisCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await CombineStuPerfAnalysisCondition();
 let arrStuPerfAnalysisObjLst: Array <clsStuPerfAnalysisEN> = [];
 let arrStuPerfAnalysisExObjLst: Array <clsStuPerfAnalysisENEx> = [];
try
{

this.recCount = await StuPerfAnalysis_GetRecCountByCondAsync(strWhereCond);
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

arrStuPerfAnalysisObjLst = await StuPerfAnalysis_GetObjLstAsync(strWhereCond);
arrStuPerfAnalysisExObjLst = arrStuPerfAnalysisObjLst.map(StuPerfAnalysisEx_CopyToEx);
}
catch(e)
{
const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrStuPerfAnalysisObjLst.length == 0)
{
const strKey = Format("{0}", clsStuPerfAnalysisEN._CurrTabName);
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
fldName: "likeCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 1,
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
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idCurrEduCls",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "教学班流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "问题数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "commentCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "评论数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "askedCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "提问数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "rightCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "正确次数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "errorCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "错误次数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "totalPoints",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "总积分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "markCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "打分数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idSchool",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 14,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "comment",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "批注",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 15,
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
orderNum: 16,
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
orderNum: 17,
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
orderNum: 18,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "courseId",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "课程名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 20,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idSchool",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 25,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idCurrEduCls",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "教学班名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 26,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idStudentInfo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 27,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idStudentInfo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "姓名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 28,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idStudentInfo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "行政班名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 29,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idStudentInfo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "年级名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 30,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrStuPerfAnalysisExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
arrStuPerfAnalysisObjLst = arrStuPerfAnalysisObjLst.sort(this.SortFunExportExcel);
  this.CombineData(arrStuPerfAnalysisObjLst, arrDataColumn); 
//console.log("完成BindGv_StuPerfAnalysis!");
}
catch(e)
{
const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}
//多关键字,不支持复制功能!

 /** 
 * 在数据表里删除记录
 * "strIdStudentInfo": 表关键字
 * "strIdCurrEduCls": 表关键字
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
 **/
public async btnDelRecordInTab_Click(strIdStudentInfo: string,strIdCurrEduCls: string) {
const strThisFuncName = this.btnDelRecordInTab_Click.name;
try
{
 if (IsNullOrEmpty(strIdStudentInfo) == true)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
 if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
if (confirmDel(0) == false)
{
return;
}
await this.DelRecord(strIdStudentInfo,strIdCurrEduCls);
 await this.BindGv_StuPerfAnalysis4Func(divVarSet.refDivList);
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
public async btnSelectRecordInTab_Click(strIdStudentInfo: string,strIdCurrEduCls: string) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (IsNullOrEmpty(strIdStudentInfo) == true)
{
const strMsg = "请选择相关记录,请检查!";
console.error(strMsg);
alert(strMsg);
return;
}
if (IsNullOrEmpty(strIdCurrEduCls) == true)
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
this.SelectRecord(strIdStudentInfo,strIdCurrEduCls);
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
public async DelRecord(strIdStudentInfo: string,strIdCurrEduCls: string) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await StuPerfAnalysis_DelRecKeyLstAsync(strIdStudentInfo,strIdCurrEduCls);
if (returnInt > 0)
{
//_ReFreshCache();
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
public async SelectRecord(strIdStudentInfo: string,strIdCurrEduCls: string) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objStuPerfAnalysisEN = await StuPerfAnalysis_GetObjByKeyLstAsync(strIdStudentInfo,strIdCurrEduCls);
console.log('完成SelectRecord!', objStuPerfAnalysisEN);
Redirect("/Index/Main_StuPerfAnalysis");
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
const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
if (arrKeyLsts.length == 0)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
if (confirmDel(arrKeyLsts.length) == false)
{
return;
}
await this.DelMultiRecord_KeyLst(arrKeyLsts);
await this.BindGv_StuPerfAnalysis4Func(divVarSet.refDivList);
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
await this.ExportExcel_StuPerfAnalysis4Func();
}

 /** 显示StuPerfAnalysis对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrStuPerfAnalysisObjLst:需要绑定的对象列表
 **/
public async BindTab_StuPerfAnalysis(divContainer: HTMLDivElement, arrStuPerfAnalysisExObjLst: Array<clsStuPerfAnalysisENEx>) 
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
fldName: clsStuPerfAnalysisEN.con_LikeCount,
sortBy: clsStuPerfAnalysisEN.con_LikeCount,
sortFun: SortFun,
getDataSource: "",
colHeader: "",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 1,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisENEx.con_StuId,
sortBy: "stuId",
sortFun: SortFun,
getDataSource: "",
colHeader: "学号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisENEx.con_StuName,
sortBy: "stuName",
sortFun: SortFun,
getDataSource: "",
colHeader: "姓名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisENEx.con_GradeName,
sortBy: "gradeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "年级名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisENEx.con_AdminClsName,
sortBy: "adminClsName",
sortFun: SortFun,
getDataSource: "",
colHeader: "行政班名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_QuestionCount,
sortBy: "questionCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "问题数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_AskedCount,
sortBy: "askedCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "提问数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_CommentCount,
sortBy: "commentCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "评论数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_TotalPoints,
sortBy: "totalPoints",
sortFun: SortFun,
getDataSource: "",
colHeader: "总积分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_RightCount,
sortBy: "rightCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "正确次数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_ErrorCount,
sortBy: "errorCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "错误次数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_Comment,
sortBy: "comment",
sortFun: SortFun,
getDataSource: "",
colHeader: "批注",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refStuPerfAnalysis_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrStuPerfAnalysisExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_StuPerfAnalysis函数中，divDataLst不存在!");
return;
}
 const arrKeyLst = [clsStuPerfAnalysisEN.con_IdStudentInfo , clsStuPerfAnalysisEN.con_IdCurrEduCls];
await BindTab_KeyLst(divDataLst, arrStuPerfAnalysisExObjLst, arrDataColumn, arrKeyLst, this); 
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

 /** 显示StuPerfAnalysis对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrStuPerfAnalysisExObjLst:需要绑定的对象列表
 **/
public async BindTab_StuPerfAnalysis4Func(divContainer: HTMLDivElement, arrStuPerfAnalysisExObjLst: Array<clsStuPerfAnalysisENEx>) 
{
const strThisFuncName = this.BindTab_StuPerfAnalysis4Func.name;
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
fldName: clsStuPerfAnalysisEN.con_LikeCount,
sortBy: clsStuPerfAnalysisEN.con_LikeCount,
sortFun: SortFun,
getDataSource: "",
colHeader: "",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 1,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisENEx.con_StuId,
sortBy: "stuId",
sortFun: SortFun,
getDataSource: "",
colHeader: "学号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisENEx.con_StuName,
sortBy: "stuName",
sortFun: SortFun,
getDataSource: "",
colHeader: "姓名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisENEx.con_GradeName,
sortBy: "gradeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "年级名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisENEx.con_AdminClsName,
sortBy: "adminClsName",
sortFun: SortFun,
getDataSource: "",
colHeader: "行政班名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_QuestionCount,
sortBy: "questionCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "问题数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_AskedCount,
sortBy: "askedCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "提问数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_CommentCount,
sortBy: "commentCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "评论数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_TotalPoints,
sortBy: "totalPoints",
sortFun: SortFun,
getDataSource: "",
colHeader: "总积分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_RightCount,
sortBy: "rightCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "正确次数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_ErrorCount,
sortBy: "errorCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "错误次数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStuPerfAnalysisEN.con_Comment,
sortBy: "comment",
sortFun: SortFun,
getDataSource: "",
colHeader: "批注",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrStuPerfAnalysisExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refStuPerfAnalysis_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrStuPerfAnalysisExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_StuPerfAnalysis4Func函数中，divDataLst不存在!");
return;
}
 const arrKeyLst = [clsStuPerfAnalysisEN.con_IdStudentInfo , clsStuPerfAnalysisEN.con_IdCurrEduCls];
await BindTab_KeyLst(divDataLst, arrStuPerfAnalysisExObjLst, arrDataColumn, arrKeyLst, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrStuPerfAnalysisExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrStuPerfAnalysisExObjLst: Array<clsStuPerfAnalysisENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clsStuPerfAnalysisEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrStuPerfAnalysisExObjLst) {
await StuPerfAnalysisEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
await this.BindGv_StuPerfAnalysis4Func(this.listPara.listDiv);
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
public async BindGv_StuPerfAnalysis4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_StuPerfAnalysis4Func.name;
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
if (viewVarSet.sortStuPerfAnalysisBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortStuPerfAnalysisBy)为空,请检查!(In BindGv_StuPerfAnalysisCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await CombineStuPerfAnalysisCondition();
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrStuPerfAnalysisExObjLst: Array <clsStuPerfAnalysisENEx> = [];
try
{

this.recCount = await StuPerfAnalysis_GetRecCountByCondAsync(strWhereCond);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
const strMsg = Format("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrStuPerfAnalysisExObjLst, true);
return;
}

const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
orderBy: viewVarSet.sortStuPerfAnalysisBy,//如果该字段为空,就使用下面的排序函数
sortFun: (x, y) => { console.log(x,y);return 0;}
}
arrStuPerfAnalysisExObjLst = await StuPerfAnalysisEx_GetObjExLstByPagerAsync(objPagerPara);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrStuPerfAnalysisExObjLst.length == 0)
{
const strKey = Format("{0}", clsStuPerfAnalysisEN._CurrTabName);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_StuPerfAnalysis4Func(divList, arrStuPerfAnalysisExObjLst);
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
 * @param objStuPerfAnalysisENS:源对象
 * @returns 目标对象=>clsStuPerfAnalysisEN:objStuPerfAnalysisENT
 **/
 public CopyToEx(objStuPerfAnalysisENS:clsStuPerfAnalysisEN ): clsStuPerfAnalysisENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objStuPerfAnalysisENT = new clsStuPerfAnalysisENEx();
try
{
ObjectAssign(objStuPerfAnalysisENT, objStuPerfAnalysisENS);
 return objStuPerfAnalysisENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objStuPerfAnalysisENT;
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
public SortFunExportExcel(a:clsStuPerfAnalysisEN , b:clsStuPerfAnalysisEN): number 
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
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortStuPerfAnalysisBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (clsStuPerfAnalysisENEx.hasProperty(sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortStuPerfAnalysisBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
StuPerfAnalysisCRUD.sortFunStatic = sortFun;
await this.BindGv_StuPerfAnalysis4Func(this.listPara.listDiv);
}

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetConditionInFldValueLst)
 * @returns 相关字段的InFldId列表(Array<string>)
 **/
 public async GetCondition_IdStudentInfoLst_In(): Promise<Array<string>> 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objStuPerfAnalysisCond = new clsStuPerfAnalysisENEx();
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
let arrIdStudentInfoInclude: Array<string> = [];
try
{
if ( this.idGrade_q != "" && this.idGrade_q != "0")
{
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisENEx.con_IdGrade, this.idGrade_q, "=");

const arrIdStudentInfo_IdGrade = await StuPerfAnalysisEx_FuncMapKeyIdGrade(objStuPerfAnalysisCond);
if (arrIdStudentInfoInclude.length == 0)
{
arrIdStudentInfoInclude = arrIdStudentInfo_IdGrade.map(x=>x.toString());
}
else
{
arrIdStudentInfoInclude = intersectSets(arrIdStudentInfoInclude, arrIdStudentInfo_IdGrade.map(x=>x.toString())); 
}
}
if ( this.idAdminCls_q != "" && this.idAdminCls_q != "0")
{
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisENEx.con_IdAdminCls, this.idAdminCls_q, "=");

const arrIdStudentInfo_IdAdminCls = await StuPerfAnalysisEx_FuncMapKeyIdAdminCls(objStuPerfAnalysisCond);
if (arrIdStudentInfoInclude.length == 0)
{
arrIdStudentInfoInclude = arrIdStudentInfo_IdAdminCls.map(x=>x.toString());
}
else
{
arrIdStudentInfoInclude = intersectSets(arrIdStudentInfoInclude, arrIdStudentInfo_IdAdminCls.map(x=>x.toString())); 
}
}
}
catch(objException)
{
const strMsg:string = Format("(errid:WiTsCs0029)在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return arrIdStudentInfoInclude;
}
//多关键字,不支持复制功能!

 /** 根据关键字列表删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
 **/
public async DelMultiRecord_KeyLst(arrKeyLsts: Array<string>) {
const strThisFuncName = this.DelMultiRecord_KeyLst.name;
try
{
const returnInt = await StuPerfAnalysis_DelRecKeyLstsAsync(arrKeyLsts);
if (returnInt > 0)
{
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
 * @param objStuPerfAnalysis:需要显示的对象
 **/
public ShowStuPerfAnalysisObj(divContainer: HTMLDivElement, objStuPerfAnalysis: clsStuPerfAnalysisEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objStuPerfAnalysis);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objStuPerfAnalysis.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjStuPerfAnalysisEN:表实体类对象
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
 * 学生流水号 (Used In GetConditionInFldValueLst())
 **/
public  get idAdminCls_q():string {
const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, "ddlIdAdminCls_q");
if (strValue == undefined) return "";
else if (strValue == "0") return "";
else return strValue;
}
 /**
 * 学生流水号 (Used In GetConditionInFldValueLst())
 **/
public  get idGrade_q():string {
const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, "ddlIdGrade_q");
if (strValue == undefined) return "";
else if (strValue == "0") return "";
else return strValue;
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