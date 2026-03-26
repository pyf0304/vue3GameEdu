import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { clsge_KnowledgesUserMasterEN } from '@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterEN';
import { clsgs_KnowledgesGraphEN } from 'share-stu-study-base-lib';
import { clsvgs_KnowledgesLogic_SimEN } from '@/ts/L0Entity/Knowledges/clsvgs_KnowledgesLogic_SimEN';
import { clsgs_KnowledgesLogic_UserEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogic_UserEN';
import { clsgs_RelaTypeEN } from 'share-stu-study-base-lib';
import { cc_CourseKnowledges_GetObjLstAsync } from 'share-stu-study-base-lib';
import {
  ge_KnowledgesUserMaster_AddNewRecordAsync,
  ge_KnowledgesUserMaster_GetFirstObjAsync,
  ge_KnowledgesUserMaster_GetObjLstAsync,
  ge_KnowledgesUserMaster_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_KnowledgesUserMasterWApi';
import { gs_KnowledgesGraph_GetObjLstAsync } from 'share-stu-study-base-lib';
import { gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync } from 'share-stu-study-base-lib';
import { gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync } from 'share-stu-study-base-lib';
import {
  gs_KnowledgesLogic_User_AddNewRecordAsync,
  gs_KnowledgesLogic_User_GetFirstObjAsync,
  gs_KnowledgesLogic_User_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesLogic_UserWApi';
import { gs_RelaType_GetSubObjLstCache } from 'share-stu-study-base-lib';
import { KnowledgeType_GetObjLstAsync } from 'share-stu-study-base-lib';
import { vgs_KnowledgesLogic_User_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsvgs_KnowledgesLogic_User_SimWApi';
import { gs_KnowledgesGraphEx_SortByUpdDate } from 'share-stu-study-base-lib';
import { gs_KnowledgesLogicEx_AddNewRecordAsync } from 'share-stu-study-base-lib';
import { gs_KnowledgesLogicRelaEx_AddNewRecordAsync } from 'share-stu-study-base-lib';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { vgs_KnowledgesLogic_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsvgs_KnowledgesLogic_SimWApi';
import { clsvgs_KnowledgesLogic_User_SimEN } from '@/ts/L0Entity/Knowledges/clsvgs_KnowledgesLogic_User_SimEN';
import { vgs_KnowledgesLogicRela_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsvgs_KnowledgesLogicRela_SimWApi';
import { clsvgs_KnowledgesLogicRela_SimEN } from '@/ts/L0Entity/Knowledges/clsvgs_KnowledgesLogicRela_SimEN';
import { useUserStore } from '@/store/modulesShare/user';
import { message } from '@/utils/myMessage';
// import { gs_KnowledgesGraph_EditEx } from '@/viewsShare/Knowledges/gs_KnowledgesGraph_EditEx';

//declare function LoadjsPlumb(): void;
declare function LoadKnowledge(): void;
declare function DragDeviceLeft(): void;
declare function layui_Alert(strIcon: string, strMsg: string): void;
// declare function Page_Load1(): void;
declare const window: any;

/* spacc_CourseKnowledgesCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class KnowledgeGraph_IFrame implements IShowList {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return KnowledgeGraph_IFrame.divLayout;
  }

  public divName4Edit: string = 'divEdit';
  public divName4List: string = 'divList'; //编辑区的Id

  BindGv(strType: string) {
    this.BindLogicGraph();
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'gs_KnowledgesGraph':
        alert('该类没有绑定该函数：[this.BindGv_gs_KnowledgesGraph_Cache]！');
        //this.BindGv_gs_KnowledgesGraphCache();
        break;
    }
  }

  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: KnowledgeGraph_IFrame = new KnowledgeGraph_IFrame();
    // const objPageEdit: gs_KnowledgesGraph_EditEx = new gs_KnowledgesGraph_EditEx(
    //   'gs_KnowledgesGraph_EditEx',
    //   objPage,
    // );
    switch (strCommandName) {
      case 'Query': //查询记录
        //objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        // objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        // objPageEdit.btnAddNewRecord_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(gs_KnowledgesGraphCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
  //public static divName4List: string = "divDataLst";
  //public static mstrSortvcc_CourseKnowledgesBy: string = "courseKnowledgeId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public Arrgs_KnowledgesLogicObjLst: Array<clsvgs_KnowledgesLogic_SimEN> = [];

  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      if (IsNullOrEmpty(this.qsKnowledgeGraphId) == true) {
        const strMsg = Format(
          '变量知识点图Id没有传递，为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const userStore = useUserStore();
      if (userStore.userId != '') {
        if (GetInputValueInDivObj(this.thisDivLayout, 'hidOpType') != '1') {
          //PageLoad();
        }
        await this.BindLogicGraph();

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

  //绑定知识点图谱
  public async ShowKnowledgeGraphBak() {
    const strThisFuncName = this.ShowKnowledgeGraphBak.name;
    const strMenu = $('#hidGraphMenu').val();
    const strid_CurrEduCls = clsPubLocalStorage.idCurrEduCls;
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    let strWhereCond = "1=1 and idCurrEduCls ='" + strid_CurrEduCls + "'";
    switch (strMenu) {
      case '1':
        strWhereCond += ' and isAnswer=1 and isRecommend = 1';
        $('#i_AddGraph').hide();
        break;
      case '2':
        strWhereCond += " and isRecommend = 1 or createUser ='" + strUserId + "'";
        //strWhereCond += " and createUser ='" + strUserId + "'";
        break;
      case '3':
        strWhereCond += " and isRecommend = 1 or createUser ='" + strUserId + "'";
        break;
    }
    //strWhereCond += " order by updDate Asc";
    strWhereCond += '[exclude]or [/exclude]';
    let arrgs_KnowledgesGraphObjLst: Array<clsgs_KnowledgesGraphEN_T> = [];
    try {
      arrgs_KnowledgesGraphObjLst = await gs_KnowledgesGraph_GetObjLstAsync(strWhereCond);
      arrgs_KnowledgesGraphObjLst = arrgs_KnowledgesGraphObjLst.sort(
        gs_KnowledgesGraphEx_SortByUpdDate,
      );
      let strhtml = '';

      let k = 0;
      for (let i = 0; i < arrgs_KnowledgesGraphObjLst.length; i++) {
        const strKnowledgeGraphId = arrgs_KnowledgesGraphObjLst[i].knowledgeGraphId;
        const strKnowledgeGraph_Name = arrgs_KnowledgesGraphObjLst[i].knowledgeGraphName;
        let strKnowledgeGraphName = arrgs_KnowledgesGraphObjLst[i].knowledgeGraphName;
        const strCreateUser = arrgs_KnowledgesGraphObjLst[i].createUser;
        if (strKnowledgeGraphName.length > 14) {
          strKnowledgeGraphName = strKnowledgeGraphName.substr(0, 12);
        }
        k++;
        strhtml += '<li class="nav-item">';
        if (this.qsKnowledgeGraphId == '') {
          //this.qsKnowledgeGraphId  = strKnowledgeGraphId;
          $('#navGraphName').html(strKnowledgeGraph_Name);

          strhtml +=
            '<a id="Graph' +
            strKnowledgeGraphId +
            '" title="' +
            strKnowledgeGraph_Name +
            '"  href="javascript:void(0)" class="nav-link active" data-toggle="pill" onclick=GraphMenu_Click("' +
            strKnowledgeGraphId +
            '","' +
            strKnowledgeGraph_Name +
            '")>' +
            strKnowledgeGraphName;
          if (strCreateUser == strUserId) {
            strhtml +=
              '<i title="修改知识图谱" onclick=btn_Click("UpdateRecordInTab","' +
              strKnowledgeGraphId +
              '") class="layui-icon layui-icon-edit" style="font-size:20px; color: #ff6a00;"></i>';
          }
          strhtml += '</a>';
        } else {
          strhtml +=
            '<a id="Graph' +
            strKnowledgeGraphId +
            '" title="' +
            strKnowledgeGraph_Name +
            '"  href="javascript:void(0)" class="nav-link" data-toggle="pill" onclick=GraphMenu_Click("' +
            strKnowledgeGraphId +
            '","' +
            strKnowledgeGraph_Name +
            '")>' +
            strKnowledgeGraphName;
          if (strCreateUser == strUserId) {
            strhtml +=
              '<i title="修改知识图谱" onclick=btn_Click("UpdateRecordInTab","' +
              strKnowledgeGraphId +
              '") class="layui-icon layui-icon-edit" style="font-size:20px; color: #ff6a00;"></i>';
          }
          strhtml += '</a>';
        }

        strhtml += '</li>';
      }

      //拼接；
      $('#ulGraph').html(strhtml);

      const responseBindGv = await this.BindLogicGraph();
      console.log('完成绑定ulGraph!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //绑定所有逻辑关系相关数据
  public async BindAllLogicGraphBak() {
    $('#main').html('');

    const strGraphMenu = $('#hidGraphMenu').val();
    if (strGraphMenu != '1') {
      $('#TabGraph2_Menu').show();
      const responseBindGv1 = await this.BindGv_vcc_CourseKnowledges();
      DragDeviceLeft();
    } else {
      $('#TabGraph2_Menu').hide();
    }
    const responseBindGv2 = await this.BindGv_gs_KnowledgesLogic();
    const responseBindGv3 = await this.BindGv_gs_KnowledgesLogicRela();
    //LoadjsPlumb();
    LoadKnowledge();
  }
  public async BindLogicGraph() {
    $('#main').html('');

    const strGraphMenu = $('#hidGraphMenu').val();
    if (strGraphMenu != '1') {
      $('#TabGraph2_Menu').show();
      const responseBindGv1 = await this.BindGv_vcc_CourseKnowledges();
      DragDeviceLeft();
    } else {
      $('#TabGraph2_Menu').hide();
    }
    const responseBindGv2 = await this.BindGv_gs_KnowledgesLogic();
    const responseBindGv3 = await this.BindGv_gs_KnowledgesLogicRela();
    //LoadjsPlumb();
    LoadKnowledge();
  }
  //绑定左边的知识点标题
  public async BindGv_vcc_CourseKnowledges() {
    const strThisFuncName = this.BindGv_vcc_CourseKnowledges.name;
    try {
      const strWhereCond: string = " 1 = 1 and courseId='" + clsPubLocalStorage.courseId + "'";

      //获取观点分类

      const arrKnowledgeTypeObjLst = await KnowledgeType_GetObjLstAsync(strWhereCond);

      //获取课程知识点

      let arrcc_CourseKnowledgesObjLst2: Array<clscc_CourseKnowledgesEN_T> = [];

      const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstAsync(strWhereCond);

      let strhtml = '';

      let tempArr = arrcc_CourseKnowledgesObjLst;
      for (let i = 0; i < this.Arrgs_KnowledgesLogicObjLst.length; i++) {
        for (let j = 0; j < arrcc_CourseKnowledgesObjLst.length; j++) {
          if (
            arrcc_CourseKnowledgesObjLst[j].courseKnowledgeId ==
            this.Arrgs_KnowledgesLogicObjLst[i].courseKnowledgeId
          ) {
            tempArr.splice(tempArr.indexOf(arrcc_CourseKnowledgesObjLst[j]), 1);
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

      for (let i = 0; i < arrKnowledgeTypeObjLst.length; i++) {
        //strhtml += '<div class="KnowledgeTypeTitle">'
        strhtml +=
          '<div class="alert alert-success"><strong >' +
          arrKnowledgeTypeObjLst[i].knowledgeTypeName +
          '</strong></div>';
        //strhtml += '<div>' + arrKnowledgeTypeObjLst[i].knowledgeTypeName + '</div>';

        arrcc_CourseKnowledgesObjLst2 = tempArr.filter(
          (x: any) => x.knowledgeTypeId == arrKnowledgeTypeObjLst[i].knowledgeTypeId,
        );
        if (arrcc_CourseKnowledgesObjLst2 != null) {
          for (let j = 0; j < arrcc_CourseKnowledgesObjLst2.length; j++) {
            strhtml +=
              '<div id="' +
              arrcc_CourseKnowledgesObjLst2[j].courseKnowledgeId +
              '" class="node node1css" data-type="server">' +
              arrcc_CourseKnowledgesObjLst2[j].knowledgeTitle +
              '</div>';
          }
        }
        strhtml += '<br>';
      }

      //strhtml += '<div class+="node node1css" data-type="server">' + arrcc_CourseKnowledgesObjLst[0].knowledgeTitle + '</div>';
      $('#KnowledgesNode').html(strhtml);
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //绑定知识点逻辑点位
  public async BindGv_gs_KnowledgesLogic() {
    $('#hidLogicNodeJson').val('');
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;
    const strKnowledgeGraphId = this.qsKnowledgeGraphId;
    const strWhereCond: string = " 1=1 and knowledgeGraphId='" + strKnowledgeGraphId + "'";

    //获取知识点逻辑点位
    //const arrgs_KnowledgesLogicObjLst: Array<clsvgs_KnowledgesLogic_SimEN> = [];
    let arrgs_KnowledgesLogicObjLst = await vgs_KnowledgesLogic_Sim_GetObjLstCache(strCourseId);
    arrgs_KnowledgesLogicObjLst = arrgs_KnowledgesLogicObjLst.filter(
      (x) => x.knowledgeGraphId == strKnowledgeGraphId,
    );
    this.Arrgs_KnowledgesLogicObjLst = arrgs_KnowledgesLogicObjLst;

    let arrgs_KnowledgesLogic_UserObjLst: Array<clsvgs_KnowledgesLogic_User_SimEN> = [];

    let arrge_KnowledgesUserMasterObjLst: Array<clsge_KnowledgesUserMasterEN> = [];
    if (GetInputValueInDivObj(this.thisDivLayout, 'hidOpType') != '1') {
      const strWhere1 =
        " knowledgeGraphId='" + strKnowledgeGraphId + "' and updUser='" + strUserId + "'";

      arrgs_KnowledgesLogic_UserObjLst = await vgs_KnowledgesLogic_User_Sim_GetObjLstCache(
        strCourseId,
      );
    } else {
      const strWhere2 =
        " courseId='" +
        strCourseId +
        "' and userId='" +
        strUserId +
        "' and masterLevelId in('0002','0003')";
      arrge_KnowledgesUserMasterObjLst = await ge_KnowledgesUserMaster_GetObjLstAsync(strWhere2);
    }

    if (arrgs_KnowledgesLogicObjLst.length > 0) {
      let strLogicJson = '[';
      for (let i = 0; i < arrgs_KnowledgesLogicObjLst.length; i++) {
        const strCourseKnowledgeId: string = arrgs_KnowledgesLogicObjLst[i].courseKnowledgeId;
        const strLogicNodeId: string = arrgs_KnowledgesLogicObjLst[i].logicNodeId;
        let strClassName: string = '';

        if (GetInputValueInDivObj(this.thisDivLayout, 'hidOpType') != '1') {
          const objClass = arrgs_KnowledgesLogic_UserObjLst.find(
            (x) => x.courseKnowledgeId == strCourseKnowledgeId,
          );
          if (objClass == null) {
            strClassName = arrgs_KnowledgesLogicObjLst[i].classNameCss;
          } else {
            strClassName = objClass.className;
          }
        } else {
          const objMasterClass = arrge_KnowledgesUserMasterObjLst.find(
            (x) => x.courseKnowledgeId == strCourseKnowledgeId,
          );
          if (objMasterClass == null) {
            strClassName = arrgs_KnowledgesLogicObjLst[i].classNameCss;
          } else {
            const strMasterLevelId = objMasterClass.masterLevelId;
            if (strMasterLevelId == '0002') {
              strClassName =
                'node node2css server ui-draggable ui-droppable _jsPlumb_endpoint_anchor_';
            } else if (strMasterLevelId == '0003') {
              strClassName =
                'node node3css server ui-draggable ui-droppable _jsPlumb_endpoint_anchor_';
            }
          }
        }

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
    const strCourseId = clsPubLocalStorage.courseId;
    const strKnowledgeGraphId = this.qsKnowledgeGraphId;
    //const strWhereCond: string = " 1=1 and knowledgeGraphId='" + strKnowledgeGraphId + "'";
    //console.error("strWhereCond:", strWhereCond);
    //获取观点分类
    let arrgs_KnowledgesLogicRelaObjLst: Array<clsvgs_KnowledgesLogicRela_SimEN> = [];
    arrgs_KnowledgesLogicRelaObjLst = await vgs_KnowledgesLogicRela_Sim_GetObjLstCache(strCourseId);
    arrgs_KnowledgesLogicRelaObjLst = arrgs_KnowledgesLogicRelaObjLst.filter(
      (x) => x.knowledgeGraphId == strKnowledgeGraphId,
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

  //保存用户个性化图谱
  public async btnSaveGraph_User_Click() {
    const strThisFuncName = this.btnSaveGraph_User_Click.name;
    const userStore = useUserStore();
    let strKnowledge_Id = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledge_Id');
    const strKnowledgeGraphId = this.qsKnowledgeGraphId;
    const strBgColor = GetInputValueInDivObj(this.thisDivLayout, 'hidBgColor');
    const strUserId = userStore.userId;
    const strCourseId = clsPubLocalStorage.courseId;
    const strMasterId = '000' + $('#hidMasterNum').val();

    const disLength = strKnowledge_Id.length;
    strKnowledge_Id = strKnowledge_Id.substring(disLength - 8, disLength);

    try {
      //添加修改熟练度样式到用户知识点个性化表
      const objgs_KnowledgesLogic_UserEN: clsgs_KnowledgesLogic_UserEN =
        new clsgs_KnowledgesLogic_UserEN();
      const bool1: boolean = true;
      const strWhere =
        " knowledgeGraphId='" +
        strKnowledgeGraphId +
        "' and updUser='" +
        strUserId +
        "' and  courseKnowledgeId='" +
        strKnowledge_Id +
        "'";
      const objgs_KnowledgesLogic_UserEN_Const = await gs_KnowledgesLogic_User_GetFirstObjAsync(
        strWhere,
      );
      if (objgs_KnowledgesLogic_UserEN_Const == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (objgs_KnowledgesLogic_UserEN == null) {
        const objgs_KnowledgesLogic_UserEN1: clsgs_KnowledgesLogic_UserEN =
          new clsgs_KnowledgesLogic_UserEN();
        objgs_KnowledgesLogic_UserEN1.courseKnowledgeId = strKnowledge_Id;
        objgs_KnowledgesLogic_UserEN1.knowledgeGraphId = strKnowledgeGraphId;
        objgs_KnowledgesLogic_UserEN1.className = strBgColor;
        objgs_KnowledgesLogic_UserEN1.updDate = clsPubFun4Web.getNowDate(); // 修改日期
        objgs_KnowledgesLogic_UserEN1.updUser = strUserId;

        const returnBool = await gs_KnowledgesLogic_User_AddNewRecordAsync(
          objgs_KnowledgesLogic_UserEN1,
        );
        if (returnBool == true) {
          const strInfo: string = `保存成功!`;
          //
          ////显示信息框
          //alert(strInfo);
          message.success(strInfo);
        } else {
          const strInfo: string = `保存不成功!`;
          //显示信息框
          alert(strInfo);
          console.log('保存失败');
        }
      } else {
        const objgs_KnowledgesLogic_UserEN2: clsgs_KnowledgesLogic_UserEN =
          new clsgs_KnowledgesLogic_UserEN();
        objgs_KnowledgesLogic_UserEN2.mId = objgs_KnowledgesLogic_UserEN.mId;
        objgs_KnowledgesLogic_UserEN2.courseKnowledgeId = strKnowledge_Id;
        objgs_KnowledgesLogic_UserEN2.knowledgeGraphId = strKnowledgeGraphId;
        objgs_KnowledgesLogic_UserEN2.className = strBgColor;
        objgs_KnowledgesLogic_UserEN2.updDate = clsPubFun4Web.getNowDate(); // 修改日期
        objgs_KnowledgesLogic_UserEN2.updUser = strUserId;
        objgs_KnowledgesLogic_UserEN2.sfUpdFldSetStr = objgs_KnowledgesLogic_UserEN2.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objgs_KnowledgesLogic_UserEN2.mId == 0 ||
          objgs_KnowledgesLogic_UserEN2.mId == undefined
        ) {
          throw '关键字不能为空!';
        }
        const returnBool = await gs_KnowledgesLogic_User_UpdateRecordAsync(
          objgs_KnowledgesLogic_UserEN2,
        );
        if (returnBool == true) {
          const strInfo: string = `保存成功!`;
          //
          ////显示信息框
          //alert(strInfo);
          message.success(strInfo);
        } else {
          const strInfo: string = `保存不成功!`;
          //显示信息框
          alert(strInfo);
          console.log('保存失败');
        }
      }

      //添加熟练度到用户熟练度表

      const strWhere2 =
        " masterTypeId='1' and userId='" +
        strUserId +
        "' and  courseKnowledgeId='" +
        strKnowledge_Id +
        "'";
      const objge_KnowledgesUserMasterEN = await ge_KnowledgesUserMaster_GetFirstObjAsync(
        strWhere2,
      );

      if (objge_KnowledgesUserMasterEN == null) {
        const objge_KnowledgesUserMasterEN1: clsge_KnowledgesUserMasterEN =
          new clsge_KnowledgesUserMasterEN();
        objge_KnowledgesUserMasterEN1.courseKnowledgeId = strKnowledge_Id;
        objge_KnowledgesUserMasterEN1.courseId = strCourseId;
        objge_KnowledgesUserMasterEN1.userId = strUserId;
        objge_KnowledgesUserMasterEN1.masterTypeId = '1';
        objge_KnowledgesUserMasterEN1.masterLevelId = strMasterId;
        objge_KnowledgesUserMasterEN1.updDate = clsPubFun4Web.getNowDate(); // 修改日期
        objge_KnowledgesUserMasterEN1.updUser = strUserId;

        const returnBool = await ge_KnowledgesUserMaster_AddNewRecordAsync(
          objge_KnowledgesUserMasterEN1,
        );
        if (returnBool == true) {
          const strInfo: string = `用户熟练度添加成功!`;
          //
          ////显示信息框
          //alert(strInfo);
          //message.success( strInfo);
          console.log(strInfo);
        } else {
          const strInfo: string = `保存不成功!`;
          //显示信息框
          alert(strInfo);
          console.log('保存失败');
        }
      } else {
        const objge_KnowledgesUserMasterEN2: clsge_KnowledgesUserMasterEN =
          new clsge_KnowledgesUserMasterEN();
        objge_KnowledgesUserMasterEN2.mId = objge_KnowledgesUserMasterEN.mId;
        objge_KnowledgesUserMasterEN2.courseKnowledgeId = strKnowledge_Id;
        objge_KnowledgesUserMasterEN2.courseId = strCourseId;
        objge_KnowledgesUserMasterEN2.userId = strUserId;
        objge_KnowledgesUserMasterEN2.masterTypeId = '1';
        objge_KnowledgesUserMasterEN2.masterLevelId = strMasterId;
        objge_KnowledgesUserMasterEN2.updDate = clsPubFun4Web.getNowDate(); // 修改日期
        objge_KnowledgesUserMasterEN2.updUser = strUserId;

        objge_KnowledgesUserMasterEN2.sfUpdFldSetStr = objge_KnowledgesUserMasterEN2.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objge_KnowledgesUserMasterEN2.mId == 0 ||
          objge_KnowledgesUserMasterEN2.mId == undefined
        ) {
          throw '关键字不能为空!';
        }
        const returnBool = await ge_KnowledgesUserMaster_UpdateRecordAsync(
          objge_KnowledgesUserMasterEN2,
        );
        if (returnBool == true) {
          const strInfo: string = `用户熟练度修改成功!`;
          //
          ////显示信息框
          //alert(strInfo);
          //message.success( strInfo);
          console.log(strInfo);
        } else {
          const strInfo: string = `保存不成功!`;
          //显示信息框
          alert(strInfo);
          console.log('保存失败');
        }
      }
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `修改记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  //保存逻辑关系
  public async btnSaveLogicRela_Click(ojson: any) {
    ShowDivInDivObj(this.thisDivLayout, 'divLoading');
    const userStore = useUserStore();
    const strKnowledgeGraphId = this.qsKnowledgeGraphId;
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
        const strInfo: string = `保存逻辑关系图成功!`;
        message.success(strInfo);
        //const gvResult1 = await this.Bind_UserRela(strid_CurrEduCls);

        HideDivInDivObj(this.thisDivLayout, 'divLoading');
      }
    } else {
      const strInfo: string = `保存用户关系排列图不成功!`;
      alert(strInfo);
      HideDivInDivObj(this.thisDivLayout, 'divLoading');
    }
  }
  //删除之前的用户关系排列图
  public async DelRecord1() {
    try {
      const strKnowledgeGraphId = this.qsKnowledgeGraphId;
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
      return returnInt;
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
      const strKnowledgeGraphId = this.qsKnowledgeGraphId;
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
      return returnInt;
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public get qsKnowledgeGraphId() {
    const strName = 'knowledgeGraphId';
    const reg = new RegExp('(^|&)' + strName + '=([^&]*)(&|$)', 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
}
