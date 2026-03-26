
 /**
 * 类名:MessagePushVueShare(界面:MessagePushCRUD,01120240)
 * 表名:MessagePush(01120280)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:43
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsMessagePushEN } from "@/ts/L0Entity/NewsAnn/clsMessagePushEN";
import { clsMessagePushENEx } from "@/ts/L0Entity/NewsAnn/clsMessagePushENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortMessagePushBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortMessagePushBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refMessagePush_Detail = ref ();
const refMessagePush_Edit = ref ();
const refMessagePush_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refMessagePush_Detail,
refMessagePush_Edit,
refMessagePush_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refMessagePush_Detail,
refMessagePush_Edit,
refMessagePush_List, };

export const showErrorMessage = ref (false);
export const dataListMessagePush = ref<Array<clsMessagePushENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const messagePushCache: { [key: string]: clsMessagePushENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const messagePushId_q = ref('');
export const messagePushNumber_q = ref('');
export const messageTitle_q = ref('');
export const messageContent_q = ref('');
export const receivePeople_q = ref('');
export const messageTypeId_q = ref('');
export const isAllpush_q = ref('0')
export const isReceive_q = ref('0')
export const clientVersionTypeId_q = ref('');
const qryVarSet = reactive({
 messagePushId_q,
 messagePushNumber_q,
 messageTitle_q,
 messageContent_q,
 receivePeople_q,
 messageTypeId_q,
 isAllpush_q,
 isReceive_q,
 clientVersionTypeId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineMessagePushCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( messagePushId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessagePushId, messagePushId_q.value);
}
if ( messagePushNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessagePushNumber, messagePushNumber_q.value);
}
if ( messageTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageTitle, messageTitle_q.value);
}
if ( messageContent_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageContent, messageContent_q.value);
}
if ( receivePeople_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_ReceivePeople, receivePeople_q.value);
}
if ( messageTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageTypeId, messageTypeId_q.value);
}
if (isAllpush_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsAllpush);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsAllpush);
}
if (isReceive_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsReceive);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsReceive);
}
if ( clientVersionTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_ClientVersionTypeId, clientVersionTypeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineMessagePushCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineMessagePushConditionObj=async (): Promise<clsMessagePushEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objMessagePushCond = new clsMessagePushEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( messagePushId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessagePushId, messagePushId_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessagePushId, messagePushId_q.value, "like");
}
if ( messagePushNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessagePushNumber, messagePushNumber_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessagePushNumber, messagePushNumber_q.value, "like");
}
if ( messageTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageTitle, messageTitle_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessageTitle, messageTitle_q.value, "like");
}
if ( messageContent_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageContent, messageContent_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessageContent, messageContent_q.value, "like");
}
if ( receivePeople_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_ReceivePeople, receivePeople_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_ReceivePeople, receivePeople_q.value, "like");
}
if ( messageTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageTypeId, messageTypeId_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessageTypeId, messageTypeId_q.value, "like");
}
if (isAllpush_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsAllpush);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsAllpush, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsAllpush);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsAllpush, false, "=");
}
if (isReceive_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsReceive);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsReceive, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsReceive);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsReceive, false, "=");
}
if ( clientVersionTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_ClientVersionTypeId, clientVersionTypeId_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_ClientVersionTypeId, clientVersionTypeId_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineMessagePushConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objMessagePushCond.whereCond = strWhereCond;
return objMessagePushCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineMessagePushConditionObj4ExportExcel = async ():Promise<clsMessagePushEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objMessagePushCond = new clsMessagePushENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( messagePushId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessagePushId, messagePushId_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessagePushId, messagePushId_q.value, "like");
}
if ( messagePushNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessagePushNumber, messagePushNumber_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessagePushNumber, messagePushNumber_q.value, "like");
}
if ( messageTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageTitle, messageTitle_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessageTitle, messageTitle_q.value, "like");
}
if ( messageContent_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageContent, messageContent_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessageContent, messageContent_q.value, "like");
}
if ( receivePeople_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_ReceivePeople, receivePeople_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_ReceivePeople, receivePeople_q.value, "like");
}
if ( messageTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_MessageTypeId, messageTypeId_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_MessageTypeId, messageTypeId_q.value, "like");
}
if (isAllpush_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsAllpush);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsAllpush, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsAllpush);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsAllpush, false, "=");
}
if (isReceive_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsReceive);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsReceive, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsReceive);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsReceive, false, "=");
}
if ( clientVersionTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsMessagePushEN.con_ClientVersionTypeId, clientVersionTypeId_q.value);
objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_ClientVersionTypeId, clientVersionTypeId_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineMessagePushConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objMessagePushCond.whereCond = strWhereCond;
return objMessagePushCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsMessagePushENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListMessagePush.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refMessagePush_List.value != null) refMessagePush_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function MessagePush_DeleteKeyIdCache( strMessagePushId:string):void
{


if (
IsNullOrEmpty(strMessagePushId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strMessagePushId }`;
delete messagePushCache[cacheKey];
return;
}
}