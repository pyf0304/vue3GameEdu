
 /**
 * 类名:ge_InspectionResultsVueShare(界面:ge_InspectionResultsCRUD,01120220)
 * 表名:ge_InspectionResults(01120897)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:14:59
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
import { clsge_InspectionResultsEN } from "@/ts/L0Entity/GameLearn/clsge_InspectionResultsEN";
import { clsge_InspectionResultsENEx } from "@/ts/L0Entity/GameLearn/clsge_InspectionResultsENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_InspectionResultsBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_InspectionResultsBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refge_InspectionResults_Edit = ref ();
const refge_InspectionResults_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_InspectionResults_Edit,
refge_InspectionResults_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_InspectionResults_Edit,
refge_InspectionResults_List, };

export const showErrorMessage = ref (false);
export const dataListge_InspectionResults = ref<Array<clsge_InspectionResultsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_InspectionResultsCache: { [key: string]: clsge_InspectionResultsENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
const qryVarSet = reactive({});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_InspectionResultsCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const strWhereCond = " 1 = 1 ";
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_InspectionResultsConditionObj=async (): Promise<clsge_InspectionResultsEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_InspectionResultsCond = new clsge_InspectionResultsEN();
return objge_InspectionResultsCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_InspectionResultsConditionObj4ExportExcel = async ():Promise<clsge_InspectionResultsEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_InspectionResultsCond = new clsge_InspectionResultsENEx();
return objge_InspectionResultsCond;
};


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_InspectionResultsENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_InspectionResults.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_InspectionResults_List.value != null) refge_InspectionResults_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_InspectionResults_DeleteKeyIdCache( lngmId:number):void
{


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }`;
delete ge_InspectionResultsCache[cacheKey];
return;
}
}