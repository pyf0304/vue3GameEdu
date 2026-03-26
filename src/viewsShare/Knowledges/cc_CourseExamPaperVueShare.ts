
 /**
 * 类名:cc_CourseExamPaperVueShare(界面:cc_CourseExamPaperCRUD,01120193)
 * 表名:cc_CourseExamPaper(01120071)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:53
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clscc_CourseExamPaperEN } from "@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN";
import { clscc_CourseExamPaperENEx } from "@/ts/L0Entity/Knowledges/clscc_CourseExamPaperENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortcc_CourseExamPaperBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortcc_CourseExamPaperBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refcc_CourseExamPaper_Edit = ref ();
const refcc_CourseExamPaper_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refcc_CourseExamPaper_Edit,
refcc_CourseExamPaper_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refcc_CourseExamPaper_Edit,
refcc_CourseExamPaper_List, };

export const showErrorMessage = ref (false);
export const dataListcc_CourseExamPaper = ref<Array<clscc_CourseExamPaperENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const cc_CourseExamPaperCache: { [key: string]: clscc_CourseExamPaperENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseId_q = ref('');
export const examPaperName_q = ref('');
export const examPaperTypeId_q = ref('');
const qryVarSet = reactive({
 courseId_q,
 examPaperName_q,
 examPaperTypeId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinecc_CourseExamPaperCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
try
{
if ( examPaperName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseExamPaperEN.con_ExamPaperName, examPaperName_q.value);
}
if ( examPaperTypeId_q.value != "" && examPaperTypeId_q.value != "0")
{
strWhereCond += Format(" And cc_CourseExamPaper.{0} = '{1}'", clscc_CourseExamPaperEN.con_ExamPaperTypeId, examPaperTypeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinecc_CourseExamPaperCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseExamPaperConditionObj=async (): Promise<clscc_CourseExamPaperEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseExamPaperCond = new clscc_CourseExamPaperEN();
let strWhereCond = " 1 = 1 ";
objcc_CourseExamPaperCond.SetCondFldValue(clscc_CourseExamPaperEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( examPaperName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseExamPaperEN.con_ExamPaperName, examPaperName_q.value);
objcc_CourseExamPaperCond.SetCondFldValue(clscc_CourseExamPaperEN.con_ExamPaperName, examPaperName_q.value, "like");
}
if ( examPaperTypeId_q.value != "" && examPaperTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseExamPaperEN.con_ExamPaperTypeId, examPaperTypeId_q.value);
objcc_CourseExamPaperCond.SetCondFldValue(clscc_CourseExamPaperEN.con_ExamPaperTypeId, examPaperTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinecc_CourseExamPaperConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseExamPaperCond.whereCond = strWhereCond;
return objcc_CourseExamPaperCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseExamPaperConditionObj4ExportExcel = async ():Promise<clscc_CourseExamPaperEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseExamPaperCond = new clscc_CourseExamPaperENEx();
let strWhereCond = " 1 = 1 ";
objcc_CourseExamPaperCond.SetCondFldValue(clscc_CourseExamPaperEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( examPaperName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseExamPaperEN.con_ExamPaperName, examPaperName_q.value);
objcc_CourseExamPaperCond.SetCondFldValue(clscc_CourseExamPaperEN.con_ExamPaperName, examPaperName_q.value, "like");
}
if ( examPaperTypeId_q.value != "" && examPaperTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseExamPaperEN.con_ExamPaperTypeId, examPaperTypeId_q.value);
objcc_CourseExamPaperCond.SetCondFldValue(clscc_CourseExamPaperEN.con_ExamPaperTypeId, examPaperTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinecc_CourseExamPaperConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseExamPaperCond.whereCond = strWhereCond;
return objcc_CourseExamPaperCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clscc_CourseExamPaperENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListcc_CourseExamPaper.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refcc_CourseExamPaper_List.value != null) refcc_CourseExamPaper_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function cc_CourseExamPaper_DeleteKeyIdCache(strCourseId: string,  strCourseExamPaperId:string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In cc_CourseExamPaperVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(cc_CourseExamPaperVueShare..DeleteKeyIdCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strCourseExamPaperId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strCourseExamPaperId }_${ strCourseId }`;
delete cc_CourseExamPaperCache[cacheKey];
return;
}
}