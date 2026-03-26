/**
 * 类名:DataNodeTypeVueShare(界面:DataNodeTypeCRUD,00050284)
 * 表名:DataNodeType(00050548)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/19 13:32:03
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:AI模块(AIModule)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortDataNodeTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortDataNodeTypeBy,
});
export { viewVarSet };

// 定义邮件类型
export interface Message {
  id: number;
  title: string;
  from: string;
  content: string;
}

//界面公共变量，可以在多个相关界面中共享

const refDivLayout_Head = ref();
const refDivQuery = ref();
const refDivFunction = ref();

const refDivEdit = ref();
const refDivDetail = ref();

const refPageHead = ref();

const divVarSet = reactive({
  refDivLayout_Head,
  refDivQuery,
  refDivFunction,

  refDivEdit,
  refDivDetail,

  refPageHead,
});
export {
  divVarSet,
  refDivLayout_Head,
  refDivQuery,
  refDivFunction,
  refDivEdit,
  refDivDetail,
  refPageHead,
};

export const showErrorMessage = ref(false);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const dataNodeTypeId_q = ref('');
export const dataNodeTypeName_q = ref('');
const qryVarSet = reactive({
  dataNodeTypeId_q,
  dataNodeTypeName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };
