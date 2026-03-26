import $ from 'jquery';
import { useUserStore } from '@/store/modulesShare/user';
import { vCurrEduClsStu_GetObjLstAsync } from 'share-stu-study-base-lib';
import { vCurrEduClsTeacher_GetObjLstAsync } from 'share-stu-study-base-lib';
import { UserDefaValueEx_setUserDefaValue } from '@/ts/L3ForWApiExShare/LogManage/clsUserDefaValueExWApi';
import { IShowList } from '@/ts/PubFun/IShowList';
import { SetSpanHtmlByIdInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { message } from '@/utils/myMessage';
import { Login } from '@/viewsShare/web/Login';
import { wfmRegisterStu } from '@/viewsShare/web/wfmRegisterStu';
import { Ref } from 'vue';
import router from '@/router';
import { refLogin_Edit } from '@/viewsShare/web/LoginVueShare';

import { enumQxRoles } from 'share-gen-plat-base/src/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { ca, de } from 'element-plus/es/locale';

declare function Reload(): void;

/* UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Index implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static objPageCRUD: Index;

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    // this.BindGv_vStudentInfoCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let objPage: Index;
    if (Index.objPageCRUD == null) {
      Index.objPageCRUD = new Index();
      objPage = <Index>Index.objPageCRUD;
    } else {
      objPage = <Index>Index.objPageCRUD;
    }
    let strMsg = '';
    switch (strType) {
      case 'Login':
        alert('该类没有绑定该函数：[this.BindGv_vStudentInfo_Cache]！');
        //this.BindGv_vStudentInfoCache();;
        break;
      case 'LoginFinish':
        objPage.PageLoad();
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public static btn_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    let objPage: Index;
    if (Index.objPageCRUD == null) {
      Index.objPageCRUD = new Index();
      objPage = <Index>Index.objPageCRUD;
    } else {
      objPage = <Index>Index.objPageCRUD;
    }
    const objPageEdit: Login = new Login('Login', objPage);
    let objPageEdit_Register;
    console.log(objPageEdit);
    switch (strCommandName) {
      case 'Register':
        objPageEdit_Register = new wfmRegisterStu('wfmRegisterStu', objPage);
        objPageEdit_Register.PageLoad();
        break;
      case 'liPaper':
        // objPage.liPaper_Click();
        break;
      case 'login':
        // objPageEdit // IndexB.EditRef = LoginRef;
        console.log('refLogin_Edit.value:(in Index_btn_Click)', refLogin_Edit.value);
        if (refLogin_Edit.value == null) refLogin_Edit.value = Index.EditRef;
        Index.EditRef.value.btnLogin_Edit_Click(strCommandName, strKeyId);
        // refLogin_Edit.value = LoginRef;
        break;
      case 'Cancellation': //注销
        objPage.btnCancellation_Click();
        break;
      case 'Console': //首页
        objPage.btnConsole_Click();
        break;

      case 'Query': //查询记录
        // objPage.btnQuery_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        alert('请选择需要复制的记录！');
        return;
      // }
      //objPage.btnCopyRecord_Click();

      default:
        AccessBtnClickDefault(strCommandName, 'Index_btn_Click');

        break;
    }
  }
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;

    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      if (userStore.userId != '') {
        $('#cancellation').show();
        $('#educls_select').show();
        $('#tz_login').hide();
        $('#tz_Register').hide();

        await Index.vuebtn_Click('Bind_EduClsList', '');
        await Index.vuebtn_Click('setRoles', '');
        await Index.vuebtn_Click('setEduClss', '');

        // 学生
        // if (userStore.getRoleId == '00620003') {
        //   await this.Bind_EduClsStuList();
        // }
        // //管理员教师
        // else {
        //   await this.Bind_EduClsTeaList();
        // }
      } else {
        $('#educls_select').hide();
        $('#cancellation').hide();
        $('#tz_login').show();
      }
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师
  public async Bind_EduClsTeaList() {
    const strThisFuncName = this.Bind_EduClsTeaList.name;
    try {
      const userStore = useUserStore();
      const strWhereCond = " TeacherID='" + userStore.userId + "' order by updDate Desc";

      const arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond);
      let strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      let strCourseId_LocalStorage = clsPubLocalStorage.courseId;
      let strEduClsName_LocalStorage = clsPubLocalStorage.eduClsName;
      let strCourseName_LocalStorage = clsPubLocalStorage.courseName;

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
            //$("#hidid_CurrEduCls").val(arrvCurrEduClsTeacherObjLst[i].idCurrEduCls);

            $('#eduClsName').html(htmlEduClsName);
            //存入session
            clsPubLocalStorage.idCurrEduCls = strid_CurrEduCls;
            clsPubLocalStorage.eduClsTypeId = strEduClsTypeId;
            clsPubLocalStorage.eduClsName = strEduClsName;
            clsPubLocalStorage.courseId = strCourseId;
            clsPubLocalStorage.courseName = strCourseName;
            strCourseId_LocalStorage = strCourseId;
            strEduClsName_LocalStorage = strEduClsName;
            strCourseName_LocalStorage = strCourseName;
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

      this.ShowEduClsName(
        Format('{0}({1})', strEduClsName_LocalStorage, strCourseName_LocalStorage),
      );

      $('#dlEduClsList').html(strhtml);
    } catch (e) {
      const strMsg: string = `获取教学班老师关系对象列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  //教学班学生
  public async Bind_EduClsStuList() {
    const strThisFuncName = this.Bind_EduClsStuList.name;
    try {
      const userStore = useUserStore();
      let htmlEduClsName = '选择教学班';
      const strWhereCond = " stuId='" + userStore.userId + "' order by modifyDate Desc";

      const arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
      let strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      let strCourseId_LocalStorage = clsPubLocalStorage.courseId;
      let strEduClsName_LocalStorage = clsPubLocalStorage.eduClsName;
      let strCourseName_LocalStorage = clsPubLocalStorage.courseName;

      let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        const strid_CurrEduCls = arrvCurrEduClsStuObjLst[i].idCurrEduCls;
        const strEduClsName = arrvCurrEduClsStuObjLst[i].eduClsName;
        const strEduClsTypeId = arrvCurrEduClsStuObjLst[i].eduClsTypeId;
        const strCourseId = arrvCurrEduClsStuObjLst[i].courseId;
        const strCourseName = arrvCurrEduClsStuObjLst[i].courseName;
        htmlEduClsName = strEduClsName + '(' + strCourseName + ')';
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            //$("#hidid_CurrEduCls").val(arrvCurrEduClsStuObjLst[i].idCurrEduCls);
            //$("#eduClsName").html(strEduClsName);

            $('#eduClsName').html(htmlEduClsName);
            //存入session
            clsPubLocalStorage.idCurrEduCls = strid_CurrEduCls;
            clsPubLocalStorage.eduClsTypeId = strEduClsTypeId;
            clsPubLocalStorage.eduClsName = strEduClsName;
            clsPubLocalStorage.courseId = strCourseId;
            clsPubLocalStorage.courseName = strCourseName;

            strCourseId_LocalStorage = strCourseId;
            strEduClsName_LocalStorage = strEduClsName;
            strCourseName_LocalStorage = strCourseName;
          } else {
            //$("#eduClsName").html(clsPubLocalStorage.eduClsName);
            htmlEduClsName =
              clsPubLocalStorage.eduClsName + '(' + clsPubLocalStorage.courseName + ')';
            $('#eduClsName').html(htmlEduClsName);
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

      this.ShowEduClsName(
        Format('{0}({1})', strEduClsName_LocalStorage, strCourseName_LocalStorage),
      );

      $('#dlEduClsList').html(strhtml);
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public ShowEduClsName(strEduClsNameAddiCourseName: string) {
    SetSpanHtmlByIdInDiv('Index_Layout', 'eduClsName', strEduClsNameAddiCourseName);
    console.error('设置新的教学班:', strEduClsNameAddiCourseName);
  }
  //教学班教师
  public async EduCls_Click(
    strkey: string,
    strName: string,
    strTypeID: string,
    strCourseId: string,
    strCourseName: string,
  ) {
    const userStore = useUserStore();
    //$("#hidid_CurrEduCls").val(strkey);
    //$("#eduClsName").html(strName);
    const htmlEduClsName = strName + '(' + strCourseName + ')';
    $('#eduClsName').html(htmlEduClsName);

    clsPubLocalStorage.idCurrEduCls = strkey;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strName;
    clsPubLocalStorage.courseId = strCourseId;
    clsPubLocalStorage.courseName = strCourseName;

    if (IsNullOrEmpty(strkey) == false) {
      const con2 = await UserDefaValueEx_setUserDefaValue(userStore.userId, '默认教学班Id', strkey);
    } else {
      const strMsg = Format('新建教学班Id用户缺省值不成功，请检查!');
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.ShowEduClsName(Format('{0}({1})', strName, strCourseName));

    message.success('已切换教学班！');

    Reload();
    //$("#Index_iframe")[0].contentWindow.WelcomeLoad_Click();
  }

  //通过用户登录ID获取用户的角色名
  public async btnConsole_Click() {
    //判断角色
    //管理员
    const userStore = useUserStore();
    if (userStore.getRoleId == '00620001') {
      window.location.href = '../Web/IndexIframe';
    }
    //老师
    else if (userStore.getRoleId == '00620002') {
    }
    //学生
    else {
    }
  }

  //通过用户登录ID获取用户的角色名
  public async btnCancellation_Click() {
    //判断角色
    //管理员
    const userStore = useUserStore();
    userStore.userId = '';

    $('#educls_select').hide();
    $('#userName').hide();
    $('#cancellation').hide();
    $('#tz_login').show();
    $('#tz_Register').show();

    //$('#box3').hide();
    //$('#box4').hide();
  }
  //菜单通道
  public async liMenu_Click(key: number) {
    console.log('liMenu_Click', key);
    const userStore = useUserStore();
    if (userStore.userId != '') {
      switch (key) {
        case 1:
          //基础知识
          // window.location.href = '../Web/Basicknowledge';
          router.push('/Basicknowledge');
          break;
        case 2:
          //知识测评
          // window.location.href = '../Web/KnowledgeAssess';
          router.push('/KnowledgeAssess');
          break;
        case 3:
          //冲关游戏
          // window.location.href = '../Web/PassGame';
          router.push('/PassGame');
          break;

        case 4:
          //成就激励
          // window.location.href = '../Web/Achievement';
          router.push('/Achievement');
          break;
        case 5:
          // window.location.href = '../Web/KnowledgeGraph';
          router.push('/KnowledgeGraph');
          break;
        case 6:
          // window.location.href = '../Web/ExamSet';
          router.push('/ExamSet');
          break;
        case 7:
          // window.location.href = '../Web/Work';
          router.push('/Work');
          break;
        case 8:
          // window.location.href = '../Web/LearningCommunity';
          router.push('/LearningCommunity');
          break;
        case 9:
          //系统设置
          //window.location.href = "../Web/IndexIframe";
          console.log('userStore.getRoleId', userStore.getRoleId);
          switch (userStore.getRoleId) {
            case '00620001':
              router.push('/IndexIframe?menuSetId=0025');
              break;

            //老师
            case '00620002':
              router.push('/IndexIframe?menuSetId=0025');
              break;
            //中小学老师
            case '00620013':
              //message.warning("您的角色权限不够！");
              // window.location.href = '../Web/IndexIframe';
              router.push('/IndexIframe?menuSetId=0025');
              break;
            //中小学管理员
            case '00620018':
            case '00620019':
              router.push('/IndexIframe?menuSetId=0025');
              break;
            //学生
            default:
              message.warning('您的角色权限不够！');
              //window.location.href = "../Web/IndexIframe";
              break;
          }
          break;
        case 10:
          // window.location.href = '../Web/LearningCommunity';
          switch (userStore.getRoleId) {
            case enumQxRoles.Regular_Student_00620003:
            case enumQxRoles.High_School_Student_00620017:
              //window.location.href = "../Web/IndexIframe?page=4";
              // window.location.href = '../Web/IndexIframe';
              router.push('/BottleGameStart');
              break;
            case enumQxRoles.Regular_Teacher_00620002:
            case enumQxRoles.K_12_Teacher_00620013:
            case enumQxRoles.System_Admin_00620001:
            case enumQxRoles.Secondary_School_System_Admin_00620018:
            case enumQxRoles.University_System_Admin_00620019:
              //冲关游戏
              // window.location.href = '../Web/PassGame';
              router.push('/BottleGame');
              break;
            default:
              message.warning('您的角色权限不够！');
              window.location.href = '../Web/IndexIframe';
              break;
          }
          break;
      }
      //window.location.href = "../Web/IndexIframe?page=1";
    } else {
      message.warning('您还没登录，请点击右上角登录后再进入该模块！');
    }
  }

  ////基础知识
  //public async liPaper_Click() {

  //    if (userStore.userId != "") {
  //        //window.location.href = "../Web/IndexIframe?page=1";
  //        window.location.href = "../Web/Basicknowledge";

  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}

  ////冲关游戏
  //public async liTopic_Click() {
  //    if (userStore.userId != "") {
  //        window.location.href = "../Web/PassGame";
  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}

  ////作业
  //public async liqaTags_Click() {

  //    if (userStore.userId != "") {

  //        window.location.href = "../Web/Work";
  //        //window.location.href = "../Web/IndexIframe?page=2";
  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}

  ////学习社区
  //public async liUserCenter_Click() {

  //    if (userStore.userId != "") {
  //        window.location.href = "../Web/LearningCommunity";
  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}

  ////系统设置
  //public async liTool_Click() {

  //    if (userStore.userId != "") {

  //        if (userStore.getRoleId == "00620001") {
  //            //window.location.href = "../Web/IndexIframe?page=4";
  //            window.location.href = "../Web/IndexIframe";
  //        }
  //        //老师
  //        else if (userStore.getRoleId == "00620002") {
  //            //message.warning("您的角色权限不够！");
  //            window.location.href = "../Web/IndexIframe";
  //        }
  //        //学生
  //        else {
  //            message.warning("您的角色权限不够！");
  //            //window.location.href = "../Web/IndexIframe";
  //        }

  //    }
  //    else {
  //        message.warning("您还没登录，请点击右上角登录后再进入该模块！");
  //    }
  //}
}
