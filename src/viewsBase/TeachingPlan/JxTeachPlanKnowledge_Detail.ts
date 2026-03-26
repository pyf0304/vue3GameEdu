
 /**
 * 类名:JxTeachPlanKnowledge_Detail(界面:JxTeachPlanKnowledgeCRUD,01120254)
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:23:47
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { JxTeachPlanKnowledge_GetObjByIdTeachPlanKnowledgeAsync } from "@/ts/L3ForWApi/TeachingPlan/clsJxTeachPlanKnowledgeWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { JxTeachPlanKnowledgeEx_FuncMapByFldName } from "@/ts/L3ForWApiEx/TeachingPlan/clsJxTeachPlanKnowledgeExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsJxTeachPlanKnowledgeEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeEN";
import { divVarSet,refJxTeachPlanKnowledge_Detail } from "@/views/TeachingPlan/JxTeachPlanKnowledgeVueShare";
import { clsJxTeachPlanKnowledgeENEx } from "@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeENEx";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* JxTeachPlanKnowledge_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  JxTeachPlanKnowledge_Detail 
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
public HideDialog_JxTeachPlanKnowledge() {
if (JxTeachPlanKnowledge_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refJxTeachPlanKnowledge_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_JxTeachPlanKnowledge(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_JxTeachPlanKnowledge.name;
if (JxTeachPlanKnowledge_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refJxTeachPlanKnowledge_Detail.value == null)
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
await refJxTeachPlanKnowledge_Detail.value.showDialog();
}
divVarSet.refDivDetail = refJxTeachPlanKnowledge_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (JxTeachPlanKnowledge_Detail.times4TestShowDialog < 2)
{
JxTeachPlanKnowledge_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_JxTeachPlanKnowledge(strOp);
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
JxTeachPlanKnowledge_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelJxTeachPlanKnowledge = "关闭";
        }
return true;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(strKeyId:string) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_JxTeachPlanKnowledge('Detail');
if (bolIsSuccess == false) return;
try
{
 if (strKeyId == "")
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord4Func(strKeyId);
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
public async DetailRecord4Func(strIdTeachPlanKnowledge: string) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelJxTeachPlanKnowledge = "关闭";
try
{
const objJxTeachPlanKnowledgeEN = await JxTeachPlanKnowledge_GetObjByIdTeachPlanKnowledgeAsync(strIdTeachPlanKnowledge);
const objJxTeachPlanKnowledgeENEx = new clsJxTeachPlanKnowledgeENEx();
ObjectAssign(objJxTeachPlanKnowledgeENEx, objJxTeachPlanKnowledgeEN); 
await JxTeachPlanKnowledgeEx_FuncMapByFldName(clsJxTeachPlanKnowledgeENEx.con_AssessmentMethodName, objJxTeachPlanKnowledgeENEx);
await JxTeachPlanKnowledgeEx_FuncMapByFldName(clsJxTeachPlanKnowledgeENEx.con_KnowledgeName, objJxTeachPlanKnowledgeENEx);
await JxTeachPlanKnowledgeEx_FuncMapByFldName(clsJxTeachPlanKnowledgeENEx.con_TeachingMethodName, objJxTeachPlanKnowledgeENEx);
await JxTeachPlanKnowledgeEx_FuncMapByFldName(clsJxTeachPlanKnowledgeENEx.con_TeachingPlanDesc, objJxTeachPlanKnowledgeENEx);
this.ShowDetailDataFromJxTeachPlanKnowledgeClass4Func(objJxTeachPlanKnowledgeENEx);
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
public async btnDetailRecord_Click(strKeyId: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_JxTeachPlanKnowledge('Detail');
if (bolIsSuccess == false) return;
if (IsNullOrEmpty(strKeyId) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
this.DetailRecord4Func(strKeyId);
}

 /// <summary>
 /// 把同一个类的对象,复制到另一个对象
 /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 /// </summary>
 /// <param name = "objJxTeachPlanKnowledgeENS">源对象</param>
 /// <returns>目标对象=>clsJxTeachPlanKnowledgeEN:objJxTeachPlanKnowledgeENT</returns>
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
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objJxTeachPlanKnowledgeENT;
}
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjJxTeachPlanKnowledgeEN">表实体类对象</param>
*/
public ShowDetailDataFromJxTeachPlanKnowledgeClass4Func(pobjJxTeachPlanKnowledgeENEx: clsJxTeachPlanKnowledgeENEx )
{
 this.idTeachPlanKnowledge_d = pobjJxTeachPlanKnowledgeENEx.idTeachPlanKnowledge;// 教学计划知识点流水号
 this.idTeachingPlan_d = pobjJxTeachPlanKnowledgeENEx.idTeachingPlan;// 教案流水号
 this.courseKnowledgeId_d = pobjJxTeachPlanKnowledgeENEx.courseKnowledgeId;// 知识点Id
 this.teachingMethodId_d = pobjJxTeachPlanKnowledgeENEx.teachingMethodId;// 教学方式Id
 this.assessmentMethodId_d = pobjJxTeachPlanKnowledgeENEx.assessmentMethodId;// 考核方式Id
 this.updDate_d = pobjJxTeachPlanKnowledgeENEx.updDate;// 修改日期
 this.memo_d = pobjJxTeachPlanKnowledgeENEx.memo;// 备注
 this.assessmentMethodName_d = pobjJxTeachPlanKnowledgeENEx.assessmentMethodName;// 考核方式名
 this.knowledgeName_d = pobjJxTeachPlanKnowledgeENEx.knowledgeName;// 知识点名称
 this.teachingMethodName_d = pobjJxTeachPlanKnowledgeENEx.teachingMethodName;// 教学方式名
 this.teachingPlanDesc_d = pobjJxTeachPlanKnowledgeENEx.teachingPlanDesc;// 教学计划名称
}
 /**
 * 考核方式Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set assessmentMethodId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblAssessmentMethodId_d", value);
}
 /**
 * 考核方式Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set assessmentMethodName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblAssessmentMethodName_d", value);
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelJxTeachPlanKnowledge(value: string) {
refJxTeachPlanKnowledge_Detail.value.strCancelButtonText = value;
}
 /**
 * 知识点Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set courseKnowledgeId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseKnowledgeId_d", value);
}
 /**
 * 教案流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set idTeachingPlan_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdTeachingPlan_d", value);
}
 /**
 * 教学计划知识点流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set idTeachPlanKnowledge_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdTeachPlanKnowledge_d", value);
}
 /**
 * 知识点Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set knowledgeName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblKnowledgeName_d", value);
}
 /**
 * 备注 (Used In ShowDetailDataFromClass4Func())
 **/
public  set memo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMemo_d", value);
}
 /**
 * 教学方式Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set teachingMethodId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblTeachingMethodId_d", value);
}
 /**
 * 教学方式Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set teachingMethodName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblTeachingMethodName_d", value);
}
 /**
 * 教案流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set teachingPlanDesc_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblTeachingPlanDesc_d", value);
}
 /**
 * 修改日期 (Used In ShowDetailDataFromClass4Func())
 **/
public  set updDate_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUpdDate_d", value);
}
}