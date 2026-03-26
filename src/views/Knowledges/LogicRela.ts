import { useUserStore } from '@/store/modulesShare/user';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsgs_KnowledgesLogicEN } from 'share-stu-study-base-lib';
import { clsgs_RelaTypeEN } from 'share-stu-study-base-lib';
import { cc_CourseChapter_GetObjLstAsync } from 'share-stu-study-base-lib';
import { cc_CourseKnowledges_GetObjLstAsync } from 'share-stu-study-base-lib';
import { gs_KnowledgesGraph_GetFirstObjAsync } from 'share-stu-study-base-lib';
import {
  gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync,
  gs_KnowledgesLogicRela_GetObjLstAsync,
} from 'share-stu-study-base-lib';
import {
  gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync,
  gs_KnowledgesLogic_GetObjLstAsync,
} from 'share-stu-study-base-lib';
import { gs_RelaType_GetSubObjLstCache } from 'share-stu-study-base-lib';
import { gs_KnowledgesLogicEx_AddNewRecordAsync } from 'share-stu-study-base-lib';
import { gs_KnowledgesLogicRelaEx_AddNewRecordAsync } from 'share-stu-study-base-lib';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { message } from '@/utils/myMessage';
declare function LoadjsPlumb(): void;
declare function LoadKnowledge(): void;
declare function DragDeviceLeft(): void;

/* spacc_CourseKnowledgesCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class LogicRela {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return LogicRela.divLayout;
  }
  //public static divName4List: string = "divDataLst";
  //public static mstrSortvcc_CourseKnowledgesBy: string = "courseKnowledgeId";
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
      // 为查询区绑定下拉框
      //const gvBindDdl = await this.BindDdl4QueryRegion();

      //this.hidSortvcc_CourseKnowledgesBy = "knowledgeTitle Asc";
      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_vcc_CourseKnowledges();
      const userStore = useUserStore();
      if (userStore.userId != '') {
        $('#main').html('');
        if (GetInputValueInDivObj(this.thisDivLayout, 'hidstate') == '1') {
          $('#btn1').remove();
          $('#btn2').remove();
          $('#btn3').remove();
          $('#btn4').remove();
        }

        const responseBindGv1 = await this.Bind_gs_KnowledgesGraph();

        const responseBindGv2 = await this.BindGv_gs_KnowledgesLogic();
        const responseBindGv3 = await this.BindGv_gs_KnowledgesLogicRela();

        const responseBindGv4 = await this.BindGv_vcc_CourseKnowledges();
        //LoadjsPlumb();
        DragDeviceLeft();
        LoadKnowledge();
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

  //绑定知识点逻辑点位
  public async Bind_gs_KnowledgesGraph() {
    const strKnowledgeGraphId = GetInputValueInDivObj(this.thisDivLayout, 'hidKnowledgeGraphId');
    const strWhereCond: string = " 1=1 and knowledgeGraphId='" + strKnowledgeGraphId + "'";

    //获取观点分类

    const objgs_KnowledgesGraph = await gs_KnowledgesGraph_GetFirstObjAsync(strWhereCond);
    if (objgs_KnowledgesGraph == null) return;
    $('#nav_Title').html(objgs_KnowledgesGraph.knowledgeGraphName);
  }

  //绑定左边的知识点标题
  public async BindGv_vcc_CourseKnowledges() {
    const strWhereCond: string = " 1 = 1 and courseId='" + clsPubLocalStorage.courseId + "'";

    //获取章节

    const arrcc_CourseChapterObjLst = await cc_CourseChapter_GetObjLstAsync(strWhereCond);

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

    //for (const i = 0; i < tempArr.length; i++) {
    //    strhtml += '<div id="' + tempArr[i].courseKnowledgeId + '" class="node node1css" data-type="server">' + tempArr[i].knowledgeTitle + '</div>';
    //}

    //$("#KnowledgesNode").html(strhtml);

    for (let i = 0; i < arrcc_CourseChapterObjLst.length; i++) {
      //strhtml += '<div class="KnowledgeTypeTitle">'
      //strhtml += '<div>' + arrKnowledgeTypeObjLst[i].knowledgeTypeName + '</div>';

      arrcc_CourseKnowledgesObjLst2 = tempArr.filter(
        (x: any) => x.courseChapterId == arrcc_CourseChapterObjLst[i].courseChapterId,
      );
      if (arrcc_CourseKnowledgesObjLst2.length > 0) {
        strhtml +=
          '<h4 class="chapterName node node1css">' +
          arrcc_CourseChapterObjLst[i].chapterName +
          '</h4>';
        for (let j = 0; j < arrcc_CourseKnowledgesObjLst2.length; j++) {
          strhtml +=
            '<div id="' +
            arrcc_CourseKnowledgesObjLst2[j].courseKnowledgeId +
            '" class="node node1css" data-type="server">' +
            arrcc_CourseKnowledgesObjLst2[j].knowledgeTitle +
            '</div>';
        }
      }
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
  public DelRecord1() {
    return new Promise(async (resolve, reject) => {
      try {
        const strKnowledgeGraphId = GetInputValueInDivObj(
          this.thisDivLayout,
          'hidKnowledgeGraphId',
        );
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
    });
  }

  //删除之前的用户关系排列图
  public DelRecord2() {
    return new Promise(async (resolve, reject) => {
      try {
        const strKnowledgeGraphId = GetInputValueInDivObj(
          this.thisDivLayout,
          'hidKnowledgeGraphId',
        );
        //const strWhere = " knowledgeGraphId='" + strKnowledgeGraphId + "' and updUser='" + userStore.userId + "'";
        const strWhere = " knowledgeGraphId='" + strKnowledgeGraphId + "'";
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
    });
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
}
