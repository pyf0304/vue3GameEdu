import { UserTypeMap } from '@/store/modules/types/userType';
import { useUserStore } from '@/store/modulesShare/user';
import { clsCurrEduClsEN } from 'share-stu-study-base-lib';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache } from 'share-stu-study-base-lib';
import { CurrEduCls_GetObjByIdCurrEduClsAsync } from 'share-stu-study-base-lib';

import { Users_IsExistAsync } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import {
  XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx,
  XzClgEx_GetDepartmentIdInGPByIdCollege,
} from 'share-stu-study-base-lib';
import { CurrEduClsStuEx_AddId_Stu4EduCls } from 'share-stu-study-base-lib';
import { cc_ExamPaperStuRelationEx_ArrangeHomeWork } from '@/ts/L3ForWApiEx/InteractManage/clscc_ExamPaperStuRelationExWApi';
import { cc_WorkStuRelationEx_GetHomeWork } from '@/ts/L3ForWApiExShare/InteractManage/clscc_WorkStuRelationExWApi';
import { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache } from 'share-stu-study-base-lib';
import {
  StudentInfoEx_SynchStudentToPlatform,
  StudentInfoEx_SynchUsersToStudent,
} from 'share-stu-study-base-lib';
import { UsersEx_RegisterUser } from '@/ts/L3ForWApiExShare/UserManage/clsUsersExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetTextAreaValueInDivObj, SetTextAreaValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { message } from '@/utils/myMessage';
import { QxUsers_Edit } from 'share-gen-plat-base-lib';
import { useXzClgStore } from '@/store/modulesShare/xzClg';

import { divVarSet, refQxUsers_Edit } from './wfmRegisterStuVueShare';
import {
  QxUserIdentity_BindDdl_IdentityIdInDivCache,
  QxUserIdentity_GetObjByIdentityIdCache,
} from 'share-gen-plat-base-lib';

export class wfmRegisterStu extends QxUsers_Edit {
  public static GetPropValue: (strPropName: string) => string;
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: wfmRegisterStu = <wfmRegisterStu>QxUsers_Edit.GetPageEditObj('wfmRegisterStu');
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'Register':
        objPage.btnRegister_Click();
        break;
      case 'Cancel':
        objPage.btnCancel_Click();
        break;
      case 'ReturnIndex':
        objPage.btnReturnIndex_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'wfmRegisterStu.btn_Click');

        break;
    }
  }
  public async PageLoad() {
    const bolIsSuccess = await this.ShowDialog_QxUsers(this.opType);
    if (bolIsSuccess == false) return;
    await QxUserIdentity_BindDdl_IdentityIdInDivCache(divVarSet.refDivEdit, 'ddlIdentityId');
    await XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx(
      divVarSet.refDivEdit,
      'ddlIdXzCollege',
    );
    await XzGradeBaseEx_BindDdl_idGradeBaseInDivCache(divVarSet.refDivEdit, 'ddlIdGradeBase');
  }

  public async btnRegister_Click() {
    let strMsg = '';
    const userStore = useUserStore();
    const xzClgStore = useXzClgStore();
    // const strId_StudentInfo: string = '';
    const userType = wfmRegisterStu.GetPropValue('userType');
    let objUsersEN = null;
    if (IsNullOrEmpty(refQxUsers_Edit.value.idXzCollege) == true) {
      strMsg = Format('学院不能为空！');

      message.warning(strMsg);
      return;
    }
    if (userType == UserTypeMap.university) {
      if (IsNullOrEmpty(refQxUsers_Edit.value.idXzMajor) == true) {
        strMsg = Format('专业不能为空！');

        message.warning(strMsg);
        return;
      }
    }
    if (IsNullOrEmpty(refQxUsers_Edit.value.idGradeBase) == true) {
      strMsg = Format('年级不能为空！');

      message.warning(strMsg);
      return;
    }
    const strDepartmentIdInGP = await XzClgEx_GetDepartmentIdInGPByIdCollege(
      refQxUsers_Edit.value.idXzCollege,
    );
    if (IsNullOrEmpty(strDepartmentIdInGP) == true) {
      const objXzClg = await xzClgStore.getObj(refQxUsers_Edit.value.idXzCollege);
      if (objXzClg == null) return;
      strMsg = Format('学院:{0}在统一平台中没有对应的部门，请联系管理员！', objXzClg.collegeName);

      message.warning(strMsg);
      return;
    }
    if ((await Users_IsExistAsync(refQxUsers_Edit.value.userId)) == true) {
      message.warning('您申请的用户已被注册！');
      return;
    }
    objUsersEN = new clsUsersEN();

    objUsersEN.SetUserId(refQxUsers_Edit.value.userId); //用户ID
    objUsersEN.SetUserName(refQxUsers_Edit.value.userName); //用户名
    //objUsersEN.SetEmail = this.txtIDNumber.Text;//邮箱
    objUsersEN.SetPassword(refQxUsers_Edit.value.password); //密码
    // objUsersEN.SetDepartmentId(strDepartmentIdInGP);
    objUsersEN.SetIdXzCollege(refQxUsers_Edit.value.idXzCollege);
    objUsersEN.SetIdXzMajor(refQxUsers_Edit.value.idXzMajor);
    objUsersEN.SetIdGradeBase(refQxUsers_Edit.value.idGradeBase);
    objUsersEN.SetIdGrade(refQxUsers_Edit.value.idGrade);

    objUsersEN.SetIsAudit(false);
    objUsersEN.SetUserStateId('02');
    //objUsersEN.SetIdentityID = ddlIdentityId.SelectedValue;
    //if (ddlIdentityId.SelectedValue != "0003")
    //{
    //    objUsersEN.SetIsAudit = true;
    //    objUsersEN.SetIdentityID = "0003";
    //}
    //else
    //{
    //    objUsersEN.SetIsAudit = false;
    //}
    objUsersEN.SetIsRegister(true);
    objUsersEN.SetRegisterDate(clsDateTime.getTodayStr(0));
    objUsersEN.SetUpdDate(clsDateTime.getTodayStr(0));
    objUsersEN.SetMemo(this.reason);
    objUsersEN.SetMobilePhone(refQxUsers_Edit.value.userId);
    objUsersEN.SetIdentityId(refQxUsers_Edit.value.identityId); //学生
    const strDefaId_CurrEduCls = clsSysPara4WebApi.spDefaIdCurrEduCls;
    const strReturnInfo = '';
    try {
      const objResult = await UsersEx_RegisterUser(
        objUsersEN,
        strDefaId_CurrEduCls,
        true,
        userStore.getUserId,
      );
      if (objResult.returnBool == true) {
        if (IsNullOrEmpty(objResult.returnInfo) == false) {
          message.warning(objResult.returnInfo);
          return;
        } else {
          message.warning('注册成功！');
        }
      } else {
        message.warning('注册失败！');
      }
      return;
    } catch (objException) {
      message.warning(`注册失败！${objException}`);
      return;
    }
  }

  public async InsertToDefaCurrEduCls(
    objUsersEN: clsUsersEN,
    strId_StudentInfo: string,
  ): Promise<clsCurrEduClsEN_T | null> {
    const strDefaId_CurrEduCls = clsSysPara4WebApi.spDefaIdCurrEduCls;
    if (IsNullOrEmpty(strDefaId_CurrEduCls) == true) return null;
    const userStore = useUserStore();
    //const strid_Stu = clsStudentInfoBLEx.Getid_StuByStuId_CacheEx(objUsersEN.SetUserId);
    objUsersEN.updUser = userStore.getUserId;
    const objQxUserIdentity = await QxUserIdentity_GetObjByIdentityIdCache(objUsersEN.identityId);
    if (objQxUserIdentity == null) return null;
    const objStudentInfoEN = await StudentInfoEx_SynchUsersToStudent(objUsersEN);
    if (objStudentInfoEN == null) return null;
    let bolIsAudit = false;
    if (clsSysPara4WebApi.spIsAutoAudit4Register == true) {
      bolIsAudit = await StudentInfoEx_SynchStudentToPlatform(
        objStudentInfoEN.idStudentInfo,
        clsSysPara4WebApi.spIdSchool,
        objQxUserIdentity.identityDesc,
        objUsersEN.userId,
      );
    }
    CurrEduClsStuEx_AddId_Stu4EduCls(
      objStudentInfoEN.idStudentInfo,
      strDefaId_CurrEduCls,
      objUsersEN.userId,
    );

    const objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strDefaId_CurrEduCls);
    if (objCurrEduClsEN == null) return null;
    if (bolIsAudit == true) {
      objCurrEduClsEN.SetStrTag('IsAudit');
    }
    this.ArrangeHomeWork(objStudentInfoEN.idStudentInfo);
    strId_StudentInfo = objStudentInfoEN.idStudentInfo;
    return objCurrEduClsEN;
  }
  //用户注册
  // public btnRegister_ClickBak()
  // {
  // const clsON:    clsUsersEN = new clsUsersEN();
  //     clsON.SetUserId( this.userId);  //用户ID
  //     clsON.SetUserName(this.userName);//用户名
  //     clsON.SetPassword(this.password);//密码

  //     clsON.SetIdXzCollege( this.idXzCollege);
  //     clsON.SetIdXzMajor( this.idXzMajor);
  //     clsON.SetIdGradeBase( this.idGradeBase);
  //     clsON.SetIsAudit( false);
  //     clsON.SetUserStateId("02");

  //     clsON.SetIsRegister( true);
  //     clsON.SetRegisterDate( clsDateTime.getTodayStr(0));
  //     clsON.SetUpdDate( clsDateTime.getTodayStr(0));
  //     clsON.SetMemo(this.reason);

  //     //获取角色号ID
  //     clsON.SetIdentityID(this.identityID);

  //     if (clsON.identityId == "0" || IsNullOrEmpty(clsON.identityId) == true)
  //     {
  //         message.warning( "注册用户类型不能为空！");
  //         return;
  //     }

  //     if (clsUsers_IsExist(clsON.UserId) == false)
  //     {
  //         bool i = clsUsers_AddNewRecordBySql2(clsON);
  //         if (i == true)
  //         {
  //             lblMessage.Text = "注册成功！";
  //             message.warning( "注册成功！");
  //             //Response.Redirect("Index.aspx");
  //             // 不会弹出询问
  //         }
  //         else
  //         {
  //             message.warning( "注册失败！");
  //         }
  //     }
  //     else
  //     {
  //         lblMessage.Text = "您申请的用户已被注册！";
  //         message.warning( "您申请的用户已被注册！");
  //     }
  // }

  public btnCancel_Click() {
    refQxUsers_Edit.value.userId = ''; //用户ID
    refQxUsers_Edit.value.userName = ''; //用户名
    refQxUsers_Edit.value.password = ''; //密码
    refQxUsers_Edit.value.reason = '';
    refQxUsers_Edit.value.identityId = '0';
    refQxUsers_Edit.value.idXzCollege = '';
  }

  public ddlId_XzCollege_SelectedIndexChanged() {
    const strId_college = refQxUsers_Edit.value.idXzCollege;
    if (IsNullOrEmpty(strId_college) == false) {
      XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(divVarSet.refDivEdit, '', strId_college);
    }
    //            SetDdl_id_Major();
  }

  public async ArrangeHomeWork(strid_StudentInfo: string) {
    const strDefaId_CurrEduCls = clsSysPara4WebApi.spDefaIdCurrEduCls;
    const userStore = useUserStore();
    await cc_ExamPaperStuRelationEx_ArrangeHomeWork(
      strDefaId_CurrEduCls,
      strid_StudentInfo,
      userStore.getUserId,
    );
    await cc_WorkStuRelationEx_GetHomeWork(strid_StudentInfo);
  }

  public btnReturnIndex_Click() {
    Redirect('Login_TZ.aspx');
  }
  /**
   * 用户ID (Used In Clear())
   **/
  public set reason(value: string) {
    SetTextAreaValueInDivObj(divVarSet.refDivEdit, 'txtReason', value);
  }
  /**
   * 用户ID (Used In PutDataToClass())
   **/
  public get reason(): string {
    const strValue = GetTextAreaValueInDivObj(divVarSet.refDivEdit, 'txtReason');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  public ddlIdXzCollege_SelectedIndexChanged(ddlIdXzCollege: HTMLSelectElement): void {} //
}
