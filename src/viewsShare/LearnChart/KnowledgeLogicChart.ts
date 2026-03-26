import { useUserStore } from '@/store/modulesShare/user';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsge_QuestionKnowledgeGraphRelaEN } from '@/ts/L0Entity/Knowledges/clsge_QuestionKnowledgeGraphRelaEN';
import { clsgs_KnowledgesGraphEN } from 'share-stu-study-base-lib';
import { clsgs_KnowledgesLogicEN } from 'share-stu-study-base-lib';
import { clsgs_RelaTypeEN } from 'share-stu-study-base-lib';
import { ge_LogicChartSubmitResults_GetFirstObjAsync } from '@/ts/L3ForWApi/Knowledges/clsge_LogicChartSubmitResultsWApi';
import {
  ge_QuestionKnowledgeGraphRela_AddNewRecordAsync,
  ge_QuestionKnowledgeGraphRela_CheckPropertyNew,
} from '@/ts/L3ForWApi/Knowledges/clsge_QuestionKnowledgeGraphRelaWApi';
import {
  gs_KnowledgesGraph_AddNewRecordWithMaxIdAsync,
  gs_KnowledgesGraph_CheckPropertyNew,
  gs_KnowledgesGraph_GetFirstObjAsync,
} from 'share-stu-study-base-lib';
import {
  gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync,
  gs_KnowledgesLogicRela_GetObjLstAsync,
} from 'share-stu-study-base-lib';
import {
  gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync,
  gs_KnowledgesLogic_GetObjLstAsync,
} from 'share-stu-study-base-lib';
import { gs_RelaType_GetSubObjLstCache } from 'share-stu-study-base-lib';
import { gs_KnowledgesGraphEx_SubmitKnowledgeGraphAsync } from 'share-stu-study-base-lib';
import { gs_KnowledgesLogicEx_AddNewRecordAsync } from 'share-stu-study-base-lib';
import { gs_KnowledgesLogicRelaEx_AddNewRecordAsync } from 'share-stu-study-base-lib';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { message } from '@/utils/myMessage';

//declare function LoadjsPlumb(): void;
// declare function LoadKnowledge(): void;
// declare function DragDeviceLeft(): void;
declare function layui_Alert(strIcon: string, strMsg: string): void;

declare function setTimeShow(): void;
declare function Show_TimeShow(): void;
declare function Show_nav_title(): void;
declare const window: any;

/* spacc_CourseKnowledgesCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class KnowledgeLogicChart {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return KnowledgeLogicChart.divLayout;
  }
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public Arrgs_KnowledgesLogicObjLst: Array<clsgs_KnowledgesLogicEN_T> = [];

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      if (userStore.userId != '') {
        if (GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId') == '') {
          $('#hidOpType').val('ok');
          //首先检测当前用户再当前这个课程，当前类型章节下是否有图谱
          //调整当前页面之前首先检测是否有传送图谱Id,如果有那么就显示这个图谱相关信息，如果没有就创建图谱和相对应的结构节点，并创建题目和图谱关系表
          const responseBindGv1 = await this.IsAddKnowledgesGraph();
        }

        const responseBindGv2 = await this.BindAllLogicGraph();

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

  /// <summary>
  /// 设置绑定下拉框，针对字段:[courseId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_RelaTypeId() {
    const objgs_RelaType_Cond = new clsgs_RelaTypeEN(); //查询区域
    const ddlRelaTypeId = await this.BindDdl_RelaTypeIdCache('ddlRelaTypeId', objgs_RelaType_Cond); //查询区域
  }
  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public async BindDdl_RelaTypeIdCache(
    strDdlName: string,
    objgs_RelaType_Cond: clsgs_RelaTypeEN_T,
  ) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_RelaTypeIdCache');
    const arrObjLst_Sel: Array<clsgs_RelaTypeEN_T> = await gs_RelaType_GetSubObjLstCache(
      objgs_RelaType_Cond,
    );
    BindDdl_ObjLst(
      strDdlName,
      arrObjLst_Sel,
      clsgs_RelaTypeEN.con_RelaTypeId,
      clsgs_RelaTypeEN.con_RelaTypeName,
      '择关系..',
    );
  }

  //绑定所有逻辑关系相关数据
  public async BindAllLogicGraph() {
    //$("#main").html("");

    //const strGraphMenu = $("#hidGraphMenu").val();
    //if (strGraphMenu != "1") {
    //    $("#TabGraph2_Menu").show();

    //} else {
    //    $("#TabGraph2_Menu").hide();
    //}
    //检查是否提交
    await this.isSubmit();

    await this.BindGv_gs_KnowledgesLogic();

    await this.BindGv_vcc_CourseKnowledges();
    KnowledgeLogicChart.vuebtn_Click('DragDeviceLeft', '');

    await this.BindGv_gs_KnowledgesLogicRela();
    //LoadjsPlumb();
    KnowledgeLogicChart.vuebtn_Click('LoadKnowledge', '');
  }
  //是否提交
  public async isSubmit() {
    const strKnowledgeGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
    const strWhereCond: string = " 1=1 and knowledgeGraphId='" + strKnowledgeGraphId + "'";

    //获取观点分类

    const objgs_KnowledgesGraph = await gs_KnowledgesGraph_GetFirstObjAsync(strWhereCond);
    if (objgs_KnowledgesGraph == null) return;
    if (objgs_KnowledgesGraph.isSubmit == true) {
      $('#btn1').hide();
      $('#btn_CorrectLogicChart').show();

      //获取观点分类

      const objge_LogicChartSubmitResults = await ge_LogicChartSubmitResults_GetFirstObjAsync(
        strWhereCond,
      );
      if (objge_LogicChartSubmitResults == null) return;
      const strTakeUpTime = objge_LogicChartSubmitResults.takeUpTime;
      const intCorrectNum = objge_LogicChartSubmitResults.correctNum;
      const intErrorNum = objge_LogicChartSubmitResults.errorNum;
      const intFraction = objge_LogicChartSubmitResults.fraction;

      $('#TimeShow').remove();
      //$("TimeShow").hide();
      //$("#a_TakeUpTime").show();
      //$("#a_CorrectNum").show();
      //$("#a_ErrorNum").show();
      //$("#a_Fraction").show();
      //Show_TimeShow();
      Show_nav_title();

      $('#a_TakeUpTime').html('耗时:' + strTakeUpTime + ' / ');
      $('#a_CorrectNum').html('正确数:' + intCorrectNum + ' / ');
      $('#a_ErrorNum').html('错误数:' + intErrorNum + ' / ');
      $('#a_Fraction').html('分数:' + intFraction);
    } else {
      $('#btn1').show();
      $('#btn_CorrectLogicChart').hide();

      $('#a_TakeUpTime').remove();
      $('#a_CorrectNum').remove();
      $('#a_ErrorNum').remove();
      $('#a_Fraction').remove();

      Show_TimeShow();
      setTimeShow();
    }
  }

  //绑定左边的知识点标题
  public async BindGv_vcc_CourseKnowledges() {
    const strStandardId = GetInputValueInDivObj(this.thisDivLayout, 'hidStandardId');
    const strWhereCond: string = " 1=1 and knowledgeGraphId='" + strStandardId + "'";

    //获取观点分类

    const arrgs_KnowledgesLogicObjLst = await gs_KnowledgesLogic_GetObjLstAsync(strWhereCond);

    let strhtml = '';

    //let tempArr = arrcc_CourseKnowledgesObjLst;
    let tempArr = arrgs_KnowledgesLogicObjLst;
    for (let i = 0; i < this.Arrgs_KnowledgesLogicObjLst.length; i++) {
      for (let j = 0; j < arrgs_KnowledgesLogicObjLst.length; j++) {
        if (
          arrgs_KnowledgesLogicObjLst[j].courseKnowledgeId ==
          this.Arrgs_KnowledgesLogicObjLst[i].courseKnowledgeId
        ) {
          tempArr.splice(tempArr.indexOf(arrgs_KnowledgesLogicObjLst[j]), 1);
        }
      }
      //let result = arrcc_CourseKnowledgesObjLst.filter(item => this.Arrgs_KnowledgesLogicObjLst.some(id => id.courseKnowledgeId != arrcc_CourseKnowledgesObjLst[i].courseKnowledgeId));
    }

    //let result = arrcc_CourseKnowledgesObjLst.filter(item => this.Arrgs_KnowledgesLogicObjLst.some(id => id.courseKnowledgeId == item.courseKnowledgeId));

    //let result = this.Arrgs_KnowledgesLogicObjLst.filter(item => arrcc_CourseKnowledgesObjLst.some(id => id.courseKnowledgeId == item.courseKnowledgeId));

    //for (let i = 0; i < arrcc_CourseKnowledgesObjLst.length; i++) {
    //    let result = arrcc_CourseKnowledgesObjLst.filter(item => this.Arrgs_KnowledgesLogicObjLst.some(id => id.courseKnowledgeId != arrcc_CourseKnowledgesObjLst[i].courseKnowledgeId));

    //    //const strKnowledgesNode = document.getElementById("KnowledgesNode");

    //    //const div = document.createElement("div");
    //    //div.className = "node node1css";
    //    //div.setAttribute("data-type", "server");
    //    //div.innerHTML = arrcc_CourseKnowledgesObjLst[i].knowledgeTitle;
    //    ////strKnowledgesNode.a
    //    //strKnowledgesNode.appendChild(div);
    //}
    for (let i = 0; i < tempArr.length; i++) {
      strhtml +=
        '<div id="' +
        tempArr[i].courseKnowledgeId +
        '" class="node node1css" data-type="server">' +
        tempArr[i].knowledgeTitle +
        '</div>';
    }

    //strhtml += '<div class+="node node1css" data-type="server">' + arrcc_CourseKnowledgesObjLst[0].knowledgeTitle + '</div>';
    $('#KnowledgesNode').html(strhtml);
  }

  //绑定知识点逻辑点位
  public async BindGv_gs_KnowledgesLogic() {
    const strKnowledgeGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
    const strWhereCond: string = " 1=1 and knowledgeGraphId='" + strKnowledgeGraphId + "'";

    //获取观点分类

    const arrgs_KnowledgesLogicObjLst = await gs_KnowledgesLogic_GetObjLstAsync(strWhereCond);
    this.Arrgs_KnowledgesLogicObjLst = arrgs_KnowledgesLogicObjLst;

    if (arrgs_KnowledgesLogicObjLst.length > 0) {
      let strLogicJson = '[';
      for (let i = 0; i < arrgs_KnowledgesLogicObjLst.length; i++) {
        const strCourseKnowledgeId: string = arrgs_KnowledgesLogicObjLst[i].courseKnowledgeId;
        const strLogicNodeId: string = arrgs_KnowledgesLogicObjLst[i].logicNodeId;
        const strClassName: string = arrgs_KnowledgesLogicObjLst[i].classNameCss;
        const strCourseKnowledgeTitle: string = arrgs_KnowledgesLogicObjLst[i].knowledgeTitle;

        const strx_Position: number = arrgs_KnowledgesLogicObjLst[i].xPosition;
        const strY_Position: number = arrgs_KnowledgesLogicObjLst[i].yPosition;

        //const strid_CurrEduCls = clsPubLocalStorage.idCurrEduCls;

        strLogicJson += '{';
        strLogicJson += '"CourseKnowledgeId":"' + strCourseKnowledgeId + '",';
        strLogicJson += '"knowledgeTitle":"' + strCourseKnowledgeTitle + '",';
        strLogicJson += '"LogicNodeId":"' + strLogicNodeId + '",';
        strLogicJson += '"ClassName":"' + strClassName + '",';
        strLogicJson += '"X_Position":' + strx_Position + ',';
        strLogicJson += '"Y_Position":' + strY_Position;
        strLogicJson += '},';
      }
      strLogicJson = strLogicJson.substr(0, strLogicJson.length - 1);
      strLogicJson += ']';
      $('#hidLogicNodeJson').val(strLogicJson);
    }
  }

  //绑定知识点逻辑关系
  public async BindGv_gs_KnowledgesLogicRela() {
    $('#hidLogicRelaJson').val('');
    const strKnowledgeGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
    const strWhereCond: string = " 1=1 and knowledgeGraphId='" + strKnowledgeGraphId + "'";

    //获取观点分类

    const arrgs_KnowledgesLogicRelaObjLst = await gs_KnowledgesLogicRela_GetObjLstAsync(
      strWhereCond,
    );

    if (arrgs_KnowledgesLogicRelaObjLst.length > 0) {
      let strLogicRelaJson = '[';
      for (let i = 0; i < arrgs_KnowledgesLogicRelaObjLst.length; i++) {
        const knowledgeTitleA: string = arrgs_KnowledgesLogicRelaObjLst[i].knowledgeTitleA;
        const knowledgeTitleB: string = arrgs_KnowledgesLogicRelaObjLst[i].knowledgeTitleB;
        const strSourceAnchor: string = arrgs_KnowledgesLogicRelaObjLst[i].sourceAnchor;
        const strTargetAnchor: string = arrgs_KnowledgesLogicRelaObjLst[i].targetAnchor;

        const strRelaTitle: string = arrgs_KnowledgesLogicRelaObjLst[i].relaTitle;

        strLogicRelaJson += '{';
        strLogicRelaJson += '"knowledgeTitleA":"' + knowledgeTitleA + '",';
        strLogicRelaJson += '"knowledgeTitleB":"' + knowledgeTitleB + '",';
        strLogicRelaJson += '"relaTitle":"' + strRelaTitle + '",';
        strLogicRelaJson += '"sourceAnchor":"' + strSourceAnchor + '",';
        strLogicRelaJson += '"targetAnchor":"' + strTargetAnchor + '"';
        strLogicRelaJson += '},';
      }
      strLogicRelaJson = strLogicRelaJson.substr(0, strLogicRelaJson.length - 1);
      strLogicRelaJson += ']';
      $('#hidLogicRelaJson').val(strLogicRelaJson);
    }
  }

  //保存逻辑关系
  public async btnSaveLogicRela_Click(ojson: any) {
    const userStore = useUserStore();
    ShowDivInDivObj(this.thisDivLayout, 'divLoading');
    const strKnowledgeGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
    let strLogicJson = '[';
    for (let i = 0; i < ojson.server.length; i++) {
      const strCourseKnowledgeId: string = ojson.server[i].id;
      const strLogicNodeId: string = ojson.server[i].divId;

      const strCourseKnowledgeTitle: string = ojson.server[i].name;
      const strx_Position: number = ojson.server[i].positionX;
      const strY_Position: number = ojson.server[i].positionY;
      const strClassName: number = ojson.server[i].class;

      const strUpdDate: string = clsPubFun4Web.getNowDate(); // 修改日期
      const strUpdUser: string = userStore.userId; // 修改人
      //const strid_CurrEduCls = clsPubLocalStorage.idCurrEduCls;

      strLogicJson += '{';
      strLogicJson += '"courseKnowledgeId":"' + strCourseKnowledgeId + '",';
      strLogicJson += '"knowledgeTitle":"' + strCourseKnowledgeTitle + '",';
      strLogicJson += '"logicNodeId":"' + strLogicNodeId + '",';
      strLogicJson += '"className":"' + strClassName + '",';
      strLogicJson += '"updUser":"' + strUpdUser + '",';
      strLogicJson += '"updDate":"' + strUpdDate + '",';
      strLogicJson += '"knowledgeGraphId":"' + strKnowledgeGraphId + '",';
      strLogicJson += '"xPosition":' + strx_Position + ',';
      strLogicJson += '"yPosition":' + strY_Position;
      strLogicJson += '},';
    }
    strLogicJson = strLogicJson.substr(0, strLogicJson.length - 1);
    strLogicJson += ']';

    let strLogicRelaJson = '[';
    for (let i = 0; i < ojson.line.length; i++) {
      const strCourseKnowledgeIdA: string = ojson.line[i].pageSourceId;
      const strCourseKnowledgeIdB: string = ojson.line[i].pageTargetId;
      const strSourceAnchor: string = ojson.line[i].pageSourceAnchor;
      const strTargetAnchor: string = ojson.line[i].pageTargetAnchor;
      const strRelaTitle: string = ojson.line[i].overlaysText;

      const strUpdDate: string = clsPubFun4Web.getNowDate(); // 修改日期
      const strUpdUser: string = userStore.userId; // 修改人
      const strid_CurrEduCls = clsPubLocalStorage.idCurrEduCls;

      strLogicRelaJson += '{';
      strLogicRelaJson += '"CourseKnowledgeIdA":"' + strCourseKnowledgeIdA + '",';
      strLogicRelaJson += '"knowledgeTitleA":"' + strCourseKnowledgeIdA + '",';
      strLogicRelaJson += '"CourseKnowledgeIdB":"' + strCourseKnowledgeIdB + '",';
      strLogicRelaJson += '"knowledgeTitleB":"' + strCourseKnowledgeIdB + '",';
      strLogicRelaJson += '"sourceAnchor":"' + strSourceAnchor + '",';
      strLogicRelaJson += '"targetAnchor":"' + strTargetAnchor + '",';
      strLogicRelaJson += '"relaTitle":"' + strRelaTitle + '",';
      strLogicRelaJson += '"updUser":"' + strUpdUser + '",';
      strLogicRelaJson += '"updDate":"' + strUpdDate + '",';
      strLogicRelaJson += '"knowledgeGraphId":"' + strKnowledgeGraphId + '"';
      strLogicRelaJson += '},';
    }
    strLogicRelaJson = strLogicRelaJson.substr(0, strLogicRelaJson.length - 1);
    strLogicRelaJson += ']';

    //删除1
    const DelResult1 = await this.DelRecord1();
    //添加1
    const responseText = await gs_KnowledgesLogicEx_AddNewRecordAsync(strLogicJson);
    const returnBool: boolean = !!responseText;
    if (returnBool == true) {
      //删除2
      const DelResult2 = await this.DelRecord2();
      //添加2
      const responseText2 = await gs_KnowledgesLogicRelaEx_AddNewRecordAsync(strLogicRelaJson);
      const returnBool2: boolean = !!responseText2;
      if (returnBool2 == true) {
        //提交节点
        const response = await this.Submit_node_Click();

        //const strInfo: string = `保存逻辑关系图成功!`;
        //message.success( strInfo);

        ////const gvResult1 = await this.Bind_UserRela(strid_CurrEduCls);
        //$("#divLoading").hide();
      }
    } else {
      const strInfo: string = `保存用户关系排列图不成功!`;
      alert(strInfo);

      HideDivInDivObj(this.thisDivLayout, 'divLoading');
    }
  }

  //提交节点
  public async Submit_node_Click() {
    try {
      const userStore = useUserStore();
      ShowDivInDivObj(this.thisDivLayout, 'divLoading');

      const strKnowledgeGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
      const strUserId = userStore.userId;
      const strTimeShow = $('#TimeShow').html();
      const strStandardId = GetInputValueInDivObj(this.thisDivLayout, 'hidStandardId');

      const responseText = await gs_KnowledgesGraphEx_SubmitKnowledgeGraphAsync(
        strKnowledgeGraphId,
        strUserId,
        strTimeShow,
        strStandardId,
      );
      const returnBool: boolean = !!responseText;
      if (returnBool == true) {
        //检查是否提交，并显示相应信息
        const response = await this.isSubmit();
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

  //删除之前的用户关系排列图
  public async DelRecord1() {
    try {
      const strKnowledgeGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
      //const strWhere = " knowledgeGraphId='" + strKnowledgeGraphId + "' and updUser='" + userStore.userId + "'";
      const strWhere = " knowledgeGraphId='" + strKnowledgeGraphId + "'";
      const returnInt = await gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync(strWhere);
      if (returnInt > 0) {
        const strInfo: string = `删除知识点逻辑成功!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo: string = `删除知识点逻辑不成功!`;
        //显示信息框
        console.log(strInfo);
        //alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //删除之前的用户关系排列图
  public async DelRecord2() {
    try {
      const strKnowledgeGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
      const strWhere = " knowledgeGraphId='" + strKnowledgeGraphId + "'";
      //const strWhere = " knowledgeGraphId='" + strKnowledgeGraphId + "' and updUser='" + userStore.userId + "'";
      const returnInt = await gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync(
        strWhere,
      );
      if (returnInt > 0) {
        const strInfo: string = `删除知识点逻辑关系成功!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo: string = `删除知识点逻辑关系不成功!`;
        //显示信息框
        console.log(strInfo);
        //alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //是否添加结构图
  public async IsAddKnowledgesGraph() {
    const strKnowledgesGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
    //const strQuestionId = $("#hidQuestionId").val();
    //const strSectionTypeId = $("#hidSectionTypeId").val();

    if (strKnowledgesGraphId == null || strKnowledgesGraphId == '') {
      //添加图谱

      const returnKeyId = await this.AddKnowledgesGraph();
      //返回的图谱ID记录
      $('#hidKnowledgeGraphId').val(returnKeyId.toString());

      if (returnKeyId != '') {
        await this.AddQuestionKnowledgesGraphRela(returnKeyId);
      }
    }
  }

  //添加结构图谱
  public async AddKnowledgesGraph() {
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objgs_KnowledgesGraphEN = new clsgs_KnowledgesGraphEN();
    this.PutDataTogs_KnowledgesGraphClass(objgs_KnowledgesGraphEN);
    try {
      gs_KnowledgesGraph_CheckPropertyNew(objgs_KnowledgesGraphEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return ''; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await gs_KnowledgesGraph_AddNewRecordWithMaxIdAsync(
        objgs_KnowledgesGraphEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //gs_KnowledgesGraph_ReFreshCache();
        const strInfo: string = `添加图谱记录成功!`;

        console.log(strInfo);
        //const responseKeyId2 = await this.AddStructureChart(returnKeyId);
        //显示信息框
        //alert(strInfo);
      } else {
        const strInfo: string = `添加图谱记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return '';
    }
  }

  public PutDataTogs_KnowledgesGraphClass(pobjgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN_T) {
    const userStore = useUserStore();
    pobjgs_KnowledgesGraphEN.knowledgeGraphName =
      userStore.getUserName + '_' + clsPubFun4Web.getNowDate_ymd(); // 知识点图名;// 知识点图名
    pobjgs_KnowledgesGraphEN.courseId = clsPubLocalStorage.courseId; // 课程Id
    pobjgs_KnowledgesGraphEN.updDate = clsPubFun4Web.getNowDate(); // 修改日期
    pobjgs_KnowledgesGraphEN.updUser = userStore.userId; // 修改用户Id
    pobjgs_KnowledgesGraphEN.createUser = userStore.userId; // 修改用户Id
    pobjgs_KnowledgesGraphEN.idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    //判断角色
    //学生
    pobjgs_KnowledgesGraphEN.isSubmit = false;
    pobjgs_KnowledgesGraphEN.startTime = clsPubFun4Web.getNowDate(); // 开始时间
    pobjgs_KnowledgesGraphEN.graphTypeId = '02';
    pobjgs_KnowledgesGraphEN.isRecommend = false;
    pobjgs_KnowledgesGraphEN.isAnswer = false;
  }

  //添加题目和结构图谱关系
  public async AddQuestionKnowledgesGraphRela(strKeyId: string) {
    const userStore = useUserStore();
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objge_QuestionKnowledgeGraphRelaEN: clsge_QuestionKnowledgeGraphRelaEN =
      new clsge_QuestionKnowledgeGraphRelaEN();

    objge_QuestionKnowledgeGraphRelaEN.knowledgeGraphId = strKeyId;
    objge_QuestionKnowledgeGraphRelaEN.questionId = Number(
      GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionId'),
    );
    objge_QuestionKnowledgeGraphRelaEN.gameLevelId = GetInputValueInDivObj(
      this.thisDivLayout,
      'hidGameLevelId',
    );
    objge_QuestionKnowledgeGraphRelaEN.courseId = clsPubLocalStorage.courseId;
    objge_QuestionKnowledgeGraphRelaEN.createUser = userStore.userId; // 修改用户Id
    objge_QuestionKnowledgeGraphRelaEN.updDate = clsPubFun4Web.getNowDate(); // 修改日期
    objge_QuestionKnowledgeGraphRelaEN.updUser = userStore.userId; // 修改用户Id

    try {
      ge_QuestionKnowledgeGraphRela_CheckPropertyNew(objge_QuestionKnowledgeGraphRelaEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    let returnbool: boolean = false;
    try {
      returnbool = await ge_QuestionKnowledgeGraphRela_AddNewRecordAsync(
        objge_QuestionKnowledgeGraphRelaEN,
      );

      if (returnbool == true) {
        //ge_StructureChartNode_ReFreshCache();
        const strInfo: string = `添加题目和结构图谱关系记录成功!`;

        //显示信息框
        console.log(strInfo);
        //alert(strInfo);
      } else {
        const strInfo: string = `添加题目和结构图谱关系记录不成功!`;

        //显示信息框
        alert(strInfo);
        return false;
      }
    } catch (e) {
      const strMsg: string = `添加题目和结构图谱关系记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return returnbool; //一定要有一个返回值，否则会出错！
  }
}
