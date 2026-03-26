
 /**
 * 类名:ge_GameLevel_Edit(界面:ge_GameLevelCRUD,01120225)
 * 表名:ge_GameLevel(01120904)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:30:48
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS,0257)
 * 编程语言:TypeScript
 **/
import $ from "jquery";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { ge_GameLevel_GetMaxStrIdAsync,ge_GameLevel_CheckPropertyNew,ge_GameLevel_AddNewRecordWithMaxIdAsync,ge_GameLevel_ReFreshCache,ge_GameLevel_GetUniCondStr,ge_GameLevel_IsExistRecordAsync,ge_GameLevel_GetUniCondStr4Update,ge_GameLevel_IsExistAsync,ge_GameLevel_GetObjByGameLevelIdAsync,ge_GameLevel_CheckProperty4Update,ge_GameLevel_UpdateRecordAsync,ge_GameLevel_EditRecordExAsync } from "@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi";
import { CourseId_Session,ge_GameLevel_DeleteKeyIdCache,divVarSet,refge_GameLevel_Edit } from "@/views/Knowledges/ge_GameLevelVueShare";
import { clsge_GameLevelEN } from "@/ts/L0Entity/Knowledges/clsge_GameLevelEN";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /** ge_GameLevel_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class  ge_GameLevel_Edit 
{
protected _className = "Unknown"; // 基类中的实际字段
// 定义虚拟属性
get className(): string {
return this._className;
}
public static times4TestShowDialog = 0;
public opType = "";
public keyId = "";
public isShowMsg = true; //编辑记录时是否显示提示信息
public tag = ""; //编辑对象的标志，用于存放或者标志一些信息
public static strPageDispModeId = "01";//PopupBox(弹出框)
public static objPageEdit: ge_GameLevel_Edit;
public static objPageEdit2: ge_GameLevel_Edit;
public static objPageEdit3: ge_GameLevel_Edit;
public iShowList: IShowList | null;
public bolIsLoadEditRegion = false;  //记录是否导入编辑区的变量
public divName4Edit = "divEditLayout";  //编辑区的Id
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivEdit(): HTMLDivElement {
return divVarSet.refDivEdit;
}
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivLayout(): HTMLDivElement {
return divVarSet.refDivEdit;
}
constructor(strClassName: string, objShowList: IShowList | null) {
this._className = strClassName;
this.iShowList = objShowList;
if (ge_GameLevel_Edit.SetPageEdit(this, 1) == true) return;
if (ge_GameLevel_Edit.SetPageEdit(this, 2) == true) return;
if (ge_GameLevel_Edit.SetPageEdit(this, 3) == true) return;
}
public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
const strNewClassName = objDataLst.className;
switch (intIndex)
{
case 1:
if (ge_GameLevel_Edit.objPageEdit == null)
{
ge_GameLevel_Edit.objPageEdit = objDataLst;
return true;
}
else
{
const strClassNameOld = ge_GameLevel_Edit.objPageEdit.className;
if (strClassNameOld == strNewClassName)
{
ge_GameLevel_Edit.objPageEdit = objDataLst;
return true;
}
else return false;
}
break;
case 2:
if (ge_GameLevel_Edit.objPageEdit2 == null)
{
ge_GameLevel_Edit.objPageEdit2 = objDataLst;
return true;
}
else
{
const strClassNameOld = ge_GameLevel_Edit.objPageEdit2.className;
if (strClassNameOld == strNewClassName)
{
ge_GameLevel_Edit.objPageEdit2 = objDataLst;
return true;
}
else return false;
}
break;
case 3:
if (ge_GameLevel_Edit.objPageEdit3 == null)
{
ge_GameLevel_Edit.objPageEdit3 = objDataLst;
return true;
}
else
{
const strClassNameOld = ge_GameLevel_Edit.objPageEdit3.className;
if (strClassNameOld == strNewClassName)
{
ge_GameLevel_Edit.objPageEdit3 = objDataLst;
return true;
}
else return false;
}
break;
default:
return false;
// break;
}
}
public static GetPageEditObj(strClassName: string): any {
if (ge_GameLevel_Edit.objPageEdit != null)
{
const strClassNameOld = ge_GameLevel_Edit.objPageEdit.className;
if (strClassNameOld == strClassName) return ge_GameLevel_Edit.objPageEdit;
}
if (ge_GameLevel_Edit.objPageEdit2 != null)
{
const strClassNameOld = ge_GameLevel_Edit.objPageEdit2.className;
if (strClassNameOld == strClassName) return ge_GameLevel_Edit.objPageEdit2;
}
if (ge_GameLevel_Edit.objPageEdit3 != null)
{
const strClassNameOld = ge_GameLevel_Edit.objPageEdit3.className;
if (strClassNameOld == strClassName) return ge_GameLevel_Edit.objPageEdit3;
}
return null;
}


 /**
 * 隐藏对话框
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
 **/
public HideDialog_ge_GameLevel() {
if (ge_GameLevel_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refge_GameLevel_Edit.value.hideDialog();
}
}

 /** 函数功能:页面导入,当页面开始运行时所发生的事件
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
 **/
public async PageLoad()
{
const strThisFuncName = this.PageLoad.name;
// 在此处放置用户代码以初始化页面
try
{
}
catch (e)
{
const strMsg = Format("页面启动不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}


 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_ge_GameLevel(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_ge_GameLevel.name;
if (ge_GameLevel_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refge_GameLevel_Edit.value == null)
{
const strMsg = Format(
'当前编辑区的EditObj为空，请检查！(in {0}.{1})',
this.className,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return false;
}
await refge_GameLevel_Edit.value.showDialog(this);
}
       if (strOp === "Add" || strOp === "AddWithMaxId") {
this.btnSubmitge_GameLevel = "确认添加";
this.btnCancelge_GameLevel = "取消添加";
        }
else if (strOp === "Update")
{
this.btnSubmitge_GameLevel = "确认修改";
this.btnCancelge_GameLevel = "取消修改";
}
return true;
}

 /** 添加新记录
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecord_Click)
 **/
public async btnAddNewRecord_Click() {
const strThisFuncName = this.btnAddNewRecord_Click.name;
try
{
this.opType = "Add";
const bolIsSuccess = await this.ShowDialog_ge_GameLevel(this.opType);
if (bolIsSuccess == false) return;
if (['02', '03', '06'].indexOf(clsge_GameLevelEN.PrimaryTypeId) > -1)
{
await this.AddNewRecordWithMaxId();
}
else
{
await this.AddNewRecord();
}
}
catch(e)
{
const strMsg = Format("添加新记录初始化不成功,{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /** 在数据表里修改记录
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecordInTab_Click)
 **/
public async btnUpdateRecordInTab_Click(strGameLevelId: string) {
const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
if (IsNullOrEmpty(strGameLevelId) == true)
{
alert("请选择需要修改的记录!");
return;
}
try {
this.opType = "Update";
const bolIsSuccess = await this.ShowDialog_ge_GameLevel(this.opType);
if (bolIsSuccess == false) return;
this.UpdateRecord(strGameLevelId);
}
catch (e)
{
const strMsg = Format("(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
 **/
public async btnUpdateRecord_Click(strGameLevelId: string) {
const strThisFuncName = this.btnUpdateRecord_Click.name;
if (IsNullOrEmpty(strGameLevelId) == true)
{
const strMsg = "修改记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
return;
}
try {
this.opType = "Update";
const bolIsSuccess = await this.ShowDialog_ge_GameLevel(this.opType);
if (bolIsSuccess == false) return;
this.bolIsLoadEditRegion = true;  //
const update = await this.UpdateRecord(strGameLevelId);
if (update == false)
{
const strMsg = Format("在修改记录时,显示记录数据不成功!");
console.error(strMsg);
alert(strMsg);
return;
}
}
catch (e)
{
const strMsg = Format("(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnOKUpd_Click)
 **/
public async btnSubmit_Click()
{
const strThisFuncName = this.btnSubmit_Click.name;
const strCommandText: string = this.btnSubmitge_GameLevel;
try {
let returnBool = false;
let returnKeyId = "";
let strInfo = "";
let strMsg = "";
switch(strCommandText)
{
case "添加":
this.btnSubmitge_GameLevel = "确认添加";
this.btnCancelge_GameLevel = "取消添加";
 await this.AddNewRecord();
break;				
case "确认添加":
//这是一个单表的插入的代码,由于逻辑层太简单,
//就把逻辑层合并到控制层,
if (['02', '03', '06'].indexOf(clsge_GameLevelEN.PrimaryTypeId) > -1)
{
returnKeyId = await this.AddNewRecordWithMaxIdSave();
if (IsNullOrEmpty(returnKeyId) == false)
{
if (ge_GameLevel_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
this.HideDialog_ge_GameLevel();
if (this.iShowList != null) this.iShowList.BindGvCache(clsge_GameLevelEN._CurrTabName, returnKeyId);
}
}
else
{
returnBool = await this.AddNewRecordSave();
if (returnBool == true)
{
if (ge_GameLevel_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
refge_GameLevel_Edit.value.hideDialog();
}
if (this.iShowList != null) this.iShowList.BindGvCache(clsge_GameLevelEN._CurrTabName, this.keyId);
}
}
break;
case "确认修改":
//这是一个单表的修改的代码,由于逻辑层太简单,
returnBool = await this.UpdateRecordSave();
strInfo = returnBool ? "修改成功!" : "修改不成功!";
strInfo += "(In ge_GameLevel_Edit.btnSubmit_Click)";
//显示信息框
//console.log(strInfo);
alert(strInfo);
if (returnBool == true)
{
if (ge_GameLevel_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
refge_GameLevel_Edit.value.hideDialog();
}
if (this.iShowList != null) this.iShowList.BindGvCache(clsge_GameLevelEN._CurrTabName, this.keyId);
}
break;
default:
strMsg = Format("strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())", strCommandText);
console.error(strMsg);
alert(strMsg);
break;
}
}
catch (e)
{
const strMsg = Format("(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})", e, this.className, strThisFuncName, strCommandText);
console.error(strMsg);
alert(strMsg);
}
}

 /** 为插入记录做准备工作
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
 **/
public async AddNewRecord()
{
const strThisFuncName = this.AddNewRecord.name;
console.log('strThisFuncName1', strThisFuncName);
refge_GameLevel_Edit.value.Clear();
//wucge_GameLevelB1.gameLevelId = ge_GameLevelGetMaxStrId_S();
try
{
const returnString = await ge_GameLevel_GetMaxStrIdAsync();
if (returnString == "")
{
const strInfo = Format("获取表ge_GameLevel的最大关键字为空,不成功,请检查!");
//显示信息框
alert(strInfo);
}
else
{
this.keyId = returnString;
}
}
catch(e)
{
const strMsg = Format("获取表关键字的最大值不成功,{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /** 为插入记录做准备工作
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
 **/
public async AddNewRecordWithMaxId()
{
const strThisFuncName = this.AddNewRecordWithMaxId.name;
refge_GameLevel_Edit.value.Clear();

//this.gameLevelId = await ge_GameLevel_GetMaxStrIdAsync();
try
{
const returnString = await ge_GameLevel_GetMaxStrIdAsync();
if (returnString == "")
{
const strInfo = Format("获取表ge_GameLevel的最大关键字为空,不成功,请检查!");
//显示信息框
alert(strInfo);
}
else
{
this.keyId = returnString;
}
}
catch(e)
{
const strMsg = Format("获取表关键字的最大值不成功,{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /** 添加新记录,保存函数
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
 **/
public async AddNewRecordSave(): Promise<boolean>{
const strThisFuncName = this.AddNewRecordSave.name;
let objge_GameLevelEN;
try
{
objge_GameLevelEN = await refge_GameLevel_Edit.value.GetEditDatage_GameLevelObj();
}
catch(e)
{
const strMsg = Format("从界面获取数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
try
{
ge_GameLevel_CheckPropertyNew(objge_GameLevelEN);
}
catch(e)
{
const strMsg = Format("检查数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await this.CheckUniCond4Add(objge_GameLevelEN);
if (bolIsExistCond == false)
{
return false;
}
let returnBool = false;
const returnKeyId = await ge_GameLevel_AddNewRecordWithMaxIdAsync(objge_GameLevelEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
this.keyId = returnKeyId;
returnBool = true;
}
if (returnBool == true)
{
ge_GameLevel_ReFreshCache(CourseId_Session.value);
const strInfo = `添加[游戏关卡表(ge_GameLevel)]记录成功!`;
//显示信息框
if (this.isShowMsg == true) alert(strInfo);
}
else
{
const strInfo = `添加[游戏关卡表(ge_GameLevel)]记录不成功!`;
//显示信息框
alert(strInfo);
}
return returnBool;//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = Format("添加记录不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
 **/
public async CheckUniCond4Add(objge_GameLevelEN: clsge_GameLevelEN): Promise<boolean>{
const strUniquenessCondition = ge_GameLevel_GetUniCondStr(objge_GameLevelEN);
const bolIsExistCondition = await ge_GameLevel_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
 **/
public async CheckUniCond4Update(objge_GameLevelEN: clsge_GameLevelEN): Promise<boolean>{
const strUniquenessCondition = ge_GameLevel_GetUniCondStr4Update(objge_GameLevelEN);
const bolIsExistCondition = await ge_GameLevel_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 添加新记录,由后台自动获取最大值的关键字。保存函数
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxIdSave)
 **/
public async AddNewRecordWithMaxIdSave(): Promise<string>{
const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
let objge_GameLevelEN;
try
{
objge_GameLevelEN = await refge_GameLevel_Edit.value.GetEditDatage_GameLevelObj();
}
catch(e)
{
const strMsg = Format("从界面获取数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw(strMsg);//一定要有一个返回值,否则会出错!
}
try
{
ge_GameLevel_CheckPropertyNew(objge_GameLevelEN);
}
catch(e)
{
const strMsg = Format("检查数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw(strMsg);//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await this.CheckUniCond4Add(objge_GameLevelEN);
if (bolIsExistCond == false)
{
return "";
}
const responseKeyId = await ge_GameLevel_AddNewRecordWithMaxIdAsync(objge_GameLevelEN);
const returnKeyId: string = responseKeyId;
if (IsNullOrEmpty(returnKeyId) == false)
{
ge_GameLevel_ReFreshCache(CourseId_Session.value);
const strInfo = `添加[游戏关卡表(ge_GameLevel)]记录成功!`;
//显示信息框
if (this.isShowMsg == true) alert(strInfo);
}
else
{
const strInfo = `添加[游戏关卡表(ge_GameLevel)]记录不成功!`;
//显示信息框
alert(strInfo);
}
return responseKeyId;//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = Format("添加记录不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw(strMsg);
}
return "";//一定要有一个返回值,否则会出错!
}

 /** 函数功能:把以该关键字的记录内容显示在界面上,
* 在这里是把值传到表控件中
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_ShowData)
 * @param strGameLevelId: 表记录的关键字,显示该表关键字的内容
 **/
  public async ShowData(strGameLevelId: string) {
const strThisFuncName = this.ShowData.name;
        //操作步骤:
        //1、检查关键字是否为空；
        //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
        //3、用提供的关键字初始化一个类对象；
        //4、获取类对象的所有属性；
        //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
        //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
        let objge_GameLevelEN = new clsge_GameLevelEN();
        try {
const returnBool = await ge_GameLevel_IsExistAsync(strGameLevelId);
            if (returnBool == false) {
                const strInfo = Format("关键字:[{0}] 的记录不存在!", strGameLevelId);
                //显示信息框
                alert(strInfo);
            }
        }
        catch (e) {
            const strMsg = Format("检查相应关键字的记录存在不成功, {0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
        }
        try {
const objge_GameLevelENConst = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
       if (objge_GameLevelENConst == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return;
        }
 objge_GameLevelEN = objge_GameLevelENConst; 
        }
        catch (e) {
            const strMsg = Format("根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
        }
        //3、用提供的关键字初始化一个类对象；
refge_GameLevel_Edit.value.ShowDataFromge_GameLevelObj(objge_GameLevelEN);
}

 /** 根据关键字获取相应的记录的对象
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
 * @param sender">参数列表</param>
 **/
public async UpdateRecord(strGameLevelId: string):Promise<boolean> 
{
const strThisFuncName = this.UpdateRecord.name;
this.keyId = strGameLevelId;
try
{
const objge_GameLevelEN = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
       if (objge_GameLevelEN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.className, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
await refge_GameLevel_Edit.value.ShowDataFromge_GameLevelObj(objge_GameLevelEN);
console.log("完成UpdateRecord!");
return true;
}
catch(e)
{
const strMsg = Format("根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
}

 /** 修改记录
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecordSave)
 **/
public async UpdateRecordSave(): Promise<boolean> {
const strThisFuncName = this.UpdateRecordSave.name;
const objge_GameLevelEN = await refge_GameLevel_Edit.value.GetEditDatage_GameLevelObj();
objge_GameLevelEN.SetGameLevelId(this.keyId);
objge_GameLevelEN.sfUpdFldSetStr = objge_GameLevelEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_GameLevelEN.gameLevelId == "" || objge_GameLevelEN.gameLevelId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_GameLevel_CheckProperty4Update(objge_GameLevelEN);
}
catch(e)
{
const strMsg = Format("检查数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await this.CheckUniCond4Update(objge_GameLevelEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_GameLevel_UpdateRecordAsync(objge_GameLevelEN);
if (returnBool == true)
{
ge_GameLevel_ReFreshCache(CourseId_Session.value);
ge_GameLevel_DeleteKeyIdCache(CourseId_Session.value, this.keyId);
}
return returnBool;
}
catch(e)
{
const strMsg = Format("修改记录不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
}

 /** 编辑记录，存在就修改，不存在就添加
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_EditRecordExSave)
 **/
public async EditRecordExSave(): Promise<boolean> {
const strThisFuncName = this.EditRecordExSave.name;
const objge_GameLevelEN = await refge_GameLevel_Edit.value.GetEditDatage_GameLevelObj();
objge_GameLevelEN.SetGameLevelId(this.keyId);
objge_GameLevelEN.sfUpdFldSetStr = objge_GameLevelEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_GameLevelEN.gameLevelId == "" || objge_GameLevelEN.gameLevelId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_GameLevel_CheckProperty4Update(objge_GameLevelEN);
}
catch(e)
{
const strMsg = Format("检查数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await this.CheckUniCond4Update(objge_GameLevelEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_GameLevel_EditRecordExAsync(objge_GameLevelEN);
if (returnBool == true)
{
ge_GameLevel_ReFreshCache(CourseId_Session.value);
}
return returnBool;
}
catch(e)
{
const strMsg = Format("修改记录不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
}

 /**
 * 设置取消按钮的标题(Used In AddNewRecord())
 **/
public  set btnCancelge_GameLevel(value: string) {
refge_GameLevel_Edit.value.strCancelButtonText = value;
}
 /**
 * 获取按钮的标题
 **/
public  get btnSubmitge_GameLevel():string {
const strValue = refge_GameLevel_Edit.value.strSubmitButtonText;
return strValue;
}
 /**
 * 设置确定按钮的标题(Used In AddNewRecord())
 **/
public  set btnSubmitge_GameLevel(value: string) {
refge_GameLevel_Edit.value.strSubmitButtonText = value;
}
}