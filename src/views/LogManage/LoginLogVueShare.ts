
 /**
 * 类名:LoginLogVueShare(界面:LoginLogCRUD,01120242)
 * 表名:LoginLog(01120357)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:04
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日志管理(LogManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsLoginLogEN } from "@/ts/L0Entity/LogManage/clsLoginLogEN";
import { clsLoginLogENEx } from "@/ts/L0Entity/LogManage/clsLoginLogENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortLoginLogBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortLoginLogBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refLoginLog_Detail = ref ();
const refLoginLog_Edit = ref ();
const refLoginLog_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refLoginLog_Detail,
refLoginLog_Edit,
refLoginLog_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refLoginLog_Detail,
refLoginLog_Edit,
refLoginLog_List, };

export const showErrorMessage = ref (false);
export const dataListLoginLog = ref<Array<clsLoginLogENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const loginLogCache: { [key: string]: clsLoginLogENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const loginLogNumber_q = ref('');
export const loginIP_q = ref('');
export const failReason_q = ref('');
export const loginResult_q = ref('');
export const loginTime_q = ref('');
export const loginUserId_q = ref('');
export const onlineTime_q = ref('');
export const outTime_q = ref('');
const qryVarSet = reactive({
 loginLogNumber_q,
 loginIP_q,
 failReason_q,
 loginResult_q,
 loginTime_q,
 loginUserId_q,
 onlineTime_q,
 outTime_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineLoginLogCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( loginLogNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value);
}
if ( loginIP_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginIP, loginIP_q.value);
}
if ( failReason_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_FailReason, failReason_q.value);
}
if ( loginResult_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginResult, loginResult_q.value);
}
if ( loginTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginTime, loginTime_q.value);
}
if ( loginUserId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginUserId, loginUserId_q.value);
}
if ( onlineTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_OnlineTime, onlineTime_q.value);
}
if ( outTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_OutTime, outTime_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineLoginLogCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineLoginLogConditionObj=async (): Promise<clsLoginLogEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objLoginLogCond = new clsLoginLogEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( loginLogNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value, "like");
}
if ( loginIP_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginIP, loginIP_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginIP, loginIP_q.value, "like");
}
if ( failReason_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_FailReason, failReason_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_FailReason, failReason_q.value, "like");
}
if ( loginResult_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginResult, loginResult_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginResult, loginResult_q.value, "like");
}
if ( loginTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginTime, loginTime_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginTime, loginTime_q.value, "like");
}
if ( loginUserId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginUserId, loginUserId_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginUserId, loginUserId_q.value, "like");
}
if ( onlineTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_OnlineTime, onlineTime_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_OnlineTime, onlineTime_q.value, "like");
}
if ( outTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_OutTime, outTime_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_OutTime, outTime_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineLoginLogConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objLoginLogCond.whereCond = strWhereCond;
return objLoginLogCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineLoginLogConditionObj4ExportExcel = async ():Promise<clsLoginLogEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objLoginLogCond = new clsLoginLogENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( loginLogNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value, "like");
}
if ( loginIP_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginIP, loginIP_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginIP, loginIP_q.value, "like");
}
if ( failReason_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_FailReason, failReason_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_FailReason, failReason_q.value, "like");
}
if ( loginResult_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginResult, loginResult_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginResult, loginResult_q.value, "like");
}
if ( loginTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginTime, loginTime_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginTime, loginTime_q.value, "like");
}
if ( loginUserId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_LoginUserId, loginUserId_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginUserId, loginUserId_q.value, "like");
}
if ( onlineTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_OnlineTime, onlineTime_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_OnlineTime, onlineTime_q.value, "like");
}
if ( outTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsLoginLogEN.con_OutTime, outTime_q.value);
objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_OutTime, outTime_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineLoginLogConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objLoginLogCond.whereCond = strWhereCond;
return objLoginLogCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsLoginLogENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListLoginLog.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refLoginLog_List.value != null) refLoginLog_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function LoginLog_DeleteKeyIdCache( lngLoginLogId:number):void
{


if (
lngLoginLogId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngLoginLogId }`;
delete loginLogCache[cacheKey];
return;
}
}