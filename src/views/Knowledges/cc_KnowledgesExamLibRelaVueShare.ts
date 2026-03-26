
 /**
 * 类名:cc_KnowledgesExamLibRelaVueShare(界面:cc_KnowledgesExamLibRelaCRUD,01120185)
 * 表名:cc_KnowledgesExamLibRela(01120140)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:22
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
import { clscc_KnowledgesExamLibRelaEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN";
import { clscc_KnowledgesExamLibRelaENEx } from "@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortcc_KnowledgesExamLibRelaBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortcc_KnowledgesExamLibRelaBy,
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
const refcc_KnowledgesExamLibRela_Edit = ref ();
const refcc_KnowledgesExamLibRela_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refcc_KnowledgesExamLibRela_Edit,
refcc_KnowledgesExamLibRela_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refcc_KnowledgesExamLibRela_Edit,
refcc_KnowledgesExamLibRela_List, };

export const showErrorMessage = ref (false);
export const dataListcc_KnowledgesExamLibRela = ref<Array<clscc_KnowledgesExamLibRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const cc_KnowledgesExamLibRelaCache: { [key: string]: clscc_KnowledgesExamLibRelaENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseId_q = ref('');
export const questionId_q = ref(0);
export const knowledgeModuleId_q = ref('');
export const courseChapterId_q = ref('');
const qryVarSet = reactive({
 courseId_q,
 questionId_q,
 knowledgeModuleId_q,
 courseChapterId_q,});
export { qryVarSet };

//功能区变量定义
export const isMain_f = ref('0')
const featureVarSet = reactive({
 isMain_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinecc_KnowledgesExamLibRelaCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and QuestionId ={0}", QuestionId_Static.value);
try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And cc_KnowledgesExamLibRela.{0} = '{1}'", clscc_KnowledgesExamLibRelaEN.con_CourseId, courseId_q.value);
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And  CourseKnowledgeId in (Select CourseKnowledgeId from cc_CourseKnowledges where KnowledgeModuleId = '{0}')", knowledgeModuleId_q.value);
}
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And  CourseKnowledgeId in (Select CourseKnowledgeId from cc_CourseKnowledges where CourseChapterId = '{0}')", courseChapterId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinecc_KnowledgesExamLibRelaCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_KnowledgesExamLibRelaConditionObj=async (): Promise<clscc_KnowledgesExamLibRelaEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_KnowledgesExamLibRelaCond = new clscc_KnowledgesExamLibRelaEN();
let strWhereCond = " 1 = 1 ";
objcc_KnowledgesExamLibRelaCond.SetCondFldValue(clscc_KnowledgesExamLibRelaEN.con_QuestionId, QuestionId_Static.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_KnowledgesExamLibRelaEN.con_CourseId, courseId_q.value);
objcc_KnowledgesExamLibRelaCond.SetCondFldValue(clscc_KnowledgesExamLibRelaEN.con_CourseId, courseId_q.value, "=");
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_KnowledgesExamLibRelaENEx.con_KnowledgeModuleId, knowledgeModuleId_q.value);
objcc_KnowledgesExamLibRelaCond.SetCondFldValue(clscc_KnowledgesExamLibRelaENEx.con_KnowledgeModuleId, knowledgeModuleId_q.value, "=");
}
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_KnowledgesExamLibRelaENEx.con_CourseChapterId, courseChapterId_q.value);
objcc_KnowledgesExamLibRelaCond.SetCondFldValue(clscc_KnowledgesExamLibRelaENEx.con_CourseChapterId, courseChapterId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinecc_KnowledgesExamLibRelaConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_KnowledgesExamLibRelaCond.whereCond = strWhereCond;
return objcc_KnowledgesExamLibRelaCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_KnowledgesExamLibRelaConditionObj4ExportExcel = async ():Promise<clscc_KnowledgesExamLibRelaEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_KnowledgesExamLibRelaCond = new clscc_KnowledgesExamLibRelaENEx();
let strWhereCond = " 1 = 1 ";
objcc_KnowledgesExamLibRelaCond.SetCondFldValue(clscc_KnowledgesExamLibRelaEN.con_QuestionId, QuestionId_Static.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_KnowledgesExamLibRelaEN.con_CourseId, courseId_q.value);
objcc_KnowledgesExamLibRelaCond.SetCondFldValue(clscc_KnowledgesExamLibRelaEN.con_CourseId, courseId_q.value, "=");
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_KnowledgesExamLibRelaENEx.con_KnowledgeModuleId, knowledgeModuleId_q.value);
objcc_KnowledgesExamLibRelaCond.SetCondFldValue(clscc_KnowledgesExamLibRelaENEx.con_KnowledgeModuleId, knowledgeModuleId_q.value, "=");
}
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_KnowledgesExamLibRelaENEx.con_CourseChapterId, courseChapterId_q.value);
objcc_KnowledgesExamLibRelaCond.SetCondFldValue(clscc_KnowledgesExamLibRelaENEx.con_CourseChapterId, courseChapterId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinecc_KnowledgesExamLibRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_KnowledgesExamLibRelaCond.whereCond = strWhereCond;
return objcc_KnowledgesExamLibRelaCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clscc_KnowledgesExamLibRelaENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListcc_KnowledgesExamLibRela.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refcc_KnowledgesExamLibRela_List.value != null) refcc_KnowledgesExamLibRela_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function cc_KnowledgesExamLibRela_DeleteKeyIdCache(strCourseId: string,  lngmId:number):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In cc_KnowledgesExamLibRelaVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(cc_KnowledgesExamLibRelaVueShare..DeleteKeyIdCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strCourseId }`;
delete cc_KnowledgesExamLibRelaCache[cacheKey];
return;
}
}