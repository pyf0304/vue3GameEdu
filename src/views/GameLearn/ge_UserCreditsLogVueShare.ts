
 /**
 * 类名:ge_UserCreditsLogVueShare(界面:ge_UserCreditsLogCRUD,01120209)
 * 表名:ge_UserCreditsLog(01120883)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:47
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
import { clsge_UserCreditsLogEN } from "@/ts/L0Entity/GameLearn/clsge_UserCreditsLogEN";
import { clsge_UserCreditsLogENEx } from "@/ts/L0Entity/GameLearn/clsge_UserCreditsLogENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_UserCreditsLogBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_UserCreditsLogBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdCurrEduCls_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refge_UserCreditsLog_Detail = ref ();
const refge_UserCreditsLog_Edit = ref ();
const refge_UserCreditsLog_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_UserCreditsLog_Detail,
refge_UserCreditsLog_Edit,
refge_UserCreditsLog_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_UserCreditsLog_Detail,
refge_UserCreditsLog_Edit,
refge_UserCreditsLog_List, };

export const showErrorMessage = ref (false);
export const dataListge_UserCreditsLog = ref<Array<clsge_UserCreditsLogENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_UserCreditsLogCache: { [key: string]: clsge_UserCreditsLogENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const userId_q = ref('');
export const examBatchNo_q = ref('');
export const passed_q = ref('0')
export const isSubmit_q = ref('0')
export const idCurrEduCls_q = ref('');
export const courseId_q = ref('');
const qryVarSet = reactive({
 userId_q,
 examBatchNo_q,
 passed_q,
 isSubmit_q,
 idCurrEduCls_q,
 courseId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_UserCreditsLogCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and IdCurrEduCls ='{0}'", IdCurrEduCls_Session.value);
strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserCreditsLogEN.con_UserId, userId_q.value);
}
if ( examBatchNo_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_UserCreditsLogEN.con_ExamBatchNo, examBatchNo_q.value);
}
if (passed_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserCreditsLogEN.con_Passed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserCreditsLogEN.con_Passed);
}
if (isSubmit_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserCreditsLogEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserCreditsLogEN.con_IsSubmit);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_UserCreditsLogCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserCreditsLogConditionObj=async (): Promise<clsge_UserCreditsLogEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_UserCreditsLogCond = new clsge_UserCreditsLogEN();
let strWhereCond = " 1 = 1 ";
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserCreditsLogEN.con_UserId, userId_q.value);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_UserId, userId_q.value, "=");
}
if ( examBatchNo_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_UserCreditsLogEN.con_ExamBatchNo, examBatchNo_q.value);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_ExamBatchNo, examBatchNo_q.value, "like");
}
if (passed_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserCreditsLogEN.con_Passed);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_Passed, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserCreditsLogEN.con_Passed);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_Passed, false, "=");
}
if (isSubmit_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserCreditsLogEN.con_IsSubmit);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_IsSubmit, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserCreditsLogEN.con_IsSubmit);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_IsSubmit, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_UserCreditsLogConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_UserCreditsLogCond.whereCond = strWhereCond;
return objge_UserCreditsLogCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserCreditsLogConditionObj4ExportExcel = async ():Promise<clsge_UserCreditsLogEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_UserCreditsLogCond = new clsge_UserCreditsLogENEx();
let strWhereCond = " 1 = 1 ";
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserCreditsLogEN.con_UserId, userId_q.value);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_UserId, userId_q.value, "=");
}
if ( examBatchNo_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_UserCreditsLogEN.con_ExamBatchNo, examBatchNo_q.value);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_ExamBatchNo, examBatchNo_q.value, "like");
}
if (passed_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserCreditsLogEN.con_Passed);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_Passed, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserCreditsLogEN.con_Passed);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_Passed, false, "=");
}
if (isSubmit_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserCreditsLogEN.con_IsSubmit);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_IsSubmit, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_UserCreditsLogEN.con_IsSubmit);
objge_UserCreditsLogCond.SetCondFldValue(clsge_UserCreditsLogEN.con_IsSubmit, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_UserCreditsLogConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_UserCreditsLogCond.whereCond = strWhereCond;
return objge_UserCreditsLogCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_UserCreditsLogENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_UserCreditsLog.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_UserCreditsLog_List.value != null) refge_UserCreditsLog_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_UserCreditsLog_DeleteKeyIdCache(strIdCurrEduCls: string,  lngmId:number):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In ge_UserCreditsLogVueShare..DeleteKeyIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(ge_UserCreditsLogVueShare..DeleteKeyIdCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strIdCurrEduCls }`;
delete ge_UserCreditsLogCache[cacheKey];
return;
}
}