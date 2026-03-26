
 /**
 * 类名:JxTeachingPlan_Detail(界面:JxTeachingPlanCRUD,01120253)
 * 表名:JxTeachingPlan(01120968)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:17:04
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { JxTeachingPlan_GetObjByIdTeachingPlanAsync } from "@/ts/L3ForWApi/TeachingPlan/clsJxTeachingPlanWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsJxTeachingPlanEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN";
import { divVarSet,refJxTeachingPlan_Detail } from "@/views/TeachingPlan/JxTeachingPlanVueShare";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* JxTeachingPlan_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  JxTeachingPlan_Detail 
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
public HideDialog_JxTeachingPlan() {
if (JxTeachingPlan_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refJxTeachingPlan_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_JxTeachingPlan(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_JxTeachingPlan.name;
if (JxTeachingPlan_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refJxTeachingPlan_Detail.value == null)
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
await refJxTeachingPlan_Detail.value.showDialog();
}
divVarSet.refDivDetail = refJxTeachingPlan_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (JxTeachingPlan_Detail.times4TestShowDialog < 2)
{
JxTeachingPlan_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_JxTeachingPlan(strOp);
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
JxTeachingPlan_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelJxTeachingPlan = "关闭";
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
const bolIsSuccess = await this.ShowDialog_JxTeachingPlan('Detail');
if (bolIsSuccess == false) return;
try
{
 if (strKeyId == "")
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord(strKeyId);
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
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
  <param name = "sender">参数列表</param>
*/
public async DetailRecord(strIdTeachingPlan: string):Promise<boolean> 
{
const strThisFuncName = this.DetailRecord.name;
this.btnCancelJxTeachingPlan = "关闭";
try
{
const objJxTeachingPlanEN = await JxTeachingPlan_GetObjByIdTeachingPlanAsync(strIdTeachingPlan);
       if (objJxTeachingPlanEN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
this.ShowDetailDataFromJxTeachingPlanClass(objJxTeachingPlanEN);
console.log("完成DetailRecord!");
}
catch(e)
{
const strMsg = Format("显示详细信息不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
            return false;
}
            return true;
}

 /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
public async btnDetailRecord_Click(strKeyId: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_JxTeachingPlan('Detail');
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
this.DetailRecord(strKeyId);
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
  <param name = "pobjJxTeachingPlanEN">表实体类对象</param>
*/
public ShowDetailDataFromJxTeachingPlanClass(pobjJxTeachingPlanEN: clsJxTeachingPlanEN )
{
 this.teachingPlanId_d = pobjJxTeachingPlanEN.teachingPlanId;// 教学计划编号
 this.teachingPlanDesc_d = pobjJxTeachingPlanEN.teachingPlanDesc;// 教学计划名称
 this.idGrade_d = pobjJxTeachingPlanEN.idGrade;// 年级流水号
 this.schoolTerm_d = pobjJxTeachingPlanEN.schoolTerm;// 学期
 this.courseId_d = pobjJxTeachingPlanEN.courseId;// 课程Id
 this.isClgCheck_d = pobjJxTeachingPlanEN.isClgCheck;// 是否学院审批
 this.clgNote_d = pobjJxTeachingPlanEN.clgNote;// 学院审批意见
 this.clgCheckerId_d = pobjJxTeachingPlanEN.clgCheckerId;// 学院审批人id
 this.clgCheckDate_d = pobjJxTeachingPlanEN.clgCheckDate;// 学院审批日期
 this.isSchCheck_d = pobjJxTeachingPlanEN.isSchCheck;// 是否学校审批
 this.schNote_d = pobjJxTeachingPlanEN.schNote;// 学校审批意见
 this.schCheckerId_d = pobjJxTeachingPlanEN.schCheckerId;// 学校审批人Id
 this.schCheckDate_d = pobjJxTeachingPlanEN.schCheckDate;// 学校审批日期
 this.idSubmitStatus_d = pobjJxTeachingPlanEN.idSubmitStatus;// 送审状态流水号
 this.memo_d = pobjJxTeachingPlanEN.memo;// 备注
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelJxTeachingPlan(value: string) {
refJxTeachingPlan_Detail.value.strCancelButtonText = value;
}
 /**
 * 学院审批日期 (Used In ShowDetailDataFromClass())
 **/
public  set clgCheckDate_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblClgCheckDate_d", value);
}
 /**
 * 学院审批人id (Used In ShowDetailDataFromClass())
 **/
public  set clgCheckerId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblClgCheckerId_d", value);
}
 /**
 * 学院审批意见 (Used In ShowDetailDataFromClass())
 **/
public  set clgNote_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblClgNote_d", value);
}
 /**
 * 课程Id (Used In ShowDetailDataFromClass())
 **/
public  set courseId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseId_d", value);
}
 /**
 * 年级流水号 (Used In ShowDetailDataFromClass())
 **/
public  set idGrade_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdGrade_d", value);
}
 /**
 * 送审状态流水号 (Used In ShowDetailDataFromClass())
 **/
public  set idSubmitStatus_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdSubmitStatus_d", value);
}
 /**
 * 是否学院审批 (Used In ShowDetailDataFromClass())
 **/
public  set isClgCheck_d(value: boolean) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIsClgCheck_d", value !== null ? value.toString() : '');
}
 /**
 * 是否学校审批 (Used In ShowDetailDataFromClass())
 **/
public  set isSchCheck_d(value: boolean) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIsSchCheck_d", value !== null ? value.toString() : '');
}
 /**
 * 备注 (Used In ShowDetailDataFromClass())
 **/
public  set memo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMemo_d", value);
}
 /**
 * 学校审批日期 (Used In ShowDetailDataFromClass())
 **/
public  set schCheckDate_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblSchCheckDate_d", value);
}
 /**
 * 学校审批人Id (Used In ShowDetailDataFromClass())
 **/
public  set schCheckerId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblSchCheckerId_d", value);
}
 /**
 * 学校审批意见 (Used In ShowDetailDataFromClass())
 **/
public  set schNote_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblSchNote_d", value);
}
 /**
 * 学期 (Used In ShowDetailDataFromClass())
 **/
public  set schoolTerm_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblSchoolTerm_d", value);
}
 /**
 * 教学计划名称 (Used In ShowDetailDataFromClass())
 **/
public  set teachingPlanDesc_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblTeachingPlanDesc_d", value);
}
 /**
 * 教学计划编号 (Used In ShowDetailDataFromClass())
 **/
public  set teachingPlanId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblTeachingPlanId_d", value);
}
}