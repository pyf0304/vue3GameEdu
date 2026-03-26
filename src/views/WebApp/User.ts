/*-- -- -- -- -- -- -- -- -- -- --
类名:UsersCRUDEx
表名:Users(00070029)
生成代码版本:2019.08.30.1
生成日期:2019/09/26 01:05:04
生成者:
工程名称:任务管理
工程ID:0007
相关数据库:101.251.68.133,9433TaskManage
PrjDataBaseId:0007
模块中文名:用户管理
模块英文名:UserManage
框架-层名:WA_界面脚本后台Ex_TS(WA_ViewScriptCSEx_TS)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
//import { clsUsersEN } from "@/ts/L0Entity/UserManage/clsUsersEN";
//import { clsUsersWApi } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
//import { clsvUserRoleRelationEN } from "@/ts/L0Entity/UserManage/clsvUserRoleRelationEN";
//import { clsvUserRoleRelationWApi } from '@/ts/L3ForWApi/UserManage/clsvUserRoleRelationWApi';

//import { clsvUserRoleRelationWApi } from '@/ts/L3ForWApi/BaseInfo/clsvUserRoleRelationWApi';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsFeedBackEN } from '@/ts/L0Entity/NewsAnn/clsFeedBackEN';
import { FeedBack_AddNewRecordAsync } from '@/ts/L3ForWApi/NewsAnn/clsFeedBackWApi';
//import { clsFeedBackEN } from "@/ts/L0Entity/MailModule/clsFeedBackEN";
//import { clsFeedBackWApi } from '@/ts/L3ForWApi/MailModule/clsFeedBackWApi';
declare function ShowDialog(strOpType: string): void;
declare function HideDialog(): void;

/* UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class User {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return User.divLayout;
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
      const strUserInfo_Hid = GetInputValueInDivObj(this.thisDivLayout, 'hidUserInfo');
      // let objvUserRoleRelation: clsvQxUserRoleRelationEN;
      // objvUserRoleRelation = stuUserLoginInfo.GetObjByHtmlString2(strUserInfo_Hid);
      // $('#userName').html(
      //   objvUserRoleRelation.userName + '(' + objvUserRoleRelation.roleName + ')',
      // );
      //$('#PrjName').html('当前工程：' + objvUserRoleRelation.PrjName);
      // $('#hidUserId').val(objvUserRoleRelation.userId);
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);

      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnOKUpd;
    try {
      //这是一个单表的插入的代码,由于逻辑层太简单,
      //就把逻辑层合并到控制层,
      const returnBool = await this.AddNewRecordSave();
      if (returnBool == true) {
        //HideDialog();
        //this.BindGv_FeedBack();
        window.location.href = '#pageone';
      }
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSave() {
    //this.DivName = "divAddNewRecordSave";
    const objFeedBackEN: clsFeedBackEN = new clsFeedBackEN();
    this.PutDataToFeedBackClass(objFeedBackEN);
    try {
      const responseText2 = await FeedBack_AddNewRecordAsync(objFeedBackEN);
      const returnBool: boolean = !!responseText2;
      if (returnBool == true) {
        const strInfo: string = `提交成功，您的反馈我们会尽快查阅处理!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `提交不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `提交记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjFeedBackEN">数据传输的目的类对象</param>
   */
  public PutDataToFeedBackClass(pobjFeedBackEN: clsFeedBackEN) {
    pobjFeedBackEN.nickName = this.nickName; // 接收者称谓
    pobjFeedBackEN.email = this.EMail; // EMail
    pobjFeedBackEN.feedBackNumber = this.getNowDateNunber();
    pobjFeedBackEN.telephone = this.telephone; // telephone
    pobjFeedBackEN.feedBackContent = this.feedBackContent; // feedBackContent
    pobjFeedBackEN.updDate = clsPubFun4Web.getNowDate(); // 修改日期
    pobjFeedBackEN.updUser = GetInputValueInDivObj(this.thisDivLayout, 'hidUserId'); // 修改人
  }

  /*
     设置Session    
     <param name = "Key">关键字</param>
     <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'strUrl_Session_SetString',
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key: Key,
          value: value,
        },
        success: function (data) {
          //$('#myValue').val(text);
          const strKey = data.key;
          const strValue = data.value;

          //$('#myKey').html(strKey);
          //$('#myValue').html(strValue);
          console.log(strKey + strValue);
        },
      });
    });
  }

  /*
获取Session 关键字的值
<param name = "Key">关键字</param>
<return>值</return>
*/
  public GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: '/Session/GetString',
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key: Key,
        },
        success: function (data) {
          const strValue = data.value;

          console.log(Key + strValue);
          resolve(data);
        },
        error: (e) => {
          const strErrMsg = decodeURIComponent(e.responseText);
          reject(e);
        },
      });
    });
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
  /*
   * EMail
   */
  public set EMail(value: string) {
    $('#txtEMail').val(value);
  }
  /*
   * EMail
   */
  public get EMail(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtEMail');
  }
  /*
   * feedBackContent
   */
  public set feedBackContent(value: string) {
    $('#txtfeedBackContent').val(value);
  }
  /*
   * feedBackContent
   */
  public get feedBackContent(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtfeedBackContent');
  }

  /*
   * 接收者称谓
   */
  public set nickName(value: string) {
    $('#txtNickName').val(value);
  }
  /*
   * 接收者称谓
   */
  public get nickName(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtNickName');
  }

  /*
   * telephone
   */
  public set telephone(value: string) {
    $('#txtTelephone').val(value);
  }
  /*
   * telephone
   */
  public get telephone(): string {
    return GetInputValueInDivObj(this.thisDivLayout, 'txtTelephone');
  }
}
