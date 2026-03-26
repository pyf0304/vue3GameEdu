import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { CurrEduClsEx_GetCourseIdByIdCurrEduCls } from 'share-stu-study-base-lib';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetSpanHtmlByIdInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { useUserStore } from '@/store/modulesShare/user';
import { Login } from '@/viewsShare/web/Login';
import { IShowList } from '@/ts/PubFun/IShowList';
import { vCurrEduClsTeacher_GetObjLstAsync } from 'share-stu-study-base-lib';
import { vCurrEduClsStu_GetObjLstAsync } from 'share-stu-study-base-lib';
import { UserDefaValueEx_setUserDefaValue } from '@/ts/L3ForWApiExShare/LogManage/clsUserDefaValueExWApi';
import { refLogin_Edit } from '@/viewsShare/web/LoginVueShare';
import { isShowDdlRoles, userLoginInfo } from '@/views/Shared/PageHead_GameVueShare';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PageHead_Game implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  // public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static objPageCRUD: PageHead_Game;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    // this.BindGv_vStudentInfoCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let objPage: PageHead_Game;
    if (PageHead_Game.objPageCRUD == null) {
      PageHead_Game.objPageCRUD = new PageHead_Game();
      objPage = <PageHead_Game>PageHead_Game.objPageCRUD;
    } else {
      objPage = <PageHead_Game>PageHead_Game.objPageCRUD;
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
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    const userStore = useUserStore();
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.userId != '') {
        $('#cancellation').show();
        $('#educls_select').show();
        $('#tz_login').hide();
        $('#tz_Register').hide();
        userLoginInfo.value = userStore.getUserName; // + '(' + userStore.getRoleName + ')';
        PageHead_Game.vuebtn_Click('Bind_EduClsList', '');
        isShowDdlRoles.value = true;
      } else {
        $('#educls_select').hide();

        userLoginInfo.value = '';
        $('#cancellation').hide();
        $('#tz_login').show();

        //$('#box3').hide();
        //$('#box4').hide();
        //window.top.location.href = "../Web/Index";
      }
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage = new PageHead_Game();
    console.log(strKeyId);

    let objPageEdit;
    let objPageEdit_Register;
    switch (strCommandName) {
      case 'Register':
        // objPageEdit_Register = new wfmRegisterStu('wfmRegisterStu', objPage);
        // objPageEdit_Register.PageLoad();
        break;
      case 'login':
        objPageEdit = new Login('Login', objPage);
        console.log('refLogin_Edit.value:(in Index_btn_Click)', refLogin_Edit.value);
        // if (refLogin_Edit.value == null) refLogin_Edit.value = refLogin_Edit;
        refLogin_Edit.value.btnLogin_Edit_Click(strCommandName, strKeyId);
        // refLogin_Edit.value = LoginRef;
        break;
      case 'Cancellation': //注销
        Index_btnCancellation_Click();
        break;
      case 'Console': //首页
        Index_btnConsole_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PageHead_Game.btn_Click');

        break;
    }
  }
  //教学班教师
  public static async EduCls_Click(
    divName: HTMLDivElement,
    strIdCurrEduCls: string,
    strEduName: string,
    strTypeID: string,
  ) {
    // SetSpanHtmlInDivObj(PageHead_Game.divLayout, 'spnEduClsName_Head', strEduName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strIdCurrEduCls);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strEduName;

    message.success('已切换教学班！');
  }

  //教学班教师
  public async Bind_EduClsTeaList() {
    const strThisFuncName = this.Bind_EduClsTeaList.name;
    const userStore = useUserStore();
    try {
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
    const userStore = useUserStore();
    try {
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

    // Reload();
    //$("#Index_iframe")[0].contentWindow.WelcomeLoad_Click();
  }

  //通过用户登录ID获取用户的角色名
  public async btnConsole_Click() {
    const userStore = useUserStore();
    //判断角色
    //管理员
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
    const userStore = useUserStore();
    //判断角色
    //管理员
    userStore.userId = '';

    $('#educls_select').hide();

    $('#cancellation').hide();
    $('#tz_login').show();
    $('#tz_Register').show();
    userLoginInfo.value = '';
    //$('#box3').hide();
    //$('#box4').hide();
  }
}

//通过用户登录ID获取用户的角色名
export async function Index_btnCancellation_Click() {
  const userStore = useUserStore();
  //判断角色
  //管理员
  userStore.logout();
  await userStore.logout();
  $('#lnkUserName').hide();
  $('#Cancellation').hide();
  $('#tz_login').show();
  $('#tz_Register').show();
  userLoginInfo.value = '';
  $('#box3').hide();
  $('#box4').hide();
  isShowDdlRoles.value = false;
}

//通过用户登录ID获取用户的角色名
export async function Index_btnConsole_Click() {
  const userStore = useUserStore();
  //判断角色
  //管理员
  if (userStore.getRoleId == '00620001') {
    window.location.href = '../Web/IndexIframe';
  }
  // //老师
  // else if (userStore.getRoleId == '00620002') {
  // }
  // //学生
  // else {
  // }
}
