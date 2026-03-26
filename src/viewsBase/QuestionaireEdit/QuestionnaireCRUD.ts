
 /**
 * 类名:QuestionnaireCRUD(界面:QuestionnaireCRUD,01120199)
 * 表名:Questionnaire(01120001)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:28:29
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { CombineQuestionnaireCondition,CourseId_Session,divVarSet,viewVarSet,dataColumn,BindTabByList,refQuestionnaire_List } from "@/views/QuestionaireEdit/QuestionnaireVueShare";
import { Questionnaire_GetRecCountByCondAsync,Questionnaire_GetObjLstAsync,Questionnaire_ReOrderAsync,Questionnaire_GoBottomAsync,Questionnaire_DownMoveAsync,Questionnaire_UpMoveAsync,Questionnaire_GoTopAsync,Questionnaire_DelRecordAsync,Questionnaire_GetObjByQuestionIdAsync,Questionnaire_GetObjLstByQuestionIdLstAsync,Questionnaire_AddNewRecordAsync,Questionnaire_DelQuestionnairesAsync } from "@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { GetCheckedKeyIdsInDivObj,SetCheckedItem4KeyIdInDiv,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { clsQuestionnaireENEx } from "@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireENEx";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { QuestionnaireEx_FuncMapByFldName,QuestionnaireEx_GetObjExLstByPagerAsync } from "@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionnaireExWApi";
import { clsQuestionnaireEN } from "@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN";
import { ObjectAssign,BindTab,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /**
* 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData:any, strFileName:string): void;
 /** QuestionnaireCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  QuestionnaireCRUD implements clsOperateList
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
public static objPageCRUD: QuestionnaireCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
QuestionnaireCRUD.objPageCRUD = this;
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
return clsQuestionnaireEN._CurrTabName;
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
if (viewVarSet.sortQuestionnaireBy == '') viewVarSet.sortQuestionnaireBy = `${ clsQuestionnaireEN.con_QuestionName } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
if (viewVarSet.sortQuestionnaireBy == '') viewVarSet.sortQuestionnaireBy = `${ clsQuestionnaireEN.con_QuestionName } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
 **/
public CombineData(arrQuestionnaireObjLst: Array<clsQuestionnaireEN>, arrDataColumn: Array<clsDataColumn>) 
{
const intRowNum = arrQuestionnaireObjLst.length;
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
const objEN: clsQuestionnaireEN = arrQuestionnaireObjLst[i];
for (let j = 0; j < intColNum; j++)
{
arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName));//i + "" + j;
}
arrData.push(arrRow);
}
//console.log("arrData", arrData);
const strFileName = Format("题目({0})导出.xlsx",
 clsQuestionnaireEN._CurrTabName);
exportSpecialExcel_pyf(arrData, strFileName);
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel)
 **/
public async ExportExcel_Questionnaire() 
{
const strThisFuncName = this.ExportExcel_Questionnaire.name;
if (viewVarSet.sortQuestionnaireBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortQuestionnaireBy)为空,请检查!(In BindGv_QuestionnaireCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await CombineQuestionnaireCondition();
 let arrQuestionnaireObjLst: Array <clsQuestionnaireEN> = [];
try
{

this.recCount = await Questionnaire_GetRecCountByCondAsync(strWhereCond);
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

arrQuestionnaireObjLst = await Questionnaire_GetObjLstAsync(strWhereCond);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrQuestionnaireObjLst.length == 0)
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
fldName: "questionId",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目ID",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionIndex",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目序号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionName",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionContent",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目内容",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionMemo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目说明",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionNo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目编号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "examAnswer",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目答案",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionTypeId4Course",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目类型Id4课程",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "gridTitle",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "表格标题",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 16,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isHaveAdditionalMemo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否有附加说明",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 18,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionScore",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目得分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 20,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "questionNameAdd",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目补充",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 21,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "defaultValue",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "缺省值",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 22,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "fillInTextWidth",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "填空框宽度",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 24,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "memoTextWidth",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "备注框宽度",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 25,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "codeTab",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "代码表",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 26,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "codeTabCode",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "CodeTab_Code",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 27,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "codeTabName",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "CodeTab_Name",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 28,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "codeTabCondition",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "代码表_条件",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 29,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "relaEvent",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "相关事件",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 30,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "firstIndent",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "首行缩进",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 31,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "defaultSelectItem",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "默认选项",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 32,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "ifLinkage",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否联动",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 33,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "linkageIndex",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "联动题序号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 34,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isAutoGridTitle",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否自动编表格标题",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 35,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "fillInTextHeight",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "填空框高度",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 36,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isMulti4FillInText",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否填空框多行",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 37,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "checkBoxLimitCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "复选框限制数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 38,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isShow",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否启用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 40,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isCast",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否播放",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 41,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "likeCount",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "资源喜欢数量",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 42,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "answerAttLimitSize",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "回答附件限制大小",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 43,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "limitedResourceType",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "限制资源类型",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 44,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isEffective",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否有效",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 45,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isCanInPaper",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否可在Paper",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 46,
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
orderNum: 47,
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
orderNum: 48,
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
orderNum: 49,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
arrQuestionnaireObjLst = arrQuestionnaireObjLst.sort(this.SortFunExportExcel);
  this.CombineData(arrQuestionnaireObjLst, arrDataColumn); 
//console.log("完成BindGv_Questionnaire!");
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
await Questionnaire_ReOrderAsync(objOrderByData);
//Questionnaire_ReFreshCache();
}
catch (e)
{
const strMsg = `重序出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
await Questionnaire_GoBottomAsync(objOrderByData);
//Questionnaire_ReFreshCache();
}
catch (e)
{
const strMsg = `置底出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
await Questionnaire_DownMoveAsync(objOrderByData);
//Questionnaire_ReFreshCache();
}
catch (e)
{
const strMsg = `下移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
await Questionnaire_UpMoveAsync(objOrderByData);
//Questionnaire_ReFreshCache();
}
catch (e)
{
const strMsg = `上移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
await Questionnaire_GoTopAsync(objOrderByData);
//Questionnaire_ReFreshCache();
}
catch (e)
{
const strMsg = `置顶出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
 * "lngQuestionId": 表关键字
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
const lngKeyId =  Number(strKeyId);
await this.DelRecord(lngKeyId);
 await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
public async btnSelectRecordInTab_Click(lngQuestionId: number) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (lngQuestionId == 0)
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
this.SelectRecord(lngQuestionId);
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
public async DelRecord(lngQuestionId: number) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await Questionnaire_DelRecordAsync(lngQuestionId);
if (returnInt > 0)
{
//Questionnaire_ReFreshCache();
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
public async SelectRecord(lngQuestionId: number) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(lngQuestionId);
console.log('完成SelectRecord!', objQuestionnaireEN);
Redirect("/Index/Main_Questionnaire");
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
await this.BindGv_Questionnaire4Func(divVarSet.refDivList);
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
await this.ExportExcel_Questionnaire();
}

 /** 显示Questionnaire对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrQuestionnaireObjLst:需要绑定的对象列表
 **/
public async BindTab_Questionnaire(divContainer: HTMLDivElement, arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx>) 
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
fldName: clsQuestionnaireEN.con_QuestionNo,
sortBy: "questionNo",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目编号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_QuestionName,
sortBy: "questionName",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_CourseName,
sortBy: "courseName",
sortFun: SortFun,
getDataSource: "",
colHeader: "课程名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_ChapterName,
sortBy: "chapterName",
sortFun: SortFun,
getDataSource: "",
colHeader: "章名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_QuestionTypeName,
sortBy: "questionTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目类型名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_DifficultyLevelName,
sortBy: "difficultyLevelName",
sortFun: SortFun,
getDataSource: "",
colHeader: "难度等级名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_LevelModeTypeName,
sortBy: "levelModeTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "模式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_LevelNo,
sortBy: clsQuestionnaireEN.con_LevelNo,
sortFun: SortFun,
getDataSource: "",
colHeader: "学习关号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_UpdDate,
sortBy: "updDate",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_UpdUser,
sortBy: "updUser",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_IsShow,
sortBy: clsQuestionnaireEN.con_IsShow,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否启用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_IsJs,
sortBy: clsQuestionnaireEN.con_IsJs,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否是JS",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_IsTest,
sortBy: clsQuestionnaireEN.con_IsTest,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否测试",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 14,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refQuestionnaire_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrQuestionnaireExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_Questionnaire函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrQuestionnaireExObjLst, arrDataColumn,  clsQuestionnaireEN.con_QuestionId, this); 
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

 /** 显示Questionnaire对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrQuestionnaireExObjLst:需要绑定的对象列表
 **/
public async BindTab_Questionnaire4Func(divContainer: HTMLDivElement, arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx>) 
{
const strThisFuncName = this.BindTab_Questionnaire4Func.name;
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
fldName: clsQuestionnaireEN.con_QuestionNo,
sortBy: "questionNo",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目编号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_QuestionName,
sortBy: "questionName",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_CourseName,
sortBy: "courseName",
sortFun: SortFun,
getDataSource: "",
colHeader: "课程名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_ChapterName,
sortBy: "chapterName",
sortFun: SortFun,
getDataSource: "",
colHeader: "章名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_QuestionTypeName,
sortBy: "questionTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目类型名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_DifficultyLevelName,
sortBy: "difficultyLevelName",
sortFun: SortFun,
getDataSource: "",
colHeader: "难度等级名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireENEx.con_LevelModeTypeName,
sortBy: "levelModeTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "模式名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_LevelNo,
sortBy: clsQuestionnaireEN.con_LevelNo,
sortFun: SortFun,
getDataSource: "",
colHeader: "学习关号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_UpdDate,
sortBy: "updDate",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_UpdUser,
sortBy: "updUser",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_IsShow,
sortBy: clsQuestionnaireEN.con_IsShow,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否启用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_IsJs,
sortBy: clsQuestionnaireEN.con_IsJs,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否是JS",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsQuestionnaireEN.con_IsTest,
sortBy: clsQuestionnaireEN.con_IsTest,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否测试",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 14,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrQuestionnaireExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refQuestionnaire_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrQuestionnaireExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_Questionnaire4Func函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrQuestionnaireExObjLst, arrDataColumn,  clsQuestionnaireEN.con_QuestionId, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrQuestionnaireExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clsQuestionnaireEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrQuestionnaireExObjLst) {
await QuestionnaireEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
await this.BindGv_Questionnaire4Func(this.listPara.listDiv);
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
public async BindGv_Questionnaire4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_Questionnaire4Func.name;
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
if (viewVarSet.sortQuestionnaireBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortQuestionnaireBy)为空,请检查!(In BindGv_QuestionnaireCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await CombineQuestionnaireCondition();
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrQuestionnaireExObjLst: Array <clsQuestionnaireENEx> = [];
try
{

this.recCount = await Questionnaire_GetRecCountByCondAsync(strWhereCond);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
const strMsg = Format("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrQuestionnaireExObjLst, true);
return;
}

const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
orderBy: viewVarSet.sortQuestionnaireBy,//如果该字段为空,就使用下面的排序函数
sortFun: (x, y) => { console.log(x,y);return 0;}
}
arrQuestionnaireExObjLst = await QuestionnaireEx_GetObjExLstByPagerAsync(objPagerPara);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrQuestionnaireExObjLst.length == 0)
{
const strKey = Format("{0}", clsQuestionnaireEN._CurrTabName);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_Questionnaire4Func(divList, arrQuestionnaireExObjLst);
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
 * @param objQuestionnaireENS:源对象
 * @returns 目标对象=>clsQuestionnaireEN:objQuestionnaireENT
 **/
 public CopyToEx(objQuestionnaireENS:clsQuestionnaireEN ): clsQuestionnaireENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objQuestionnaireENT = new clsQuestionnaireENEx();
try
{
ObjectAssign(objQuestionnaireENT, objQuestionnaireENS);
 return objQuestionnaireENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQuestionnaireENT;
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
public SortFunExportExcel(a:clsQuestionnaireEN , b:clsQuestionnaireEN): number 
{
if (a.questionIndex == b.questionIndex) return a.questionIndex - b.questionIndex ;
else return a.questionId - b.questionId;
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
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortQuestionnaireBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (clsQuestionnaireENEx.hasProperty(sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortQuestionnaireBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
QuestionnaireCRUD.sortFunStatic = sortFun;
await this.BindGv_Questionnaire4Func(this.listPara.listDiv);
}

 /** 复制记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
 **/
public async CopyRecord(arrQuestionId: Array<string>) {
const strThisFuncName = this.CopyRecord.name;
try
{
const arrQuestionnaireObjLst = await Questionnaire_GetObjLstByQuestionIdLstAsync(arrQuestionId);
//console.log('responseText=');
//console.log(responseText);
let intCount = 0;
for (const objInFor of arrQuestionnaireObjLst)
{
const returnBool = await Questionnaire_AddNewRecordAsync(objInFor);
//console.log('returnBool=');
//console.log(returnBool);
if (returnBool == true)
{
//Questionnaire_ReFreshCache();
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
public async DelMultiRecord(arrQuestionId: Array<string>) {
const strThisFuncName = this.DelMultiRecord.name;
try
{
const returnInt = await Questionnaire_DelQuestionnairesAsync(arrQuestionId);
if (returnInt > 0)
{
//Questionnaire_ReFreshCache();
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
 * @param objQuestionnaire:需要显示的对象
 **/
public ShowQuestionnaireObj(divContainer: HTMLDivElement, objQuestionnaire: clsQuestionnaireEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objQuestionnaire);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objQuestionnaire.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjQuestionnaireEN:表实体类对象
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