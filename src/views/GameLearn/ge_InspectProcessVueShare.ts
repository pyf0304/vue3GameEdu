
 /**
 * 类名:ge_InspectProcessVueShare(界面:ge_InspectProcessCRUD,01120226)
 * 表名:ge_InspectProcess(01120910)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:08
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsge_InspectProcessEN } from "@/ts/L0Entity/GameLearn/clsge_InspectProcessEN";
import { clsge_InspectProcessENEx } from "@/ts/L0Entity/GameLearn/clsge_InspectProcessENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_InspectProcessBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_InspectProcessBy,
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
const refge_InspectProcess_Edit = ref ();
const refge_InspectProcess_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_InspectProcess_Edit,
refge_InspectProcess_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_InspectProcess_Edit,
refge_InspectProcess_List, };

export const showErrorMessage = ref (false);
export const dataListge_InspectProcess = ref<Array<clsge_InspectProcessENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_InspectProcessCache: { [key: string]: clsge_InspectProcessENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseId_q = ref('');
const qryVarSet = reactive({
 courseId_q,});
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
export const  Combinege_InspectProcessCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
try
{

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_InspectProcessCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_InspectProcessConditionObj=async (): Promise<clsge_InspectProcessEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_InspectProcessCond = new clsge_InspectProcessEN();
let strWhereCond = " 1 = 1 ";
objge_InspectProcessCond.SetCondFldValue(clsge_InspectProcessEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_InspectProcessConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_InspectProcessCond.whereCond = strWhereCond;
return objge_InspectProcessCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_InspectProcessConditionObj4ExportExcel = async ():Promise<clsge_InspectProcessEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_InspectProcessCond = new clsge_InspectProcessENEx();
let strWhereCond = " 1 = 1 ";
objge_InspectProcessCond.SetCondFldValue(clsge_InspectProcessEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_InspectProcessConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_InspectProcessCond.whereCond = strWhereCond;
return objge_InspectProcessCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_InspectProcessENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_InspectProcess.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_InspectProcess_List.value != null) refge_InspectProcess_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_InspectProcess_DeleteKeyIdCache( strInspectId:string):void
{


if (
IsNullOrEmpty(strInspectId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strInspectId }`;
delete ge_InspectProcessCache[cacheKey];
return;
}
}