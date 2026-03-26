
 /**
 * 类名:AnswerVueShare(界面:AnswerCRUD,01120227)
 * 表名:Answer(01120002)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:33
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
import { clsAnswerEN } from "@/ts/L0Entity/QuestionaireEdit/clsAnswerEN";
import { clsAnswerENEx } from "@/ts/L0Entity/QuestionaireEdit/clsAnswerENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortAnswerBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortAnswerBy,
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
const refAnswer_Edit = ref ();
const refAnswer_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refAnswer_Edit,
refAnswer_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refAnswer_Edit,
refAnswer_List, };

export const showErrorMessage = ref (false);
export const dataListAnswer = ref<Array<clsAnswerENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const answerCache: { [key: string]: clsAnswerENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const answerContent_q = ref('');
const qryVarSet = reactive({
 answerContent_q,});
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
export const  CombineAnswerCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( answerContent_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsAnswerEN.con_AnswerContent, answerContent_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineAnswerCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineAnswerConditionObj=async (): Promise<clsAnswerEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objAnswerCond = new clsAnswerEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( answerContent_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsAnswerEN.con_AnswerContent, answerContent_q.value);
objAnswerCond.SetCondFldValue(clsAnswerEN.con_AnswerContent, answerContent_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineAnswerConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objAnswerCond.whereCond = strWhereCond;
return objAnswerCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineAnswerConditionObj4ExportExcel = async ():Promise<clsAnswerEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objAnswerCond = new clsAnswerENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( answerContent_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsAnswerEN.con_AnswerContent, answerContent_q.value);
objAnswerCond.SetCondFldValue(clsAnswerEN.con_AnswerContent, answerContent_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineAnswerConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objAnswerCond.whereCond = strWhereCond;
return objAnswerCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsAnswerENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListAnswer.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refAnswer_List.value != null) refAnswer_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function Answer_DeleteKeyIdCache(strCourseId: string,  lngAnswerId:number):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In AnswerVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(AnswerVueShare..DeleteKeyIdCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngAnswerId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngAnswerId }_${ strCourseId }`;
delete answerCache[cacheKey];
return;
}
}