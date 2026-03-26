import { useUserStore } from '@/store/modulesShare/user';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { Questionnaire_GetFirstObjAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
import { QuestionOptions_GetObjLstAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { ge_StructureGraphEx_SubmitStructureGraphAsync } from 'share-stu-study-base-lib';
import {
  GetInputObjInDivObj,
  GetInputValueInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { message } from '@/utils/myMessage';
declare function layui_Alert(iconKey: string, strMsg: string): void;
declare function load_jsmind(strjson: string): void;
declare function add_node(strKeyId: string, strKeyName: string): void;

declare function setTimeShow(): void;
declare function remove_node(): void;

declare function Show_TimeShow(): void;
declare function Show_nav_title(): void;
declare const window: any;

/* spage_StructureSectionCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class MultipleQuestionChart {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return MultipleQuestionChart.divLayout;
  }
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      // 为查询区绑定下拉框
      //const gvBindDdl = await this.BindDdl4QueryRegion();

      //this.hidSortvge_StructureSectionBy = "knowledgeTitle Asc";
      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_vge_StructureSection();

      if (userStore.userId != '') {
        //绑定题目
        const responseBindGv1 = await this.BindGv_QuestionnaireNode();
        //绑定选项
        const responseBindGv2 = await this.BindGv_QuestionOptions();
        //LoadjsPlumb();
        HideDivInDivObj(this.thisDivLayout, 'divLoading');
      } else {
        window.top.location.href = '../Web/Login';
      }
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  //绑定问题和选项
  public async BindGv_QuestionnaireNode() {
    const strQuestionId = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionId');
    const strWhereCond: string = " 1=1 and questionId='" + strQuestionId + "'";

    //获取获取题目库

    const objQuestionnaire = await Questionnaire_GetFirstObjAsync(strWhereCond);
    if (objQuestionnaire == null) return;

    let strStructureJson = '[';
    strStructureJson += '{';
    strStructureJson += '"id":"' + objQuestionnaire.questionId + '",';
    strStructureJson += '"isroot":true,';
    strStructureJson += '"expanded":true,';
    strStructureJson += '"topic":"' + objQuestionnaire.questionName + '"';
    strStructureJson += '},';

    //获取观点分类
    //if (arrge_StructureChartNodeObjLst.length > 0) {
    //    const strStructureJson = '[';
    //    for (let i = 0; i < arrge_StructureChartNodeObjLst.length; i++) {
    //        const strStructureChartId: string = arrge_StructureChartNodeObjLst[i].structureNodeId;
    //        const strParentId: string = arrge_StructureChartNodeObjLst[i].parentId;
    //        const strStructureName: string = arrge_StructureChartNodeObjLst[i].structureNodeName;
    //        const strDirection: string = arrge_StructureChartNodeObjLst[i].direction;
    //        const isExpanded: boolean = arrge_StructureChartNodeObjLst[i].isExpanded;
    //        const isRoot: boolean = arrge_StructureChartNodeObjLst[i].isRoot;
    //        if (isRoot == true) {
    //            strStructureJson += '{';
    //            strStructureJson += '"id":"' + strStructureChartId + '",';
    //            strStructureJson += '"isroot":' + isRoot + ',';
    //            strStructureJson += '"expanded":' + isExpanded + ',';
    //            strStructureJson += '"topic":"' + strStructureName + '"';
    //            strStructureJson += '},';
    //        } else {
    //            strStructureJson += '{';
    //            strStructureJson += '"id":"' + strStructureChartId + '",';
    //            strStructureJson += '"parentid":"' + strParentId + '",';
    //            strStructureJson += '"topic":"' + strStructureName + '",';
    //            strStructureJson += '"expanded":' + isExpanded + ',';
    //            strStructureJson += '"direction":"' + strDirection + '"';
    //            strStructureJson += '},';
    //        }
    //    }

    //strStructureJson = strStructureJson.substr(0, strStructureJson.length - 1);
    strStructureJson += ']';

    const strJson = eval(strStructureJson);
    //加载jsmind
    load_jsmind(strJson);
    //}
  }

  //绑定问题选项
  public async BindGv_QuestionOptions() {
    try {
      const strQuestionId = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionId');
      const strWhereCond: string = " 1=1 and questionId='" + strQuestionId + "'";

      //获取获取题目库

      const arrQuestionOptionsObjLst = await QuestionOptions_GetObjLstAsync(strWhereCond);

      let strhtml = '';

      let tempArr = arrQuestionOptionsObjLst;

      //for (let i = 0; i < arrge_StructureChartNodeObjLst.length; i++) {

      //    for (let j = 0; j < arrge_StructureSectionObjLst.length; j++) {

      //        if (arrge_StructureSectionObjLst[j].structureSectionId == arrge_StructureChartNodeObjLst[i].structureSectionId) {

      //            tempArr.splice(tempArr.indexOf(arrge_StructureSectionObjLst[j]), 1);
      //        }
      //    }

      //}

      for (let i = 0; i < tempArr.length; i++) {
        const strQuestionOptionId = tempArr[i].questionOptionId;
        const strOptionName = tempArr[i].optionName;
        strhtml +=
          '<div id="' +
          strQuestionOptionId +
          '" onclick=add_node("' +
          strQuestionOptionId +
          '","' +
          strOptionName +
          '") class="node node1css" data-type="server">' +
          strOptionName +
          '</div>';
      }

      //strhtml += '<div class+="node node1css" data-type="server">' + arrge_StructureSectionObjLst[0].knowledgeTitle + '</div>';
      $('#QuestionOptionsNode').html(strhtml);
    } catch (e) {
      const strMsg: string = `加载问题选项出现问题,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  //提交节点
  public async Submit_node_Click() {
    try {
      const userStore = useUserStore();
      ShowDivInDivObj(this.thisDivLayout, 'divLoading');

      const strStructureGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidStructureGraphId');
      const strUserId = userStore.userId;
      const strTimeShow = $('#TimeShow').html();

      const responseText = await ge_StructureGraphEx_SubmitStructureGraphAsync(
        strStructureGraphId,
        strUserId,
        strTimeShow,
      );

      const returnBool: boolean = !!responseText;
      if (returnBool == true) {
        //检查是否提交，并显示相应信息
        //const response = await this.isSubmit();
        const strInfo: string = `提交成功!`;
        //alert(strInfo);
        message.success(strInfo);
        HideDivInDivObj(this.thisDivLayout, 'divLoading');
      } else {
        const strInfo: string = `提交不成功!`;
        alert(strInfo);
        HideDivInDivObj(this.thisDivLayout, 'divLoading');
      }
    } catch (e) {
      const strMsg: string = `提交出现异常. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: MultipleQuestionChart = new MultipleQuestionChart();

    switch (strCommandName) {
      case 'Query': //查询记录
        //objPage.btnQuery_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;

      case 'UpdateRecordInTab': //修改记录InTab
        // objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;

      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        const strMsg =
          '命令:' +
          strCommandName +
          '在函数(spage_StructureSectionTypeCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
}
