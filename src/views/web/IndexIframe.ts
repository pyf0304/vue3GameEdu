import { useUserStore } from '@/store/modulesShare/user';
import { clsvCurrEduClsStuEN } from 'share-stu-study-base-lib';
import { clsvCurrEduClsTeacherEN } from 'share-stu-study-base-lib';
import { vCurrEduClsStu_GetObjLstAsync } from 'share-stu-study-base-lib';
import { vCurrEduClsTeacher_GetObjLstAsync } from 'share-stu-study-base-lib';
import { qa_Push_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { usersEx_ConstructorName } from '@/ts/L3ForWApiExShare/UserManage/clsUsersExWApi';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { message } from '@/utils/myMessage';

declare function ShowDialog(strOpType: string): void;

declare function WelcomeLoad_Click(): void;
declare function layui_Alert(iconKey: string, strMsg: string): void;

declare const window: any;

/* UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class IndexIframe {
  public static GetPropValue: (strPropName: string) => string;
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象

  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return IndexIframe.divLayout;
  }
  //public static divName4List: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    const strThisFuncName = this.PageLoad.name;

    try {
      const userStore = useUserStore();
      if (userStore.userId != '') {
        $('#userName').append(userStore.getUserName + '(' + userStore.getRoleName + ')');

        //$("#hidUserId").val(objvUserRoleRelation.userId);
        $('#spanMajorName').html(userStore.getMajorName + '专业');
        //获得被邀请数
        const responseIntCount = await this.Bind_QuestionsCount();

        if (GetInputValueInDivObj(this.thisDivLayout, 'hidPage') != '') {
          const strPage = GetInputValueInDivObj(this.thisDivLayout, 'hidPage');
          switch (strPage) {
            case '1':
              $('#li_PaperSee').show();
              $('#li_PaperMg').show();
              $('#li_TopicMg').hide();
              $('#li_MajorDirection').hide();
              $('#li_PaperQA').hide();
              $('#li_UserManage').hide();
              $('#li_UserCenter').hide();

              $('#li_CurrEduCls').hide();
              $('#li_SysTools').hide();

              $('#ulModularName').show();
              $('#ModularName').html('论文阅读');

              break;
            case '2':
              $('#ulModularName').show();
              $('#ModularName').html('答疑标注');

              $('#li_PaperSee').hide();
              $('#li_PaperMg').hide();
              $('#li_TopicMg').hide();
              $('#li_MajorDirection').hide();
              $('#li_PaperQA').show();

              $('#li_PaperSee').removeClass('open');
              $('#li_PaperSee a').removeClass('active');

              $('#li_PaperQA').addClass('open');
              //$("#li_PaperQA a").addClass("active");
              $('#li_PaperQA ul').css('display', 'block');

              $('#li_UserManage').hide();
              $('#li_UserCenter').hide();

              $('#li_CurrEduCls').hide();
              $('#li_SysTools').hide();

              break;
            case '3':
              $('#ulModularName').show();
              $('#ModularName').html('个人中心');
              $('#li_PaperSee').hide();
              $('#li_PaperMg').hide();
              $('#li_TopicMg').hide();
              $('#li_MajorDirection').hide();
              $('#li_PaperQA').hide();
              $('#li_UserManage').hide();
              $('#li_UserCenter').show();
              $('#li_PaperSee').removeClass('open');
              $('#li_PaperSee a').removeClass('active');

              $('#li_UserCenter').addClass('open');
              //$("#li_UserCenter a").addClass("active");
              $('#li_UserCenter ul').css('display', 'block');

              $('#li_CurrEduCls').hide();
              $('#li_SysTools').hide();

              break;
            case '4':
              $('#ulModularName').show();
              $('#ModularName').html('控制中心');

              $('#li_PaperSee').hide();
              $('#li_PaperMg').hide();
              $('#li_TopicMg').hide();
              $('#li_MajorDirection').hide();
              $('#li_PaperQA').hide();
              $('#li_UserManage').hide();
              $('#li_UserCenter').hide();

              $('#li_CurrEduCls').show();
              $('#li_SysTools').show();
              $('#li_PaperSee').removeClass('open');
              $('#li_PaperSee a').removeClass('active');

              $('#li_SysTools').addClass('open');
              //$("#li_SysTools a").addClass("active");
              $('#li_SysTools ul').css('display', 'block');

              break;
            default:
              break;
          }
        }
        //判断角色
        //管理员
        if (userStore.getRoleId == '00620001') {
          $('#li_UserManage').show();
          //$("#li__PaperReadWriteStatistics").show();
          $('#li__ExplainType').show();
          $('#li__SubViewpointType').show();
          $('#li__LiteratureType').show();
          $('#li__ViewpointType').show();
          $('#li__DiscussionType').show();

          $('#pdftest1').show();
          $('#pdftest2').show();
          $('#pdftest3').show();

          $('#comment').show();
          $('#commentType').show();

          $('#ScoreWeight').show();
          $('#ScoreSummaryNew').show();
          $('#TotalDataStatistics').show(); //数据周期统计
          //$("#TotalDataStatisticsTest").show();//数据周期统计

          $('#li_CurrEduCls').show();
          $('#li_SysTools').show(); //系统设置

          $('#licc_course').show(); //课程
          //$("#liCurrEduClsStu").show();//教学班学生；

          $('#liCurrEduClsTeacher').show(); //教学班老师；
          $('#liCurrEduClsDate').show(); //教学班日期；
          $('#liCurrEduCls').show(); //教学班；
          $('#lixzMajor').show(); //专业；

          $('#li__spake_Super').show(); //知识分类；
          $('#li__spake_Sub').show(); //知识详细分类；
          $('#li__TopicTask').show(); //主题任务状态；

          $('#liTextType').show(); //课件类型；
          $('#liUnit').show(); //课件单元；
          $('#liTextStatus').show(); //课件状态；
          $('#liGrade').show(); //中学年级；

          $('#liCacheUseState').show(); //缓存配置；

          //$("#li__Rela1").hide();
          //$("#li__Rela2").hide();
          //$("#li__Rela3").hide();
          //$("#li__Rela4").hide();
          //$("#li__Rela5").hide();
          //$("#li__Rela6").hide();

          //$("#li_PaperQA").show();//答疑；

          const responseObjLst = await this.Bind_EduClsTeaList();
        }
        //老师
        else if (userStore.getRoleId == '00620002') {
          $('#li_UserManage').hide();
          //$("#li__PaperReadWriteStatistics").show();
          $('#li__ExplainType').show();
          $('#li__SubViewpointType').show();
          $('#li__LiteratureType').show();
          $('#li__ViewpointType').hide();
          $('#li__DiscussionType').hide();

          $('#TotalDataStatistics').show(); //数据周期统计

          $('#comment').show();
          $('#ScoreSummaryNew').show();

          $('#licc_course').show(); //课程
          //$("#liCurrEduClsStu").show();//教学班学生；

          $('#liCurrEduClsTeacher').show(); //教学班老师；
          $('#liCurrEduClsDate').show(); //教学班日期；
          $('#liCurrEduCls').show(); //教学班；
          $('#lixzMajor').show(); //专业；

          //$("#li_ZXCourseware").show();

          const responseObjLst = await this.Bind_EduClsTeaList();
        }
        //学生
        else {
          //if (userStore.userId == "0310276") {
          //    //$("#li_attest1").show();
          //    //$("#li_attest2").show();
          //    $("#li_ZXCourseware").show();
          //}

          $('#li_UserManage').hide();
          //$("#li__PaperReadWriteStatistics").hide();
          $('#li__ExplainType').show();
          $('#li__SubViewpointType').show();
          $('#li__LiteratureType').show();

          $('#li__DiscussionType').hide();
          $('#PersonalKnowledgeView').hide(); //个人知识点汇总

          $('#liViewpointShare').show(); //个人观点配置
          $('#comment').show();
          $('#ScoreSummaryNew').show();
          $('#ligs_ReflectLog').show(); //反思日志 ，临时；

          //const responseObjLst = await this.Bind_EduClsStuList();
          //$("#EduCls").hide();

          const responseObjLst = await this.Bind_EduClsStuList();
        }

        //$("#divLoading").hide();
      } else {
        window.top.location.href = '../Web/Index';
      }
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //答疑被邀请数
  public async Bind_QuestionsCount() {
    const strThisFuncName = this.Bind_QuestionsCount.name;
    try {
      const userStore = useUserStore();
      let strWhereCond = " 1=1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      strWhereCond += " and ReceiveUser='" + userStore.userId + "' and isReceive=0";
      const intQuestionsCount = await qa_Push_GetRecCountByCondAsync(strWhereCond);
      $('#QuestionsCount').html(intQuestionsCount.toString());
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      //alert(strMsg);
      console.error(strMsg);
    }
  }

  //教学班教师
  public async Bind_EduClsTeaList() {
    const strThisFuncName = this.Bind_EduClsTeaList.name;
    try {
      const userStore = useUserStore();
      const strWhereCond = " TeacherID='" + userStore.userId + "' order by updDate Desc";

      const arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond);
      let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
        const strid_CurrEduCls = arrvCurrEduClsTeacherObjLst[i].idCurrEduCls;
        const strEduClsName = arrvCurrEduClsTeacherObjLst[i].eduClsName;
        const strEduClsTypeId = arrvCurrEduClsTeacherObjLst[i].eduClsTypeId;
        const strCourseId = arrvCurrEduClsTeacherObjLst[i].courseId;
        const strCourseName = arrvCurrEduClsTeacherObjLst[i].courseName;
        const htmlEduClsName = strEduClsName + '(' + strCourseName + ')';
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            $('#eduClsName').html(htmlEduClsName);
            //存入session
            clsPubLocalStorage.idCurrEduCls = strid_CurrEduCls;
            clsPubLocalStorage.eduClsTypeId = strEduClsTypeId;
            clsPubLocalStorage.eduClsName = strEduClsName;
            clsPubLocalStorage.courseId = strCourseId;
            clsPubLocalStorage.courseName = strCourseName;
          } else {
            const htmlEduClsName_ =
              clsPubLocalStorage.eduClsName + '(' + clsPubLocalStorage.courseName + ')';
            $('#eduClsName').html(htmlEduClsName_);
          }
        }
        strhtml +=
          '<dd><a onclick=EduCls_Click("' +
          strid_CurrEduCls +
          '","' +
          strEduClsName +
          '","' +
          strEduClsTypeId +
          '","' +
          strCourseId +
          '","' +
          strCourseName +
          '")> ' +
          htmlEduClsName +
          '</a></dd>';
      }
      $('#dlEduClsList').html(strhtml);
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班学生
  public async Bind_EduClsStuList() {
    const strThisFuncName = this.Bind_EduClsStuList.name;
    try {
      const userStore = useUserStore();
      const strWhereCond = " stuId='" + userStore.userId + "' order by modifyDate Desc";

      const arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
      let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        const strid_CurrEduCls = arrvCurrEduClsStuObjLst[i].idCurrEduCls;
        const strEduClsName = arrvCurrEduClsStuObjLst[i].eduClsName;
        const strEduClsTypeId = arrvCurrEduClsStuObjLst[i].eduClsTypeId;
        const strCourseId = arrvCurrEduClsStuObjLst[i].courseId;
        const strCourseName = arrvCurrEduClsStuObjLst[i].courseName;
        const htmlEduClsName = strEduClsName + '(' + strCourseName + ')';
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            $('#eduClsName').html(htmlEduClsName);
            //存入session
            clsPubLocalStorage.idCurrEduCls = strid_CurrEduCls;
            clsPubLocalStorage.eduClsTypeId = strEduClsTypeId;
            clsPubLocalStorage.eduClsName = strEduClsName;
            clsPubLocalStorage.courseId = strCourseId;
            clsPubLocalStorage.courseName = strCourseName;
          } else {
            const htmlEduClsName_ =
              clsPubLocalStorage.eduClsName + '(' + clsPubLocalStorage.courseName + ')';
            $('#eduClsName').html(htmlEduClsName_);
          }
        }
        strhtml +=
          '<dd><a onclick=EduCls_Click("' +
          strid_CurrEduCls +
          '","' +
          strEduClsName +
          '","' +
          strEduClsTypeId +
          '","' +
          strCourseId +
          '","' +
          strCourseName +
          '")> ' +
          htmlEduClsName +
          '</a></dd>';
        //strhtml += '<dd><a onclick=EduCls_Click("' + arrvCurrEduClsStuObjLst[i].idCurrEduCls + '","' + arrvCurrEduClsStuObjLst[i].eduClsName + '","' + arrvCurrEduClsStuObjLst[i].eduClsTypeId + '","' + arrvCurrEduClsStuObjLst[i].courseId + '","' + arrvCurrEduClsStuObjLst[i].courseName + '")> ' + arrvCurrEduClsStuObjLst[i].eduClsName + '</a></dd>';
      }
      $('#dlEduClsList').html(strhtml);
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师
  public async EduCls_Click(
    strkey: string,
    strName: string,
    strTypeID: string,
    strCourseId: string,
    strCourseName: string,
  ) {
    //$("#hidid_CurrEduCls").val(strkey);
    //$("#eduClsName").html(strName);
    const htmlEduClsName = strName + '(' + strCourseName + ')';
    $('#eduClsName').html(htmlEduClsName);

    clsPubLocalStorage.idCurrEduCls = strkey;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strName;
    clsPubLocalStorage.courseId = strCourseId;
    clsPubLocalStorage.courseName = strCourseName;

    message.success('已切换教学班！');
    // $('#Index_iframe')[0].contentWindow.WelcomeLoad_Click();

    const iframeElement = $('#Index_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).WelcomeLoad_Click();
    }
  }
}
