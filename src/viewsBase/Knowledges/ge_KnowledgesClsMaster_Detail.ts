
 /**
 * 类名:ge_KnowledgesClsMaster_Detail(界面:ge_KnowledgesClsMasterCRUD,01120250)
 * 表名:ge_KnowledgesClsMaster(01120962)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:21:10
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { ge_KnowledgesClsMaster_GetObjByKeyLstAsync } from "@/ts/L3ForWApi/Knowledges/clsge_KnowledgesClsMasterWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { ge_KnowledgesClsMasterEx_FuncMapByFldName } from "@/ts/L3ForWApiEx/Knowledges/clsge_KnowledgesClsMasterExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsge_KnowledgesClsMasterEN } from "@/ts/L0Entity/Knowledges/clsge_KnowledgesClsMasterEN";
import { divVarSet,refge_KnowledgesClsMaster_Detail } from "@/views/Knowledges/ge_KnowledgesClsMasterVueShare";
import { clsge_KnowledgesClsMasterENEx } from "@/ts/L0Entity/Knowledges/clsge_KnowledgesClsMasterENEx";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* ge_KnowledgesClsMaster_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  ge_KnowledgesClsMaster_Detail 
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
public HideDialog_ge_KnowledgesClsMaster() {
if (ge_KnowledgesClsMaster_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refge_KnowledgesClsMaster_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_ge_KnowledgesClsMaster(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_ge_KnowledgesClsMaster.name;
if (ge_KnowledgesClsMaster_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refge_KnowledgesClsMaster_Detail.value == null)
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
await refge_KnowledgesClsMaster_Detail.value.showDialog();
}
divVarSet.refDivDetail = refge_KnowledgesClsMaster_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (ge_KnowledgesClsMaster_Detail.times4TestShowDialog < 2)
{
ge_KnowledgesClsMaster_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_ge_KnowledgesClsMaster(strOp);
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
ge_KnowledgesClsMaster_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelge_KnowledgesClsMaster = "关闭";
        }
return true;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(strIdCurrEduCls: string,strCourseKnowledgeId: string) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_ge_KnowledgesClsMaster('Detail');
if (bolIsSuccess == false) return;
try
{
 if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
 if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord4Func(strIdCurrEduCls,strCourseKnowledgeId);
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
public async DetailRecord4Func(strIdCurrEduCls: string,strCourseKnowledgeId: string) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelge_KnowledgesClsMaster = "关闭";
try
{
const objge_KnowledgesClsMasterEN = await ge_KnowledgesClsMaster_GetObjByKeyLstAsync(strIdCurrEduCls,strCourseKnowledgeId);
const objge_KnowledgesClsMasterENEx = new clsge_KnowledgesClsMasterENEx();
ObjectAssign(objge_KnowledgesClsMasterENEx, objge_KnowledgesClsMasterEN); 
await ge_KnowledgesClsMasterEx_FuncMapByFldName(clsge_KnowledgesClsMasterENEx.con_KnowledgeName, objge_KnowledgesClsMasterENEx);
await ge_KnowledgesClsMasterEx_FuncMapByFldName(clsge_KnowledgesClsMasterENEx.con_MasterLevelName, objge_KnowledgesClsMasterENEx);
await ge_KnowledgesClsMasterEx_FuncMapByFldName(clsge_KnowledgesClsMasterENEx.con_CourseName, objge_KnowledgesClsMasterENEx);
await ge_KnowledgesClsMasterEx_FuncMapByFldName(clsge_KnowledgesClsMasterENEx.con_DateTimeSim, objge_KnowledgesClsMasterENEx);
this.ShowDetailDataFromge_KnowledgesClsMasterClass4Func(objge_KnowledgesClsMasterENEx);
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
public async btnDetailRecord_Click(strIdCurrEduCls: string,strCourseKnowledgeId: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_ge_KnowledgesClsMaster('Detail');
if (bolIsSuccess == false) return;
if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
this.DetailRecord4Func(strIdCurrEduCls,strCourseKnowledgeId );
}

 /// <summary>
 /// 把同一个类的对象,复制到另一个对象
 /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 /// </summary>
 /// <param name = "objge_KnowledgesClsMasterENS">源对象</param>
 /// <returns>目标对象=>clsge_KnowledgesClsMasterEN:objge_KnowledgesClsMasterENT</returns>
 public CopyToEx(objge_KnowledgesClsMasterENS:clsge_KnowledgesClsMasterEN ): clsge_KnowledgesClsMasterENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objge_KnowledgesClsMasterENT = new clsge_KnowledgesClsMasterENEx();
try
{
ObjectAssign(objge_KnowledgesClsMasterENT, objge_KnowledgesClsMasterENS);
 return objge_KnowledgesClsMasterENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_KnowledgesClsMasterENT;
}
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjge_KnowledgesClsMasterEN">表实体类对象</param>
*/
public ShowDetailDataFromge_KnowledgesClsMasterClass4Func(pobjge_KnowledgesClsMasterENEx: clsge_KnowledgesClsMasterENEx )
{
 this.courseId_d = pobjge_KnowledgesClsMasterENEx.courseId;// 课程Id
 this.idCurrEduCls_d = pobjge_KnowledgesClsMasterENEx.idCurrEduCls;// 教学班流水号
 this.courseKnowledgeId_d = pobjge_KnowledgesClsMasterENEx.courseKnowledgeId;// 知识点Id
 this.masterLevelId_d = pobjge_KnowledgesClsMasterENEx.masterLevelId;// 掌握度Id
 this.masteryValue_d = pobjge_KnowledgesClsMasterENEx.masteryValue;// 掌握度
 this.goalValue_d = pobjge_KnowledgesClsMasterENEx.goalValue;// 目标值
 this.selfPerceivedValue_d = pobjge_KnowledgesClsMasterENEx.selfPerceivedValue;// 自我认为值
 this.memo_d = pobjge_KnowledgesClsMasterENEx.memo;// 备注
 this.knowledgeName_d = pobjge_KnowledgesClsMasterENEx.knowledgeName;// 知识点名称
 this.masterLevelName_d = pobjge_KnowledgesClsMasterENEx.masterLevelName;// 掌握等级
 this.courseName_d = pobjge_KnowledgesClsMasterENEx.courseName;// 课程名称
 this.dateTimeSim_d = pobjge_KnowledgesClsMasterENEx.dateTimeSim;// 简化日期时间
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelge_KnowledgesClsMaster(value: string) {
refge_KnowledgesClsMaster_Detail.value.strCancelButtonText = value;
}
 /**
 * 课程Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set courseId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseId_d", value);
}
 /**
 * 知识点Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set courseKnowledgeId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseKnowledgeId_d", value);
}
 /**
 * 课程Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set courseName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseName_d", value);
}
 /**
 * 修改日期 (Used In ShowDetailDataFromClass4Func())
 **/
public  set dateTimeSim_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblDateTimeSim_d", value);
}
 /**
 * 目标值 (Used In ShowDetailDataFromClass4Func())
 **/
public  set goalValue_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblGoalValue_d", value !== null ? value.toString() : '');
}
 /**
 * 教学班流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set idCurrEduCls_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdCurrEduCls_d", value);
}
 /**
 * 知识点Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set knowledgeName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblKnowledgeName_d", value);
}
 /**
 * 掌握度Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set masterLevelId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMasterLevelId_d", value);
}
 /**
 * 掌握度Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set masterLevelName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMasterLevelName_d", value);
}
 /**
 * 掌握度 (Used In ShowDetailDataFromClass4Func())
 **/
public  set masteryValue_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMasteryValue_d", value !== null ? value.toString() : '');
}
 /**
 * 备注 (Used In ShowDetailDataFromClass4Func())
 **/
public  set memo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMemo_d", value);
}
 /**
 * 自我认为值 (Used In ShowDetailDataFromClass4Func())
 **/
public  set selfPerceivedValue_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblSelfPerceivedValue_d", value !== null ? value.toString() : '');
}
}