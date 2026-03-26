///// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
///// <reference path="../../scripts/typings/q/q.d.ts" />
///// <reference path="../../scripts/typings/handlebars/handlebars.d.ts" />
//import * as $ from "jquery";
//import * as QQ from "q";
import { clsQxUsersEN } from 'share-gen-plat-base-lib';
import { clsXzClgEN } from 'share-stu-study-base-lib';
import { clsXzMajorEN } from 'share-stu-study-base-lib';
import { clsXzGradeBaseEN } from 'share-stu-study-base-lib';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { QxUsers_UpdateRecordAsync } from 'share-gen-plat-base-lib';
import { XzClg_GetObjLstAsync } from 'share-stu-study-base-lib';
import { XzMajor_GetObjLstAsync } from 'share-stu-study-base-lib';
import { XzGradeBase_GetObjLstAsync } from 'share-stu-study-base-lib';
import {
  Users_GetObjByUserIdAsync,
  Users_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';

import { vUsers_GetFirstObjAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersWApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';

import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
declare function ShowDialog(strOpType: string): void;
declare function HideDialog(): void;
declare const window: any;

/* UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class UserInfo {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return UserInfo.divLayout;
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
    const strThisFuncName = this.PageLoad.name;
    try {
      this.Bind_UserInfo();

      HideDivInDivObj(this.thisDivLayout, 'divLoading');
      const ddl_id_GradeBase = await this.BindDdl_id_GradeBase('ddlid_GradeBase');
      const ddl_id_XzCollege = await this.BindDdl_id_XzCollege('ddlid_XzCollege');
      const ddl_id_XzMajor = await this.BindDdl_id_XzMajor2('ddlid_XzMajor');
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);

      alert(strMsg);
    }
  }

  public async Bind_UserInfo() {
    const strThisFuncName = this.Bind_UserInfo.name;
    try {
      const userStore = useUserStore();
      const strUserId = userStore.userId;
      const strRoleId = userStore.getRoleId;

      if (strUserId != '') {
        $('#hidUserId').val(strUserId);
        //判断角色 教师
        const strWhereCond = "UserID='" + strUserId + "'";

        //const objvUsers: clsvUsersEN;
        const objvUsers = await vUsers_GetFirstObjAsync(strWhereCond);
        if (objvUsers == null) return;
        if (objvUsers.headPic != '') {
          const strheadPic = '/GraduateStudyWebApp/' + objvUsers.headPic;
          $('#headPic').attr('src', strheadPic);
          $('#hidHeadPicUrl').val(objvUsers.headPic);
        }
        $('#lbl_IdentityDesc').html(objvUsers.identityDesc);
        $('#lbl_CollegeName').html(objvUsers.collegeName);
        $('#lbl_MajorName').html(objvUsers.majorName);
        $('#lbl_GradeBaseName').html(objvUsers.gradeBaseName);
        $('#lbl_UserName').html(objvUsers.userName);
        $('#lbl_Email').html(objvUsers.email);
      } else {
        window.top.location.href = '../Web/Index';
      }
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }

  public async selectMajor_Click() {
    try {
      //PrjInfoEN objPrjInfo = clsPrjInfo_GetObjByPrjIDCache(strPrjId);
      const strWhereCond = " idXzCollege='" + this.idXzCollege + "'";
      const ddl_id_XzMajor = await this.BindDdl_id_XzMajor('ddlid_XzMajor', strWhereCond);
    } catch (e) {
      const strMsg: string = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[XzGradeBase]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的DataTable</returns>
  public async BindDdl_id_GradeBase(ddlid_GradeBase: string, strWhereCond: string = '1 =1') {
    const strThisFuncName = this.BindDdl_id_GradeBase.name;
    //const strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlid_GradeBase);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlid_GradeBase} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzGradeBaseObjLst = await XzGradeBase_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlid_GradeBase,
        arrXzGradeBaseObjLst,
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        '年级',
      );
      console.log('完成BindDdl_id_GradeBase!');
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);

      alert(strMsg);
    }
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[XzClg]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的DataTable</returns>
  public async BindDdl_id_XzCollege(ddlid_XzCollege: string, strWhereCond: string = '1 =1') {
    const strThisFuncName = this.BindDdl_id_XzCollege.name;
    //const strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlid_XzCollege);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlid_XzCollege} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzClgObjLst = await XzClg_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlid_XzCollege,
        arrXzClgObjLst,
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        '学院',
      );
      console.log('完成BindDdl_id_XzCollege!');
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);

      alert(strMsg);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[XzMajor]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的DataTable</returns>
  public async BindDdl_id_XzMajor2(ddlid_XzMajor: string) {
    const strThisFuncName = this.BindDdl_id_XzMajor2.name;
    const strWhereCond = ' 1 =1 ';
    const objDdl = document.getElementById(ddlid_XzMajor);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlid_XzMajor} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzMajorObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlid_XzMajor,
        arrXzMajorObjLst,
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        '专业',
      );
      console.log('完成BindDdl_id_XzMajor!');
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);

      alert(strMsg);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[XzMajor]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的DataTable</returns>
  public async BindDdl_id_XzMajor(ddlid_XzMajor: string, strWhereCond: string) {
    const strThisFuncName = this.BindDdl_id_XzMajor.name;
    //const strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlid_XzMajor);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlid_XzMajor} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzMajorObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlid_XzMajor,
        arrXzMajorObjLst,
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        '专业',
      );
      console.log('完成BindDdl_id_XzMajor!');
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);

      alert(strMsg);
    }
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async btnUpdate_Click() {
    this.btnOKUpd = '确认修改';
    this.Clear();

    const strUserId = GetInputValueInDivObj(this.thisDivLayout, 'hidUserId');

    try {
      const objUsersEN = await Users_GetObjByUserIdAsync(strUserId);
      if (objUsersEN == null) return;
      this.GetDataFromUsersClass(objUsersEN);
      console.log('完成UpdateRecord!');
    } catch (e) {
      console.error(e);
      const strMsg: string = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  public Clear() {
    this.idXzCollege = '';
    this.idXzMajor = '';
    this.idGradeBase = '';
    this.email = '';
    this.password = '';
  }

  public GetDataFromUsersClass(pobjUsersEN: clsUsersEN) {
    $('#hidUserId').val(pobjUsersEN.userId); // 登录用户名
    if (pobjUsersEN.headPic != '') {
      const strheadPic = '/GraduateStudyWebApp/' + pobjUsersEN.headPic;
      $('#EditHeadPic').attr('src', strheadPic);
    }

    this.idXzCollege = pobjUsersEN.idXzCollege;
    this.idXzMajor = pobjUsersEN.idXzMajor;
    this.idGradeBase = pobjUsersEN.idGradeBase; // idGradeBase
    this.email = pobjUsersEN.email; // EMail
    this.userName = pobjUsersEN.userName;
    $('#txtUploadHeadPicUrl').val('');
  }

  //提交
  public async btnOKUpd_Click(strListDiv: string) {
    if (this.idXzCollege == '') {
      alert('学院不能为空！');
    } else if (this.idXzMajor == '') {
      alert('专业不能为空！');
    } else if (this.idGradeBase == '') {
      alert('年级不能为空！');
    }
    //else if (this.password == "") {
    //    alert("密码不能为空！");

    //}
    //else if (this.RePassword == "") {
    //    alert("重复密码不能为空！");

    //}
    else {
      if (this.password == this.RePassword) {
        const returnBool = await this.UpdateRecordSave();
        if (returnBool == true) {
          HideDialog();
          this.Bind_UserInfo();
        }
      } else {
        alert('重复密码不一致！');
        //window.location.href = "#pagetwo";
      }
    }
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave(): Promise<boolean> {
    const vQxUsersSimStore = usevQxUsersSimStore();
    const objUsersEN: clsUsersEN = new clsUsersEN();
    const objQxUsersEN = new clsQxUsersEN();
    objUsersEN.userId = GetInputValueInDivObj(this.thisDivLayout, 'hidUserId');
    objQxUsersEN.userId = GetInputValueInDivObj(this.thisDivLayout, 'hidUserId');
    this.PutDataToUsersClass(objUsersEN);
    this.PutDataToUsersClass2(objQxUsersEN);
    objUsersEN.sfUpdFldSetStr = objUsersEN.updFldString; //设置哪些字段被修改(脏字段)
    objQxUsersEN.sfUpdFldSetStr = objQxUsersEN.updFldString;

    try {
      let returnBool = await Users_UpdateRecordAsync(objUsersEN);
      if (returnBool == true) {
        //const strInfo: string = `修改记录成功!`;
        //
        ////显示信息框
        //alert(strInfo);
      } else {
        const strInfo: string = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }

      returnBool = await QxUsers_UpdateRecordAsync(objQxUsersEN);
      if (returnBool == true) {
        HideDivInDivObj(this.thisDivLayout, 'divLoading');
        this.Bind_UserInfo();
        const strInfo: string = `修改记录成功!`;

        //显示信息框
        alert(strInfo);
        //刷新用户缓存
        vQxUsersSimStore.delObj(objQxUsersEN.userId);
      } else {
        const strInfo: string = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      return true;
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjUsersEN">数据传输的目的类对象</param>
   */
  public PutDataToUsersClass(pobjUsersEN: clsUsersEN) {
    pobjUsersEN.idXzCollege = this.idXzCollege; // 学院流水号
    pobjUsersEN.idXzMajor = this.idXzMajor; // 专业流水号
    pobjUsersEN.idGradeBase = this.idGradeBase; // 年级流水号
    pobjUsersEN.email = this.email; // 电子邮箱
    if (this.password != '' && this.RePassword != '') {
      pobjUsersEN.password = this.password; // password
    }
    //else
    //{
    //    alert("密码不能为空！");
    //}
    pobjUsersEN.updDate = this.getNowDateNunber(); // 修改日期
    pobjUsersEN.updUser = GetInputValueInDivObj(this.thisDivLayout, 'hidUserId'); // 修改人
    pobjUsersEN.userName = this.userName; //用户名
    pobjUsersEN.headPic = GetInputValueInDivObj(this.thisDivLayout, 'hidHeadPicUrl'); //头像
  }

  public PutDataToUsersClass2(pobjQxUsersEN: clsQxUsersEN_T) {
    pobjQxUsersEN.idXzCollege = this.idXzCollege; // 学院流水号
    pobjQxUsersEN.email = this.email; // 电子邮箱
    if (this.password != '' && this.RePassword != '') {
      pobjQxUsersEN.password = this.password; // password
    }
    //else {
    //    alert("密码不能为空！");
    //}

    pobjQxUsersEN.updDate = this.getNowDateNunber(); // 修改日期
    pobjQxUsersEN.updUser = GetInputValueInDivObj(this.thisDivLayout, 'hidUserId'); // 修改人
    pobjQxUsersEN.userName = this.userName;
  }

  /*
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = '0' + month;
    }
    if (strDate <= 9) {
      strDate = '0' + strDate;
    }

    return (
      date.getFullYear().toString() +
      '-' +
      month +
      '-' +
      strDate +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds()
    );
  }
  /*
   * 获取年月日数据串
   */
  public getNowDateNunber(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = '0' + month;
    }
    if (strDate <= 9) {
      strDate = '0' + strDate;
    }

    return (
      date.getFullYear().toString() +
      month +
      strDate +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds()
    );
  }

  /*
   * 年级流水号
   */
  public set idGradeBase(value: string) {
    $('#ddlid_GradeBase').val(value);
  }
  /*
   * 年级流水号
   */
  public get idGradeBase(): string {
    return GetSelectValueInDivObj(this.thisDivLayout, 'ddlid_GradeBase');
  }

  /*
   * 学院流水号
   */
  public set idXzCollege(value: string) {
    $('#ddlid_XzCollege').val(value);
  }
  /*
   * 学院流水号
   */
  public get idXzCollege(): string {
    return GetSelectValueInDivObj(this.thisDivLayout, 'ddlid_XzCollege');
  }

  /*
   * 专业流水号
   */
  public set idXzMajor(value: string) {
    $('#ddlid_XzMajor').val(value);
  }
  /*
   * 专业流水号
   */
  public get idXzMajor(): string {
    return GetSelectValueInDivObj(this.thisDivLayout, 'ddlid_XzMajor');
  }

  // /*
  // * 身份编号
  //*/
  // public set identityID(value: string) {
  //     $("#ddlIdentityID").val(value);
  // }
  // /*
  // * 身份编号
  //*/
  // public get identityID(): string {
  //     return $("#ddlIdentityID").val();
  // }

  /*
   * 用户ID
   */
  public set email(value: string) {
    $('#txtEmail').val(value);
  }
  /*
   * 用户ID
   */
  public get email(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtEmail');
  }

  // /*
  // * 用户ID
  //*/
  // public set ReUserId(value: string) {
  //     $("#txtReUserId").val(value);
  // }
  // /*
  // * 用户ID
  //*/
  // public get ReUserId(): string {
  //     return $("#txtReUserId").val();
  // }
  /*
   * 用户名
   */
  public set userName(value: string) {
    $('#txtUserName').val(value);
  }
  /*
   * 用户名
   */
  public get userName(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtUserName');
  }
  /*
   * password
   */
  public set password(value: string) {
    $('#txtPassword').val(value);
  }
  /*
   * password
   */
  public get password(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtPassword');
  }

  /*
   * password
   */
  public set RePassword(value: string) {
    $('#txtRePassword').val(value);
  }
  /*
   * password
   */
  public get RePassword(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtRePassword');
  }

  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
}
