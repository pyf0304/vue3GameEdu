
 /**
 * 类名:gs_ReflectLogVueShare(界面:gs_ReflectLogCRUD,01120143)
 * 表名:gs_ReflectLog(01120702)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:56
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsgs_ReflectLogEN } from "@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN";
import { clsgs_ReflectLogENEx } from "@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortgs_ReflectLogBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortgs_ReflectLogBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const IdCurrEduCls_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const TopicId_Main_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refgs_ReflectLog_Detail = ref ();
const refgs_ReflectLog_Edit = ref ();
const refgs_ReflectLog_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refgs_ReflectLog_Detail,
refgs_ReflectLog_Edit,
refgs_ReflectLog_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refgs_ReflectLog_Detail,
refgs_ReflectLog_Edit,
refgs_ReflectLog_List, };

export const showErrorMessage = ref (false);
export const dataListgs_ReflectLog = ref<Array<clsgs_ReflectLogENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const gs_ReflectLogCache: { [key: string]: clsgs_ReflectLogENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const userId_q = ref('');
export const reflectLogName_q = ref('');
export const idCurrEduCls_q = ref('');
const qryVarSet = reactive({
 userId_q,
 reflectLogName_q,
 idCurrEduCls_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinegs_ReflectLogCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and IdCurrEduCls ='{0}'", IdCurrEduCls_Session.value);
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_ReflectLogEN.con_UserId, userId_q.value);
}
if ( reflectLogName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_ReflectLogEN.con_ReflectLogName, reflectLogName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinegs_ReflectLogCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_ReflectLogConditionObj=async (): Promise<clsgs_ReflectLogEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_ReflectLogCond = new clsgs_ReflectLogEN();
let strWhereCond = " 1 = 1 ";
objgs_ReflectLogCond.SetCondFldValue(clsgs_ReflectLogEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_ReflectLogEN.con_UserId, userId_q.value);
objgs_ReflectLogCond.SetCondFldValue(clsgs_ReflectLogEN.con_UserId, userId_q.value, "like");
}
if ( reflectLogName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_ReflectLogEN.con_ReflectLogName, reflectLogName_q.value);
objgs_ReflectLogCond.SetCondFldValue(clsgs_ReflectLogEN.con_ReflectLogName, reflectLogName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinegs_ReflectLogConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_ReflectLogCond.whereCond = strWhereCond;
return objgs_ReflectLogCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_ReflectLogConditionObj4ExportExcel = async ():Promise<clsgs_ReflectLogEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_ReflectLogCond = new clsgs_ReflectLogENEx();
let strWhereCond = " 1 = 1 ";
objgs_ReflectLogCond.SetCondFldValue(clsgs_ReflectLogEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_ReflectLogEN.con_UserId, userId_q.value);
objgs_ReflectLogCond.SetCondFldValue(clsgs_ReflectLogEN.con_UserId, userId_q.value, "like");
}
if ( reflectLogName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_ReflectLogEN.con_ReflectLogName, reflectLogName_q.value);
objgs_ReflectLogCond.SetCondFldValue(clsgs_ReflectLogEN.con_ReflectLogName, reflectLogName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinegs_ReflectLogConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_ReflectLogCond.whereCond = strWhereCond;
return objgs_ReflectLogCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsgs_ReflectLogENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListgs_ReflectLog.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refgs_ReflectLog_List.value != null) refgs_ReflectLog_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function gs_ReflectLog_DeleteKeyIdCache( lngmId:number):void
{


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }`;
delete gs_ReflectLogCache[cacheKey];
return;
}
}