
 /**
 * 类名:JxTeachPlanKnowledgeVueShare(界面:JxTeachPlanKnowledgeCRUD,01120254)
 * 表名:JxTeachPlanKnowledge(01120971)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:08
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学执行计划管理(TeachingPlan)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsJxTeachPlanKnowledgeEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeEN";
import { clsJxTeachPlanKnowledgeENEx } from "@/ts/L0Entity/TeachingPlan/clsJxTeachPlanKnowledgeENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortJxTeachPlanKnowledgeBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortJxTeachPlanKnowledgeBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdTeachingPlan_Static = ref("");//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refJxTeachPlanKnowledge_Detail = ref ();
const refJxTeachPlanKnowledge_Edit = ref ();
const refJxTeachPlanKnowledge_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refJxTeachPlanKnowledge_Detail,
refJxTeachPlanKnowledge_Edit,
refJxTeachPlanKnowledge_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refJxTeachPlanKnowledge_Detail,
refJxTeachPlanKnowledge_Edit,
refJxTeachPlanKnowledge_List, };

export const showErrorMessage = ref (false);
export const dataListJxTeachPlanKnowledge = ref<Array<clsJxTeachPlanKnowledgeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const jxTeachPlanKnowledgeCache: { [key: string]: clsJxTeachPlanKnowledgeENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const idTeachingPlan_q = ref('');
export const courseKnowledgeId_q = ref('');
export const teachingMethodId_q = ref('');
export const assessmentMethodId_q = ref('');
const qryVarSet = reactive({
 idTeachingPlan_q,
 courseKnowledgeId_q,
 teachingMethodId_q,
 assessmentMethodId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineJxTeachPlanKnowledgeCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( idTeachingPlan_q.value != "" && idTeachingPlan_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan, idTeachingPlan_q.value);
}
if ( courseKnowledgeId_q.value != "" && courseKnowledgeId_q.value != "0")
{
strWhereCond += Format(" And JxTeachPlanKnowledge.{0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId, courseKnowledgeId_q.value);
}
if ( teachingMethodId_q.value != "" && teachingMethodId_q.value != "0")
{
strWhereCond += Format(" And JxTeachPlanKnowledge.{0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_TeachingMethodId, teachingMethodId_q.value);
}
if ( assessmentMethodId_q.value != "" && assessmentMethodId_q.value != "0")
{
strWhereCond += Format(" And JxTeachPlanKnowledge.{0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId, assessmentMethodId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineJxTeachPlanKnowledgeCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineJxTeachPlanKnowledgeConditionObj=async (): Promise<clsJxTeachPlanKnowledgeEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objJxTeachPlanKnowledgeCond = new clsJxTeachPlanKnowledgeEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idTeachingPlan_q.value != "" && idTeachingPlan_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan, idTeachingPlan_q.value);
objJxTeachPlanKnowledgeCond.SetCondFldValue(clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan, idTeachingPlan_q.value, "=");
}
if ( courseKnowledgeId_q.value != "" && courseKnowledgeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId, courseKnowledgeId_q.value);
objJxTeachPlanKnowledgeCond.SetCondFldValue(clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId, courseKnowledgeId_q.value, "=");
}
if ( teachingMethodId_q.value != "" && teachingMethodId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_TeachingMethodId, teachingMethodId_q.value);
objJxTeachPlanKnowledgeCond.SetCondFldValue(clsJxTeachPlanKnowledgeEN.con_TeachingMethodId, teachingMethodId_q.value, "=");
}
if ( assessmentMethodId_q.value != "" && assessmentMethodId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId, assessmentMethodId_q.value);
objJxTeachPlanKnowledgeCond.SetCondFldValue(clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId, assessmentMethodId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineJxTeachPlanKnowledgeConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objJxTeachPlanKnowledgeCond.whereCond = strWhereCond;
return objJxTeachPlanKnowledgeCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineJxTeachPlanKnowledgeConditionObj4ExportExcel = async ():Promise<clsJxTeachPlanKnowledgeEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objJxTeachPlanKnowledgeCond = new clsJxTeachPlanKnowledgeENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idTeachingPlan_q.value != "" && idTeachingPlan_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan, idTeachingPlan_q.value);
objJxTeachPlanKnowledgeCond.SetCondFldValue(clsJxTeachPlanKnowledgeEN.con_IdTeachingPlan, idTeachingPlan_q.value, "=");
}
if ( courseKnowledgeId_q.value != "" && courseKnowledgeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId, courseKnowledgeId_q.value);
objJxTeachPlanKnowledgeCond.SetCondFldValue(clsJxTeachPlanKnowledgeEN.con_CourseKnowledgeId, courseKnowledgeId_q.value, "=");
}
if ( teachingMethodId_q.value != "" && teachingMethodId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_TeachingMethodId, teachingMethodId_q.value);
objJxTeachPlanKnowledgeCond.SetCondFldValue(clsJxTeachPlanKnowledgeEN.con_TeachingMethodId, teachingMethodId_q.value, "=");
}
if ( assessmentMethodId_q.value != "" && assessmentMethodId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId, assessmentMethodId_q.value);
objJxTeachPlanKnowledgeCond.SetCondFldValue(clsJxTeachPlanKnowledgeEN.con_AssessmentMethodId, assessmentMethodId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineJxTeachPlanKnowledgeConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objJxTeachPlanKnowledgeCond.whereCond = strWhereCond;
return objJxTeachPlanKnowledgeCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsJxTeachPlanKnowledgeENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListJxTeachPlanKnowledge.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refJxTeachPlanKnowledge_List.value != null) refJxTeachPlanKnowledge_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function JxTeachPlanKnowledge_DeleteKeyIdCache( strIdTeachPlanKnowledge:string):void
{


if (
IsNullOrEmpty(strIdTeachPlanKnowledge) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdTeachPlanKnowledge }`;
delete jxTeachPlanKnowledgeCache[cacheKey];
return;
}
}