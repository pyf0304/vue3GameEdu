
 /**
 * 类名:StuPerfAnalysis_Detail(界面:StuPerfAnalysisCRUD,01120259)
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:25:42
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { StuPerfAnalysis_GetObjByKeyLstAsync } from "@/ts/L3ForWApi/QuestionnaireResult/clsStuPerfAnalysisWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { StuPerfAnalysisEx_FuncMapByFldName } from "@/ts/L3ForWApiEx/QuestionnaireResult/clsStuPerfAnalysisExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsStuPerfAnalysisEN } from "@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisEN";
import { divVarSet,refStuPerfAnalysis_Detail } from "@/views/QuestionnaireResult/StuPerfAnalysisVueShare";
import { clsStuPerfAnalysisENEx } from "@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisENEx";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* StuPerfAnalysis_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  StuPerfAnalysis_Detail 
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
if (StuPerfAnalysis_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refStuPerfAnalysis_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_StuPerfAnalysis(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_StuPerfAnalysis.name;
if (StuPerfAnalysis_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refStuPerfAnalysis_Detail.value == null)
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
await refStuPerfAnalysis_Detail.value.showDialog();
}
divVarSet.refDivDetail = refStuPerfAnalysis_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (StuPerfAnalysis_Detail.times4TestShowDialog < 2)
{
StuPerfAnalysis_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_StuPerfAnalysis(strOp);
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
StuPerfAnalysis_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelStuPerfAnalysis = "关闭";
        }
return true;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(strIdStudentInfo: string,strIdCurrEduCls: string) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_StuPerfAnalysis('Detail');
if (bolIsSuccess == false) return;
try
{
 if (IsNullOrEmpty(strIdStudentInfo) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
 if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord4Func(strIdStudentInfo,strIdCurrEduCls);
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
public async DetailRecord4Func(strIdStudentInfo: string,strIdCurrEduCls: string) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelStuPerfAnalysis = "关闭";
try
{
const objStuPerfAnalysisEN = await StuPerfAnalysis_GetObjByKeyLstAsync(strIdStudentInfo,strIdCurrEduCls);
const objStuPerfAnalysisENEx = new clsStuPerfAnalysisENEx();
ObjectAssign(objStuPerfAnalysisENEx, objStuPerfAnalysisEN); 
await StuPerfAnalysisEx_FuncMapByFldName(clsStuPerfAnalysisENEx.con_CourseName, objStuPerfAnalysisENEx);
await StuPerfAnalysisEx_FuncMapByFldName(clsStuPerfAnalysisENEx.con_SchoolName, objStuPerfAnalysisENEx);
await StuPerfAnalysisEx_FuncMapByFldName(clsStuPerfAnalysisENEx.con_EduClsName, objStuPerfAnalysisENEx);
await StuPerfAnalysisEx_FuncMapByFldName(clsStuPerfAnalysisENEx.con_StuId, objStuPerfAnalysisENEx);
await StuPerfAnalysisEx_FuncMapByFldName(clsStuPerfAnalysisENEx.con_StuName, objStuPerfAnalysisENEx);
await StuPerfAnalysisEx_FuncMapByFldName(clsStuPerfAnalysisENEx.con_AdminClsName, objStuPerfAnalysisENEx);
await StuPerfAnalysisEx_FuncMapByFldName(clsStuPerfAnalysisENEx.con_GradeName, objStuPerfAnalysisENEx);
this.ShowDetailDataFromStuPerfAnalysisClass4Func(objStuPerfAnalysisENEx);
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
public async btnDetailRecord_Click(strIdStudentInfo: string,strIdCurrEduCls: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_StuPerfAnalysis('Detail');
if (bolIsSuccess == false) return;
if (IsNullOrEmpty(strIdStudentInfo) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
this.DetailRecord4Func(strIdStudentInfo,strIdCurrEduCls );
}

 /// <summary>
 /// 把同一个类的对象,复制到另一个对象
 /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 /// </summary>
 /// <param name = "objStuPerfAnalysisENS">源对象</param>
 /// <returns>目标对象=>clsStuPerfAnalysisEN:objStuPerfAnalysisENT</returns>
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
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objStuPerfAnalysisENT;
}
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjStuPerfAnalysisEN">表实体类对象</param>
*/
public ShowDetailDataFromStuPerfAnalysisClass4Func(pobjStuPerfAnalysisENEx: clsStuPerfAnalysisENEx )
{
 this.likeCount_d = pobjStuPerfAnalysisENEx.likeCount;// 
 this.idStudentInfo_d = pobjStuPerfAnalysisENEx.idStudentInfo;// 学生流水号
 this.idCurrEduCls_d = pobjStuPerfAnalysisENEx.idCurrEduCls;// 教学班流水号
 this.courseId_d = pobjStuPerfAnalysisENEx.courseId;// 课程Id
 this.questionCount_d = pobjStuPerfAnalysisENEx.questionCount;// 问题数
 this.commentCount_d = pobjStuPerfAnalysisENEx.commentCount;// 评论数
 this.askedCount_d = pobjStuPerfAnalysisENEx.askedCount;// 提问数
 this.rightCount_d = pobjStuPerfAnalysisENEx.rightCount;// 正确次数
 this.errorCount_d = pobjStuPerfAnalysisENEx.errorCount;// 错误次数
 this.totalPoints_d = pobjStuPerfAnalysisENEx.totalPoints;// 总积分
 this.markCount_d = pobjStuPerfAnalysisENEx.markCount;// 打分数
 this.idSchool_d = pobjStuPerfAnalysisENEx.idSchool;// 学校流水号
 this.comment_d = pobjStuPerfAnalysisENEx.comment;// 批注
 this.memo_d = pobjStuPerfAnalysisENEx.memo;// 备注
 this.courseName_d = pobjStuPerfAnalysisENEx.courseName;// 课程名称
 this.schoolName_d = pobjStuPerfAnalysisENEx.schoolName;// 学校名称
 this.eduClsName_d = pobjStuPerfAnalysisENEx.eduClsName;// 教学班名
 this.stuId_d = pobjStuPerfAnalysisENEx.stuId;// 学号
 this.stuName_d = pobjStuPerfAnalysisENEx.stuName;// 姓名
 this.adminClsName_d = pobjStuPerfAnalysisENEx.adminClsName;// 行政班名称
 this.gradeName_d = pobjStuPerfAnalysisENEx.gradeName;// 年级名称
}
 /**
 * 学生流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set adminClsName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblAdminClsName_d", value);
}
 /**
 * 提问数 (Used In ShowDetailDataFromClass4Func())
 **/
public  set askedCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblAskedCount_d", value !== null ? value.toString() : '');
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelStuPerfAnalysis(value: string) {
refStuPerfAnalysis_Detail.value.strCancelButtonText = value;
}
 /**
 * 批注 (Used In ShowDetailDataFromClass4Func())
 **/
public  set comment_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblComment_d", value);
}
 /**
 * 评论数 (Used In ShowDetailDataFromClass4Func())
 **/
public  set commentCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCommentCount_d", value !== null ? value.toString() : '');
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
 * 教学班流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set eduClsName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblEduClsName_d", value);
}
 /**
 * 错误次数 (Used In ShowDetailDataFromClass4Func())
 **/
public  set errorCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblErrorCount_d", value !== null ? value.toString() : '');
}
 /**
 * 学生流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set gradeName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblGradeName_d", value);
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
 * 学生流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set idStudentInfo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdStudentInfo_d", value);
}
 /**
 * 资源喜欢数量 (Used In ShowDetailDataFromClass4Func())
 **/
public  set likeCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblLikeCount_d", value !== null ? value.toString() : '');
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
 * 正确次数 (Used In ShowDetailDataFromClass4Func())
 **/
public  set rightCount_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblRightCount_d", value !== null ? value.toString() : '');
}
 /**
 * 学校流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set schoolName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblSchoolName_d", value);
}
 /**
 * 学生流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set stuId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblStuId_d", value);
}
 /**
 * 学生流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set stuName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblStuName_d", value);
}
 /**
 * 总积分 (Used In ShowDetailDataFromClass4Func())
 **/
public  set totalPoints_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblTotalPoints_d", value !== null ? value.toString() : '');
}
}