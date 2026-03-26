
 /**
 * 类名:ge_ControlAttributeVueShare(界面:ge_ControlAttributeCRUD,01120230)
 * 表名:ge_ControlAttribute(01120914)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:49
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
import { clsge_ControlAttributeEN } from "@/ts/L0Entity/GameLearn/clsge_ControlAttributeEN";
import { clsge_ControlAttributeENEx } from "@/ts/L0Entity/GameLearn/clsge_ControlAttributeENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_ControlAttributeBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_ControlAttributeBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refge_ControlAttribute_Edit = ref ();
const refge_ControlAttribute_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_ControlAttribute_Edit,
refge_ControlAttribute_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_ControlAttribute_Edit,
refge_ControlAttribute_List, };

export const showErrorMessage = ref (false);
export const dataListge_ControlAttribute = ref<Array<clsge_ControlAttributeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_ControlAttributeCache: { [key: string]: clsge_ControlAttributeENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const attributeId_q = ref('');
export const controlAttributeName_q = ref('');
const qryVarSet = reactive({
 attributeId_q,
 controlAttributeName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_ControlAttributeCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( attributeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlAttributeEN.con_AttributeId, attributeId_q.value);
}
if ( controlAttributeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlAttributeEN.con_ControlAttributeName, controlAttributeName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_ControlAttributeCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_ControlAttributeConditionObj=async (): Promise<clsge_ControlAttributeEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_ControlAttributeCond = new clsge_ControlAttributeEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( attributeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlAttributeEN.con_AttributeId, attributeId_q.value);
objge_ControlAttributeCond.SetCondFldValue(clsge_ControlAttributeEN.con_AttributeId, attributeId_q.value, "like");
}
if ( controlAttributeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlAttributeEN.con_ControlAttributeName, controlAttributeName_q.value);
objge_ControlAttributeCond.SetCondFldValue(clsge_ControlAttributeEN.con_ControlAttributeName, controlAttributeName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_ControlAttributeConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_ControlAttributeCond.whereCond = strWhereCond;
return objge_ControlAttributeCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_ControlAttributeConditionObj4ExportExcel = async ():Promise<clsge_ControlAttributeEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_ControlAttributeCond = new clsge_ControlAttributeENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( attributeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlAttributeEN.con_AttributeId, attributeId_q.value);
objge_ControlAttributeCond.SetCondFldValue(clsge_ControlAttributeEN.con_AttributeId, attributeId_q.value, "like");
}
if ( controlAttributeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_ControlAttributeEN.con_ControlAttributeName, controlAttributeName_q.value);
objge_ControlAttributeCond.SetCondFldValue(clsge_ControlAttributeEN.con_ControlAttributeName, controlAttributeName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_ControlAttributeConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_ControlAttributeCond.whereCond = strWhereCond;
return objge_ControlAttributeCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_ControlAttributeENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_ControlAttribute.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_ControlAttribute_List.value != null) refge_ControlAttribute_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_ControlAttribute_DeleteKeyIdCache( strAttributeId:string):void
{


if (
IsNullOrEmpty(strAttributeId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strAttributeId }`;
delete ge_ControlAttributeCache[cacheKey];
return;
}
}