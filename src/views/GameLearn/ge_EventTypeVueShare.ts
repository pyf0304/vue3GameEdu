
 /**
 * 类名:ge_EventTypeVueShare(界面:ge_EventTypeCRUD,01120223)
 * 表名:ge_EventType(01120899)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:54
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
import { clsge_EventTypeEN } from "@/ts/L0Entity/GameLearn/clsge_EventTypeEN";
import { clsge_EventTypeENEx } from "@/ts/L0Entity/GameLearn/clsge_EventTypeENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_EventTypeBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_EventTypeBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refge_EventType_Edit = ref ();
const refge_EventType_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_EventType_Edit,
refge_EventType_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_EventType_Edit,
refge_EventType_List, };

export const showErrorMessage = ref (false);
export const dataListge_EventType = ref<Array<clsge_EventTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_EventTypeCache: { [key: string]: clsge_EventTypeENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const eventTypeName_q = ref('');
const qryVarSet = reactive({
 eventTypeName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_EventTypeCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( eventTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_EventTypeEN.con_EventTypeName, eventTypeName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_EventTypeCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_EventTypeConditionObj=async (): Promise<clsge_EventTypeEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_EventTypeCond = new clsge_EventTypeEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( eventTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_EventTypeEN.con_EventTypeName, eventTypeName_q.value);
objge_EventTypeCond.SetCondFldValue(clsge_EventTypeEN.con_EventTypeName, eventTypeName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_EventTypeConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_EventTypeCond.whereCond = strWhereCond;
return objge_EventTypeCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_EventTypeConditionObj4ExportExcel = async ():Promise<clsge_EventTypeEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_EventTypeCond = new clsge_EventTypeENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( eventTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_EventTypeEN.con_EventTypeName, eventTypeName_q.value);
objge_EventTypeCond.SetCondFldValue(clsge_EventTypeEN.con_EventTypeName, eventTypeName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_EventTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_EventTypeCond.whereCond = strWhereCond;
return objge_EventTypeCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_EventTypeENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_EventType.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_EventType_List.value != null) refge_EventType_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_EventType_DeleteKeyIdCache( strEventTypeId:string):void
{


if (
IsNullOrEmpty(strEventTypeId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strEventTypeId }`;
delete ge_EventTypeCache[cacheKey];
return;
}
}