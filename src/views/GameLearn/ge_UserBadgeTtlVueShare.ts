
 /**
 * 类名:ge_UserBadgeTtlVueShare(界面:ge_UserBadgeTtlCRUD,01120208)
 * 表名:ge_UserBadgeTtl(01120882)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:17
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
import { clsge_UserBadgeTtlEN } from "@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlEN";
import { clsge_UserBadgeTtlENEx } from "@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_UserBadgeTtlBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_UserBadgeTtlBy,
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
const refge_UserBadgeTtl_Edit = ref ();
const refge_UserBadgeTtl_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_UserBadgeTtl_Edit,
refge_UserBadgeTtl_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_UserBadgeTtl_Edit,
refge_UserBadgeTtl_List, };

export const showErrorMessage = ref (false);
export const dataListge_UserBadgeTtl = ref<Array<clsge_UserBadgeTtlENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_UserBadgeTtlCache: { [key: string]: clsge_UserBadgeTtlENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const userId_q = ref('');
export const badgeTypeId_q = ref('');
export const courseId_q = ref('');
const qryVarSet = reactive({
 userId_q,
 badgeTypeId_q,
 courseId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_UserBadgeTtlCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" And  IdCurrEduCls in (Select IdCurrEduCls from CurrEduCls where CourseId = '{0}')", CourseId_Session.value);
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserBadgeTtlEN.con_UserId, userId_q.value);
}
if ( badgeTypeId_q.value != "" && badgeTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserBadgeTtlEN.con_BadgeTypeId, badgeTypeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_UserBadgeTtlCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserBadgeTtlConditionObj=async (): Promise<clsge_UserBadgeTtlEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_UserBadgeTtlCond = new clsge_UserBadgeTtlEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserBadgeTtlEN.con_UserId, userId_q.value);
objge_UserBadgeTtlCond.SetCondFldValue(clsge_UserBadgeTtlEN.con_UserId, userId_q.value, "=");
}
if ( badgeTypeId_q.value != "" && badgeTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserBadgeTtlEN.con_BadgeTypeId, badgeTypeId_q.value);
objge_UserBadgeTtlCond.SetCondFldValue(clsge_UserBadgeTtlEN.con_BadgeTypeId, badgeTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_UserBadgeTtlConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_UserBadgeTtlCond.whereCond = strWhereCond;
return objge_UserBadgeTtlCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserBadgeTtlConditionObj4ExportExcel = async ():Promise<clsge_UserBadgeTtlEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_UserBadgeTtlCond = new clsge_UserBadgeTtlENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserBadgeTtlEN.con_UserId, userId_q.value);
objge_UserBadgeTtlCond.SetCondFldValue(clsge_UserBadgeTtlEN.con_UserId, userId_q.value, "=");
}
if ( badgeTypeId_q.value != "" && badgeTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserBadgeTtlEN.con_BadgeTypeId, badgeTypeId_q.value);
objge_UserBadgeTtlCond.SetCondFldValue(clsge_UserBadgeTtlEN.con_BadgeTypeId, badgeTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_UserBadgeTtlConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_UserBadgeTtlCond.whereCond = strWhereCond;
return objge_UserBadgeTtlCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_UserBadgeTtlENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_UserBadgeTtl.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_UserBadgeTtl_List.value != null) refge_UserBadgeTtl_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_UserBadgeTtl_DeleteKeyIdCache( lngmId:number):void
{


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }`;
delete ge_UserBadgeTtlCache[cacheKey];
return;
}
}