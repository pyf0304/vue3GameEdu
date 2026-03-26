
 /**
 * 类名:JxTeachingPlan_Edit(界面:JxTeachingPlanCRUD,01120253)
 * 表名:JxTeachingPlan(01120968)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:31:00
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS,0257)
 * 编程语言:TypeScript
 **/
import $ from "jquery";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { JxTeachingPlan_GetMaxStrIdAsync,JxTeachingPlan_CheckPropertyNew,JxTeachingPlan_AddNewRecordWithMaxIdAsync,JxTeachingPlan_ReFreshCache,JxTeachingPlan_GetUniCondStr,JxTeachingPlan_IsExistRecordAsync,JxTeachingPlan_GetUniCondStr4Update,JxTeachingPlan_IsExistAsync,JxTeachingPlan_GetObjByIdTeachingPlanAsync,JxTeachingPlan_CheckProperty4Update,JxTeachingPlan_UpdateRecordAsync,JxTeachingPlan_EditRecordExAsync } from "@/ts/L3ForWApi/TeachingPlan/clsJxTeachingPlanWApi";
import { clsJxTeachingPlanEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN";
import { JxTeachingPlan_DeleteKeyIdCache,divVarSet,refJxTeachingPlan_Edit } from "@/views/TeachingPlan/JxTeachingPlanVueShare";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /** JxTeachingPlan_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class  JxTeachingPlan_Edit 
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
public static objPageEdit: JxTeachingPlan_Edit;
public static objPageEdit2: JxTeachingPlan_Edit;
public static objPageEdit3: JxTeachingPlan_Edit;
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
if (JxTeachingPlan_Edit.SetPageEdit(this, 1) == true) return;
if (JxTeachingPlan_Edit.SetPageEdit(this, 2) == true) return;
if (JxTeachingPlan_Edit.SetPageEdit(this, 3) == true) return;
}
public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
const strNewClassName = objDataLst.className;
switch (intIndex)
{
case 1:
if (JxTeachingPlan_Edit.objPageEdit == null)
{
JxTeachingPlan_Edit.objPageEdit = objDataLst;
return true;
}
else
{
const strClassNameOld = JxTeachingPlan_Edit.objPageEdit.className;
if (strClassNameOld == strNewClassName)
{
JxTeachingPlan_Edit.objPageEdit = objDataLst;
return true;
}
else return false;
}
break;
case 2:
if (JxTeachingPlan_Edit.objPageEdit2 == null)
{
JxTeachingPlan_Edit.objPageEdit2 = objDataLst;
return true;
}
else
{
const strClassNameOld = JxTeachingPlan_Edit.objPageEdit2.className;
if (strClassNameOld == strNewClassName)
{
JxTeachingPlan_Edit.objPageEdit2 = objDataLst;
return true;
}
else return false;
}
break;
case 3:
if (JxTeachingPlan_Edit.objPageEdit3 == null)
{
JxTeachingPlan_Edit.objPageEdit3 = objDataLst;
return true;
}
else
{
const strClassNameOld = JxTeachingPlan_Edit.objPageEdit3.className;
if (strClassNameOld == strNewClassName)
{
JxTeachingPlan_Edit.objPageEdit3 = objDataLst;
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
if (JxTeachingPlan_Edit.objPageEdit != null)
{
const strClassNameOld = JxTeachingPlan_Edit.objPageEdit.className;
if (strClassNameOld == strClassName) return JxTeachingPlan_Edit.objPageEdit;
}
if (JxTeachingPlan_Edit.objPageEdit2 != null)
{
const strClassNameOld = JxTeachingPlan_Edit.objPageEdit2.className;
if (strClassNameOld == strClassName) return JxTeachingPlan_Edit.objPageEdit2;
}
if (JxTeachingPlan_Edit.objPageEdit3 != null)
{
const strClassNameOld = JxTeachingPlan_Edit.objPageEdit3.className;
if (strClassNameOld == strClassName) return JxTeachingPlan_Edit.objPageEdit3;
}
return null;
}


 /**
 * 隐藏对话框
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
 **/
public HideDialog_JxTeachingPlan() {
if (JxTeachingPlan_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refJxTeachingPlan_Edit.value.hideDialog();
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
public async ShowDialog_JxTeachingPlan(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_JxTeachingPlan.name;
if (JxTeachingPlan_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refJxTeachingPlan_Edit.value == null)
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
await refJxTeachingPlan_Edit.value.showDialog(this);
}
       if (strOp === "Add" || strOp === "AddWithMaxId") {
this.btnSubmitJxTeachingPlan = "确认添加";
this.btnCancelJxTeachingPlan = "取消添加";
        }
else if (strOp === "Update")
{
this.btnSubmitJxTeachingPlan = "确认修改";
this.btnCancelJxTeachingPlan = "取消修改";
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
const bolIsSuccess = await this.ShowDialog_JxTeachingPlan(this.opType);
if (bolIsSuccess == false) return;
if (['02', '03', '06'].indexOf(clsJxTeachingPlanEN.PrimaryTypeId) > -1)
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
public async btnUpdateRecordInTab_Click(strIdTeachingPlan: string) {
const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
if (IsNullOrEmpty(strIdTeachingPlan) == true)
{
alert("请选择需要修改的记录!");
return;
}
try {
this.opType = "Update";
const bolIsSuccess = await this.ShowDialog_JxTeachingPlan(this.opType);
if (bolIsSuccess == false) return;
this.UpdateRecord(strIdTeachingPlan);
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
public async btnUpdateRecord_Click(strIdTeachingPlan: string) {
const strThisFuncName = this.btnUpdateRecord_Click.name;
if (IsNullOrEmpty(strIdTeachingPlan) == true)
{
const strMsg = "修改记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
return;
}
try {
this.opType = "Update";
const bolIsSuccess = await this.ShowDialog_JxTeachingPlan(this.opType);
if (bolIsSuccess == false) return;
this.bolIsLoadEditRegion = true;  //
const update = await this.UpdateRecord(strIdTeachingPlan);
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
const strCommandText: string = this.btnSubmitJxTeachingPlan;
try {
let returnBool = false;
let returnKeyId = "";
let strInfo = "";
let strMsg = "";
switch(strCommandText)
{
case "添加":
this.btnSubmitJxTeachingPlan = "确认添加";
this.btnCancelJxTeachingPlan = "取消添加";
 await this.AddNewRecord();
break;				
case "确认添加":
//这是一个单表的插入的代码,由于逻辑层太简单,
//就把逻辑层合并到控制层,
if (['02', '03', '06'].indexOf(clsJxTeachingPlanEN.PrimaryTypeId) > -1)
{
returnKeyId = await this.AddNewRecordWithMaxIdSave();
if (IsNullOrEmpty(returnKeyId) == false)
{
if (JxTeachingPlan_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
this.HideDialog_JxTeachingPlan();
if (this.iShowList != null) this.iShowList.BindGvCache(clsJxTeachingPlanEN._CurrTabName, returnKeyId);
}
}
else
{
returnBool = await this.AddNewRecordSave();
if (returnBool == true)
{
if (JxTeachingPlan_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
refJxTeachingPlan_Edit.value.hideDialog();
}
if (this.iShowList != null) this.iShowList.BindGvCache(clsJxTeachingPlanEN._CurrTabName, this.keyId);
}
}
break;
case "确认修改":
//这是一个单表的修改的代码,由于逻辑层太简单,
returnBool = await this.UpdateRecordSave();
strInfo = returnBool ? "修改成功!" : "修改不成功!";
strInfo += "(In JxTeachingPlan_Edit.btnSubmit_Click)";
//显示信息框
//console.log(strInfo);
alert(strInfo);
if (returnBool == true)
{
if (JxTeachingPlan_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
refJxTeachingPlan_Edit.value.hideDialog();
}
if (this.iShowList != null) this.iShowList.BindGvCache(clsJxTeachingPlanEN._CurrTabName, this.keyId);
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
refJxTeachingPlan_Edit.value.Clear();
//wucJxTeachingPlanB1.idTeachingPlan = JxTeachingPlanGetMaxStrId_S();
try
{
const returnString = await JxTeachingPlan_GetMaxStrIdAsync();
if (returnString == "")
{
const strInfo = Format("获取表JxTeachingPlan的最大关键字为空,不成功,请检查!");
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
refJxTeachingPlan_Edit.value.Clear();

//this.idTeachingPlan = await JxTeachingPlan_GetMaxStrIdAsync();
try
{
const returnString = await JxTeachingPlan_GetMaxStrIdAsync();
if (returnString == "")
{
const strInfo = Format("获取表JxTeachingPlan的最大关键字为空,不成功,请检查!");
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
let objJxTeachingPlanEN;
try
{
objJxTeachingPlanEN = await refJxTeachingPlan_Edit.value.GetEditDataJxTeachingPlanObj();
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
JxTeachingPlan_CheckPropertyNew(objJxTeachingPlanEN);
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
const bolIsExistCond = await this.CheckUniCond4Add(objJxTeachingPlanEN);
if (bolIsExistCond == false)
{
return false;
}
let returnBool = false;
const returnKeyId = await JxTeachingPlan_AddNewRecordWithMaxIdAsync(objJxTeachingPlanEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
this.keyId = returnKeyId;
returnBool = true;
}
if (returnBool == true)
{
JxTeachingPlan_ReFreshCache();
const strInfo = `添加[教学计划(JxTeachingPlan)]记录成功!`;
//显示信息框
if (this.isShowMsg == true) alert(strInfo);
}
else
{
const strInfo = `添加[教学计划(JxTeachingPlan)]记录不成功!`;
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
public async CheckUniCond4Add(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<boolean>{
const strUniquenessCondition = JxTeachingPlan_GetUniCondStr(objJxTeachingPlanEN);
const bolIsExistCondition = await JxTeachingPlan_IsExistRecordAsync(strUniquenessCondition);
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
public async CheckUniCond4Update(objJxTeachingPlanEN: clsJxTeachingPlanEN): Promise<boolean>{
const strUniquenessCondition = JxTeachingPlan_GetUniCondStr4Update(objJxTeachingPlanEN);
const bolIsExistCondition = await JxTeachingPlan_IsExistRecordAsync(strUniquenessCondition);
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
let objJxTeachingPlanEN;
try
{
objJxTeachingPlanEN = await refJxTeachingPlan_Edit.value.GetEditDataJxTeachingPlanObj();
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
JxTeachingPlan_CheckPropertyNew(objJxTeachingPlanEN);
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
const bolIsExistCond = await this.CheckUniCond4Add(objJxTeachingPlanEN);
if (bolIsExistCond == false)
{
return "";
}
const responseKeyId = await JxTeachingPlan_AddNewRecordWithMaxIdAsync(objJxTeachingPlanEN);
const returnKeyId: string = responseKeyId;
if (IsNullOrEmpty(returnKeyId) == false)
{
JxTeachingPlan_ReFreshCache();
const strInfo = `添加[教学计划(JxTeachingPlan)]记录成功!`;
//显示信息框
if (this.isShowMsg == true) alert(strInfo);
}
else
{
const strInfo = `添加[教学计划(JxTeachingPlan)]记录不成功!`;
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
 * @param strIdTeachingPlan: 表记录的关键字,显示该表关键字的内容
 **/
  public async ShowData(strIdTeachingPlan: string) {
const strThisFuncName = this.ShowData.name;
        //操作步骤:
        //1、检查关键字是否为空；
        //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
        //3、用提供的关键字初始化一个类对象；
        //4、获取类对象的所有属性；
        //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
        //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
        let objJxTeachingPlanEN = new clsJxTeachingPlanEN();
        try {
const returnBool = await JxTeachingPlan_IsExistAsync(strIdTeachingPlan);
            if (returnBool == false) {
                const strInfo = Format("关键字:[{0}] 的记录不存在!", strIdTeachingPlan);
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
const objJxTeachingPlanENConst = await JxTeachingPlan_GetObjByIdTeachingPlanAsync(strIdTeachingPlan);
       if (objJxTeachingPlanENConst == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return;
        }
 objJxTeachingPlanEN = objJxTeachingPlanENConst; 
        }
        catch (e) {
            const strMsg = Format("根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
        }
        //3、用提供的关键字初始化一个类对象；
refJxTeachingPlan_Edit.value.ShowDataFromJxTeachingPlanObj(objJxTeachingPlanEN);
}

 /** 根据关键字获取相应的记录的对象
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
 * @param sender">参数列表</param>
 **/
public async UpdateRecord(strIdTeachingPlan: string):Promise<boolean> 
{
const strThisFuncName = this.UpdateRecord.name;
this.keyId = strIdTeachingPlan;
try
{
const objJxTeachingPlanEN = await JxTeachingPlan_GetObjByIdTeachingPlanAsync(strIdTeachingPlan);
       if (objJxTeachingPlanEN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.className, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
await refJxTeachingPlan_Edit.value.ShowDataFromJxTeachingPlanObj(objJxTeachingPlanEN);
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
const objJxTeachingPlanEN = await refJxTeachingPlan_Edit.value.GetEditDataJxTeachingPlanObj();
objJxTeachingPlanEN.SetIdTeachingPlan(this.keyId);
objJxTeachingPlanEN.sfUpdFldSetStr = objJxTeachingPlanEN.updFldString;//设置哪些字段被修改(脏字段)
if (objJxTeachingPlanEN.idTeachingPlan == "" || objJxTeachingPlanEN.idTeachingPlan == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
JxTeachingPlan_CheckProperty4Update(objJxTeachingPlanEN);
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
const bolIsExistCond = await this.CheckUniCond4Update(objJxTeachingPlanEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await JxTeachingPlan_UpdateRecordAsync(objJxTeachingPlanEN);
if (returnBool == true)
{
JxTeachingPlan_ReFreshCache();
JxTeachingPlan_DeleteKeyIdCache(this.keyId);
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
const objJxTeachingPlanEN = await refJxTeachingPlan_Edit.value.GetEditDataJxTeachingPlanObj();
objJxTeachingPlanEN.SetIdTeachingPlan(this.keyId);
objJxTeachingPlanEN.sfUpdFldSetStr = objJxTeachingPlanEN.updFldString;//设置哪些字段被修改(脏字段)
if (objJxTeachingPlanEN.idTeachingPlan == "" || objJxTeachingPlanEN.idTeachingPlan == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
JxTeachingPlan_CheckProperty4Update(objJxTeachingPlanEN);
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
const bolIsExistCond = await this.CheckUniCond4Update(objJxTeachingPlanEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await JxTeachingPlan_EditRecordExAsync(objJxTeachingPlanEN);
if (returnBool == true)
{
JxTeachingPlan_ReFreshCache();
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
public  set btnCancelJxTeachingPlan(value: string) {
refJxTeachingPlan_Edit.value.strCancelButtonText = value;
}
 /**
 * 获取按钮的标题
 **/
public  get btnSubmitJxTeachingPlan():string {
const strValue = refJxTeachingPlan_Edit.value.strSubmitButtonText;
return strValue;
}
 /**
 * 设置确定按钮的标题(Used In AddNewRecord())
 **/
public  set btnSubmitJxTeachingPlan(value: string) {
refJxTeachingPlan_Edit.value.strSubmitButtonText = value;
}
}