
 /**
 * 类名:ge_UserLevelScore_Detail(界面:ge_UserLevelScoreCRUD,01120239)
 * 表名:ge_UserLevelScore(01120942)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:14:03
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { ge_UserLevelScore_GetObjByKeyLstAsync } from "@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { ge_UserLevelScoreEx_FuncMapByFldName } from "@/ts/L3ForWApiEx/GameLearn/clsge_UserLevelScoreExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsge_UserLevelScoreEN } from "@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN";
import { divVarSet,refge_UserLevelScore_Detail } from "@/views/GameLearn/ge_UserLevelScoreVueShare";
import { clsge_UserLevelScoreENEx } from "@/ts/L0Entity/GameLearn/clsge_UserLevelScoreENEx";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* ge_UserLevelScore_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  ge_UserLevelScore_Detail 
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
public HideDialog_ge_UserLevelScore() {
if (ge_UserLevelScore_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refge_UserLevelScore_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_ge_UserLevelScore(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_ge_UserLevelScore.name;
if (ge_UserLevelScore_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refge_UserLevelScore_Detail.value == null)
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
await refge_UserLevelScore_Detail.value.showDialog();
}
divVarSet.refDivDetail = refge_UserLevelScore_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (ge_UserLevelScore_Detail.times4TestShowDialog < 2)
{
ge_UserLevelScore_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_ge_UserLevelScore(strOp);
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
ge_UserLevelScore_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelge_UserLevelScore = "关闭";
        }
return true;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(strIdCurrEduCls: string,strGameLevelId: string,strUserId: string) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_ge_UserLevelScore('Detail');
if (bolIsSuccess == false) return;
try
{
 if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
 if (IsNullOrEmpty(strGameLevelId) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
 if (IsNullOrEmpty(strUserId) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord4Func(strIdCurrEduCls,strGameLevelId,strUserId);
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
public async DetailRecord4Func(strIdCurrEduCls: string,strGameLevelId: string,strUserId: string) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelge_UserLevelScore = "关闭";
try
{
const objge_UserLevelScoreEN = await ge_UserLevelScore_GetObjByKeyLstAsync(strIdCurrEduCls,strGameLevelId,strUserId);
const objge_UserLevelScoreENEx = new clsge_UserLevelScoreENEx();
ObjectAssign(objge_UserLevelScoreENEx, objge_UserLevelScoreEN); 
await ge_UserLevelScoreEx_FuncMapByFldName(clsge_UserLevelScoreENEx.con_UserName, objge_UserLevelScoreENEx);
await ge_UserLevelScoreEx_FuncMapByFldName(clsge_UserLevelScoreENEx.con_CourseName, objge_UserLevelScoreENEx);
await ge_UserLevelScoreEx_FuncMapByFldName(clsge_UserLevelScoreENEx.con_EduClsName, objge_UserLevelScoreENEx);
await ge_UserLevelScoreEx_FuncMapByFldName(clsge_UserLevelScoreENEx.con_GameLevelName, objge_UserLevelScoreENEx);
this.ShowDetailDataFromge_UserLevelScoreClass4Func(objge_UserLevelScoreENEx);
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
public async btnDetailRecord_Click(strIdCurrEduCls: string,strGameLevelId: string,strUserId: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_ge_UserLevelScore('Detail');
if (bolIsSuccess == false) return;
if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
if (IsNullOrEmpty(strGameLevelId) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
if (IsNullOrEmpty(strUserId) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
this.DetailRecord4Func(strIdCurrEduCls,strGameLevelId,strUserId );
}

 /// <summary>
 /// 把同一个类的对象,复制到另一个对象
 /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 /// </summary>
 /// <param name = "objge_UserLevelScoreENS">源对象</param>
 /// <returns>目标对象=>clsge_UserLevelScoreEN:objge_UserLevelScoreENT</returns>
 public CopyToEx(objge_UserLevelScoreENS:clsge_UserLevelScoreEN ): clsge_UserLevelScoreENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objge_UserLevelScoreENT = new clsge_UserLevelScoreENEx();
try
{
ObjectAssign(objge_UserLevelScoreENT, objge_UserLevelScoreENS);
 return objge_UserLevelScoreENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_UserLevelScoreENT;
}
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjge_UserLevelScoreEN">表实体类对象</param>
*/
public ShowDetailDataFromge_UserLevelScoreClass4Func(pobjge_UserLevelScoreENEx: clsge_UserLevelScoreENEx )
{
 this.idCurrEduCls_d = pobjge_UserLevelScoreENEx.idCurrEduCls;// 教学班流水号
 this.gameLevelId_d = pobjge_UserLevelScoreENEx.gameLevelId;// 游戏关卡Id
 this.userId_d = pobjge_UserLevelScoreENEx.userId;// 用户ID
 this.courseId_d = pobjge_UserLevelScoreENEx.courseId;// 课程Id
 this.passed_d = pobjge_UserLevelScoreENEx.passed;// 是否合格
 this.credits_d = pobjge_UserLevelScoreENEx.credits;// 积分
 this.getDate_d = pobjge_UserLevelScoreENEx.getDate;// 获取日期
 this.getInstructions_d = pobjge_UserLevelScoreENEx.getInstructions;// 获取说明
 this.badgeNum_d = pobjge_UserLevelScoreENEx.badgeNum;// 徽章数量
 this.updDate_d = pobjge_UserLevelScoreENEx.updDate;// 修改日期
 this.updUser_d = pobjge_UserLevelScoreENEx.updUser;// 修改人
 this.memo_d = pobjge_UserLevelScoreENEx.memo;// 备注
 this.userName_d = pobjge_UserLevelScoreENEx.userName;// 用户名
 this.courseName_d = pobjge_UserLevelScoreENEx.courseName;// 课程名称
 this.eduClsName_d = pobjge_UserLevelScoreENEx.eduClsName;// 教学班名
 this.gameLevelName_d = pobjge_UserLevelScoreENEx.gameLevelName;// 游戏关卡名称
}
 /**
 * 徽章数量 (Used In ShowDetailDataFromClass4Func())
 **/
public  set badgeNum_d(value: number) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblBadgeNum_d", value !== null ? value.toString() : '');
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelge_UserLevelScore(value: string) {
refge_UserLevelScore_Detail.value.strCancelButtonText = value;
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
 * 教学班流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set idCurrEduCls_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdCurrEduCls_d", value);
}
 /**
 * 备注 (Used In ShowDetailDataFromClass4Func())
 **/
public  set memo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMemo_d", value);
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
 /**
 * 用户ID (Used In ShowDetailDataFromClass4Func())
 **/
public  set userName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblUserName_d", value);
}
}