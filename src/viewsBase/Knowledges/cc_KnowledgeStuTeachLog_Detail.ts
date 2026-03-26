
 /**
 * 类名:cc_KnowledgeStuTeachLog_Detail(界面:cc_KnowledgeStuTeachLogCRUD,01120255)
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:19:33
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { cc_KnowledgeStuTeachLog_GetObjByKeyLstAsync } from "@/ts/L3ForWApi/Knowledges/clscc_KnowledgeStuTeachLogWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clscc_KnowledgeStuTeachLogEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN";
import { divVarSet,refcc_KnowledgeStuTeachLog_Detail } from "@/views/Knowledges/cc_KnowledgeStuTeachLogVueShare";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* cc_KnowledgeStuTeachLog_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  cc_KnowledgeStuTeachLog_Detail 
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
public HideDialog_cc_KnowledgeStuTeachLog() {
if (cc_KnowledgeStuTeachLog_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refcc_KnowledgeStuTeachLog_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_cc_KnowledgeStuTeachLog(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_cc_KnowledgeStuTeachLog.name;
if (cc_KnowledgeStuTeachLog_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refcc_KnowledgeStuTeachLog_Detail.value == null)
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
await refcc_KnowledgeStuTeachLog_Detail.value.showDialog();
}
divVarSet.refDivDetail = refcc_KnowledgeStuTeachLog_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (cc_KnowledgeStuTeachLog_Detail.times4TestShowDialog < 2)
{
cc_KnowledgeStuTeachLog_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_cc_KnowledgeStuTeachLog(strOp);
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
cc_KnowledgeStuTeachLog_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelcc_KnowledgeStuTeachLog = "关闭";
        }
return true;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(lngQuestionId: number,strIdStudentInfo: string) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_cc_KnowledgeStuTeachLog('Detail');
if (bolIsSuccess == false) return;
try
{
 if (lngQuestionId == 0)
{
alert("请选择需要详细信息的记录!");
return "";
}
 if (IsNullOrEmpty(strIdStudentInfo) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord(lngQuestionId,strIdStudentInfo);
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
public async DetailRecord(lngQuestionId: number,strIdStudentInfo: string):Promise<boolean> 
{
const strThisFuncName = this.DetailRecord.name;
this.btnCancelcc_KnowledgeStuTeachLog = "关闭";
try
{
const objcc_KnowledgeStuTeachLogEN = await cc_KnowledgeStuTeachLog_GetObjByKeyLstAsync(lngQuestionId,strIdStudentInfo);
       if (objcc_KnowledgeStuTeachLogEN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
this.ShowDetailDataFromcc_KnowledgeStuTeachLogClass(objcc_KnowledgeStuTeachLogEN);
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
public async btnDetailRecord_Click(lngQuestionId: number,strIdStudentInfo: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_cc_KnowledgeStuTeachLog('Detail');
if (bolIsSuccess == false) return;
if (lngQuestionId== 0)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
if (IsNullOrEmpty(strIdStudentInfo) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
this.DetailRecord(lngQuestionId,strIdStudentInfo );
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
  <param name = "pobjcc_KnowledgeStuTeachLogEN">表实体类对象</param>
*/
public ShowDetailDataFromcc_KnowledgeStuTeachLogClass(pobjcc_KnowledgeStuTeachLogEN: clscc_KnowledgeStuTeachLogEN )
{
 this.questionId_d = pobjcc_KnowledgeStuTeachLogEN.questionId;// 题目Id
 this.idStudentInfo_d = pobjcc_KnowledgeStuTeachLogEN.idStudentInfo;// 学生流水号
 this.teachingLog_d = pobjcc_KnowledgeStuTeachLogEN.teachingLog;// 教学日志
 this.courseId_d = pobjcc_KnowledgeStuTeachLogEN.courseId;// 课程Id
 this.memo_d = pobjcc_KnowledgeStuTeachLogEN.memo;// 备注
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelcc_KnowledgeStuTeachLog(value: string) {
refcc_KnowledgeStuTeachLog_Detail.value.strCancelButtonText = value;
}
 /**
 * 课程Id (Used In ShowDetailDataFromClass())
 **/
public  set courseId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseId_d", value);
}
 /**
 * 学生流水号 (Used In ShowDetailDataFromClass())
 **/
public  set idStudentInfo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdStudentInfo_d", value);
}
 /**
 * 备注 (Used In ShowDetailDataFromClass())
 **/
public  set memo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMemo_d", value);
}
 /**
 * 题目Id (Used In ShowDetailDataFromClass())
 **/
public  set questionId_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblQuestionId_d", value !== null ? value.toString() : '');
}
 /**
 * 教学日志 (Used In ShowDetailDataFromClass())
 **/
public  set teachingLog_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblTeachingLog_d", value);
}
}