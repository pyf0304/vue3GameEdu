
 /**
 * 类名:ge_UserCreditsLog_Detail(界面:ge_UserCreditsLogCRUD,01120209)
 * 表名:ge_UserCreditsLog(01120883)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:18:11
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { ge_UserCreditsLog_GetObjBymIdAsync } from "@/ts/L3ForWApi/GameLearn/clsge_UserCreditsLogWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { ge_UserCreditsLogEx_FuncMapByFldName } from "@/ts/L3ForWApiEx/GameLearn/clsge_UserCreditsLogExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsge_UserCreditsLogEN } from "@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN";
import { divVarSet,refge_UserCreditsLog_Detail } from "@/views/GameLearn/ge_UserCreditsLogVueShare";
import { clsge_UserCreditsLogENEx } from "@/ts/L0Entity/GameLearn/clsge_UserCreditsLogENEx";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* ge_UserCreditsLog_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  ge_UserCreditsLog_Detail 
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
public HideDialog_ge_UserCreditsLog() {
if (ge_UserCreditsLog_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refge_UserCreditsLog_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_ge_UserCreditsLog(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_ge_UserCreditsLog.name;
if (ge_UserCreditsLog_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refge_UserCreditsLog_Detail.value == null)
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
await refge_UserCreditsLog_Detail.value.showDialog();
}
divVarSet.refDivDetail = refge_UserCreditsLog_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (ge_UserCreditsLog_Detail.times4TestShowDialog < 2)
{
ge_UserCreditsLog_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_ge_UserCreditsLog(strOp);
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
ge_UserCreditsLog_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelge_UserCreditsLog = "关闭";
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
const bolIsSuccess = await this.ShowDialog_ge_UserCreditsLog('Detail');
if (bolIsSuccess == false) return;
try
{
 if (strKeyId == "")
{
alert("请选择需要详细信息的记录!");
return "";
}
const lngKeyId =  Number(strKeyId);
this.DetailRecord4Func(lngKeyId);
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
public async DetailRecord4Func(lngmId: number) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelge_UserCreditsLog = "关闭";
try
{
const objge_UserCreditsLogEN = await ge_UserCreditsLog_GetObjBymIdAsync(lngmId);
const objge_UserCreditsLogENEx = new clsge_UserCreditsLogENEx();
ObjectAssign(objge_UserCreditsLogENEx, objge_UserCreditsLogEN); 
await ge_UserCreditsLogEx_FuncMapByFldName(clsge_UserCreditsLogENEx.con_EduClsName, objge_UserCreditsLogENEx);
await ge_UserCreditsLogEx_FuncMapByFldName(clsge_UserCreditsLogENEx.con_GameLevelName, objge_UserCreditsLogENEx);
await ge_UserCreditsLogEx_FuncMapByFldName(clsge_UserCreditsLogENEx.con_CourseName, objge_UserCreditsLogENEx);
this.ShowDetailDataFromge_UserCreditsLogClass4Func(objge_UserCreditsLogENEx);
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
const bolIsSuccess = await this.ShowDialog_ge_UserCreditsLog('Detail');
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
const lngKeyId =  Number(strKeyId);
this.DetailRecord4Func(lngKeyId);
}

 /// <summary>
 /// 把同一个类的对象,复制到另一个对象
 /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 /// </summary>
 /// <param name = "objge_UserCreditsLogENS">源对象</param>
 /// <returns>目标对象=>clsge_UserCreditsLogEN:objge_UserCreditsLogENT</returns>
 public CopyToEx(objge_UserCreditsLogENS:clsge_UserCreditsLogEN ): clsge_UserCreditsLogENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objge_UserCreditsLogENT = new clsge_UserCreditsLogENEx();
try
{
ObjectAssign(objge_UserCreditsLogENT, objge_UserCreditsLogENS);
 return objge_UserCreditsLogENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_UserCreditsLogENT;
}
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjge_UserCreditsLogEN">表实体类对象</param>
*/
public ShowDetailDataFromge_UserCreditsLogClass4Func(pobjge_UserCreditsLogENEx: clsge_UserCreditsLogENEx )
{
 this.userId_d = pobjge_UserCreditsLogENEx.userId;// 用户ID
 this.credits_d = pobjge_UserCreditsLogENEx.credits;// 积分
 this.getInstructions_d = pobjge_UserCreditsLogENEx.getInstructions;// 获取说明
 this.getDate_d = pobjge_UserCreditsLogENEx.getDate;// 获取日期
 this.updUser_d = pobjge_UserCreditsLogENEx.updUser;// 修改人
 this.updDate_d = pobjge_UserCreditsLogENEx.updDate;// 修改日期
 this.eduClsName_d = pobjge_UserCreditsLogENEx.eduClsName;// 教学班名
 this.gameLevelName_d = pobjge_UserCreditsLogENEx.gameLevelName;// 游戏关卡名称
 this.gameLevelId_d = pobjge_UserCreditsLogENEx.gameLevelId;// 游戏关卡Id
 this.passed_d = pobjge_UserCreditsLogENEx.passed;// 是否合格
 this.courseName_d = pobjge_UserCreditsLogENEx.courseName;// 课程名称
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelge_UserCreditsLog(value: string) {
refge_UserCreditsLog_Detail.value.strCancelButtonText = value;
}
 /**
 * 课程Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set courseName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseName_d", value);
}
 /**
 * 积分 (Used In ShowDetailDataFromClass4Func())
 **/
public  set credits_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCredits_d", value !== null ? value.toString() : '');
}
 /**
 * 教学班流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set eduClsName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblEduClsName_d", value);
}
 /**
 * 游戏关卡Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set gameLevelId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblGameLevelId_d", value);
}
 /**
 * 游戏关卡Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set gameLevelName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblGameLevelName_d", value);
}
 /**
 * 获取日期 (Used In ShowDetailDataFromClass4Func())
 **/
public  set getDate_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblGetDate_d", value);
}
 /**
 * 获取说明 (Used In ShowDetailDataFromClass4Func())
 **/
public  set getInstructions_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblGetInstructions_d", value);
}
 /**
 * 是否合格 (Used In ShowDetailDataFromClass4Func())
 **/
public  set passed_d(value: boolean) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblPassed_d", value !== null ? value.toString() : '');
}
 /**
 * 修改日期 (Used In ShowDetailDataFromClass4Func())
 **/
public  set updDate_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUpdDate_d", value);
}
 /**
 * 修改人 (Used In ShowDetailDataFromClass4Func())
 **/
public  set updUser_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUpdUser_d", value);
}
 /**
 * 用户ID (Used In ShowDetailDataFromClass4Func())
 **/
public  set userId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUserId_d", value);
}
}