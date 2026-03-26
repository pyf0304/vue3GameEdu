
 /**
 * 类名:GameBottle_Detail(界面:GameBottleCRUD,01120256)
 * 表名:GameBottle(01120974)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:19:45
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { GameBottle_GetObjByBottleIdAsync } from "@/ts/L3ForWApi/GameLearn/clsGameBottleWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { GameBottleEx_FuncMapByFldName } from "@/ts/L3ForWApiEx/GameLearn/clsGameBottleExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsGameBottleEN } from "@/ts/L0Entity/GameLearn/clsGameBottleEN";
import { divVarSet,refGameBottle_Detail } from "@/views/GameLearn/GameBottleVueShare";
import { clsGameBottleENEx } from "@/ts/L0Entity/GameLearn/clsGameBottleENEx";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* GameBottle_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  GameBottle_Detail 
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
public HideDialog_GameBottle() {
if (GameBottle_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refGameBottle_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_GameBottle(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_GameBottle.name;
if (GameBottle_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refGameBottle_Detail.value == null)
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
await refGameBottle_Detail.value.showDialog();
}
divVarSet.refDivDetail = refGameBottle_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (GameBottle_Detail.times4TestShowDialog < 2)
{
GameBottle_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_GameBottle(strOp);
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
GameBottle_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelGameBottle = "关闭";
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
const bolIsSuccess = await this.ShowDialog_GameBottle('Detail');
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
public async DetailRecord4Func(lngBottleId: number) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelGameBottle = "关闭";
try
{
const objGameBottleEN = await GameBottle_GetObjByBottleIdAsync(lngBottleId);
const objGameBottleENEx = new clsGameBottleENEx();
ObjectAssign(objGameBottleENEx, objGameBottleEN); 
await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_QuestionTypeName, objGameBottleENEx);
await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_QuestionName, objGameBottleENEx);
await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_QuestionTypeId, objGameBottleENEx);
await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_UserName_Throw, objGameBottleENEx);
await GameBottleEx_FuncMapByFldName(clsGameBottleENEx.con_UserName_PickUp, objGameBottleENEx);
this.ShowDetailDataFromGameBottleClass4Func(objGameBottleENEx);
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
const bolIsSuccess = await this.ShowDialog_GameBottle('Detail');
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
 /// <param name = "objGameBottleENS">源对象</param>
 /// <returns>目标对象=>clsGameBottleEN:objGameBottleENT</returns>
 public CopyToEx(objGameBottleENS:clsGameBottleEN ): clsGameBottleENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objGameBottleENT = new clsGameBottleENEx();
try
{
ObjectAssign(objGameBottleENT, objGameBottleENS);
 return objGameBottleENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objGameBottleENT;
}
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjGameBottleEN">表实体类对象</param>
*/
public ShowDetailDataFromGameBottleClass4Func(pobjGameBottleENEx: clsGameBottleENEx )
{
 this.questionId_d = pobjGameBottleENEx.questionId;// 题目Id
 this.userId_Throw_d = pobjGameBottleENEx.userId_Throw;// 用户ID
 this.throwTime_d = pobjGameBottleENEx.throwTime;// 扔的时间
 this.userId_PickUp_d = pobjGameBottleENEx.userId_PickUp;// 用户ID
 this.pickUpTime_d = pobjGameBottleENEx.pickUpTime;// 捞的时间
 this.finishedTime_d = pobjGameBottleENEx.finishedTime;// 完成时间
 this.bottleStateId_d = pobjGameBottleENEx.bottleStateId;// 操作方式Id
 this.updUser_d = pobjGameBottleENEx.updUser;// 修改人
 this.updDate_d = pobjGameBottleENEx.updDate;// 修改日期
 this.memo_d = pobjGameBottleENEx.memo;// 备注
 this.questionTypeName_d = pobjGameBottleENEx.questionTypeName;// 题目类型名
 this.questionName_d = pobjGameBottleENEx.questionName;// 题目名称
 this.questionTypeId_d = pobjGameBottleENEx.questionTypeId;// 题目类型Id
 this.userName_Throw_d = pobjGameBottleENEx.userName_Throw;// 用户名_扔
 this.userName_PickUp_d = pobjGameBottleENEx.userName_PickUp;// 用户名_捞
}
 /**
 * 操作方式Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set bottleStateId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblBottleStateId_d", value);
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelGameBottle(value: string) {
refGameBottle_Detail.value.strCancelButtonText = value;
}
 /**
 * 完成时间 (Used In ShowDetailDataFromClass4Func())
 **/
public  set finishedTime_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblFinishedTime_d", value);
}
 /**
 * 备注 (Used In ShowDetailDataFromClass4Func())
 **/
public  set memo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMemo_d", value);
}
 /**
 * 捞的时间 (Used In ShowDetailDataFromClass4Func())
 **/
public  set pickUpTime_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblPickUpTime_d", value);
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
public  set questionTypeId_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblQuestionTypeId_d", value);
}
 /**
 * 题目Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set questionTypeName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblQuestionTypeName_d", value);
}
 /**
 * 扔的时间 (Used In ShowDetailDataFromClass4Func())
 **/
public  set throwTime_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblThrowTime_d", value);
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
public  set userId_PickUp_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUserId_PickUp_d", value);
}
 /**
 * 用户ID (Used In ShowDetailDataFromClass4Func())
 **/
public  set userId_Throw_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUserId_Throw_d", value);
}
 /**
 * 用户ID (Used In ShowDetailDataFromClass4Func())
 **/
public  set userName_PickUp_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUserName_PickUp_d", value);
}
 /**
 * 用户ID (Used In ShowDetailDataFromClass4Func())
 **/
public  set userName_Throw_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUserName_Throw_d", value);
}
}