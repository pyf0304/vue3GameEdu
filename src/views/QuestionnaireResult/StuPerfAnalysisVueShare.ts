
 /**
 * 类名:StuPerfAnalysisVueShare(界面:StuPerfAnalysisCRUD,01120259)
 * 表名:StuPerfAnalysis(01120978)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 16:15:16
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:问卷结果(QuestionnaireResult)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString"
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsStuPerfAnalysisEN } from "@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisEN";
import { clsStuPerfAnalysisENEx } from "@/ts/L0Entity/QuestionnaireResult/clsStuPerfAnalysisENEx";
import { StuPerfAnalysisEx_FuncMapKeyIdGrade } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsStuPerfAnalysisExWApi';
import { StuPerfAnalysisEx_FuncMapKeyIdAdminCls } from '@/ts/L3ForWApiEx/QuestionnaireResult/clsStuPerfAnalysisExWApi';
import { intersectSets } from '@/ts/PubFun/clsCommFunc4Ctrl';

const ascOrDesc4SortFun = ref ('Asc');
const sortStuPerfAnalysisBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortStuPerfAnalysisBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdCurrEduCls_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdGrade_Static = ref("");//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refStuPerfAnalysis_Detail = ref ();
const refStuPerfAnalysis_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refStuPerfAnalysis_Detail,
refStuPerfAnalysis_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refStuPerfAnalysis_Detail,
refStuPerfAnalysis_List, };

export const showErrorMessage = ref (false);
export const dataListStuPerfAnalysis = ref<Array<clsStuPerfAnalysisENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const stuPerfAnalysisCache: { [key: string]: clsStuPerfAnalysisENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const stuName_q = ref('');
export const stuId_q = ref('');
export const idStudentInfo_q = ref('');
export const idCurrEduCls_q = ref('');
export const courseId_q = ref('');
export const idGrade_q = ref('');
export const idAdminCls_q = ref('');
const qryVarSet = reactive({
 stuName_q,
 stuId_q,
 idStudentInfo_q,
 idCurrEduCls_q,
 courseId_q,
 idGrade_q,
 idAdminCls_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineStuPerfAnalysisCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and IdCurrEduCls ='{0}'", IdCurrEduCls_Session.value);
strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
try
{
if ( stuName_q.value != "")
{
strWhereCond += Format(" And  IdStudentInfo in (Select IdStudentInfo from vStudentInfo_Sim where StuName like '%{0}%') ", stuName_q.value);
}
if ( stuId_q.value != "")
{
strWhereCond += Format(" And  IdStudentInfo in (Select IdStudentInfo from vStudentInfo_Sim where StuId like '%{0}%') ", stuId_q.value);
}
if ( idStudentInfo_q.value != "" && idStudentInfo_q.value != "0")
{
strWhereCond += Format(" And StuPerfAnalysis.{0} = '{1}'", clsStuPerfAnalysisEN.con_IdStudentInfo, idStudentInfo_q.value);
}

//处理针对扩展字段:[IdStudentInfo]的查询
const arrIdStudentInfo = await GetCondition_IdStudentInfoLst_In();
if (arrIdStudentInfo.length > 0)
{
strWhereCond += Format(" And {0} in ({1})", clsStuPerfAnalysisEN.con_IdStudentInfo, arrIdStudentInfo.join(','));
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineStuPerfAnalysisCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineStuPerfAnalysisConditionObj=async (): Promise<clsStuPerfAnalysisEN> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objStuPerfAnalysisCond = new clsStuPerfAnalysisEN();
let strWhereCond = " 1 = 1 ";
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( stuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStuPerfAnalysisENEx.con_StuName, stuName_q.value);
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisENEx.con_StuName, stuName_q.value, "like");
}
if ( stuId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStuPerfAnalysisENEx.con_StuId, stuId_q.value);
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisENEx.con_StuId, stuId_q.value, "like");
}
if ( idStudentInfo_q.value != "" && idStudentInfo_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStuPerfAnalysisEN.con_IdStudentInfo, idStudentInfo_q.value);
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisEN.con_IdStudentInfo, idStudentInfo_q.value, "=");
}

//处理针对扩展字段:[IdStudentInfo]的查询
const arrIdStudentInfo = await GetCondition_IdStudentInfoLst_In();
if (arrIdStudentInfo.length > 0)
{
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisEN.con_IdStudentInfo, arrIdStudentInfo.join(','), "in");
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineStuPerfAnalysisConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objStuPerfAnalysisCond.whereCond = strWhereCond;
return objStuPerfAnalysisCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineStuPerfAnalysisConditionObj4ExportExcel = async ():Promise<clsStuPerfAnalysisEN> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objStuPerfAnalysisCond = new clsStuPerfAnalysisENEx();
let strWhereCond = " 1 = 1 ";
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( stuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStuPerfAnalysisENEx.con_StuName, stuName_q.value);
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisENEx.con_StuName, stuName_q.value, "like");
}
if ( stuId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStuPerfAnalysisENEx.con_StuId, stuId_q.value);
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisENEx.con_StuId, stuId_q.value, "like");
}
if ( idStudentInfo_q.value != "" && idStudentInfo_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStuPerfAnalysisEN.con_IdStudentInfo, idStudentInfo_q.value);
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisEN.con_IdStudentInfo, idStudentInfo_q.value, "=");
}

//处理针对扩展字段:[IdStudentInfo]的查询
const arrIdStudentInfo = await GetCondition_IdStudentInfoLst_In();
if (arrIdStudentInfo.length > 0)
{
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisEN.con_IdStudentInfo, arrIdStudentInfo.join(','), "in");
}
}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineStuPerfAnalysisConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objStuPerfAnalysisCond.whereCond = strWhereCond;
return objStuPerfAnalysisCond;
}

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
 export async function GetCondition_IdStudentInfoLst_In(): Promise<Array<string>> 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objStuPerfAnalysisCond = new clsStuPerfAnalysisENEx();
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
let arrIdStudentInfoInclude: Array<string> = [];
try
{
if ( idGrade_q.value != "" && idGrade_q.value != "0")
{
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisENEx.con_IdGrade, idGrade_q.value, "=");

const arrIdStudentInfo_IdGrade = await StuPerfAnalysisEx_FuncMapKeyIdGrade(objStuPerfAnalysisCond);
if (arrIdStudentInfoInclude.length == 0)
{
arrIdStudentInfoInclude = arrIdStudentInfo_IdGrade.map(x=>x.toString());
}
else
{
arrIdStudentInfoInclude = intersectSets(arrIdStudentInfoInclude, arrIdStudentInfo_IdGrade.map(x=>x.toString())); 
}
}
if ( idAdminCls_q.value != "" && idAdminCls_q.value != "0")
{
objStuPerfAnalysisCond.SetCondFldValue(clsStuPerfAnalysisENEx.con_IdAdminCls, idAdminCls_q.value, "=");

const arrIdStudentInfo_IdAdminCls = await StuPerfAnalysisEx_FuncMapKeyIdAdminCls(objStuPerfAnalysisCond);
if (arrIdStudentInfoInclude.length == 0)
{
arrIdStudentInfoInclude = arrIdStudentInfo_IdAdminCls.map(x=>x.toString());
}
else
{
arrIdStudentInfoInclude = intersectSets(arrIdStudentInfoInclude, arrIdStudentInfo_IdAdminCls.map(x=>x.toString())); 
}
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return arrIdStudentInfoInclude;
}

/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsStuPerfAnalysisENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListStuPerfAnalysis.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refStuPerfAnalysis_List.value != null) refStuPerfAnalysis_List.value.selectAllChecked = false;
};
