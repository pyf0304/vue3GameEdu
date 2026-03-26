
 /**
 * 类名:QuestionOptionsVueShare(界面:QuestionOptionsCRUD,01120200)
 * 表名:QuestionOptions(01120188)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:41
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsQuestionOptionsEN } from "@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN";
import { clsQuestionOptionsENEx } from "@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortQuestionOptionsBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQuestionOptionsBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const QuestionId_Static = ref(0);//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refQuestionOptions_Edit = ref ();
const refQuestionOptions_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQuestionOptions_Edit,
refQuestionOptions_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQuestionOptions_Edit,
refQuestionOptions_List, };

export const showErrorMessage = ref (false);
export const dataListQuestionOptions = ref<Array<clsQuestionOptionsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const questionOptionsCache: { [key: string]: clsQuestionOptionsENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const optionName_q = ref('');
const qryVarSet = reactive({
 optionName_q,});
export { qryVarSet };

//功能区变量定义
export const questionId_f = ref(0);
const featureVarSet = reactive({
 questionId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQuestionOptionsCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( optionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQuestionOptionsEN.con_OptionName, optionName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQuestionOptionsCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQuestionOptionsConditionObj=async (): Promise<clsQuestionOptionsEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQuestionOptionsCond = new clsQuestionOptionsEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( optionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQuestionOptionsEN.con_OptionName, optionName_q.value);
objQuestionOptionsCond.SetCondFldValue(clsQuestionOptionsEN.con_OptionName, optionName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQuestionOptionsConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQuestionOptionsCond.whereCond = strWhereCond;
return objQuestionOptionsCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQuestionOptionsConditionObj4ExportExcel = async ():Promise<clsQuestionOptionsEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQuestionOptionsCond = new clsQuestionOptionsENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( optionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQuestionOptionsEN.con_OptionName, optionName_q.value);
objQuestionOptionsCond.SetCondFldValue(clsQuestionOptionsEN.con_OptionName, optionName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQuestionOptionsConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQuestionOptionsCond.whereCond = strWhereCond;
return objQuestionOptionsCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQuestionOptionsENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQuestionOptions.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQuestionOptions_List.value != null) refQuestionOptions_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function QuestionOptions_DeleteKeyIdCache(strCourseId: string,  strQuestionOptionId:string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In QuestionOptionsVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(QuestionOptionsVueShare..DeleteKeyIdCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strQuestionOptionId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strQuestionOptionId }_${ strCourseId }`;
delete questionOptionsCache[cacheKey];
return;
}
}