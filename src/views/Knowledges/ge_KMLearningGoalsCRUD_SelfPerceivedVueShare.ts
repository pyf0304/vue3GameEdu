
 /**
 * 类名:ge_KMLearningGoalsVueShare(界面:ge_KMLearningGoalsCRUD,01120249)
 * 表名:ge_KMLearningGoals(01120960)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 10:41:17
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
import { Format } from "@/ts/PubFun/clsString"
import { clsge_KMLearningGoalsEN } from "@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsEN";
import { clsge_KMLearningGoalsENEx } from "@/ts/L0Entity/Knowledges/clsge_KMLearningGoalsENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_KMLearningGoalsBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_KMLearningGoalsBy,
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
const refge_KMLearningGoals_Edit = ref ();
const refge_KMLearningGoals_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_KMLearningGoals_Edit,
refge_KMLearningGoals_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_KMLearningGoals_Edit,
refge_KMLearningGoals_List, };

export const showErrorMessage = ref (false);
export const dataListge_KMLearningGoals = ref<Array<clsge_KMLearningGoalsENEx>>([]);
export const emptyRecNumInfo = ref ('');

//查询区变量定义
export const userId_q = ref('');
export const knowledgeModuleId_q = ref('');
export const courseId_q = ref('');
const qryVarSet = reactive({
 userId_q,
 knowledgeModuleId_q,
 courseId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_KMLearningGoalsCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_KMLearningGoalsEN.con_UserId, userId_q.value);
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_KMLearningGoalsEN.con_KnowledgeModuleId, knowledgeModuleId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_KMLearningGoalsCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_KMLearningGoalsConditionObj=async (): Promise<clsge_KMLearningGoalsEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_KMLearningGoalsCond = new clsge_KMLearningGoalsEN();
let strWhereCond = " 1 = 1 ";
objge_KMLearningGoalsCond.SetCondFldValue(clsge_KMLearningGoalsEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_KMLearningGoalsEN.con_UserId, userId_q.value);
objge_KMLearningGoalsCond.SetCondFldValue(clsge_KMLearningGoalsEN.con_UserId, userId_q.value, "=");
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_KMLearningGoalsEN.con_KnowledgeModuleId, knowledgeModuleId_q.value);
objge_KMLearningGoalsCond.SetCondFldValue(clsge_KMLearningGoalsEN.con_KnowledgeModuleId, knowledgeModuleId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_KMLearningGoalsConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_KMLearningGoalsCond.whereCond = strWhereCond;
return objge_KMLearningGoalsCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_KMLearningGoalsConditionObj4ExportExcel = async ():Promise<clsge_KMLearningGoalsEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_KMLearningGoalsCond = new clsge_KMLearningGoalsENEx();
let strWhereCond = " 1 = 1 ";
objge_KMLearningGoalsCond.SetCondFldValue(clsge_KMLearningGoalsEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_KMLearningGoalsEN.con_UserId, userId_q.value);
objge_KMLearningGoalsCond.SetCondFldValue(clsge_KMLearningGoalsEN.con_UserId, userId_q.value, "=");
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_KMLearningGoalsEN.con_KnowledgeModuleId, knowledgeModuleId_q.value);
objge_KMLearningGoalsCond.SetCondFldValue(clsge_KMLearningGoalsEN.con_KnowledgeModuleId, knowledgeModuleId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_KMLearningGoalsConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_KMLearningGoalsCond.whereCond = strWhereCond;
return objge_KMLearningGoalsCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_KMLearningGoalsENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_KMLearningGoals.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
};