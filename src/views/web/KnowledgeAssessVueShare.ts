/**
 * 类名:ge_UserCreditsLogVueShare(界面:ge_UserCreditsLogCRUD,01120209)
 * 表名:ge_UserCreditsLog(01120883)
 * 版本:2024.11.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/07 17:25:11
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';

const ascOrDesc4SortFun = ref('Asc');
const sortge_UserCreditsLogBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortge_UserCreditsLogBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdCurrEduCls_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refge_UserCreditsLog_Detail = ref();
const refge_UserCreditsLog_Edit = ref();
const refge_UserCreditsLog_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refge_UserCreditsLog_Detail,
  refge_UserCreditsLog_Edit,
  refge_UserCreditsLog_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refge_UserCreditsLog_Detail,
  refge_UserCreditsLog_Edit,
  refge_UserCreditsLog_List,
};

//查询区变量定义
export const masterLevelId_q_Cls = ref('');

const qryVarSet = reactive({
  masterLevelId_q_Cls,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };
