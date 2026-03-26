
 /**
 * 类名:JxTeachingPlanVueShare(界面:JxTeachingPlanCRUD,01120253)
 * 表名:JxTeachingPlan(01120968)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:44
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
import { clsJxTeachingPlanEN } from "@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanEN";
import { clsJxTeachingPlanENEx } from "@/ts/L0Entity/TeachingPlan/clsJxTeachingPlanENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortJxTeachingPlanBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortJxTeachingPlanBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refJxTeachingPlan_Detail = ref ();
const refJxTeachingPlan_Edit = ref ();
const refJxTeachingPlan_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refJxTeachingPlan_Detail,
refJxTeachingPlan_Edit,
refJxTeachingPlan_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refJxTeachingPlan_Detail,
refJxTeachingPlan_Edit,
refJxTeachingPlan_List, };

export const showErrorMessage = ref (false);
export const dataListJxTeachingPlan = ref<Array<clsJxTeachingPlanENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const jxTeachingPlanCache: { [key: string]: clsJxTeachingPlanENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const teachingPlanId_q = ref('');
export const teachingPlanDesc_q = ref('');
export const idGrade_q = ref('');
export const schoolTerm_q = ref('');
export const courseId_q = ref('');
export const idSubmitStatus_q = ref('');
const qryVarSet = reactive({
 teachingPlanId_q,
 teachingPlanDesc_q,
 idGrade_q,
 schoolTerm_q,
 courseId_q,
 idSubmitStatus_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineJxTeachingPlanCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( teachingPlanId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsJxTeachingPlanEN.con_TeachingPlanId, teachingPlanId_q.value);
}
if ( teachingPlanDesc_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsJxTeachingPlanEN.con_TeachingPlanDesc, teachingPlanDesc_q.value);
}
if ( idGrade_q.value != "" && idGrade_q.value != "0")
{
strWhereCond += Format(" And JxTeachingPlan.{0} = '{1}'", clsJxTeachingPlanEN.con_IdGrade, idGrade_q.value);
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And JxTeachingPlan.{0} = '{1}'", clsJxTeachingPlanEN.con_SchoolTerm, schoolTerm_q.value);
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And JxTeachingPlan.{0} = '{1}'", clsJxTeachingPlanEN.con_CourseId, courseId_q.value);
}
if ( idSubmitStatus_q.value != "" && idSubmitStatus_q.value != "0")
{
strWhereCond += Format(" And JxTeachingPlan.{0} = '{1}'", clsJxTeachingPlanEN.con_IdSubmitStatus, idSubmitStatus_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineJxTeachingPlanCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineJxTeachingPlanConditionObj=async (): Promise<clsJxTeachingPlanEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objJxTeachingPlanCond = new clsJxTeachingPlanEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( teachingPlanId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsJxTeachingPlanEN.con_TeachingPlanId, teachingPlanId_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_TeachingPlanId, teachingPlanId_q.value, "like");
}
if ( teachingPlanDesc_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsJxTeachingPlanEN.con_TeachingPlanDesc, teachingPlanDesc_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_TeachingPlanDesc, teachingPlanDesc_q.value, "like");
}
if ( idGrade_q.value != "" && idGrade_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachingPlanEN.con_IdGrade, idGrade_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_IdGrade, idGrade_q.value, "=");
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachingPlanEN.con_SchoolTerm, schoolTerm_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_SchoolTerm, schoolTerm_q.value, "=");
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachingPlanEN.con_CourseId, courseId_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_CourseId, courseId_q.value, "=");
}
if ( idSubmitStatus_q.value != "" && idSubmitStatus_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachingPlanEN.con_IdSubmitStatus, idSubmitStatus_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_IdSubmitStatus, idSubmitStatus_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineJxTeachingPlanConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objJxTeachingPlanCond.whereCond = strWhereCond;
return objJxTeachingPlanCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineJxTeachingPlanConditionObj4ExportExcel = async ():Promise<clsJxTeachingPlanEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objJxTeachingPlanCond = new clsJxTeachingPlanENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( teachingPlanId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsJxTeachingPlanEN.con_TeachingPlanId, teachingPlanId_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_TeachingPlanId, teachingPlanId_q.value, "like");
}
if ( teachingPlanDesc_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsJxTeachingPlanEN.con_TeachingPlanDesc, teachingPlanDesc_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_TeachingPlanDesc, teachingPlanDesc_q.value, "like");
}
if ( idGrade_q.value != "" && idGrade_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachingPlanEN.con_IdGrade, idGrade_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_IdGrade, idGrade_q.value, "=");
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachingPlanEN.con_SchoolTerm, schoolTerm_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_SchoolTerm, schoolTerm_q.value, "=");
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachingPlanEN.con_CourseId, courseId_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_CourseId, courseId_q.value, "=");
}
if ( idSubmitStatus_q.value != "" && idSubmitStatus_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsJxTeachingPlanEN.con_IdSubmitStatus, idSubmitStatus_q.value);
objJxTeachingPlanCond.SetCondFldValue(clsJxTeachingPlanEN.con_IdSubmitStatus, idSubmitStatus_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineJxTeachingPlanConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objJxTeachingPlanCond.whereCond = strWhereCond;
return objJxTeachingPlanCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsJxTeachingPlanENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListJxTeachingPlan.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refJxTeachingPlan_List.value != null) refJxTeachingPlan_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function JxTeachingPlan_DeleteKeyIdCache( strIdTeachingPlan:string):void
{


if (
IsNullOrEmpty(strIdTeachingPlan) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdTeachingPlan }`;
delete jxTeachingPlanCache[cacheKey];
return;
}
}