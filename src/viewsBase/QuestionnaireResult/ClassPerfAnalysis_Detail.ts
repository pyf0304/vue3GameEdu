
 /**
 * 类名:ClassPerfAnalysis_Detail(界面:ClassPerfAnalysisCRUD,01120258)
 * 表名:ClassPerfAnalysis(01120977)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:25:00
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { ClassPerfAnalysis_GetObjByKeyLstAsync } from "@/ts/L3ForWApi/QuestionnaireResult/clsClassPerfAnalysisWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { ClassPerfAnalysisEx_FuncMapByFldName } from "@/ts/L3ForWApiEx/QuestionnaireResult/clsClassPerfAnalysisExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsClassPerfAnalysisEN } from "@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisEN";
import { divVarSet,refClassPerfAnalysis_Detail } from "@/views/QuestionnaireResult/ClassPerfAnalysisVueShare";
import { clsClassPerfAnalysisENEx } from "@/ts/L0Entity/QuestionnaireResult/clsClassPerfAnalysisENEx";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* ClassPerfAnalysis_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  ClassPerfAnalysis_Detail 
{
public static times4TestShowDialog = 0;
public opType = "";
public keyId = "";
public static strPageDispModeId = "01";//PopupBox(弹出框)
private iShowList: IShowList;
public mstrListDiv = "divDataLst";
public bolIsLoadDetailRegion = false;  //记录是否导入编辑区的变量
public divName4Detail = "divDetail";  //编辑区的Id
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivDetail(): HTMLDivElement {
return divVarSet.refDivDetail;
}
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivLayout(): HTMLDivElement {
return divVarSet.refDivDetail;
}
constructor(objShowList: IShowList) {
this.iShowList = objShowList;
}


 /**
 * 隐藏对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
 **/
public HideDialog_() {
if (ClassPerfAnalysis_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refClassPerfAnalysis_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_ClassPerfAnalysis(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_ClassPerfAnalysis.name;
if (ClassPerfAnalysis_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refClassPerfAnalysis_Detail.value == null)
{
const strMsg = Format(
'当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return false;
}
await refClassPerfAnalysis_Detail.value.showDialog();
}
divVarSet.refDivDetail = refClassPerfAnalysis_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (ClassPerfAnalysis_Detail.times4TestShowDialog < 2)
{
ClassPerfAnalysis_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_ClassPerfAnalysis(strOp);
}, 100);
}
else
{
const strMsg = Format("当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
return false;
} else {
ClassPerfAnalysis_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelClassPerfAnalysis = "关闭";
        }
return true;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(strIdCurrEduCls: string,lngQuestionId: number) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_ClassPerfAnalysis('Detail');
if (bolIsSuccess == false) return;
try
{
 if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
 if (lngQuestionId == 0)
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord4Func(strIdCurrEduCls,lngQuestionId);
}
catch(e)
{
const strMsg = Format("详细信息记录不成功. {0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /* 
 根据关键字详细信息记录
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord4Func)
  <param name = "sender">参数列表</param>
*/
public async DetailRecord4Func(strIdCurrEduCls: string,lngQuestionId: number) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelClassPerfAnalysis = "关闭";
try
{
const objClassPerfAnalysisEN = await ClassPerfAnalysis_GetObjByKeyLstAsync(strIdCurrEduCls,lngQuestionId);
const objClassPerfAnalysisENEx = new clsClassPerfAnalysisENEx();
ObjectAssign(objClassPerfAnalysisENEx, objClassPerfAnalysisEN); 
await ClassPerfAnalysisEx_FuncMapByFldName(clsClassPerfAnalysisENEx.con_QuestionName, objClassPerfAnalysisENEx);
await ClassPerfAnalysisEx_FuncMapByFldName(clsClassPerfAnalysisENEx.con_CourseName, objClassPerfAnalysisENEx);
await ClassPerfAnalysisEx_FuncMapByFldName(clsClassPerfAnalysisENEx.con_QuestionTypeName, objClassPerfAnalysisENEx);
await ClassPerfAnalysisEx_FuncMapByFldName(clsClassPerfAnalysisENEx.con_DifficultyLevelName, objClassPerfAnalysisENEx);
this.ShowDetailDataFromClassPerfAnalysisClass4Func(objClassPerfAnalysisENEx);
console.log("完成DetailRecord4Func!");
}
catch(e)
{
const strMsg = Format("显示详细信息4Func不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
public async btnDetailRecord_Click(strIdCurrEduCls: string,lngQuestionId: number) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_ClassPerfAnalysis('Detail');
if (bolIsSuccess == false) return;
if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
if (lngQuestionId== 0)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
this.DetailRecord4Func(strIdCurrEduCls,lngQuestionId );
}

 /// <summary>
 /// 把同一个类的对象,复制到另一个对象
 /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 /// </summary>
 /// <param name = "objClassPerfAnalysisENS">源对象</param>
 /// <returns>目标对象=>clsClassPerfAnalysisEN:objClassPerfAnalysisENT</returns>
 public CopyToEx(objClassPerfAnalysisENS:clsClassPerfAnalysisEN ): clsClassPerfAnalysisENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objClassPerfAnalysisENT = new clsClassPerfAnalysisENEx();
try
{
ObjectAssign(objClassPerfAnalysisENT, objClassPerfAnalysisENS);
 return objClassPerfAnalysisENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objClassPerfAnalysisENT;
}
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjClassPerfAnalysisEN">表实体类对象</param>
*/
public ShowDetailDataFromClassPerfAnalysisClass4Func(pobjClassPerfAnalysisENEx: clsClassPerfAnalysisENEx )
{
 this.idCurrEduCls_d = pobjClassPerfAnalysisENEx.idCurrEduCls;// 教学班流水号
 this.questionId_d = pobjClassPerfAnalysisENEx.questionId;// 题目Id
 this.courseId_d = pobjClassPerfAnalysisENEx.courseId;// 课程Id
 this.questionCount_d = pobjClassPerfAnalysisENEx.questionCount;// 问题数
 this.rightCount_d = pobjClassPerfAnalysisENEx.rightCount;// 正确次数
 this.errorCount_d = pobjClassPerfAnalysisENEx.errorCount;// 错误次数
 this.markCount_d = pobjClassPerfAnalysisENEx.markCount;// 打分数
 this.idSchool_d = pobjClassPerfAnalysisENEx.idSchool;// 学校流水号
 this.comment_d = pobjClassPerfAnalysisENEx.comment;// 批注
 this.memo_d = pobjClassPerfAnalysisENEx.memo;// 备注
 this.questionName_d = pobjClassPerfAnalysisENEx.questionName;// 题目名称
 this.courseName_d = pobjClassPerfAnalysisENEx.courseName;// 课程名称
 this.questionTypeName_d = pobjClassPerfAnalysisENEx.questionTypeName;// 题目类型名
 this.difficultyLevelName_d = pobjClassPerfAnalysisENEx.difficultyLevelName;// 难度等级名称
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelClassPerfAnalysis(value: string) {
refClassPerfAnalysis_Detail.value.strCancelButtonText = value;
}
 /**
 * 批注 (Used In ShowDetailDataFromClass4Func())
 **/
public  set comment_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblComment_d", value);
}
 /**
 * 课程Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set courseId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseId_d", value);
}
 /**
 * 课程Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set courseName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseName_d", value);
}
 /**
 * 题目Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set difficultyLevelName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblDifficultyLevelName_d", value);
}
 /**
 * 错误次数 (Used In ShowDetailDataFromClass4Func())
 **/
public  set errorCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblErrorCount_d", value !== null ? value.toString() : '');
}
 /**
 * 教学班流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set idCurrEduCls_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdCurrEduCls_d", value);
}
 /**
 * 学校流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set idSchool_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdSchool_d", value);
}
 /**
 * 打分数 (Used In ShowDetailDataFromClass4Func())
 **/
public  set markCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMarkCount_d", value !== null ? value.toString() : '');
}
 /**
 * 备注 (Used In ShowDetailDataFromClass4Func())
 **/
public  set memo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMemo_d", value);
}
 /**
 * 问题数 (Used In ShowDetailDataFromClass4Func())
 **/
public  set questionCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblQuestionCount_d", value !== null ? value.toString() : '');
}
 /**
 * 题目Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set questionId_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblQuestionId_d", value !== null ? value.toString() : '');
}
 /**
 * 题目Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set questionName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblQuestionName_d", value);
}
 /**
 * 题目Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set questionTypeName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblQuestionTypeName_d", value);
}
 /**
 * 正确次数 (Used In ShowDetailDataFromClass4Func())
 **/
public  set rightCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblRightCount_d", value !== null ? value.toString() : '');
}
}