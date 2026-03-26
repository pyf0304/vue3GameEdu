
 /**
 * 类名:ge_ControlTypeVueShare(界面:ge_ControlTypeCRUD,01120222)
 * 表名:ge_ControlType(01120900)
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
import { clsge_ControlTypeEN } from "@/ts/L0Entity/GameLearn/clsge_ControlTypeEN";
import { clsge_ControlTypeENEx } from "@/ts/L0Entity/GameLearn/clsge_ControlTypeENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_ControlTypeBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_ControlTypeBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refge_ControlType_Edit = ref ();
const refge_ControlType_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_ControlType_Edit,
refge_ControlType_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_ControlType_Edit,
refge_ControlType_List, };

export const showErrorMessage = ref (false);
export const dataListge_ControlType = ref<Array<clsge_ControlTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_ControlTypeCache: { [key: string]: clsge_ControlTypeENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const controlTypeName_q = ref('');
const qryVarSet = reactive({
 controlTypeName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_ControlTypeCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( controlTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlTypeEN.con_ControlTypeName, controlTypeName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_ControlTypeCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_ControlTypeConditionObj=async (): Promise<clsge_ControlTypeEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_ControlTypeCond = new clsge_ControlTypeEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( controlTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlTypeEN.con_ControlTypeName, controlTypeName_q.value);
objge_ControlTypeCond.SetCondFldValue(clsge_ControlTypeEN.con_ControlTypeName, controlTypeName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_ControlTypeConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_ControlTypeCond.whereCond = strWhereCond;
return objge_ControlTypeCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_ControlTypeConditionObj4ExportExcel = async ():Promise<clsge_ControlTypeEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_ControlTypeCond = new clsge_ControlTypeENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( controlTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlTypeEN.con_ControlTypeName, controlTypeName_q.value);
objge_ControlTypeCond.SetCondFldValue(clsge_ControlTypeEN.con_ControlTypeName, controlTypeName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_ControlTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_ControlTypeCond.whereCond = strWhereCond;
return objge_ControlTypeCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_ControlTypeENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_ControlType.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_ControlType_List.value != null) refge_ControlType_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_ControlType_DeleteKeyIdCache( strControlTypeId:string):void
{


if (
IsNullOrEmpty(strControlTypeId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strControlTypeId }`;
delete ge_ControlTypeCache[cacheKey];
return;
}
}