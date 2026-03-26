
 /**
 * 类名:ge_StuErrorLibVueShare(界面:ge_StuErrorLibCRUD,01120212)
 * 表名:ge_StuErrorLib(01120887)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:06
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:互动管理(InteractManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsge_StuErrorLibEN } from "@/ts/L0Entity/InteractManage/clsge_StuErrorLibEN";
import { clsge_StuErrorLibENEx } from "@/ts/L0Entity/InteractManage/clsge_StuErrorLibENEx";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_StuErrorLibBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_StuErrorLibBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdStudentInfo_Static = ref("");//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refge_StuErrorLib_Edit = ref ();
const refge_StuErrorLib_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_StuErrorLib_Edit,
refge_StuErrorLib_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_StuErrorLib_Edit,
refge_StuErrorLib_List, };

export const showErrorMessage = ref (false);
export const dataListge_StuErrorLib = ref<Array<clsge_StuErrorLibENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_StuErrorLibCache: { [key: string]: clsge_StuErrorLibENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const creator_q = ref('');
export const sourceTypeId_q = ref('');
const qryVarSet = reactive({
 creator_q,
 sourceTypeId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_StuErrorLibCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( creator_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuErrorLibEN.con_Creator, creator_q.value);
}
if ( sourceTypeId_q.value != "" && sourceTypeId_q.value != "0")
{
strWhereCond += Format(" And ge_StuErrorLib.{0} = '{1}'", clsge_StuErrorLibEN.con_SourceTypeId, sourceTypeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_StuErrorLibCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_StuErrorLibConditionObj=async (): Promise<clsge_StuErrorLibEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_StuErrorLibCond = new clsge_StuErrorLibEN();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( creator_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuErrorLibEN.con_Creator, creator_q.value);
objge_StuErrorLibCond.SetCondFldValue(clsge_StuErrorLibEN.con_Creator, creator_q.value, "like");
}
if ( sourceTypeId_q.value != "" && sourceTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_StuErrorLibEN.con_SourceTypeId, sourceTypeId_q.value);
objge_StuErrorLibCond.SetCondFldValue(clsge_StuErrorLibEN.con_SourceTypeId, sourceTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_StuErrorLibConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_StuErrorLibCond.whereCond = strWhereCond;
return objge_StuErrorLibCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_StuErrorLibConditionObj4ExportExcel = async ():Promise<clsge_StuErrorLibEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_StuErrorLibCond = new clsge_StuErrorLibENEx();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( creator_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StuErrorLibEN.con_Creator, creator_q.value);
objge_StuErrorLibCond.SetCondFldValue(clsge_StuErrorLibEN.con_Creator, creator_q.value, "like");
}
if ( sourceTypeId_q.value != "" && sourceTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_StuErrorLibEN.con_SourceTypeId, sourceTypeId_q.value);
objge_StuErrorLibCond.SetCondFldValue(clsge_StuErrorLibEN.con_SourceTypeId, sourceTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_StuErrorLibConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_StuErrorLibCond.whereCond = strWhereCond;
return objge_StuErrorLibCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_StuErrorLibENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_StuErrorLib.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_StuErrorLib_List.value != null) refge_StuErrorLib_List.value.selectAllChecked = false;
};

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Vue_ts_DeleteKeyIdCache)
 **/
export  function ge_StuErrorLib_DeleteKeyIdCache( lngmId:number):void
{


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }`;
delete ge_StuErrorLibCache[cacheKey];
return;
}
}