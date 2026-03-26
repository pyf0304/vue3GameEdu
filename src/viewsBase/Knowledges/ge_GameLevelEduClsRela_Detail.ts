
 /**
 * 类名:ge_GameLevelEduClsRela_Detail(界面:ge_GameLevelEduClsRelaCRUD,01120237)
 * 表名:ge_GameLevelEduClsRela(01120938)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:21:55
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { ge_GameLevelEduClsRela_GetObjBymIdAsync } from "@/ts/L3ForWApi/Knowledges/clsge_GameLevelEduClsRelaWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { ge_GameLevelEduClsRelaEx_FuncMapByFldName } from "@/ts/L3ForWApiEx/Knowledges/clsge_GameLevelEduClsRelaExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsge_GameLevelEduClsRelaEN } from "@/ts/L0Entity/Knowledges/clsge_GameLevelEduClsRelaEN";
import { divVarSet,refge_GameLevelEduClsRela_Detail } from "@/views/Knowledges/ge_GameLevelEduClsRelaVueShare";
import { clsge_GameLevelEduClsRelaENEx } from "@/ts/L0Entity/Knowledges/clsge_GameLevelEduClsRelaENEx";
import { SetLabelHtmlByIdInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* ge_GameLevelEduClsRela_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  ge_GameLevelEduClsRela_Detail 
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
public HideDialog_ge_GameLevelEduClsRela() {
if (ge_GameLevelEduClsRela_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refge_GameLevelEduClsRela_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_ge_GameLevelEduClsRela(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_ge_GameLevelEduClsRela.name;
if (ge_GameLevelEduClsRela_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refge_GameLevelEduClsRela_Detail.value == null)
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
await refge_GameLevelEduClsRela_Detail.value.showDialog();
}
divVarSet.refDivDetail = refge_GameLevelEduClsRela_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (ge_GameLevelEduClsRela_Detail.times4TestShowDialog < 2)
{
ge_GameLevelEduClsRela_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_ge_GameLevelEduClsRela(strOp);
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
ge_GameLevelEduClsRela_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelge_GameLevelEduClsRela = "关闭";
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
const bolIsSuccess = await this.ShowDialog_ge_GameLevelEduClsRela('Detail');
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
this.btnCancelge_GameLevelEduClsRela = "关闭";
try
{
const objge_GameLevelEduClsRelaEN = await ge_GameLevelEduClsRela_GetObjBymIdAsync(lngmId);
const objge_GameLevelEduClsRelaENEx = new clsge_GameLevelEduClsRelaENEx();
ObjectAssign(objge_GameLevelEduClsRelaENEx, objge_GameLevelEduClsRelaEN); 
await ge_GameLevelEduClsRelaEx_FuncMapByFldName(clsge_GameLevelEduClsRelaENEx.con_QuestionTypeName, objge_GameLevelEduClsRelaENEx);
await ge_GameLevelEduClsRelaEx_FuncMapByFldName(clsge_GameLevelEduClsRelaENEx.con_LevelModeTypeName, objge_GameLevelEduClsRelaENEx);
await ge_GameLevelEduClsRelaEx_FuncMapByFldName(clsge_GameLevelEduClsRelaENEx.con_DifficultyLevelName, objge_GameLevelEduClsRelaENEx);
await ge_GameLevelEduClsRelaEx_FuncMapByFldName(clsge_GameLevelEduClsRelaENEx.con_EduClsName, objge_GameLevelEduClsRelaENEx);
await ge_GameLevelEduClsRelaEx_FuncMapByFldName(clsge_GameLevelEduClsRelaENEx.con_CourseName, objge_GameLevelEduClsRelaENEx);
await ge_GameLevelEduClsRelaEx_FuncMapByFldName(clsge_GameLevelEduClsRelaENEx.con_GameLevelName, objge_GameLevelEduClsRelaENEx);
this.ShowDetailDataFromge_GameLevelEduClsRelaClass4Func(objge_GameLevelEduClsRelaENEx);
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
const bolIsSuccess = await this.ShowDialog_ge_GameLevelEduClsRela('Detail');
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
 /// <param name = "objge_GameLevelEduClsRelaENS">源对象</param>
 /// <returns>目标对象=>clsge_GameLevelEduClsRelaEN:objge_GameLevelEduClsRelaENT</returns>
 public CopyToEx(objge_GameLevelEduClsRelaENS:clsge_GameLevelEduClsRelaEN ): clsge_GameLevelEduClsRelaENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objge_GameLevelEduClsRelaENT = new clsge_GameLevelEduClsRelaENEx();
try
{
ObjectAssign(objge_GameLevelEduClsRelaENT, objge_GameLevelEduClsRelaENS);
 return objge_GameLevelEduClsRelaENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_GameLevelEduClsRelaENT;
}
}

 /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjge_GameLevelEduClsRelaEN">表实体类对象</param>
*/
public ShowDetailDataFromge_GameLevelEduClsRelaClass4Func(pobjge_GameLevelEduClsRelaENEx: clsge_GameLevelEduClsRelaENEx )
{
 this.gameLevelId_d = pobjge_GameLevelEduClsRelaENEx.gameLevelId;// 游戏关卡Id
 this.idCurrEduCls_d = pobjge_GameLevelEduClsRelaENEx.idCurrEduCls;// 教学班流水号
 this.updDate_d = pobjge_GameLevelEduClsRelaENEx.updDate;// 修改日期
 this.updUser_d = pobjge_GameLevelEduClsRelaENEx.updUser;// 修改人
 this.memo_d = pobjge_GameLevelEduClsRelaENEx.memo;// 备注
 this.questionTypeName_d = pobjge_GameLevelEduClsRelaENEx.questionTypeName;// 题目类型名
 this.levelModeTypeName_d = pobjge_GameLevelEduClsRelaENEx.levelModeTypeName;// 模式名
 this.difficultyLevelName_d = pobjge_GameLevelEduClsRelaENEx.difficultyLevelName;// 难度等级名称
 this.eduClsName_d = pobjge_GameLevelEduClsRelaENEx.eduClsName;// 教学班名
 this.courseName_d = pobjge_GameLevelEduClsRelaENEx.courseName;// 课程名称
 this.gameLevelName_d = pobjge_GameLevelEduClsRelaENEx.gameLevelName;// 游戏关卡名称
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelge_GameLevelEduClsRela(value: string) {
refge_GameLevelEduClsRela_Detail.value.strCancelButtonText = value;
}
 /**
 * 教学班流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set courseName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblCourseName_d", value);
}
 /**
 * 游戏关卡Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set difficultyLevelName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblDifficultyLevelName_d", value);
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
 * 教学班流水号 (Used In ShowDetailDataFromClass4Func())
 **/
public  set idCurrEduCls_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblIdCurrEduCls_d", value);
}
 /**
 * 游戏关卡Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set levelModeTypeName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblLevelModeTypeName_d", value);
}
 /**
 * 备注 (Used In ShowDetailDataFromClass4Func())
 **/
public  set memo_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblMemo_d", value);
}
 /**
 * 游戏关卡Id (Used In ShowDetailDataFromClass4Func())
 **/
public  set questionTypeName_d(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, "lblQuestionTypeName_d", value);
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
}