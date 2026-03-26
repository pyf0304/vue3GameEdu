
 /**
 * 类名:ResourceVueShare(界面:ResourceCRUD,01120205)
 * 表名:Resource(01120320)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:12
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:资源管理(ResourceMan)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsResourceEN } from "@/ts/L0Entity/ResourceMan/clsResourceEN";
import { clsResourceENEx } from "@/ts/L0Entity/ResourceMan/clsResourceENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortResourceBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortResourceBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refResource_Edit = ref ();
const refResource_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refResource_Edit,
refResource_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refResource_Edit,
refResource_List, };

export const showErrorMessage = ref (false);
export const dataListResource = ref<Array<clsResourceENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const resourceCache: { [key: string]: clsResourceENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const resourceID_q = ref('');
export const resourceName_q = ref('');
const qryVarSet = reactive({
 resourceID_q,
 resourceName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineResourceCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( resourceID_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsResourceEN.con_ResourceID, resourceID_q.value);
}
if ( resourceName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsResourceEN.con_ResourceName, resourceName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineResourceCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineResourceConditionObj=async (): Promise<clsResourceEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objResourceCond = new clsResourceEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( resourceID_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsResourceEN.con_ResourceID, resourceID_q.value);
objResourceCond.SetCondFldValue(clsResourceEN.con_ResourceID, resourceID_q.value, "like");
}
if ( resourceName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsResourceEN.con_ResourceName, resourceName_q.value);
objResourceCond.SetCondFldValue(clsResourceEN.con_ResourceName, resourceName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineResourceConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objResourceCond.whereCond = strWhereCond;
return objResourceCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineResourceConditionObj4ExportExcel = async ():Promise<clsResourceEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objResourceCond = new clsResourceENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( resourceID_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsResourceEN.con_ResourceID, resourceID_q.value);
objResourceCond.SetCondFldValue(clsResourceEN.con_ResourceID, resourceID_q.value, "like");
}
if ( resourceName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsResourceEN.con_ResourceName, resourceName_q.value);
objResourceCond.SetCondFldValue(clsResourceEN.con_ResourceName, resourceName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineResourceConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objResourceCond.whereCond = strWhereCond;
return objResourceCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsResourceENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListResource.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refResource_List.value != null) refResource_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function Resource_DeleteKeyIdCache( strIdResource:string):void
{


if (
IsNullOrEmpty(strIdResource) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdResource }`;
delete resourceCache[cacheKey];
return;
}
}