import { QuestionnaireCRUD } from '@/viewsBase/QuestionaireEdit/QuestionnaireCRUD';
import { clsge_QuestionStructureGraphRelaEN } from '@/ts/L0Entity/GameLearn/clsge_QuestionStructureGraphRelaEN';
import { clsge_StuBatchQuesRelaEN } from '@/ts/L0Entity/InteractManage/clsge_StuBatchQuesRelaEN';
import { clsge_QuestionKnowledgeGraphRelaEN } from '@/ts/L0Entity/Knowledges/clsge_QuestionKnowledgeGraphRelaEN';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { ge_QuestionStructureGraphRela_GetFirstObjAsync } from '@/ts/L3ForWApi/GameLearn/clsge_QuestionStructureGraphRelaWApi';
import { ge_QuestionKnowledgeGraphRela_GetFirstObjAsync } from '@/ts/L3ForWApi/Knowledges/clsge_QuestionKnowledgeGraphRelaWApi';
import {
  Questionnaire_GetObjLstByPagerAsync,
  Questionnaire_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
import { ge_StuBatchQuesRelaEx_Getge_StuBatchQuesRelaListExV2 } from '@/ts/L3ForWApiEx/InteractManage/clsge_StuBatchQuesRelaExWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetInputObjInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';
import { Format } from '@/ts/PubFun/clsString';
import { viewVarSet } from '@/views/QuestionaireEdit/QuestionnaireVueShare';
declare function layui_Alert(iconKey: string, strMsg: string): void;
declare function load_jsmind(strjson: string): void;
declare function add_node(strKeyId: string, strKeyName: string): void;

declare function setTimeShow(): void;
declare function remove_node(): void;

declare function ShowPageList(): void;
declare const window: any;

/* spage_StructureSectionCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class StructureChartQuestion extends QuestionnaireCRUD {
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 1;
  }

  public recCount = 0;

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
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      if (userStore.userId != '') {
        this.hidSortQuestionnaireBy = ' questionId Asc';

        const arrQuestionId = await this.GetQuestionList();

        await this.ShowStructureChartQuestion(arrQuestionId);

        ShowPageList();
        //const responseBindGv3 = await this.ShowPageList();
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

  //获取题目批次列表
  public async GetQuestionList(): Promise<Array<string>> {
    const userStore = useUserStore();
    const strUserId = userStore.userId;
    const strid_CurrEduCls = clsPubLocalStorage.idCurrEduCls;
    const strDifficultyLevelId = GetInputValueInDivObj(this.thisDivLayout, 'hidDifficultyLevelId');
    const strQuestionTypeId = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionTypeId');
    const strQuestionNum = GetInputValueInDivObjN(this.thisDivLayout, 'hidQuestionNum');
    const strGameLevelId = GetInputValueInDivObj(this.thisDivLayout, 'hidGameLevelId');

    let arrge_StuBatchQuesRelaObjLst: Array<clsge_StuBatchQuesRelaEN> = [];

    arrge_StuBatchQuesRelaObjLst = await ge_StuBatchQuesRelaEx_Getge_StuBatchQuesRelaListExV2(
      strUserId,
      strid_CurrEduCls,
      strDifficultyLevelId,
      strQuestionTypeId,
      strQuestionNum,
      strGameLevelId,
    );

    const arrQuestionId: Array<string> = [];
    for (let i = 0; i < arrge_StuBatchQuesRelaObjLst.length; i++) {
      arrQuestionId.push(arrge_StuBatchQuesRelaObjLst[i].questionId.toString());
    }
    return arrQuestionId;
  }

  //获取结构题目
  public async ShowStructureChartQuestion(arrQuestionId0: Array<string>) {
    const strThisFuncName = this.ShowStructureChartQuestion.name;
    const userStore = useUserStore();
    const arrQuestionIdStr = arrQuestionId0.join(',');

    const strWhereCond: string = ' questionId in(' + arrQuestionIdStr + ')';

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQuestionnaireObjLst: Array<clsQuestionnaireEN> = [];
    //const arrQuestionnaireExObjLst: Array<clsQuestionnaireENEx> = [];
    try {
      this.recCount = await Questionnaire_GetRecCountByCondAsync(strWhereCond);
      $('#hidRecCount').val(this.recCount);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortQuestionnaireBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrQuestionnaireObjLst = await Questionnaire_GetObjLstByPagerAsync(objPagerPara);
      //arrQuestionnaireExObjLst = arrQuestionnaireObjLst.map(this.CopyToEx);
      //for (const objInFor of arrQuestionnaireExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    try {
      if (arrQuestionnaireObjLst.length != 0) {
        const strQuestionNum_Name =
          this.CurrPageIndex + '、' + arrQuestionnaireObjLst[0].questionName;
        //const strQuestionNum_Name = "[" + GetInputObjInDivObj(this.thisDivLayout, 'hidGameLevelName').val() + "]" + this.CurrPageIndex + "、" + arrQuestionnaireObjLst[0].questionName;
        $('#QuestionTitle').html(strQuestionNum_Name);

        let varLink: string = '';
        const strQuestionId = arrQuestionnaireObjLst[0].questionId;
        const strSectionTypeId = arrQuestionnaireObjLst[0].sectionTypeId;
        const strStandardId = arrQuestionnaireObjLst[0].knowledgeGraphId;

        const strUserId = userStore.userId;
        const strCourseId = clsPubLocalStorage.courseId;
        const strQuestionTypeId = GetInputValueInDivObj(this.thisDivLayout, 'hidQuestionTypeId');
        const strGameLevelId = GetInputValueInDivObj(this.thisDivLayout, 'hidGameLevelId');

        //结构图
        if (strQuestionTypeId == '03') {
          varLink =
            '../Web/MultipleQuestionChart?questionId=' +
            strQuestionId +
            '&gameLevelId=' +
            strGameLevelId;
        } else if (strQuestionTypeId == '14') {
          //根据问题结构关系表获取图谱
          let strWhereCond =
            "questionId='" + strQuestionId + "' and createUser='" + strUserId + "'";
          strWhereCond +=
            " and courseId='" + strCourseId + "' and gameLevelId='" + strGameLevelId + "'";

          const objge_QuestionStructureGraphRela =
            await ge_QuestionStructureGraphRela_GetFirstObjAsync(strWhereCond);

          let strStructureGraphId: string = '';

          if (objge_QuestionStructureGraphRela != null) {
            strStructureGraphId = objge_QuestionStructureGraphRela.structureGraphId;
            varLink =
              '../Web/StructureChart?questionId=' +
              strQuestionId +
              '&structureGraphId=' +
              strStructureGraphId +
              '&sectionTypeId=' +
              strSectionTypeId +
              '&gameLevelId=' +
              strGameLevelId;
          } else {
            varLink =
              '../Web/StructureChart?questionId=' +
              strQuestionId +
              '&sectionTypeId=' +
              strSectionTypeId +
              '&gameLevelId=' +
              strGameLevelId;
          }
        }
        //逻辑关系图
        else if (strQuestionTypeId == '15') {
          let strWhereCond =
            "questionId='" + strQuestionId + "' and createUser='" + strUserId + "'";
          strWhereCond +=
            " and courseId='" + strCourseId + "' and gameLevelId='" + strGameLevelId + "'";

          const objge_QuestionKnowledgeGraphRela =
            await ge_QuestionKnowledgeGraphRela_GetFirstObjAsync(strWhereCond);
          if (objge_QuestionKnowledgeGraphRela == null) return;
          let strKnowledgeGraphId: string = '';

          if (objge_QuestionKnowledgeGraphRela != null) {
            strKnowledgeGraphId = objge_QuestionKnowledgeGraphRela.knowledgeGraphId;
            varLink =
              '../Web/KnowledgeLogicChart?questionId=' +
              strQuestionId +
              '&knowledgeGraphId=' +
              strKnowledgeGraphId +
              '&gameLevelId=' +
              strGameLevelId +
              '&StandardId=' +
              strStandardId;
          } else {
            varLink =
              '../Web/KnowledgeLogicChart?questionId=' +
              strQuestionId +
              '&gameLevelId=' +
              strGameLevelId +
              '&StandardId=' +
              strStandardId;
          }
        }
        const strhtml =
          "<iframe id='iframe_StructureChart' frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='auto' allowtransparency='yes' src='" +
          varLink +
          "' style='height:100%;width:100%; min-height:820px;'></iframe>";

        $('#div_StructureChart').html(strhtml);
      }
      //this.BindTab_Questionnaire4Func(divList, arrQuestionnaireExObjLst);
      //console.log("完成BindGv_Questionnaire4Func!");
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定分页
  //public async ShowPageList() {

  //    for (let i = 1; i < this.recCount + 1; i++) {
  //        const button = document.createElement("button");
  //        //div.innerText = strTagsContent;
  //        //div.href = "#Q" + strQuestionsId;
  //        button.className = "btn btn-outline-primary";
  //        //button.style.position = "absolute";
  //        //button.style.zIndex = "999";
  //        //button.title = strQuestionsContent;
  //        button.id = "page_" + i;
  //        button.type = "button";
  //        button.innerHTML = "" + i + "";
  //        //div.className = "layui-icon layui-icon-survey";//答疑图标
  //        //if (arrqa_QuestionsObjLst[i].updUser == strUserId) {
  //        //    div.setAttribute("onclick", "btnUpdateQuestions_Click('" + strQuestionsId + "')");
  //        //}
  //        button.setAttribute("onclick", "Page_Click(" + i + ")");

  //        const page_list = document.getElementById("page_list");
  //        page_list.appendChild(button);
  //    }

  //}

  /*
   * 获取当前页序号(Used In BindGv_Cache)
   */
  public get CurrPageIndex(): number {
    const strCurrPageIndex = GetInputValueInDivObj(this.thisDivLayout, 'hidCurrPageIndex');
    return Number(strCurrPageIndex);
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    $('#hidCurrPageIndex').val(value);
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortQuestionnaireBy(value: string) {
    $('#hidSortQuestionnaireBy').val(value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortQuestionnaireBy(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'hidSortQuestionnaireBy');
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'courseName|Ex':
        viewVarSet.sortQuestionnaireBy = `vcc_Course_Sim|courseName ${sortDirection}|Questionnaire.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'chapterName|Ex':
        viewVarSet.sortQuestionnaireBy = `cc_CourseChapter|chapterName ${sortDirection}|Questionnaire.CourseChapterId = cc_CourseChapter.CourseChapterId`;
        break;
      case 'questionTypeName|Ex':
        viewVarSet.sortQuestionnaireBy = `QuestionType|questionTypeName ${sortDirection}|Questionnaire.QuestionTypeId = QuestionType.QuestionTypeId`;
        break;
      case 'difficultyLevelName|Ex':
        viewVarSet.sortQuestionnaireBy = `ge_DifficultyLevel|difficultyLevelName ${sortDirection}|Questionnaire.DifficultyLevelId = ge_DifficultyLevel.DifficultyLevelId`;
        break;
      case 'levelModeTypeName|Ex':
        viewVarSet.sortQuestionnaireBy = `ge_LevelModeType|levelModeTypeName ${sortDirection}|Questionnaire.LevelModeTypeId = ge_LevelModeType.LevelModeTypeId`;
        break;
      default:
        viewVarSet.sortQuestionnaireBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_Questionnaire4Func(this.thisDivList);
  }
}
