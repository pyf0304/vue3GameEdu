import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsge_StructureChartNodeEN } from '@/ts/L0Entity/Knowledges/clsge_StructureChartNodeEN';
import { clsge_StructureGraphEN } from '@/ts/L0Entity/Knowledges/clsge_StructureGraphEN';
import {
  ge_StructureChartNode_AddNewRecordWithMaxIdAsync,
  ge_StructureChartNode_CheckPropertyNew,
  ge_StructureChartNode_DelRecordAsync,
  ge_StructureChartNode_GetFirstObjAsync,
  ge_StructureChartNode_GetObjLstAsync,
  ge_StructureChartNode_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_StructureChartNodeWApi';
import {
  ge_StructureGraph_AddNewRecordWithMaxIdAsync,
  ge_StructureGraph_CheckPropertyNew,
  ge_StructureGraph_GetFirstObjAsync,
  ge_StructureGraph_GetObjLstAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_StructureGraphWApi';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { ge_StructureGraphCRUD } from '@/viewsBase/Knowledges/ge_StructureGraphCRUD';
import { clsge_QuestionStructureGraphRelaEN } from '@/ts/L0Entity/GameLearn/clsge_QuestionStructureGraphRelaEN';
import { ge_StructureSubmitResults_GetFirstObjAsync } from '@/ts/L3ForWApi/Knowledges/clsge_StructureSubmitResultsWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { ge_StructureGraph_EditEx } from './ge_StructureGraph_EditEx';
import { ge_StructureSection_GetObjLstAsync } from 'share-stu-study-base-lib';
import { ge_StructureGraphEx_SubmitStructureGraphAsync } from 'share-stu-study-base-lib';
import {
  ge_QuestionStructureGraphRela_AddNewRecordAsync,
  ge_QuestionStructureGraphRela_CheckPropertyNew,
} from '@/ts/L3ForWApi/GameLearn/clsge_QuestionStructureGraphRelaWApi';
import { useUserStore } from '@/store/modulesShare/user';
import { message } from '@/utils/myMessage';
import { divVarSet, viewVarSet } from '@/views/Knowledges/ge_StructureGraphVueShare';
declare function layui_Alert(iconKey: string, strMsg: string): void;
declare function load_jsmind(strjson: string): void;
declare function add_node(strKeyId: string, strKeyName: string): void;

declare function setTimeShow(): void;
declare function remove_node(): void;

declare function Show_TimeShow(): void;
declare function Show_nav_title(): void;

/* spage_StructureSectionCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class StructureChart extends ge_StructureGraphCRUD implements IShowList {
  public divName4Edit: string = 'divEdit'; //编辑区的Id
  public divName4List: string = 'divList';
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string) {
    this.ShowStructureGraph();
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_StructureGraph':
        alert('该类没有绑定该函数：[this.BindGv_ge_StructureGraph_Cache]！');
        //this.BindGv_ge_StructureGraphCache();
        break;
    }
  }

  public static btn_Click(strCommandName: string, strKeyId: string) {
    //const objPage: StructureChart = new StructureChart();
    let objPage: StructureChart;
    if (ge_StructureGraphCRUD.objPageCRUD == null) {
      ge_StructureGraphCRUD.objPageCRUD = new StructureChart();
      objPage = <StructureChart>ge_StructureGraphCRUD.objPageCRUD;
    } else {
      objPage = <StructureChart>ge_StructureGraphCRUD.objPageCRUD;
    }
    const objPageEdit: ge_StructureGraph_EditEx = new ge_StructureGraph_EditEx(
      'ge_StructureGraph_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        //objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        //objPageEdit.btnUpdateRecord_Click();
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        //objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        //objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        strMsg =
          '命令:' + strCommandName + '在函数(ge_StructureGraphCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
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
      // 为查询区绑定下拉框
      //const gvBindDdl = await this.BindDdl4QueryRegion();

      //this.hidSortvge_StructureSectionBy = "knowledgeTitle Asc";
      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_vge_StructureSection();
      const userStore = useUserStore();
      if (userStore.userId != '') {
        if (GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionId') != '') {
          $('#hidOpType').val('ok');
          //首先检测当前用户再当前这个课程，当前类型章节下是否有图谱
          //调整当前页面之前首先检测是否有传送图谱Id,如果有那么就显示这个图谱相关信息，如果没有就创建图谱和相对应的结构节点，并创建题目和图谱关系表
          await this.IsAddStructureGraph();
        }

        await this.ShowStructureGraph();
        //LoadjsPlumb();
        HideDivInDivObj(this.thisDivLayout, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  //绑定结构图谱
  public async ShowStructureGraph() {
    const strThisFuncName = this.ShowStructureGraph.name;
    const userStore = useUserStore();
    const strid_CurrEduCls = clsPubLocalStorage.idCurrEduCls;
    const strUserId = userStore.userId;

    let strWhereCond = "1=1 and idCurrEduCls ='" + strid_CurrEduCls + "'";
    if (GetInputValueInDivObj(this.thisDivLayout, 'hidOpType') == 'ok') {
      strWhereCond +=
        " and structureGraphId ='" +
        GetInputValueInDivObj(this.thisDivLayout, 'hidStructureGraphId') +
        "'";
    }
    strWhereCond += " and createUser ='" + strUserId + "'";
    strWhereCond += ' order by updDate Asc';

    const arrge_StructureGraphObjLst: Array<clsge_StructureGraphEN> = [];
    try {
      const arrge_StructureGraphObjLst = await ge_StructureGraph_GetObjLstAsync(strWhereCond);

      let strhtml = '';

      let k = 0;
      for (let i = 0; i < arrge_StructureGraphObjLst.length; i++) {
        const strStructureGraphId = arrge_StructureGraphObjLst[i].structureGraphId;
        const strSectionTypeId = arrge_StructureGraphObjLst[i].sectionTypeId;
        let strStructureGraphName = arrge_StructureGraphObjLst[i].structureGraphName;

        const strCreateUser = arrge_StructureGraphObjLst[i].createUser;
        if (strStructureGraphName.length > 12) {
          strStructureGraphName = strStructureGraphName.substr(0, 12);
        }
        k++;
        strhtml += '<li class="nav-item">';
        if (GetInputValueInDivObj(this.thisDivLayout, 'hidStructureGraphId') == '') {
          $('#hidStructureGraphId').val(strStructureGraphId);
          $('#navGraphName').html(strStructureGraphName);
          $('#hidSectionTypeId').val(strSectionTypeId);

          strhtml +=
            '<a id="Graph' +
            strStructureGraphId +
            '" title="' +
            strStructureGraphName +
            '"  href="javascript:void(0)" class="nav-link active" data-toggle="pill" onclick=GraphMenu_Click("' +
            strStructureGraphId +
            '","' +
            strStructureGraphName +
            '","' +
            strSectionTypeId +
            '")>' +
            strStructureGraphName;
          if (strCreateUser == strUserId) {
            strhtml +=
              '<i title="修改结构图谱" onclick=btn_Click("UpdateRecordInTab","' +
              strStructureGraphId +
              '") class="layui-icon layui-icon-edit" style="font-size:20px; color: #ff6a00;"></i>';
          }
          strhtml += '</a>';
        } else {
          strhtml +=
            '<a id="Graph' +
            strStructureGraphId +
            '" title="' +
            strStructureGraphName +
            '"  href="javascript:void(0)" class="nav-link" data-toggle="pill" onclick=GraphMenu_Click("' +
            strStructureGraphId +
            '","' +
            strStructureGraphName +
            '","' +
            strSectionTypeId +
            '")>' +
            strStructureGraphName;
          if (strCreateUser == strUserId) {
            strhtml +=
              '<i title="修改结构图谱" onclick=btn_Click("UpdateRecordInTab","' +
              strStructureGraphId +
              '") class="layui-icon layui-icon-edit" style="font-size:20px; color: #ff6a00;"></i>';
          }
          strhtml += '</a>';
        }

        //if (arrge_StructureGraphObjLst[i].updUser == strUserId) {
        //    //编辑
        //    strhtml += '<button title="编辑问题" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateQuestions_Click("' + strQuestionsId + '")><i class="layui-icon">&#xe642;</i></button>';
        //    //删除
        //    strhtml += '<button title="删除问题" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDelQuestions_Click("' + strQuestionsId + '") href="javascript:;"><i class="layui-icon">&#xe640;</i></button>';
        //}

        //strhtml += '<span class="rowtit color5">[提问用户]：</span>' + arrge_StructureGraphObjLst[i].userName + '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>' + arrge_StructureGraphObjLst[i].updDate;

        strhtml += '</li>';
        //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
        //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
      }

      //拼接；
      $('#ulGraph').html(strhtml);

      //绑定结构章节
      const responseBindGv1 = await this.BindGv_ge_StructureSection();

      //检查是否提交
      const response = await this.isSubmit();

      await this.BindGv_ge_StructureChartNode();
      console.log('完成绑定ulGraph!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  public Arrge_StructureChartNodeObjLst: Array<clsge_StructureChartNodeEN> = [];

  //是否提交
  public async isSubmit() {
    const strStructureGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidStructureGraphId');
    const strWhereCond: string = " 1=1 and structureGraphId='" + strStructureGraphId + "'";

    //获取观点分类

    const objge_StructureGraph = await ge_StructureGraph_GetFirstObjAsync(strWhereCond);
    if (objge_StructureGraph == null) return;
    if (objge_StructureGraph.isSubmit == true) {
      $('#btn1').hide();
      $('#btn3').hide();

      //获取观点分类

      const objge_StructureSubmitResults = await ge_StructureSubmitResults_GetFirstObjAsync(
        strWhereCond,
      );
      if (objge_StructureSubmitResults == null) return;
      const strTakeUpTime = objge_StructureSubmitResults.takeUpTime;
      const intCorrectNum = objge_StructureSubmitResults.correctNum;
      const intErrorNum = objge_StructureSubmitResults.errorNum;
      const intFraction = objge_StructureSubmitResults.fraction;

      $('#TimeShow').remove();
      //$("TimeShow").hide();
      //$("#a_TakeUpTime").show();
      //$("#a_CorrectNum").show();
      //$("#a_ErrorNum").show();
      //$("#a_Fraction").show();
      //Show_TimeShow();
      Show_nav_title();

      $('#btn_CorrectStructureChart').show();

      $('#a_TakeUpTime').html('耗时:' + strTakeUpTime + ' / ');
      $('#a_CorrectNum').html('正确数:' + intCorrectNum + ' / ');
      $('#a_ErrorNum').html('错误数:' + intErrorNum + ' / ');
      $('#a_Fraction').html('分数:' + intFraction);
    } else {
      $('#a_TakeUpTime').remove();
      $('#a_CorrectNum').remove();
      $('#a_ErrorNum').remove();
      $('#a_Fraction').remove();

      $('#btn_CorrectStructureChart').hide();

      Show_TimeShow();

      $('#btn1').show();
      $('#btn3').show();
      //$("#a_TimeShow").show();
      setTimeShow();
    }
  }
  //绑定结构节点
  public async BindGv_ge_StructureChartNode() {
    const strStructureGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidStructureGraphId');
    const strWhereCond: string = " 1=1 and structureGraphId='" + strStructureGraphId + "'";

    //获取观点分类

    const arrge_StructureChartNodeObjLst = await ge_StructureChartNode_GetObjLstAsync(strWhereCond);
    this.Arrge_StructureChartNodeObjLst = arrge_StructureChartNodeObjLst;

    if (arrge_StructureChartNodeObjLst.length > 0) {
      let strStructureJson = '[';
      for (let i = 0; i < arrge_StructureChartNodeObjLst.length; i++) {
        const strStructureChartId: string = arrge_StructureChartNodeObjLst[i].structureNodeId;
        const strParentId: string = arrge_StructureChartNodeObjLst[i].parentId;
        const strStructureName: string = arrge_StructureChartNodeObjLst[i].structureNodeName;
        const strDirection: string = arrge_StructureChartNodeObjLst[i].direction;
        const isExpanded: boolean = arrge_StructureChartNodeObjLst[i].isExpanded;
        const isRoot: boolean = arrge_StructureChartNodeObjLst[i].isRoot;
        if (isRoot == true) {
          strStructureJson += '{';
          strStructureJson += '"id":"' + strStructureChartId + '",';
          strStructureJson += '"isroot":' + isRoot + ',';
          strStructureJson += '"expanded":' + isExpanded + ',';
          strStructureJson += '"topic":"' + strStructureName + '"';
          strStructureJson += '},';
        } else {
          strStructureJson += '{';
          strStructureJson += '"id":"' + strStructureChartId + '",';
          strStructureJson += '"parentid":"' + strParentId + '",';
          strStructureJson += '"topic":"' + strStructureName + '",';
          strStructureJson += '"expanded":' + isExpanded + ',';
          strStructureJson += '"direction":"' + strDirection + '"';
          strStructureJson += '},';
        }
      }
      strStructureJson = strStructureJson.substr(0, strStructureJson.length - 1);
      strStructureJson += ']';

      const strJson = eval(strStructureJson);
      //加载jsmind
      load_jsmind(strJson);
    }
  }

  //绑定结构章节
  public async BindGv_ge_StructureSection() {
    const strSectionTypeId = GetInputValueInDivObj(this.thisDivLayout, 'hidSectionTypeId');
    let strWhereCond1: string =
      " 1 = 1 and courseId='" +
      clsPubLocalStorage.courseId +
      "' and sectionTypeId='" +
      strSectionTypeId +
      "'";
    strWhereCond1 += " and parentId<>'root' order by newid()";
    //获取观点分类

    const arrge_StructureSectionObjLst = await ge_StructureSection_GetObjLstAsync(strWhereCond1);

    const strStructureGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidStructureGraphId');
    let strWhereCond2: string = " 1=1 and structureGraphId='" + strStructureGraphId + "'";
    strWhereCond2 += " and parentId<>'root'";
    //获取结构节点

    const arrge_StructureChartNodeObjLst = await ge_StructureChartNode_GetObjLstAsync(
      strWhereCond2,
    );

    let strhtml = '';

    let tempArr = arrge_StructureSectionObjLst;
    for (let i = 0; i < arrge_StructureChartNodeObjLst.length; i++) {
      for (let j = 0; j < arrge_StructureSectionObjLst.length; j++) {
        if (
          arrge_StructureSectionObjLst[j].structureSectionId ==
          arrge_StructureChartNodeObjLst[i].structureSectionId
        ) {
          tempArr.splice(tempArr.indexOf(arrge_StructureSectionObjLst[j]), 1);
        }
      }
      //let result = arrge_StructureSectionObjLst.filter(item => this.Arrge_StructureChartNodeObjLst.some(id => id.structureSectionId != arrge_StructureSectionObjLst[i].structureSectionId));
    }

    //let result = arrge_StructureSectionObjLst.filter(item => this.Arrge_StructureChartNodeObjLst.some(id => id.structureSectionId == item.structureSectionId));

    //let result = this.Arrge_StructureChartNodeObjLst.filter(item => arrge_StructureSectionObjLst.some(id => id.structureSectionId == item.structureSectionId));

    //for (let i = 0; i < arrge_StructureSectionObjLst.length; i++) {
    //    let result = arrge_StructureSectionObjLst.filter(item => this.Arrge_StructureChartNodeObjLst.some(id => id.structureSectionId != arrge_StructureSectionObjLst[i].structureSectionId));

    //    //const strKnowledgesNode = document.getElementById("KnowledgesNode");

    //    //const div = document.createElement("div");
    //    //div.className = "node node1css";
    //    //div.setAttribute("data-type", "server");
    //    //div.innerHTML = arrge_StructureSectionObjLst[i].knowledgeTitle;
    //    ////strKnowledgesNode.a
    //    //strKnowledgesNode.appendChild(div);
    //}
    for (let i = 0; i < tempArr.length; i++) {
      const strStructureSectionId = tempArr[i].structureSectionId;
      const strStructureSectionContent = tempArr[i].structureSectionContent;
      strhtml +=
        '<div id="' +
        strStructureSectionId +
        '" onclick=SectionAddNode_Click("' +
        strStructureSectionId +
        '","' +
        strStructureSectionContent +
        '") class="node node1css" data-type="server">' +
        strStructureSectionContent +
        '</div>';
    }

    //strhtml += '<div class+="node node1css" data-type="server">' + arrge_StructureSectionObjLst[0].knowledgeTitle + '</div>';
    $('#StructureSectionNode').html(strhtml);
  }
  //添加结构图表
  public async AddStructureChart(
    strParentId: string,
    strStructureSectionId: string,
    strStructureName: string,
  ) {
    const userStore = useUserStore();
    const strStructureGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidStructureGraphId');

    const objge_StructureChartNodeEN: clsge_StructureChartNodeEN = new clsge_StructureChartNodeEN();

    objge_StructureChartNodeEN.structureNodeName = strStructureName;
    objge_StructureChartNodeEN.structureGraphId = strStructureGraphId;
    objge_StructureChartNodeEN.structureSectionId = strStructureSectionId;
    objge_StructureChartNodeEN.parentId = strParentId;
    objge_StructureChartNodeEN.isRoot = false;
    objge_StructureChartNodeEN.isExpanded = true;
    objge_StructureChartNodeEN.direction = 'right';
    objge_StructureChartNodeEN.updDate = clsPubFun4Web.getNowDate(); // 修改日期
    objge_StructureChartNodeEN.updUser = userStore.userId; // 修改用户Id

    try {
      ge_StructureChartNode_CheckPropertyNew(objge_StructureChartNodeEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await ge_StructureChartNode_AddNewRecordWithMaxIdAsync(
        objge_StructureChartNodeEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //ge_StructureChartNode_ReFreshCache();
        //const strInfo: string = `添加记录成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        add_node(returnKeyId, objge_StructureChartNodeEN.structureNodeName);
      } else {
        const strInfo: string = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async StructureChart_DelRecord(strStructureChartId: string) {
    const strThisFuncName = this.StructureChart_DelRecord.name;
    try {
      const strWhere1 = " StructureChartId= '" + strStructureChartId + "'";
      const objge_StructureChartNode = await ge_StructureChartNode_GetFirstObjAsync(strWhere1);
      if (objge_StructureChartNode == null) {
        const strMsg = Format(
          '根据条件获取相应记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (objge_StructureChartNode.isRoot == false) {
        const strWhere2 = " parentId= '" + strStructureChartId + "'";
        const intParentIdCount = await ge_StructureChartNode_GetRecCountByCondAsync(strWhere2);

        if (intParentIdCount == 0) {
          const responseText2 = await ge_StructureChartNode_DelRecordAsync(strStructureChartId);
          const returnInt: number = responseText2;
          if (returnInt > 0) {
            //ge_StructureChartNode_ReFreshCache();
            //const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
            ////显示信息框
            //alert(strInfo);
            this.BindGv_ge_StructureSection();
            remove_node();
          } else {
            const strInfo: string = `删除记录不成功!`;
            //显示信息框
            alert(strInfo);
          }
          console.log('完成DelRecord!');
        } else {
          message.warning('请删除章节下面的所有子节点才可删除当前节点！');
        }
      } else {
        message.warning('当前节点是根节点，不能删除！');
      }
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
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

  //是否添加结构图
  public async IsAddStructureGraph() {
    const strStructureGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidStructureGraphId');
    //const strQuestionId = $("#hidQuestionId").val();
    //const strSectionTypeId = $("#hidSectionTypeId").val();

    if (strStructureGraphId == null || strStructureGraphId == '') {
      //添加图谱

      const returnKeyId = await this.AddStructureGraph();
      //返回的图谱ID记录
      $('#hidStructureGraphId').val(returnKeyId.toString());

      if (returnKeyId != '') {
        await this.AddStructureChart_Root(returnKeyId.toString());
        await this.AddQuestionStructureGraphRela(returnKeyId.toString());
      }
    }
    //const strWhereCond: string = " 1=1 and structureGraphId='" + strStructureGraphId + "'";
  }

  //添加结构图谱
  public async AddStructureGraph() {
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objge_StructureGraphEN: clsge_StructureGraphEN = new clsge_StructureGraphEN();
    this.PutDataToge_StructureGraphClass(objge_StructureGraphEN);
    if (IsNullOrEmpty(objge_StructureGraphEN.sectionTypeId) == true) {
      objge_StructureGraphEN.sectionTypeId = '00000001';
    }
    try {
      ge_StructureGraph_CheckPropertyNew(objge_StructureGraphEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await ge_StructureGraph_AddNewRecordWithMaxIdAsync(
        objge_StructureGraphEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //ge_StructureGraph_ReFreshCache();
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
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  public PutDataToge_StructureGraphClass(pobjge_StructureGraphEN: clsge_StructureGraphEN) {
    const userStore = useUserStore();
    pobjge_StructureGraphEN.structureGraphName =
      userStore.getUserName + '_' + GetInputValueInDivObj(this.thisDivLayout, 'hidSectionTypeId'); // 知识点图名
    pobjge_StructureGraphEN.sectionTypeId = GetInputValueInDivObj(
      this.thisDivLayout,
      'hidSectionTypeId',
    ); // 章节类型
    pobjge_StructureGraphEN.courseId = clsPubLocalStorage.courseId; // 课程Id
    pobjge_StructureGraphEN.updDate = clsPubFun4Web.getNowDate(); // 修改日期
    pobjge_StructureGraphEN.updUser = userStore.userId; // 修改用户Id
    pobjge_StructureGraphEN.createUser = userStore.userId; // 修改用户Id
    pobjge_StructureGraphEN.idCurrEduCls = clsPubLocalStorage.idCurrEduCls;

    pobjge_StructureGraphEN.isSubmit = false;
    pobjge_StructureGraphEN.startTime = clsPubFun4Web.getNowDate(); // 开始时间

    const strRoleId = userStore.getRoleId;
    //判断角色
    //学生
    if (strRoleId == '00620003') {
      pobjge_StructureGraphEN.graphTypeId = '02';
      pobjge_StructureGraphEN.isRecommend = false;
    } else {
      pobjge_StructureGraphEN.graphTypeId = '01';
      pobjge_StructureGraphEN.isRecommend = true;
    }
  }

  //添加结构图表
  public async AddStructureChart_Root(strKeyId: string) {
    const userStore = useUserStore();
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objge_StructureChartNodeEN: clsge_StructureChartNodeEN = new clsge_StructureChartNodeEN();

    objge_StructureChartNodeEN.structureNodeName =
      userStore.getUserName + '_' + GetInputValueInDivObj(this.thisDivLayout, 'hidSectionTypeId'); // 知识点图名;
    objge_StructureChartNodeEN.structureGraphId = strKeyId;
    objge_StructureChartNodeEN.parentId = 'root';
    objge_StructureChartNodeEN.isRoot = true;
    objge_StructureChartNodeEN.isExpanded = true;
    objge_StructureChartNodeEN.updDate = clsPubFun4Web.getNowDate(); // 修改日期
    objge_StructureChartNodeEN.updUser = userStore.userId; // 修改用户Id

    try {
      ge_StructureChartNode_CheckPropertyNew(objge_StructureChartNodeEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await ge_StructureChartNode_AddNewRecordWithMaxIdAsync(
        objge_StructureChartNodeEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //ge_StructureChartNode_ReFreshCache();
        const strInfo: string = `添加知识图谱根节点记录成功!`;

        //显示信息框
        console.log(strInfo);
        //alert(strInfo);
      } else {
        const strInfo: string = `添加添加知识图谱根节点记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加添加知识图谱根节点记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  //添加题目和结构图谱关系
  public async AddQuestionStructureGraphRela(strKeyId: string) {
    const userStore = useUserStore();
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objge_QuestionStructureGraphRelaEN: clsge_QuestionStructureGraphRelaEN =
      new clsge_QuestionStructureGraphRelaEN();

    objge_QuestionStructureGraphRelaEN.structureGraphId = strKeyId;
    objge_QuestionStructureGraphRelaEN.questionId = Number(
      GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionId'),
    );
    objge_QuestionStructureGraphRelaEN.gameLevelId = GetInputValueInDivObj(
      this.thisDivLayout,
      'hidGameLevelId',
    );
    objge_QuestionStructureGraphRelaEN.courseId = clsPubLocalStorage.courseId;
    objge_QuestionStructureGraphRelaEN.createUser = userStore.userId; // 修改用户Id
    objge_QuestionStructureGraphRelaEN.updDate = clsPubFun4Web.getNowDate(); // 修改日期
    objge_QuestionStructureGraphRelaEN.updUser = userStore.userId; // 修改用户Id

    try {
      ge_QuestionStructureGraphRela_CheckPropertyNew(objge_QuestionStructureGraphRelaEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    let returnbool: boolean = false;
    try {
      returnbool = await ge_QuestionStructureGraphRela_AddNewRecordAsync(
        objge_QuestionStructureGraphRelaEN,
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
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'eduClsName|Ex':
        viewVarSet.sortge_StructureGraphBy = `CurrEduCls|eduClsName ${sortDirection}|ge_StructureGraph.IdCurrEduCls = CurrEduCls.IdCurrEduCls`;
        break;
      default:
        viewVarSet.sortge_StructureGraphBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_StructureGraph4Func(this.thisDivList);
  }
}
